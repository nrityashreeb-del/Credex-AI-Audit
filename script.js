function runAudit() {
    const size = document.getElementById('teamSize').value;
    const spend = document.getElementById('totalSpend').value;

    if (!size || !spend) {
        alert("Please enter your team data first!");
        return;
    }

    
    const perUser = spend / size;
    let message = "";

    if (perUser > 20) {
        const waste = (perUser - 20) * size;
        message = `⚠️ Your team is overpaying by $${waste.toFixed(2)} per month! Switch to consolidated billing to save.`;
    } else {
        message = "✅ Your spend is efficient per user, but you may have security risks with individual accounts.";
    }

    document.getElementById('savingsText').innerText = message;
    document.getElementById('results').classList.remove('hidden');
}