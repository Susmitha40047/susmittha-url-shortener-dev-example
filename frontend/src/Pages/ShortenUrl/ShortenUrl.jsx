import React, { useState } from 'react'
import Response from '../../Components/UrlShortener/Response'
import Input from '../../Components/UrlShortener/Input'


export default function ShortenUrl() {
 const [response,setResponse] = useState(null)


 return (
   <div>
     {
       response ? <Response response={response} /> : <Input setResponse={setResponse} />
     }
   </div>
 )
}
