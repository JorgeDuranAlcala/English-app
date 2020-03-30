import * as React from 'react';

export interface IFormProps {
}

export interface IFormState {
    value: string;
}

export default class Form extends React.Component<IFormProps, IFormState> {
  constructor(props: IFormProps) {
    super(props);

    this.state = {
        value: ''
    }
  }

  public render() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-12">
                            { (this.state.value.length > 2) ? <div className="alert alert-danger">{this.state.value}</div> : ''  }
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h3>Palindrom Word Checker</h3>
                        </div>
                        <div className="card-body">
                        <form className="form" onSubmit={e => this.submitHandlerEvent(e)}>
                            <div className="form-group">
                                <input className="form-control" value={this.state.value}  type="text" onChange={e => this.changeHandler(e)} placeholder="ingrese un numero"/>
                            </div>
                            <div className="form-group d-flex justify-content-center">
                                {this.props.children}
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }

  changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({value: event.target.value})
  }

  submitHandlerEvent(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        
  }

}
