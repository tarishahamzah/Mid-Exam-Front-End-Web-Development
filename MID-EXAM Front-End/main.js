let student_table_data = document.getElementById("student_table_data_body");
let form_search_student = document.getElementById("form_search_student");
let student_data = [
    {
        "NIM" : "105021810046",
        "fullName" : "Tarisha R. J. Hamzah",
        "gender" : "Female",
        "faculty" : "Fakultas Ilmu Komputer",
        "programOfStudy" : "Informatika"
    },
    {
        "NIM" : "105021810050",
        "fullName" : "Ricky Pasulatan",
        "gender" : "Male",
        "faculty" : "Fakultas Ilmu Komputer",
        "programOfStudy" : "Informatika"
    },
    {
        "NIM" : "105021810047",
        "fullName" : "Felicia Pricilia Mosey",
        "gender" : "Female",
        "faculty" : "Fakultas Ekonomi dan Bisnis",
        "programOfStudy" : "Akuntansi"
    },
    {
        "NIM" : "105021810051",
        "fullName" : "Endro Puspito",
        "gender" : "Male",
        "faculty" : "Fakultas Ekonomi dan Bisnis",
        "programOfStudy" : "Manajemen"
    },
    {
        "NIM" : "105021810048",
        "fullName" : "Laureenanda Mea",
        "gender" : "Female",
        "faculty" : "Fakultas Ilmu Komputer",
        "programOfStudy" : "Sistem Informasi"
    },
    {
        "NIM" : "105021810052",
        "fullName" : "Christofel Halim",
        "gender" : "Male",
        "faculty" : "Fakultas Ilmu Komputer",
        "programOfStudy" : "Sistem Informasi"
    },
    {
        "NIM" : "105021810049",
        "fullName" : "Kevin Fina",
        "gender" : "Male",
        "faculty" : "Fakultas Filsafat",
        "programOfStudy" : "Ilmu Filsafat"
    },
    {
        "NIM" : "105021810053",
        "fullName" : "Grace Taliwongso",
        "gender" : "Female",
        "faculty" : "Fakultas Filsafat",
        "programOfStudy" : "Ilmu Filsafat"
    },
    {
        "NIM" : "105021810053",
        "fullName" : "Dame Lengkong",
        "gender" : "Female",
        "faculty" : "Fakultas Keperawatan",
        "programOfStudy" : "Profesi Ners"
    },
]

function refresh_student_table_data() {
    //clear table every refresh
    while(student_table_data.children.length > 0) {
        student_table_data.removeChild(student_table_data.children[0]);
    }

    for(let i=0; i<student_data.length; i++) {
        let row = student_table_data.insertRow();
        
        let NIM = row.insertCell(0);
        NIM.innerHTML = student_data[i].NIM;

        let fullName = row.insertCell(1);
        fullName.innerHTML = student_data[i].fullName;

        let gender = row.insertCell(2);
        gender.innerHTML = student_data[i].gender;

        let faculty = row.insertCell(3);
        faculty.innerHTML = student_data[i].faculty;

        let programOfStudy = row.insertCell(4);
        programOfStudy.innerHTML = student_data[i].programOfStudy;

        let removeButton_cell = row.insertCell(5);
        
        let removeButton = document.createElement("button");
        removeButton.classList.add("btn");
        removeButton.classList.add("btn-danger");
        removeButton.classList.add("shadow-sm");
        removeButton.innerHTML = "<svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-person-x-fill' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z'/></svg>";
        removeButton.addEventListener('click', (e) => {
            student_data.splice(i, 1);
            refresh_student_table_data();
        })

        removeButton_cell.appendChild(removeButton);
    }
}

