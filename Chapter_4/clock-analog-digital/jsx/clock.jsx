class Clock extends React.Component {
    render () {
        console.log('Rendering...')
        return <div>
            <AnalogDisplay time={this.state.currentTime}/>
            <DigitalDisplay time={this.state.currentTime}/>
        </div>
    }
}