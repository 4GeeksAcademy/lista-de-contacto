import React from "react";

const ContactForm = () => {
    return (
  <>
      <htmlForm>
    <div className="row mb-3">
      <label htmlFor="inputEmail3" className="col-sm-2 col-htmlForm-label">Email</label>
      <div className="col-sm-10">
        <input type="email" className="htmlForm-control" id="inputEmail3"></input>
      </div>
    </div>
    <div className="row mb-3">
      <label htmlFor="inputPassword3" className="col-sm-2 col-htmlForm-label">Password</label>
      <div className="col-sm-10">
        <input type="password" className="htmlForm-control" id="inputPassword3"></input>
      </div>
    </div>
    <fieldset className="row mb-3">
      <legend className="col-htmlForm-label col-sm-2 pt-0">Radios</legend>
      <div className="col-sm-10">
        <div className="htmlForm-check">
          <input className="htmlForm-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked></input>
          <label className="htmlForm-check-label" htmlFor="gridRadios1">
            First radio
          </label>
        </div>
        <div className="htmlForm-check">
          <input className="htmlForm-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"></input>
          <label className="htmlForm-check-label" htmlFor="gridRadios2">
            Second radio
          </label>
        </div>
        <div className="htmlForm-check disabled">
          <input className="htmlForm-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled></input>
          <label className="htmlForm-check-label" htmlFor="gridRadios3">
            Third disabled radio
          </label>
        </div>
      </div>
    </fieldset>
    <div className="row mb-3">
      <div className="col-sm-10 offset-sm-2">
        <div className="htmlForm-check">
          <input className="htmlForm-check-input" type="checkbox" id="gridCheck1"></input>
          <label className="htmlForm-check-label" htmlFor="gridCheck1">
            Example checkbox
          </label>
        </div>
      </div>
    </div>
    <button type="submit" className="btn btn-primary">Sign in</button>
  </htmlForm>
  </>
    )
  };


  export default ContactForm;