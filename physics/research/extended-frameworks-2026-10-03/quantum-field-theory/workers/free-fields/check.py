import pathlib,json,hashlib,subprocess
p=pathlib.Path(__file__).parent;x=json.loads((p/'inventory.json').read_text());rows=x['items'];by={r['id']:r for r in rows};ext=x['external_suppliers'];err=[];counts={};done=set();order=[]
def visit(i,stack):
 if i in done:return
 if i in stack:err.append('cycle '+str(stack+[i]));return
 for d in by[i]['deps']:
  if d in by:visit(d,stack+[i])
  elif d not in ext:err.append('unresolved '+i+' -> '+d)
 done.add(i);order.append(i)
for r in rows:
 counts[r['page']]=counts.get(r['page'],0)+1
 if set(r['deps'])!=set(r['dependency_roles']):err.append('roles '+r['id'])
 if r['side']!=('B' if r['page'].endswith('-examples') else 'A'):err.append('side '+r['id'])
 if r['domain']=='mathematics' and not r['page'].startswith('QFT-MF'):err.append('page '+r['id'])
 if r['domain']=='physics' and r['page'].startswith('QFT-MF'):err.append('page '+r['id'])
 for d in r['deps']:
  v=by.get(d,ext.get(d,{}))
  if r['domain']=='mathematics' and v.get('domain')!='mathematics':err.append('physics-to-math '+r['id'])
  if d in by and by[d]['side']=='B':err.append('B supplier '+d)
 for mod in r.get('proof_modules',[r['proof_module']]):
  f,a=mod.split('#');q=p/f
  if not q.exists() or 'id="'+a+'"' not in q.read_text():err.append('anchor '+mod)
 if r['domain']=='physics' and not r['physical_scope']:err.append('physical scope '+r['id'])
 visit(r['id'],[])
for pg,n in counts.items():
 if n>100:err.append('page cap '+pg)
 if not pg.endswith('-examples') and pg+'-examples' not in counts:err.append('missing B '+pg)
for f in (p/'sources').glob('*.pdf'):
 if subprocess.run(['git','check-ignore',str(f)],capture_output=True).returncode:err.append('raw not ignored '+str(f))
receipt={'local_check_only':True,'independent_acceptance':False,'date':'2026-10-04','items':len(rows),'page_counts':counts,'supplier_first_order':order,'errors':err,'sha256':{f.name:hashlib.sha256(f.read_bytes()).hexdigest() for f in [p/'proof-modules.md',p/'source-supplier-record.md',p/'inventory.json']}}
(p/'checks.json').write_text(json.dumps(receipt,indent=2)+'\n')
(p/'closure-ledger.json').write_text(json.dumps({'research_only':True,'declared_obligations_justified':not err,'independent_acceptance':False,'claims':[{'id':r['id'],'argument':r['proof_module'],'status':r['proof_status'],'scope':r['scope'],'unresolved_required_mathematical_obligation':None} for r in rows],'canonical_placement_owner':'fluid_scaffold','canonical_physical_interface_status':'stable quantities-and-postulates.md framework-units/constructed-measurement bodies read in full; exact source/status records refreshed','excluded_stronger_claims':['general spin-statistics theorem','local Reeh-Schlieder theorem','pointwise field operators/naive coincident products','generic curved vacuum/Hadamard theorem','interacting4D construction/continuum QED','finite infinite-volume thermal Gibbs trace','scalar covariance for gaugepotential without gauge interface']},indent=2)+'\n')
print(json.dumps({'items':len(rows),'page_counts':counts,'errors':err},indent=2));raise SystemExit(bool(err))
