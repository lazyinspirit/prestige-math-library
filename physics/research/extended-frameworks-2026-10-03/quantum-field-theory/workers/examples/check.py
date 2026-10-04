from pathlib import Path
import json
p=Path(__file__).parent;o=json.loads((p/'inventory.json').read_text());rows=o['items'];by={r['id']:r for r in rows};ext=json.loads((p/'supplier-map.json').read_text())['external_suppliers'];eb={r['id']:r for r in ext};errors=[]
if len(by)!=len(rows):errors.append('duplicate IDs')
order={r['id']:i for i,r in enumerate(rows)}
for r in rows:
 if set(r['deps'])!=set(r['dependency_roles']):errors.append(r['id']+' roles mismatch')
 module,anchor=r['proof_module'].split('#')
 if '<a id="'+anchor+'"></a>'not in(p/module).read_text():errors.append('anchor '+r['id'])
 for d in r['deps']:
  s=by.get(d,eb.get(d))
  if s is None:errors.append('unresolved '+d);continue
  if r['domain']=='mathematics'and s['domain']!='mathematics':errors.append('physical premise of math '+r['id'])
  if d in by and s['side']=='B'and(r['page']!=s['page']or r['side']!='B'or order[d]>=order[r['id']]):errors.append('B upstream/ordering '+r['id'])
 if r['domain']=='physics'and not r['physical_scope']:errors.append('physical scope '+r['id'])
 if r['kind']=='experiment':
  if r['provenance']['proof']!='not-applicable':errors.append('experiment fabricated proof')
  for k in['observation','uncertainty','conditions','source_url']:
   if not r['empirical_result'].get(k):errors.append('empirical missing '+k)
 if any(d in by and by[d]['kind']=='experiment'for d in r['deps'])and r['kind']=='physics-theorem':
  if not r['empirical_premises']:errors.append('missing uncertainty inheritance '+r['id'])
seen=set();active=set()
def visit(i):
 if i in active:errors.append('cycle '+i);return
 if i in seen:return
 active.add(i)
 for d in by[i]['deps']:
  if d in by:visit(d)
 active.remove(i);seen.add(i)
for i in by:visit(i)
counts={pg:sum(r['page']==pg for r in rows)for pg in{r['page']for r in rows}}
for pair in o['page_pairs']:
 subset=[r for r in rows if r['page']in[pair['a'],pair['b']]]
 if {r['domain']for r in subset}!={pair['domain']}:errors.append('mixed pair '+pair['a'])
 if any(counts.get(pair[k],0)>100 for k in['a','b']):errors.append('page overflow '+pair['a'])
result={'date':'2026-10-04','command':'python3 '+str(p/'check.py'),'items':len(rows),'pairs':len(o['page_pairs']),'page_counts':dict(sorted(counts.items())),'HTML_anchors_checked':True,'DAG_checked':True,'math_only_premises_checked_against_domains':True,'homogeneous_pairs':True,'Bpages_leaves_with_earlier_sameB_empirical_dependency':True,'empirical_scope_and_uncertainty_inheritance':True,'errors':errors,'research_only_not_independent_acceptance':True};(p/'structural-check.json').write_text(json.dumps(result,indent=2)+'\n');print(json.dumps(result,indent=2));raise SystemExit(bool(errors))
