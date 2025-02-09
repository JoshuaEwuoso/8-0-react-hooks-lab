import React, { useState } from "react";
import "./NewClient.css";

const NewClient = () => {
  const [client, setClient] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: ''
  })

  const handleChange = (event) => {
    const { id, value } = event.target
    setClient({ ...client, [id]: value })
  }

  return (
    <section className="new-client">
      <h4>New Client Info</h4>
      <div>
        <form>
          <label htmlFor="firstName">First Name</label>
          <input onChange={handleChange} type="text" id="firstName" />
          <label htmlFor="lastName">Last Name</label>
          <input onChange={handleChange} type="text" id="lastName" />
          <label htmlFor="phone">Telephone</label>
          <input onChange={handleChange} type="tel" id="phone" />
          <label htmlFor="email">Email</label>
          <input onChange={handleChange} type="email" id="email" />
          </form>
          <article>
            <h5>First Name: {client.firstName}</h5>
            <h5>Last Name: {client.lastName}</h5>
            <h5>Phone Number: {client.phone}</h5>
            <h5>Email Address: {client.email}</h5>
          </article>
        </div>
    </section>
  );
}

export default NewClient;
