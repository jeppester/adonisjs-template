/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

// Remember to *always lazy load controllers*, otherwise hot module reload won't work
const BooksController = () => import('#controllers/books_controller')
const dynamicCssVariables = () => import('#utils/dynamicCssVariables')

router.resource('books', BooksController)

let cssVariables: string
router.get('/colors.css', async ({ response }) => {
  if (!cssVariables) cssVariables = (await dynamicCssVariables()).default

  response.type('text/css').send(cssVariables)
})

router.get('/', async ({ response }) => {
  response.redirect('/books')
})
