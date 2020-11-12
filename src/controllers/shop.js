import axios from 'axios';
/**
 * @Desc Get list of all products
 * @route GET /api/v1/shop
 * @access Public
 */

export const getShop = (req, res, next) => {

  axios({
    method: 'get',
    url: 'http://localhost:3000/api/v1/product'
  }).then(productos => {
    
    res.render('comprar/index', {
      props: {
        pageTitle: 'comprar',
        productos: productos.data.productos
      }
    });
  });

}

/**
 * @Desc Create a new product
 * @route POST /api/v1/shop
 * @access Private
 */

export const postShop = (req, res, next) => {

  res.json({
    success: true,
    msg: 'Create a product'
  });
}

/**
 * @Desc Get a single product
 * @route GET /api/v1/shop/:id
 * @access Public
 */

export const getShopById = (req, res, next) => {

  res.json({
    success: true,
    msg: `Show product ${req.params.id}`
  });
}

/**
 * @Desc Update e single product
 * @route PUT /api/v1/shop/:id
 * @access Private
 */

export const updateShop = (req, res, next) => {

  res.json({
    success: true,
    msg: `Update product ${req.params.id}`
  });
}

/**
 * @Desc Delete e single product
 * @route DELETE /api/v1/shop/:id
 * @access Private
 */

export const deleteShop = (req, res, next) => {

  res.json({
    success: true,
    msg: `Delete product ${req.params.id}`
  });
}

