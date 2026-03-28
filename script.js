/* ===================================================================
   OMSPACE — Complete Script — ALL Features Working
   =================================================================== */

const STORAGE_KEY = 'omspace_state';
const SYNC_STORAGE_KEY = 'omspace_sync_state';

const DEFAULT_SEARCH_ENGINES = [
    { id: 'google', name: 'Google', label: 'G', icon: 'search', url: 'https://www.google.com/search?q=' },
    { id: 'youtube', name: 'YouTube', label: 'Y', icon: 'play_circle', url: 'https://www.youtube.com/results?search_query=' },
    { id: 'duckduckgo', name: 'DuckDuckGo', label: 'D', icon: 'shield', url: 'https://duckduckgo.com/?q=' },
    { id: 'bing', name: 'Bing', label: 'B', icon: 'language', url: 'https://www.bing.com/search?q=' }
];

const AI_ACTIONS = [
    { id: 'summarize', icon: 'summarize', label: 'Summarize Clipboard', prompt: 'Summarize the following text into crisp bullet points:\n\n' },
    { id: 'rewrite', icon: 'edit_note', label: 'Rewrite Better', prompt: 'Rewrite the following text to make it clearer and better structured:\n\n' },
    { id: 'translate', icon: 'translate', label: 'Translate to English', prompt: 'Translate the following text to English and preserve meaning:\n\n' },
    { id: 'extract', icon: 'fact_check', label: 'Action Items', prompt: 'Extract the action items from the following text:\n\n' }
];

const AI_PROVIDER_URLS = {
    chatgpt: 'https://chatgpt.com',
    gemini: 'https://gemini.google.com',
    claude: 'https://claude.ai',
    perplexity: 'https://www.perplexity.ai'
};

const UI_LANGUAGES = [
    { code: 'ar', label: 'Arabic (العربية)' },
    { code: 'az', label: 'Azerbaijani (Azərbaycanca)' },
    { code: 'bn', label: 'Bangla (বাংলা)' },
    { code: 'zh-CN', label: 'Chinese (Simplified) (简体中文)' },
    { code: 'zh-TW', label: 'Chinese (Traditional) (繁體中文)' },
    { code: 'cs', label: 'Czech (Čeština)' },
    { code: 'en', label: 'English (ENGLISH)' },
    { code: 'fr', label: 'French (Français)' },
    { code: 'de', label: 'German (Deutsch)' },
    { code: 'el', label: 'Greek (Ελληνικά)' },
    { code: 'hi', label: 'Hindi (हिंदी)' },
    { code: 'hu', label: 'Hungarian (Magyar)' },
    { code: 'id', label: 'Indonesian (Bahasa Indonesia)' },
    { code: 'it', label: 'Italian (Italiano)' },
    { code: 'ja', label: 'Japanese (日本語)' },
    { code: 'ko', label: 'Korean (한국어)' },
    { code: 'mr', label: 'Marathi (मराठी)' },
    { code: 'ne', label: 'Nepali (नेपाली)' },
    { code: 'fa', label: 'Persian (فارسی)' },
    { code: 'pl', label: 'Polish (Polski)' },
    { code: 'pt-BR', label: 'Portuguese (Brazil) (Português)' },
    { code: 'ru', label: 'Russian (Русский)' },
    { code: 'sl', label: 'Slovenian (Slovenščina)' },
    { code: 'es', label: 'Spanish (Español)' },
    { code: 'ta', label: 'Tamil (தமிழ்)' },
    { code: 'th', label: 'Thai (ภาษาไทย)' },
    { code: 'tr', label: 'Turkish (Türkçe)' },
    { code: 'uk', label: 'Ukrainian (Українська)' },
    { code: 'ur', label: 'Urdu (اردو)' },
    { code: 'uz', label: "Uzbek (O'zbek)" },
    { code: 'vi', label: 'Vietnamese (Tiếng Việt)' }
];

const UI_LANGUAGE_STRINGS = {
    ar: { morning: 'صباح الخير', afternoon: 'مساء الخير', evening: 'مساء الخير', work: 'عمل', break: 'استراحة' },
    az: { morning: 'Sabahınız xeyir', afternoon: 'Günortanız xeyir', evening: 'Axşamınız xeyir', work: 'İş', break: 'Fasilə' },
    bn: { morning: 'সুপ্রভাত', afternoon: 'শুভ অপরাহ্ন', evening: 'শুভ সন্ধ্যা', work: 'কাজ', break: 'বিরতি' },
    'zh-CN': { morning: '早上好', afternoon: '下午好', evening: '晚上好', work: '工作', break: '休息' },
    'zh-TW': { morning: '早安', afternoon: '午安', evening: '晚安', work: '工作', break: '休息' },
    cs: { morning: 'Dobré ráno', afternoon: 'Dobré odpoledne', evening: 'Dobrý večer', work: 'Práce', break: 'Přestávka' },
    en: { morning: 'Good Morning', afternoon: 'Good Afternoon', evening: 'Good Evening', work: 'Work', break: 'Break' },
    fr: { morning: 'Bonjour', afternoon: 'Bon après-midi', evening: 'Bonsoir', work: 'Travail', break: 'Pause' },
    de: { morning: 'Guten Morgen', afternoon: 'Guten Tag', evening: 'Guten Abend', work: 'Arbeit', break: 'Pause' },
    el: { morning: 'Καλημέρα', afternoon: 'Καλό απόγευμα', evening: 'Καλησπέρα', work: 'Εργασία', break: 'Διάλειμμα' },
    hi: { morning: 'सुप्रभात', afternoon: 'शुभ दोपहर', evening: 'शुभ संध्या', work: 'काम', break: 'विराम' },
    hu: { morning: 'Jó reggelt', afternoon: 'Jó napot', evening: 'Jó estét', work: 'Munka', break: 'Szünet' },
    id: { morning: 'Selamat pagi', afternoon: 'Selamat siang', evening: 'Selamat malam', work: 'Kerja', break: 'Istirahat' },
    it: { morning: 'Buongiorno', afternoon: 'Buon pomeriggio', evening: 'Buonasera', work: 'Lavoro', break: 'Pausa' },
    ja: { morning: 'おはようございます', afternoon: 'こんにちは', evening: 'こんばんは', work: '作業', break: '休憩' },
    ko: { morning: '좋은 아침이에요', afternoon: '좋은 오후입니다', evening: '좋은 저녁입니다', work: '작업', break: '휴식' },
    mr: { morning: 'सुप्रभात', afternoon: 'शुभ दुपार', evening: 'शुभ संध्या', work: 'काम', break: 'विश्रांती' },
    ne: { morning: 'शुभ प्रभात', afternoon: 'शुभ अपराह्न', evening: 'शुभ सन्ध्या', work: 'काम', break: 'विश्राम' },
    fa: { morning: 'صبح بخیر', afternoon: 'عصر بخیر', evening: 'شب بخیر', work: 'کار', break: 'استراحت' },
    pl: { morning: 'Dzień dobry', afternoon: 'Dzień dobry', evening: 'Dobry wieczór', work: 'Praca', break: 'Przerwa' },
    'pt-BR': { morning: 'Bom dia', afternoon: 'Boa tarde', evening: 'Boa noite', work: 'Trabalho', break: 'Pausa' },
    ru: { morning: 'Доброе утро', afternoon: 'Добрый день', evening: 'Добрый вечер', work: 'Работа', break: 'Перерыв' },
    sl: { morning: 'Dobro jutro', afternoon: 'Dober dan', evening: 'Dober večer', work: 'Delo', break: 'Odmor' },
    es: { morning: 'Buenos días', afternoon: 'Buenas tardes', evening: 'Buenas noches', work: 'Trabajo', break: 'Descanso' },
    ta: { morning: 'காலை வணக்கம்', afternoon: 'மதிய வணக்கம்', evening: 'மாலை வணக்கம்', work: 'வேலை', break: 'இடைவெளி' },
    th: { morning: 'สวัสดีตอนเช้า', afternoon: 'สวัสดีตอนบ่าย', evening: 'สวัสดีตอนเย็น', work: 'ทำงาน', break: 'พัก' },
    tr: { morning: 'Günaydın', afternoon: 'Tünaydın', evening: 'İyi akşamlar', work: 'Çalışma', break: 'Mola' },
    uk: { morning: 'Доброго ранку', afternoon: 'Добрий день', evening: 'Добрий вечір', work: 'Робота', break: 'Перерва' },
    ur: { morning: 'صبح بخیر', afternoon: 'دوپہر بخیر', evening: 'شام بخیر', work: 'کام', break: 'وقفہ' },
    uz: { morning: 'Xayrli tong', afternoon: 'Xayrli kun', evening: 'Xayrli kech', work: 'Ish', break: 'Tanaffus' },
    vi: { morning: 'Chào buổi sáng', afternoon: 'Chào buổi chiều', evening: 'Chào buổi tối', work: 'Làm việc', break: 'Nghỉ giải lao' }
};

const TRANSLATIONS = window.OMSPACE_TRANSLATIONS || { en: {} };
const TRANSLATION_SOURCE_SET = new Set(Object.keys(TRANSLATIONS.en || {}));
const LOCALIZABLE_ATTRIBUTES = ['placeholder', 'title', 'aria-label'];

