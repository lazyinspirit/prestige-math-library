from pathlib import Path
import re,json,yaml
run='non-ml-math-remaining-81-2026-10-18';R=Path('research');owner=R/(run+'-owner-coha-operation-completion')
new=['def-intrinsic-quotient-stack-borel-moore-grading','lem-quiver-parabolic-levi-borel-model-comparisons','thm-quiver-quotient-stack-borel-moore-operation-package','lem-algebraic-milnor-neighborhoods-admit-controlled-sector-transport','thm-normalized-rational-vanishing-cycles-have-coherent-operations','lem-standard-rational-quiver-vanishing-cycles-realize-critical-correspondences']
def read(id):
 p=Path('items')/(id+'.md');s=p.read_text();fm,b=s[4:].split('\n---\n',1);return yaml.safe_load(fm),b
p=R/(run+'-batch-55.pages.json');pages=json.loads(p.read_text());allids=[]
for page in pages:
 rows={r['id']:r for r in page['items']}
 if page['kind']=='A':
  for id in new:rows.setdefault(id,{'id':id,'source_path':'items/'+id+'.md'})
  order=[r['id'] for r in page['items'] if r['id'] not in new]
  for before,insert in [('def-quiver-potential-and-monodromic-vanishing-cycle-data',new[3:5]),('def-untwisted-quiver-cohomological-hall-algebra',new[:3]),('def-critical-quiver-coha-from-vanishing-cycle-data',[new[5]])]:
   i=order.index(before);order[i:i]=insert
  page['items']=[rows[id] for id in order]
 # Stable supplier-first inventory order, without changing level metadata.
 pending=list(page['items']);ordered=[];emitted=set();localpage={r['id'] for r in pending}
 while pending:
  found=next((i for i,r in enumerate(pending) if not ((set(read(r['id'])[0].get('deps',[])) & localpage)-emitted)),None)
  if found is None:raise RuntimeError('page inventory cycle')
  row=pending.pop(found);ordered.append(row);emitted.add(row['id'])
 page['items']=ordered
 for row in page['items']:
  id=row['id'];allids.append(id);x,b=read(id)
  for k in ['id','kind','title','deps','justified_by','provenance','sources','proof_strategy']:
   if k in x:row[k]=x[k]
   elif k in row and k!='justified_by':row.pop(k)
  heading='Definition' if x['kind']=='definition' else 'Example' if x['kind']=='example' else 'Source-reported scope' if x['kind']=='remark' else 'Statement'
  match=re.search(r'^## '+heading+r'\n(.*?)(?=\n## |\Z)',b,re.M|re.S)
  if not match:raise RuntimeError('no statement '+id)
  row['statement']=match.group(1).strip()
