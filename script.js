// --- 1. DỮ LIỆU CÂU HỎI VÀ THANG ĐO ---
const MBI_SCALE = [
    { value: 0, label: 'Không bao giờ' }, { value: 1, label: 'Vài lần/năm' },
    { value: 2, label: '1 lần/tháng' }, { value: 3, label: 'Thỉnh thoảng/tháng' },
    { value: 4, label: '1 lần/tuần' }, { value: 5, label: 'Vài lần/tuần' }, { value: 6, label: 'Mỗi ngày' }
];

const DASS_SCALE = [
    { value: 0, label: 'Không đúng với tôi chút nào' }, { value: 1, label: 'Đúng phần nào/thỉnh thoảng' },
    { value: 2, label: 'Đúng phần nhiều/thường đúng' }, { value: 3, label: 'Hoàn toàn đúng/hầu như lúc nào' }
];

const DASS_QUESTIONS = [
    { id: 'dass-1', text: 'Bạn thấy khó mà thoải mái được', scale: DASS_SCALE, sectionTitle: 'Phần 1 — DASS-21', section: 'DASS-21' },
    { id: 'dass-2', text: 'Bạn bị khô miệng', scale: DASS_SCALE, sectionTitle: 'Phần 1 — DASS-21', section: 'DASS-21' },
    { id: 'dass-3', text: 'Bạn dường như chẳng có chút cảm xúc tích cực nào', scale: DASS_SCALE, sectionTitle: 'Phần 1 — DASS-21', section: 'DASS-21' },
    { id: 'dass-4', text: 'Bạn bị rối loạn nhịp thở (thở gấp, khó thở dù chẳng làm việc gì nặng)', scale: DASS_SCALE, sectionTitle: 'Phần 1 — DASS-21', section: 'DASS-21' },
    { id: 'dass-5', text: 'Bạn thấy khó bắt tay vào công việc', scale: DASS_SCALE, sectionTitle: 'Phần 1 — DASS-21', section: 'DASS-21' },
    { id: 'dass-6', text: 'Bạn có xu hướng phản ứng thái quá với mọi tình huống', scale: DASS_SCALE, sectionTitle: 'Phần 1 — DASS-21', section: 'DASS-21' },
    { id: 'dass-7', text: 'Bạn bị ra mồ hôi (chẳng hạn như mồ hôi tay...)', scale: DASS_SCALE, sectionTitle: 'Phần 1 — DASS-21', section: 'DASS-21' },
    { id: 'dass-8', text: 'Bạn thấy mình đang suy nghĩ quá nhiều', scale: DASS_SCALE, sectionTitle: 'Phần 1 — DASS-21', section: 'DASS-21' },
    { id: 'dass-9', text: 'Bạn lo lắng về những tình huống có thể làm bạn hoảng sợ hoặc biến bạn thành trò cười', scale: DASS_SCALE, sectionTitle: 'Phần 1 — DASS-21', section: 'DASS-21' },
    { id: 'dass-10', text: 'Bạn thấy mình chẳng có gì để mong đợi cả', scale: DASS_SCALE, sectionTitle: 'Phần 1 — DASS-21', section: 'DASS-21' },
    { id: 'dass-11', text: 'Bạn thấy bản thân dễ bị kích động', scale: DASS_SCALE, sectionTitle: 'Phần 1 — DASS-21', section: 'DASS-21' },
    { id: 'dass-12', text: 'Bạn thấy khó thư giãn được', scale: DASS_SCALE, sectionTitle: 'Phần 1 — DASS-21', section: 'DASS-21' },
    { id: 'dass-13', text: 'Bạn cảm thấy chán nản, thất vọng', scale: DASS_SCALE, sectionTitle: 'Phần 1 — DASS-21', section: 'DASS-21' },
    { id: 'dass-14', text: 'Bạn không chấp nhận được việc có cái gì đó xen vào cản trở việc bạn đang làm', scale: DASS_SCALE, sectionTitle: 'Phần 1 — DASS-21', section: 'DASS-21' },
    { id: 'dass-15', text: 'Bạn thấy mình gần như hoảng loạn', scale: DASS_SCALE, sectionTitle: 'Phần 1 — DASS-21', section: 'DASS-21' },
    { id: 'dass-16', text: 'Bạn không thấy hăng hái với bất kỳ việc gì nữa', scale: DASS_SCALE, sectionTitle: 'Phần 1 — DASS-21', section: 'DASS-21' },
    { id: 'dass-17', text: 'Bạn cảm thấy mình chẳng đáng làm người', scale: DASS_SCALE, sectionTitle: 'Phần 1 — DASS-21', section: 'DASS-21' },
    { id: 'dass-18', text: 'Bạn thấy mình khá dễ phật ý, tự ái', scale: DASS_SCALE, sectionTitle: 'Phần 1 — DASS-21', section: 'DASS-21' },
    { id: 'dass-19', text: 'Bạn nghe thấy rõ tiếng nhịp tim dù chẳng làm việc gì cả', scale: DASS_SCALE, sectionTitle: 'Phần 1 — DASS-21', section: 'DASS-21' },
    { id: 'dass-20', text: 'Bạn hay sợ vô cớ', scale: DASS_SCALE, sectionTitle: 'Phần 1 — DASS-21', section: 'DASS-21' },
    { id: 'dass-21', text: 'Bạn thấy cuộc sống vô nghĩa', scale: DASS_SCALE, sectionTitle: 'Phần 1 — DASS-21', section: 'DASS-21' }
];

