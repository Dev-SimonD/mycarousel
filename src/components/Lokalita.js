import React from 'react'
import gps from "../assets/gps.png"

export default function Lokalita(){
  return (
    <div style={{"backgroundColor":"#6ba5b4"}}>
        <div className='container lokalita'>
            <div className='d-flex justify-content-center'>
            <img id="gpsImg" src={gps} style={{"padding":"50px"}}/>
            </div>
            <h2>najit lokalitu</h2>
            <p>Stavte se a řekněte "ahoj" v některé z našich poboček.</p>
        </div>
        <form className='container'>
  <div class="form-group row">
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3" placeholder="Email"/>
    </div>
  </div>
  <div class="form-group row py-3">
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3" placeholder="Password"/>
    </div>
  </div>
 
  <div class="form-group row">
    <div class="col-sm-10" style={{"width":"100%"}}>
      <button type="submit" class="btn btn-primary">Sign in</button>
    </div>
  </div>
</form>
    </div>
  )
}
