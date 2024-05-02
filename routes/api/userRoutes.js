const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser
} = require('../../controllers/userController.js')

router.route('/')
  .get(getUsers)
  .post(createUser)

router.route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser)

router.route('/:userId/friends/:friendId')
  .post()
  .delete()

module.exports = router;