const MBI_QUESTIONS = [
    { id: 'mbi-1', text: 'Bạn cảm thấy kiệt quệ về mặt cảm xúc do việc học của mình.', scale: MBI_SCALE, sectionTitle: 'Phần 2 — MBI-SS', section: 'MBI-SS' },
    { id: 'mbi-2', text: 'Bạn hoài nghi về ý nghĩa và tầm quan trọng của việc học.', scale: MBI_SCALE, sectionTitle: 'Phần 2 — MBI-SS', section: 'MBI-SS' },
    { id: 'mbi-3', text: 'Bạn đã học được nhiều điều thú vị trong suốt quá trình học tập của mình.', scale: MBI_SCALE, sectionTitle: 'Phần 2 — MBI-SS', section: 'MBI-SS' },
    { id: 'mbi-4', text: 'Bạn cảm thấy kiệt sức vào cuối một ngày có tiết học.', scale: MBI_SCALE, sectionTitle: 'Phần 2 — MBI-SS', section: 'MBI-SS' },
    { id: 'mbi-5', text: 'Trong các tiết học, bạn cảm thấy tự tin: bạn hoàn thành các nhiệm vụ một cách hiệu quả.', scale: MBI_SCALE, sectionTitle: 'Phần 2 — MBI-SS', section: 'MBI-SS' },
    { id: 'mbi-6', text: 'Bạn cảm thấy mệt mỏi khi thức dậy để đối mặt với một ngày đi học khác.', scale: MBI_SCALE, sectionTitle: 'Phần 2 — MBI-SS', section: 'MBI-SS' },
    { id: 'mbi-7', text: 'Bạn cảm thấy hào hứng khi hoàn thành xuất sắc mục tiêu học tập của mình.', scale: MBI_SCALE, sectionTitle: 'Phần 2 — MBI-SS', section: 'MBI-SS' },
    { id: 'mbi-8', text: 'Đối với bạn, việc học và lên lớp là một nỗ lực cực kỳ lớn.', scale: MBI_SCALE, sectionTitle: 'Phần 2 — MBI-SS', section: 'MBI-SS' },
    { id: 'mbi-9', text: 'Bạn trở nên ít hứng thú với việc học hơn kể từ khi vào ngôi trường này.', scale: MBI_SCALE, sectionTitle: 'Phần 2 — MBI-SS', section: 'MBI-SS' },
    { id: 'mbi-10', text: 'Bạn cảm thấy ít thiết tha/hứng thú hơn với việc học của mình.', scale: MBI_SCALE, sectionTitle: 'Phần 2 — MBI-SS', section: 'MBI-SS' },
    { id: 'mbi-11', text: 'Bạn tự đánh giá bản thân là một học sinh/sinh viên giỏi.', scale: MBI_SCALE, sectionTitle: 'Phần 2 — MBI-SS', section: 'MBI-SS' },
    { id: 'mbi-12', text: 'Bạn ngày càng hoài nghi hơn về tiềm năng của bản thân và tính hữu ích của việc học.', scale: MBI_SCALE, sectionTitle: 'Phần 2 — MBI-SS', section: 'MBI-SS' },
    { id: 'mbi-13', text: 'Bạn cảm thấy việc học đang bào mòn/hút cạn năng lượng của bản thân.', scale: MBI_SCALE, sectionTitle: 'Phần 2 — MBI-SS', section: 'MBI-SS' },
    { id: 'mbi-14', text: 'Bạn đã hoàn thành được nhiều việc có giá trị trong quá trình học tập.', scale: MBI_SCALE, sectionTitle: 'Phần 2 — MBI-SS', section: 'MBI-SS' },
    { id: 'mbi-15', text: 'Bạn tin rằng mình đóng góp một cách hiệu quả vào các lớp học mà mình tham gia.', scale: MBI_SCALE, sectionTitle: 'Phần 2 — MBI-SS', section: 'MBI-SS' }
];

// Gộp mảng và tự động cấp số thứ tự
const QUESTIONS = [...DASS_QUESTIONS, ...MBI_QUESTIONS].map((q, idx) => ({ ...q, order: idx + 1 }));

