import express from "express" // async
import cors from "cors"
const app = express();
const PORT = 5000;

app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON bodies

// Dummy card data
const cards = [
  {
    id: 1,
    title: 'Card 1',
    description: 'This is the first card',
    image: 'https://source.unsplash.com/random/300x200?sig=1',
  },
  {
    id: 2,
    title: 'Card 2',
    description: 'This is the second card',
    image: 'https://source.unsplash.com/random/300x200?sig=2',
  },
];

const about = "THIs is about page"

// GET route for about page
app.get('/about',(req,res)=>{
    res.json(about)
})

// GET route to return card data
app.get('/cards', (req, res) => {
  res.json(cards);
});

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
