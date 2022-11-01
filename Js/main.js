document.getElementById('root').innerHTML = `
    <form id="forms">
        <legend>Formulario para produtos</legend>

        <div>
            <label>Produto</label>
            <input id="Product" value="" type="text" placeholder="digite o produto" />
        </div>
        <div>
            <label>Preço</label>
            <input id="Price" value="" type="text" placeholder="digite o preço" />
        </div>
        <input type="submit" />
    </form>
`



document.getElementById('edit').innerHTML = `
    <div id="formsEdit">
        <form id="editForms">
            <legend>Formulario para produtos</legend>
                <button type="button" id="close">X</button>
                <h2 id="idTask"></h2>
                <div>
                    <label>Produto</label>
                    <input id="ProductEdit" value="" type="text" placeholder="Edite o nome do produto" />
                </div>
                <div>
                    <label>Preço</label>
                    <input id="PriceEdit" value="" type="text" placeholder="Edite o preço do produto" />
                </div>
            <input type="submit" />
        </form>
    </div>
`

  



