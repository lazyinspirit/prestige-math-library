#!/usr/bin/env node
// Routing authority for exact owner page repairs applied after a completed reader.
// This grants neither mathematical acceptance nor a waiver of adjudication.
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync, writeFileSync, chmodSync } from 'node:fs';
import { join, resolve, relative, isAbsolute } from 'node:path';
import { pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';

const POLICY = 'owner-step5-post-reader-page-repair-v1';
const PROVENANCE = ['owner-captured-current','owner-recovered-before','owner-reconstructed-before'];
const OBSERVATION = 'unbound-native-reader; owner-before bytes match pre-reader snapshot, not proof of original reader full-byte observation';
const digest = value => createHash('sha256').update(value).digest('hex');
const canonical = x => Array.isArray(x) ? x.map(canonical) : x && typeof x === 'object'
  ? Object.fromEntries(Object.keys(x).sort().map(k => [k, canonical(x[k])])) : x;
export const ownerPageRepairHash = x => digest(JSON.stringify(canonical(x)));
const assert = (ok, message) => { if (!ok) throw Error(`owner page repair: ${message}`); };
const safe = x => { assert(/^[a-zA-Z0-9_-]+$/.test(String(x ?? '')), 'invalid identity'); return String(x); };
const json = p => JSON.parse(readFileSync(p, 'utf8'));
const pathIn = (root, p) => {
  assert(typeof p === 'string' && !isAbsolute(p), 'evidence path must be repository-relative');
  const full = resolve(root, p), rel = relative(resolve(root), full);
  assert(rel && !rel.startsWith('..') && !isAbsolute(rel), 'evidence path escapes repository');
  return full;
};
const ref = (root, p) => ({ path: p, sha256: digest(readFileSync(pathIn(root, p))) });
const validateRef = (root, r) => {
  assert(r && /^[a-f0-9]{64}$/.test(r.sha256 ?? ''), 'missing evidence hash');
  assert(digest(readFileSync(pathIn(root, r.path))) === r.sha256, `changed evidence ${r.path}`);
  return pathIn(root, r.path);
};
const prefix = (run, batch, page) => `${safe(run)}-step5-owner-page-${safe(batch)}-${safe(page)}`;
const captureName = (run, batch, page) => `research/${prefix(run, batch, page)}-before.json`;
const authorityName = (run, batch, page) => `research/${prefix(run, batch, page)}-authority.json`;
function exclusive(root, p, text) {
  const full = pathIn(root, p); writeFileSync(full, text, { flag: 'wx' }); chmodSync(full, 0o444);
}
function pageContext(root, run, batch, page) {
  safe(run); safe(page); assert(/^[1-9]\d*$/.test(String(batch)), 'invalid batch');
  const all = readdirSync(join(root, 'research')).filter(n => new RegExp(`^${run}-batch-\\d+\\.pages\\.json$`).test(n));
  const homes = [];
  for (const name of all) {
    const raw = json(join(root, 'research', name));
    for (const row of Array.isArray(raw) ? raw : raw.pages ?? []) if (row.id === page) homes.push({ name, row });
  }
  assert(homes.length === 1 && homes[0].name === `${run}-batch-${batch}.pages.json`, 'page has wrong or ambiguous manifest ownership');
  const row = homes[0].row, { items = [], ...metadata } = row;
  assert(/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(row.category ?? ''), 'invalid page category');
  const currentPath = `library/${row.category}/${page}.md`;
  assert(existsSync(pathIn(root, currentPath)), 'page source missing');
  return { currentPath, manifest_sha256: ownerPageRepairHash(metadata),
    item_order: items.map(x => String(typeof x === 'string' ? x : x.id)) };
}
function nativeContext(root, run, batch) {
  const dir = join(root, 'research', `${run}-dispatch`);
  const names = readdirSync(dir).filter(n => new RegExp(`^reader-reader-${batch}\\.attempt-\\d+\\.result\\.json$`).test(n));
  assert(names.length, 'native reader result missing');
  names.sort((a,b) => Number(a.match(/attempt-(\d+)/)[1])-Number(b.match(/attempt-(\d+)/)[1]));
  const result = ref(root, `research/${run}-dispatch/${names.at(-1)}`), r = json(pathIn(root, result.path));
  assert(r.run === run && r.role === 'reader' && r.label === `reader-${batch}`
    && r.ok === true && r.exit_code === 0 && r.process_exit_code === 0 && r.timed_out !== true
    && Number.isFinite(Date.parse(r.ended_at)), 'reader did not genuinely succeed for this run/batch');
  const findings = ref(root, `research/${run}-reader-findings-${batch}.json`), doc = json(pathIn(root, findings.path));
  assert([String(batch),`${run}-batch-${batch}`].includes(String(doc.batch)) && Array.isArray(doc.findings), 'native findings wrong batch');
  return { result, reader_ended_at: r.ended_at, findings,
    report: ref(root, `research/${run}-reader-${batch}.md`), doc };
}
function drained(run, batch, page) {
  for (const line of execFileSync('ps', ['-eo','args'], { encoding:'utf8' }).split('\n')) {
    if (!/^(?:\S*\/)?node\s+\S*tools\/dispatch\.mjs\s/.test(line.trim())) continue;
    const args = line.trim().split(/\s+/), has = (flag,value) => args.some((arg,i) => arg === flag && args[i+1] === value);
    if (has('--run',run) && (has('--label',`reader-${batch}`) || has('--label',`5a-batch-${batch}`)
      || has('--covers',String(batch)) || has('--covers',page) || has('--covers',page.replace(/-examples$/, '')))) {
      throw Error('owner page repair: relevant native writer still active');
    }
  }
}
function pageFindings(doc, batch, page) {
  const matches = doc.findings.flatMap((f,i) => f.id === page ? [{ obligation:`reader:${batch}:${i+1}`, finding_sha256:ownerPageRepairHash(f) }] : []);
  assert(matches.length && matches.every(x => doc.findings[Number(x.obligation.split(':')[2])-1].subject_type === 'page'), 'exact native page finding missing or item-kind supplied');
  return matches;
}
export function captureOwnerPageBefore(root, run, batch, page, { beforeFile, provenance = 'owner-captured-current', ownerIdentity } = {}) {
  assert(ownerIdentity === '/root', 'explicit root owner identity required');
  const context = pageContext(root,run,batch,page), native = nativeContext(root,run,batch); drained(run,batch,page);
  assert(PROVENANCE.includes(provenance), 'invalid before provenance');
  const prePath = `research/${run}-step5-hash-${batch}-pre.json`, preRef = ref(root,prePath), pre = json(pathIn(root,prePath));
  assert(pre.version === 2 && pre.run === run && String(pre.batch) === String(batch) && pre.label === 'pre'
    && pre.page_manifest?.includes(page), 'wrong immutable pre-reader snapshot');
  const before = readFileSync(beforeFile ? resolve(root,beforeFile) : pathIn(root,context.currentPath));
  if (provenance === 'owner-captured-current') assert(before.equals(readFileSync(pathIn(root,context.currentPath))),
    'claimed current capture does not match live page bytes');
  const carrier = pre.page_hashes?.[page];
  assert(carrier && digest(before) === carrier.file_sha256, 'before bytes do not match immutable pre-reader page');
  assert(carrier.manifest_sha256 === context.manifest_sha256
    && ownerPageRepairHash(carrier.item_order) === ownerPageRepairHash(context.item_order), 'page manifest changed');
  const name = captureName(run,batch,page), archive = `research/${prefix(run,batch,page)}-before.md`;
  assert(!existsSync(pathIn(root,name)) && !existsSync(pathIn(root,archive)), 'before capture already exists');
  const findings = pageFindings(native.doc,batch,page);
  exclusive(root,archive,before);
  const capture = { version:1, policy:POLICY, run, batch:String(batch), page, owner_identity:ownerIdentity,
    at:new Date().toISOString(), current_path:context.currentPath,
    pre_snapshot:preRef, before_archive:ref(root,archive), before_provenance:provenance,
    before_carrier:carrier, native_result:native.result, reader_ended_at:native.reader_ended_at,
    reader_report:native.report, reader_findings:native.findings, findings,
    observation_basis:OBSERVATION };
  exclusive(root,name,JSON.stringify(capture,null,2)+'\n'); return name;
}
function validateCapture(root, run, captureRef, { requireCurrent = true } = {}) {
  const c = json(validateRef(root,captureRef));
  assert(c.version === 1 && c.policy === POLICY && c.run === run && c.owner_identity === '/root', 'wrong capture authority identity');
  assert(captureRef.path === captureName(run,c.batch,c.page), 'capture path identity mismatch');
  assert(PROVENANCE.includes(c.before_provenance) && c.observation_basis === OBSERVATION, 'invalid before/observation provenance');
  const context = pageContext(root,run,c.batch,c.page);
  const pre = json(validateRef(root,c.pre_snapshot));
  validateRef(root,c.before_archive); validateRef(root,c.native_result); validateRef(root,c.reader_report);
  const findings = json(validateRef(root,c.reader_findings)), result = json(pathIn(root,c.native_result.path));
  assert(c.pre_snapshot.path === `research/${run}-step5-hash-${c.batch}-pre.json`
    && pre.version === 2 && pre.run === run && String(pre.batch) === c.batch && pre.label === 'pre'
    && pre.page_manifest?.includes(c.page) && ownerPageRepairHash(pre.page_hashes?.[c.page]) === ownerPageRepairHash(c.before_carrier), 'immutable page carrier mismatch');
  assert(result.run === run && result.role === 'reader' && result.label === `reader-${c.batch}`
    && result.ok === true && result.exit_code === 0 && result.process_exit_code === 0 && result.timed_out !== true
    && result.ended_at === c.reader_ended_at && Date.parse(c.at) >= Date.parse(result.ended_at), 'invalid completed-reader binding');
  assert(new RegExp(`^research/${run}-dispatch/reader-reader-${c.batch}\\.attempt-[1-9]\\d*\\.result\\.json$`).test(c.native_result.path), 'wrong native result path');
  assert([c.batch, `${run}-batch-${c.batch}`].includes(String(findings.batch)), 'native findings wrong batch');
  assert(c.reader_findings.path === `research/${run}-reader-findings-${c.batch}.json`
    && c.reader_report.path === `research/${run}-reader-${c.batch}.md`
    && ownerPageRepairHash(pageFindings(findings,c.batch,c.page)) === ownerPageRepairHash(c.findings), 'native finding identity changed');
  assert(c.before_archive.path === `research/${prefix(run,c.batch,c.page)}-before.md`
    && c.before_archive.sha256 === c.before_carrier.file_sha256, 'before archive mismatch');
  assert(context.currentPath === c.current_path, 'current page ownership changed');
  if (requireCurrent) assert(context.manifest_sha256 === c.before_carrier.manifest_sha256
    && ownerPageRepairHash(context.item_order) === ownerPageRepairHash(c.before_carrier.item_order), 'current page manifest changed');
  return c;
}
export function validateOwnerPageAuthority(root,run,entry,{ requireCurrent = true, requireAfterArchive = false } = {}) {
  assert(entry.version === 1 && entry.policy === POLICY && entry.run === run && entry.owner_identity === '/root', 'wrong repair authority identity');
  const c = validateCapture(root,run,entry.capture,{requireCurrent});
  assert(entry.batch === c.batch && entry.page === c.page && entry.current_path === c.current_path, 'repair page/batch identity mismatch');
  assert(entry.reviewed === true && typeof entry.reason === 'string' && entry.reason.trim().length >= 80
    && Date.parse(entry.at) >= Date.parse(c.reader_ended_at), 'explicit completed owner review required');
  validateRef(root,entry.original_owner_artifact);
  const original = readFileSync(pathIn(root,entry.original_owner_artifact.path),'utf8');
  assert(original.includes(c.before_archive.sha256) && original.includes(entry.after_raw_sha256), 'original owner artifact lacks before/after guards');
  validateRef(root,entry.review);
  const review = readFileSync(pathIn(root,entry.review.path),'utf8');
  assert(review.includes(run) && review.includes(c.page) && review.includes(c.before_archive.sha256)
    && review.includes(entry.after_raw_sha256), 'review lacks exact run/page/before/after provenance');
  assert(Array.isArray(entry.edits) && entry.edits.length, 'unique literal edits required');
  let text = readFileSync(pathIn(root,c.before_archive.path),'utf8');
  for (const edit of entry.edits) {
    assert(typeof edit.before === 'string' && edit.before && typeof edit.after === 'string' && edit.after
      && edit.before !== edit.after && text.split(edit.before).length === 2, 'ambiguous or invalid literal edit');
    text = text.replace(edit.before,edit.after);
  }
  const afterPath = `research/${prefix(run,c.batch,c.page)}-after.md`;
  assert(digest(text) === entry.after_raw_sha256 && entry.after_raw_sha256 !== c.before_archive.sha256,
    'after guard or exclusive edit reconstruction mismatch');
  if (requireAfterArchive || existsSync(pathIn(root,afterPath))) {
    assert(existsSync(pathIn(root,afterPath)) && digest(readFileSync(pathIn(root,afterPath))) === entry.after_raw_sha256,
      'immutable after archive missing or changed');
  }
  if (requireCurrent) assert(digest(readFileSync(pathIn(root,c.current_path))) === entry.after_raw_sha256,
    'current after guard mismatch');
  return c;
}
export function recordOwnerPageRepair(root,run,evidencePath) {
  const entry = json(pathIn(root,evidencePath)); const c = validateOwnerPageAuthority(root,run,entry); drained(run,c.batch,c.page);
  const afterPath = `research/${prefix(run,c.batch,c.page)}-after.md`;
  if (!existsSync(pathIn(root,afterPath))) exclusive(root,afterPath,readFileSync(pathIn(root,c.current_path)));
  const path = authorityName(run,c.batch,c.page); exclusive(root,path,JSON.stringify(entry,null,2)+'\n'); return path;
}
export function loadOwnerPageRepairs(root,run,batch=null,{ requireCurrent = true } = {}) {
  safe(run); const entries = [], seen = new Set();
  for (const name of readdirSync(join(root,'research')).filter(n => n.startsWith(`${run}-step5-owner-page-${batch === null ? '' : safe(batch)+'-'}`) && n.endsWith('-authority.json')).sort()) {
    const path = `research/${name}`, raw = readFileSync(pathIn(root,path)), entry = JSON.parse(raw);
    const c = validateOwnerPageAuthority(root,run,entry,{requireCurrent,requireAfterArchive:true});
    assert(path === authorityName(run,c.batch,c.page) && !seen.has(`${c.batch}:${c.page}`), 'duplicate or misnamed page authority');
    seen.add(`${c.batch}:${c.page}`); entries.push({ ...entry, binding:{path,sha256:digest(raw)}, capture_value:c });
  }
  return entries;
}
export function ownerPageFindingRepair(entries,batch,finding) {
  return entries.find(e => e.batch === String(batch) && e.page === finding.id
    && finding.subject_type === 'page' && e.capture_value.findings.some(f => f.obligation === finding.obligation));
}
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  try {
    const args=process.argv.slice(2), get=(x,def=null)=>{const i=args.indexOf('--'+x);return i<0?def:args[i+1];};
    const [command]=args, root=resolve(get('root','.')), run=get('run');safe(run);
    let result;
    if(command==='capture') result=captureOwnerPageBefore(root,run,get('batch'),get('page'),{
      ownerIdentity:get('owner'),beforeFile:get('before-file'),provenance:get('provenance','owner-captured-current')});
    else if(command==='record') result=recordOwnerPageRepair(root,run,get('evidence'));
    else if(command==='check') result=validateOwnerPageAuthority(root,run,json(pathIn(root,get('evidence'))));
    else throw Error('usage: capture --run RUN --batch N --page PAGE --owner /root [--before-file PATH --provenance KIND] | check|record --run RUN --evidence PATH');
    console.log(typeof result==='string'?result:'owner page repair evidence valid');
  } catch(cause) { console.error(cause.message);process.exitCode=1; }
}
