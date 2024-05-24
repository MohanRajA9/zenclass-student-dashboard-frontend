import { Button, Card, CardContent } from "@mui/material";
import { useEffect, useState } from "react";
import "./capstone.css";
export function Capstone() {
    const [frontEndSourceURL, setFrontEndSourceURL] = useState("");
    const [frontEndDeploymentURL, setFrontEndDeploymentURL] = useState("");
    const [backEndSourceURL, setBackEndSourceURL] = useState("");
    const [backEndDeploymentURL, setBackEndDeploymentURL] = useState("");

    const onFrontEndSourceChange = (e) => {
        setFrontEndSourceURL(e.target.value);
    }
    const onFrontEndDeploymentURLChange = (e) => {
        setFrontEndDeploymentURL(e.target.value);
    }
    const onBackEndSourceChange = (e) => {
        setBackEndSourceURL(e.target.value);
    }
    const onBackEndDeploymentURLChange = (e) => {
        setBackEndDeploymentURL(e.target.value);
    }
    return (
        <div className="capstoneContainer" >
            <div className="dashboardCardContainer" >
                <div>
                    <Card className="dashBoardcard" >
                        <CardContent className="dashBoardCardContent" >
                            <div>
                                <h4>CAPSTONE PROJECT</h4>
                                <h3>Zen Class Student Dashboard</h3>
                            </div>
                            <div>
                                <img src={`./Assets/capstone.png`} alt="" />
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="col-lg-12">
                    <Card className="dashBoardcard" >
                        <CardContent className="dashBoardCardContent" >
                            <div>
                                <h3>Description:</h3>
                                <p>To identify and implement the Capstone project as the title given below by meeting all the necessary requirements.</p>
                                <p><b>Task Title: Zen class student dashboard</b></p>
                                <p><b>Any specifications on the design?</b></p>
                                <ul>
                                    <li>Front-end: Reactjs</li>
                                    <li>Back-end: Nodejs</li>
                                    <li>Database: MongoDB</li>
                                </ul>
                                <p><b>Requirements:</b></p>
                                <ul>
                                    <li>The project should achieve the CODE QUALITY</li>
                                    <li>Use fonts/icons if it’s required in the design.</li>
                                    <li>The use of various charts is required in the design.</li>
                                    <li>The use of bootstrap/ material CSS is required in the design</li>
                                </ul>
                                <p><b>How do I submit my work?</b></p>
                                <ul>
                                    <li>Push all your work files to GitHub in two different repositories as given below.</li>
                                    <li>Front-end repo name project-name-frontend.</li>
                                    <li>Back-end repo name project-name-backend.</li>
                                    <li>Deploy your front-end application on Netlify(https://www.netlify.com) and back-end application on Render(https://render.com/).</li>
                                </ul>
                                <Card className="submissionCard" >
                                    <div>Capstone Submission</div>
                                    <br/>
                                    <form className="taskSubmissionForm" >
                                        <div>
                                            <label>Front End Source Code URL:</label>
                                            <input id="frontEndSourceURL" type="text" onChange={(e) => onFrontEndSourceChange(e)} value={frontEndSourceURL} />
                                        </div>
                                        <div>
                                            <label>Front End Deployment URL:</label>
                                            <input id="frontEnddeployedURL" type="text" onChange={(e) => onFrontEndDeploymentURLChange(e)} value={frontEndDeploymentURL} />
                                        </div>
                                        <div>
                                            <label>Back End Source Code URL:</label>
                                            <input id="backEndSourceURL" type="text" onChange={(e) => onBackEndSourceChange(e)} value={backEndSourceURL} />
                                        </div>
                                        <div>
                                            <label>Back End Deployment URL:</label>
                                            <input id="backEnddeployedURL" type="text" onChange={(e) => onBackEndDeploymentURLChange(e)} value={backEndDeploymentURL} />
                                        </div>
                                        <Button type="submit" variant="contained" >Submit</Button>
                                        <div className="note">* If any input field is not relevant to particular task kindly fill "NA".</div>
                                    </form>
                                </Card>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}