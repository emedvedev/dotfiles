module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "env": {
    	"browser": true
    },
    "rules": {
        "no-console": [
            "error",
            { "allow": ["warn", "error"] }
        ],
        "react/jsx-uses-vars": [
            2
        ],
        "react/no-unused-prop-types": [
            "error",
            { "skipShapeProps": true }
        ]
    }
};
