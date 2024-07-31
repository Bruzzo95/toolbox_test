/* eslint-disable no-unused-expressions */
import { use, expect } from 'chai'
import chaiHttp from 'chai-http'
import app from '../src/app.js'
import { describe, it } from 'mocha'

const chai = use(chaiHttp)

const getDataFiles = '/files/data'
const getListFile = '/files/list'
const getDataFile = '/files/data?fileName=test3.csv'

describe('Files API', () => {
  describe('GET data APIs', () => {
    it('Should get', (done) => {
      chai.request(app)
        .get(getDataFile) // Reemplaza las constantes para probar los endpoints
        .end((err, res) => {
          expect(err).to.be.null
          expect(res).to.have.status(200)
          expect(res.body).to.be.a('array')
          expect(res.body.length).to.not.be.eql(0)
          done()
        })
    })
  })
})

// Paso opcional 3.1: También se puede apuntar a /files/list
// Paso opcional 3.2: También se puede apuntar a /files/data?fileName=<Nombre del archivo> ej:test1.csv
/* eslint-enable no-unused-expressions */
