import React from 'react';

import New from '../New';
import Popular from '../Popular';

function withWrapper(Component) {
  class Wrapper extends React.Component {
    render() {
      if (this.props.views < 100) {
        return (
          <New>
            <Component {...this.props} />
          </New>
        );
      }
      if (this.props.views > 1000) {
        return (
          <Popular>
            <Component {...this.props} />
          </Popular>
        );
      }
      return <Component {...this.props} />;
    }
  }
  const componentName = Component.displayName || Component.name || 'Component';
  Wrapper.displayName = `Wrapped${componentName}`;

  return Wrapper;
}

export default withWrapper;
