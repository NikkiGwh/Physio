import React from "react"

class Form extends React.Component {
    state = {
        name: "",
        job: "",
    }

    handleChanges = (evenst) => {
        const { name, value } = evenst.target

        this.setState({
            [name]: value,
        })
    }
    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState({
            name: "",
            job: ""
        })
    }

    render() {
        const { name, job } = this.state


        return (
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={name} onChange={this.handleChanges} />
                <label htmlFor="job">Job</label>
                <input type="text" name="job" id="job" value={job} onChange={this.handleChanges} />
                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>

        )

    }
}

export default Form