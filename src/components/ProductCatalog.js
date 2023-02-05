import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import StoreIcon from '@material-ui/icons/Store';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { ImageList, ImageListItem, ImageListItemBar } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import ProductModal from './ProductModal';
import '../css/custom.css';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://linkedin.alexbowyer.com/">
        Alex Bowyer
      </Link>{' '}
      {new Date().getFullYear()}
      {'. Based on the '}
      <Link color="inherit" href="https://v1.mui.com/page-layout-examples/album/">
        Album template
      </Link>{' from Material UI.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    /*padding: theme.spacing(8, 0, 6),*/
    padding: '36px 0px 0px'
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  catalogRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,  
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8), 
  },
  gridList: {
    width: 900,
    height: 600,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  modal: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '20px'
  }
}));

function ProductCatalog({ products }) {
  const classes = useStyles();

  // declare state for keeping track of whether we are currently looking at a single product.
  const [selectedProduct, setSelectedProduct] = useState(null);

  // function to set product into state when selected
  const handleProductClick = product => {
    setSelectedProduct(product);
  };  

  return (
    <React.Fragment>
      {selectedProduct &&
      <ProductModal
        selectedProduct={selectedProduct}
        handleClose={() => setSelectedProduct(null)}
      />}
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <StoreIcon className={classes.icon} />
          <Typography variant="h5" color="inherit" noWrap>
            danube.com
          </Typography><br/>
          {/*<Typography variant="subtitle2" color="inherit" paragraph>
            Small catalog, small prices.
          </Typography>*/}
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography component="h3" variant="h2" align="center" color="textPrimary" gutterBottom>
              Welcome to our store!
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Please scroll and browse the catalog below, click for descriptions and add items to your basket to buy.
            </Typography>
            <Typography variant="body1" align="center" color="textSecondary" paragraph>
              Spring Special: Spend over £50 to receive a 15% discount on all DVDs!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    View your basket
                  </Button>
                </Grid>
                  {/* hidden */}
                  {false && <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                  </Grid>}
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <div className={classes.catalogRoot}>
            <ImageList rowHeight={248} className={classes.gridList} cols={4}>
                {products.map((product) => (
                <ImageListItem 
                  key={product.id} 
                  width={151} 
                  onClick={() => handleProductClick(product)}
                  style={{ cursor: "pointer" }}
                  >
                    <img src={product.imageUrl} alt={product.name} width={151} height={218} />
                    <ImageListItemBar
                    title={product.name}
                    subtitle={<span>£{product.price}</span>}
                    actionIcon={
                        <IconButton
                        aria-label={`Information about ${product.name}`}
                        className={classes.icon}
                        /*onClick={() => addToBasket(product)} */
                        >
                        <AddShoppingCartIcon />
                        </IconButton>
                    }
                    />
                </ImageListItem>
                ))}
            </ImageList>
        </div>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          About this site
        </Typography>
        <Typography variant="body2" align="center" color="textSecondary" component="p">
          This website was produced by me, <a href="http://linkedin.alexbowyer.com/">Alex Bowyer</a> as an exercise for my job application to Synanetics. 
          <br/>An important note: I have not used React much, so this website is most useful as a measure of my ability to pick up a different language quickly and deliver something that meets the functional requirements. I focused on functionality and robustness over visual design; it is not intended to represent my best CSS/styling/branding/layout skills, that was not my focus in the time available.
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

export default ProductCatalog