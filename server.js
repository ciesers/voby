const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

// Serve static files from public directory
app.use(express.static('public'));

// Also serve static files from root (for root index.html assets)
app.use(express.static(__dirname));

// Route for homepage - try root index.html first, then public/index.html
app.get('/', (req, res) => {
    const rootIndex = path.join(__dirname, 'index.html');
    const publicIndex = path.join(__dirname, 'public', 'index.html');
    
    // Check if root index.html exists, otherwise use public/index.html
    if (fs.existsSync(rootIndex)) {
        res.sendFile(rootIndex);
    } else {
        res.sendFile(publicIndex);
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
