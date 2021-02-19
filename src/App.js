import React from 'react'
import Table from "./table"
import Form from "./Form"



class App extends React.Component {

    state = {
        characters: [],
        data: []
    }
    removeCharacter = (index) => {
        const chars = this.state.characters
        this.setState({
            characters: chars.filter((c, i) => {
                return i !== index
            })
        })
    }

    handleSubmit = (char) => {
        this.setState({
            characters: [...this.state.characters, char]
        })
    }

    componentDidMount() {
        const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'
        fetch(url)
            .then((result) => result.json())
            .then((result) => {

                this.setState({
                    characters: result.map((entry, index) =>{
                        return {
                            name: entry,
                            job: entry
                        }
                    }),
                    data: result
                })
            })
    }

    render() {
        const characters = this.state.characters
        return (
            <div className="container">
                <Table characterData={characters} removeCharacter={this.removeCharacter} />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}
export default App