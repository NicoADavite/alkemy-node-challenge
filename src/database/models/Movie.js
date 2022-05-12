// module.exports = 
export default (sequelize, DataTypes) => {

    let alias = 'Movies';

    let cols = {
        id: {
            type: DataTypes.INTEGER(255).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        image: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        release_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER(1),
            allowNull: false
        },
        typeId: {
            type: DataTypes.INTEGER(255),
            allowNull: false
        },
        genreId: {
            type: DataTypes.INTEGER(255),
            allowNull: false
        }
    };

    let config = {
        tableName: 'movies',        
        timestamps: false
    };

    const Movie = sequelize.define(alias, cols, config);

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

    return Movie;
}