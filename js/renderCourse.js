'use strict';
let Courses = [
    {
        img: "../style/img/HTML.jpg",
        title: "វគ្គសិក្សាមូលដ្ឋានគ្រឹះHTML",
        desc: "មេរៀននេះនិយាយអំពីណែនាំអោយស្គាល់អំពីភាសាHTMLដូចជាការប្រើប្រាស់ភាសានេះក្នុងគោលបំណងបង្កើតWebsite Web Applicationផ្សេងៗ",
    },
    {
        img: "../style/img/C.jpg",
        title: "វគ្គសិក្សាមូលដ្ឋានភាសា C Programming Language",
        desc: "មេរៀននេះនិយាយអំពីណែនាំអោយស្គាល់អំពីភាសាC និង Concept មួយចំនួនរបស់ភាសានេះ។"
    },
    {
        img: "../style/img/excel.jpg",
        title: "វគ្គសិក្សាមូលដ្ឋាន Microsoft Excel",
        desc: "មេរៀននេះនិយាយអំពីណែនាំអោយស្គាល់អំពីប្រើប្រាស់កម្មវិធីExcelក្នុងការងារប្រចាំថ្ងៃផ្សេងៗ",
    },
    {
        img: "../style/img/ppt1-Template.jpg",
        title: "វគ្គសិក្សាមូលដ្ឋានគ្រឹះMicrosoft PowerPoint",
        desc: "មេរៀននេះនិយាយអំពីណែនាំអោយស្គាល់អំពីប្រើប្រាស់កម្មវិធីPowerPointក្នុងការងារប្រចាំថ្ងៃផ្សេងៗ"
    }
]
let card = ""
let queryDOM = document.querySelector("#course")
Courses.forEach((course) => {
    card += `
    <div class="col-md-4 col-lg-3 col-xl-3">
        <div class="card">
            <img src="${course.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title oneLine" id="hover-card">${course.title}</h5>
                <p class="card-text text-truncate">${course.desc}</p>
                <div class="d-flex justify-content-between align-items-center">
                    
                    <div class="d-flex align-items-center justify-content-between corseCard" style="gap: 10px; font-size: 14px;">
                        <span>
                            <i class="fa-solid fa-tag"></i> ឥតគិតថ្លៃ
                        </span>
                        <span>
                            <i class="fa-regular fa-clock"></i> អត់កំណត់
                        </span>
                    </div>
                    
                    <a href="register.html">
                        <button class="btn btn-primary p-1.5" style="background-color: #213555; border: none; font-size: 14px;">
                            ចុះឈ្មោះ
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    `
})
queryDOM.innerHTML += card