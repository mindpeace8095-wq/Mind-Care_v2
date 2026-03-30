// Multilingual Dictionary
const translations = {
    ko: {
        title: "Mind Care", subtitle: "당신의 마음을 돌보는 공간",
        nameLabel: "이름", namePlaceholder: "이름을 입력하세요",
        natLabel: "국적", natPlaceholder: "국적을 선택해주세요",
        natChina: "중국", natRussia: "러시아", natThailand: "태국", natVietnam: "베트남",
        natUzbekistan: "우즈베키스탄", natKazakhstan: "카자흐스탄", natPhilippines: "필리핀", natOther: "기타",
        consentTitle: "이용 동의",
        consent1: "본 데이터는 익명 처리되어 서비스 개선 및 학술 연구(IRB) 목적으로만 사용됩니다.",
        consent2: "수집 정보는 암호화되며, 본인 동의 없이 외부에 공유되지 않습니다.",
        consent3: "동의 여부와 상관없이 서비스 이용이 가능하며 설정에서 언제든 철회할 수 있습니다.",
        confirmBtn: "확인",
        adminTitle: "관리자 페이지 진입", adminSummary: "관리자 비밀번호를 입력해주세요.",
        adminCancel: "취소", adminConfirm: "확인",
        adminError: "비밀번호가 일치하지 않습니다.", adminPlaceholder: "비밀번호 입력",
        consentError: "모든 필수 항목에 동의해주세요.",
        screeningTitle: "SCREENING",
        screeningSubtitle: "지난 2주간 당신의 상태를 솔직하게 응답해 주세요. 1점 '전혀 그렇지 않다', 2점 '그렇지 않다', 3점 '보통이다', 4점 '그렇다', 5점 '매우 그렇다'까지 중 하나를 골라주세요.",
        finishBtn: "제출하기",
        scale: ["1. 전혀 그렇지 않다", "2. 그렇지 않다", "3. 보통이다", "4. 그렇다", "5. 매우 그렇다"],
        questions: [
            "지난 2주간, 일상생활에서 흥미나 즐거움을 느끼기 어려웠나요?",
            "최근 사소한 일에도 걱정이 많아지고 마음이 불안했나요?",
            "예민해져서 타인에게 화를 내거나 공격적으로 행동한 적이 있나요?",
            "밤에 잠들기 어렵거나 자꾸 깨서 피곤함을 느꼈나요?",
            "평소보다 에너지가 너무 넘쳐 행동이 빨라지거나 말이 많아졌나요?",
            "실제로는 없는 소리가 들리거나 누군가 지켜보는 듯한 느낌을 받았나요?",
            "과거의 고통스러운 기억이 갑자기 떠올라 괴로웠나요?",
            "삶의 의욕이 사라지거나 자신을 해치고 싶다는 생각이 들었나요?",
            "음주 횟수나 양을 스스로 조절하기가 힘들었나요?",
            "씻거나 식사하는 등 스스로를 돌보는 일이 귀찮거나 힘들었나요?"
        ],
        resultTitle: "결과 제출 완료", resultDesc: "평가가 성공적으로 제출되었습니다.",
        bookBtn: "상담 예약하기", talkBtn: "마음이와 대화하기",
        bookingTitle: "상담 예약 (오후 2시)", bookingDesc: "상담을 원하는 요일을 선택해주세요.",
        closeBtn: "닫기", bookedToast: "예약되었습니다.",
        mon: "월요일", tue: "화요일", thu: "목요일", fri: "금요일", at2pm: "오후 2:00",
        wardSelectLabel: "보호실 선택", maleWard: "남자보호실", femaleWard: "여자보호실",
        roomSetupTitle: "기기 위치 설정", roomNumberLabel: "보호실 번호",
        resultGood: "마음의 날씨가 맑음이네요! 스스로를 잘 돌보고 있는 당신이 자랑스러워요. 오늘도 평온한 하루 되세요.",
        resultCaution: "조금 지친 마음이 느껴져요. 누구나 그럴 때가 있답니다. 당신은 혼자가 아니에요. 마음이가 응원할게요.",
        resultDanger: "요즘 마음이 많이 무거우시죠. 그 어려움에 깊이 공감합니다. 아래 <b>[심리안정 기법]</b>을 따라하며 잠시 숨을 고르시고, 필요하다면 <b>[상담 예약]</b>을 통해 이야기를 들려주세요.",
        resultHighRisk: "지금 느끼는 고통이 매우 깊어 보여 제 마음도 아픕니다. 이 짐을 혼자 짊어지지 마세요. 지금 바로 [심리상담사 도움 요청(HELP)] 버튼을 눌러주세요. 우리가 당신 곁에 있습니다.",
        helpBtnText: "심리상담사 도움 요청 (HELP)",
        techAnxietyTitle: "나비 포옹법",
        techAnxietyDesc: "양팔을 교차해 어깨를 톡톡 두드리기.",
        techAggressionTitle: "근육 이완법",
        techAggressionDesc: "주먹을 5초간 꽉 쥐었다가 한 번에 펴기.",
        techDepressionTitle: "5-4-3-2-1 감각 기법",
        techDepressionDesc: "주변의 사물과 소리에 집중하기.",
        techInsomniaTitle: "해파리 수면법",
        techInsomniaDesc: "온몸의 힘을 빼고 축 늘어뜨리기.",
        techCommonTitle: "4-7-8 호흡법",
        techCommonDesc: "코로 들이마시고(4초), 참고(7초), 내뱉기(8초).",
        feedbackTitle: "오늘 마음 돌봄이 도움이 되었나요?",
        feedbackThanks: "평가해주셔서 감사합니다. 당신의 소중한 의견이 더 나은 마인드 케어를 만듭니다.",
        feedbackAnon: "이 평가는 익명으로 처리되며 오직 서비스 개선을 위해서만 사용됩니다.",
        videoPhrase: "마음이 많이 힘드셨죠? 당신의 잘못이 아닙니다. 이 영상을 따라 하며 잠시 숨을 고르고 마음을 다독여 보세요. 우리가 함께하겠습니다.",
        guideGroupATitle: "5-4-3-2-1 감각 기법",
        guideGroupADesc: "<strong style='color: #2c3e50;'>순서:</strong> ①보이는 것 5가지, ②만져지는 것 4가지, ③들리는 소리 3가지, ④냄새 2가지, ⑤맛 1가지에 차례로 집중합니다.<br><br><strong style='color: #2c3e50;'>효과:</strong> 과도한 불안이나 공황이 올 때, 생각을 '현재'의 오감으로 돌려 뇌의 편도체를 안정시키고 즉각적인 진정 효과를 줍니다.",
        guideGroupBTitle: "나비포옹법 및 근육 이완법",
        guideGroupBDesc: "<strong style='color: #2c3e50;'>순서:</strong> 양팔을 가슴 위에서 X자로 교차해 어깨나 팔뚝을 나비가 날갯짓하듯 10~15번 토닥이며 천천히 심호흡합니다.<br><br><strong style='color: #2c3e50;'>효과:</strong> 스스로를 다독이는 동작을 통해 트라우마나 스트레스 상황에서 신체적 긴장을 완화하고 정서적 안정감을 회복시켜 줍니다."
    },
    en: {
        title: "Mind Care", subtitle: "A Space to Care for Your Mind",
        nameLabel: "Name", namePlaceholder: "Enter your name",
        natLabel: "Nationality", natPlaceholder: "Select your nationality",
        natChina: "China", natRussia: "Russia", natThailand: "Thailand", natVietnam: "Vietnam",
        natUzbekistan: "Uzbekistan", natKazakhstan: "Kazakhstan", natPhilippines: "Philippines", natOther: "Other",
        consentTitle: "Terms of Use & Consent",
        consent1: "This data will be anonymized and used only for service improvement and academic research (IRB) purposes.",
        consent2: "Collected information is encrypted and will not be shared externally without your consent.",
        consent3: "You can use the service regardless of your consent, and you can withdraw it at any time in settings.",
        confirmBtn: "Confirm",
        adminTitle: "Admin Access", adminSummary: "Enter admin password.",
        adminCancel: "Cancel", adminConfirm: "Confirm",
        adminError: "Invalid password.", adminPlaceholder: "Enter password",
        consentError: "Please agree to all required terms.",
        screeningTitle: "SCREENING",
        screeningSubtitle: "Please answer honestly about your status over the last 2 weeks. Please choose one from 1 'Strongly Disagree', 2 'Disagree', 3 'Neutral', 4 'Agree' to 5 'Strongly Agree'.",
        finishBtn: "Submit",
        scale: ["1. Strongly Disagree", "2. Disagree", "3. Neutral", "4. Agree", "5. Strongly Agree"],
        questions: [
            "In the past 2 weeks, have you had little interest or pleasure in doing things?",
            "Have you felt anxious or found it hard to stop worrying?",
            "Have you felt irritable and acted aggressively toward others?",
            "Have you had trouble falling asleep or waking up repeatedly?",
            "Have you felt an unusually high energy level or rapid thoughts/speech?",
            "Have you heard sounds not heard by others or felt like you are being watched?",
            "Have you been distressed by intrusive, painful past memories?",
            "Have you had thoughts of not wanting to live or harming yourself?",
            "Have you found it difficult to control the amount or frequency of your drinking?",
            "Have you felt it difficult or bothersome to take care of daily self-care like washing or eating?"
        ],
        resultTitle: "Submission Complete", resultDesc: "Assessment submitted successfully.",
        bookBtn: "Book Consultation", talkBtn: "Talk to Maeum-i",
        bookingTitle: "Book Consultation", bookingDesc: "Please select a day for consultation.",
        closeBtn: "Close", bookedToast: "Successfully booked.",
        mon: "Monday", tue: "Tuesday", thu: "Thursday", fri: "Friday", at2pm: "2:00 PM",
        wardSelectLabel: "Select Room", maleWard: "Male Room", femaleWard: "Female Room",
        roomSetupTitle: "Device Location Setup", roomNumberLabel: "Room Number",
        resultGood: "Your mind's weather is clear! I'm proud of you for taking good care of yourself. Have a peaceful day today.",
        resultCaution: "I can feel that your mind is a bit exhausted. Everyone goes through that sometimes. You are not alone. Maeum-i will cheer you on.",
        resultDanger: "Your heart feels very heavy lately, right? I deeply empathize with that difficulty. Please take a moment to breathe by following the <b>[Psychological Stability Technique]</b> below, and if you need to, please share your story through <b>[Book Consultation]</b>.",
        resultHighRisk: "The pain you're feeling right now seems very deep, and my heart hurts too. Please don't carry this burden alone. Click the [Request Help from Counselor (HELP)] button right away. We are here beside you.",
        helpBtnText: "Request Help from Counselor (HELP)",
        techAnxietyTitle: "Butterfly Hug",
        techAnxietyDesc: "Cross your arms and gently tap your shoulders.",
        techAggressionTitle: "Muscle Relaxation",
        techAggressionDesc: "Clench your fists for 5 seconds, then release them at once.",
        techDepressionTitle: "5-4-3-2-1 Grounding",
        techDepressionDesc: "Focus on the objects and sounds around you.",
        techInsomniaTitle: "Jellyfish Sleep Method",
        techInsomniaDesc: "Relax all the tension in your body completely.",
        techCommonTitle: "4-7-8 Breathing",
        techCommonDesc: "Inhale through nose (4s), hold (7s), exhale through mouth (8s).",
        feedbackTitle: "Was today's mind care helpful?",
        feedbackThanks: "Thank you for your feedback. Your valuable opinion helps create better mind care.",
        feedbackAnon: "This evaluation is processed anonymously and is used only for service improvement.",
        videoPhrase: "It must have been so hard for you. It's not your fault. Follow along with this video to take a breath and comfort your mind. We are here with you.",
        guideGroupATitle: "5-4-3-2-1 Grounding Technique",
        guideGroupADesc: "<strong style='color: #2c3e50;'>Steps:</strong> Focus on 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, and 1 you can taste.<br><br><strong style='color: #2c3e50;'>Effect:</strong> Brings your thoughts to the present moment during high anxiety or panic, calming the brain's amygdala.",
        guideGroupBTitle: "Butterfly Hug & Muscle Relaxation",
        guideGroupBDesc: "<strong style='color: #2c3e50;'>Steps:</strong> Cross your arms over your chest and slowly tap your shoulders like a butterfly flapping its wings 10-15 times while taking deep breaths.<br><br><strong style='color: #2c3e50;'>Effect:</strong> Helps release physical tension and restores emotional stability during trauma or stress."
    },
    zh: {
        title: "Mind Care", subtitle: "照顾您心灵的空间",
        nameLabel: "姓名", namePlaceholder: "请输入您的姓名",
        natLabel: "国籍", natPlaceholder: "请选择国籍",
        natChina: "中国", natRussia: "俄罗斯", natThailand: "泰国", natVietnam: "越南",
        natUzbekistan: "乌兹别克斯坦", natKazakhstan: "哈萨克斯坦", natPhilippines: "菲律宾", natOther: "其他",
        consentTitle: "使用同意",
        consent1: "此数据将被匿名化，仅用于服务改进和学术研究（IRB）目的。",
        consent2: "收集的信息已加密，未经您的同意不会与外部共享。",
        consent3: "无论您是否同意，都可以使用该服务，并可随时在设置中撤回。",
        confirmBtn: "确认",
        adminTitle: "管理员登录", adminSummary: "请输入管理员密码。",
        adminCancel: "取消", adminConfirm: "确认",
        adminError: "密码错误。", adminPlaceholder: "输入密码",
        consentError: "请同意所有必填项。",
        screeningTitle: "SCREENING",
        screeningSubtitle: "在过去的两周里，请诚实地回答您的情况。请从1‘完全不同意’、2‘不同意’、3‘一般’、4‘同意’到5‘完全同意’中选择一个。",
        finishBtn: "提交",
        scale: ["1. 完全不同意", "2. 不同意", "3. 一般", "4. 同意", "5. 完全同意"],
        questions: [
            "在过去两周里，您在日常生活中是否很难感到兴趣或快乐？",
            "最近您是否因琐事感到担忧和焦虑？",
            "您是否感到烦躁，对他人发脾气或表现出攻击性？",
            "您是否很难入睡，或者经常醒来感到疲倦？",
            "您是否感到精力异常充沛，动作变快或话变多？",
            "您是否听到别人听不到的声音，或者感觉有人在监视您？",
            "您是否因突然想起过去痛苦的回忆而感到痛苦？",
            "您是否失去了生活的欲望，或者有伤害自己的想法？",
            "您是否发现很难控制自己的饮酒频率或饮酒量？",
            "您是否觉得洗澡或吃饭等照顾自己日常起居的事情很麻烦或困难？"
        ],
        resultTitle: "提交完成", resultDesc: "评估已成功提交。",
        bookBtn: "预约咨询", talkBtn: "与Maeum-i交谈",
        bookingTitle: "预约咨询", bookingDesc: "请选择咨询的日期。",
        closeBtn: "关闭", bookedToast: "预约成功。",
        mon: "星期一", tue: "星期二", thu: "星期四", fri: "星期五", at2pm: "下午 2:00",
        wardSelectLabel: "选择房间", maleWard: "男病房", femaleWard: "女病房",
        roomSetupTitle: "设备位置设置", roomNumberLabel: "房间号",
        resultGood: "您内心的天气很晴朗！很高兴看到您如此关爱自己。祝您今天也有个平静的一天。",
        resultCaution: "我能感觉到您有些疲惫。每个人都有这样的时刻。您并不孤单，Maeum-i 会为您加油的。",
        resultDanger: "最近您的心境一定很沉重吧。我深深理解您的困难。请跟着下方的 <b>[心理稳定技巧]</b> 稍微调整呼吸，如果需要，请通过 <b>[预约咨询]</b> 告诉我们您的故事。",
        resultHighRisk: "您现在的痛苦似乎非常深，这也让我的心很痛。不要一个人承担这个重担。请立即按下 [向心理咨询师求助(HELP)] 按钮。我们就在您身边。",
        helpBtnText: "向心理咨询师求助 (HELP)",
        techAnxietyTitle: "蝴蝶拥抱法",
        techAnxietyDesc: "交叉双臂，轻轻拍打肩膀。",
        techAggressionTitle: "肌肉放松法",
        techAggressionDesc: "紧握拳头5秒钟，然后立刻松开。",
        techDepressionTitle: "5-4-3-2-1 着陆法",
        techDepressionDesc: "专注于周围的事物和声音。",
        techInsomniaTitle: "水母睡眠法",
        techInsomniaDesc: "全身放松，放下所有紧张感。",
        techCommonTitle: "4-7-8 呼吸法",
        techCommonDesc: "用鼻子吸气(4秒)，屏住呼吸(7秒)，然后呼气(8秒)。",
        feedbackTitle: "今天的心理呵护对您有帮助吗？",
        feedbackThanks: "感谢您的评价。您的宝贵意见将帮助我们提供更好的心理呵护。",
        feedbackAnon: "此评估以匿名方式处理，仅用于改善服务。",
        videoPhrase: "您一定在心里承受了很多吧？这不是您的错。跟着这段视频，深呼吸，安抚一下您的心。我们会一直在这陪着您。",
        guideGroupATitle: "5-4-3-2-1 感官着陆法",
        guideGroupADesc: "<strong style='color: #2c3e50;'>步骤:</strong> 专注于你看到的5件事物，摸到的4件事物，听到的3种声音，闻到的2种气味，和尝到的1种味道。<br><br><strong style='color: #2c3e50;'>效果:</strong> 在过度焦虑或恐慌时，将思绪带回'当下'的五官感觉，起到即时镇定作用。",
        guideGroupBTitle: "蝴蝶拥抱与肌肉放松法",
        guideGroupBDesc: "<strong style='color: #2c3e50;'>步骤:</strong> 将双臂交叉放在胸前，像蝴蝶拍打翅膀一样轻轻拍打肩膀10-15次，同时深呼吸。<br><br><strong style='color: #2c3e50;'>效果:</strong> 缓解创伤或压力环境下的身体紧张，恢复情绪稳定。"
    },
    vi: {
        title: "Mind Care", subtitle: "Không gian chăm sóc tâm trí bạn",
        nameLabel: "Tên", namePlaceholder: "Nhập tên của bạn",
        natLabel: "Quốc tịch", natPlaceholder: "Chọn quốc tịch",
        natChina: "Trung Quốc", natRussia: "Nga", natThailand: "Thái Lan", natVietnam: "Việt Nam",
        natUzbekistan: "Uzbekistan", natKazakhstan: "Kazakhstan", natPhilippines: "Philippines", natOther: "Khác",
        consentTitle: "Đồng ý sử dụng",
        consent1: "Dữ liệu này sẽ ẩn danh và chỉ được dùng cho mục đích cải thiện dịch vụ và nghiên cứu.",
        consent2: "Thông tin thu thập được mã hóa và không chia sẻ ra ngoài khi chưa có sự đồng ý của bạn.",
        consent3: "Bạn có thể sử dụng dịch vụ bất kể có đồng ý hay không và có thể rút lại trong cài đặt.",
        confirmBtn: "Xác nhận",
        adminTitle: "Truy cập quản trị", adminSummary: "Nhập mật khẩu quản trị viên.",
        adminCancel: "Hủy", adminConfirm: "Xác nhận",
        adminError: "Mật khẩu không hợp lệ.", adminPlaceholder: "Nhập mật khẩu",
        consentError: "Vui lòng đồng ý với tất cả các điều khoản.",
        screeningTitle: "SCREENING",
        screeningSubtitle: "Trong 2 tuần qua, hãy trả lời trung thực về tình trạng của bạn. Vui lòng chọn một trong các mức từ 1 'Hoàn toàn không', 2 'Không', 3 'Bình thường', 4 'Đồng ý' đến 5 'Hoàn toàn đồng ý'.",
        finishBtn: "Gửi đi",
        scale: ["1. Hoàn toàn không", "2. Không", "3. Bình thường", "4. Đồng ý", "5. Hoàn toàn đồng ý"],
        questions: [
            "Trong 2 tuần qua, bạn có cảm thấy ít hứng thú hoặc niềm vui trong cuộc sống hàng ngày không?",
            "Gần đây bạn có hay lo lắng về những chuyện nhỏ nhặt và cảm thấy bất an không?",
            "Bạn có cảm thấy cáu gắt, tức giận hoặc hành động hung hăng với người khác không?",
            "Bạn có khó ngủ hoặc hay thức giấc và cảm thấy mệt mỏi không?",
            "Bạn có cảm thấy tràn đầy năng lượng hơn bình thường, hành động nhanh hơn hoặc nói nhiều hơn không?",
            "Bạn có nghe thấy những âm thanh không có thực hoặc cảm thấy như có ai đó đang theo dõi mình không?",
            "Bạn có thấy đau khổ vì những ký ức đau buồn trong quá khứ bất chợt ùa về không?",
            "Bạn có mất đi khao khát sống hoặc có ý nghĩ làm hại bản thân không?",
            "Bạn có thấy khó kiểm soát số lần hoặc lượng rượu mình uống không?",
            "Bạn có cảm thấy phiền phức hoặc khó khăn trong việc tự chăm sóc bản thân như tắm rửa hay ăn uống không?"
        ],
        resultTitle: "Nộp thành công", resultDesc: "Đánh giá đã được nộp thành công.",
        bookBtn: "Đặt lịch tư vấn", talkBtn: "Trò chuyện với Maeum-i",
        bookingTitle: "Đặt lịch tư vấn", bookingDesc: "Vui lòng chọn ngày tư vấn.",
        closeBtn: "Đóng", bookedToast: "Đã đặt lịch thành công.",
        mon: "Thứ Hai", tue: "Thứ Ba", thu: "Thứ Năm", fri: "Thứ Sáu", at2pm: "2:00 Chiều",
        wardSelectLabel: "Chọn phòng", maleWard: "Phòng Nam", femaleWard: "Phòng Nữ",
        roomSetupTitle: "Thiết lập vị trí thiết bị", roomNumberLabel: "Số phòng",
        resultGood: "Thời tiết trong tâm trí bạn thật trong xanh! Tôi rất tự hào vì bạn đã chăm sóc tốt cho bản thân. Chúc bạn một ngày bình yên.",
        resultCaution: "Tôi cảm thấy bạn đang hơi kiệt sức. Ai cũng có lúc như vậy. Bạn không cô đơn đâu. Maeum-i sẽ luôn cổ vũ bạn.",
        resultDanger: "Dạo này lòng bạn đang rất nặng nề phải không. Tôi vô cùng đồng cảm với khó khăn đó. Hãy làm theo <b>[Kỹ thuật Ổn định Tâm lý]</b> dưới đây để tĩnh tâm lại, và nếu cần, hãy chia sẻ câu chuyện của bạn qua nút <b>[Đặt lịch Tư vấn]</b>.",
        resultHighRisk: "Nỗi đau bạn đang cảm nhận dường như quá sâu sắc khiến lòng tôi cũng đau nhói. Đừng gánh vác điều này một mình. Hãy nhấn ngay nút [Yêu cầu Chuyên gia tư vấn (HELP)]. Chúng tôi luôn ở bên bạn.",
        helpBtnText: "Yêu cầu Chuyên gia tư vấn (HELP)",
        techAnxietyTitle: "Cái ôm bươm bướm",
        techAnxietyDesc: "Khoanh tay và vỗ nhẹ lên vai.",
        techAggressionTitle: "Thư giãn cơ bắp",
        techAggressionDesc: "Nắm chặt nắm đấm trong 5 giây, sau đó buông lỏng hoàn toàn.",
        techDepressionTitle: "Kỹ thuật 5-4-3-2-1",
        techDepressionDesc: "Tập trung vào các đồ vật và âm thanh xung quanh bạn.",
        techInsomniaTitle: "Phương pháp ngủ sứa",
        techInsomniaDesc: "Thả lỏng toàn bộ cơ thể và thư giãn tối đa.",
        techCommonTitle: "Phương pháp thở 4-7-8",
        techCommonDesc: "Hít vào bằng mũi (4s), nín thở (7s), thở ra bằng miệng (8s).",
        feedbackTitle: "Màn chăm sóc tâm trí hôm nay có giúp ích cho bạn không?",
        feedbackThanks: "Cảm ơn bạn đã đánh giá. Ý kiến quý báu của bạn sẽ giúp tạo ra dịch vụ chăm sóc tâm trí tốt hơn.",
        feedbackAnon: "Đánh giá này được xử lý ẩn danh và chỉ được sử dụng để cải thiện dịch vụ.",
        videoPhrase: "Hẳn là bạn đã rất khó khăn. Đó không phải là lỗi của bạn. Hãy theo dõi video này để thở sâu và tự xoa dịu tâm trí. Chúng tôi sẽ luôn đồng hành cùng bạn.",
        guideGroupATitle: "Kỹ thuật Giác quan 5-4-3-2-1",
        guideGroupADesc: "<strong style='color: #2c3e50;'>Các bước:</strong> Tập trung vào 5 thứ bạn thấy, 4 thứ bạn có thể chạm, 3 âm thanh bạn nghe, 2 mùi hương bạn ngửi, và 1 thứ bạn nếm.<br><br><strong style='color: #2c3e50;'>Tác dụng:</strong> Giúp làm dịu và chuyển suy nghĩ về hiện tại khi quá lo lắng hoặc hoảng loạn.",
        guideGroupBTitle: "Cái ôm con bướm & Thư giãn cơ",
        guideGroupBDesc: "<strong style='color: #2c3e50;'>Các bước:</strong> Bắt chéo tay trước ngực, vỗ nhẹ vào vai giống như bướm đập cánh 10-15 lần và hít thở sâu.<br><br><strong style='color: #2c3e50;'>Tác dụng:</strong> Giúp làm dịu căng thẳng thể chất và phục hồi sự ổn định cảm xúc."
    },
    ar: {
        title: "Mind Care", subtitle: "مساحة للاهتمام بعقلك",
        nameLabel: "الاسم", namePlaceholder: "أدخل اسمك",
        natLabel: "الجنسية", natPlaceholder: "اختر جنسيتك",
        natChina: "الصين", natRussia: "روسيا", natThailand: "تايلاند", natVietnam: "فيتنام",
        natUzbekistan: "أوزبكستان", natKazakhstan: "كازاخستان", natPhilippines: "الفلبين", natOther: "أخرى",
        consentTitle: "الموافقة على الاستخدام",
        consent1: "سيتم إخفاء هوية هذه البيانات واستخدامها فقط لأغراض تحسين الخدمة والبحث الأكاديمي (IRB).",
        consent2: "يتم تشفير المعلومات التي تم جمعها ولن تتم مشاركتها دون موافقتك.",
        consent3: "يمكنك استخدام الخدمة بغض النظر عن موافقتك، وسحبها في أي وقت.",
        confirmBtn: "تأكيد",
        adminTitle: "دخول المسؤول", adminSummary: "أدخل كلمة مرور المسؤول.",
        adminCancel: "إلغاء", adminConfirm: "تأكيد",
        adminError: "كلمة المرور غير صالحة.", adminPlaceholder: "أدخل كلمة المرور",
        consentError: "يرجى الموافقة على جميع الشروط.",
        screeningTitle: "SCREENING",
        screeningSubtitle: "خلال الأسبوعين الماضيين، يرجى الإجابة بصدق عن حالتك. يرجى اختيار واحد من 1 'لا أوافق بشدة'، 2 'لا أوافق'، 3 'محايد'، 4 'أوافق' إلى 5 'أوافق بشدة'.",
        finishBtn: "إرسال",
        scale: ["1. لا أوافق بشدة", "2. لا أوافق", "3. محايد", "4. أوافق", "5. أوافق بشدة"],
        questions: [
            "في الأسبوعين الماضيين، هل واجهت صعوبة في الشعور بالاهتمام أو المتعة في الحياة اليومية؟",
            "في الآونة الأخيرة، هل كنت قلقًا بشأن أشياء تافهة وشعرت بعدم الارتياح؟",
            "هل شعرت بالانفعال وتصرفت بعدوانية أو غضب تجاه الآخرين؟",
            "هل واجهت صعوبة في النوم أو تستيقظ كثيرًا وتشعر بالتعب؟",
            "هل شعرت بطاقة زائدة بشكل غير عادي، أو تسارعت أفعالك، أو تحدثت أكثر من المعتاد؟",
            "هل سمعت أصواتًا غير موجودة أو شعرت وكأن شخصًا يراقبك؟",
            "هل شعرت بالضيق بسبب ذكريات الماضي المؤلمة التي طرأت على ذهنك فجأة؟",
            "هل فقدت الرغبة في الحياة أو فكرت في إيذاء نفسك؟",
            "هل وجدت صعوبة في التحكم في كمية أو عدد مرات شرب الكحول؟",
            "هل شعرت بصعوبة أو إزعاج في العناية بنفسك، مثل الاستحمام أو تناول الطعام؟"
        ],
        resultTitle: "اكتمل التقديم", resultDesc: "تم تقديم التقييم بنجاح.",
        bookBtn: "حجز استشارة", talkBtn: "تحدث إلى Maeum-i",
        bookingTitle: "حجز استشارة", bookingDesc: "الرجاء تحديد يوم للاستشارة.",
        closeBtn: "إغلاق", bookedToast: "تم الحجز بنجاح.",
        mon: "الاثنين", tue: "الثلاثاء", thu: "الخميس", fri: "الجمعة", at2pm: "2:00 مساءً",
        wardSelectLabel: "اختر الغرفة", maleWard: "غرفة الرجال", femaleWard: "غرفة النساء",
        roomSetupTitle: "إعداد موقع الجهاز", roomNumberLabel: "رقم الغرفة",
        resultGood: "طقس عقلك صافٍ! من الرائع رؤيتك تعتني بنفسك جيدًا. يتمنى لك Maeum-i يومًا هادئًا.",
        resultCaution: "يبدو أنك مرهق قليلاً وتواجه صعوبات مؤخرًا. يمر الجميع بمثل هذه الأوقات. أنت تبلي بلاءً حسنًا، لذا خذ نفسًا عميقًا وعانق نفسك. Maeum-i دائمًا بجانبك.",
        resultDanger: "يبدو أن قلبك مثقل بالهموم وصعب هذه الأيام... قد يكون من الصعب تحمل ذلك بمفردك. في مثل هذه الأوقات، حاول تهدئة عقلك باتباع <b>[عناق الفراشة]</b>. يمكنك دائمًا التحدث إلى خبير عبر زر [حجز استشارة] عند الحاجة.",
        resultHighRisk: "يبدو أن الألم النفسي الذي تشعر به عميق جدًا، وهذا يكسر قلبي. لا تتحمل هذا العبء بمفردك. يرجى الضغط على زر [طلب المساعدة من مستشار] على الفور. مستشارونا مستعدون للاستماع إلى قصتك.",
        helpBtnText: "طلب المساعدة من مستشار (HELP)",
        techDepressionTitle: "تقنية التثبيت 5-4-3-2-1",
        techDepressionDesc: "إذا شعرت بالإحباط، ابحث عن 5 أشياء يمكنك رؤيتها، و4 يمكنك سماعها، و3 يمكنك لمسها، و2 يمكنك شمها، وشيء واحد يمكنك تذوقه. هذا سيعيدك إلى الحاضر.",
        techAnxietyTitle: "تنفس 4-7-8",
        techAnxietyDesc: "استنشق من أنفك لمدة 4 ثوانٍ، واحبس أنفاسك لمدة 7 ثوانٍ، ثم ازفر ببطء من فمك لمدة 8 ثوانٍ. سيهدأ قلبك المتسارع تدريجياً.",
        techInsomniaTitle: "طريقة نوم قنديل البحر",
        techInsomniaDesc: "أرخِ جميع عضلاتك برفق مثل قنديل البحر. تخيل التوتر يغادر جسمك من قمة رأسك إلى أصابع قدميك، وستنام بشكل أفضل.",
        techPTSDTitle: "عناق الفراشة",
        techPTSDDesc: "ضع ذراعيك متقاطعتين فوق صدرك على شكل حرف X، وربّت برفق على كتفيك بالتبادل مثل أجنحة الفراشة. هذه حركة لتهدئة وحماية نفسك.",
        techAggressionTitle: "استرخاء العضلات",
        techAggressionDesc: "عندما يتصاعد الغضب، اقبض يديك بقوة لمدة 5 ثوانٍ، ثم افتحهما على الفور. بمجرد أن يزول التوتر من جسمك، سيهدأ الغضب في عقلك أيضًا.",
        videoPhrase: "لا بد أنك مررت بوقت عصيب جداً. هذا ليس خطأك. تابع هذا الفيديو لأخذ نفس وتهدئة عقلك. نحن هنا معك.",
        guideGroupATitle: "تقنية الحواس 5-4-3-2-1",
        guideGroupADesc: "<strong style='color: #2c3e50;'>الخطوات:</strong> ركز على 5 أشياء تراها، 4 تلمسها، 3 تسمعها، 2 تشمها، و1 تتذوقها.<br><br><strong style='color: #2c3e50;'>التأثير:</strong> يعيد أفكارك للحاضر ويهدئ من روعك فوراً عند الشعور بالقلق الشديد أو الذعر.",
        guideGroupBTitle: "عناق الفراشة واسترخاء العضلات",
        guideGroupBDesc: "<strong style='color: #2c3e50;'>الخطوات:</strong> ضع ذراعيك متقاطعين على صدرك، واربت برفق على كتفيك مثل رفرفة الفراشة 10-15 مرة مع تنفس عميق.<br><br><strong style='color: #2c3e50;'>التأثير:</strong> يخفف من التوتر الجسدي في حالات الصدمة والضغط النفسي، ويعيد الاستقرار العاطفي."
    },
    th: {
        title: "Mind Care", subtitle: "พื้นที่ดูแลจิตใจของคุณ",
        nameLabel: "ชื่อ", namePlaceholder: "กรอกชื่อของคุณ",
        natLabel: "สัญชาติ", natPlaceholder: "เลือกสัญชาติของคุณ",
        natChina: "จีน", natRussia: "รัสเซีย", natThailand: "ไทย", natVietnam: "เวียดนาม",
        natUzbekistan: "อุซเบกิสถาน", natKazakhstan: "คาซัคสถาน", natPhilippines: "ฟิลิปปินส์", natOther: "อื่นๆ",
        consentTitle: "ความยินยอมในการใช้งาน",
        consent1: "ข้อมูลนี้จะถูกปกปิดและใช้เพื่อปรับปรุงบริการและการวิจัยเท่านั้น",
        consent2: "ข้อมูลที่รวบรวมจะถูกเข้ารหัสและจะไม่แชร์โดยไม่ได้รับความยินยอม",
        consent3: "คุณสามารถใช้บริการได้และสามารถถอนความยินยอมได้ตลอดเวลาในการตั้งค่า",
        confirmBtn: "ยืนยัน",
        adminTitle: "ผู้ดูแลระบบ", adminSummary: "ใส่รหัสผ่านผู้ดูแลระบบ",
        adminCancel: "ยกเลิก", adminConfirm: "ยืนยัน",
        adminError: "รหัสผ่านไม่ถูกต้อง", adminPlaceholder: "ใส่รหัสผ่าน",
        consentError: "โปรดยอมรับเงื่อนไขทั้งหมด",
        screeningTitle: "SCREENING",
        screeningSubtitle: "ในช่วง 2 สัปดาห์ที่ผ่านมา โปร드ตอบตามความเป็นจริงเกี่ยวกับอาการของคุณ โปรดเลือกอย่างใดอย่างหนึ่งตั้งแต่ 1 'ไม่เห็นด้วยอย่างยิ่ง', 2 'ไม่เห็นด้วย', 3 'ปานกลาง', 4 'เห็นด้วย' ถึง 5 'เห็นด้วยอย่างยิ่ง'",
        finishBtn: "ส่ง",
        scale: ["1. ไม่เห็นด้วยอย่างยิ่ง", "2. ไม่เห็นด้วย", "3. ปานกลาง", "4. เห็นด้วย", "5. เห็นด้วยอย่างยิ่ง"],
        questions: [
            "ในช่วง 2 สัปดาห์ที่ผ่านมา คุณมีความสนใจหรือความสุขในการทำสิ่งต่างๆ ลดลงหรือไม่?",
            "เมื่อเร็วๆ นี้ คุณรู้สึกกังวลกับเรื่องเล็กน้อยและรู้สึกกระวนกระวายใจหรือไม่?",
            "คุณรู้สึกหงุดหงิดและแสดงท่าทีก้าวร้าวต่อผู้อื่นหรือไม่?",
            "คุณมีปัญหาในการนอนหลับหรือตื่นขึ้นมาบ่อยๆ จนรู้สึกเหนื่อยหรือไม่?",
            "คุณรู้สึกมีพลังงานมากผิดปกติ ทำสิ่งต่างๆ เร็วขึ้น หรือพูดมากขึ้นหรือไม่?",
            "คุณได้ยินเสียงที่ไม่มีอยู่จริง หรือรู้สึกเหมือนมีคนจ้องมองอยู่หรือไม่?",
            "คุณรู้สึกทุกข์ใจจากความทรงจำในอดีตที่เจ็บปวดซึ่งจู่ๆ ก็ผุดขึ้นมาหรือไม่?",
            "คุณหมดความปรารถนาที่จะมีชีวิตอยู่ หรือมีความคิดที่จะทำร้ายตัวเองหรือไม่?",
            "คุณพบว่าเป็นการยากที่จะควบคุมความถี่หรือปริมาณการดื่มแอลกอฮอล์หรือไม่?",
            "คุณรู้สึกว่าการดูแลตัวเอง เช่น การอาบน้ำหรือการรับประทานอาหาร เป็นเรื่องยุ่งยากหรือทำได้ยากหรือไม่?"
        ],
        resultTitle: "ส่งเสร็จสมบูรณ์", resultDesc: "ส่งแบบประเมินสำเร็จแล้ว",
        bookBtn: "นัดหมายการให้คำปรึกษา", talkBtn: "คุยกับ Maeum-i",
        bookingTitle: "นัดหมายการให้คำปรึกษา", bookingDesc: "โปรดเลือกวันให้คำปรึกษา",
        closeBtn: "ปิด", bookedToast: "จองสำเร็จแล้ว",
        mon: "วันจันทร์", tue: "วันอังคาร", thu: "วันพฤหัสบดี", fri: "วันศุกร์", at2pm: "14:00",
        wardSelectLabel: "เลือกห้อง", maleWard: "ห้องผู้ชาย", femaleWard: "ห้องผู้หญิง",
        roomSetupTitle: "ตั้งค่าตำแหน่งอุปกรณ์", roomNumberLabel: "หมายเลขห้อง",
        resultGood: "สภาพจิตใจของคุณสดใส! ฉันภูมิใจที่คุณดูแลตัวเองได้ดี ขอให้วันนี้เป็นวันที่สงบสุข",
        resultCaution: "ฉันสัมผัสได้ว่าคุณกำลังเหนื่อยล้า ทุกคนย่อมมีช่วงเวลาแบบนั้น คุณไม่ได้อยู่ตัวคนเดียว Maeum-i จะคอยเป็นกำลังใจให้",
        resultDanger: "ช่วงนี้จิตใจคุณคงหนักอึ้งมากใช่ไหม ฉันเข้าใจความยากลำบากนั้นอย่างสุดซึ้ง โปรดทำตาม <b>[เทคนิคสร้างความมั่นคงทางจิตใจ]</b> ด้านล่างเพื่อหยุดพักหายใจ และหากคุณต้องการ โปรดแบ่งปันเรื่องราวของคุณผ่านปุ่ม <b>[นัดหมายการให้คำปรึกษา]</b>",
        resultHighRisk: "ความเจ็บปวดที่คุณรู้สึกอยู่ในตอนนี้ดูเหมือนจะลึกซึ้งมาก และหัวใจของฉันก็เจ็บปวดเช่นกัน โปรดอย่าแบกรับภาระนี้ไว้คนเดียว กรุณากดปุ่ม [ขอความช่วยเหลือจากนักจิตวิทยา (HELP)] ทันที เราอยู่เคียงข้างคุณเสมอ",
        helpBtnText: "ขอความช่วยเหลือจากนักจิตวิทยา (HELP)",
        techAnxietyTitle: "การกอดแบบผีเสื้อ",
        techAnxietyDesc: "ไขว้แขนแล้วตบไหล่เบาๆ",
        techAggressionTitle: "การผ่อนคลายกล้ามเนื้อ",
        techAggressionDesc: "กำหมัดแน่น 5 วินาที แล้วคลายออกทันที",
        techDepressionTitle: "เทคนิค 5-4-3-2-1",
        techDepressionDesc: "จดจ่ออยู่กับสิ่งของและเสียงรอบตัว",
        techInsomniaTitle: "วิธีนอนแมงกะพรุน",
        techInsomniaDesc: "ปล่อยตัวตามสบายและผ่อนคลายร่างกายให้เต็มที่",
        techCommonTitle: "เทคนิคการหายใจ 4-7-8",
        techCommonDesc: "หายใจเข้าทางจมูก (4 วิ), กลั้นไว้ (7 วิ), หายใจออก (8 วิ)",
        feedbackTitle: "การดูแลจิตใจวันนี้มีประโยชน์ต่อคุณหรือไม่?",
        feedbackThanks: "ขอบคุณสำหรับการประเมิน ความคิดเห็นอันมีค่าของคุณจะช่วยสร้างการดูแลจิตใจที่ดียิ่งขึ้น",
        feedbackAnon: "การประเมินนี้จะถูกประมวลผลโดยไม่ระบุตัวตนและใช้เพื่อการปรับปรุงบริการเท่านั้น",
        videoPhrase: "คุณคงจะรู้สึกหนักใจมากเลยใช่ไหม? มันไม่ใช่ความผิดของคุณนะ ลองทำตามวิดีโอนี้เพื่อพักหายใจและปลอบประโลมจิตใจของคุณดูสิ เราจะอยู่เคียงข้างคุณเสมอ",
        guideGroupATitle: "เทคนิคการกำหนดรู้ 5-4-3-2-1",
        guideGroupADesc: "<strong style='color: #2c3e50;'>ขั้นตอน:</strong> จดจ่อกับ 5 สิ่งที่เห็น 4 สิ่งที่สัมผัสได้ 3 เสียงที่ได้ยิน 2 กลิ่นที่ได้ดม 1 รสที่ได้ชิม<br><br><strong style='color: #2c3e50;'>ผลลัพธ์:</strong> ดึงความคิดกลับมาอยู่กับปัจจุบันเมื่อมีความวิตกกังวลสูง ช่วยให้สงบลงอย่างรวดเร็ว",
        guideGroupBTitle: "วิธีกอดแบบผีเสื้อและการผ่อนคลายกล้ามเนื้อ",
        guideGroupBDesc: "<strong style='color: #2c3e50;'>ขั้นตอน:</strong> ไขว้แขนไว้ที่หน้าอก ตบไหล่เบาๆ เหมือนผีเสื้อกระพือปีก 10-15 ครั้ง พร้อมหายใจเข้าออกลึกๆ<br><br><strong style='color: #2c3e50;'>ผลลัพธ์:</strong> ช่วยคลายความตึงเครียดของร่างกายในสภาวะมีความกดดัน และฟื้นฟูความมั่นคงทางอารมณ์"
    },
    ru: {
        title: "Mind Care", subtitle: "Пространство для заботы о разуме",
        nameLabel: "Имя", namePlaceholder: "Введите ваше имя",
        natLabel: "Национальность", natPlaceholder: "Выберите вашу национальность",
        natChina: "Китай", natRussia: "Россия", natThailand: "Таиланд", natVietnam: "Вьетнам",
        natUzbekistan: "Узбекистан", natKazakhstan: "Казахстан", natPhilippines: "Филиппины", natOther: "Другое",
        consentTitle: "Согласие на использование",
        consent1: "Данные будут анонимизированы и использованы только для улучшения сервиса и исследований.",
        consent2: "Информация зашифрована и не будет передана третьим лицам без вашего согласия.",
        consent3: "Вы можете использовать сервис независимо от вашего согласия и отозвать его в любое время.",
        confirmBtn: "Подтвердить",
        adminTitle: "Доступ администратора", adminSummary: "Введите пароль.",
        adminCancel: "Отмена", adminConfirm: "Подтвердить",
        adminError: "Неверный пароль.", adminPlaceholder: "Введите пароль",
        consentError: "Пожалуйста, согласитесь со всеми условиями.",
        screeningTitle: "SCREENING",
        screeningSubtitle: "За последние 2 недели, пожалуйста, честно ответьте на вопросы о своем состоянии. Пожалуйста, выберите один вариант от 1 «Совершенно не согласен», 2 «Не согласен», 3 «Нейтрально», 4 «Согласен» до 5 «Полностью согласен».",
        finishBtn: "Отправить",
        scale: ["1. Совершенно не согласен", "2. Не согласен", "3. Нейтрально", "4. Согласен", "5. Полностью согласен"],
        questions: [
            "За последние 2 недели было ли вам трудно испытывать интерес или удовольствие от повседневных дел?",
            "В последнее время вы часто беспокоились по мелочам и чувствовали тревогу?",
            "Были ли вы раздражительны, злились или вели себя агрессивно по отношению к другим?",
            "Вам было трудно заснуть или вы часто просыпались и чувствовали усталость?",
            "У вас было необычно много энергии, вы действовали быстрее или говорили больше обычного?",
            "Вы слышали звуки, которых на самом деле нет, или чувствовали, что за вами кто-то наблюдает?",
            "Вас внезапно беспокоили болезненные воспоминания из прошлого?",
            "У вас пропадало желание жить или появлялись мысли о причинении себе вреда?",
            "Вам было трудно контролировать частоту или количество употребляемого алкоголя?",
            "Вам было трудно или лень заботиться о себе, например, мыться или есть?"
        ],
        resultTitle: "Отправка завершена", resultDesc: "Оценка успешно отправлена.",
        bookBtn: "Записаться на консультацию", talkBtn: "Поговорить с Maeum-i",
        bookingTitle: "Запись на консультацию", bookingDesc: "Пожалуйста, выберите день.",
        closeBtn: "Закрыть", bookedToast: "Успешно забронировано.",
        mon: "Понедельник", tue: "Вторник", thu: "Четверг", fri: "Пятница", at2pm: "14:00",
        wardSelectLabel: "Выбор комнаты", maleWard: "Мужская палата", femaleWard: "Женская палата",
        roomSetupTitle: "Настройка местоположения устройства", roomNumberLabel: "Номер комнаты",
        resultGood: "Погода в вашей душе ясная! Я горжусь тем, что вы хорошо заботитесь о себе. Желаю вам мирного дня сегодня.",
        resultCaution: "Я чувствую, что вы немного истощены. У всех иногда бывают такие моменты. Вы не одиноки. Maeum-i будет поддерживать вас.",
        resultDanger: "Должно быть, в эти дни на сердце очень тяжело. Я глубоко сочувствую этим трудностям. Пожалуйста, сделайте паузу и переведите дух, следуя <b>[Технике психологической стабилизации]</b> ниже, и если вам нужно, поделитесь своей исторей через <b>[Забронировать консультацию]</b>.",
        resultHighRisk: "Боль, которую вы чувствуете прямо сейчас, кажется очень глубокой, и это разбивает мне сердце. Пожалуйста, не несите это бремя в одиночку. Немедленно нажмите кнопку [Запросить помощь у психолога (HELP)]. Мы здесь, рядом с вами.",
        helpBtnText: "Запросить помощь у психолога (HELP)",
        techAnxietyTitle: "Объятия бабочки",
        techAnxietyDesc: "Скрестите руки и слегка похлопайте себя по плечам.",
        techAggressionTitle: "Мышечная релаксация",
        techAggressionDesc: "Сильно сожмите кулаки на 5 секунд, затем сразу расслабьте.",
        techDepressionTitle: "Техника заземления 5-4-3-2-1",
        techDepressionDesc: "Сосредоточьтесь на предметах и звуках вокруг вас.",
        techInsomniaTitle: "Сон медузы",
        techInsomniaDesc: "Полностью расслабьте всё тело и снимите напряжение.",
        techCommonTitle: "Дыхание 4-7-8",
        techCommonDesc: "Вдох через нос (4с), задержка (7с), выдох (8с).",
        feedbackTitle: "Помогла ли вам сегодняшняя забота о разуме?",
        feedbackThanks: "Спасибо за вашу оценку. Ваше ценное мнение помогает создавать лучший сервис.",
        feedbackAnon: "Эта оценка обрабатывается анонимно и используется только для улучшения сервиса.",
        videoPhrase: "Вам, должно быть, было очень тяжело. Это не ваша вина. Следуйте этому видео, чтобы перевести дух и успокоить свой разум. Мы рядом с вами.",
        guideGroupATitle: "Сенсорная техника 5-4-3-2-1",
        guideGroupADesc: "<strong style='color: #2c3e50;'>Шаги:</strong> Сосредоточьтесь на 5 вещах, которые вы видите, 4, которые можете потрогать, 3, которые слышите, 2 запахах и 1 вкусе.<br><br><strong style='color: #2c3e50;'>Эффект:</strong> При сильной тревоге возвращает мысли в настоящее, успокаивая и расслабляя.",
        guideGroupBTitle: "Объятие бабочки и расслабление мышц",
        guideGroupBDesc: "<strong style='color: #2c3e50;'>Шаги:</strong> Скрестите руки на груди, слегка похлопывая себя по плечам 10-15 раз, медленно дыша.<br><br><strong style='color: #2c3e50;'>Эффект:</strong> Помогает снять физическое напряжение и восстановить эмоциональную стабильность."
    },
    uz: {
        title: "Mind Care", subtitle: "Aql-idrokni parvarish qilish joyi",
        nameLabel: "Ism", namePlaceholder: "Ismingizni kiriting",
        natLabel: "Millati", natPlaceholder: "Millatingizni tanlang",
        natChina: "Xitoy", natRussia: "Rossiya", natThailand: "Tailand", natVietnam: "Vyetnam",
        natUzbekistan: "O'zbekiston", natKazakhstan: "Qozog'iston", natPhilippines: "Filippin", natOther: "Boshqa",
        consentTitle: "Foydalanishga rozilik",
        consent1: "Ushbu ma'lumotlar anonimlashtiriladi va faqat xizmatni yaxshilash va ilmiy tadqiqotlar uchun ishlatiladi.",
        consent2: "To'plangan ma'lumotlar shifrlangan va sizning roziligingizsiz uzatilmaydi.",
        consent3: "Siz roziligingizdan qat'i nazar xizmatdan foydalanishingiz mumkin va uni istalgan vaqtda bekor qilishingiz mumkin.",
        confirmBtn: "Tasdiqlash",
        adminTitle: "Administrator", adminSummary: "Parolni kiriting.",
        adminCancel: "Bekor qilish", adminConfirm: "Tasdiqlash",
        adminError: "Noto'g'ri parol.", adminPlaceholder: "Parolni kiriting",
        consentError: "Iltimos, barcha shartlarga rozi bo'ling.",
        screeningTitle: "SCREENING",
        screeningSubtitle: "Oxirgi 2 hafta davomida holatingiz haqida rostgo'y javob bering. Iltimos, 1 'Umuman qo'shilmayman', 2 'Qo'shilmayman', 3 'O'rtacha', 4 'Qo'shilaman' dan 5 'To'liq qo'shilaman' gacha bo'lgan variantlardan birini tanlang.",
        finishBtn: "Yuborish",
        scale: ["1. Umuman qo'shilmayman", "2. Qo'shilmayman", "3. O'rtacha", "4. Qo'shilaman", "5. To'liq qo'shilaman"],
        questions: [
            "So'nggi 2 hafta ichida kundalik ishlarda qiziqish yoki zavq his qilish qiyin bo'ldimi?",
            "Yaqinda arzimas narsalar uchun ham ko'p tashvishlandingizmi va o'zingizni bezovta his qildingizmi?",
            "Siz asabiy bo'lib, boshqalarga jahl qildingizmi yoki tajovuzkor munosabatda bo'ldingizmi?",
            "Kechasi uxlashda qiynaldingizmi yoki tez-tez uyg'onib, o'zingizni charchagan his qildingizmi?",
            "Odatdagidan ko'ra ko'proq energiya his qilib, harakatlaringiz tezlashdimi yoki ko'p gapiradigan bo'lib qoldingizmi?",
            "Aslida yo'q bo'lgan ovozlarni eshitdingizmi yoki kimdir sizni kuzatayotgandek tuyuldimi?",
            "O'tmishdagi og'riqli xotiralar to'satdan esga tushib, sizni qiynadimi?",
            "Yashashga bo'lgan ishtiyoqingiz yo'qoldimi yoki o'zingizga zarar yetkazish haqida o'yladingizmi?",
            "Alkogol ichish miqdori yoki chastotasini o'zingiz nazorat qilishda qiynaldingizmi?",
            "Yuvinish yoki ovqatlanish kabi o'zingizga g'amxo'rlik qilish ishlari qiyin yoki zerikarli tuyuldimi?"
        ],
        resultTitle: "Muvaffaqiyatli yakunlandi", resultDesc: "Baholash muvaffaqiyatli yuborildi.",
        bookBtn: "Konsultatsiyani band qilish", talkBtn: "Maeum-i bilan suhbatlashish",
        bookingTitle: "Konsultatsiyani band qilish", bookingDesc: "Iltimos, kunni tanlang.",
        closeBtn: "Yopish", bookedToast: "Muvaffaqiyatli band qilindi.",
        mon: "Dushanba", tue: "Seshanba", thu: "Payshanba", fri: "Juma", at2pm: "14:00",
        wardSelectLabel: "Xonani tanlash", maleWard: "Erkaklar xonasi", femaleWard: "Ayollar xonasi",
        roomSetupTitle: "Qurilma joylashuvini sozlash", roomNumberLabel: "Xona raqami",
        resultGood: "Qalbingiz ob-havosi ochiq! O'zingizga yaxshi g'amxo'rlik qilayotganingiz bilan faxrlanaman. Bugun sizga tinch kun tilayman.",
        resultCaution: "Sizning biroz charchaganingizni his qilyapman. Barchada ba'zida shunday bo'ladi. Siz yolg'iz emassiz. Maeum-i sizni qo'llab-quvvatlaydi.",
        resultDanger: "So'nggi paytlarda qalbingiz juda og'ir, shunday emasmi? Men bu qiyinchilikka chuqur hamdardman. Iltimos, quyidagi <b>[Psixologik barqarorlik texnikasi]</b>ga rioya qilib, nafas olishingizni rostlang va agar kerak bo'lsa, <b>[Konsultatsiyani band qilish]</b> orqali o'z hikoyangizni aytib bering.",
        resultHighRisk: "Hozir his qilayotgan og'rig'ingiz juda chuqur ko'rinadi va mening ham yuragim og'riyapti. Iltimos, bu yukni yolg'iz ko'tarmang. Zudlik bilan [Psixologdan yordam so'rash (HELP)] tugmasini bosing. Biz sizning yoningizdamiz.",
        helpBtnText: "Psixologdan yordam so'rash (HELP)",
        techAnxietyTitle: "Kapalak quchog'i",
        techAnxietyDesc: "Qo'llaringizni kesishib, elkalarni sekin uring.",
        techAggressionTitle: "Mushaklarni bo'shashtirish",
        techAggressionDesc: "Mushtlaringizni 5 soniya davomida siqing va keyin tezda oching.",
        techDepressionTitle: "5-4-3-2-1 Hissiyotlar",
        techDepressionDesc: "Atrofingizdagi narsalar va tovushlarga e'tibor qarating.",
        techInsomniaTitle: "Meduza usulida uxlash",
        techInsomniaDesc: "Butun tanangizdagi kuchlanishni bo'shating va dam oling.",
        techCommonTitle: "4-7-8 Nafas olish",
        techCommonDesc: "Burundan nafas oling (4s), ushlab turing (7s), chiqaring (8s).",
        feedbackTitle: "Bugungi aql-idrok parvarishi yordam berdimi?",
        feedbackThanks: "Baholaganingiz uchun tashakkur. Sizning qimmatli fikringiz yanada yaxshi xizmat yaratishga yordam beradi.",
        feedbackAnon: "Ushbu baholash anonim tarzda amalga oshiriladi va faqat xizmatni yaxshilash uchun ishlatiladi.",
        videoPhrase: "Sizga juda qiyin bo'lgan bo'lsa kerak. Bu sizning aybingiz emas. Ushbu videoni kuzatib, nafas oling va qalbingizni tinchlantiring. Biz siz bilanmiz.",
        guideGroupATitle: "5-4-3-2-1 Sensorik texnika",
        guideGroupADesc: "<strong style='color: #2c3e50;'>Bosqichlar:</strong> Ko'rinadigan 5 ta, ushlab bo'ladigan 4 ta, eshitiladigan 3 ta, hidi kelayotgan 2 ta va ta'mi bor 1 ta narsaga diqqat qiling.<br><br><strong style='color: #2c3e50;'>Ta'siri:</strong> Qattiq xavotir paytida xayolni 'hozir'ga qaratib, darhol tinchlantirish effektini beradi.",
        guideGroupBTitle: "Kapalak quchog'i va mushaklarni bo'shashtirish",
        guideGroupBDesc: "<strong style='color: #2c3e50;'>Bosqichlar:</strong> Qo'llaringizni ko'kragingizda x shaklida kesib, yelkangizga kapalak qanot qoqgandek 10-15 marta ohista uring va chuqur nafas oling.<br><br><strong style='color: #2c3e50;'>Ta'siri:</strong> Stress va travma holatlarida jismoniy taranglikni yumshatadi va hissiy barqarorlikni tiklaydi."
    }
};

