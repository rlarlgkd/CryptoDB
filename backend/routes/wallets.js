const router = require('express').Router();
let Wallet = require('../models/wallet.model');

router.route('/').get((req, res) => {
    Wallet.find()
        .then(wallets => res.json(wallets))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const address = req.body.address;
    const created = Date.parse(req.body.created);

    const newWallet = new Wallet({
        username,
        address,
        created,
    });

    newWallet.save()
        .then(() => res.json('Wallet added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Wallet.findById(req.params.id)
        .then(Wallet => res.json(Wallet))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Wallet.findByIdAndDelete(req.params.id)
        .then(() => res.json('Wallet deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Wallet.findById(req.params.id)
        .then(Wallet => {
            Wallet.username = req.body.username;
            Wallet.address = req.body.address;
            Wallet.created = Date.parse(req.body.created);

            Wallet.save()
                .then(() => res.json('Wallet updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;