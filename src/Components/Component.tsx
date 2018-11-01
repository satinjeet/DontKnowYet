import React from "react";
import { ComponentOptions } from "./ComponentOptions";
import { HelperStream } from './HelperStream';

export abstract class Component<P = any, S = any, SS = any> extends React.Component<P, S, SS> {

    protected subs: any;

    constructor(props: P, ctx: any) {
        super(props, ctx);
        this.subs = HelperStream.subscribe(() => {

        });
    }
    
    public render(): JSX.Element {
        return <>
            <ComponentOptions targetComponent={this} />
            {
                this.doRender()
            }
        </>
    }

    protected doRender(): JSX.Element {
        return <></>
    }
}