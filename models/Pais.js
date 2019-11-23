const Mongoose= require ("mongoose");

const PaisSchema = Mongoose.Schema({
    codigoPostal: { type: Number, min: 1, max: 999 },
    nombre: String,
    poblacionTotal: Number,
    extensionTerritorial: Mongoose.SchemaTypes.Decimal128,
    pib:  Mongoose.SchemaTypes.Decimal128,
});

module.exports = Mongoose.model("Pais", PaisSchema);