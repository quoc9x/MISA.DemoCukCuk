$(document).ready(function () {
    loadData();
    var employeeJS = new EmployeeJS();
    employeeJS.loadData();
})

class EmployeeJS {
    constructor() {
        this.loadData();
    }
    loadData() {
        $.each(employees, function (index, item) {
            var trHTML = $(`<tr>
                    <td>`+ item.EmployeeCode + `</td>
                    <td>`+ item.EmployeeName + `</td>
                    <td>`+ item.Email + `</td>
                    <td>`+ item.Mobile + `</td>
                    <td>`+ item.CompanyName + `</td>
                </tr>`);
            $('.gridbar tbody').append(trHTML);
        })
    }
}

// Hàm load dữ liệu:
function loadData() {
    $.each(employees, function (index, item) {
        var trHTML = $(`<tr>
                    <td>`+ item.EmployeeCode + `</td>
                    <td>`+ item.EmployeeName + `</td>
                    <td>`+ item.Email + `</td>
                    <td>`+ item.Mobile + `</td>
                    <td>`+ item.CompanyName + `</td>
                </tr>`);
        $('.gridbar tbody').append(trHTML);
    })
}

var employees = [
    {
        EmployeeCode: "NV0001",
        EmployeeName: "Nguyễn Văn Nam",
        Email: "namnv@gmail.com",
        Mobile: 0968501428,
        CompanyName: "Công ty cổ phần ABC"
    },
    {
        EmployeeCode: "NV0002",
        EmployeeName: "Nguyễn Văn A",
        Email: "anv@gmail.com",
        Mobile: 0966888333,
        CompanyName: "Công ty cổ phần ABC"
    },
    {
        EmployeeCode: "NV0003",
        EmployeeName: "Trần Nam Hà",
        Email: "hatn@gmail.com",
        Mobile: 0968506789,
        CompanyName: "Công ty cổ phần ABC"
    },
    {
        EmployeeCode: "NV0004",
        EmployeeName: "Lê Văn Thắng",
        Email: "thanglv@gmail.com",
        Mobile: 0968789789,
        CompanyName: "Công ty cổ phần ABC"
    },
    {
        EmployeeCode: "NV0005",
        EmployeeName: "Nguyễn Trần Lê",
        Email: "lent@gmail.com",
        Mobile: 0989898923,
        CompanyName: "Công ty cổ phần ABC"
    }
]