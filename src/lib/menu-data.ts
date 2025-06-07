export interface MenuItem {
    id: number
    name: string
    subtitle?: string
    type: string
    description: string
    image: string
    price: number
    originalPrice?: number
    isSpecial?: boolean
    rating?: number
    prepTime?: number
    servings?: number
    dietary?: string[]
    chefNote?: string
  }
  
  export interface MenuCategory {
    name: string
    description: string
    page: string
  }
  
  export const menuCategories: MenuCategory[] = [
    {
      name: "About Our Restaurant",
      description: "Our story and philosophy",
      page: "03",
    },
    {
      name: "Appetizers",
      description: "Perfect starters for your meal",
      page: "04-06",
    },
    {
      name: "Main Courses",
      description: "Our signature dishes",
      page: "07-12",
    },
    {
      name: "Desserts",
      description: "Sweet endings to remember",
      page: "13-15",
    },
    {
      name: "Contact & Hours",
      description: "Visit us today",
      page: "16",
    },
  ]
  
  export const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Mediterranean Salad",
      subtitle: "Fresh & Healthy",
      type: "Appetizer",
      description:
        "A vibrant mix of fresh greens, creamy feta cheese, Kalamata olives, crisp cucumber, cherry tomatoes, and red onion, all tossed in our house-made lemon-herb vinaigrette.",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop&q=80",
      price: 11.25,
      rating: 4,
      prepTime: 10,
      servings: 1,
      dietary: ["Vegetarian", "Gluten-Free"],
      chefNote: "Our olives are imported directly from Greece for authentic flavor.",
    },
    {
      id: 2,
      name: "Truffle Arancini",
      subtitle: "Crispy Italian Delight",
      type: "Appetizer",
      description:
        "Golden, crispy risotto balls filled with aromatic truffle and aged Parmesan cheese, served alongside a rich, creamy wild mushroom sauce and garnished with fresh herbs.",
      image: "https://images.unsplash.com/photo-1551326844-4df70f78d0e9?w=800&auto=format&fit=crop&q=80",
      price: 14.5,
      isSpecial: true,
      rating: 5,
      prepTime: 25,
      servings: 2,
      dietary: ["Vegetarian"],
      chefNote: "Made with authentic Italian Arborio rice and black truffle oil.",
    },
    {
      id: 3,
      name: "Spicy Tuna Tartare",
      subtitle: "Ocean Fresh",
      type: "Appetizer",
      description:
        "Fresh sashimi-grade tuna mixed with avocado, cucumber, and spicy mayo, served with crispy wonton chips and a drizzle of sriracha aioli.",
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&auto=format&fit=crop&q=80",
      price: 16.75,
      rating: 5,
      prepTime: 15,
      servings: 1,
      dietary: ["Gluten-Free"],
      chefNote: "Tuna is delivered fresh daily from our trusted suppliers.",
    },
    {
      id: 4,
      name: "Wagyu Beef Burger",
      subtitle: "Premium Experience",
      type: "Main Course",
      description:
        "Premium Wagyu beef patty grilled to perfection, topped with aged cheddar, crispy bacon, arugula, heirloom tomatoes, and our signature truffle aioli on a brioche bun.",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80",
      price: 28.99,
      originalPrice: 32.99,
      isSpecial: true,
      rating: 5,
      prepTime: 20,
      servings: 1,
      chefNote: "Our Wagyu beef is sourced from certified farms for the ultimate taste experience.",
    },
    {
      id: 5,
      name: "Pan-Seared Salmon",
      subtitle: "Atlantic Fresh",
      type: "Main Course",
      description:
        "Fresh Atlantic salmon fillet pan-seared to perfection, served with roasted seasonal vegetables, quinoa pilaf, and finished with a lemon butter sauce.",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&auto=format&fit=crop&q=80",
      price: 26.99,
      rating: 4,
      prepTime: 18,
      servings: 1,
      dietary: ["Gluten-Free", "Healthy"],
      chefNote: "Rich in Omega-3 fatty acids and sustainably sourced.",
    },
    {
      id: 6,
      name: "Lobster Risotto",
      subtitle: "Luxury Comfort",
      type: "Main Course",
      description:
        "Creamy Arborio rice cooked with fresh lobster meat, white wine, and Parmesan cheese, finished with butter, fresh herbs, and a touch of lemon zest.",
      image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=800&auto=format&fit=crop&q=80",
      price: 34.5,
      isSpecial: true,
      rating: 5,
      prepTime: 30,
      servings: 1,
      dietary: ["Gluten-Free"],
      chefNote: "Made with fresh Maine lobster and aged Parmigiano-Reggiano.",
    },
    {
      id: 7,
      name: "Wood-Fired Pizza",
      subtitle: "Neapolitan Style",
      type: "Main Course",
      description:
        "Traditional Neapolitan pizza with San Marzano tomatoes, fresh mozzarella di bufala, basil leaves, and extra virgin olive oil, cooked in our wood-fired oven.",
      image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800&auto=format&fit=crop&q=80",
      price: 19.5,
      rating: 4,
      prepTime: 12,
      servings: 2,
      dietary: ["Vegetarian"],
      chefNote: "Our dough is fermented for 48 hours for the perfect texture.",
    },
    {
      id: 8,
      name: "Duck Confit",
      subtitle: "French Classic",
      type: "Main Course",
      description:
        "Slow-cooked duck leg confit with crispy skin, served with garlic mashed potatoes, sautéed green beans, and a rich cherry gastrique sauce.",
      image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=800&auto=format&fit=crop&q=80",
      price: 31.75,
      rating: 5,
      prepTime: 35,
      servings: 1,
      dietary: ["Gluten-Free"],
      chefNote: "Cooked sous-vide for 24 hours to achieve perfect tenderness.",
    },
    {
      id: 9,
      name: "Fettuccine Alfredo",
      subtitle: "Creamy Perfection",
      type: "Main Course",
      description:
        "House-made fettuccine pasta tossed in our signature Alfredo sauce made with butter, heavy cream, and Parmigiano-Reggiano, topped with grilled chicken.",
      image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=800&auto=format&fit=crop&q=80",
      price: 21.75,
      rating: 4,
      prepTime: 15,
      servings: 1,
      chefNote: "Pasta is made fresh daily in our kitchen.",
    },
    {
      id: 10,
      name: "Chocolate Lava Cake",
      subtitle: "Molten Indulgence",
      type: "Dessert",
      description:
        "Warm, decadent chocolate cake with a molten dark chocolate center, served with vanilla bean ice cream, fresh berries, and a drizzle of raspberry coulis.",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&auto=format&fit=crop&q=80",
      price: 9.5,
      isSpecial: true,
      rating: 5,
      prepTime: 12,
      servings: 1,
      dietary: ["Vegetarian"],
      chefNote: "Made with Belgian dark chocolate for the richest flavor.",
    },
    {
      id: 11,
      name: "Tiramisu",
      subtitle: "Italian Classic",
      type: "Dessert",
      description:
        "Traditional Italian dessert with layers of coffee-soaked ladyfingers, rich mascarpone cream, and a dusting of premium cocoa powder.",
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&auto=format&fit=crop&q=80",
      price: 8.75,
      rating: 4,
      prepTime: 5,
      servings: 1,
      dietary: ["Vegetarian"],
      chefNote: "Made with authentic Italian mascarpone and espresso.",
    },
    {
      id: 12,
      name: "Crème Brûlée",
      subtitle: "French Elegance",
      type: "Dessert",
      description:
        "Silky smooth vanilla custard topped with a layer of caramelized sugar, served with fresh seasonal berries and a delicate tuile cookie.",
      image: "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?w=800&auto=format&fit=crop&q=80",
      price: 10.25,
      rating: 5,
      prepTime: 8,
      servings: 1,
      dietary: ["Vegetarian", "Gluten-Free"],
      chefNote: "Infused with Madagascar vanilla beans for authentic flavor.",
    },
  ]
  