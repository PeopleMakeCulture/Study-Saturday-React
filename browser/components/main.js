import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Student from './student'

export default class Main extends React.Component {

	constructor(){
		super()
		this.state = {
			students : []
		}
	}

	async componentDidMount(){
		try {
			const response = await axios.get('/student')
			// console.log('response', response)
			const students = response.data
			// console.log('students', students)
			this.setState({students : students})
		} catch (err) {
			conosole.log(err)
		}
	}

	render(){
		return (
			<div id='table'>
				<table>
					<thead>
						<tr>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Email Address</th>
						</tr>
					</thead>
					<tbody>
						{this.state.students.map(
							(student,i) => <Student key={i} student={student}/>
						)}
					</tbody>
				</table>
			</div>
			)
	}

}
	


				//this.state.students.map(student => <Student />)

  // async componentDidMount () {
  //   try {
  //     const res = await axios.get('/api/albums');
  //     const albums = res.data;
  //     this.setState({albums});
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }


  // selectAlbum(albumId){
  // 	axios.get(`/api/albums/${albumId}`)
  // 	.then(res => res.data)
  // 	.then(album => this.setState({selectedAlbum: album}))

  // 	this.setState({isSelected:true })
  // }