import React from 'react';

import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import OdigeoButton from '../components/OdigeoButton'

storiesOf('Welcome', module)
  .addDecorator(jsxDecorator)
  .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
.addDecorator(jsxDecorator)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('OdigeoButton', module)
  .addDecorator(jsxDecorator)
  .add('a button test', () => (
    <OdigeoButton onClick={action('clicked')}>Hello world</OdigeoButton>
  ));
