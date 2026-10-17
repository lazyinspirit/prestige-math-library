import json,re,difflib
from pathlib import Path
O=Path('research/numerical-optimization-dynamics-2026-10-16-owner-boundary85-98');P=O/'contradictions';oldsrc=json.loads((P/'source-fullbefore.json').read_text());src={id:Path('items/'+id+'.md').read_text() for id in oldsrc};ops=json.loads((P/'operations.json').read_text())
M={'lem-convergent-power-series-termwise-differentiation':{'1.2':'2.1'},'lem-rooted-tree-generating-function-series':{'1.2':'2.1','2.1':'1.2','2.2':'3.1'},'thm-finite-sectional-positivity-and-mass-reservoir-conservation':{'1.2':'2.1','2.1':'3.1'},'thm-product-kernel-pre-gelation-second-moment-blowup':{'1.2':'2.1','2.1':'3.1'},'thm-finite-sectional-global-ode-and-moment-bounds':{'2.1':'1.2','2.2':'2.1'}}
for x in ops:
 id=x['id'];field='evidence' if x['after']['status']=='checked' else 'reason';txt=x['after'][field];mp=M.get(id,{})
 if mp:txt=re.sub(r'(?<!\d)\d+\.\d+(?!\d)',lambda m:mp.get(m[0],m[0]),txt)
 x['after'][field]=txt
 if 'reviewed' in x['after']:x['after']['reviewed']['reason']=txt
 t=src[id];s=dict((h.strip(),v.strip()) for h,v in re.findall(r'^## ([^\n]+)\n([\s\S]*?)(?=^## |\Z)',t,re.M));ck=next((k for k in ['Statement','Definition','Construction','Example','Counterexample'] if k in s),None);pk=next((k for k in ['Proof','Verification','Refutation','Example','Counterexample'] if k in s),None);paras={m[1]:m[2].strip() for m in re.finditer(r'^\s*(\d+\.\d+)\s+([\s\S]*?)(?=^\s*\d+\.\d+\s|\Z)',s.get(pk,''),re.M)};refs=[n for n in paras if re.search(r'(?<!\d)'+re.escape(n)+r'(?!\d)',txt)];x['source_evidence']={'claim_section':ck,'fullclaim':s.get(ck,''),'proof_section':pk,'actualproofparagraphs':{n:paras[n] for n in refs},'case_anchor':txt,'root_confirmed':False}
(P/'operations-final.json').write_text(json.dumps(ops,indent=2,ensure_ascii=False)+'\n');(P/'source-final.json').write_text(json.dumps(src,indent=2,ensure_ascii=False)+'\n')
record={'reason':'Current source formatting/phase changes were independently read as full diffs; source mathematical text unchanged apart from dependency-frontmatter additions already owned by root. Initial actual read snapshots and original operations preserved.','changed_sources':[id for id in src if src[id]!=oldsrc[id]],'paragraph_label_maps':M,'no_source_write':True,'no_hashes_or_gates':True}
(P/'current-anchor-rebase.json').write_text(json.dumps(record,indent=2)+'\n')
for b in sorted(set(x['batch'] for x in ops)):
 file=f'research/numerical-optimization-dynamics-2026-10-16-batch-{b}.proof-contracts.json';raw=Path(file).read_text();d=json.loads(raw)
 for x in ops:
  if x['batch']!=b:continue
  rows=d['contracts'][x['id']]['boundaries'];i=next(i for i,r in enumerate(rows) if r['case']==x['case']);assert rows[i]==x['before'];rows[i]=x['after']
 dest=P/'proposed-final'/file;dest.parent.mkdir(parents=True,exist_ok=True);dest.write_text(json.dumps(d,indent=2,ensure_ascii=False)+'\n')
h=json.loads((O/'handoff.json').read_text());h['operations']['contradictions_and_strict_anchor']='contradictions/operations-final.json';h['initial_read_history']='contradictions/{operations.json,source-fullbefore.json} retained; use final operations and source-final.json after current source phase-format rebase.';(O/'handoff.json').write_text(json.dumps(h,indent=2)+'\n')
print({'final_contradiction_ops':len(ops),'changed_context_sources':len(record['changed_sources'])})
