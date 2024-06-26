import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { RemoveRedEye } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';

import { Product } from 'src/common/types';
import formatterPrice from 'src/helpers/formatPrice';
import { PATH_PUBLIC } from 'src/routes/paths';

import QuickView from '../QuickView';
import styles from './styles';

type Props = {
  product: Product;
};

const ProductItem: React.FC<Props> = ({ product }: Props) => {
  const [modalProductDetail, setModalProductDetail] = useState(false);

  const handleOpenModal = () => setModalProductDetail(true);
  const handleCloseModal = () => setModalProductDetail(false);

  return (
    <Grid item xs={12} sm={6} lg={4}>
      <Paper sx={styles.paperProduct}>
        <Box sx={styles.boxImage}>
          <Box className="hover-box" sx={styles.hoverBox}>
            <IconButton aria-label="delete" onClick={handleOpenModal}>
              <RemoveRedEye fontSize="small" sx={styles.colorIcon} />
            </IconButton>
            <QuickView product={product} openModal={modalProductDetail} handleCloseModal={handleCloseModal} />
          </Box>
          <Link to={PATH_PUBLIC.product.slug(product?.slug, product?._id)}>
            <Box component="img" width="100%" src={product.thumbnail} />
          </Link>
        </Box>
        <Box p="1rem">
          <Box display="flex">
            <Box sx={styles.wrapContentProduct}>
              <Rating name="read-only" precision={0.1} value={product.rating} readOnly sx={{ fontSize: '1.25rem' }} />
              <Link to={PATH_PUBLIC.product.slug(product?.slug, product?._id)}>
                <Box className="title" component="h3" sx={styles.boxTitle}>
                  {product.name}
                </Box>
              </Link>
              <Box sx={styles.boxPrice}>
                <Box fontWeight={600} fontSize="18px" color="#D23F57">
                  {formatterPrice.format(product.price)}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default ProductItem;
