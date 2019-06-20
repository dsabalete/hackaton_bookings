import React from 'react';

import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';

import Primary from '../components/OdigeoButtons/Primary'

storiesOf('Primary Odigeo Buttons', module)
  .addDecorator(jsxDecorator)
  .add('Primary', () => (
    <Primary>Book now</Primary>
  ))
  .add('Primary disabled', () => (
    <Primary disabled>Book now</Primary>
  ))
  .add('Primary error', () => (
    <Primary error>Book now</Primary>
  ))
