import './App.css';
import Avatar from '@mui/material/Avatar';
import profile_pic from './static/profile_pic_small_sq.JPG';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { Paper,
   Grid,
  Button,
  IconButton,
  Divider,
  Stack,
  useThemeProps,
 } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Column(props) {
  
  return (
    <Paper elevation={6} sx={{ display: 'flex', height: '100%', width: '100%', padding: '1rem', margin: '1rem', minWidth: '25rem' }}>
      <Stack sx={{ display: 'flex', width: '100%', alignItems: 'center' }}>
      <div style={{ marginRight: 'auto'}}>{props.title}</div>
      <Divider flexItem style={{ margin: '0.5rem 0rem' }}/>
      <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
        {props.children}
      </div>
      </Stack>
    </Paper>
  )
}


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
          <Stack direction='row'>
            <Column title='About Me'>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}><Avatar src={profile_pic} sx={{ width: '15rem', height: '15rem', border: '2px solid white' }}/> </div>
              <p>
                I'm Karolis and I'm currently working as a Software Engineer at Boeing 
                in a branch of the company called Flight Test & Evaluation. This website isn't flashy,
                but I hope I can display what I have done in the past in a simple and effective way.
              </p>
              <Grid container direction = {'row'} alignItems='center' columnSpacing={1} justifyContent='center'>
                <Grid item ><a href='https://www.linkedin.com/in/kramanau/' target='_blank' rel="noreferrer"><IconButton><LinkedInIcon/></IconButton></a></Grid>
                <Grid item><a href='https://github.com/kramanau' target='_blank' rel="noreferrer"><IconButton><GitHubIcon/></IconButton></a></Grid>
              </Grid>
              <p>
                On my free time I like to
              </p>
            </Column>
           <Column title='Experience'></Column>
           <Column title='Projects'></Column>
          </Stack>
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
