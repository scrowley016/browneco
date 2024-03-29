import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'

const About =()=>{

        return(
            <div id="about">
                <div>
                <h1>About Our Company</h1>
                <br></br>
                <p class="aboutP">
                Founded in 1994 by Gary Browne, THE BROWNE COMPANY Roofing and Waterproofing Consultants, Inc. specializes in investigations and analysis of existing roofs, building envelope inspections, budgeting and cost estimates, specification writing, project management, plan and specification review, and inspection services of on-going roof construction.  Mr. Browne has over thirty-five years’ experience in the commercial roofing industry and has extensive knowledge of many different types of roof systems (EPDM/Rubber, PVC, TPO, Hypalon, CSPE, Modified Bitumens, Built-Up, Sprayed-On Foam, Shingles, Tile, Coatings, etc.)  In addition, Mr. Browne has consulted on many masonry restoration and waterproofing projects.
                </p>
                <Image src="./pictures/line.png" className="line"/>
                <p class="aboutP">
                Well known in the Western New York construction community, Mr. Browne has looked atthousands of roofs in his career.  A professional member of the International Institute of Building Envelope Consultants (IIBEC), the National Roofing Contractors Association (NRCA), and the Construction Specifications Institute (CSI). He is an alumnus of the State University of New York at Albany (BA), Buffalo State College (MA Ed.), and Medaille College (MBA). Mr. Browne is also is a certified Construction Documents Technologist (CDT) through the Construction Specifications Institute (CSI).
                </p>
            </div>
            <br></br>
            <div id="carosel">
            <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./pictures/slide1.jpg"
                class="responsive"
              />
        
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./pictures/slide2.jpg"
                class="responsive"
              />
          
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./pictures/slide3.jpg"
                class="responsive"
              />
      
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./pictures/slide4.png"
                class="responsive"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./pictures/slide5.jpg"
                class="responsive"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./pictures/slide5.jpg"
                class="responsive"
              />
            </Carousel.Item>
          </Carousel>
          </div>
          </div>

        )
}

export default About