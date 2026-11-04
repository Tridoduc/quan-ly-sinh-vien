
let students = [
    { id: "SV01", name: "Nguyễn Văn A", className: "CNTT1" },
    { id: "SV02", name: "Trần Văn B", className: "CNTT1" },
    { id: "SV03", name: "Lê Văn C", className: "CNTT2" },
    { id: "SV04", name: "Phạm Văn D", className: "CNTT2" },
    { id: "SV05", name: "Hoàng Văn E", className: "CNTT3" }
];

function displayStudents() {
    const studentList = document.getElementById("student-list");

    studentList.innerHTML = students.map(student => `
        <tr>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.className}</td>
        </tr>
    `).join("");
}

displayStudents();

