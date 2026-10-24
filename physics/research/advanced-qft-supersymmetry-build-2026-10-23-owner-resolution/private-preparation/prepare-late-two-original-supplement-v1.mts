// Research-only fact extraction. Run only at a genuinely paused, drained boundary.
// Never writes an authority, source, import, readiness receipt, or native state.
import { readFileSync, readdirSync, existsSync, lstatSync, realpathSync, mkdirSync, writeFileSync } from 'node:fs';
import { resolve, join, relative, basename } from 'node:path';
import { createHash } from 'node:crypto';
import { isDeepStrictEqual as equal } from 'node:util';
import { scanAppendProcesses } from '../../../../tools/physics-autopilot/src/frontier-append.mts';
import { frontierMathematicsImportScope } from '../../../../tools/physics-support/frontier-import-scope.mjs';
import { readRunManifestPages } from '../../../../tools/physics-support/run-manifest-pages.mjs';
import { markdownFiles, readItem } from '../../../../tools/physics-support/physics-content.mjs';
import { readOriginalItemIdentity } from '../../../../tools/physics-support/original-item-index.mjs';
import { originalRenderingChanges } from '../../../../tools/physics-support/original-rendering-maintenance.mjs';
import { originalPresentationChanges } from '../../../../tools/physics-support/original-presentation-maintenance.mjs';
import { recordedPublishedRepair } from '../../../../tools/published-repair-policy.mjs';
import { yaml } from '../../../../tools/physics-support/pathway-lib.mjs';

