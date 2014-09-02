var test = require('tape')
var readme = require('./')

test('readme-me', function(t) {
  t.plan(5)

  t.equal(readme({name: 'test-name'}), '# test-name\n')
  t.equal(readme({description: 'bob lob law'}), '\nbob lob law\n')
  t.equal(
    readme({travis: true, repository: {url: 'https://github.com/timhudson/readme-me.git'}}),
    '\n[![build status](http://img.shields.io/travis/timhudson/readme-me.svg?style=flat)](http://travis-ci.org/timhudson/readme-me)\n'
  )
  t.equal(
    readme({example: 'var readme = require(\'./\')', name: 'readme-me'}),
    '# readme-me\n\n## Example\n\n``` js\nvar readme = require(\'readme-me\')\n```\n'
  )
  t.equal(readme({license: 'MIT'}), '\n## License\n\nMIT\n')
})
