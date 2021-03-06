/**
 * Created by casey369 on 2/15/16.
 */
'use strict';

var mongoose = require('mongoose');

// Defining Model
// =====================================================

var GPA = mongoose.model('GPA', {
    text: String,
    credits: Number,
    grade: String
});

// Defining Routes
// =====================================================

exports.index = function(req, res) {
    GPA.find(function (err, gpa) {
        if (err) {
            console.log("Error getting data from database");
            res.send(err)
        } else {
            res.json(gpa)// return results
        }
    });
};

exports.create = function(req, res) {
    GPA.create(req.body, function (err, gpa) {
        if (err) {
            res.send(err);
        } else {
            GPA.find(function (err, gpa) {
                if (err) {
                    res.send(err);
                }

                res.json(gpa);
            });
        }
    });
};

exports.destroy = function(req, res) {
    GPA.findById(req.params.gpa_id, function(err, gpa){
        if(err) { res.send(err); return "error: " + err; }
        if(!gpa) { return res.sendStatus(404); }

        gpa.remove(function(err){
            if(err) { return "error: " + err}
            return res.sendStatus(204);
        });
    });
};
