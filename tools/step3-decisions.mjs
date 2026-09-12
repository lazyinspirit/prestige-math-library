// Step 3a scope decisions and Step 3b item decisions. No LLM calls or repairs.
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { yaml } from './pathway-lib.mjs';
import { loadStep3AuditorProvenance } from './auditor-created-items.mjs';

const safe = s => {
  if (!/^[a-zA-Z0-9_-]+$/.test(s ?? '')) throw Error('Invalid run or target ID');
  return s;
};
const json = p => JSON.parse(readFileSync(p, 'utf8'));
const hash = x => createHash('sha256').update(JSON.stringify(x)).digest('hex');
const read = p => existsSync(p) ? json(p) : null;
const file = (root, run, stage, id, owner) => join(root, 'research',
  `${safe(run)}-step${stage}-${owner ? 'owner' : 'review'}-${safe(id)}.json`);
function receipt(s, phase, id, owner) {
  const row = read(file(s.root, s.run, phase === 'scope' ? '3a' : '3b', id, owner));
  if (row && (row.version !== 1 || row.run !== s.run || row.phase !== phase || row.target !== id || row.owner !== owner))
    throw Error(`Invalid Step 3 receipt identity for ${id}`);
  return row;
}

function auditorCertifications(s) {
  if (Object.prototype.hasOwnProperty.call(s, 'auditorCertifications')) return s.auditorCertifications;
  let row = read(join(s.root, 'research', `${s.run}-step3-auditor-certifications.json`));
  if (row && (row.version !== 1 || row.run !== s.run
    || !['auditor-authored-step3-bypass-v1', 'auditor-authored-step3-bypass-v2'].includes(row.policy)
    || !Array.isArray(row.items) || !Array.isArray(row.scopes)))
    throw Error('Invalid Step 3 auditor certification receipt');
  // Legacy hashes did not certify the provenance of every current input.
  // Ignore them until the certifier revalidates against the immutable baseline.
  if (row?.policy === 'auditor-authored-step3-bypass-v1') row = null;
  if (row) {
    loadStep3AuditorProvenance(s.root, s.run);
    const baseline = read(join(s.root, 'research', `${s.run}-step3-auditor-baseline.json`));
    if (baseline?.version !== 1 || baseline.run !== s.run
      || baseline.policy !== 'auditor-authored-step3-bypass-v1'
      || !Array.isArray(baseline.items) || !Array.isArray(baseline.existing_item_files)
      || !Array.isArray(baseline.scopes) || row.baseline_sha256 !== hash(baseline)
      || row.items.some(item => baseline.items.some(original => original.id === item.id)
        || baseline.existing_item_files.includes(item.id))
      || row.scopes.some(scope => !baseline.scopes.some(original => original.page === scope.page
        && original.sha256 === scope.baseline_sha256)))
      throw Error('Invalid Step 3 auditor certification baseline/origin');
  }
  s.auditorCertifications = row;
  return row;
}

function auditorScopeCertification(s, id) {
  const row = auditorCertifications(s)?.scopes.find(value => value.page === id);
  return row?.sha256 === scopeHash(s, id) && /^[a-f0-9]{64}$/.test(row?.baseline_sha256 ?? '') ? row : null;
}

function auditorItemCertification(s, id) {
  const row = auditorCertifications(s)?.items.find(value => value.id === id);
  const live = s.items.get(id);
  if (!row || !Array.isArray(row.dependencies) || row.page !== live?.page.id
    || row.batch !== String(live?.page.batch)) return null;
  return row.sha256 === itemHash(s, id, row.dependencies) ? row : null;
}

