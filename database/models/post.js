
module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define(
      "Posts",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
        },
        poster: {
          type: DataTypes.STRING
        },
        poster_image: {
          type: DataTypes.STRING
        },
        header: {
          type: DataTypes.STRING
        },
        content: {
          type: DataTypes.STRING
        },
        createdAt: {
          allowNull: false,
          type: DataTypes.DATE
        },
        updatedAt: {
          allowNull: false,
          type: DataTypes.DATE
        }
      },
      {}
  );
  Posts.associate = () => {
      // associations can be defined here
  };
  return Posts;
};
