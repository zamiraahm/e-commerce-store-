using API.Entities;
using Microsoft.AspNetCore.Identity;

namespace API.Data
{
    public static class DbInitializer
    {
        public static async Task Initialize(StoreContext context, UserManager<User> userManager)
        {   
            if(!userManager.Users.Any())
            {
                var user= new User 
                {
                    UserName="liz",
                    Email="liz@test.com"
                };
                await userManager.CreateAsync(user, "Pa$$w0rd");
                await userManager.AddToRoleAsync(user,"Member");

                var admin = new User
                {
                    UserName="admin",
                    Email="admin@test.com"
                };
                await userManager.CreateAsync(admin,"Pa$$w0rd");
                await userManager.AddToRolesAsync(admin,new[]{"Member", "Admin"});
            }


            if(context.Products.Any()) return;

            var products = new List<Product>
            {
               	new Product
                {
                    Name = "The Catcher in the Rye",
                    Description =
                        " A classic novel by J.D. Salinger.",
                    Price = 1000,
                    PictureUrl = "/images/products/thecatcher.jpeg",
                    Author = "J.D. Salinger",
                    Genre = "Fiction",
                    QuantityInStock = 50
                },
                new Product
                {
                    Name = "To Kill a Mockingbird",
                    Description = "A Pulitzer Prize-winning novel by Harper Lee",
                    Price = 1500,
                    PictureUrl = "/images/products/tokill.jpeg",
                    Author = "Harper Lee",
                    Genre = "Fiction",
                    QuantityInStock = 9
                },
                new Product
                {
                    Name = "1984",
                    Description =
                        "A dystopian novel by George Orwell",
                    Price = 1600,
                    PictureUrl = "/images/products/1984.jpeg",
                    Author = "George Orwell",
                    Genre = "Fiction",
                    QuantityInStock = 16
                },
                new Product
                {
                    Name = "The Hobbit",
                    Description =
                        "A fantasy novel by J.R.R. Tolkien",
                    Price = 2300,
                    PictureUrl = "/images/products/thehobbit.jpeg",
                    Author = "J.R.R. Tolkien",
                    Genre = "Fantasy",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "The Great Gatsby",
                    Description =
                        "A classic novel by F. Scott Fitzgerald",
                    Price = 4300,
                    PictureUrl = "/images/products/thegreat.jpeg",
                    Author = " F. Scott Fitzgerald",
                    Genre = "Fiction",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Harry Potter and the Sorcerer's Stone",
                    Description =
                        "The first book in the Harry Potter series by J.K. Rowling",
                    Price = 3200,
                    PictureUrl = "/images/products/harrypotter.jpeg",
                    Author = " J.K. Rowling",
                    Genre = "Fantasy",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "The Da Vinci Code",
                    Description =
                        "A thriller by Dan Brown",
                    Price = 1000,
                    PictureUrl = "/images/products/thedavincicode.jpeg",
                    Author = "Dan Brown",
                    Genre = "Mystery/Thriller",
                    QuantityInStock = 25
                },
                new Product
                {
                    Name = "The Fault in Our Stars",
                    Description =
                        "A young adult novel by John Green",
                    Price = 8000,
                    PictureUrl = "/images/products/thefault.jpeg",
                    Author = "John Green",
                    Genre = "Young Adult",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "The Lord of the Rings",
                    Description =
                        "A fantasy epic by J.R.R. Tolkien",
                    Price = 5500,
                    PictureUrl = "/images/products/thelord.jpeg",
                    Author = "J.R.R. Tolkien",
                    Genre = "Fantasy",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Gone Girl",
                    Description =
                        "A psychological thriller by Gillian Flynn",
                    Price = 1800,
                    PictureUrl = "/images/products/gonegirl.jpeg",
                    Author = "Gillian Flynn",
                    Genre = "Mystery/Thriller",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "The Road",
                    Description =
                        "A dystopian novel by Suzanne Collins",
                    Price = 1500,
                    PictureUrl = "/images/products/theroad.jpeg",
                    Author = "Suzanne Collins",
                    Genre = "Science Fiction",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "The Shining",
                    Description =
                        "A horror novel by Stephen King",
                    Price = 1600,
                    PictureUrl = "/images/products/theshining.jpeg",
                    Author = "Stephen King",
                    Genre = "Horror",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "The Girl on the Train",
                    Description =
                        "A psychological thriller by Paula Hawkins",
                    Price = 1400,
                    PictureUrl = "/images/products/thegirl.png",
                    Author = "Paula Hawkins",
                    Genre = "Mystery/Thriller",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "The Alchemist",
                    Description =
                        "A philosophical novel by Paulo Coelho",
                    Price = 2500,
                    PictureUrl = "/images/products/thealchemist.jpeg",
                    Author = "Paulo Coelho",
                    Genre = "Fiction",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "The Road",
                    Description =
                        "A post-apocalyptic novel by Cormac McCarthy",
                    Price = 1899,
                    PictureUrl = "/images/products/theroad.jpeg",
                    Author = "Cormac McCarthy",
                    Genre = "Fiction",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "The Martian",
                    Description =
                        "A science fiction novel by Andy Weir",
                    Price = 1999,
                    PictureUrl = "/images/products/themartian.jpeg",
                    Author = "Andy Weir",
                    Genre = "Science Fiction",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "The Silent Patient",
                    Description = "A psychological thriller by Alex Michaelides",
                    Price = 1500,
                    PictureUrl = "/images/products/thesilentpatient.jpeg",
                    Author = "Alex Michaelides",
                    Genre = "Mystery/Thriller",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "The Fault in Our Stars",
                    Description =
                        "A young adult novel by John Green",
                    Price = 1800,
                    PictureUrl = "/images/products/thefault.jpeg",
                    Author = "John Green",
                    Genre = "Young Adult",
                    QuantityInStock = 100
                },
            };

            foreach (var product in products)
            {
                context.Products.Add(product);
            }

            context.SaveChanges();
        }
    }
}