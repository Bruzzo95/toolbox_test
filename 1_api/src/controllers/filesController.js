const { getFileContent, getFileList } = require('../services/filesService')

const processFileContent = (content) => {
  const lines = content.split('\n').slice(1) // Remover la primera línea (header)
  return lines.map((line) => {
    const [file, text, number, hex] = line.split(',')
    return { text, number: parseInt(number), hex }
  }).filter((line) => line.text && line.number && line.hex) // Filtrar líneas inválidas
}

const getFilesData = async (req, res) => {
  try {
    const { fileName } = req.query

    if (fileName) {
      // Si se especifica un archivo, devolver los datos del mismo
      const content = await getFileContent(fileName)
      const formattedLines = processFileContent(content)
      const fileProcessed = { file: fileName, lines: formattedLines }
      res.send([fileProcessed])
      console.log('Archivo procesado:', fileProcessed)
    } else {
      // Si no se especifica un archivo, devolver los datos de todos los archivos
      const files = await getFileList()
      const results = []

      for (const file of files) {
        try {
          const content = await getFileContent(file)
          const formattedLines = processFileContent(content)
          results.push({ file, lines: formattedLines })
        } catch (error) {
          console.error(`Error al procesar el archivo ${file}: ${error.message}`)
        }
      }
      res.json(results)
      console.log('Archivos procesados:', results.length)
    }
  } catch (error) {
    console.error(`Error al obtener la lista de archivos: ${error.message}`)
    res.status(500).send('Error al obtener los archivos.')
  }
}

const newGetFilesList = async (req, res) => {
  try {
    const files = await getFileList()
    console.log('files', files)
    res.status(200).json(files)
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error retrieving files', error: error.message })
  }
}

module.exports = {
  getFilesData,
  newGetFilesList
}
