import { Avatar ,Stack } from '@mantine/core'
import React from 'react'


export default function Profile() {


   const dummy = {
       name: "Sri Susmitha",
       email: "srisusmithagedela@gmail.com",
       id: "7569479528",
       avatar: "https://avatars.githubusercontent.com/u/1234567890?v=4"
   }


 return (
        <div>
         <Stack h={300} bg="var(--mantine-color-body)" align="center" justify="center" gap="md"> 
        <Avatar src={dummy.avatar} size="xl" />
        <h2>{dummy.name}</h2>
        <p>{dummy.email}</p>
        <p>ID: {dummy.id}</p>
    </Stack>
    </div>
 )
}

