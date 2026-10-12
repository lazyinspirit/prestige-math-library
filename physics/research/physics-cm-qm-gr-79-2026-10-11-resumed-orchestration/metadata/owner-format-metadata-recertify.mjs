// Run-local adaptation of research/physics-em-sr-40-2026-10-08-owner-format-metadata-recertify.mjs.
// Execute only on a fresh native v2 request after root authenticates every writer drain.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { spawnSync } from 'node:child_process';

const run = 'physics-cm-qm-gr-79-2026-10-11';
const here = path.dirname(fileURLToPath(import.meta.url));
const repo = path.resolve(here, '../../..'); // physics/, independent of invocation cwd.
const root = path.dirname(repo), research = path.join(repo, 'research');
const stateDir = path.join(repo, '.physics-autopilot', run);
const tool = name => path.join(root, 'tools', name);
const { readItem, PREFIXES, DEPENDENCY_ROLES, NONPROOF_KINDS } = await import(pathToFileURL(tool('physics-support/physics-content.mjs')));
const { sectionText } = await import(pathToFileURL(tool('physics-support/facts-block.mjs')));
const { scanProofFiles } = await import(pathToFileURL(tool('proof-layout.mjs')));
const read = file => JSON.parse(fs.readFileSync(file, 'utf8'));
const sha = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
const rawSha = file => fs.existsSync(file) ? sha(fs.readFileSync(file)) : null;
const nonempty = value => typeof value === 'string' && value.trim().length > 0;
const args = process.argv.slice(2), drainAt = args.indexOf('--drain-receipt');
if (drainAt < 0 || !args[drainAt + 1] || args[drainAt + 1].startsWith('--')
  || args.some((arg, i) => !['--drain-receipt', '--submit'].includes(arg) && i !== drainAt + 1)
  || args.filter(arg => arg === '--drain-receipt').length !== 1
  || args.filter(arg => arg === '--submit').length > 1)
  throw Error('Usage: node owner-format-metadata-recertify.mjs --drain-receipt PATH [--submit]');
const drainPath = path.resolve(repo, args[drainAt + 1]);
const requestPath = path.join(stateDir, 'owner-gate-request.json');
const request = read(requestPath), snapshot = request.snapshot;
if (request.version !== 2 || request.consumedAt || snapshot?.run !== run
  || snapshot.repo !== repo || snapshot.recertificationScope !== 'formatting-metadata-only'
  || !Array.isArray(snapshot.items) || !snapshot.items.length || snapshot.scopeKind !== 'items')
  throw Error('Await a fresh unconsumed v2 authored-item request with nonempty exact selection');
const { sha256: snapshotSha256, ...snapshotBody } = snapshot;
if (sha(JSON.stringify(snapshotBody)) !== snapshotSha256) throw Error('Native request snapshot digest differs');
const directionPath = path.join(research, `${run}-owner-authoring-direction.md`);
if (!fs.existsSync(directionPath)) throw Error('Current owner authoring direction missing');
const directionBytes = fs.readFileSync(directionPath), directionSha256 = sha(directionBytes);
const directionRequired = snapshot.battery?.some(gate => gate.argv?.some(arg =>
  typeof arg === 'string' && path.basename(arg) === 'audit-manifest.mjs'));
