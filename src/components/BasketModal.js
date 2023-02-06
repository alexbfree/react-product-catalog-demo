import React from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

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
      height: '7rem'
    },
    basketContainer: {
      width: '85%',
      height: '95%',
      overflowY: 'scroll',
    },
    checkoutButton: {
      width: '100%',
      textAlign: 'center',
      marginTop: theme.spacing(2)
    },
}));

const BasketModal = ({ basketContents, handleClose }) => {
  const classes = useStyles();
  const [basketTotal, setBasketTotal] = React.useState(0);

  React.useEffect(() => {
    setBasketTotal(
      basketContents.reduce((acc, cur) => acc + cur.price * cur.quantity, 0).toFixed(2)
    );
  }, [basketContents]);

  return (
    <Modal
      open={basketContents !== null}
      onClose={handleClose}
      className={classes.modal}
    >
      <div className={classes.paper+' '+(basketContents.length>0 ? classes.basketContainer : classes.emptyBasketContainer)}>
        <Button className={classes.closeButton} onClick={handleClose}>
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
          <Typography gutterBottom>
            <div>
              <TableContainer component={Paper} className={'basketTable'} gutterBottom>
                <Table className={classes.table} cols="5" aria-label="Shopping Basket">
                  <TableHead>
                    <TableRow>
                      <TableCell align="left" colSpan="2">Product</TableCell>
                      <TableCell align="right">Price</TableCell>
                      <TableCell align="center">Quantity</TableCell>
                      <TableCell align="right">Total</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {basketContents.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell align="center">
                          <img src={product.imageUrl} alt={product.name} height={55} />
                        </TableCell>
                        <TableCell>
                          {product.name}
                        </TableCell>
                        <TableCell align="right">£{product.price}</TableCell>
                        <TableCell align="center">{product.quantity}</TableCell>
                        <TableCell align="right">£{(product.price * product.quantity).toFixed(2)}</TableCell>
                      </TableRow>
                    ))}
                    <TableRow>
                      <TableCell colSpan={4} className={classes.total}>
                        Total:
                      </TableCell>
                      <TableCell align="right" className={classes.total}>
                        £{basketTotal}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Typography>
          <div className={classes.buttonsContainer}>
            <Button className={classes.checkoutButton}
              variant="contained"
              color="primary"
              title="This feature is disabled for this demo."
              disabled={true} /* Checkout permanently disabled for the purposes of this exercise */
              startIcon={<ShoppingCartIcon />}
            >
              {'£'+basketTotal+' - Checkout Now'}
            </Button>
          </div>
        </div>}  
      </div>
    </Modal>
  );
};

export default BasketModal;

