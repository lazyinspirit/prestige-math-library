// Tests only: execute the exact app components through the normal tsx runner.
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';
import { join } from 'node:path';
import { WEB_DIR } from '../../paths.mjs';
if (!WEB_DIR) throw Error('actual app required');
const requireApp = createRequire(join(WEB_DIR, 'package.json'));
const { createElement } = requireApp('react');
const { renderToStaticMarkup } = requireApp('react-dom/server');
const { ItemBody } = await import(pathToFileURL(join(WEB_DIR, 'components/library/ItemBody.tsx')).href);
const { MathMarkdown } = await import(pathToFileURL(join(WEB_DIR, 'components/library/MathMarkdown.tsx')).href);
const { resolveWikilinks } = await import(pathToFileURL(join(WEB_DIR, 'lib/math-library.ts')).href);
const inputs = JSON.parse(readFileSync(0, 'utf8'));
const outputs = inputs.map(({ body, title, titles = {} }) => {
  const items = new Map(Object.entries(titles).map(([id, title]) => [id, { id, title, provedHere: true }]));
  return {
    body: renderToStaticMarkup(createElement(ItemBody, { body: resolveWikilinks(body ?? '', items) })),
    title: renderToStaticMarkup(createElement(MathMarkdown, null, title ?? '')),
  };
});
process.stdout.write(JSON.stringify(outputs));
