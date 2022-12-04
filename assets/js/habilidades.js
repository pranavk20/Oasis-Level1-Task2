const skills = document.querySelectorAll('.skill-box');
const descricao = document.querySelector('.texto-descricao');
const sobreSkill = [
                    '<p>HTML</p> <br> <p>It is a markup language used in the construction of web pages.</p> <br>',
                    '<p>CSS</p> <br> <p>It is a mechanism to add style to a web document.</p> <br>',
                    '<p>JavaScript</p> <br> <p>It is a programming language. Together with HTML and CSS, it is one of the three main technologies of the web.</p> <br>',
                    '<p>ReactJS</p> <br> <p>O React is an open source JavaScript library with a focus on creating user interfaces in web pages.</p> <br>',
                    '<p>Styled Components</p> <br> <p>It is a library (lib) that uses the concept of CSS-in-JS, or so, that allows us to write CSS codes within Javascript.</p> <br>',
                    '<p>Sass</p> <br> <p>CSS with superpowers. Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.</p> <br>',
                    '<p>Git</p> <br> <p>It is a distributed version control system, used mainly in software development.</p> <br>',
                    '<p>Github</p> <br> <p>It is a source code and file hosting platform with version control using Git. </p> <br>'
]
const dataInicio = [
                    (new Date(2021, 10, 1)).getTime(), // 0
                    (new Date(2021, 10, 1)).getTime(), // 1
                    (new Date(2022, 0, 1)).getTime(), // 2
                    (new Date(2022, 3, 1)).getTime(), // 3
                    (new Date(2022, 3, 1)).getTime(), // 4
                    (new Date(2022, 1, 1)).getTime(), // 5
                    (new Date(2021, 11, 1)).getTime(), // 6
                    (new Date(2021, 11, 1)).getTime(), // 7
                    ]
const dataHoje = (new Date()).getTime();

skills.forEach(  (elemento, index) => {
    let index1 = index;
    let elemento1 = elemento;
    elemento.addEventListener('mouseover', (evento) => {
        let tempo = 'mês';
        let tempoDeExperiencia = Math.round((dataHoje-dataInicio[index1])/(1000*60*60*24*30));
        if (tempoDeExperiencia > 1) tempo = 'meses'
        descricao.innerHTML = `<p>${sobreSkill[index1]} </p>` ;
    } )
    elemento.addEventListener('mouseout', (evento, elemento,) => {
        descricao.innerHTML = 'Hover at the icon to see descripition.';
    } )
} );