const QUOTES = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
    { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "Everything you've ever wanted is on the other side of fear.", author: "George Addair" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
    { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
    { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
    { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
    { text: "What lies behind you and what lies in front of you, pales in comparison to what lies inside of you.", author: "Ralph Waldo Emerson" },
    { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
    { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "If you can dream it, you can do it.", author: "Walt Disney" },
    { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
    { text: "Magic is believing in yourself. If you can make that happen, you can make anything happen.", author: "Johann Wolfgang von Goethe" },
    { text: "You don't have to be great to start, but you have to start to be great.", author: "Zig Ziglar" },
    { text: "Every champion was once a contender that didn't give up.", author: "Gabby Douglas" },
    { text: "Doubt kills more dreams than failure ever will.", author: "Suzy Kassem" },
    { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
    { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { text: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Anonymous" },
    { text: "Someday is not a day of the week.", author: "Janet Dailey" },
    { text: "Great things are done by a series of small things brought together.", author: "Vincent Van Gogh" },
    { text: "Action is the foundational key to all success.", author: "Pablo Picasso" },
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" }
];

const DEFAULT_STATE = {
    accent: '#a8c7fa',
    theme: 'dark',
    font: "'Plus Jakarta Sans'",
    uiLanguage: '',
    bgMode: 'gradient',
    bgUrl: '',
    liveWallpaper: false,
    particles: true,
    performanceMode: false,
    syncEnabled: false,
    zenMode: false,
    userName: '',
    customGreeting: '',
    customQuoteEnabled: false,
    customQuoteText: '',
    customQuoteAuthor: '',
    engine: 'google',
    searchEngines: JSON.parse(JSON.stringify(DEFAULT_SEARCH_ENGINES)),
    aiProvider: 'chatgpt',
    weatherUnit: 'c',
    clockStyle: 'digital',
    showClock: true,
    showWeather: true,
    showPomodoro: false,
    showFocus: false,
    showQuote: true,
    showShortcuts: true,
    showBottomWidgets: false,
    showAi: true,
    showGapps: true,
    showTodo: false,
    showNotes: false,
    showHabits: false,
    showWorldclock: false,
    showReading: false,
    showBookmarks: true,
    showSocialDock: true,
    showAgenda: true,
    showTopSites: true,
    showTabGroups: true,
    showCustomWidgets: true,
    showAiActions: true,
    showPomoStats: true,
    bookmarkView: 'list',
    bookmarkSource: 'recent',
    notePreview: false,
    restoreMode: 'all',
    todos: [],
    quickNote: '',
    focusGoal: '',
    focusDate: '',
    habits: [],
    agendaItems: [],
    customWidgets: [],
    weatherCache: null,
    worldClocks: [
        { city: 'New York', tz: 'America/New_York' },
        { city: 'London', tz: 'Europe/London' },
        { city: 'Tokyo', tz: 'Asia/Tokyo' }
    ],
    use24Hour: false,
    layoutLocked: true,
    readingList: [],
    pomoSessions: 0,
    pomoSessionDate: '',
    pomoHistory: {},
    shortcutsConfig: {
        search: '/',
        help: '?',
        theme: 't',
        pomo: 'p',
        settings: 's'
    },
    activeProfile: 'personal',
    profileStates: {},
    shortcuts: [
        { name: 'Gmail', url: 'https://gmail.com', icon: 'mail' },
        { name: 'YouTube', url: 'https://youtube.com', icon: 'play_circle' },
        { name: 'GitHub', url: 'https://github.com', icon: 'code' },
        { name: 'Twitter', url: 'https://x.com', icon: 'tag' },
        { name: 'Reddit', url: 'https://reddit.com', icon: 'forum' },
        { name: 'Drive', url: 'https://drive.google.com', icon: 'cloud' },
        { name: 'Maps', url: 'https://maps.google.com', icon: 'map' },
        { name: 'Calendar', url: 'https://calendar.google.com', icon: 'calendar_month' }
    ],
    aiTools: [
        { name: 'ChatGPT', url: 'https://chatgpt.com', icon: 'smart_toy' },
        { name: 'Gemini', url: 'https://gemini.google.com', icon: 'auto_awesome', favicon: 'https://www.gstatic.com/lamda/images/gemini_favicon_f069958c85030456e93de685481c559f160ea06b.png' },
        { name: 'Copilot', url: 'https://copilot.microsoft.com', icon: 'assistant' },
        { name: 'Claude', url: 'https://claude.ai', icon: 'psychology' },
        { name: 'Perplexity', url: 'https://www.perplexity.ai', icon: 'explore' },
        { name: 'DeepSeek', url: 'https://chat.deepseek.com', icon: 'neurology' }
    ],
    socialLinks: [
        { name: 'YouTube', url: 'https://youtube.com', icon: 'youtube' },
        { name: 'Instagram', url: 'https://instagram.com', icon: 'instagram' },
        { name: 'X', url: 'https://x.com', icon: 'twitter' },
        { name: 'GitHub', url: 'https://github.com', icon: 'github' },
        { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
        { name: 'Reddit', url: 'https://reddit.com', icon: 'reddit' },
        { name: 'Discord', url: 'https://discord.com', icon: 'discord' },
        { name: 'Telegram', url: 'https://t.me', icon: 'telegram' },
        { name: 'WhatsApp', url: 'https://wa.me', icon: 'whatsapp' },
        { name: 'Spotify', url: 'https://spotify.com', icon: 'spotify' },
        { name: 'Happenstance', url: 'https://happenstance.ai', icon: 'happenstance' }
    ]
};

let state = {};
let pomoInterval = null;
let pomoTimeLeft = 25 * 60;
let pomoRunning = false;
let pomoIsWork = true;
let currentEditMode = null;
let particlesAnimId = null;
let restartParticlesAnimation = null;
let draggedTodoId = null;
let currentCreateMode = null;
let currentCreateDefaults = {};
let activeSettingsTab = 'look';
const toastTimeouts = new Map();
const originalTextValues = new WeakMap();
const originalAttributeValues = new WeakMap();
let localizationObserver = null;
let isApplyingTranslations = false;

const BG_PRESETS = {
    gradient: '',
    abstract: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
    nature: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2560&auto=format&fit=crop',
    dark: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2560&auto=format&fit=crop',
    space: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2560&auto=format&fit=crop',
    cyberpunk: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=2560&auto=format&fit=crop',
    minimal: 'https://images.unsplash.com/photo-1622737133809-d95047b9e673?q=80&w=2560&auto=format&fit=crop'
};

const CREATE_MODAL_CONFIGS = {
    habit: {
        title: 'Add Habit',
        subtitle: 'Create a simple daily habit you can track from the card.',
        submitLabel: 'Add Habit',
        fields: [
            { id: 'name', label: 'Habit Name', type: 'text', placeholder: 'Drink water', required: true, helper: 'Keep it short and action-oriented.' }
        ]
    },
    worldClock: {
        title: 'Add World Clock',
        subtitle: 'Pin another city and timezone to your dashboard.',
        submitLabel: 'Add Clock',
        fields: [
            { id: 'city', label: 'City', type: 'text', placeholder: 'Dubai', required: true },
            { id: 'tz', label: 'Timezone', type: 'text', placeholder: 'Asia/Dubai', required: true, helper: 'Use an IANA timezone like Europe/Paris or America/New_York.' }
        ]
    },
    customWidget: {
        title: 'Add Custom Widget',
        subtitle: 'Create a mini card for reminders, links, or quick snippets.',
        submitLabel: 'Add Widget',
        fields: [
            { id: 'title', label: 'Title', type: 'text', placeholder: 'Resources', required: true },
            { id: 'content', label: 'Content', type: 'textarea', placeholder: 'Useful links, notes, or reminders...' },
            { id: 'link', label: 'Optional Link', type: 'text', placeholder: 'https://example.com' },
            { id: 'icon', label: 'Material Symbol Icon', type: 'text', placeholder: 'widgets', helper: 'Examples: widgets, bolt, link, code.' }
        ]
    }
};

const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

const clone = (value) => JSON.parse(JSON.stringify(value));

function canonicalizeLocale(locale = '') {
    try {
        return Intl.getCanonicalLocales(locale)[0] || '';
    } catch {
        return String(locale || '').trim();
    }
}

function matchSupportedUiLanguage(locale = '') {
    const canonical = canonicalizeLocale(locale);
    if (!canonical) return '';
    if (/^zh-(hant|hk|mo|tw)/i.test(canonical)) return 'zh-TW';
    if (/^zh/i.test(canonical)) return 'zh-CN';
    if (/^pt/i.test(canonical)) return 'pt-BR';
    if (UI_LANGUAGES.some(language => language.code === canonical)) return canonical;
    const base = canonical.split('-')[0];
    return UI_LANGUAGES.find(language => language.code === base)?.code || '';
}

function detectPreferredUiLanguage() {
    const candidates = typeof navigator !== 'undefined'
        ? [...(navigator.languages || []), navigator.language]
        : [];
    for (const candidate of candidates) {
        const match = matchSupportedUiLanguage(candidate);
        if (match) return match;
    }
    return 'en';
}

function getUiLanguage() {
    return matchSupportedUiLanguage(state.uiLanguage) || detectPreferredUiLanguage();
}

function getUiLocales() {
    return [getUiLanguage(), 'en'];
}

function getUiStrings() {
    return UI_LANGUAGE_STRINGS[getUiLanguage()] || UI_LANGUAGE_STRINGS.en;
}

function applyLanguagePreference() {
    document.documentElement.lang = getUiLanguage();
}

function renderLanguageOptions() {
    const select = $('#ui-language-select');
    if (!select || select.options.length === UI_LANGUAGES.length) return;
    const fragment = document.createDocumentFragment();
    UI_LANGUAGES.forEach(language => {
        const option = document.createElement('option');
        option.value = language.code;
        option.textContent = language.label;
        fragment.appendChild(option);
    });
    select.innerHTML = '';
    select.appendChild(fragment);
}

function translate(source, params = {}) {
    const template = (TRANSLATIONS[getUiLanguage()] || {})[source] || source;
    return template.replace(/__([A-Z0-9_]+)__/g, (_, key) => {
        if (Object.prototype.hasOwnProperty.call(params, key)) return String(params[key]);
        if (Object.prototype.hasOwnProperty.call(params, key.toLowerCase())) return String(params[key.toLowerCase()]);
        return `__${key}__`;
    });
}

function hasTranslationSource(value = '') {
    return TRANSLATION_SOURCE_SET.has(value.trim());
}

function translatePreservingWhitespace(value = '', params = {}) {
    const leading = value.match(/^\s*/)?.[0] || '';
    const trailing = value.match(/\s*$/)?.[0] || '';
    const core = value.trim();
    if (!core || !hasTranslationSource(core)) return value;
    return `${leading}${translate(core, params)}${trailing}`;
}

function shouldSkipTextNode(node) {
    const parent = node.parentElement;
    if (!parent) return true;
    if (parent.closest('.material-symbols-rounded, script, style, textarea, input, kbd, svg')) return true;
    return false;
}

function localizeTextNode(node) {
    if (!node || shouldSkipTextNode(node)) return;
    const currentValue = node.textContent || '';
    const storedSource = originalTextValues.get(node);
    const translatedStoredSource = storedSource ? translatePreservingWhitespace(storedSource) : '';
    const shouldUpdateSource = hasTranslationSource(currentValue) && (!storedSource || currentValue !== translatedStoredSource);
    const sourceValue = shouldUpdateSource ? currentValue : storedSource;
    if (!sourceValue) return;
    if (shouldUpdateSource) originalTextValues.set(node, currentValue);
    const translatedValue = translatePreservingWhitespace(sourceValue);
    if (translatedValue !== currentValue) {
        isApplyingTranslations = true;
        node.textContent = translatedValue;
        isApplyingTranslations = false;
    }
}

function localizeElementAttributes(element) {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) return;
    const storedAttributes = originalAttributeValues.get(element) || {};
    let touched = false;
    LOCALIZABLE_ATTRIBUTES.forEach(attribute => {
        const currentValue = element.getAttribute(attribute);
        if (!currentValue) return;
        const storedSource = storedAttributes[attribute];
        const translatedStoredSource = storedSource ? translatePreservingWhitespace(storedSource) : '';
        const shouldUpdateSource = hasTranslationSource(currentValue) && (!storedSource || currentValue !== translatedStoredSource);
        const sourceValue = shouldUpdateSource ? currentValue : storedSource;
        if (!sourceValue) return;
        if (shouldUpdateSource) {
            storedAttributes[attribute] = currentValue;
            touched = true;
        }
        const translatedValue = translatePreservingWhitespace(sourceValue);
        if (translatedValue !== currentValue) {
            isApplyingTranslations = true;
            element.setAttribute(attribute, translatedValue);
            isApplyingTranslations = false;
        }
    });
    if (touched) originalAttributeValues.set(element, storedAttributes);
}

function localizeDomSubtree(root = document.body) {
    if (!root) return;
    if (root.nodeType === Node.TEXT_NODE) {
        localizeTextNode(root);
        return;
    }
    if (root.nodeType !== Node.ELEMENT_NODE) return;
    localizeElementAttributes(root);
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
    let current = walker.currentNode;
    while (current) {
        if (current.nodeType === Node.TEXT_NODE) localizeTextNode(current);
        else localizeElementAttributes(current);
        current = walker.nextNode();
    }
}

function localizeDocument() {
    document.title = translate('New Tab');
    localizeDomSubtree(document.body);
}

function initLocalizationObserver() {
    if (localizationObserver || !document.body) return;
    localizationObserver = new MutationObserver(mutations => {
        if (isApplyingTranslations) return;
        mutations.forEach(mutation => {
            if (mutation.type === 'attributes') {
                localizeElementAttributes(mutation.target);
                return;
            }
            if (mutation.type === 'characterData') {
                localizeTextNode(mutation.target);
                return;
            }
            mutation.addedNodes.forEach(node => {
                localizeDomSubtree(node);
            });
        });
    });
    localizationObserver.observe(document.body, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true,
        attributeFilter: LOCALIZABLE_ATTRIBUTES
    });
}

function hasSearchEngine(engineId, engines = state.searchEngines) {
    return Array.isArray(engines) && engines.some(engine => engine.id === engineId);
}

function normalizeStateShape(source = {}) {
    const nextState = { ...clone(DEFAULT_STATE), ...clone(source) };

    if (!Array.isArray(nextState.searchEngines) || !nextState.searchEngines.length) nextState.searchEngines = clone(DEFAULT_SEARCH_ENGINES);
    nextState.searchEngines = nextState.searchEngines
        .map((engine, index) => ({
            id: engine?.id || engine?.name?.toLowerCase().replace(/[^a-z0-9]+/g, '-') || `engine-${index}`,
            name: engine?.name || `Engine ${index + 1}`,
            label: engine?.label || (engine?.name || 'S').trim().charAt(0).toUpperCase(),
            icon: engine?.icon || 'search',
            url: engine?.url || DEFAULT_SEARCH_ENGINES[0].url
        }))
        .filter(engine => engine.name && engine.url);
    if (!nextState.searchEngines.length) nextState.searchEngines = clone(DEFAULT_SEARCH_ENGINES);

    if (!Array.isArray(nextState.shortcuts)) nextState.shortcuts = clone(DEFAULT_STATE.shortcuts);
    if (!Array.isArray(nextState.aiTools)) nextState.aiTools = clone(DEFAULT_STATE.aiTools);
    if (!Array.isArray(nextState.socialLinks)) nextState.socialLinks = clone(DEFAULT_STATE.socialLinks);
    if (!Array.isArray(nextState.todos)) nextState.todos = [];
    nextState.todos = nextState.todos.map((todo, index) => ({
        priority: 'normal',
        dueDate: '',
        order: index + 1,
        ...todo
    }));
    if (!Array.isArray(nextState.habits)) nextState.habits = [];
    nextState.habits = nextState.habits.map(habit => ({
        ...habit,
        history: Array.isArray(habit.history) ? habit.history : []
    }));
    if (!Array.isArray(nextState.worldClocks)) nextState.worldClocks = clone(DEFAULT_STATE.worldClocks);
    if (!Array.isArray(nextState.readingList)) nextState.readingList = [];
    if (!Array.isArray(nextState.agendaItems)) nextState.agendaItems = [];
    if (!Array.isArray(nextState.customWidgets)) nextState.customWidgets = [];
    if (!nextState.shortcutsConfig || typeof nextState.shortcutsConfig !== 'object') nextState.shortcutsConfig = clone(DEFAULT_STATE.shortcutsConfig);
    else nextState.shortcutsConfig = { ...clone(DEFAULT_STATE.shortcutsConfig), ...nextState.shortcutsConfig };
    if (!nextState.pomoHistory || typeof nextState.pomoHistory !== 'object') nextState.pomoHistory = {};
    if (!nextState.weatherUnit) nextState.weatherUnit = 'c';
    if (!nextState.aiProvider) nextState.aiProvider = 'chatgpt';
    if (!nextState.bookmarkSource) nextState.bookmarkSource = 'recent';
    nextState.uiLanguage = matchSupportedUiLanguage(nextState.uiLanguage) || detectPreferredUiLanguage();
    if (nextState.layoutLocked === undefined) nextState.layoutLocked = true;
    if (!hasSearchEngine(nextState.engine, nextState.searchEngines)) nextState.engine = nextState.searchEngines[0]?.id || DEFAULT_SEARCH_ENGINES[0].id;

    const existingUrls = new Set(nextState.socialLinks.map(link => link.url));
    DEFAULT_STATE.socialLinks.forEach(defLink => {
        if (!existingUrls.has(defLink.url)) nextState.socialLinks.push({ ...defLink });
    });

    return nextState;
}

function getSearchEngine(engineId) {
    return (state.searchEngines || []).find(engine => engine.id === engineId) || (state.searchEngines || [])[0] || DEFAULT_SEARCH_ENGINES[0];
}

function canUseChromeStorageSync() {
    return typeof chrome !== 'undefined' && chrome.storage && chrome.storage.sync;
}

function chromeStorageGet(area, key) {
    return new Promise(resolve => {
        try {
            area.get([key], result => resolve(result || {}));
        } catch {
            resolve({});
        }
    });
}

function chromeStorageSet(area, value) {
    return new Promise(resolve => {
        try {
            area.set(value, () => resolve());
        } catch {
            resolve();
        }
    });
}

function buildDefaultProfile(profileId) {
    const base = clone(DEFAULT_STATE);
    delete base.profileStates;
    delete base.activeProfile;
    delete base.syncEnabled;
    if (profileId === 'work') {
        base.showTodo = true;
        base.showAgenda = true;
        base.showNotes = true;
        base.showFocus = true;
        base.showPomodoro = true;
        base.showBookmarks = true;
        base.showTabGroups = true;
        base.showTopSites = false;
    } else if (profileId === 'minimal') {
        base.showWeather = false;
        base.showAi = false;
        base.showGapps = false;
        base.showNotes = false;
        base.showHabits = false;
        base.showWorldclock = false;
        base.showReading = false;
        base.showBookmarks = false;
        base.showSocialDock = false;
        base.showTopSites = false;
        base.showTabGroups = false;
        base.showCustomWidgets = false;
        base.showAiActions = false;
        base.showBottomWidgets = false;
        base.showQuote = false;
        base.showFocus = true;
        base.showPomodoro = true;
        base.showTodo = true;
    }
    return base;
}

function extractProfileState(source = state) {
    const snapshot = clone(source);
    delete snapshot.profileStates;
    delete snapshot.activeProfile;
    delete snapshot.syncEnabled;
    return snapshot;
}

function ensureProfileStates() {
    const currentSnapshot = extractProfileState({ ...clone(DEFAULT_STATE), ...state });
    if (!state.profileStates || typeof state.profileStates !== 'object') state.profileStates = {};
    if (!state.profileStates.personal) state.profileStates.personal = currentSnapshot;
    if (!state.profileStates.work) state.profileStates.work = buildDefaultProfile('work');
    if (!state.profileStates.minimal) state.profileStates.minimal = buildDefaultProfile('minimal');
    if (!state.activeProfile || !state.profileStates[state.activeProfile]) state.activeProfile = 'personal';
}

function buildSyncState() {
    return {
        accent: state.accent,
        theme: state.theme,
        font: state.font,
        uiLanguage: state.uiLanguage,
        engine: state.engine,
        searchEngines: clone(state.searchEngines || DEFAULT_SEARCH_ENGINES),
        weatherUnit: state.weatherUnit,
        performanceMode: state.performanceMode,
        zenMode: state.zenMode,
        clockStyle: state.clockStyle,
        use24Hour: state.use24Hour,
        layoutLocked: state.layoutLocked,
        userName: state.userName,
        customGreeting: state.customGreeting,
        customQuoteEnabled: state.customQuoteEnabled,
        customQuoteText: state.customQuoteText,
        customQuoteAuthor: state.customQuoteAuthor,
        aiProvider: state.aiProvider,
        shortcutsConfig: clone(state.shortcutsConfig || DEFAULT_STATE.shortcutsConfig),
        activeProfile: state.activeProfile,
        showClock: state.showClock,
        showWeather: state.showWeather,
        showPomodoro: state.showPomodoro,
        showFocus: state.showFocus,
        showQuote: state.showQuote,
        showShortcuts: state.showShortcuts,
        showBottomWidgets: state.showBottomWidgets,
        showAi: state.showAi,
        showGapps: state.showGapps,
        showTodo: state.showTodo,
        showNotes: state.showNotes,
        showHabits: state.showHabits,
        showWorldclock: state.showWorldclock,
        showReading: state.showReading,
        showBookmarks: state.showBookmarks,
        showSocialDock: state.showSocialDock,
        showAgenda: state.showAgenda,
        showTopSites: state.showTopSites,
        showTabGroups: state.showTabGroups,
        showCustomWidgets: state.showCustomWidgets,
        showAiActions: state.showAiActions,
        showPomoStats: state.showPomoStats
    };
}

async function syncCoreState() {
    if (!state.syncEnabled || !canUseChromeStorageSync()) return;
    await chromeStorageSet(chrome.storage.sync, { [SYNC_STORAGE_KEY]: buildSyncState() });
}

function showToast(message, type = 'info', title = '') {
    const region = $('#toast-region');
    if (!region) return;
    const tone = ['success', 'error', 'info'].includes(type) ? type : 'info';
    const toastId = uid();
    const icon = tone === 'success' ? 'check_circle' : tone === 'error' ? 'error' : 'info';
    const heading = title || (tone === 'success' ? 'Done' : tone === 'error' ? 'Action failed' : 'Heads up');
    const toast = document.createElement('div');
    toast.className = `toast ${tone}`;
    toast.dataset.toastId = toastId;
    toast.innerHTML = `
        <div class="toast-icon"><span class="material-symbols-rounded">${icon}</span></div>
        <div class="toast-body">
            <div class="toast-title">${esc(translate(heading))}</div>
            <div class="toast-message">${esc(translate(message))}</div>
        </div>
        <button class="toast-close" aria-label="${esc(translate('Dismiss'))}"><span class="material-symbols-rounded">close</span></button>
    `;
    toast.querySelector('.toast-close')?.addEventListener('click', () => dismissToast(toastId));
    region.appendChild(toast);
    const timeout = window.setTimeout(() => dismissToast(toastId), tone === 'error' ? 4200 : 2600);
    toastTimeouts.set(toastId, timeout);
}

function dismissToast(toastId) {
    const toast = $(`.toast[data-toast-id="${toastId}"]`);
    if (!toast) return;
    const timer = toastTimeouts.get(toastId);
    if (timer) {
        clearTimeout(timer);
        toastTimeouts.delete(toastId);
    }
    toast.style.animation = 'toastOut .18s ease forwards';
    window.setTimeout(() => toast.remove(), 180);
}

function setSettingsTab(tabId = activeSettingsTab, { resetScroll = false } = {}) {
    const tabs = $$('.settings-tab-btn');
    const availableTabs = [...tabs].map(btn => btn.dataset.settingsTabBtn);
    activeSettingsTab = availableTabs.includes(tabId) ? tabId : availableTabs[0] || 'look';
    tabs.forEach(btn => btn.classList.toggle('active', btn.dataset.settingsTabBtn === activeSettingsTab));
    $$('.setting-section[data-settings-tab]').forEach(section => {
        section.hidden = section.dataset.settingsTab !== activeSettingsTab;
    });
    const body = $('#settings-panel .settings-body');
    if (body && resetScroll) body.scrollTop = 0;
}

function openSettingsPanel(tabId = activeSettingsTab) {
    setSettingsTab(tabId, { resetScroll: true });
    $('#settings-panel')?.classList.add('open');
    $('#settings-backdrop')?.classList.add('visible');
}

function renderCreateModalField(field, value = '') {
    const helper = field.helper ? `<div class="form-helper">${esc(field.helper)}</div>` : '';
    if (field.type === 'textarea') {
        return `
            <div class="form-field">
                <label for="create-field-${esc(field.id)}">${esc(field.label)}</label>
                <textarea id="create-field-${esc(field.id)}" data-create-field="${esc(field.id)}" placeholder="${esc(field.placeholder || '')}" ${field.required ? 'required' : ''}>${esc(value)}</textarea>
                ${helper}
            </div>
        `;
    }
    return `
        <div class="form-field">
            <label for="create-field-${esc(field.id)}">${esc(field.label)}</label>
            <input id="create-field-${esc(field.id)}" data-create-field="${esc(field.id)}" type="${esc(field.type || 'text')}" value="${esc(value)}" placeholder="${esc(field.placeholder || '')}" ${field.required ? 'required' : ''}>
            ${helper}
        </div>
    `;
}

function openCreateModal(mode, defaults = {}) {
    const config = CREATE_MODAL_CONFIGS[mode];
    if (!config) return;
    currentCreateMode = mode;
    currentCreateDefaults = defaults;
    updateEl('#create-modal-title', config.title);
    updateEl('#create-modal-subtitle', config.subtitle);
    const saveBtn = $('#create-modal-save');
    if (saveBtn) saveBtn.innerHTML = `<span class="material-symbols-rounded">check</span> ${esc(config.submitLabel)}`;
    const fields = $('#create-modal-fields');
    if (fields) {
        fields.innerHTML = config.fields.map(field => renderCreateModalField(field, defaults[field.id] || '')).join('');
    }
    $('#create-modal')?.classList.add('open');
    $('#create-modal-backdrop')?.classList.add('visible');
    window.setTimeout(() => {
        $('#create-modal-form [data-create-field]')?.focus();
    }, 20);
}

function closeCreateModal() {
    currentCreateMode = null;
    currentCreateDefaults = {};
    $('#create-modal')?.classList.remove('open');
    $('#create-modal-backdrop')?.classList.remove('visible');
    $('#create-modal-form')?.reset();
    const fields = $('#create-modal-fields');
    if (fields) fields.innerHTML = '';
}

function getCreateModalValues() {
    const values = {};
    $$('#create-modal-form [data-create-field]').forEach(field => {
        values[field.dataset.createField] = field.value.trim();
    });
    return values;
}

function submitCreateModal() {
    if (!currentCreateMode) return;
    const values = getCreateModalValues();
    if (currentCreateMode === 'habit') {
        addHabit(values);
    } else if (currentCreateMode === 'worldClock') {
        addWorldClock(values);
    } else if (currentCreateMode === 'customWidget') {
        addCustomWidget(values);
    }
}


// ═══════════════════════════════════════
// INIT
// ═══════════════════════════════════════
async function init() {
    await loadState();
    initLocalizationObserver();
    renderAll();
    startClock();
    if (state.showWeather) fetchWeather();
    initParticles();
    setupAllEvents();
    initCollapsibles();
}

// ═══════════════════════════════════════
// STORAGE
// ═══════════════════════════════════════
async function loadState() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
            state = normalizeStateShape(JSON.parse(raw));
        } else if (canUseChromeStorageSync()) {
            const synced = await chromeStorageGet(chrome.storage.sync, SYNC_STORAGE_KEY);
            state = normalizeStateShape(synced[SYNC_STORAGE_KEY] || {});
        } else {
            state = normalizeStateShape();
        }
        ensureProfileStates();
    } catch (e) {
        state = normalizeStateShape();
        ensureProfileStates();
    }
}

function saveState() {
    ensureProfileStates();
    const persistState = clone(state);
    persistState.profileStates[state.activeProfile] = extractProfileState(state);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(persistState));
    void syncCoreState();
}

// ═══════════════════════════════════════
// RENDER ALL
// ═══════════════════════════════════════
function renderAll() {
    applyLanguagePreference();
    applyThemeMode();
    applyAccent();
    applyFont();
    applyPerformanceMode();
    applyZenMode();
    applyBackground();
    applyVisibility();
    applyClockStyle();
    hydrateWeatherCard();
    renderProfileBar();
    renderSearchEngines();
    renderShortcuts();
    renderAiTools();
    renderTodos();
    renderBookmarks();
    renderHabits();
    renderWorldClocks();
    renderReadingList();
    renderAgenda();
    renderTopSites();
    renderTabGroups();
    renderCustomWidgets();
    renderQuickActions();
    renderFocus();
    renderQuote();
    syncSettingsUI();
    loadQuickNote();
    updatePomoDisplay();
    renderPomoStats();
    renderKeyboardShortcutUI();
    applyParticles();
    if (state.showBottomWidgets) initBottomWidgets();
    renderSocialDock();
    loadLayout();
    initDragAndDrop();
    localizeDocument();
}

// ═══════════════════════════════════════
// THEME (Light/Dark)
// ═══════════════════════════════════════
function applyThemeMode() {
    document.documentElement.setAttribute('data-theme', state.theme || 'dark');
    const icon = $('#theme-icon');
    if (icon) icon.textContent = state.theme === 'dark' ? 'light_mode' : 'dark_mode';
}

function toggleTheme() {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    saveState();
    applyThemeMode();
}

function applyPerformanceMode() {
    document.body.classList.toggle('performance-mode', !!state.performanceMode);
}

function applyZenMode() {
    document.body.classList.toggle('zen-mode', !!state.zenMode);
    $('#zen-toggle-btn')?.classList.toggle('active', !!state.zenMode);
}

function renderProfileBar() {
    $$('.profile-chip').forEach(btn => btn.classList.toggle('active', btn.dataset.profile === state.activeProfile));
}

function switchProfile(profileId) {
    if (!state.profileStates?.[profileId]) return;
    state.profileStates[state.activeProfile] = extractProfileState(state);
    const profileSnapshot = normalizeStateShape(state.profileStates[profileId]);
    const syncEnabled = state.syncEnabled;
    const uiLanguage = state.uiLanguage;
    state = { ...clone(DEFAULT_STATE), ...profileSnapshot, profileStates: state.profileStates, activeProfile: profileId, syncEnabled, uiLanguage };
    ensureProfileStates();
    renderAll();
    if (state.showWeather && !state.weatherCache) fetchWeather();
    saveState();
}

function renderKeyboardShortcutUI() {
    updateEl('#shortcut-search-kbd', (state.shortcutsConfig.search || '/').toUpperCase());
    updateEl('#shortcut-help-kbd', (state.shortcutsConfig.help || '?').toUpperCase());
    updateEl('#shortcut-theme-kbd', (state.shortcutsConfig.theme || 't').toUpperCase());
    updateEl('#shortcut-pomo-kbd', (state.shortcutsConfig.pomo || 'p').toUpperCase());
    updateEl('#shortcut-settings-kbd', (state.shortcutsConfig.settings || 's').toUpperCase());
}

// ═══════════════════════════════════════
// ACCENT COLOR
// ═══════════════════════════════════════
function applyAccent() {
    const root = document.documentElement;
    root.style.setProperty('--accent', state.accent);
    root.style.setProperty('--accent-dim', hexToRgba(state.accent, 0.15));
    root.style.setProperty('--accent-glow', hexToRgba(state.accent, 0.3));
    root.style.setProperty('--border-accent', hexToRgba(state.accent, 0.25));
    const orb = $('.orb-1');
    if (orb) orb.style.background = state.accent;
}

function hexToRgba(hex, a) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${a})`;
}

// ═══════════════════════════════════════
// FONT
// ═══════════════════════════════════════
function applyFont() {
    document.documentElement.style.setProperty('--font-main',
        state.font + ",-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif");
    document.body.style.fontFamily = 'var(--font-main)';
}

// ═══════════════════════════════════════
// BACKGROUND
// ═══════════════════════════════════════
function applyBackground() {
    const bg = $('#bg-layer');
    if (!bg) return;
    bg.classList.remove('gradient-bg');

    // Live wallpaper overrides everything
    if (state.liveWallpaper && !state.performanceMode) {
        const seed = new Date().toISOString().split('T')[0];
        bg.style.backgroundImage = `url('https://source.unsplash.com/1920x1080/?nature,landscape&${seed}')`;
        return;
    }

    if (state.bgMode === 'custom' && state.bgUrl) {
        bg.style.backgroundImage = `url('${state.bgUrl}')`;
    } else if (state.bgMode === 'gradient' || !BG_PRESETS[state.bgMode]) {
        bg.style.backgroundImage = 'none';
        bg.classList.add('gradient-bg');
    } else {
        bg.style.backgroundImage = `url('${BG_PRESETS[state.bgMode]}')`;
    }
}

// ═══════════════════════════════════════
// VISIBILITY — ALL widgets
// ═══════════════════════════════════════
function applyVisibility() {
    toggleWidget('#clock-card', state.showClock);
    toggleWidget('#weather-card', state.showWeather);
    toggleWidget('#pomodoro-card', state.showPomodoro);
    toggleWidget('#focus-card', state.showFocus);
    toggleWidget('#quote-card', state.showQuote);
    toggleWidget('#shortcuts-section', state.showShortcuts);
    toggleWidget('#ai-tools-section', state.showAi);
    toggleWidget('#google-apps-section', state.showGapps);
    toggleWidget('#todo-card', state.showTodo);
    toggleWidget('#notes-card', state.showNotes);
    toggleWidget('#habit-card', state.showHabits);
    toggleWidget('#worldclock-card', state.showWorldclock);
    toggleWidget('#reading-card', state.showReading);
    toggleWidget('#bookmarks-card', state.showBookmarks);
    toggleWidget('#agenda-card', state.showAgenda);
    toggleWidget('#top-sites-card', state.showTopSites);
    toggleWidget('#tab-groups-card', state.showTabGroups);
    toggleWidget('#custom-widgets-card', state.showCustomWidgets);
    toggleWidget('#ai-actions-card', state.showAiActions);
    toggleWidget('#pomo-stats-card', state.showPomoStats);
    toggleWidget('.bottom-widgets-section', state.showBottomWidgets);
    toggleWidget('#social-dock', state.showSocialDock);
}

function toggleWidget(sel, show) {
    const el = $(sel);
    if (!el) return;
    if (show) el.classList.remove('widget-hidden');
    else el.classList.add('widget-hidden');
}

// ═══════════════════════════════════════
// CLOCK — Digital + Analog (Realtime)
// ═══════════════════════════════════════
function applyClockStyle() {
    const digital = $('#digital-clock');
    const analog = $('#analog-clock');
    if (!digital || !analog) return;
    if (state.clockStyle === 'analog') {
        digital.style.display = 'none';
        analog.style.display = 'flex';
    } else {
        digital.style.display = 'block';
        analog.style.display = 'none';
    }
}

function startClock() {
    updateClock();
    setInterval(updateClock, 1000);
}

function updateClock() {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    const uiStrings = getUiStrings();
    const timeParts = new Intl.DateTimeFormat(getUiLocales(), {
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: !state.use24Hour
    }).formatToParts(now);

    // Greeting
    let greetText = uiStrings.evening;
    let emoji = '🌙';
    if (h < 12) { greetText = uiStrings.morning; emoji = '☕️'; }
    else if (h < 18) { greetText = uiStrings.afternoon; emoji = '☀️'; }
    
    const baseGreeting = state.customGreeting?.trim() || greetText;
    let greet = state.userName ? `${baseGreeting}, ${state.userName}! ${emoji}` : `${baseGreeting}! ${emoji}`;

    // Digital
    const hDisplay = timeParts.find(part => part.type === 'hour')?.value || (state.use24Hour ? String(h).padStart(2, '0') : String(h % 12 || 12));
    const mStr = timeParts.find(part => part.type === 'minute')?.value || String(m).padStart(2, '0');
    const sStr = timeParts.find(part => part.type === 'second')?.value || String(s).padStart(2, '0');
    const ampmLabel = state.use24Hour ? '' : timeParts.find(part => part.type === 'dayPeriod')?.value || '';
    const ampm = ampmLabel ? ` ${ampmLabel}` : '';

    const clockH = $('#clock-hours');
    const clockM = $('#clock-mins');
    const clockS = $('#clock-secs');
    const clockAP = $('#clock-ampm');

    if (clockH) clockH.textContent = hDisplay;
    if (clockM) clockM.textContent = mStr;
    if (clockS) clockS.textContent = sStr;
    if (clockAP) clockAP.textContent = ampm;

    const greetEl = $('#greeting');
    if (greetEl) greetEl.textContent = greet;

    const dateEl = $('#date-text');
    if (dateEl) {
        dateEl.textContent = now.toLocaleDateString(getUiLocales(), {
            weekday: 'long', month: 'long', day: 'numeric'
        });
    }

    // Analog hands
    const hourHand = $('#hour-hand');
    const minHand = $('#minute-hand');
    const secHand = $('#second-hand');
    if (hourHand) {
        const hDeg = (h % 12) * 30 + m * 0.5;
        const mDeg = m * 6 + s * 0.1;
        const sDeg = s * 6;
        hourHand.style.transform = `rotate(${hDeg}deg)`;
        minHand.style.transform = `rotate(${mDeg}deg)`;
        secHand.style.transform = `rotate(${sDeg}deg)`;
    }

    // Update world clocks too
    updateWorldClockTimes();

    // Day Progress
    const totalMinutes = 24 * 60;
    const currentMinutes = h * 60 + m + (s / 60);
    const progressPct = ((currentMinutes / totalMinutes) * 100).toFixed(1);
    const dpFill = $('#dp-bar-fill');
    const dpPct = $('#day-progress-pct');
    if (dpFill) dpFill.style.width = progressPct + '%';
    if (dpPct) dpPct.textContent = progressPct + '%';
}

// ═══════════════════════════════════════
// WEATHER
// ═══════════════════════════════════════
function renderWeatherFromCache(cache) {
    if (!cache) return;
    updateEl('#weather-temp', cache.temp);
    updateEl('#weather-feels', cache.feels);
    updateEl('#weather-humidity', cache.humidity);
    updateEl('#weather-wind', cache.wind);
    updateEl('#weather-cond', cache.condition);
    updateEl('#weather-icon-main', cache.icon);
    updateEl('#weather-city', cache.city);
}

function hydrateWeatherCard() {
    if (!state.showWeather) return;
    if (state.weatherCache) {
        renderWeatherFromCache(state.weatherCache);
        return;
    }
    updateEl('#weather-cond', state.performanceMode ? 'Performance mode' : 'Detecting weather...');
    updateEl('#weather-city', state.performanceMode ? 'Refresh manually' : 'Detecting location...');
}

function fetchWeather(force = false) {
    if (state.performanceMode && !force) {
        if (state.weatherCache) {
            renderWeatherFromCache(state.weatherCache);
        } else {
            updateEl('#weather-cond', 'Performance mode');
            updateEl('#weather-city', 'Refresh manually');
        }
        return;
    }
    if (!navigator.geolocation) {
        updateEl('#weather-cond', 'No geolocation');
        updateEl('#weather-city', 'N/A');
        return;
    }
    navigator.geolocation.getCurrentPosition(pos => {
        const { latitude: lat, longitude: lon } = pos.coords;
        const tempUnit = state.weatherUnit === 'f' ? 'fahrenheit' : 'celsius';
        const windUnit = state.weatherUnit === 'f' ? 'mph' : 'kmh';
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&temperature_unit=${tempUnit}&wind_speed_unit=${windUnit}`)
            .then(r => r.json())
            .then(data => {
                const c = data.current;
                if (!c) return;
                const temp = Math.round(c.temperature_2m);
                const feels = Math.round(c.apparent_temperature);
                const hum = c.relative_humidity_2m;
                const wind = Math.round(c.wind_speed_10m);
                const { text, icon } = decodeWeather(c.weather_code);
                const unit = state.weatherUnit === 'f' ? 'F' : 'C';
                const windLabel = state.weatherUnit === 'f' ? 'mph' : 'km/h';
                state.weatherCache = {
                    temp: `${temp}°${unit}`,
                    feels: `${feels}°${unit}`,
                    humidity: `${hum}%`,
                    wind: `${wind} ${windLabel}`,
                    condition: text,
                    icon,
                    city: $('#weather-city')?.textContent || 'Detecting location...'
                };
                renderWeatherFromCache(state.weatherCache);
                saveState();
            })
            .catch(() => updateEl('#weather-cond', 'Unavailable'));

        fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&accept-language=${encodeURIComponent(getUiLanguage())}`)
            .then(r => r.json())
            .then(data => {
                const a = data.address || {};
                const city = a.city || a.town || a.village || a.state_district || a.state || 'Unknown';
                const cityText = `${city}, ${a.country || ''}`.trim();
                updateEl('#weather-city', cityText);
                if (state.weatherCache) {
                    state.weatherCache.city = cityText;
                    saveState();
                }
            })
            .catch(() => updateEl('#weather-city', `${lat.toFixed(2)}°, ${lon.toFixed(2)}°`));
    }, () => {
        updateEl('#weather-cond', 'Location denied');
        updateEl('#weather-city', 'Enable location access');
    });
}

function decodeWeather(code) {
    if (code === 0) return { text: 'Clear Sky', icon: 'sunny' };
    if (code <= 3) return { text: 'Partly Cloudy', icon: 'partly_cloudy_day' };
    if (code <= 48) return { text: 'Foggy', icon: 'foggy' };
    if (code <= 57) return { text: 'Drizzle', icon: 'grain' };
    if (code <= 67) return { text: 'Rain', icon: 'rainy' };
    if (code <= 77) return { text: 'Snow', icon: 'cloudy_snowing' };
    if (code <= 82) return { text: 'Rain Showers', icon: 'rainy' };
    if (code <= 86) return { text: 'Snow Showers', icon: 'cloudy_snowing' };
    if (code <= 99) return { text: 'Thunderstorm', icon: 'thunderstorm' };
    return { text: 'Unknown', icon: 'cloud' };
}

function updateEl(sel, txt) { const el = $(sel); if (el) el.textContent = txt; }

// ═══════════════════════════════════════
// POMODORO TIMER
// ═══════════════════════════════════════
function updatePomoDisplay() {
    const today = new Date().toDateString();
    if (state.pomoSessionDate !== today) {
        state.pomoSessions = 0;
        state.pomoSessionDate = today;
        saveState();
    }
    const uiStrings = getUiStrings();
    updateEl('#pomo-sessions', state.pomoSessions.toString());
    updateEl('#pomo-mode-label', pomoIsWork ? uiStrings.work : uiStrings.break);
    renderPomoTime();
    renderPomoRing();
}

function renderPomoTime() {
    const m = Math.floor(pomoTimeLeft / 60);
    const s = pomoTimeLeft % 60;
    updateEl('#pomo-time', `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`);
}

function renderPomoRing() {
    const ring = $('#pomo-ring-fg');
    if (!ring) return;
    const total = pomoIsWork ? 25 * 60 : 5 * 60;
    const circumference = 2 * Math.PI * 26; // r=26 (compact ring)
    const offset = circumference * (1 - pomoTimeLeft / total);
    ring.style.strokeDasharray = circumference;
    ring.style.strokeDashoffset = offset;
}

function togglePomo() {
    if (pomoRunning) {
        clearInterval(pomoInterval);
        pomoRunning = false;
        const btn = $('#pomo-start');
        if (btn) btn.querySelector('.material-symbols-rounded').textContent = 'play_arrow';
    } else {
        pomoRunning = true;
        const btn = $('#pomo-start');
        if (btn) btn.querySelector('.material-symbols-rounded').textContent = 'pause';
        pomoInterval = setInterval(() => {
            pomoTimeLeft--;
            if (pomoTimeLeft <= 0) {
                clearInterval(pomoInterval);
                pomoRunning = false;
                if (pomoIsWork) {
                    state.pomoSessions++;
                    state.pomoSessionDate = new Date().toDateString();
                    const historyKey = new Date().toISOString().split('T')[0];
                    state.pomoHistory[historyKey] = (state.pomoHistory[historyKey] || 0) + 1;
                    saveState();
                    updateEl('#pomo-sessions', state.pomoSessions.toString());
                    renderPomoStats();
                }
                pomoIsWork = !pomoIsWork;
                pomoTimeLeft = pomoIsWork ? 25 * 60 : 5 * 60;
                const uiStrings = getUiStrings();
                updateEl('#pomo-mode-label', pomoIsWork ? uiStrings.work : uiStrings.break);
                const b = $('#pomo-start');
                if (b) b.querySelector('.material-symbols-rounded').textContent = 'play_arrow';
            }
            renderPomoTime();
            renderPomoRing();
        }, 1000);
    }
}

function resetPomo() {
    clearInterval(pomoInterval);
    pomoRunning = false;
    pomoIsWork = true;
    pomoTimeLeft = 25 * 60;
    updatePomoDisplay();
    const btn = $('#pomo-start');
    if (btn) btn.querySelector('.material-symbols-rounded').textContent = 'play_arrow';
}

function skipPomo() {
    clearInterval(pomoInterval);
    pomoRunning = false;
    pomoIsWork = !pomoIsWork;
    pomoTimeLeft = pomoIsWork ? 25 * 60 : 5 * 60;
    updatePomoDisplay();
    const btn = $('#pomo-start');
    if (btn) btn.querySelector('.material-symbols-rounded').textContent = 'play_arrow';
}

// ═══════════════════════════════════════
// DAILY FOCUS
// ═══════════════════════════════════════
function renderFocus() {
    const today = new Date().toDateString();
    // Reset focus if it's a new day
    if (state.focusDate && state.focusDate !== today) {
        state.focusGoal = '';
        state.focusDate = '';
        saveState();
    }

    const input = $('#focus-input');
    const display = $('#focus-display');
    const active = $('#focus-active');
    const text = $('#focus-text');

    if (!display || !active) return;

    if (state.focusGoal) {
        display.style.display = 'none';
        active.style.display = 'flex';
        if (text) text.textContent = state.focusGoal;
    } else {
        display.style.display = 'block';
        active.style.display = 'none';
        if (input) input.value = '';
    }
}

function setFocus() {
    const input = $('#focus-input');
    if (!input) return;
    const goal = input.value.trim();
    if (!goal) return;
    state.focusGoal = goal;
    state.focusDate = new Date().toDateString();
    saveState();
    renderFocus();
}

function clearFocus() {
    state.focusGoal = '';
    state.focusDate = '';
    saveState();
    renderFocus();
}

// ═══════════════════════════════════════
// QUOTE OF THE DAY
// ═══════════════════════════════════════
async function renderQuote() {
    if (state.customQuoteEnabled && state.customQuoteText.trim()) {
        updateEl('#quote-text', `"${state.customQuoteText.trim()}"`);
        updateEl('#quote-author', state.customQuoteAuthor.trim() ? `— ${state.customQuoteAuthor.trim()}` : `— ${translate('You')}`);
        return;
    }
    const dayIndex = Math.floor(Date.now() / 86400000) % QUOTES.length;
    const q = QUOTES[dayIndex];
    updateEl('#quote-text', `"${q.text}"`);
    updateEl('#quote-author', `— ${q.author}`);
}

// ═══════════════════════════════════════
// SEARCH
// ═══════════════════════════════════════
function performSearch() {
    const input = $('#search-input');
    const q = input?.value.trim();
    if (!q) return;
    const engine = getSearchEngine(state.engine);
    window.location.href = engine.url + encodeURIComponent(q);
}

function setEngine(engine) {
    state.engine = engine;
    saveState();
    updateEngineUI();
}

function renderSearchEngines() {
    const strip = $('#engine-strip');
    if (!strip) return;
    strip.innerHTML = (state.searchEngines || []).map(engine => `
        <button class="engine-chip ${engine.id === state.engine ? 'active' : ''}" data-engine="${esc(engine.id)}">
            <span class="material-symbols-rounded">${esc(engine.icon || 'search')}</span> ${esc(engine.name)}
        </button>
    `).join('');
    updateEngineUI();
}

function updateEngineUI() {
    $$('.engine-chip').forEach(b => b.classList.toggle('active', b.dataset.engine === state.engine));
    const engine = getSearchEngine(state.engine);
    updateEl('#engine-label', engine.label);
}

// ═══════════════════════════════════════
// SHORTCUTS & AI TOOLS
// ═══════════════════════════════════════
const KNOWN_FAVICONS = {
    'gmail.com': 'https://www.gstatic.com/images/branding/product/2x/gmail_2020q4_48dp.png',
    'mail.google.com': 'https://www.gstatic.com/images/branding/product/2x/gmail_2020q4_48dp.png',
    'drive.google.com': 'https://www.gstatic.com/images/branding/product/2x/drive_2020q4_48dp.png',
    'maps.google.com': 'https://www.gstatic.com/images/branding/product/2x/maps_2020q4_48dp.png',
};

function getShortcutFavicon(url) {
    const domain = getDomain(url);
    if (KNOWN_FAVICONS[domain]) return KNOWN_FAVICONS[domain];
    return `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${encodeURIComponent(url)}&size=64`;
}

function renderShortcuts() {
    const grid = $('#shortcuts-grid');
    if (!grid) return;
    grid.innerHTML = state.shortcuts.map((s, i) => `
        <a href="${esc(s.url)}" class="shortcut-item" data-idx="${i}">
            <div class="shortcut-icon">
                <img src="${getShortcutFavicon(s.url)}" alt="${esc(s.name)}" class="shortcut-favicon">
                <span class="material-symbols-rounded shortcut-icon-fallback" style="display:none">${esc(s.icon)}</span>
            </div>
            <span class="shortcut-label">${esc(s.name)}</span>
        </a>`).join('');

    // Fallback to material icon if favicon fails
    grid.querySelectorAll('.shortcut-favicon').forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
            if (this.nextElementSibling) this.nextElementSibling.style.display = 'flex';
        });
    });
}

function renderAiTools() {
    const grid = $('#ai-tools-grid');
    if (!grid) return;
    grid.innerHTML = state.aiTools.map((t, i) => {
        const favicon = t.favicon || `https://www.google.com/s2/favicons?domain=${getDomain(t.url)}&sz=64`;
        return `
        <a href="${esc(t.url)}" class="ai-tool-chip" data-idx="${i}">
            <img src="${esc(favicon)}" alt="${esc(t.name)}" class="ai-tool-logo">
            <span class="material-symbols-rounded ai-tool-icon-fallback" style="display:none">${esc(t.icon)}</span>
            <span>${esc(t.name)}</span>
        </a>`;
    }).join('');

    // Attach error handlers safely (CSP friendly)
    grid.querySelectorAll('.ai-tool-logo').forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
            if (this.nextElementSibling) {
                this.nextElementSibling.style.display = 'flex';
            }
        });
    });
}

