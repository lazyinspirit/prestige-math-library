// This boundary certifies formatting and metadata only; native content gates
// retain their mathematical and physical review responsibilities.
import { existsSync, readFileSync, readdirSync, mkdirSync, writeFileSync, renameSync } from 'node:fs';
import { basename, dirname, join, resolve } from 'node:path';
import { createHash, randomUUID } from 'node:crypto';
import { validateDriftOwnerResolutions } from '../../physics-support/drift-owner-resolutions.mjs';
import { frontierGateScope } from '../../physics-support/frontier-gate-scope.mjs';
import { markdownFiles, readItem } from '../../physics-support/physics-content.mjs';
import { originalMaintenancePath } from '../../physics-support/original-maintenance.mjs';
import { originalImportPath } from '../../physics-support/physics-imports.mjs';
import { scanProofFiles } from '../../physics-support/proof-layout.mjs';
import { runPages, dependencyLevels } from '../../physics-support/item-dependency-levels.mjs';
import { registerStateDirectory, validatePrepared } from '../../step6-prepared.mjs';

const digest = bytes => createHash('sha256').update(bytes).digest('hex');
const json = value => JSON.stringify(value);
const RECERTIFICATION_SCOPE = 'formatting-metadata-only';
const checkPassed = check => check?.verdict === 'pass'
  && typeof check.evidence === 'string' && check.evidence.trim().length > 0;
const readJSON = path => JSON.parse(readFileSync(path, 'utf8'));
function atomic(path, value) {
  mkdirSync(resolve(path, '..'), { recursive: true });
  const temp = `${path}.${randomUUID()}.tmp`;
  writeFileSync(temp, `${JSON.stringify(value, null, 2)}\n`);
  renameSync(temp, path);
}
function filesBelow(dir) {
  return readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))
    .flatMap(entry => entry.isDirectory() ? filesBelow(join(dir, entry.name)) : [join(dir, entry.name)]);
}

/** Current manifest frontier, supplier-before-consumer order, and current bytes.
 * Absent pre-author carriers are represented by their manifest claim, never by
 * an invented proof. Prerequisite carriers are context, not additional subjects. */
