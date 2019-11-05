import React from 'react'

 function CoolButton() {
    return (
        <div style={buttons}>
            <button style={separacion} className='button is-rounded my-class is-warning is-small'>Submit</button>
            <button style={separacion} className="button is-rounded my-class is-danger is-small">Button 1</button>
            <button style={separacion} className="button is-small is-success">Button 2</button>
        </div>
    )
}


const buttons = {
    margin: '20px'
}
const separacion = {
    margin: '0 5px'
}

export default CoolButton
