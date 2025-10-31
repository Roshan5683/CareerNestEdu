using CareerNestEdu.Models;
using Microsoft.EntityFrameworkCore;

namespace CareerNestEdu.DAL
{
    public class CareerDBContext : DbContext
    {
        public CareerDBContext(DbContextOptions<CareerDBContext> options) : base(options)
        {
        }

        // No need to keep connection string here anymore
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            // Connection string handled in Program.cs using dependency injection
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }

        // Add your tables as DbSet properties here
        public DbSet<User> Users { get; set; }
    }
}