// ═══════════════════════════════════════
// SOCIAL DOCK (Dynamic)
// ═══════════════════════════════════════
const SOCIAL_SVGS = {
    youtube: '<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>',
    instagram: '<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>',
    twitter: '<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>',
    github: '<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>',
    linkedin: '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>',
    reddit: '<path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>',
    discord: '<path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/>',
    telegram: '<path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>',
    whatsapp: '<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>',
    spotify: '<path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>',
    facebook: '<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>',
    tiktok: '<path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>',
    pinterest: '<path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>',
    snapchat: '<path d="M12.065.61C8.018.61 5.27 3.2 5.27 7.31v3.39c-.46.17-.78.2-1.1.2-.58 0-.88-.32-.88-.75 0-1.17 1.7-1.06 1.7-2.85 0-.82-.6-1.3-1.37-1.3-1.13 0-2.15 1.2-2.15 3.37 0 1.33.47 2.21 1.04 2.78-.62 1.41-1.7 3.1-2.08 3.72-.37.59-.63 1.4-.35 2.07.22.52.76.75 1.47.55 1.07-.33 1.93-1.89 2.56-3.14.27.02.5.03.7.03.33 0 .58-.03.87-.08.37 1.16.74 2.44 1.5 3.31.79.9 1.94 1.53 3.71 1.53 1.89 0 2.98-.69 3.74-1.58.73-.86 1.1-2.1 1.46-3.27.28.05.53.08.87.08.2 0 .43-.01.72-.03.62 1.24 1.47 2.8 2.55 3.13.71.2 1.25-.03 1.47-.55.28-.67.02-1.48-.35-2.07-.38-.62-1.46-2.31-2.08-3.72.57-.57 1.04-1.45 1.04-2.78 0-2.17-1.02-3.37-2.15-3.37-.77 0-1.37.48-1.37 1.3 0 1.79 1.7 1.68 1.7 2.85 0 .43-.3.75-.88.75-.32 0-.64-.03-1.1-.2V7.31c0-4.11-2.748-6.7-6.795-6.7z"/>'
};

