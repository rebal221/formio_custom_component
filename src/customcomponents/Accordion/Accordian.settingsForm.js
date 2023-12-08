import baseEditForm from "formiojs/components/_classes/component/Component.form";


export default (...extend) => {
    return baseEditForm([{
            key: "display",
            components: [{
                    key: "components",
                    type: "datagrid",
                    label: "Accordions",
                    weight: 50,
                    reorder: true,
                    components: [{
                            type: "textfield",
                            input: true,
                            key: "label",
                            label: "Label",
                        },
                        {
                            type: "textfield",
                            input: true,
                            key: "key",
                            label: "Key",
                            allowCalculateOverride: true,
                            calculateValue: {
                                _camelCase: [{
                                    var: "row.label",
                                }, ],
                            },
                        },
                    ],
                },
                {
                    weight: 1100,
                    type: "checkbox",
                    label: "Vertical Layout",
                    tooltip: "Make this field display in vertical orientation.",
                    key: "verticalLayout",
                    input: true,
                },
            ],
        },
        {
            key: "data",
            components: [],
        },
        {
            key: "validation",
            components: [],
        },
        {
            key: "api",
            components: [],
        },
        {
            key: "conditional",
            components: [],
        },
        {
            key: "logic",
            components: [],
        },
        ...extend,
    ]);
};