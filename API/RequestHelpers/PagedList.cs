using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace API.RequestHelpers
{
    public class PagedList<G> : List<G>
    {
        public PagedList(List<G> items , int count , int PageNumber , int pageSize)
        {
            MetaData = new MetaData
            {
                TotalCount = count , 
                PageSize = pageSize, 
                CurrentPage = PageNumber, 
                TotalPages = (int)Math.Ceiling(count / (double)pageSize)
            };
            AddRange(items);
        }
        public MetaData MetaData { get; set; }

        public static async Task<PagedList<G>> ToPagedList(IQueryable<G> query ,
         int pageNumber, int pageSize)
        {
           var count = await query.CountAsync();
           var items = await query.Skip((pageNumber-1)*pageSize).Take(pageSize).ToListAsync();
           return new PagedList<G>(items, count , pageNumber, pageSize);
        }
    }
}