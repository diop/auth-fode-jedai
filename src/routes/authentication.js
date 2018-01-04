import  express from 'express'
import signUp from '../actions/signUp'
const router = express.Router()


router.get('/sign-up', (req, res, next) => {
  res.render('authentication/sign-up')
})

router.post('/sign-up', (req, res, next) => {
  signUp(req.body)
    .then((result) => {
      res.redirect('/')
    })
})

export default router
