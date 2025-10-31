using System;
using System.Collections.Generic;

namespace CareerNestEdu.Models;

public partial class User
{
    public int Id { get; set; }

    public string FullName { get; set; } = null!;

    public string EmailAddress { get; set; } = null!;

    public string PhoneNumber { get; set; } = null!;

    public string Password { get; set; } = null!;

    public string ConfirmPassword { get; set; } = null!;

    public DateTime CreateDate { get; set; }

    public DateTime? UpdateDate { get; set; }

    public string CreatedBy { get; set; } = null!;

    public string UpdatedBy { get; set; } = null!;

    public bool IsActive { get; set; }
}
