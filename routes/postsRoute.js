const express = require('express');

const db = require('../data/db');

const router = express.Router();

//Get posts
router.get('/', async (req, res)=> {
    try{
        const posts = await db.find();
        res.status(200).json({ success: "Request fulfilled"})
    } catch (err) { 
        console.log(err)
        res.status(500).json({ error: "Could not complete"}
    )}
})

router.get('/:id', async (req, res)=> {
    const { id } = req.params;
    try{
        const posts = await db.findById(id);
        res.status(200).json({ success: "Request fulfilled", posts})
    } catch (err) { 
        console.log(err)
        res.status(500).json({ error: "Could not complete"}
    )}
})

router.post('/', async (req, res) => {
    const { title, contents} = req.body;
    try {
        const add = await db.insert({title, contents})
        res.status(201).json({ success: "Data created", body: {title: title, contents: contents}})
    } catch (err) {        console.log(err)
        res.status(500).json({ error: "Could not complete"})
}

})

// router.put()

// router.delete()



module.exports = router;