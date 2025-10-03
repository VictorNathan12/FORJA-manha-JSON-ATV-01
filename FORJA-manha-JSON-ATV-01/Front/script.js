const resultsDiv = document.getElementById("results")

async function fetchEmployees(){
    resultsDiv.innerHTML = "<p>Carregando...</p>"

    try {
        const response = await fetch('../Dados/dados.json')
        const data = await response.json()
        // console.log(data)

        if(data.error){
            resultsDiv.innerHTML = "<p>Erro ao buscar Funcionário!</p>"
            return
        }
        resultsDiv.innerHTML = ''

        data.forEach(item => {
            const card = document.createElement("div")
            card.className = "card"
            card.innerHTML = `
                <img src="${item.imagem}" alt="${item.nome}"
                <h2>${item.nome}</h2>
                <h3>${item.HorasTrabalhadas}</h3
                <p>Nota: ${item.Nota.toFixed(2)}</p>
            `
            resultsDiv.appendChild(card)
        });

    } catch (error) {
        resultsDiv.innerHTML = "<p>Erro ao buscar Funcionários!</p>"
    }
}

fetchEmployees()