// TTS Configuration
const TTS_LANG_MAP = {
    ko: 'ko-KR',
    en: 'en-US',
    zh: 'zh-CN',
    vi: 'vi-VN',
    ru: 'ru-RU',
    uz: 'uz-UZ',
    th: 'th-TH',
    ar: 'ar-SA'
};

let voices = [];
const loadVoices = () => {
    voices = window.speechSynthesis.getVoices();
};
window.speechSynthesis.onvoiceschanged = loadVoices;
loadVoices();

const speakText = (text, langCode) => {
    // Stop any current speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    const ttsLang = TTS_LANG_MAP[langCode] || 'en-US';
    utterance.lang = ttsLang;

    // Find a matching voice if possible
    const voice = voices.find(v => v.lang.startsWith(ttsLang.split('-')[0]));
    if (voice) utterance.voice = voice;

    window.speechSynthesis.speak(utterance);
};

const isVoiceAvailable = (langCode) => {
    const ttsLang = TTS_LANG_MAP[langCode];
    if (!ttsLang) return false;
    return voices.some(v => v.lang.toLowerCase().startsWith(ttsLang.split('-')[0].toLowerCase()));
};

// Room configurations
const WARD_ROOMS = {
    male: [
        { num: '301', type: 'general' },
        { num: '302', type: 'general' },
        { num: '303', type: 'general' },
        { num: '304', type: 'open' },
        { num: '305', type: 'open' },
        { num: '306', type: 'open' },
        { num: '307', type: 'open' }
    ],
    female: [
        { num: '401', type: 'general' },
        { num: '402', type: 'general' },
        { num: '403', type: 'general' },
        { num: '404', type: 'general' },
        { num: '405', type: 'open' },
        { num: '406', type: 'open' },
        { num: '407', type: 'open' },
        { num: '408', type: 'open' }
    ]
};

