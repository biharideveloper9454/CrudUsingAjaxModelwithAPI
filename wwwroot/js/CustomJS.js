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
                html += '<td>' + item.country + '</td>';
                html += '<td><a href="#" onclick="return Edit(' + item.id + ')" class="btn btn-sm btn-primary">Edit</a> <span class="text-info">||</span> <a href="#" onclick="Delete(' + item.id + ')" class="btn btn-sm btn-danger">Delete</a></td>';
                html += '</tr>';
            });
            $('.tbody').html(html);
        },
        error: function (errormessage) {
            swal("Data can't be load, Some Technical Issues......\nPlease try after some times!");
        }
    });
}
function Add() {

    debugger;
    var obj = {
        name: $('#name').val(),
        country:$('#Country').val()
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
                $('#Country').val("");
            }
            swal(result);
        },
        error: function (errormessage) {
            swal(errormessage.responseText);
        }
    });
}
function Edit(Id) {
    $("#myModalLabel").text("Edit Details");
    $("#id").parent().show();
    $('#name').css('border-color', 'lightgrey');
    $('#Country').css('border-color', 'Tomato');
    $.ajax({
        url: 'api/People/GetPerson?id=' + Id,
        type: "GET",
        contentType: "application/json;charset=UTF-8",
        dataType: "json",
        success: function (result) {
            if (result.length > 0) {
                $('#id').val(result[0].id);
                $('#name').val(result[0].name);
                $('#Country').val(result[0].country);
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
        country: $('#Country').val()
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
            $('#Country').val("");
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
