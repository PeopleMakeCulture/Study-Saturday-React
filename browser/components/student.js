import React from 'react'
import ReactDOM from 'react-dom'

const Student = (props) => {
	const student = props.student
	return (
		<tr>
			<td>{student.firstName}</td>
			<td>{student.lastName}</td>
			<td>{student.email}</td>
		</tr>
	)
}

export default Student 