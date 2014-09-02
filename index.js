var util = require('util')

module.exports = function(opts) {
  var readme = ''

  if (opts.name) readme += ('# ' + opts.name + '\n')
  if (opts.description) readme += ('\n' + opts.description + '\n')
  if (opts.travis && opts.repository) readme += travisBadge(opts)
  if (opts.example) readme += example(opts)
  if (opts.license) readme += ('\n## License\n\n' + opts.license + '\n')

  return readme
}

function travisBadge(opts) {
  try {
    var userRepo = opts.repository.url.match(/github.com\/(.+).git/)[1]
  } catch (err) {
    return ''
  }

  return util.format(
    '\n[![build status](http://img.shields.io/travis/%s.svg?style=flat)](http://travis-ci.org/%s)\n',
    userRepo, userRepo
  )
}

function example(opts) {
  var ex = opts.example
    .replace(
      /require\(['"]?\.+\/['"]?\)/,
      util.format('require(\'%s\')', opts.name)
    )
    .replace(/\n+$/, '')

  return [
    '\n## Example\n\n',
    '``` js\n',
    ex + '\n',
    '```\n'
  ].join('')
}
