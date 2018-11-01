import * as React from "react";
import * as ReactDom from "react-dom";
import { List } from './todo/List';
import ReactUiHelper from '../src/index';

ReactDom.render(
    <>
        <ReactUiHelper.ControlSwitch />
        <List />
    </>,
    document.querySelector('#root')
)