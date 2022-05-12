// module.exports = 
export default (sequelize, DataTypes) => {

    let alias = 'Types';

    let cols = {
        id: {
            type: DataTypes.INTEGER(255),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        typeName: {
            type: DataTypes.STRING(10),
            allowNull: false
        }
    };

    let config = {
        tableName: 'types',        
        timestamps: false
    };

    const Type = sequelize.define(alias, cols, config);

    // Product.associate = (models) => {

    //     Product.belongsTo(models.ProductCategories, {
    //         as: "category",
    //         foreignKey: "category_id"
    //     })

        
    // }

    //Movie.associate = (models) => {
//
    //    Movie.belongsTo(models.Genres, {
    //        as: "genre",
    //        foreignKey: "genre_id"
    //    });
//
    //    Movie.belongsToMany(models.Actors, {
    //        as:"actors",
    //        through: "actor_movie",
    //        foreignKey: "movie_id",
    //        otherKey: "actor_id",
    //        timestamps: false
    //    })
//
    //}

    return Type;
}