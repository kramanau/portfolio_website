import './App.css';
import Avatar from '@mui/material/Avatar';
import profile_pic from './static/profile_pic_small_sq.JPG';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { Paper, Grid, Button, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function App() {

  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#89622e',
      },
      secondary: {
        main: '#2e5589',
      }
    }
  })

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Paper square sx={{ width: '100vw', height: '100vh'}}>
          <Paper elevation={12} sx={{ minHeight: '5rem'}}>  
              <Grid container direction={'row'} columnSpacing={3} alignItems='center' justifyContent='center' minHeight={'5rem'}>
                <Grid item><Button variant='outlined'>About Me</Button></Grid>
                <Grid item><Button variant='outlined'>Experience</Button></Grid>
                <Grid item><Button variant='outlined'>Projects</Button></Grid>
                <Grid item ><a href='https://www.linkedin.com/in/kramanau/' target='_blank' rel="noreferrer"><IconButton><LinkedInIcon/></IconButton></a></Grid>
                <Grid item><a href='https://github.com/kramanau' target='_blank' rel="noreferrer"><IconButton><GitHubIcon/></IconButton></a></Grid>
              </Grid>
          </Paper>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem'}}>
          <Paper elevation={6} sx={{ display: 'flex', maxWidth: '80%', minWidth: '60rem', padding: '2rem' }}>
            <Avatar src={profile_pic} sx={{ width: '15rem', height: '15rem', border: '2px solid white' }}/>
            <p style={{ padding: '1rem' }}>Hello and welcome to my web portfolio where I can share my experiences and projects
            in a more interesting and interactive way. I'm Karolis and I'm currently working as a Software Engineer at Boeing 
            Transportation Data Systems in a branch of the company called Flight Test & Evaluation. This website isn't flashy,
            but I hope I can display what I have done in the past in a simple and effective way.
            </p>
          </Paper>
          </div>
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
