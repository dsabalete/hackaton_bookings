import React from 'react';

import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';

import Hamburguer from '../components/Hamburguer/Hamburguer';

storiesOf('Hamburguer', module)
  .addDecorator(jsxDecorator)
  .add('Basic Hamburguer', () => (
    <Hamburguer list={['Home', 'Account', 'Log Out', 'Close']}>
    </Hamburguer>
  ))
