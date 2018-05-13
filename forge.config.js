const path = require('path');

module.exports = {
    "make_targets": {
        "win32": [
            "wix"
        ],
        "darwin": [],
        "linux": []
    },
    "github_repository": {
        "owner": "",
        "name": ""
    },
    "electronPackagerConfig": {
        "icon": "./src/assets/icons/precipart_64x64.ico",
        "asar": true,
        "electronVersion": "1.8.2"
    }
}