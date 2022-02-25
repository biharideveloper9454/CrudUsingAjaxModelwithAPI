using Microsoft.EntityFrameworkCore.Migrations;

namespace CRUD_Operation_Using_DT_Modal_Ajax.Migrations
{
    public partial class mt1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "name",
                table: "Peoples",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "Peoples",
                newName: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Peoples",
                newName: "name");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Peoples",
                newName: "id");
        }
    }
}
