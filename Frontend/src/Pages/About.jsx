import axios from 'axios'
import React, { useEffect } from 'react'
import API from '../services/api'

const About = () => {

    const [About, setAbout] = React.useState("")

    useEffect(() => {
        API.get('/about')
        .then(response => {
            setAbout(response.data);
        })
    },[])

  return (
    <div>
        THe Fonrtend
            =--


        {About}</div>
  )
}

export default About