const argv = process.argv.slice(2), opt = (name: string) => { const i = argv.indexOf('--' + name); return i < 0 ? null : argv[i + 1]; };
if (argv.includes('--help')) {
  process.stdout.write('Research fact extraction only. From physics cwd:\nnode ../tools/tsx-run.mjs research/RUN-owner-resolution/private-preparation/prepare-late-two-original-supplement-v1.mts --run RUN --tag UNIQUE-SAFE-TAG [--prior-review research/RUN-frontier-append-2/original-rendering-maintenance.json]\nRequires paused unfinished Step1, all69 manifests populated, every carrier present, and all native/preflight/external physics writers drained. Never use while authors are active.\n');
  process.exit(0);
}
const root = realpathSync(process.cwd()), run = opt('run'), tag = opt('tag');
const safe = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
if (!safe.test(run ?? '') || !safe.test(tag ?? '')) throw Error('Explicit safe --run and unique --tag required');
const stateDir = join(root, '.physics-autopilot', run!), statePath = join(stateDir, 'state.json');
const sha = (bytes: any) => createHash('sha256').update(bytes).digest('hex');
const regularBytes = (path: string) => { const full = resolve(root, path); if (!lstatSync(full).isFile() || realpathSync(full) !== full) throw Error('Not a regular unaliased input: ' + path); return readFileSync(full); };
const readJSON = (path: string) => JSON.parse(regularBytes(path).toString());
const parse = (bytes: Buffer) => { const match = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/.exec(bytes.toString()); if (!match) throw Error('Missing frontmatter'); const doc = yaml().parseDocument(match[1], { uniqueKeys: true }); if (doc.errors.length) throw Error('Malformed frontmatter'); return doc.toJS(); };
const watched = new Map<string, string>();
const watch = (path: string) => { const bytes = regularBytes(path); const digest = sha(bytes), previous = watched.get(path); if (previous && previous !== digest) throw Error('Input changed during extraction: ' + path); watched.set(path, digest); return bytes; };
function assertDrained() {
  if (existsSync(join(stateDir, 'frontier-append.lock'))) throw Error('Active/interrupted append transaction; no extraction permitted');
  const state = readJSON(statePath);
  if (state.run !== run || state.version !== 1 || state.finishedAt || !state.paused || !/^1-/.test(state.stage ?? '')) throw Error('Actual unfinished paused Step1 required; this script does not pause/control the run');
  if (Object.entries<any>(state.stages ?? {}).some(([id, row]) => !id.startsWith('1-') && (row.enteredAt || row.doneAt))) throw Error('A later stage has started');
  if (Object.values<any>(state.dispatches ?? {}).some(row => row.startedAt && !row.endedAt)) throw Error('Native dispatch writers have not drained');
  const processes = scanAppendProcesses({ repo: root, run, stateDir });
  // tsx-run is a synchronous launcher, not a native writer. Exclude only our
  // exact verified direct parent invocation, never arbitrary ancestors/PIDs.
  let launcher: number | null = null;
  try {
    const args = readFileSync(`/proc/${process.ppid}/cmdline`, 'utf8').split('\0').filter(Boolean);
    const cwd = realpathSync(`/proc/${process.ppid}/cwd`);
    if (/^(node|nodejs)$/.test(basename(args[0])) && cwd === root
        && realpathSync(resolve(cwd, args[1])) === realpathSync(join(root, '../tools/tsx-run.mjs'))
        && realpathSync(resolve(cwd, args[2])) === realpathSync(process.argv[1]) && equal(args.slice(3), argv)) launcher = process.ppid;
  } catch { /* An unverifiable launcher gets no exemption. */ }
  if (processes.preflight.length || processes.writer.some((pid: number) => pid !== launcher)) throw Error('Physics/native/preflight writer processes remain: ' + JSON.stringify(processes));
  return { paused: true, stage: state.stage, controllerPids: processes.controller, verifiedLauncherPid: launcher, activeWriterPids: [] };
}
watch(realpathSync('tools/physics-support/original-presentation-maintenance.mjs'));
watch(realpathSync('tools/physics-support/original-rendering-maintenance.mjs'));
const boundaryBefore = assertDrained(); // BEFORE any frontier/original extraction.
const names = readdirSync(join(root, 'research')).filter(name => new RegExp(`^${run}-batch-[1-9][0-9]*\\.pages\\.json$`).test(name)).sort((a, b) => Number(a.match(/-batch-(\d+)/)![1]) - Number(b.match(/-batch-(\d+)/)![1]));
if (names.length !== 69 || names.some((name, index) => !name.endsWith(`-batch-${index + 1}.pages.json`))) throw Error('Exactly the actual contiguous69 manifests required; no saved planning frontier fallback');
const manifests = names.map(name => 'research/' + name), frontier = Object.fromEntries(manifests.map(path => [path, sha(watch(path))]));
const pages = readRunManifestPages(root, run!); // strict populated inventory, no planning mode.
const declarations = new Map<string, any>();
for (const page of pages) for (const declaration of page.items) { if (declarations.has(declaration.id)) throw Error('Duplicate current declaration'); declarations.set(declaration.id, declaration); watch(`items/${declaration.id}.md`); }
watch('research/plan-spec.json');
const importsPath = 'research/math-imports.json', receipt = JSON.parse(watch(importsPath).toString());
// The existing scope API requires global identity/home indexes to detect alias
// theft and changed placement. Only the reached original bodies are diffed.
const originals = { items: markdownFiles(join(receipt.source_root, 'items')).map(readOriginalItemIdentity), pages: markdownFiles(join(receipt.source_root, 'library')).filter(path => !basename(path).startsWith('_')).map(path => ({ ...readItem(path), path: relative(receipt.source_root, path).split('\\').join('/') })) };
const scope = frontierMathematicsImportScope(root, run, { planning: false, receipt, originals });
const pins = new Map<string, any>(receipt.files.map((pin: any) => [pin.path, pin]));
const changed: any[] = [], problems: any[] = [];
for (const id of ['lem-affine-algebra-points-as-k-algebra-maps','lem-evaluation-ideal-is-maximal']) {
  const path = `items/${id}.md`, pin = pins.get(path);
  if (!scope.paths.has(path) || !scope.importedItems.has(id) || !pin || sha(watch(path)) !== pin.sha256) throw Error('Exact late-two item not in actual strict current scope/pin: ' + path);
  const original = resolve(receipt.source_root, path), current = sha(watch(original));
  if (current === pin.sha256) throw Error('Late-two expected finalized successor absent');
  changed.push({ path, pinned_sha256: pin.sha256, original_path: original, original_sha256: current });
}
if (pages.length !== 138 || declarations.size !== 442 || scope.paths.size !== 6629) throw Error('Actual full69/138/442/6629 frontier required');

