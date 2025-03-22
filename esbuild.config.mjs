import esbuild from "esbuild";
import process from "process";
import { builtinModules } from "module";

const banner = `/*
 * Xiaohongshu Importer plugin
 * Author: bnchiang96
 * Version: 1.1.1
 */
`;

const prod = process.argv[2] === "production";

esbuild.build({
	banner: {
		js: banner,
	},
	entryPoints: ["main.ts"],
	bundle: true,
	external: [
		"obsidian",
		"electron",
		...builtinModules,
	],
	format: "cjs",
	target: "es2020",
	platform: "node",
	outfile: "main.js",
	sourcemap: !prod,
	minify: prod,
	watch: !prod,
	treeShaking: true,
}).catch(() => process.exit(1));
