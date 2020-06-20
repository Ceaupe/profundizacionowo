const { Router} = require('express')
const router = Router()

const {renderObrasForm, createNewObras, renderObras, renderEditForm, updateObras, deleteObras, renderEditObras} = require('../controllers/obras.controller');

//New Obra
router.get('/agregar',renderObrasForm);

router.post('/obras/new-obra', createNewObras);

// Get All Obras
router.get('/obras', renderObras);
router.get('/edit', renderEditObras);

// Edit Obras
router.get('/edit/editar/:id', renderEditForm);

router.put('/edit/editar/:id', updateObras);

// Delete Obras
router.delete('/obras/delete/:id', deleteObras);


module.exports = router