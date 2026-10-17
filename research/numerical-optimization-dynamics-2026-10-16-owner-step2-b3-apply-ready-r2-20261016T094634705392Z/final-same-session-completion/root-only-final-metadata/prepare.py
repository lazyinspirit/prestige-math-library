#!/usr/bin/env python3
import json,re,yaml,difflib,copy
from pathlib import Path
R='numerical-optimization-dynamics-2026-10-16'; repo=Path.cwd(); base=Path(__file__).resolve().parent
owner=base.parent/'same-owner-completion-evidence'
draft=json.loads((owner/'ROOTONLY-new-items-and-definition-mirrors.json').read_text())
new=draft['new_items']; owed={x['id'] for x in draft['definition_citation_mirror_obligations']}
sources=set(); changes=[]; operations=[]
def read(rel):
 sources.add(rel);return (repo/rel).read_text()
def item(i):return read(f'items/{i}.md')
def fm(t):return yaml.safe_load(t.split('---',2)[1])
def section(t,s):
 m=re.search(r'^## '+re.escape(s)+r'\s*\n(.*?)(?=^## |\Z)',t,re.M|re.S)
 if not m:raise ValueError('missing section '+s)
 return m.group(1).strip()
def steps(t):
 p=section(t,'Proof' if '\n## Proof\n' in t else 'Verification');out=[]
 for m in re.finditer(r'^(\d+\.\d+) (.*?)(?=^\d+\.\d+ |\Z)',p,re.M|re.S):
  s=m.group(2).strip();z=re.search(r'\[([^\[\]\n]+)\]\s*(?:∎)?\s*$',s)
  if not z:raise ValueError('no terminal tag '+m.group(1))
  out.append(dict(id='step-'+m.group(1),claim=s[:z.start()].rstrip(),step=m.group(1),inputs=[x.strip() for x in z.group(1).split(',')]))
 return out
def save(rel,obj):
 old=read(rel); out=json.dumps(obj,ensure_ascii=False,indent=2)+'\n' if not isinstance(obj,str) else obj
 if old==out:return
 for sub,txt in [('before',old),('proposed',out)]:
  p=base/sub/rel;p.parent.mkdir(parents=True,exist_ok=True);p.write_text(txt)
 p=base/'diffs'/(rel.replace('/','__')+'.diff');p.parent.mkdir(parents=True,exist_ok=True);p.write_text(''.join(difflib.unified_diff(old.splitlines(True),out.splitlines(True),fromfile=rel,tofile=rel)))
 changes.append(rel)
def mirrors(c,consumer,allquotes=False):
 for z in c.get('citations',[]):
  if allquotes or z.get('source') in owed:
   src=z['source'];s=z.get('source_section','Definition' if src.startswith(('alg-','def-')) else 'Statement');txt=section(item(src),s)
   if z.get('quote')!=txt:operations.append(dict(consumer=consumer,supplier=src,field='quote',section=s));z['quote']=txt

def contract(x):
 t=item(x['id']);ds=steps(t);cit=[]
 for z in x['supplier_section_quotations']:
  i=z['id'];fact='F'+str(len(cit)+1);cit.append(dict(fact=fact,source=i,source_section=z['section'],quote=section(item(i),z['section']),uses=[s['step']for s in ds if fact in s['inputs']]))
 b=[]
 for case in ['empty','zero','one','degenerate','endpoints','nonempty-choice','iff-forward','iff-reverse']:
  if case=='zero':v=dict(status='checked',evidence='Proof 3.1 explicitly includes N=0: at most one entered pass, with no update. Earlier failure or tolerance returns remain stated statuses.')
  elif case=='one':v=dict(status='checked',evidence='Proof 1.1 initializes the first pass and Proof 2.1 covers its only possible update when N=1; Proof 3.1 bounds the two entered passes.')
  elif case=='endpoints':v=dict(status='checked',evidence='Proof 3.1 returns at entered index N before another update; the index-zero endpoint is initialized in Proof 1.1.')
  elif case=='degenerate':v=dict(status='checked',evidence='Proof 2.1 and 3.1 allow an immediate early return, which only shortens the finite index segment; no tolerance attainment is assumed.')
  elif case=='empty':v=dict(status='not_applicable',reason='Admissible inputs specify an initial point, so an empty input domain is excluded; zero update budget is treated separately.')
  elif case=='nonempty-choice':v=dict(status='not_applicable',reason='The procedures have supplied initial data and returning primitives; the finite counter proof selects no arbitrary family of witnesses.')
  else:v=dict(status='not_applicable',reason='This is a conditional work/status implication, not an equivalence.')
  b.append(dict(case=case,**v))
 return dict(citations=cit,derivations=ds,routine_steps=[],boundaries=b,finite_smoke=[],risk_review=dict(status='complete',reviewer='original3 same-session completion',notes='Exact local induction and returning-primitive qualifications accepted in the original-owner final result; no convergence, success, backend-cost or independently read external proof is asserted.'))

