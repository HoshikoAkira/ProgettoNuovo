import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed" sx={{bgcolor:"#28282a"}}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>


          <Box sx={{flex: 0, justifyContent: 'space-between' }}/>

          <Typography variant="h6" component={"div"} sx={{ flexGrow: 0 }}>
          {/* <Button  color="inherit" href="/" >HOME</Button> */}
          </Typography>
          <Button color="inherit" href="/sondaggi">Sondaggi</Button>
          <Button color="inherit" href='/nuovo'>Nuovo</Button>
          <Button color="inherit" href='/analitycs'>Analitycs</Button>

          <Box sx={{flex:0.5, display: 'flex', justifyContent: 'center' }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/"
            sx={{ fontSize: 24 }}
          >
            {'Telematica Informatica'}
          </Link>

          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/sign-in"
              sx={rightLink}
            >
              {'Sign In'}
            </Link>

            <Link
              variant="h6"
              underline="none"
              // href="/sign-up"
              sx={{ ...rightLink, color: 'secondary.main' }}
            >
              {'Logout'}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
