const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Enable CORS for all requests
app.use(cors());

app.get('*', (req, res) => {
    console.log(`registered player`);
    res.status(200).json({ member: true });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
