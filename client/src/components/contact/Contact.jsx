import { useState } from "react";
import { requsterApi } from "../../service/requester";

export default function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });


  const [error, setError] = useState(false);
  const [successModal,setSuccefulModal] = useState(false);

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((oldData) => ({
      ...oldData,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await requsterApi.post(data);
      if(res){
        setSuccefulModal(true);
        e.target.reset();
      }


      setTimeout(() => {
        setSuccefulModal(false);
      },4000)
        
    } catch (err) {
      setError(true)
    } 
  };

  return (
    <>
    {successModal ? 
    <div className="success-message"> 
    <i className="fas fa-check-circle"></i>
    <h1>Success!</h1> <p>You succefully send a message</p></div>
    :""}
    {error ?  <div className="error-message">
    <span className="error-icon">⚠️</span>
    Your message could not be sent. Please try again later!
</div>:""}
   <section id="contact" className="contact-section">
    <h2>Contact</h2>
    <div className="group">
      <div className="text">
        I'd love to hear from you!
        Whether you have a question, a collaboration idea, feel free to drop me a message.
        You can reach out to me directly with email at todorovradoslav18@gmail.com.
        Looking forward to connecting with you! 
      </div>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          onChange={onChangeHandler}
          name="name"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          onChange={onChangeHandler}
          required
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          cols={30}
          rows={10}
          defaultValue={""}
          name="message"
          onChange={onChangeHandler}
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  </section> 
    </>
  );
}
