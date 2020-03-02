const express = require('express'),
  router = express.Router(),
  surveyModel = require('../models/surveyModel');

/* GET home page. */
router.get('/', async function (req, res, next) {
  const classInfoData = await surveyModel.getAllTopicData();
  const topicStatusData = await surveyModel.getAllStatuses();

  res.render('template', {
    locals: {
      title: 'Class-Survey',
      classInfoData: classInfoData,
      topicStatusData: topicStatusData
    },
    partials: {
      partial: 'partial-index'
    }
  });
});

router.post('/update', (req, res) => {
  console.log(req.body);

  for(let key in req.body) {
    surveyModel.update(key, req.body[key]);
  }

  res.status(200).redirect('/');
});

module.exports = router;
