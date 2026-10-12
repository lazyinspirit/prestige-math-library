from pathlib import Path
import json,yaml,re
p=Path('research/frontier-44-special-representation-examples-28-owner-step3-kronecker-boundary-round1')
manifest=Path('research/frontier-44-special-representation-examples-28-batch-26.pages.json');before=json.loads(manifest.read_text());after=json.loads(manifest.read_text());changes=[]
for page in after:
 for item in page.get('items',[])+page.get('examples',[]):
  if not isinstance(item,dict):continue
  id=item['id'];f=p/'proposed/items'/f'{id}.md'
  if not f.exists() or id.startswith('cex-'):continue
  t=f.read_text();fm=yaml.safe_load(re.match(r'^---\n(.*?)\n---\n',t,re.S)[1]);changed={}
  for field in ['deps','provenance']:
   if item.get(field)!=fm[field]:changed[field]={'before':item.get(field),'after':fm[field]};item[field]=fm[field]
  statement=t.split('## Statement\n',1)[1].split('\n## Facts & Assumptions',1)[0].strip()
  if id.startswith('lem-'):
   strategy='Use Littlewood internal/outer compatibility to obtain the finite LR coefficient identity, expand the third Schur function along the first Jacobi–Trudi row, and prove small-skew LR and inverse-index invariance under Phi(theta)=theta-D with delta_i=max(0,rho_i-omega_(i+1)-2s); prove output partitions and the original r<=2s ell^2 bound separately for ell=1, ell=2 and ell>=3. The printed block map is refuted by a coefficient-changing triple even when all its images are partitions.'
  else:
   strategy='Use the locally proved finite LR coefficient identity and first-row Jacobi–Trudi expansion of the reduction lemma directly at the k-row cut. Map alpha to alpha+(t^k), prove the inverse partition and both LR tableau bijections using the sharp s-gap, and compare unchanged small coefficients and tail cofactors. Apply the ordering-free proved identity at t0=max(0,s+max(next rows)-min(kth rows)) to obtain eventual constancy for all k including k=1.'
  for field,val in [('statement',statement),('strategy',strategy)]:changed[field]={'before':item.get(field),'after':val};item[field]=val
  changes.append({'id':id,'page':page['id'],'fields':changed})
(p/'before'/manifest).parent.mkdir(parents=True,exist_ok=True);(p/'before'/manifest).write_bytes(manifest.read_bytes())
(p/'proposed'/manifest).parent.mkdir(parents=True,exist_ok=True);(p/'proposed'/manifest).write_text(json.dumps(after,indent=2)+'\n')
(p/'metadata-delta.json').write_text(json.dumps({'run':'frontier-44-special-representation-examples-28','batch':'26','inventory_unchanged':True,'dependency_levels_unchanged':True,'page_prerequisites_unchanged':True,'changes':changes,'pending_native_artifacts':['Regenerate or surgically synchronize batch-26 proof contracts with current facts and renumbered steps after root integration','Update batch-26 notes to remove granted boundary and false weak-decrease remedy','Record current Step3 owner decisions in dependency order after drain; same reviewer bind actual integrated consumers']},indent=2)+'\n')
print('updated',len(changes),'manifest subjects')
