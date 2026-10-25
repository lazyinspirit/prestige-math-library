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
function stepAst(text, wholeBody = false) {
  const rows = [], allowed = new Set(['root', 'paragraph', 'text', 'inlineMath', 'math', 'inlineCode']);
  const walk = (node, parent = null) => {
    if (!wholeBody && !allowed.has(node.type)) fail('unsupported support consolidation Markdown node ' + node.type);
    const start = node.position?.start.offset, end = node.position?.end.offset;
    if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end) || start < 0 || end < start || end > text.length) fail('invalid Markdown source offsets');
    rows.push({ node, parent, start, end });
    for (const child of node.children ?? []) walk(child, node);
  };
  walk(markdownTree(text));
  const literals = rows.filter(r => ['inlineCode', 'inlineMath', 'math', ...(wholeBody ? ['code'] : [])].includes(r.node.type));
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
function definitionSuffixUnchanged(a, b) {
    const well = text => text.match(/^(?:#{3,6}\s+|\*\*)(?:Well[- ](?:definedness|formedness)|Proof)\b[^\r\n]*/im);
    const x = well(a), y = well(b);
    if (Boolean(x) !== Boolean(y) || x && a.slice(x.index) !== b.slice(y.index)) fail('definition well-definedness changed');
}
function interfaceChange(before, after, section, deltas) {
  const a = trim(before), b = trim(after);
  if (section === 'Definition') definitionSuffixUnchanged(a, b);
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
function definitionDisplayOption(value) {
  if (value === undefined) return null;
  if (!value || typeof value !== 'object' || Array.isArray(value)
      || !equal(Object.keys(value).sort(), ['display', 'version']) || value.version !== 1
      || !Number.isSafeInteger(value.display) || value.display < 0) fail('invalid definition display layout option');
  return { version: 1, display: value.display };
}
function rejectStyleIndirection(texts, context) {
  // Display style may select different mathematical tokens even with identical
  // TeX bytes. Reject ambient definitions/indirection as well as direct choices:
  // an unchanged earlier formula could otherwise define an alias for the span.
  const unsafe = new Set(['mathchoice', 'mathpalette', 'else', 'fi', 'or', 'unless',
    'def', 'gdef', 'edef', 'xdef', 'let', 'futurelet', 'csname', 'endcsname',
    'expandafter', 'noexpand', 'unexpanded', 'expanded', 'detokenize', 'scantokens',
    'string', 'meaning', 'the', 'toks', 'afterassignment', 'aftergroup', 'global',
    'long', 'outer', 'protected', 'catcode', 'mathcode', 'delcode', 'lccode', 'uccode',
    'sfcode', 'chardef', 'mathchardef', 'countdef', 'dimendef', 'skipdef', 'muskipdef',
    'toksdef', 'everymath', 'everydisplay', 'input', 'include', 'write', 'read', 'openout', 'openin', 'verb',
    'endlinechar', 'newlinechar', 'obeylines', 'obeyspaces', 'active', 'begingroup', 'endgroup']);
  for (const text of texts) {
    if (text.includes('^^')) fail('unsafe ' + context + ' style/indirection TeX');
    for (const m of text.matchAll(/\\([A-Za-z@]+)/g)) {
      const name = m[1].toLowerCase();
      if (unsafe.has(name) || name.includes('@') || /^(?:if|new|renew|provide|declare)/.test(name))
        fail('unsafe ' + context + ' style/indirection TeX');
    }
  }
}
function definitionDisplayLayout(before, after, option, deltas) {
  definitionSuffixUnchanged(before, after);
  rejectStyleIndirection([before, after], 'definition');
  const candidates = [...before.matchAll(/(?<=\n)\$\$([^\r\n$]+)\$\$(?=\n)/g)]
    .map(m => Object.assign(['\n' + m[0] + '\n', m[1]], { index: m.index - 1 }));
  const selected = candidates[option.display];
  if (!selected) fail('unknown/unused definition display layout selection');
  const payload = selected[1];
  if (!payload.trim() || /%|\^\^|\\(?:verb|catcode|def|gdef|edef|xdef|let|futurelet|csname|endcsname|input|include|write|read|openout|openin|scantokens|everymath|everydisplay|begingroup|endgroup|global|newcommand|renewcommand|providecommand|endlinechar|newlinechar|obeylines|obeyspaces|active)\b/.test(payload)) fail('unsafe definition display TeX');
  const start = selected.index + 1, end = start + selected[0].length - 2;
  const replacement = '\n\n$$\n' + payload + '\n$$\n\n';
  if (before.slice(0, selected.index) + replacement + before.slice(selected.index + selected[0].length) !== after) fail('definition display layout changed other bytes');
  const findMath = (text, start, end, old) => {
    const found = [];
    const walk = (node, ancestors = []) => {
      if (node.position?.start.offset === start && node.position?.end.offset === end
          && (old ? ['math', 'inlineMath'].includes(node.type) : node.type === 'math')
          && ancestors.every(p => ['root', 'paragraph'].includes(p.type))) found.push({ node, ancestors });
      for (const child of node.children ?? []) walk(child, [...ancestors, node]);
    };
    walk(markdownTree(text));
    if (found.length !== 1) fail('definition display is not actual root/paragraph math');
    const { node, ancestors } = found[0];
    if (!old && (ancestors.length !== 1 || ancestors[0].type !== 'root')) fail('new definition display is not standalone math');
    return { type: node.type, start, end, ancestors: ancestors.map(p => p.type) };
  };
  const afterStart = selected.index + 2, afterEnd = afterStart + payload.length + 6;
  for (const [text, low, high] of [[before, start, end], [after, afterStart, afterEnd]])
    if (links(text).some(r => low < r.end && high > r.start)) fail('definition display overlaps canonical wiki span');
  const roles = { offset_unit: 'UTF-16', before: findMath(before, start, end, true), after: findMath(after, afterStart, afterEnd, false) };
  deltas.push({ id: 'Definition:display:' + option.display, kind: 'definition-display-layout', section: 'Definition',
    display: option.display, before: selected[0], after: replacement, payload_sha256: sha(payload),
    definition_before_sha256: sha(before), definition_after_sha256: sha(after), markdown_roles: roles });
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
const fourierTechniquePair = {
  before: '**Proof technique:** Fubini followed by $L^2$ approximation.',
  after: '**Proof technique:** Fubini followed by square-integrable approximation.',
};
function supportLayoutOption(value) {
  if (value === undefined) return null;
  if (!value || typeof value !== 'object' || Array.isArray(value)
      || !equal(Object.keys(value).sort(), ['steps', 'version']) || value.version !== 1
      || !Array.isArray(value.steps) || !value.steps.length
      || value.steps.some(s => typeof s !== 'string' || !/^[1-9]\d*\.[1-9]\d*$/.test(s))
      || new Set(value.steps).size !== value.steps.length) fail('invalid support relocation layout option');
  return { version: 1, steps: [...value.steps] };
}
function paragraphLayoutOption(value) {
  if (value === undefined) return null;
  if (!value || typeof value !== 'object' || Array.isArray(value)
      || !equal(Object.keys(value).sort(), ['steps', 'technique', 'version'])
      || !equal(value.technique, fourierTechniquePair)) fail('invalid exact paragraph layout technique option');
  const base = supportLayoutOption({ version: value.version, steps: value.steps });
  return { ...base, technique: { ...fourierTechniquePair } };
}
function layoutSupportTags(raw) {
  const tags = raw.slice(1, -1).split(',').map(t => t.trim());
  if (!tags.length || tags.some(t => !/^(?:[FAL][1-9]\d*|step [1-9]\d*\.[1-9]\d*|given|choose|construct)$/.test(t))
      || new Set(tags).size !== tags.length) fail('invalid layout support cluster');
  return tags;
}
function layoutStep(before, after, label, mode) {
  const oldAst = stepAst(before), nextAst = stepAst(after), separator = mode === 'support-relocation' ? ' ' : '\n';
  const labelRole = ast => {
    const role = plaintextRole(ast, 0, label.length + 1), paragraph = ast.rows.find(r => r.node.type === 'paragraph' && r.start === 0);
    if (!paragraph || paragraph.end < role.end) fail('layout named step is not an actual paragraph start');
    return { ...role, paragraph: { start: paragraph.start, end: paragraph.end } };
  };
  const beforeLabel = labelRole(oldAst), afterLabel = labelRole(nextAst);
  const literals = (text, ast) => ast.ranges.map(r => ({ raw: text.slice(r.start, r.end),
    type: ast.rows.find(n => n.start === r.start && n.end === r.end && ['math','inlineMath','inlineCode'].includes(n.node.type))?.node.type ?? 'canonical-wiki',
    start: r.start, end: r.end }));
  const oldLiterals = literals(before, oldAst), newLiterals = literals(after, nextAst);
  if (!equal(oldLiterals.map(({raw,type})=>({raw,type})), newLiterals.map(({raw,type})=>({raw,type})))) fail('layout changed protected literal bytes/types');
  const displays = oldAst.rows.filter(r => ['math', 'inlineMath'].includes(r.node.type) && before.slice(r.start,r.end).startsWith('$$'));
  if (!displays.length) fail('layout lacks actual double-dollar math');
  const patches = [], joins = [], mathRoles = [];
  for (const r of displays) {
    const raw = before.slice(r.start,r.end), standalone = r.node.type === 'math' && r.parent?.type === 'root'
      || r.parent?.type === 'paragraph' && r.parent.children.length === 1
        && r.parent.position.start.offset === r.start && r.parent.position.end.offset === r.end;
    if (!standalone || !/^\$\$[^\r\n$]+\$\$$/.test(raw)
        || !oldAst.ranges.some(p=>p.start===r.start&&p.end===r.end)) fail('layout old math is not a literal sole-paragraph double-dollar span');
    const a = /[ \t\r\n]+$/.exec(before.slice(0,r.start)), b = /^[ \t\r\n]+/.exec(before.slice(r.end));
    if (a?.[0] !== '\n\n' || b?.[0] !== '\n\n') fail('layout requires exact old two-LF math boundaries');
    for (const [start,end] of [[r.start-2,r.start],[r.end,r.end+2]]) {
      patches.push({start,end,text:separator}); joins.push({start,end,before:'\n\n',after:separator});
    }
    mathRoles.push({before:{type:r.node.type,start:r.start,end:r.end,paragraph_role:'sole-math-paragraph'},raw_sha256:sha(raw)});
  }
  const first = displays[0], prefix = before.slice(0,first.start), pre = /(\[[^\[\]\r\n]+\])\n\n$/.exec(prefix);
  if (!pre) fail('layout needs a complete plaintext pre-first-display support cluster');
  const cluster = pre[1], clusterStart = pre.index, tags = layoutSupportTags(cluster), oldClusterRole = plaintextRole(oldAst,clusterStart,clusterStart+cluster.length);
  if(oldClusterRole.end>beforeLabel.paragraph.end) fail('layout pre-display cluster is not in named-step opening paragraph');
  let moved = null;
  if (mode === 'support-relocation') {
    if (/\[[^\]\r\n]+\][ \t\r\n]*$/.test(before) || before.includes('∎') || before.includes('\\qed')) fail('support layout requires no old terminal cluster or endmarker');
    if (before.indexOf(cluster) !== before.lastIndexOf(cluster) || before[clusterStart-1] !== ' '
        || /[\s\]]/.test(before[clusterStart-2] ?? '')) fail('ambiguous or adjacent support layout cluster');
    patches.push({start:clusterStart-1,end:clusterStart+cluster.length,text:''});
    moved = {raw:cluster,tags,owned_before:' '+cluster,before:oldClusterRole,endmarker:''};
  }
  patches.sort((a,b)=>a.start-b.start);
  if (patches.some((p,i)=>i && p.start<patches[i-1].end)) fail('overlapping layout boundary patches');
  let expected=before;
  for (const p of [...patches].reverse()) expected=expected.slice(0,p.start)+p.text+expected.slice(p.end);
  if (moved) expected=trim(expected)+' '+cluster+tail(expected);
  if (expected !== after) fail('layout changed prose, support, payload or unapproved whitespace');
  const newDisplays = nextAst.rows.filter(r=>['math','inlineMath'].includes(r.node.type)&&after.slice(r.start,r.end).startsWith('$$'));
  if (newDisplays.length !== displays.length) fail('layout math spans changed');
  for(let i=0;i<newDisplays.length;i++) {
    const r=newDisplays[i];
    if(after.slice(r.start,r.end)!==before.slice(displays[i].start,displays[i].end)) fail('layout math literal changed');
    if(r.parent?.type!=='paragraph'||r.parent.position.start.offset!==0||r.parent.children.length<2) fail('layout new math is not embedded in actual named-step paragraph');
    mathRoles[i].after={type:r.node.type,start:r.start,end:r.end,paragraph_role:'embedded-math',paragraph:{start:r.parent.position.start.offset,end:r.parent.position.end.offset}};
  }
  const terminal = (text,ast) => {
    const m=/\[([^\]\r\n]+)\]([ \t]*∎)?[ \t\r\n]*$/.exec(text);
    if(!m) fail('layout terminal support is absent');
    layoutSupportTags('['+m[1]+']');
    return {raw:'['+m[1]+']',endmarker:m[2]??'',role:plaintextRole(ast,m.index,m.index+m[1].length+2)};
  };
  const nextTerminal=terminal(after,nextAst);
  if (moved) {
    if(nextTerminal.raw!==cluster || nextTerminal.endmarker) fail('support layout terminal cluster changed');
    const p=nextAst.rows.find(r=>r.node.type==='paragraph'&&r.start===0);
    if(!p || nextTerminal.role.end>p.end) fail('support layout terminal is not in complete named-step paragraph');
    moved.after=nextTerminal.role;
  } else {
    const oldTerminal=terminal(before,oldAst);
    if(oldTerminal.raw!==nextTerminal.raw || oldTerminal.endmarker!==nextTerminal.endmarker) fail('paragraph layout changed terminal support');
    const preNew=/(\[[^\[\]\r\n]+\])\n$/.exec(after.slice(0,newDisplays[0].start));
    if(!preNew||preNew[1]!==cluster) fail('paragraph layout pre-display support changed');
    moved={raw:cluster,tags,unchanged_before:oldClusterRole,unchanged_after:plaintextRole(nextAst,preNew.index,preNew.index+cluster.length),terminal_before:oldTerminal,terminal_after:nextTerminal};
  }
  return {version:1,mode,separator,patches,joins,support:moved,protected_literals:oldLiterals.map(({raw,type})=>({type,sha256:sha(raw)})),
    protected_ranges:{before:oldLiterals.map(({raw,...r})=>({...r,sha256:sha(raw)})),after:newLiterals.map(({raw,...r})=>({...r,sha256:sha(raw)}))},
    markdown_roles:{offset_unit:'UTF-16',named_step_before:beforeLabel,named_step_after:afterLabel,math:mathRoles}};
}
function strictLayoutContext(before,after,request,paragraphMode,deltas,deps) {
  const a=sections(before),b=sections(after);
  if(a.values.has('Remarks')||b.values.has('Remarks')) fail('strict layout cannot include Remarks');
  const headers={before:canonicalHeadings(before),after:canonicalHeadings(after)};
  rejectStyleIndirection([a.values.get('Proof')??'',b.values.get('Proof')??''],'proof');
  for(const body of [before,after]) {
    const walk=node=>{if(['html','image','imageReference','code'].includes(node.type)) fail('strict layout graphics/code context');for(const c of node.children??[])walk(c);};
    walk(markdownTree(body));
    if(/\\(?:includegraphics|tikz)\b|\\begin\s*\{\s*(?:tikzcd|tikzpicture)\s*\}/.test(body)) fail('strict layout TeX graphics context');
  }
  const kind=paragraphMode?'proof-paragraph-join-layout':'proof-support-relocation-layout';
  if(!equal(request.steps,deltas.filter(d=>d.kind===kind).map(d=>d.label))) fail('unused/unknown strict layout step selector');
  if(deltas.some(d=>d.kind!==kind && !(paragraphMode ? d.kind==='proof-technique' && d.before===fourierTechniquePair.before && d.after===fourierTechniquePair.after
      : d.kind==='reference-label' && d.section==='Facts & Assumptions' && Array.isArray(deps)&&deps.includes(d.target)))) fail('strict layout has unrelated deltas');
  if(paragraphMode && deltas.filter(d=>d.kind==='proof-technique').length!==1) fail('strict paragraph layout requires exact technique delta');
  const contextual=[];
  for(const [side,body,section]of [['before',before,a],['after',after,b]]) {
    const ast=stepAst(body,true),proof=section.values.get('Proof'),proofStart=headers[side].find(h=>h.name==='Proof')?.start;
    if(!Number.isSafeInteger(proofStart)) fail('layout has no actual Proof ownership');
    const marks=[...proof.matchAll(/^(\d+\.\d+) /gm)];
    const textRole=(start,end)=>{
      const node=ast.rows.find(r=>r.node.type==='text'&&r.start<=start&&r.end>=end),paragraph=node?.parent;
      if(!node||paragraph?.type!=='paragraph'||ast.rows.find(r=>r.node===paragraph)?.parent?.type!=='root'
          ||ast.ranges.some(r=>start<r.end&&end>r.start)) fail('layout full-body range is not actual root-paragraph plaintext');
      return {type:'text',start,end,paragraph:{start:paragraph.position.start.offset,end:paragraph.position.end.offset}};
    };
    for(const label of request.steps) {
      const matches=marks.map((m,i)=>({m,i})).filter(r=>r.m[1]===label);
      if(matches.length!==1) fail('layout full-body step ownership is ambiguous');
      const {m,i}=matches[0],start=proofStart+m.index,end=proofStart+(marks[i+1]?.index??proof.length),delta=deltas.find(d=>d.kind===kind&&d.label===label);
      if(body.slice(start,end)!==delta[side]) fail('layout full-body step bytes do not match');
      const named=textRole(start,start+label.length+1);
      if(named.paragraph.start!==start) fail('layout full-body named step is not a paragraph start');
      if(ast.ranges.some(r=>r.start<end&&r.end>start&&(r.start<start||r.end>end))) fail('layout protected context crosses named-step boundary');
      const actual=ast.ranges.filter(r=>r.start>=start&&r.end<=end).map(r=>({type:ast.rows.find(n=>n.start===r.start&&n.end===r.end&&['math','inlineMath','inlineCode','code'].includes(n.node.type))?.node.type??'canonical-wiki',start:r.start-start,end:r.end-start,sha256:sha(body.slice(r.start,r.end))}));
      if(!equal(actual,delta.layout.protected_ranges[side])) fail('layout full-body protected ranges/types differ from fragment');
      const support=delta.layout.support,relative=side==='before'?[support.before??support.unchanged_before,support.terminal_before?.role]:[support.after??support.unchanged_after,support.terminal_after?.role];
      const supports=relative.filter(Boolean).map(r=>textRole(start+r.start,start+r.end));
      if(supports[0].paragraph.start!==start) fail('layout full-body opening support is outside named paragraph');
      contextual.push({side,label,start,end,named_step:named,support:supports,protected_ranges:actual.map(r=>({...r,start:r.start+start,end:r.end+start}))});
    }
  }
  return {version:1,canonical_sections:headers,steps:contextual,proof_before_sha256:sha(a.values.get('Proof')),proof_after_sha256:sha(b.values.get('Proof')),graphics_free:true};
}
function proofChange(before, after, deltas, consolidation, relocation, deps, supportLayout, paragraphLayout) {
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
    if (supportLayout?.steps.includes(x.label) || paragraphLayout?.steps.includes(x.label)) {
      const paragraphMode=Boolean(paragraphLayout), layout=layoutStep(x.text,y.text,x.label,paragraphMode?'paragraph-join':'support-relocation');
      const delta={id:`Proof:step:${x.label}`,kind:paragraphMode?'proof-paragraph-join-layout':'proof-support-relocation-layout',section:'Proof',label:x.label,before:x.text,after:y.text,layout};
      steps.push({label:x.label,before:x.text,after:y.text,kind:delta.kind});deltas.push(delta);continue;
    }
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
function canonicalHeadings(text) {
    const raw = [...text.matchAll(/^## ([^\r\n]+)\r?$/gm)],
      actual = markdownTree(text).children.filter(node => node.type === 'heading' && node.depth === 2);
    if (raw.length !== actual.length) fail('terminal Remarks canonical section headings are not actual root H2');
    return raw.map((m, i) => {
      const node = actual[i], end = m.index + m[0].replace(/\r$/, '').length;
      if (node.position?.start.offset !== m.index || node.position?.end.offset !== end
          || node.children?.length !== 1 || node.children[0].type !== 'text' || node.children[0].value !== m[1])
        fail('terminal Remarks canonical section headings are not actual root H2');
      return { name: m[1], type: 'heading', depth: 2, start: m.index, end };
    });
}
function terminalRemarksOption(value) {
  if (value === undefined) return null;
  if (!value || typeof value !== 'object' || Array.isArray(value)
      || !equal(Object.keys(value).sort(), ['step', 'version']) || value.version !== 1
      || typeof value.step !== 'string' || !/^[1-9]\d*\.[1-9]\d*$/.test(value.step)) fail('invalid terminal Remarks heading option');
  return { version: 1, step: value.step };
}
function terminalRemarksBody(before, after, option, deltas) {
  const old = '∎ ## Remarks\n\n', next = '∎\n\n## Remarks\n\n', start = before.indexOf(old);
  if (start < 0 || start !== before.lastIndexOf(old) || [...before.matchAll(/∎/g)].length !== 1
      || before.slice(0, start) + next + before.slice(start + old.length) !== after) fail('terminal Remarks whole-body literal change');
  const a = sections(before), b = sections(after);
  if (a.names.at(-1) !== 'Proof' || b.names.at(-1) !== 'Remarks' || a.values.has('Remarks')
      || !equal(a.names, b.names.slice(0, -1))) fail('terminal Remarks section sequence');
  const proofStart = before.indexOf(a.values.get('Proof')), steps = [...before.slice(proofStart).matchAll(/^(\d+\.\d+) /gm)];
  if (!steps.length || new Set(steps.map(m => m[1])).size !== steps.length || steps.at(-1)[1] !== option.step
      || proofStart + steps.at(-1).index >= start || /[\r\n]/.test(before.slice(proofStart + steps.at(-1).index, start))
      || !/\[[^\]\r\n]+\][ \t]+$/.test(before.slice(0, start))) fail('terminal Remarks is not the named final numbered step');
  const role = (text, low, high, type, content) => {
    const rows = [];
    const walk = (node, ancestors = []) => {
      if (node.type === type && node.position?.start.offset <= low && node.position?.end.offset >= high
          && ancestors.every(p => ['root', 'paragraph'].includes(p.type))
          && (type !== 'heading' || node.depth === 2 && node.position.start.offset === low && node.position.end.offset === high
            && node.children?.length === 1 && node.children[0].type === 'text' && node.children[0].value === content)) rows.push({ node, ancestors });
      for (const child of node.children ?? []) walk(child, [...ancestors, node]);
    };
    walk(markdownTree(text));
    if (rows.length !== 1 || links(text).some(r => low < r.end && high > r.start)) fail('terminal Remarks hidden Markdown role');
    const paragraph = rows[0].ancestors.find(p => p.type === 'paragraph');
    return { type, start: low, end: high, ...(type === 'heading' ? { depth: 2 } : {}),
      ...(paragraph ? { paragraph: { start: paragraph.position.start.offset, end: paragraph.position.end.offset } } : {}) };
  };
  const sectionRoles = { before: canonicalHeadings(before), after: canonicalHeadings(after) };
  const stepStart = proofStart + steps.at(-1).index, stepEnd = stepStart + option.step.length + 1;
  if (sectionRoles.before.find(h => h.name === 'Proof')?.start >= stepStart
      || sectionRoles.after.find(h => h.name === 'Proof')?.start >= stepStart) fail('terminal Remarks actual Proof heading must precede named step');
  const roles = { offset_unit: 'UTF-16', canonical_sections: sectionRoles, before_step: role(before, stepStart, stepEnd, 'text'),
    after_step: role(after, stepStart, stepEnd, 'text'), before: role(before, start, start + '∎ ## Remarks'.length, 'text'),
    after_qed: role(after, start, start + 1, 'text'), after_heading: role(after, start + 3, start + 13, 'heading', 'Remarks') };
  if (!roles.before_step.paragraph || roles.before_step.paragraph.start !== stepStart
      || !equal(roles.before_step.paragraph, roles.before.paragraph)
      || roles.after_step.paragraph?.start !== stepStart || !equal(roles.after_step.paragraph, roles.after_qed.paragraph))
    fail('terminal Remarks named step and QED are not one actual proof paragraph');
  deltas.push({ id: 'Proof:terminal-remarks-heading:' + option.step, kind: 'terminal-remarks-heading', section: 'Proof', label: option.step,
    before: old, after: next, body_before_sha256: sha(before), body_after_sha256: sha(after),
    suffix_before_sha256: sha(before.slice(start)), suffix_after_sha256: sha(after.slice(start)),
    remarks_bytes_sha256: sha(before.slice(start + old.length)), markdown_roles: roles });
  return after;
}
// This identifies ONE separately Root-reviewed published transcription. Hashes
// establish case identity only; they do not establish mathematical equivalence.
const counterexampleSpellingCase = {
  version: 1,
  id: 'cex-isomorphic-associated-graded-objects-need-not-give-isomorphic-filtered-objects',
  before_body_sha256: '1b347b787d6ada50e6c02c90d39602c3584f21f1aa1919515480ce114906aa7a',
  after_body_sha256: 'bafda8b9e952a454891c4629b3c95f290dc90bb3723b4198b5351a7aa3093fb0',
};
const counterexampleTargets = ['def-associated-graded-object-of-a-filtered-object', 'lem-abelian-group-model-for-spectral-sequence-computations'];
function counterexampleSpellingOption(value) {
  if(value===undefined) return null;
  if(!equal(value,counterexampleSpellingCase)) fail('unsupported exact counterexample spelling selector');
  return {...counterexampleSpellingCase};
}
function counterexampleSpellingChanges(beforeBytes,afterBytes,option) {
  const before=parse(beforeBytes),after=parse(afterBytes),prior=structuredClone(before.data),current=structuredClone(after.data);
  if(prior.id!==option.id||current.id!==option.id||prior.kind!=='counterexample'||current.kind!=='counterexample'
      ||prior.status!=='published'||current.status!=='published'||!equal(prior.deps,counterexampleTargets)
      ||!equal(current.deps,counterexampleTargets)||sha(before.body)!==option.before_body_sha256||sha(after.body)!==option.after_body_sha256)
    fail('counterexample spelling published case/body binding');
  const verification={before:prior.verification??null,after:current.verification??null};delete prior.verification;delete current.verification;
  if(!equal(prior,current)) fail('counterexample spelling scientific metadata changed');
  rejectReferenceDefinitions(before.body);rejectReferenceDefinitions(after.body);
  const a=sections(before.body),b=sections(after.body),names=['Statement refuted','Facts & Assumptions','Counterexample','Source notes'];
  if(!equal(a.names,names)||!equal(b.names,names)||a.prefix!==b.prefix) fail('counterexample spelling section scope');
  const headers={before:canonicalHeadings(before.body),after:canonicalHeadings(after.body)};
  if(a.values.get('Source notes')!==b.values.get('Source notes')) fail('counterexample Source notes changed');
  rejectStyleIndirection([a.values.get('Counterexample'),b.values.get('Counterexample')],'counterexample');
  const deltas=[],steps=[];
  const add=(id,section,x,y,extra={})=>{if(x===y)fail('unused counterexample spelling region');deltas.push({id,kind:'counterexample-math-spelling',section,before:x,after:y,...extra});};
  add('Statement refuted:case-math-spelling','Statement refuted',a.values.get('Statement refuted'),b.values.get('Statement refuted'));
  const factsA=a.values.get('Facts & Assumptions'),factsB=b.values.get('Facts & Assumptions'),given=text=>[...text.matchAll(/^\*\*Given:\*\*[^\r\n]*$/gm)];
  const ga=given(factsA),gb=given(factsB);
  if(ga.length!==1||gb.length!==1||factsA.slice(0,ga[0].index)+gb[0][0]+factsA.slice(ga[0].index+ga[0][0].length)!==factsB) fail('counterexample changed non-Given Facts');
  add('Facts:Given:case-math-spelling','Facts & Assumptions',ga[0][0],gb[0][0],{fact_label:'Given'});
  const pa=proofParts(a.values.get('Counterexample')),pb=proofParts(b.values.get('Counterexample'));
  if(pa.intro!==pb.intro||!equal(pa.steps.map(x=>x.label),['1.1','2.1','3.1'])||!equal(pa.steps.map(x=>x.label),pb.steps.map(x=>x.label))) fail('counterexample proof sequence/technique changed');
  const support=text=>/\[[^\]\r\n]+\](?:[ \t]*∎)?[ \t\r\n]*$/.exec(text)?.[0];
  for(let i=0;i<pa.steps.length;i++){
    const x=pa.steps[i],y=pb.steps[i];if(!support(x.text)||support(x.text)!==support(y.text))fail('counterexample support/marker changed');
    add('Counterexample:step:'+x.label,'Counterexample',x.text,y.text,{label:x.label});steps.push({label:x.label,before:x.text,after:y.text,kind:'counterexample-math-spelling'});
  }
  // Five exact region substitutions must account for the complete body. There
  // is no token normalizer or inferred Unicode/TeX semantic comparison here.
  let expected=before.body;
  for(const d of deltas){const at=expected.indexOf(d.before);if(at<0||at!==expected.lastIndexOf(d.before))fail('ambiguous counterexample region');expected=expected.slice(0,at)+d.after+expected.slice(at+d.before.length);}
  if(expected!==after.body)fail('counterexample five-region reconstruction');
  const contexts={};
  for(const [side,body,section]of [['before',before.body,a],['after',after.body,b]]){
    const ast=stepAst(body,true),textRole=(start,end,wiki=false)=>{
      const r=ast.rows.find(r=>r.node.type==='text'&&r.start<=start&&r.end>=end);
      if(!r||r.parent?.type!=='paragraph'||ast.rows.find(p=>p.node===r.parent)?.parent?.type!=='root'
          ||ast.ranges.some(p=>start<p.end&&end>p.start&&!(wiki&&p.start===start&&p.end===end)))fail('counterexample full-body plaintext role');
      return {type:'text',start,end,paragraph:{start:r.parent.position.start.offset,end:r.parent.position.end.offset}};
    };
    if(ast.rows.some(r=>['html','image','imageReference','code','inlineCode'].includes(r.node.type))
        ||/\\(?:includegraphics|tikz)\b|\\begin\s*\{\s*(?:tikzcd|tikzpicture)\s*\}/.test(body))fail('counterexample graphics/code context');
    const refs=links(body);
    if(!equal(refs.map(r=>r.target),counterexampleTargets))fail('counterexample ordered references changed');
    const math=ast.rows.filter(r=>['math','inlineMath'].includes(r.node.type)).map(r=>({type:r.node.type,start:r.start,end:r.end,raw:body.slice(r.start,r.end)}));
    if(math.some(r=>r.type!=='inlineMath'))fail('counterexample expected inline spelling math');
    const regions=deltas.map(d=>{
      const raw=d[side],start=body.indexOf(raw),end=start+raw.length;
      if(start<0||start!==body.lastIndexOf(raw))fail('counterexample actual region ownership');
      const node=ast.rows.find(r=>r.node.type==='paragraph'&&r.start>=start&&r.end<=end);
      if(d.label){const named=textRole(start,start+d.label.length+1),terminal=support(raw),offset=end-terminal.length,cluster=/^\[[^\]]+\]/.exec(terminal)[0];
        if(named.paragraph.start!==start||named.paragraph.end<offset+cluster.length)fail('counterexample named-step/support paragraph');
        return {id:d.id,start,end,named_step:named,support:textRole(offset,offset+cluster.length)};}
      if(d.fact_label){if(!node||node.start!==start)fail('counterexample Given paragraph');return {id:d.id,start,end,paragraph:{start:node.start,end:node.end}};}
      const heading=headers[side].find(h=>h.name==='Statement refuted');if(heading?.start!==start||!node)fail('counterexample primary actual heading/paragraph');
      return {id:d.id,start,end,heading,paragraph:{start:node.start,end:node.end}};
    });
    contexts[side]={headers:headers[side],regions,math,references:refs.map(r=>({target:r.target,raw:r.raw,role:textRole(r.start,r.end,true)})),
      source_notes_sha256:sha(section.values.get('Source notes'))};
  }
  if(!equal(contexts.before.references.map(r=>({target:r.target,raw:r.raw})),contexts.after.references.map(r=>({target:r.target,raw:r.raw}))))fail('counterexample existing references changed');
  let cursor=0;const preservedMath=[];
  for(const old of contexts.before.math){const matches=contexts.after.math.map((r,i)=>({r,i})).filter(({r,i})=>i>=cursor&&r.raw===old.raw&&r.type===old.type);if(!matches.length)fail('counterexample existing math changed');const hit=matches[0];cursor=hit.i+1;preservedMath.push({before:old,after:hit.r});}
  return {version:2,kind:prior.kind,id:prior.id,source_hashes:{before:sha(beforeBytes),after:sha(afterBytes)},verification,title:null,technique:null,steps,remarks:null,
    preserved_sections:[{name:'Source notes',sha256:sha(a.values.get('Source notes'))}],
    review_classification:{interface_section:'Statement refuted',statements:'case-reviewed-math-spelling',facts:'case-reviewed-given-math-spelling',proof:'case-reviewed-math-spelling'},
    deltas,counterexample_math_spelling:option,counterexample_spelling_context:{version:1,...contexts,preserved_math:preservedMath,reference_targets:[...counterexampleTargets],graphics_free:true},
    proof_support_parser_runtime:parserDescriptor()};
}
// Closed inventory of observed source/body pairs. These hashes identify syntax
// cases; only a separate Root review can accept their mathematical meaning.
const exactNativeCases = [
  {
    "version": 1,
    "id": "lem-one-variable-completion-of-the-square-with-a-smooth-parameter",
    "before_body_sha256": "abcc4e87d88412eec8be600aee8fb5d3b813b09615f2130ebf91efab1ebf4e07",
    "after_body_sha256": "98901113a63b851033245690dd0b4c6bec2f593cb50ae154282cc1a1fd1cec5b"
  },
  {
    "version": 1,
    "id": "thm-c-c-is-dense-in-l-p-for-radon-measures",
    "before_body_sha256": "d1de036af2b0387d3512209a1ee8a50a6eba24f6b711b0717c0f9243775b619d",
    "after_body_sha256": "58de8cc07c882320d7669331b93f512b145f064a92762dd9e7e21966551b4a0c"
  },
  {
    "version": 1,
    "id": "cor-interval-uncountable",
    "before_body_sha256": "c5d6e1c0e745c67abe97ead92e3d53e4e38eea3c5d39867368898af3941cd289",
    "after_body_sha256": "8c64fa31e8b497a3a7624a7f953a900b77150c18415280328f5d012f472ad60c"
  },
  {
    "version": 1,
    "id": "lem-equivalence-classes-partition",
    "before_body_sha256": "707bb690471ad4f4a0bebaae2f95ba9d0edf5cece6caeabf40c508e767348c63",
    "after_body_sha256": "8618bc37dc0f4ee21b8f704b79e9863bbfabdb9181bdba9982f3b90063f92d6d"
  },
  {
    "version": 1,
    "id": "lem-section-zero-if-all-germs-zero",
    "before_body_sha256": "b3d701be05f5ce79ea77e78fb066dfd1760c444ee22250414b406a1fa35c6ec2",
    "after_body_sha256": "aa69ebee9aeb8a69022c46ea3897a043bfee47e48da18d04a36faba030824f47"
  },
  {
    "version": 1,
    "id": "def-cholesky-factorisation-with-positive-diagonal",
    "before_body_sha256": "383bb686ab020b45864844a552e9165073d86185a7751ae9dd8c88f761444309",
    "after_body_sha256": "589d9a64f9a44baaba6e898386aa1da6a5449a68773d498ec805750e935ccc69"
  },
  {
    "version": 1,
    "id": "thm-frechet-kolmogorov-compactness-criterion-in-lp",
    "before_body_sha256": "bd503e811b429db00375a6893cdf17f9db1c8b7b244c5d6f670913327f8a9828",
    "after_body_sha256": "12b80e11d85839a0584a867ba1f22edf1134f984d1dea9439508742ea5ff19e5"
  },
  {
    "version": 1,
    "id": "thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain",
    "before_body_sha256": "25018a72e1579b6652c8d919eb6873d06b187fbec7fb4b416faab5ade180dd12",
    "after_body_sha256": "1f57870a10da89f2158fbeaaae12efc3b2c6a8bc586d968889882a83dfe7fb55"
  },
  {
    "version": 1,
    "id": "lem-characteristic-function-of-a-multivariate-normal-law",
    "before_body_sha256": "b1f71c83a7f0faffaf65100e0de5c0f3f09915d01898df45999f2b34685cb814",
    "after_body_sha256": "a509d18069c051ac539a5e902b0a97fdbffde48cacd127bbb80769c2656a867e"
  },
  {
    "version": 1,
    "id": "prop-null-functions-form-a-linear-subspace-and-are-exactly-the-zero-seminorm-class",
    "before_body_sha256": "efcb0f4f2de5438cc4366e588581538e3eca3791770840295e914df52fb8c040",
    "after_body_sha256": "d6bf8a9bcfee396cc2524a9e5d43ec35001aff810b1308808f812a534a64a679"
  },
  {
    "version": 1,
    "id": "lem-normal-density-has-total-mass-one",
    "before_body_sha256": "691b8c652e3feeaadfe7862cdc46f758aa4bc1543b29e8a07590af3044591248",
    "after_body_sha256": "63303142498671bb9f6c8bcbf3897792632f2cf23416d5e18b518b223d740260"
  }
];
if (new Set(exactNativeCases.map(row => row.id)).size !== exactNativeCases.length)
  fail('duplicate exact native presentation inventory identity');
function exactNativeOption(value) {
  if (value === undefined) return null;
  const found = exactNativeCases.find(row => equal(row, value));
  if (!found) fail('unsupported exact native presentation selector');
  return structuredClone(found);
}
function exactNativeChanges(beforeBytes, afterBytes, option) {
  const before = parse(beforeBytes), after = parse(afterBytes);
  if (before.data.id !== option.id || after.data.id !== option.id
      || before.data.status !== 'published' || after.data.status !== 'published'
      || sha(before.body) !== option.before_body_sha256 || sha(after.body) !== option.after_body_sha256)
    fail('exact native published case/body binding');
  rejectReferenceDefinitions(before.body); rejectReferenceDefinitions(after.body);
  const headers = { before: canonicalHeadings(before.body), after: canonicalHeadings(after.body) };
  const a = sections(before.body), b = sections(after.body), deltas = [];
  let normalized = after.body;
  const change = (section, old, next, kind, extra = {}) => {
    const x = a.values.get(section), y = b.values.get(section);
    if (!old || !next || old === next || !x?.includes(old) || !y?.includes(next)
        || x.indexOf(old) !== x.lastIndexOf(old) || y.indexOf(next) !== y.lastIndexOf(next))
      fail('exact native unique section region');
    // Earlier exact substitutions can change this section's source length.
    const currentSection = sections(normalized).values.get(section);
    if (!currentSection || currentSection.indexOf(next) < 0
        || currentSection.indexOf(next) !== currentSection.lastIndexOf(next)) fail('exact native reconstruction region');
    const at = normalized.indexOf(currentSection) + currentSection.indexOf(next);
    if (at < 0 || normalized.slice(at, at + next.length) !== next) fail('exact native reconstruction region');
    normalized = normalized.slice(0, at) + old + normalized.slice(at + next.length);
    deltas.push({ id: `${section}:exact-native:${deltas.length}`, kind, section, before: old, after: next, ...extra });
  };
  const id = option.id;
  if (['cor-interval-uncountable', 'lem-equivalence-classes-partition'].includes(id)) {
    const x = a.values.get('Remarks'), y = b.values.get('Remarks');
    if (!x || !y?.startsWith(x) || a.names.at(-1) !== 'Remarks' || !equal(a.names,b.names)) fail('exact native existing Remarks prefix');
    change('Remarks', x, y, 'existing-remarks-derived-exposition');
  } else if (id === 'lem-section-zero-if-all-germs-zero') {
    const x=a.values.get('Statement'), y=b.values.get('Statement'), displays=[...x.matchAll(/(?<=\n)\$\$([^\r\n$]+)\$\$(?=\n)/g)];
    if(displays.length!==1||x.replace(displays[0][0],()=> '\n$$\n'+displays[0][1]+'\n$$')!==y)fail('exact native unchanged display payload');
    change('Statement', x, y, 'statement-display-layout');
  } else if (id === 'def-cholesky-factorisation-with-positive-diagonal') {
    change('Definition', '$$x^*Ax>0$$for', '$$x^*Ax>0$$ for', 'definition-prose-spacing');
    // The first replacement shifts this region; use the current normalized
    // section rather than searching a stale whole-section carrier.
    const old = 'factorisation$$A=LL^*,$$', next = 'factorisation $$A=LL^*,$$';
    const at = normalized.indexOf(next);
    if (at < 0 || at !== normalized.lastIndexOf(next)) fail('exact native second prose space');
    normalized = normalized.slice(0, at) + old + normalized.slice(at + next.length);
    deltas.push({id:'Definition:exact-native:1',kind:'definition-prose-spacing',section:'Definition',before:old,after:next});
  } else if (id === 'thm-frechet-kolmogorov-compactness-criterion-in-lp') {
    change('Facts & Assumptions', String.raw`[F2] *H\"older's inequality.*`, "[F2] *Hölder's inequality.*", 'fact-prose-name-spelling', {fact_label:'F2'});
  } else if (id === 'thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain') {
    change('Facts & Assumptions', String.raw`[F5] *The Fr\'echet--Kolmogorov criterion.*`, '[F5] *The Fréchet–Kolmogorov criterion.*', 'fact-prose-name-spelling', {fact_label:'F5'});
  } else if (id === 'lem-characteristic-function-of-a-multivariate-normal-law') {
    change('Facts & Assumptions', 'exp(ims-sigma^2s^2/2)', String.raw`$\exp(ims-\sigma^2s^2/2)$`, 'fact-inline-math-transcription', {fact_label:'F2'});
  } else if (id === 'prop-null-functions-form-a-linear-subspace-and-are-exactly-the-zero-seminorm-class') {
    const x = proofParts(a.values.get('Proof')).steps.find(s=>s.label==='1.2')?.text;
    const y = proofParts(b.values.get('Proof')).steps.find(s=>s.label==='1.2')?.text;
    if (!x || y !== trim(x) + ' [L1, L5]' + tail(x)) fail('exact native redundant support suffix');
    change('Proof', x, y, 'proof-redundant-support-suffix', {label:'1.2'});
  } else if (id === 'lem-normal-density-has-total-mass-one') {
    const x = proofParts(a.values.get('Proof')).steps.find(s=>s.label==='2.1')?.text;
    const y = proofParts(b.values.get('Proof')).steps.find(s=>s.label==='2.1')?.text;
    if (!x || x.replace('f(t)=exp(-t^2)', String.raw`$f(t)=\exp(-t^2)$`).replace('1/sqrt2',String.raw`$1/\sqrt2$`) !== y)
      fail('exact native normal density transcription');
    change('Proof', x, y, 'proof-inline-math-transcription', {label:'2.1'});
  } else if (id === 'lem-one-variable-completion-of-the-square-with-a-smooth-parameter') {
    if (before.data.title !== after.data.title) fail('exact completion title changed');
    const x=proofParts(a.values.get('Proof')).steps.find(s=>s.label==='1.2')?.text;
    const y=proofParts(b.values.get('Proof')).steps.find(s=>s.label==='1.2')?.text;
    if (!x || !x.startsWith('1.2 Assume $m>0$. ')
        || x.replace('[L1, given, assume-case[ positive-parameter], construct]', '[L1, given, construct]') !== y)
      fail('exact completion malformed support removal');
    change('Proof', x, y, 'proof-malformed-case-support-removal', {label:'1.2'});
  } else if (id === 'thm-c-c-is-dense-in-l-p-for-radon-measures') {
    if (before.data.title !== 'C_c(X) is dense in L^p(mu) for a Radon measure'
        || after.data.title !== String.raw`$C_c(X)$ is dense in $L^p(\mu)$ for a Radon measure`)
      fail('exact Radon title transcription');
    for (const label of ['1.1','2.1']) {
      const x=proofParts(a.values.get('Proof')).steps.find(s=>s.label===label)?.text;
      const y=proofParts(b.values.get('Proof')).steps.find(s=>s.label===label)?.text;
      const expected=label==='1.1' ? x?.replace('. [L1, choose] Given', '. Given').replace(/\[L1\](\s*)$/, '[L1, choose]$1')
        : x?.replace('. [step 1.1, L2] Then', '. Then');
      if (!x || expected !== y) fail('exact Radon redundant support relocation');
      change('Proof', x, y, 'proof-redundant-support-relocation', {label});
    }
  } else fail('unused exact native case');
  const context = {version:1, headers, regions:[], graphics_free:false};
  for (const side of ['before','after']) {
    const body = side==='before'?before.body:after.body, ast = stepAst(body,true);
    for (const delta of deltas) {
      const raw=delta[side], start=body.indexOf(raw), end=start+raw.length;
      if(start<0||start!==body.lastIndexOf(raw))fail('exact native full-body region ownership');
      const rows=ast.rows.filter(r=>r.start<end&&r.end>start);
      if(rows.some(r=>['html','image','imageReference','definition','footnoteDefinition','inlineCode'].includes(r.node.type)))fail('exact native hidden region');
      context.regions.push({side,id:delta.id,start,end,nodes:rows.map(r=>({type:r.node.type,start:r.start,end:r.end,parent:r.parent?.type??null,...(r.node.type==='code'?{lang:r.node.lang}:{} )}))});
      if(delta.fact_label){const p=ast.rows.find(r=>r.node.type==='paragraph'&&r.start<=start&&r.end>=end&&r.parent?.type==='root');
        if(!p||!body.slice(p.start,p.end).startsWith(`[${delta.fact_label}] `))fail('exact native actual Fact paragraph');}
      if(delta.label){const p=ast.rows.find(r=>r.node.type==='paragraph'&&r.start===start&&r.end===start+trim(raw).length&&r.parent?.type==='root');
        if(!p||!raw.startsWith(delta.label+' '))fail('exact native actual named proof paragraph');}
      if(delta.kind==='existing-remarks-derived-exposition'&&side==='after'){
        const prefix=a.values.get('Remarks'), appendedStart=start+prefix.length;
        const codes=rows.filter(r=>r.node.type==='code'&&r.start>=appendedStart&&r.parent?.type==='root'&&r.node.lang==='tikz');
        if(codes.length!==1||rows.some(r=>r.node.type==='code'&&r.start>=appendedStart&&!codes.includes(r)))fail('exact native appended TikZ role');
      }
    }
  }
  if (['lem-one-variable-completion-of-the-square-with-a-smooth-parameter', 'thm-c-c-is-dense-in-l-p-for-radon-measures'].includes(id)) {
    const math = body => stepAst(body,true).rows.filter(r=>['math','inlineMath'].includes(r.node.type))
      .map(r=>({type:r.node.type,raw:body.slice(r.start,r.end)}));
    if (!equal(math(before.body),math(after.body))) fail('exact support repair changed mathematical AST literals');
    context.preserved_math = math(before.body);
  }
  context.graphics_free=[before.body,after.body].every(body=>!sections(body).values.has('Remarks')
    && !stepAst(body,true).rows.some(r=>['html','image','imageReference','code'].includes(r.node.type))
    && !/\\(?:includegraphics|tikz)\b|\\begin\s*\{\s*(?:tikzcd|tikzpicture)\s*\}/.test(body));
  // Existing extraction still guards every unrelated section, metadata field,
  // proof support and reference target. Only named exact regions were reverted.
  const text=afterBytes.toString('utf8'), offset=text.length-after.body.length;
  const base=originalPresentationChanges(beforeBytes,Buffer.from(text.slice(0,offset)+normalized));
  base.source_hashes={before:sha(beforeBytes),after:sha(afterBytes)};
  base.deltas.push(...deltas); base.exact_native_presentation=option; base.exact_native_context=context;
  if(deltas.some(d=>d.section==='Statement'||d.section==='Definition'))base.review_classification.statements='exact-case-presentation';
  if(deltas.some(d=>d.fact_label))base.review_classification.facts='exact-case-presentation';
  if(deltas.some(d=>d.label))base.review_classification.proof='exact-case-presentation';
  for(const d of deltas.filter(d=>d.label))base.steps.push({label:d.label,before:d.before,after:d.after,kind:d.kind});
  const remarks=deltas.find(d=>d.section==='Remarks');if(remarks)base.remarks={before:remarks.before,after:remarks.after};
  base.proof_support_parser_runtime=parserDescriptor();return base;
}

export function originalPresentationChanges(beforeBytes, afterBytes, proofSupportConsolidation, proofReferenceRelocation, definitionDisplay, terminalRemarksHeading, proofSupportRelocationLayout, proofParagraphJoinLayout, counterexampleMathSpelling, exactNativePresentation) {
  const exactNative=exactNativeOption(exactNativePresentation);
  if(exactNative){if([proofSupportConsolidation,proofReferenceRelocation,definitionDisplay,terminalRemarksHeading,proofSupportRelocationLayout,proofParagraphJoinLayout,counterexampleMathSpelling].some(x=>x!==undefined))fail('exact native selector cannot combine');return exactNativeChanges(beforeBytes,afterBytes,exactNative);}
  const spelling=counterexampleSpellingOption(counterexampleMathSpelling);
  if(spelling){if([proofSupportConsolidation,proofReferenceRelocation,definitionDisplay,terminalRemarksHeading,proofSupportRelocationLayout,proofParagraphJoinLayout].some(x=>x!==undefined))fail('counterexample selector cannot combine');return counterexampleSpellingChanges(beforeBytes,afterBytes,spelling);}
  const consolidation = consolidationOption(proofSupportConsolidation), displayLayout = definitionDisplayOption(definitionDisplay), terminalHeading = terminalRemarksOption(terminalRemarksHeading);
  const supportLayout=supportLayoutOption(proofSupportRelocationLayout), paragraphLayout=paragraphLayoutOption(proofParagraphJoinLayout);
  if ((supportLayout||paragraphLayout) && (supportLayout&&paragraphLayout || consolidation||displayLayout||terminalHeading||proofReferenceRelocation!==undefined)) fail('strict layout selectors cannot combine with other modes');
  const relocation = relocationOption(proofReferenceRelocation), strictProof = Boolean(consolidation || relocation || supportLayout || paragraphLayout);
  if (relocation?.steps.some(s => consolidation?.steps.includes(s.label))) fail('overlapping strict proof requests');
  const before = parse(beforeBytes), after = parse(afterBytes), prior = structuredClone(before.data), current = structuredClone(after.data);
  if ((supportLayout||paragraphLayout) && !resultKinds.has(prior.kind)) fail('strict layout requires a proved result');
  if (terminalHeading && !resultKinds.has(prior.kind)) fail('terminal Remarks heading requires a proved result');
  if (displayLayout && prior.kind !== 'definition') fail('definition display layout requires definition kind');
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
  const comparedBefore = terminalHeading ? terminalRemarksBody(before.body, after.body, terminalHeading, deltas) : before.body;
  const a = sections(comparedBefore), b = sections(after.body), primary = prior.kind === 'definition' ? 'Definition' : 'Statement';
  if (strictProof || displayLayout || terminalHeading) { rejectReferenceDefinitions(before.body); rejectReferenceDefinitions(after.body); }
  if (!a.values.has(primary) || a.prefix !== b.prefix) fail('primary section/prefix change');
  const appended = !a.values.has('Remarks') && b.names.at(-1) === 'Remarks' && equal(a.names, b.names.slice(0, -1));
  if (!equal(a.names, b.names) && !appended) fail('new/deleted/reordered scientific section');
  let technique = null, steps = [], remarks = null; const preserved_sections = [];
  for (const name of a.names) {
    const x = a.values.get(name), y = b.values.get(name);
    if (name === primary) {
      if (displayLayout) definitionDisplayLayout(x, y, displayLayout, deltas);
      else interfaceChange(x, y, name, deltas);
    }
    else if (name === 'Facts & Assumptions') factsChange(x, y, deltas);
    else if (name === 'Proof' && resultKinds.has(prior.kind)) ({ technique, steps } = proofChange(x, y, deltas, consolidation, relocation, prior.deps, supportLayout, paragraphLayout));
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
    statements: displayLayout ? 'display-layout-only' : statementLabels ? statementSpacing ? 'reference-labels-and-separator-only' : 'reference-labels-only' : statementSpacing ? 'separator-only' : 'identical',
    facts: factLabels ? factQuotes ? 'reference-labels-and-quotation-only' : 'reference-labels-only' : factQuotes ? 'quotation-only' : 'identical',
    proof: supportLayout ? 'support-relocation-layout-only' : paragraphLayout ? 'paragraph-join-layout-and-exact-technique-label' : terminalHeading ? 'terminal-heading-layout-only' : steps.length || technique ? 'equivalent-presentation' : 'unchanged',
  };
  if (consolidation && !equal([...consolidation.steps].sort(), deltas.filter(d => d.kind === 'proof-support-consolidation').map(d => d.label).sort())) fail('unused proof support consolidation request');
  if (relocation && !equal(relocation.steps, deltas.filter(d => d.kind === 'proof-reference-relocation').map(d => ({ label: d.label, target: d.target })))) fail('unused proof reference relocation request');
  const layoutContext=(supportLayout||paragraphLayout)?strictLayoutContext(before.body,after.body,supportLayout??paragraphLayout,Boolean(paragraphLayout),deltas,prior.deps):null;
  return { version: 2, kind: prior.kind, id: prior.id, source_hashes: { before: sha(beforeBytes), after: sha(afterBytes) }, verification, title, technique, steps, remarks, preserved_sections, review_classification, deltas,
    ...(consolidation ? { proof_support_consolidation: consolidation } : {}), ...(relocation ? { proof_reference_relocation: relocation } : {}),
    ...(displayLayout ? { definition_display_layout: displayLayout } : {}),
    ...(terminalHeading ? { terminal_remarks_heading: terminalHeading } : {}),
    ...(supportLayout?{proof_support_relocation_layout:supportLayout}:{}), ...(paragraphLayout?{proof_paragraph_join_layout:paragraphLayout}:{}),
    ...(layoutContext?{proof_layout_context:layoutContext}:{}),
    ...(strictProof || displayLayout || terminalHeading ? { proof_support_parser_runtime: parserDescriptor() } : {}) };
}
/** Main integration supplies authenticated local binders. No free-text claim
 * substitutes for the exact source, per-delta hash, pinned target or evidence. */
export function validateOriginalPresentationReviews(entry, changes, { receipt, scope, bind, localEvidence } = {}) {
  const exactNative=exactNativeOption(entry.exact_native_presentation);
  if(!equal(exactNative,changes.exact_native_presentation??null)||Boolean(exactNative)!==Boolean(changes.exact_native_context))fail('unbound exact native case/context');
  const spelling=counterexampleSpellingOption(entry.counterexample_math_spelling);
  if(!equal(spelling,changes.counterexample_math_spelling??null)||Boolean(spelling)!==Boolean(changes.counterexample_spelling_context))fail('unbound counterexample spelling case');
  const consolidation = consolidationOption(entry.proof_support_consolidation), terminalHeading = terminalRemarksOption(entry.terminal_remarks_heading);
  const supportLayout=supportLayoutOption(entry.proof_support_relocation_layout), paragraphLayout=paragraphLayoutOption(entry.proof_paragraph_join_layout);
  if(!equal(supportLayout,changes.proof_support_relocation_layout??null)||!equal(paragraphLayout,changes.proof_paragraph_join_layout??null)) fail('unbound strict layout selector');
  if(Boolean(supportLayout||paragraphLayout)!==Boolean(changes.proof_layout_context)) fail('unbound strict layout context');
  if(supportLayout||paragraphLayout) {
    const requested=supportLayout??paragraphLayout,kind=supportLayout?'proof-support-relocation-layout':'proof-paragraph-join-layout';
    if(!equal(requested.steps,changes.deltas.filter(d=>d.kind===kind).map(d=>d.label))
      ||changes.proof_layout_context?.version!==1||changes.proof_layout_context?.graphics_free!==true) fail('unbound strict layout steps/context');
  }
  const relocation = relocationOption(entry.proof_reference_relocation), displayLayout = definitionDisplayOption(entry.definition_display_layout);
  if (!equal(consolidation, changes.proof_support_consolidation ?? null)
      || !equal([...(consolidation?.steps ?? [])].sort(), changes.deltas.filter(d => d.kind === 'proof-support-consolidation').map(d => d.label).sort())) fail('unbound proof support consolidation option');
  if (!equal(relocation, changes.proof_reference_relocation ?? null)
      || !equal(relocation?.steps ?? [], changes.deltas.filter(d => d.kind === 'proof-reference-relocation').map(d => ({ label: d.label, target: d.target })))) fail('unbound proof reference relocation option');
  if (!equal(displayLayout, changes.definition_display_layout ?? null)
      || (displayLayout ? changes.kind !== 'definition' || changes.deltas.filter(d => d.kind === 'definition-display-layout').length !== 1
        || changes.deltas.find(d => d.kind === 'definition-display-layout')?.display !== displayLayout.display
        : changes.deltas.some(d => d.kind === 'definition-display-layout'))) fail('unbound definition display layout option');
  if (!equal(terminalHeading, changes.terminal_remarks_heading ?? null)
      || (terminalHeading ? changes.deltas.filter(d => d.kind === 'terminal-remarks-heading').length !== 1
        || changes.deltas.find(d => d.kind === 'terminal-remarks-heading')?.label !== terminalHeading.step
        : changes.deltas.some(d => d.kind === 'terminal-remarks-heading'))) fail('unbound terminal Remarks heading option');
  if (entry.presentation_version !== 2 || changes.version !== 2 || !equal(entry.changes, changes)
      || entry.pinned_sha256 !== changes.source_hashes.before || entry.original_sha256 !== changes.source_hashes.after
      || typeof bind !== 'function' || typeof localEvidence !== 'function') fail('unbound V2 sources/deltas');
  if (consolidation || relocation || displayLayout || terminalHeading || supportLayout || paragraphLayout || spelling || exactNative) {
    const runtime = parserDescriptor();
    if (!equal(changes.proof_support_parser_runtime, runtime)) fail('missing/stale parser runtime binding');
    for (const [path, hash] of Object.entries(runtime.inputs)) bind(path, hash);
  } else if (changes.proof_support_parser_runtime !== undefined) fail('unrequested parser runtime binding');
  if(spelling){
    if(changes.kind!=='counterexample'||changes.id!==spelling.id||changes.deltas.length!==5||changes.deltas.some(d=>d.kind!=='counterexample-math-spelling')
        ||!equal(changes.counterexample_spelling_context.reference_targets,counterexampleTargets)||changes.counterexample_spelling_context.graphics_free!==true)fail('unbound counterexample spelling changes');
    for(const id of counterexampleTargets){const pins=receipt?.files?.filter(p=>p.path===`items/${id}.md`);
      if(pins?.length!==1||!scope?.importedItems?.has(id)||!scope?.paths?.has(pins[0].path))fail('unbound counterexample published reference');
      const data=parse(bind(pins[0].path,pins[0].sha256)).data;if(data.id!==id||data.status!=='published')fail('invalid counterexample published reference');}
  }
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
    if(exactNative && (review.reviewer!=='/root'||review.decision!=='accepted'||review.review_kind!==delta.kind))fail('missing typed Root exact native review');
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
