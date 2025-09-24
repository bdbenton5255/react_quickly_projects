class Content extends React.Component {
    constructor(props) {
        super(props)
        this.handleRadio = this.handleRadio.bind(this)
        this.handleCheckbox = this.handleCheckbox.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSelectChange = this.handleSelectChange.bind(this)
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
        this.state = {
            description: `With the right pattern, applications will be more scalable and easier to maintain. If you aspire one day to become a Node.js architect (or maybe you're already one and want to extend your knowledge), this presentation is for you.`,
            radioGroup: {
                angular: false,
                react: true,
                polymer: false
            },
            checkboxGroup: {
                node: false,
                react: true,
                express: false,
                mongodb: false
            },
            selectedValue: 'node'
        }
    }
    handleRadio(event) {
        let obj = {}
        obj[event.target.value] = event.target.checked
        this.setState({radioGroup: obj})
    }
    handleCheckbox(event) {
        let obj = this.state.checkboxGroup
        obj[event.target.value] = event.target.checked
        this.setState({checkboxGroup: obj})
    }
    handleChange(event) {
        console.log('onChange event: ', event.target.value, event.target.checked)
    }
    handleInput(event) {
        console.log('onInput event: ', event.target.value, event.target.checked)
    }
    handleFirstNameChange(event) {
        this.setState({firstName: event.target.value})
    }
    handleSubmit(event) {
        console.log(event.target.value, event.target.checked)
        fetch(this.props['data-url'], {method: 'POST', body: JSON.stringify(this.state)})
            .then((response)=>{return response.json()})
            .then((data)=>{console.log('Submitted ', data)})
    }
    handleSelectChange(event) {
        this.setState({selectedValue: event.target.value})
        console.log(event.target.value, event.target.selected)
    }
    render() {
        return <div className="container">
            <form onSubmit={this.handleSubmit}>

                <h2>input: text</h2>
                <input type="text" name="new-book-title" defaultValue="Node: The Best Parts" />
                <hr/>

                

            </form>
        </div>
    }
}