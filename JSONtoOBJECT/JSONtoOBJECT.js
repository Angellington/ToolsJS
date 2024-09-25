const fs = require('fs');

const filePath = './CLEANED_ROUTES_OBJETO.json'

// Função para ler e converter JSON em objeto
const readJsonFile = (filePath) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Erro ao ler o arquivo:', err);
      return;
    }

    try {
      // Converter JSON para objeto JavaScript
      const jsonObject = JSON.parse(data);
      console.log(`Conteúdo do arquivo ${filePath}:`, jsonObject);
      
      // Salvar o objeto em um arquivo .txt
      saveObjectToTxt(jsonObject, `${filePath}.txt`);
    } catch (parseError) {
      console.error('Erro ao converter JSON:', parseError);
    }
  });
};

// Função para salvar o objeto em um arquivo .txt
const saveObjectToTxt = (object, outputFilePath) => {
  const objectString = JSON.stringify(object, null, 2); // Formata o objeto como string
  fs.writeFile(outputFilePath, objectString, 'utf8', (err) => {
    if (err) {
      console.error('Erro ao salvar o arquivo:', err);
    } else {
      console.log(`Arquivo salvo em: ${outputFilePath}`);
    }
  });
};

// Caminhos dos arquivos JSON
const routesUserPath = './ROUTES_OBJETO.json';
const cleanedRoutesUserPath = './CLEANED_ROUTES_OBJETO.json';

// Ler e converter os arquivos JSON
readJsonFile(routesUserPath);
readJsonFile(cleanedRoutesUserPath);
