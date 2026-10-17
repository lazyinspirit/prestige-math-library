from pathlib import Path
import re,json
ROOT=Path('/home/lazyinspirit/Projects/prestige-math-library')
OUT=Path(__file__).resolve().parent
P=ROOT/'tools/step3-scope.mjs'
archive=OUT/'step3-scope.original.mjs'
if not archive.exists(): archive.write_bytes(P.read_bytes())
raw=archive.read_bytes(); source=raw.decode()
def between(start,end,begin=0):
 a=source.index(start,begin); b=source.index(end,a); return source[a:b]
stamp_begin=source.index("if (command === 'stamp') {")
check_begin=source.index("if (command === 'check') {")
stamp_assembly=between('    const expected = new Map();','    for (const decision of doc.decisions) {',stamp_begin)
check_assembly=between('      const owed = [];','      const path = decisionsPath(group.label);',check_begin)
risk_helper=between('    const riskReviewOnlyDelta = (target, before, current) => {','\n\n    for (const group of step3Adjudicators',check_begin)
comparison=between("              const pre = readJson(hashPath(target.batch, target.stabilized ? 'post' : 'pre')", "              if (decision.verdict === 'accepted_repair'",check_begin)
# Exact relative tool imports become absolute file URLs; import bodies unchanged.
imports=[]
def absolute_import(m):
 rel=m.group(2); absolute=(P.parent/rel).resolve().as_uri(); imports.append({'before':m.group(0),'after':m.group(1)+absolute+m.group(3)})
 return imports[-1]['after']
transformed=re.sub(r"(^import .*? from ')(\./[^']+)(';)$",absolute_import,source,flags=re.M)
assert len(imports)==18, len(imports)
# Every canonical CLI branch remains present but is unreachable from this copy.
command_line='const command = argv[0];'
command_guard="""
if (command !== 'owner-evidence-inventory') {
  throw Error('Research copy supports only owner-evidence-inventory; native CLI branches are disabled');
}
if (!argv.includes('--root')) throw Error('Explicit --root is required for the isolated research copy');
"""
assert transformed.count(command_line)==1
transformed=transformed.replace(command_line,command_line+command_guard,1)
# Fixed repository/run guard is intentionally research-local, not an engine API.
root_line="const run = option('run');"
root_guard="\nif (ROOT !== "+json.dumps(str(ROOT))+" || run !== 'numerical-optimization-dynamics-2026-10-16') throw Error('This prepared copy is restricted to the requested repository/run');\n"
transformed=transformed.replace(root_line,root_line+root_guard,1)
body="""
// ROOT-ONLY read-only inventory: preparation does not execute this block.
// All hash generation below occurs only if/when root executes this copy.
if (command === 'owner-evidence-inventory') {
  const assignment = groups();
  const manifests = manifestItems();
  const pages = manifestPages();
  const phase = 'adjudicate';
  const scopes = {};
  const ownableSubjects = new Set();
  const contractsByBatch = new Map();
__RISK_HELPER__
  const selectedGroups = step3Adjudicators(ROOT, run, assignment.rows);
  const inventory = { version: 1, run, root: ROOT,
    mode: 'read-only-owner-evidence-inventory',
    warning: 'Diagnostic inputs only; no policy validation, mathematical acceptance, stamps or canonical writes',
    expected_batch_ids: Array.from({length: 107}, (_, i) => String(i + 1)),
    actual_batch_ids: [...new Set(selectedGroups.flatMap(group => group.covers))],
    group_count: selectedGroups.length,
    target_grammar: 'check_target is exact adjudicate/check assembly; stamp_target is separately preserved exact stamp assembly',
    groups: [] };
  for (const group of selectedGroups) {
__STAMP_ASSEMBLY__
__CHECK_ASSEMBLY__
    const checkExpected = new Map(owed.map(row => [row.obligation, row]));
    const groupOutput = { group: group.label, covers: group.covers,
      decision_path: path, scopes: group.covers.map(batch => scopePath(batch)),
      targets: [], extra_decisions: [] };
    for (const [obligation, target] of checkExpected) {
      const stampTarget = expected.get(obligation);
      const decisions = doc.decisions.filter(decision => decision.obligation === obligation);
      const row = { obligation, target, check_target: target, stamp_target: stampTarget,
        check_target_sha256: hashValue(target), stamp_target_sha256: hashValue(stampTarget),
        target_shapes_equal: hashValue(target) === hashValue(stampTarget),
        decisions: [] };
      for (const decision of decisions) {
        const detail = { decision };
        try {
          const batch = target?.batch ?? group.covers.find(candidate =>
            (manifests[candidate] ?? []).includes(currentItemId(decision.id, candidate))
            || (pages[candidate] ?? []).some(page => page.id === decision.id));
          const carrier = currentDecisionCarrier(decision, target, live.get(batch));
          const currentSha = carrier === undefined ? null : hashValue(carrier);
          detail.resolved_batch = batch ?? null;
          detail.current_carrier = carrier ?? null;
          detail.current_carrier_sha256 = currentSha;
          detail.subject_hash_matches_current = currentSha !== null && decision.subject_sha256 === currentSha;
          detail.current_equals_target_observation = currentSha !== null && Boolean(target?.observed_sha256)
            && currentSha === target.observed_sha256;
          detail.prior_applied_comparison_candidate_only = detail.current_equals_target_observation;
          // No assertion that candidate passes other priorAppliedRepair predicates.
          if (target && !target.direct && ['touched', 'page'].includes(target.route)) {
__COMPARISON__
            detail.native_pre_post = { pre_path: hashPath(target.batch, target.stabilized ? 'post' : 'pre'),
              post_path: hashPath(target.batch, target.stabilized ? 'pre-3a' : 'post'),
              pre_carrier: preValue ?? null, post_carrier: postValue ?? null,
              pre_carrier_sha256: hashValue(preValue), post_carrier_sha256: hashValue(postValue),
              current_equals_pre: currentSha === hashValue(preValue),
              current_equals_post: currentSha === hashValue(postValue) };
            if (decision.verdict === 'accepted_repair') {
              const riskOnly = riskReviewOnlyDelta(target, postValue, carrier);
              detail.accepted_repair_comparison = { current_equals_native_post: currentSha === hashValue(postValue),
                native_risk_review_only_delta: riskOnly,
                differs_beyond_native_risk_review_exception: currentSha !== hashValue(postValue) && !riskOnly,
                note: 'Any separate supported source-identical continuity remains root-owned; this inventory does not approve or reject it' };
            }
          }
        } catch (cause) { detail.inventory_error = String(cause?.message ?? cause); }
        row.decisions.push(detail);
      }
      groupOutput.targets.push(row);
    }
    groupOutput.extra_decisions = doc.decisions.filter(decision => !checkExpected.has(decision.obligation));
    inventory.groups.push(groupOutput);
  }
  inventory.summary = {
    owed_targets: inventory.groups.reduce((n, group) => n + group.targets.length, 0),
    targets_without_decisions: inventory.groups.flatMap(group => group.targets.filter(row => !row.decisions.length).map(row => ({group: group.group, obligation: row.obligation}))),
    target_shape_differences: inventory.groups.flatMap(group => group.targets.filter(row => !row.target_shapes_equal).map(row => ({group: group.group, obligation: row.obligation}))),
    observed_equality_candidates: inventory.groups.flatMap(group => group.targets.flatMap(row => row.decisions.filter(detail => detail.current_equals_target_observation).map(detail => ({group: group.group, obligation: row.obligation, id: detail.decision.id})))),
    accepted_post_differences_beyond_risk_exception: inventory.groups.flatMap(group => group.targets.flatMap(row => row.decisions.filter(detail => detail.accepted_repair_comparison?.differs_beyond_native_risk_review_exception).map(detail => ({group: group.group, obligation: row.obligation, id: detail.decision.id})))),
    inventory_errors: inventory.groups.flatMap(group => group.targets.flatMap(row => row.decisions.filter(detail => detail.inventory_error).map(detail => ({group: group.group, obligation: row.obligation, error: detail.inventory_error}))))
  };
  console.log(JSON.stringify(inventory, null, 2));
  process.exit(0);
}
throw Error('Unreachable research inventory command');
"""
for key,value in [('__STAMP_ASSEMBLY__',stamp_assembly),('__CHECK_ASSEMBLY__',check_assembly),('__RISK_HELPER__',risk_helper),('__COMPARISON__',comparison)]:
 assert body.count(key)==1; body=body.replace(key,value)
