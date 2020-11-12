/**
 * @Desc Get list of all products
 * @route GET /product
 * @access Public
 */

export const getProduct = (req, res, next) => {

  res.json({
    success: true,
    msg: 'Fetch all product'
  });
 
}

/**
 * @Desc Create a new product
 * @route POST /edit-product
 * @access Private
 */

export const getEditProduct = (req, res, next) => {

  res.render('admin/vender/agregar-producto', {
    props: {
      pageTitle: 'agregar producto'
    }
  })
}

/**
 * @Desc Create a new product
 * @route POST /api/v1/shop
 * @access Private
 */

export const postProduct = (req, res, next) => {

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

export const getProductById = (req, res, next) => {

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

export const updateProduct = (req, res, next) => {

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

export const deleteProduct = (req, res, next) => {

  res.json({
    success: true,
    msg: `Delete product ${req.params.id}`
  });
}

