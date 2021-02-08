import React from 'react'
import Image from 'react-bootstrap/Image'



const Home =()=>{

        return(
            <div id="home">
                <h1>Welcome home!</h1>
                <Image src="./pictures/homeImage.jpg" className="responsiveH" fluid />
            </div>
        )
}

export default Home