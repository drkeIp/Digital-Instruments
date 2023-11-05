module.exports = {
  webpack: {
    configure: config => {
      const wasmExtensionRegExp = /\.wasm$/
      config.resolve.extensions.push('.wasm')
      config.experiments = {
        syncWebAssembly: true,
      }

      config.module.rules.forEach(rule => {
        ;(rule.oneOf || []).forEach(oneOf => {
          if (oneOf.type === 'asset/resource') {
            oneOf.exclude.push(wasmExtensionRegExp)
          }
        })
      })

      return config
    },
  },
}