// Add Student
function add_student() {
    let NIM = document.getElementById("form_stud_id").value;
    let fullName = document.getElementById("form_stud_name").value;
    
    let gender = "";
    if(document.getElementById("genderRadio1").checked) {
        gender = "Male";
    } else if (document.getElementById("genderRadio2").checked)
    {
        gender = "Female";
    }

    let faculty = document.getElementById("form_stud_faculty").value;
    let programOfStudy = document.getElementById("form_stud_programOfStudy");
    programOfStudy = programOfStudy.options[programOfStudy.selectedIndex].text;

    student_data.push({
        "NIM" : NIM,
        "fullName" : fullName,
        "gender" : gender,
        "faculty" : faculty,
        "programOfStudy" : programOfStudy
    });

    refresh_student_table_data();

    document.getElementById("form_stud_id").value = "";
    document.getElementById("form_stud_name").value = "";
    document.getElementById("form_stud_faculty").selectedIndex = 0;
    document.getElementById("form_stud_programOfStudy").selectedIndex = -1;
    
     {
        let form_stud_programOfStudy = document.getElementById("form_stud_programOfStudy");
        form_stud_programOfStudy.textContent = ''; //kill all children element sadisticialy
        form_stud_programOfStudy.appendChild((() => {let x = document.createElement("option"); x.innerText = "--- SELECT PROGRAM OF STUDY ---"; return x;})());
        form_stud_programOfStudy.selectedIndex = 0;
    }
    
}

// search student
function search_student() {
    while(student_table_data.children.length > 0) {
        student_table_data.removeChild(student_table_data.children[0]);
    }

    for(let i=0; i<student_data.length; i++) {
        if(student_data[i].fullName.includes(form_search_student.value))
        {
            let row = student_table_data.insertRow();
            
            let NIM = row.insertCell(0);
            NIM.innerHTML = student_data[i].NIM;

            let fullName = row.insertCell(1);
            fullName.innerHTML = student_data[i].fullName;

            let gender = row.insertCell(2);
            gender.innerHTML = student_data[i].gender;

            let faculty = row.insertCell(3);
            faculty.innerHTML = student_data[i].faculty;

            let programOfStudy = row.insertCell(4);
            programOfStudy.innerHTML = student_data[i].programOfStudy;

            let removeButton_cell = row.insertCell(5);
            
            let removeButton = document.createElement("button");
            removeButton.classList.add("btn");
            removeButton.classList.add("btn-danger");
            removeButton.classList.add("shadow-sm");
            removeButton.innerHTML = "<svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-person-x-fill' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z'/></svg>";
            removeButton.addEventListener('click', (e) => {
                student_data.splice(i, 1);
                refresh_student_table_data();
            })

            removeButton_cell.appendChild(removeButton);
        }
    }
}

// search by faculty
function search_byFaculty() {
    let selectByFaculty = document.getElementById("selectByFaculty");
    selectByFaculty = selectByFaculty.options[selectByFaculty.selectedIndex];
    
    while(student_table_data.children.length > 0) {
        student_table_data.removeChild(student_table_data.children[0]);
    }

    for(let i=0; i<student_data.length; i++) {
        if(student_data[i].faculty == selectByFaculty.text)
        {
            let row = student_table_data.insertRow();
            
            let NIM = row.insertCell(0);
            NIM.innerHTML = student_data[i].NIM;

            let fullName = row.insertCell(1);
            fullName.innerHTML = student_data[i].fullName;

            let gender = row.insertCell(2);
            gender.innerHTML = student_data[i].gender;

            let faculty = row.insertCell(3);
            faculty.innerHTML = student_data[i].faculty;

            let programOfStudy = row.insertCell(4);
            programOfStudy.innerHTML = student_data[i].programOfStudy;

            let removeButton_cell = row.insertCell(5);
            
            let removeButton = document.createElement("button");
            removeButton.classList.add("btn");
            removeButton.classList.add("btn-danger");
            removeButton.classList.add("shadow-sm");
            removeButton.innerHTML = "<svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-person-x-fill' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z'/></svg>";
            removeButton.addEventListener('click', (e) => {
                student_data.splice(i, 1);
                refresh_student_table_data();
            })

            removeButton_cell.appendChild(removeButton);
        }
    }
}

