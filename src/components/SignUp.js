import React from "react";

function SignUp() {
  return (
    <div>
      {" "}
      <label htmlFor="fname">First name</label>
      <br />
      <div>
        <input type="text" placeholder="first name" />
      </div>{" "}
      <label htmlFor="lname">Last name</label>
      <br />
      <div>
        <input type="text" placeholder="last name" />
      </div>
      <label htmlFor="email">Email</label>
      <br />
      <div>
        <input type="email" placeholder="email" />
      </div>
      <label htmlFor="password">Password</label>
      <br />
      <div>
        <input type="password" placeholder="password" />
      </div>
      <div>
        <input type="submit" />
      </div>
    </div>
  );
}

export default SignUp;