const priorPath = opt('prior-review') ?? `research/${run}-frontier-append-2/original-rendering-maintenance.json`;
let prior: any = null, priorHash: string | null = null;
if (existsSync(resolve(root, priorPath))) { const bytes = watch(priorPath); prior = JSON.parse(bytes.toString()); priorHash = sha(bytes); if (prior.version !== 1 || prior.run !== run || prior.reviewer !== '/root' || prior.native_review !== false || prior.kind !== 'root-reviewed-original-rendering-successors') throw Error('Prior review is not genuine scoped Root authority'); }
const output = `research/${run}-owner-resolution/private-preparation/${tag}`, evidencePrefix = `research/${run}-original-successor-authored-evidence-${tag}`, futureReview = evidencePrefix + '/root-authored-scientific-and-use-review.json', pendingHash = 'ROOT_CREATE_AND_BIND_ACTUAL_AUTHORED_REVIEW_SHA256';
if (existsSync(resolve(root, output))) throw Error('Unique output tag required; refusing to overwrite earlier preparation');
const template: any = { version: 1, kind: 'root-reviewed-original-rendering-successors', run, reviewer: 'ROOT_AUTHOR_REQUIRED', native_review: false, reason: 'ROOT_REVIEW_EXACT_AUTHORED_FRONTIER_AND_SUPPLIER_SUCCESSORS', import_receipt_sha256: sha(watch(importsPath)), scope: { kind: 'authored-frontier', frontier }, entries: [], inputs: { [importsPath]: sha(watch(importsPath)), ...frontier } };
const extractions: any[] = [], scienceCandidates: any[] = [], contextualCategoryDrift: any[] = [];
const v2Ids = new Set(['lem-affine-algebra-points-as-k-algebra-maps','lem-evaluation-ideal-is-maximal']);
const affected = (id: string) => { const seen = new Set<string>(), queue = [id]; for (let i = 0; i < queue.length; i++) if (!seen.has(queue[i])) { seen.add(queue[i]); queue.push(...scope.consumers.get(queue[i]) ?? []); } return [...seen].filter(id => scope.owned.has(id)).sort(); };
for (const row of changed) {
  if (/^library\/[^/]+\/_category\.md$/.test(row.path)) { contextualCategoryDrift.push({ ...row, kind: 'category-context-drift', item_authority_required: false, protocol: 'Existing physics-imports.mjs validates category library/domain projection before item-original hash checks; separate exact catalogue science review remains evidence, not an item receipt.' }); continue; }
  const inputsBeforeEntry = { ...template.inputs };
  try {
    if (!/^items\/[a-z]+-[a-z0-9-]+\.md$/.test(row.path) || row.original_path !== resolve(receipt.source_root, row.path)) throw Error('Unsupported non-item drift or moved original placement');
    const before = watch(row.path), after = watch(row.original_path), metadata = parse(after), id = metadata.id, locator = metadata.verification?.repair;
    if (row.path !== `items/${id}.md` || metadata.status !== 'published' || typeof locator !== 'string' || !/^research\//.test(locator) || locator.split('/').includes('..')) throw Error('Missing finalized published repair identity/locator');
    const nativePath = resolve(receipt.source_root, locator), native = JSON.parse(watch(nativePath).toString()), authentication = recordedPublishedRepair(receipt.source_root, id, after.toString(), locator);
    if (!authentication.ok) throw Error('Main repair authentication: ' + authentication.reason);
    if (native.before_raw_sha256 !== row.pinned_sha256 || !watch(resolve(receipt.source_root, native.before_file)).equals(before)) throw Error('Before archive does not equal immutable physics pin');
    const adjudicationPath = resolve(receipt.source_root, native.adjudication_file), adjudicationBytes = watch(adjudicationPath), adjudication = JSON.parse(adjudicationBytes.toString()), layout = native.proof_layout;
    if (sha(adjudicationBytes) !== native.adjudication_sha256 || adjudication.id !== id || adjudication.changed !== true || adjudication.mathematical_meaning_preserved !== true || !adjudication.findings?.some((f: any) => f.verdict === 'confirmed' && f.status === 'repaired') || layout?.exit_code !== 0 || layout.content_sha256 !== native.content_sha256 || !Array.isArray(layout.command) || !layout.command.includes(`items/${id}.md`) || !layout.command.includes('tools/proof-layout.mjs') || !/^proof-layout: 1 items, \d+ steps, 0 defects(?:\s|$)/m.test(layout.output ?? '') || !Number.isFinite(Date.parse(layout.checked_at)) || Date.parse(layout.checked_at) > Date.parse(native.recorded_at)) throw Error('Frozen adjudication/current recorded proof-layout evidence invalid');
    const claimsPath = join(receipt.source_root, `research/${native.run}-step3-published-claims.jsonl`), claimRows = regularBytes(claimsPath).toString().split('\n').filter(Boolean).filter(line => JSON.parse(line).id === id);
    if (claimRows.length !== 1 || Date.parse(layout.checked_at) < Date.parse(JSON.parse(claimRows[0]).claimed_at)) throw Error('Ownership row or layout/claim order invalid');
    const ledgerPath = join(receipt.source_root, 'research/published-consumer-supplier-ledger.md'), ledger = regularBytes(ledgerPath).toString(), begin = `<!-- local-published-repair:${native.ledger_marker}:begin -->`, end = `<!-- local-published-repair:${native.ledger_marker}:end -->`;
    if (ledger.split(begin).length !== 2 || ledger.split(end).length !== 2) throw Error('Ambiguous published ledger block');
    const block = ledger.split(begin)[1].split(end)[0]; if (sha(block) !== native.ledger_sha256) throw Error('Published ledger block hash mismatch');
    const isV2 = v2Ids.has(id);
    const changes = isV2 ? originalPresentationChanges(before, after) : originalRenderingChanges(before, after); // Exact late-two opt in; never normalize failed legacy extraction.
    if (!equal(Object.keys(changes.verification.after ?? {}).sort(), ['precheck', 'repair']) || changes.verification.after.precheck !== (isV2 && metadata.kind === 'definition' ? 'n/a' : 'pass') || changes.verification.after.repair !== locator) throw Error('Unsupported verification transition');
    if (!isV2 && (changes.remarks || changes.steps.some((s: any) => s.kind === 'equivalent-presentation')) && (adjudication.proof_independent !== true || adjudication.diagram_mathematics_corrected !== false)) throw Error('Required diagram-independence evidence absent');
    const entry: any = { ...row, repair_receipt: { path: nativePath, sha256: sha(watch(nativePath)) }, ownership_evidence: { path: `${evidencePrefix}/${id}.ownership.json`, sha256: sha(claimRows[0] + '\n') }, ledger_evidence: { path: `${evidencePrefix}/${id}.ledger.md`, sha256: sha(block) }, changes, scientific_review: { statements: 'identical', facts: changes.fact_reference_labels?.length ? 'reference-labels-only' : 'identical', hypotheses: 'identical', proof: 'equivalent-presentation', new_premises: false, new_results: false, reason: 'ROOT_REVIEW_OR_EXPLICITLY_REUSE_BYTE_IDENTICAL_SCIENTIFIC_REVIEW', reading_limits: 'ROOT_RECORD_ACTUAL_SCIENTIFIC_REVIEW_AND_CURRENT_USE_READING_LIMITS' }, proof_step_reviews: Object.fromEntries(changes.steps.filter((s: any) => s.kind === 'equivalent-presentation').map((s: any) => [s.label, 'ROOT_REVIEW_OR_EXPLICITLY_REUSE_THIS_EXACT_STEP_REVIEW'])), evidence: [{ path: futureReview, sha256: pendingHash }], consumers: affected(id).map(consumer => { const path = `items/${consumer}.md`; return { id: consumer, declaration_sha256: sha(JSON.stringify(declarations.get(consumer))), source_sha256: sha(watch(path)), decision: 'ROOT_REVIEW_REQUIRED', reason: 'ROOT_READ_THIS_CURRENT_AUTHORED_CONSUMER_AND_REVIEW_ACTUAL_SUPPLIER_USE' }; }) };
    if (isV2) { entry.presentation_version = 2; entry.presentation_reviews = changes.deltas.map((delta: any) => ({ delta_id: delta.id, delta_sha256: sha(JSON.stringify(delta)), reason: 'ROOT_DECISION_REQUIRED: bind exact scientific review of this individual presentation delta before approval.', reading_limits: 'ROOT_DECISION_REQUIRED: preserve actual reviewer reading extents and current authored consumer version limits.', evidence: [{ path: futureReview, sha256: pendingHash }], ...(delta.target ? { pinned_target: { path: `items/${delta.target}.md`, sha256: pins.get(`items/${delta.target}.md`)?.sha256 } } : {}) })); entry.scientific_review.statements = changes.review_classification.statements; entry.scientific_review.facts = changes.review_classification.facts; entry.scientific_review.proof = changes.review_classification.proof; entry.proof_step_reviews = {}; }
    if (!isV2 && changes.fact_reference_labels) entry.fact_reference_reviews = changes.fact_reference_labels.map((delta: any) => { const path = `items/${delta.target}.md`, pin = pins.get(path); if (!pin || !scope.importedItems.has(delta.target) || !scope.paths.has(path) || sha(watch(path)) !== pin.sha256) throw Error('Fact target outside authenticated reached pin context'); const target = parse(watch(path)); template.inputs[path] = pin.sha256; return { fact_label: delta.fact_label, reference_index: delta.reference_index, target: delta.target, pinned_target: { path, sha256: pin.sha256, title: target.title }, reason: 'ROOT_REVIEW_OR_EXPLICITLY_REUSE_THIS_EXACT_FACT_LABEL_REVIEW', reading_limits: 'ROOT_RECORD_ACTUAL_FACT_LABEL_REVIEW_LIMITS' }; });
    if (!isV2 && changes.terminal_source_heading) entry.terminal_source_heading_review = { kind: 'terminal-source-heading', step_label: changes.terminal_source_heading.step_label, reason: 'ROOT_REVIEW_OR_EXPLICITLY_REUSE_THIS_EXACT_TERMINAL_HEADING_REVIEW', reading_limits: 'ROOT_RECORD_ACTUAL_TERMINAL_HEADING_REVIEW_LIMITS' };
    const matches = prior?.entries?.filter((candidate: any) => candidate.path === row.path && candidate.pinned_sha256 === row.pinned_sha256 && candidate.original_sha256 === row.original_sha256 && candidate.repair_receipt?.sha256 === entry.repair_receipt.sha256 && equal(candidate.changes, changes)) ?? [];
    if (matches.length === 1) {
      const candidate = matches[0], refs = candidate.evidence ?? [];
      if (!refs.length || refs.some((ref: any) => sha(watch(ref.path)) !== ref.sha256)) throw Error('Prior scientific evidence changed; not reusable');
      scienceCandidates.push({ id, prior_authority: { path: priorPath, sha256: priorHash }, pinned_sha256: row.pinned_sha256, original_sha256: row.original_sha256, changes, scientific_review: candidate.scientific_review, proof_step_reviews: candidate.proof_step_reviews, fact_reference_reviews: candidate.fact_reference_reviews ?? [], terminal_source_heading_review: candidate.terminal_source_heading_review ?? null, evidence: refs, reuse_limit: 'Candidate for exact original-successor science only. Root must explicitly confirm/rebind; no prior consumer decision, current authored-use review, independent acceptance or native coverage is reused.' });
    }
    for (const [path, digest] of [[row.path, row.pinned_sha256], [row.original_path, row.original_sha256], [nativePath, entry.repair_receipt.sha256], [resolve(receipt.source_root, native.before_file), row.pinned_sha256], [adjudicationPath, native.adjudication_sha256], [entry.ownership_evidence.path, entry.ownership_evidence.sha256], [entry.ledger_evidence.path, entry.ledger_evidence.sha256], [futureReview, pendingHash], ...entry.consumers.map((c: any) => [`items/${c.id}.md`, c.source_sha256])]) template.inputs[path] = digest;
    template.entries.push(entry);
    extractions.push({ id, ownership_source: claimsPath, ownership_destination: entry.ownership_evidence.path, ownership_utf8: claimRows[0] + '\n', ledger_source: ledgerPath, ledger_marker: native.ledger_marker, ledger_destination: entry.ledger_evidence.path, ledger_utf8: block, repair_authentication: authentication, recorded_checks: native.local_checks, proof_layout: layout });
  } catch (error: any) { template.inputs = inputsBeforeEntry; problems.push({ ...row, reason: error.message, action: 'Report only; no guard expansion or source repair is authorized by this preparation.' }); }
}
// Unrelated ledger appends must not invalidate exact item extracts. Recheck each
// unique row/block instead of binding the whole mutable global ledger/claims.
for (const row of extractions) {
  const claims = regularBytes(row.ownership_source).toString().split('\n').filter(Boolean).filter(line => JSON.parse(line).id === row.id);
  const ledger = regularBytes(row.ledger_source).toString(), begin = `<!-- local-published-repair:${row.ledger_marker}:begin -->`, end = `<!-- local-published-repair:${row.ledger_marker}:end -->`;
  if (claims.length !== 1 || claims[0] + '\n' !== row.ownership_utf8 || ledger.split(begin).length !== 2 || ledger.split(end).length !== 2 || ledger.split(begin)[1].split(end)[0] !== row.ledger_utf8) throw Error('Exact main ownership/ledger evidence changed during extraction');
}
for (const [path, digest] of watched) if (sha(regularBytes(path)) !== digest) throw Error('Bound input changed during extraction: ' + path);
const boundaryAfter = assertDrained();
if (!equal(Object.keys(template.scope.frontier).sort(), manifests.sort())) throw Error('Manifest inventory changed');
const nowNames = readdirSync(join(root, 'research')).filter(name => new RegExp(`^${run}-batch-[1-9][0-9]*\\.pages\\.json$`).test(name)).sort();
if (!equal(nowNames, names.slice().sort())) throw Error('Frontier changed during extraction');
if (template.entries.length !== 2 || contextualCategoryDrift.length !== 0 || template.entries.filter((entry: any) => entry.presentation_version === 2).length !== 2 || problems.length !== 0) throw Error('Exact finalized2 item/V2 boundary required: '+JSON.stringify({items:template.entries.length,v2:template.entries.filter((entry: any) => entry.presentation_version === 2).length,categories:contextualCategoryDrift.length,problems}));
mkdirSync(resolve(root, output)); // unique new directory only; never creates production evidence destinations.
const save = (name: string, value: any) => writeFileSync(join(root, output, name), JSON.stringify(value, null, 2) + '\n', { flag: 'wx' });
save('authored-maintenance-template.json', template);
save('authored-maintenance-extractions.json', { fact_only: true, proposed_production_authority: `research/${run}-original-rendering-maintenance.json`, no_destinations_written: true, future_root_review: { path: futureReview, sha256: pendingHash }, entries: extractions });
save('prior-scientific-review-candidates.json', { fact_only: true, consumers_reused: false, candidates: scienceCandidates });
save('authored-maintenance-status.json', { fact_only: true, prepared_at: new Date().toISOString(), preparation_script_sha256: sha(regularBytes(process.argv[1])), run, manifest_count: names.length, page_count: pages.length, authored_item_count: declarations.size, reached_paths: scope.paths.size, changed_originals: changed, supported_entries: template.entries.length, legacy_entries: template.entries.filter((entry: any) => !entry.presentation_version).length, presentation_v2_entries: template.entries.filter((entry: any) => entry.presentation_version === 2).length, contextual_category_drift: contextualCategoryDrift, authority_needed: changed.length > 0, problems, complete_facts: !problems.length, authoritative: false, independently_accepted: false, boundaryBefore, boundaryAfter, observed_inputs: Object.fromEntries(watched), next: 'Root reviews exact current authored uses, explicitly chooses any byte-identical prior scientific review, creates immutable evidence and binds separate authored authority; then normal fresh native owner receipt and gates. No planning history or pins are replaced.' });
process.stdout.write(JSON.stringify({ output, manifests: names.length, changed: changed.length, supported: template.entries.length, problems: problems.length, authority_written: false }) + '\n');
if (problems.length) process.exitCode = 1;
