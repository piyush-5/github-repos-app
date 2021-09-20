import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useSelector } from "react-redux";
//import { EmailOutlinedIcon, LocationOnOutlinedIcon } from '@mui/icons-material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';


const Users = ({detail, stars}) => {
    // const detail = useSelector((state) => state.repos.items.userDetails);
    // const stars = useSelector((state) => state.repos.items.starredRepos);
    console.log("PROPS", detail)
    return (
        <>
            {/*<div className="border-top-bottom">*/}
            <Container fixed>
                <Box className="border-bottom" sx={{ flexGrow: 1 , padding: '10px 0px'}}>
                    <Grid container spacing={2}>
                        <Grid item xs={2} className="flex-end">
                            <Avatar
                                alt={detail?.name}
                                src={detail?.avatar_url}
                                sx={{ width: 68, height: 68 }}
                                variant="square"
                            />
                        </Grid>
                        <Grid item xs={10}>
                            <Stack direction="row" spacing={2}>
                                <a href={detail?.html_url} target="_blank">{detail?.login}</a>
                                <div style={{display: "inherit", fontWeight: 600}}><StarBorderOutlinedIcon fontSize="small" />{stars?.length}</div>
                                <span style={{paddingLeft: '10px'}}>{detail?.name}</span>
                            </Stack>
                            
                            <p className="user-bio">{detail?.bio} @{detail?.company}</p>
                            <Stack className="location-email" direction="row" spacing={2}>
                                <LocationOnOutlinedIcon fontSize="small" />{detail?.location}
                                <EmailOutlinedIcon fontSize="small" />{detail?.email}
                            </Stack>
                        </Grid>
                        <Grid spacing={2}>
                            <p></p>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            {/*</div>*/}

        </>
    )
}

export default Users;