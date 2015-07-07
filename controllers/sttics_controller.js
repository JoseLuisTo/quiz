var models = require('../models/models')

exports.load = function (req, res) {

  var data = {};

  models.Quiz
    .findAll()
    .then(function(quizes) {
      data.numQuizes = Number(quizes.length);
      models.Comment
        .findAll()
        .then(function(comments) {
          data.numComments = Number(comments.length);
          if ((data.numQuizes == 0) || (data.numComments == 0)) {
            data.avg = 0;
          } else {
            data.avg = data.numComments / data.numQuizes;
          }
          models.Quiz
            .count( { distinct: true, include: [{ model: models.Comment, required: true }] })
            .then(function(count) {
              data.numQuizesComment = count;
              data.numQuizesNoComment = data.numQuizes - data.numQuizesComment;
              res.render('sttics/show', {
                  errors: [],
                  data: data
              });
            });
        });
    });
}