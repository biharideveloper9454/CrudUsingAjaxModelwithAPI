using Microsoft.EntityFrameworkCore.Migrations;

namespace CRUD_Operation_Using_DT_Modal_Ajax.Migrations
{
    public partial class mt3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Country",
                table: "Peoples",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Country",
                table: "Peoples");
        }
    }
}
