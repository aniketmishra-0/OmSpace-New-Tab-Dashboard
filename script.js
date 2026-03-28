/* ===================================================================
   OMSPACE — Complete Script — ALL Features Working
   =================================================================== */

const STORAGE_KEY = 'omspace_state';

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
    bgMode: 'gradient',
    bgUrl: '',
    liveWallpaper: false,
    particles: true,
    userName: '',
    engine: 'google',
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
    bookmarkView: 'list',
    todos: [],
    quickNote: '',
    focusGoal: '',
    focusDate: '',
    habits: [],
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

const ENGINES = {
    google: { url: 'https://www.google.com/search?q=', label: 'G' },
    youtube: { url: 'https://www.youtube.com/results?search_query=', label: 'Y' },
    duckduckgo: { url: 'https://duckduckgo.com/?q=', label: 'D' },
    bing: { url: 'https://www.bing.com/search?q=', label: 'B' }
};

const BG_PRESETS = {
    gradient: '',
    abstract: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
    nature: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2560&auto=format&fit=crop',
    dark: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2560&auto=format&fit=crop',
    space: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2560&auto=format&fit=crop',
    cyberpunk: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=2560&auto=format&fit=crop',
    minimal: 'https://images.unsplash.com/photo-1622737133809-d95047b9e673?q=80&w=2560&auto=format&fit=crop'
};

const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);


// ═══════════════════════════════════════
// INIT
// ═══════════════════════════════════════
function init() {
    loadState();
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
function loadState() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
            state = { ...JSON.parse(JSON.stringify(DEFAULT_STATE)), ...JSON.parse(raw) };
            if (!Array.isArray(state.shortcuts)) state.shortcuts = [...DEFAULT_STATE.shortcuts];
            if (!Array.isArray(state.aiTools)) state.aiTools = [...DEFAULT_STATE.aiTools];
            if (!Array.isArray(state.socialLinks)) state.socialLinks = [...DEFAULT_STATE.socialLinks];
            // Merge any new default social links the user doesn't have yet
            const existingUrls = new Set(state.socialLinks.map(l => l.url));
            DEFAULT_STATE.socialLinks.forEach(defLink => {
                if (!existingUrls.has(defLink.url)) state.socialLinks.push({ ...defLink });
            });
            if (!Array.isArray(state.todos)) state.todos = [];
            if (!Array.isArray(state.habits)) state.habits = [];
            if (!Array.isArray(state.worldClocks)) state.worldClocks = [...DEFAULT_STATE.worldClocks];
            if (!Array.isArray(state.readingList)) state.readingList = [];
            if (state.layoutLocked === undefined) state.layoutLocked = true;
        } else {
            state = JSON.parse(JSON.stringify(DEFAULT_STATE));
        }
    } catch (e) {
        state = JSON.parse(JSON.stringify(DEFAULT_STATE));
    }
}

function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

