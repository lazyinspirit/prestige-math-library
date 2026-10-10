import json,hashlib,datetime
from pathlib import Path
r=Path(__file__).parent;n='physics-em-sr-40-2026-10-08';read=lambda s:json.loads((r/(n+s)).read_text());hashobj=lambda x:hashlib.sha256(json.dumps(x,ensure_ascii=False,sort_keys=True).encode()).hexdigest();archive=read('-reconciliation6.before.json');old={i['id']:i for f in archive['files'] if f['path'].endswith('.pages.json') for p in json.loads(f['raw']) for i in p['items']};joint=read('-joint-potentials-sign-proposal.json');geo=read('-test-geometry-localization-proposal.json');weak=read('-weak-maxwell-constraints-proposal.json');gauge=read('-gauge-reachability-regularity-proposal.json');texp=read('-displacement-surface-choice-proposal.json');changes={}
for row in joint['exact_metadata_changes']+geo['changes']:
 assert old[row['id']]==row['before'];changes[row['id']]=row['after']
wb={i['id']:i for i in weak['before_objects']}
for i in weak['proposed_subjects']:
 assert old[i['id']]==wb[i['id']]
 if i['id']!='pthm-em-fixed-vacuum-jumps':changes[i['id']]=i
jump=changes['pthm-em-fixed-vacuum-jumps'];jump['statement']=jump['statement'].replace('Suppose that $E,B$ satisfy the weak Maxwell equations with the source pair','Under the separate singular-source physical adoption [[post-em-distributional-vacuum-maxwell]], suppose that $E,B$ satisfy the weak Maxwell equations with the source pair');jump['deps']=list(dict.fromkeys(jump['deps']+['post-em-distributional-vacuum-maxwell']));jump['dependency_roles']['post-em-distributional-vacuum-maxwell']='physical-assumption'
assert old[texp['before']['id']]==texp['before'];changes[texp['before']['id']]=texp['after']
g=changes['pthm-em-gauge-reachability'];patch=gauge['surgical_patch']
for key,field in [('statement_branch_b','statement'),('strategy_branch_b','strategy'),('statement_b_scope_clause','statement'),('physical_scope_b_clause','physical_scope')]:
 row=patch[key];assert g[field].count(row['before'])==1,key;g[field]=g[field].replace(row['before'],row['after'])
g['reference']+=patch['metadata_changes']['reference_append'];g['design_state']=patch['metadata_changes']['design_state_after'];g['deps']=list(dict.fromkeys(g['deps']+patch['append_deps']));g['dependency_roles'].update(patch['append_dependency_roles'])
newmath=gauge['new_earlier_mathematical_items'];ext=newmath[0];remove='lem-finite-ambient-partitions-for-euclidean-boundary-integration';ext['deps'].remove(remove);ext['dependency_roles'].pop(remove)
oldpartition='Choose finitely many shrunk smooth graph charts covering the compact boundary, an interior patch, and a finite smooth ambient partition equal to one near the domain closure. Localize `u` by these fixed spatial cutoffs.'
newpartition='Choose finitely many shrunk smooth graph charts and an interior open patch. Compactness gives finitely many smaller balls covering the domain closure, with their closed larger balls contained in the assigned chart/interior open members. Using the choice-free Euclidean compact cutoff supplier, take smooth nonnegative psi_l equal to one on each smaller ball and supported in its larger ball. S=sum_l psi_l is positive on a neighbourhood of the closure. Choose a smooth outer cutoff chi equal to one near the closure and compactly supported in {S>0}. For each chart j set chi_j=chi(sum of psi_l assigned to j)/S on {S>0}, and zero elsewhere. These functions are smooth, have supports in the chart members, and sum to one near the closure. Only finitely many choices are made; no measure-convention partition theorem is used. Localize u by these fixed spatial cutoffs.'
assert ext['strategy'].count(oldpartition)==1;ext['strategy']=ext['strategy'].replace(oldpartition,newpartition)
newphysics=weak['additional_same_A_items'];assert len(newmath)==2 and len(newphysics)==1
manifests=[]
for f in sorted(r.glob(n+'-batch-*.pages.json')):
 pages=json.loads(f.read_text());dirty=False
 for p in pages:
  for k,i in enumerate(p['items']):
   if i['id'] in changes:assert i==old[i['id']],i['id'];p['items'][k]=changes[i['id']];dirty=True
  if p['id']=='em-expanded-analysis-prerequisites':
   for item in newmath:
    placement=next(x for x in gauge['placements'] if x['id']==item['id']);idx=next(k for k,i in enumerate(p['items']) if i['id']==placement['insert_after']);p['items'].insert(idx+1,item);dirty=True
  if p['id']=='em-maxwell-integral-and-constraints':
   idx=next(k for k,i in enumerate(p['items']) if i['id']=='def-em-weak-sources');p['items'][idx+1:idx+1]=newphysics;dirty=True
 if dirty:
  tmp=f.with_name(f.name+'.reconciliation6.tmp');tmp.write_text(json.dumps(pages,ensure_ascii=False,indent=2)+'\n');tmp.replace(f)
 manifests.extend(pages)
now={i['id']:i for p in manifests for i in p['items']};assert set(old)<=set(now);assert len(now)==328
rows=[{'id':k,'before':old[k],'after':now[k],'changed_fields':sorted(z for z in old[k].keys()|now[k].keys() if old[k].get(z)!=now[k].get(z)),'before_sha256':hashobj(old[k]),'after_sha256':hashobj(now[k])} for k in changes]
out={'run':n,'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'scope':'Root-approved remaining sixth repairs, exact ZF finite partition, disjoint gauge b/c and weak/jump merges','existing_metadata_repairs':rows,'new_mathematical_items':newmath,'new_physical_items':newphysics,'existing325_ids_preserved':True,'items':328,'readiness_held':True,'controller_not_resumed':True,'no_import_original_math_edits':True};(r/(n+'-reconciliation6.large-integration.json')).write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n');print({'repaired':list(changes),'new':[i['id'] for i in newmath+newphysics],'items':328})
