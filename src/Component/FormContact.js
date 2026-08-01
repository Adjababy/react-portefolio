import React from "react";
import { Button, Form } from "react-bootstrap";
import {useForm,ValidationError} from '@formspree/react'
function FormContact() {
    const [state, handleSubmit] = useForm("xjvngkwp");
    if (state.succeeded) {
        return <p>Thanks your answer was send!</p>;
    }
    return (
        <Form className='form_control mt-4' onSubmit={handleSubmit}>
        <input input type="text" className="form-control form-control-lg" placeholder="FullName"></input>
        <ValidationError 
          prefix="FullName" 
          field="fullName"
          errors={state.errors}
        />
        <input className="form-control mt-3" placeholder="Email"
          id="email"
          type="email" 
          name="email"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <input type="text" className="form-control mt-3" placeholder="Subject"/>
        <ValidationError 
        prefix="Subject" 
        field="subject"
        errors={state.errors}
      />
        <textarea className="form-control mt-3"rows={10} placeholder="Message"
          id="message"
          name="message"
        /> 
        <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
        <Button type="submit" disabled={state.submitting}  className="btn btn-tertiary mt-3 ">Submit</Button>
        </Form>
    )
}
export default FormContact