// ═══════════════════════════════════════
// RENDER ALL
// ═══════════════════════════════════════
function renderAll() {
    applyThemeMode();
    applyAccent();
    applyFont();
    applyBackground();
    applyVisibility();
    applyClockStyle();
    renderShortcuts();
    renderAiTools();
    renderTodos();
    renderBookmarks();
    renderHabits();
    renderWorldClocks();
    renderReadingList();
    renderFocus();
    renderQuote();
    syncSettingsUI();
    loadQuickNote();
    updatePomoDisplay();
    applyParticles();
    if (state.showBottomWidgets) initBottomWidgets();
    renderSocialDock();
    loadLayout();
    initDragAndDrop();
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
    if (state.liveWallpaper) {
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

    // Greeting
    let greetText = 'Good Evening';
    let emoji = '🌙';
    if (h < 12) { greetText = 'Good Morning'; emoji = '☕️'; }
    else if (h < 18) { greetText = 'Good Afternoon'; emoji = '☀️'; }
    
    let greet = state.userName ? `${greetText}, ${state.userName}! ${emoji}` : `${greetText}! ${emoji}`;

    // Digital
    const hDisplay = state.use24Hour ? (h < 10 ? '0' + h : h) : (h % 12 || 12);
    const mStr = m < 10 ? '0' + m : '' + m;
    const sStr = s < 10 ? '0' + s : '' + s;
    const ampm = state.use24Hour ? '' : (h >= 12 ? ' PM' : ' AM');

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
        dateEl.textContent = now.toLocaleDateString(undefined, {
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
function fetchWeather() {
    if (!navigator.geolocation) {
        updateEl('#weather-cond', 'No geolocation');
        updateEl('#weather-city', 'N/A');
        return;
    }
    navigator.geolocation.getCurrentPosition(pos => {
        const { latitude: lat, longitude: lon } = pos.coords;
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&temperature_unit=celsius`)
            .then(r => r.json())
            .then(data => {
                const c = data.current;
                if (!c) return;
                const temp = Math.round(c.temperature_2m);
                const feels = Math.round(c.apparent_temperature);
                const hum = c.relative_humidity_2m;
                const wind = Math.round(c.wind_speed_10m);
                const { text, icon } = decodeWeather(c.weather_code);
                updateEl('#weather-temp', `${temp}°C`);
                updateEl('#weather-feels', `${feels}°C`);
                updateEl('#weather-humidity', `${hum}%`);
                updateEl('#weather-wind', `${wind} km/h`);
                updateEl('#weather-cond', text);
                updateEl('#weather-icon-main', icon);
            })
            .catch(() => updateEl('#weather-cond', 'Unavailable'));

        fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&accept-language=en`)
            .then(r => r.json())
            .then(data => {
                const a = data.address || {};
                const city = a.city || a.town || a.village || a.state_district || a.state || 'Unknown';
                updateEl('#weather-city', `${city}, ${a.country || ''}`);
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
    updateEl('#pomo-sessions', state.pomoSessions.toString());
    updateEl('#pomo-mode-label', pomoIsWork ? 'Work' : 'Break');
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
                    saveState();
                    updateEl('#pomo-sessions', state.pomoSessions.toString());
                }
                pomoIsWork = !pomoIsWork;
                pomoTimeLeft = pomoIsWork ? 25 * 60 : 5 * 60;
                updateEl('#pomo-mode-label', pomoIsWork ? 'Work' : 'Break');
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
    const today = new Date().toDateString();
    const cachedDate = localStorage.getItem('omspace_quote_date');
    const cachedText = localStorage.getItem('omspace_quote_text');
    const cachedAuthor = localStorage.getItem('omspace_quote_author');

    if (cachedDate === today && cachedText && cachedAuthor && cachedText.length <= 85) {
        updateEl('#quote-text', `"${cachedText}"`);
        updateEl('#quote-author', `— ${cachedAuthor}`);
        return;
    }

    try {
        const res = await fetch('https://dummyjson.com/quotes/random?minlength=20&maxlength=85');
        if (!res.ok) throw new Error('Network error');
        const data = await res.json();
        
        localStorage.setItem('omspace_quote_date', today);
        localStorage.setItem('omspace_quote_text', data.quote);
        localStorage.setItem('omspace_quote_author', data.author);
        
        updateEl('#quote-text', `"${data.quote}"`);
        updateEl('#quote-author', `— ${data.author}`);
    } catch(err) {
        // Fallback to offline array if no internet
        const dayIndex = Math.floor(Date.now() / 86400000) % QUOTES.length;
        const q = QUOTES[dayIndex];
        updateEl('#quote-text', `"${q.text}"`);
        updateEl('#quote-author', `— ${q.author}`);
    }
}

// ═══════════════════════════════════════
// SEARCH
// ═══════════════════════════════════════
function performSearch() {
    const input = $('#search-input');
    const q = input?.value.trim();
    if (!q) return;
    window.location.href = ENGINES[state.engine].url + encodeURIComponent(q);
}

function setEngine(engine) {
    state.engine = engine;
    saveState();
    updateEngineUI();
}

function updateEngineUI() {
    $$('.engine-chip').forEach(b => b.classList.toggle('active', b.dataset.engine === state.engine));
    updateEl('#engine-label', ENGINES[state.engine].label);
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
        if (a.pinned !== b.pinned) return b.pinned ? 1 : -1;
        if (a.completed !== b.completed) return a.completed ? 1 : -1;
        return 0;
    });
    list.innerHTML = sorted.map(t => `
        <li class="todo-item ${t.completed ? 'completed' : ''} ${t.pinned ? 'pinned' : ''}" data-id="${t.id}">
            <div class="todo-checkbox" data-action="toggle" data-id="${t.id}"></div>
            <span class="todo-text">${esc(t.text)}</span>
            <button class="todo-pin" data-action="pin" data-id="${t.id}"><span class="material-symbols-rounded">push_pin</span></button>
            <button class="todo-delete" data-action="delete" data-id="${t.id}"><span class="material-symbols-rounded">close</span></button>
        </li>`).join('');
    updateEl('#todo-count', state.todos.filter(t => !t.completed).length.toString());
}

function addTodo() {
    const input = $('#todo-input');
    const text = input?.value.trim();
    if (!text) return;
    state.todos.push({ id: uid(), text, completed: false, pinned: false });
    input.value = '';
    saveState();
    renderTodos();
}

// ═══════════════════════════════════════
// QUICK NOTES
// ═══════════════════════════════════════
function loadQuickNote() {
    const area = $('#quick-note');
    if (area) area.value = state.quickNote || '';
}

function saveQuickNote() {
    const area = $('#quick-note');
    if (area) { state.quickNote = area.value; saveState(); }
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
        return `
        <div class="habit-item" data-idx="${i}">
            <span class="habit-name">${esc(h.name)}</span>
            <span class="habit-streak">🔥 ${h.streak || 0}</span>
            <div class="habit-check ${doneToday ? 'done' : ''}" data-hidx="${i}"></div>
            <button class="habit-delete" data-hidx="${i}"><span class="material-symbols-rounded">close</span></button>
        </div>`;
    }).join('');
}

function addHabit() {
    const name = prompt('Enter habit name:');
    if (!name || !name.trim()) return;
    state.habits.push({ name: name.trim(), streak: 0, lastDone: '' });
    saveState();
    renderHabits();
}

function toggleHabit(idx) {
    const h = state.habits[idx];
    if (!h) return;
    const today = new Date().toDateString();
    if (h.lastDone === today) {
        h.streak = Math.max(0, (h.streak || 0) - 1);
        h.lastDone = '';
    } else {
        h.streak = (h.streak || 0) + 1;
        h.lastDone = today;
    }
    saveState();
    renderHabits();
}

function deleteHabit(idx) {
    state.habits.splice(idx, 1);
    saveState();
    renderHabits();
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
            const time = new Date().toLocaleTimeString('en-US', {
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

function addWorldClock() {
    const city = prompt('City name (e.g. Dubai):');
    if (!city) return;
    const tz = prompt('Timezone (e.g. Asia/Dubai, America/New_York, Europe/Paris):');
    if (!tz) return;
    state.worldClocks.push({ city: city.trim(), tz: tz.trim() });
    saveState();
    renderWorldClocks();
}

function deleteWorldClock(idx) {
    state.worldClocks.splice(idx, 1);
    saveState();
    renderWorldClocks();
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
// BOOKMARKS
// ═══════════════════════════════════════
function renderBookmarks() {
    const container = $('#bookmarks-list');
    if (!container) return;
    container.classList.toggle('grid-view', state.bookmarkView === 'grid');
    if (typeof chrome !== 'undefined' && chrome.bookmarks) {
        chrome.bookmarks.getRecent(20, r => renderBookmarkItems(container, r));
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

function renderBookmarkItems(container, items) {
    container.innerHTML = items.map(bm => {
        const url = bm.url || '#';
        const title = bm.title || url;
        const domain = getDomain(url);
        return `<a href="${url}" class="bookmark-item" title="${esc(title)}">
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
    if (state.particles) {
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
        if (!state.particles) {
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
            state = { ...JSON.parse(JSON.stringify(DEFAULT_STATE)), ...imported };
            saveState();
            renderAll();
            alert('Settings restored successfully!');
        } catch {
            alert('Invalid backup file.');
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
    setChk('#toggle-livewp', state.liveWallpaper);
    setChk('#toggle-particles', state.particles);
    setChk('#toggle-24h', state.use24Hour);
    setChk('#toggle-locklayout', state.layoutLocked);

    const nameInput = $('#user-name-input');
    if (nameInput) nameInput.value = state.userName || '';

    updateEngineUI();

    $('#bm-list-view')?.classList.toggle('active', state.bookmarkView === 'list');
    $('#bm-grid-view')?.classList.toggle('active', state.bookmarkView === 'grid');
}

function setChk(sel, val) { const el = $(sel); if (el) el.checked = !!val; }

// ═══════════════════════════════════════
// ALL EVENT LISTENERS
// ═══════════════════════════════════════
function setupAllEvents() {
    // Search
    $('#search-input')?.addEventListener('keydown', e => { if (e.key === 'Enter') performSearch(); });
    $$('.engine-chip').forEach(b => b.addEventListener('click', () => setEngine(b.dataset.engine)));

    // Theme toggle
    $('#theme-toggle-fab')?.addEventListener('click', toggleTheme);

    // Clock style toggle
    $('#clock-style-toggle')?.addEventListener('click', () => {
        state.clockStyle = state.clockStyle === 'digital' ? 'analog' : 'digital';
        saveState();
        applyClockStyle();
    });

    // Settings
    $('#settings-fab')?.addEventListener('click', () => { $('#settings-panel')?.classList.add('open'); $('#settings-backdrop')?.classList.add('visible'); });
    $('#settings-close')?.addEventListener('click', closeSettings);
    $('#settings-backdrop')?.addEventListener('click', closeSettings);

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

    // Live wallpaper toggle
    bindToggle('#toggle-livewp', 'liveWallpaper', () => { applyBackground(); syncSettingsUI(); });

    // Particles toggle
    bindToggle('#toggle-particles', 'particles', () => applyParticles());

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

    // User name
    $('#user-name-input')?.addEventListener('change', e => {
        state.userName = e.target.value.trim(); saveState(); updateClock();
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

    // Quick Note
    let noteTimer;
    $('#quick-note')?.addEventListener('input', () => { clearTimeout(noteTimer); noteTimer = setTimeout(saveQuickNote, 500); });

    // Focus
    $('#focus-input')?.addEventListener('keydown', e => { if (e.key === 'Enter') setFocus(); });
    $('#focus-clear')?.addEventListener('click', clearFocus);

    // Pomodoro
    $('#pomo-start')?.addEventListener('click', togglePomo);
    $('#pomo-reset')?.addEventListener('click', resetPomo);
    $('#pomo-skip')?.addEventListener('click', skipPomo);

    // Habits
    $('#add-habit-btn')?.addEventListener('click', addHabit);
    $('#habit-list')?.addEventListener('click', e => {
        const chk = e.target.closest('.habit-check');
        if (chk) { toggleHabit(parseInt(chk.dataset.hidx)); return; }
        const del = e.target.closest('.habit-delete');
        if (del) { deleteHabit(parseInt(del.dataset.hidx)); }
    });

    // World Clock
    $('#add-tz-btn')?.addEventListener('click', addWorldClock);
    $('#worldclock-list')?.addEventListener('click', e => {
        const del = e.target.closest('.wc-delete');
        if (del) deleteWorldClock(parseInt(del.dataset.wcidx));
    });

    // Reading List
    $('#reading-add-btn')?.addEventListener('click', addReading);
    $('#reading-input')?.addEventListener('keydown', e => { if (e.key === 'Enter') addReading(); });

    // Bookmarks view
    $('#bm-list-view')?.addEventListener('click', () => { state.bookmarkView = 'list'; saveState(); renderBookmarks(); syncSettingsUI(); });
    $('#bm-grid-view')?.addEventListener('click', () => { state.bookmarkView = 'grid'; saveState(); renderBookmarks(); syncSettingsUI(); });

    // Edit modals
    $('#edit-shortcuts-btn')?.addEventListener('click', () => openEditModal('shortcuts'));
    $('#edit-ai-btn')?.addEventListener('click', () => openEditModal('aiTools'));
    $('#edit-modal-close')?.addEventListener('click', closeEditModal);
    $('#edit-modal-backdrop')?.addEventListener('click', closeEditModal);
    $('#edit-modal-add')?.addEventListener('click', addEditItem);
    $('#edit-modal-save')?.addEventListener('click', saveEditModal);

    // Keyboard shortcuts
    document.addEventListener('keydown', e => {
        const tag = document.activeElement?.tagName;
        if (tag === 'INPUT' || tag === 'TEXTAREA') {
            if (e.key === 'Escape') { document.activeElement.blur(); closeSettings(); closeEditModal(); toggleKBOverlayOff(); }
            return;
        }
        if (e.key === '/') { e.preventDefault(); $('#search-input')?.focus(); }
        else if (e.key === 'Escape') { closeSettings(); closeEditModal(); toggleKBOverlayOff(); }
        else if (e.key === '?') toggleKBOverlay();
        else if (e.key === 't' || e.key === 'T') toggleTheme();
        else if (e.key === 'p' || e.key === 'P') togglePomo();
        else if (e.key === 's' || e.key === 'S') { $('#settings-panel')?.classList.add('open'); $('#settings-backdrop')?.classList.add('visible'); }
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

    function smoothStep() {
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
        // Skip if inside scrollable inner elements
        const path = e.composedPath();
        for (const el of path) {
            if (el === document || el === window) break;
            if (el.scrollHeight > el.clientHeight && el !== document.documentElement && el !== document.body) {
                const style = getComputedStyle(el);
                if (style.overflowY === 'auto' || style.overflowY === 'scroll') {
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
    init();
    initSmoothScroll();
});