// Logic nhóm điểm
const DASS_STRESS = ['dass-1', 'dass-6', 'dass-8', 'dass-11', 'dass-12', 'dass-14', 'dass-18'];
const DASS_ANXIETY = ['dass-2', 'dass-4', 'dass-7', 'dass-9', 'dass-15', 'dass-19', 'dass-20'];
const DASS_DEPRESSION = ['dass-3', 'dass-5', 'dass-10', 'dass-13', 'dass-16', 'dass-17', 'dass-21'];

const MBI_EMOTIONAL_EXHAUSTION = ['mbi-1', 'mbi-4', 'mbi-6', 'mbi-8', 'mbi-13'];
const MBI_CYNICISM = ['mbi-2', 'mbi-9', 'mbi-10', 'mbi-12'];
const MBI_ACADEMIC_EFFICACY = ['mbi-3', 'mbi-5', 'mbi-7', 'mbi-11', 'mbi-14', 'mbi-15'];

// --- 2. TRẠNG THÁI ỨNG DỤNG ---
let step = 'start'; // 'start' | 'quiz' | 'result'
let currentIndex = 0;
let answers = {};
let currentScores = {};
let statsChartInstance = null;
let radarChartInstance = null;
let donutChartInstance = null;
let stats = { count: 0, emotionalExhaustion: 0, cynicism: 0, academicEfficacy: 0, stress: 0, anxiety: 0, depression: 0 };

// Load dữ liệu cũ từ trình duyệt
try {
    const saved = localStorage.getItem('mental_health_survey_v2');
    if (saved) stats = JSON.parse(saved);
} catch (e) { }

// --- 3. HÀM TÍNH TOÁN ---
const getSum = (ansObj, ids) => ids.reduce((total, id) => total + (ansObj[id] || 0), 0);

function getLevelConfig(scale, rawScore) {
    const score = rawScore * 2; // Nhân đôi cho chuẩn DASS-42
    let label = 'Bình thường';

    if (scale === 'stress') {
        if (score >= 34) label = 'Rất nặng'; else if (score >= 26) label = 'Nặng';
        else if (score >= 20) label = 'Vừa'; else if (score >= 16) label = 'Nhẹ';
    } else if (scale === 'depression') {
        if (score >= 28) label = 'Rất nặng'; else if (score >= 22) label = 'Nặng';
        else if (score >= 14) label = 'Vừa'; else if (score >= 10) label = 'Nhẹ';
    } else if (scale === 'anxiety') {
        if (score >= 20) label = 'Rất nặng'; else if (score >= 16) label = 'Nặng';
        else if (score >= 12) label = 'Vừa'; else if (score >= 8) label = 'Nhẹ';
    }

    if (label === 'Bình thường') return { label, className: 'border-emerald-200 bg-emerald-50 text-emerald-800', dot: 'bg-emerald-500', hex: '#10B981' };
    if (label === 'Nhẹ' || label === 'Vừa') return { label, className: 'border-amber-200 bg-amber-50 text-amber-900', dot: 'bg-amber-500', hex: '#F59E0B' };
    return { label, className: 'border-rose-200 bg-rose-50 text-rose-900', dot: 'bg-rose-500', hex: '#F43F5E' };
}

// Lời khuyên tương ứng với từng mức độ điểm
function getAdvice(label) {
    switch (label) {
        case 'Bình thường':
            return 'Bạn đang duy trì trạng thái tâm lý khá ổn định. Hãy tiếp tục ngủ đủ giấc, vận động nhẹ và giữ kết nối với bạn bè, người thân.';
        case 'Nhẹ':
            return 'Có vài dấu hiệu căng thẳng nhẹ. Thử dành 10-15 phút mỗi ngày để nghỉ ngơi, hít thở sâu hoặc đi dạo để lấy lại năng lượng.';
        case 'Vừa':
            return 'Mức độ đang ở ngưỡng vừa. Bạn nên sắp xếp lại lịch học - nghỉ hợp lý hơn, thử các kỹ thuật thư giãn và chia sẻ cảm xúc với người bạn tin tưởng.';
        case 'Nặng':
            return 'Chỉ số đang ở mức nặng. Bạn nên tìm đến phòng tư vấn tâm lý học đường hoặc chuyên gia để được lắng nghe và hỗ trợ sớm.';
        default:
            return 'Chỉ số đang ở mức rất cao. Rất khuyến khích bạn liên hệ ngay với chuyên gia tâm lý hoặc đường dây hỗ trợ sức khỏe tâm thần gần nhất.';
    }
}

