# CanJS 5.0 doc codemods

These are codemods to update the CanJS documentation and demos to use ES module imports from `can`.

To use:

__Demo page__

```shell
jscodeshift -t node_modules/can-docs-es-module-codemod/lib/html.js demo/my-demo.html
```

__Markdown doc__

```shell
jscodeshift -t node_modules/can-docs-es-module-codemod/lib/md.js demo/some-doc.md
```

## License

MIT