import React from 'react';

import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';

import OdigeoDefaultButton from '../components/OdigeoButtons/OdigeoDefaultButton'
import OdigeoDisabledButton from '../components/OdigeoButtons/OdigeoDisabledButton'
import OdigeoSelectedButton from '../components/OdigeoButtons/OdigeoSelectedButton'
import OdigeoFocusErrorButton from '../components/OdigeoButtons/OdigeoFocusErrorButton'

import Primary from '../components/OdigeoButtons/Primary'

storiesOf('Primary Odigeo Buttons', module)
  .addDecorator(jsxDecorator)
  .add('Default Button', () => (
    <OdigeoDefaultButton>Book now</OdigeoDefaultButton>
  ))
  .add('Disabled Button', () => (
    <OdigeoDisabledButton>Book now</OdigeoDisabledButton>
  ))
  .add('Selected Button', () => (
    <OdigeoSelectedButton>Book now</OdigeoSelectedButton>
  ))
  .add('Focus-error Button', () => (
    <OdigeoFocusErrorButton>Book now</OdigeoFocusErrorButton>
  ))
  .add('Primary', () => (
    <Primary>Book now</Primary>
  ))
  .add('Primary disabled', () => (
    <Primary disabled>Book now</Primary>
  ))
  .add('Primary error', () => (
    <Primary error>Book now</Primary>
  ))
