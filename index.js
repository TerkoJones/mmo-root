const path = require('path');

process.env.MMO_ROOT = process.env.MMO_ROOT || path.dirname(require.main.filename);

module.exports = exports = process.env.MMO_ROOT;
