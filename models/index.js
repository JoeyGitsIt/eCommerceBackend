// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(
  Category,
  // this is sus might need to make sure there is a foreign key???
  {
    //   through: {
    //     model: Category,
    //     unique: false,
    //   },

    foreignKey: "product_category",
  }
);

// Categories have many Products
Category.hasMany(Product, {
  // through: {
  //   model: Product,
  //   unique: false,
  // },
  foreignKey: "categories_of_products",
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false,
  },
  foreignKey: "product_tags",
});

// Tags belongToMany Products (through ProductTag)
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
