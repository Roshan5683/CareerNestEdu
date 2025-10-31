using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace CareerNestEdu.Models;

public partial class CareerNestEduContext : DbContext
{
    public CareerNestEduContext()
    {
    }

    public CareerNestEduContext(DbContextOptions<CareerNestEduContext> options)
        : base(options)
    {
    }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=LAPTOP-LRDGMLLK;Database=CareerNestEdu;Trusted_Connection=True;TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__users__3214EC073F3D4D76");

            entity.ToTable("users");

            entity.HasIndex(e => e.EmailAddress, "UQ__users__1E66F691DCFA5336").IsUnique();

            entity.Property(e => e.ConfirmPassword)
                .HasMaxLength(100)
                .HasColumnName("Confirm_Password");
            entity.Property(e => e.CreateDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime")
                .HasColumnName("create_date");
            entity.Property(e => e.CreatedBy)
                .HasMaxLength(100)
                .HasColumnName("created_by");
            entity.Property(e => e.EmailAddress)
                .HasMaxLength(150)
                .HasColumnName("Email_Address");
            entity.Property(e => e.FullName)
                .HasMaxLength(100)
                .HasColumnName("Full_name");
            entity.Property(e => e.IsActive)
                .HasDefaultValue(true)
                .HasColumnName("is_Active");
            entity.Property(e => e.Password).HasMaxLength(100);
            entity.Property(e => e.PhoneNumber)
                .HasMaxLength(15)
                .HasColumnName("Phone_Number");
            entity.Property(e => e.UpdateDate)
                .HasColumnType("datetime")
                .HasColumnName("update_date");
            entity.Property(e => e.UpdatedBy)
                .HasMaxLength(100)
                .HasColumnName("updated_by");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
