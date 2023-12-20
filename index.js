const techSkillList = document.querySelector('.tech-skill-list')

const techSkills = ["HTML5/CSS3",
    "Responsive/Adaptive design",
    "GIT",
    "JavaScript",
    "React",
    "Redux",
    "REST API",
    "Handlebars",
    "Webpack",
    "Node.js"
]


techSkills.forEach((skill) => {
    const listItem = document.createElement("li");
    listItem.textContent = skill;
    listItem.classList.add('list-item')
    techSkillList.appendChild(listItem);
})


const softSkillList = document.querySelector('.soft-skill-list')

const softSkills = [
    'Attention to detail',
    'Teamwork',
    'Creativity',
    'Good communication'
]

softSkills.forEach(skill => {
    const listItem = document.createElement('li');
    listItem.textContent = skill;
    listItem.classList.add('list-item')
    softSkillList.appendChild(listItem);
})

const languageList = document.querySelector('.language-list');

const languages = [
    'english - upper-intermediate',
    'ukrainian - native'
]

languages.forEach(language => {
    const listItem = document.createElement('li');
    listItem.classList.add('list-item', 'language');
    listItem.textContent = language;
    languageList.appendChild(listItem)
})