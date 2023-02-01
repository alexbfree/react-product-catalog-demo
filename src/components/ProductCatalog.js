import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ImageList, ImageListItem, ImageListItemBar } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ProductData from '../../data/products';
import Modal from '@material-ui/core/Modal';
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
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const ProductCatalog = () => {
  const classes = useStyles();

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
        <div className={classes.root}>
            <ImageList rowHeight={248} className={classes.gridList}>
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
                        <ShoppingCartIcon />
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

