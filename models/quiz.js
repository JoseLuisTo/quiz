// Definicion del modelo de Quiz con validación

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
  	'Quiz',
    { pregunta: {
        type: DataTypes.STRING,
        validate: { notEmpty: {msg: "-> Falta indicar la Pregunta"}}
      },
      respuesta: {
        type: DataTypes.STRING,
        validate: { notEmpty: {msg: "-> Falta indicar la Respuesta"}}
      },
      tematica: {
        type: DataTypes.STRING,
        validate: { notEmpty: {msg: "-> Falta indicar la Temática"}}
      }    
    }
  );
}