// search by program of study
function search_byProgramOfStudy() {
    let selectByProgramOfStudy = document.getElementById("selectByProgramOfStudy");
    selectByProgramOfStudy = selectByProgramOfStudy.options[selectByProgramOfStudy.selectedIndex];
    
    while(student_table_data.children.length > 0) {
        student_table_data.removeChild(student_table_data.children[0]);
    }

    for(let i=0; i<student_data.length; i++) {
        if(student_data[i].programOfStudy == selectByProgramOfStudy.text)
        {
            let row = student_table_data.insertRow();
            
            let NIM = row.insertCell(0);
            NIM.innerHTML = student_data[i].NIM;

            let fullName = row.insertCell(1);
            fullName.innerHTML = student_data[i].fullName;

            let gender = row.insertCell(2);
            gender.innerHTML = student_data[i].gender;

            let faculty = row.insertCell(3);
            faculty.innerHTML = student_data[i].faculty;

            let programOfStudy = row.insertCell(4);
            programOfStudy.innerHTML = student_data[i].programOfStudy;

            let removeButton_cell = row.insertCell(5);
            
            let removeButton = document.createElement("button");
            removeButton.classList.add("btn");
            removeButton.classList.add("btn-danger");
            removeButton.classList.add("shadow-sm");
            removeButton.innerHTML = "<svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-person-x-fill' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z'/></svg>";
            removeButton.addEventListener('click', (e) => {
                student_data.splice(i, 1);
                refresh_student_table_data();
            })

            removeButton_cell.appendChild(removeButton);
        }
    }
}

// show add student from button
function show_add_student_form_button() {
    let button = document.getElementById("add_student_button");

    if(button.innerText == "Show Form Add New Student") {
        button.innerText = "Hide Form Add New Student";
    } else if(button.innerText == "Hide Form Add New Student") {
        button.innerText = "Show Form Add New Student";
    }
}

function createListOption(value, innerHtml) {
    let newOption = document.createElement("option");

    newOption.value = value;
    newOption.innerHTML = innerHtml;

    return newOption;
}

function form_stud_faculty_onchange() {
    let form_stud_faculty_list = document.getElementById("form_stud_faculty");
    let form_stud_programOfStudy_list = document.getElementById("form_stud_programOfStudy");

    let selected_faculty = form_stud_faculty_list.options[form_stud_faculty_list.selectedIndex].text;

    let data_programOfStudy = [
        {
            "option" : "Pascasarjana",
            "list" : ["Magister Manajemen", "Magiser Teologi"]
        },
        {
            "option" : "Fakultas Filsafat",
            "list" : ["Ilmu Filsafat"]
        },
        {
            "option" : "Fakultas Keguruan dan Ilmu Pendidikan",
            "list" : ["Pendidikan Agama", "Pendidikan Bahasa Inggris",
                      "Pendidikan Ekonomi", "Pendidikan Luar Sekolah"]
        },
        {
            "option" : "Fakultas Ekonomi dan Bisnis",
            "list" : ["Akuntansi", "Manajemen"]
        },
        {
            "option" : "Fakultas Pertanian",
            "list" : ["Agroteknologi"]
        },
        {
            "option" : "Fakultas Ilmu Komputer",
            "list" : ["Informatika", "Sistem Informasi"]
        },
        {
            "option" : "Fakultas Keperawatan",
            "list" : ["Profesi Ners", "Keperawatan"]
        },
        {
            "option" : "Akademi Sekretari Manajemen Indonesia Klabat",
            "list" : ["Sekretari (D3)"]
        }
    ];

    //clear child
    while(form_stud_programOfStudy_list.children.length > 0) {
        form_stud_programOfStudy_list.removeChild(form_stud_programOfStudy_list.children[0]);
    }

    for(let i=0; i<data_programOfStudy.length; i++) {
        if(selected_faculty == data_programOfStudy[i].option) {
            for(let j=0; j<data_programOfStudy[i].list.length; j++) {
                form_stud_programOfStudy_list.appendChild(createListOption(i, data_programOfStudy[i].list[j]));
            }
        }
    }
}

refresh_student_table_data();
