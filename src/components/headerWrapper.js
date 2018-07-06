import React, { Component } from 'react';
import headerBar from './headerbar';

class HeaderWrapper extends Component {
    render () {
        return [
            <div className="header-wrapper">
                <h1 className="header-wrapper__title">Welcome to HOA Manager</h1>
                <p className="header-wrapper__subtitle">Please Login to Continue</p>
                
                
            </div>,
            headerBar(),
            this.props.children
        ]
    }
}
export default HeaderWrapper;