if (directionRequired) {
  const binding = snapshot.inputs?.find(input => path.resolve(repo, input.path) === directionPath);
  if (!binding?.sha256 || binding.sha256 !== directionSha256)
    throw Error('Native audit-manifest request lacks the exact current non-null owner-direction binding');
}
const drainSha256 = rawSha(drainPath);
function requireDrained() {
  if (rawSha(drainPath) !== drainSha256) throw Error('Root writer-drain receipt changed during pass');
  const drain = read(drainPath), at = Date.parse(drain.at), now = Date.now();
  if (drain.run !== run || drain.reviewer !== '/root' || drain.writersDrained !== true
    || !Array.isArray(drain.writerScopes) || drain.writerScopes.length
    || !['nativeWriters', 'adoptedWriters', 'externalWriters'].every(key => Array.isArray(drain[key]) && !drain[key].length)
    || !Number.isFinite(at) || at > now || now - at > 600_000
    || drain.externalPhysicsThreadsIdle !== true || drain.affectedAdoptedWritersDrained !== true
    || drain.naturalWriterFreeJoin !== true || drain.pendingAuthorDispatches !== 0
    || !Number.isFinite(Date.parse(drain.verifiedAt))) throw Error('Missing fresh root native/adopted/external drain attestation');
  const state = read(path.join(stateDir, 'state.json'));
  if (state.run !== run || Object.values(state.dispatches ?? {}).some(d => d.startedAt && !d.endedAt))
    throw Error('Actual native/adopted dispatch remains started without endedAt');
  const live = [];
  for (const pid of fs.readdirSync('/proc').filter(name => /^\d+$/.test(name))) {
    let cmd;
    try { cmd = fs.readFileSync(`/proc/${pid}/cmdline`).toString().split('\0').filter(Boolean); }
    catch (error) { if (['ENOENT', 'ESRCH'].includes(error.code)) continue; throw error; }
    if (cmd.some(arg => path.basename(arg) === 'dispatch.mjs') && cmd.some(arg => arg.includes(run))) live.push(Number(pid));
  }
  if (live.length) throw Error(`Native process writers remain: ${live.join(', ')}`);
  return drain;
}
function rehash() {
  if (!Array.isArray(snapshot.inputs) || !snapshot.inputs.length) throw Error('Native request has no bound inputs');
  for (const input of snapshot.inputs) if (rawSha(input.path) !== input.sha256) throw Error(`Changed native input ${input.path}`);
  if (rawSha(directionPath) !== directionSha256) throw Error('Current owner direction changed during pass');
  const current = read(requestPath);
  if (current.version !== 2 || current.attempt !== request.attempt || current.consumedAt
    || current.snapshot.sha256 !== snapshotSha256) throw Error('Native request changed or was consumed');
}
requireDrained(); rehash();
const started = new Date().toISOString();
if (!Number.isFinite(Date.parse(request.createdAt)) || Date.parse(started) < Date.parse(request.createdAt)) throw Error('Pass must follow request creation');
const manifests = new Map();
for (const name of fs.readdirSync(research).filter(name => new RegExp(`^${run}-batch-\\d+\\.pages\\.json$`).test(name))) {
  for (const page of read(path.join(research, name))) for (const item of page.items ?? []) {
    if (manifests.has(item.id)) throw Error(`Duplicate current manifest subject ${item.id}`);
    manifests.set(item.id, item);
  }
}
const selected = new Set(snapshot.items.map(item => item.id));
if (selected.size !== snapshot.items.length) throw Error('Duplicate request subject');
// Resolve only request-bound item/alias context; unrelated carriers acquire no checks.
const aliases = new Map(), boundIds = new Set();
for (const input of snapshot.inputs) if (input.path.startsWith(path.join(repo, 'items') + path.sep) && input.sha256) {
  const item = readItem(input.path);
  boundIds.add(item.id);
  for (const alias of item.aliases ?? []) {
    if (!aliases.has(alias)) aliases.set(alias, new Set());
    aliases.get(alias).add(item.id);
  }
}
const headings = { definition: ['Definition'], algorithm: ['Definition'], theorem: ['Statement', 'Proof'], lemma: ['Statement', 'Proof'], proposition: ['Statement', 'Proof'], corollary: ['Statement', 'Proof'], example: ['Example'], counterexample: ['Statement refuted', 'Counterexample'], 'false-statement': ['Statement', 'Refutation'], 'physics-theorem': ['Statement', 'Proof'], 'thought-experiment': ['Statement', 'Proof'], postulate: ['Postulate'], experiment: ['Setup', 'Procedure', 'Observations', 'Uncertainty', 'Interpretation'] };
const provenance = new Set(['ai-generated', 'ai-altered', 'literature-derived']);
const seen = new Set(), items = [], failures = [], files = [], observed = new Map();
const control = /[\u0000-\u0008\u000b\u000c\u000e-\u001f]/u;
for (const binding of snapshot.items) {
  const manifest = manifests.get(binding.id), file = path.join(repo, 'items', `${binding.id}.md`), issues = [];
  try {
    if (!/^[a-z][a-z0-9-]*$/.test(binding.id)) throw Error('Invalid requested identity');
    if ((manifest ? sha(JSON.stringify(manifest)) : null) !== binding.manifestSha256) throw Error('Current exact manifest-row digest differs');
    if (!binding.carrierSha256 || rawSha(file) !== binding.carrierSha256) throw Error('Current authored carrier absent or changed');
    const item = readItem(file); observed.set(binding.id, item); files.push(file);
    if (item.id !== binding.id || !PREFIXES[item.kind] || !item.id.startsWith(`${PREFIXES[item.kind]}-`) || !['physics', 'mathematics'].includes(item.domain)) issues.push('Invalid identity, kind prefix or domain');
    if (!nonempty(item.title) || !['draft', 'published'].includes(item.status)) issues.push('Missing title or invalid status');
    if (manifest && (item.kind !== manifest.kind || item.domain !== manifest.domain)) issues.push('Manifest/carrier classification differs');
    if ((manifest || item.dependency_level !== undefined) && (!Number.isSafeInteger(item.dependency_level) || item.dependency_level < 0)) issues.push('Invalid dependency_level label');
    if (manifest && item.dependency_level !== manifest.dependency_level) issues.push('Manifest/carrier dependency_level differs');
    if (!Array.isArray(item.deps) || item.deps.some(dep => !nonempty(dep)) || new Set(item.deps).size !== item.deps.length) issues.push('Invalid or duplicate deps');
    if (!item.dependency_roles || typeof item.dependency_roles !== 'object' || Array.isArray(item.dependency_roles)) issues.push('Invalid dependency_roles mapping');
    for (const dep of item.deps ?? []) if (!DEPENDENCY_ROLES.has(item.dependency_roles?.[dep])) issues.push(`Missing or invalid role ${dep}`);
    for (const dep of Object.keys(item.dependency_roles ?? {})) if (!item.deps?.includes(dep)) issues.push(`Extra role ${dep}`);
    for (const dep of new Set([...(item.deps ?? []), ...(manifest?.deps ?? [])])) {
      const matches = [...(aliases.get(dep) ?? [])];
      const canonical = boundIds.has(dep) ? dep : matches.length === 1 ? matches[0] : dep;
      if (!boundIds.has(dep) && matches.length !== 1) issues.push(`Missing or ambiguous used supplier ${dep}`);
      if (selected.has(canonical) && !seen.has(canonical)) issues.push(`Requested logical supplier not before consumer ${canonical}`);
    }
    if (!nonempty(item.body) || control.test(item.raw)) issues.push('Empty body or forbidden control characters');
    for (const heading of headings[item.kind] ?? []) if (!sectionText(item.body, heading).trim()) issues.push(`Missing or empty ## ${heading}`);
    if ((headings[item.kind] ?? []).some(h => ['Proof', 'Refutation', 'Counterexample'].includes(h)) && !nonempty(item.proof_strategy)) issues.push('Missing proof_strategy');
    if (!provenance.has(item.provenance?.statement) || !new Set([...provenance, 'not-applicable', 'not-supplied']).has(item.provenance?.proof)) issues.push('Invalid provenance shape');
    const references = item.sources?.references ?? [];
    if (!Array.isArray(references)) issues.push('Invalid source-reference list');
    const urls = (Array.isArray(references) ? references : []).filter(ref => ref && typeof ref === 'object' && nonempty(ref.url));
    if (['statement', 'proof'].some(part => ['literature-derived', 'ai-altered'].includes(item.provenance?.[part])) && !urls.length) issues.push('Source-backed provenance lacks reference URL');
    for (const ref of Array.isArray(references) ? references : []) { if (typeof ref === 'string') continue; if (!nonempty(ref?.title)) issues.push('Invalid source-reference title'); if (ref?.url && !/^https?:$/u.test(new URL(ref.url).protocol)) issues.push('Invalid source-reference URL'); }
    const roles = { corollary: 'direct-corollary', example: 'example', counterexample: 'counterexample' };
    if (item.provenance?.statement === 'ai-generated' && (!roles[item.kind] || item.generation?.role !== roles[item.kind])) issues.push('Invalid generated-claim role');
    if (item.provenance?.statement !== 'ai-generated' && item.generation !== undefined) issues.push('Unexpected generation metadata');
    if (item.domain === 'physics' && !nonempty(item.physical_scope)) issues.push('Missing physical_scope');
    if (NONPROOF_KINDS.has(item.kind) && (item.provenance?.proof !== 'not-applicable' || /^## (Proof|Refutation|Verification|Counterexample)\s*$/m.test(item.body))) issues.push('Invalid nonproof section/provenance shape');
  } catch (error) { issues.push(error.message); }
  seen.add(binding.id);
  if (issues.length) failures.push({ id: binding.id, issues });
  items.push({ ...binding });
}
function checkJson(label, argv) {
  const outputPath = path.join(here, `${request.attempt}-${label}.json`);
  const outputFd = fs.openSync(outputPath, 'w');
  let result;
  try { result = spawnSync(process.execPath, argv, { cwd: repo, encoding: 'utf8', stdio: ['ignore', outputFd, 'pipe'], maxBuffer: 32 * 1024 * 1024, timeout: 300_000 }); }
  finally { fs.closeSync(outputFd); }
  if (result.error) throw Error(`${label}: ${result.error.message}`);
  let payload; try { payload = read(outputPath); } catch { throw Error(`${label}: invalid JSON in ${outputPath}: ${result.stderr}`); }
  if (result.status !== 0) failures.push({ id: label, issues: payload.results ? payload.results.filter(row => !['pass', 'not-applicable'].includes(row.status)) : payload.errors ?? payload, stderr: result.stderr });
  return payload;
}
let precheck = null, render = null, layout = [];
if (!failures.length) {
  precheck = checkJson('selected-precheck', [tool('physics-support/tsx-run.mjs'), tool('physics-support/precheck.mts'), ...files, '--json']);
  if (precheck.summary?.files !== files.length || precheck.results?.length !== files.length || precheck.summary?.failed !== 0) failures.push({ id: 'selected-precheck', issues: ['Incomplete or failing selected format coverage'] });
  const pageIds = new Set(snapshot.pages), pageFiles = snapshot.inputs.map(input => input.path).filter(file => file.startsWith(path.join(repo, 'library') + path.sep) && pageIds.has(path.basename(file, '.md')) && fs.existsSync(file));
  const renderFiles = [...new Set([...files, ...pageFiles])];
  render = checkJson('selected-rendercheck', [tool('physics-support/rendercheck.mjs'), ...renderFiles, '--json']);
  if (render.checked !== renderFiles.length || !Array.isArray(render.errors) || render.errors.length) failures.push({ id: 'selected-rendercheck', issues: ['Incomplete or failing selected render coverage'] });
  try { layout = scanProofFiles(files, repo); for (const item of layout) if (item.errors.length) failures.push({ id: item.file, issues: item.errors }); }
  catch (error) { failures.push({ id: 'selected-proof-layout', issues: [error.message] }); }
}
rehash(); requireDrained();
const reviewedAt = new Date().toISOString();
const evidencePath = path.join(here, `${run}-gate-${request.attempt}-format-metadata-pass.json`);
if (failures.length) {
  fs.writeFileSync(evidencePath, JSON.stringify({ version: 2, run, attempt: request.attempt, status: 'formatting/metadata failed; no receipt issued', reviewStartedAt: started, reviewedAt, failures, ownerDirectionSha256: directionSha256, drainReceipt: drainPath, drainSha256 }, null, 2) + '\n');
  throw Error(`Formatting/metadata defects; see ${evidencePath}`);
}
for (let i = 0; i < items.length; i++) {
  const item = observed.get(items[i].id), format = precheck.results[i], rows = layout[i].rows, steps = rows.reduce((n, row) => n + row.sourceSteps, 0);
  if (path.resolve(format.file) !== files[i] || layout[i].file !== files[i]) throw Error('Selected formatter order/coverage changed');
  items[i].verdict = 'format-metadata-pass';
  items[i].formatting = { verdict: 'pass', evidence: `${path.relative(repo, files[i])}: parsed ${item.kind} sections/body; phase precheck ${format.status}${format.check ? ' (' + format.check + ')' : ''}; renderer YAML/KaTeX pass; SSR ${rows.length} proof rows/${steps} numbered steps, zero layout defects. No argument validity assessed.` };
  items[i].metadata = { verdict: 'pass', evidence: `Exact carrier SHA ${items[i].carrierSha256}; ${items[i].manifestSha256 ? 'exact manifest row SHA ' + items[i].manifestSha256 : 'native wrapper/frozen subject without manifest row (null binding preserved)'}; id/kind/domain/title/status, dependency_level and provenance/source/reference/dependency-role shapes checked; ${item.deps.length} declared logical suppliers respect native requested order; owner direction SHA ${directionSha256}. No source fidelity, physics or mathematics acceptance.` };
}
const receipt = { version: 2, recertificationScope: 'formatting-metadata-only', attempt: request.attempt, snapshotSha256, reviewer: '/root', writersDrained: true, writerScopes: [], reviewStartedAt: started, reviewedAt, items };
fs.writeFileSync(evidencePath, JSON.stringify({ ...receipt, run, status: 'actual format/metadata/hash pass only', ownerDirectionSha256: directionSha256, drainReceipt: drainPath, drainSha256, inputsRehashed: snapshot.inputs.length, precheck, render, proofLayout: layout, mathematicalPhysicalSourceAcceptance: false }, null, 2) + '\n');
if (args.includes('--submit')) {
  rehash(); requireDrained();
  const target = path.join(stateDir, 'owner-gate-receipt.json'), temporary = `${target}.root-tmp`;
  fs.writeFileSync(temporary, JSON.stringify(receipt, null, 2) + '\n'); fs.renameSync(temporary, target);
}
console.log(JSON.stringify({ attempt: request.attempt, items: items.length, evidence: evidencePath, submitted: args.includes('--submit') }));
