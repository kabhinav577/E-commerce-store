import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { IconButton, Box, Typography, Button } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { shades } from '../../theme';
import { addToCart } from '../../state';
import { useParams } from 'react-router-dom';
import Item from '../../components/Item';

const ItemDetails = () => {
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const [value, setValue] = useState('description');
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getItem = async () => {
    const item = await fetch(
      `http://localhost:1337/api/items/${itemId}?populate=image`,
      { method: 'GET' }
    );
    const itemJson = await item.json();
    setItem(itemJson.data);
  };

  const getItems = async () => {
    const items = await fetch(
      'http://localhost:1337/api/items?populate=image',
      { method: 'GET' }
    );
    const itemsJson = await items.json();
    setItems(itemsJson.data);
  };

  useEffect(() => {
    getItem();
    getItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box width="80%" m="80px auto">
      <Box display="flex" flexWrap="wrap" columnGap="40px">
        {/* LEFT */}
        <Box flex="1 1 40%" mb="40px">
          <img
            alt={item?.name}
            width="100%"
            height="100%"
            src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.url}`}
            style={{ objectFit: 'contain' }}
          />
        </Box>

        {/* RIGHT */}
        <Box flex="1 1 50%" mb="40px">
          <Box display="flex" justifyContent="space-between">
            <Box>Home/Item</Box>
            <Box>Prev Next</Box>
          </Box>

          <Box m="65px 0 25px 0">
            <Typography variant="h3">{item?.attributes?.name}</Typography>
            <Typography fontWeight="bold" mt="10px">
              ${item?.attributes?.price}
            </Typography>
            <Box mt="20px">
              {item?.attributes?.shortDescription?.map((paragraph, i) => (
                <Typography key={i} sx={{ mt: '10px' }}>
                  {paragraph.children.map((child) => child.text).join(' ')}
                </Typography>
              ))}
            </Box>
          </Box>

          {/* Count of Item and Button to add */}
          <Box display="flex" alignItems="center" minHeight="50px">
            <Box
              display="flex"
              alignItems="center"
              border={`1.5px solid ${shades.neutral[300]}`}
              mr="20px"
              p="2px 5px"
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                <RemoveIcon />
              </IconButton>
              <Typography sx={{ p: '0 5px' }}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </Box>

            <Button
              sx={{
                backgroundColor: '#222',
                color: 'white',
                borderRadius: 0,
                minWidth: '150px',
                padding: '10px 40px',
                '&:hover': {
                  backgroundColor: shades.primary[400],
                  color: 'white',
                },
              }}
              onClick={() => dispatch(addToCart({ item: { ...item, count } }))}
            >
              Add To Cart
            </Button>
          </Box>

          <Box>
            <Box m="20px 0 5px 0" display="flex" alignItems="center">
              <FavoriteBorderOutlinedIcon color="error" />
              <Typography sx={{ ml: '5px' }}>Add to wishlist</Typography>
            </Box>
            <Typography>Categories: {item?.attributes?.category}</Typography>
          </Box>
        </Box>
      </Box>

      {/* INFORMATION  */}
      <Box m="20px 0">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="DESCRIPTION" value="description" />
          <Tab label="REVIEWS" value="reviews" />
        </Tabs>
      </Box>
      <Box display="flex" flexWrap="wrap" gap="15px">
        {value === 'description' && (
          <div>
            {item?.attributes?.longDescription?.map((paragraph, i) => (
              <Typography key={i} sx={{ mt: '10px' }}>
                {paragraph.children.map((child) => child.text).join(' ')}
              </Typography>
            ))}
          </div>
        )}
        {value === 'reviews' && <div>reviews</div>}
      </Box>

      {/* RELATED ITEMS */}
      <Box mt="50px" width="100%">
        <Typography variant="h3" fontWeight="bold">
          Related Products
        </Typography>
        <Box
          mt="20px"
          display="flex"
          flexWrap="wrap"
          columnGap="1.33%"
          justifyContent="space-between"
        >
          {items
            .filter((item) => item.id !== itemId)
            .slice(0, 4)
            .map((item) => (
              <Item item={item} key={`${item.name}-${item.id}`} />
            ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ItemDetails;
