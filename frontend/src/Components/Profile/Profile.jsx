import { Avatar } from '@mantine/core'
import React from 'react'


export default function Profile() {


   const dummy = {
       name: "Sri Susmitha",
       email: "srisusmithagedela@gmail.com",
       id: "7569479528",
       avatar: "https://github.com/Susmitha40047/susmittha-url-shortener-dev-example"
   }


 return (
   <div>
     <Avatar src={dummy.avatar} />
     <h2>{dummy.name}</h2>
     <p>{dummy.email}</p>
     <p>ID: {dummy.id}</p>
   </div>
 )
}

