import axios from 'axios'
import React, { useState } from 'react'
import Nav from './Nav'

const Add = () => {
    const[input,changeInput]=useState({
                "Teamid":"",
                "Teamname":"",
                "Teamleader":"",
                "Leaderemail":"",
                "LeaderPhone":"",
                "CollegeName":"",
                "Members":"",
                "Project":"",
                "Problem":"",
                "Technology":"",
                "Mentor":"",
                "Date":"",
                "Table":""
               
    })
    const inputHandler=(event)=>{
        changeInput({...input,[event.target.name]:event.target.value})
    }
    const readValue=()=>{

         console.log(input)
         axios.get("http://localhost:3000/add-course").then(
            (response)=>{response.input}
         ).catch()
    }
  return (
    <div>
        <Nav />

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Teamid</label>
                    <input type="text" className="form-control"
                    name="Teamid"
                    value={input.Teamid}
                    onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <label htmlFor="" className="form-label">Teamname</label>
                    <input type="text" className="form-control"
                    name="Teamname"
                    value={input.Teamname}
                    onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <label htmlFor="" className="form-label">Teamleader</label>
                    <input type="text" className="form-control"
                    name="Teamleader"
                    value={input.Teamleader}
                    onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <label htmlFor="" className="form-label">Leaderemail</label>
                    <input type="text" className="form-control"
                    name="Leaderemial"
                    value={input.Leaderemail}
                    onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <label htmlFor="" className="form-label">LeaderPhone</label>
                    <input type="text" className="form-control"
                    name="LeaderPhone"
                    value={input.LeaderPhone}
                    onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <label htmlFor="" className="form-label">CollegeName</label>
                    <input type="text" className="form-control"
                    name="CollegeName"
                    value={input.CollegeName}
                    onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <label htmlFor="" className="form-label">Members</label>
                    <input type="text" className="form-control"
                    name="Members"
                    value={input.Members}
                    onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <label htmlFor="" className="form-label">Project</label>
                    <input type="text" className="form-control"
                    name="Project"
                    value={input.Project}
                    onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <label htmlFor="" className="form-label">Problem</label>
                    <input type="text" className="form-control"
                    name="Problem"
                    value={input.Problem}
                    onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <label htmlFor="" className="form-label">Technology</label>
                    <input type="text" className="form-control"
                    name="Technology"
                    value={input.Technology}
                    onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <label htmlFor="" className="form-label">Mentor</label>
                    <input type="text" className="form-control"
                    name="Mentor"
                    value={input.Mentor}
                    onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <label htmlFor="" className="form-label">Date</label>
                    <input type="text" className="form-control"
                    name="Date"
                    value={input.Date}
                    onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Table</label>
                    <input type="text" className="form-control"
                    name="Table"
                    value={input.Table}
                    onChange={inputHandler} />

                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-success"onClick={readValue}>submit</button>
                </div>
            </div>
        </div>
    </div>
</div>


    </div>
  )
}

export default Add