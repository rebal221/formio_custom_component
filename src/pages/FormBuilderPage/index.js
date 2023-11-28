import React, { useState } from 'react';
import { FormBuilder, Components } from '@formio/react';
import './style.css';
import components from "../../customcomponents/index";

Components.setComponents(components);

const FormBuilderPage = () => {
    const [formConfig, setFormConfig] = useState({
        display: 'form',
        components: [],
    });

    const onChange = (form) => {
        const filteredComponents = form.components.filter(
            (component) => Object.values(component).some((value) => value !== null && value !== undefined && value !== '')
        );
        setFormConfig({ ...form, components: filteredComponents });
    };
    return (
        <div className="form-builder-container">
            <div className="form-builder">
                <h2>Form Builder Page</h2>
                <FormBuilder
                    form={formConfig}
                    onChange={onChange}
                    options={{
                        builder: {
                            basic: {
                                components: {
                                    toggleCustomComp: true
                                }
                            },
                            advanced: false
                        }
                    }} />
            </div>
            <div className="form-config">
                <h3>Form Configuration</h3>
                <pre>{JSON.stringify(formConfig, null, 2)}</pre>
            </div>
        </div>
    );
};

export default FormBuilderPage;
