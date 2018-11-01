import React, { Component } from "react";
import ReactUiHelper from '../../src/index';

interface ITodoItem {
    title: string;
    completed: boolean;
}

export class List extends ReactUiHelper.Component {
    public state: {
        items: ITodoItem[]
     } = {
        items: [
            {title: "One", completed: false},
            {title: "Two", completed: false},
            {title: "Three", completed: false},
            {title: "Four", completed: false}
        ]
    }

    protected doRender() {
        return <>
            <ul>
                {
                    this.state.items.map((i, inex) => {
                        return <li key={'item'  + inex}>
                            {i.title} - {i.completed ? 'Done': 'Pending'}
                        </li>
                    })
                }
            </ul>
        </>
    }
}