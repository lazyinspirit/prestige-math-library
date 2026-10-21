import { replayNative24, native24EvidenceRefs, NATIVE24_ORIGIN_POLICY, NATIVE24_EVIDENCE_POLICY } from './step3-native24-restart-adoption.mjs';
// Pre-certification native birth evidence. This records origin, never acceptance.
import { replayNative66, native66EvidenceRefs, NATIVE66_ORIGIN_POLICY, NATIVE66_EVIDENCE_POLICY } from './step3-native66-static-replay.mjs';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync, realpathSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { itemHashGuard, itemHashJudge } from './item-hash.mjs';
import { split, yaml } from './pathway-lib.mjs';

const POLICY = 'native-created-step3-origin-v1';
export const NATIVE_ORIGIN_FREEZE_POLICY = 'native-created-step3-origin-freeze-v1';
const sha = x => createHash('sha256').update(x).digest('hex');
const canonical = x => Array.isArray(x) ? x.map(canonical) : x && typeof x === 'object'
  ? Object.fromEntries(Object.keys(x).sort().map(k => [k, canonical(x[k])])) : x;
const hash = x => sha(JSON.stringify(canonical(x)));
const need = (ok, message) => { if (!ok) throw Error(`Step-3 native origin: ${message}`); };
const safe = x => { need(/^[a-zA-Z0-9_-]+$/.test(x ?? ''), 'invalid identifier'); return x; };
const keys = ['guard_sha256', 'judge_sha256', 'item_file_sha256', 'manifest_sha256', 'contract_sha256', 'step3_subject_sha256'];
const pathFor = (root, run, id) => join(root, 'research', `${safe(run)}-step3-native-origin-${safe(id)}.json`);
function bound(root, ref) {
  need(/^research\/[a-zA-Z0-9._/-]+$/.test(ref?.path ?? '') && !ref.path.includes('..')
    && /^[a-f0-9]{64}$/.test(ref?.sha256 ?? ''), 'invalid research marker');
  const file = resolve(root, ref.path);
  need(existsSync(file) && realpathSync(file).startsWith(realpathSync(join(root, 'research')) + '/'), 'outside research');
  const bytes = readFileSync(file);
  need(sha(bytes) === ref.sha256, `changed evidence ${ref.path}`);
  return bytes;
}

// These source-only references suffice to retain the registration attestation;
// the operational transcript is deliberately not a closure/commit artifact.
function retainedOriginEvidence(root, run, id, receipt) {
  const originPath = `research/${run}-step3-native-origin-${id}.json`;
  const baselinePath = `research/${run}-step3-auditor-baseline.json`;
  const baselineBytes = readFileSync(resolve(root, baselinePath));
  need(sha(JSON.stringify(JSON.parse(baselineBytes))) === receipt.baseline_sha256, 'changed original baseline');
  const out = { [originPath]: sha(readFileSync(resolve(root, originPath))), [baselinePath]: sha(baselineBytes) };
  for (const ref of [receipt.native_item, receipt.native_manifest, receipt.native_contract,
    ...(receipt.policy===NATIVE24_ORIGIN_POLICY?native24EvidenceRefs(receipt):receipt.policy===NATIVE66_ORIGIN_POLICY?native66EvidenceRefs(receipt):[receipt.native_metadata_capture]), receipt.author_evidence.result, receipt.author_evidence.prompt]) {
    bound(root, ref);
    need(out[ref.path] === undefined || out[ref.path] === ref.sha256, 'conflicting original marker');
    out[ref.path] = ref.sha256;
  }
  return out;
}

