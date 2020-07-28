import React from 'react';
import { RingProgress } from '@ant-design/charts';
interface IProps {
  percent: number
}
export default (props: IProps) => {
  const config = { 
    width: 63,
    height:63,
    percent: props.percent,
    color: ['#30BF78', '#E8EDF3'],
  };
  return <RingProgress {...config} />;
};