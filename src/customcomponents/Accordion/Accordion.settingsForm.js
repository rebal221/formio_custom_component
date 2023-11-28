import baseEditForm from "formiojs/components/_classes/component/Component.form";

export default (...extend) => {
  return baseEditForm(
    [
      {
        key: "display",
        components: [
          {
            key: "placeholder",
            ignore: true
          },
          {
            type: "textfield",
            input: true,
            label: "Label",
            key: "label",
            tooltip: "The label for the accordion component.",
            validate: {
              required: true
            }
          },
          {
            type: "textfield",
            input: true,
            label: "Default Label",
            key: "defaultLabel",
            tooltip: "The default label for the accordion component.",
            validate: {
              required: true
            }
          }
        ]
      },
      {
        key: "data",
        components: []
      },
      {
        key: "validation",
        components: []
      },
      {
        key: "api",
        components: []
      },
      {
        key: "conditional",
        components: []
      },
      {
        key: "logic",
        components: []
      }
    ],
    ...extend
  );
};
