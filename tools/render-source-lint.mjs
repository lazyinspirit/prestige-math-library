// Source-to-renderer diagnostics, using the application's actual Markdown
// packages and structural parser. This module performs no mathematical audit.
import { readFileSync, statSync } from 'node:fs';
import { createRequire } from 'node:module';
import { createHash } from 'node:crypto';
import { join } from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { WEB_DIR } from './paths.mjs';

if (!WEB_DIR) throw Error('render source lint requires the actual application checkout');
const requireApp = createRequire(join(WEB_DIR, 'package.json'));
const ts = requireApp('typescript');
const YAML = requireApp('yaml');
const katex = requireApp('katex');
const loadedInputs = new Map(), loadedStats = new Map();
const statKey = stat => [stat.dev, stat.ino, stat.size, stat.mtimeNs, stat.ctimeNs].join(':');
function input(path) {
  if (path instanceof URL) path = fileURLToPath(path);
  const before = statKey(statSync(path, { bigint: true }));
  const bytes = readFileSync(path);
  const after = statKey(statSync(path, { bigint: true }));
  if (before !== after) throw Error(`render source toolchain changed while loading: ${path}; restart the command`);
  loadedInputs.set(path, createHash('sha256').update(bytes).digest('hex'));
  loadedStats.set(path, after);
  return bytes.toString('utf8');
}
async function appModule(name) {
  const path = requireApp.resolve(name);
  input(path);
  input(join(WEB_DIR, 'node_modules', name, 'package.json'));
  return import(pathToFileURL(path).href);
}
function compiled(source, file) {
  return ts.transpileModule(source, { fileName: file, compilerOptions: {
    target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ES2022,
  } }).outputText;
}
const [{ unified }, { default: remarkParse }, { default: remarkGfm }, { default: remarkMath }] =
  await Promise.all(['unified', 'remark-parse', 'remark-gfm', 'remark-math'].map(appModule));
const sectionsPath = join(WEB_DIR, 'lib/item-sections.ts');
const sectionParser = await import('data:text/javascript;base64,' +
  Buffer.from(compiled(input(sectionsPath), sectionsPath)).toString('base64'));
const displayPath = join(WEB_DIR, 'lib/remark-display-tags.ts');
const { remarkDisplayTags } = await import('data:text/javascript;base64,' +
  Buffer.from(compiled(input(displayPath), displayPath)).toString('base64'));
const markdown = unified().use(remarkParse).use(remarkGfm).use(remarkMath).use(remarkDisplayTags);
const bodyPath = join(WEB_DIR, 'components/library/ItemBody.tsx');
const bodySource = input(bodyPath);
const libraryPath = join(WEB_DIR, 'lib/math-library.ts');
const librarySource = input(libraryPath);
// Compile only the actual pure resolver function; supplying a title callback
// avoids importing the app's serving/cache/database modules into a source lint.
const libraryAST = ts.createSourceFile(libraryPath, librarySource, ts.ScriptTarget.Latest, true);
const resolverNode = libraryAST.statements.find(node => ts.isFunctionDeclaration(node) && node.name?.text === 'resolveWikilinks');
if (!resolverNode) throw Error('actual app resolveWikilinks function unavailable');
const resolverCode = compiled(resolverNode.getText(libraryAST).replace(/^export\s+/, ''), libraryPath);
const resolveWikilinks = new Function('resolveItem', 'UNPROVED_MARK', 'FORWARD_MARK', 'FORWARD_MARK_PENDING',
  resolverCode + '; return resolveWikilinks;')((items, id) => items.get(id), 'not-proved-here', 'forward-reference', 'forward-reference-pending');
