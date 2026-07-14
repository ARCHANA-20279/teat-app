import axios from 'axios'
import React, { useState } from 'react'
import Nav from './Nav'

const Add = () => {
    const[input,changeInput]=useState({
        teamid:String,
        teamname:String,
        teamldname:String,
        lemail:String,
        lphone:String,
        clgname:String,
        noofmem:String,
        projecttitle:String,
        pstrack:String,
        technostack:String,
        mentname:String,
        regdate:String,
        tableno:String
               
    })
    const inputHandler=(event)=>{
        changeInput({...input,[event.target.name]:event.target.value})
    }
    const readValue=()=>{

         console.log(input)
         axios.post("http://localhost:3000/add-team",input).then(
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
                    name="teamid"
                    value={input.teamid}
                    onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <label htmlFor="" className="form-label">Teamname</label>
                    <input type="text" className="form-control"
                    name="teamname"
                    value={input.teamname}
                    onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <label htmlFor="" className="form-label">Teamleader</label>
                    <input type="text" className="form-control"
                    name="teamldname"
                    value={input.teamldname}
                    onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <label htmlFor="" className="form-label">Leaderemail</label>
                    <input type="email" className="form-control"
                    name="lemail"
                    value={input.lemail}
                    onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <label htmlFor="" className="form-label">LeaderPhone</label>
                    <input type="text" className="form-control"
                    name="lphone"
                    value={input.lphone}
                    onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <label htmlFor="" className="form-label">CollegeName</label>
                    <input type="text" className="form-control"
                    name="clgname"
                    value={input.clgname}
                    onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <label htmlFor="" className="form-label">Members</label>
                    <input type="text" className="form-control"
                    name="noofmem"
                    value={input.noofmem}
                    onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <label htmlFor="" className="form-label">Project</label>
                    <input type="text" className="form-control"
                    name="projecttitle"
                    value={input.projecttitle}
                    onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <label htmlFor="" className="form-label">Problem</label>
                    <input type="text" className="form-control"
                    name="pstrack"
                    value={input.pstrack}
                    onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <label htmlFor="" className="form-label">Technology</label>
                    <input type="text" className="form-control"
                    name="technostack"
                    value={input.technostack}
                    onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <label htmlFor="" className="form-label">Mentor</label>
                    <input type="text" className="form-control"
                    name="mentname"
                    value={input.mentname}
                    onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <label htmlFor="" className="form-label">Date</label>
                    <input type="text" className="form-control"
                    name="regdate"
                    value={input.regdate}
                    onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Table</label>
                    <input type="text" className="form-control"
                    name="tableno"
                    value={input.tableno}
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