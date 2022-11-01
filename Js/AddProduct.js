const forms = document.getElementById('forms')
const closeEdit = document.getElementById('close')
const formsEdit = document.getElementById('formsEdit').setAttribute('style', 'display: none;')
const editForms = document.getElementById('editForms')
const idTask = document.getElementById('idTask')

let list = []

forms.addEventListener('submit', (e) => {
    e.preventDefault()

    list.push ({
        id: gerarId(9999),
        Produto: document.getElementById('Product').value,
        Price: document.getElementById('Price').value
    })

    update()
})

const update = () =>  {
    renderTasks()
}

const gerarId = (num) => {
    return Math.floor(Math.random() * num)
}

const deleteProduct = (id) => {
    list = list.filter((item) => item.id !== id)
    update()
}

editForms.addEventListener('submit', (e) => {
    e.preventDefault()

    const idTasks = idTask.textContent.replace('#', '')

    let tarefa = {
        id: idTasks,
        Produto: document.getElementById('ProductEdit').value,
        Price: document.getElementById('PriceEdit').value
    }

    update()
})

const editProduct = (id) => {
    if(id){
        idTask.textContent = '#' + id
        this.formsEdit.setAttribute('style', 'display: hidden;')
    }
}



closeEdit.addEventListener('click', () =>  {
    this.formsEdit.setAttribute('style', 'display: none;')
})