// Extract the actual ProofBlock initializer, rather than applying a banner
// rule globally to every occurrence of the words "Proof technique".
const bodyAST = ts.createSourceFile(bodyPath, bodySource, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
const proofNode = bodyAST.statements.find(node => ts.isFunctionDeclaration(node) && node.name?.text === 'ProofBlock');
const proofInitializers = new Map();
function findTechnique(node) {
  if (ts.isVariableDeclaration(node) && ['technique', 'step', 'tail'].includes(node.name.getText(bodyAST)))
    proofInitializers.set(node.name.getText(bodyAST), node.initializer?.getText(bodyAST));
  ts.forEachChild(node, findTechnique);
}
if (proofNode) findTechnique(proofNode);
if (['technique', 'step', 'tail'].some(name => !proofInitializers.get(name))) throw Error('actual app ProofBlock label parser unavailable');
const readTechnique = new Function('paras', 'return ' + proofInitializers.get('technique'));
const readStep = new Function('p', 'return ' + proofInitializers.get('step'));
const readTail = new Function('text', 'return ' + proofInitializers.get('tail'));
input(join(WEB_DIR, 'components/library/MathMarkdown.tsx'));
input(requireApp.resolve('yaml'));
input(requireApp.resolve('katex'));
input(join(WEB_DIR, 'node_modules/katex/package.json'));
input(requireApp.resolve('typescript'));
input(join(WEB_DIR, 'package.json'));
// The lock binds transitive parser behavior, not just top-level version strings.
input(join(WEB_DIR, 'package-lock.json'));
input(new URL(import.meta.url));
const fingerprint = createHash('sha256').update(JSON.stringify([...loadedInputs].sort(([a], [b]) => String(a).localeCompare(String(b))))).digest('hex');
/** Cheap stable-stat fast path; any file-identity/timestamp/size change is
 * checked against the exact loaded bytes before a cached analysis can escape. */
export function assertRenderingSourceToolchainCurrent() {
  for (const [path, expected] of loadedInputs) {
    let currentStat;
    try { currentStat = statKey(statSync(path, { bigint: true })); }
    catch { throw Error(`render source toolchain input unavailable after load: ${path}; restart the command`); }
    if (currentStat === loadedStats.get(path)) continue;
    const current = createHash('sha256').update(readFileSync(path)).digest('hex');
    const after = statKey(statSync(path, { bigint: true }));
    if (current !== expected || currentStat !== after)
      throw Error(`render source toolchain changed after load: ${path}; restart the command`);
    loadedStats.set(path, after);
  }
  return fingerprint;
}
export const renderingSourceToolchainFingerprint = () => assertRenderingSourceToolchainCurrent();
export const renderingSourceToolchainInputs = () => {
  assertRenderingSourceToolchainCurrent();
  return Object.fromEntries(loadedInputs);
};
export function parseRenderingMarkdown(source) {
  assertRenderingSourceToolchainCurrent();
  const tree = markdown.parse(source);
  return markdown.runSync(tree, { value: source });
}
const cache = new Map();
const MAX_CACHE = 256;
export function clearRenderingSourceCache() { cache.clear(); }
export const renderingSourceCacheSize = () => cache.size;
const clip = text => text.replace(/\s+/g, ' ').trim().slice(0, 160);
const lineAt = (text, offset) => text.slice(0, offset).split('\n').length;
const proofHeadings = sectionParser.PROOFY;
const ignored = new Set(['code', 'inlineCode', 'html', 'definition', 'image', 'imageReference']);
const rawRules = [
  ['raw-tex-command', /\\(?:alpha|beta|gamma|delta|epsilon|varepsilon|zeta|eta|theta|vartheta|iota|kappa|lambda|mu|nu|xi|pi|rho|sigma|tau|upsilon|phi|chi|psi|omega|Gamma|Delta|Theta|Lambda|Xi|Pi|Sigma|Phi|Psi|Omega|mathbb|mathcal|mathrm|mathbf|mathfrak|operatorname|frac|dfrac|tfrac|sqrt|sum|prod|int|partial|nabla|infty|in|notin|subseteq|subset|supseteq|cup|cap|leq?|geq?|neq?|times|otimes|oplus|to|mapsto|forall|exists|langle|rangle|lVert|rVert|begin|end|left|right|bar|overline|hat|tilde|text)\b/],
  ['raw-math-script', /\b(?:[A-Za-z][A-Za-z0-9]*\^(?:\{[^}\n]+\}|[A-Za-z0-9+-]+)|(?:[A-Za-z]|[A-Z]{1,4})_(?:\{[^}\n]+\}|[A-Za-z0-9]+))/],
  ['raw-math-comparison', /(?:<=|>=|!=)|\b(?:[A-Za-z]+\d*|\d+)\s*[<>]\s*(?:[A-Za-z]\b|infinity\b|\d+)/],
  ['raw-math-equation', /\b(?:[A-Za-z]|alpha|beta|gamma|delta|epsilon|lambda|mu|sigma|tau|theta|omega)\s*=\s*(?:[-+]?\d+(?:\.\d+)?\b|[A-Za-z]\b|infinity\b)/],
];

/** The result is cloned on cache hits so a caller cannot mutate later results.
 * resolveTitle(id) supplies the exact alias-resolved title from the selected
 * corpus, not permission to scan or audit any other supplier. */
