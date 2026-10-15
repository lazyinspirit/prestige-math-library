from pathlib import Path
import difflib,json
base=Path('research/bayesian-computational-statistics-62-owner-step5-scoped-library-read');base.mkdir(exist_ok=True)
p=Path('tools/step5-rounds.mjs');before=p.read_text();after=before
start=after.index('export function readLibraryItems(repo) {');end=after.index('\nexport function discoverDownstream',start)
old=after[start:end]
new=old.replace('export function readLibraryItems(repo) {','export function readLibraryItems(repo, { run = null, requiredIds = [] } = {}) {').replace("  return readdirSync(join(repo, 'items')).filter((name) => name.endsWith('.md')).sort().map((name) => {", "  const invalid = [], items = [];\n  for (const name of readdirSync(join(repo, 'items')).filter(name => name.endsWith('.md')).sort()) {\n    try {")
new=new.replace('    return { id, deps, references, body_links:', '    items.push({ id, deps, references, body_links:').replace('statement_sha256: statementHash(text) };\n  });\n}', '''statement_sha256: statementHash(text) });
    } catch (error) {
      if (!run || (error.code !== 'ENOENT' && error.transientItemRead !== true)) throw error;
      invalid.push({ id: name.slice(0, -3), error });
    }
  }
  if (!invalid.length) return items;
  const context = scopedInventoryContext(repo, run, items, requiredIds);
  const observations = [];
  for (const row of invalid) {
    // The strict closure is checked first, so an active foreign writer never
    // licenses omission of a real current-run item, alias target or supplier.
    if (context.required.has(row.id)) throw row.error;
    const owner = activeForeignItemOwner(repo, run, row.id);
    if (!owner) throw row.error;
    const independent = (owner.item.deps ?? []).every(raw => !context.frontier.has(context.resolve(raw)));
    requireValue(independent, `incomplete foreign item is a current-frontier consumer: ${row.id}`);
    observations.push({ id: row.id, disposition: 'observed-excluded-not-passed',
      reason: 'Unavailable metadata belongs to an exact independently active foreign author; it is outside the current frontier and required dependency closure.',
      read_error: row.error.message, foreign_owner: owner });
  }
  const record = { version: 1, kind: 'outside-inflight-library-observation', run,
    mathematical_review: false, certification_coverage: false, observations };
  const directory = join(repo, 'research', `${run}-step5-v2`, 'outside-inflight-observations');
  mkdirSync(directory, { recursive: true });
  const target = join(directory, `${digest(record)}.json`), bytes = JSON.stringify(record, null, 2) + '\\n';
  if (existsSync(target)) requireValue(readFileSync(target, 'utf8') === bytes, 'outside observation archive conflict');
  else writeFileSync(target, bytes, { flag: 'wx' });
  Object.defineProperty(items, 'outside_observations', { value: record, enumerable: false });
  return items;
}''')
helper=r'''// Explicit run context enables only a narrow independently-active foreign
// draft exclusion. No process-global run or filename-prefix ownership exists.
function scopedInventoryContext(repo, run, items, requiredIds) {
  requireValue(/^[A-Za-z0-9._-]+$/.test(run), 'invalid scoped inventory run');
  const dir = join(repo, 'research', `${run}-step5-v2`), frontierPath = join(dir, 'frontier.json');
  const frontier = new Set();
  if (existsSync(frontierPath)) {
    const saved = validateFrontier(JSON.parse(readFileSync(frontierPath, 'utf8')));
    requireValue(saved.run === run, 'scoped inventory frontier run mismatch');
    for (const id of saved.ids) frontier.add(id);
  }
  // Current manifest additions remain strict alongside the original frontier.
  const manifests = readdirSync(join(repo, 'research')).filter(name =>
    name.startsWith(`${run}-batch-`) && /^\d+\.pages\.json$/.test(name.slice(`${run}-batch-`.length)));
  requireValue(manifests.length > 0, 'scoped inventory requires current run manifests');
  for (const name of manifests) for (const page of JSON.parse(readFileSync(join(repo, 'research', name), 'utf8')))
    for (const item of page.items) frontier.add(item.id);
  const byId = new Map(items.map(item => [item.id, item])), aliases = new Map();
  const initial = join(dir, 'initial-1.json');
  if (existsSync(initial)) for (const [alias, id] of Object.entries(JSON.parse(readFileSync(initial, 'utf8')).before_aliases ?? {}))
    aliases.set(alias, new Set([id]));
  for (const item of items) for (const alias of item.aliases ?? []) {
    if (!aliases.has(alias)) aliases.set(alias, new Set());
    aliases.get(alias).add(item.id);
  }
  const resolve = raw => {
    if (byId.has(raw) || frontier.has(raw)) return raw;
    const targets = aliases.get(raw);requireValue(!targets || targets.size === 1, `ambiguous required alias: ${raw}`);
    return targets ? [...targets][0] : raw;
  };
  const required = new Set([...frontier, ...requiredIds].map(resolve));
  for (const id of required) {
    const item = byId.get(id);
    requireValue(item, `required current-run item or supplier is unreadable/missing: ${id}`);
    // readLibraryItems.deps includes declared deps/justified_by/forward_refs,
    // preserving the existing required-context convention rather than pruning it.
    for (const raw of item.deps ?? []) required.add(resolve(raw));
  }
  return { frontier, required, resolve };
}
function activeForeignItemOwner(repo, run, id) {
  const runtime = join(repo, '.autopilot');if (!existsSync(runtime)) return null;
  const matches = [];
  for (const entry of readdirSync(runtime, { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name === run) continue;
    const statePath = join(runtime, entry.name, 'state.json');if (!existsSync(statePath)) continue;
    let state;try { state = JSON.parse(readFileSync(statePath, 'utf8')); } catch { continue; }
    if (state.run !== entry.name || state.stage !== '1-scaffold' || state.finishedAt) continue;
    for (const [key, dispatch] of Object.entries(state.dispatches ?? {})) {
      if (dispatch.stage !== '1-scaffold' || dispatch.role !== 'beta' || !dispatch.startedAt || dispatch.endedAt) continue;
      for (const batch of dispatch.covers ?? []) {
        if (!/^\d+$/.test(String(batch))) continue;
        const manifest = join('research', `${entry.name}-batch-${batch}.pages.json`), full = join(repo, manifest);
        if (!existsSync(full)) continue;
        let pages, bytes;try { bytes = readFileSync(full, 'utf8');pages = JSON.parse(bytes); } catch { continue; }
        for (const page of pages) for (const item of page.items ?? []) if (item.id === id)
          matches.push({ run: entry.name, batch: String(batch), manifest, manifest_sha256: digest(bytes),
            native_state: join('.autopilot', entry.name, 'state.json'), dispatch_key: key,
            dispatch_started_at: dispatch.startedAt, native_stage: state.stage, item });
      }
    }
  }
  return matches.length === 1 ? matches[0] : null;
}

'''
after=after[:start]+helper+new+after[end:];files={'tools/step5-rounds.mjs':(before,after)}
p=Path('tools/step5-workflow.mjs');before=p.read_text();after=before.replace('const hashes = root =>','const hashes = (root, run) =>').replace('const statementHashes = root =>','const statementHashes = (root, run) =>').replace('const rawHashes=root=>','const rawHashes=(root,run)=>').replace('function libraryIdentity(root) {','function libraryIdentity(root,run) {').replace('export function reviewContextHashes(root,ids) {','export function reviewContextHashes(root,ids,{run=null}={}) {');after=after.replace('readLibraryItems(root)','readLibraryItems(root,{run})').replace('hashes(root)','hashes(root,run)').replace('statementHashes(root)','statementHashes(root,run)').replace('rawHashes(root)','rawHashes(root,run)').replace('libraryIdentity(root)','libraryIdentity(root,run)').replace('reviewContextHashes(root,ids)','reviewContextHashes(root,ids,{run})');after=after.replace('const identity=libraryIdentity(root,run),itemById=', 'const identity=libraryIdentity(root,pack.run),itemById=')
# The review helper has explicit selected roots even for outside assigned consumers.
after=after.replace('export function reviewContextHashes(root,ids,{run=null}={}) {\n  const items=readLibraryItems(root,{run}),','export function reviewContextHashes(root,ids,{run=null}={}) {\n  const items=readLibraryItems(root,{run,requiredIds:ids}),')
files[str(p)]=(before,after)
p=Path('tools/consumer-maintenance.mjs');before=p.read_text();after=before.replace('readLibraryItems(root)','readLibraryItems(root,{run})');after=after.replace("const items=readLibraryItems(root,{run}),eligible=frontier(root,run,items),ids=[...new Set(entries.map(([,o])=>o.id))].sort();", "const ids=[...new Set(entries.map(([,o])=>o.id))].sort();\n  const items=readLibraryItems(root,{run,requiredIds:ids}),eligible=frontier(root,run,items);");after=after.replace('const items=readLibraryItems(root,{run}),current=new Map(items.map(i=>[i.id,i]));','const items=readLibraryItems(root,{run,requiredIds:pack.ids}),current=new Map(items.map(i=>[i.id,i]));');after=after.replace("guard_sha256:itemHashGuard(readFileSync(join(root,'items',`${i.id}.md`),'utf8'))",'guard_sha256:i.guard_sha256');files[str(p)]=(before,after)
patch=''
for p,(old,new) in files.items():
 (base/('before-'+Path(p).name)).write_text(old);(base/('proposed-'+Path(p).name)).write_text(new);patch+=''.join(difflib.unified_diff(old.splitlines(True),new.splitlines(True),fromfile='a/'+p,tofile='b/'+p))
