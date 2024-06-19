const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

const recipes = [
    { id: 1, title: 'Панкейки', description: 'Смачні панкейки на сніданок', ingredients: 'Борошно, молоко, яйця', instructions: 'Змішати всі інгредієнти і смажити на сковороді' },
    { id: 2, title: 'Борщ', description: 'Традиційний український борщ', ingredients: 'Буряк, капуста, картопля, м\'ясо', instructions: 'Зварити всі інгредієнти у каструлі' },
    // інші рецепти
];

app.get('/api/recipes', (req, res) => {
    res.json(recipes);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
