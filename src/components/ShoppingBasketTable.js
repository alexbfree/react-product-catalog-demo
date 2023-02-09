import React from 'react';
import Select from "@material-ui/core/Select";
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
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
        padding: '0.5rem 1rem',
        textAlign: 'center',
        marginBottom: '0.5rem',
        display: 'block'
    },
    discountPS: {
        color: '#ee5555',
        fontWeight: '600',
        fontSize: '0.8rem',
        padding: '0.5rem 1rem',
        textAlign: 'center',
        marginBottom: '0.5rem',
        display: 'block'
    }    
}));

const ShoppingBasketTable = ({ basketContents, onProductQuantityChange, discountLogic }) => {
    const classes = useStyles();
  
return (
    <>
        {discountLogic.discountIsInEffectForBasket() && 
          <Typography variant="caption" className={classes.discountBanner}>
            {'Discounts have been applied: '+(discountLogic.discountRate*100)+'% off all DVDs.'}
          </Typography>}
        {discountLogic.basketDiscountTester() && 
         discountLogic.countDiscountEligibleProductsInBasket()==0 &&
          <Typography variant="caption" className={classes.discountBanner}>
            {'You now qualify for our Spring Saver discount. Any DVDs you add to your basket will get '+(discountLogic.discountRate*100)+'% off.'}
          </Typography>}
        {!discountLogic.basketDiscountTester() && 
          <Typography variant="caption" className={classes.discountBanner}>
            {'Add another item and spend over £'+(discountLogic.minimumSpendThreshold)+' to get '+(discountLogic.discountRate*100)+'% off all DVDs!'}
          </Typography>}
        <TableContainer component={Paper} className={'basketTable'}>
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
                            {/* image column */}
                            <TableCell align="center">
                                <img src={product.imageUrl} alt={product.name} height={55} />
                            </TableCell>
                            {/* name column */}
                            <TableCell>
                                {product.name}
                            </TableCell>
                            {/* price column - if non-discounted product */}
                            {(!discountLogic.basketDiscountTester() ||
                            !discountLogic.productDiscountTester(product)) &&                            
                                <TableCell align="right">
                                    <span className="billablePrice">£{product.price.toFixed(2)}</span>
                                </TableCell>
                            }
                            {/* price column - if discounted product */}
                            {discountLogic.basketDiscountTester() &&
                            discountLogic.productDiscountTester(product) && 
                                <TableCell align="right">
                                    <span className="struckThroughPrice">£{product.price.toFixed(2)}</span>
                                    <span className="billablePrice">£{discountLogic.getDiscountedPrice(product).toFixed(2)}</span>
                                    
                                </TableCell>}
                            {/* quantity column */}
                            <TableCell align="center">
                                <Select value={product.quantity} onChange={(event) => onProductQuantityChange(
                                product, /* the product being changed */
                                event.target.value /* the new quantity */
                                )}>
                                {[...Array(11).keys()].map((qty) => (
                                    <MenuItem key={qty} value={qty}>{qty}</MenuItem>
                                ))}
                                </Select>
                            </TableCell>
                            <TableCell align="right">£{discountLogic.getBillableProductSubtotal(product).toFixed(2)}</TableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell colSpan={4} className={classes.total}>
                        Total:
                        </TableCell>
                        <TableCell align="right" className={classes.total}>
                        £{discountLogic.getBillableBasketTotal(basketContents).toFixed(2)}
                        </TableCell>
                    </TableRow>
                    {discountLogic.getSavings()>0 && 
                    <TableRow>
                        <TableCell colSpan={5} className={classes.savingsRow}>
                            <Typography variant="caption" className={classes.discountBanner}>
                                {'You saved £'+discountLogic.getSavings().toFixed(2)+' today with our Spring Saver discount.'}
                            </Typography>
                        </TableCell>
                    </TableRow>}
                </TableBody>
            </Table>
        </TableContainer>
    </>
    );
};

export default ShoppingBasketTable;
