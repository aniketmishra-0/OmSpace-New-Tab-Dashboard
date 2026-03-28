const fs = require('fs');
const path = require('path');
const https = require('https');

const TARGET_LANGUAGES = [
    'ar', 'az', 'bn', 'zh-CN', 'zh-TW', 'cs', 'fr', 'de', 'el', 'hi',
    'hu', 'id', 'it', 'ja', 'ko', 'mr', 'ne', 'fa', 'pl', 'pt-BR',
    'ru', 'sl', 'es', 'ta', 'th', 'tr', 'uk', 'ur', 'uz', 'vi'
];

const UI_STRINGS = [
    'New Tab',
    'Good Morning',
    'Good Afternoon',
    'Good Evening',
    'Loading...',
    'Detecting location...',
    'Daily Focus',
    "What's your main goal today?",
    'AI Tools',
    'Personal',
    'Work',
    'Minimal',
    'Zen',
    'Search the web...',
    'Shortcuts',
    'Day Progress',
    'Did You Know?',
    'Quick Market',
    'Bitcoin',
    '1 USD',
    'Quick Note',
    'Jot down something...',
    'To-Do',
    'Add a task...',
    'Normal',
    'High',
    'Low',
    'normal',
    'high',
    'low',
    'Agenda',
    'Event title...',
    'Google Apps',
    'Docs',
    'Sheets',
    'Slides',
    'Drive',
    'Photos',
    'Meet',
    'Keep',
    'Translate',
    'Habits',
    'World Clock',
    'Reading List',
    'Paste URL to save...',
    'Bookmarks',
    'Top Sites',
    'Tab Groups',
    'Custom Widgets',
    'AI Quick Actions',
    'Pomodoro Stats',
    'Customize',
    'Look',
    'Layout',
    'Tools',
    'Data',
    'Accent Color',
    'Font',
    'Background',
    'Paste image URL...',
    'Upload Image',
    'Clear',
    'Gradient',
    'Abstract',
    'Nature',
    'Dark',
    'Space',
    'Cyberpunk',
    'Auto Wallpaper (Daily)',
    'Preferences',
    'Lock Layout',
    'Use 24-Hour Time',
    'Particle Effects',
    'Performance Mode',
    'Sync Core Settings',
    'Zen Mode',
    'Weather & Search',
    'Fahrenheit',
    'Refresh Weather',
    'Manage Engines',
    'Language',
    'Applies locale-aware formatting across the dashboard, including date, time, and location requests.',
    'Widgets',
    'Clock',
    'Weather',
    'Pomodoro Timer',
    'Quote',
    'Bottom Strip',
    'To-Do List',
    'Social Dock',
    'Your Name',
    'Enter your name...',
    'Greeting & Quote',
    'Custom greeting prefix...',
    'Use Custom Quote',
    'Write your favorite quote...',
    'Quote author...',
    'Keyboard Shortcuts',
    'Backup & Restore',
    'Restore Everything',
    'Appearance Only',
    'Content Only',
    'Layout Only',
    'Export',
    'Import',
    'Reset All Settings',
    'Edit',
    'Add New',
    'Save',
    'Reset Settings?',
    'This will permanently clear your layout, custom widgets, and reset everything to factory defaults. Are you sure?',
    'Cancel',
    'Yes, Reset',
    'Add Item',
    'Fill the details below.',
    'Focus Search',
    'Close Panel',
    'Show Shortcuts',
    'Toggle Theme',
    'Start/Pause Pomodoro',
    'Open Settings',
    'Press',
    'or',
    'to close',
    'Switch clock style',
    'Edit search engines',
    'Toggle Zen Mode',
    'Toggle Preview',
    'Open Google Calendar',
    'Add Habit',
    'Add Timezone',
    'Add Widget',
    'Settings',
    'Choose dashboard language',
    'Detecting weather...',
    'Performance mode',
    'Refresh manually',
    'No geolocation',
    'N/A',
    'Unavailable',
    'Location denied',
    'Enable location access',
    'Clear Sky',
    'Partly Cloudy',
    'Foggy',
    'Drizzle',
    'Rain',
    'Snow',
    'Rain Showers',
    'Snow Showers',
    'Thunderstorm',
    'Unknown',
    'No preview yet.',
    'You',
    'Summarize Clipboard',
    'Rewrite Better',
    'Translate to English',
    'Action Items',
    'Summarize the following text into crisp bullet points:\n\n',
    'Rewrite the following text to make it clearer and better structured:\n\n',
    'Translate the following text to English and preserve meaning:\n\n',
    'Extract the action items from the following text:\n\n',
    'No clipboard text found.',
    'Create a simple daily habit you can track from the card.',
    'Habit Name',
    'Drink water',
    'Keep it short and action-oriented.',
    'Add World Clock',
    'Pin another city and timezone to your dashboard.',
    'Add Clock',
    'City',
    'Dubai',
    'Timezone',
    'Asia/Dubai',
    'Use an IANA timezone like Europe/Paris or America/New_York.',
    'Add Custom Widget',
    'Create a mini card for reminders, links, or quick snippets.',
    'Title',
    'Resources',
    'Content',
    'Useful links, notes, or reminders...',
    'Optional Link',
    'Material Symbol Icon',
    'Examples: widgets, bolt, link, code.',
    'Done',
    'Action failed',
    'Heads up',
    'Dismiss',
    'Copied',
    'Habit name is required.',
    'Missing field',
    'Habit created',
    'Habit deleted',
    'City and timezone are both required.',
    'Invalid timezone',
    'Timezone format looks invalid. Use something like Asia/Dubai.',
    'World clock created',
    'World clock deleted',
    'Event title and date are required.',
    'Event added',
    'Event deleted',
    'Widget title is required.',
    'Custom widget added',
    'Quick action ready',
    'Prompt copied to clipboard. Paste it in your AI tab.',
    'Clipboard blocked',
    'Clipboard access failed. Please allow clipboard permission and try again.',
    'No upcoming events',
    'Add one or open Google Calendar.',
    'Add your first custom widget',
    'Use it for links, reminders, snippets, or tiny dashboards.',
    'Open link',
    'No tab groups API',
    'Tab groups unavailable',
    'Error',
    'No tab groups',
    'Folder',
    'No bookmark folders found',
    'Export ready',
    'Your backup JSON has been downloaded.',
    'Import complete',
    'Backup imported successfully.',
    'Import failed',
    'That file could not be read as a valid OmSpace backup.',
    'Image too large',
    'Please choose an image smaller than 1.5 MB for local wallpaper.',
    'Background saved',
    'Local wallpaper updated.',
    'Invalid TZ',
    'tabs',
    '__NAME__ added to habits.',
    '__NAME__ removed.',
    '__NAME__ clock added.',
    '__TITLE__ added to agenda.',
    '__TITLE__ removed from agenda.',
    '__TITLE__ widget created.',
    'Group __GROUP__',
    '__COUNT__ tabs',
    'The first computer mouse was made of wood in 1964.',
    "Over 70% of the world's currency exists only digitally.",
    'The first hard drive in 1956 could store only 5MB of data.',
    "The word 'robot' comes from a Czech word meaning 'forced labor'.",
    'A single Google query uses 1,000 computers in 0.2 seconds.',
    'Email actually predates the World Wide Web.',
    'There are around 700 programming languages in the world.',
    'Amazon was originally going to be called Cadabra.',
    'The first domain name ever registered was Symbolics.com.',
    '"The only way to do great work is to love what you do."',
    '"Innovation distinguishes between a leader and a follower."',
    '"Stay hungry, stay foolish."',
    '"The future belongs to those who believe in the beauty of their dreams."',
    '"It does not matter how slowly you go as long as you do not stop."',
    "\"Everything you've ever wanted is on the other side of fear.\"",
    '"Believe you can and you\'re halfway there."',
    '"Act as if what you do makes a difference. It does."',
    '"Success is not final, failure is not fatal: it is the courage to continue that counts."',
    '"In the middle of every difficulty lies opportunity."',
    '"The best time to plant a tree was 20 years ago. The second best time is now."',
    "\"Your time is limited, don't waste it living someone else's life.\"",
    '"Be yourself; everyone else is already taken."',
    '"Do what you can, with what you have, where you are."',
    '"The only impossible journey is the one you never begin."',
    '"Keep your face always toward the sunshine—and shadows will fall behind you."',
    '"What lies behind you and what lies in front of you, pales in comparison to what lies inside of you."',
    '"Happiness is not something ready made. It comes from your own actions."',
    "\"Don't watch the clock; do what it does. Keep going.\"",
    '"If you can dream it, you can do it."',
    '"The secret of getting ahead is getting started."',
    '"Magic is believing in yourself. If you can make that happen, you can make anything happen."',
    "\"You don't have to be great to start, but you have to start to be great.\"",
    '"Every champion was once a contender that didn\'t give up."',
    '"Doubt kills more dreams than failure ever will."',
    '"Turn your wounds into wisdom."',
    '"You are never too old to set another goal or to dream a new dream."',
    '"The harder you work for something, the greater you\'ll feel when you achieve it."',
    '"Someday is not a day of the week."',
    '"Great things are done by a series of small things brought together."',
    '"Action is the foundational key to all success."',
    '"The only limit to our realization of tomorrow is our doubts of today."'
];

