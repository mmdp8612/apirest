const usuariosGet = (req, res) => {
    res.json({
        message: "GET Usuarios - Controller"
    });   
}

const usuariosPost = (req, res) => {
    res.json({
        message: "POST Usuarios - Controller"
    });   
}

const usuariosPut = (req, res) => {
    res.json({
        message: "PUT Usuarios - Controller"
    });   
}

const usuariosDelete = (req, res) => {
    res.json({
        message: "DELETE Usuarios - Controller"
    });   
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}