# Native3 manifest sync: existing scope only, plus two approved lemmas. SCF97 add only one lemma and preserve existing scope.
for batch in [3,97]:
 rel=f'research/{R}-batch-{batch}.pages.json';d=json.loads(read(rel))
 for p in d:
  for row in p['items']:
   if batch==3 or row['id'] in owed:
    f=fm(item(row['id']));row['deps']=f.get('deps',[])
    if 'justified_by' in f:row['justified_by']=f['justified_by']
  for x in new:
   if int(x['batch'])==batch and p['id']==x['page']:
    assert not any(z['id']==x['id']for z in p['items'])
    f=fm(item(x['id']));row={k:f[k]for k in ['id','kind','title','deps']};row['justified_by']=f.get('justified_by',[])
    j=next(j for j,z in enumerate(p['items'])if z['id']==x['insert_after']);p['items'].insert(j+1,row)
 save(rel,d)
# Native3 existing full proof paragraphs/citations; outside owners only existing citation fields, no added contracts/classifications.
for batch in [3,65,75,97]:
 rel=f'research/{R}-batch-{batch}.proof-contracts.json';d=json.loads(read(rel))
 for i,c in d['contracts'].items():
  mirrors(c,i,allquotes=batch==3)
  if batch==3:
   actual=steps(item(i));prior={z['step']:z for z in c.get('derivations',[])}
   for z in actual:
    if z['step']in prior:z['id']=prior[z['step']]['id']
   c['derivations']=actual
 for x in new:
  if int(x['batch'])==batch:
   assert x['id']not in d['contracts'];d['scope'].append(x['id']);d['contracts'][x['id']]=contract(x)
 save(rel,d)
# Coverage adds exactly the local-composition records, never a second external-reading classification.
for batch in [3,97]:
 rel=f'research/{R}-batch-{batch}.coverage.json';d=json.loads(read(rel))
 for p in d['pages']:
  add=[dict(item=x['id'],name='Local finite-budget work/status induction',disposition='included',reason=x['truthful_source_coverage']['local_composition']+' External citations supply iteration-format context only; no new external full-text reading or external proof attribution is claimed.',references=x['truthful_source_coverage']['external_references']) for x in new if int(x['batch'])==batch and x['page']==p['page']]
  if add:p.setdefault('local_compositions',[]).extend(add)
 save(rel,d)
# Exactly three page placements; no other prose rewrite.
for pth in dict.fromkeys(x['page_path']for x in new):
 t=read(pth)
 for x in new:
  if x['page_path']==pth:
   assert f'  - {x["id"]}\n'not in t
   needle=f'  - {x["insert_after"]}\n';assert t.count(needle)==1;t=t.replace(needle,needle+f'  - {x["id"]}\n')
 save(pth,t)
# No batch100 snapshot yet: exact quote fields are refreshed by a separate staged utility after source coherent.
(base/'batch100-pending.json').write_text(json.dumps(dict(status='pending-root-final-source',target=f'research/{R}-batch-100.proof-contracts.json',allowed_operation='Update quotes in existing citations whose supplier is one of the 15 current Definition mirror obligations; preserve all classifications/entries; no new contracts.',sources=sorted(owed)),indent=2)+'\n')
# Before files bind bytewise guards, avoiding canonical hashes/recertification.
for rel in sorted(sources):
 p=base/'guards'/rel;p.parent.mkdir(parents=True,exist_ok=True);p.write_bytes((repo/rel).read_bytes())
report=dict(run=R,status='ROOTONLY unapplied; batch100 separately pending',canonical_targets=changes,new_items=[x['id']for x in new],new_item_batches={x['id']:x['batch']for x in new},page_placements=[{k:x[k]for k in ['id','page','page_path','insert_after']}for x in new],source_guard_paths=sorted(sources),existing_quote_operations=operations,external_reading_claims_added=False,unused_prototypes_registered=[],root_review_nonliteral=['Three new boundary worksheets state the exact counter cases and returning-primitive qualification.','Two coverage local_compositions arrays preserve prior external source classifications and add only truthful local-proof records.'],excluded=['Batch100 pending final source; no outside65/75/97 new contracts or preserved-classification duplication.','No levels, readiness, native control, canonical metadata application, gates or source writes.'])
(base/'integration.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
print(json.dumps(dict(targets=len(changes),newitems=3,quote_operations=len(operations),guards=len(sources)),indent=2))
