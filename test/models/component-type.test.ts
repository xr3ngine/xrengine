import app from '../../src/app'

describe('CRUD operation on \'Component Type\' model', () => {
  const model = app.service('component-type').Model

  it('Create', done => {
    model.create({
      type: 'test'
    }).then(res => {
      done()
    }).catch(done)
  })

  it('Read', done => {
    model.findOne({
      where: { type: 'test' }
    }).then(res => {
      done()
    }).catch(done)
  })

  it('Delete', done => {
    model.destroy({
      where: { type: 'test' }
    }).then(res => {
      done()
    }).catch(done)
  })
})
