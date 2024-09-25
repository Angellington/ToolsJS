const fs = require('fs');

// Ler o arquivo JSON original
fs.readFile('./ROUTES_USER.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo:', err);
    return;
  }

  // Converter a string JSON em um objeto
  const routesPessoa = JSON.parse(data);

  // Criar um novo objeto com os campos vazios, exceto as rotas
  const cleanedRoutes = {};

  // Iterar sobre as entradas e definir valores
  for (const [key, value] of Object.entries(routesPessoa)) {
    if (value.route) {
      cleanedRoutes[key] = { route: value.route }; // Manter a rota
    } else {
      cleanedRoutes[key] = {}; // Manter campos vazios
    }
  }

  // Converter o objeto limpo de volta para uma string JSON
  const jsonCleanedRoutes = JSON.stringify(cleanedRoutes, null, 2);

  // Salvar o JSON limpo em um novo arquivo
  fs.writeFile('./CLEANED_ROUTES_USER.json', jsonCleanedRoutes, (err) => {
    if (err) {
      console.error('Erro ao salvar o arquivo:', err);
    } else {
      console.log('Arquivo CLEANED_ROUTES_USER.json salvo com sucesso!');
    }
  });
});