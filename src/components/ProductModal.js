import React from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: "absolute",
        width: "60%",
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    button: {
        margin: theme.spacing(1),
    },
    closeButton: {
        position: 'absolute',
        top: theme.spacing(1),
        right: theme.spacing(1),
    },
    imageTextContainer: {
      marginTop: '12px',
      textAlign: 'center'
    },
    discountBanner: {
      border: '2px solid #ffb8b8',
      color: '#ee5555',
      borderRadius: '1rem',
      fontWeight: '600',
      fontSize: '0.8rem',
      backgroundColor: 'rgba(255, 56, 56, 0.05)',
      padding: '0.5rem 1rem'
    },
    discountPS: {
      color: '#ee5555',
      fontWeight: '600',
      fontSize: '0.8rem',
      padding: '0.5rem 1rem'
    }    
  })
);

const ProductModal = ({ selectedProduct, handleClose, handleBuySelectedProductClick, discountLogic }) => {
  const classes = useStyles();

  if (!selectedProduct) {
    return null;
  }

  return (
    <Modal
      open={selectedProduct !== null}
      onClose={handleClose}
      className={classes.modal}
    >
      <div className={classes.paper}>
        <Button className={classes.closeButton} onClick={handleClose}>
          <CloseIcon />
        </Button>
        <Typography variant="h4" align="center" gutterBottom>
          {selectedProduct.name}
        </Typography>
        {discountLogic.productDiscountTester(selectedProduct) && 
          <Typography variant="caption" className={classes.discountBanner}>
            Discount Available: Spend over £50 and get 15% discount on this and all other DVDs once added to your basket!
          </Typography>}
        <div className={classes.imageTextContainer}>
          <img src={selectedProduct.imageUrl} alt={selectedProduct.name} height={218} />
          <Typography variant="body1" align="center" color="textSecondary" paragraph>
            {selectedProduct.description} 
          </Typography>
        </div>
        <div className={classes.buttonsContainer}>
          <Button
            variant="contained"
            color="primary"
            className="buyButton"
            startIcon={<AddShoppingCartIcon />}
            onClick={handleBuySelectedProductClick}
          >
            {'£'+selectedProduct.price+' - Add to Basket'}
          </Button>
        </div>  
        <div className={classes.buttonsPSContainer}>
          {discountLogic.productDiscountTester(selectedProduct) && 
          <Typography variant="body2" className={classes.discountPS}>
            Any discounts will be calculated on the basket page.
          </Typography>}          
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;