export function loadStep3(root, run) {
  safe(run);
  const dir = join(root, 'research'), pages = [], items = new Map(), pairs = new Map();
  for (const f of readdirSync(dir).filter(f => new RegExp(`^${run}-batch-\\d+\\.pages\\.json$`).test(f)).sort()) {
    const batch = f.match(/-batch-(\d+)\./)[1];
    const coverage = read(join(dir, f.replace('.pages.json', '.coverage.json')));
    for (const page of json(join(dir, f))) {
      const livePage = { ...page, batch, coverage: coverage?.pages?.find(p => p.page === page.id) };
      pages.push(livePage);
      for (const item of page.items ?? []) {
        if (items.has(item.id)) throw Error(`Duplicate item ${item.id}`);
        items.set(item.id, { item, page: livePage });
      }
    }
  }
  if (!pages.length) throw Error('No run manifests');
  for (const a of pages.filter(p => p.kind === 'A')) {
    const b = pages.find(p => p.id === a.companion && p.kind === 'B');
    if (!b || b.companion !== a.id || pairs.has(a.id)) throw Error(`Invalid pair ${a.id}`);
    pairs.set(a.id, [a, b]);
  }
  if (pairs.size * 2 !== pages.length) throw Error('Every page must belong to one A/B pair');
  const planned = new Map();
  for (const page of read(join(dir, 'plan-spec.json'))?.pages ?? [])
    for (const item of page.items ?? []) planned.set(item.id, { item, page });
  return { root, run, pages, pairs, items, planned, cache: new Map() };
}

// Proof repairs do not reopen scope. Changed claims or inventory do.
export function scopeHash(s, page) {
  const pair = s.pairs.get(page);
  if (!pair) throw Error(`Unknown A page ${page}`);
  return hash(pair.map(p => ({ id: p.id, title: p.title, category: p.category,
    items: p.items.map(i => ({ id: i.id, kind: i.kind, title: i.title, statement: i.statement })),
  })));
}

function dependency(s, id) {
  if (s.cache.has(id)) return s.cache.get(id);
  const live = s.items.get(id), planned = s.planned.get(id);
  const path = join(s.root, 'items', `${safe(id)}.md`);
  const body = existsSync(path) ? readFileSync(path, 'utf8') : null;
  const fm = body ? yaml().parse(body.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '') : null;
  const contract = live ?? planned;
  // Missing prerequisites must remain auditable and escalatable, not prevent dispatch.
  if (!contract && !fm) return { bytes: { missing: id }, deps: [] };
  const declarations = [contract?.item, fm].filter(Boolean);
  const { verification, ...mathematicalMetadata } = fm ?? {};
  const value = {
    bytes: [contract?.item ?? null, body === null ? null : [mathematicalMetadata,
      body.replace(/^---\r?\n[\s\S]*?\r?\n---/, '')],
      contract ? { id: contract.page.id, order: contract.page.order, requires: contract.page.requires } : null],
    deps: [...new Set(declarations.flatMap(i => [...(i.deps ?? []), ...(i.justified_by ?? []), ...(i.forward_refs ?? [])]))],
  };
  s.cache.set(id, value);
  return value;
}

function itemInputs(s, id, extra = []) {
  if (!s.items.has(id)) throw Error(`Unknown run item ${id}`);
  if (!Array.isArray(extra) || extra.some(d => typeof d !== 'string')) throw Error('dependencies must be an ID array');
  const seen = new Map(), queue = [id, ...extra];
  while (queue.length) {
    const key = queue.pop();
    if (seen.has(key)) continue;
    const node = dependency(s, key);
    seen.set(key, node.bytes);
    queue.push(...node.deps);
  }
  return seen;
}

export function itemHash(s, id, extra = []) {
  return hash([...itemInputs(s, id, extra)].sort(([a], [b]) => a.localeCompare(b)));
}

// Use the same transitive closure as itemHash when checking who authored its
// current inputs. Both item text and run/planned dependency metadata contribute.
export function itemInputPaths(s, id, extra = []) {
  const paths = new Set();
  for (const key of itemInputs(s, id, extra).keys()) {
    const itemPath = join(s.root, 'items', `${safe(key)}.md`);
    if (existsSync(itemPath)) paths.add(itemPath);
    const live = s.items.get(key);
    if (live) paths.add(join(s.root, 'research', `${s.run}-batch-${live.page.batch}.pages.json`));
    else if (s.planned.has(key)) paths.add(join(s.root, 'research', 'plan-spec.json'));
  }
  return [...paths];
}

