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

}