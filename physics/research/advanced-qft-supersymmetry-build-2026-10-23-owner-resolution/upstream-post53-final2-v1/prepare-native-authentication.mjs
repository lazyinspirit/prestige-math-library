import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {recordedPublishedRepair} from '../../../tools/published-repair-policy.mjs';
import {splitFrontmatter} from '../../../tools/physics-support/facts-block.mjs';
import {yaml} from '../../../tools/physics-support/pathway-lib.mjs';
const p='research/advanced-qft-supersymmetry-build-2026-10-23-owner-resolution/upstream-post53-final2-v1',root='/home/lazyinspirit/Projects/prestige-math-library',version=process.argv[2],sha=b=>createHash('sha256').update(b).digest('hex');
if(!/^\d+$/.test(version)||fs.existsSync(`${p}/native-authentication-${version}.json`))throw Error('unique numeric version required');
const guards=new Map(),watch=p=>{const b=fs.readFileSync(p),h=sha(b);if(guards.has(p)&&guards.get(p)!==h)throw Error('input changed '+p);guards.set(p,h);return b;},x=JSON.parse(watch(p+'/observation-current-v2.json')),rows=[],holds=[];
if(sha(watch(x.installed_authority.path))!=='819455fafb5604b39c1ef8e09d935dcf9b499aeed9e7077993ba9d2c8bac5a2a')throw Error('validated53 base changed');
watch(p+'/report.md');watch(p+'/scientific-and-use-proposals.json');watch(p+'/direct-use-excerpts.json');
for(const item of x.new_reached_items){const id=item.id,before=watch(item.path),after=watch(item.original_path),observed=splitFrontmatter(watch(item.reviewed_body_path??p+'/observed/'+id+'.original.md').toString()),m=yaml().parse(splitFrontmatter(after.toString()).fm);
 if(sha(before)!==item.pinned_sha256||splitFrontmatter(after.toString()).body!==observed.body||m.title!==yaml().parse(observed.fm).title)throw Error('unreviewed source '+id);
 const loc=m.verification?.repair;if(!loc){holds.push({id,current_sha256:sha(after),reason:'No genuine finalized repair locator; prospective report is not finalization'});continue;}
 const auth=recordedPublishedRepair(root,id,after.toString(),loc);if(!auth.ok)throw Error(auth.reason);
 const rp=root+'/'+loc,rb=watch(rp),r=JSON.parse(rb),ab=watch(root+'/'+r.adjudication_file),a=JSON.parse(ab);
 if(sha(ab)!==r.adjudication_sha256||!ab.equals(watch(p+'/prospective-main-evidence/'+id+'.json'))||r.before_raw_sha256!==sha(before)||!watch(root+'/'+r.before_file).equals(before)||a.id!==id||a.changed!==true||a.mathematical_meaning_preserved!==true||!a.findings.some(f=>f.verdict==='confirmed'&&['repaired','repaired-and-visually-verified','resolved'].includes(f.status)))throw Error('source/adjudication binding '+id);
 const lines=fs.readFileSync(root+'/research/'+r.run+'-step3-published-claims.jsonl','utf8').split('\n').filter(Boolean).filter(l=>JSON.parse(l).id===id),claims=lines.map(JSON.parse),check=r.proof_layout;
 if(claims.length!==1||claims[0].pre_sha256!==r.pre_sha256||claims[0].group!==r.group||claims[0].run!==r.run||Date.parse(check.checked_at)<Date.parse(claims[0].claimed_at)||check.exit_code!==0||check.content_sha256!==r.content_sha256||!/^proof-layout: 1 items, \d+ steps, 0 defects(?:\s|$)/m.test(check.output??'')||Date.parse(check.checked_at)>Date.parse(r.recorded_at)||!check.command.includes('tools/proof-layout.mjs')||!check.command.includes('items/'+id+'.md'))throw Error('ownership/layout '+id);
 const ledger=fs.readFileSync(root+'/research/published-consumer-supplier-ledger.md','utf8'),begin='<!-- local-published-repair:'+r.ledger_marker+':begin -->',end='<!-- local-published-repair:'+r.ledger_marker+':end -->';
 if(ledger.split(begin).length!==2||ledger.split(end).length!==2)throw Error('ledger uniqueness');const block=ledger.split(begin)[1].split(end)[0];if(sha(block)!==r.ledger_sha256)throw Error('ledger hash');
 const dir=`${p}/native-evidence-${version}/${id}`;fs.mkdirSync(dir,{recursive:true});for(const[n,b]of[['source.md',after],['receipt.json',rb],['adjudication.json',ab],['ownership.json',lines[0]+'\n'],['ledger.md',block]])fs.writeFileSync(dir+'/'+n,b,{flag:'wx'});
 rows.push({id,auth,pinned_sha256:sha(before),original_sha256:sha(after),body_and_title_equal_read_observation:true,receipt:{path:rp,sha256:sha(rb)},adjudication_equal_fully_read_prospective:true,adjudication_sha256:sha(ab),recorded_at:r.recorded_at,completed_statuses:a.findings.filter(f=>f.verdict==='confirmed').map(f=>f.status),ownership:claims[0],ledger_sha256:sha(block),proof_layout:check});
}
for(const[f,h]of guards)if(sha(fs.readFileSync(f))!==h)throw Error('end drift '+f);
const result={kind:'private genuine native-finalization authentication only; no held extractor invoked',at:new Date().toISOString(),rows,holds,guards:Object.fromEntries(guards),technical_hold:'Typed extraction and Root scientific adoption remain separate; no production write or native owner attestation.',full_current_source_currency:false,production_written:false};fs.writeFileSync(`${p}/native-authentication-${version}.json`,JSON.stringify(result,null,2)+'\n',{flag:'wx'});console.log({path:`${p}/native-authentication-${version}.json`,sha256:sha(fs.readFileSync(`${p}/native-authentication-${version}.json`)),finalized:rows.length,holds});
