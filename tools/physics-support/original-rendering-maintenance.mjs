// Root-reviewed, exact original rendering successors. Never changes import pins,
// grants proof acceptance, or widens a planning selector to an authored frontier.
import { existsSync, readFileSync, readdirSync, realpathSync, lstatSync } from 'node:fs';
import { join, resolve, relative, isAbsolute } from 'node:path';
import { createHash } from 'node:crypto';
import { isDeepStrictEqual as equal } from 'node:util';
import { yaml } from './pathway-lib.mjs';
import { recordedPublishedRepair } from '../published-repair-policy.mjs';

const sha = bytes => createHash('sha256').update(bytes).digest('hex');
const fail = reason => { throw Error(`Invalid original rendering successor: ${reason}`); };
const safeRun = run => /^[a-zA-Z0-9_-]+$/.test(run ?? '');
const substantive = text => typeof text === 'string' && text.trim().length >= 80;
function parse(bytes) {
  const m = bytes.toString('utf8').match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)([\s\S]*)$/);
  if (!m) fail('missing frontmatter');
  const doc = yaml().parseDocument(m[1], { uniqueKeys: true });
  if (doc.errors.length) fail('malformed YAML');
  const data = doc.toJS();
  if (!data || typeof data !== 'object' || Array.isArray(data)) fail('invalid metadata');
  return { data, body: m[2] };
}
function sections(body) {
  const heads = [...body.matchAll(/^## ([^\r\n]+)\r?$/gm)];
  if (!equal(heads.map(h => h[1]), ['Statement', 'Facts & Assumptions', 'Proof'])
      && !equal(heads.map(h => h[1]), ['Statement', 'Facts & Assumptions', 'Proof', 'Remarks'])) fail('unsupported section scope');
  return { prefix: body.slice(0, heads[0].index), ...Object.fromEntries(heads.map((h, i) => [h[1], body.slice(h.index, heads[i + 1]?.index ?? body.length)])) };
}
function proofParts(text) {
  const heads = [...text.matchAll(/^(\d+\.\d+) /gm)];
  if (!heads.length || new Set(heads.map(h => h[1])).size !== heads.length) fail('invalid numbered proof');
  return { intro: text.slice(0, heads[0].index), steps: heads.map((h, i) => ({ label: h[1], text: text.slice(h.index, heads[i + 1]?.index ?? text.length) })) };
}
// This extracts exact deltas, not approvals. The only title conversion admitted
// is inline math delimiters and the explicit real-space glyph command.
export function originalRenderingChanges(beforeBytes, afterBytes) {
  const before = parse(beforeBytes), after = parse(afterBytes);
  const prior = structuredClone(before.data), current = structuredClone(after.data);
  const verification = { before: prior.verification ?? null, after: current.verification ?? null };
  delete prior.verification; delete current.verification;
  let title = null;
  if (prior.title !== current.title) {
    const plain = text => text.replace(/\$([^$\n]+)\$/g, (_, math) => math.replace(/\\mathbb R/g, 'R'));
    if (typeof prior.title !== 'string' || typeof current.title !== 'string' || plain(prior.title) !== plain(current.title)) fail('scientific title change');
    title = { before: prior.title, after: current.title };
    delete prior.title; delete current.title;
  }
  if (!equal(prior, current) || !['lemma','theorem','proposition','corollary'].includes(prior.kind)) fail('scientific metadata/interface change');
  const a = sections(before.body), b = sections(after.body);
  if (a.prefix !== b.prefix || a.Statement !== b.Statement || a['Facts & Assumptions'] !== b['Facts & Assumptions']) fail('statement/facts change');
  const ap = proofParts(a.Proof), bp = proofParts(b.Proof);
  if (!equal(ap.steps.map(s => s.label), bp.steps.map(s => s.label))) fail('proof step sequence change');
  let technique = null;
  if (ap.intro !== bp.intro) {
    const old = [...ap.intro.matchAll(/^\*\*Proof technique:\*\*[^\r\n]*$/gm)], next = [...bp.intro.matchAll(/^\*\*Proof technique:\*\*[^\r\n]*$/gm)];
    if (old.length !== 1 || next.length !== 1 || ap.intro.replace(old[0][0], next[0][0]) !== bp.intro) fail('unsupported proof introduction change');
    technique = { before: old[0][0], after: next[0][0] };
  }
  const steps = [];
  for (let i = 0; i < ap.steps.length; i++) if (ap.steps[i].text !== bp.steps[i].text) {
    const old = ap.steps[i], next = bp.steps[i];
    const support = text => /\[([^\]\n]+)\](?:[ \t]*∎)?[ \t\r\n]*$/.exec(text)?.[1];
    if (support(old.text) !== support(next.text)) fail('changed proof support labels');
    steps.push({ label: old.label, before: old.text, after: next.text,
      kind: old.text.replace(/\n+$/, '') === next.text.replace(/\n+$/, '') ? 'separator-spacing' : 'equivalent-presentation' });
  }
  if (a.Remarks !== undefined && a.Remarks !== b.Remarks) fail('existing remarks change');
  const remarks = a.Remarks === b.Remarks ? null : { before: a.Remarks ?? null, after: b.Remarks };
  if (remarks && (a.Remarks !== undefined || !/^```(?:tikz|tikzcd)\r?\n[\s\S]+?^```[ \t]*\r?$/m.test(b.Remarks ?? ''))) fail('unsupported added remarks');
  return { verification, title, technique, steps, remarks };
}
export function originalRenderingMaintenancePath(root, run, selector = null) {
  if (!safeRun(run)) fail('invalid authority run');
  if (selector === null) return join(root, 'research', `${run}-original-rendering-maintenance.json`);
  const path = relative(root, resolve(root, selector)).split('\\').join('/');
  if (!new RegExp(`^research/${run}-frontier-append-[1-9]\\d*/new-pages\\.json$`).test(path)) fail('selector is not this run append selection');
  return resolve(root, path.replace(/new-pages\.json$/, 'original-rendering-maintenance.json'));
}
function affected(scope, id) {
  const reached = new Set(), queue = [id];
  for (let n = 0; n < queue.length; n++) if (!reached.has(queue[n])) {
    reached.add(queue[n]); queue.push(...scope.consumers.get(queue[n]) ?? []);
  }
  return [...reached].filter(id => scope.owned.has(id)).sort();
}
/** A planning review certifies declared uses, including explicitly absent
 * carriers. It never asserts that those claims/proofs were authored/read. */
export function originalRenderingMaintenance(root, run, { receipt, scope, planning = false, selector = null, proposedPages = null } = {}) {
  if (!run || !scope || planning && (!selector || !proposedPages)) return new Map();
  const path = originalRenderingMaintenancePath(root, run, planning ? selector : null);
  if (!existsSync(path)) return new Map();
  if (!lstatSync(path).isFile() || realpathSync(path) !== resolve(path)) fail('nonlocal authority');
  const review = JSON.parse(readFileSync(path, 'utf8'));
  if (review.version !== 1 || review.kind !== 'root-reviewed-original-rendering-successors' || review.run !== run
      || review.reviewer !== '/root' || review.native_review !== false || !substantive(review.reason)
      || !review.inputs || typeof review.inputs !== 'object' || Array.isArray(review.inputs)
      || !Array.isArray(review.entries) || !review.entries.length) fail('Root review identity');
  const required = new Set();
  const bind = (path, expected) => {
    if (typeof path !== 'string' || !/^[a-f0-9]{64}$/.test(expected ?? '') || review.inputs[path] !== expected) fail(`unbound input ${path}`);
    const full = resolve(root, path);
    if (!lstatSync(full).isFile() || realpathSync(full) !== full) fail(`nonregular input ${path}`);
    const bytes = readFileSync(full);
    if (sha(bytes) !== expected) fail(`changed input ${path}`);
    required.add(path); return bytes;
  };
  const localEvidence = ref => {
    if (typeof ref?.path !== 'string' || !ref.path.startsWith(`research/${run}-`) || ref.path.split('/').includes('..')
        || resolve(root, ref.path) === path) fail('local evidence scope');
    return bind(ref.path, ref.sha256);
  };
  const sourceEvidence = (relativePath, expected) => {
    if (typeof relativePath !== 'string' || !relativePath.startsWith('research/') || relativePath.includes('\\') || relativePath.split('/').includes('..')) fail('original evidence scope');
    return bind(resolve(receipt.source_root, relativePath), expected);
  };
  bind('research/math-imports.json', review.import_receipt_sha256);
  let pages;
  if (planning) {
    const selectedPath = relative(root, resolve(root, selector)).split('\\').join('/');
    if (review.scope?.kind !== 'proposed-pages' || review.scope.selector?.path !== selectedPath
        || review.scope.plan?.path !== 'research/plan-spec.json') fail('planning authority scope');
    const ids = JSON.parse(bind(selectedPath, review.scope.selector.sha256));
    const spec = JSON.parse(bind('research/plan-spec.json', review.scope.plan.sha256));
    if (!Array.isArray(ids) || !ids.length || new Set(ids).size !== ids.length
        || !equal(ids, proposedPages.map(p => p.id)) || !equal(ids, review.scope.pages)) fail('planning page selection');
    pages = ids.map(id => { const rows = spec.pages.filter(p => p.id === id); if (rows.length !== 1) fail('ambiguous planned page'); return rows[0]; });
    if (!equal(pages, proposedPages) || sha(JSON.stringify(pages)) !== review.scope.declarations_sha256
        || pages.some(p => !p.items?.length || p.items.some(i => !i?.id || !i.kind || !i.statement?.trim() || !Array.isArray(i.deps)))) fail('empty/stale planned declarations');
  } else {
    if (review.scope?.kind !== 'authored-frontier') fail('authored authority scope');
    const names = readdirSync(join(root, 'research')).filter(n => n.startsWith(`${run}-batch-`) && /^\d+\.pages\.json$/.test(n.slice(`${run}-batch-`.length))).sort();
    const frontier = names.map(n => `research/${n}`);
    if (!frontier.length || !equal(Object.keys(review.scope.frontier ?? {}).sort(), frontier)) fail('authored frontier selection');
    pages = frontier.flatMap(path => JSON.parse(bind(path, review.scope.frontier[path])));
  }
  const declarations = new Map();
  for (const page of pages) for (const item of page.items) {
    if (!item?.id || declarations.has(item.id)) fail('invalid consumer declarations');
    declarations.set(item.id, item);
  }
  const accepted = new Map();
  for (const entry of review.entries) {
    const pin = receipt.files.find(p => p.path === entry.path);
    if (!pin || !/^items\/[a-z]+-[a-z0-9]+(?:-[a-z0-9]+)*\.md$/.test(entry.path) || accepted.has(entry.path)
        || !scope.paths.has(entry.path) || entry.pinned_sha256 !== pin.sha256) fail('entry scope/pin');
    const original = resolve(receipt.source_root, entry.path);
    if (entry.original_path !== original || entry.original_sha256 === pin.sha256) fail('original identity');
    const beforeBytes = bind(entry.path, pin.sha256), afterBytes = bind(original, entry.original_sha256);
    const before = parse(beforeBytes), after = parse(afterBytes), id = before.data.id;
    if (entry.path !== `items/${id}.md` || !scope.importedItems.has(id) || after.data.status !== 'published') fail('supplier identity/publication');
    const locator = after.data.verification?.repair;
    if (typeof locator !== 'string' || entry.repair_receipt?.path !== resolve(receipt.source_root, locator)) fail('repair locator');
    const native = JSON.parse(sourceEvidence(locator, entry.repair_receipt.sha256));
    const authentication = recordedPublishedRepair(receipt.source_root, id, afterBytes.toString('utf8'), locator);
    if (!authentication.ok || native.before_raw_sha256 !== pin.sha256
        || !sourceEvidence(native.before_file, pin.sha256).equals(beforeBytes)) fail(`main repair authentication: ${authentication.reason ?? 'wrong before bytes'}`);
    const adjudication = JSON.parse(sourceEvidence(native.adjudication_file, native.adjudication_sha256));
    const check = native.proof_layout;
    if (adjudication.id !== id || adjudication.changed !== true || adjudication.mathematical_meaning_preserved !== true
        || !adjudication.findings?.some(f => f.verdict === 'confirmed' && f.status === 'repaired')
        || check?.exit_code !== 0 || check.content_sha256 !== native.content_sha256 || !Array.isArray(check.command)
        || !check.command.includes(`items/${id}.md`) || !check.command.includes('tools/proof-layout.mjs')
        || !/^proof-layout: 1 items, \d+ steps, 0 defects(?:\s|$)/m.test(check.output ?? '') || !Number.isFinite(Date.parse(check.checked_at))
        || Date.parse(check.checked_at) > Date.parse(native.recorded_at)) fail('main adjudication/layout evidence');
    // Authenticate only this item's unique row/block; unrelated append-only
    // source repairs do not invalidate a reviewed successor.
    const claims = readFileSync(join(receipt.source_root, `research/${native.run}-step3-published-claims.jsonl`), 'utf8').split('\n').filter(Boolean)
      .filter(line => JSON.parse(line).id === id);
    if (claims.length !== 1 || localEvidence(entry.ownership_evidence).toString('utf8') !== claims[0] + '\n') fail('ownership extraction');
    if (Date.parse(check.checked_at) < Date.parse(JSON.parse(claims[0]).claimed_at)) fail('layout check precedes claim');
    const ledger = readFileSync(join(receipt.source_root, 'research/published-consumer-supplier-ledger.md'), 'utf8');
    const begin = `<!-- local-published-repair:${native.ledger_marker}:begin -->`, end = `<!-- local-published-repair:${native.ledger_marker}:end -->`;
    if (ledger.split(begin).length !== 2 || ledger.split(end).length !== 2) fail('ledger marker uniqueness');
    const block = ledger.split(begin)[1].split(end)[0];
    if (sha(block) !== native.ledger_sha256 || !localEvidence(entry.ledger_evidence).equals(Buffer.from(block))) fail('ledger extraction');
    const changes = originalRenderingChanges(beforeBytes, afterBytes);
    if (!equal(entry.changes, changes) || !equal(Object.keys(changes.verification.after ?? {}).sort(), ['precheck', 'repair'])
        || changes.verification.after.precheck !== 'pass' || changes.verification.after.repair !== locator) fail('unreviewed delta/verification transition');
    const science = entry.scientific_review;
    if (science?.statements !== 'identical' || science.facts !== 'identical' || science.hypotheses !== 'identical'
        || science.proof !== 'equivalent-presentation' || science.new_premises !== false || science.new_results !== false
        || !substantive(science.reason) || !substantive(science.reading_limits)) fail('missing exact scientific equivalence review');
    const substantiveSteps = changes.steps.filter(s => s.kind === 'equivalent-presentation');
    if (!equal(Object.keys(entry.proof_step_reviews ?? {}).sort(), substantiveSteps.map(s => s.label).sort())
        || substantiveSteps.some(s => !substantive(entry.proof_step_reviews[s.label]))) fail('missing individual proof-step equivalence review');
    if ((changes.remarks || substantiveSteps.length) && (adjudication.proof_independent !== true || adjudication.diagram_mathematics_corrected !== false)) fail('diagram independence');
    if (!Array.isArray(entry.evidence) || !entry.evidence.length) fail('missing Root evidence');
    for (const ref of entry.evidence) localEvidence(ref);
    const consumers = affected(scope, id);
    if (!Array.isArray(entry.consumers) || !equal(entry.consumers.map(c => c.id).sort(), consumers)) fail('consumer selection');
    for (const consumer of entry.consumers) {
      const declaration = declarations.get(consumer.id), file = `items/${consumer.id}.md`, present = existsSync(join(root, file));
      if (consumer.decision !== 'unaffected' || !substantive(consumer.reason) || !declaration
          || consumer.declaration_sha256 !== sha(JSON.stringify(declaration))) fail('consumer declaration review');
      if (present) bind(file, consumer.source_sha256);
      else if (!planning || consumer.source_sha256 !== null) fail('missing/imagined authored consumer');
    }
    accepted.set(entry.path, entry.original_sha256);
  }
  if (!equal(Object.keys(review.inputs).sort(), [...required].sort())) fail('unrelated input binding');
  return accepted;
}
