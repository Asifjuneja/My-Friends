import React from 'react';
import Geeks from './geeks';

const CardList = ({geeksdata}) =>{
const geeksArray = geeksdata.map((user,i)=>
{
   return (<Geeks 
   	key={i}
   	 id={geeksdata[i].id} 
   	 name={geeksdata[i].name}
   	  email={geeksdata[i].email} 
   	  />); 
})
return(
<div>
		 {geeksArray}
</div>  
);
}

export default CardList;