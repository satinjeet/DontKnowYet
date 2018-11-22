import React from "react";
import { Component } from './Component';
import { HelperStream } from './HelperStream';
import { Subscription } from "rxjs";
import { EnableUiHelperEvent, DisableUiHelperEvent } from '../events/ControlUiHelper.events';

interface IComponentOptionsProps {
    targetComponent: React.Component;
}

export class ComponentOptions extends React.Component<IComponentOptionsProps> {
    public state = {
        show: false
    }

    private subscription: Subscription;

    public componentDidMount() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }

        this.subscription = HelperStream.subscribe((event: any) => {
            if (event instanceof EnableUiHelperEvent) {
                this.setState({ show: true });
            }

            if (event instanceof DisableUiHelperEvent) {
                this.setState({ show: false });
            }
        })
    }

    public componentWillUnmount() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    public render() {
        return this.state.show ? <div>Adding Some Options</div> : <></>;
    }
}