function frozenOrigin(root, run, id, receipt) {
  const closure = JSON.parse(readFileSync(resolve(root, 'research', `${run}-step3-closure.json`)));
  const result = JSON.parse(readFileSync(resolve(root, 'research', `${run}-dispatch`, 'tool-step3-close.result.json')));
  const closedAt = Date.parse(closure.closed_at), endedAt = Date.parse(result.ended_at);
  need(closure.version === 3 && closure.basis === 'dependency-ordered-step3a'
    && closure.run === run && closure.status === 'closed'
    && closure.native_origin_evidence_policy === NATIVE_ORIGIN_FREEZE_POLICY
    && Number.isFinite(closedAt) && closedAt >= Date.parse(receipt.recorded_at)
    && result.run === run && result.role === 'tool' && result.label === 'step3-close'
    && result.ok === true && result.written_by === 'autopilot'
    && Array.isArray(result.covers) && result.covers.includes('all')
    && Number.isFinite(endedAt) && endedAt >= closedAt,
  'missing genuine native frozen closure for absent operational log');
  // Direct pins avoid recursion into step3-close verify, which itself loads us.
  const refs = retainedOriginEvidence(root, run, id, receipt);
  need(Object.entries(refs).every(([path, digest]) => closure.artifacts?.[path] === digest),
    'native origin or original evidence not pinned by closure');
  need(hash(JSON.parse(readFileSync(pathFor(root, run, id)))) === hash(receipt), 'origin receipt differs from frozen file');
}

// Native results retain their original absolute operational paths. A relocated
// clone may recognize those names only through the exact closed origin/result
// pins; this does not relax ordinary immutable author-result authentication.
export function frozenNativeAuthorPaths(root, run, file, prompt, log) {
  try {
    const prefix = `${safe(run)}-step3-native-origin-`;
    for (const name of readdirSync(join(root, 'research')).filter(x => x.startsWith(prefix) && x.endsWith('.json'))) {
      const id = safe(name.slice(prefix.length, -5));
      const receipt = JSON.parse(readFileSync(pathFor(root, run, id)));
      if (receipt.author_result !== file) continue;
      const p = receipt.author_evidence?.prompt?.path, l = receipt.author_evidence?.log?.path;
      if (typeof p !== 'string' || typeof l !== 'string' || typeof prompt !== 'string' || typeof log !== 'string'
        || !prompt.startsWith('/') || !log.startsWith('/') || !prompt.endsWith(`/${p}`) || !log.endsWith(`/${l}`)
        || prompt.slice(0, -p.length) !== log.slice(0, -l.length)) continue;
      const result = JSON.parse(bound(root, receipt.author_evidence.result));
      if (receipt.author_evidence.result.path !== `research/${run}-dispatch/${file}`
        || result.prompt !== prompt || result.log !== log) continue;
      frozenOrigin(root, run, id, receipt);
      return true;
    }
  } catch { /* an unsealed or inconsistent origin never authenticates relocation */ }
  return false;
}