(base/'implementation.proposed.patch').write_text(patch)
(base/'report.md').write_text('''# Final cycle2: explicit run-scoped concurrent inventory

Bounded retries cannot repair a foreign draft placeholder that persists beyond3.1seconds. The proposed explicit readLibraryItems(repo,{run,requiredIds}) policy retains strict legacy behavior when no run context is supplied. Native workflow helpers and maintenance callers now pass run explicitly; review contexts and outside maintenance assignments add their exact required IDs. No process-global run is introduced.

All readable outside items remain in the inventory, preserving downstream discovery. Only a bounded-read failure can become an exclusion, and only after validating this run's original/current frontier and resolving its full current supplier closure, including current and original alias mappings. Required/unresolved/ambiguous aliases and suppliers fail closed. The exact invalid filename must occur in one other run's current manifest, with an active native beta writer for that exact batch recorded in its state. No prefix-based exemption exists. A known foreign manifest consumer of this run's frontier is also not considered independent.

Each admitted unavailable foreign draft produces an immutable content-addressed outside-inflight observation in this run's workflow directory, explicitly observed/excluded/notpassed, with exact manifest fingerprint and active native ownership fields. This is neither a source review nor certification coverage. No original evidence is rewritten and no file is silently dropped globally. Persistent invalid current-run/required/unowned inputs still error; scopes and existing frozen/evidence checks remain.

This code/docs proposal is not installed or executed. No live tool/source/metadata/state file, foreign run, test, partial gate or model call was changed/run. Root owns independent code review, commit, recertification and complete native batteries.
''')
(base/'documentation.proposed.md').write_text('''# Scope-aware library inventory during independent authoring

Without an explicit run context, readLibraryItems remains strict for every enumerated file. With {run,requiredIds}, it can record an unreadable independent in-flight foreign draft as an outside observation only after bounded retries and exact native ownership checks. This run's frozen/current manifest items and transitive declared suppliers stay mandatory, as do explicit outside review/maintenance subjects. Alias resolution retains original native aliases and current readable aliases and never silently resolves an ambiguous required alias.

Readable outside items remain available to discoverDownstream. Unavailable independent drafts are recorded under research/R-step5-v2/outside-inflight-observations/HASH.json with observed-excluded-not-passed, manifest/state/active-writer evidence, and explicit false mathematical-review/certification fields. No unavailable foreign source is passed or reconstructed. An incomplete item with no exact active foreign owner, or one needed by this run, still fails closed.

Raw, guard and statement hashes remain based on the same successful source bytes. Run context is passed through workflow hashes/identity/review helpers and consumer-maintenance calls, not inferred from environment or a process-global variable. The old3.1second retry bound is unchanged; the fix is scope policy, not waiting longer. Full native evidence, drift, dependency and frontier gates remain required.
''')
(base/'resolution.json').write_text(json.dumps({'version':1,'run':'bayesian-computational-statistics-62','cycle':2,'kind':'scope-correct-known-active-foreign-unavailable-draft-observation','source_changes':False,'proposal_files':list(files),'context_api':'readLibraryItems(repo,{run:null,requiredIds:[]})','legacy_default':'strict whole enumerated inventory when run is absent','new_observation_path':'research/R-step5-v2/outside-inflight-observations/<digest-of-observation>.json','required_protection':['original frozen frontier','current run manifest inventory/additions','explicit external assigned/reviewed subjects','transitive declared supplier closure','current/original alias targets with canonical precedence and ambiguous required alias failure'],'exclusion_authority':['only local bounded ENOENT/FM/id-shape failure','exactly one foreign current manifest item match','exact same foreign batch active native beta dispatch in1-scaffold state','not required/currentfrontier','not a declared consumer of this run frontier'],'valid_outside_items_retained':True,'live_edits_tests_gates_models':False},indent=2)+'\n')
print(base)
