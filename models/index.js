// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Product relationship
Product.belongsTo(Category, {
  foreignKey: "product_category",
});

Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false,
  },
  foreignKey: "product_tags",
});

// Categories relationship
Category.hasMany(Product, {
  foreignKey: "categories_of_products",
});

// Tag relationship
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
  },
  foreignKey: "tags_of_products",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