export function scopeDecision(s, id) {
  const owner = receipt(s, 'scope', id, true);
  const review = receipt(s, 'scope', id, false);
  const current = scopeHash(s, id);
  if (owner?.sha256 === current) return owner.decision === 'proceed'
    ? { closed: true, decision: owner } : { closed: false, owner: true, reason: `${id}: owner ${owner.decision}; apply amendments and record proceed for current scope` };
  const auditor = auditorScopeCertification(s, id);
  if (auditor) {
    const baseOwner = owner?.sha256 === auditor.baseline_sha256 ? owner : null;
    const baseReview = review?.sha256 === auditor.baseline_sha256 ? review : null;
    if (baseOwner?.decision === 'proceed' || baseReview?.decision === 'sufficient') {
      return { closed: true, decision: { ...auditor, decision: 'auditor-authored', owner: false,
        baseline_decision: baseOwner ?? baseReview } };
    }
    if (baseOwner || baseReview?.decision === 'insufficient') return { closed: false, owner: true,
      reason: `${id}: auditor additions cannot bypass the baseline scope owner decision` };
  }
  if (owner) return { closed: false, owner: true,
    reason: `${id}: owner ${owner.decision}; apply amendments and record proceed for current scope` };
  if (review?.decision === 'insufficient') return { closed: false, owner: true, reason: `${id}: insufficient scope; owner must proceed, merge or enrich` };
  return review?.sha256 === current && review.decision === 'sufficient'
    ? { closed: true, decision: review } : { closed: false, reason: `${id}: current scope review required` };
}

export function itemDecision(s, id) {
  const owner = receipt(s, 'item', id, true);
  let reopenedReviewHash = null;
  if (owner) {
    if (!Array.isArray(owner.dependencies)) throw Error(`Missing dependency audit for ${id}`);
    if (owner.decision === 'reopen') {
      // Reopen is authority to do the named repair, not a mathematical verdict.
      // It deliberately survives the ensuing content change; only a fresh
      // post-reopen author receipt can close the item.
      if (!/^[a-f0-9]{64}$/.test(owner.reopens_review_sha256 ?? ''))
        throw Error(`Invalid owner reopen evidence for ${id}`);
      reopenedReviewHash = owner.reopens_review_sha256;
    } else {
      if (owner.sha256 !== itemHash(s, id, owner.dependencies)) return { closed: false, owner: true, decision: owner,
        reason: `${id}: changed inputs require a current owner decision` };
      const closed = owner.decision === 'repaired';
      return { closed, owner: !closed, decision: owner, reason: closed ? undefined : `${id}: ${owner.reason}` };
    }
  }
  const auditor = auditorItemCertification(s, id);
  if (auditor) return { closed: true, owner: false,
    decision: { ...auditor, decision: 'auditor-authored', owner: false, confidence: 1 } };
  const review = receipt(s, 'item', id, false);
  if (reopenedReviewHash !== null && (!review || hash(review) === reopenedReviewHash)) return {
    closed: false, owner: false, decision: owner,
    reason: `${id}: owner authorized repair; a fresh post-reopen item audit is required`,
  };
  if (review) {
    if (!Array.isArray(review.dependencies)) throw Error(`Missing dependency audit for ${id}`);
    if (review.sha256 !== itemHash(s, id, review.dependencies)) {
      if (review.decision === 'escalate') return { closed: false, owner: true, decision: review,
        reason: `${id}: changed inputs require a current owner decision` };
    } else {
      const closed = ['accept', 'repaired'].includes(review.decision) && review.confidence === 1;
      return { closed, owner: !closed, decision: review, reason: closed ? undefined : `${id}: ${review.reason}` };
    }
  }
  return { closed: false, reason: `${id}: current item audit required` };
}

