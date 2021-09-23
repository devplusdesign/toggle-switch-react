import React from 'react';

class ToggleSwitch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    handleChange() {
        this.setState({isChecked: !this.state.isChecked});
    }

    handleKeyUp(e) {
        if (e.keyCode===13 || e.keyCode===32) {
            this.setState({isChecked: !this.state.isChecked});
        }
    }

    componentDidUpdate() {
        console.log('checkbox status: ',this.state.isChecked);
    }

    render() {
        return (
            <div>
                <label>
                    <span className="label">
                        <span className="label-text" id="label-text">
                            {this.props.text}
                        </span>
                        <span className="label-details" id="label-details">
                            {this.props.details}
                        </span>
                    </span>

                    <input 
                        type="checkbox" 
                        name={this.props.name} 
                        id={this.props.name}
                        checked={this.state.isChecked}
                        onChange={this.handleChange}
                        className={`visuallyhidden toggle-checkbox ${this.state.isChecked ? 'toggle-checkbox--checked':''}`}
                        aria-labelledby="label-text"
                        aria-describedby="label-details"
                    />
                    <span className="toggle-switch-container">
                        <span
                            className="toggle-switch"
                            tabIndex="0"
                            onKeyUp={this.handleKeyUp}
                        ></span>
                        <span className="toggle-text">
                            {this.state.isChecked ? 'ON' : 'OFF'}
                        </span>
                    </span>
                </label>
            </div>
        );
    }
}

export default ToggleSwitch;