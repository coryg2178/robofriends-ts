import React, { Component, PropsWithChildren } from 'react';

interface IState {
  hasError: boolean;
}

class ErrorBoundry extends Component<PropsWithChildren, IState> {
  constructor(props: Object) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Ooops. That's no good!</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
