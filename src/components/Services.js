import React from 'react'
import { NavDropdown, Image, Card, CardDeck } from 'react-bootstrap'

const Services=()=>{

        return(
                <div  id="service">
                    <div class ="introS">
                        <h4>
                        A properly designed and maintained roof should last 20 years or longer. The reality is that the average life of a new low sloped roof installation in the United States is less than 12 years!  Currently, in our country, there are literally hundreds of different roofing products, systems, manufacturers, etc. Each one claiming to be the best. It has been proven time and time again
                        that you must have the unbiased, professional representation of a roofing consultant to effectively manage your roofing dollars.
                        </h4>
                        <Image src="./pictures/line.png" className="line"/>
                        <h1>At The Browne Company, we provide the following services:</h1>

                    </div>
                    <div>
                        <br></br>
                        <CardDeck>
                            <Card>
                                <Card.Img variant="top" src="./pictures/inspect.jpg" />
                                <Card.Body>
                                <Card.Title>Inspection and Analysis</Card.Title>
                                <Card.Text>
                                Complete inspection and analysis of existing roofs and building envelopes, including a written report, drawings, photographs, and recommendations.
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted"></small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="./pictures/manage.jpg" />
                                <Card.Body>
                                <Card.Title>Inspection Services/Project Management/Quality Control</Card.Title>
                                <Card.Text>
                                Day-to-day administration of on-going roof construction projects, in-progress and final inspections of new roof installations, and making certain the job is done right
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted"></small>
                                </Card.Footer>
                            </Card>
        
                            <Card>
                                <Card.Img variant="top" src="./pictures/infa.jpg" />
                                <Card.Body>
                                <Card.Title> Infrared Thermography</Card.Title>
                                <Card.Text>
                                Infrared moisture testing of existing roofs.
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted"></small>
                                </Card.Footer>
                            </Card>
                            </CardDeck>
                            <br></br>
                            <CardDeck>
                            <Card>
                                <Card.Img variant="top" src="./pictures/spec.jpg" />
                                <Card.Body>
                                <Card.Title>Specification Writing</Card.Title>
                                <Card.Text>
                                Making certain that the roofing materials specified meet the needs of both the building structure and the building owner.
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted"></small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="./pictures/est.jpg"/>
                                <Card.Body>
                                <Card.Title> Budgeting and Cost Estimates.</Card.Title>
                                <Card.Text>
                                Cost projections, repair vs. replace, etc.
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted"></small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="./pictures/drone.jpg"/>
                                <Card.Body>
                                <Card.Title>Drone/Aerial Inspection Services</Card.Title>
                                <Card.Text>
                                Overhead inspection of roofs and building envelope issues
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted"></small>
                                </Card.Footer>
                            </Card>
                            </CardDeck>
                        
                                
                            
       
      
                        </div>
 

    
 </div>          
)
}

export default Services