const indexCtrl = {};

indexCtrl.renderIndex = (req,res) => {
    res.render('index')
};

indexCtrl.renderPortafolio = (req,res) => {
    res.render('portafolio')
};

module.exports = indexCtrl;