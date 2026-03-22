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
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx_YOUR_DUMMY_GAS_ID/exec'; // Replace with real URL later

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

            // Attempt to fetch from Google Apps Script (Requirement 1)
            // Note: In real environment, CORS must be configured on GAS.
            // For now, we simulate fetching, and fallback to localStorage if it fails or returns HTML instead of JSON.
            let rawData = [];

            try {
                // If the URL is just a dummy, this fetch might fail or return CORS error.
                // It's in a try-catch to safely fallback to localStorage.
                const response = await fetch(GOOGLE_SCRIPT_URL, {
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
                console.warn('Network fetch from GAS failed or blocked by CORS. Falling back to localStorage data.', fetchError);
                // Fallback to localStorage for demonstration
                const localData = localStorage.getItem('mindcare_records');
                if (localData) {
                    rawData = JSON.parse(localData);
                }
            }

            currentDashboardData = rawData.map(r => {
                if (!r.timestamp) r.timestamp = new Date(r.date).getTime() + Math.random(); 
                return r;
            });
            renderTable(currentDashboardData);

        } catch (error) {
            console.error("Error loading dashboard data:", error);
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
            // Identify high risk
            const ans = row.answers || {};
            const score = parseInt(row.total) || 0;
            const q3 = parseInt(ans.q3) || 0;
            const q6 = parseInt(ans.q6) || 0;
            const q8 = parseInt(ans.q8) || 0;

            let isHighRiskRow = false;
            let riskLevelText = row.risk || '안정';

            if (score >= 42 || q3 >= 4 || q6 >= 4 || q8 >= 4) {
                isHighRiskRow = true;
                if (riskLevelText !== '고위험') riskLevelText = '고위험';
            }

            // Room Setup Logic
            let roomStr = String(row.room || '').trim();
            let roomType = 'general';
            let wardClass = '';
            let roomDisplay = roomStr || '-';

            // Determine Room Unit and Type
            if (roomStr.startsWith('3')) {
                wardClass = 'ward-male';
                if (['304', '305', '306', '307'].includes(roomStr)) roomType = 'open';
            } else if (roomStr.startsWith('4')) {
                wardClass = 'ward-female';
                if (['405', '406', '407', '408'].includes(roomStr)) roomType = 'open';
            }

            // Apply filter logic
            if (filterValue !== 'all' && filterValue !== roomType) {
                return ''; // Standard map returning empty string for filtered rows
            }

            if (roomType === 'open') {
                roomDisplay += ' <span style="font-size: 0.8rem; background: #e2e8f0; padding: 2px 4px; border-radius: 4px; color: #4a5568;">[공용 PC]</span>';
            }

            const riskStyleAttr = isHighRiskRow ? 'class="high-risk"' : '';

            // Chat View Button Logic
            const chatLogStr = encodeURIComponent(row.chatLog || '');
            const chatBtnHtml = row.chatLog 
                ? `<button class="primary-btn" style="padding: 4px 8px; font-size: 0.8rem; background: #4a5568; border: none; border-radius: 4px; color: white; cursor: pointer;" onclick="viewChatLog('${chatLogStr}')">내용 보기</button>` 
                : '<span style="color: #a0aec0; font-size: 0.85rem;">대화 없음</span>';

            // Columns needed: Room No | Name | Nat | Gender | Date | Booking | Risk | Sat | Chat | Total | Q1-Q10
            return `
                <tr class="${wardClass}">
                    <td style="font-weight: bold;">${roomDisplay}</td>
                    <td>${row.name || '-'}</td>
                    <td>${row.nationality || '-'}</td>
                    <td>${row.gender || '-'}</td>
                    <td>${row.date || '-'}</td>
                    <td>${row.booking || '-'}</td>
                    <td ${riskStyleAttr}>${riskLevelText}</td>
                    <td style="font-size: 1.2rem;">${row.satisfaction || '-'}</td>
                    <td>${chatBtnHtml}</td>
                    <td style="font-weight: bold;" ${riskStyleAttr}>${score}</td>
                    <td>
                        <button onclick="deleteRecord(${row.timestamp})" 
                                style="padding: 4px 8px; font-size: 0.8rem; background: #fff5f5; color: #c53030; border: 1px solid #feb2b2; border-radius: 4px; cursor: pointer;">
                            삭제
                        </button>
                    </td>
                    <td>${ans.q1 || '-'}</td>
                    <td>${ans.q2 || '-'}</td>
                    <td style="${q3 >= 4 ? 'color: red; font-weight: bold;' : ''}">${ans.q3 || '-'}</td>
                    <td>${ans.q4 || '-'}</td>
                    <td>${ans.q5 || '-'}</td>
                    <td style="${q6 >= 4 ? 'color: red; font-weight: bold;' : ''}">${ans.q6 || '-'}</td>
                    <td>${ans.q7 || '-'}</td>
                    <td style="${q8 >= 4 ? 'color: red; font-weight: bold;' : ''}">${ans.q8 || '-'}</td>
                    <td>${ans.q9 || '-'}</td>
                    <td>${ans.q10 || '-'}</td>
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
        // Try getting latest from localStorage or re-parse from DOM. We'll use localStorage to ensure raw data fidelity for now.
        const data = JSON.parse(localStorage.getItem('mindcare_records') || '[]');
        if (data.length === 0) {
            alert("다운로드할 데이터가 없습니다.");
            return;
        }

        let csvContent = "data:text/csv;charset=utf-8,\uFEFF"; // UTF-8 BOM helps excel read Korean properly
        // Header
        csvContent += "날짜,이름,국적,성별,보호실번호,예약요일,위험군,만족도기호,대화내역유무,심리총점,Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9,Q10\n";

        // Rows
        data.forEach(r => {
            const ans = r.answers || {};
            const chatIncluded = r.chatLog ? 'Yes' : 'No';
            // Formatting exact array. Ensure no commas inside values to prevent breaking columns.
            const rowArr = [
                r.date || '',
                (r.name || '').replace(/,/g, ''),
                r.nationality || '',
                r.gender || '',
                r.room || '',
                r.booking || '',
                r.risk || '',
                r.satisfaction || '',
                chatIncluded,
                r.total || 0,
                ans.q1 || '', ans.q2 || '', ans.q3 || '', ans.q4 || '', ans.q5 || '',
                ans.q6 || '', ans.q7 || '', ans.q8 || '', ans.q9 || '', ans.q10 || ''
            ];
            csvContent += rowArr.join(',') + "\n";
        });

        // Trigger Download Anchor
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `mindcare_counselor_data_${new Date().toISOString().split('T')[0]}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

});
