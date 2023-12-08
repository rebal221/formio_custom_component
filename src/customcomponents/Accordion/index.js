// class Test extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         sssdddd
//       </div>
//     );
//   }

// }

// class DnDTest extends NestedComponent {
//   static get builderInfo() {
//     return {
//       title: "Accordion",
//       icon: "square",
//       group: "basic",
//       documentation: "",
//       weight: -10,
//       schema: Accordion.schema(),
//     };
//   }

//   static schema() {
//     return ReactComponent.schema({
//       type: "test",
//       label: "Default",
//       components: [],
//     });
//   }

//   attachReact(element) {
//     return ReactDOM.render(
//       <Test />,
//       element
//     );
//   }
// } 
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { ReactComponent } from "@formio/react";
import settingsForm from "./Accordian.settingsForm";
import NestedComponent from 'formiojs/components/_classes/nested/NestedComponent';
import { Components } from "formiojs";
import Field from 'formiojs/components/fieldset/Fieldset'
const panel = Components.components.field
class AccordionCustomComp extends Component {
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
              <span className="arrow">
                {this.state.activeAccordionIndex === index ? "▼" : "►"}
              </span>
              {accordion.label}
            </div>
            {this.state.activeAccordionIndex === index && (
              <div className="accordion-ans">
                {/* {Field} */}
              </div>
            )}
            <button
              onClick={() => {
                console.log();
              }}
            >
              sssssss
            </button>
          </div>
        ))}
      </div>
    );
  }
}

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
      type: "accordion",
      label: "Default Label",
      components: [ 
        {
          type: "nestedComponent",
          key: "nestedComponentKey",
          label: "Nested Component",
          // schema: panel.schema(),
          components: [],
        },
      ],
    });
  }

  static editForm = settingsForm;

  attachReact(element) {
    return ReactDOM.render(
      <AccordionCustomComp
        // test={NestedComponent} 
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