// --- IndexedDB for Offline Support ---
const DB_NAME = 'MindCareOfflineDB';
const DB_VERSION = 1;
const STORE_NAME = 'pending_records';

const initDB = () => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);
        request.onupgradeneeded = (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
            }
        };
        request.onsuccess = (e) => resolve(e.target.result);
        request.onerror = (e) => reject(e.target.error);
    });
};

const saveToOffline = async (record) => {
    const db = await initDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    store.add(record);
    return tx.complete;
};

const syncOfflineData = async () => {
    if (!navigator.onLine) return;
    const db = await initDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    const records = await new Promise((resolve) => {
        store.getAll().onsuccess = (e) => resolve(e.target.result);
    });

    if (records.length === 0) return;

    console.log(`Syncing ${records.length} offline records...`);
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbx4lpkEAylkMU5Vm3w-SNnW0K25cqWIshm62vZtFMvtb1SkSIbpEYyK7XHmGb_ZRsu4LQ/exec';

    for (const record of records) {
        try {
            await fetch(scriptUrl, {
                method: 'POST',
                mode: 'cors',
                headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                body: JSON.stringify(record)
            });
            // Remove from IndexedDB if sent (or even attempt sent with no-cors)
            store.delete(record.id);
        } catch (err) {
            console.error('Offline sync failed for record:', record, err);
        }
    }
};