function renderSocialDock() {
    const dock = $('#social-dock');
    if (!dock) return;
    const links = state.socialLinks || DEFAULT_STATE.socialLinks;
    const isUnlocked = !state.layoutLocked;
    let html = links.map(link => {
        const iconKey = (link.icon || '').toLowerCase();
        const svgPath = SOCIAL_SVGS[iconKey];
        let iconHtml;
        if (svgPath) {
            iconHtml = `<svg viewBox="0 0 24 24" fill="currentColor">${svgPath}</svg>`;
        } else {
            iconHtml = `<img src="https://www.google.com/s2/favicons?domain=${getDomain(link.url)}&sz=32" alt="${esc(link.name)}">`;
        }
        return `<a href="${esc(link.url)}" target="_blank" class="social-icon" data-social="${esc(iconKey)}">${iconHtml}<span class="social-tooltip">${esc(link.name)}</span></a>`;
    }).join('');
    if (isUnlocked) {
        html += `<button id="edit-social-btn" class="social-edit-btn" title="Edit Social Links"><svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg></button>`;
    }
    dock.innerHTML = html;
    
    if (isUnlocked) {
        dock.querySelector('#edit-social-btn')?.addEventListener('click', (e) => {
            e.preventDefault();
            openEditModal('socialLinks');
        });
    }
}

// ═══════════════════════════════════════
// TODO
// ═══════════════════════════════════════
function renderTodos() {
    const list = $('#todo-list');
    if (!list) return;
    const sorted = [...state.todos].sort((a, b) => {
        if (a.completed !== b.completed) return a.completed ? 1 : -1;
        if (a.pinned !== b.pinned) return b.pinned ? 1 : -1;
        return (a.order || 0) - (b.order || 0);
    });
    list.innerHTML = sorted.map(t => `
        <li class="todo-item ${t.completed ? 'completed' : ''} ${t.pinned ? 'pinned' : ''}" data-id="${t.id}" draggable="true">
            <button class="todo-drag" data-action="drag" data-id="${t.id}"><span class="material-symbols-rounded">drag_indicator</span></button>
            <div class="todo-checkbox" data-action="toggle" data-id="${t.id}"></div>
            <div class="todo-content">
                <span class="todo-text">${esc(t.text)}</span>
                <div class="todo-meta">
                    ${t.priority && t.priority !== 'normal' ? `<span class="todo-pill ${esc(t.priority)}">${esc(t.priority)}</span>` : ''}
                    ${t.dueDate ? `<span class="todo-pill">${esc(formatDateLabel(t.dueDate))}</span>` : ''}
                </div>
            </div>
            <button class="todo-pin" data-action="pin" data-id="${t.id}"><span class="material-symbols-rounded">push_pin</span></button>
            <button class="todo-delete" data-action="delete" data-id="${t.id}"><span class="material-symbols-rounded">close</span></button>
        </li>`).join('');
    updateEl('#todo-count', state.todos.filter(t => !t.completed).length.toString());
}

