
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

function addStudent() {
    const id = document.getElementById("student-id").value.trim();
    const name = document.getElementById("student-name").value.trim();
    const className = document.getElementById("student-class").value.trim();

    if (!id || !name || !className) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    if (students.some(student => student.id === id)) {
        alert("Mã sinh viên đã tồn tại!");
        return;
    }

    students.push({ id, name, className });

    displayStudents();

    document.getElementById("student-id").value = "";
    document.getElementById("student-name").value = "";
    document.getElementById("student-class").value = "";

    alert("Thêm sinh viên thành công!");
}

