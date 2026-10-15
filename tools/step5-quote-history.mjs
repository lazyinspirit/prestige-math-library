// A history bridge for exact native supporting metadata, never a current audit.
import { readFileSync, existsSync, writeFileSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { createHash } from 'node:crypto';
import { sourceSectionText, splitFrontmatter } from './facts-block.mjs';
const sha = value => createHash('sha256').update(typeof value === 'string' ? value : JSON.stringify(value)).digest('hex');
const read = path => JSON.parse(readFileSync(path, 'utf8'));
const must = (value, message) => { if (!value) throw Error(message); };
const norm = value => String(value ?? '').replace(/\s+/g, ' ').trim();
const rel = (root, p) => { const target=resolve(root,p);must(target.startsWith(resolve(root,'research')+'/'),'quote history requires research paths');return target; };
const marker = (root,run) => join(root,'research',`${run}-step5-v2`,'initial-1-owner-quote-history.json');
function validate(root,run,receipt) {
  must(/^[a-z0-9][a-z0-9-]*$/.test(run),'invalid quote-history run');
  const {sha256,...payload}=receipt;
  must(sha256===sha(payload)&&receipt.version===1&&receipt.policy==='step5-native-supporting-quote-history-v1'
    &&receipt.run===run&&receipt.owner_identity==='/root'&&receipt.historical_only===true
    &&receipt.current_review_granted===false&&receipt.native_execution_coverage_adopted===false
    &&receipt.phase==='initial'&&receipt.round===1&&typeof receipt.reason==='string'&&receipt.reason.trim().length>=40
    &&Array.isArray(receipt.carriers)&&receipt.carriers.length>0,
    'invalid supporting quote-history receipt');
  const seen=new Set();
  for(const carrier of receipt.carriers) {
    must(new RegExp(`^research/${run}-batch-\\d+\\.proof-contracts\\.json$`).test(carrier.path)
      &&!seen.has(carrier.path),'ambiguous/noncontract quote-history carrier');seen.add(carrier.path);
    const oldPath=rel(root,carrier.archive),livePath=rel(root,carrier.path),postPath=rel(root,carrier.current_archive);
    const oldBytes=readFileSync(oldPath,'utf8'),postBytes=readFileSync(postPath,'utf8');
    must(sha(oldBytes)===carrier.original_sha256&&sha(postBytes)===carrier.current_sha256
      &&readFileSync(livePath,'utf8')===postBytes,'quote-history before/current bytes changed');
    const before=JSON.parse(oldBytes),after=JSON.parse(postBytes),changed=[];
    must(before.contracts&&after.contracts,'missing quote-history contract map');
    const substituted=structuredClone(before);
    for(const [id,contract]of Object.entries(before.contracts)) {
      const next=after.contracts[id];must(next&&Array.isArray(contract.citations)&&Array.isArray(next.citations)
        &&contract.citations.length===next.citations.length,'quote-history citation inventory changed');
      for(let index=0;index<contract.citations.length;index++) {
        const original=contract.citations[index],current=next.citations[index];
        if(original.quote===current.quote)continue;
        must(typeof current.quote==='string'&&current.quote.trim()&&/^[a-z0-9-]+$/.test(current.source??''),
          'invalid current mirrored quote');
        const source=readFileSync(join(root,'items',`${current.source}.md`),'utf8');
        const section=sourceSectionText(splitFrontmatter(source).body,current.source_section);
        must(section&&norm(section).includes(norm(current.quote)),'mirrored quote not present in current cited section');
        // Only quote changes are substituted; final whole-object equality below
        // rejects sources/sections/uses/risk/reviews/boundaries/derivations edits.
        substituted.contracts[id].citations[index].quote=current.quote;
        changed.push({id,index,before:original.quote,after:current.quote});
      }
    }
    must(changed.length>0&&JSON.stringify(substituted)===JSON.stringify(after)
      &&JSON.stringify(changed)===JSON.stringify(carrier.quote_deltas),'non-quote metadata changed');
    const packPath=rel(root,carrier.origin_pack),reportPath=rel(root,carrier.origin_report),dispatchPath=rel(root,carrier.origin_dispatch);
    const packBytes=readFileSync(packPath,'utf8'),reportBytes=readFileSync(reportPath,'utf8'),dispatchBytes=readFileSync(dispatchPath,'utf8');
    must(sha(packBytes)===carrier.origin_pack_sha256&&sha(reportBytes)===carrier.origin_report_sha256
      &&sha(dispatchBytes)===carrier.origin_dispatch_sha256,'native quote-history origin changed');
    const pack=JSON.parse(packBytes),report=JSON.parse(reportBytes),dispatch=JSON.parse(dispatchBytes);
    must(pack.run===run&&pack.phase==='initial'&&pack.round===1&&pack.units.map(String).includes(String(carrier.unit))
      &&report.run===run&&report.phase==='initial'&&report.round===1&&String(report.unit)===String(carrier.unit)
      &&report.input_sha256===sha(pack)&&report.supporting_evidence?.[carrier.path]===carrier.original_sha256
      &&dispatch.run===run&&dispatch.role==='alpha-adjudicate'&&dispatch.label===`step5-v2-initial-r1-u${carrier.unit}`
      &&dispatch.runner==='codex'&&dispatch.model==='gpt-6.1-sol'&&dispatch.provider_effort==='high'
      &&dispatch.covers?.map(String).includes(String(carrier.unit))
      &&dispatch.ok===true&&dispatch.exit_code===0&&dispatch.timed_out!==true
      &&dispatch.terminal_summary?.task_completed===true&&dispatch.terminal_summary?.task_aborted!==true,
      'supporting quote-history lacks exact genuine native handoff');
  }
  return receipt;
}
export function supportingQuoteHistory(history,path,expected) {
  if(!history?.root||!history?.run)return null;
  const {root,run}=history,markerPath=marker(root,run);if(!existsSync(markerPath))return null;
  const receipt=validate(root,run,read(markerPath));
  const carrier=receipt.carriers.find(row=>resolve(root,row.path)===resolve(root,path)&&row.original_sha256===expected);
  return carrier?{archive:rel(root,carrier.archive),marker:markerPath}:null;
}
export function recordSupportingQuoteHistory(root,run,payload) {
  // Native owner integration calls only after archiving exact current metadata
  // and authenticating original completed worker origins; never refresh live
  // supporting-evidence hashes or alter the original pack/report/dispatch.
  const state=read(join(root,'.autopilot',run,'state.json'));
  must(state.run===run&&state.stage==='5.1-adjudicate'&&state.paused===true
    &&Object.values(state.dispatches??{}).every(row=>!row.startedAt||Boolean(row.endedAt)),
    'quote-history recording requires held native initial collection and drained writers');
  const receipt={...payload,sha256:sha(payload)};validate(root,run,receipt);
  const target=marker(root,run);
  if(existsSync(target))must(JSON.stringify(read(target))===JSON.stringify(receipt),'immutable quote-history conflict');
  else writeFileSync(target,JSON.stringify(receipt,null,2)+'\n',{flag:'wx'});
  return {path:target,carriers:receipt.carriers.length,historical_only:true};
}