const STRINGS = [...new Set(UI_STRINGS)];
const BATCH_SEPARATOR = '\nZXCVBNM987654321\n';
const MAX_BATCH_CHARS = 1100;

function translateRequest(lang, text) {
    return new Promise((resolve, reject) => {
        const url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl='
            + encodeURIComponent(lang)
            + '&dt=t&q='
            + encodeURIComponent(text);
        https.get(url, res => {
            let raw = '';
            res.on('data', chunk => {
                raw += chunk;
            });
            res.on('end', () => {
                try {
                    const parsed = JSON.parse(raw);
                    const translated = (parsed?.[0] || []).map(part => part[0] || '').join('');
                    resolve(translated);
                } catch (error) {
                    reject(new Error(`Failed to parse translation response for ${lang}: ${error.message}`));
                }
            });
        }).on('error', reject);
    });
}

function chunkStrings(strings) {
    const batches = [];
    let current = [];
    let currentLength = 0;

    for (const value of strings) {
        const nextLength = current.length
            ? currentLength + BATCH_SEPARATOR.length + value.length
            : value.length;
        if (current.length && nextLength > MAX_BATCH_CHARS) {
            batches.push(current);
            current = [value];
            currentLength = value.length;
        } else {
            current.push(value);
            currentLength = nextLength;
        }
    }

    if (current.length) batches.push(current);
    return batches;
}

