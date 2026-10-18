import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';
import { join } from 'node:path';
import { APP_DIR } from '../../paths.mjs';
import { carrier, checkAuditScope } from './audit-frontier.mts';
import { AUDIT_LAYOUT } from './audit-policy.mts';
import { renderAuditPages } from './audit-render.mts';

// Parse the complete Markdown document, including reference definitions outside
// the Statement. A regex for [label](url) would miss those links and autolinks.
async function markdownParser() {
  if (!APP_DIR) throw Error('Audit editorial checks require the application checkout (PRESTIGE_APP_DIR)');
  const require = createRequire(join(APP_DIR, 'web/package.json'));
  const module = async (name: string) => import(pathToFileURL(require.resolve(name)).href);
  const [{ unified }, { default: parse }, { default: gfm }, { default: math }] = await Promise.all([
    module('unified'), module('remark-parse'), module('remark-gfm'), module('remark-math'),
  ]);
  return unified().use(parse).use(gfm).use(math);
}
function links(node: any): any[] {
  const here = ['link', 'linkReference', 'image', 'imageReference', 'definition'].includes(node.type)
    || node.type === 'html' && /<\s*(?:a\b|img\b)/i.test(node.value ?? '');
  return [...(here ? [node] : []), ...(node.children ?? []).flatMap(links)];
}
const text = (node: any): string => node.value ?? (node.children ?? []).map(text).join('');
function referenceKeys(nodes: any[], body: string, tree: any): Set<string> {
  const definitions = new Map(tree.children.filter(node => node.type === 'definition').map(node => [node.identifier, node.url]));
  const result = new Set<string>();
  for (const node of nodes) {
    const raw = body.slice(node.position.start.offset, node.position.end.offset);
    for (const match of raw.matchAll(/\[\[([^\]|#]+)(?:[^\]]*)\]\]/g)) result.add(`wiki:${match[1]}`);
    for (const link of links(node)) {
      const url = link.url ?? definitions.get(link.identifier);
      if (url) result.add(`url:${url}`);
      if (link.type === 'html') for (const match of String(link.value).matchAll(/\bhref\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/gi)) result.add(`url:${match[1] ?? match[2] ?? match[3]}`);
    }
  }
  return result;
}
function inspectClaims(parser: any, id: string, item: {body: string; data: any}, before?: {body: string}): string[] {
  const errors: string[] = [];
  const tree = parser.parse(item.body);
  const headings = tree.children.map((node: any, index: number) => ({ node, index }))
    .filter(({ node }) => node.type === 'heading' && node.depth === 2);
  if (before) {
    const oldTree = parser.parse(before.body);
    const oldHeadings = oldTree.children.map((node: any, index: number) => ({ node, index }))
      .filter(({ node }) => node.type === 'heading' && node.depth === 2);
    for (let n = 0; n < oldHeadings.length; n++) {
      const h = oldHeadings[n], heading = text(h.node);
      if (!['Statement', 'Statement refuted', 'Definition'].includes(heading)) continue;
      const expected = referenceKeys(oldTree.children.slice(h.index + 1, oldHeadings[n + 1]?.index ?? oldTree.children.length), before.body, oldTree);
      const refName = heading === 'Definition' ? 'Definition references' : 'Statement references';
      const ref = headings.findIndex(({ node }) => text(node) === refName);
      const actual = ref < 0 ? new Set<string>() : referenceKeys(tree.children.slice(headings[ref].index + 1,
        headings[ref + 1]?.index ?? tree.children.length), item.body, tree);
      for (const key of expected) if (!actual.has(key)) errors.push(`${id}: original ${heading} reference ${key} was deleted instead of moved after the claim`);
    }
  }
  const required = ['definition', 'algorithm'].includes(item.data.kind) ? 'Definition'
    : ['theorem', 'lemma', 'proposition', 'corollary', 'false-statement'].includes(item.data.kind) ? 'Statement'
    : item.data.kind === 'counterexample' ? 'Statement refuted' : null;
  if (required && headings.filter(({ node }) => text(node) === required).length !== 1)
    errors.push(`${id}: exactly one ${required} section is required`);
  for (let n = 0; n < headings.length; n++) {
    const current = headings[n], heading = text(current.node);
    if (!['Statement', 'Definition', 'Statement refuted'].includes(heading)) continue;
    const next = headings[n + 1], nodes = tree.children.slice(current.index + 1, next?.index ?? tree.children.length);
    if (!nodes.length) errors.push(`${id}: empty ${heading}`);
    if (nodes.flatMap(links).length || nodes.some(node => /\[\[[\s\S]*?\]\]/.test(item.body.slice(node.position.start.offset, node.position.end.offset))))
      errors.push(`${id}: ${heading} contains hyperlinks; move references after the complete statement`);
  }
  for (let n = 0; n < headings.length; n++) {
    const current = headings[n], heading = text(current.node);
    if (!['Statement references', 'Definition references'].includes(heading)) continue;
    const previous = headings[n - 1] && text(headings[n - 1].node);
    if (!(heading === 'Definition references' ? previous === 'Definition' : ['Statement', 'Statement refuted'].includes(previous)))
      errors.push(`${id}: ${heading} must immediately follow its complete defining/statement section`);
    const next = headings[n + 1], nodes = tree.children.slice(current.index + 1, next?.index ?? tree.children.length);
    if (!nodes.length) errors.push(`${id}: empty reference section`);
    for (const node of nodes) {
      const raw = item.body.slice(node.position.start.offset, node.position.end.offset);
      const wiki = [...raw.matchAll(/\[\[[^\]]+\]\]/g)].length;
      if (node.type !== 'paragraph' || links(node).length + wiki !== 1)
        errors.push(`${id}: each reference must be its own blank-line-separated paragraph`);
    }
  }
  return errors;
}
export async function auditClaimText(id: string, kind: string, body: string, beforeBody?: string): Promise<string[]> {
  return inspectClaims(await markdownParser(), id, { body, data: { kind } }, beforeBody === undefined ? undefined : { body: beforeBody });
}

export async function checkEditorial(root: string, run: string) {
  const { pages, record } = checkAuditScope(root, run), errors: string[] = [];
  const parser = await markdownParser();
  const carriers = new Map<string, ReturnType<typeof carrier>>();
  const read = (path: string) => {
    if (!carriers.has(path)) carriers.set(path, carrier(root, path));
    return carriers.get(path)!;
  };
  const graphItem = (data: any) => ({ id: data.id, kind: data.kind, title: data.title,
    short: data.short ?? '', landmark: data.landmark === true, deps: data.deps ?? [] });
  // Inspect the actual renderer's graph output, including isolated nodes. An
  // all-items metadata flag alone is insufficient evidence that it is honored.
  const renderedPages: Array<{ page: string; ids: string[]; items: any[] }> = [];
  let count = 0;
  for (const page of pages) {
    const source = read(`library/${page.category}/${page.id}.md`);
    if (source.body.trim()) errors.push(`${page.id}: page summary/body must be empty`);
    if (source.data.audit_layout !== AUDIT_LAYOUT) errors.push(`${page.id}: missing audit_layout: ${AUDIT_LAYOUT}`);
    const ids = [...(source.data.items ?? []), ...(source.data.examples ?? [])];
    if (!ids.length || new Set(ids).size !== ids.length || ids.length !== page.items.length
      || page.items.some(i => !ids.includes(i.id))) errors.push(`${page.id}: actual page inventory differs from manifest`);
    const items = new Map<string, any>();
    for (const id of ids) {
      const item = read(`items/${id}.md`);
      items.set(id, graphItem(item.data));
      count++;
      const original = record.originals.find(row => row.path === `items/${id}.md`);
      errors.push(...inspectClaims(parser, id, item, original ? read(original.archive) : undefined));
    }
    // Load ordinary dependencies as graph traversal context only. They do not
    // become extra nodes or editorial audit subjects.
    const queue = [...items.values()].flatMap(item => item.deps ?? []), seen = new Set<string>();
    for (let n = 0; n < queue.length; n++) {
      const id = queue[n];
      if (seen.has(id) || items.has(id)) continue;
      seen.add(id);
      const item = read(`items/${id}.md`);
      items.set(id, graphItem(item.data)); queue.push(...(item.data.deps ?? []));
    }
    renderedPages.push({ page: page.id, ids, items: [...items.values()] });
  }
  const rendered = renderAuditPages(renderedPages), html = rendered.prerequisites_html;
  if (!/^<details>/.test(html) || !html.includes('<summary') || /<details\b[^>]*\bopen\b/i.test(html))
    errors.push('Actual prerequisites renderer must produce a closed disclosure by default');
  for (let n = 0; n < renderedPages.length; n++) {
    const page = renderedPages[n], ids = page.ids, graph = rendered.graphs[n].chart;
    const expected = new Set(ids.map(id => id.replace(/[^a-zA-Z0-9]/g, '_')));
    const actual = new Set([...graph.matchAll(/^\s+([a-zA-Z0-9_]+)\["/gm)].map(m => m[1]));
    if (expected.size !== ids.length || actual.size !== expected.size || [...expected].some(id => !actual.has(id)))
      errors.push(`${page.page}: actual logical flowchart omits, merges or adds item nodes`);
  }
  if (!count) errors.push('Empty audit inventory');
  return { run, category: record.category, pages: pages.length, items: count, errors };
}
