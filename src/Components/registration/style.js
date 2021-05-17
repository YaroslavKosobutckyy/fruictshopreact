import styled from 'styled-components';

export const Wrapper = styled.div`
body{
	padding:0 80px;
	margin:0;
}
form{
	display: flex;
	flex-direction: column;
	width: 35%;
	margin: 0 auto;
}
 
#submit, button{
	background: #0062cc;
 	width: 100%;
 	border: none;
 	padding: 10px;
 	font-size: 18px;
 	font-weight: 600;
 	border-radius: 5px;
 	margin-top: 10px;
}
 #submit:hover, button:hover{
 	background-color: #545b62;
 	cursor: pointer; 
}
 input:invalid{
 	border:1px solid red;
}
`;

