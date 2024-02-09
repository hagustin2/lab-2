function updateInnerHTML(selector, string) {
    document.querySelector(selector).innerHTML = string;
}

updateInnerHTML('h1', "New Topic");

function strong(string){
    return `<strong>${string}</strong>`;
    }
    

const template = strong('making things useful');
console.log(template);

const updateSection = function(htmlString) {
    document.querySelector('section').insertAdjacentHTML('beforeend', htmlString);
};

updateSection(template);