// Pure Markdown inspection shared by the independent math and physics adapters.
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';
import { join } from 'node:path';
import { APP_DIR } from './paths.mjs';
let runtime;
export async function statementRuntime() {
  if (!runtime) runtime = (async () => {
    if (!APP_DIR) throw Error('Statement checks require the application Markdown parser');
    const require = createRequire(join(APP_DIR, 'web/package.json'));
    const mod = name => import(pathToFileURL(require.resolve(name)).href);
    const [{unified}, {default: parse}, {default: gfm}, {default: math}] = await Promise.all(
      ['unified', 'remark-parse', 'remark-gfm', 'remark-math'].map(mod));
    return {parser: unified().use(parse).use(gfm).use(math), yaml: require('yaml')};
  })();
  return runtime;
}
const text = node => node.value ?? (node.children ?? []).map(text).join('');
const proofHeadings = new Set(['Proof', 'Refutation', 'Verification', 'Facts & Assumptions', 'Source notes', 'Sources', 'References', 'Status']);
const claims = new Set(['Definition', 'Statement', 'Statement refuted', 'Example', 'Remark', 'Remarks', 'Open problem', 'Postulate', 'Experiment', 'Setup', 'Procedure', 'Observations', 'Observation', 'Uncertainty', 'Interpretation', 'Conditions']);
const required = {
  definition: 'Definition', algorithm: 'Definition', theorem: 'Statement', lemma: 'Statement',
  proposition: 'Statement', corollary: 'Statement', 'false-statement': 'Statement',
  example: 'Example', counterexample: 'Statement refuted', 'open-problem': 'Open problem',
  postulate: 'Postulate', 'physics-theorem': 'Statement', 'thought-experiment': 'Statement',
};
const refHeading = heading => `${heading === 'Statement refuted' ? 'Statement' : heading} references`;
function linkCount(node, body) {
  const source = body.slice(node.position.start.offset, node.position.end.offset);
  // Inline/fenced code and mathematics are literal content, never hyperlinks.
  if (['code', 'inlineCode', 'math', 'inlineMath'].includes(node.type)) return 0;
  if (['link', 'linkReference', 'image', 'imageReference', 'definition'].includes(node.type)) return 1;
  if (node.type === 'html') return [...source.matchAll(/<\s*(?:a|img)\b/gi)].length;
  if (node.type === 'text') return [...source.matchAll(/(?<!\\)\[\[[^\]]+\]\]/g)].length;
  return (node.children ?? []).reduce((sum, child) => sum + linkCount(child, body), 0);
}
export async function inspectStatement(id, kind, body) {
  const {parser} = await statementRuntime(), tree = parser.parse(body), errors = [];
  const heads = tree.children.map((node, index) => ({node, index, name: text(node)}))
    .filter(({node}) => node.type === 'heading' && node.depth === 2);
  const needed = required[kind];
  if (needed && heads.filter(h => h.name === needed).length !== 1) errors.push(`${id}: exactly one ${needed} section is required`);
  if (!needed && !['remark', 'experiment'].includes(kind)) errors.push(`${id}: unsupported item kind ${kind}`);
  const claim = h => claims.has(h.name) || ['remark', 'experiment'].includes(kind)
    && !proofHeadings.has(h.name) && !h.name.endsWith(' references');
  if (!heads.some(claim)) errors.push(`${id}: missing statement/description section`);
  // No unheaded statement can hide before the first section.
  const prefix = tree.children.slice(0, heads[0]?.index ?? tree.children.length);
  if (prefix.some(n => linkCount(n, body))) errors.push(`${id}: hyperlinks before the first statement section`);
  for (let n = 0; n < heads.length; n++) {
    const h = heads[n], nodes = tree.children.slice(h.index + 1, heads[n + 1]?.index ?? tree.children.length);
    if (claim(h)) {
      if (!nodes.length) errors.push(`${id}: empty ${h.name}`);
      if (nodes.some(node => linkCount(node, body))) errors.push(`${id}: ${h.name} contains hyperlinks; move them after the complete section`);
    }
    if (!h.name.endsWith(' references')) continue;
    const previous = heads[n - 1];
    if (!previous || !claim(previous) || h.name !== refHeading(previous.name))
      errors.push(`${id}: ${h.name} must immediately follow its matching complete statement/description`);
    if (!nodes.length) errors.push(`${id}: empty ${h.name}`);
    for (const node of nodes) {
      const raw = body.slice(node.position.start.offset, node.position.end.offset);
      if (node.type !== 'paragraph' || linkCount(node, body) !== 1 || raw.includes('\n'))
        errors.push(`${id}: each reference must occupy one source line and its own blank-line-separated paragraph`);
    }
  }
  return errors;
}
