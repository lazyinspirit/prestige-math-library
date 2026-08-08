// Minimal TypeScript loader used only when the sibling app checkout's tsx
// dependency is absent. It strips/transforms types with the installed
// TypeScript compiler and leaves ordinary JavaScript loading to Node.

import { readFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

const runtime = process.env.PRESTIGE_TYPESCRIPT_PATH;
if (!runtime) throw new Error('TypeScript fallback loader needs PRESTIGE_TYPESCRIPT_PATH');

const typescript = await import(pathToFileURL(runtime).href);
const ts = typescript.default ?? typescript;

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
      isolatedModules: true,
      sourceMap: false,
      inlineSourceMap: false,
    },
    reportDiagnostics: false,
  });
  return { format: 'module', shortCircuit: true, source: output.outputText };
}
