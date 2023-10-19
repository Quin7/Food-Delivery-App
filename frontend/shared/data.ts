import { Food } from "./models/foods";

export const sample_foods:Food[] = [
    {
        id: '1',
        name: 'Vegetable Pizza',
        price: 150,
        cookTime: '15-20',
        favorite: false,
        origins: ['Italian','Chinese'],
        stars: 4.5,
        imageUrl: '/assets/foods_images/veg-pizza.png',
        tags:['FastFood', 'Pizza', 'Lunch', 'Dinner', 'Snacks']
    },
    {
        id: '2',
        name: 'Vegetable Biryani',
        price: 150,
        cookTime: '20-30',
        favorite: false,
        origins: ['Indian','Mughlai'],
        stars: 4.5,
        imageUrl: '/assets/foods_images/veg-pizza.png',
        tags:['Breakfast', 'Biryani', 'Lunch', 'Dinner']
    },
    {
        id: '3',
        name: 'Chicken Biryani',
        price: 250,
        cookTime: '20-30',
        favorite: false,
        origins: ['Indian','Nizam'],
        stars: 4.5,
        imageUrl: '/assets/foods_images/veg-pizza.png',
        tags:['Biryani', 'Chicken', 'Lunch', 'Dinner', 'Chicken Biryani']
    },
    {
        id: '4',
        name: 'Mutton Biryani',
        price: 280,
        cookTime: '20-30',
        favorite: false,
        origins: ['Indian','Nizam'],
        stars: 4.5,
        imageUrl: '/assets/foods_images/veg-pizza.png',
        tags:['Biryani', 'Mutton', 'Lunch', 'Dinner', 'Mutton Biryani']
    },
    {
        id: '5',
        name: 'Fish Fry',
        price: 220,
        cookTime: '15-20',
        favorite: false,
        origins: ['Indian','Chinese', 'Italian'],
        stars: 4.5,
        imageUrl: '/assets/foods_images/veg-pizza.png',
        tags:['FryItems', 'Fish', 'Lunch', 'Dinner', 'Snacks', 'Fish Fry']
    },
    {
        id: '7',
        name: 'Chicken Shawarma',
        price: 150,
        cookTime: '15-20',
        favorite: false,
        origins: ['Indian','Arabian'],
        stars: 4.5,
        imageUrl: '/assets/foods_images/veg-pizza.png',
        tags:['FastFood', 'Shawarma', 'Lunch', 'Dinner', 'Snacks', 'Chicken Shawarma']
    }
]