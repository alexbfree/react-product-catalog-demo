import React, { useState, useEffect } from 'react';
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
import BasketModal from './BasketModal';
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

  /****** BASKET LOGIC ******/

  // declare state for keeping track of whether we are currently looking at the basket
  const [shouldShowBasket, setShouldShowBasket] = useState(null);
 
  // declare state for keeping track of current basket contents. (which is same format as products, but with additional quantity field)
  const [basketContents, setBasketContents = (newBasketContents) => {
    if (newBasketContents != basketContents) {
      basketContents = newBasketContents
    };
  }] = useState([]);

  // state to store the simple basket total (if no discounts)
  const [basketTotal, setBasketTotal] = React.useState(0);  

  // when the basket contents change, recalculate the simple total
  React.useEffect(() => {
    setBasketTotal(
      basketContents.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
    );
  }, [basketContents]);

  // function to update product quantity
  const handleProductQuantityChange = (productToChange, newQuantity) => {
    if (newQuantity === 0) {
      setBasketContents(basketContents.filter(item => item.id !== productToChange.id));
    } else {
      const basketItem = basketContents.find((item) => item.id === productToChange.id);
      basketItem.quantity = newQuantity;
      setBasketContents([...basketContents]);
    }
  };

  // function to empty the basket 
  const emptyBasket = () => {
    setBasketContents([]);
  }

  // standard function to add product to basket, regardless where clicked
  const addProductToBasket = (productToAdd, previousBasketContents) => {
    const basketItem = previousBasketContents.find((item) => item.id === productToAdd.id);
    if (basketItem) {
    basketItem.quantity++;
    setBasketContents([...previousBasketContents]);
    } else {
    setBasketContents([...previousBasketContents, { ...productToAdd, quantity: 1 }]);
    }
    setShouldShowBasket(true);
  };

  // function to find how many distinct items (taking account quantities) are in basket
  const getTotalDistinctItemsInBasket = () => {
    let total = 0;
    basketContents.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  const addProductToBasketFromCatalogPage = (productToAdd) => {
    addProductToBasket(productToAdd, basketContents)
  };

  const addProductToBasketFromProductInfoModal = (productToAdd, previousBasketContents) => {
    addProductToBasket(productToAdd, previousBasketContents)
  };

  const handleProductBuyOnCatalogPageClick = (event, productToAdd) => {
    event.stopPropagation(); /* ensure that we don't also trigger product info modal */
    addProductToBasketFromCatalogPage(productToAdd);
  };  

  /****** DISCOUNT LOGIC *****/

  /* Note: Normally this would not be in client-side code as it's unsafe, 
  this is a known limitation for now. But since we are client-side, 
  best to put the logic into a passed in constant */
  const discountLogic={};
  discountLogic.discountRate = 0.15, /* 15% discount rate for DVDs */
  discountLogic.minimumSpendThreshold = 50.00 /* spend at least £50 for discount */
  
  /* function to determine whether passed in product qualifies for discount */
  discountLogic.productDiscountTester = (productToTest) => {
    let should = false;
    if (productToTest.name.startsWith("DVD")) {
      should = true;
    }
    return should;
    /* a better way to do this would be a category field or discount field on the product,
      but this will do for now. */
  };

  /* function to determine whether the current basket contents qualify for discount */
  discountLogic.basketDiscountTester = () => {
      let isDiscountApplicableToThisBasket = false;
      if (basketTotal > discountLogic.minimumSpendThreshold) {
        isDiscountApplicableToThisBasket = true;
      }
      return isDiscountApplicableToThisBasket;
  };

  // calculate the billable price for a product
  // (discounting it only if basket is eligible and this product is eligible)
  // otherwise just return standard non-discounted price
  discountLogic.getDiscountedPrice = (productToDiscount) => {
    let returnPrice = productToDiscount.price;
    if (discountLogic.basketDiscountTester() && 
       discountLogic.productDiscountTester(productToDiscount)) {
        returnPrice = (1.00-discountLogic.discountRate) * 
                      productToDiscount.price;
    }
    return returnPrice;
  }

  // calculate the subtotal for a product, taking into account quantity, with discounts applied 
  // (this is used instead of a simple (product*quantity) calculation when discounts are in effect */
  discountLogic.getBillableProductSubtotal = (product) => {
    let subtotal = product.price * product.quantity;
    if (discountLogic.basketDiscountTester() &&
        discountLogic.productDiscountTester(product)) {
          subtotal = (1.00-discountLogic.discountRate) * 
          product.price * 
          parseFloat(product.quantity);
    }
    return subtotal;
  };

  // calculate the basket total with discounts applied 
  // (this is used instead of basketTotal when discounts are in effect */
  discountLogic.getBillableBasketTotal = (basketContents) => {
      let billableBasketTotal = parseFloat(basketTotal);
      if (discountLogic.basketDiscountTester()) {
        let totalAccountingForDiscounts = 0.00;
        basketContents.forEach((productToAddToTotal) => {
          let amountToAdd = discountLogic.getDiscountedPrice(productToAddToTotal) * parseFloat(productToAddToTotal.quantity);
          totalAccountingForDiscounts = totalAccountingForDiscounts + amountToAdd;
        });
        billableBasketTotal = totalAccountingForDiscounts;
      };
      return billableBasketTotal;
  };

  // test whether at least one product has a discount, ie. we are in discount mode
  discountLogic.discountIsInEffectForBasket = () => {
    // if basket total qualifies, and at least one product qualifies, discount is in effect.
    let discountIsInEffect = false;
    if (discountLogic.basketDiscountTester()) {
      let foundAtLeastOneDiscountedProduct = false;
      basketContents.forEach((product) => {
        if (discountLogic.productDiscountTester(product)) {
          foundAtLeastOneDiscountedProduct = true;
        }
      });
    }
    return discountIsInEffect;
  }

  // check if any eligible products are in basket.
  discountLogic.countDiscountEligibleProductsInBasket = () => {
    let eligibleProductsFound=0;
    basketContents.forEach((productToCheck) => {
      if (discountLogic.productDiscountTester(productToCheck)) {
        eligibleProductsFound++;
      }
    });
    return eligibleProductsFound;
  }

  // calculate savings (0.00 if no discount in effect)
  discountLogic.getSavings = () => {
    return (basketTotal - discountLogic.getBillableBasketTotal(basketContents));
  }

  /****** PRODUCT VIEWING LOGIC ******/

  // declare state for keeping track of whether we are currently looking at a single product.
  const [selectedProduct, setSelectedProduct] = useState(null);

  // function to set product into state when selected
  const handleProductClick = product => {
    setSelectedProduct(product);
  };  

  /****** PAGE STRUCTURE ******/

  return (
    <React.Fragment>
      {shouldShowBasket &&
      <BasketModal
        basketContents= {basketContents}
        onProductQuantityChange={(productToChange,newQuantity) => handleProductQuantityChange(productToChange, newQuantity)}
        onClose={() => setShouldShowBasket(false)}
        onEmptyBasket={() => emptyBasket()}
        discountLogic={discountLogic}
        />}
      {selectedProduct &&
      <ProductModal
        selectedProduct={selectedProduct}
        handleBuySelectedProductClick={() => {
          addProductToBasketFromProductInfoModal(selectedProduct, basketContents);
          setSelectedProduct(null);
        }}
        handleClose={() => setSelectedProduct(null)}
        discountLogic={discountLogic}
      />}
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <StoreIcon className={classes.icon} />
          <Typography variant="h5" color="inherit" className="companyName" noWrap>
            danube.com
          </Typography><br/>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography component="h3" variant="h2" align="center" color="textPrimary" gutterBottom>
              Welcome to our store!
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Please scroll and browse our catalogue below. <br/> Click for descriptions and add items to your basket to buy.
            </Typography>
            <Typography variant="body1" align="center" color="textSecondary" paragraph>
              Spring Special Offer: Spend over £50 to receive a 15% discount on all DVDs!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary"
                    onClick = { () => setShouldShowBasket(true) }>
                    View your basket ({getTotalDistinctItemsInBasket()})
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
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
                        onClick={(event) => {handleProductBuyOnCatalogPageClick(event,product)}}
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
    </React.Fragment>
  );
}

export default ProductCatalog