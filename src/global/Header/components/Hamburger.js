import React from 'react';


class Hamburger extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: this.props.status
        }
    }

    render() {
        const { status } = this.state;

        return (
            <div>

            </div>
        )
    }
}

export default Hamburger