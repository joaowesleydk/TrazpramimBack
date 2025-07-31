const Product = require('../models/products');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: 'Produto não encontrado' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: 'Erro interno' });
  }
};

exports.createProduct = async (req, res) => {
    try {
      const { nome, preco, imagem } = req.body;
  
      if (!nome || !preco || !imagem) {
        return res.status(400).json({ error: 'Preencha todos os campos' });
      }
  
      const novoProduto = await Product.create({ nome, preco, imagem });
      res.status(201).json(novoProduto);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao cadastrar produto' });
    }
  };