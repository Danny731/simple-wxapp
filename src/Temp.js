import React from 'react'

class Temp extends React.Component {

    render() {
        return <div>
            <span className="temp-value">{ this.props.value }</span>
            <span className="temp-unit">{ this.props.unit } </span>
        </div>
    }

}

Temp.defaultProps = {
    value: 0,
    unit: 'c'
}

export default Temp