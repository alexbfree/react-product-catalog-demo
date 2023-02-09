import React from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import DeleteIcon from '@material-ui/icons/Delete';
import ShoppingBasketTable from './ShoppingBasketTable';

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
    closeButton: {
        position: 'absolute',
        top: theme.spacing(1),
        right: theme.spacing(1),
    },
    table: {
        width: "100%",
        borderWidth: '0.5px',
        borderColor: 'grey',
        borderStyle: 'solid'
    },
    total: {
        fontWeight: "bold",
        textAlign: "right",
        fontSize: "1.2em", 
    },
    emptyBasketContainer: {
      width: '40rem',
      height: '7rem',
    },
    basketContainer: {
      width: '85%',
      maxHeight: '95%',
      overflowY: 'scroll',
    },
    checkoutButton: {
      width: '66%',
      textAlign: 'left',
      marginTop: theme.spacing(2)
    },
    emptyButton: {
      width: '33%',
      marginLeft: theme.spacing(1),
      textAlign: 'right',
      marginTop: theme.spacing(2)
    },
    buttonsContainer: {
      display: 'flex',
      justifyContent: 'space-between'
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
}));

const BasketModal = ({ basketContents, onProductQuantityChange, onClose, onEmptyBasket, discountLogic }) => {
  const classes = useStyles();

  return (
    <Modal
      open={basketContents !== null}
      onClose = {onClose}
      className={classes.modal}
    >
      <div className={classes.paper+' '+(basketContents.length>0 ? classes.basketContainer : classes.emptyBasketContainer)}>
        <Button className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </Button>
        <Typography variant="h4" align="center" gutterBottom>
          Shopping Basket
        </Typography>
        {basketContents.length === 0 && 
          <Typography gutterBottom paragraph>Your basket is empty.</Typography>
        }
        {basketContents.length > 0 && 
          <div>
          <div>
            <ShoppingBasketTable 
              basketContents = {basketContents}
              onProductQuantityChange = {onProductQuantityChange}
              discountLogic = {discountLogic}
            />
          </div>
          <div className={classes.buttonsContainer}>
            <Button className={classes.checkoutButton}
              variant="contained"
              color="primary"
              title="This feature is disabled for this demo."
              disabled={true} /* Checkout permanently disabled for the purposes of this exercise */
              startIcon={<ShoppingCartIcon />}
            >
              {'£'+discountLogic.getBillableBasketTotal(basketContents).toFixed(2)+' - Checkout Now'}
            </Button>
            <Button className={classes.emptyButton}
              variant="contained"
              color="secondary"
              startIcon={<DeleteIcon />}
              onClick={onEmptyBasket}
            >
              {'Empty Basket'}
            </Button>
          </div>
        </div>}  
      </div>
    </Modal>
  );
};

export default BasketModal;

