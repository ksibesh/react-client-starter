import React from 'react';

class CoreLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1>This is core layout, do your layout styling here.</h1>
        <div className="content-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default CoreLayout;
