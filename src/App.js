import React from 'react';
import './App.css';
import { 
  AppBar, Container, Toolbar, IconButton, Typography, Box, Button, Paper, Grid, 
  CardContent, Card, CardMedia, CardActions, BottomNavigation, BottomNavigationAction 
} from '@material-ui/core';

import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MenuIcon from '@material-ui/icons/Menu';
import LayerIcon from '@material-ui/icons/Layers';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow:1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow:1
  },
  mainFeaturesPost: {
    position: 'relative',
    color: theme.palette.common.white,
    marginBottom: theme.spacing(9),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundOverlay: 'rgba(0,0,0,.3)'
  },
  mainFeaturesPostContent: {
    position: 'relative',
    padding: theme.spacing(6),
    marginTop: theme.spacing(8)
  },
  cardMedia: {
    paddingTop: '56.25%'
  },
  cardContent: {
    flexGrow: 1
  },
  cardGrid: {
    marginTop: theme.spacing(4)
  }
}))

const cards = [1,2,3,4,5,6,7,8,9];

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents")

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <AppBar position = 'fixed'>
      <Container fixed>
          <Toolbar>
            <IconButton edge='start' color='inherit' aria-label='menu' className={classes.menuButton}>
              <MenuIcon />
            </IconButton>
              <Typography variant='h6' className={classes.title}>Sample Material-UI</Typography>
                <Box mr={3}>
                  <Button color='inherit' variant='outlined'>Log In</Button>
                </Box>
                <Button color='secondary' variant='contained'>Log In</Button>
          </Toolbar>
      </Container>
    </AppBar>

    <main>
      <Paper className={classes.mainFeaturesPost}
        style={{backgroundImage: 'url(https://source.unsplash.com/random)'}}>
          <Container fixed>
            <div className={classes.overlay}/>
            <Grid container>
              <Grid item md={6} >
                <div className={classes.mainFeaturesPostContent}>
                  <Typography component='h1' color='inherit' gutterBottom>
                   Sample Material-UI
                  </Typography>
                  <Typography component='h5' color='inherit' paragraph>
                   Lorem ipsum dolor sit amet,consectetur alit
                   Lorem ipsum dolor sit amet,consectetur alit
                   Lorem ipsum dolor sit amet,consectetur alit
                   Lorem ipsum dolor sit amet,consectetur alit
                  </Typography>
                  <Button variant='contained' color='secondary'>
                    Learn more
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Container>
      </Paper>
      <div className={classes.mainContent}>
        <Container maxWidth='md'>
          <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
            Sample Material-UI
          </Typography>
          <Typography variant='h5' align='center' color='textSecondary' paragraph>
           Lorem ipsum dolor sit amet,consectetur alit,Lorem ipsum dolor sit amet,consectetur alit
           Lorem ipsum dolor sit amet,consectetur alit,Lorem ipsum dolor sit amet,consectetur alit
           Lorem ipsum dolor sit amet,consectetur alit
           Lorem ipsum dolor sit amet,consectetur alit
           Lorem ipsum dolor sit amet,consectetur alit
          </Typography>
          <div className={classes.mainButtons}>
            <Grid container spacing={2} justify='center'>
              <Grid item>
                <Button variant='contained' color='primary'>Start Now</Button>
              </Grid>
              <Grid item>
                <Button variant='outlined' color='primary'>Learn More</Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth='md'>
        <Grid container spacing={4}>
          {cards.map((card)=>(
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image='https://source.unsplash.com/random'
                  title='image title'
                />
                <CardContent className={classes.cardContent}>
                  <Typography variant='h5' gutterBottom>
                    Blog Post
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor item
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size='small' color='prymary'>
                    View
                  </Button>
                  <Button size='small' color='prymary'>
                    Edit
                  </Button>
                  <LayerIcon/>
                  <PlayCircleFilledIcon/>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
    <footer>
      <Typography variant='h6' align='center' gutterBottom>
          Footer
      </Typography>
      <BottomNavigation 
      value={value} 
      onChange={handleChange} 
      className={classes.root}
      >
        <BottomNavigationAction label='Recents' value='recents' icon={<RestoreIcon/>} />
        <BottomNavigationAction label='Favorites' value='favorites' icon={<FavoriteIcon/>} />
        <BottomNavigationAction label='Nearby' value='nearby' icon={<LocationOnIcon/>} />
        <BottomNavigationAction label='Foder' value='folder' icon={<FolderIcon/>} />
      </BottomNavigation>
    </footer>
    </>
  );
}

export default App;
