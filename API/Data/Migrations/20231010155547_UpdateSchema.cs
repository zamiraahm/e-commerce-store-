using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Data.Migrations
{
    /// <inheritdoc />
    public partial class UpdateSchema : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Type",
                table: "Products",
                newName: "Genre");

            migrationBuilder.RenameColumn(
                name: "Brand",
                table: "Products",
                newName: "Author");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Genre",
                table: "Products",
                newName: "Type");

            migrationBuilder.RenameColumn(
                name: "Author",
                table: "Products",
                newName: "Brand");
        }
    }
}
