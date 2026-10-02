// One SSR process per scan, using the actual application's components/deps.
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';
import { join } from 'node:path';
import { WEB_DIR, precheckSource } from './paths.mjs';
import { analyzeProof } from './proof-layout-core.mjs';

if (!WEB_DIR) throw Error('proof layout: application checkout is unavailable');
const requireApp = createRequire(join(WEB_DIR, 'package.json'));
const { createElement } = requireApp('react');
const { renderToStaticMarkup } = requireApp('react-dom/server');
const { ItemBody } = await import(pathToFileURL(join(WEB_DIR, 'components/library/ItemBody.tsx')).href);
const parser = await import(pathToFileURL(join(WEB_DIR, 'lib/item-sections.ts')).href);
const { PROP_TAG } = await import(pathToFileURL(precheckSource()).href);
const decode = s => s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'");
const render = (body: string) => {
  const html = renderToStaticMarkup(createElement(ItemBody, { body }));
  const heads = [...html.matchAll(/<div class="mb-1 flex flex-wrap items-baseline gap-x-2 gap-y-1">([\s\S]*?)<\/div>/g)];
  return heads.map(m => {
    const spans = [...m[1].matchAll(/<span class="([^"]*)"[^>]*>([\s\S]*?)<\/span>/g)];
    const label = spans.find(s => /font-semibold/.test(s[1]))?.[2] ?? '';
    const tags = spans.filter(s => s[1].split(' ').includes('bg-indigo-50')).map(s => decode(s[2].replace(/<[^>]*>/g, '')));
    return { label, tags };
  });
};
const inputs = JSON.parse(readFileSync(0, 'utf8'));
const results = inputs.map(({ file, body }: { file: string; body: string }) => ({ file,
  ...analyzeProof(body, { ...parser, validTag: (t: string) => PROP_TAG.test(t.toLowerCase()) || /^def\.\s+\S.+/i.test(t), render }) }));
process.stdout.write(JSON.stringify(results));
