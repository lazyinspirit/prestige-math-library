from pathlib import Path
import json,yaml,re,hashlib,collections
run='advanced-qft-supersymmetry-build-2026-10-23';r=Path('research');o=r/f'{run}-owner-resolution/old59-60-postappend-repair'
ids=['thm-qftx-projective-gaga-for-monad-data','lem-qftx-asd-penrose-kernel-vanishing','lem-qftx-asd-twistor-vanishing-and-monad-reconstruction','lem-qftx-adhm-real-monad-normalization-and-charge','thm-qftx-zero-fi-regular-adhm-asd-correspondence','thm-adhm-fixed-point-instanton-count']
def sha(p):return hashlib.sha256(Path(p).read_bytes()).hexdigest()
def source(i):
 p=Path('items')/(i+'.md');t=p.read_text();fm=yaml.safe_load(t.split('---',2)[1]);return t,fm
def section(t,h):
 m=re.search(r'^## '+re.escape(h)+r'\s*\n(.*?)(?=^## |\Z)',t,re.M|re.S);return m.group(1).strip() if m else None
rows={};bases={};paths={};graph={};homes={}
for b in range(1,63):
 p=r/f'{run}-batch-{b}.pages.json'
 if not p.exists():continue
 a=json.loads(p.read_text())
 for row in a:
  for x in row.get('items',[]):
   graph[x['id']]=x.get('deps',[]);homes[x['id']]={'batch':b,'page':row['id']}
   if x['id'] in ids:rows[x['id']]=x;paths[x['id']]=str(p)
# Use actual current owned source deps for the consumer closure, without parsing any active63–69 source.
for i in list(graph):
 p=Path('items')/(i+'.md')
 if p.exists():
  try:graph[i]=source(i)[1].get('deps',[])
  except:pass
seeds=['lem-qftx-asd-penrose-kernel-vanishing','lem-qftx-asd-twistor-vanishing-and-monad-reconstruction'];rev=collections.defaultdict(set)
for i,ds in graph.items():
 for d in ds:rev[d].add(i)
seen=set(seeds);q=list(seeds)
while q:
 for i in rev[q.pop()]:
  if i not in seen:seen.add(i);q.append(i)
proposal={'status':'unapplied guarded field/contract refresh proposal; not a strict ready contract or readiness record','items':[],'page_requires_additions':{'qftx-adhm-linear-data-and-framed-monads':['qftx-gaga-analytic-coherence','qftx-gaga-local-analytic-flatness','qftx-gaga-compact-coherent-finiteness','qftx-gaga-projective-scalar-dolbeault'],'qftx-adhm-zero-fi-asd-correspondence':['qftx-coupled-penrose-vanishing-on-the-round-four-sphere','qftx-positive-real-linear-monad-normal-forms'],'qftx-adhm-moduli':['qftx-adhm-zero-fi-asd-correspondence','qftx-noncompact-equivariant-borel-moore-localization']},'public_interface_seeds':seeds,'current_source_consumer_closure':sorted(seen),'root_owned_followup':'Recompute actual dependency levels in supplier order after new inventories are authored; bind changed source/manifest/contracts and reread pending supplier proofs before any native readiness update.'}
for i in ids:
 t,fm=source(i);b=homes[i]['batch'];mp=paths[i];cp=str(r/f'{run}-batch-{b}.proof-contracts.json');before=o/'preimages/research'/Path(mp).name;bc=o/'preimages/research'/Path(cp).name
 facts=section(t,'Facts & Assumptions') or '';steps=[]
 for p in (section(t,'Proof') or '').split('\n\n'):
  m=re.match(r'^(\d+\.\d+)\s+(.*)\s+\[([^\]]+)\](?:\s*∎)?$',p,re.S)
  if m:steps.append({'step':m[1],'claim':m[2].strip(),'from':[x.strip() for x in m[3].split(',')]})
 citations=[];pending=[]
 for m in re.finditer(r'^\[([AFL]\d+)\]\s+(.*?)(?=\n\n|\Z)',facts,re.M|re.S):
  for target in re.findall(r'\[\[([^\]|]+)',m[2]):
   p=Path('items')/(target+'.md')
   uses=[s['step'] for s in steps if m[1] in s['from']]
   if p.exists():
    st,ff=source(target);heading='Definition' if ff.get('kind') in ['definition','algorithm'] else 'Statement';quote=section(st,heading)
    citations.append({'fact':m[1],'source':target,'source_section':heading,'quote':quote,'uses':uses,'source_sha256_observed':sha(p),'note':'Current exact quote; not a supplier-proof acceptance claim.'})
   else:pending.append({'fact':m[1],'source':target,'uses':uses,'state':'actual source absent at proposal generation; quote must be read and bound after native author drains; no invented current quotation'})
 original=(o/'preimages/items'/(i+'.md')).read_text()
 proposal['items'].append({'id':i,'source_path':str(Path('items')/(i+'.md')),'source_before_sha256':hashlib.sha256(original.encode()).hexdigest(),'source_current_sha256':sha(Path('items')/(i+'.md')),'statement_changed':section(original,'Statement')!=section(t,'Statement'),'manifest_path':mp,'guard_manifest_observed_sha256':sha(mp),'archived_manifest_sha256':sha(before),'contract_path':cp,'guard_contract_observed_sha256':sha(cp),'archived_contract_sha256':sha(bc),'set_manifest_fields':{k:fm.get(k) for k in ['deps','dependency_roles','sources','provenance']},'set_statement_mirror':section(t,'Statement'),'contract_refresh':{'status':'partial proposal from actual facts/steps; retain and review original boundary worksheets rather than fabricate dispositions','citations_from_current_source':citations,'pending_citations':pending,'derivations_from_current_source':steps,'boundaries_action':'Preserve applicable prior cases, update stale step references and exact evidence after root review; missing supplier proofs remain holds.'}})
(o/'guarded-metadata-proposal.json').write_text(json.dumps(proposal,indent=2)+'\n')
(o/'changed.ids.json').write_text(json.dumps(ids,indent=2)+'\n')
print('changed',len(ids),'consumer closure',len(seen));print('\n'.join(sorted(seen)))
