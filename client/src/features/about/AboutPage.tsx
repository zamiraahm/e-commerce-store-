import React, { useState } from "react";
import agent from "../../app/api/agents";
import aboutImage from "./images/your_image.jpg";
import { Alert, AlertTitle, Button, ButtonGroup, Container, List, ListItem, ListItemText, Typography } from "@mui/material";

export default function AboutPage() {
    const [validationErrors, setValidationErrors] = useState<string[]>([]);

    function getValidationError() {
        agent.TestErrors.getValidationError()
            .then(() => console.log('should not see this'))
            .catch(error => setValidationErrors(error));
    }

    const imageStyle = {
        width: "80%",  // Adjust the width as needed
        maxWidth: "100%",  // Ensure the image doesn't exceed its original width
        height: "auto",  // Maintain the aspect ratio
        display: "block",  // Center the image horizontally
        margin: "0 auto",  // Center the image horizontally
    };

    return (
        <div>
            <h1>About Us</h1>
            <p>Welcome to our website! </p>
            <p>
                – Your Ultimate Destination for Ordering and Owning the Best Books!

                At eBook, we are dedicated to providing you with a seamless experience for purchasing and ordering books. Our mission is to connect book enthusiasts with their favorite reads while offering convenience and a wide selection.
            </p>
            <img src="/images/aboutPage.jpeg" alt="Description of the image" style={imageStyle}/>

        </div>
    );
}
