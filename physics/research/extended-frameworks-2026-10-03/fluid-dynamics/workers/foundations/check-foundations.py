import pathlib,json,re,hashlib,subprocess
p=pathlib.Path(__file__).parent;x=json.loads((p/'inventory.json').read_text());rows=x['items'];by={r['id']:r for r in rows};external=x['external_suppliers'];errors=[];counts={};seen=set();order=[]
def visit(id,stack):
 if id in seen:return
 if id in stack:errors.append('cycle '+str(stack+[id]));return
 for d in by[id]['deps']:
  if d in by:visit(d,stack+[id])
  elif d not in external:errors.append(f'unresolved {id} -> {d}')
 seen.add(id);order.append(id)
for r in rows:
 counts[r['page']]=counts.get(r['page'],0)+1
 if len(set(r['deps']))!=len(r['deps']):errors.append('duplicate dep '+r['id'])
 if set(r['dependency_roles'])!=set(r['deps']):errors.append('roles '+r['id'])
 for d in r['deps']:
  s=by.get(d,external.get(d,{}))
  if r['domain']=='mathematics' and s.get('domain')!='mathematics':errors.append('physics to math '+r['id'])
  if d in by and by[d]['page'].endswith('-examples'):errors.append('B supplier '+d)
 for module in r.get('proof_modules',[r['proof_module']]):
  file,anchor=module.split('#');f=p/file
  if not f.exists() or f'id="{anchor}"' not in f.read_text():errors.append('missing anchor '+module)
 if r['domain']=='mathematics' and not r['page'].startswith('FD-MF'):errors.append('math page '+r['id'])
 if r['domain']=='physics' and r['page'].startswith('FD-MF'):errors.append('physics page '+r['id'])
 if r['domain']=='physics' and not r['physical_scope']:errors.append('scope '+r['id'])
 visit(r['id'],[])
if any(n>100 for n in counts.values()):errors.append('page cap')
raw=p/'sources/tong-fluids.pdf';ignored=subprocess.run(['git','check-ignore',str(raw)],capture_output=True,text=True).returncode==0
if not ignored:errors.append('raw PDF not ignored')
out={'local_check_only':True,'independent_review':False,'date':'2026-10-03','items':len(rows),'page_counts':counts,'resolved_external_suppliers':list(external),'supplier_first_order':order,'errors':errors,'raw_ignored':ignored,'artifact_sha256':{v.name:hashlib.sha256(v.read_bytes()).hexdigest() for v in [p/'foundation-proofs.md',p/'supplier-reading.md',p/'inventory.json']}}
(p/'checks.json').write_text(json.dumps(out,indent=2)+'\n');print(json.dumps({'items':len(rows),'errors':errors,'page_counts':counts,'raw_ignored':ignored},indent=2));raise SystemExit(bool(errors))
