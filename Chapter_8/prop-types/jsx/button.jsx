class Button extends React.Component {
    render() {
        return <button className="btn">{this.props.buttonLabel}</button>
    }
}

Button.defaultProps = {buttonLabel: 'Submit'}

Button.propTypes = {
    handler: PropTypes.fun.isRequired,
}