// Time zone configuration
const timezones = {
    'ny-clock': 'America/New_York',
    'london-clock': 'Europe/London',
    'tokyo-clock': 'Asia/Tokyo',
    'sydney-clock': 'Australia/Sydney',
    'dubai-clock': 'Asia/Dubai',
    'la-clock': 'America/Los_Angeles',
    'singapore-clock': 'Asia/Singapore',
    'berlin-clock': 'Europe/Berlin'
};

/**
 * Format time with leading zeros
 * @param {number} num - Number to format
 * @returns {string} - Formatted number with leading zero
 */
function padZero(num) {
    return num < 10 ? '0' + num : num;
}

/**
 * Get current time in specified timezone
 * @param {string} timezone - Timezone identifier
 * @returns {string} - Formatted time string (HH:MM:SS)
 */
function getTimeInTimezone(timezone) {
    const now = new Date();
    const timeString = new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: timezone
    }).format(now);
    
    return timeString;
}

/**
 * Update all clock displays
 */
function updateClocks() {
    Object.entries(timezones).forEach(([elementId, timezone]) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = getTimeInTimezone(timezone);
        }
    });
}

/**
 * Initialize the clocks
 */
function initClocks() {
    // Update immediately
    updateClocks();
    
    // Update every second
    setInterval(updateClocks, 1000);
}

// Start the clocks when DOM is loaded
document.addEventListener('DOMContentLoaded', initClocks);

// Also start immediately if script loads after DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initClocks);
} else {
    initClocks();
}
