import React, { Component } from "react";
import ReactDOM from "react-dom";
import { ReactComponent } from "@formio/react";
import settingsForm from "./Accordion.settingsForm";

const AccordionCustomComp = class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeAccordionIndex: -1,
    };
  }

  toggleAccordion = (index) => {
    this.setState((prevState) => ({
      activeAccordionIndex: prevState.activeAccordionIndex === index ? -1 : index,
    }));
  };

  render() {
    return (
      <div>
        {this.props.component.components.map((accordion, index) => (
          <div key={index}>
            <div
              onClick={() => this.toggleAccordion(index)}
              className={`accordion-prim ${this.state.activeAccordionIndex === index ? "open" : ""}`}
              style={{ cursor: "pointer" }}
            >
              <span className="arrow">{this.state.activeAccordionIndex === index ? "▼" : "►"}</span>
              {accordion.label}
            </div>
            {this.state.activeAccordionIndex === index && (
              <div className="accordion-ans">
                Accordion Content
                {'&&&&&&&&&&&&'}
              </div>
            )}
          </div>
        ))}
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
      schema: Accordion.schema(),
    };
  }

  static schema() {
    return ReactComponent.schema({
      type: "accordionCustomComp",
      label: "Default Label",
      components: [
        {
          type: "container",
          key: "components",
          components: [],
        },
      ],
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
