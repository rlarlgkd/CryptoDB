const router = require('express').Router();
let Coin = require('../models/coin.model');

router.route('/').get((req, res) => {
    Coin.find()
        .then(coins => res.json(coins))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const address = req.body.address;
    const amount = Number(req.body.amount);
    const price = Number(req.body.price);
    const marketCap = Number(req.body.marketCap);
    const name = req.body.name;
    const genreType = req.body.genreType;
    const coinType = req.body.coinType;


    const newCoin = new Coin({
        address,
        amount,
        price,
        marketCap,
        name,
        genreType,
        coinType
    });

    newCoin.save()
        .then(() => res.json('Coin added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Coin.findById(req.params.id)
        .then(Coin => res.json(Coin))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Coin.findByIdAndDelete(req.params.id)
        .then(() => res.json('Coin deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Coin.findById(req.params.id)
        .then(Coin => {
            Coin.address = req.body.address;
            Coin.amount = Number(req.body.amount);
            Coin.price = Number(req.body.price);
            Coin.marketCap = Number(req.body.marketCap);
            Coin.name = req.body.name;
            Coin.genreType = req.body.genreType;
            Coin.coinType = req.body.coinType;

            Coin.save()
                .then(() => res.json('Coin updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;