export function inspectRenderingSource({ source, file = '(source)', resolveTitle } = {}) {
  assertRenderingSourceToolchainCurrent();
  if (typeof source !== 'string') throw TypeError('render source lint requires string source');
  if (resolveTitle !== undefined && typeof resolveTitle !== 'function') throw TypeError('resolveTitle must be a function');
  const front = source.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  const body = source.slice(front?.[0].length ?? 0), bodyOffset = front?.[0].length ?? 0;
  const titles = new Map();
  for (const match of body.matchAll(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g)) {
    const id = match[1].trim();
    if (!titles.has(id)) {
      const title = resolveTitle?.(id);
      if (title !== undefined && typeof title !== 'string') throw TypeError(`resolved title for ${id} must be string or undefined`);
      titles.set(id, title);
    }
  }
  const key = createHash('sha256').update(JSON.stringify([fingerprint, file, source, [...titles]])).digest('hex');
  if (cache.has(key)) {
    const value = cache.get(key); cache.delete(key); cache.set(key, value);
    return structuredClone(value);
  }
  const errors = [], warnings = [], math = [], diagrams = [];
  function diagnostic(list, code, message, text, offset, context, extra = {}) {
    list.push({ code, message, msg: message, file, line: lineAt(source, offset), excerpt: clip(text), context, ...extra });
  }
  function inspectText(text, offset, context, extra, raw = text, locate = () => offset) {
    const unsupported = /(?<!\\)\\[()[\]]/.exec(raw);
    if (unsupported) diagnostic(errors, 'unsupported-tex-delimiter',
      'The actual Markdown parser leaves TeX parenthesis/bracket delimiters as literal text.', raw, locate(unsupported.index), context, extra);
    for (const [code, rule] of rawRules) {
      const match = rule.exec(text);
      if (match) diagnostic(errors, code,
        `Un-delimited mathematical notation reaches the ${context} as literal text; use math delimiters or plain words.`, text, locate(match.index), context, extra);
    }
    const shorthand = /\bL(?:2|p)\b/.exec(text);
    if (shorthand) diagnostic(warnings, 'ambiguous-math-shorthand',
      'L2/Lp can be deliberate readable shorthand; inspect context before changing optional typography.', text, locate(shorthand.index), context, extra);
  }
  let metadata = null;
  if (front) {
    try { metadata = YAML.parse(front[1]); }
    catch (error) { diagnostic(errors, 'frontmatter-unparsable', String(error.message), '', 0, 'frontmatter'); }
  }
  const items = new Map([...titles].filter(([, title]) => title !== undefined).map(([id, title]) => [id, { id, title, provedHere: true }]));
  // Use the real resolver BEFORE remark parses, exactly as ItemBody receives it.
  const expanded = resolveWikilinks(body, items);
  const segments = []; let originalCursor = 0, expandedCursor = 0;
  for (const match of body.matchAll(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g)) {
    const plainLength = match.index - originalCursor;
    segments.push({ start: expandedCursor, end: expandedCursor + plainLength, original: originalCursor });
    expandedCursor += plainLength;
    const replacement = resolveWikilinks(match[0], items);
    segments.push({ start: expandedCursor, end: expandedCursor + replacement.length, original: match.index, target: match[1].trim() });
    expandedCursor += replacement.length; originalCursor = match.index + match[0].length;
  }
  segments.push({ start: expandedCursor, end: expanded.length + 1, original: originalCursor });
  function origin(offset) {
    const part = segments.find(part => offset >= part.start && offset < part.end) ?? segments.at(-1);
    return { offset: bodyOffset + part.original + (part.target ? 0 : offset - part.start), target: part.target };
  }
  const sections = []; let sectionCursor = 0;
  const headings = [...expanded.matchAll(/^## (.+)$/gm)];
  for (const section of sectionParser.splitSections(expanded)) {
    const heading = section.heading === null ? null : headings.find(match => match.index >= sectionCursor && match[1].trim() === section.heading);
    const searchStart = heading ? heading.index + heading[0].length : sectionCursor;
    const start = expanded.indexOf(section.content, searchStart);
    sections.push({ ...section, start, end: start + section.content.length });
    sectionCursor = start + section.content.length;
  }
  const banners = [], plainRegions = [];
  const hasPlainMarkup = value => /\$|\\[A-Za-z()[\]{}]|\[.+\]\(|\*\*|`/.test(value);
  for (const section of sections) if (proofHeadings.has(section.heading)) {
    const paras = sectionParser.paragraphs(section.content), technique = readTechnique(paras);
    if (technique) {
    const start = section.start + section.content.indexOf(paras[0]);
    banners.push({ start, end: start + paras[0].length });
    plainRegions.push(banners.at(-1));
    if (hasPlainMarkup(technique[1])) diagnostic(errors,
      'plain-proof-technique-markup', 'The actual first ProofBlock paragraph is a plain-text technique banner; math/Markdown markup prints literally here.',
      technique[1], origin(start).offset, 'proof-technique');
    }
    let paragraphCursor = 0;
    for (const paragraph of technique ? paras.slice(1) : paras) {
      const paragraphStart = section.content.indexOf(paragraph, paragraphCursor);
      paragraphCursor = paragraphStart + paragraph.length;
      const step = readStep(paragraph);
      if (!step) continue;
      const tail = readTail(step[2]);
      if (!tail) continue;
      const start = section.start + paragraphStart + paragraph.indexOf(step[2]) + tail.index;
      plainRegions.push({ start, end: start + tail[0].length });
      if (hasPlainMarkup(tail[1])) diagnostic(errors, 'plain-proof-tag-markup',
        'The actual ProofBlock trailing tags are plain-text chips; math/Markdown markup prints literally here.',
        tail[1], origin(start).offset, 'proof-tag');
    }
  }
  function inspectTree(tree, text, context, locate, extra = {}) {
    function walk(node, inherited = {}) {
      const offset = node.position?.start.offset ?? 0, end = node.position?.end.offset ?? offset;
      const mapped = locate(offset), target = mapped.target ?? inherited.target ?? extra.target;
      const currentContext = target ? 'reference-label' : context;
      if (context === 'body' && plainRegions.some(region => offset >= region.start && end <= region.end)) return;
      if (node.type === 'code') {
        const environment = node.lang;
        const raw = text.slice(offset, end);
        if (context === 'body' && /^(?:tikz|tikzcd)$/i.test(environment ?? '')) {
          if (!/^\s*```(?:tikz|tikzcd)\s*\r?\n/.test(raw) || !/\n[ \t]*```[ \t]*$/.test(raw)) {
            diagnostic(errors, 'unsupported-diagram-fence',
              'An explicit TikZ diagram fence is unclosed or has a header/fence syntax the actual renderer does not extract; use a closed plain triple-backtick tikz/tikzcd fence.',
              raw, mapped.offset, 'diagram');
            return;
          }
          const section = sections.find(section => offset >= section.start && offset <= section.end)?.heading ?? null;
          const proofSection = proofHeadings.has(section) || section === 'Facts & Assumptions';
          diagrams.push({ source: node.value, environment, line: lineAt(source, mapped.offset), section, proofSection });
          if (proofSection) diagnostic(errors, 'tikz-in-proof-section', 'The actual proof/facts renderer does not extract this diagram fence.', node.value, mapped.offset, 'diagram');
        }
        return;
      }
      if (context === 'body' && node.type === 'inlineCode' && /^`{3,}/.test(text.slice(offset, end))
        && /^(?:tikz|tikzcd)(?:\s|$)/i.test(node.value.trimStart())) {
        diagnostic(errors, 'unsupported-diagram-fence',
          'An inline triple-backtick TikZ construct renders as literal code, not a diagram; use a supported standalone diagram fence outside proof-like sections.',
          text.slice(offset, end), mapped.offset, 'diagram');
        return;
      }
      if (ignored.has(node.type)) return;
      // GFM autolink text is a URL, not a mathematical reference label.
      if (node.type === 'link' && /^<?https?:\/\//.test(text.slice(offset, end))) return;
      if (node.type === 'math' || node.type === 'inlineMath') {
        const classes = node.data?.hProperties?.className ?? [];
        const display = node.type === 'math' || classes.includes('math-display');
        math.push({ value: node.value, display, line: lineAt(source, mapped.offset), context: currentContext, ...(target ? { target } : {}) });
        try { katex.renderToString(node.value, { displayMode: display, throwOnError: true }); }
        catch (error) { diagnostic(errors, 'katex-parse-error', String(error.message).replace(/\s+/g, ' ').slice(0, 200),
          node.value, mapped.offset, currentContext, target ? { target } : extra); }
        return;
      }
      if (node.type === 'text') inspectText(node.value, mapped.offset, currentContext, target ? { target } : extra, text.slice(offset, end), relative => locate(offset + relative).offset);
      for (const child of node.children ?? []) walk(child, target ? { target } : inherited);
    }
    walk(tree);
  }
  if (typeof metadata?.title === 'string') {
    const titleLine = source.match(/^title\s*:/m)?.index ?? 0;
    inspectTree(parseRenderingMarkdown(metadata.title), metadata.title, 'title', () => ({ offset: titleLine }));
  }
  inspectTree(parseRenderingMarkdown(expanded), expanded, 'body', origin);
  const result = { errors, warnings, math, diagrams, toolchainFingerprint: fingerprint };
  cache.set(key, result); if (cache.size > MAX_CACHE) cache.delete(cache.keys().next().value);
  return structuredClone(result);
}
