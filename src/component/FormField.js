import React, { Component } from 'react'

function FormField(props) {
    return (
        <div style={contForm}>
            <div className="field">
                <label className={props.label}>{props.label}</label>
                <div className="control">
                    <input className="input" type={props.type} placeholder={props.placeholder} />
                </div>
            </div>

        </div>
    )
}

const contForm = {
    width: '90%',
    margin: '10px 20px'
}

export default FormField;
