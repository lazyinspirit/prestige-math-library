from pathlib import Path
import json,re,hashlib,yaml,collections
run='advanced-qft-supersymmetry-build-2026-10-23';r=Path('research');o=r/f'{run}-owner-resolution/old59-60-postappend-repair';b=o/'bounded-pass2';target='thm-qftx-projective-gaga-for-monad-data';p=Path('items')/(target+'.md');t=p.read_text();digest=lambda f:hashlib.sha256(Path(f).read_bytes()).hexdigest()
def section(t,h):
 m=re.search(r'^## '+re.escape(h)+r'\s*\n(.*?)(?=^## |\Z)',t,re.M|re.S);return m[1].strip() if m else ''
statement=section(t,'Statement');proposal=json.loads((o/'guarded-metadata-proposal.json').read_text())
for item in proposal['items']:
 if item['id']==target:
  item['source_current_sha256']=digest(p);item['set_statement_mirror']=statement;item['statement_changed']=True
  item['interface_change_classification']='Type-explicit clarification of the same analytification functor eta*: no changed hypothesis or conclusion.'
  steps=[]
  for para in section(t,'Proof').split('\n\n'):
   m=re.match(r'^(\d+\.\d+)\s+(.*)\s+\[([^\]]+)\](?:\s*∎)?$',para,re.S)
   if m:steps.append({'step':m[1],'claim':m[2].strip(),'from':[x.strip() for x in m[3].split(',')]})
  item['contract_refresh']['derivations_from_current_source']=steps
  for cite in item['contract_refresh']['citations_from_current_source']:
   cite['uses']=[s['step'] for s in steps if cite['fact'] in s['from']]
  for key in ['manifest','contract']:
   actual=Path(item[key+'_path']);arc=b/('before-current-'+actual.name)
   if not arc.exists():arc.write_bytes(actual.read_bytes())
   item['guard_'+key+'_observed_sha256']=digest(actual)
 for cite in item.get('contract_refresh',{}).get('citations_from_current_source',[]):
  if cite.get('source')==target:cite['quote']=statement;cite['source_sha256_observed']=digest(p)
(o/'guarded-metadata-proposal.json').write_text(json.dumps(proposal,indent=2)+'\n')
# Exact existing contract-quotation refreshes, proposed only.
ops=[]
for n in range(1,63):
 cp=r/f'{run}-batch-{n}.proof-contracts.json'
 if not cp.exists():continue
 j=json.loads(cp.read_text())
 for consumer,c in j.get('contracts',{}).items():
  for k,cite in enumerate(c.get('citations',[])):
   if cite.get('source')!=target:continue
   arc=b/('before-current-'+cp.name)
   if not arc.exists():arc.write_bytes(cp.read_bytes())
   ops.append({'path':str(cp),'guard_sha256':digest(cp),'consumer':consumer,'json_pointer':f'/contracts/{consumer}/citations/{k}/quote','old_quote':cite.get('quote'),'new_quote':statement,'source_current_sha256':digest(p),'reason':'Preserve exact source quotation after typing eta^-1 and its tensor base; scientific claim unchanged.'})
(b/'guarded-exact-quote-refresh.json').write_text(json.dumps({'status':'unapplied; root-owned shared contracts only','operations':ops},indent=2)+'\n')
# Actual current old1–62 source consumer graph; no active new author files parsed.
graph={};home={}
for n in range(1,63):
 mp=r/f'{run}-batch-{n}.pages.json'
 if not mp.exists():continue
 for page in json.loads(mp.read_text()):
  for x in page.get('items',[]):
   ip=Path('items')/(x['id']+'.md')
   if not ip.exists():continue
   fm=yaml.safe_load(re.match(r'\A---\s*\n(.*?)^---\s*$',ip.read_text(),re.M|re.S)[1]);graph[x['id']]=fm.get('deps',[]);home[x['id']]={'path':str(ip),'sha256':digest(ip),'batch':n,'page':page['id']}
rev=collections.defaultdict(set)
for i,ds in graph.items():
 for d in ds:rev[d].add(i)
seen={target};q=[target]
while q:
 for i in rev[q.pop()]:
  if i not in seen:seen.add(i);q.append(i)
reasons={'lem-qftx-p2-beilinson-diagonal-and-framed-vanishing':'Uses exact analytification, cohomology and qualified algebraic-family fiber comparison; eta* is precisely the same functor.', 'lem-qftx-twistor-line-section-direct-image':'Its proof algebraizes the bundle and compares closed-immersion quotient-module stalks; eta^-1 followed by tensor types that operation correctly without changing it.', 'thm-qftx-framed-penrose-ward-correspondence-on-s4':'Uses the absolute equivalence and the universal-line lemma; no new family or metric hypothesis follows from the notation clarification.', 'lem-qftx-asd-twistor-vanishing-and-monad-reconstruction':'Uses coherent algebraization, cohomology and diagonal construction with existing family qualifications; unchanged exact functor.', 'thm-qftx-zero-fi-regular-adhm-asd-correspondence':'Uses the qualified GAGA and family interface; typing eta* changes no charge, framing, rotation or first-order family assertion.'}
records=[]
for i in sorted(seen-{target}):
 records.append({'id':i,**home[i],'direct':target in graph[i],'disposition':'interface-compatible; no source repair required','reason':reasons.get(i,'Indirect use through the checked exact equivalence/dictionary suppliers; the typed eta* formula changes neither their hypotheses nor their mathematical conclusions. Existing prerequisite holds and rank/family limits remain.')})
(b/'consumer-interface-review.json').write_text(json.dumps({'status':'same-owner limited interface review; not whole-item proof acceptance','supplier':{'id':target,'path':str(p),'sha256':digest(p)},'records':records},indent=2)+'\n')
print('quote operations',len(ops),'consumer records',len(records));print('source',digest(p));print('proposal',digest(o/'guarded-metadata-proposal.json'))
