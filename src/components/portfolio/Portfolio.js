import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import Achievements from './Achievements';
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function Portfolio({innerRef}) {
    return (
        <Box id={'portfolio'} ref={innerRef}>
            <Achievements />
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.portfolio.map((project, index) => (
                   <Grid item xs={12} md={6} key={index}>
                       <PortfolioBlock image={project.image} description={project.description} technologies={project.technologies} title={project.title} />
                   </Grid>
                ))}
            </Grid>
        </Box>
        
    );
};