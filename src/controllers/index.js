/**
 * @Desc Get list of all index
 * @route GET /
 * @access Public
 */

export const getIndex = (req, res, next) => {

  res.render('index', {
    props: {
      pageTitle: 'tienda'
    }
  })
}

export const postIndex = (req, res, next) => {

  
}