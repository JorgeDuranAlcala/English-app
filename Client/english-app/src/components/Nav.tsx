import * as React from 'react';

export interface INavProps {
}

export interface INavState {
}


export default class Nav extends React.Component<INavProps, INavState> {
  constructor(props: INavProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <nav className="nav">
          <ul>
              {this.props.children}
          </ul>
      </nav>
    );
  }
}
