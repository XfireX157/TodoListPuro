const lists = document.getElementById('list')

function renderTasks() {
    if(list.length <= 0){
        lists.innerHTML = `<span> Nenhum Produto cadastrado </span>`
    }else {
        lists.innerHTML = ''
        list.map((item) => {
            lists.innerHTML += `
                <div key=${item.id}>
                    <span class="Products">${item.Produto}</span>
                    <span class="Prices">R$ ${item.Price}</span>
                    <div class="btns">
                        <button type="button" onClick="deleteProduct(${item.id})">Delete</button>
                        <button type="button" onClick="editProduct(${item.id})">Edit</button>
                    </div>
                </div>
            `
        })
    }
}