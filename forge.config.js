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
    "electronPackageConfig": {
        "icon": path.resolve(__dirname + "src/assets/icons/precipart_64x64.ico")
    }
}