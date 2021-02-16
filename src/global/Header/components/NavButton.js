import React from "react"
import ScrollTo from 'react-scroll-into-view'

class NavButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonName: this.props.children,
            buttonStyle: {
                // color: 'white',
                // fontSize: '25px',
                // transition: 'all .15s ease-in-out',
                // position: 'relative',
                // left: '0px',
                // fontFamily: "'Major Mono Display', monospace",
                // cursor: 'pointer',
                // boxShadow: '1px 1px 1px black'

            },
            navLocation: this.props.navLocation,
            buttonType: this.props.buttonType,
            buttonClass: 'nav-inactive'
        }

    }

    onMouseOver = () => {
        this.setState({ buttonClass: 'nav-active' })
    }

    onMouseLeave = () => {
        this.setState({ buttonClass: 'nav-inactive' })
    }

    render() {
        const { buttonStyle, navLocation, buttonName, buttonClass } = this.state;

        return (
            <div onMouseEnter={this.onMouseOver} onMouseLeave={this.onMouseLeave} style={buttonStyle} className={buttonClass}>
                {this.props.buttonType = "section" ? <ScrollTo alignToTop selector={`#${navLocation}`}>
                    <div className="nav-button-name">{buttonName}</div>
                </ScrollTo>
                    :
                    <a className="nav-button-name" href={navLocation}></a>}

            </div>
        )
    }


}

export default NavButton;