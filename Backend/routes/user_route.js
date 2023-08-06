const router = require('express').Router();
const User = require('../model/user');

router.route('/').get((req, res) => {
    User.find()
      .then(exercises => res.json(exercises))
      .catch(err => res.status(400).json('Error: ' + err));
  });
 router.route('/add').post((req,res)=>{
    const username = req.body.username
    const password = req.body.password
    const user = new User({
        username,
        password
    }
    )
    user.save().then(()=>res.json("Added"))
    
 })

router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
      .then(() => res.json('Exercise deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  })
router.route('/update/:id').post((req,res)=>{
   User.findByIdAndUpdate(req.params.id)
   .then((users) => { 
   users.username = req.body.username
   users.password = req.body.password
   users.save()
   .then(res.send("updated"))
})
});

module.exports = router;