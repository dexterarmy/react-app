import React from "react";

class Errorboundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>SOmething went wrong</h1>;
    }
    return this.props.children;
  }
}

export default Errorboundary;
