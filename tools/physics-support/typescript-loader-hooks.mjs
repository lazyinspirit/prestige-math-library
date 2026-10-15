// Minimal TypeScript loader used only when the sibling app checkout's tsx
// dependency is absent. It strips/transforms types with the installed
// TypeScript compiler and leaves ordinary JavaScript loading to Node.

import { readFile } from 'node:fs/promises';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const runtime = process.env.PRESTIGE_TYPESCRIPT_PATH;
if (!runtime) throw new Error('TypeScript fallback loader needs PRESTIGE_TYPESCRIPT_PATH');

const typescript = await import(pathToFileURL(runtime).href);
const ts = typescript.default ?? typescript;

const configurations = new Map();
function configurationFor(parent) {
  const directory = dirname(parent);
  if (configurations.has(directory)) return configurations.get(directory);
  const path = ts.findConfigFile(directory, ts.sys.fileExists, 'tsconfig.json');
  let configuration = null;
  if (path) {
    const input = ts.readConfigFile(path, ts.sys.readFile);
    if (input.error) throw Error(`Cannot read TypeScript configuration ${path}`);
    configuration = ts.parseJsonConfigFileContent(input.config, ts.sys, dirname(path));
    if (configuration.errors.length) throw Error(`Invalid TypeScript configuration ${path}`);
  }
  configurations.set(directory, configuration);
  return configuration;
}

// Resolve configured aliases and TypeScript's extensionless relative imports.
// Ordinary packages keep Node's own resolver and export-map boundaries.
export async function resolve(specifier, context, nextResolve) {
  if (!context.parentURL?.startsWith('file:')) return nextResolve(specifier, context);
  const parent = fileURLToPath(context.parentURL);
  if (specifier.startsWith('.') && /\.(?:ts|mts|cts|tsx)$/.test(parent)) {
    try { return await nextResolve(specifier, context); }
    catch (cause) {
      if (cause.code !== 'ERR_MODULE_NOT_FOUND') throw cause;
      const configuration = configurationFor(parent);
      const result = ts.resolveModuleName(specifier, parent, configuration?.options ?? {}, ts.sys).resolvedModule;
      if (!result || /\.d\.(?:ts|mts|cts)$/.test(result.resolvedFileName)) throw cause;
      return { url: pathToFileURL(result.resolvedFileName).href, shortCircuit: true };
    }
  }
  if (/^(?:\.|\/)|:/.test(specifier))
    return nextResolve(specifier, context);
  const configuration = configurationFor(parent);
  const matches = Object.keys(configuration?.options.paths ?? {}).some(pattern => {
    const star = pattern.indexOf('*');
    return star < 0 ? pattern === specifier
      : specifier.startsWith(pattern.slice(0, star)) && specifier.endsWith(pattern.slice(star + 1))
        && specifier.length >= pattern.length - 1;
  });
  if (matches) {
    const result = ts.resolveModuleName(specifier, parent, configuration.options, ts.sys).resolvedModule;
    if (!result || /\.d\.(?:ts|mts|cts)$/.test(result.resolvedFileName))
      throw Error(`TypeScript path alias has no runtime module: ${specifier}`);
    return { url: pathToFileURL(result.resolvedFileName).href, shortCircuit: true };
  }
  return nextResolve(specifier, context);
}

export async function load(url, context, nextLoad) {
  if (!/\.(?:ts|mts|cts|tsx)$/.test(new URL(url).pathname)) {
    return nextLoad(url, context);
  }
  const source = await readFile(new URL(url), 'utf8');
  const output = ts.transpileModule(source, {
    fileName: new URL(url).pathname,
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ES2022,
      moduleResolution: ts.ModuleResolutionKind.Bundler,
      // .tsx sources (the renderer components) need an explicit JSX emit;
      // without it the untransformed JSX reaches Node and every SSR tool that
      // loads the application renderer fails with "Unexpected token '<'".
      jsx: ts.JsxEmit.ReactJSX,
      isolatedModules: true,
      sourceMap: false,
      inlineSourceMap: false,
    },
    reportDiagnostics: false,
  });
  return { format: 'module', shortCircuit: true, source: output.outputText };
}
