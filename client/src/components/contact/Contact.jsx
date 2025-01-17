import { useState } from "react";

export default function Contact(){
  const [data,setData] = useState({
    name:"",
    email:"",
    message:""
  })


  const onChangeHandler = (e) =>{
    const name = e.target.name;
    const value = e.target.value;


    setData((oldData) => ({
      ...oldData,
      [name]:value
    }))
  }

  const onSubmitHandler = (e) =>{
    e.preventDefault();
    
  }

    return(
    <>
        <section id="contact" className="contact-section">
  <h2>Contact</h2>
  <div className="group">
    <div className="text">
Have a question or want to work together? Fill out the form below, and I’ll get back to you as soon as possible!
    </div>
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" onChange={onChangeHandler} name="name"/>
      <label htmlFor="email">Email</label>
      <input type="text" name="email" id="email"  onChange={onChangeHandler} />
      <label htmlFor="message">Message</label>
      <textarea id="message" cols={30} rows={10} defaultValue={""} name="message"  onChange={onChangeHandler}/>
      <button type="submit">Send Message</button>
    </form>
  </div>
</section>

    </>);
}