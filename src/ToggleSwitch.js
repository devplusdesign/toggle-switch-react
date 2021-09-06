import React from 'react';

class ToggleSwitch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.setState({isChecked: !this.state.isChecked});
    }

    componentDidUpdate() {
        console.log('checkbox status: ',this.state.isChecked);
    }

    render() {
        return (
            <div>
                <label>
                    <span className="label-text">
                        {this.props.children}
                    </span>
                    <input 
                        type="checkbox" 
                        name={this.props.name} 
                        id={this.props.name}
                        checked={this.state.isChecked}
                        onChange={this.handleChange}
                        className={`visuallyhidden toggle-checkbox ${this.state.isChecked ? 'toggle-checkbox--checked':''}`}
                    />
                    <span className="toggle-switch-container">
                        <span
                            className="toggle-switch"
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