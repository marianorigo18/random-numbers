const node = document.createElement("li");

function createNum(){
    let num = Math.floor(Math.random() * 1000);

    
    node.classList.add('lis')
    const textnode = document.createTextNode(num);
    node.appendChild(textnode);
    document.getElementById("caja").appendChild(node);
}
createNum()
node.addEventListener('click', () => {
    node.innerHTML = "";
    createNum()
})