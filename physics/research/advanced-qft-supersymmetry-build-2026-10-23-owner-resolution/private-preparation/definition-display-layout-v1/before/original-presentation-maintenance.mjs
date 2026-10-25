// Opt-in V2 extraction describes exact deltas; it never decides mathematical
// equivalence, authenticates a repair, changes a pin, or accepts a consumer.
import { createHash } from 'node:crypto';
import { isDeepStrictEqual as equal } from 'node:util';
import { readFileSync, readdirSync, existsSync, realpathSync } from 'node:fs';
import { createRequire } from 'node:module';
import { join, dirname } from 'node:path';
import { yaml } from './pathway-lib.mjs';
import { factParagraphs } from './facts-block.mjs';
import { WEB_DIR } from './paths.mjs';
const sha = bytes => createHash('sha256').update(bytes).digest('hex');
const fail = reason => { throw Error(`Invalid original presentation successor: ${reason}`); };
const substantive = text => typeof text === 'string' && text.trim().length >= 80;
const tail = text => /[ \t\r\n]*$/.exec(text)[0];
const trim = text => text.slice(0, text.length - tail(text).length);
const resultKinds = new Set(['lemma', 'theorem', 'proposition', 'corollary']);
const parserRoots = ['unified', 'remark-parse', 'remark-gfm', 'remark-math'];
const parserEnvironment = process.env.PRESTIGE_APP_DIR ?? null;
const parserNodeOptions = process.env.NODE_OPTIONS ?? null;
let parserCache;
function parserContext() {
  if (!WEB_DIR) fail('application Markdown parser unavailable');
  if ((process.env.PRESTIGE_APP_DIR ?? null) !== parserEnvironment
      || (process.env.NODE_OPTIONS ?? null) !== parserNodeOptions) fail('parser resolution context changed; restart required');
  return { web: realpathSync(WEB_DIR), executable: realpathSync(process.execPath), node: process.version };
}
function parserRuntimeSnapshot() {
  const context = parserContext(), inputs = {}, packages = new Map();
  const add = path => { const full = realpathSync(path); inputs[full] = sha(readFileSync(full)); return full; };
  const packageFor = (name, parent) => {
    const require = createRequire(join(parent, 'package.json')); let entry = null;
    try {
      entry = require.resolve(name); let dir = dirname(entry);
      while (dir !== dirname(dir)) {
        const path = join(dir, 'package.json');
        if (existsSync(path)) { const data = JSON.parse(readFileSync(path)); if (data.name === name) return { root: dir, path, data, entry }; }
        dir = dirname(dir);
      }
    } catch { /* Declared types-only dependencies can have no runtime entry. */ }
    for (const base of require.resolve.paths(name) ?? []) {
      const path = join(base, name, 'package.json');
      if (existsSync(path)) {
        const data = JSON.parse(readFileSync(path));
        if (data.name === name) return { root: dirname(path), path, data, entry: null };
      }
    }
    fail('unresolved parser runtime dependency ' + name);
  };
  const visit = (name, parent) => {
    const p = packageFor(name, parent), root = realpathSync(p.root);
    if (packages.has(root)) return;
    const row = { name: p.data.name, version: p.data.version, root,
      package_json: add(p.path), entry: p.entry ? add(p.entry) : null, files: [] };
    packages.set(root, row);
    const walk = dir => {
      for (const e of readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0)) {
        if (e.name === 'node_modules' || e.name.startsWith('.')) continue;
        const path = join(dir, e.name);
        if (e.isSymbolicLink()) fail('unsupported parser implementation symlink');
        if (e.isDirectory()) walk(path);
        else if (e.isFile() && /\.(?:js|mjs|cjs|json|node)$/.test(e.name)) row.files.push(add(path));
      }
    };
    walk(root); row.files.sort();
    for (const child of Object.keys(p.data.dependencies ?? {}).sort()) if (!child.startsWith('node:')) visit(child, root);
  };
  for (const name of parserRoots) visit(name, context.web);
  add(join(context.web, 'package.json')); add(join(context.web, 'package-lock.json')); add(context.executable);
  const rows = [...packages.values()].sort((a, b) => a.root < b.root ? -1 : a.root > b.root ? 1 : 0);
  const descriptor = { version: 1, runtime: context, pipeline: parserRoots,
    roots: parserRoots.map(name => { const r = rows.find(p => p.name === name); return { name, version: r.version, root: r.root, entry: r.entry, package_json: r.package_json }; }),
    packages: rows, inputs: Object.fromEntries(Object.entries(inputs).sort(([a], [b]) => a < b ? -1 : a > b ? 1 : 0)) };
  return { ...descriptor, fingerprint: sha(JSON.stringify(descriptor)) };
}
function checkedParser() {
  const before = parserRuntimeSnapshot();
  if (parserCache) {
    if (before.fingerprint !== parserCache.fingerprint) fail('loaded parser runtime changed; restart required');
    return parserCache;
  }
  const require = createRequire(join(before.runtime.web, 'package.json'));
  let parser;
  try {
    parser = require('unified').unified().use(require('remark-parse').default)
      .use(require('remark-gfm').default).use(require('remark-math').default);
  } catch { fail('synchronous application Markdown parser unavailable'); }
  const after = parserRuntimeSnapshot();
  if (before.fingerprint !== after.fingerprint) fail('parser runtime changed during load; restart required');
  parserCache = { parser, descriptor: before, fingerprint: before.fingerprint }; return parserCache;
}
function markdownTree(text) {
  const cached = checkedParser(), tree = cached.parser.parse(text);
  if (parserRuntimeSnapshot().fingerprint !== cached.fingerprint) fail('parser runtime changed during parse; restart required');
  return tree;
}
function parserDescriptor() { return structuredClone(checkedParser().descriptor); }
function rejectReferenceDefinitions(body) {
  const walk = node => {
    if (['definition', 'footnoteDefinition'].includes(node.type)) fail('reference definition context is unsupported for support consolidation');
    for (const child of node.children ?? []) walk(child);
  };
  walk(markdownTree(body));
}
function stepAst(text) {
  const rows = [], allowed = new Set(['root', 'paragraph', 'text', 'inlineMath', 'math', 'inlineCode']);
  const walk = (node, parent = null) => {
    if (!allowed.has(node.type)) fail('unsupported support consolidation Markdown node ' + node.type);
    const start = node.position?.start.offset, end = node.position?.end.offset;
    if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end) || start < 0 || end < start || end > text.length) fail('invalid Markdown source offsets');
    rows.push({ node, parent, start, end });
    for (const child of node.children ?? []) walk(child, node);
  };
  walk(markdownTree(text));
  const literals = rows.filter(r => ['inlineCode', 'inlineMath', 'math'].includes(r.node.type));
  const wikis = []; let cursor = 0;
  while (true) {
    const start = text.indexOf('[[', cursor); if (start < 0) break;
    const literal = literals.find(r => start >= r.start && start < r.end);
    if (literal) { cursor = literal.end; continue; }
    const end = text.indexOf(']]', start + 2); if (end < 0) fail('unclosed canonical wiki span');
    const raw = text.slice(start, end + 2); if (links(raw).length !== 1) fail('invalid canonical wiki span');
    wikis.push({ start, end: end + 2 }); cursor = end + 2;
  }
  const ranges = [...wikis, ...literals.filter(r => !wikis.some(w => w.start <= r.start && w.end >= r.end))]
    .map(({ start, end }) => ({ start, end })).sort((a, b) => a.start - b.start);
  if (ranges.some((r, i) => i && r.start < ranges[i - 1].end)) fail('crossed protected Markdown spans');
  return { rows, ranges };
}
function parse(bytes) {
  const text = bytes.toString('utf8');
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)([\s\S]*)$/);
  if (!m) fail('missing frontmatter');
  const doc = yaml().parseDocument(m[1], { uniqueKeys: true });
  if (doc.errors.length) fail('malformed YAML');
  const data = doc.toJS();
  if (!data || typeof data !== 'object' || Array.isArray(data)) fail('invalid metadata');
  return { data, body: m[2] };
}
function sections(body) {
  const heads = [...body.matchAll(/^## ([^\r\n]+)\r?$/gm)];
  const names = heads.map(h => h[1]);
  if (!names.length || new Set(names).size !== names.length) fail('missing/duplicate section');
  return { names, prefix: body.slice(0, heads[0].index), values: new Map(heads.map((h, i) => [h[1], body.slice(h.index, heads[i + 1]?.index ?? body.length)])) };
}
// Labels may contain single brackets, as in the actual old R[pi] label. Nested
// wikilinks, newlines, extra pipes, changed targets and changed surrounding text
// are never normalized away.
function links(text) {
  const out = []; let cursor = 0;
  while (true) {
    const start = text.indexOf('[[', cursor); if (start < 0) break;
    const end = text.indexOf(']]', start + 2); if (end < 0) fail('unterminated wikilink');
    const inside = text.slice(start + 2, end), pipe = inside.indexOf('|');
    const target = pipe < 0 ? inside : inside.slice(0, pipe);
    const label = pipe < 0 ? null : inside.slice(pipe + 1);
    if (!/^[a-z]+-[a-z0-9]+(?:-[a-z0-9]+)*$/.test(target) || /[\r\n]|\[\[/.test(inside)
        || label !== null && (!label || label.includes('|'))) fail('unsupported wikilink shape');
    out.push({ target, label, raw: text.slice(start, end + 2), start, end: end + 2 }); cursor = end + 2;
  }
  return out;
}
function skeleton(text, refs) {
  let out = '', at = 0;
  for (const ref of refs) { out += text.slice(at, ref.start) + `[[${ref.target}]]`; at = ref.end; }
  return out + text.slice(at);
}
function labels(before, after, section, deltas, context = () => null) {
  const a = links(before), b = links(after);
  if (!equal(a.map(r => r.target), b.map(r => r.target))) fail(`changed ${section} reference targets`);
  for (let i = 0; i < a.length; i++) if (a[i].raw !== b[i].raw) deltas.push({
    id: `${section}:label:${i}`, kind: 'reference-label', section,
    reference_index: i, target: a[i].target, fact_label: context(a[i].start), before: a[i].raw, after: b[i].raw,
  });
  return { before: skeleton(before, a), after: skeleton(after, b) };
}
function factAt(text, offset) {
  const matches = [...text.slice(0, offset).matchAll(/^(\[[FAL]\d+\]|\*\*Given:\*\*)[ \t]/gm)];
  const token = matches.at(-1)?.[1];
  return token?.startsWith('[') ? token.slice(1, -1) : token ? 'Given' : null;
}
function interfaceChange(before, after, section, deltas) {
  const a = trim(before), b = trim(after);
  if (section === 'Definition') {
    const well = text => text.match(/^(?:#{3,6}\s+|\*\*)(?:Well[- ](?:definedness|formedness)|Proof)\b[^\r\n]*/im);
    const x = well(a), y = well(b);
    if (Boolean(x) !== Boolean(y) || x && a.slice(x.index) !== b.slice(y.index)) fail('definition well-definedness changed');
  }
  const refs = labels(a, b, section, deltas);
  if (refs.before !== refs.after) fail(`scientific ${section} text change`);
  if (tail(before) !== tail(after)) deltas.push({ id: `${section}:separator`, kind: 'separator-whitespace', section, before: tail(before), after: tail(after) });
}
function mathOrCodeAt(text, index) {
  // Quotation punctuation is not stripped inside math, code or wikilinks.
  const spans = /\$\$[\s\S]*?\$\$|\$(?:\\.|[^$\r\n])*\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]|`[^`\r\n]*`|\[\[[\s\S]*?\]\]/g;
  return [...text.matchAll(spans)].some(m => index >= m.index && index < m.index + m[0].length);
}
function factsChange(before, after, deltas) {
  const refs = labels(before, after, 'Facts & Assumptions', deltas, at => factAt(before, at));
  // Only deletion of the observed flattened quotation marks is admitted. Each
  // deletion must lie in an existing named Fact paragraph and be independently
  // reviewed. In particular x > y, $x > y$, and > comparison operands fail.
  const a = refs.before, b = refs.after;
  const paragraphs = [...factParagraphs(a).values()];
  let i = 0, j = 0, occurrence = 0;
  while (i < a.length || j < b.length) {
    if (i < a.length && j < b.length && a[i] === b[j]) { i++; j++; continue; }
    const fact = paragraphs.find(f => { const start = a.indexOf(f.text); return start >= 0 && i >= start && i < start + f.text.length; });
    const opening = /[.!?:][ \t]+$/.test(a.slice(0, i)) && /^[A-Z][a-z]+\b/.test(a.slice(i + 2));
    const closing = /^\(def-[a-z0-9]+(?:-[a-z0-9]+)*\)/.test(a.slice(i + 2));
    if (a.slice(i, i + 2) !== '> ' || !fact || mathOrCodeAt(a, i) || !(opening || closing)) fail('scientific Facts text change');
    deltas.push({ id: `Facts:quotation:${occurrence++}`, kind: 'stray-blockquote-deletion', section: 'Facts & Assumptions', fact_label: fact.label,
      offset_in_target_skeleton: i, before: '> ', after: '', before_context: a.slice(Math.max(0, i - 60), i + 100) });
    i += 2;
  }
}
function proofParts(text) {
  const heads = [...text.matchAll(/^(\d+\.\d+) /gm)];
  if (!heads.length || new Set(heads.map(h => h[1])).size !== heads.length) fail('invalid numbered proof');
  return { intro: text.slice(0, heads[0].index), steps: heads.map((h, i) => ({ label: h[1], text: text.slice(h.index, heads[i + 1]?.index ?? text.length) })) };
}
function consolidationOption(value) {
  if (value === undefined) return null;
  if (!value || typeof value !== 'object' || Array.isArray(value)
      || !equal(Object.keys(value).sort(), ['steps', 'version']) || value.version !== 1
      || !Array.isArray(value.steps) || !value.steps.length
      || value.steps.some(s => typeof s !== 'string' || !/^[1-9]\d*\.[1-9]\d*$/.test(s))
      || new Set(value.steps).size !== value.steps.length) fail('invalid proof support consolidation option');
  return { version: 1, steps: [...value.steps] };
}
function relocationOption(value) {
  if (value === undefined) return null;
  if (!value || typeof value !== 'object' || Array.isArray(value)
      || !equal(Object.keys(value).sort(), ['steps', 'version']) || value.version !== 1
      || !Array.isArray(value.steps) || !value.steps.length
      || value.steps.some(s => !s || typeof s !== 'object' || Array.isArray(s)
        || !equal(Object.keys(s).sort(), ['label', 'target'])
        || typeof s.label !== 'string' || typeof s.target !== 'string'
        || !/^[1-9]\d*\.[1-9]\d*$/.test(s.label ?? '')
        || !/^[a-z]+-[a-z0-9]+(?:-[a-z0-9]+)*$/.test(s.target ?? ''))
      || new Set(value.steps.map(s => s.label)).size !== value.steps.length) fail('invalid proof reference relocation option');
  return { version: 1, steps: value.steps.map(s => ({ label: s.label, target: s.target })) };
}
function plaintextRole(ast, start, end, wiki = false) {
  const r = ast.rows.find(r => r.node.type === 'text' && r.start <= start && r.end >= end);
  if (!r || ast.ranges.some(r => start < r.end && end > r.start
      && !(wiki && r.start === start && r.end === end))) fail('support/reference range is not actual plaintext');
  return { type: 'text', start, end };
}
function referenceRelocation(before, after, request, deps) {
  if (!Array.isArray(deps) || !deps.includes(request.target)) fail('relocated target is not a predeclared dependency');
  const oldAst = stepAst(before), nextAst = stepAst(after), a = trim(before), b = trim(after);
  const oldWiki = `[[${request.target}]]`, targetPattern = request.target.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const terminal = new RegExp('\\[((?:[FAL][1-9]\\d*)(?:, [FAL][1-9]\\d*)*), (\\[\\[' + targetPattern + '\\]\\])\\]([ \\t]*∎)?$').exec(a);
  if (!terminal || a.indexOf(oldWiki) !== a.lastIndexOf(oldWiki)) fail('relocation requires one exact unlabelled terminal wiki');
  const tags = terminal[1].split(', ');
  if (new Set(tags).size !== tags.length) fail('duplicate relocation terminal tags');
  const newTerminal = terminal[0].replace(', ' + oldWiki, '');
  if (!b.endsWith(newTerminal)) fail('relocation changed ordinary terminal support or QED');
  const candidates = links(b).filter(r => r.target === request.target);
  if (candidates.length !== 1 || candidates[0].label === null) fail('relocation requires one labelled prose wiki');
  const next = candidates[0], label = next.label, labelAst = stepAst(label);
  const labelParagraph = labelAst.rows[0].node.children;
  if (label !== label.trim() || labelParagraph.length !== 1 || labelParagraph[0].type !== 'paragraph'
      || labelParagraph[0].children.length !== 1 || labelParagraph[0].children[0].type !== 'text'
      || labelParagraph[0].children[0].value !== label) fail('relocation label is not pure plain text');
  const prefix = a.slice(0, terminal.index), phrase = prefix.indexOf(label);
  if (phrase < 0 || prefix.indexOf(label, phrase + label.length) >= 0) fail('relocation label lacks one unique existing phrase');
  const oldWikiStart = terminal.index + 1 + terminal[1].length + 2;
  const roles = { offset_unit: 'UTF-16', old_phrase: plaintextRole(oldAst, phrase, phrase + label.length),
    old_wiki: plaintextRole(oldAst, oldWikiStart, oldWikiStart + oldWiki.length, true),
    new_wiki: plaintextRole(nextAst, next.start, next.end, true),
    old_terminal_prefix: plaintextRole(oldAst, terminal.index, oldWikiStart),
    old_terminal_close: plaintextRole(oldAst, oldWikiStart + oldWiki.length, oldWikiStart + oldWiki.length + 1),
    new_terminal: plaintextRole(nextAst, b.length - newTerminal.length, b.length - (terminal[3]?.length ?? 0)) };
  const expected = prefix.slice(0, phrase) + next.raw + prefix.slice(phrase + label.length) + newTerminal;
  if (expected !== b) fail('relocation changed surrounding scientific bytes');
  return { version: 1, target: request.target, label, old_phrase: { text: label, start: phrase, end: phrase + label.length },
    old_wiki: { text: oldWiki, start: oldWikiStart, end: oldWikiStart + oldWiki.length },
    new_wiki: { text: next.raw, start: next.start, end: next.end }, terminal_before: terminal[0], terminal_after: newTerminal,
    ordinary_support: tags, markdown_roles: roles };
}
function consolidationTokens(text, ast = stepAst(text)) {
  // Use actual AST ranges, including double/multiline inline code. Canonical
  // wiki spans supplement those literal ranges and remain byte-identical.
  const tokens = []; let at = 0;
  for (const r of ast.ranges) {
    tokens.push({ prose: text.slice(at, r.start).replace(/[ \t\r\n]+/g, ' ') }, { protected: text.slice(r.start, r.end) }); at = r.end;
  }
  tokens.push({ prose: text.slice(at).replace(/[ \t\r\n]+/g, ' ') }); return tokens;
}
function supportConsolidation(before, after) {
  const oldAst = stepAst(before), nextAst = stepAst(after);
  const terminal = (text, ast) => {
    const m = /\[([^\]\r\n]+)\]([ \t]*∎)?[ \t\r\n]*$/.exec(text);
    if (!m) fail('invalid consolidation terminal support');
    return { text: m[0], tags: m[1], marker: m[2]?.trim() ?? '', offset: m.index,
      role: plaintextRole(ast, m.index, m.index + m[1].length + 2) };
  };
  const tags = text => {
    const out = text.split(',').map(t => t.trim());
    if (!out.length || out.some(t => !/^(?:[FAL][1-9]\d*|step [1-9]\d*\.[1-9]\d*)$/.test(t))
        || new Set(out).size !== out.length) fail('invalid consolidation support tags');
    return out;
  };
  const old = terminal(before, oldAst), next = terminal(after, nextAst);
  if (old.marker !== next.marker) fail('consolidation QED changed');
  const oldBody = before.slice(0, old.offset), nextBody = after.slice(0, next.offset);
  const clusters = [...oldBody.matchAll(/(\[[^\[\]\r\n]+\])([ \t\r\n]+)\$\$([^\r\n]*?)\$\$/g)];
  if (clusters.length !== 1) fail('consolidation needs exactly one pre-display support cluster');
  const c = clusters[0];
  if (!/[\r\n]/.test(c[2])) fail('consolidation cluster is not prose before display');
  const removedRole = plaintextRole(oldAst, c.index, c.index + c[1].length);
  const displayStart = c.index + c[1].length + c[2].length, displayEnd = c.index + c[0].length;
  const displayNode = oldAst.rows.find(r => ['math', 'inlineMath'].includes(r.node.type) && r.start === displayStart && r.end === displayEnd);
  if (!displayNode) fail('old display lacks its exact Markdown math range');
  const standalone = displayNode.node.type === 'inlineMath' && displayNode.parent?.type === 'paragraph'
    && displayNode.parent.children.length === 1 && displayNode.parent.position.start.offset === displayStart
    && displayNode.parent.position.end.offset === displayEnd;
  if (displayNode.node.type !== 'math' && !standalone) fail('old double-dollar math is not a standalone paragraph');
  const removed = tags(c[1].slice(1, -1)), prior = tags(old.tags), current = tags(next.tags);
  const union = [...new Set([...prior, ...removed])];
  if (!equal(union, current)) fail('consolidation changed support union');
  const payload = c[3].replace(/^[ \t]+|[ \t]+$/g, '');
  // Only the observed trailing comma or period may leave the math delimiters.
  if (!/[,.]$/.test(payload) || payload.includes('%') || payload.includes('$')) fail('unsupported consolidation display payload');
  const inline = '$' + payload.slice(0, -1) + '$' + payload.at(-1);
  const inlineMath = inline.slice(0, -1), candidates = nextAst.rows.filter(r => r.node.type === 'inlineMath'
    && after.slice(r.start, r.end) === inlineMath && after[r.end] === payload.at(-1));
  if (candidates.length !== 1) fail('new inline math range is absent or ambiguous');
  const inlineNode = candidates[0];
  const folded = oldBody.slice(0, c.index) + inline + oldBody.slice(c.index + c[0].length);
  const scientific = consolidationTokens(folded);
  if (!equal(scientific, consolidationTokens(nextBody))) fail('consolidation changed scientific tokens');
  return { version: 1, terminal_before: old.tags, terminal_after: next.tags,
    removed_cluster: { text: c[1], offset: c.index }, support_union: union,
    display_before: '$$' + c[3] + '$$', inline_after: inline,
    qed: old.marker, scientific_tokens_sha256: sha(JSON.stringify(scientific)),
    markdown_roles: { offset_unit: 'UTF-16', removed_cluster: removedRole,
      terminal_before: old.role, terminal_after: next.role,
      old_display: { type: displayNode.node.type, role: standalone ? 'standalone-double-dollar' : 'display-math', start: displayStart, end: displayEnd },
      new_inline: { type: 'inlineMath', start: inlineNode.start, end: inlineNode.end } } };
}
function proofChange(before, after, deltas, consolidation, relocation, deps) {
  const a = proofParts(before), b = proofParts(after);
  if (!equal(a.steps.map(s => s.label), b.steps.map(s => s.label))) fail('proof step sequence change');
  let technique = null;
  if (a.intro !== b.intro) {
    const old = [...a.intro.matchAll(/^\*\*Proof technique:\*\*[^\r\n]*$/gm)], next = [...b.intro.matchAll(/^\*\*Proof technique:\*\*[^\r\n]*$/gm)];
    if (old.length !== 1 || next.length !== 1 || a.intro.replace(old[0][0], next[0][0]) !== b.intro) fail('unsupported proof introduction change');
    technique = { before: old[0][0], after: next[0][0] };
    deltas.push({ id: 'Proof:technique', kind: 'proof-technique', section: 'Proof', ...technique });
  }
  const steps = [];
  for (let i = 0; i < a.steps.length; i++) if (a.steps[i].text !== b.steps[i].text) {
    const x = a.steps[i], y = b.steps[i], support = text => /\[([^\]\n]+)\](?:[ \t]*∎)?[ \t\r\n]*$/.exec(text)?.[1];
    const requested = relocation?.steps.find(s => s.label === x.label);
    if (requested) {
      const relocated = referenceRelocation(x.text, y.text, requested, deps);
      const delta = { id: `Proof:step:${x.label}`, kind: 'proof-reference-relocation', section: 'Proof', label: x.label,
        target: requested.target, before: trim(x.text), after: trim(y.text), reference_relocation: relocated };
      steps.push({ label: x.label, before: x.text, after: y.text, kind: delta.kind }); deltas.push(delta);
      if (tail(x.text) !== tail(y.text)) deltas.push({ id: `Proof:step:${x.label}:separator`, kind: 'separator-spacing',
        section: 'Proof', label: x.label, before: tail(x.text), after: tail(y.text) });
      continue;
    }
    let qed = null, oldSupport = support(x.text);
    if (oldSupport === undefined && i === a.steps.length - 1) {
      const oldMarker = /[ \t]+\\qed([ \t\r\n]*)$/.exec(x.text), nextMarker = /[ \t]+∎([ \t\r\n]*)$/.exec(y.text);
      if (oldMarker && nextMarker) {
        const oldBody = x.text.slice(0, oldMarker.index), nextBody = y.text.slice(0, nextMarker.index);
        if (oldBody !== nextBody) fail('terminal QED repair changed proof text');
        oldSupport = support(oldBody);
        qed = { before_marker: '\\qed', after_marker: '∎', before_suffix: oldMarker[0], after_suffix: nextMarker[0] };
      }
    }
    let consolidated = null;
    if (consolidation?.steps.includes(x.label)) {
      if (qed) fail('support consolidation cannot also change terminal QED');
      consolidated = supportConsolidation(x.text, y.text);
    } else if (oldSupport === undefined || oldSupport !== support(y.text)) fail('changed proof support labels');
    const delta = { id: `Proof:step:${x.label}`, kind: consolidated ? 'proof-support-consolidation' : qed ? 'proof-terminal-qed' : trim(x.text) === trim(y.text) ? 'separator-spacing' : 'proof-step-presentation', section: 'Proof', label: x.label, before: x.text, after: y.text, ...(qed ? { terminal_qed: qed } : {}), ...(consolidated ? { support_consolidation: consolidated } : {}) };
    steps.push({ label: x.label, before: x.text, after: y.text, kind: delta.kind }); deltas.push(delta);
  }
  return { technique, steps };
}
export function originalPresentationChanges(beforeBytes, afterBytes, proofSupportConsolidation, proofReferenceRelocation) {
  const consolidation = consolidationOption(proofSupportConsolidation);
  const relocation = relocationOption(proofReferenceRelocation), strictProof = Boolean(consolidation || relocation);
  if (relocation?.steps.some(s => consolidation?.steps.includes(s.label))) fail('overlapping strict proof requests');
  const before = parse(beforeBytes), after = parse(afterBytes), prior = structuredClone(before.data), current = structuredClone(after.data);
  if (!(resultKinds.has(prior.kind) || prior.kind === 'definition')) fail('unsupported item kind');
  const verification = { before: prior.verification ?? null, after: current.verification ?? null };
  delete prior.verification; delete current.verification;
  const deltas = []; let title = null;
  if (prior.title !== current.title) {
    if (typeof prior.title !== 'string' || typeof current.title !== 'string' || !prior.title.trim() || !current.title.trim()) fail('invalid reviewed title pair');
    title = { before: prior.title, after: current.title };
    deltas.push({ id: 'metadata:title', kind: 'reviewed-title-pair', section: 'metadata', ...title });
    delete prior.title; delete current.title;
  }
  if (!equal(prior, current)) fail('scientific metadata/interface change');
  const a = sections(before.body), b = sections(after.body), primary = prior.kind === 'definition' ? 'Definition' : 'Statement';
  if (strictProof) { rejectReferenceDefinitions(before.body); rejectReferenceDefinitions(after.body); }
  if (!a.values.has(primary) || a.prefix !== b.prefix) fail('primary section/prefix change');
  const appended = !a.values.has('Remarks') && b.names.at(-1) === 'Remarks' && equal(a.names, b.names.slice(0, -1));
  if (!equal(a.names, b.names) && !appended) fail('new/deleted/reordered scientific section');
  let technique = null, steps = [], remarks = null; const preserved_sections = [];
  for (const name of a.names) {
    const x = a.values.get(name), y = b.values.get(name);
    if (name === primary) interfaceChange(x, y, name, deltas);
    else if (name === 'Facts & Assumptions') factsChange(x, y, deltas);
    else if (name === 'Proof' && resultKinds.has(prior.kind)) ({ technique, steps } = proofChange(x, y, deltas, consolidation, relocation, prior.deps));
    else {
      if (x !== y) {
        const extra = y?.startsWith(x) ? y.slice(x.length) : null;
        if (!appended || name !== a.names.at(-1) || !extra || !/^[ \t\r\n]+$/.test(extra)) fail(`preserved ${name} section changed`);
        deltas.push({ id: `${name}:appended-separator`, kind: 'section-separator-whitespace', section: name, before: '', after: extra });
      }
      preserved_sections.push({ name, sha256: sha(x) });
    }
  }
  if (resultKinds.has(prior.kind) && !a.values.has('Proof')) fail('result without numbered proof');
  if (appended) {
    const text = b.values.get('Remarks');
    if (!/^```(?:tikz|tikzcd)\r?\n[\s\S]+?^```[ \t]*(?:\r?\n|$)/m.test(text)) fail('derived Remarks require TikZ');
    remarks = { before: null, after: text };
    deltas.push({ id: 'Remarks:derived-exposition', kind: 'derived-exposition', section: 'Remarks', ...remarks });
  }
  const interfaceDeltas = deltas.filter(d => d.section === primary), factDeltas = deltas.filter(d => d.section === 'Facts & Assumptions');
  const has = (rows, kind) => rows.some(d => d.kind === kind);
  const statementLabels = has(interfaceDeltas, 'reference-label'), statementSpacing = has(interfaceDeltas, 'separator-whitespace');
  const factLabels = has(factDeltas, 'reference-label'), factQuotes = has(factDeltas, 'stray-blockquote-deletion');
  const review_classification = {
    interface_section: primary,
    statements: statementLabels ? statementSpacing ? 'reference-labels-and-separator-only' : 'reference-labels-only' : statementSpacing ? 'separator-only' : 'identical',
    facts: factLabels ? factQuotes ? 'reference-labels-and-quotation-only' : 'reference-labels-only' : factQuotes ? 'quotation-only' : 'identical',
    proof: steps.length || technique ? 'equivalent-presentation' : 'unchanged',
  };
  if (consolidation && !equal([...consolidation.steps].sort(), deltas.filter(d => d.kind === 'proof-support-consolidation').map(d => d.label).sort())) fail('unused proof support consolidation request');
  if (relocation && !equal(relocation.steps, deltas.filter(d => d.kind === 'proof-reference-relocation').map(d => ({ label: d.label, target: d.target })))) fail('unused proof reference relocation request');
  return { version: 2, kind: prior.kind, id: prior.id, source_hashes: { before: sha(beforeBytes), after: sha(afterBytes) }, verification, title, technique, steps, remarks, preserved_sections, review_classification, deltas,
    ...(consolidation ? { proof_support_consolidation: consolidation } : {}), ...(relocation ? { proof_reference_relocation: relocation } : {}),
    ...(strictProof ? { proof_support_parser_runtime: parserDescriptor() } : {}) };
}
/** Main integration supplies authenticated local binders. No free-text claim
 * substitutes for the exact source, per-delta hash, pinned target or evidence. */
export function validateOriginalPresentationReviews(entry, changes, { receipt, scope, bind, localEvidence } = {}) {
  const consolidation = consolidationOption(entry.proof_support_consolidation);
  const relocation = relocationOption(entry.proof_reference_relocation);
  if (!equal(consolidation, changes.proof_support_consolidation ?? null)
      || !equal([...(consolidation?.steps ?? [])].sort(), changes.deltas.filter(d => d.kind === 'proof-support-consolidation').map(d => d.label).sort())) fail('unbound proof support consolidation option');
  if (!equal(relocation, changes.proof_reference_relocation ?? null)
      || !equal(relocation?.steps ?? [], changes.deltas.filter(d => d.kind === 'proof-reference-relocation').map(d => ({ label: d.label, target: d.target })))) fail('unbound proof reference relocation option');
  if (entry.presentation_version !== 2 || changes.version !== 2 || !equal(entry.changes, changes)
      || entry.pinned_sha256 !== changes.source_hashes.before || entry.original_sha256 !== changes.source_hashes.after
      || typeof bind !== 'function' || typeof localEvidence !== 'function') fail('unbound V2 sources/deltas');
  if (consolidation || relocation) {
    const runtime = parserDescriptor();
    if (!equal(changes.proof_support_parser_runtime, runtime)) fail('missing/stale parser runtime binding');
    for (const [path, hash] of Object.entries(runtime.inputs)) bind(path, hash);
  } else if (changes.proof_support_parser_runtime !== undefined) fail('unrequested parser runtime binding');
  const science = entry.scientific_review;
  if (science?.statements !== changes.review_classification.statements || science.facts !== changes.review_classification.facts
      || science.hypotheses !== 'identical' || science.new_premises !== false || science.new_results !== false
      || science.proof !== changes.review_classification.proof
      || !substantive(science.reason) || !substantive(science.reading_limits)) fail('missing/false V2 scientific review classification');
  const reviews = entry.presentation_reviews;
  if (!Array.isArray(reviews) || reviews.length !== changes.deltas.length
      || new Set(reviews.map(r => r?.delta_id)).size !== reviews.length) fail('missing/duplicate V2 delta reviews');
  for (const delta of changes.deltas) {
    const review = reviews.find(r => r.delta_id === delta.id);
    if (!review || review.delta_sha256 !== sha(JSON.stringify(delta)) || !substantive(review.reason) || !substantive(review.reading_limits)
        || !Array.isArray(review.evidence) || !review.evidence.length) fail(`unreviewed V2 delta ${delta.id}`);
    for (const evidence of review.evidence) localEvidence(evidence);
    if (delta.target) {
      const pin = receipt?.files?.filter(p => p.path === `items/${delta.target}.md`), target = review.pinned_target;
      if (pin?.length !== 1 || !scope?.importedItems?.has(delta.target) || !scope?.paths?.has(pin[0].path)
          || target?.path !== pin[0].path || target.sha256 !== pin[0].sha256) fail('unbound V2 reference target');
      const data = parse(bind(target.path, target.sha256)).data;
      if (data.id !== delta.target || data.status !== 'published') fail('invalid V2 reference target');
    } else if (review.pinned_target !== undefined) fail('unrelated V2 reference review');
  }
  return true;
}
