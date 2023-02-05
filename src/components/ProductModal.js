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
    }
}));

const ProductModal = ({ selectedProduct, handleClose, handleBuySelectedProductClick }) => {
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
            startIcon={<AddShoppingCartIcon />}
            onClick={handleBuySelectedProductClick}
          >
            {'£'+selectedProduct.price+' - Add to Basket'}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;
