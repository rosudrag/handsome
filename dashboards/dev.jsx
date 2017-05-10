import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import Packery from 'packery';
import { Provider } from 'react-redux';
import store from '../redux/store.js';
import TextWidget from '../widgets/status_widget';

import "../styles/default.scss";

ReactDOM.render(
    <Provider store={store}>
        <div id="dashboard">
            <TextWidget name="CDS" title="CDS status" width="2" />
        </div>
    </Provider>, document.getElementById('content')
);

new Packery("#dashboard", {itemSelector: ".widget", gutter: 10});
