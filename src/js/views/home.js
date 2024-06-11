import { useState, useEffect } from 'react';
import "../../styles/home.css";
import Card from '../component/Card.jsx';

export const Home = () => (
	const [contacts, setContacts] = useState([])
	useEffect (() => {
		fetch('https://playground.4geeks.com/contact/agendas/agenda-any', {
			method: 'POST',
		  })
		  .then((response) => response.json())
		  .then((data) => {
			console.log(data);
		  })
		  .catch((error) => console.error('Error creating user:', error));
		fetch ('https://playground.4geeks.com/contact/agendas/agenda-any')
		.then ((response) => response.jason())
		.then ((data) => setContacts(data.contacts))
	},[])
	return (
		<>
		{contacts && contacts.map((element, index) =>{
			return (
				<Card
				key = {index}
				name = {element.name}
				phone = {element.phone}
				email = {element.email}
				adress = {element.adress}
				/>
			)
		}) }
		</>
	)
);

export default Home; 
