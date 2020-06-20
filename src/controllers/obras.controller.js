const obrasCtrl = {};

const Obra = require('../models/Obra');

obrasCtrl.renderObrasForm = (req, res) => {
    res.render('obras/new-obras');
};

obrasCtrl.createNewObras = async (req, res) => {
    const {title,image,autor, short_description, value} = req.body;
    const newObra = new Obra({title, image, autor, short_description, value});
    await newObra.save();
    res.redirect('/edit');
};

obrasCtrl.renderObras = async (req, res) => {
    const obras = await Obra.find();
    res.render('obras/all-obras',{obras});
};

obrasCtrl.renderEditObras = async (req, res) => {
    const obras = await Obra.find();
    res.render('obras/edit-all-obras',{obras});
};

obrasCtrl.renderEditForm = async (req, res) => {
   const obra = await Obra.findById(req.params.id);
   res.render('obras/edit-obra', { obra });
};
obrasCtrl.updateObras = async (req, res) => {
    const { title, autor, short_description, value} = req.body;
    await Obra.findByIdAndUpdate(req.params.id, {title, autor, short_description, value});
    res.redirect('/edit');
};
obrasCtrl.deleteObras = async (req, res) => {
    await Obra.findByIdAndDelete(req.params.id);
    res.redirect('/edit');
};


module.exports = obrasCtrl;