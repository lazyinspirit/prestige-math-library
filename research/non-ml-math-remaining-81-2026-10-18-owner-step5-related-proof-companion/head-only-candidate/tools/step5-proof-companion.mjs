// A source-backed work admission, never inferred original reading or review.
import {readFileSync} from 'node:fs';
import {resolve,join} from 'node:path';
import {createHash} from 'node:crypto';
import {itemHashGuard} from './item-hash.mjs';
const hash=s=>createHash('sha256').update(s).digest('hex');
const section=(s,name)=>s.match(new RegExp('^## '+name+'\\n([\\s\\S]*?)(?=^## |$(?![\\s\\S]))','m'))?.[1]??'';
const publicPart=s=>['Definition','Statement'].map(k=>[k,section(s,k).trim()]);
const kind=s=>s.match(/^kind:\s*(\S+)\s*$/m)?.[1];
const dep=(s,id)=>s.split(/^---\s*$/m)[1]?.match(/^deps:\s*\n((?:[ \t].*\n)*)/m)?.[1].split('\n').some(line=>line.trim()===`- ${id}`);
const steps=s=>section(s,'Proof').trim().split(/\n\s*\n/).filter(Boolean);
export function validateProofCompanion({root,run,row,entry,text,initial,baseline,evidence,document,reader,need}){
 const r=entry.related_work,parent=row.entries.find(e=>e.id===r?.parent_id);
 need(r&&parent&&parent!==entry&&parent.source_kind==='concern'&&parent.batch===entry.batch
  &&parent.reader_batch===entry.reader_batch&&parent.owner_review?.confirmed_defect===true,
  'proof companion requires an ordinary same-batch original concern admitted in the same registry');
 need(document.items_read?.includes(parent.id)&&Number.isSafeInteger(parent.concern_index)
  &&parent.concern_index>=0&&JSON.stringify(document.concerns?.[parent.concern_index])===JSON.stringify(parent.concern)
  &&parent.concern.id===parent.id,'proof companion parent lacks its exact original reader concern');
 need(Object.values(initial.assignments??{}).every(a=>Array.isArray(a)&&a.every(x=>(typeof x==='string'?x:x.id)!==entry.id)),
  'proof companion was assigned original initial work');
 const bound=file=>{const p=resolve(root,file??'');need(Object.hasOwn(evidence,p),'missing bound companion source/evidence');return readFileSync(p,'utf8');};
 const before=bound(r.before_file),parentBefore=bound(r.parent_before_file),proposed=bound(r.proposed_file),parentProposed=bound(r.parent_proposed_file);
 const parentCurrent=readFileSync(join(root,'items',`${parent.id}.md`),'utf8');
 need(before===text&&parentBefore===parentCurrent&&itemHashGuard(parentBefore)===baseline[parent.id]
  &&initial.before[parent.id]===baseline[parent.id]&&parent.before_guard_sha256===baseline[parent.id],
  'proof companion requires both exact unchanged initial source preimages');
 for(const [old,next,id]of [[before,proposed,entry.id],[parentBefore,parentProposed,parent.id]])need(
  old.match(/^id:\s*(\S+)\s*$/m)?.[1]===id&&next.match(/^id:\s*(\S+)\s*$/m)?.[1]===id
  &&/^status:\s*draft\s*$/m.test(next)&&kind(old)===kind(next)
  &&JSON.stringify(publicPart(old))===JSON.stringify(publicPart(next))
  &&publicPart(old).some(([,s])=>s.trim().length>0),
  'proof companion requires unchanged nonempty public interfaces and stable draft identities/kinds');
 need(kind(before)==='theorem'&&kind(parentBefore)==='algorithm'&&dep(before,parent.id)&&dep(proposed,parent.id),
  'proof companion must be the existing direct dependent theorem of the concerned algorithm');
 const proof=steps(parentBefore),newProof=steps(proposed);
 need(proof.length===2&&proof.every(p=>/^\d+\.\d+ /.test(p))&&!section(parentProposed,'Proof').trim()
  &&newProof.length===proof.length+steps(before).length,
  'proof companion requires complete two-step algorithm soundness relocation into existing theorem proof');
 const review=JSON.parse(bound(r.review_file));
 need(review.version===1&&review.run===run&&review.parent_id===parent.id&&review.id===entry.id
  &&review.reviewed_by==='root'&&review.authorized_by==='owner'
  &&typeof review.scientific_owner==='string'&&/^\/root\/[a-z0-9_]+$/.test(review.scientific_owner)
  &&parent.owner_review.scientific_owner===review.scientific_owner&&entry.owner_review.scientific_owner===review.scientific_owner
  &&review.parent_full_source_read===true&&review.companion_full_source_read===true
  &&review.native_execution_coverage_adopted===false&&review.native_full_read_adopted===false
  &&review.original_finding_is_parent_only===true&&review.unchanged_public_interfaces===true
  &&review.parent_before_raw_sha256===hash(parentBefore)&&review.before_raw_sha256===hash(before)
  &&review.parent_proposed_raw_sha256===hash(parentProposed)&&review.proposed_raw_sha256===hash(proposed)
  &&Number.isFinite(Date.parse(review.reviewed_at))&&Date.parse(review.reviewed_at)>=Date.parse(reader.ended_at)
  &&Date.parse(entry.owner_review.reviewed_at)>=Date.parse(review.reviewed_at)
  &&typeof review.reason==='string'&&review.reason.trim().length>=80,
  'missing actual same-owner full-source root confirmation for the necessary proof relocation');
 need(Array.isArray(review.relocations)&&review.relocations.length===2&&review.relocations.every((move,i)=>
  move.source_step===proof[i]&&move.target_step===newProof[i]
  &&typeof move.reason==='string'&&move.reason.trim().length>=80),
  'proof companion requires exact original and proposed soundness steps with individual owner correspondence');
 const oldProof=steps(before);
 need(Array.isArray(review.existing_proof_steps)&&review.existing_proof_steps.length===oldProof.length
  &&review.existing_proof_steps.every((move,i)=>move.source_step===oldProof[i]
   &&move.target_step===newProof[i+2]&&typeof move.reason==='string'&&move.reason.trim().length>=80),
  'proof companion requires literal preservation correspondence for every existing theorem proof step');
 need(entry.owner_review.full_current_source_read===true&&parent.owner_review.full_current_source_read===true
  &&entry.owner_review.source_raw_sha256===hash(before)&&parent.owner_review.source_raw_sha256===hash(parentBefore),
  'proof companion cannot infer either source reading from old native coverage');
}
