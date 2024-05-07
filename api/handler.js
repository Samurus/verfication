const cors = require('cors');
module.exports = (req, res) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*'); // Adjust this to be more restrictive if necessary
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        // Handle preflight request for CORS
        return res.status(200).send();
    }

    // Your JSON response
       res.status(200).json({ member: true });
};