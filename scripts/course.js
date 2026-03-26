const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

function totalCredits(total, next) {
    return total + next;
};

let courseContainer = document.getElementById('courses');

function populateCoursesDiv(course) {
    let creditsArray = new Array();
    course.forEach(course => {
        let card = document.createElement('section');
        card.classList.add(`${course.completed}`);

        let cName = document.createElement('h1');
        cName.textContent = `${course.subject} ${course.number}`;

        let credits = document.createElement('span');
        credits.textContent = `(${course.credits}-credits)`

        creditsArray.push(course.credits);

        card.addEventListener('click', () => {  //courseDiv
            displayCourseDetails(course);
        });

        card.append(cName);
        card.append(credits);
        courseContainer.append(card);
    });
    let creditSum = creditsArray.reduce(totalCredits);
    document.getElementById('totalCredits').innerHTML = `Total credits: ${creditSum}`;
};

allCourses(courses);
function allCourses(allCourses) {
    courseContainer.innerHTML = "";
    populateCoursesDiv(allCourses);
};

function wddCourses(courses) {
    courseContainer.innerHTML = "";
    let arrayWdd = courses.filter(course => course.subject === 'WDD');
    populateCoursesDiv(arrayWdd);
};

// function wddCourses(courses) {
//     courseContainer.innerHTML = "";
//     courses.forEach(course => {
//         if (course.subject == 'WDD') {
//             let card = document.createElement('section');
//             card.classList.add(`${course.completed}`);
//             let cName = document.createElement('h1');
//             cName.textContent = `${course.subject} ${course.number}`;

//             card.append(cName);
//             courseContainer.append(card);
//         }
//     });  
// };

function cseCourses(courses) {
    courseContainer.innerHTML = '';
    let arrayCse = courses.filter(course => course.subject === 'CSE');
    populateCoursesDiv(arrayCse );
};

document.getElementById('allc').addEventListener('click', () => allCourses(courses));
document.getElementById('wddc').addEventListener('click', () => wddCourses(courses));
document.getElementById('csec').addEventListener('click', () => cseCourses(courses));


const courseDetails = document.querySelector('#courseDetails');
function displayCourseDetails(course) {
    courseDetails.innerHTML = ``;
    courseDetails.innerHTML = `
            <button id="closeButton">❌</button>
            <h2>${course.subject} ${course.number}</h2>
            <h3>${course.title}</h3>
            <h3>Credits: ${course.credits}</h3>
            <p>${course.description}</p>
            <p>${course.certificate}</p>
            <h3>${course.technology.join(', ')}</h3>
    `;
    courseDetails.showModal();

    courseDetails.addEventListener('click', (bob) => {   //Used copilot to get this the way it is
        if (bob.target === courseDetails) {
            courseDetails.close();
        }
    });

    const closeButton = document.querySelector('#closeButton');
    closeButton.addEventListener('click', () => {
        courseDetails.close();
    });
};