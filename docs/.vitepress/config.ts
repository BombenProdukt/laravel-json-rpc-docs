import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: 'Laravel JSON-RPC',
	description: 'An expressive API to build JSON-RPC servers with Laravel.',
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		editLink: {
			pattern:
				'https://github.com/faustbrian/laravel-json-rpc-docs/edit/main/docs/:path',
			text: 'Edit this page on GitHub',
		},

		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Installation', link: '/installation' },
			{ text: 'Configuration', link: '/configuration' },
		],

		sidebar: [
			{
				text: 'Getting Started',
				items: [
					{ text: 'Installation', link: '/installation' },
					{ text: 'Configuration', link: '/configuration' },
				],
			},
			{
				text: 'The Basics',
				items: [
					{ text: 'Servers', link: '/servers' },
					{ text: 'Procedures', link: '/procedures' },
					{ text: 'Requests', link: '/requests' },
				],
			},
			{
				text: 'Digging Deeper',
				items: [
					{ text: 'Authentication', link: '/authentication' },
					{ text: 'Error Handling', link: '/error-handling' },
					{ text: 'Validation', link: '/validation' },
				],
			},
		],

		socialLinks: [
			{
				icon: 'github',
				link: '/https://github.com/faaustbrian/laravel-json-rpc',
			},
		],

		search: {
			provider: 'local',
		},
	},
});
