const sequelize = require('./config/db');
require('dotenv').config();
const express = require('express');
const cors = require('cors'); // <-- Importa o cors aqui

const userRoutes = require('./routes/userRoutes');
const contactRoutes = require('./routes/contactRoutes');
const authRoutes = require('./routes/authRoutes');
const app = express();
const productRoutes = require('./routes/productRoutes');

app.use(express.json());

app.use(cors({                               // 2. Usamos o cors para liberar acesso
  origin: 'https://trazpramim-fron.vercel.app',          // só do frontend
  methods: ['GET','POST','PUT','DELETE'],
  credentials: true
}));

// Rotas
app.get('/', (req, res) => res.send('api funcionando'));

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/products', productRoutes);

const PORT = process.env.PORT;

sequelize.authenticate()
  .then(() => {
    console.log('servidor online e conectado com o DB');
    return sequelize.sync();
  })
  .then(() => {
    console.log('banco de dados sincronizado');
    app.listen(PORT, () => console.log("SERVIDOR RODANDO NA PORTA: " + PORT));
  })
  .catch(err => console.log("Erro interno do servidor", err));
