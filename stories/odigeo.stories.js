import React from 'react';

import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import OdigeoButton from '../components/OdigeoButton/OdigeoButton'

storiesOf('OdigeoButton', module)
  .addDecorator(jsxDecorator)
  .add('a button test', () => (
    <OdigeoButton onClick={action('clicked')}>Hello world</OdigeoButton>
  ));