// A restricted static extractor, not a Python interpreter. It parses two logged
// successful literal-writer commands with ast; it never evals/execs/imports them.
// Unsupported generators/transforms fail rather than becoming author evidence.
const REPLAY = String.raw`
import ast, hashlib, json, re, shlex, sys
x=json.load(sys.stdin); log=x['log']; spec=x['replay']; target=x['id']; run=x['run']
def require(ok,msg):
 if not ok: raise ValueError(msg)
def command(path):
 require(re.fullmatch(r'/tmp/[A-Za-z0-9_-]+\.py',path) is not None,'unsupported script path')
 anchor='cat > '+path+" <<'PY'\n"
 require(log.count(anchor)==1,'ambiguous native writer command')
 at=log.index(anchor); start=log.rfind('/bin/bash -lc ',0,at); end=log.index('" in ',at)
 require(start>=0 and re.match(r'" in [^\n]+\n succeeded in [^\n]+:\n',log[end:]) is not None,'writer did not succeed')
 shell=log[start:end+1]; argv=shlex.split(shell)
 require(len(argv)==3 and argv[:2]==['/bin/bash','-lc'],'unsupported shell wrapper')
 text=argv[2]; suffix='\nPY\npython3 '+path
 require(text.startswith(anchor) and text.endswith(suffix),'unsupported shell command sequence')
 source=text[len(anchor):-len(suffix)]
 return ast.parse(source),hashlib.sha256(shell.encode()).hexdigest(),start
def literal(n,env):
 if isinstance(n,ast.Constant) and type(n.value) in (str,int): return n.value
 if isinstance(n,ast.Name) and n.id in env:return env[n.id]
 if isinstance(n,ast.List):return [literal(a,env) for a in n.elts]
 if isinstance(n,ast.JoinedStr):return ''.join(str(literal(a,env)) for a in n.values)
 if isinstance(n,ast.FormattedValue) and n.conversion==-1 and n.format_spec is None:return literal(n.value,env)
 if isinstance(n,ast.BinOp) and isinstance(n.op,ast.Add):return literal(n.left,env)+literal(n.right,env)
 if isinstance(n,ast.Call) and not n.keywords and len(n.args)==1 and isinstance(n.func,ast.Attribute) and n.func.attr=='join' and isinstance(n.func.value,ast.Constant) and type(n.func.value.value)==str:return n.func.value.value.join(literal(n.args[0],env))
 raise ValueError('not a supported literal/template expression')
def constants(tree):
 return {n.targets[0].id:n.value.value for n in tree.body if isinstance(n,ast.Assign) and len(n.targets)==1 and isinstance(n.targets[0],ast.Name) and isinstance(n.value,ast.Constant) and type(n.value.value) in (str,int)}
def same(a,b):return ast.dump(a)==ast.dump(b)
tree,creation_hash,creation_at=command(spec['writer_script']); env=constants(tree)
require(env.get('R')==run,'writer run mismatch')
functions=[n for n in tree.body if isinstance(n,ast.FunctionDef) and n.name=='item']
require(len(functions)==1,'missing unique literal item writer'); fn=functions[0]
require([a.arg for a in fn.args.args]==['i','title','deps','body','level'] and not fn.args.defaults and not fn.args.kwonlyargs and fn.args.vararg is None and fn.args.kwarg is None and len(fn.body)==2,'unsupported writer signature')
assign=fn.body[0]
require(isinstance(assign,ast.Assign) and len(assign.targets)==1 and isinstance(assign.targets[0],ast.Name) and assign.targets[0].id=='t' and isinstance(assign.value,ast.BinOp) and isinstance(assign.value.op,ast.Add) and isinstance(assign.value.left,ast.JoinedStr) and isinstance(assign.value.right,ast.Name) and assign.value.right.id=='body','unsupported writer template')
expected=ast.parse("(base/(i+'.md')).write_text(t)").body[0]
require(same(fn.body[1],expected),'unsupported writer destination')
require(any(isinstance(n,ast.Assign) and any(isinstance(t,ast.Name) and t.id=='base' for t in n.targets) and same(n.value,ast.parse("Path('items')",mode='eval').body) for n in tree.body),'writer is not rooted in items')
matches=[]
for n in tree.body:
 if isinstance(n,ast.Expr) and isinstance(n.value,ast.Call) and isinstance(n.value.func,ast.Name) and n.value.func.id=='item':
  require(not n.value.keywords and len(n.value.args)==5,'unsupported writer invocation')
  args=[literal(a,env) for a in n.value.args]
  if args[0]==target:matches.append(literal(assign.value,env|dict(zip(['i','title','deps','body','level'],args))))
require(len(matches)==1,'native item was not written exactly once by literal writer'); text=matches[0]
transforms=[]
if spec.get('transform_script') is not None:
 tree,transform_hash,transform_at=command(spec['transform_script']); env=constants(tree)
 require(transform_at>creation_at,'transform precedes creation')
 require(env.get('R')==run,'transform run mismatch')
 dep_expected=ast.parse("def dep(t,i):\n m=re.search(r'^deps: \\[(.*)\\]$',t,re.M)\n if m:return t[:m.start()]+m[0][:-1]+', '+i+']'+t[m.end():]\n return t.replace('deps:\\n','deps:\\n  - '+i+'\\n',1)\n").body[0]
 edit_expected=ast.parse("def edit(i,fn):\n p=Path('items')/(i+'.md');p.write_text(fn(p.read_text()))\n").body[0]
 defs={n.name:n for n in tree.body if isinstance(n,ast.FunctionDef)}
 require('edit' in defs and same(defs['edit'],edit_expected),'unsupported edit writer')
 def transform(n,value):
  if isinstance(n,ast.Name) and n.id=='t':return value
  if isinstance(n,ast.Call) and isinstance(n.func,ast.Name) and n.func.id=='dep' and len(n.args)==2 and not n.keywords:
   require('dep' in defs and same(defs['dep'],dep_expected),'unsupported dependency editor')
   value=transform(n.args[0],value); dependency=literal(n.args[1],env)
   require(re.fullmatch(r'[a-z][a-z0-9-]*',dependency) is not None,'invalid added dependency')
   require(len(re.findall(r'^deps: \[.*\]$',value,re.M))==1,'expected one flow dependency list')
   return re.sub(r'^deps: \[(.*)\]$',lambda m:'deps: ['+m[1]+', '+dependency+']',value,flags=re.M)
  if isinstance(n,ast.Call) and isinstance(n.func,ast.Attribute) and n.func.attr=='replace' and len(n.args) in (2,3) and not n.keywords:
   value=transform(n.func.value,value);args=[literal(a,env) for a in n.args]
   require(type(args[0])==str and args[0] and type(args[1])==str and (len(args)==2 or type(args[2])==int and args[2]>=0),'unsupported replacement')
   require(args[0] in value,'native replacement has no source match')
   return value.replace(*args)
  raise ValueError('unsupported native source transform')
 for n in tree.body:
  if isinstance(n,ast.Expr) and isinstance(n.value,ast.Call) and isinstance(n.value.func,ast.Name) and n.value.func.id=='edit':
   require(len(n.value.args)==2 and not n.value.keywords,'unsupported edit invocation')
   if literal(n.value.args[0],env)!=target:continue
   lam=n.value.args[1];require(isinstance(lam,ast.Lambda) and [a.arg for a in lam.args.args]==['t'] and not lam.args.defaults and not lam.args.kwonlyargs and lam.args.vararg is None and lam.args.kwarg is None,'unsupported transform lambda')
   text=transform(lam.body,text);transforms.append(transform_hash)
print(json.dumps({'item_sha256':hashlib.sha256(text.encode()).hexdigest(),'creation_command_sha256':creation_hash,'transform_commands_sha256':transforms}))
`;

