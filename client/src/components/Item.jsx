/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IconButton, Box, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { shades } from '../theme';
import { addToCart } from '../state';
import { useNavigate } from 'react-router-dom';

const categoryColor = {
  newArrivals: '#FF004D',
  topRated: '#6DA4AA',
  bestSellers: 'purple',
};

const Item = ({ item, width }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const { category, price, name, image } = item.attributes;

  const imageUrl = image.data.attributes.url;

  return (
    <Box width={width}>
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <img
          alt={item.name}
          width="350px"
          height="400px"
          src={`http://localhost:1337${imageUrl}`}
          onClick={() => navigate(`/item/${item.id}`)}
          style={{ cursor: 'pointer', objectFit: 'contain' }}
        />
        <Box
          display={isHovered ? 'block' : 'none'}
          position="absolute"
          bottom="10%"
          left="0"
          width="100%"
          padding="0 5%"
        >
          <Box display="flex" justifyContent="space-between">
            {/* AMOUNT CONTAINER */}
            <Box
              display="flex"
              alignItems="center"
              backgroundColor={shades.neutral[100]}
              borderRadius="3px"
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                <RemoveIcon />
              </IconButton>
              <Typography color={shades.primary[300]}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </Box>

            {/* BUTTON CONTAINER */}
            <Button
              onClick={() => {
                dispatch(addToCart({ item: { ...item, count } }));
                setCount(1);
              }}
              sx={{ backgroundColor: shades.primary[300], color: 'white' }}
            >
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Box>

      <Box mt="3px">
        <Typography variant="subtitle2" sx={{ color: categoryColor[category] }}>
          {category
            .replace(/([A-Z])/g, '$1')
            .replace(/^./, (str) => str.toUpperCase())}
        </Typography>
        <Typography variant="h4">{name}</Typography>
        <Typography fontWeight="bold" color={shades.primary[400]}>
          ${price}
        </Typography>
      </Box>
    </Box>
  );
};

export default Item;