export function checkStep3(s, phase) {
  if (!['scope', 'final'].includes(phase)) throw Error('phase must be scope or final');
  const work = [], scope = [...s.pairs].map(([id]) => [id, scopeDecision(s, id)]);
  for (const [id, result] of scope) if (!result.closed) work.push({ page: id, ...result });
  let accepted = 0;
  if (phase === 'final') for (const id of s.items.keys()) {
    const result = itemDecision(s, id);
    if (result.closed) accepted++;
    else work.push({ item: id, ...result });
  }
  return { phase, pairs: s.pairs.size, items: s.items.size, accepted,
    closed: work.length === 0, work };
}

export function recordStep3(root, { run, phase, page, item, decision, reason, owner = false, confidence, dependencies }) {
  if (!reason?.trim()) throw Error('An evidence/reason is required');
  const s = loadStep3(root, run), id = phase === 'scope' ? page : item;
  if (!['scope', 'item'].includes(phase)) throw Error('phase must be scope or item');
  const allowed = phase === 'scope' ? owner ? ['proceed', 'merge', 'enrich'] : ['sufficient', 'insufficient']
    : owner ? ['repaired', 'hold', 'reopen'] : ['accept', 'repaired', 'escalate'];
  if (!allowed.includes(decision)) throw Error('Invalid decision for this role and phase');
  if (!owner && phase === 'item' && decision !== 'escalate' && confidence !== 1)
    throw Error('Less than 100% confidence requires escalation');
  if (!owner && phase === 'scope' && scopeDecision(s, id).owner)
    throw Error('Only the owner may change an owner scope decision');
  if (phase === 'item') {
    const pair = [...s.pairs].find(([, ps]) => ps.some(p => p.items.some(i => i.id === id)));
    if (!pair || !checkStep3(s, 'scope').closed) throw Error('Step 3a must clear before item auditing');
    if (!Array.isArray(dependencies)) throw Error('Record the examined dependency IDs, including an explicit empty list');
    const previous = itemDecision(s, id).decision;
    if (!owner && previous?.decision !== 'reopen' && (previous?.owner || previous?.decision === 'escalate'))
      throw Error('The owner must resolve this item decision');
  }
  const reopenedReview = phase === 'item' && owner && decision === 'reopen'
    ? receipt(s, 'item', id, false) : null;
  if (phase === 'item' && owner && decision === 'reopen' && reopenedReview?.decision !== 'escalate')
    throw Error('Owner reopen requires an existing escalation receipt');
  const row = { version: 1, run, phase, target: id, decision, owner, confidence: owner ? null : confidence,
    reason, ...(phase === 'item' ? { dependencies: [...new Set(dependencies)].sort() } : {}),
    ...(reopenedReview ? { reopens_review_sha256: hash(reopenedReview) } : {}),
    sha256: phase === 'scope' ? scopeHash(s, id) : itemHash(s, id, dependencies), at: new Date().toISOString() };
  writeFileSync(file(root, run, phase === 'scope' ? '3a' : '3b', id, owner), JSON.stringify(row, null, 2) + '\n');
  return row;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  try {
    const args = process.argv.slice(2), get = key => {
      const i = args.indexOf(`--${key}`);
      return i < 0 ? undefined : args[i + 1];
    };
    if (args[0] === 'check') {
      const result = checkStep3(loadStep3(process.cwd(), get('run')), get('phase'));
      console.log(JSON.stringify(result, null, 2));
      process.exitCode = result.closed ? 0 : 1;
    } else if (args[0] === 'record-scope' || args[0] === 'record-item') {
      console.log(JSON.stringify(recordStep3(process.cwd(), {
        run: get('run'), phase: args[0] === 'record-scope' ? 'scope' : 'item', page: get('page'), item: get('item'),
        decision: get('decision'), owner: args.includes('--owner'), reason: get('reason'),
        confidence: get('confidence') === undefined ? undefined : Number(get('confidence')),
        dependencies: get('dependencies') === undefined ? undefined : JSON.parse(get('dependencies')),
      }), null, 2));
    } else throw Error('Usage: step3-decisions.mjs check --run RUN --phase scope|final; record-scope --page ID; record-item --item ID --dependencies JSON');
  } catch (e) { console.error(e.message); process.exitCode = 1; }
}
