module.exports = function(sequelize, DataTypes) {
  var Cigar = sequelize.define("Cigar", {
    leaf: DataTypes.STRING,
    blend: DataTypes.STRING
  });

  Cigar.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Cigar.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Cigar;
};
