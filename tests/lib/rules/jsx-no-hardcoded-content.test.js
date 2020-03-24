const {RuleTester} = require('eslint');

const {fixtureFile} = require('../../utilities');
const rule = require('../../../lib/rules/jsx-no-hardcoded-content');

const ruleTester = new RuleTester({parser: require.resolve('babel-eslint')});

function errorsFor(component, prop) {
  const message =
    prop === 'children'
      ? `Do not use hardcoded content as the children of the ${component} component.`
      : `Do not use hardcoded content in the ${prop} prop of the ${component} component.`;

  return [{type: 'JSXElement', message}];
}

const allowStrings = {allowStrings: true};
const disallowNumbers = {allowNumbers: false};
const checkProps = {checkProps: ['foo']};

ruleTester.run('jsx-no-hardcoded-content', rule, {
  valid: [
    {
      code: `
        import {MyComponent} from './components';
        <MyComponent>Content</MyComponent>
      `,
      filename: fixtureFile('basic-app/app/sections/MySection/MySection.js'),
      options: [
        {
          modules: {
            'app/sections/MySection/components': {MyComponent: allowStrings},
          },
        },
      ],
    },
  ],
  invalid: [],
});
