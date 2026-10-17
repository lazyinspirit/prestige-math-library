from pathlib import Path
import json,difflib
p=Path('research/numerical-optimization-dynamics-2026-10-16-ROOT-step57-created-maintenance-cert-cycle2')
previous=Path('research/numerical-optimization-dynamics-2026-10-16-ROOT-step57-created-maintenance-cert-cycle1')
s=(previous/'proposed/step5-created-maintenance-cert.mjs').read_text()
def one(text,before,after):
 if text.count(before)!=1: raise ValueError('ambiguous proposal replacement')
 return text.replace(before,after)
s=one(s,"import {itemHashGuard} from './item-hash.mjs';","import {itemHashGuard,itemHashJudge} from './item-hash.mjs';")
s=one(s,"  if(!targets.size||!(result.maintenance_packs??[]).length)return {basis,evidence,records};",'''  const byId=new Map(items.map(x=>[x.id,x]));
  // Prior records are authenticated by verifyCertification before this call.
  // Never drop them merely because this wave performed no maintenance.
  const finish=()=>{
    for(const entry of prior?.maintenance_certifications??[]){
      if(basis.has(entry.id))continue; // Genuine newer maintenance supersedes it.
      const item=byId.get(entry.id),old=priorItems.get(entry.id);
      need(creations.has(entry.id)&&!eligible.has(entry.id)&&item&&!item.published&&old
        &&entry.after_guard_sha256===current[entry.id]&&entry.after_sha256===item.sha256
        &&entry.after_item_sha256===old.item_sha256&&entry.after_guard_sha256===old.guard_sha256
        &&entry.statement_sha256===item.statement_sha256,'stale prior maintained-helper source');
      const text=readFileSync(join(root,'items',`${entry.id}.md`),'utf8');
      need(itemHashJudge(text)===entry.after_item_sha256&&Array.isArray(entry.suppliers)
        &&entry.suppliers.every(x=>byId.get(x.id)?.sha256===x.sha256),'stale prior maintained-helper certification basis');
      basis.set(entry.id,entry);records.push(entry);
    }
    return {basis,evidence,records};
  };
  if(!targets.size||!(result.maintenance_packs??[]).length)return finish();''')
s=one(s,"  const byId=new Map(items.map(x=>[x.id,x])),aliases=new Map();","  const aliases=new Map();")
s=one(s,"&&old.item_sha256===before.sha256&&old.guard_sha256===before.guard_sha256", "&&old.item_sha256===itemHashJudge(original)&&old.guard_sha256===before.guard_sha256")
s=one(s,"dispatch:attemptPath,prompt:promptPath,before_sha256:before.sha256,after_sha256:item.sha256,before_guard_sha256:before.guard_sha256,", "dispatch:attemptPath,prompt:promptPath,before_sha256:before.sha256,after_sha256:item.sha256,after_item_sha256:itemHashJudge(text),before_guard_sha256:before.guard_sha256,")
s=one(s,"  return {basis,evidence,records};\n}","  return finish();\n}")
(p/'proposed/step5-created-maintenance-cert.mjs').write_text(s)
workflow=(previous/'proposed/step5-workflow.mjs').read_text()
workflow=one(workflow,"      &&entry.after_sha256===item?.item_sha256&&entry.after_guard_sha256===item?.guard_sha256", "      &&entry.after_item_sha256===item?.item_sha256&&entry.after_guard_sha256===item?.guard_sha256\n      &&['before_sha256','after_sha256','after_item_sha256','before_guard_sha256','after_guard_sha256','statement_sha256'].every(k=>/^[a-f0-9]{64}$/.test(entry[k]??''))")
(p/'proposed/step5-workflow.mjs').write_text(workflow)
doc=(previous/'proposed/WORKFLOW.md').read_text()
doc=one(doc,"surgical reconstruction from the prior certified helper, unchanged metadata and", "surgical reconstruction whose guard and `itemHashJudge` match the prior certified\nhelper (raw maintenance hashes are distinct), unchanged metadata and")
doc=one(doc,"all ordinary gates remain unchanged. Saved certification reuse also checks the", "all ordinary gates remain unchanged. Still-current authenticated prior maintenance\nbases carry forward by helper ID on later waves; a genuine newer basis supersedes\nthem, while stale source/supplier evidence fails rather than disappearing.\nSaved certification reuse also checks the")
(p/'proposed/WORKFLOW.md').write_text(doc)
for f in ['step5-workflow.mjs','WORKFLOW.md']:
 (p/(f+'.diff')).write_text(''.join(difflib.unified_diff((p/'before'/f).read_text().splitlines(True),(p/'proposed'/f).read_text().splitlines(True),fromfile=f,tofile=f)))
for f in ['step5-created-maintenance-cert.mjs','step5-workflow.mjs','WORKFLOW.md']:
 (p/(f+'.cycle1-to-cycle2.diff')).write_text(''.join(difflib.unified_diff((previous/'proposed'/f).read_text().splitlines(True),(p/'proposed'/f).read_text().splitlines(True),fromfile='cycle1/'+f,tofile='cycle2/'+f)))
packet=json.loads((previous/'proposal.json').read_text())
packet['status']='research-only second/final quality-cycle successor; unexecuted; no hashes calculated'
packet['supersedes_proposal_only']=str(previous/'proposal.json')
for op in packet['operations']:
 for field in ['exact_preimage','proposed']:
  if field in op:op[field]=op[field].replace(str(previous),str(p))
 if op['path']=='tools/step5-workflow.mjs':
  for replacement in op['replacements']:
   b=replacement['before']
   if b=='  verifyEvidence(row.evidence,{root,run,certificate:row});\n  return row;':
    end=workflow.index(b)+len(b);start=workflow.index("  requireValue(Array.isArray(row.maintenance_certifications??[])")
    replacement['after']=workflow[start:end]
 if op['path']=='WORKFLOW.md':op['append']=doc[len((p/'before/WORKFLOW.md').read_text()):]
(p/'proposal.json').write_text(json.dumps(packet,indent=2)+'\n')