async function translateBatch(lang, batch, attempt = 0) {
    try {
        const translated = await translateRequest(lang, batch.join(BATCH_SEPARATOR));
        const parts = translated.split(BATCH_SEPARATOR);
        if (parts.length !== batch.length) {
            throw new Error(`Batch split mismatch: expected ${batch.length}, got ${parts.length}`);
        }
        return parts;
    } catch (error) {
        if (attempt >= 2) throw error;
        await new Promise(resolve => setTimeout(resolve, 800 * (attempt + 1)));
        return translateBatch(lang, batch, attempt + 1);
    }
}

async function buildTranslations() {
    const translations = {
        en: Object.fromEntries(STRINGS.map(value => [value, value]))
    };
    const batches = chunkStrings(STRINGS);

    for (const lang of TARGET_LANGUAGES) {
        console.log(`Translating ${lang}...`);
        const dictionary = {};
        for (const batch of batches) {
            const translatedParts = await translateBatch(lang, batch);
            batch.forEach((source, index) => {
                dictionary[source] = translatedParts[index];
            });
            await new Promise(resolve => setTimeout(resolve, 120));
        }
        translations[lang] = dictionary;
    }

    return translations;
}

async function main() {
    const translations = await buildTranslations();
    const outputPath = path.join(__dirname, '..', 'i18n-data.js');
    const contents = 'window.OMSPACE_TRANSLATIONS = ' + JSON.stringify(translations, null, 2) + ';\n';
    fs.writeFileSync(outputPath, contents, 'utf8');
    console.log(`Wrote ${outputPath}`);
}

main().catch(error => {
    console.error(error);
    process.exitCode = 1;
});
