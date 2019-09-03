module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "feathers":true,
        "io":true
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
    }
};