// --- 4. HÀM RENDER GIAO DIỆN ---
function renderHeader() {
    const answeredCount = Object.keys(answers).length;
    const progress = (answeredCount / QUESTIONS.length) * 100;
    return `
            <header class="sticky top-0 z-40 bg-gradient-to-r from-[#0EA5E9] to-[#2DD4BF] text-white shadow-lg shadow-sky-950/10">
                <div class="mx-auto w-full max-w-4xl px-4 md:px-6 py-3 md:py-4">
                    <div class="flex flex-row items-center justify-between gap-4">
                        <div class="flex items-center gap-3">
                            <div class="flex h-10 w-10 md:h-11 md:w-11 shrink-0 items-center justify-center rounded-2xl bg-white/20 shadow-lg shadow-sky-950/10">
                                <i data-lucide="brain" class="h-5 w-5 md:h-6 md:w-6"></i>
                            </div>
                            <div>
                                <p class="text-[10px] md:text-xs font-semibold uppercase tracking-[0.22em] text-sky-50">Sàng lọc học đường</p>
                                <h1 class="text-sm md:text-2xl font-black tracking-tight">Khảo Sát Sức Khỏe Tâm Lý</h1>
                            </div>
                        </div>
                    </div>
                    ${step === 'quiz' ? `
                    <div class="mt-3 rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur">
                        <div class="mb-2 flex items-center justify-between gap-6">
                            <span class="text-xs font-semibold uppercase tracking-[0.18em] text-sky-50">Tiến độ</span>
                            <strong class="font-mono text-sm text-white">${answeredCount}/${QUESTIONS.length}</strong>
                        </div>
                        <div class="h-2 w-full overflow-hidden rounded-full bg-white/15">
                            <div class="h-full rounded-full bg-white transition-all duration-300" style="width: ${progress}%"></div>
                        </div>
                    </div>
                    ` : ''}
                </div>
            </header>`;
}

function renderStart() {
    return `
            <section class="mx-auto grid w-full max-w-4xl grid-cols-1 md:grid-cols-[1.08fr_0.92fr] items-center gap-8 px-4 md:px-6 py-10 md:py-12 animate-fade-in">
                <div class="rounded-[2rem] border border-sky-100 bg-white p-6 md:p-10 shadow-xl shadow-sky-100/70">
                    <div class="mb-8 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-sky-50 px-3 py-2 text-sm font-bold text-sky-700">
                        <i data-lucide="shield-check" class="h-4 w-4"></i><span>DASS-21 + MBI-SS chuẩn</span>
                    </div>
                    <h2 class="max-w-3xl text-4xl md:text-6xl font-black leading-[1.1] md:leading-[0.95] tracking-tight text-[#0F3B57]">Khảo Sát Tâm Lý</h2>
                    <p class="mt-6 text-base leading-7 text-slate-600">
                        Một trải nghiệm khảo sát mạch lạc, ẩn danh. Bao gồm thang đo DASS-21 về mức độ Căng thẳng, Lo âu, Trầm cảm và MBI-SS về kiệt quệ học đường.
                    </p>
                    <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <article class="rounded-3xl border border-sky-100 bg-[#F0FDFA] p-5">
                            <p class="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">DASS-21</p>
                            <h3 class="mt-2 text-2xl font-black text-[#0F3B57]">21 câu</h3>
                        </article>
                        <article class="rounded-3xl border border-sky-100 bg-[#F0F9FF] p-5">
                            <p class="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">MBI-SS</p>
                            <h3 class="mt-2 text-2xl font-black text-[#0F3B57]">15 câu</h3>
                        </article>
                    </div>
                    <button type="button" onclick="handleStart()" class="mt-8 flex w-full md:w-auto items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#0EA5E9] to-[#14B8A6] px-6 py-4 text-base font-black text-white shadow-xl shadow-sky-200/70 transition hover:-translate-y-0.5 hover:from-[#0284C7] hover:to-[#0D9488]">
                        <span>Bắt đầu khảo sát</span><i data-lucide="arrow-right" class="h-5 w-5"></i>
                    </button>
                </div>
                <aside class="rounded-[2rem] border border-sky-100 bg-white p-6 shadow-xl shadow-sky-100/60">
                    <div class="rounded-[1.5rem] bg-gradient-to-br from-[#0EA5E9] to-[#2DD4BF] p-6 text-white overflow-hidden relative">
                        <svg viewBox="0 0 300 220" class="w-full h-40 md:h-48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <circle cx="150" cy="118" r="88" fill="rgba(255,255,255,0.12)"/>
                            <circle cx="150" cy="118" r="60" fill="rgba(255,255,255,0.10)"/>
                            <path d="M150 60 Q170 75 165 95 Q185 90 190 108 Q195 128 178 138" stroke="rgba(255,255,255,0.55)" stroke-width="4" fill="none" stroke-linecap="round"/>
                            <path d="M150 60 Q130 75 135 95 Q115 90 110 108 Q105 128 122 138" stroke="rgba(255,255,255,0.55)" stroke-width="4" fill="none" stroke-linecap="round"/>
                            <ellipse cx="150" cy="165" rx="46" ry="14" fill="rgba(255,255,255,0.18)"/>
                            <path d="M110 168 Q150 200 190 168 Q188 150 150 150 Q112 150 110 168 Z" fill="#ffffff" opacity="0.92"/>
                            <circle cx="150" cy="118" r="30" fill="#ffffff" opacity="0.95"/>
                            <path d="M138 108 Q150 98 162 108" stroke="#0EA5E9" stroke-width="3" fill="none" stroke-linecap="round"/>
                            <path d="M141 122 Q150 128 159 122" stroke="#0EA5E9" stroke-width="3" fill="none" stroke-linecap="round"/>
                            <circle cx="80" cy="55" r="5" fill="rgba(255,255,255,0.5)"/>
                            <circle cx="225" cy="45" r="7" fill="rgba(255,255,255,0.4)"/>
                            <circle cx="245" cy="90" r="4" fill="rgba(255,255,255,0.5)"/>
                        </svg>
                        <p class="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-sky-50">Tổng quan</p>
                        <h3 class="mt-3 text-2xl font-black tracking-tight">Trải nghiệm thuận tiện</h3>
                        <p class="mt-4 text-sm leading-7 text-sky-50">Hệ thống lưu tiến độ của bạn. Bạn có thể quay lại đổi đáp án bất cứ lúc nào trước khi nộp.</p>
                    </div>
                </aside>
            </section>`;
}

