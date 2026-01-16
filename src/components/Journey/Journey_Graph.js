import {useEffect, useState} from "react";
import {milestone_data} from "./milestones.js";
import Container from "react-bootstrap/Container";
import {Card, CardContent, CircularProgress, Typography} from "@mui/material";

export  function Journey_Graph(){
    const [mileStones,setMileStones] = useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(() => {
        if(milestone_data && Array.isArray(milestone_data)){
            setMileStones(milestone_data);
            setLoading(false)
        }


    }, []);
    console.log("milestones",mileStones,milestone_data,loading)
    return (<>
        <Container maxWidth="md" sx={{mt:4}}>
            <Typography variant="h4" gutterBottom align="center">My Developer Journey</Typography>
            {loading ? (
                <CircularProgress/>
            ):(
                mileStones.map((items,index)=>(
                    <Card key={index} sx={{mb:3,p:2}}>
                        <CardContent>
                            <Typography variant="h6" color="primary">
                                {items.year}
                            </Typography>
                            <Typography variant="h5">{items.title}</Typography>
                            <Typography variant="body1">{items.description}</Typography>
                        </CardContent>
                    </Card>
                ))
            )

            }

        </Container>

        </>)
}