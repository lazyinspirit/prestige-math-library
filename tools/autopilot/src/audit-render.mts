// Run in the web checkout, as proof-layout-render does, so its actual TS/JSX
// modules use the web tsconfig and aliases. No alternate renderer is supplied.
import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { join, resolve } from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { APP_DIR, REPO, WEB_DIR } from '../../paths.mjs';

export function renderAuditPages(pages: Array<{ page: string; ids: string[]; items: any[] }>) {
  if (!WEB_DIR) throw Error('Audit requires the real web renderer checkout');
  const result = spawnSync(process.execPath, [join(REPO, 'tools/tsx-run.mjs'), fileURLToPath(import.meta.url), '--render'], {
    cwd: WEB_DIR, input: JSON.stringify(pages), encoding: 'utf8', maxBuffer: 32 * 1024 * 1024, timeout: 300_000,
  });
  if (result.error || result.status !== 0) throw Error(`audit renderer: ${result.error?.message ?? result.stderr ?? result.stdout}`);
  const output = JSON.parse(result.stdout);
  if (!Array.isArray(output.graphs) || output.graphs.length !== pages.length
    || output.graphs.some((g, n) => g.page !== pages[n].page || typeof g.chart !== 'string')
    || typeof output.prerequisites_html !== 'string') throw Error('Incomplete audit renderer response');
  return output;
}

async function main() {
  if (process.argv.slice(2).join(' ') !== '--render' || !APP_DIR) throw Error('Internal audit renderer requires --render');
  const renderer = await import(pathToFileURL(join(APP_DIR, 'web/lib/math-library.ts')).href);
  const { Prerequisites } = await import(pathToFileURL(join(APP_DIR, 'web/components/library/Prerequisites.tsx')).href);
  const require = createRequire(join(APP_DIR, 'web/package.json'));
  const prerequisites_html = require('react-dom/server').renderToStaticMarkup(require('react').createElement(Prerequisites,
    { collapsed: true, children: 'Prerequisite context' }));
  const pages = JSON.parse(readFileSync(0, 'utf8'));
  const graphs = pages.map(page => ({ page: page.page, chart: renderer.mermaidGraph(
    new Map(page.items.map(item => [item.id, item])), page.ids, '/library', { allItems: true },
  ) }));
  process.stdout.write(JSON.stringify({ prerequisites_html, graphs }));
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main().catch(error => {
  console.error(error.message); process.exitCode = 1;
});
