module.exports = {
    root: true,
    env:  {
        browser: true,
        es2021:  true,
        node:    true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended"
    ],
    parser:        "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: "latest",
        sourceType:  "module"
    },
    plugins: [
        "react",
        "@typescript-eslint"
    ],
    settings: {
        react: {
            version: "detect"
        }
    },
    ignorePatterns: ["*.css", "*.svg", "*.scss", ".json"],
    rules:          {
        "strict": [
            2
        ],
        "curly": [
            2,
            "multi"
        ],
        "default-case": [
            2
        ],
        "comma-dangle": [
            2
        ],
        "no-cond-assign": [
            2
        ],
        "no-constant-condition": [
            2
        ],
        "no-empty-character-class": [
            2
        ],
        "no-empty": [
            2
        ],
        "no-ex-assign": [
            2
        ],
        "no-extra-boolean-cast": [
            2
        ],
        "no-extra-semi": [
            2
        ],
        "no-func-assign": [
            2
        ],
        "no-inner-declarations": [
            2
        ],
        "no-invalid-regexp": [
            2
        ],
        "no-irregular-whitespace": [
            2
        ],
        "valid-typeof": [
            2
        ],
        "no-unexpected-multiline": [
            2
        ],
        "no-negated-in-lhs": [
            2
        ],
        "no-obj-calls": [
            2
        ],
        "no-regex-spaces": [
            2
        ],
        "no-sparse-arrays": [
            2
        ],
        "no-unreachable": [
            2
        ],
        "use-isnan": [
            2
        ],
        "no-control-regex": [
            2
        ],
        "no-debugger": [
            2
        ],
        "no-dupe-keys": [
            2
        ],
        "no-dupe-args": [
            2
        ],
        "no-duplicate-case": [
            2
        ],
        "accessor-pairs": [
            2
        ],
        "block-scoped-var": [
            2
        ],
        "no-multi-spaces": [
            2,
            {
                exceptions: {
                    Property:             true,
                    VariableDeclarator:   true,
                    AssignmentExpression: true,
                    IfStatement:          true,
                    ImportDeclaration:    true
                }
            }
        ],
        "key-spacing": [
            2,
            {
                align: "value"
            }
        ],
        "new-cap": [
            0,
            {
                capIsNewExceptions: []
            }
        ],
        "valid-jsdoc": [
            0,
            {
                requireReturn:            false,
                requireReturnDescription: false
            }
        ],
        "complexity": [
            2,
            10
        ],
        "consistent-return": [
            2, { treatUndefinedAsUnspecified: true }
        ],
        "dot-notation": [
            2
        ],
        "dot-location": [
            2,
            "property"
        ],
        "eqeqeq": [
            2
        ],
        "guard-for-in": [
            2
        ],
        "no-alert": [
            2
        ],
        "no-caller": [
            2
        ],
        "no-div-regex": [
            2
        ],
        "no-else-return": [
            2
        ],
        "no-labels": [
            2
        ],
        "no-eval": [
            2
        ],
        "no-extra-bind": [
            2
        ],
        "no-eq-null": [
            2
        ],
        "no-extend-native": [
            2
        ],
        "no-fallthrough": [
            2
        ],
        "no-floating-decimal": [
            2
        ],
        "no-implicit-coercion": [
            2
        ],
        "no-implied-eval": [
            2
        ],
        "no-invalid-this": [
            0
        ],
        "no-iterator": [
            2
        ],
        "no-lone-blocks": [
            2
        ],
        "no-loop-func": [
            2
        ],
        "no-multi-str": [
            2
        ],
        "no-native-reassign": [
            2
        ],
        "no-new-func": [
            2
        ],
        "no-new-wrappers": [
            2
        ],
        "no-new": [
            2
        ],
        "no-octal": [
            2
        ],
        "no-octal-escape": [
            2
        ],
        "no-param-reassign": [
            2
        ],
        "no-process-env": [
            2
        ],
        "no-proto": [
            2
        ],
        "no-redeclare": [
            2
        ],
        "no-return-assign": [
            2
        ],
        "no-script-url": [
            2
        ],
        "no-self-compare": [
            2
        ],
        "no-sequences": [
            2
        ],
        "no-throw-literal": [
            2
        ],
        "no-unused-expressions": [
            2
        ],
        "no-useless-call": [
            2
        ],
        "no-void": [
            2
        ],
        "no-warning-comments": [
            0
        ],
        "no-with": [
            2
        ],
        "radix": [
            2
        ],
        "vars-on-top": [
            2
        ],
        "wrap-iife": [
            2
        ],
        "yoda": [
            2
        ],
        "no-undef": [
            2
        ],
        "no-undefined": [
            2
        ],
        "init-declarations": [
            2,
            "always"
        ],
        "no-catch-shadow": [
            2
        ],
        "no-delete-var": [
            2
        ],
        "no-label-var": [
            2
        ],
        "no-shadow-restricted-names": [
            2
        ],
        "no-shadow": [
            2
        ],
        "no-undef-init": [
            2
        ],
        "no-unused-vars":       "off",
        "no-use-before-define": [
            2
        ],
        "callback-return": [
            2
        ],
        "handle-callback-err": [
            2
        ],
        "no-mixed-requires": [
            2
        ],
        "no-new-require": [
            2
        ],
        "no-path-concat": [
            2
        ],
        "no-process-exit": [
            2
        ],
        "no-sync": [
            2
        ],
        "func-style": [
            2,
            "expression"
        ],
        "no-inline-comments": [
            2
        ],
        "no-array-constructor": [
            2
        ],
        "no-multiple-empty-lines": [
            2
        ],
        "array-bracket-spacing": [
            2,
            "never"
        ],
        "block-spacing": [
            2,
            "always"
        ],
        "brace-style": [
            2,
            "1tbs"
        ],
        "camelcase": [
            2
        ],
        "comma-spacing": [
            2,
            {
                before: false,
                after:  true
            }
        ],
        "computed-property-spacing": [
            2,
            "never"
        ],
        "consistent-this": [
            2,
            "self"
        ],
        "eol-last": [
            2
        ],
        "id-length": [
            2,
            {
                min:        2,
                max:        32,
                exceptions: [
                    "i",
                    "x",
                    "e",
                    "y",
                    "z",
                    "a",
                    "b",
                    "T",
                    "U",
                    "V",
                    "W",
                    "X",
                    "Y",
                    "Z",
                    "_",
                    "Q"
                ]
            }
        ],
        "indent":               "off",
        "lines-around-comment": [
            2,
            {
                beforeBlockComment: true,
                beforeLineComment:  false
            }
        ],
        "linebreak-style": [
            2
        ],
        "max-nested-callbacks": [
            2,
            3
        ],
        "new-parens": [
            2
        ],
        "newline-after-var": [
            2
        ],
        "no-continue": [
            2
        ],
        "no-mixed-spaces-and-tabs": [
            "error", "smart-tabs"
        ],
        "no-nested-ternary": [
            2
        ],
        "no-new-object": [
            2
        ],
        "no-spaced-func": [
            2
        ],
        "no-trailing-spaces": [
            2
        ],
        "no-underscore-dangle": [
            0
        ],
        "no-unneeded-ternary": [
            2
        ],
        "object-curly-spacing": [
            2,
            "always"
        ],
        "one-var": [
            2,
            "never"
        ],
        "operator-assignment": [
            2,
            "never"
        ],
        "operator-linebreak": [
            2,
            "after"
        ],
        "padded-blocks": [
            2,
            "never"
        ],
        "quote-props": [
            2,
            "consistent-as-needed"
        ],
        "quotes": [
            2,
            "double"
        ],
        "keyword-spacing": [
            2,
            {
                overrides: {
                    if: {
                        after: false
                    },
                    for: {
                        after: false
                    },
                    while: {
                        after: false
                    },
                    catch: {
                        after: false
                    }
                }
            }
        ],
        "semi-spacing": [
            2,
            {
                before: false,
                after:  true
            }
        ],
        "semi": [
            2,
            "always"
        ],
        "space-before-blocks": [
            2,
            "always"
        ],
        "space-before-function-paren": [
            2,
            "never"
        ],
        "space-in-parens": [
            2,
            "never"
        ],
        "space-infix-ops": [
            2
        ],
        "space-unary-ops": [
            2,
            {
                words:    true,
                nonwords: false
            }
        ],
        "spaced-comment": [
            2,
            "always"
        ],
        "arrow-parens": [
            2,
            "as-needed"
        ],
        "arrow-spacing": [
            2,
            {
                before: true,
                after:  true
            }
        ],
        "constructor-super": [
            2
        ],
        "no-class-assign": [
            2
        ],
        "no-const-assign": [
            2
        ],
        "no-dupe-class-members": [
            2
        ],
        "no-this-before-super": [
            2
        ],
        "no-var": [
            2
        ],
        "prefer-const": [
            2
        ],
        "prefer-spread": [
            2
        ],
        "prefer-reflect": [
            0
        ],
        "prefer-template": [
            2
        ],
        "require-yield": [
            2
        ],
        "max-depth": [
            2,
            5
        ],
        "max-statements": [
            2,
            16
        ],
        "react/jsx-uses-vars": [
            2
        ],
        "react/react-in-jsx-scope": [
            0
        ],
        "react/prop-types":             "off",
        "react/jsx-max-props-per-line": [
            1,
            {
                maximum: {
                    single: 3,
                    multi:  1
                }
            }
        ],
        "react/jsx-first-prop-new-line": [
            1,
            "multiline"
        ],
        "no-empty-function":                 "off",
        "@typescript-eslint/no-unused-vars": [
            "error"
        ],
        "@typescript-eslint/indent": [
            2,
            4,
            {
                MemberExpression: "off"
            }
        ],
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-explicit-any":   [
            2
        ]
    },
    overrides: []
};
