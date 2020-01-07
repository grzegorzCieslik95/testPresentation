'use strict';

module.exports = {
    plugins: [
        '@babel/plugin-transform-block-scoping',
    ],
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current'
                }
            }
        ],
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current'
                }
            },
            'tests'
        ]
    ]
};
