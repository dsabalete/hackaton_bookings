import React from 'react';

import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';

import Popup from '../components/Modals/Popup'
import Primary from '../components/OdigeoButtons/Primary'

storiesOf('Odigeo Modals', module)
    .addDecorator(jsxDecorator)
    .add('Popup', () => (
        <Popup
            header="This is a header">
            Id ad cillum elit laboris occaecat sunt in laborum ex dolore deserunt.
            Ullamco qui commodo consectetur exercitation veniam quis nisi exercitation ut.
            Tempor ut cupidatat ut nostrud sint incididunt est sunt proident esse minim fugiat magna.
            In ut ipsum eu aliquip sunt consequat eiusmod commodo exercitation ipsum minim irure ad dolore.
            Ipsum ipsum non laboris tempor Lorem eu aliquip ex aliqua esse eu.
            Reprehenderit officia est laboris amet ad irure nulla sint consequat eu.
        </Popup>
    ))
