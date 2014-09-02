# readme-me

Create README from package.json and example files

[![build status](http://img.shields.io/travis/timhudson/readme-me.svg?style=flat)](http://travis-ci.org/timhudson/readme-me)

## Usage

Run `readme-me` from the module directory you want to generate a new `README.md` for

```
$ cd path/to/new-module
$ readme-me
```

`package.json` is required.

`readme-me` looks for the following attributes/files:

- `pkg.name`
- `pkg.description`
- `pkg.license`
- `.travis.yml` and `pkg.repository.url`
- `example.js`

## License

MIT