function renderQuiz() {
    const q = QUESTIONS[currentIndex];
    const answeredCount = Object.keys(answers).length;
    const progress = ((currentIndex + 1) / QUESTIONS.length) * 100;
    const allAnswered = answeredCount === QUESTIONS.length;
    const isLast = currentIndex === QUESTIONS.length - 1;

    const navButtons = QUESTIONS.map((item, idx) => {
        let cls = 'border-slate-200 bg-white text-slate-400 hover:border-sky-300 hover:text-slate-700';
        if (currentIndex === idx) cls = 'border-[#0EA5E9] bg-[#0EA5E9] text-white shadow-md shadow-sky-200';
        else if (answers[item.id] !== undefined) cls = 'border-teal-100 bg-teal-50 text-teal-700';
        return `<button type="button" onclick="handleJump(${idx})" class="flex h-10 w-10 md:h-9 md:w-9 items-center justify-center rounded-xl border text-xs font-black transition ${cls}"><span>${idx + 1}</span></button>`;
    }).join('');

    const optionsHTML = q.scale.map(opt => {
        const isSelected = answers[q.id] === opt.value;
        const bgContainer = isSelected ? 'border-[#0EA5E9] bg-sky-50 shadow-lg shadow-sky-100/70' : 'border-slate-200 bg-white hover:border-sky-200 hover:bg-[#F5FAFF]';
        const bgNumber = isSelected ? 'bg-[#0EA5E9] text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-sky-100 group-hover:text-sky-700';
        return `
                <div onclick="handleAnswer('${q.id}', ${opt.value})" class="group flex cursor-pointer flex-col gap-3 rounded-2xl border p-4 transition hover:-translate-y-0.5 ${bgContainer}">
                    <span class="flex h-10 w-10 items-center justify-center rounded-xl text-sm font-black transition ${bgNumber}">${opt.value}</span>
                    <span class="text-sm font-bold leading-5 text-slate-700">${opt.label}</span>
                </div>`;
    }).join('');

    return `
            <section class="mx-auto flex w-full max-w-4xl flex-col gap-5 px-4 md:px-8 py-6 md:py-8 animate-fade-in">
                <nav class="rounded-[1.75rem] border border-sky-100 bg-white p-4 shadow-sm">
                    <div class="flex flex-wrap justify-center gap-2">${navButtons}</div>
                </nav>
                <article class="overflow-hidden rounded-[2rem] border border-sky-100 bg-white shadow-xl shadow-sky-100/60">
                    <div class="h-2 bg-slate-100">
                        <div class="h-full bg-gradient-to-r from-[#0EA5E9] to-[#2DD4BF] transition-all duration-300" style="width: ${progress}%"></div>
                    </div>
                    <div class="p-5 md:p-10">
                        <div class="mb-6 flex flex-wrap items-center gap-2">
                            <span class="rounded-full bg-sky-50 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-sky-700">${q.sectionTitle}</span>
                            <span class="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-slate-600">Câu ${q.order}</span>
                        </div>
                        <h2 class="max-w-4xl text-xl md:text-4xl font-black leading-tight tracking-[-0.03em] text-[#0F3B57]">${q.text}</h2>
                        <div class="mt-8 grid gap-3 ${q.section === 'MBI-SS' ? 'grid-cols-2 md:grid-cols-7' : 'grid-cols-1 md:grid-cols-4'}">${optionsHTML}</div>
                    </div>
                    <footer class="flex flex-row items-center justify-between gap-3 border-t border-slate-100 bg-[#F5FAFF] p-4 md:p-6">
                        <button type="button" onclick="handlePrev()" ${currentIndex === 0 ? 'disabled' : ''} class="inline-flex items-center justify-center gap-2 rounded-2xl px-4 md:px-5 py-3 font-black text-slate-600 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-35">
                            <i data-lucide="chevron-left" class="h-5 w-5"></i><span class="hidden md:inline">Câu trước</span>
                        </button>
                        ${isLast ? `
                        <button type="button" onclick="handleSubmit()" ${!allAnswered ? 'disabled' : ''} class="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#0EA5E9] to-[#14B8A6] px-5 md:px-6 py-3 font-black text-white shadow-lg shadow-sky-200/70 transition hover:-translate-y-0.5 hover:from-[#0284C7] hover:to-[#0D9488] disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:translate-y-0">
                            <span>Nộp bài</span><i data-lucide="check-circle" class="h-5 w-5"></i>
                        </button>` : `
                        <button type="button" onclick="handleNext()" class="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#0EA5E9] to-[#14B8A6] px-5 md:px-6 py-3 font-black text-white shadow-lg shadow-sky-200/70 transition hover:-translate-y-0.5 hover:from-[#0284C7] hover:to-[#0D9488]">
                            <span>Tiếp theo</span><i data-lucide="chevron-right" class="h-5 w-5"></i>
                        </button>`}
                    </footer>
                </article>
            </section>`;
}

