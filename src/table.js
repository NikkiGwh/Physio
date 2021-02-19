import React from "react"

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const rows = props.jo.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    })



    return (
        <tbody>{rows}</tbody>
    )
}

const Table = (props) => {
    const penis = props.characterData
    const removeCharacter = props.removeCharacter

    return (
        <table>
            <TableHeader />
            <TableBody jo={penis} removeCharacter={removeCharacter} />
        </table>
    )

}

export default Table;