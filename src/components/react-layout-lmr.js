import './style.scss';
import React,{Children,cloneElement,PureComponent,PropTypes} from 'react';
import classNames from 'classnames';

export default class extends PureComponent{
  static propTypes = {
    className:PropTypes.string,
  };

  getProps(inProps,inIndex){
    return !inProps.width  ? {
        'className':classNames('flex-col',inProps.className)
      }: {
      style:{
        width:inProps.width
      }
    };
  }

  render(){
    const {children,className,...props} = this.props;
    const length = children.length;
    return (
      <div {...props} className={classNames('react-layout-lmr',this.props.className)}>
        {
          Children.map(children,(elem,index)=>{
            return cloneElement(elem, this.getProps(elem.props,index));
          })
        }
      </div>
    );
  }
}
