class Content extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state = {accountNumber: ''}
    }
    handleChange(event) {
        console.log('Typed: ', event.target.value)
        this.setState({accountNumber: event.target.value.replace(/[^0-9]/ig, '')})
    }
}