import React from "react";
import { Component } from './Component';

interface IComponentOptionsProps {
    targetComponent: React.Component;
}

export class ComponentOptions extends React.Component<IComponentOptionsProps> {
    public state = {
        show: false
    }

    public render() {
        return <>Adding Some Options</>;
    }
}