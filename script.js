//Student Constracter
class Student{
    constructor(name,dob,matri){
        this.name = name;
        this.dob = dob;
        this.matri = matri;
    }
}
//StudentsUI Constracter
class StudentsUI{
    // Add Students To List
    addStudentToList(student){
        const list = document.getElementById('student-list');
        const tr = document.createElement('tr');
    
        tr.innerHTML = `
        <td>${student.name}</td>
        <td>${student.dob}</td>
        <td>${student.matri}</td>
        <td><a class='text-danger'><i class='far fa-trash-alt delete'></i></a></td>
        `
        list.appendChild(tr);
    }
    // Clear Fields After Adding Student
    clearFields(){
        document.getElementById('student-name').value = '';
        document.getElementById('student-dob').value = '';
        document.getElementById('matriculation').value = '';
    }
    // Show Some Alerts
    showAlert(message, className){
        //creat Div and class
        const div = document.createElement('div');
        div.className = `alert ${className}`
        div.appendChild(document.createTextNode(message))
        
        const container = document.querySelector('.container');
        const form = document.querySelector('#student-form');

        container.insertBefore(div, form);

        setTimeout(() => {
            document.querySelector('.alert').remove()
        }, 3000);
    }
    // Delete Student From List
    deleteStudent(target){
        if(target.classList.contains('delete')){
            target.parentElement.parentElement.parentElement.remove()
        }
    }
    // Delete All Students From List
    clearAllStudents(){
        const list = document.getElementById('student-list');
        while (list.firstChild) {
            list.removeChild(list.firstChild)
        }
    }
}

// Event Listners
document.getElementById('student-form').addEventListener('submit',function(e){

    const studentName = document.getElementById('student-name').value;
    const studentDOB = document.getElementById('student-dob').value;
    const studentMatri = document.getElementById('matriculation').value;

    // Instantiate student
    const student = new Student(studentName,studentDOB,studentMatri);
    const studentsUI = new StudentsUI();

    // Checke the fields if empty or not 
    if(studentName === '' || studentDOB === '' || studentMatri === ''){
        studentsUI.showAlert('Please fill in all feilds','alert-danger')
    }else{
        studentsUI.addStudentToList(student);
        studentsUI.clearFields();
        studentsUI.showAlert('Student Add','alert-success');
    }
    e.preventDefault();
})

// Event Listners
document.getElementById('student-list').addEventListener('click',function(e){
    const studentsUI = new StudentsUI();
    studentsUI.deleteStudent(e.target);
    studentsUI.showAlert('Student removed!','alert-warning');

    e.preventDefault();
})

// Event Listners
document.getElementById('clear-all').addEventListener('click',function(){
    const studentsUI = new StudentsUI();
    studentsUI.clearAllStudents();
})