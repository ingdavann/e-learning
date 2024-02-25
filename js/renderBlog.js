'use strict';
let blogs = [
    {
        img: "../style/img/cyber.jpg",
        title: "តើអ្វីទៅជា Cybersecurity",
        urlBlog: "https://www.istad.co/content/28/what-is-web-4.0",
        desc: "Cyber Security គឺជាការ ការពារ ប្រព័ន្ធកុំព្យូទ័រ, servers, ទូរស័ព្ទ, ប្រព័ន្ធអេឡិចត្រូនិច, network និង ទិន្នន័យ ​ពីការវាយប្រហារផ្សេងៗ ដែលមានគោលបំណងមិនល្អ។ ដែលបណ្ដាលអោយមាន​ ការលុកចូល ការផ្លាស់ប្ដូរការបង្កក ឬកំទេចនូវព័ត៌មានសំខាន់ៗ លួចយកទិន្ន័យ ឬលុយពីអ្នកប្រើប្រាស់ឬធ្វើឲ្យរាំងស្ទះដល់ដំណើរការធុរកិច្ចទូទៅ។"
    },
    {
        img:"../style/img/react.jpg",
        title:"ការប្រៀបធៀបរវាង Flutter និង React Native",
        urlBlog:"https://www.istad.co/content/28/what-is-web-4.0",
        desc:"ក្រុមហ៊ុន អាជីវកម្ម និង វិស័យជាច្រើនបានតែកំពុងអភិវឌ្ឍ និង​ប្រើប្រាស់នូវបច្ចេកវិទ្យារបស់ទូរស័ព្ទ ឆ្លាតវៃ ដើម្បីពង្រីកវិសាលភាព និង ភាពរីកចម្រើនរបស់គេយោងទៅតាមស្ថិតិរបស់ Statista នៅទូទាំងពិភពលោក mobile app បានបង្កើតប្រាក់ចំនួន 581.9ពាន់លានដុល្លារក្នុងឆ្នាំ2022និងរំពឹងថានឹងអាចរកបាន 935ពាន់លានដុល្លារនៅឆ្នាំ 2023។"
    },
    {
        img:"../style/img/api.jpg",
        title:"ភាពខុសគ្នារវាង Rest API និង Restful API",
        urlBlog:"https://www.istad.co/content/28/what-is-web-4.0",
        desc:"API មកពីពាក្យពេញ “Application Programming Interface”។ និយាយអោយខ្លីគឺជាអ្នកដែល នៅចន្លោះកណ្តាលសម្រាប់អោយ Applications ធ្វើការឬទាក់ទងជាមួយគ្នាបាន។ ដូច្នេះ ជំនួសដោយការទៅទិញ ឬ កម៉្មង់ Pizza ពីកន្លែងចម្អិន។  ភ្ញៀវត្រូវធ្វើការកម្ម៉ង់តាម Waiter។"
    },
    {
        img:"../style/img/web3.0.png",
        title:"តើអ្វីទៅជា WEB 3.0?",
        urlBlog:"https://www.istad.co/content/17/what-is-web3",
        desc:"មុននឹងស្វែងយល់អំពី WEB 3.0 យើងនឹងធ្វើការនិយាយអំពី ប្រវត្តិ របស់ WEB និង​ ការវិវត្តន៍នៃ Internet ជាមុនសិន។WEB បានកើត នៅប្រទេស Switzerland ក្នុងឆ្នាំ 1989។"
    }
]
let queryBlogs = document.querySelector("#blog");
let card =""

blogs.forEach((blog) => {
    card += `
    <div class="col-md-4 col-lg-3 col-xl-3">
        <div class="card">
            <img src="${blog.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title text-truncate"><a href="${blog.urlBlog}" target="_blank" id="hover-card" style="text-decoration: none;">${blog.title}</a></h5>
                <p class="card-text text-truncate opacity-75">${blog.desc}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <span><i class="fa-solid fa-tag"></i> អត្ថបទ</span>
                    <span><i class="fa-solid fa-calendar-days"></i> 05-10-2023</span>
                </div>
            </div>
        </div>
    </div>
    `
})
queryBlogs.innerHTML += card