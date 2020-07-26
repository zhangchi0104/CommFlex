import  React from 'react'
import { Card, Popover, Radio} from 'antd'
import { createFromIconfontCN } from '@ant-design/icons';
const {Meta} = Card;
interface IState {
   completed: Boolean; 
}
interface IProps {
    img: JSX.Element
    title: string
    description: string
}


const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1967146_qjx0kkkzhwl.js',
});
class RegistrationCard extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            completed: false
        }
    }
    render() {
        
    const actions = this.state.completed ? [<IconFont type="icon-success" style={{fontSize: 20}}/>] : undefined;
        return (
            <Popover placement="bottom" title="Completed ?" content={this.renderPopOverCard()}>
                <Card cover={this.props.img} style={{width: 240}} actions={actions}>
                    <Meta title={this.props.title}  description={this.props.description}  />
                </Card>
            </Popover>
        )
    }
    renderPopOverCard() {
        return (
            <Radio.Group onChange={e => {
                this.setState({completed: e.target.value})
            } } value={this.state.completed}>
                <Radio value={true}>Yes</Radio>
                <Radio value={false}>No</Radio>
            </Radio.Group> 
        )
    }

}
export default RegistrationCard;