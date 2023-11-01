using System.Text.Json;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Extensions;
using API.RequestHelpers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    
    public class ProductsController : BaseApiController
    {
        private readonly StoreContext _context;

        public ProductsController(StoreContext context)
        {
            _context = context;
            
        }

        [HttpGet]
        public async Task<ActionResult<PagedList<Product>>> GetProducts([FromQuery]ProductParams productParams)
        {
            var query = _context.Products
                  .Sort(productParams.OrderBy)
                  .Search(productParams.SearchTerm)
                  .Filter(productParams.Authors , productParams.Genres)
                  .AsQueryable();

            var products = await PagedList<Product>.ToPagedList(query , 
            productParams.PageNumber , productParams.PageSize);

            Response.AddPaginationHeader(products.MetaData);

            return products;
        }

        [HttpGet("{id}", Name = "GetProduct")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
           var product = await _context.Products.FindAsync(id);

           if(product == null) return NotFound(); 

           return product;
        }

        [HttpGet("filters")]
        public async Task<IActionResult> GetFilters()
        {
            var authors = await _context.Products.Select(p => p.Author).Distinct().ToListAsync();
            var genres = await _context.Products.Select(p => p.Genre).Distinct().ToListAsync();

            return Ok(new {authors , genres});
        }

        [Authorize(Roles = "Admin")]
        [HttpPost]
        public async Task<ActionResult<Product>> CreateProduct(CreateProductDto productDto)
        {
            _context.Products.Add(productDto);

            var result = await _context.SaveChangesAsync() > 0;

            if(result) return CreatedAtRoute("GetProduct",new{Id = product.Id}, product);

            return BadRequest(new ProblemDetails {Title = "Problem creating new product" });
        }
    }
}
//underscore for private fields
