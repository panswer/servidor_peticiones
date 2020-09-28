const { toFileBase64InFolder } = require('./helpers/parse');
const InitViewFolder = () => {
    let base64 = toFileBase64InFolder('AprendizajeVelozdeInglés.MóduloBásico.pdf');
    console.log(base64);

}
InitViewFolder();