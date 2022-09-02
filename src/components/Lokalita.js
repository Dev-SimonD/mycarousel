import React from 'react'
import gps from "../assets/gps.png"

export default function Lokalita(){
  return (
    <div style={{"backgroundColor":"#6ba5b4"}}>
        <div className='container lokalita'>
            
            <div className='d-flex justify-content-center'>
            <img id="gpsImg" src={gps} style={{"padding":"50px"}}/>
            </div>
            
            <div>
            <h1 id='najitLokalitu'>najit lokalitu.</h1>
            <h4 className='pb-4'>Stavte se a řekněte "ahoj" v některé z našich poboček.</h4>
        
        <form className='container'>
            <div class="form-group row">
                <div >
                <input
                type="email"
                class="form-control"
                id="inputEmail3"
                style={{"height":"60px"}}
                placeholder="PSČ / město"/>
                </div>
            </div>
            <div class="form-group row py-3">
                <div>
                <input
                type="password"
                class="form-control" 
                id="inputPassword3" 
                style={{"height":"60px"}} 
                placeholder="obor"/>
                </div>
            </div>
            <div class="form-group row">
                <div style={{"width":"100%"}}>
                <button
                    type="submit" 
                    id="btnHledej" 
                    class="btn btn-primary">
                    hledat
                    </button>
                </div>
            </div>
</form>

</div>
</div>
    </div>
  )
}