function replay(log, run, id, spec) {
  need(spec?.policy === 'literal-python-item-writer-v1'
    && Object.keys(spec).every(k => ['policy', 'writer_script', 'transform_script'].includes(k)), 'unsupported replay policy');
  const result = spawnSync('python3', ['-I', '-c', REPLAY], {
    input: JSON.stringify({ log: log.toString('utf8'), run, id, replay: spec }),
    encoding: 'utf8', timeout: 15000, maxBuffer: 1024 * 1024,
  });
  need(!result.error && result.status === 0, `static replay failed: ${result.stderr || result.error || 'unknown error'}`);
  return JSON.parse(result.stdout);
}

function replayOrigin(root,run,id,receipt){return receipt.policy===NATIVE24_ORIGIN_POLICY?replayNative24(root,run,id,receipt,r=>bound(root,r)):receipt.policy===NATIVE66_ORIGIN_POLICY?replayNative66(root,run,id,receipt,r=>bound(root,r)):replay(bound(root,receipt.author_evidence.log),run,id,receipt.replay);}

function validate(root, run, id, receipt, context) {
  const { baseline, authors, row } = context;
  need(Object.keys(receipt).every(k => ['version', 'policy', 'run', 'step', 'id', 'owner_identity',
    'native_execution_credit', 'mathematical_acceptance', 'recorded_at', 'reason', 'baseline_sha256',
    'page', 'batch', 'author_result', 'author_evidence', 'native_item', 'native_manifest',
    'native_contract', 'native_metadata_capture', 'carriers', 'replay', 'native_write_binding', ...([NATIVE66_ORIGIN_POLICY,NATIVE24_ORIGIN_POLICY].includes(receipt.policy)?['metadata_replay']:[])].includes(k)), 'unknown origin field');
  need(((receipt?.version === 1 && receipt.policy === POLICY) || (receipt?.version === 2 && receipt.policy === NATIVE66_ORIGIN_POLICY) || (receipt?.version === 3 && receipt.policy === NATIVE24_ORIGIN_POLICY)) && receipt.run === run
    && receipt.step === 3 && receipt.id === id && receipt.owner_identity === '/root'
    && receipt.native_execution_credit === false && receipt.mathematical_acceptance === false
    && Number.isFinite(Date.parse(receipt.recorded_at)) && String(receipt.reason ?? '').trim().length >= 40,
  'invalid origin identity');
  need(receipt.baseline_sha256 === sha(JSON.stringify(baseline))
    && !baseline.items.some(x => x.id === id) && !baseline.existing_item_files.includes(id), 'baseline exclusion failed');
  need(row && row.page === receipt.page && row.batch === String(receipt.batch), 'origin home/batch changed');
  const author = authors.find(x => x.result_file === receipt.author_result && x.immutable_result_file === x.result_file);
  need(author && Date.parse(author.started_at) >= Date.parse(baseline.at)
    && Date.parse(author.ended_at) <= Date.parse(receipt.recorded_at)
    && (!author.covers.length || author.covers.includes('all') || author.covers.map(String).includes(row.batch)), 'no authenticated native creator');
  const prefix = `research/${run}-dispatch/${author.role}-${author.label}${author.evidence_tag}`;
  need(receipt.author_evidence?.result?.path === `${prefix}.result.json`
    && receipt.author_evidence?.prompt?.path === `${prefix}.prompt.md`
    && receipt.author_evidence?.log?.path === `${prefix}.log`
    && ([receipt.author_evidence.log.path, resolve(root, receipt.author_evidence.log.path)].includes(author.log)
      || frozenNativeAuthorPaths(root, run, receipt.author_result, author.prompt, author.log)), 'wrong native evidence paths');
  bound(root, receipt.author_evidence.result);
  bound(root, receipt.author_evidence.prompt);
  const original = bound(root, receipt.native_item).toString('utf8');
  const manifest = JSON.parse(bound(root, receipt.native_manifest));
  const contracts = JSON.parse(bound(root, receipt.native_contract));
  if([NATIVE66_ORIGIN_POLICY,NATIVE24_ORIGIN_POLICY].includes(receipt.policy)) {
    need(receipt.replay===undefined,'v2 uses explicit case-bound metadata_replay only');
  } else {
  const capture = JSON.parse(bound(root, receipt.native_metadata_capture));
  need(Date.parse(capture.captured_at) >= Date.parse(author.ended_at)
    && Date.parse(capture.captured_at) <= Date.parse(receipt.recorded_at), 'invalid metadata capture time');
  for (const [ref, suffix] of [[receipt.native_manifest, 'pages'], [receipt.native_contract, 'proof-contracts']]) {
    const source = `research/${run}-batch-${row.batch}.${suffix}.json`;
    const captured = capture.sources?.filter(x => x.source === source && x.archive === ref.path);
    need(ref.path !== source && captured?.length === 1 && captured[0].raw_sha256 === ref.sha256
      && captured[0].owner_modified_source === false
      && Date.parse(captured[0].source_stat_at_capture?.mtime_utc) >= Date.parse(author.started_at) - 1500
      && Date.parse(captured[0].source_stat_at_capture?.mtime_utc) <= Date.parse(author.ended_at), 'original metadata not bound by actual native-window capture');
  }
  }
  const meta = yaml().parse(split(original).fm) ?? {};
  need(meta.id === id && meta.status === 'draft' && meta.pipeline_run === run, 'invalid original item identity');
  const pages = Array.isArray(manifest) ? manifest : manifest.pages;
  need(Array.isArray(pages), 'missing original manifest pages');
  const matches = pages.flatMap(p => (p.items ?? []).filter(x => x.id === id).map(item => ({ page: p.id, item })));
  const kindPrefixes = { definition: 'def-', algorithm: 'alg-', theorem: 'thm-', lemma: 'lem-',
    proposition: 'prop-', corollary: 'cor-', example: 'ex-', counterexample: 'cex-',
    'false-statement': 'fs-', remark: 'rem-', 'open-problem': 'op-' };
  need(matches.length === 1 && matches[0].page === row.page
    && Object.hasOwn(kindPrefixes, meta.kind) && id.startsWith(kindPrefixes[meta.kind])
    && matches[0].item.kind === meta.kind && row.manifest_entry?.kind === meta.kind,
  'invalid original item kind or manifest home');
  // Version-1 proof contracts bind their run/batch through the authenticated
  // canonical capture path; those identity fields are optional in the schema.
  need(contracts.version === 1 && Array.isArray(contracts.scope) && contracts.scope.length > 0
    && contracts.scope.every(x => typeof x === 'string' && x.length > 0)
    && new Set(contracts.scope).size === contracts.scope.length && contracts.scope.includes(id)
    && (!Object.hasOwn(contracts, 'run') || contracts.run === run)
    && (!Object.hasOwn(contracts, 'batch') || String(contracts.batch) === row.batch)
    && contracts.contracts && !Array.isArray(contracts.contracts)
    && Object.hasOwn(contracts.contracts, id) && contracts.contracts[id]
    && typeof contracts.contracts[id] === 'object' && !Array.isArray(contracts.contracts[id]),
  'missing original per-item carriers');
  const itemHash = sha(original), manifestHash = hash({ ...matches[0].item, __step4_page_id: row.page });
  const contractHash = hash(contracts.contracts[id]);
  const expected = { guard_sha256: itemHashGuard(original), judge_sha256: itemHashJudge(original),
    item_file_sha256: itemHash, manifest_sha256: manifestHash, contract_sha256: contractHash,
    step3_subject_sha256: hash({ item_sha256: itemHash, manifest_sha256: manifestHash, contract_sha256: contractHash }) };
  need(keys.every(k => receipt.carriers?.[k] === expected[k]), 'original carrier mismatch');
  if (existsSync(resolve(root, receipt.author_evidence.log.path))) {
    const replayed = replayOrigin(root,run,id,receipt);
    need(replayed.item_sha256 === itemHash && (![NATIVE66_ORIGIN_POLICY,NATIVE24_ORIGIN_POLICY].includes(receipt.policy) || replayed.manifest_sha256===manifestHash&&replayed.contract_sha256===contractHash) && hash(replayed) === hash(receipt.native_write_binding),
      'original source not reproduced by successful native writes');
  } else {
    frozenOrigin(root, run, id, receipt);
    need(receipt.native_write_binding?.item_sha256 === itemHash, 'frozen native source binding differs');
  }
  return receipt;
}

