$(document).ready(function () {
    loadData();
});
function loadData() {
    $.ajax({
        url: '/api/People/GetPerson',
        type: "GET",
        dataType: "json",
        success: function (result) {
            var html = '';
            $.each(result, function (key, item) {
                html += '<tr>';
                html += '<td>' + item.id + '</td>';
                html += '<td>' + item.name + '</td>';
                html += '<td><a href="#" onclick="return Edit(' + item.id + ')" class="btn btn-sm btn-primary">Edit</a> | <a href="#" onclick="Delete(' + item.id + ')" class="btn btn-sm btn-danger">Delete</a></td>';
                html += '</tr>';
            });
            $('.tbody').html(html);
        },
        error: function (errormessage) {
            /*alert(errormessage.responseText);*/
            swal("Hello world!");
        }
    });
}
function Add() {
    var obj = {
        name: $('#name').val(),
    };
    $.ajax({
        type: "POST",
        url: 'api/People/AddPerson',
        contentType: "application/json;charset=utf-8",
        data: JSON.stringify(obj),
        success: function (result) {
            if (result.indexOf("successfully") > -1) {
                loadData();
                $('#myModal').modal('hide');
                $('#name').val("");
            }
            swal(result);
        },
        error: function (errormessage) {
            /*alert(errormessage.responseText);*/
            swal(errormessage.responseText);
        }
    });
}
function Edit(Id) {
    $("#myModalLabel").text("Edit Details");
    $("#id").parent().show();
    $('#name').css('border-color', 'lightgrey');
    $.ajax({
        url: 'api/People/GetPerson?id=' + Id,
        typr: "GET",
        contentType: "application/json;charset=UTF-8",
        dataType: "json",
        success: function (result) {
            if (result.length > 0) {
                $('#id').val(result[0].id);
                $('#name').val(result[0].name);
                $('#myModal').modal('show');
                $('#btnUpdate').show();
                $('#btnAdd').hide();
            }
            
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
    return false;
}
function Update() {
    var obj = {
        id: parseInt($('#id').val()),
        name: $('#name').val(),
    };
    $.ajax({
        url: 'api/People/UpdatePerson',
        data: JSON.stringify(obj),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        success: function () {
            loadData();
            $('#myModal').modal('hide');
            $('#id').val("");
            $('#name').val("");
            swal('Record Updated!');
        },
        
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}
function Delete(Id) {
    if (confirm("Are you sure, You want to delete this Record?")) {
        $.ajax({
            url: 'api/People/DeletePerson?id=' + Id,
            type: "POST",
            contentType: "application/json;charset=UTF-8",
            success: function () {
                swal('Record is Successfully Removed in Database!')
                loadData();
            },
            error: function (errormessage) {
                alert(errormessage.responseText);
            }
        });
    }
}
function HideKey() {
    $("#myModalLabel").text("Add Person");
    $("#id").parent().hide();
}
