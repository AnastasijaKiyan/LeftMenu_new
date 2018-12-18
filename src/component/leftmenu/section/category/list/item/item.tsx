import React from "react";
import { IState } from "../../../../../../type/IState";

interface IProps {
  name: string
}

export default class Item extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <div className="leftmenu-item">
        <div className="leftmenu-item-text">{this.props.name}</div>
        <div className="leftmenu-item-gradient"></div>
      </div>
    );
  }
}