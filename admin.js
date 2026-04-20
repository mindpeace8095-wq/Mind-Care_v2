document.addEventListener('DOMContentLoaded', () => {

    // --- DOM Elements ---
    const adminAuthModal = document.getElementById('admin-auth-modal');
    const adminPasswordInput = document.getElementById('admin-password');
    const verifyAdminBtn = document.getElementById('verify-admin-btn');
    const cancelAdminBtn = document.getElementById('cancel-admin-btn');
    const adminErrorMsg = document.getElementById('admin-error-msg');
    const dashboardContent = document.getElementById('dashboard-content');
    const dashboardTbody = document.getElementById('dashboard-tbody');
    const dashboardFilter = document.getElementById('dashboard-filter');
    const csvDownloadBtn = document.getElementById('csv-download-btn');
    const loadingIndicator = document.getElementById('loading-indicator');
    const tableContainer = document.querySelector('.table-container');
    const resetAllBtn = document.getElementById('reset-all-btn');

    let currentDashboardData = []; // Store data for filtering

    const ADMIN_PASSWORD = '1305';
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx4lpkEAylkMU5Vm3w-SNnW0K25cqWIshm62vZtFMvtb1SkSIbpEYyK7XHmGb_ZRsu4LQ/exec'; // Replace with real URL later

    // 1. Password Protection Logic
    const handleAuth = () => {
        const inputVal = adminPasswordInput.value;
        if (inputVal === ADMIN_PASSWORD) {
            // Success
            adminAuthModal.classList.add('hidden');
            dashboardContent.classList.remove('hidden');
            loadDashboardData();
        } else {
            // Failure
            adminErrorMsg.classList.remove('hidden');
            adminPasswordInput.value = '';
            adminPasswordInput.focus();

            // Redirect to main after a short delay on failure (Requirement 4)
            setTimeout(() => {
                window.location.href = 'main_v2.html?logout=true';
            }, 800);
        }
    };

    verifyAdminBtn.addEventListener('click', handleAuth);

    cancelAdminBtn.addEventListener('click', () => {
        window.location.href = 'main_v2.html?logout=true';
    });

    adminPasswordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleAuth();
    });

    // Auto focus on load
    adminPasswordInput.focus();


    // 2. Data Fetching Logic (Data Collection Center)
    const loadDashboardData = async () => {
        try {
            loadingIndicator.style.display = 'block';
            tableContainer.style.display = 'none';

            let rawData = [];

            try {
                // Fetch from GAS with Cache Busting
                const cacheBustUrl = `${GOOGLE_SCRIPT_URL}${GOOGLE_SCRIPT_URL.includes('?') ? '&' : '?'}t=${new Date().getTime()}`;
                const response = await fetch(cacheBustUrl, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    const json = await response.json();
                    if (json && json.data) {
                        rawData = json.data;
                    }
                } else {
                    throw new Error("GAS response not OK");
                }
            } catch (fetchError) {
                console.warn('Network fetch from GAS failed. Falling back to local storage.', fetchError);
                // Fallback to local storage
                const localData = localStorage.getItem('mindcare_records');
                if (localData) {
                    rawData = JSON.parse(localData);
                }
            }

            // Map data to consistent timestamp format for delete operation mapping
            currentDashboardData = rawData.map(r => {
                if (!r.timestamp) {
                    // Try to generate unique-ish timestamp if missing
                    r.timestamp = r.date ? new Date(r.date).getTime() : new Date().getTime();
                }
                return r;
            });
            renderTable(currentDashboardData);

        } catch (error) {
            console.error("Dashboard load failed:", error);
            loadingIndicator.textContent = "데이터를 불러오는 중 오류가 발생했습니다.";
        } finally {
            loadingIndicator.style.display = 'none';
            tableContainer.style.display = 'block';
        }
    };

    // --- NEW: Security and Deletion Logic ---
    const verifyMasterKey = (successCallback) => {
        const key = prompt("마스터키를 입력해주세요 (Enter Master Key):");
        if (key === ADMIN_PASSWORD) {
            successCallback();
        } else {
            alert("마스터키가 일치하지 않습니다.");
        }
    };

    const deleteRecord = (timestamp) => {
        verifyMasterKey(() => {
            if (!confirm("이 기록을 정말 삭제하시겠습니까?")) return;
            
            // Note: In a real app we'd target an ID. Here we use timestamp as a proxy or just re-match.
            // Since records don't have unique IDs, we'll use findIndex with current data.
            const index = currentDashboardData.findIndex(r => r.timestamp === timestamp);
            if (index > -1) {
                currentDashboardData.splice(index, 1);
                localStorage.setItem('mindcare_records', JSON.stringify(currentDashboardData));
                renderTable(currentDashboardData);
                alert("기록이 삭제되었습니다.");
            }
        });
    };

    const resetAllRecords = () => {
        verifyMasterKey(() => {
            if (!confirm("모든 데이터를 영구적으로 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.")) return;
            
            currentDashboardData = [];
            localStorage.setItem('mindcare_records', JSON.stringify([]));
            renderTable(currentDashboardData);
            alert("전체 데이터가 초기화되었습니다.");
        });
    };

    if (resetAllBtn) {
        resetAllBtn.addEventListener('click', resetAllRecords);
    }

    // Expose deleteRecord to global scope for onclick handlers
    window.deleteRecord = deleteRecord;

    // View Chat Modal Logic (Dynamic Modal Injection)
    window.viewChatLog = (encodedChat) => {
        const decoded = decodeURIComponent(encodedChat);
        let modal = document.getElementById('chat-log-modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'chat-log-modal';
            modal.className = 'modal';
            modal.innerHTML = `
                <div class="modal-content glass-panel" style="max-width: 500px; max-height: 80vh; overflow-y: auto; text-align: left;">
                    <h3 style="margin-bottom: 15px;">마음이 대화 전문</h3>
                    <div id="chat-log-content" style="background: #f7fafc; padding: 15px; border-radius: 8px; font-size: 0.95rem; white-space: pre-wrap; line-height: 1.5;"></div>
                    <button class="primary-btn" style="margin-top: 15px; width: 100%;" onclick="document.getElementById('chat-log-modal').classList.add('hidden');">닫기</button>
                </div>
            `;
            document.body.appendChild(modal);
        }
        document.getElementById('chat-log-content').textContent = decoded;
        modal.classList.remove('hidden');
    };

    // 3. Render Real-time Table (Requirement 2 & Dashboard Phase 2)
    const renderTable = (data) => {
        if (!data || data.length === 0) {
            dashboardTbody.innerHTML = `<tr><td colspan="19" style="text-align:center; padding: 20px;">수집된 데이터가 없습니다.</td></tr>`;
            return;
        }

        const filterValue = dashboardFilter ? dashboardFilter.value : 'all';

        const rowsHtml = data.map(row => {
            // Columns mapping from GAS / Unified Record
            const roomVal = row.roomNumber || row.room || '-';
            const score = parseInt(row.totalScore) || parseInt(row.total) || 0;
            const q3 = parseInt(row.q3) || 0;
            const q6 = parseInt(row.q6) || 0;
            const q8 = parseInt(row.q8) || 0;

            let isHighRiskRow = false;
            let riskLevelText = row.riskLevel || row.risk || '안정';

            if (score >= 42 || q3 >= 4 || q6 >= 4 || q8 >= 4) {
                isHighRiskRow = true;
                if (!riskLevelText.includes('고위험')) riskLevelText = '고위험' + (riskLevelText === '안정' ? '' : ` (${riskLevelText})`);
            }

            // Room Setup logic
            let roomStr = String(roomVal).trim();
            let roomType = 'general';
            let wardClass = '';
            let roomDisplay = roomStr;

            if (roomStr.startsWith('3')) {
                wardClass = 'ward-male';
                if (['304', '305', '306', '307'].includes(roomStr)) roomType = 'open';
            } else if (roomStr.startsWith('4')) {
                wardClass = 'ward-female';
                if (['405', '406', '407', '408'].includes(roomStr)) roomType = 'open';
            }

            if (filterValue !== 'all' && filterValue !== roomType) return '';

            if (roomType === 'open') {
                roomDisplay += ' <span style="font-size: 0.8rem; background: #e2e8f0; padding: 2px 4px; border-radius: 4px; color: #4a5568;">[공용 PC]</span>';
            }

            const riskStyleAttr = isHighRiskRow ? 'class="high-risk"' : '';
            const chatLogStr = encodeURIComponent(row.chatLog || row.chatSummary || ''); // Priority to chatLog
            const hasChat = (row.chatLog || row.chatSummary);

            const chatBtnHtml = hasChat 
                ? `<button class="primary-btn" style="padding: 4px 8px; font-size: 0.8rem; background: #4a5568; border: none; border-radius: 4px; color: white; cursor: pointer;" onclick="viewChatLog('${chatLogStr}')">내용 보기</button>` 
                : '<span style="color: #a0aec0; font-size: 0.85rem;">대화 없음</span>';

            return `
                <tr class="${wardClass}">
                    <td style="font-weight: bold;">${roomDisplay}</td>
                    <td>${row.name || '-'}</td>
                    <td>${row.country || row.nationality || '-'}</td>
                    <td>${row.gender || '-'}</td>
                    <td>${row.date ? new Date(row.date).toLocaleDateString() : '-'}</td>
                    <td>${row.reservationDate || row.booking || '-'}</td>
                    <td ${riskStyleAttr}>${riskLevelText}</td>
                    <td style="font-size: 1.2rem;">${row.satisfaction || '-'}</td>
                    <td>${chatBtnHtml}</td>
                    <td style="font-weight: bold;" ${riskStyleAttr}>${score}</td>
                    <td>${row.q1 || '-'}</td>
                    <td>${row.q2 || '-'}</td>
                    <td style="${q3 >= 4 ? 'color: red; font-weight: bold;' : ''}">${row.q3 || '-'}</td>
                    <td>${row.q4 || '-'}</td>
                    <td>${row.q5 || '-'}</td>
                    <td style="${q6 >= 4 ? 'color: red; font-weight: bold;' : ''}">${row.q6 || '-'}</td>
                    <td>${row.q7 || '-'}</td>
                    <td style="${q8 >= 4 ? 'color: red; font-weight: bold;' : ''}">${row.q8 || '-'}</td>
                    <td>${row.q9 || '-'}</td>
                    <td>${row.q10 || '-'}</td>
                    <td>
                        <button onclick="deleteRecord(${row.timestamp})" 
                                style="padding: 4px 8px; font-size: 0.8rem; background: #fff5f5; color: #c53030; border: 1px solid #feb2b2; border-radius: 4px; cursor: pointer;">
                            삭제
                        </button>
                    </td>
                </tr>
            `;
        }).join('');

        dashboardTbody.innerHTML = rowsHtml || `<tr><td colspan="19" style="text-align:center; padding: 20px;">필터 조건에 맞는 데이터가 없습니다.</td></tr>`;
    };

    if (dashboardFilter) {
        dashboardFilter.addEventListener('change', () => {
            renderTable(currentDashboardData);
        });
    }

    // 4. CSV Export Logic (Requirement 3)
    csvDownloadBtn.addEventListener('click', () => {
        if (currentDashboardData.length === 0) {
            alert("다운로드할 데이터가 없습니다.");
            return;
        }

        let csvContent = "data:text/csv;charset=utf-8,\uFEFF"; // UTF-8 BOM
        csvContent += "날짜,이름,국적,성별,보호실번호,예약일,위험군,만족도(UX),대화내용,총점,Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9,Q10\n";

        currentDashboardData.forEach(r => {
            const chatIncluded = (r.chatLog || r.chatSummary) ? 'Yes' : 'No';
            const rowArr = [
                r.date || '',
                (r.name || '').replace(/,/g, ''),
                r.country || r.nationality || '',
                r.gender || '',
                r.roomNumber || r.room || '',
                r.reservationDate || r.booking || '',
                r.riskLevel || r.risk || '',
                r.satisfaction || '',
                chatIncluded,
                r.totalScore || r.total || 0,
                r.q1 || '', r.q2 || '', r.q3 || '', r.q4 || '', r.q5 || '',
                r.q6 || '', r.q7 || '', r.q8 || '', r.q9 || '', r.q10 || ''
            ];
            csvContent += rowArr.join(',') + "\n";
        });

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `mindcare_full_data_${new Date().toISOString().split('T')[0]}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

});