function addTodo() {
    const input = $('#todo-input');
    const dueInput = $('#todo-date-input');
    const priorityInput = $('#todo-priority-input');
    const text = input?.value.trim();
    if (!text) return;
    const nextOrder = state.todos.reduce((max, todo) => Math.max(max, todo.order || 0), 0) + 1;
    state.todos.push({
        id: uid(),
        text,
        completed: false,
        pinned: false,
        dueDate: dueInput?.value || '',
        priority: priorityInput?.value || 'normal',
        order: nextOrder
    });
    input.value = '';
    if (dueInput) dueInput.value = '';
    if (priorityInput) priorityInput.value = 'normal';
    saveState();
    renderTodos();
}

function reorderTodo(draggedId, targetId) {
    if (!draggedId || !targetId || draggedId === targetId) return;
    const sorted = [...state.todos].sort((a, b) => (a.order || 0) - (b.order || 0));
    const draggedIndex = sorted.findIndex(todo => todo.id === draggedId);
    const targetIndex = sorted.findIndex(todo => todo.id === targetId);
    if (draggedIndex === -1 || targetIndex === -1) return;
    const [dragged] = sorted.splice(draggedIndex, 1);
    sorted.splice(targetIndex, 0, dragged);
    sorted.forEach((todo, index) => { todo.order = index + 1; });
    state.todos = sorted;
    saveState();
    renderTodos();
}

// ═══════════════════════════════════════
// QUICK NOTES
// ═══════════════════════════════════════
function loadQuickNote() {
    const area = $('#quick-note');
    if (area) area.value = state.quickNote || '';
    renderQuickNotePreview();
    if (area) area.style.display = state.notePreview ? 'none' : 'block';
    const preview = $('#quick-note-preview');
    if (preview) preview.style.display = state.notePreview ? 'block' : 'none';
}

function saveQuickNote() {
    const area = $('#quick-note');
    if (area) {
        state.quickNote = area.value;
        saveState();
        renderQuickNotePreview();
    }
}