// Called by actual Step-3 close after its native currency checks; first closure
// always replays the live operational log. Later verification uses frozen pins.
export function nativeOriginClosureEvidence(root, run, contextForId, { requireLiveLog = false } = {}) {
  safe(run);
  const out = {};
  const prefix = `${run}-step3-native-origin-`;
  for (const name of readdirSync(join(root, 'research')).filter(x => x.startsWith(prefix) && x.endsWith('.json')).sort()) {
    const id = safe(name.slice(prefix.length, -5));
    if (requireLiveLog) {
      const receipt = JSON.parse(readFileSync(pathFor(root, run, id)));
      need(existsSync(resolve(root, receipt.author_evidence?.log?.path ?? '')), 'first closure requires original operational log');
      const replayed = replayOrigin(root,run,id,receipt);
      need(hash(replayed) === hash(receipt.native_write_binding), 'closure replay differs from registered native writes');
    }
    const { receipt } = loadNativeCreationOrigin(root, run, id, contextForId(id));
    Object.assign(out, retainedOriginEvidence(root, run, id, receipt));
  }
  return out;
}

export function loadNativeCreationOrigin(root, run, id, context, marker = null) {
  const path = pathFor(root, run, id);
  if (!existsSync(path)) return null;
  const bytes = readFileSync(path), receipt = validate(root, run, id, JSON.parse(bytes), context);
  const link = { path: `research/${path.split('/').at(-1)}`, sha256: sha(bytes) };
  need(!marker || hash(marker) === hash(link), 'origin marker mismatch');
  return { receipt, marker: link };
}

