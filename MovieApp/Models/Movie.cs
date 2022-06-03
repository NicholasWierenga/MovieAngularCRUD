using System;
using System.Collections.Generic;

namespace MovieApp.Models
{
    public partial class Movie
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public int? RunTime { get; set; }
        public int? Year { get; set; }
        public string? Description { get; set; }
        public string? LeadActor { get; set; }
    }
}
