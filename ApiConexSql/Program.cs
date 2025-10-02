using ApiConexSql.Data;
using Microsoft.EntityFrameworkCore;
using ApiConexSql.Models;

var builder = WebApplication.CreateBuilder(args);

// Configurar EF Core con SQL Server
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// ENDPOINT: Registrar usuario
app.MapPost("/register", async (Usuario user, AppDbContext db) =>
{
    db.Usuarios.Add(user);
    await db.SaveChangesAsync();
    return Results.Ok(user);
});

// ENDPOINT: Listar usuarios
app.MapGet("/usuarios", async (AppDbContext db) =>
{
    return await db.Usuarios.ToListAsync();
});

app.Run();


record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}
