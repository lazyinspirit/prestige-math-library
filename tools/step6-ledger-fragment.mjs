// Exact owner-authorized addition-only shared-ledger commit fragments.
import { createHash } from 'node:crypto';
import {readFileSync,lstatSync,realpathSync} from 'node:fs';
import {resolve,join} from 'node:path';
const sha = text => createHash('sha256').update(text).digest('hex');
// Only a terminal record line terminator is non-content. Original bytes are
// retained; this accounts for EOF becoming an interior blank-line separator.
export const decodeLedger = bytes => new TextDecoder('utf-8', { fatal: true, ignoreBOM: true }).decode(bytes);
export const recordSignature = text => text.replace(/\r?\n$/, '');
const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const refuse = why => { throw Error(`shared ledger fragment: ${why}`); };
export function fragmentRecords(text, run, ownedIds, spec = null) {
  if(spec?.version===2){if(spec.kind!=='published-local-repair-marker-additions')refuse('unknown marker projection kind');return localRepairMarkerRecords(text,run);}
  const records = [];
  const owns = value => value.includes(run) || ownedIds.has(/^\s*(?:\|\s*)?(?:`|\[\[)?([a-z][a-z0-9]*(?:-[a-z0-9]+)+)(?=[`|\]\s])/.exec(value)?.[1]);
  const emit = (start, end) => {
    const block = text.slice(start, end);
    if (!block.trim()) return;
    if (!block.trimStart().startsWith('|')) records.push({ start, end, text: block, owned: owns(block) });
    else {
      let at = start;
      for (const line of block.split('\n')) {
        records.push({ start: at, end: at + line.length, text: line, owned: owns(line) });
        at += line.length + 1;
      }
    }
  };
  let cursor = 0;
  for (const match of text.matchAll(/\n\s*\n/g)) { emit(cursor, match.index); cursor = match.index + match[0].length; }
  emit(cursor, text.length);
  return records;
}
// V2 owns only this run's ordinary recorded-repair marker blocks. Legacy
// overview rows, native audit sections and arbitrary run mentions stay foreign.
function localRepairMarkerRecords(text,run){
  const records=[],seen=new Set(),prefix='local-published-repair:'+run;
  const related=key=>key===prefix||key.startsWith(prefix+'-')||key.startsWith(prefix+':');
  // Inventory the reserved namespace before the single-line token parser:
  // malformed or unterminated comments cannot silently become foreign text.
  const escapedRun=run.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  const namespace=new RegExp('^\\s*local-published-repair\\s*:\\s*'+escapedRun+'(?=$|[-:\\s])');
  for(const opener of text.matchAll(/<!--/g)){
    const end=text.indexOf('-->',opener.index+4),next=text.indexOf('<!--',opener.index+4);
    const stop=end<0?text.length:end;
    const body=text.slice(opener.index+4, next>=0&&next<stop?next:stop);
    if(namespace.test(body)){
      const token=end<0?'':text.slice(opener.index,end+3);
      const exact=/^<!-- ([^\r\n]+):(begin|end) -->$/.exec(token);
      if(!exact||!related(exact[1])||next>=0&&next<end)refuse('malformed current-run repair namespace');
    }
  }

  const foreign=(start,end)=>{for(const row of fragmentRecords(text.slice(start,end),'',new Set()))records.push({...row,start:row.start+start,end:row.end+start,owned:false});};
  let open=null,cursor=0;const foreignStack=[];
  for(const m of text.matchAll(/<!--([^\r\n]*?)-->/g)){
    const value=m[1].trim(),parts=/^(.+):(begin|end)$/.exec(value),key=parts?.[1],side=parts?.[2];
    const ours=related(key??value);
    if(open){
      if(!ours||side!=='end'||key!==open.key)refuse('nested, crossed or malformed owned repair marker');
      if(m[0]!==`<!-- ${key}:end -->`||(m.index>0&&text[m.index-1]!=='\n')||!['','\n','\r'].includes(text[m.index+m[0].length]??''))refuse('owned marker is not an exact standalone line');
      records.push({start:open.start,end:m.index+m[0].length,text:text.slice(open.start,m.index+m[0].length),owned:true,marker:key.slice('local-published-repair:'.length)});cursor=m.index+m[0].length;open=null;continue;
    }
    if(!ours){if(side==='begin')foreignStack.push(key);else if(side==='end'&&foreignStack.at(-1)===key)foreignStack.pop();continue;}
    if(!parts||side!=='begin'||foreignStack.length||m[0]!==`<!-- ${key}:begin -->`||(m.index>0&&text[m.index-1]!=='\n')||!['','\n','\r'].includes(text[m.index+m[0].length]??''))refuse('unbalanced, nested or malformed current-run repair marker');
    if(seen.has(key))refuse('duplicate current-run repair marker');seen.add(key);foreign(cursor,m.index);open={key,start:m.index};
  }
  if(open)refuse('unterminated current-run repair marker');foreign(cursor,text.length);return records;
}
function validateMarkerReceipts(spec,run,ids,working,{root}={}){
  const expected=['version','kind','run','path','authorized_by','authorization','base_owned_records','target_owned_records','evidence','record_receipts'];
  if(!same(Object.keys(spec).sort(),expected.sort())||spec.base_owned_records.length!==0||!Array.isArray(spec.record_receipts)||!spec.record_receipts.length||typeof root!=='string')refuse('invalid absent-base marker authority');
  const records=fragmentRecords(working,run,ids,spec).filter(r=>r.owned),markers=records.map(r=>r.marker);
  if(!same(spec.record_receipts.map(r=>r?.marker),markers))refuse('receipt inventory differs from every current-run repair marker');
  for(const [index,ref]of spec.record_receipts.entries()){
    if(!ref||!same(Object.keys(ref).sort(),['marker','path','sha256'])||typeof ref.path!=='string'||!ref.path.startsWith(`research/${run}-`)||/[\\\x00-\x1f]/.test(ref.path)||ref.path.split('/').some(x=>!x||x==='.'||x==='..')||!/^[a-f0-9]{64}$/.test(ref.sha256??''))refuse('invalid exact marker receipt reference');
    const path=resolve(root,ref.path),stat=lstatSync(path);if(!stat.isFile()||stat.isSymbolicLink()||!realpathSync(path).startsWith(realpathSync(join(root,'research'))+'/'))refuse('receipt must be regular run-owned research evidence');
    const raw=readFileSync(path,'utf8');if(sha(raw)!==ref.sha256||spec.evidence.filter(e=>e.path===ref.path&&e.sha256===ref.sha256).length!==1)refuse('changed or unbound marker receipt');
    const receipt=JSON.parse(raw),record=records[index],begin=`<!-- local-published-repair:${ref.marker}:begin -->`,end=`<!-- local-published-repair:${ref.marker}:end -->`;
    const inner=record.text.slice(begin.length,-end.length);
    if(receipt.version!==1||receipt.kind!=='recorded-local-published-repair'||receipt.run!==run||receipt.ledger_marker!==ref.marker||!ids.has(receipt.id)||!Number.isFinite(Date.parse(receipt.recorded_at))||!/^[a-f0-9]{64}$/.test(receipt.content_sha256??'')||receipt.ledger_sha256!==sha(inner)||!inner.includes(receipt.id)||!inner.includes(receipt.content_sha256))refuse('marker does not match its genuine recorded local repair receipt');
  }
}
export function validateFragment(spec, run, actualOwnedIds, working, options = {}) {
  if (!(spec.version === 1 && spec.kind === 'published-ledger-addition-fragment'
    || spec.version === 2 && spec.kind === 'published-local-repair-marker-additions') || spec.run !== run
    || spec.path !== 'research/published-consumer-supplier-ledger.md' || spec.authorized_by !== 'owner'
    || typeof spec.authorization !== 'string' || spec.authorization.length < 20
    || !Array.isArray(spec.base_owned_records) || !Array.isArray(spec.target_owned_records)
    || !Array.isArray(spec.evidence) || !spec.evidence.length) refuse('invalid exact owner authority');
  // Caller verifies every evidence path/hash and descriptor raw hash, and binds
  // this descriptor in native scope policy/readiness before actual preparation.
  const ids = new Set(actualOwnedIds);
  if(spec.version===2)validateMarkerReceipts(spec,run,ids,working,options);
  const own = text => fragmentRecords(text, run, ids, spec).filter(r => r.owned).map(r => recordSignature(r.text));
  for (const rows of [spec.base_owned_records, spec.target_owned_records]) {
    if (rows.some(row => typeof row !== 'string' || !same(own(row), [recordSignature(row)])) || new Set(rows.map(recordSignature)).size !== rows.length)
      refuse('non-owned or duplicate authorized record');
  }
  const before = spec.base_owned_records.map(recordSignature), target = spec.target_owned_records.map(recordSignature);
  const retained = target.filter(row => before.includes(row));
  if (!same(retained, before) || target.length <= retained.length)
    refuse('authority must add records only; no replacement, deletion, or reorder');
  if (!same(own(working), target)) refuse('working owned projection differs from authority');
  return { ids, own };
}
export function composeFragment(base, spec, run, ids) {
  const rows = fragmentRecords(base, run, ids, spec), owned = rows.filter(r => r.owned);
  const current = owned.map(r => recordSignature(r.text)), target = spec.target_owned_records.map(recordSignature);
  const before = spec.base_owned_records.map(recordSignature);
  if (same(current, target)) return { text: base, already_integrated: true, base_sha256: sha(base), insertions: [] };
  if (!same(current, before)) refuse('HEAD/index owned projection is neither exact before nor target');
  const pending = new Map(); let additions = [];
  for (const record of target) {
    if (before.includes(record)) {
      if (additions.length) pending.set(record, additions);
      additions = [];
    } else additions.push(record);
  }
  const insertions = [];
  for (const record of owned) {
    if (pending.has(recordSignature(record.text))) insertions.push({ at: record.start, text: pending.get(recordSignature(record.text)).join('\n\n') + '\n\n' });
  }
  if (additions.length) insertions.push({ at: base.length, text: (base.length && !base.endsWith('\n\n') ? base.endsWith('\n') ? '\n' : '\n\n' : '') + additions.join('\n\n') + '\n\n' });
  // This construction only inserts. Every byte of the HEAD/index input occurs
  // unchanged and in order in its corresponding result; no working foreign
  // bytes are copied into either tree or index.
  let text = '', cursor = 0; const applied = [];
  for (const insertion of insertions) {
    text += base.slice(cursor, insertion.at);
    applied.push({ at: text.length, length: insertion.text.length });
    text += insertion.text; cursor = insertion.at;
  }
  text += base.slice(cursor);
  let reconstructed = text;
  for (const span of [...applied].reverse()) reconstructed = reconstructed.slice(0, span.at) + reconstructed.slice(span.at + span.length);
  if (reconstructed !== base) refuse('composition failed exact base-byte reconstruction');
  const after = fragmentRecords(text, run, ids, spec);
  if (!same(after.filter(r => r.owned).map(r => recordSignature(r.text)), target)
    || !same(after.filter(r => !r.owned).map(r => recordSignature(r.text)), rows.filter(r => !r.owned).map(r => recordSignature(r.text))))
    refuse('composition changed owned projection or foreign residual');
  return { text, already_integrated: false, base_sha256: sha(base), insertions };
}