p.write_text(json.dumps(pages,indent=2,ensure_ascii=False)+'\n')
# Bind the actual supplier order to the A-page inventory; keep prose and levels separate.
p=Path('library/hall-algebras-and-tensor-categories/cohomological-hall-algebras-and-quiver-correspondences.md');s=p.read_text();fm,b=s[4:].split('\n---\n',1);x=yaml.safe_load(fm);x['items']=[r['id'] for page in pages if page['kind']=='A' for r in page['items']];p.write_text('---\n'+yaml.safe_dump(x,sort_keys=False,allow_unicode=True)+'---\n'+b)
p=R/(run+'-batch-55.proof-contracts.json');out=json.loads(p.read_text());out['scope']=allids
for id in allids:
 x,b=read(id);steps=[]
 match=re.search(r'^## (Proof|Verification)\n(.*?)(?=\n## |\Z)',b,re.S|re.M)
 if match:
  for m in re.finditer(r'^(\d+\.\d+) (.*?)(?=\n\n\d+\.\d+ |\Z)',match.group(2),re.M|re.S):
   text=m.group(2).strip();tag=re.search(r'\[([^\[\]]+)\]\s*(?:∎)?$',text)
   if not tag:raise RuntimeError('missing tag '+id+' '+m.group(1))
   inputs=[t.strip() for t in tag.group(1).split(',')]
   for extra in re.findall(r'\[([FA]\d+)\]|\b[Ss]teps? (\d+\.\d+)',text[:tag.start()]):
    t=extra[0] or 'step '+extra[1]
    if t not in inputs:inputs.append(t)
   steps.append({'id':'step-'+m.group(1).replace('.','-'),'claim':text[:tag.start()].strip(),'step':m.group(1),'inputs':inputs})
 citations=[]
 facts=re.search(r'^## Facts & Assumptions\n(.*?)(?=\n## |\Z)',b,re.S|re.M)
 if facts:
  for m in re.finditer(r'^\[([FA]\d+)\] (.*?)(?=\n\n\[[FA]\d+\]|\Z)',facts.group(1),re.S|re.M):
   fact=m.group(1);uses=[s['step'] for s in steps if fact in s['inputs']]
   for source in dict.fromkeys(re.findall(r'\[\[([^\]|]+)(?:\|[^\]]+)?\]\]',m.group(2))):
    sx,sb=read(source);section='Definition' if sx['kind']=='definition' else 'Statement'
    sm=re.search(r'^## '+section+r'\n(.*?)(?=\n## |\Z)',sb,re.S|re.M)
    if not sm:raise RuntimeError('source section '+source)
    quote=sm.group(1).strip()
    if source=='def-axiom-of-choice':quote=quote.split('\n\n',1)[0]
    citations.append({'fact':fact,'source':source,'source_section':section,'quote':quote,'uses':uses})
 base=out['contracts'].get(id,{})
 if id in new[3:]:
  if id==new[3]:
   evidence={'zero':'Statement and proof steps 1.1, 4.1 and 8.1: constant-zero strata and zero-dimensional affine charts give point or zero-fibre models, with the same transverse-boundary and finite-pair construction.','one':'Statement and proof steps 1.1–8.1: smooth curves and a one-variable function obey exactly the same conormal, rank and cochain arguments.','degenerate':'Statement and proof steps 1.1 and 8.1: constant-function components have empty punctured fibres and the finite pair (U,empty); no nonzero differential is presumed there.','endpoints':'Statement and proof steps 6.1–8.1: marked sphere/function-circle boundaries and their open interiors are treated explicitly.','nonempty-choice':'A1 and proof steps 3.1–4.1: the parameter set is nonempty in every prescribed real open, and the radius avoids a proved finite set.'}
   boundaries=[{'case':'empty','status':'not_applicable','reason':'The Statement fixes p in the zero fibre, so its pointed space is nonempty.'}]
  elif id==new[4]:
   evidence={'empty':'Statement and proof steps 1.1 and 5.1: every support/coefficient is zero on an empty variety; the stalkwise argument is vacuous.','zero':'Statement and proof steps 1.1 and 6.1: V_0 Q=Q, and the zero-function point gives the identity unit.','one':'Statement and proof step 1.1: reduced H^0 for x squared occurs in normalized degree one.','degenerate':'Statement and proof steps 1.1 and 3.1: constant functions are treated separately; no principalization of the identically-zero ideal is invoked.','endpoints':'Statement and proof steps 6.1 and 7.1: the zero-function unit and full positive angular loop are specified.','nonempty-choice':'A1 and proof step 4.2: the arbitrary-rank cycle/boundary sections in the field-Kunneth algebra use the declared AC.'};boundaries=[]
  else:
   evidence={'empty':'Statement and proof step 7.1: the empty quiver gives point groups and the degree-zero coefficient unit.','zero':'Statement and proof step 7.1: zero coordinates omit zero-rank factors; dimension zero has V_0 Q=Q.','one':'Statement and proof steps 1.1–5.2: rank-one blocks use the same explicit atlas, frame, duality and critical-value formulas.','degenerate':'Statement and proof step 7.1: W=0 identifies the coefficient maps and gradings with the ordinary intrinsic construction.','endpoints':'Statement and proof step 7.1: zero-subobject and whole-subobject correspondences have identity coefficient maps.','nonempty-choice':'A1 and proof steps 2.1–3.1: finite-degree frame comparisons use the declared canonical AC-dependent suppliers and no selection of representation classes.'};boundaries=[]
  boundaries += [{'case':k,'status':'checked','evidence':v} for k,v in evidence.items()]
  boundaries += [{'case':k,'status':'not_applicable','reason':'The Statement asserts no biconditional.'} for k in ['iff-forward','iff-reverse']]
 elif base:boundaries=base['boundaries']
 else:raise RuntimeError('missing boundary review '+id)
 out['contracts'][id]={'citations':citations,'derivations':steps,'routine_steps':[],'boundaries':boundaries,'axiom_uses':[{'axiom':'def-axiom-of-choice','steps':[s['step'] for s in steps if 'A1' in s['inputs']]}] if 'def-axiom-of-choice' in x.get('deps',[]) else [],'finite_checks':base.get('finite_checks',[])}
out['contracts']={id:out['contracts'][id] for id in allids};p.write_text(json.dumps(out,indent=2,ensure_ascii=False)+'\n')
# Compute local graph evidence, without writing any canonical dependency_level.
items={i:read(i)[0] for i in allids};levels={};active=set()
def visit(i):
 if i in levels:return levels[i]
 if i in active:raise RuntimeError('cycle '+i)
 active.add(i);sup=[d for d in items[i].get('deps',[]) if d in items];level=1+max([visit(d) for d in sup],default=-1);levels[i]=level;active.remove(i);return level
for i in allids:visit(i)
(owner/'computed-local-graph.json').write_text(json.dumps({'meaning':'Read-only computed local dependency graph evidence; canonical level labels intentionally remain root-owned.','items':[{'id':i,'computed_local_level':levels[i],'deps':items[i].get('deps',[])} for i in allids]},indent=2)+'\n')
print('bound',len(allids),'items;',sum(bool(out['contracts'][i]['derivations']) for i in allids),'proofs; computed levels',min(levels.values()),max(levels.values()),'(not written to metadata)')
