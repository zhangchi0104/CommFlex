import React from "react";
import { Steps } from "antd";
import { Layout } from "antd"
const { Step } = Steps;

interface IProps {
    current: number
    style?: React.CSSProperties
}

export default (props: IProps) => {
    return (

        <Steps current={props.current} labelPlacement="vertical" style={props.style}>
            <Step title="Info" />
            <Step title="Data" />
            <Step status="wait" title="Result" />
        </Steps>
    )
}