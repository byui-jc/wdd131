const yearSpan = document.getElementById('currentyear');
const year = new Date().getFullYear();
yearSpan.innerText = `©${year} JC Berdiguel Philippines`;

const modifiedSpan = document.getElementById('lastmodified');
const modDate = new Date(document.lastModified);
modifiedSpan.innerText = `Last modified: ${modDate}`;