export function recordNativeCreationOrigin(root, run, step, id, evidence, context) {
  need(Number(step) === 3, 'only Step 3 is supported');
  const input = JSON.parse(bound(root, evidence));
  need(input.policy === 'native-created-step3-origin-evidence-v1' || input.policy===NATIVE66_EVIDENCE_POLICY || input.policy===NATIVE24_EVIDENCE_POLICY, 'wrong registration evidence');
  need(input.recorded_at === undefined && input.native_write_binding === undefined,
    'registration time and replay binding are tool-derived');
  const receipt = { ...input, policy: input.policy===NATIVE24_EVIDENCE_POLICY?NATIVE24_ORIGIN_POLICY:input.policy===NATIVE66_EVIDENCE_POLICY?NATIVE66_ORIGIN_POLICY:POLICY, recorded_at: new Date().toISOString() };
  receipt.native_write_binding = replayOrigin(root,run,id,receipt);
  validate(root, run, id, receipt, context);
  const path = pathFor(root, run, id);
  if([NATIVE66_ORIGIN_POLICY,NATIVE24_ORIGIN_POLICY].includes(receipt.policy)&&!existsSync(path)){
    const liveItem=readFileSync(join(root,'items',id+'.md'));
    const liveContract=JSON.parse(readFileSync(join(root,'research',`${run}-batch-${receipt.batch}.proof-contracts.json`)));
    need(sha(liveItem)===receipt.carriers.item_file_sha256&&hash({...context.row.manifest_entry,__step4_page_id:context.row.page})===receipt.carriers.manifest_sha256&&hash(liveContract.contracts?.[id])===receipt.carriers.contract_sha256,'v2 initial current carriers differ; no unreviewed current successor');
  }
  if (existsSync(path)) {
    const prior = loadNativeCreationOrigin(root, run, id, context);
    const { recorded_at: _old, ...a } = prior.receipt, { recorded_at: _new, ...b } = receipt;
    need(hash(a) === hash(b), 'refusing different existing origin');
    return { path, reused: true };
  }
  writeFileSync(path, JSON.stringify(receipt, null, 2) + '\n', { flag: 'wx', mode: 0o444 });
  return { path, reused: false };
}

