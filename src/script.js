async function loadQuotes() {
    const response = await fetch('quotes.csv');
    const text = await response.text();
    const lines = text.trim().split('\n').slice(1); // skip header
    const quotes = lines.map(line => {
        const [quote, author] = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/).map(s => s.replace(/^"|"$/g, '').trim());
        return { quote, author };
    });

    const random = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote').textContent = `"${random.quote}"`;
    document.getElementById('author').textContent = `— ${random.author}`;
}

loadQuotes();
