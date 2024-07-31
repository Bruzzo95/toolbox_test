const fetch = require('node-fetch')

const apiKey = 'Bearer aSuperSecretKey'
const apiBaseUrl = 'https://echo-serv.tbxnet.com/v1/secret'

const getFileList = async () => {
  const response = await fetch(`${apiBaseUrl}/files`, {
    headers: {
      accept: 'application/json',
      authorization: apiKey
    }
  })
  const data = await response.json()
  return data.files
}

const getFileContent = async (fileName) => {
  const response = await fetch(`${apiBaseUrl}/file/${fileName}`, {
    headers: {
      accept: 'application/json, text/csv',
      authorization: apiKey
    }
  })

  const contentType = response.headers.get('content-type')

  if (contentType !== 'text/csv') {
    return await response.json()
  } else {
    return await response.text()
  }
}

module.exports = {
  getFileList,
  getFileContent
}
