import * as React from 'react';

let className = "btn";

export interface IButtonProps {
    text: string;
    handleChange?: () => void
}

export interface IButtonState {
    text: string;
}

export default class Button extends React.Component<IButtonProps, IButtonState> {
  constructor(props: IButtonProps) {
    super(props);

    this.state = {
        text: 'click'
    }
  }

  /**
   * handleChange
   */
  public handleChange(e: React.MouseEvent<HTMLButtonElement>) {
        if(this.state.text === "click") {
            this.setState({text: "clickeado"})
            className = "btn"
        }
        else if(this.state.text === "clickeado") {
            className += " clickeado"
            this.setState({text: "click"})
        }
  }

  public render() {
    return (
    <button className={className} type="submit" onClick={e => this.handleChange(e)}>{this.state.text}</button>
    );
  }
}
