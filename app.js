class App extends React.Component {
    state = {
        comments: [
            { name: "", msg: "" }
        ]
    }
    
    changeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    changeMsg = (event) => {
        this.setState({
            msg: event.target.value
        })
    }

    keepComments = (event) => {
        event.preventDefault();
        let newComments = [...this.state.comments, this.state.name, this.state.msg]

        this.setState({
            comments: newComments
        })
    }

    render() {
        return (
            <div className="app">
                <h1 className="main">Say something</h1>

                <form>
                    <input className="form" type="text" id="tabName"
                    onChange={this.changeName}
                    value={this.state.name} />
                    <br/>

                    <textarea name="" className="form" type="text" id="tabmsg" 
                    onChange={this.changeMsg}
                    value={this.state.msg}
                    cols="30" rows="10"></textarea>
                    <br/>

                    <input onClick={this.keepComments}
                    className="form btn" type="submit" value="Comment"/>
                </form>
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.querySelector('#app'));


