const now = new Date();
const currentHour = now.getHours();
const dayOfWeek = now.getDay();

let status = '';

if (dayOfWeek >= 1 && dayOfWeek <= 5) { // Monday to Friday
    if (currentHour >= 10 && currentHour < 20) {
        status = 'Working/coding...';
    }
} else if (dayOfWeek === 0 || dayOfWeek === 6) { // Sunday or Saturday
    status = 'Chilling Out or Coding...';
}

if (currentHour >= 7 && currentHour < 8) {
    status = 'Working Out';
} else if (currentHour >= 20 && currentHour < 22) {
    status = 'With Family...';
} else if (currentHour >= 22 && currentHour < 23) {
    status = 'Enjoying...';
} else if ((currentHour >= 23 && now.getMinutes() >= 0) || (currentHour >= 0 && currentHour < 6 && now.getMinutes() < 30)) {
    status = 'Sleeping...';
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
