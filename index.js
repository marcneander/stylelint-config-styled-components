module.exports = {
    processors: ['stylelint-processor-styled-components'],
    extends: [
        '@marcneander/stylelint-config',
        'stylelint-config-styled-components'
    ],
    rules: {
        'selector-type-no-unknown': [ true, { ignoreTypes: ['$dummyValue'] }],
    }
};