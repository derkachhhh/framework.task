const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

let recipes = [
    { id: 1,
        title: 'Борщ',
        ingredients: 'Буряк, капуста, картопля, м\'ясо, цибуля, морква, томатна паста, часник, лавровий лист, сіль, перець',
        instructions: '1. Наріжте всі овочі. 2. Зваріть м\'ясний бульйон. 3. Додайте картоплю, буряк і варіть 10 хвилин. 4. Додайте капусту, моркву і цибулю, варіть ще 10 хвилин. 5. Додайте томатну пасту і спеції. 6. Варіть до готовності.' },
    { id: 2,
        title: 'Графські розвали',
        ingredients: 'Горіхи, безе, згущене молоко, вершкове масло, шоколад для глазурі',
        instructions: '1. Випечіть безе з яєчних білків і цукру. 2. Змішайте згущене молоко з вершковим маслом для крему. 3. Зберіть торт, перекладаючи шари безе кремом і посипаючи горіхами. 4. Полийте торт шоколадною глазур\'ю.' },
    { id: 3,
        title: 'М\'ясо по-французьки',
        ingredients: 'Свинина, цибуля, помідори, твердий сир, майонез, сіль, перець',
        instructions: '1. Наріжте м\'ясо на порційні шматки і відбийте. 2. Покладіть м\'ясо на деко, посоліть і поперчіть. 3. Зверху покладіть кільця цибулі та помідорів. 4. Натріть сир і посипте зверху. 5. Полийте майонезом. 6. Запікайте в духовці при 180°C до готовності.' }
];

app.use(express.json());
app.use(cors());

app.get('/api/recipes', (req, res) => {
    res.json(recipes);
});

app.get('/api/recipes/:id', (req, res) => {
    const recipeId = parseInt(req.params.id);
    const recipe = recipes.find(r => r.id === recipeId);
    if (recipe) {
        res.json(recipe);
    } else {
        res.status(404).send('Recipe not found');
    }
});

// Add a new recipe
app.post('/api/recipes', (req, res) => {
    const newRecipe = {
        id: recipes.length + 1,
        ...req.body
    };
    recipes.push(newRecipe);
    res.status(201).json(newRecipe);
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});