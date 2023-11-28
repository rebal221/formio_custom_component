import React, { Component } from "react";
import ReactDOM from "react-dom";
import { ReactComponent } from '@formio/react';
import settingsForm from "./Accordion.settingsForm";

const AccordionCustomComp = class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.value || false
    };
  }

  toggleAccordion = () => {
    this.setState(
      prevState => ({ isOpen: !prevState.isOpen }),
      () => this.props.onChange(null, this.state.isOpen)
    );
  };

  render() {
    return (
      <div>
        <div onClick={this.toggleAccordion} style={{ cursor: "pointer" }}>
          Click me to toggle
        </div>
        {this.state.isOpen && (
          <div>
            {/* Your accordion content goes here */}
            Accordion Content
          </div>
        )}
      </div>
    );
  }
};

export default class Accordion extends ReactComponent {
  static get builderInfo() {
    return {
      title: "Accordion",
      icon: "square",
      group: "basic",
      documentation: "",
      weight: -10,
      schema: Accordion.schema()
    };
  }

  static schema() {
    return ReactComponent.schema({
      type: "accordionCustomComp",
      label: "Default Label"
    });
  }

  static editForm = settingsForm;

  attachReact(element) {
    return ReactDOM.render(
      <AccordionCustomComp
        component={this.component}
        value={this.dataValue}
        onChange={this.updateValue}
      />,
      element
    );
  }

  detachReact(element) {
    if (element) {
      ReactDOM.unmountComponentAtNode(element);
    }
  }
}