window.addEventListener('online', syncOfflineData);
// --- End IndexedDB Logic ---

let currentSessionId = ""; // Global session ID for tracking current test instance
let completeChatHistory = []; // Global chat history storage
let globalRiskLevel = "안정";
let globalGroupA = 0;
let globalGroupB = 0;

document.addEventListener('DOMContentLoaded', () => {

    // --- Admin Logout Return Handling ---
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('logout') === 'true') {
        // Strip the URL parameter to cleanly show the main page
        window.history.replaceState({}, document.title, window.location.pathname);
    }

    // 0. Auto-detect browser language
    const userLang = navigator.language || navigator.userLanguage;
    let defaultLang = 'en';
    if (userLang.includes('ko')) defaultLang = 'ko';
    else if (userLang.includes('zh')) defaultLang = 'zh';
    else if (userLang.includes('vi')) defaultLang = 'vi';
    else if (userLang.includes('ar')) defaultLang = 'ar';
    else if (userLang.includes('th')) defaultLang = 'th';
    else if (userLang.includes('ru')) defaultLang = 'ru';
    else if (userLang.includes('uz')) defaultLang = 'uz';

    let currentLangCode = defaultLang;

    // 1. Multilingual Support Logic
    const langBtns = document.querySelectorAll('.lang-btn');
    const htmlTag = document.documentElement;

    const setLanguage = (langCode) => {
        const dict = translations[langCode];
        if (!dict) return;
        currentLangCode = langCode;

        // Change HTML Lang property for semantics
        htmlTag.lang = langCode;

        // Handle RTL for Arabic
        htmlTag.dir = (langCode === 'ar') ? 'rtl' : 'ltr';

        // Update standard text elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) el.textContent = dict[key];
        });

        // Update placeholder texts
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (dict[key]) el.placeholder = dict[key];
        });

        // Update Active Button Classes
        langBtns.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === langCode);
        });

        // Instruction Speaker Logic
        const instructionSpeaker = document.getElementById('instruction-speaker-btn');
        if (instructionSpeaker) {
            const voiceAvailable = isVoiceAvailable(langCode);
            instructionSpeaker.classList.toggle('hidden', !voiceAvailable);
            instructionSpeaker.onclick = () => {
                speakText(dict.screeningSubtitle, langCode);
            };
        }

        // Re-render assessment items & booking days
        renderQuestions();
        renderBookingDays();
    };

    langBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            setLanguage(btn.getAttribute('data-lang'));
        });
    });

    // 2. Real-time Data Masking for Name
    const nameInput = document.getElementById('real-name-input');
    const nameMaskDisplay = document.getElementById('name-mask-display');

    const updateMask = () => {
        const val = nameInput.value;
        const len = val.length;
        let masked = '';

        if (len === 0) {
            masked = '';
        } else if (len === 1) {
            masked = val;
        } else if (len === 2) {
            masked = val[0] + '*';
        } else {
            masked = val[0] + '*'.repeat(len - 2) + val[len - 1];
        }

        nameMaskDisplay.textContent = masked;
    };

    nameInput.addEventListener('input', updateMask);


    // 3. Form Submission to Assessment Transition
    // Form and Section Elements
    const form = document.getElementById('consultation-form');
    const roomSetupSection = document.getElementById('room-setup-section');
    const actualFormSection = document.getElementById('actual-form-section');

    // Room Setup Elements
    const wardBtns = document.querySelectorAll('.ward-btn');
    const roomNumberGroup = document.getElementById('room-number-group');
    const roomSelect = document.getElementById('room-select');
    const rememberDeviceGroup = document.getElementById('remember-device-group');
    const rememberDeviceCheckbox = document.getElementById('remember-device-checkbox');
    const confirmRoomBtn = document.getElementById('confirm-room-btn');

    const screeningSection = document.getElementById('screening-section');
    const resultSection = document.getElementById('result-section');
    const questionsList = document.getElementById('questions-list');
    const toast = document.getElementById('toast-message');
    const errMsg = document.getElementById('error-message');

    // Globals for local saving
    let realNameData = '';
    let nationalityData = '';
    let genderData = '';
    let roomData = '';
    let currentRoomType = 'general';
    let currentTotalScore = 0;

    // --- NEW: Room Setup Logic ---
    const checkSavedDevice = () => {
        const savedRoom = localStorage.getItem('mindcare_saved_room');
        if (savedRoom) {
            // General room was remembered. Skip setup.
            roomData = savedRoom;
            roomSetupSection.classList.add('hidden');
            actualFormSection.classList.remove('hidden');
        } else {
            // Ask for setup
            roomSetupSection.classList.remove('hidden');
            actualFormSection.classList.add('hidden');
        }
    };

    // Initialize check
    checkSavedDevice();

    wardBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // UI Toggle
            wardBtns.forEach(b => {
                b.classList.remove('primary-btn');
                b.classList.add('secondary-btn');
            });
            btn.classList.remove('secondary-btn');
            btn.classList.add('primary-btn');

            const ward = btn.getAttribute('data-ward');
            const rooms = WARD_ROOMS[ward];

            // Populate Dropdown
            roomSelect.innerHTML = '<option value="" disabled selected>선택해주세요</option>';
            rooms.forEach(room => {
                const label = room.type === 'general' ? '일반실' : '개방실(공용PC)';
                roomSelect.insertAdjacentHTML('beforeend', `<option value="${room.num}" data-type="${room.type}">${room.num}호 (${label})</option>`);
            });

            roomNumberGroup.classList.remove('hidden');
            rememberDeviceGroup.classList.add('hidden');
            confirmRoomBtn.classList.add('hidden');
            roomSelect.value = '';
        });
    });

    roomSelect.addEventListener('change', () => {
        if (!roomSelect.value) return;

        const selectedOption = roomSelect.options[roomSelect.selectedIndex];
        currentRoomType = selectedOption.getAttribute('data-type');

        if (currentRoomType === 'general') {
            rememberDeviceGroup.classList.remove('hidden');
        } else {
            // Open PC cannot be remembered
            rememberDeviceGroup.classList.add('hidden');
            rememberDeviceCheckbox.checked = false;
        }

        confirmRoomBtn.classList.remove('hidden');
    });

    confirmRoomBtn.addEventListener('click', () => {
        if (!roomSelect.value) return;

        roomData = roomSelect.value;

        // Save if general and checked
        if (currentRoomType === 'general' && rememberDeviceCheckbox.checked) {
            localStorage.setItem('mindcare_saved_room', roomData);
        }

        // Proceed to form
        roomSetupSection.classList.add('hidden');
        actualFormSection.classList.remove('hidden');
    });

    // --- END Room Setup Logic ---

    const renderQuestions = () => {
        if (!questionsList) return;

        const tempAnswers = {};
        for (let i = 0; i < 10; i++) {
            const checked = document.querySelector(`input[name="q${i}"]:checked`);
            if (checked) tempAnswers[`q${i}`] = checked.value;
        }

        const dict = translations[currentLangCode];
        questionsList.innerHTML = '';

        const voiceAvailable = isVoiceAvailable(currentLangCode);

        dict.questions.forEach((qText, index) => {
            const speakerBtnHtml = voiceAvailable
                ? `<button type="button" class="speaker-btn" onclick="event.stopPropagation(); speakText('${qText.replace(/'/g, "\\'")}', '${currentLangCode}')">🔊</button>`
                : '';

            const questionHtml = `
                <div class="question-item">
                    <p class="question-text">
                        ${index + 1}. ${qText}
                        ${speakerBtnHtml}
                    </p>
                    <div class="scale-options">
                        ${dict.scale.map((sText, sIndex) => `
                            <label class="scale-label">
                                <input type="radio" name="q${index}" value="${sIndex + 1}" required>
                                <div class="scale-radio-custom"></div>
                                <span class="scale-text">${sText}</span>
                            </label>
                        `).join('')}
                    </div>
                </div>
            `;
            questionsList.insertAdjacentHTML('beforeend', questionHtml);
        });

        for (const [key, val] of Object.entries(tempAnswers)) {
            const radio = document.querySelector(`input[name="${key}"][value="${val}"]`);
            if (radio) radio.checked = true;
        }
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // 1. 필수 체크 로직 완화 (alert 띄우기)
        if (!nameInput.value || !document.getElementById('gender-select').value || !document.getElementById('nationality-select').value) {
            alert(translations[currentLangCode].consentError || "모든 필수 항목을 입력해주세요.");
            return;
        }

        if (!document.getElementById('consent-1').checked ||
            !document.getElementById('consent-2').checked ||
            !document.getElementById('consent-3').checked) {
            alert(translations[currentLangCode].consentError || "모든 필수 항목에 동의해주세요.");
            return;
        }

        errMsg.classList.add('hidden');

        realNameData = nameInput.value;
        nationalityData = document.getElementById('nationality-select').value;
        genderData = document.getElementById('gender-select').value;
        // roomData is already set from Room Setup Logic

        // 2. renderQuestions 강제 호출
        renderQuestions();

        // 3. 섹션 가시성 강제 변경
        form.classList.add('hidden');
        form.style.display = 'none';
        if (typeof actualFormSection !== 'undefined' && actualFormSection) {
            actualFormSection.style.display = 'none';
        }

        screeningSection.classList.remove('hidden');
        screeningSection.style.display = 'block';
        screeningSection.scrollIntoView({ behavior: 'smooth' });
        questionsList.scrollTop = 0;
    });

    const screeningBtn = document.getElementById('screening-submit-btn');
    if (screeningBtn) {
        screeningBtn.addEventListener('click', (e) => {
            let allAnswered = true;
            for (let i = 0; i < 10; i++) {
                if (!document.querySelector(`input[name="q${i}"]:checked`)) {
                    allAnswered = false;
                    break;
                }
            }

            if (!allAnswered) {
                alert(translations[currentLangCode].consentError);
                return;
            }

            const answersObj = {};
            let totalScore = 0;
            for (let i = 0; i < 10; i++) {
                const val = parseInt(document.querySelector(`input[name="q${i}"]:checked`).value);
                answersObj[`q${i + 1}`] = val;
                totalScore += val;
            }
            currentTotalScore = totalScore;

            // Cultural Calibration (-5 to cutoffs, same as +5 to total, for suppressive cultures & males)
            const isSuppressiveCulture = ['VN', 'UZ', 'CN', 'KR', 'RU'].includes(nationalityData);
            const isMale = genderData === '남성' || genderData === 'Male';
            const calibrationApplied = isSuppressiveCulture || isMale;

            let effectiveScore = totalScore;
            if (calibrationApplied) {
                effectiveScore += 5;
            }

            // Risk Calculation based on Request
            const q3 = answersObj['q3'], q6 = answersObj['q6'], q8 = answersObj['q8'];
            let riskLevel = "안정";
            if (effectiveScore >= 41 || q3 >= 4 || q6 >= 4 || q8 >= 4) {
                riskLevel = "고위험";
            } else if (effectiveScore >= 31) {
                riskLevel = "위험";
            } else if (effectiveScore >= 21) {
                riskLevel = "주의";
            }

            // Generate Session ID
            currentSessionId = "SESSION_" + new Date().getTime() + "_" + Math.random().toString(36).substring(2, 6);
            completeChatHistory = []; // Reset chat history for new session
            globalRiskLevel = riskLevel;

            // Group Calculation for Chatbot Extrapolation
            globalGroupA = (answersObj['q4'] + answersObj['q5']) / 2 || 0;
            globalGroupB = (answersObj['q6'] + answersObj['q7'] + answersObj['q10']) / 3 || 0;

            // Create record
            const record = {
                sessionId: currentSessionId,
                date: new Date().toISOString().split('T')[0],
                name: realNameData,
                country: nationalityData,
                gender: genderData,
                roomNumber: roomData,
                reservationDate: "",
                calibrationApplied: calibrationApplied,
                riskLevel: riskLevel,
                totalScore: totalScore,
                q1: answersObj['q1'] || 0, q2: answersObj['q2'] || 0, q3: answersObj['q3'] || 0,
                q4: answersObj['q4'] || 0, q5: answersObj['q5'] || 0, q6: answersObj['q6'] || 0,
                q7: answersObj['q7'] || 0, q8: answersObj['q8'] || 0, q9: answersObj['q9'] || 0,
                q10: answersObj['q10'] || 0,
                satisfaction: "",
                chatSummary: "",
                answers: answersObj,
                timestamp: new Date().getTime()
            };

            // Save locally for dashboard
            const localData = JSON.parse(localStorage.getItem('mindcare_records') || '[]');
            localData.push(record);
            localStorage.setItem('mindcare_records', JSON.stringify(localData));

            // Fetch to Google Apps Script Template
            const scriptUrl = 'https://script.google.com/macros/s/AKfycbx4lpkEAylkMU5Vm3w-SNnW0K25cqWIshm62vZtFMvtb1SkSIbpEYyK7XHmGb_ZRsu4LQ/exec';

            if (navigator.onLine) {
                fetch(scriptUrl, {
                    method: 'POST',
                    mode: 'cors',
                    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                    body: JSON.stringify(record)
                }).catch(err => console.log('GAS Fetch error:', err));
            } else {
                saveToOffline(record).then(() => {
                    console.log('Record saved to IndexedDB (Offline mode)');
                    if (toast) {
                        toast.textContent = currentLangCode === 'ko' ? '오프라인 상태입니다. 기기에 저장되었습니다.' : 'Offline. Saved to device.';
                        toast.classList.remove('hidden');
                        setTimeout(() => toast.classList.add('hidden'), 3000);
                    }
                });
            }

            // Sync other records if back online
            syncOfflineData();

            // Hide Screening, Show Result
            screeningSection.classList.add('hidden');
            screeningSection.style.display = 'none';
            resultSection.classList.remove('hidden');

            // Show Feedback Section
            const feedbackSection = document.getElementById('feedback-section');
            if (feedbackSection) {
                feedbackSection.classList.remove('hidden');
                // Reset UI in case of multiple submissions
                const emojiBtns = document.querySelectorAll('.emoji-btn');
                const feedbackThanks = document.getElementById('feedback-thanks');
                emojiBtns.forEach(btn => btn.classList.remove('selected'));
                if (feedbackThanks) feedbackThanks.classList.add('hidden');
            }

            // Set dynamic message & styling
            const resultDescEl = document.querySelector('.result-desc');
            const helpBtn = document.getElementById('help-btn');
            const showBookingBtn = document.getElementById('show-booking-btn');
            const videoContainer = document.getElementById('youtube-video-container');
            const videoPhrase = document.getElementById('youtube-video-phrase');
            const ytIframe = document.getElementById('yt-player-iframe');

            let resultKey = 'resultGood';
            let showVideo = (riskLevel === "위험" || riskLevel === "고위험");

            if (riskLevel === "고위험") {
                resultKey = 'resultHighRisk';
                if (helpBtn) helpBtn.classList.remove('hidden');
                if (showBookingBtn) showBookingBtn.classList.remove('hidden');
            } else if (riskLevel === "위험") {
                resultKey = 'resultDanger';
                if (helpBtn) helpBtn.classList.add('hidden');
                if (showBookingBtn) showBookingBtn.classList.remove('hidden');
            } else if (riskLevel === "주의") {
                resultKey = 'resultCaution';
                if (helpBtn) helpBtn.classList.add('hidden');
                if (showBookingBtn) showBookingBtn.classList.add('hidden');
            } else {
                resultKey = 'resultGood';
                if (helpBtn) helpBtn.classList.add('hidden');
                if (showBookingBtn) showBookingBtn.classList.add('hidden');
            }

            if (translations[currentLangCode] && translations[currentLangCode][resultKey]) {
                resultDescEl.innerHTML = translations[currentLangCode][resultKey];
            } else {
                resultDescEl.innerHTML = translations['ko'][resultKey];
            }

            // Handle Video Display
            if (showVideo && videoContainer && videoPhrase) {
                videoPhrase.textContent = translations[currentLangCode]?.videoPhrase || translations['ko'].videoPhrase;
                videoContainer.classList.remove('hidden');
                videoContainer.style.display = 'block'; // force display

                const ytWrapper = document.getElementById('yt-player-wrapper');
                if (ytWrapper && !document.getElementById('yt-player-iframe')) {
                    ytWrapper.innerHTML = '<iframe id="yt-player-iframe" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1001;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen src="https://www.youtube.com/embed/iGT6UxFT2CQ?rel=0&modestbranding=1&enablejsapi=1"></iframe>';
                }

                // Set global unhandled callback just in case
                window.onYouTubeIframeAPIReady = function () {
                    if (window.YT && window.YT.Player && !window.ytPlayerObj) {
                        try {
                            window.ytPlayerObj = new YT.Player('yt-player-iframe', {
                                events: {
                                    'onStateChange': function (event) {
                                        if (event.data == YT.PlayerState.PLAYING && !window.videoTracked) {
                                            window.videoTracked = true;
                                            const videoRecord = {
                                                date: new Date().toISOString().split('T')[0],
                                                name: realNameData || '알수없음',
                                                country: nationalityData || 'ZZ',
                                                gender: genderData || '기타',
                                                roomNumber: roomData || '알수없음',
                                                reservationDate: 'VIDEO_WATCHED',
                                                riskLevel: riskLevel,
                                                totalScore: typeof currentTotalScore !== 'undefined' ? currentTotalScore : 0,
                                                q1: 0, q2: 0, q3: 0, q4: 0, q5: 0, q6: 0, q7: 0, q8: 0, q9: 0, q10: 0,
                                                answers: { video_watched: true },
                                                timestamp: new Date().getTime()
                                            };
                                            const scriptUrl = 'https://script.google.com/macros/s/AKfycbx4lpkEAylkMU5Vm3w-SNnW0K25cqWIshm62vZtFMvtb1SkSIbpEYyK7XHmGb_ZRsu4LQ/exec';
                                            if (navigator.onLine) {
                                                fetch(scriptUrl, { method: 'POST', mode: 'cors', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(videoRecord) }).catch(e => console.log(e));
                                            } else {
                                                saveToOffline(videoRecord);
                                            }
                                        }
                                    }
                                }
                            });
                        } catch (e) { console.error('YT API error:', e); }
                    }
                };

                // Trigger manually if YT is already ready
                if (window.YT && window.YT.Player) {
                    window.onYouTubeIframeAPIReady();
                }

            } else if (videoContainer) {
                videoContainer.classList.add('hidden');
                videoContainer.style.display = 'none';
            }

            // Stability Guide Logic
            const stabilityGuide = document.getElementById('stability-guide');
            const stabilityTitle = document.getElementById('stability-title');
            const stabilityDesc = document.getElementById('stability-desc');

            if (riskLevel === "위험" || riskLevel === "고위험" || effectiveScore >= 31) {
                const groupA = (answersObj['q4'] + answersObj['q5']) / 2; // 우울, 불안
                const groupB = (answersObj['q6'] + answersObj['q7'] + answersObj['q10']) / 3; // 공격성, 스트레스, PTSD

                let title = '';
                let desc = '';

                if (groupA >= groupB) {
                    title = translations[currentLangCode]?.guideGroupATitle || translations['ko'].guideGroupATitle;
                    desc = translations[currentLangCode]?.guideGroupADesc || translations['ko'].guideGroupADesc;
                } else {
                    title = translations[currentLangCode]?.guideGroupBTitle || translations['ko'].guideGroupBTitle;
                    desc = translations[currentLangCode]?.guideGroupBDesc || translations['ko'].guideGroupBDesc;
                }

                if (stabilityGuide) {
                    if (stabilityTitle) stabilityTitle.textContent = title;
                    if (stabilityDesc) stabilityDesc.innerHTML = desc;
                    stabilityGuide.classList.remove('hidden');
                }
            } else {
                if (stabilityGuide) stabilityGuide.classList.add('hidden');
            }

            // --- Reset Room Setup if Open PC ---
            // Requirement: Open PC must lose its room config after completion
            const savedRoom = localStorage.getItem('mindcare_saved_room');
            if (!savedRoom) {
                // Not saved in localStorage, meaning it's either an Open PC or a General room that chose not to be remembered.
                // Reset setup variables explicitly so if they reload they get prompted again.
                roomData = '';
                roomSelect.value = '';
                roomNumberGroup.classList.add('hidden');
                rememberDeviceGroup.classList.add('hidden');
                confirmRoomBtn.classList.add('hidden');
                wardBtns.forEach(b => {
                    b.classList.remove('primary-btn');
                    b.classList.add('secondary-btn');
                });
            }
        });
    }

    // 4. Booking Logic (Mon, Tue, Thu, Fri @ 2 PM)
    const STORAGE_KEY = 'mindcare_bookings';
    const EXPIRY_DAYS = 7;
    const bookingModal = document.getElementById('booking-modal');
    const bookingDaysContainer = document.getElementById('booking-days-container');
    const showBookingBtn = document.getElementById('show-booking-btn');
    const closeBookingBtn = document.getElementById('close-booking-btn');

    const getBookings = () => {
        const data = localStorage.getItem(STORAGE_KEY);
        if (!data) return {};

        try {
            const parsed = JSON.parse(data);
            const now = new Date().getTime();
            const expiryTime = EXPIRY_DAYS * 24 * 60 * 60 * 1000;

            let validBookings = {};
            for (let key in parsed) {
                if (now - parsed[key].timestamp < expiryTime) {
                    validBookings[key] = parsed[key];
                }
            }
            return validBookings;
        } catch (e) {
            return {};
        }
    };

    const targetDays = ['mon', 'tue', 'thu', 'fri']; // Matches translation keys

    const renderBookingDays = () => {
        if (!bookingDaysContainer) return;

        const bookings = getBookings();
        bookingDaysContainer.innerHTML = '';
        const dict = translations[currentLangCode];

        targetDays.forEach(day => {
            const isBooked = bookings[day] !== undefined;
            const disabledClass = isBooked ? 'disabled' : '';

            const dayHtml = `
                <div class="day-card ${disabledClass}" data-day="${day}">
                    <span class="day-name">${dict[day]}</span>
                    <span class="day-time">${dict.at2pm}</span>
                </div>
            `;
            bookingDaysContainer.insertAdjacentHTML('beforeend', dayHtml);
        });

        // Attach events to day cards
        document.querySelectorAll('.day-card').forEach(card => {
            card.addEventListener('click', function () {
                if (this.classList.contains('disabled')) return; // In case CSS pointer-events trick is bypassed

                const chosenDay = this.getAttribute('data-day');

                // Save day lock
                const bookings = getBookings();
                bookings[chosenDay] = { timestamp: new Date().getTime() };
                localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));

                // Add Booking Info to last Assessment Record
                const dict = translations[currentLangCode];
                let records = JSON.parse(localStorage.getItem('mindcare_records') || '[]');
                if (records.length > 0) {
                    records[records.length - 1].booking = `${dict[chosenDay]} ${dict.at2pm}`;
                    localStorage.setItem('mindcare_records', JSON.stringify(records));
                }

                // Show localized success toast
                toast.textContent = translations[currentLangCode].bookedToast;
                toast.classList.remove('hidden');
                setTimeout(() => toast.classList.add('hidden'), 3500);

                // Re-render and close
                renderBookingDays();
                bookingModal.classList.add('hidden');
            });
        });
    };

    showBookingBtn.addEventListener('click', () => {
        renderBookingDays();
        bookingModal.classList.remove('hidden');
    });

    closeBookingBtn.addEventListener('click', () => {
        bookingModal.classList.add('hidden');
    });

    // 5. Secret Admin Entry
    const secretTrigger = document.getElementById('secret-admin-trigger');
    const adminModal = document.getElementById('admin-modal');
    const adminPasswordInput = document.getElementById('admin-password');
    const verifyAdminBtn = document.getElementById('verify-admin-btn');
    const cancelAdminBtn = document.getElementById('cancel-admin-btn');
    const adminErrorMsg = document.getElementById('admin-error-msg');
    const dashboardModal = document.getElementById('dashboard-modal');
    const closeDashboardBtn = document.getElementById('close-dashboard-btn');
    const csvDownloadBtn = document.getElementById('csv-download-btn');

    const ADMIN_SECRET_PASSWORD = '1305';

    secretTrigger.addEventListener('click', () => {
        // Redirect directly to the standalone admin page
        window.location.href = 'admin_v2.html';
    });



    // Chatbot Extended Translations
    const chatbotTranslations = {
        ko: {
            chatTitle: "마음이", chatInputHint: "메시지를 입력하세요...",
            greetHighRisk: "검사 결과가 많이 높게 나와서 저도 걱정돼요. 지금 가장 힘든 게 어떤 건가요?",
            greetNormal: "오늘 하루도 정말 고생 많으셨어요. 어떤 이야기든 편하게 들려주세요.",
            respTired: "{word} 때문에 많이 지치셨군요. 어떤 점이 가장 견디기 힘드신가요? 푹 쉬지 못해서인지, 아니면 다른 고민이 있으신 건지 조금 더 듣고 싶어요.",
            respDepressed: "그런 마음이 드셨다니 제 마음도 아프네요. {word}에 대해 언제부터 그런 감정을 느끼셨는지 편하게 털어놓아 주실래요?",
            respSleep: "밤에 잠을 못 이룰 만큼 생각이 많으셨군요. 혹시 {word}에 대한 걱정 때문에 계속 뒤척이시는 건가요?",
            respCrisis: "지금 느끼시는 고통이 너무 커 보여서 마음이 아픕니다. 절대로 혼자가 아니라는 걸 기억해주세요. 마음 깊은 곳에서 어떤 점이 가장 괴로우신가요?",
            respDefault: "{word}에 대해 말씀해주셔서 감사해요. 그 일로 인해 요즘 컨디션이나 기분은 좀 어떠신가요?",
            suggestTechniqueA: "아까 결과에서 보셨던 '5-4-3-2-1 감각 기법' 기억나시나요? 지금 저랑 같이 주변 사물 5가지부터 천천히 찾아보며 숨을 고르는 건 어떨까요?",
            suggestTechniqueB: "아까 결과 페이지에서 보셨던 '나비포옹법', 지금 저랑 같이 딱 3번만 천천히 토닥이며 심호흡해볼까요?",
            suggestCounseling: "이야기를 나누다 보니 혼자 견디기엔 너무 무거우실 것 같다는 생각이 들어요. 전문 상담사님과 직접 이야기해보시는 건 어떨까요? 제가 바로 연결해 드릴 수 있어요.",
            chatActionBook: "상담사 연결하기",
            chatActionTechnique: "기법 같이 해보기"
        },
        en: {
            chatTitle: "Maeum-i", chatInputHint: "Type a message...",
            greetHighRisk: "Your results came out quite high, so I'm a bit worried. What is the hardest thing for you to deal with right now?",
            greetNormal: "You've worked really hard today. Please feel free to tell me anything that's on your mind.",
            respTired: "It sounds like {word} has left you feeling truly exhausted. What part of it is the hardest to endure? I'd love to hear more.",
            respDepressed: "It breaks my heart to hear that... Since when did you start feeling this way about {word}?",
            respSleep: "Your mind must be too busy to let you sleep. Are you tossing and turning because of worries about {word}?",
            respCrisis: "The pain you're feeling seems so deep, it truly hurts my heart. You are not alone. What is causing you the most agony right now?",
            respDefault: "Thank you for sharing about {word}. How has that been affecting your overall mood and condition lately?",
            suggestTechniqueA: "Do you remember the '5-4-3-2-1 Grounding Technique' from the results page? How about we try finding 5 things around us and slowly take a breath together?",
            suggestTechniqueB: "Do you remember the 'Butterfly Hug' from earlier? How about we slowly tap our shoulders together just 3 times while taking a deep breath?",
            suggestCounseling: "It feels like this burden is too heavy to carry alone. How about talking directly with a professional counselor? I can connect you right away.",
            chatActionBook: "Connect to Counselor",
            chatActionTechnique: "Try Technique Together"
        },
        zh: {
            chatTitle: "Maeum-i (心心)", chatInputHint: "请输入留言...",
            greetHighRisk: "您的测试结果偏高，我很担心您。现在让您最痛苦的是什么事情呢？",
            greetNormal: "今天您也辛苦了。任何想说的话都可以放心跟我倾诉。",
            respTired: "听起来{word}让您感到非常疲惫。哪一点让您最难以忍受呢？是没休息好还是有其他烦恼，我想多听听您的想法。",
            respDepressed: "听到您这么说我也感到很难过。关于{word}，您从什么时候开始有这种感觉的呢？",
            respSleep: "看来您的思绪乱得让您无法入眠。是因为担心{word}而辗转反侧吗？",
            respCrisis: "您现在承受的痛苦让我很不忍心。请记住您绝对不是一个人。内心深处究竟是什么让您如此痛苦？",
            respDefault: "谢谢您告诉我关于{word}的事。这件事最近对您的情绪和状态有什么影响吗？",
            suggestTechniqueA: "还记得刚才结果页面上的“5-4-3-2-1 感官着陆法”吗？要不要和我一起，先慢慢找出周围的5件事物，调整一下呼吸？",
            suggestTechniqueB: "还记得刚才结果页面上的“蝴蝶拥抱法”吗？现在和我一起，只做3次，慢慢拍打肩膀深呼吸好吗？",
            suggestCounseling: "一个人承受这些实在太沉重了。要不要尝试和专业的心理咨询师直接聊聊？我可以马上为您连接。",
            chatActionBook: "连接咨询师",
            chatActionTechnique: "一起尝试技巧"
        },
        vi: {
            chatTitle: "Maeum-i", chatInputHint: "Nhập tin nhắn...",
            greetHighRisk: "Kết quả của bạn khá cao nên tôi đang rất lo lắng. Điều gì đang làm bạn cảm thấy khó khăn nhất lúc này?",
            greetNormal: "Bạn đã làm việc rất chăm chỉ hôm nay. Hãy thoải mái chia sẻ mọi điều với tôi nhé.",
            respTired: "Có vẻ như {word} đã vắt kiệt sức lực của bạn. Điều gì làm bạn cảm thấy khó chịu đựng nhất? Tôi rất muốn lắng nghe thêm.",
            respDepressed: "Tôi thấy rất xót xa khi nghe bạn nói vậy... Bạn bắt đầu cảm thấy như thế này về {word} từ khi nào?",
            respSleep: "Tâm trí bạn hẳn đang có quá nhiều suy tư khiến bạn mất ngủ. Bạn cứ trằn trọc mãi vì lo lắng về {word} phải không?",
            respCrisis: "Nỗi đau bạn đang chịu đựng dường như quá lớn khiến lòng tôi thắt lại. Xin hãy nhớ rằng bạn không hề đơn độc. Điều gì đang giày vò bạn nhất từ sâu thẳm trong lòng?",
            respDefault: "Cảm ơn bạn đã chia sẻ về {word}. Chuyện đó dạo này ảnh hưởng đến tâm trạng của bạn ra sao?",
            suggestTechniqueA: "Bạn có nhớ 'Kỹ thuật 5-4-3-2-1' ở trang kết quả không? Hay là bây giờ chúng ta cùng tìm 5 vật xung quanh và từ từ hít thở sâu nhé?",
            suggestTechniqueB: "Bạn có nhớ 'Cái ôm bươm bướm' lúc nãy không? Bạn có muốn cùng tôi vỗ nhẹ lên vai 3 lần và hít thở thật chậm không?",
            suggestCounseling: "Gánh vác mọi chuyện một mình quả là quá sức. Bạn có muốn trò chuyện trực tiếp với một chuyên gia tư vấn không? Tôi có thể kết nối ngay cho bạn.",
            chatActionBook: "Kết nối chuyên gia tư vấn",
            chatActionTechnique: "Cùng thử kỹ thuật"
        },
        ar: {
            chatTitle: "Maeum-i", chatInputHint: "اكتب رسالة...",
            greetHighRisk: "لقد كانت نتائجك مرتفعة جداً، وأنا قلق عليك. ما هو الشيء الأكثر إرهاقاً لك في هذه اللحظة؟",
            greetNormal: "لقد بذلت جهداً كبيراً اليوم. لا تتردد في أخباري بأي شيء يدور في ذهنك.",
            respTired: "يبدو أن {word} قد جعلك تشعر بالإرهاق حقاً. ما هو الجزء الأصعب للتحمل؟ أود أن أسمع المزيد.",
            respDepressed: "يؤلمني قلبي لسماع ذلك... منذ متى بدأت تشعر هكذا حيال {word}؟",
            respSleep: "لا بد أن عقلك مشغول جداً لدرجة تمنعك من النوم. هل تتقلب في الفراش بسبب القلق بشأن {word}؟",
            respCrisis: "الألم الذي تشعر به يبدو عميقاً جداً لدرجة أنه يؤلم قلبي. أنت لست وحدك، ما الذي يسبب لك أكبر قدر من المعاناة الآن؟",
            respDefault: "شكراً لمشاركتك الحديث عن {word}. كيف أثر ذلك على مزاجك وحالتك العامة مؤخراً؟",
            suggestTechniqueA: "هل تتذكر 'تقنية الحواس 5-4-3-2-1' من صفحة النتائج؟ ما رأيك أن نحاول إيجاد 5 أشياء حولنا ونتنفس ببطء معاً؟",
            suggestTechniqueB: "هل تتذكر 'عناق الفراشة' من قبل؟ ما رأيك أن نربت على أكتافنا ببطء معاً 3 مرات فقط بينما نأخذ نفساً عميقاً؟",
            suggestCounseling: "أشعر أن هذا العبء ثقيل جداً لتحمله بمفردك. ما رأيك بالتحدث مباشرة مع مستشار محترف؟ يمكنني توصيلك به فوراً.",
            chatActionBook: "التواصل مع الاستشاري",
            chatActionTechnique: "تجربة التقنية معاً"
        },
        th: {
            chatTitle: "Maeum-i", chatInputHint: "พิมพ์ข้อความ...",
            greetHighRisk: "ผลลัพธ์ของคุณค่อนข้างสูง ฉันเลยรู้สึกเป็นห่วงจัง ตอนนี้เรื่องอะไรที่ทำให้คุณรู้สึกลำบากใจที่สุดคะ?",
            greetNormal: "วันนี้คุณเก่งมากเลยนะคะที่ผ่านมันมาได้ มีเรื่องอะไรอยากเล่าให้ฉันฟัง สบายใจที่จะคุยได้เลยค่ะ",
            respTired: "ดูเหมือน {word} จะทำให้คุณเหนื่อยล้ามากๆ จุดไหนที่ทำให้คุณรู้สึกทนไม่ไหวที่สุดคะ? เล่าให้ฉันฟังอีกนิดสิคะ",
            respDepressed: "ฉันได้ยินแบบนั้นแล้วก็รู้สึกเจ็บปวดไปด้วยเลย... คุณเริ่มรู้สึกแบบนี้กับ {word} ตั้งแต่เมื่อไหร่คะ?",
            respSleep: "ในหัวของคุณคงมีเรื่องวุ่นวายเต็มไปหมดจนนอนไม่หลับใช่ไหมคะ คุณนอนกระสับกระส่ายเพราะกังวลเรื่อง {word} หรือเปล่า?",
            respCrisis: "ความเจ็บปวดที่คุณรู้สึกมันดูลึกซึ้งมากจนฉันเองก็ปวดใจ โปรดจำไว้ว่าคุณไม่ได้อยู่ลำพังนะคะ อะไรคือสิ่งที่ทรมานใจคุณมากที่สุดในตอนนี้?",
            respDefault: "ขอบคุณที่เล่าเรื่อง {word} ให้ฟังนะคะ แล้วเรื่องนี้มันส่งผลต่ออารมณ์ของคุณในช่วงนี้ยังไงบ้างคะ?",
            suggestTechniqueA: "จำ 'เทคนิค 5-4-3-2-1' จากหน้าผลลัพธ์เมื่อกี้ได้ไหมคะ? ลองมาสบตากับสิ่งของ 5 ชิ้นรอบตัว แล้วค่อยๆ หายใจลึกๆ ไปพร้อมกับฉันดีไหมคะ?",
            suggestTechniqueB: "จำ 'การกอดแบบผีเสื้อ' เมื่อกี้ได้ไหมคะ? เรามาลองค่อยๆ ตบไหล่ตัวเอง 3 ครั้งแล้วหายใจลึกๆ ไปด้วยกัน เอาไหมคะ?",
            suggestCounseling: "เรื่องนี้มันหนักเกินกว่าที่คุณจะแบกรับไว้คนเดียวนะคะ ลองคุยกับผู้เชี่ยวชาญดูไหม ฉันสามารถเชื่อมต่อคุณได้ทันทีเลย",
            chatActionBook: "เชื่อมต่อที่ปรึกษา",
            chatActionTechnique: "ลองเทคนิคไปด้วยกัน"
        },
        ru: {
            chatTitle: "Maeum-i", chatInputHint: "Введите сообщение...",
            greetHighRisk: "Ваши результаты оказались довольно высокими, и я за вас переживаю. Что сейчас для вас труднее всего?",
            greetNormal: "Вы сегодня отлично справились. Пожалуйста, не стесняйтесь рассказывать мне о чем угодно.",
            respTired: "Похоже, {word} сильно вас выматывает. Какая часть переносится тяжелее всего? Мне хочется услышать больше.",
            respDepressed: "У меня разрывается сердце, когда я слышу это... Как давно вы начали так себя чувствовать из-за {word}?",
            respSleep: "Ваш разум, должно быть, слишком занят, чтобы уснуть. Вы ворочаетесь из-за мыслей о {word}?",
            respCrisis: "Боль, которую вы чувствуете, кажется очень глубокой. Пожалуйста, помните, что вы не одни. Что причиняет вам наибольшие страдания прямо сейчас?",
            respDefault: "Спасибо, что поделились своими мыслями о {word}. Как это влияет на ваше настроение в последнее время?",
            suggestTechniqueA: "Помните 'Сенсорную технику 5-4-3-2-1' с предыдущей страницы? Как насчет того, чтобы вместе найти 5 вещей вокруг нас и глубоко вздохнуть?",
            suggestTechniqueB: "Помните 'Объятия бабочки'? Как насчет того, чтобы вместе медленно похлопать себя по плечам всего 3 раза, делая глубокий вдох?",
            suggestCounseling: "Кажется, это слишком тяжелое бремя, чтобы нести его в одиночку. Как насчет прямого разговора с профессиональным консультантом? Я могу вас соединить.",
            chatActionBook: "Связаться с консультантом",
            chatActionTechnique: "Попробовать технику вместе"
        },
        uz: {
            chatTitle: "Maeum-i", chatInputHint: "Xabar yozing...",
            greetHighRisk: "Natijalaringiz ancha yuqori chiqdi, shuning uchun biroz xavotirdaman. Hozir siz uchun eng qiyin narsa nima?",
            greetNormal: "Bugun judayam ko'p mehnat qildingiz. Istalgan dardingizni men bilan bo'lishishingiz mumkin.",
            respTired: "Ko'rinishidan {word} sizni chindan ham toliqtirib yuboribdi. Buning eng qiyin qismi nimada? Ko'proq eshitishni xohlardim.",
            respDepressed: "Buni eshitish men uchun ham og'ir... {word} haqida qachondan beri bunday his qila boshladingiz?",
            respSleep: "Xayollaringiz ko'pligidan uxlolmayotganga o'xshaysiz. {word} haqidagi xavotirlar sababli uxlolmayapsizmi?",
            respCrisis: "Siz his qilayotgan og'riq juda chuqur ko'rinadi, bu mening ham qalbimni og'ritadi. Iltimos, yolg'iz emasligingizni unutmang. Hozir sizni eng ko'p nima qiynayapti?",
            respDefault: "{word} haqida bo'lishganingiz uchun rahmat. Bu oxirgi paytlarda sizning kayfiyatingizga qanday ta'sir qilyapti?",
            suggestTechniqueA: "Avvalgi sahifadagi '5-4-3-2-1' mashqini eslaysizmi? Atrofimizdagi 5 ta narsani topib, birgalikda sekin nafas olsak qanday bo'ladi?",
            suggestTechniqueB: "Boyagi 'Kapalak quchog'i' esingizdami? Keling, 3 marta yelkamizga ohista urib, chuqur nafas olamizmi?",
            suggestCounseling: "Menimcha, bu yukni yolg'iz ko'tarish juda og'irlik qiladi. Professional maslahatchi bilan to'g'ridan-to'g'ri gaplashishni xohlaysizmi? Sizni darhol bog'lay olaman.",
            chatActionBook: "Maslahatchiga ulanish",
            chatActionTechnique: "Texnikani birga sinab ko'rish"
        }
    };

    // Merge explicitly
    Object.keys(chatbotTranslations).forEach(lang => {
        if (translations[lang]) {
            Object.assign(translations[lang], chatbotTranslations[lang]);
        }
    });

    // 6. Chatbot "Maeum-i" Logic
    const chatbotTrigger = document.getElementById('chatbot-trigger');
    const chatWidget = document.getElementById('chat-widget');
    const closeChatBtn = document.getElementById('close-chat-btn');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const sendChatBtn = document.getElementById('send-chat-btn');
    const talkBtn = document.getElementById('talk-btn');

    // Emotion Rule-based Detection
    const chatKeywords = {
        tired: /힘들|피곤|지쳐|tired|exhausted|hard|mệt|khó khăn|累|辛苦|устал|тяжело|charchadim|เหนื่อย|تعبان|مرهق/i,
        depressed: /우울|슬퍼|눈물|무기력|depressed|sad|crying|buồn|trầm|抑郁|悲伤|груст|депресси|xafa|เศร้า|حزين|مكتئب/i,
        sleep: /잠|불면|수면|자|sleep|insomnia|khó ngủ|mất ngủ|失眠|睡|уснуть|бессонница|uxlay|นอน|أرق|النوم/i,
        crisis: /죽|살|끝|괴로|자살|die|kill|suicide|end|chết|tự tử|死|不想活|умереть|суицид|o'lmo|ตาย|ฆ่า|انتحار|موت/i
    };

    let hasGreeted = false;
    let chatCount = 0; // Rule of 3 counter

    // Mirroring Helper: Extract possible nouns/subjects (Simplified)
    const findMirroringWord = (text) => {
        const commonNouns = ['회사', '일', '잠', '가족', '친구', '미래', '마음', '상황', '사람', '관계', 'work', 'job', 'sleep', 'family', 'friend', 'future', 'mind', 'situation', 'person', 'relationship'];
        for (const common of commonNouns) {
            if (text.toLowerCase().includes(common)) return common;
        }
        const words = text.split(/\s+/).filter(w => w.length >= 2);
        return words.length > 0 ? words[0] : (currentLangCode === 'ko' ? "말씀하신 부분" : "what you said");
    };

    const appendMessage = (text, sender, appendHtml = '') => {
        const msgDiv = document.createElement('div');
        msgDiv.className = `chat-message ${sender}`;

        if (sender === 'bot' && text) {
            // Typing Animation Setup
            msgDiv.textContent = '';
            chatMessages.appendChild(msgDiv);

            // Show typing indicator before bot speaks
            const indicator = document.createElement('div');
            indicator.className = 'typing-indicator';
            indicator.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
            chatMessages.appendChild(indicator);
            chatMessages.scrollTop = chatMessages.scrollHeight;

            setTimeout(() => {
                indicator.remove();
                typeWriter(text, msgDiv, () => {
                    if (appendHtml) {
                        msgDiv.insertAdjacentHTML('beforeend', `<br>${appendHtml}`);
                    }
                    chatMessages.scrollTop = chatMessages.scrollHeight;
                    completeChatHistory.push(`[Bot] ${text}`);
                });
            }, 1000); // 1s wait
        } else {
            msgDiv.textContent = text;
            if (appendHtml) msgDiv.insertAdjacentHTML('beforeend', appendHtml);
            chatMessages.appendChild(msgDiv);
            if (sender === 'user') {
                completeChatHistory.push(`[User] ${text}`);
            }
        }
        chatMessages.scrollTop = chatMessages.scrollHeight;
    };

    const typeWriter = (text, element, callback) => {
        let i = 0;
        const speed = 40;
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                chatMessages.scrollTop = chatMessages.scrollHeight;
                setTimeout(type, speed);
            } else if (callback) {
                callback();
            }
        }
        type();
    };

    const handleChatLogic = (userText) => {
        const ts = translations[currentLangCode];
        chatCount++;

        const mirrorWord = findMirroringWord(userText);
        const name = realNameData || (currentLangCode === 'ko' ? '사용자' : 'User');

        let response = "";
        let actionBtn = "";

        if (chatKeywords.crisis.test(userText)) {
            response = ts.respCrisis.replace('{user}', name);
            actionBtn = `<button class="chat-btn-action" onclick="document.getElementById('show-booking-btn').click();">${ts.chatActionBook}</button>`;
        } else {
            // Contextual Empathetic Question
            if (chatKeywords.tired.test(userText)) {
                response = ts.respTired.replace('{word}', mirrorWord);
            } else if (chatKeywords.depressed.test(userText)) {
                response = ts.respDepressed.replace('{word}', mirrorWord);
            } else if (chatKeywords.sleep.test(userText)) {
                response = ts.respSleep.replace('{word}', mirrorWord);
            } else {
                response = ts.respDefault.replace('{word}', mirrorWord);
            }

            // Progression Logic: Technique at turn 2, Counseling at turn 3+
            if (chatCount === 2) {
                if (globalGroupA >= globalGroupB) {
                    response += " <br><br>" + ts.suggestTechniqueA;
                } else {
                    response += " <br><br>" + ts.suggestTechniqueB;
                }
                actionBtn = `<button class="chat-btn-action" onclick="alert('${ts.chatActionTechnique} 🧘‍♂️');">${ts.chatActionTechnique}</button>`;
            } else if (chatCount >= 3) {
                response += " <br><br>" + (ts.suggestCounseling || ts.suggestCounseling); // Ensured translation
                actionBtn = `<button class="chat-btn-action" onclick="document.getElementById('show-booking-btn').click();">${ts.chatActionBook}</button>`;
            }
        }
        appendMessage(response, 'bot', actionBtn);
    };

    const sendUserMessage = () => {
        const text = chatInput.value.trim();
        if (!text) return;
        appendMessage(text, 'user');
        chatInput.value = '';
        handleChatLogic(text);
    };

    const openChat = () => {
        chatWidget.classList.remove('hidden');
        if (!hasGreeted) {
            const ts = translations[currentLangCode];
            const greeting = (globalRiskLevel === "위험" || globalRiskLevel === "고위험") ? ts.greetHighRisk : ts.greetNormal;
            setTimeout(() => {
                appendMessage(greeting, 'bot');
            }, 300);
            hasGreeted = true;
        }
    };

    chatbotTrigger.addEventListener('click', openChat);

    // Wire up "Talk to Maeum-i" button on result screen
    if (talkBtn) {
        talkBtn.addEventListener('click', openChat);
    }

    closeChatBtn.addEventListener('click', () => {
        chatWidget.classList.add('hidden');

        // Save Chat History to Backend and Local DB
        if (completeChatHistory.length > 0 && currentSessionId) {
            const chatLogString = completeChatHistory.join('\n');

            // 1. Update Local Storage for Dashboard
            let localData = JSON.parse(localStorage.getItem('mindcare_records') || '[]');
            const idx = localData.findIndex(r => r.sessionId === currentSessionId);
            if (idx > -1) {
                // Determine stability achievement (e.g. if they chatted 4+ times, they tried to find stability)
                localData[idx].chatLog = chatLogString;
                localStorage.setItem('mindcare_records', JSON.stringify(localData));
            }

            // 2. Fetch to Google Apps Script (Backend)
            const chatRecord = {
                sessionId: currentSessionId,
                date: new Date().toISOString().split('T')[0],
                name: realNameData || '알수없음',
                country: nationalityData || 'ZZ',
                gender: genderData || '기타',
                roomNumber: roomData || '알수없음',
                reservationDate: 'CHAT_LOG_UPDATE',
                chatSummary: chatLogString,
                totalScore: typeof currentTotalScore !== 'undefined' ? currentTotalScore : 0,
                q1: 0, q2: 0, q3: 0, q4: 0, q5: 0, q6: 0, q7: 0, q8: 0, q9: 0, q10: 0,
                timestamp: new Date().getTime()
            };

            const scriptUrl = 'https://script.google.com/macros/s/AKfycbx4lpkEAylkMU5Vm3w-SNnW0K25cqWIshm62vZtFMvtb1SkSIbpEYyK7XHmGb_ZRsu4LQ/exec';
            if (navigator.onLine) {
                fetch(scriptUrl, {
                    method: 'POST',
                    mode: 'cors',
                    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                    body: JSON.stringify(chatRecord)
                }).catch(err => console.log('GAS Fetch error:', err));
            }
        }
    });

    sendChatBtn.addEventListener('click', sendUserMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendUserMessage();
    });

    // Urgent Help Button Listener
    const helpBtn = document.getElementById('help-btn');
    if (helpBtn) {
        helpBtn.addEventListener('click', () => {
            const emergencyRecord = {
                date: new Date().toISOString().split('T')[0],
                name: realNameData || '알수없음',
                country: nationalityData || 'ZZ',
                gender: genderData || '기타',
                roomNumber: roomData || '알수없음',
                reservationDate: 'URGENT_HELP_REQUEST',
                riskLevel: '고위험_긴급',
                totalScore: 0,
                q1: 0, q2: 0, q3: 0, q4: 0, q5: 0, q6: 0, q7: 0, q8: 0, q9: 0, q10: 0,
                answers: { urgent: true },
                timestamp: new Date().getTime()
            };

            const scriptUrl = 'https://script.google.com/macros/s/AKfycbx4lpkEAylkMU5Vm3w-SNnW0K25cqWIshm62vZtFMvtb1SkSIbpEYyK7XHmGb_ZRsu4LQ/exec';

            if (navigator.onLine) {
                fetch(scriptUrl, {
                    method: 'POST',
                    mode: 'cors',
                    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                    body: JSON.stringify(emergencyRecord)
                }).catch(err => console.log('GAS Fetch error:', err));
            } else {
                saveToOffline(emergencyRecord);
            }

            alert('긴급 도움 요청이 전송되었습니다. 관리자가 곧 연락드릴 예정입니다.');
            helpBtn.classList.add('hidden'); // Hide button after requesting
        });
    }

    // User Experience Feedback Logic
    const emojiBtns = document.querySelectorAll('.emoji-btn');
    const feedbackThanks = document.getElementById('feedback-thanks');

    emojiBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.classList.contains('selected')) return; // Already submitted

            // Highlight selected
            emojiBtns.forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');

            // Show thanks
            if (feedbackThanks) feedbackThanks.classList.remove('hidden');

            const selectedEmoji = btn.getAttribute('data-value');

            // Construct feedback record for GAS
            const feedbackRecord = {
                sessionId: currentSessionId,
                date: new Date().toISOString().split('T')[0],
                name: realNameData || 'Anonymous',
                country: nationalityData || 'N/A',
                gender: genderData || 'N/A',
                roomNumber: roomData || '알수없음',
                reservationDate: 'UX_FEEDBACK',
                satisfaction: selectedEmoji, // Store for User_Satisfaction column
                riskLevel: selectedEmoji, // Legacy compatibility
                totalScore: typeof currentTotalScore !== 'undefined' ? currentTotalScore : 0,
                q1: 0, q2: 0, q3: 0, q4: 0, q5: 0, q6: 0, q7: 0, q8: 0, q9: 0, q10: 0,
                answers: { feedback: true },
                timestamp: new Date().getTime()
            };

            // Update local storage for real-time dashboard
            let localData = JSON.parse(localStorage.getItem('mindcare_records') || '[]');
            const idx = localData.findIndex(r => r.sessionId === currentSessionId);
            if (idx > -1) {
                localData[idx].satisfaction = selectedEmoji;
                localStorage.setItem('mindcare_records', JSON.stringify(localData));
            }

            // Show '전송 완료' message via alert as requested by user
            alert(translations[currentLangCode]?.resultDesc || "전송 완료되었습니다.");

            const scriptUrl = 'https://script.google.com/macros/s/AKfycbyttRDsXe90vE5CSSmJZ3p1PYYCDSSb7UrOTgb1u6IUaljw97QU9vAKhdFwo6EMRCS8/exec';

            if (navigator.onLine) {
                fetch(scriptUrl, {
                    method: 'POST',
                    mode: 'cors',
                    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                    body: JSON.stringify(feedbackRecord)
                }).catch(err => console.log('GAS Fetch error:', err));
            } else {
                saveToOffline(feedbackRecord);
            }
        });
    });

    // Initial setup Call
    setLanguage(currentLangCode); // Auto-apply language on load
});
