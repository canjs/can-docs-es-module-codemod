# CanJS 5.0 doc codemods

These are codemods to update the CanJS documentation and demos to use ES module imports from `can`.

To generate a __export-names.json__ file run this:

```bash
jscodeshift -t lib/export-names.js path/to/canjs/can.js
```

To use:

__Demo page__

```shell
jscodeshift -t node_modules/can-docs-es-module-codemod/lib/html.js demo/my-demo.html
```

__Markdown doc__

```shell
jscodeshift -t node_modules/can-docs-es-module-codemod/lib/md.js demo/some-doc.md
```

__JavaScript source__

```shell
jscodeshift -t node_modules/can-docs-es-module-codemod/lib/js.js demo/my-component.js
```

## License

MIT
