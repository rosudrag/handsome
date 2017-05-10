import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import Packery from 'packery';
import { Provider } from 'react-redux';
import store from '../redux/store.js';
import StatusWidget from '../widgets/status_widget';

import "../styles/default.scss";

ReactDOM.render(
    <Provider store={store}>
        <div id="dashboard">
            <StatusWidget name="Customer Delivery Service" title="Customer Delivery Service" width="1" />
            <StatusWidget name="Availability Service" title="Availability Service" width="1" />
            <StatusWidget name="CatalogueService" title="Catalogue Service" width="1" />
            <StatusWidget name="Payment Iframe title" title="Payment Iframe" width="1" />
            <StatusWidget name="WebOrderService" title="Web Order Service" width="1" />
            <StatusWidget name="Delivery Charge Service" title="Delivery Charge Service" width="1" />
            <StatusWidget name="Promotion Service" title="Promotion Service" width="1" />
            <StatusWidget name="Address Finder Service" title="Address Finder Service" width="1" />
            <StatusWidget name="SQL Connections" title="SQL Connections" width="1" />
        </div>
    </Provider>, document.getElementById('content')
);

new Packery("#dashboard", {itemSelector: ".widget", gutter: 10});
