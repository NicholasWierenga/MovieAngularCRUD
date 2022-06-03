using Microsoft.AspNetCore.Mvc;
using MovieApp.Models;

namespace MovieApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MoviesController : ControllerBase
    {
        MoviesDBContext db = new MoviesDBContext();

        [HttpGet("SearchByTitle/{title}")]
        public List<Movie> SearchByTitle(string title)
        {
            Console.Write("feagaesgsadf");
            List<Movie> movies = db.Movies.Where(m => m.Title.Contains(title)).ToList();
            return movies;
        }

        [HttpGet("GetMovies")]
        public List<Movie> GetMovies()
        {
            return db.Movies.ToList();
        }

        [HttpGet("GetMovieById/{id}")]
        public Movie GetMovie(int id)
        {
            // return db.Movies.SingleOrDefault(m => m.Id == id);
            return db.Movies.Where(x => x.Id == id).First();
        }

        [HttpPost("CreateMovie/")]
        //The movie cannot come from the URL, URLs can only do a few properties at a time 
        //So to create a new movie object we need to add JSON representing movie to our request body 
        public string CreateMovie(Movie m)
        {
            Console.Write("feagaesgsadf");
            db.Movies.Add(m);
            db.SaveChanges();
            return m.Title + " has been successfully added to the database";
        }

        [HttpDelete("DeleteMovie/{id}")]
        public string DeleteMovie(int id)
        {
            Movie m = db.Movies.Find(id);
            db.Movies.Remove(m);
            db.SaveChanges();
            return $"The Movie at id {id} has been deleted successfully";
        }

        [HttpPut("UpdateMovie/{id}")]
        public string UpdateMovie(int id, Movie updatedInfo)
        {
            Movie m = db.Movies.Find(id);

            m.Title = updatedInfo.Title;
            m.Year = updatedInfo.Year;
            m.Description = updatedInfo.Description;
            m.RunTime = updatedInfo.RunTime;

            db.Movies.Update(m);
            db.SaveChanges();

            return $"The movie {m.Title} has been updated at {m.Id} id";
        }

    }
}