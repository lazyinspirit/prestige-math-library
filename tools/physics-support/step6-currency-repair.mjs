// Exact current judgments after owner-authorized Step-6 rendering repairs.
// Historical metadata authentication never refreshes a scientific item hash.
import { existsSync, readFileSync, writeFileSync, mkdirSync, renameSync, realpathSync, readdirSync } from 'node:fs';
import { join, resolve, relative, dirname, basename, isAbsolute } from 'node:path';
import { execFileSync, spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { isDeepStrictEqual as equal } from 'node:util';
import { itemHashGuard, itemHashJudge, stripJudgeStamp } from './item-hash.mjs';
import { parseFrontmatter } from './content-policy-lib.mjs';
import { splitFrontmatter, sectionText } from './facts-block.mjs';
import { validateFrontier } from './step5-rounds.mjs';
import { originalJudgeLineup } from './original-judge-lineup.mjs';
import { MODELS } from './models.mjs';
import { tsxLoader } from './paths.mjs';
import { verdictIsCurrent } from './judge-currency.mjs';
import { metadataScalarDifferences } from './step5-initial-metadata-transition.mjs';
import { stampObservation, verifyNativeStampDelta, verifyNativePassStamp } from './step6-judge-stamp-delta.mjs';

const raw = bytes => createHash('sha256').update(bytes).digest('hex');
const digest = value => raw(JSON.stringify(value));
const read = path => JSON.parse(readFileSync(path, 'utf8'));
const fileHash = path => raw(readFileSync(path));
const check = (ok, why) => { if (!ok) throw Error('Step 6 currency repair: ' + why); };
const sha = value => /^[a-f0-9]{64}$/.test(value ?? '');
const authorityRel = run => `research/${run}-step6-currency-authority.json`;
const pointerRel = run => `.physics-autopilot/${run}/step6-currency-request.json`;
const workflowDir = (root, run) => join(root, 'research', run + '-step5-v2');
const at = (value, pointer) => pointer.split('/').slice(1).reduce((row, key) => row?.[key], value);
const sorted = values => [...values].sort();
// Keep report outcomes/limits and raw identity without duplicating source
// inventories or long before/after paragraphs in the durable authority.
export function compactCurrencyAuthorReport(value,key=''){
  if(Array.isArray(value)){
    if(['source_checks','math','math_spans','ast','source_nodes'].includes(key))
      return{kind:'source-inventory-reference',records:value.length,sha256:digest(value)};
    return value.map(row=>compactCurrencyAuthorReport(row,key));
  }
  if(value&&typeof value==='object')return Object.fromEntries(Object.entries(value).map(([field,row])=>[field,compactCurrencyAuthorReport(row,field)]));
  if(typeof value==='string'&&['before','after','source','tex','code','value','html','svg','prompt','transcript'].includes(key)&&value.length>80)
    return{kind:'source-fragment-reference',bytes:Buffer.byteLength(value),sha256:raw(value)};
  return value;
}
const atomic = (path, value) => { mkdirSync(dirname(path), { recursive: true }); const tmp = path + '.' + process.pid + '.tmp'; writeFileSync(tmp, JSON.stringify(value, null, 2) + '\n'); renameSync(tmp, path); };
const sealed = value => { const { sha256, ...payload } = value; check(sha256 === digest(payload), 'authority payload changed'); return payload; };
const gitBytes = (root, commit, path) => {
  check(/^[a-f0-9]{40}$/.test(commit) && /^(items|library|research)\/[A-Za-z0-9_./-]+$/.test(path) && !path.split('/').includes('..'), 'unsafe Git preimage');
  return execFileSync('git', ['--no-replace-objects', 'show', `${commit}:physics/${path}`], { cwd: root, maxBuffer: 32 * 1024 * 1024 });
};
const certificatePath = (root, run, cert) => join(workflowDir(root, run), `certification-${cert.phase}-${cert.round}.json`);
function regular(root, path) {
  const absolute = resolve(root, path), rel = relative(root, absolute);
  check(!isAbsolute(rel) && !rel.startsWith('..') && existsSync(absolute) && realpathSync(absolute) === absolute, 'nonregular or escaped input: ' + path);
  return absolute;
}
function requestDocument(root, run) {
  const pointerPath = join(root, pointerRel(run)), authorityPath = join(root, authorityRel(run));
  if (existsSync(pointerPath)) {
    const pointer = read(pointerPath);
    check(pointer.version === 1 && pointer.run === run && sha(pointer.request?.sha256)
      && dirname(resolve(root,pointer.request.path))===join(root,'.physics-autopilot',run,'supervision')
      && /^step6-currency-authorization-[A-Za-z0-9._-]+\.json$/.test(basename(pointer.request.path)), 'invalid Root advertisement');
    const path = regular(root, pointer.request.path); check(fileHash(path) === pointer.request.sha256, 'Root authorization changed');
    return { document: read(path), path: pointer.request.path, raw_sha256: pointer.request.sha256 };
  }
  if (!existsSync(authorityPath)) return null;
  const authority = read(authorityPath); sealed(authority);
  return authority.authorization;
}
export function hasStep6CurrencyRepair(root, run) { return existsSync(join(root, pointerRel(run))) || existsSync(join(root, authorityRel(run))); }
export function step6CurrencyPending(root, run) {
  if (!hasStep6CurrencyRepair(root, run)) return false;
  try { const request = requestDocument(root, run), authority = read(join(root, authorityRel(run))); sealed(authority);
    return authority.status !== 'complete' || authority.authorization.raw_sha256 !== request.raw_sha256;
  } catch { return true; }
}
export function currencyContexts(root, ids) {
  const result = spawnSync(process.execPath, ['--import', tsxLoader(), 'tools/physics-support/judge.mts', '--context-hashes', ids.join(','), '--currency-inputs'],
    { cwd: root, encoding: 'utf8', env: { ...process.env, PHYSICS_REPO: root }, maxBuffer: 16 * 1024 * 1024 });
  check(!result.error && result.status === 0, 'current prompt inputs failed: ' + (result.error?.message ?? result.stderr));
  const contexts = JSON.parse(result.stdout).contexts;
  check(ids.every(id => ['item_sha256', 'context_sha256', 'other_prompt_inputs_sha256'].every(key => sha(contexts?.[id]?.[key]))), 'incomplete current prompt inputs');
  return contexts;
}
function jsonl(root, path) {
  const bytes = readFileSync(regular(root, path)), lines = bytes.toString('utf8').split('\n');
  check(lines.at(-1) === '', 'native ledger lacks complete final line'); lines.pop();
  return { bytes, rows: lines.map((line, index) => ({ index, raw_sha256: raw(line), row: JSON.parse(line) })) };
}
function bindPrefix(root, binding) {
  const bytes = readFileSync(regular(root, binding.path));
  check(Number.isSafeInteger(binding.bytes) && binding.bytes >= 0 && bytes.length >= binding.bytes
    && raw(bytes.subarray(0, binding.bytes)) === binding.sha256, 'native append-only ledger prefix changed: ' + binding.path);
  const lines=bytes.subarray(0,binding.bytes).toString('utf8').split('\n');
  check(lines.pop()===''&&Number.isSafeInteger(binding.rows)&&binding.rows>=0&&lines.length===binding.rows, 'native prefix row boundary/count changed');
}
function prefix(root, path) { const { bytes, rows } = jsonl(root, path); return { path, bytes: bytes.length, sha256: raw(bytes), rows: rows.length }; }
function frontier(root, run) { const f = read(join(workflowDir(root, run), 'frontier.json')); validateFrontier(f); check(f.run === run, 'wrong frontier'); return f; }
function currentScope(root, run, cert, contexts, changed) {
  const f = frontier(root, run), central = new Map(cert.items.map(row => [row.id, row]));
  const ledger = jsonl(root, `research/${run}-judge.jsonl`).rows.map(row => row.row), targets = [], centralCurrent = [], ordinaryUnchanged = [];
  for (const id of f.ids) {
    const now = contexts[id], row = central.get(id), text = readFileSync(join(root, 'items', id + '.md'), 'utf8');
    if (row) {
      if (row.guard_sha256 === itemHashGuard(text) && row.item_sha256 === now.item_sha256 && row.context_sha256 === now.context_sha256) centralCurrent.push(id);
      else targets.push(id);
    } else if (changed.has(id)) targets.push(id);
    else {
      check(latestCurrent(ledger,id,now)?.keep===true, 'unchanged ordinary item lacks current original coverage: ' + id);
      ordinaryUnchanged.push(id);
    }
  }
  return { targets: sorted(targets), central_current: sorted(centralCurrent), ordinary_unchanged: sorted(ordinaryUnchanged) };
}
const latestCurrent=(ledger,id,now)=>ledger.filter(row=>row.id===id&&row.model===MODELS.luna.id&&typeof row.keep==='boolean'
  &&verdictIsCurrent(row,{item:now.item_sha256,context:now.context_sha256})).at(-1);
function intactCertificate(root, run, cert, document) {
  const { sha256, ...payload } = cert;
  check(cert.version === 2 && cert.run === run && cert.phase === 'gate' && sha256 === digest(payload), 'invalid original gate certificate');
  const path = regular(root, document.certificate.path);
  check(path === certificatePath(root, run, cert) && equal(read(path), cert) && fileHash(path) === document.certificate.raw_sha256
    && sha256 === document.certificate.payload_sha256, 'original certificate binding changed');
}
function validateDocument(root, run, cert, authorization, { live = false } = {}) {
  const d = authorization.document;
  check(d?.version === 1 && d.kind === 'physics-step6-render-repair-current-judgments' && d.run === run && d.reviewer === '/root'
    && d.stage === '6-final-validation-v3' && d.lineup === 'luna' && d.effort === 'max'
    && originalJudgeLineup({ repo: root, run }) === 'luna', 'invalid or non-frozen Root authority');
  check(authorization.raw_sha256 === raw(JSON.stringify(d, null, 2) + '\n'), 'embedded Root authorization differs from original bytes');
  intactCertificate(root, run, cert, d);
  const reconciliation = d.reconciliation.payload;
  check(d.reconciliation.payload_sha256 === digest(reconciliation) && reconciliation.run === run && reconciliation.reviewer === '/root'
    && reconciliation.preimage_commit === d.preimage_commit && reconciliation.scientific_reviews_rehashed === false
    && reconciliation.old_verdicts_changed === false && Array.isArray(d.authors) && d.authors.length === 5
    && d.authors.every(row => row.payload_sha256 === digest(row.payload) && row.payload.run === run), 'repair evidence or reading authority changed');
  const changed = new Set(), sourceRows = new Map();
  for (const row of reconciliation.scope) {
    check(!sourceRows.has(row.path) && /^(items|library)\/[A-Za-z0-9_./-]+\.md$/.test(row.path), 'invalid repeated repair source'); sourceRows.set(row.path, row);
    const before = gitBytes(root, d.preimage_commit, row.path).toString('utf8'), current = readFileSync(regular(root, row.path), 'utf8');
    check(raw(before) === row.before_raw_sha256 && itemHashGuard(before) === row.before_guard && itemHashGuard(current) === row.after_guard, 'source repair guard changed: ' + row.path);
    const beforeFM = parseFrontmatter(splitFrontmatter(before).fm), afterFM = parseFrontmatter(splitFrontmatter(current).fm);
    const stable = fm => Object.fromEntries(Object.entries(fm).filter(([key]) => !['title', 'verification'].includes(key)));
    check(equal(stable(beforeFM), stable(afterFM)), 'repair changed protected source identity/dependencies: ' + row.path);
    check(itemHashJudge(current) === d.source_judge_sha256[row.path], 'repair changed outside native own stamp: ' + row.path);
    if (row.path.startsWith('items/') && row.before_guard !== row.after_guard) changed.add(row.path.slice(6, -3));
  }
  const f = frontier(root, run);
  check(f.sha256 === d.frontier_sha256 && sorted([...changed]).every(id => f.ids.includes(id)), 'repair escaped frozen frontier');
  const partition=[...d.scope.targets,...d.scope.central_current,...d.scope.ordinary_unchanged];
  check(partition.length===f.ids.length&&new Set(partition).size===partition.length&&equal(sorted(partition),sorted(f.ids)), 'currency scope is not the exact disjoint frozen frontier');
  const observedNative=[];
  for (const id of f.ids) {
    const path = 'items/' + id + '.md', current=readFileSync(join(root,path),'utf8'),now = itemHashGuard(current);
    const oldSource=gitBytes(root,d.preimage_commit,path).toString('utf8'),before = itemHashGuard(oldSource);
    if(now!==(sourceRows.get(path)?.after_guard??before)){
      const bound=d.unlisted_native_stamps?.filter(row=>row.id===id)??[];
      check(!sourceRows.has(path)&&!cert.items.some(row=>row.id===id)&&bound.length===1&&raw(current)===bound[0].cache_raw_sha256
        &&stripJudgeStamp(current)===stripJudgeStamp(oldSource), 'unlisted source change: '+id);
      verifyNativePassStamp(current,{model:MODELS.luna.id});
      check(latestCurrent(jsonl(root,`research/${run}-judge.jsonl`).rows.map(entry=>entry.row),id,{item_sha256:itemHashJudge(current),context_sha256:''})?.keep===true,
        'unlisted native stamp lacks actual current ordinary keep: '+id);
      observedNative.push(id);
    }
  }
  check(equal(sorted(observedNative),sorted((d.unlisted_native_stamps??[]).map(row=>row.id))), 'native baseline stamp inventory differs');
  const selectedPages=new Set();
  for(const batch of f.batches)for(const page of read(join(root,'research',`${run}-batch-${batch.id}.pages.json`)))
    selectedPages.add(`library/${page.category}/${page.id}.md`);
  for(const path of selectedPages){
    const before=gitBytes(root,d.preimage_commit,path).toString('utf8'),current=readFileSync(regular(root,path),'utf8');
    check(itemHashGuard(current)===(sourceRows.get(path)?.after_guard??itemHashGuard(before)), 'unlisted selected page change: '+path);
  }
  check([...sourceRows.keys()].every(path=>path.startsWith('items/')?f.ids.includes(path.slice(6,-3)):selectedPages.has(path)), 'repair source is outside the selected item/page frontier');
  const metadata = d.historical_metadata;
  check(Array.isArray(metadata) && metadata.length === 1, 'only the actual single stale manifest is supported');
  const allowed = metadata[0], path = `research/${run}-batch-48.pages.json`, pointer = '/0/items/0/statement';
  check(allowed.path === path && allowed.json_pointer === pointer && allowed.subject === 'def-qftx-supersymmetry-fluctuation-complex', 'unsupported historical metadata transition');
  const before = gitBytes(root, d.preimage_commit, path), current = readFileSync(regular(root, path));
  check(raw(before) === allowed.before_sha256 && cert.evidence[join(root, path)] === allowed.before_sha256
    && raw(current) === allowed.after_sha256 && equal(metadataScalarDifferences(JSON.parse(before), JSON.parse(current)), [pointer]), 'historical metadata bytes or scalar set changed');
  const row = JSON.parse(current)[0].items[0], source = readFileSync(join(root, 'items', allowed.subject + '.md'), 'utf8');
  check(row.id === allowed.subject && row.statement.trim() === sectionText(splitFrontmatter(source).body, 'Definition').trim()
    && reconciliation.metadata_mutations.some(row => row.path === path && row.subject === allowed.subject && row.field === 'statement'), 'metadata mirror lacks its actual Root repair');
  for (const [rawPath, expected] of Object.entries(cert.evidence)) {
    const file = regular(root, rawPath);
    check(file === join(root, path) ? expected === allowed.before_sha256 : fileHash(file) === expected, 'unlicensed historical evidence changed: ' + rawPath);
  }
  bindPrefix(root, d.ledger_baseline);
  bindPrefix(root,d.attempts_baseline);
  check(d.ledger_baseline.path===`research/${run}-judge.jsonl`&&d.attempts_baseline.path===`research/${run}-judge-attempts.jsonl`, 'noncanonical native baseline ledgers');
  if (live) {
    const state = read(join(root, '.physics-autopilot', run, 'state.json'));
    check(state.run === run && state.stage === d.stage && !state.finishedAt && !state.stages?.[d.stage]?.gatesPassedAt
      && Object.values(state.dispatches ?? {}).every(row => !row.startedAt || row.endedAt || row.role === 'tool' && row.label === 'step6-prepare-final-v3' && row.stage === d.stage), 'wrong native stage or other writer active');
    check(!existsSync(join(root, '.physics-autopilot', 'step5-shared-write.lock')), 'shared metadata writer active');
    check(fileHash(regular(root,d.reconciliation.path))===d.reconciliation.raw_sha256
      &&d.authors.every(row=>fileHash(regular(root,row.path))===row.raw_sha256&&digest(read(join(root,row.path)))===row.original_payload_sha256
        &&equal(compactCurrencyAuthorReport(read(join(root,row.path))),row.payload)), 'actual Root repair evidence changed');
    const cache = regular(root, d.failed_rendering.path);
    check(fileHash(cache) === d.failed_rendering.raw_sha256, 'actual failed rendering cache changed');
    const evidence = read(cache);
    check(evidence.fingerprint === d.failed_rendering.fingerprint && evidence.errors?.length > 0, 'no actual failed rendering evidence');
    check((d.unlisted_native_stamps??[]).every(row=>evidence.inputs?.some(([path,sha])=>resolve(root,path)===join(root,'items',row.id+'.md')&&sha===row.cache_raw_sha256)),
      'unlisted native stamp lacks actual pre-repair rendering-cache binding');
  }
  return { document: d, changed, frontier: f };
}

// Only an explicit Step-6 consumer opts into this historical raw-byte check.
// Its caller still receives every original item/context hash unchanged.
export function verifyStep6HistoricalMetadata(root, run, certificate) {
  const authorization = requestDocument(root, run); check(authorization, 'missing explicit Root request');
  const path=join(root,authorityRel(run));
  const completed=existsSync(path)&&readAuthority(root,run).status==='complete';
  validateDocument(resolve(root),run,certificate,authorization,{live:!completed});
}

function readAuthority(root, run) { const value = read(join(root, authorityRel(run))); sealed(value); return value; }
function storeAuthority(root, run, payload) { atomic(join(root, authorityRel(run)), { ...payload, sha256: digest(payload) }); }
function providerBinding(root, path, entry) { return { path, line: entry.index, raw_sha256: entry.raw_sha256, row: entry.row, row_sha256: digest(entry.row) }; }
function verifyProviderBinding(root, binding) {
  const entry = jsonl(root, binding.path).rows[binding.line];
  check(entry && entry.raw_sha256 === binding.raw_sha256 && equal(entry.row, binding.row) && digest(entry.row) === binding.row_sha256, 'actual provider row changed');
}
function verifyCurrentAuthority(root, run, cert, authority, contexts, { allowJudged = false } = {}) {
  check(authority.version===1&&authority.kind === 'native-physics-step6-current-judgments' && authority.run === run
    && (authority.status === 'complete' || allowJudged && authority.status === 'judged'), 'fresh native current judgments incomplete');
  const validated=validateDocument(root, run, cert, authority.authorization);
  const d = authority.authorization.document;
  const expectedCommand=['node','tools/physics-support/judge-sweep.mjs','--run',run,'--ledger',`research/${run}-judge.jsonl`,'--cost',`research/${run}-judge-cost.jsonl`,
    '--items',d.scope.targets.join(','),'--lineup','luna','--effort','max','--strict-context','--context-cache',`.physics-autopilot/${run}/supervision/step6-currency-context-cache.json`];
  check(equal(authority.actual_command,expectedCommand),'native current judgment command changed');
  check(equal(authority.scope, d.scope)&&equal(currentScope(root,run,cert,contexts,validated.changed),d.scope)
    &&authority.judgments.length===d.scope.targets.length&&new Set(authority.judgments.map(row=>row.id)).size===authority.judgments.length
    &&equal(sorted(authority.judgments.map(row=>row.id)),sorted(d.scope.targets)), 'native target scope differs');
  const baselines=[d.ledger_baseline,d.attempts_baseline];
  check(Array.isArray(authority.ledger_prefixes)&&authority.ledger_prefixes.length===2
    &&equal(sorted(authority.ledger_prefixes.map(row=>row.path)),sorted(baselines.map(row=>row.path))), 'native ledger-prefix set changed');
  for (const binding of authority.ledger_prefixes) {
    const baseline=baselines.find(row=>row.path===binding.path);
    check(binding.bytes>=baseline.bytes&&binding.rows>=baseline.rows,'native ledger prefix predates request');bindPrefix(root,binding);
  }
  const currentLedger=jsonl(root,`research/${run}-judge.jsonl`).rows.map(entry=>entry.row);
  for (const judgment of authority.judgments) {
    const id = judgment.id, now = contexts[id], original = d.target_inputs[id], verdict = judgment.verdict.row;
    check(d.scope.targets.includes(id) && now?.item_sha256 === original.item_sha256
      && now.other_prompt_inputs_sha256 === original.other_prompt_inputs_sha256, 'actual judged source/supplier prompt inputs changed: ' + id);
    for (const binding of [judgment.verdict, judgment.attempt]) verifyProviderBinding(root, binding);
    check(verdict.id === id && verdict.model === MODELS.luna.id && verdict.keep === true && verdict.item_sha256 === original.item_sha256
      && verdict.context_sha256 === original.context_sha256 && judgment.verdict.line >= d.ledger_baseline.rows
      &&judgment.verdict.path===`research/${run}-judge.jsonl`&&judgment.attempt.path===`research/${run}-judge-attempts.jsonl`
      &&Number.isSafeInteger(judgment.verdict.line)&&Number.isSafeInteger(judgment.attempt.line)&&judgment.attempt.line>=d.attempts_baseline.rows
      && judgment.attempt.row.id === id && judgment.attempt.row.model === MODELS.luna.id && judgment.attempt.row.context_sha256 === verdict.context_sha256
      && judgment.attempt.row.outcome === 'response' && judgment.attempt.row.status === 0&&judgment.attempt.row.has_content===true&&judgment.attempt.row.raw_bytes>0, 'not a genuine current accepted Luna judgment: ' + id);
    check(equal(latestCurrent(currentLedger,id,now),verdict),'a newer current Luna verdict supersedes accepted native coverage: '+id);
    const source = readFileSync(join(root, 'items', id + '.md'), 'utf8');
    if (authority.status === 'complete') {
      const after = verifyNativeStampDelta(source, judgment.before_stamp, { model: MODELS.luna.id });
      check(equal(after, judgment.after_stamp) && now.context_sha256 === judgment.after_stamp_context_sha256, 'native stamp-only replay changed: ' + id);
    } else check(now.context_sha256 === original.context_sha256 && fileHash(join(root, 'items', id + '.md')) === judgment.before_stamp.raw_sha256, 'judged inputs changed before stamping');
  }
  // Retained central rows remain exact; old ordinary coverage retains its own
  // existing item-byte policy. Neither set acquires a new judge verdict.
  const central = new Map(cert.items.map(row => [row.id, row]));
  for (const id of d.scope.central_current) check(contexts[id]?.item_sha256 === central.get(id)?.item_sha256
    && contexts[id]?.context_sha256 === central.get(id)?.context_sha256, 'retained central currency changed: ' + id);
  const ledger = jsonl(root, `research/${run}-judge.jsonl`).rows.map(entry => entry.row);
  for (const id of d.scope.ordinary_unchanged) check(latestCurrent(ledger,id,contexts[id])?.keep===true, 'retained ordinary currency changed: ' + id);
}

export function verifyStep6CurrencyAuthority(root, run, certificate, { contextBuilder = currencyContexts } = {}) {
  if (!hasStep6CurrencyRepair(root, run)) return null;
  const authorization = requestDocument(root, run), authority = readAuthority(root, run);
  check(authority.authorization.raw_sha256 === authorization.raw_sha256, 'native judgment receipt belongs to another Root authorization');
  verifyCurrentAuthority(root, run, certificate, authority, contextBuilder(root, frontier(root, run).ids));
  return authority;
}

export function beginStep6CurrencyRepair(root, run, { contextBuilder = currencyContexts, sweep = null } = {}) {
  const authorization = requestDocument(root, run); if (!authorization) return null;
  const d = authorization.document, cert = read(regular(root, d.certificate.path));
  const validated = validateDocument(root, run, cert, authorization, { live: true });
  const contexts = contextBuilder(root, validated.frontier.ids), path = join(root, authorityRel(run));
  if (existsSync(path)) {
    const existing = readAuthority(root, run);
    check(existing.authorization.raw_sha256 === authorization.raw_sha256, 'existing scientific authority belongs to another request');
    if (['complete', 'judged'].includes(existing.status)) { verifyCurrentAuthority(root, run, cert, existing, contexts, { allowJudged: true }); return existing; }
  }
  check(equal(currentScope(root, run, cert, contexts, validated.changed), d.scope), 'current repair target scope changed');
  for (const id of d.scope.targets) check(equal(contexts[id], d.target_inputs[id]), 'authorized current prompt changed before provider work: ' + id);
  const before = Object.fromEntries(d.scope.targets.map(id => [id, stampObservation(readFileSync(join(root, 'items', id + '.md'), 'utf8'))]));
  const argv = ['tools/physics-support/judge-sweep.mjs', '--run', run, '--ledger', `research/${run}-judge.jsonl`, '--cost', `research/${run}-judge-cost.jsonl`,
    '--items', d.scope.targets.join(','), '--lineup', 'luna', '--effort', 'max', '--strict-context', '--context-cache', `.physics-autopilot/${run}/supervision/step6-currency-context-cache.json`];
  check(d.scope.targets.length > 0, 'empty provider target selection');
  const startedAt = new Date().toISOString();
  const result = sweep ? sweep({ root, run, argv, contexts, ids: d.scope.targets })
    : spawnSync(process.execPath, argv, { cwd: root, stdio: 'inherit', timeout: 43200000, env: { ...process.env, PHYSICS_REPO: root } });
  check(!result.error && result.status === 0, 'actual Luna sweep failed/outage; completed append-only rows remain resumable');
  const after = contextBuilder(root, validated.frontier.ids);
  check(d.scope.targets.every(id => equal(after[id], contexts[id]) && fileHash(join(root, 'items', id + '.md')) === before[id].raw_sha256), 'source/context writer overlapped actual judgments');
  const ledgerPath = `research/${run}-judge.jsonl`, attemptsPath = `research/${run}-judge-attempts.jsonl`;
  const ledger = jsonl(root, ledgerPath), attempts = jsonl(root, attemptsPath), judgments = [], failures = [];
  for (const id of d.scope.targets) {
    const original = contexts[id], entry = ledger.rows.filter(entry => entry.index >= d.ledger_baseline.rows && entry.row.id === id && entry.row.model === MODELS.luna.id
      && entry.row.item_sha256 === original.item_sha256 && entry.row.context_sha256 === original.context_sha256).at(-1);
    const attempt = attempts.rows.filter(entry => entry.index>=d.attempts_baseline.rows&&entry.row.id === id && entry.row.model === MODELS.luna.id && entry.row.context_sha256 === original.context_sha256
      && entry.row.outcome === 'response' && entry.row.status === 0&&entry.row.has_content===true&&entry.row.raw_bytes>0).at(-1);
    if (entry?.row.keep !== true || !attempt) { failures.push({ id, verdict: entry?.row ?? null, reason: !entry ? 'missing-current-verdict' : entry.row.keep !== true ? 'fresh-rejection-or-null' : 'missing-provider-response' }); continue; }
    judgments.push({ id, verdict: providerBinding(root, ledgerPath, entry), attempt: providerBinding(root, attemptsPath, attempt), before_stamp: before[id] });
  }
  const payload = { version: 1, kind: 'native-physics-step6-current-judgments', run, status: failures.length ? 'blocked' : 'judged',
    authorization, scope: d.scope, actual_command: ['node', ...argv], startedAt, judgedAt: new Date().toISOString(),
    ledger_prefixes: [prefix(root, ledgerPath), prefix(root, attemptsPath)], judgments, failures };
  storeAuthority(root, run, payload);
  check(!failures.length, 'fresh judgments rejected or are incomplete: ' + failures.map(row => row.id).join(','));
  return readAuthority(root, run);
}
export function finishStep6CurrencyRepair(root, run, { contextBuilder = currencyContexts } = {}) {
  if (!hasStep6CurrencyRepair(root, run)) return null;
  const authority = readAuthority(root, run), d = authority.authorization.document, cert = read(regular(root, d.certificate.path));
  const contexts = contextBuilder(root, frontier(root, run).ids);
  if (authority.status === 'complete') { verifyCurrentAuthority(root, run, cert, authority, contexts); return authority; }
  check(authority.status === 'judged', 'cannot stamp incomplete current judgments');
  for (const row of authority.judgments) {
    const now = contexts[row.id], expected = d.target_inputs[row.id];
    check(now.item_sha256 === expected.item_sha256 && now.other_prompt_inputs_sha256 === expected.other_prompt_inputs_sha256, 'actual other prompt inputs changed during stamping');
    row.after_stamp = verifyNativeStampDelta(readFileSync(join(root, 'items', row.id + '.md'), 'utf8'), row.before_stamp, { model: MODELS.luna.id });
    row.after_stamp_context_sha256 = now.context_sha256;
  }
  const { sha256, ...payload } = authority;
  Object.assign(payload, { status: 'complete', completedAt: new Date().toISOString(), own_stamp_only: true, scientific_hashes_rewritten: false });
  storeAuthority(root, run, payload);
  const saved = readAuthority(root, run); verifyCurrentAuthority(root, run, cert, saved, contexts); return saved;
}

// Native stamp application is the sole consumer allowed between actual
// provider completion and the finish check. Standalone/public callers require
// the completed receipt; an environment variable alone grants no authority.
export function verifyStep6CurrencyForStamps(root, run, cert, { contextBuilder = currencyContexts } = {}) {
  if (!hasStep6CurrencyRepair(root, run)) return;
  const a = readAuthority(root, run), statePath = join(root, '.physics-autopilot', run, 'state.json');
  const state=existsSync(statePath)?read(statePath):null,stage='6-final-validation-v3',live=Object.values(state?.dispatches??{}).filter(row=>row.startedAt&&!row.endedAt);
  const native=process.env.PRESTIGE_STEP6_CURRENCY_STAMP===a.sha256&&state?.run===run&&state.stage===stage&&!state.finishedAt
    &&live.length===1&&live[0].role==='tool'&&live[0].stage===stage&&live[0].label==='step6-prepare-final-v3';
  if (native && a.status === 'judged') verifyCurrentAuthority(root, run, cert, a, contextBuilder(root, frontier(root, run).ids), { allowJudged: true });
  else verifyStep6CurrencyAuthority(root, run, cert, { contextBuilder });
}

export function step6CurrencyInputPaths(root, run, {live=false}={}) {
  if (!hasStep6CurrencyRepair(root, run)) return [];
  const selected = [authorityRel(run), 'tools/physics-support/step6-currency-repair.mjs', 'tools/physics-support/step6-judge-stamp-delta.mjs',
    'tools/physics-support/judge.mts', 'tools/physics-support/judge-sweep.mjs', 'tools/physics-support/step5-certification-consumer.mjs'];
  // Durable authority embeds the exact request/reports. Live advertisements are
  // additionally sealed while preparation is active, but are not future proof.
  if (live&&existsSync(join(root, pointerRel(run)))) { selected.push(pointerRel(run)); const r = requestDocument(root, run); selected.push(r.path); }
  return selected.filter(path => existsSync(join(root, path)));
}

// This builds a reviewable inactive candidate only; it advertises nothing,
// changes no state, calls no provider, and stores no full source or prompt.
export function makeStep6CurrencyCandidate(root, run, { preimageCommit, renderingCache, reconciliationPath, authorPaths, contextBuilder = currencyContexts } = {}) {
  root = resolve(root);
  const cert = read(join(workflowDir(root, run), 'certification.json')), f = frontier(root, run), reconciliation = read(regular(root, reconciliationPath));
  const changed = new Set(reconciliation.scope.filter(row => row.path.startsWith('items/') && row.before_guard !== row.after_guard).map(row => row.path.slice(6, -3)));
  const contexts = contextBuilder(root, f.ids), scope = currentScope(root, run, cert, contexts, changed), metadataPath = `research/${run}-batch-48.pages.json`;
  const listed=new Set(reconciliation.scope.map(row=>row.path)),unlistedNative=[];
  for(const id of f.ids){const path='items/'+id+'.md';if(listed.has(path))continue;
    const before=gitBytes(root,preimageCommit,path).toString('utf8'),current=readFileSync(join(root,path),'utf8');
    if(itemHashGuard(before)!==itemHashGuard(current))unlistedNative.push({id,cache_raw_sha256:raw(current)});
  }
  const document = { version: 1, kind: 'physics-step6-render-repair-current-judgments', run, reviewer: '/root', stage: '6-final-validation-v3',
    preimage_commit: preimageCommit, lineup: 'luna', effort: 'max', frontier_sha256: f.sha256,
    certificate: { path: relative(root, certificatePath(root, run, cert)), raw_sha256: fileHash(certificatePath(root, run, cert)), payload_sha256: cert.sha256 },
    failed_rendering: { path: renderingCache, raw_sha256: fileHash(regular(root, renderingCache)), fingerprint: read(join(root, renderingCache)).fingerprint },
    reconciliation: { path: reconciliationPath, raw_sha256: fileHash(join(root, reconciliationPath)), payload_sha256: digest(reconciliation), payload: reconciliation },
    authors:authorPaths.map(path=>{const original=read(regular(root,path)),payload=compactCurrencyAuthorReport(original);
      return{path,raw_sha256:fileHash(join(root,path)),original_payload_sha256:digest(original),payload_sha256:digest(payload),payload};}),
    source_judge_sha256: Object.fromEntries(reconciliation.scope.map(row => [row.path, itemHashJudge(readFileSync(join(root, row.path), 'utf8'))])),
    historical_metadata: [{ path: metadataPath, subject: 'def-qftx-supersymmetry-fluctuation-complex', json_pointer: '/0/items/0/statement',
      before_sha256: raw(gitBytes(root, preimageCommit, metadataPath)), after_sha256: fileHash(join(root, metadataPath)) }],
    unlisted_native_stamps:unlistedNative,scope,target_inputs:Object.fromEntries(scope.targets.map(id=>[id,contexts[id]])),
    ledger_baseline:prefix(root,`research/${run}-judge.jsonl`),attempts_baseline:prefix(root,`research/${run}-judge-attempts.jsonl`) };
  const authorization = { document, path: '', raw_sha256: raw(JSON.stringify(document, null, 2) + '\n') };
  validateDocument(root, run, cert, authorization, { live: true }); return document;
}
