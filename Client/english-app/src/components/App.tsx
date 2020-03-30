import React from 'react';
import '../App.css';
import Nav from "./Nav";
import Link from "./Link";
import axios from "axios"
import { IPost } from "../IPost";
import Form from './Form';
import Button from './Button';


export interface IAppProps {
}

export interface IAppState {
    Posts: IPost[]
}

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
        Posts: []
    }
  }

  public render() {

    this.callGet()

    return (
      <div className="App">
        <Nav>
          <Link url="https://www.youtube.com" title="fisrt link"/>
          <Link url="https://www.youtube.com" title="second link"/>
          <Link url="https://www.youtube.com" title="third link"/>
        </Nav>
        <Form>
          <Button text="Submit"></Button>
        </Form>
      </div>
    );
  }

  callGet() {
    axios.get('https://jsonplaceholder.typicode.com/posts/5/comments')
    .then( Response =>  this.setState({Posts: Response.data}))
    .catch( error => console.error(error))
}

}
