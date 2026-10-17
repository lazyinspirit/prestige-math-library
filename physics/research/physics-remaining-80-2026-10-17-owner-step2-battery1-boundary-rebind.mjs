// Root-owned binding of actual row-specific scientific reaffirmations.
import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {itemHashGuard} from '../../tools/physics-support/item-hash.mjs';
const root=fileURLToPath(new URL('../',import.meta.url)),run='physics-remaining-80-2026-10-17',stem='research/'+run+'-owner-step2-battery1-';
const out=join(root,stem+'boundary-rebind'),read=p=>readFileSync(join(root,p),'utf8'),json=p=>JSON.parse(read(p)),sha=x=>createHash('sha256').update(x).digest('hex');
if(existsSync(join(out,'completion.json')))throw Error('Preserve completed binding adoption');
const state=json('.physics-autopilot/'+run+'/state.json');if(state.stage!=='2-scope-review'||Object.values(state.dispatches).some(x=>x.startedAt&&!x.endedAt))throw Error('Native source writer active');
const release=json('.physics-autopilot/'+run+'/owner-step2-format-repair-release.json'),sourcePins=new Map(release.source_bindings.map(x=>[x.id,x.sha256]));
const carrierPath=stem+'carrier-boundaries/release.json',carrier=json(carrierPath),proposals=json(stem+'carrier-boundaries/row-proposals.json');
const entropyPath=stem+'entropy-boundaries/SCI-released-root-rebind.json',entropy=json(entropyPath);
const cellPath=stem+'cell-boundaries/review.json',cell=json(cellPath);
if(carrier.stale_binding_only_reaffirmations!==12||proposals.length!==12||entropy.root_binding_targets.length!==6||cell.rows.filter(x=>x.binding_changed).length!==4)throw Error('Unexpected actual scientific scope');
const files=new Map(),bindings=[],adoptions=[];
function doc(batch){const path='research/'+run+'-batch-'+batch+'.proof-contracts.json';if(!files.has(path)){const before=read(path);files.set(path,{before,document:JSON.parse(before)});}return {path,...files.get(path)};}
function source(id){const raw=read('items/'+id+'.md');if(sha(raw)!==sourcePins.get(id))throw Error('Source changed after actual scientific review '+id);return raw;}
function rebind(batch,id,name,guard,origin){
 const {path,document}=doc(batch),row=document.contracts[id].boundaries.find(x=>x.case===name);if(!row?.template_review?.upheld)throw Error('No actual scientific review '+id+' '+name);
 if(guard&&JSON.stringify(row)!==JSON.stringify(guard))throw Error('Changed reviewed row '+id+' '+name);
 const raw=source(id),expected=sha(JSON.stringify({case:row.case,status:row.status,text:row.reason??row.evidence??''}));
 if(row.template_review.row_sha256!==expected)throw Error('Unreviewed boundary text changed '+id+' '+name);
 const before=row.template_review.item_sha256,after=itemHashGuard(raw);if(before===after)throw Error('Expected actual stale binding '+id+' '+name);
 row.template_review.item_sha256=after;bindings.push({path,id,case:name,before,after,source_raw_sha256:sha(raw),scientific_release:origin});
}
for(const p of proposals){if(p.worksheet!=='research/'+run+'-batch-62.proof-contracts.json'||p.scientific_disposition!=='reaffirm-specific-prior-review')throw Error('Unexpected proposal');const copy=read(stem+'carrier-boundaries/read-current/'+p.id+'.md');if(copy!==source(p.id))throw Error('Not the actually read source '+p.id);rebind(62,p.id,p.case,p.current_boundary_row_exactly_as_read,carrierPath);}
for(const p of entropy.root_binding_targets){const {document}=doc(p.batch),row=document.contracts[p.item].boundaries.find(x=>x.case===p.case);if(row.template_review.reason!==p.scientific_reason)throw Error('Changed actual scientific reason');rebind(p.batch,p.item,p.case,null,entropyPath);}
// The cell owner already wrote four binding fields before receiving the root reminder.
// Recompute independently and preserve that disclosed history; never claim root wrote them.
const cellFile='research/'+run+'-batch-64.proof-contracts.json',cellBefore=json(stem+'cell-boundaries/before/'+run+'-batch-64.proof-contracts.json'),cellCurrent=json(cellFile),projected=structuredClone(cellCurrent);
for(const p of cell.rows){const row=cellCurrent.contracts[p.id].boundaries.find(x=>x.case===p.case),old=cellBefore.contracts[p.id].boundaries.find(x=>x.case===p.case),actual=itemHashGuard(source(p.id));if(row.template_review.item_sha256!==actual||p.current_item_sha256!==actual||row.template_review.reason!==p.reason)throw Error('Stale cell scientific review '+p.id);if(p.binding_changed){projected.contracts[p.id].boundaries.find(x=>x.case===p.case).template_review.item_sha256=old.template_review.item_sha256;adoptions.push({id:p.id,case:p.case,root_recomputed_item_sha256:actual,source_raw_sha256:sha(source(p.id)),qualification:'Owner already wrote this disclosed binding; root independently recomputed and adopted its actual scientific release.'});}}
if(JSON.stringify(projected)!==JSON.stringify(cellBefore))throw Error('Cell owner changed more than disclosed four bindings');
mkdirSync(join(out,'before'),{recursive:true});const changed=[];
for(const [path,{before,document}] of files){if(read(path)!==before)throw Error('Concurrent row edit');writeFileSync(join(out,'before',path.split('/').at(-1)),before,{flag:'wx'});const after=JSON.stringify(document,null,2)+'\n';writeFileSync(join(root,path),after);changed.push({path,before_sha256:sha(before),after_sha256:sha(after)});}
writeFileSync(join(out,'completion.json'),JSON.stringify({run,at:new Date().toISOString(),qualification:'Root binding of 18 actual row-specific scientific reaffirmations and independent adoption of four already-written bindings. No source or scientific decision changed; all prior reports and preimages preserved.',reports:[carrierPath,entropyPath,cellPath].map(path=>({path,sha256:sha(read(path))})),bindings,already_written_adoptions:adoptions,files:changed},null,2)+'\n');
console.log(JSON.stringify({root_rebound:bindings.length,independently_adopted:adoptions.length,changed_contracts:changed.length}));
