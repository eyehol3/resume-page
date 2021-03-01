module.exports = {
	css: {
		loaderOptions: {
			scss: {
				additionalData: `@import "~@/styles/base.scss";`,
			},
		},
	},
    devServer: {
        // Fixing issue with WDS disconnected and sockjs network error
        host: '0.0.0.0',
        public: '0.0.0.0:8080',
        disableHostCheck: true,
        // End of fix
      }
};
