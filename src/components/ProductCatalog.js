import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ImageList, ImageListItem, ImageListItemBar } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ProductData from '../../data/products';
import '../css/custom.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 900,
    height: 600,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const ProductCatalog = () => {
  const classes = useStyles();

  return (
    <>
        <div className={classes.root}>
            <ImageList rowHeight={248} className={classes.gridList} cols={4}>
                {ProductData.map((product) => (
                <ImageListItem key={product.id} width={151} >
                    <img src={product.imageUrl} alt={product.name} width={151} height={218} />
                    <ImageListItemBar
                    title={product.name}
                    subtitle={<span>£{product.price}</span>}
                    actionIcon={
                        <IconButton
                        aria-label={`Information about ${product.name}`}
                        className={classes.icon}
                        onClick={() => openModal(product)}
                        >
                        <AddShoppingCartIcon />
                        </IconButton>
                    }
                    />
                </ImageListItem>
                ))}
            </ImageList>
        </div>
    </>
  );
};

export default ProductCatalog;

