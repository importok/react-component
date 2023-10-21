import ImportOK from '@importok/javascript';
import React from 'react';

export default class ImportokWizard extends React.Component {
  static defaultProps = ImportOK.getDefaults();

  constructor(props) {
    super(props);
    this.elementRef = React.createRef();
    this.wizard = undefined;

    ImportOK.defineCustomElements();
  }

  componentDidMount() {
    if (!this.elementRef.current) return;

    if (this.wizard) {
      return;
    }

    this.wizard = ImportOK.add(
      this.elementRef.current,
      {
        ...this.props
      }
    );
  } 

  componentWillUnmount() {
    if (this.wizard) {
      this.wizard = undefined;
    }
  }

  render() {
    return React.createElement('div', {
      className: `ImportokWizardWrapper ${
          this.props.className ? this.props.className : ''
      }`.trim(),
      ref: this.elementRef,
    });
  }
}