function renderResult() {
    const MBI_ROWS = [
        { id: 'emotionalExhaustion', title: 'Kiệt quệ cảm xúc', max: 30, helper: '' },
        { id: 'cynicism', title: 'Hoài nghi', max: 24, helper: '' },
        { id: 'academicEfficacy', title: 'kết quả', max: 36, helper: '' }
    ];
    const DASS_ROWS = [
        { id: 'stress', title: 'Stress', max: 42 },
        { id: 'anxiety', title: 'Lo âu', max: 42 },
        { id: 'depression', title: 'Trầm cảm', max: 42 }
    ];

    const mbiHTML = MBI_ROWS.map(row => {
        const val = currentScores[row.id];
        const pct = Math.round((val / row.max) * 100);
        return `
                <article class="rounded-3xl border border-sky-100 bg-[#F5FAFF] p-5">
                    <div class="flex items-end justify-between gap-4">
                        <div>
                            <h3 class="text-base font-black text-[#0F3B57]">${row.title}</h3>
                            <p class="mt-1 text-xs font-semibold text-slate-500">${row.helper}</p>
                        </div>
                        <strong class="font-mono text-2xl text-[#0F3B57]">${val}<span class="text-sm text-slate-400">/${row.max}</span></strong>
                    </div>
                    <div class="mt-4 h-2 overflow-hidden rounded-full bg-white">
                        <div class="h-full rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#2DD4BF]" style="width: ${pct}%"></div>
                    </div>
                </article>`;
    }).join('');

    const dassHTML = DASS_ROWS.map(row => {
        const rawVal = currentScores[row.id];
        const config = getLevelConfig(row.id, rawVal);
        return `
                <article class="rounded-3xl border p-5 ${config.className}">
                    <div class="flex items-center justify-between gap-3">
                        <h3 class="font-black">${row.title}</h3>
                        <span class="h-3 w-3 rounded-full ${config.dot}"></span>
                    </div>
                    <p class="mt-4 font-mono text-3xl font-black">${rawVal * 2}<span class="text-sm opacity-60">/${row.max}</span></p>
                    <p class="mt-2 text-sm font-black">${config.label}</p>
                    <p class="mt-3 text-xs leading-5 opacity-80">${getAdvice(config.label)}</p>
                </article>`;
    }).join('');

    return `
            <section class="mx-auto grid w-full max-w-6xl grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-4 px-3 sm:px-4 md:px-6 py-4 md:py-6 animate-fade-in">
                <aside class="rounded-[2rem] border border-sky-100 bg-white p-4 md:p-5 shadow-xl shadow-sky-100/60">
                    <div class="mb-8 flex items-start justify-between gap-4">
                        <div>
                            <p class="text-xs font-black uppercase tracking-[0.2em] text-sky-700">Báo cáo MBI-SS</p>
                            <h2 class="mt-2 text-2xl md:text-3xl font-black tracking-[-0.04em] text-[#0F3B57]">Kết quả của bạn</h2>
                        </div>
                        <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
                            <i data-lucide="heart-pulse" class="h-6 w-6"></i>
                        </div>
                    </div>
                    <div class="mb-6 rounded-3xl border border-sky-100 bg-[#F5FAFF] p-4 md:p-5">
                        <p class="text-center text-xs font-black uppercase tracking-[0.18em] text-slate-500">Chỉ số Burnout</p>
                        <div class="chart-wrap h-40 md:h-48 mt-2">
                            <canvas id="donutChart"></canvas>
                            <div class="donut-center">
                                <strong id="donutCenterValue" class="font-mono text-3xl font-black text-[#0F3B57]">0%</strong>
                                <span class="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">Mức nguy cơ</span>
                            </div>
                        </div>
                    </div>
                    <div class="space-y-4">${mbiHTML}</div>
                </aside>

                <div class="space-y-6">
                    <section class="rounded-[2rem] border border-sky-100 bg-white p-6 shadow-xl shadow-sky-100/60">
                        <div class="mb-6 flex items-center gap-3">
                            <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0EA5E9] to-[#2DD4BF] text-white">
                                <i data-lucide="brain" class="h-5 w-5"></i>
                            </div>
                            <div>
                                <p class="text-xs font-black uppercase tracking-[0.18em] text-slate-500">DASS-21</p>
                                <h2 class="text-xl font-black tracking-[-0.03em] text-[#0F3B57]">Stress / Lo âu / Trầm cảm</h2>
                            </div>
                        </div>
                        <div class="chart-wrap h-56 md:h-60 mb-4"><canvas id="radarChart"></canvas></div>
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">${dassHTML}</div>
                    </section>

                    <section class="rounded-[2rem] border border-sky-100 bg-white p-6 shadow-xl shadow-sky-100/60">
                        <div class="mb-6 flex flex-row items-end justify-between gap-3">
                            <div>
                                <p class="text-xs font-black uppercase tracking-[0.18em] text-sky-700">Thống kê cộng đồng</p>
                                <h2 class="mt-1 text-xl font-black tracking-[-0.03em] text-[#0F3B57]">Điểm trung bình</h2>
                            </div>
                            <div class="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-xs font-bold text-slate-700">
                                <i data-lucide="bar-chart" class="h-4 w-4"></i><span>${stats.count} lượt</span>
                            </div>
                        </div>
                        <div class="chart-wrap h-56 w-full"><canvas id="statsChart"></canvas></div>
                        <button type="button" onclick="handleReset()" class="mt-6 flex w-full md:w-auto items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#0EA5E9] to-[#14B8A6] px-6 py-4 font-black text-white shadow-lg shadow-sky-200/70 transition hover:-translate-y-0.5 hover:from-[#0284C7] hover:to-[#0D9488]">
                            <i data-lucide="rotate-ccw" class="h-5 w-5"></i><span>Làm lại khảo sát</span>
                        </button>
                    </section>
                </div>
            </section>`;
}

