import React from "react";
import { ComponentOptions } from "./ComponentOptions";
import { HelperStream } from './HelperStream';

export abstract class Component<P = any, S = any, SS = any> extends React.Component<P, S, SS> {

    protected subs: any;

    constructor(props: P, ctx: any) {
        super(props, ctx);
    }
    
    public render(): JSX.Element {
        return <>
            <span onMouseEnter={() => {
                console.log('Evntered')
            }} onMouseLeave={() => {
                console.log('Left');
            }}>
                <ComponentOptions targetComponent={this} />

                {
                    this.doRender()
                }
            </span>
        </>
    }

    protected doRender(): JSX.Element {
        return <></>
    }
}