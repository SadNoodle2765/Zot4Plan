module.exports = (sequelize, Sequelize) => {
    const Visits = sequelize.define("visits", {
        id: {
            type: Sequelize.STRING(5),
            primaryKey: true,
        },  
        units: {
            type: Sequelize.INTEGER,
            allowNull:false,
        }
    }, {
        timestamps: false
    });
  
    return Visits;
};
