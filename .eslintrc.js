module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    extends: 'standard',
    plugins: [],
    // add your custom rules here
    rules: {
        "quotes": [
            1,
            "single"
        ],
        "indent": [2, 4, {"SwitchCase": 1}],
        "no-unused-vars": [
            1,
            {
                "vars": "all",
                "args": "none",
                "ignoreRestSiblings": false
            }
        ],
        "comma-dangle": [
            2,
            {
                "arrays": "never",
                "objects": "never",
                "imports": "never",
                "exports": "never",
                "functions": "ignore"
            }
        ],
        "eqeqeq": [
            2,
            "smart"
        ],
        "camelcase": 2,
        "semi": [2, "always"]
    }
}
