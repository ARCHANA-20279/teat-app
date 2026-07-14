import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Nav from './Nav'

const View = () => {


    const [data,changeData]=useState([])
    const fetchData=()=>{

        axios.post("http://localhost:3000/view-team").then(
           
            (response)=>{
                    console.log(response.data)

                changeData(response.data)
            }
        ).catch()
    }
   useEffect(() => {
    fetchData()
}, [])
  return (
    <div>
        <Nav />
         <div className="container">
                <div className="row">
                    <div className="col-12">

                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Teamid</th>
                                    <th>Teamname</th>
                                    <th>Teamleader</th>
                                    <th>Leaderemail</th>
                                    <th>LeaderPhone </th>
                                    <th>CollageNmae</th>
                                    <th>Members</th>
                                    <th>Project</th>
                                    <th>Problem</th>
                                    <th>Technology</th>
                                    <th>Mentor</th>
                                    <th>Date</th>
                                    <th>Table</th>
                                </tr>
                            </thead>

                            <tbody>
                                {data.map((value, index) => (
                                    <tr key={index}>
                                        <td>{value.teamid}</td>
                                        <td>{value.teamname}</td>
                                        <td>{value.teamldname}</td>
                                        <td>{value.lemail}</td>
                                        <td>{value.lphone}</td>
                                        <td>{value.clgname}</td>
                                        <td>{value.noofmem}</td>
                                        <td>{value.projecttitle}</td>
                                        <td>{value.pstrack}</td>
                                        <td>{value.technostack}</td>
                                        <td>{value.mentname}</td>
                                        <td>{value.regdate}</td>
                                        <td>{value.tableno}</td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>

                    </div>
                </div>
            </div>
        </div>
  
  )
}

export default View