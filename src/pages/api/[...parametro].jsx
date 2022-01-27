export default(request, response) => {
  console.log(request.query);

  const ceps = [
    {id: 1, cep: "01001-000", logradouro: "Praça da Sé", complemento: "lado ímpar", bairro: "Sé", localidade: "João Pessoa", uf: "SP", unidade: "", ibge: "3750308", gia: ""},
    {id: 2, cep: "02001-000", logradouro: "Praça Curado", complemento: "atras da praça", bairro: "Sé", localidade: "Recife", uf: "PE", unidade: "", ibge: "3450308", gia: ""},
    {id: 3, cep: "03001-000", logradouro: "Praça Petrolina", complemento: "casa5", bairro: "Sé", localidade: "São Paulo", uf: "SP", unidade: "", ibge: "3550208", gia: ""},
    {id: 4, cep: "04001-000", logradouro: "Praça Dois Irmãos", complemento: "travessa da rua 4", bairro: "olinda", localidade: "Recife", uf: "PE", unidade: "", ibge: "3550308", gia: ""},
  ]

  return response.json(ceps);

}