function renderQuickNotePreview() {
    const preview = $('#quick-note-preview');
    if (!preview) return;
    const lines = (state.quickNote || '').split('\n');
    const html = lines.map((line, index) => {
        if (!line.trim()) return '<br>';
        if (/^###\s+/.test(line)) return `<h3>${formatInlineMarkdown(line.replace(/^###\s+/, ''))}</h3>`;
        if (/^##\s+/.test(line)) return `<h2>${formatInlineMarkdown(line.replace(/^##\s+/, ''))}</h2>`;
        if (/^#\s+/.test(line)) return `<h1>${formatInlineMarkdown(line.replace(/^#\s+/, ''))}</h1>`;
        const checklistMatch = line.match(/^- \[( |x)\] (.*)$/i);
        if (checklistMatch) {
            const done = checklistMatch[1].toLowerCase() === 'x';
            return `<div class="note-check-item ${done ? 'done' : ''}" data-line="${index}">
                <span class="note-check-box">${done ? '✓' : ''}</span>
                <span class="note-check-label">${formatInlineMarkdown(checklistMatch[2])}</span>
            </div>`;
        }
        if (/^- /.test(line)) return `<ul><li>${formatInlineMarkdown(line.replace(/^- /, ''))}</li></ul>`;
        return `<p>${formatInlineMarkdown(line)}</p>`;
    }).join('');
    preview.innerHTML = html || '<p>No preview yet.</p>';
}

function formatInlineMarkdown(text) {
    let html = esc(text);
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
    html = html.replace(/`(.+?)`/g, '<code>$1</code>');
    html = html.replace(/\[(.+?)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');
    return html;
}

function toggleQuickNoteChecklist(lineIndex) {
    const area = $('#quick-note');
    if (!area) return;
    const lines = area.value.split('\n');
    const line = lines[lineIndex];
    if (!line) return;
    lines[lineIndex] = line.includes('[x]') ? line.replace('[x]', '[ ]') : line.replace('[ ]', '[x]');
    area.value = lines.join('\n');
    state.quickNote = area.value;
    saveState();
    renderQuickNotePreview();
}

// ═══════════════════════════════════════
// HABITS
// ═══════════════════════════════════════
function renderHabits() {
    const list = $('#habit-list');
    if (!list) return;
    const today = new Date().toDateString();

    list.innerHTML = state.habits.map((h, i) => {
        const doneToday = h.lastDone === today;
        const history = getHabitHistoryDays(h);
        return `
        <div class="habit-item" data-idx="${i}">
            <span class="habit-name">${esc(h.name)}</span>
            <span class="habit-streak">🔥 ${h.streak || 0}</span>
            <div class="habit-check ${doneToday ? 'done' : ''}" data-hidx="${i}"></div>
            <button class="habit-delete" data-hidx="${i}"><span class="material-symbols-rounded">close</span></button>
            <div class="habit-history">${history.map(day => `<span class="habit-day ${day.done ? 'done' : ''}" title="${esc(day.label)}"></span>`).join('')}</div>
        </div>`;
    }).join('');
}

function addHabit(payload = {}) {
    const name = payload.name?.trim();
    if (!name) {
        showToast('Habit name is required.', 'error', 'Missing field');
        return;
    }
    state.habits.push({ name, streak: 0, lastDone: '', history: [] });
    saveState();
    renderHabits();
    closeCreateModal();
    showToast(translate('__NAME__ added to habits.', { NAME: name }), 'success', 'Habit created');
}

function toggleHabit(idx) {
    const h = state.habits[idx];
    if (!h) return;
    const today = new Date().toDateString();
    if (!Array.isArray(h.history)) h.history = [];
    if (h.lastDone === today) {
        h.streak = Math.max(0, (h.streak || 0) - 1);
        h.lastDone = '';
        h.history = h.history.filter(day => day !== today);
    } else {
        h.streak = (h.streak || 0) + 1;
        h.lastDone = today;
        if (!h.history.includes(today)) h.history.push(today);
    }
    saveState();
    renderHabits();
}

function getHabitHistoryDays(habit) {
    const days = [];
    const history = new Set(habit.history || []);
    for (let offset = 6; offset >= 0; offset--) {
        const day = new Date();
        day.setDate(day.getDate() - offset);
        const label = day.toLocaleDateString(getUiLocales(), { weekday: 'short', month: 'short', day: 'numeric' });
        days.push({ label, done: history.has(day.toDateString()) });
    }
    return days;
}

function deleteHabit(idx) {
    const habitName = state.habits[idx]?.name || 'Habit';
    state.habits.splice(idx, 1);
    saveState();
    renderHabits();
    showToast(translate('__NAME__ removed.', { NAME: habitName }), 'info', 'Habit deleted');
}

// ═══════════════════════════════════════
// WORLD CLOCK
// ═══════════════════════════════════════
function renderWorldClocks() {
    const list = $('#worldclock-list');
    if (!list) return;
    list.innerHTML = state.worldClocks.map((wc, i) => `
        <div class="wc-item" data-idx="${i}">
            <span class="wc-city">${esc(wc.city)}</span>
            <span class="wc-time" id="wc-time-${i}">--:--</span>
            <button class="wc-delete" data-wcidx="${i}"><span class="material-symbols-rounded">close</span></button>
        </div>`).join('');
    updateWorldClockTimes();
}

function updateWorldClockTimes() {
    state.worldClocks.forEach((wc, i) => {
        const el = $(`#wc-time-${i}`);
        if (!el) return;
        try {
            const time = new Date().toLocaleTimeString(getUiLocales(), {
                timeZone: wc.tz,
                hour: '2-digit',
                minute: '2-digit',
                hour12: !state.use24Hour
            });
            el.textContent = time;
        } catch {
            el.textContent = 'Invalid TZ';
        }
    });
}

function addWorldClock(payload = {}) {
    const city = payload.city?.trim();
    const tz = payload.tz?.trim();
    if (!city || !tz) {
        showToast('City and timezone are both required.', 'error', 'Missing field');
        return;
    }
    try {
        new Intl.DateTimeFormat(getUiLocales(), { timeZone: tz }).format(new Date());
    } catch {
        showToast('Timezone format looks invalid. Use something like Asia/Dubai.', 'error', 'Invalid timezone');
        return;
    }
    state.worldClocks.push({ city, tz });
    saveState();
    renderWorldClocks();
    closeCreateModal();
    showToast(translate('__NAME__ clock added.', { NAME: city }), 'success', 'World clock created');
}

function deleteWorldClock(idx) {
    const city = state.worldClocks[idx]?.city || 'Clock';
    state.worldClocks.splice(idx, 1);
    saveState();
    renderWorldClocks();
    showToast(translate('__NAME__ removed.', { NAME: city }), 'info', 'World clock deleted');
}

// ═══════════════════════════════════════
// READING LIST
// ═══════════════════════════════════════
function renderReadingList() {
    const list = $('#reading-list');
    if (!list) return;
    list.innerHTML = state.readingList.map((item, i) => {
        const domain = getDomain(item.url);
        const favicon = `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;
        return `
        <a href="${esc(item.url)}" class="reading-item" target="_blank" data-idx="${i}">
            <img src="${favicon}" alt="" loading="lazy">
            <span class="reading-title">${esc(item.title || item.url)}</span>
            <button class="reading-delete" data-ridx="${i}">
                <span class="material-symbols-rounded">close</span>
            </button>
        </a>`;
    }).join('');

    list.querySelectorAll('.reading-item img').forEach(img => {
        img.addEventListener('error', () => {
            img.style.display = 'none';
        });
    });

    list.querySelectorAll('.reading-delete').forEach(btn => {
        btn.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            deleteReading(parseInt(btn.dataset.ridx, 10));
        });
    });
}

function addReading() {
    const input = $('#reading-input');
    let url = input?.value.trim();
    if (!url) return;
    if (!url.startsWith('http')) url = 'https://' + url;
    const title = getDomain(url) || url;
    state.readingList.push({ url, title });
    input.value = '';
    saveState();
    renderReadingList();
}

function deleteReading(idx) {
    state.readingList.splice(idx, 1);
    saveState();
    renderReadingList();
}

// ═══════════════════════════════════════
// AGENDA / EXTRA WIDGETS
// ═══════════════════════════════════════
function renderAgenda() {
    const list = $('#agenda-list');
    if (!list) return;
    const items = [...state.agendaItems].sort((a, b) => new Date(a.date || 0) - new Date(b.date || 0));
    if (!items.length) {
        list.innerHTML = '<div class="agenda-item"><span class="material-symbols-rounded">event</span><div class="agenda-item-meta"><span class="agenda-item-title">No upcoming events</span><span class="agenda-item-date">Add one or open Google Calendar.</span></div></div>';
        return;
    }
    list.innerHTML = items.map(item => `
        <div class="agenda-item" data-id="${item.id}">
            <span class="material-symbols-rounded">event_upcoming</span>
            <div class="agenda-item-meta">
                <span class="agenda-item-title">${esc(item.title)}</span>
                <span class="agenda-item-date">${esc(formatDateTimeLabel(item.date))}</span>
            </div>
            <button class="reading-delete" data-action="delete-event" data-id="${item.id}"><span class="material-symbols-rounded">close</span></button>
        </div>
    `).join('');
}

function addAgendaItem() {
    const titleInput = $('#event-title-input');
    const dateInput = $('#event-date-input');
    const title = titleInput?.value.trim();
    const date = dateInput?.value;
    if (!title || !date) {
        showToast('Event title and date are required.', 'error', 'Missing field');
        return;
    }
    state.agendaItems.push({ id: uid(), title, date });
    titleInput.value = '';
    dateInput.value = '';
    saveState();
    renderAgenda();
    showToast(translate('__TITLE__ added to agenda.', { TITLE: title }), 'success', 'Event added');
}

function deleteAgendaItem(id) {
    const title = state.agendaItems.find(item => item.id === id)?.title || 'Event';
    state.agendaItems = state.agendaItems.filter(item => item.id !== id);
    saveState();
    renderAgenda();
    showToast(translate('__TITLE__ removed from agenda.', { TITLE: title }), 'info', 'Event deleted');
}

function renderCustomWidgets() {
    const list = $('#custom-widgets-list');
    if (!list) return;
    if (!state.customWidgets.length) {
        list.innerHTML = '<div class="custom-widget-card"><div class="custom-widget-title"><span class="material-symbols-rounded">dashboard_customize</span> Add your first custom widget</div><div class="custom-widget-body">Use it for links, reminders, snippets, or tiny dashboards.</div></div>';
        return;
    }
    list.innerHTML = state.customWidgets.map(widget => `
        <div class="custom-widget-card" data-id="${widget.id}">
            <div class="custom-widget-head">
                <div class="custom-widget-title"><span class="material-symbols-rounded">${esc(widget.icon || 'widgets')}</span>${esc(widget.title)}</div>
                <button class="reading-delete" data-action="delete-widget" data-id="${widget.id}"><span class="material-symbols-rounded">close</span></button>
            </div>
            <div class="custom-widget-body">${esc(widget.content || '')}</div>
            ${widget.link ? `<a class="custom-widget-link" href="${esc(widget.link)}" target="_blank">Open link</a>` : ''}
        </div>
    `).join('');
}

function addCustomWidget(payload = {}) {
    const title = payload.title?.trim();
    if (!title) {
        showToast('Widget title is required.', 'error', 'Missing field');
        return;
    }
    const content = payload.content?.trim() || '';
    const link = normalizeExternalUrl(payload.link || '');
    const icon = payload.icon?.trim() || 'widgets';
    state.customWidgets.push({ id: uid(), title, content, link, icon });
    saveState();
    renderCustomWidgets();
    closeCreateModal();
    showToast(translate('__TITLE__ widget created.', { TITLE: title }), 'success', 'Custom widget added');
}

function deleteCustomWidget(id) {
    const title = state.customWidgets.find(widget => widget.id === id)?.title || 'Widget';
    state.customWidgets = state.customWidgets.filter(widget => widget.id !== id);
    saveState();
    renderCustomWidgets();
    showToast(translate('__NAME__ removed.', { NAME: title }), 'info', 'Widget deleted');
}

function renderQuickActions() {
    const grid = $('#quick-actions-grid');
    if (!grid) return;
    grid.innerHTML = AI_ACTIONS.map(action => `
        <button class="quick-action-btn" data-action-id="${action.id}">
            <span class="material-symbols-rounded">${action.icon}</span>
            <span>${action.label}</span>
        </button>
    `).join('');
}

async function runQuickAction(actionId, button) {
    const action = AI_ACTIONS.find(item => item.id === actionId);
    if (!action) return;
    try {
        window.open(AI_PROVIDER_URLS[state.aiProvider] || AI_PROVIDER_URLS.chatgpt, '_blank');
        const clipboardText = await navigator.clipboard.readText();
        const promptText = action.prompt + (clipboardText || 'No clipboard text found.');
        await navigator.clipboard.writeText(promptText);
        const original = button?.innerHTML;
        if (button) button.innerHTML = '<span class="material-symbols-rounded">check</span><span>Copied</span>';
        showToast('Prompt copied to clipboard. Paste it in your AI tab.', 'success', 'Quick action ready');
        setTimeout(() => {
            if (button && original) button.innerHTML = original;
        }, 1200);
    } catch {
        showToast('Clipboard access failed. Please allow clipboard permission and try again.', 'error', 'Clipboard blocked');
    }
}

function renderPomoStats() {
    const chart = $('#pomo-stats-chart');
    if (!chart) return;
    const data = getRecentPomodoroStats();
    const max = Math.max(1, ...data.map(item => item.count));
    chart.innerHTML = data.map(item => `
        <div class="pomo-bar">
            <div class="pomo-bar-fill" style="height:${Math.max(8, (item.count / max) * 90)}px"></div>
            <span class="pomo-bar-label">${esc(item.label)}</span>
        </div>
    `).join('');
}

function getRecentPomodoroStats() {
    const history = state.pomoHistory || {};
    const stats = [];
    for (let offset = 6; offset >= 0; offset--) {
        const day = new Date();
        day.setDate(day.getDate() - offset);
        const key = day.toISOString().split('T')[0];
        stats.push({
            label: day.toLocaleDateString(getUiLocales(), { weekday: 'short' }),
            count: history[key] || 0
        });
    }
    return stats;
}

function renderTopSites() {
    const container = $('#top-sites-list');
    if (!container) return;
    if (typeof chrome !== 'undefined' && chrome.topSites) {
        chrome.topSites.get(items => {
            if (chrome.runtime?.lastError) {
                renderBookmarkItems(container, state.shortcuts.slice(0, 8).map(item => ({ title: item.name, url: item.url })));
                return;
            }
            renderBookmarkItems(container, items || []);
        });
    } else {
        renderBookmarkItems(container, state.shortcuts.slice(0, 8).map(item => ({ title: item.name, url: item.url })));
    }
}

function renderTabGroups() {
    const list = $('#tab-groups-list');
    if (!list) return;
    if (!(typeof chrome !== 'undefined' && chrome.tabs && chrome.tabGroups)) {
        list.innerHTML = '<div class="wc-item"><span class="wc-city">No tab groups API</span><span class="wc-time">Unavailable</span></div>';
        return;
    }
    chrome.tabs.query({ currentWindow: true }, tabs => {
        if (chrome.runtime?.lastError) {
            list.innerHTML = '<div class="wc-item"><span class="wc-city">Tab groups unavailable</span><span class="wc-time">Error</span></div>';
            return;
        }
        const grouped = [...new Set(tabs.map(tab => tab.groupId).filter(id => id >= 0))];
        if (!grouped.length) {
            list.innerHTML = '<div class="wc-item"><span class="wc-city">No tab groups</span><span class="wc-time">0</span></div>';
            return;
        }
        Promise.all(grouped.map(groupId => new Promise(resolve => {
            chrome.tabGroups.get(groupId, group => {
                if (chrome.runtime?.lastError || !group) {
                    resolve(null);
                    return;
                }
                resolve({ groupId, group, tabs: tabs.filter(tab => tab.groupId === groupId) });
            });
        }))).then(groups => {
            const visibleGroups = groups.filter(Boolean);
            if (!visibleGroups.length) {
                list.innerHTML = '<div class="wc-item"><span class="wc-city">No tab groups</span><span class="wc-time">0</span></div>';
                return;
            }
            list.innerHTML = visibleGroups.map(entry => `
                <button class="wc-item" data-action="focus-group" data-group-id="${entry.groupId}">
                    <span class="wc-city">${esc(entry.group.title || translate('Group __GROUP__', { GROUP: entry.groupId }))}</span>
                    <span class="wc-time">${esc(translate('__COUNT__ tabs', { COUNT: entry.tabs.length }))}</span>
                </button>
            `).join('');
        });
    });
}

function focusTabGroup(groupId) {
    if (!(typeof chrome !== 'undefined' && chrome.tabs)) return;
    chrome.tabs.query({ currentWindow: true }, tabs => {
        const groupedTabs = tabs.filter(tab => tab.groupId === Number(groupId));
        if (!groupedTabs.length) return;
        chrome.tabs.highlight({ windowId: groupedTabs[0].windowId, tabs: groupedTabs.map(tab => tab.index) });
    });
}

// ═══════════════════════════════════════
// BOOKMARKS
// ═══════════════════════════════════════
function renderBookmarks() {
    const container = $('#bookmarks-list');
    if (!container) return;
    container.classList.toggle('grid-view', state.bookmarkView === 'grid');
    if (typeof chrome !== 'undefined' && chrome.bookmarks) {
        if (state.bookmarkSource === 'folders') {
            chrome.bookmarks.getTree(tree => renderBookmarkFolders(container, tree?.[0]?.children || []));
        } else {
            chrome.bookmarks.getRecent(20, r => renderBookmarkItems(container, r));
        }
    } else {
        if (state.bookmarkSource === 'folders') {
            renderBookmarkFolders(container, [{ title: 'Favorites', children: [
                { title: 'Google', url: 'https://google.com' },
                { title: 'YouTube', url: 'https://youtube.com' },
                { title: 'GitHub', url: 'https://github.com' }
            ] }]);
        } else {
            renderBookmarkItems(container, [
                { title: 'Google', url: 'https://google.com' },
                { title: 'YouTube', url: 'https://youtube.com' },
                { title: 'GitHub', url: 'https://github.com' },
                { title: 'Gmail', url: 'https://gmail.com' },
                { title: 'Stack Overflow', url: 'https://stackoverflow.com' },
                { title: 'MDN Web Docs', url: 'https://developer.mozilla.org' },
            ]);
        }
    }
}

function renderBookmarkFolders(container, items) {
    const folders = items.filter(item => Array.isArray(item.children) && item.children.length);
    container.classList.remove('grid-view');
    container.innerHTML = folders.slice(0, 8).map(folder => `
        <div class="bookmark-folder">
            <div class="bookmark-folder-title"><span class="material-symbols-rounded">folder</span>${esc(folder.title || 'Folder')}</div>
            <div class="bookmark-folder-children">
                ${(folder.children || []).filter(child => child.url).slice(0, 5).map(child => `
                    <a href="${esc(child.url)}" class="bookmark-item" title="${esc(child.title || child.url)}">
                        <img src="https://www.google.com/s2/favicons?domain=${getDomain(child.url)}&sz=32" alt="" loading="lazy">
                        <span class="bookmark-title">${esc(child.title || child.url)}</span>
                    </a>
                `).join('')}
            </div>
        </div>
    `).join('') || '<div class="bookmark-folder"><div class="bookmark-folder-title"><span class="material-symbols-rounded">folder_off</span>No bookmark folders found</div></div>';
    container.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', () => { img.style.display = 'none'; });
    });
}

function renderBookmarkItems(container, items) {
    container.innerHTML = items.map(bm => {
        const url = bm.url || '#';
        const title = bm.title || url;
        const domain = getDomain(url);
        return `<a href="${esc(url)}" class="bookmark-item" title="${esc(title)}">
            <img src="https://www.google.com/s2/favicons?domain=${domain}&sz=32" alt="" loading="lazy">
            <span class="bookmark-title">${esc(title)}</span>
        </a>`;
    }).join('');

    container.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', () => {
            img.style.display = 'none';
        });
    });
}

// ═══════════════════════════════════════
// PARTICLES
// ═══════════════════════════════════════
function applyParticles() {
    const canvas = $('#particles-canvas');
    if (!canvas) return;
    if (state.particles && !state.performanceMode) {
        canvas.classList.remove('hidden');
        if (restartParticlesAnimation && !particlesAnimId) {
            restartParticlesAnimation();
        }
    } else {
        canvas.classList.add('hidden');
        if (particlesAnimId) {
            cancelAnimationFrame(particlesAnimId);
            particlesAnimId = null;
        }
    }
}

function initParticles() {
    const canvas = $('#particles-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 50; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            size: Math.random() * 2 + 0.5,
            opacity: Math.random() * 0.5 + 0.1
        });
    }

    function animate() {
        if (!state.particles || state.performanceMode) {
            particlesAnimId = null;
            return;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255,255,255,${p.opacity})`;
            ctx.fill();
        });
        particlesAnimId = requestAnimationFrame(animate);
    }

    restartParticlesAnimation = () => {
        if (!particlesAnimId) {
            particlesAnimId = requestAnimationFrame(animate);
        }
    };

    if (state.particles) {
        restartParticlesAnimation();
    }
}

// ═══════════════════════════════════════
// EDIT MODAL
// ═══════════════════════════════════════
function openEditModal(mode) {
    currentEditMode = mode;
    const body = $('#edit-modal-body');
    if (mode === 'shortcuts') {
        updateEl('#edit-modal-title', 'Edit Shortcuts');
        renderEditItems(body, state.shortcuts);
    } else if (mode === 'aiTools') {
        updateEl('#edit-modal-title', 'Edit AI Tools');
        renderEditItems(body, state.aiTools);
    } else if (mode === 'socialLinks') {
        updateEl('#edit-modal-title', 'Edit Social Links');
        renderEditItems(body, state.socialLinks);
    } else if (mode === 'searchEngines') {
        updateEl('#edit-modal-title', 'Edit Search Engines');
        renderEditItems(body, state.searchEngines.map(engine => ({ name: engine.name, url: engine.url, icon: engine.icon })));
    }
    $('#edit-modal')?.classList.add('open');
    $('#edit-modal-backdrop')?.classList.add('visible');
}

function closeEditModal() {
    currentEditMode = null;
    $('#edit-modal')?.classList.remove('open');
    $('#edit-modal-backdrop')?.classList.remove('visible');
}

function renderEditItems(body, items) {
    body.innerHTML = items.map((item, idx) => `
        <div class="modal-item-row" data-idx="${idx}">
            <div class="modal-item-fields">
                <div class="field-row">
                    <input type="text" class="edit-name" value="${esc(item.name)}" placeholder="Name">
                    <input type="text" class="edit-icon field-small" value="${esc(item.icon)}" placeholder="Icon">
                </div>
                <input type="text" class="edit-url" value="${esc(item.url)}" placeholder="https://...">
            </div>
            <button class="modal-delete-btn" data-delidx="${idx}"><span class="material-symbols-rounded">delete</span></button>
        </div>`).join('') +
        `<p class="icon-hint">Icons from <a href="https://fonts.google.com/icons" target="_blank">Material Symbols</a> — e.g. <b>mail</b>, <b>code</b>, <b>smart_toy</b></p>`;

    body.querySelectorAll('.modal-delete-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const row = btn.closest('.modal-item-row');
            if (row) { row.style.opacity = '0'; row.style.transform = 'translateX(20px)'; setTimeout(() => row.remove(), 200); }
        });
    });
}

function addEditItem() {
    const body = $('#edit-modal-body');
    const hint = body?.querySelector('.icon-hint');
    if (!body || !hint) return;
    const row = document.createElement('div');
    row.className = 'modal-item-row';
    row.innerHTML = `
        <div class="modal-item-fields">
            <div class="field-row">
                <input type="text" class="edit-name" placeholder="Name">
                <input type="text" class="edit-icon field-small" value="link" placeholder="Icon">
            </div>
            <input type="text" class="edit-url" placeholder="https://...">
        </div>
        <button class="modal-delete-btn"><span class="material-symbols-rounded">delete</span></button>`;
    row.querySelector('.modal-delete-btn').addEventListener('click', () => {
        row.style.opacity = '0'; setTimeout(() => row.remove(), 200);
    });
    body.insertBefore(row, hint);
    row.querySelector('.edit-name').focus();
}

function saveEditModal() {
    const body = $('#edit-modal-body');
    if (!body || !currentEditMode) return;
    const items = [];
    body.querySelectorAll('.modal-item-row').forEach(row => {
        const name = row.querySelector('.edit-name')?.value.trim();
        const url = row.querySelector('.edit-url')?.value.trim();
        const icon = row.querySelector('.edit-icon')?.value.trim() || 'link';
        if (name && url) items.push({ name, url, icon });
    });
    if (currentEditMode === 'shortcuts') { state.shortcuts = items; renderShortcuts(); }
    else if (currentEditMode === 'aiTools') { state.aiTools = items; renderAiTools(); }
    else if (currentEditMode === 'socialLinks') { state.socialLinks = items; renderSocialDock(); }
    else if (currentEditMode === 'searchEngines') {
        const nextItems = items.length ? items : clone(DEFAULT_SEARCH_ENGINES);
        state.searchEngines = nextItems.map(item => ({
            id: item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
            name: item.name,
            url: item.url,
            icon: item.icon || 'search',
            label: item.name.trim().charAt(0).toUpperCase() || 'S'
        }));
        if (!hasSearchEngine(state.engine)) state.engine = state.searchEngines[0]?.id || 'google';
        renderSearchEngines();
    }
    saveState();
    closeEditModal();
}

// ═══════════════════════════════════════
// BACKUP & RESTORE
// ═══════════════════════════════════════
function backupSettings() {
    const json = JSON.stringify(state, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `omspace-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Your backup JSON has been downloaded.', 'success', 'Export ready');
}

function restoreSettings() {
    $('#restore-file')?.click();
}

function handleRestore(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
        try {
            const imported = JSON.parse(ev.target.result);
            const mode = $('#restore-mode-select')?.value || 'all';
            if (mode === 'all') {
                state = normalizeStateShape(imported);
            } else {
                const nextState = normalizeStateShape(state);
                const appearanceKeys = ['accent', 'theme', 'font', 'bgMode', 'bgUrl', 'liveWallpaper', 'particles', 'customGreeting', 'customQuoteEnabled', 'customQuoteText', 'customQuoteAuthor'];
                const contentKeys = ['todos', 'quickNote', 'focusGoal', 'focusDate', 'habits', 'worldClocks', 'readingList', 'shortcuts', 'aiTools', 'socialLinks', 'agendaItems', 'customWidgets', 'pomoHistory', 'pomoSessions', 'pomoSessionDate'];
                const layoutKeys = ['layout', 'freeLayout', 'layoutLocked', 'showClock', 'showWeather', 'showPomodoro', 'showFocus', 'showQuote', 'showShortcuts', 'showBottomWidgets', 'showAi', 'showGapps', 'showTodo', 'showNotes', 'showHabits', 'showWorldclock', 'showReading', 'showBookmarks', 'showSocialDock', 'showAgenda', 'showTopSites', 'showTabGroups', 'showCustomWidgets', 'showAiActions', 'showPomoStats'];
                const keys = mode === 'appearance' ? appearanceKeys : mode === 'content' ? contentKeys : layoutKeys;
                keys.forEach(key => {
                    if (imported[key] !== undefined) nextState[key] = imported[key];
                });
                state = normalizeStateShape(nextState);
            }
            ensureProfileStates();
            saveState();
            renderAll();
            if (state.showWeather && !state.weatherCache) fetchWeather();
            showToast('Backup imported successfully.', 'success', 'Import complete');
        } catch {
            showToast('That file could not be read as a valid OmSpace backup.', 'error', 'Import failed');
        }
    };
    reader.readAsText(file);
}

// ═══════════════════════════════════════
// KEYBOARD SHORTCUTS OVERLAY
// ═══════════════════════════════════════
function toggleKBOverlay() {
    const overlay = $('#kb-overlay');
    if (overlay) overlay.classList.toggle('visible');
}

// ═══════════════════════════════════════
// SETTINGS UI SYNC
// ═══════════════════════════════════════
function syncSettingsUI() {
    renderLanguageOptions();
    $$('.accent-dot').forEach(d => d.classList.toggle('active', d.dataset.color === state.accent));
    $$('.bg-preset-btn').forEach(b => b.classList.toggle('active', b.dataset.bg === state.bgMode));
    $$('.font-chip').forEach(f => f.classList.toggle('active', f.dataset.font === state.font));

    const bgInput = $('#bg-url-input');
    if (bgInput) bgInput.value = state.bgUrl || '';

    setChk('#toggle-clock', state.showClock);
    setChk('#toggle-weather', state.showWeather);
    setChk('#toggle-pomodoro', state.showPomodoro);
    setChk('#toggle-focus', state.showFocus);
    setChk('#toggle-quote', state.showQuote);
    setChk('#toggle-shortcuts', state.showShortcuts);
    setChk('#toggle-ai', state.showAi);
    setChk('#toggle-gapps', state.showGapps);
    setChk('#toggle-todo', state.showTodo);
    setChk('#toggle-notes', state.showNotes);
    setChk('#toggle-habits', state.showHabits);
    setChk('#toggle-worldclock', state.showWorldclock);
    setChk('#toggle-reading', state.showReading);
    setChk('#toggle-bookmarks', state.showBookmarks);
    setChk('#toggle-bottomwidgets', state.showBottomWidgets);
    setChk('#toggle-socialdock', state.showSocialDock);
    setChk('#toggle-agenda', state.showAgenda);
    setChk('#toggle-topsites', state.showTopSites);
    setChk('#toggle-tabgroups', state.showTabGroups);
    setChk('#toggle-customwidgets', state.showCustomWidgets);
    setChk('#toggle-aiactions', state.showAiActions);
    setChk('#toggle-pomostats', state.showPomoStats);
    setChk('#toggle-livewp', state.liveWallpaper);
    setChk('#toggle-particles', state.particles);
    setChk('#toggle-24h', state.use24Hour);
    setChk('#toggle-locklayout', state.layoutLocked);
    setChk('#toggle-performance', state.performanceMode);
    setChk('#toggle-sync', state.syncEnabled);
    setChk('#toggle-zen', state.zenMode);
    setChk('#toggle-weather-unit', state.weatherUnit === 'f');
    setChk('#toggle-custom-quote', state.customQuoteEnabled);

    const nameInput = $('#user-name-input');
    if (nameInput) nameInput.value = state.userName || '';
    const greetingInput = $('#greeting-input');
    if (greetingInput) greetingInput.value = state.customGreeting || '';
    const quoteInput = $('#custom-quote-input');
    if (quoteInput) quoteInput.value = state.customQuoteText || '';
    const quoteAuthorInput = $('#custom-quote-author-input');
    if (quoteAuthorInput) quoteAuthorInput.value = state.customQuoteAuthor || '';
    const providerSelect = $('#ai-provider-select');
    if (providerSelect) providerSelect.value = state.aiProvider || 'chatgpt';
    const languageSelect = $('#ui-language-select');
    if (languageSelect) languageSelect.value = getUiLanguage();
    const restoreModeSelect = $('#restore-mode-select');
    if (restoreModeSelect) restoreModeSelect.value = state.restoreMode || 'all';
    const shortcutSearch = $('#shortcut-search-input');
    const shortcutHelp = $('#shortcut-help-input');
    const shortcutTheme = $('#shortcut-theme-input');
    const shortcutPomo = $('#shortcut-pomo-input');
    const shortcutSettings = $('#shortcut-settings-input');
    if (shortcutSearch) shortcutSearch.value = state.shortcutsConfig.search || '/';
    if (shortcutHelp) shortcutHelp.value = state.shortcutsConfig.help || '?';
    if (shortcutTheme) shortcutTheme.value = (state.shortcutsConfig.theme || 't').toUpperCase();
    if (shortcutPomo) shortcutPomo.value = (state.shortcutsConfig.pomo || 'p').toUpperCase();
    if (shortcutSettings) shortcutSettings.value = (state.shortcutsConfig.settings || 's').toUpperCase();
    $('#note-preview-toggle')?.classList.toggle('active', !!state.notePreview);

    updateEngineUI();

    $('#bm-list-view')?.classList.toggle('active', state.bookmarkView === 'list');
    $('#bm-grid-view')?.classList.toggle('active', state.bookmarkView === 'grid');
    $('#bm-recent-view')?.classList.toggle('active', state.bookmarkSource === 'recent');
    $('#bm-folders-view')?.classList.toggle('active', state.bookmarkSource === 'folders');
    renderProfileBar();
    setSettingsTab(activeSettingsTab);
}

function setChk(sel, val) { const el = $(sel); if (el) el.checked = !!val; }

// ═══════════════════════════════════════
// ALL EVENT LISTENERS
// ═══════════════════════════════════════
function setupAllEvents() {
    // Search
    $('#search-input')?.addEventListener('keydown', e => { if (e.key === 'Enter') performSearch(); });
    $('#engine-strip')?.addEventListener('click', e => {
        const btn = e.target.closest('.engine-chip');
        if (!btn) return;
        setEngine(btn.dataset.engine);
    });
    $('#edit-engines-btn')?.addEventListener('click', () => openEditModal('searchEngines'));
    $('#search-engines-manage-btn')?.addEventListener('click', () => openEditModal('searchEngines'));
    $$('.profile-chip').forEach(btn => btn.addEventListener('click', () => switchProfile(btn.dataset.profile)));
    $('#zen-toggle-btn')?.addEventListener('click', () => {
        state.zenMode = !state.zenMode;
        saveState();
        applyZenMode();
        syncSettingsUI();
    });

    // Theme toggle
    $('#theme-toggle-fab')?.addEventListener('click', toggleTheme);

    // Clock style toggle
    $('#clock-style-toggle')?.addEventListener('click', () => {
        state.clockStyle = state.clockStyle === 'digital' ? 'analog' : 'digital';
        saveState();
        applyClockStyle();
    });

    // Settings
    $('#settings-fab')?.addEventListener('click', () => openSettingsPanel());
    $('#settings-close')?.addEventListener('click', closeSettings);
    $('#settings-backdrop')?.addEventListener('click', closeSettings);
    $$('.settings-tab-btn').forEach(btn => btn.addEventListener('click', () => setSettingsTab(btn.dataset.settingsTabBtn, { resetScroll: true })));

    // Accent
    $$('.accent-dot').forEach(d => d.addEventListener('click', () => {
        state.accent = d.dataset.color; saveState(); applyAccent(); syncSettingsUI();
    }));

    // Font
    $$('.font-chip').forEach(f => f.addEventListener('click', () => {
        state.font = f.dataset.font; saveState(); applyFont(); syncSettingsUI();
    }));

    // BG presets
    $$('.bg-preset-btn').forEach(b => b.addEventListener('click', () => {
        state.bgMode = b.dataset.bg; state.bgUrl = ''; state.liveWallpaper = false;
        saveState(); applyBackground(); syncSettingsUI();
    }));

    // Custom BG URL
    $('#bg-url-input')?.addEventListener('change', e => {
        const url = e.target.value.trim();
        if (url) { state.bgMode = 'custom'; state.bgUrl = url; state.liveWallpaper = false; }
        else { state.bgMode = 'gradient'; state.bgUrl = ''; }
        saveState(); applyBackground(); syncSettingsUI();
    });
    $('#bg-upload-btn')?.addEventListener('click', () => $('#bg-file-input')?.click());
    $('#bg-file-input')?.addEventListener('change', handleBackgroundUpload);
    $('#bg-clear-btn')?.addEventListener('click', () => {
        state.bgMode = 'gradient';
        state.bgUrl = '';
        saveState();
        applyBackground();
        syncSettingsUI();
    });

    // Live wallpaper toggle
    bindToggle('#toggle-livewp', 'liveWallpaper', () => { applyBackground(); syncSettingsUI(); });

    // Particles toggle
    bindToggle('#toggle-particles', 'particles', () => applyParticles());
    bindToggle('#toggle-performance', 'performanceMode', () => {
        applyPerformanceMode();
        applyParticles();
        applyBackground();
        if (state.showWeather) fetchWeather();
        renderQuote();
        if (state.showBottomWidgets) initBottomWidgets();
    });
    bindToggle('#toggle-sync', 'syncEnabled', () => {
        void syncCoreState();
    });
    bindToggle('#toggle-zen', 'zenMode', () => {
        applyZenMode();
    });
    $('#toggle-weather-unit')?.addEventListener('change', e => {
        state.weatherUnit = e.target.checked ? 'f' : 'c';
        saveState();
        if (state.showWeather) fetchWeather(true);
    });
    $('#weather-refresh-btn')?.addEventListener('click', () => fetchWeather(true));
    $('#ui-language-select')?.addEventListener('change', e => {
        state.uiLanguage = matchSupportedUiLanguage(e.target.value) || detectPreferredUiLanguage();
        saveState();
        renderAll();
        if (state.showWeather) fetchWeather(true);
    });

    // 24 Hour Time
    bindToggle('#toggle-24h', 'use24Hour', updateClock);

    // Layout Lock
    bindToggle('#toggle-locklayout', 'layoutLocked', () => { initDragAndDrop(); renderSocialDock(); });

    // Widget toggles — ALL
    bindToggle('#toggle-clock', 'showClock');
    bindToggle('#toggle-weather', 'showWeather', () => {
        if (state.showWeather) fetchWeather();
    });
    bindToggle('#toggle-pomodoro', 'showPomodoro');
    bindToggle('#toggle-focus', 'showFocus');
    bindToggle('#toggle-quote', 'showQuote');
    bindToggle('#toggle-shortcuts', 'showShortcuts');
    bindToggle('#toggle-ai', 'showAi');
    bindToggle('#toggle-gapps', 'showGapps');
    bindToggle('#toggle-todo', 'showTodo');
    bindToggle('#toggle-notes', 'showNotes');
    bindToggle('#toggle-habits', 'showHabits');
    bindToggle('#toggle-worldclock', 'showWorldclock');
    bindToggle('#toggle-reading', 'showReading');
    bindToggle('#toggle-bookmarks', 'showBookmarks');
    bindToggle('#toggle-bottomwidgets', 'showBottomWidgets', () => {
        if (state.showBottomWidgets) initBottomWidgets();
    });
    bindToggle('#toggle-socialdock', 'showSocialDock');
    bindToggle('#toggle-agenda', 'showAgenda');
    bindToggle('#toggle-topsites', 'showTopSites');
    bindToggle('#toggle-tabgroups', 'showTabGroups');
    bindToggle('#toggle-customwidgets', 'showCustomWidgets');
    bindToggle('#toggle-aiactions', 'showAiActions');
    bindToggle('#toggle-pomostats', 'showPomoStats');

    // User name
    $('#user-name-input')?.addEventListener('change', e => {
        state.userName = e.target.value.trim(); saveState(); updateClock();
    });
    $('#greeting-input')?.addEventListener('change', e => {
        state.customGreeting = e.target.value.trim();
        saveState();
        updateClock();
    });
    $('#toggle-custom-quote')?.addEventListener('change', e => {
        state.customQuoteEnabled = e.target.checked;
        saveState();
        renderQuote();
    });
    $('#custom-quote-input')?.addEventListener('change', e => {
        state.customQuoteText = e.target.value;
        saveState();
        renderQuote();
    });
    $('#custom-quote-author-input')?.addEventListener('change', e => {
        state.customQuoteAuthor = e.target.value.trim();
        saveState();
        renderQuote();
    });
    $('#ai-provider-select')?.addEventListener('change', e => {
        state.aiProvider = e.target.value;
        saveState();
    });
    $('#restore-mode-select')?.addEventListener('change', e => {
        state.restoreMode = e.target.value;
        saveState();
    });
    [
        ['#shortcut-search-input', 'search'],
        ['#shortcut-help-input', 'help'],
        ['#shortcut-theme-input', 'theme'],
        ['#shortcut-pomo-input', 'pomo'],
        ['#shortcut-settings-input', 'settings']
    ].forEach(([selector, key]) => {
        $(selector)?.addEventListener('change', e => {
            const value = (e.target.value || '').trim().slice(0, 1) || DEFAULT_STATE.shortcutsConfig[key];
            state.shortcutsConfig[key] = value.toLowerCase();
            saveState();
            syncSettingsUI();
            renderKeyboardShortcutUI();
        });
    });

    // Reset
    const resetBtn = document.getElementById('reset-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            $('#confirm-modal')?.classList.add('open');
            $('#confirm-modal-backdrop')?.classList.add('visible');
        });
    }

    const closeConfirmModal = () => {
        $('#confirm-modal')?.classList.remove('open');
        $('#confirm-modal-backdrop')?.classList.remove('visible');
    };

    $('#confirm-modal-cancel')?.addEventListener('click', closeConfirmModal);
    $('#confirm-modal-backdrop')?.addEventListener('click', closeConfirmModal);

    $('#confirm-modal-yes')?.addEventListener('click', () => {
        try {
            localStorage.clear();
        } catch(err) {
            localStorage.removeItem(STORAGE_KEY);
            localStorage.removeItem('omspace_collapse');
        }
        window.location.reload();
    });

    // Backup / Restore
    $('#backup-btn')?.addEventListener('click', backupSettings);
    $('#restore-btn')?.addEventListener('click', restoreSettings);
    $('#restore-file')?.addEventListener('change', handleRestore);

    // Todo
    $('#todo-add-btn')?.addEventListener('click', addTodo);
    $('#todo-input')?.addEventListener('keydown', e => { if (e.key === 'Enter') addTodo(); });
    $('#todo-list')?.addEventListener('click', e => {
        const t = e.target.closest('[data-action]');
        if (!t) return;
        const id = t.dataset.id;
        if (t.dataset.action === 'toggle') { const todo = state.todos.find(x => x.id === id); if (todo) { todo.completed = !todo.completed; saveState(); renderTodos(); } }
        else if (t.dataset.action === 'pin') { const todo = state.todos.find(x => x.id === id); if (todo) { todo.pinned = !todo.pinned; saveState(); renderTodos(); } }
        else if (t.dataset.action === 'delete') { state.todos = state.todos.filter(x => x.id !== id); saveState(); renderTodos(); }
    });
    $('#todo-list')?.addEventListener('dragstart', e => {
        const item = e.target.closest('.todo-item');
        if (!item) return;
        draggedTodoId = item.dataset.id;
        item.classList.add('dragging');
    });
    $('#todo-list')?.addEventListener('dragend', e => {
        e.target.closest('.todo-item')?.classList.remove('dragging');
        draggedTodoId = null;
    });
    $('#todo-list')?.addEventListener('dragover', e => {
        if (e.target.closest('.todo-item')) e.preventDefault();
    });
    $('#todo-list')?.addEventListener('drop', e => {
        const target = e.target.closest('.todo-item');
        if (!target || !draggedTodoId) return;
        e.preventDefault();
        reorderTodo(draggedTodoId, target.dataset.id);
    });

    // Quick Note
    let noteTimer;
    $('#quick-note')?.addEventListener('input', () => { clearTimeout(noteTimer); noteTimer = setTimeout(saveQuickNote, 500); });
    $('#note-preview-toggle')?.addEventListener('click', () => {
        state.notePreview = !state.notePreview;
        saveState();
        const area = $('#quick-note');
        const preview = $('#quick-note-preview');
        if (area && preview) {
            area.style.display = state.notePreview ? 'none' : 'block';
            preview.style.display = state.notePreview ? 'block' : 'none';
        }
        syncSettingsUI();
    });
    $('#quick-note-preview')?.addEventListener('click', e => {
        const item = e.target.closest('.note-check-item');
        if (!item) return;
        toggleQuickNoteChecklist(Number(item.dataset.line));
    });

    // Focus
    $('#focus-input')?.addEventListener('keydown', e => { if (e.key === 'Enter') setFocus(); });
    $('#focus-clear')?.addEventListener('click', clearFocus);

    // Pomodoro
    $('#pomo-start')?.addEventListener('click', togglePomo);
    $('#pomo-reset')?.addEventListener('click', resetPomo);
    $('#pomo-skip')?.addEventListener('click', skipPomo);

    // Habits
    $('#add-habit-btn')?.addEventListener('click', () => openCreateModal('habit'));
    $('#habit-list')?.addEventListener('click', e => {
        const chk = e.target.closest('.habit-check');
        if (chk) { toggleHabit(parseInt(chk.dataset.hidx)); return; }
        const del = e.target.closest('.habit-delete');
        if (del) { deleteHabit(parseInt(del.dataset.hidx)); }
    });

    // World Clock
    $('#add-tz-btn')?.addEventListener('click', () => openCreateModal('worldClock'));
    $('#worldclock-list')?.addEventListener('click', e => {
        const del = e.target.closest('.wc-delete');
        if (del) deleteWorldClock(parseInt(del.dataset.wcidx));
    });

    // Reading List
    $('#reading-add-btn')?.addEventListener('click', addReading);
    $('#reading-input')?.addEventListener('keydown', e => { if (e.key === 'Enter') addReading(); });

    // Agenda
    $('#event-add-btn')?.addEventListener('click', addAgendaItem);
    $('#event-title-input')?.addEventListener('keydown', e => { if (e.key === 'Enter') addAgendaItem(); });
    $('#agenda-list')?.addEventListener('click', e => {
        const target = e.target.closest('[data-action="delete-event"]');
        if (target) deleteAgendaItem(target.dataset.id);
    });
    $('#open-google-calendar')?.addEventListener('click', e => {
        e.stopPropagation();
        window.open('https://calendar.google.com', '_blank');
    });

    // Bookmarks view
    $('#bm-list-view')?.addEventListener('click', () => { state.bookmarkView = 'list'; saveState(); renderBookmarks(); syncSettingsUI(); });
    $('#bm-grid-view')?.addEventListener('click', () => { state.bookmarkView = 'grid'; saveState(); renderBookmarks(); syncSettingsUI(); });
    $('#bm-recent-view')?.addEventListener('click', () => { state.bookmarkSource = 'recent'; saveState(); renderBookmarks(); syncSettingsUI(); });
    $('#bm-folders-view')?.addEventListener('click', () => { state.bookmarkSource = 'folders'; saveState(); renderBookmarks(); syncSettingsUI(); });

    // Custom widgets, tab groups, quick actions
    $('#add-custom-widget-btn')?.addEventListener('click', () => openCreateModal('customWidget'));
    $('#custom-widgets-list')?.addEventListener('click', e => {
        const target = e.target.closest('[data-action="delete-widget"]');
        if (target) deleteCustomWidget(target.dataset.id);
    });
    $('#quick-actions-grid')?.addEventListener('click', e => {
        const button = e.target.closest('.quick-action-btn');
        if (!button) return;
        runQuickAction(button.dataset.actionId, button);
    });
    $('#tab-groups-list')?.addEventListener('click', e => {
        const target = e.target.closest('[data-action="focus-group"]');
        if (target) focusTabGroup(target.dataset.groupId);
    });

    // Edit modals
    $('#edit-shortcuts-btn')?.addEventListener('click', () => openEditModal('shortcuts'));
    $('#edit-ai-btn')?.addEventListener('click', () => openEditModal('aiTools'));
    $('#edit-modal-close')?.addEventListener('click', closeEditModal);
    $('#edit-modal-backdrop')?.addEventListener('click', closeEditModal);
    $('#edit-modal-add')?.addEventListener('click', addEditItem);
    $('#edit-modal-save')?.addEventListener('click', saveEditModal);
    $('#create-modal-close')?.addEventListener('click', closeCreateModal);
    $('#create-modal-cancel')?.addEventListener('click', closeCreateModal);
    $('#create-modal-backdrop')?.addEventListener('click', closeCreateModal);
    $('#create-modal-form')?.addEventListener('submit', e => {
        e.preventDefault();
        submitCreateModal();
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', e => {
        const tag = document.activeElement?.tagName;
        if (tag === 'INPUT' || tag === 'TEXTAREA') {
            if (e.key === 'Escape') { document.activeElement.blur(); closeSettings(); closeEditModal(); closeCreateModal(); toggleKBOverlayOff(); }
            return;
        }
        const key = e.key.toLowerCase();
        if (key === (state.shortcutsConfig.search || '/')) { e.preventDefault(); $('#search-input')?.focus(); }
        else if (e.key === 'Escape') { closeSettings(); closeEditModal(); closeCreateModal(); toggleKBOverlayOff(); }
        else if (key === (state.shortcutsConfig.help || '?')) toggleKBOverlay();
        else if (key === (state.shortcutsConfig.theme || 't')) toggleTheme();
        else if (key === (state.shortcutsConfig.pomo || 'p')) togglePomo();
        else if (key === (state.shortcutsConfig.settings || 's')) openSettingsPanel();
    });
}

function bindToggle(sel, key, extraFn) {
    $(sel)?.addEventListener('change', e => {
        state[key] = e.target.checked;
        saveState();
        applyVisibility();
        if (extraFn) extraFn();
    });
}

function closeSettings() {
    $('#settings-panel')?.classList.remove('open');
    $('#settings-backdrop')?.classList.remove('visible');
}

function toggleKBOverlayOff() {
    $('#kb-overlay')?.classList.remove('visible');
}

// ═══════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════
function esc(str) {
    if (!str) return '';
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
}

function uid() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

function getDomain(url) {
    try { return new URL(url).hostname; } catch { return ''; }
}

function normalizeExternalUrl(value) {
    const raw = value.trim();
    if (!raw) return '';
    if (/^https?:\/\//i.test(raw)) return raw;
    return `https://${raw}`;
}

function formatDateLabel(value) {
    try {
        return new Date(value).toLocaleDateString(getUiLocales(), { month: 'short', day: 'numeric' });
    } catch {
        return value;
    }
}

function formatDateTimeLabel(value) {
    try {
        return new Date(value).toLocaleString(getUiLocales(), {
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: !state.use24Hour
        });
    } catch {
        return value;
    }
}

function handleBackgroundUpload(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 1.5 * 1024 * 1024) {
        showToast('Please choose an image smaller than 1.5 MB for local wallpaper.', 'error', 'Image too large');
        e.target.value = '';
        return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
        const result = event.target?.result;
        if (typeof result !== 'string') return;
        state.bgMode = 'custom';
        state.bgUrl = result;
        state.liveWallpaper = false;
        saveState();
        applyBackground();
        syncSettingsUI();
        e.target.value = '';
        showToast('Local wallpaper updated.', 'success', 'Background saved');
    };
    reader.readAsDataURL(file);
}

// ═══════════════════════════════════════
// COLLAPSIBLE SECTIONS
// ═══════════════════════════════════════
function initCollapsibles() {
    const collapseState = JSON.parse(localStorage.getItem('omspace_collapse') || '{}');

    $$('.collapsible-header').forEach(header => {
        const targetId = header.getAttribute('data-collapse');
        const body = document.getElementById(targetId);
        if (!body) return;

        // Restore state (default: expanded)
        const isCollapsed = collapseState[targetId] === true;
        if (!isCollapsed) {
            body.classList.add('expanded');
            header.classList.add('expanded');
        }

        header.addEventListener('click', (e) => {
            // Don't collapse when clicking buttons inside header
            if (e.target.closest('.edit-section-btn') || e.target.closest('.icon-btn-ghost') || e.target.closest('.view-btn')) return;

            const isExpanded = body.classList.contains('expanded');
            body.classList.toggle('expanded');
            header.classList.toggle('expanded');

            // Save state
            const cs = JSON.parse(localStorage.getItem('omspace_collapse') || '{}');
            cs[targetId] = isExpanded; // if was expanded, now collapsed = true
            localStorage.setItem('omspace_collapse', JSON.stringify(cs));
        });
    });
}

// ═══════════════════════════════════════
// SMOOTH SCROLL (Premium lerp-based)
// ═══════════════════════════════════════
function initSmoothScroll() {
    let targetScroll = window.scrollY;
    let currentScroll = window.scrollY;
    let rafId = null;
    const ease = 0.08; //  lower = smoother/slower, higher = snappier
    const nativeScrollSelector = [
        '.col-left',
        '.col-center',
        '.col-right',
        '#settings-panel',
        '.settings-body',
        '.edit-modal',
        '.edit-modal-body',
        '#kb-overlay',
        '.todo-list',
        '.reading-list',
        '.bookmarks-list',
        '.habit-list',
        '.worldclock-list',
        '.quick-note-preview',
        '.ai-tools-grid',
        '.gapps-grid',
        '.custom-widgets-list',
        '.quick-actions-grid'
    ].join(',');

    function smoothStep() {
        if (state.performanceMode) {
            targetScroll = window.scrollY;
            currentScroll = window.scrollY;
            rafId = null;
            return;
        }
        currentScroll += (targetScroll - currentScroll) * ease;

        // Stop when close enough
        if (Math.abs(targetScroll - currentScroll) < 0.5) {
            currentScroll = targetScroll;
            window.scrollTo(0, currentScroll);
            rafId = null;
            return;
        }

        window.scrollTo(0, currentScroll);
        rafId = requestAnimationFrame(smoothStep);
    }

    window.addEventListener('wheel', (e) => {
        if (state.performanceMode) return;
        const path = typeof e.composedPath === 'function' ? e.composedPath() : [];
        if (path.some(el => el instanceof Element && (el.matches?.(nativeScrollSelector) || el.closest?.(nativeScrollSelector)))) {
            return;
        }
        // Skip if inside scrollable inner elements
        for (const el of path) {
            if (el === document || el === window) break;
            if (el.scrollHeight > el.clientHeight && el !== document.documentElement && el !== document.body) {
                const style = getComputedStyle(el);
                if (/auto|scroll|overlay/.test(style.overflowY)) {
                    // Check if scroll is actually needed (not at top/bottom)
                    const atTop = el.scrollTop === 0 && e.deltaY < 0;
                    const atBot = el.scrollTop + el.clientHeight >= el.scrollHeight - 1 && e.deltaY > 0;
                    if (!atTop && !atBot) return;
                }
            }
        }

        e.preventDefault();

        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        targetScroll = Math.max(0, Math.min(targetScroll + e.deltaY * 1.2, maxScroll));

        if (!rafId) {
            rafId = requestAnimationFrame(smoothStep);
        }
    }, { passive: false });

    // Sync on manual/programmatic scroll
    window.addEventListener('scroll', () => {
        if (!rafId) {
            targetScroll = window.scrollY;
            currentScroll = window.scrollY;
        }
    });
}

// ═══════════════════════════════════════
// PREMIUM BOTTOM WIDGETS
// ═══════════════════════════════════════
const TECH_FACTS = [
    "The first computer mouse was made of wood in 1964.",
    "Over 70% of the world's currency exists only digitally.",
    "The first hard drive in 1956 could store only 5MB of data.",
    "The word 'robot' comes from a Czech word meaning 'forced labor'.",
    "A single Google query uses 1,000 computers in 0.2 seconds.",
    "Email actually predates the World Wide Web.",
    "There are around 700 programming languages in the world.",
    "Amazon was originally going to be called Cadabra.",
    "The first domain name ever registered was Symbolics.com."
];

function initBottomWidgets() {
    if (!state.showBottomWidgets) return;
    const factText = $('#tech-fact-text');
    if (factText) {
        factText.textContent = TECH_FACTS[Math.floor(Math.random() * TECH_FACTS.length)];
    }

    if (state.performanceMode) return;

    // Fetch Live Crypto & Currency Rates
    async function fetchLiveMarket() {
        try {
            const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,inr');
            if (!res.ok) return;
            const data = await res.json();
            const btcUsd = data.bitcoin.usd;
            const btcInr = data.bitcoin.inr;
            
            const btcEl = $('#btc-usd-val');
            const inrEl = $('#usd-inr-val');
            
            if (btcEl && btcUsd) btcEl.textContent = '$' + (btcUsd / 1000).toFixed(1) + 'k';
            if (inrEl && btcInr && btcUsd) {
                const usdToInr = (btcInr / btcUsd).toFixed(1);
                inrEl.textContent = '₹' + usdToInr;
            }
        } catch (e) {
            console.log('Using fallback market data.');
        }
    }
    fetchLiveMarket();
}

// ═══════════════════════════════════════
// DRAG & DROP LAYOUT (Vanilla JS)
// ═══════════════════════════════════════
let isDragging = false;
let currentCard = null;
let startX = 0, startY = 0;
let initialLeft = 0, initialTop = 0;
let zIndexCounter = 100;

function loadLayout() {
    // 1. Load Free Placements (Absolute Positioning)
    if (state.freeLayout) {
        Object.keys(state.freeLayout).forEach(sel => {
            const el = document.getElementById(sel.slice(1)) || document.querySelector(sel);
            if (el) {
                const pos = state.freeLayout[sel];
                el.style.position = 'absolute';
                el.style.left = pos.left;
                el.style.top = pos.top;
                if (pos.width) el.style.width = pos.width;
                if (pos.height) el.style.height = pos.height;
                el.style.zIndex = pos.zIndex || 10;
                el.style.margin = '0'; // prevents alignment issues
                if (el.parentElement !== document.body) {
                    document.body.appendChild(el);
                }
            }
        });
    }

    // 2. Load Regular Column Layout (for items not moved freely)
    if (!state.layout) return;
    ['colLeft', 'colCenter', 'colRight'].forEach(colName => {
        const colClass = '.col-' + colName.replace('col', '').toLowerCase();
        const colEl = $(colClass);
        if (!colEl || !state.layout[colName]) return;
        state.layout[colName].forEach(selector => {
            let el;
            if (selector.startsWith('#')) el = document.getElementById(selector.slice(1));
            else if (selector.startsWith('.')) el = document.querySelector(selector);
            
            if (el && colEl && el.style.position !== 'absolute') {
                colEl.appendChild(el);
            }
        });
    });
}

function saveLayout() {
    // Save free placement absolute items
    const freeLayout = state.freeLayout || {};
    $$('.col-left > *, .col-center > *, .col-right > *, body > .glass-card, body > .quote-section, body > .search-section, body > .shortcuts-section, body > .pomo-inline-section, body > .bottom-widget, body > .bottom-widgets-section').forEach(el => {
        if (el.style.position === 'absolute' || el.style.width || el.style.height) {
            const id = el.id ? '#' + el.id : '.' + el.className.split(' ')[0];
            if (!freeLayout[id]) freeLayout[id] = {};
            if (el.style.position === 'absolute') {
                freeLayout[id].left = el.style.left;
                freeLayout[id].top = el.style.top;
                freeLayout[id].zIndex = el.style.zIndex;
            }
            if (el.style.width) freeLayout[id].width = el.style.width;
            if (el.style.height) freeLayout[id].height = el.style.height;
        }
    });
    state.freeLayout = freeLayout;

    // Save standard grid items
    const getIds = (col) => [...$(col).children]
        .map(c => c.id ? '#' + c.id : (c.className ? '.' + c.className.split(' ')[0] : ''))
        .filter(sel => sel && !sel.includes('dragging') && $(sel) && $(sel).style.position !== 'absolute');

    state.layout = {
        colLeft: getIds('.col-left'),
        colCenter: getIds('.col-center'),
        colRight: getIds('.col-right')
    };
    saveState();
}

function initDragAndDrop() {
    const cards = $$('.col-left > *, .col-center > *, .col-right > *, body > .glass-card, body > .quote-section, body > .shortcuts-section, body > .pomo-inline-section, body > .search-section, body > .bottom-widget, body > .bottom-widgets-section');

    cards.forEach(card => {
        if (!state.layoutLocked) card.classList.add('is-unlocked');
        else card.classList.remove('is-unlocked');

        card.removeAttribute('draggable'); // Remove HTML5 drag

        if (!card.dataset.freeDndInit) {
            card.dataset.freeDndInit = true;

            // Handle resizing natively
            new ResizeObserver(() => {
                if (state.layoutLocked) return;
                clearTimeout(card.resizeTimer);
                card.resizeTimer = setTimeout(saveLayout, 500);
            }).observe(card);

            card.addEventListener('mousedown', function(e) {
                if (state.layoutLocked) return;
                
                // Ignore interactive elements
                if (e.target.closest('button, input, textarea, a, .edit-section-btn, .collapse-arrow, select')) return;
                
                // Ignore resize handle (bottom-right edge)
                const rect = card.getBoundingClientRect();
                if (e.clientX > rect.right - 20 && e.clientY > rect.bottom - 20) return;

                isDragging = true;
                currentCard = card;

                if (card.style.position !== 'absolute') {
                    // Convert to absolute
                    const rect = card.getBoundingClientRect();
                    card.style.position = 'absolute';
                    card.style.left = (rect.left + window.scrollX) + 'px';
                    card.style.top = (rect.top + window.scrollY) + 'px';
                    card.style.width = rect.width + 'px';
                    card.style.margin = '0';
                    document.body.appendChild(card);
                }

                card.style.zIndex = ++zIndexCounter;
                
                startX = e.clientX;
                startY = e.clientY;
                initialLeft = parseFloat(card.style.left) || 0;
                initialTop = parseFloat(card.style.top) || 0;
                
                card.classList.add('dragging');
            });
        }
    });

    if (!window.dndListenersAdded) {
        window.dndListenersAdded = true;
        document.addEventListener('mousemove', e => {
            if (!isDragging || !currentCard) return;
            e.preventDefault();
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            currentCard.style.left = (initialLeft + dx) + 'px';
            currentCard.style.top = (initialTop + dy) + 'px';
        }, { passive: false });

        document.addEventListener('mouseup', e => {
            if (isDragging && currentCard) {
                currentCard.classList.remove('dragging');
                isDragging = false;
                currentCard = null;
                saveLayout();
            }
        });
    }
}

// ═══════════════════════════════════════
// BOOT
// ═══════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
    void init().then(() => {
        if (!state.performanceMode) initSmoothScroll();
    });
});
