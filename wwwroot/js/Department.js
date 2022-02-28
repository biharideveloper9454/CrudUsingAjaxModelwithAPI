$(document).ready(function () {
    loadData();
});
function loadData() {
    $.ajax({
        url: 'Department/GetDepartment',
        type: 'GET',
        dataType: 'json',
        success: function (result) {
            var data = '';
            $.each(result, function (key, item) {
                data += '<tr>';
                data += '<td>' + item.id + '</td>';
                data += '<td>' + item.departName + '</td>';
                data += '<td>' + item.dCode + '</td>';
                data += '<td><a href="#" onclick="Delete(' + item.id + ')" class="btn btn-sm btn-danger">Delete</a> || <a href="#" onclick="return Edit(' + item.id + ')" class="btn btn-sm btn-primary">Edit</a></td>';
                data += '</tr>';
            });
            $('.tbody').html(data);
        },
        error: function () {
            alert('Data can not Load');
        }
    });
}
function Add() {
    var obj = {
        departName: $('#DepartName').val(),
        dCode: $('#DCode').val()
    };
    $.ajax({
        url: 'Department/AddDepartment',
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json;charset=utf=8;',
        data: JSON.stringify(obj),
        success: function () {
            loadData();
            blank();
            modalHide();
            alert('Data Saved!');
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

function Edit(Id) {
    $('#myModalLabel').text("Edit Detail");
    $('#Id').parent().show();
    $('#DepartName').css('border-color', 'lightgrey');
    $('#DCode').css('border-color', 'lightgrey');
    $.ajax({
        url: 'Department/Edit?id=' + Id,
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json;charset=utf-8',
        success: function (result) {
            $('#Id').val(result.id);
            $('#DepartName').val(result.departName);
            $('#DCode').val(result.dCode);
            $('#myModal').modal("show");
            $('#btnUpdate').show();
            $('#btnAdd').hide();
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
    return false;
}

function Update() {
    var obj = {
        id: parseInt($('#Id').val()),
        departName: $('#DepartName').val(),
        dCode: $('#DCode').val()
    };
    $.ajax({
        url: 'Department/Update',
        type: 'POST',
        contentType: 'application/json;charset=utf-8;',
        data: JSON.stringify(obj),
        success: function () {
            loadData();
            blank();
            modalHide();
            alert('Record Updated!');
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}
function Delete(Id) {
    $.ajax({
        url: 'Department/Delete?id=' + Id,
        type: 'Post',
        dataType: 'json',
        contentType: 'application/json;charset=utf-8',
        success: function (result) {
            alert('Record Removed');
            loadData();
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}
function blank() {
    $('#DepartName').val("");
    $('#DCode').val("");
}
function modalHide() {
    $('#myModal').modal('hide');
}
function HideKey() {
    $("#myModalLabel").text("Add Department");
    $("#Id").parent().hide();
}
