// ROUTES for HTTP request
const express = require('express');
const router = express.Router();

const Items = require('../model/itemSchema');

router.route('/')
    .get((req, res, next) => {
        Items.find((err, items) => {
            if (err) {
                res.json(err);
            } else {
                res.json(items);
            }
        });
    })
    .get('/:id', (req, res, next) => {
        Items.find((err, items) => {
            if (err) {
                res.json(err);
            } else {
                res.json(items);
            }
        });
    })
    .post((req, res, next) => {
        let newItem = new Items({
            itemName: req.body.itemName,
            itemPrice: req.body.itemPrice,
            itemType: req.body.itemType,
            itemDescription: req.body.itemDescription
        });
        newItem.save((err) => {
            if (err) {
                res.json(err);
            } else {
                res.json({ msg: 'Item has been added' });
            }
        });
    });



router.route('/:id')
    .put((req, res, next) => {
        Items.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    itemName: req.body.itemName,
                    itemPrice: req.body.itemPrice,
                    itemType: req.body.itemType,
                    itemDescription: req.body.itemDescription
                }
            },
            (err, result) => {
                if (err) {
                    res.json(err);
                } else {
                    res.json({ msg: 'Update Done' });
                }
            }
        );
    })
    .delete((req, res, next) => {
        Items.remove({
            _id: req.params.id
        }, (err, result) => {
            if (err) {
                res.json(err);
            } else {
                res.json({ msg: 'Item is Deleted' });
            }
        });
    });



module.exports = router;