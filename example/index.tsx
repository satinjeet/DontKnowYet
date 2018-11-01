import * as React from "react";
import * as ReactDom from "react-dom";
import { List } from './todo/List';

ReactDom.render(
    <List />,
    document.querySelector('#root')
)