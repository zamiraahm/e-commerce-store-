namespace API.Entities
{
    public class Product
    {
       
        public int Id { get; internal set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public long Price { get; set; }
        public string PictureUrl { get; set; }
        public string Genre { get; set; }
        public string Author { get; set; }
        public int QuantityInStock { get; set; }
    }
} 