// --- 5. LOGIC ĐIỀU HƯỚNG ---
function renderApp() {
    const root = document.getElementById('root');
    const isResult = step === 'result';
    root.innerHTML = `
                ${renderHeader()}
                <main class="${isResult ? 'result-page' : ''}">
                    ${step === 'start' ? renderStart() : ''}
                    ${step === 'quiz' ? renderQuiz() : ''}
                    ${step === 'result' ? renderResult() : ''}
                </main>
            `;
    lucide.createIcons();
    if (step === 'result') { initRadarChart(); initDonutChart(); initStatsChart(); }
}

function handleStart() { step = 'quiz'; renderApp(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
function handlePrev() { if (currentIndex > 0) { currentIndex--; renderApp(); } }
function handleNext() { if (currentIndex < QUESTIONS.length - 1) { currentIndex++; renderApp(); } }
function handleJump(idx) { currentIndex = idx; renderApp(); }
function handleAnswer(qId, val) { answers[qId] = val; renderApp(); }

function handleSubmit() {
    if (Object.keys(answers).length !== QUESTIONS.length) return;

    // Tính điểm (DASS ở đây giữ nguyên điểm thô, hàm Result sẽ tự x2 khi hiển thị)
    currentScores = {
        emotionalExhaustion: getSum(answers, MBI_EMOTIONAL_EXHAUSTION),
        cynicism: getSum(answers, MBI_CYNICISM),
        academicEfficacy: getSum(answers, MBI_ACADEMIC_EFFICACY),
        stress: getSum(answers, DASS_STRESS),
        anxiety: getSum(answers, DASS_ANXIETY),
        depression: getSum(answers, DASS_DEPRESSION)
    };

    // Cập nhật stats
    stats.count += 1;
    stats.emotionalExhaustion += currentScores.emotionalExhaustion;
    stats.cynicism += currentScores.cynicism;
    stats.academicEfficacy += currentScores.academicEfficacy;
    stats.stress += (currentScores.stress * 2);
    stats.anxiety += (currentScores.anxiety * 2);
    stats.depression += (currentScores.depression * 2);

    localStorage.setItem('mental_health_survey_v2', JSON.stringify(stats));

    step = 'result';
    renderApp();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleReset() {
    answers = {}; currentIndex = 0; step = 'start';
    renderApp(); window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- 6. KHỞI TẠO BIỂU ĐỒ ---

// Biểu đồ radar cho 3 chỉ số DASS-21 của lần làm bài hiện tại
function initRadarChart() {
    const canvas = document.getElementById('radarChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const rows = [
        { key: 'stress', label: 'Stress' },
        { key: 'anxiety', label: 'Lo âu' },
        { key: 'depression', label: 'Trầm cảm' }
    ];
    const values = rows.map(r => currentScores[r.key] * 2);
    const pointColors = rows.map(r => getLevelConfig(r.key, currentScores[r.key]).hex);

    if (radarChartInstance) radarChartInstance.destroy();
    radarChartInstance = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: rows.map(r => r.label),
            datasets: [{
                label: 'Điểm của bạn',
                data: values,
                backgroundColor: 'rgba(14, 165, 233, 0.18)',
                borderColor: '#0EA5E9',
                borderWidth: 2,
                pointBackgroundColor: pointColors,
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            animation: { duration: 1400, easing: 'easeOutElastic' },
            scales: {
                r: {
                    min: 0, max: 42,
                    ticks: { stepSize: 14, backdropColor: 'transparent', font: { size: 10, family: 'Inter' } },
                    pointLabels: { font: { size: 13, weight: 'bold', family: 'Inter' }, color: '#0F3B57' },
                    grid: { color: '#DCEEFB' },
                    angleLines: { color: '#DCEEFB' }
                }
            },
            plugins: {
                legend: { display: false },
                tooltip: { callbacks: { label: ctx => ctx.parsed.r + '/42 điểm' } }
            }
        }
    });
}

// Biểu đồ donut tổng hợp chỉ số Burnout (MBI-SS) của lần làm bài hiện tại
function initDonutChart() {
    const canvas = document.getElementById('donutChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const exhaustion = currentScores.emotionalExhaustion; // /30
    const cynicism = currentScores.cynicism; // /24
    const lowEfficacy = 36 - currentScores.academicEfficacy; // /36, càng cao càng đáng lo

    const total = exhaustion + cynicism + lowEfficacy;
    const maxTotal = 30 + 24 + 36;
    const riskPct = Math.round((total / maxTotal) * 100);
    const centerEl = document.getElementById('donutCenterValue');
    if (centerEl) centerEl.textContent = riskPct + '%';

    if (donutChartInstance) donutChartInstance.destroy();
    donutChartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Kiệt quệ cảm xúc', 'Hoài nghi', 'Ảnh hưởng '],
            datasets: [{
                data: [exhaustion, cynicism, lowEfficacy],
                backgroundColor: ['#0EA5E9', '#F59E0B', '#F43F5E'],
                borderColor: '#ffffff',
                borderWidth: 3,
                cutout: '72%'
            }]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            animation: { duration: 1200, easing: 'easeOutQuart' },
            plugins: {
                legend: { position: 'bottom', labels: { font: { size: 10, family: 'Inter' }, boxWidth: 10, padding: 10 } },
                tooltip: { callbacks: { label: ctx => ctx.label + ': ' + ctx.parsed } }
            }
        }
    });
}

// Biểu đồ cột thống kê trung bình cộng đồng
function initStatsChart() {
    const canvas = document.getElementById('statsChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const div = stats.count > 0 ? stats.count : 1;
    const data = [
        Math.round((stats.emotionalExhaustion / div / 30) * 100),
        Math.round((stats.cynicism / div / 24) * 100),
        Math.round((stats.academicEfficacy / div / 36) * 100),
        Math.round((stats.stress / div / 42) * 100),
        Math.round((stats.anxiety / div / 42) * 100),
        Math.round((stats.depression / div / 42) * 100)
    ];

    if (statsChartInstance) statsChartInstance.destroy();
    statsChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Kiệt quệ', 'Hoài nghi', 'Kết quả', 'Stress', 'Lo âu', 'Trầm cảm'],
            datasets: [{
                data: data,
                backgroundColor: ['#0ee983', '#0284C7', '#b81414', '#ebf838', '#2DD4BF', '#9b00f5'],
                borderRadius: 6, barThickness: 24
            }]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            animation: { duration: 1200, easing: 'easeOutQuart' },
            scales: {
                y: { max: 100, ticks: { font: { size: 11, family: 'Inter' } }, border: { dash: [4, 4] } },
                x: { grid: { display: false }, ticks: { font: { size: 11, weight: 'bold', family: 'Inter' } } }
            },
            plugins: {
                legend: { display: false },
                tooltip: { callbacks: { label: ctx => ctx.parsed.y + '% ' } }
            }
        }
    });
}

// Khởi động Ứng dụng
renderApp();
