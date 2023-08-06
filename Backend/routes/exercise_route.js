const router = require('express').Router();
const Exercise = require('../model/exercise');

router.route('/').get((req, res) => {
    Exercise.find()
      .then(exercises => res.json(exercises))
      .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date,
    });

    newExercise.save()
        .then(() => res.json('Exercise added!'))
        .catch(err => res.status(400).json('Error: ' + err));
})
router.route('/find/:id').get((req, res) => {
    id = req.params.id;
    Exercise.findById({ _id: id })
        .then((exercise) => {
            console.log(exercise);
            res.send(exercise)
        })
})
router.route('/:id').delete((req, res) => {
    id = req.params.id;
    Exercise.findOneAndDelete({ _id: id })
        .then(() => {
            res.json("deleted")
            console.log("deleted")
        })
})

router.route('/update/:id').post((req, res) => {
    Exercise.findByIdAndUpdate(req.params.id)
        .then((exercise) => {
            exercise.username = req.body.username;
            exercise.description = req.body.description;
            exercise.duration = Number(req.body.duration);
            exercise.date = Date.parse(req.body.date);
            exercise.save()
                .then(() => res.json('Exercise updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        }
        )
})

module.exports = router;