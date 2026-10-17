// RESEARCH PROPOSAL ONLY. Not executed by its author. Run only by root after
// genuine repairs/claims are stable, before the actual Step-6 preparation.
// Writes reviewable runtime candidates, never ledger, scope, index or HEAD.
import { readFileSync, writeFileSync, mkdirSync, existsSync, lstatSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { createHash } from 'node:crypto';
import { runScope } from '../../tools/step6-lib.mjs';
import { preflightCloseoutScope, treeEntries, indexEntries, git, textGit } from '../../tools/run-commit-scope.mjs';
import { fragmentRecords, recordSignature, validateFragment, composeFragment, decodeLedger } from '../../tools/step6-ledger-fragment.mjs';

const args = process.argv.slice(2), flag = name => args.includes(name);
const option = name => { const i = args.indexOf(name); if (i < 0 || !args[i+1]) throw Error(`required ${name}`); return args[i+1]; };
if (!flag('--root-build-runtime-candidate') || !flag('--acknowledge-stable-repairs-and-claims'))
  throw Error('Research proposal: root must explicitly acknowledge the genuine stable repair/claim boundary; nothing has been written.');
const root = resolve(option('--repo')), run = option('--run');
if (!/^[a-zA-Z0-9][a-zA-Z0-9_-]*$/.test(run)) throw Error('invalid run');
const output = resolve(option('--runtime-output'));
const authorizationFile = option('--authorization-file'), extraEvidenceFile = option('--evidence-list');
const ledger = 'research/published-consumer-supplier-ledger.md';
const authorityPath = `research/${run}-step6-published-ledger-addition-fragment.json`;
const ownershipPath = `research/${run}-step6-published-ledger-fragment-owned-inputs.json`;
const policyPath = `research/${run}-closeout-scope.json`;
const claimsPath = `research/${run}-step3-published-claims.jsonl`;
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const bytes = path => readFileSync(join(root, path));
const json = path => JSON.parse(decodeLedger(bytes(path)));
const encode = value => Buffer.from(JSON.stringify(value, null, 2) + '\n');
const safeResearch = path => {
  if (typeof path !== 'string' || !path.startsWith(`research/${run}-`) || path.includes('\\')
    || path.split('/').some(part => !part || part === '.' || part === '..')) throw Error(`invalid run research evidence: ${path}`);
  const full = resolve(root, path); let at = root;
  for (const part of path.split('/')) { at = join(at, part); if (lstatSync(at).isSymbolicLink()) throw Error('symlink evidence'); }
  if (!lstatSync(full).isFile()) throw Error('nonregular evidence');
  return path;
};
if (output === root || output.startsWith(root + '/research/') || output.startsWith(root + '/items/')
  || output.startsWith(root + '/library/') || output.startsWith(root + '/tools/')) throw Error('output must be a separate runtime proposal directory');
for (const path of [authorityPath, ownershipPath]) if (existsSync(join(root, path)))
  throw Error('Do not reseal/rewrite existing fragment history; retain its original authority for retry.');
const state = json(`.autopilot/${run}/state.json`);
if (state.run !== run || state.paused !== true
  || Object.values(state.dispatches ?? {}).some(row => row.startedAt && !row.endedAt))
  throw Error('requires actual paused/drained run; this script never pauses or controls it');
const authorization = decodeLedger(bytes(safeResearch(authorizationFile))).trim();
if (authorization.length < 20) throw Error('short actual root authority');
const policyBytes = bytes(policyPath), policy = JSON.parse(decodeLedger(policyBytes));
if (policy.shared_fragments?.length) throw Error('existing authority must not be replaced');
if (textGit(root, ['symbolic-ref', '--short', 'HEAD']) !== 'main') throw Error('requires main; no checkout');
// Ordinary policy preflight closes every published claim by an authentic repair
// or valid unchanged closure, including any separately resolved history bridge.
// It supplies no mathematical acceptance and is not a substitute for Step6 gates.
preflightCloseoutScope(root, run, `research/${run}-dispatch/tool-step6-finalize-v3.result.json`);
const scope = runScope(run, root), claimsBytes = bytes(claimsPath);
const claims = decodeLedger(claimsBytes).split(/\r?\n/).filter(Boolean).map(JSON.parse);
const ids = new Set([...scope.items.map(row => row.id), ...scope.pages.map(row => row.id),
  ...claims.map(row => row.id), ...policy.additional_paths.flatMap(row => /^items\/([^/]+)\.md$/.exec(row.path)?.slice(1) ?? [])]);
const workingBytes = bytes(ledger), working = decodeLedger(workingBytes);
const beforeHead = textGit(root, ['rev-parse', 'HEAD']);
const head = treeEntries(root).find(row => row.path === ledger), index = indexEntries(root).find(row => row.path === ledger);
if (!head || !index || head.mode !== '100644' || index.mode !== '100644' || index.flags !== '0')
  throw Error('fragment requires existing ordinary100644 HEAD/index, stage0 and no unsupported flags');
const headText = decodeLedger(git(root, ['cat-file', 'blob', head.oid]));
const indexText = decodeLedger(git(root, ['cat-file', 'blob', index.oid]));
const owned = text => fragmentRecords(text, run, ids).filter(row => row.owned).map(row => recordSignature(row.text));
const base = owned(headText), target = owned(working), retained = target.filter(row => base.includes(row));
if (JSON.stringify(retained) !== JSON.stringify(base) || target.length <= retained.length)
  throw Error('NOT addition-only: restore missing/reordered historical owned records outside every repair-marker interior first. No automatic reconciliation or authority is written.');
const manifests = [...new Set(scope.pages.map(row => `research/${run}-batch-${row.batch}.pages.json`))].sort();
const extra = json(safeResearch(extraEvidenceFile));
if (!Array.isArray(extra) || !extra.length) throw Error('actual nonempty native evidence list required');
const evidencePaths = [...new Set([authorizationFile, extraEvidenceFile, scope.ledger, claimsPath, ...manifests, ...extra])].sort().map(safeResearch);
const evidenceBytes = new Map(evidencePaths.map(path => [path, bytes(path)]));
const ownership = { version: 1, run, kind: 'observed-fragment-owned-inputs', recorded_at: new Date().toISOString(),
  actual_owned_ids: [...ids].sort(), selected_page_ids: scope.pages.map(row=>row.id).sort(),
  selected_item_ids: scope.items.map(row=>row.id).sort(), claim_ids: claims.map(row=>row.id).sort(),
  scope_ledger: scope.ledger, manifests, before_head: beforeHead, before_head_blob: head.oid, before_index_blob: index.oid,
  note: 'Record-level ownership only; neither reachability nor supplier mention creates commit authority. Ordinary repair/claim closure remains mandatory.' };
const ownershipBytes = encode(ownership);
const spec = { version: 1, kind: 'published-ledger-addition-fragment', run, path: ledger,
  authorized_by: 'owner', authorization, base_owned_records: base, target_owned_records: target,
  evidence: [...evidencePaths.map(path => ({path, sha256: hash(evidenceBytes.get(path))})),
    {path: ownershipPath, sha256: hash(ownershipBytes)}] };
// Actual native pure fragment guards, executed only in this later root run.
validateFragment(spec, run, ids, working);
const composedHead = composeFragment(headText, spec, run, ids);
const composedIndex = composeFragment(indexText, spec, run, ids);
const specBytes = encode(spec), nextPolicy = {...policy,
  shared_fragments: [{path: ledger, authority: authorityPath, sha256: hash(specBytes)}]};
// Detect changes during candidate construction. Ordinary later native preparation
// and transaction guards still bind/recheck actual inputs and foreign residuals.
if (!bytes(ledger).equals(workingBytes) || !bytes(policyPath).equals(policyBytes)
  || !bytes(claimsPath).equals(claimsBytes) || textGit(root, ['rev-parse','HEAD']) !== beforeHead)
  throw Error('input changed while constructing proposal');
for (const [path, old] of evidenceBytes) if (!bytes(path).equals(old)) throw Error(`evidence changed: ${path}`);
const nowIndex = indexEntries(root).find(row => row.path === ledger);
if (JSON.stringify(nowIndex) !== JSON.stringify(index)) throw Error('index carrier changed while constructing proposal');
mkdirSync(output, {recursive:true});
const writeNew = (name, value) => writeFileSync(join(output,name),value,{flag:'wx'});
writeNew('authority.proposed.json',specBytes);
writeNew('ownership-inputs.proposed.json',ownershipBytes);
writeNew('closeout-scope.proposed.json',encode(nextPolicy));
writeNew('HEAD-composition.preview.md',composedHead.text);
writeNew('index-composition.preview.md',composedIndex.text);
writeNew('application-plan.json',encode({research_only_runtime_candidate:true, run,
  canonical_ledger_changed:false, scope_changed:false, authority_sealed:false,
  proposed_copies:[{from:'ownership-inputs.proposed.json',to:ownershipPath},
    {from:'authority.proposed.json',to:authorityPath},{from:'closeout-scope.proposed.json',to:policyPath}],
  guards:{ledger_raw_sha256:hash(workingBytes),claims_raw_sha256:hash(claimsBytes),policy_before_raw_sha256:hash(policyBytes),
    before_head:beforeHead,before_head_blob:head.oid,before_index_blob:index.oid},
  instructions:'Root reviews exact candidates, then promotes only with unchanged actual guarded inputs and stable claim closure. Do not copy HEAD/index previews to working ledger or stage the full ledger. Seal authority/evidence/scope before the genuine metadata/render pass and complete native Step6 battery. Changed relevant inputs require fresh preparation; never overwrite original authority for retry.'}));
console.log(JSON.stringify({runtime_candidate_only:output, owned_ids:ids.size, base_owned_records:base.length,
  target_owned_records:target.length, additions:target.length-base.length}));