export function validateNativeCurrentRepair(root, run, id, origin, hashes, evidenceText) {
  const e = JSON.parse(evidenceText);
  need(e.version === 1 && e.policy === 'native-created-step3-current-repair-v1'
    && e.run === run && e.step === 3 && e.id === id && e.owner_identity === '/root'
    && e.native_execution_credit === false && e.mathematical_acceptance === false
    && hash(e.native_origin) === hash(origin.marker) && String(e.reason ?? '').trim().length >= 40
    && keys.every(k => e.current_carriers?.[k] === hashes[k]), 'invalid current repair evidence');
  need(e.review?.completed === true && e.review?.no_unresolved_defect === true
    && e.review?.current_proof_suppliers_and_direct_consumers_checked === true
    && Array.isArray(e.repairs) && e.repairs.length > 0, 'incomplete current owner review');
  let previous = origin.receipt.carriers.item_file_sha256;
  for (const repair of e.repairs) {
    need(/^\/root(?:\/[a-zA-Z0-9_/-]+)?$/.test(repair.author_identity ?? '')
      && repair.before_raw_sha256 === previous
      && /^[a-f0-9]{64}$/.test(repair.after_raw_sha256 ?? ''), 'repair attribution/carrier mismatch');
    const report = bound(root, repair.evidence).toString('utf8');
    need([run, id, repair.author_identity, repair.before_raw_sha256, repair.after_raw_sha256]
      .every(value => report.includes(value)), 'outside repair report does not bind actual attribution and bytes');
    previous = repair.after_raw_sha256;
  }
  need(previous === hashes.item_file_sha256, 'repair chain does not reach current source');
  return e;
}
