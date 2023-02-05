import React from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: '70%',
        height: '65%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    /*closeButton: {
        position: 'absolute',
        top: theme.spacing(2),
        right: theme.spacing(2),
    },*/
    buttonsContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: theme.spacing(2)
    }
}));

const ProductModal = ({ selectedProduct, handleClose }) => {
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
        <h3>{selectedProduct.name}</h3>
        <p>
            <img src={selectedProduct.imageUrl} alt={selectedProduct.name} width={151} height={218} />
        </p>
        <p>{selectedProduct.description}</p>
        <p>Price: £{selectedProduct.price}</p>
        <div className={classes.buttonsContainer}>
          <Button
            variant="contained"
            color="primary"
            endIcon={<AddShoppingCartIcon />}
          >
            Buy
          </Button>
          <Button variant="contained" className={classes.closeButton} onClick={handleClose}>
            <CloseIcon />
            <p>Cancel</p>
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;
