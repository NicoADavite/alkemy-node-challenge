// module.exports = 
export default (sequelize, DataTypes) => {

    let alias = 'Genres';

    let cols = {
        id: {
            type: DataTypes.INTEGER(255),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        image: {
            type: DataTypes.STRING(1000),
            allowNull: false
        }
    };

    let config = {
        tableName: 'genres',        
        timestamps: false
    };

    const Genre = sequelize.define(alias, cols, config);

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

    return Genre;
}