terminal='fail(`step3-scope: unknown command ${JSON.stringify(command)}`);'
assert transformed.count(terminal)==1
transformed=transformed.replace(terminal,body)
(OUT/'owner-evidence-inventory.mjs').write_text(transformed)
(OUT/'exact-native-fragments.json').write_text(json.dumps({'source_path':str(P),'imports':imports,'stamp_expected_assembly':stamp_assembly,'check_owed_assembly':check_assembly,'risk_review_only_helper':risk_helper,'pre_post_carrier_assembly':comparison},indent=2)+'\n')
(OUT/'TRANSFORM.json').write_text(json.dumps({'version':1,'run':'numerical-optimization-dynamics-2026-10-16','original_source':'step3-scope.original.mjs','original_bytes_preserved':True,'inventory_executed':False,'hashes_generated':False,'canonical_changes':False,'transformations':['18 relative native tool import specifiers resolved to their actual absolute file URLs','Inventory-only command guard and explicit-root requirement inserted after command declaration','Exact requested repository/run restriction inserted after run declaration','Only native terminal unknown-command fail replaced by inventory block; all existing command branches remain unreachable','Inventory block copies exact native stamp assembly, check owed assembly, riskReviewOnlyDelta and pre/post carrier projection; adds only read-only diagnostic projection/output'],'native_functions_unchanged':['liveFingerprints','currentDecisionCarrier','stabilizedObligations','directObligations','manifestItems','manifestPages','manifestMetadata','currentOwnerContract','producerCarrier','pageCarrier','currentItemId','hashValue','canonical']},indent=2)+'\n')
print(OUT)
