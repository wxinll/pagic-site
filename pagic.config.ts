export default {
	srcDir: '.',
	exclude: ['README.md'],
	title: 'DEX',
	outDir: 'dist',
	theme: 'docs',
	github: 'https://github.com/wxinll/pagic-site',
	plugins: ['sidebar', 'prev_next'],
	nav: [
		{
			text: '文档',
			link: '/docs/index.html',
		},
		{
			text: '关于',
			link: '/about/index.html',
		},
	],
	sidebar: {
		// '/': ['README.md'],
		'/docs/': [
			'docs/README.md',
			{
				link: 'docs/introduction/index.md',
				children: [
					'docs/introduction/install.md',
					'docs/introduction/why.md',
				],
			},
		],
	},
};
