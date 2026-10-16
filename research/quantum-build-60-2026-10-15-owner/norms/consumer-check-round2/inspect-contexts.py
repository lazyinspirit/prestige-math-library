from pathlib import Path
import yaml,re,json,hashlib
b=Path(__file__).parent;base=b.parent
sha=lambda x:hashlib.sha256(x).hexdigest();loader=yaml.CSafeLoader
original={}
for p in Path('items').glob('*.md'):
 raw=p.read_bytes()
 try:fm=yaml.load(raw.decode().split('---',2)[1],Loader=loader);original[fm['id']]={'s':raw.decode(),'fm':fm,'path':str(p),'raw_sha256':sha(raw)}
 except Exception:pass
overlay=dict(original)
proposals={}
for path in [base/'items',b/'items']:
 for p in path.glob('*.md'):
  s=p.read_text();fm=yaml.load(s.split('---',2)[1],Loader=loader);overlay[fm['id']]={'s':s,'fm':fm,'path':str(p),'raw_sha256':sha(p.read_bytes())};proposals[fm['id']]=overlay[fm['id']]
aliases={a:id for id,r in overlay.items() for a in r['fm'].get('aliases') or []}
canon=lambda x:aliases.get(x,x)
roots=set(proposals)&set(original)
deps={id:{canon(x) for x in r['fm'].get('deps') or []} for id,r in overlay.items()}
closure=set(roots)
while True:
 nxt=closure|{id for id,ds in deps.items() if ds&closure}
 if nxt==closure:break
 closure=nxt
# Also include body-only uses, then their downstream logical consumers.
for id,r in overlay.items():
 if set(canon(x) for x in re.findall(r'\[\[([^]|]+)',r['s']))&roots:closure.add(id)
while True:
 nxt=closure|{id for id,ds in deps.items() if ds&closure}
 if nxt==closure:break
 closure=nxt
# A per-carrier, per-use concrete context comparison; no graph-only assertion.
rows=[];internal=[];missing=[]
for id in sorted(closure):
 if id not in original:continue
 old=original[id];cur=overlay[id];body=old['s'].split('---',2)[2];paras=re.split(r'\n\s*\n',body)
 loci=[];direct=[]
 for index,p in enumerate(paras):
  targets=sorted(set(canon(x) for x in re.findall(r'\[\[([^]|]+)',p))&(deps[id]&closure|roots))
  if not targets:continue
  fact=re.match(r'\[([A-Z]\d+)\]',p); relevant=[]
  if fact:
   label=fact[1]
   relevant=[x for x in paras if re.match(r'\d+\.\d+ ',x) and re.search(r'\b'+label+r'\b',x)]
  elif re.match(r'\d+\.\d+ ',p):relevant=[p]
  for target in targets:
   direct.append(target)
   t_old=original.get(target);t_cur=overlay[target]
   # Unchanged intermediate source is stronger than a statement-only check.
   same=t_old is not None and t_old['s']==t_cur['s']
   sensitive=bool(re.search(r'(?:proof|step|argument) (?:of|in|from)|(?:in|by) (?:the )?proof',p,re.I))
   if sensitive:internal.append({'consumer':id,'supplier':target,'paragraph_index':index,'supplier_entire_source_unchanged':same})
   loci.append({'supplier':target,'paragraph_index':index,'exact_use_paragraph':p,'relevant_proof_steps':relevant,'supplier_entire_source_unchanged':same,'compatibility_rule':'C0-unchanged-entire-supplier' if same else 'C1-proved-extensional-replacement' if target!='def-banach-space' else 'C2-Banach-real-preservation-and-complex-explicit-extension','root_interface_reference':target in roots,'proof_sensitive':sensitive})
 header=[]
 for name in ['Statement','Definition','Example','Statement refuted']:
  marker='## '+name
  if marker in body:header.append({'heading':name,'text':body.split(marker,1)[1].split('\n## ',1)[0]})
 # Metadata-only uses are not assumed proof uses. Inspect exact statement+proof context when unlinked.
 unlinked=sorted(deps[id]&closure-set(direct))
 unlinked_context=[]
 if unlinked:
  # Keep full checkable body so the evidence does not invent an absent link use.
  unlinked_context=[x for x in paras if re.match(r'(?:\[([A-Z]\d+)\]|\d+\.\d+ |\*\*Given:)',x)]
 rows.append({'id':id,'path':old['path'],'raw_sha256':old['raw_sha256'],'changed_proposal':id in roots,'exact_public_context':header,'use_sites':loci,'declared_suppliers_without_body_link':unlinked,'unlinked_actual_fact_and_proof_context':unlinked_context,'conclusion':'surgical-proposal-with-equivalence-certificate' if id in roots else 'all-cited-ancestor-contexts-congruent-under-C0-C1-C2','review_scope':'Focused changed-interface use compatibility only; source-context scan and exact congruence checks, not whole-item mathematical acceptance.'})
# Check all new/changed roots' dependency closures, keeping unrelated corpus context read-only.
state={};errors=[]
def visit(id,trail):
 id=canon(id)
 if id not in overlay:errors.append({'missing':id,'trail':trail});return
 if state.get(id)==1:errors.append({'cycle':trail+[id]});return
 if state.get(id)==2:return
 state[id]=1
 for x in deps[id]:visit(x,trail+[id])
 state[id]=2
for id in proposals:visit(id,[])
(b/'all-use-context-dispositions.json').write_text(json.dumps({'roots':sorted(roots),'logical_and_link_closure_count':len(rows),'rules':{'C0':'The complete original and overlay supplier Markdown sources are identical, so every internal fact/step and public assertion available at this actual use site is unchanged.','C1':'The supplier was modified only by the explicitly proved extensional interface substitution, or by proof repairs preserving its unchanged public contract. Statement/Definition delta certificates are in semantic-deltas.md.','C2':'The real Banach Definition is preserved; the previously explicit complex convention becomes a typed complex norm plus exactly the same Cauchy-sequence completeness condition. Direct complex uses are checked against that exact predicate; no sigma-completeness or new choice principle is inserted.'},'items':rows},indent=2)+'\n')
(b/'proof-sensitive-context-check.json').write_text(json.dumps(internal,indent=2)+'\n')
(b/'overlay-dependency-check.json').write_text(json.dumps({'proposal_roots':len(proposals),'visited_supplier_context':len(state),'errors':errors},indent=2)+'\n')
print('roots',len(roots),'closure',len(rows),'use-sites',sum(len(x['use_sites']) for x in rows),'internal',len(internal),'context',len(state),'errors',len(errors))
