import pathlib,json,hashlib,subprocess
p=pathlib.Path(__file__).parent;x=json.loads((p/'inventory.json').read_text());rows=x['items'];by={r['id']:r for r in rows};ext=x['external_suppliers'];errors=[];counts={};seen=set();order=[]
def visit(i,stack):
 if i in seen:return
 if i in stack:errors.append('cycle '+repr(stack+[i]));return
 for d in by[i]['deps']:
  if d in by:visit(d,stack+[i])
  elif d not in ext:errors.append('unresolved '+i+' -> '+d)
 seen.add(i);order.append(i)
for r in rows:
 counts[r['page']]=counts.get(r['page'],0)+1
 if r['side']!=('B' if r['page'].endswith('-examples') else 'A'):errors.append('side '+r['id'])
 if set(r['deps'])!=set(r['dependency_roles']):errors.append('roles '+r['id'])
 if r['domain']=='mathematics' and not r['page'].startswith('EMG-MG'):errors.append('page math '+r['id'])
 if r['domain']=='physics' and r['page'].startswith('EMG-MG'):errors.append('page physics '+r['id'])
 for d in r['deps']:
  v=by.get(d,ext.get(d,{}))
  if r['domain']=='mathematics' and v.get('domain')!='mathematics':errors.append('physics-to-math '+r['id'])
  if d in by and by[d]['side']=='B':errors.append('B supplier '+d)
 for mod in r.get('proof_modules',[r['proof_module']]):
  f,a=mod.split('#');q=p/f
  if not q.exists() or 'id="'+a+'"' not in q.read_text():errors.append('anchor '+mod)
 if r['domain']=='physics' and not r['physical_scope']:errors.append('scope '+r['id'])
 visit(r['id'],[])
for page,n in counts.items():
 if n>100:errors.append('page cap '+page)
 if not page.endswith('-examples') and page+'-examples' not in counts:errors.append('empty companion '+page)
for path in (p/'sources').glob('*.pdf'):
 if subprocess.run(['git','check-ignore',str(path)],capture_output=True).returncode:errors.append('raw not ignored '+str(path))
receipt={'local_check_only':True,'independent_acceptance':False,'date':'2026-10-04','items':len(rows),'page_counts':counts,'supplier_first_order':order,'external_suppliers':list(ext),'errors':errors,'sha256':{f.name:hashlib.sha256(f.read_bytes()).hexdigest() for f in [p/'proof-modules.md',p/'inventory.json',p/'source-supplier-record.md']}}
(p/'checks.json').write_text(json.dumps(receipt,indent=2)+'\n')
(p/'closure-ledger.json').write_text(json.dumps({'research_only':True,'independent_review':False,'declared_obligations_justified':not errors,'claims':[{'id':r['id'],'argument':r['proof_module'],'status':r['proof_status'],'scope':r['scope'],'unresolved_required_obligation':None,'empirical_premises':[]} for r in rows],'excluded_stronger_claims':['general boundary GH-York/null/corner action theorem','global Einstein–Maxwell/matter existence','singular point-self-field stress','universal global gravitational energy','general principal-bundle classification/curvature integral-existence theorem','quantum electric-charge quantization','arbitrary noncompact flux convergence']},indent=2)+'\n')
print(json.dumps({'items':len(rows),'page_counts':counts,'errors':errors},indent=2));raise SystemExit(bool(errors))
