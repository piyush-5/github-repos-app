import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';



const Users = ({ detail }) => {
    console.log("PROPS", detail)
    return (
        <>
            <div className="border-top-bottom">
            <Container fixed>
                <Box sx={{ flexGrow: 1 , padding: '10px 0px'}}>
                    <Grid container spacing={2}>
                        <Grid item xs={2}>
                            <Avatar
                                alt={detail.name}
                                src={detail.avatar_url}
                                sx={{ width: 56, height: 56 }}
                                variant="square"
                            />
                        </Grid>
                        <Grid item xs={10}>
                            <a href={detail.html_url} target="_blank">{detail.login}</a>
                            <span style={{paddingLeft: '10px'}}>{detail.name}</span>
                            <p>{detail.bio} @{detail.company}</p>
                            <p>{detail.location} {detail.email}</p>
                        </Grid>
                        <Grid spacing={2}>
                            <p></p>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            </div>

        </>
    )
}

export default Users;