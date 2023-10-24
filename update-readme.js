const now = new Date();
const timezoneOffset = 5.5; // IST (Indian Standard Time) is UTC+5:30
const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
const currentIST = new Date(utc + (3600000 * timezoneOffset));

const currentHour = currentIST.getHours();
const dayOfWeek = currentIST.getDay();

let status = '';

if (dayOfWeek >= 1 && dayOfWeek <= 5) { // Monday to Friday
    if (currentHour >= 10 && currentHour < 20) {
        status = 'Working';
    }
} else if (dayOfWeek === 0 || dayOfWeek === 6) { // Sunday or Saturday
    status = 'Fun';
}

if (currentHour >= 7 && currentHour < 8) {
    status = 'Working Out';
} else if (currentHour >= 20 && currentHour < 22) {
    status = 'With Family';
} else if (currentHour >= 22 && currentHour < 23) {
    status = 'Entertainment';
} else if (currentHour >= 23 || (currentHour >= 0 && currentHour < 6 && currentIST.getMinutes() < 30)) {
    status = 'Sleeping';
}

const fs = require('fs');
fs.readFile('README.md', 'utf-8', (err, data) => {
    if (err) throw err;
    const updatedReadme = data.replace('<!---STATUS--->', status);
    fs.writeFile('README.md', updatedReadme, 'utf-8', (err) => {
        if (err) throw err;
        console.log('README.md updated with current status.');
    });
});
