import json,pathlib,hashlib,re
D=pathlib.Path(__file__).parent
x=json.load(open(D/'inventory.json')); pairs=x['pairs']; new={i['id']:(p,s,i) for p in pairs for s in ['A','B'] for i in p[s]}; pages={p['a_page'] for p in pairs}|{p['b_page'] for p in pairs};sup=json.load(open(D/'suppliers.json')); ext={i['id']:i for i in sup['external_suppliers']};errors=[]
if len(new)!=sum(len(p['A'])+len(p['B']) for p in pairs): errors.append('duplicate new IDs')
canonical=json.load(open('physics/research/plan-spec.json'))['pages'];oldpages={r['id'] for r in canonical}
for p in pairs:
 if p['a_page'] in oldpages or p['b_page'] in oldpages:errors.append('page collision '+p['a_page'])
 for q in p['requires']:
  if q not in pages|oldpages and not any(q==r['id'] for r in json.load(open(D/'splice-support.json'))['required_root_P_pages']):errors.append('missing required page '+q)
 for s in ['A','B']:
  for i in p[s]:
   for field in ['id','kind','title','statement','deps','justified_by','proof_route','source_refs']:
    if field not in i:errors.append('missing field '+i['id']+':'+field)
   if '[[' in i['statement'] or 'https://' in i['statement']:errors.append('linked statement '+i['id'])
   for base in ['items','physics/items']:
    if (pathlib.Path(base)/(i['id']+'.md')).exists():errors.append('item collision '+i['id'])
   for d in i['deps']:
    if d not in new and d not in ext:errors.append('unresolved dep '+d)
    if d in new and new[d][1]=='B' and new[d][0]!=p:errors.append('B used as supplier '+d)
    if i['domain']=='mathematics' and d.startswith(('post-','pthm-','texp-','exp-')):errors.append('physical contamination '+d)
seen=set();active=set()
def visit(id):
 if id in active: errors.append('cycle '+id);return
 if id in seen:return
 active.add(id)
 for d in new[id][2]['deps']:
  if d in new: visit(d)
 active.remove(id);seen.add(id)
for id in new: visit(id)
for i in ext.values():
 p=pathlib.Path(i['path'])
 if not p.exists() or hashlib.sha256(p.read_bytes()).hexdigest()!=i['sha256']:errors.append('stale supplier '+i['id'])
b=json.load(open(D/'baseline.json'))
for row in b['existing_rows']:
 current=next((r for r in canonical if r['id']==row['row']['id']),None)
 if current!=row['row']:errors.append('baseline row changed '+row['row']['id'])
report={'scope':'new EMG research inventory and exact retained baseline only; no production gates or proof acceptance','pairs':len(pairs),'new_A':sum(len(p['A']) for p in pairs),'new_B':sum(len(p['B']) for p in pairs),'retained_rows':len(b['existing_rows']),'retained_claims':len(b['retained_claims']),'external_items':len(ext),'errors':errors,'passed':not errors}
(D/'checks.json').write_text(json.dumps(report,indent=2)+'\n');print(json.dumps(report,indent=2));raise SystemExit(bool(errors))
