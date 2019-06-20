import React from 'react';

import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';

import Input from '../components/Forms/Input';

storiesOf('Odigeo Forms', module)
  .addDecorator(jsxDecorator)
  .add('Basic Input', () => (
    <Input id="Test" name="TestName"/>
  ))