export function gateReviewSnapshot(ctx, gates, stages) {
  const planOnly = stages.every(id => /^(?:0-|1-drift(?:-apply)?$)/.test(id));
  const scope = frontierGateScope(ctx, { requireItemFiles: false, allowEmptyItems: planOnly });
  // Union only actual native selectors. A descriptor without an explicit
  // adapter scope uses the current manifests; explicit frozen IDs survive
  // even when a later manifest no longer lists them.
  const selected = new Set(gates.flatMap(gate => Array.isArray(gate.ownerReviewItems)
    ? gate.ownerReviewItems : [...scope.items]));
  scope.items = selected;
  if (!scope.items.size && !planOnly) throw Error('Empty native gate review frontier');
  const research = join(ctx.repo, 'research');
  const manifests = readdirSync(research).filter(name => new RegExp(`^${ctx.run}-batch-\\d+\\.pages\\.json$`).test(name)).sort();
  const pages = manifests.flatMap(name => readJSON(join(research, name)));
  const planned = new Map(pages.flatMap(page => page.items).map(item => [item.id, item]));
  const carriers = markdownFiles(join(ctx.repo, 'items')).map(file => {
    try { return readItem(file); }
    catch (error) { return { id: basename(file, '.md'), file, frontmatterError: error.message }; }
  });
  const byId = new Map(), aliases = new Map();
  for (const item of carriers) {
    byId.set(item.id, [...(byId.get(item.id) ?? []), item]);
    for (const alias of item.aliases ?? []) aliases.set(alias, [...(aliases.get(alias) ?? []), item.id]);
  }
  const resolveId = token => {
    if (byId.has(token)) {
      if (byId.get(token).length !== 1) throw Error(`Ambiguous used carrier identity ${token}`);
      return token;
    }
    if (planned.has(token)) return token;
    const matches = [...new Set(aliases.get(token) ?? [])];
    if (matches.length !== 1) throw Error(`Missing or ambiguous used prerequisite ${token}`);
    if (byId.get(matches[0]).length !== 1) throw Error(`Ambiguous used carrier identity ${matches[0]}`);
    return matches[0];
  };
  const carrierFor = id => byId.get(id)?.[0];
  const inputs = new Map();
  const bind = path => inputs.set(path, existsSync(path) ? digest(readFileSync(path)) : null);
  for (const name of manifests) bind(join(research, name));
  const context = new Set();
  const deps = (id, field) => [...new Set([...(carrierFor(id)?.[field] ?? []), ...(planned.get(id)?.[field] ?? [])])].sort();
  // Definition discharges may validly point to a lemma which consumes the
  // definition. Include their entire current evidence cone without calling
  // that discharge a logical supplier edge or imposing a false DAG.
  const loadContext = token => {
    const id = resolveId(token);
    if (context.has(id)) return;
    context.add(id);
    const carrier = carrierFor(id);
    if (!carrier && !scope.items.has(id)) throw Error(`Missing supplier carrier ${id}`);
    if (carrier?.frontmatterError) throw Error(`Malformed carrier ${id}`);
    if (carrier) bind(carrier.file);
    for (const field of ['deps', 'justified_by']) for (const dep of deps(id, field)) loadContext(dep);
  };
  for (const id of [...scope.items].sort()) loadContext(id);
  const ordered = [], visiting = new Set(), visited = new Set();
  const visit = token => {
    const id = resolveId(token);
    if (visited.has(id)) return;
    if (visiting.has(id)) throw Error(`Dependency cycle at ${id}`);
    visiting.add(id);
    for (const dep of deps(id, 'deps')) visit(dep);
    if (scope.items.has(id)) {
      const carrier = carrierFor(id), manifest = planned.get(id);
      bind(join(ctx.repo, 'items', `${id}.md`));
      ordered.push({ id, carrierSha256: carrier ? digest(carrier.raw) : null,
        manifestSha256: manifest ? digest(json(manifest)) : null });
    }
    visiting.delete(id); visited.add(id);
  };
  // Validate genuine logical cycles even inside the discharge prerequisite cone.
  for (const id of [...context].sort()) visit(id);
  // Nonlogical frontier references bind context without acquiring a proof cone.
  for (const id of scope.items) {
    const item = carrierFor(id) ?? planned.get(id);
    for (const token of [...(item.forward_refs ?? []), ...(item.external_refs ?? []),
      ...Object.values(item.relations ?? {}).flat()]) {
      const reference = carrierFor(resolveId(token));
      if (!reference) throw Error(`Missing frontier reference carrier ${token}`);
      bind(reference.file); context.add(reference.id);
    }
  }
  for (const path of scope.pageFiles) bind(join(ctx.repo, path));
  const canonicalPlan = existsSync(join(research, 'plan-spec.json')) ? readJSON(join(research, 'plan-spec.json')) : { pages: [] };
  const importReceipt = existsSync(join(research, 'math-imports.json')) ? readJSON(join(research, 'math-imports.json')) : { files: [] };
  const pagePaths = markdownFiles(join(ctx.repo, 'library'));
  const prerequisitePaths = prerequisite => {
    const matches = pagePaths.filter(path => path.endsWith(`/${prerequisite}.md`));
    const declared = canonicalPlan.pages.filter(page => page.id === prerequisite);
    if (declared.length > 1) throw Error(`Ambiguous prerequisite page ${prerequisite}`);
    for (const path of matches) {
      const carrier = readItem(path);
      if ((carrier.page ?? carrier.id) !== prerequisite) throw Error(`Wrong prerequisite page identity ${prerequisite}: ${path}`);
    }
    if (matches.length <= 1) return matches;
    // A category relocation may leave an identical pinned import beside the
    // canonical plan location. Accept only that authenticated duplicate; two
    // distinct page bodies or an unpinned extra remain ambiguous.
    const canonical = declared[0]?.category && join(ctx.repo, 'library', declared[0].category, `${prerequisite}.md`);
    if (!canonical || !matches.includes(canonical)) throw Error(`Ambiguous prerequisite page ${prerequisite}`);
    const expected = digest(readFileSync(canonical));
    for (const path of matches) if (path !== canonical) {
      const pin = importReceipt.files.find(row => join(ctx.repo, row.path) === path);
      if (!pin || pin.sha256 !== expected || digest(readFileSync(path)) !== expected) throw Error(`Ambiguous prerequisite page ${prerequisite}`);
    }
    // Bind both the canonical page and its actual relevant import/original.
    return matches;
  };
  for (const page of pages) {
    bind(join(ctx.repo, 'library', page.category, '_category.md'));
    for (const prerequisite of page.requires ?? []) {
      const matches = prerequisitePaths(prerequisite);
      if (matches.length) for (const path of matches) { bind(path); bind(join(dirname(path), '_category.md')); }
      else {
        const supplier = pages.find(row => row.id === prerequisite && row.kind !== 'P');
        if (!supplier) throw Error(`Missing prerequisite page ${prerequisite}`);
        // Its actual manifest is already bound; do not invent a page carrier.
        bind(join(ctx.repo, 'library', supplier.category, `${supplier.id}.md`));
      }
    }
  }
  // Bind current originals of relevant pinned imports as well as local snapshots.
  const importsPath = join(research, 'math-imports.json');
  bind(importsPath);
  // Explicit original-maintenance authority and every reviewed input stay current.
  bindCertificateEvidence(originalMaintenancePath(ctx.repo, ctx.run), bind, ctx.repo);
  if (existsSync(importsPath)) {
    const imports = readJSON(importsPath);
    for (const row of imports.files ?? []) {
      const local = join(ctx.repo, row.path);
      if (inputs.has(local)) {
        const original = originalImportPath(imports,row);
        bind(original);
        if (row.path.startsWith('library/') && !basename(row.path).startsWith('_'))bind(join(dirname(original),'_category.md'));
      }
    }
  }
  bind(join(research, 'plan-spec.json'));
  // Bind inputs selected by the native descriptors rather than operational
  // run reports. Hashing native proof and source inputs preserves currency;
  // it does not require detailed mathematical or physical review here.
  const battery = gates.map(gate => ({ id: gate.id,
    argv: typeof gate.argv === 'function' ? gate.argv(ctx) : gate.argv,
    needs: typeof gate.needs === 'function' ? gate.needs() : gate.needs ?? [],
    liveness: gate.liveness ?? null, required: gate.required ?? true,
    projection: gate.projectResult?.toString() ?? null, ownerReviewItems: gate.ownerReviewItems ?? null }));
  const bindNativePath = arg => {
    if (typeof arg !== 'string' || arg.startsWith('-')) return;
    // Native coverage arguments can contain several paths in one token.
    for (const part of arg.split(',')) {
      const path = resolve(ctx.repo, part);
      if (part.includes('*')) {
        const pattern = new RegExp(`^${path.split('*').map(piece => piece.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('.*')}$`);
        const matches = filesBelow(research).filter(file => pattern.test(file));
        if (!matches.length) bind(path);
        for (const file of matches) bind(file);
      } else if (existsSync(path)) {
        for (const file of filesBelowIfDirectory(path)) bind(file);
      } else if (/^(?:research|items|library)\//.test(part)) bind(path);
    }
  };
  for (const gate of battery) for (const arg of [...gate.argv, ...gate.needs]) bindNativePath(arg);
  for (const gate of gates) for (const path of gate.ownerReviewInputs ?? []) bindNativePath(path);
  // These tools resolve mathematical inputs from --run instead of putting
  // their paths in argv. Bind their actual canonical receipt families; never
  // sweep observer/status reports or authorization state into this snapshot.
  const toolNames = new Set(battery.flatMap(gate => gate.argv.filter(arg => typeof arg === 'string').map(arg => arg.split('/').at(-1))));
  const implicit = [];
  if (toolNames.has('defect-ledger.mjs') || toolNames.has('step3-close.mjs'))
    implicit.push(`${ctx.run}-step3-historical-context-transition.json`);
  if (toolNames.has('audit-manifest.mjs')) implicit.push(`${ctx.run}-owner-authoring-direction.md`);
  if (toolNames.has('batch-scope-review.mjs')) {
    const directory=join(research, `${ctx.run}-scope-review`);
    if(existsSync(directory))for(const file of filesBelow(directory)) {
      if(!/-session\//.test(file)&&/\.(?:json|md)$/.test(file))bind(file);
    }
  }
  if (toolNames.has('step1-decisions.mjs')) for (const id of scope.items) implicit.push(`${ctx.run}-step1-${id}.json`);
  if (toolNames.has('drift-review-check.mjs')) {
    implicit.push(`${ctx.run}-scope-ledger.json`, `${ctx.run}-alpha-step1-drift.md`);
    for (const input of validateDriftOwnerResolutions(ctx.repo, ctx.run).inputs) bindNativePath(input);
  }
  if (toolNames.has('frontier-dependency-ledger.mjs')) for (const name of manifests) implicit.push(name.replace('.pages.json', '.cross-batch-dependencies.json'));
  if (toolNames.has('step3-decisions.mjs')) {
    for (const id of scope.items) for (const who of ['review', 'owner']) implicit.push(`${ctx.run}-step3b-${who}-${id}.json`);
    for (const page of pages) for (const who of ['review', 'owner']) implicit.push(`${ctx.run}-step3a-${who}-${page.id}.json`);
    implicit.push(`${ctx.run}-step3-auditor-certifications.json`, `${ctx.run}-step3-auditor-baseline.json`);
  }
  if (toolNames.has('pathway-closure.mjs')) implicit.push(`${ctx.run}-pathway.json`, `${ctx.run}-pathway-closure.json`);
  if (toolNames.has('publication-ready.mjs') || toolNames.has('step6-report.mjs')) {
    for (const suffix of ['publication-readiness.json', 'pathway-closure.json', 'judge-closure.json',
      'judge.jsonl', 'judge-adjudications.jsonl', 'touches.json', 'deferred-pairs.json', 'deferred-items.json',
      'step6-evidence.json', 'step6-report.response.json', 'step6-report.md', 'step6-report-integrity.json'])
      implicit.push(`${ctx.run}-${suffix}`);
    implicit.push('defect-ledger.jsonl');
  }
  if (toolNames.has('auditor-created-items.mjs') || toolNames.has('step3-auditor-items.mjs')) {
    for (const step of [3, 5, 7]) for (const kind of ['baseline', 'certifications'])
      implicit.push(`${ctx.run}-step${step}-auditor-${kind}.json`);
  }
  const names = readdirSync(research).sort();
  if (toolNames.has('step3-scope.mjs')) implicit.push(`${ctx.run}-step3-owner-same-defect-aliases.json`,
    `${ctx.run}-step3-owner-external-context.json`);
  if (toolNames.has('step3-scope.mjs')) for (const name of names) {
    if (name.startsWith(`${ctx.run}-`) && /(?:-step3-(?:hash|scope|historical-dependencies|observed-current-history|downstream-handoff|auditor-certifications|published-claims)|-refute-\d+|-reader-findings-\d+|-alpha-.*-3a-decisions)\b/.test(name)) implicit.push(name);
  }
  // Coverage is consumed implicitly by scaffold/item decision loaders too.
  if (toolNames.has('step1-decisions.mjs') || toolNames.has('step3-decisions.mjs'))
    for (const name of manifests) implicit.push(name.replace('.pages.json', '.coverage.json'));
  for (const name of implicit) {
    bindNativePath(`research/${name}`);
    if (name.endsWith('.json')) bindCertificateEvidence(join(research, name), bind, ctx.repo);
  }
  if (toolNames.has('step5-workflow.mjs')) {
    const directory = join(research, `${ctx.run}-step5-v2`);
    for (const name of ['frontier.json', 'baseline.json', 'step4-verdicts.json', 'certification.json']) bind(join(directory, name));
    // Current certification owns a hash-bound evidence graph. Follow that
    // graph rather than including every historic round or progress report.
    bindCertificateEvidence(join(directory, 'certification.json'), bind, ctx.repo);
  }
  const body = { recertificationScope: RECERTIFICATION_SCOPE, run: ctx.run, repo: resolve(ctx.repo), stages, scopeKind: planOnly ? 'plan' : 'items',
    pages: [...scope.pages].sort(), items: ordered, battery,
    inputs: [...inputs].sort(([a], [b]) => a.localeCompare(b)).map(([path, sha256]) => ({ path, sha256 })) };
  return { ...body, sha256: digest(json(body)) };
}
function bindCertificateEvidence(path, bind, repo, seen = new Set()) {
  path = resolve(repo, path);
  if (seen.has(path)) return;
  seen.add(path); bind(path);
  if (!existsSync(path) || !path.endsWith('.json')) return;
  const certificate = readJSON(path);
  const visit = value => {
    if (!value || typeof value !== 'object') return;
    for (const [key, child] of Object.entries(value)) {
      if (['evidence', 'inputs', 'input_hashes'].includes(key) && child && typeof child === 'object' && !Array.isArray(child)) {
        for (const [input, hash] of Object.entries(child)) if (/^[a-f0-9]{64}$/.test(hash))
          bindCertificateEvidence(input, bind, repo, seen);
      } else visit(child);
    }
  };
  visit(certificate);
}

function filesBelowIfDirectory(path) {
  try { return filesBelow(path); } catch (error) {
    if (error.code === 'ENOTDIR') return [path];
    throw error;
  }
}

/** Owner authorization binds stable source/context, not changing report receipts
 * or a particular battery. This still hashes actual source bytes every time. */
export function step6SourceAuthorizationSnapshot(ctx) {
  return gateReviewSnapshot(ctx, [{ id: 'step6-owner-source-authorization', argv: [] }], ['6-closeout']);
}

export function authorizeStep6Recertification(ctx, { reviewer = 'owner', resolveEscalations = false } = {}) {
  if (!resolveEscalations || !reviewer?.trim()) throw Error('Owner must resolve escalations and identify the reviewer');
  const request = readJSON(join(ctx.config.stateDir, 'owner-gate-request.json'));
  const state = readJSON(join(ctx.config.stateDir, 'state.json'));
  if (request.version !== 2 || request.snapshot?.run !== ctx.run
    || !request.snapshot.stages.every(id => id.startsWith('6-'))
    || state.run !== ctx.run || state.paused !== true)
    throw Error('Authorization requires this exact paused Step-6 owner boundary');
  const snapshot = step6SourceAuthorizationSnapshot(ctx);
  const authorization = { version: 1, run: ctx.run, authorized_by: 'owner', reviewer,
    escalations_resolved: true, recertificationScope: RECERTIFICATION_SCOPE,
    at: new Date().toISOString(), fingerprint: snapshot.sha256, snapshot };
  atomic(join(ctx.config.stateDir, 'owner-step6-authorization.json'), authorization);
  return { fingerprint: authorization.fingerprint, subjects: snapshot.items.length };
}

function automaticStep6Receipt(ctx, request, snapshot, receiptPath) {
  if (!snapshot.stages.every(id => id.startsWith('6-'))) return;
  const authorizationPath = join(ctx.config.stateDir, 'owner-step6-authorization.json');
  if (!existsSync(authorizationPath)) return;
  const authorization = readJSON(authorizationPath);
  const sourceBefore = step6SourceAuthorizationSnapshot(ctx);
  if (authorization.version !== 1 || authorization.run !== ctx.run
    || authorization.authorized_by !== 'owner' || authorization.escalations_resolved !== true
    || authorization.recertificationScope !== RECERTIFICATION_SCOPE
    || !authorization.reviewer?.trim() || authorization.fingerprint !== sourceBefore.sha256
    || authorization.snapshot?.sha256 !== authorization.fingerprint)
    throw Error('Step-6 owner source authorization is stale or invalid; renew it after resolving current changes');
  const reviewStartedAt = new Date().toISOString();
  const graph = dependencyLevels(runPages(ctx.repo, ctx.run));
  if (graph.errors.length) throw Error(graph.errors.join('\n'));
  const sorted = array => [...array].sort();
  const checks = snapshot.items.map(row => {
    const path = join(ctx.repo, 'items', `${row.id}.md`);
    const item = readItem(path), manifest = graph.items.get(row.id)?.item;
    if (digest(item.raw) !== row.carrierSha256 || item.id !== row.id
      || !item.kind || !item.title?.trim() || !['draft', 'published'].includes(item.status)
      || !Array.isArray(item.deps) || item.deps.some(dep => typeof dep !== 'string' || !dep))
      throw Error(`Malformed current source metadata: ${row.id}`);
    if (manifest && (digest(json(manifest)) !== row.manifestSha256
      || item.kind !== manifest.kind || item.title !== manifest.title
      || item.dependency_level !== graph.levels.get(row.id)
      || json(sorted(item.deps)) !== json(sorted(manifest.deps))
      || (manifest.domain !== undefined && item.domain !== manifest.domain)))
      throw Error(`Current source/manifest metadata mismatch: ${row.id}`);
    return { ...row, metadataCheck: { id: item.id, kind: item.kind, title: item.title,
      status: item.status, dependency_level: item.dependency_level, deps: item.deps,
      manifestMatched: Boolean(manifest) } };
  });
  // Fresh real renderer check in the already dependency-ordered native scope.
  // No cached proof-layout receipt can stand in for this per-battery pass.
  const layout = scanProofFiles(snapshot.items.map(row => `items/${row.id}.md`), ctx.repo);
  const failures = layout.flatMap(item => item.errors.map(error => `${item.file}: ${error.message ?? JSON.stringify(error)}`));
  if (failures.length) throw Error(failures.join('\n'));
  if (step6SourceAuthorizationSnapshot(ctx).sha256 !== sourceBefore.sha256)
    throw Error('Step-6 source/context changed during actual formatting/metadata checks');
  const reviewedAt = new Date().toISOString();
  const evidencePath = join(ctx.config.stateDir, 'owner-gate-checks', `${request.attempt}.json`);
  atomic(evidencePath, { version: 1, run: ctx.run, attempt: request.attempt,
    recertificationScope: RECERTIFICATION_SCOPE, mathematical_review: false,
    reviewStartedAt, reviewedAt, authorizationFingerprint: sourceBefore.sha256,
    metadata: checks, formatting: layout });
  const evidence = `${evidencePath} (fresh native renderer and source/manifest metadata checks)`;
  atomic(receiptPath, { version: 2, run: ctx.run, recertificationScope: RECERTIFICATION_SCOPE,
    attempt: request.attempt, snapshotSha256: snapshot.sha256,
    reviewer: authorization.reviewer, writersDrained: true, writerScopes: [],
    reviewStartedAt, reviewedAt,
    items: checks.map(row => ({ id: row.id, carrierSha256: row.carrierSha256,
      manifestSha256: row.manifestSha256, verdict: 'format-metadata-pass',
      formatting: { verdict: 'pass', evidence }, metadata: { verdict: 'pass', evidence } })) });
}

/** Called only by the drained native level join. One owner receipt authorizes
 * exactly one full native battery; failed attempts and crashes need fresh
 * formatting/metadata checks, without a detailed content review. */
export function authorizeOwnerGate({ ctx, gates, stages, writers = [] }) {
  if (writers.length) return { ok: false, why: `Live writers: ${writers.join(', ')}` };
  // The new final barrier consumes actual prepared metadata/render evidence.
  // Its genuine checks necessarily precede this native request; never rewrite
  // their timestamps to imitate the old per-request certification protocol.
  if (stages.length === 1 && stages[0] === '6-final-validation-v3') {
    try {
      registerStateDirectory(ctx.repo, ctx.run, { physics: true, stateDir: ctx.config.stateDir });
      const prepared = validatePrepared(ctx.repo, ctx.run, { physics: true, gates, stages });
      const attempt = randomUUID();
      const receipt = { version: 1, kind: 'actual-prepared-final-battery-authorization', run: ctx.run,
        attempt, preparedCompletedAt: prepared.completedAt, preparedSourceSha256: prepared.source.sha256,
        gateInventorySha256: prepared.gateInventorySha256, at: new Date().toISOString(),
        mathematical_review: false, gate_pass_created: false };
      atomic(join(ctx.config.stateDir, 'owner-gate-history', `${attempt}.json`), receipt);
      return { ok: true, attempt, gates };
    } catch (error) { return { ok: false, why: error.message }; }
  }

  const requestPath = join(ctx.config.stateDir, 'owner-gate-request.json');
  const receiptPath = join(ctx.config.stateDir, 'owner-gate-receipt.json');
  try {
    const resolvedGates = gates.map(gate => ({ ...gate,
      argv: typeof gate.argv === 'function' ? gate.argv() : [...gate.argv],
      needs: typeof gate.needs === 'function' ? gate.needs() : gate.needs }));
    const snapshot = gateReviewSnapshot(ctx, resolvedGates, stages);
    let request = existsSync(requestPath) ? readJSON(requestPath) : null;
    if (!request || request.consumedAt
      || existsSync(join(ctx.config.stateDir, 'owner-gate-history', `${request.attempt}.json`))
      || request.snapshot.sha256 !== snapshot.sha256) {
      request = { version: 2, attempt: randomUUID(), createdAt: new Date().toISOString(), snapshot };
      atomic(requestPath, request);
    }
    automaticStep6Receipt(ctx, request, snapshot, receiptPath);
    if (!existsSync(receiptPath)) throw Error(`Missing owner recertification: ${receiptPath}`);
    const receipt = readJSON(receiptPath);
    if (receipt.version !== 2 || receipt.recertificationScope !== RECERTIFICATION_SCOPE
      || receipt.attempt !== request.attempt || receipt.snapshotSha256 !== snapshot.sha256)
      throw Error('Stale owner receipt: attempt or current frontier hash differs');
    if (!receipt.reviewer?.trim() || receipt.writersDrained !== true || !Array.isArray(receipt.writerScopes)
      || receipt.writerScopes.length) throw Error('Owner receipt must identify reviewer and attest every writer scope drained');
    const start = Date.parse(receipt.reviewStartedAt), end = Date.parse(receipt.reviewedAt);
    if (!Number.isFinite(start) || !Number.isFinite(end) || start < Date.parse(request.createdAt)
      || end < start || end > Date.now()) throw Error('Owner formatting/metadata checks must follow this attempt request');
    if (!Array.isArray(receipt.items) || receipt.items.length !== snapshot.items.length)
      throw Error('Owner receipt must recertify the complete frontier');
    for (const [index, item] of snapshot.items.entries()) {
      const checked = receipt.items[index];
      if (checked?.id !== item.id || checked.carrierSha256 !== item.carrierSha256
        || checked.manifestSha256 !== item.manifestSha256 || checked.verdict !== 'format-metadata-pass'
        || !checkPassed(checked.formatting) || !checkPassed(checked.metadata))
        throw Error(`Missing current dependency-ordered formatting/metadata recertification for ${item.id}`);
    }
    if (snapshot.scopeKind === 'plan'
      && (!checkPassed(receipt.planChecks?.formatting) || !checkPassed(receipt.planChecks?.metadata)))
      throw Error('Plan gates require explicit current formatting and metadata passes');
    // Re-read the complete frontier after format/metadata receipt validation to reject
    // an input mutation during validation. Owner attestation covers external
    // editors; native inflight/adopted writers are checked at the caller.
    if (gateReviewSnapshot(ctx, resolvedGates, stages).sha256 !== snapshot.sha256) throw Error('Frontier changed during recertification validation');
    request.consumedAt = new Date().toISOString();
    atomic(join(ctx.config.stateDir, 'owner-gate-history', `${request.attempt}.json`), { request, receipt });
    atomic(requestPath, request);
    return { ok: true, attempt: request.attempt, gates: resolvedGates };
  } catch (error) { return { ok: false, why: error.message }; }
}
