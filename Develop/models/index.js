// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(
  Category,
  // this is sus might need to make sure there is a foreign key???
  // { foreignKey: "category_id" },
  {
    through: {
      model: Category,
      unique: false,
    },

    as: "product_category",
  }
);

// Categories have many Products
Category.hasMany(Product, {
  through: {
    model: Product,
    unique: false,
  },

  as: "categories_of_products",
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: Tag,
    unique: false,
  },
  as: "product_tags",
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: Product,
    unique: false,
  },
  as: "tags_of_products",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
