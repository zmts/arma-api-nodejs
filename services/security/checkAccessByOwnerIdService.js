const ErrorWrapper = require('../../util/ErrorWrapper')
const errorCodes = require('../../config').errorCodes

const roles = require('../../config').roles
const registry = require('../../registry')

/**
 * @description model userId === current user id
 * @access owner, superadmin
 * @case update or delete model
 * @param {Object} model
 */
module.exports = model => {
  __typecheck(model, 'Object', true)

  let user = registry.getCurrentUser()

  return new Promise((resolve, reject) => {
    // pass superadmin
    if (user.role === roles.superadmin) return resolve()
    // pass owner
    if (user.id === model.userId) return resolve()
    // else reject
    return reject(new ErrorWrapper({ ...errorCodes.ACCESS }))
  })
}
