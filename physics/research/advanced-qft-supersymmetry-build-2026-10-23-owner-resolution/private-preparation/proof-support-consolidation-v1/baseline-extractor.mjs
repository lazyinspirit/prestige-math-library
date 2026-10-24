// Opt-in V2 extraction describes exact deltas; it never decides mathematical
// equivalence, authenticates a repair, changes a pin, or accepts a consumer.
import { createHash } from 'node:crypto';
import { isDeepStrictEqual as equal } from 'node:util';
import { yaml } from '../../../../../tools/physics-support/pathway-lib.mjs';
import { factParagraphs } from '../../../../../tools/physics-support/facts-block.mjs';
const sha = bytes => createHash('sha256').update(bytes).digest('hex');
const fail = reason => { throw Error(`Invalid original presentation successor: ${reason}`); };
const substantive = text => typeof text === 'string' && text.trim().length >= 80;
const tail = text => /[ \t\r\n]*$/.exec(text)[0];
const trim = text => text.slice(0, text.length - tail(text).length);
const resultKinds = new Set(['lemma', 'theorem', 'proposition', 'corollary']);
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
function proofChange(before, after, deltas) {
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
    if (oldSupport === undefined || oldSupport !== support(y.text)) fail('changed proof support labels');
    const delta = { id: `Proof:step:${x.label}`, kind: qed ? 'proof-terminal-qed' : trim(x.text) === trim(y.text) ? 'separator-spacing' : 'proof-step-presentation', section: 'Proof', label: x.label, before: x.text, after: y.text, ...(qed ? { terminal_qed: qed } : {}) };
    steps.push({ label: x.label, before: x.text, after: y.text, kind: delta.kind }); deltas.push(delta);
  }
  return { technique, steps };
}
export function originalPresentationChanges(beforeBytes, afterBytes) {
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
  if (!a.values.has(primary) || a.prefix !== b.prefix) fail('primary section/prefix change');
  const appended = !a.values.has('Remarks') && b.names.at(-1) === 'Remarks' && equal(a.names, b.names.slice(0, -1));
  if (!equal(a.names, b.names) && !appended) fail('new/deleted/reordered scientific section');
  let technique = null, steps = [], remarks = null; const preserved_sections = [];
  for (const name of a.names) {
    const x = a.values.get(name), y = b.values.get(name);
    if (name === primary) interfaceChange(x, y, name, deltas);
    else if (name === 'Facts & Assumptions') factsChange(x, y, deltas);
    else if (name === 'Proof' && resultKinds.has(prior.kind)) ({ technique, steps } = proofChange(x, y, deltas));
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
  return { version: 2, kind: prior.kind, id: prior.id, source_hashes: { before: sha(beforeBytes), after: sha(afterBytes) }, verification, title, technique, steps, remarks, preserved_sections, review_classification, deltas };
}
/** Main integration supplies authenticated local binders. No free-text claim
 * substitutes for the exact source, per-delta hash, pinned target or evidence. */
export function validateOriginalPresentationReviews(entry, changes, { receipt, scope, bind, localEvidence } = {}) {
  if (entry.presentation_version !== 2 || changes.version !== 2 || !equal(entry.changes, changes)
      || entry.pinned_sha256 !== changes.source_hashes.before || entry.original_sha256 !== changes.source_hashes.after
      || typeof bind !== 'function' || typeof localEvidence !== 'function') fail('unbound V2 sources/deltas');
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
