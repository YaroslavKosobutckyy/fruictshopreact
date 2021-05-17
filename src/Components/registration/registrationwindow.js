import React from 'react';
import { Wrapper } from './style'


const RegistrationWindow = () => (
<>
  <Wrapper>
        <h1>Registration</h1>
 		<hr />
 	    <form action="#">
 		 <label for='name'>Name
        </label>
 		<input type="text" name="name" id="name" placeholder="name" required />
 		<label for="last-name">Last name
        </label>
 		<input type="text" name="last-name" id="last-name" placeholder="last-name" />

 		<label for="login">Login
         </label>
 		<input type="text" name="login" id="login" placeholder="login" />

 		<label for="email">Email
         </label>
 		<input type="email" name="email" id="email" placeholder="email@gmail.com" required />

 		<label for="password">Password
        </label>
 		<input type="password" name="password" id="password" required />
 		<input type="submit" name="submit" id="submit" value="submit" />  
 		<button id="cancel">Cancel</button>
 			
 	</form>

   </Wrapper>
 
 </>
)

export default RegistrationWindow;
