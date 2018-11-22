import React from "react";
import { Component } from './Component';
import { HelperStream } from './HelperStream';
import { EnableUiHelperEvent, DisableUiHelperEvent } from '../events/ControlUiHelper.events';

/**
 * Todo think about a name
 */
export class ControlSwitch extends Component {

    public state: {
        enabled: boolean;
    } = {
        enabled: false
    }

    protected doRender() {
        return <>
            <input type="radio" name="enable_helper" value="yes" checked={this.state.enabled} onChange={() => {
                this.setState({ enabled: true })
            }}/> Enabled
            <input type="radio" name="enable_helper" value="no" checked={!this.state.enabled} onChange={() => {
                this.setState({ enabled: false })
            }}/> Disabled
        </>
    }

    public componentDidUpdate() {
        HelperStream.next(
            this.state.enabled ? new EnableUiHelperEvent(): new DisableUiHelperEvent()
        )
    }
}
