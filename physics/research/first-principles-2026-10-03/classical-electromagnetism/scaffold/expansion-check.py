"""Local algebra/structure checks; no proof or independent acceptance stamps."""
from pathlib import Path
import json
import sympy as s
here=Path(__file__).parent
x=s.symbols('x0:4'); eta=s.diag(-1,1,1,1)
# Independently check all components of the stress divergence on polynomial dA.
A=s.Matrix([x[1]*x[2]+x[0]**2*x[3],x[0]*x[2]**2,x[0]*x[1]*x[3],x[1]**2*x[2]])
F=s.Matrix(4,4,lambda i,j:s.diff(A[j],x[i])-s.diff(A[i],x[j]))
Fu=eta*F*eta
j=s.Matrix([-sum(s.diff(Fu[i,k],x[i]) for i in range(4)) for k in range(4)])
F2=sum(F[i,k]*Fu[i,k] for i in range(4) for k in range(4))
T=Fu*eta*Fu.T-eta*F2/4
force=Fu*eta*j
res=[s.expand(sum(s.diff(T[i,k],x[i]) for i in range(4))+force[k]) for k in range(4)]
assert res==[0]*4,res
assert s.expand(s.trace(eta*T))==0
assert all(s.expand(T[i,k]-T[k,i])==0 for i in range(4) for k in range(4))
# Components, not just one numerical substitution.
e1,e2,e3,b1,b2,b3,c,mu=s.symbols('E1 E2 E3 B1 B2 B3 c mu',nonzero=True)
F=s.Matrix([[0,-e1/c,-e2/c,-e3/c],[e1/c,0,b3,-b2],[e2/c,-b3,0,b1],[e3/c,b2,-b1,0]])
Fu=eta*F*eta; f2=sum(F[i,k]*Fu[i,k] for i in range(4) for k in range(4))
T=(Fu*eta*Fu.T-eta*f2/4)/mu
assert s.simplify(T[0,0]-((e1**2+e2**2+e3**2)/c**2+b1**2+b2**2+b3**2)/(2*mu))==0
E=s.Matrix([e1,e2,e3]);B=s.Matrix([b1,b2,b3])
assert all(s.simplify(T[0,i+1]-E.cross(B)[i]/(mu*c))==0 for i in range(3))
# Verify all TE/TM curls with symbolic transverse/longitudinal wave numbers.
xx,yy,aa,bb,zz,om,mm=s.symbols('x y alpha beta kz omega mu',real=True,nonzero=True)
ks=aa**2+bb**2; eps=(ks+zz**2)/(mm*om**2)
def cr(v):return s.Matrix([s.diff(v[2],yy)-s.I*zz*v[1],s.I*zz*v[0]-s.diff(v[2],xx),s.diff(v[1],xx)-s.diff(v[0],yy)])
def dv(v):return s.diff(v[0],xx)+s.diff(v[1],yy)+s.I*zz*v[2]
h=s.cos(aa*xx)*s.cos(bb*yy); e=s.sin(aa*xx)*s.sin(bb*yy)
for mode in ('TE','TM'):
 if mode=='TE':
  Ev=s.Matrix([s.I*om*mm*s.diff(h,yy)/ks,-s.I*om*mm*s.diff(h,xx)/ks,0]);Hv=s.Matrix([s.I*zz*s.diff(h,xx)/ks,s.I*zz*s.diff(h,yy)/ks,h])
 else:
  Ev=s.Matrix([s.I*zz*s.diff(e,xx)/ks,s.I*zz*s.diff(e,yy)/ks,e]);Hv=s.Matrix([-s.I*om*eps*s.diff(e,yy)/ks,s.I*om*eps*s.diff(e,xx)/ks,0])
 assert all(s.simplify(v)==0 for v in cr(Ev)-s.I*om*mm*Hv),mode
 assert all(s.simplify(v)==0 for v in cr(Hv)+s.I*om*eps*Ev),mode
 assert s.simplify(dv(Ev))==s.simplify(dv(Hv))==0,mode
# Check finite radial coefficient identities at several degrees; universal proof is F1.
z=s.symbols('z',positive=True)
for ll in range(7):
 P=sum(s.I**jj*s.factorial(ll+jj)/(s.factorial(jj)*s.factorial(ll-jj)*(2*z)**jj) for jj in range(ll+1))
 radial=(-s.I)**(ll+1)*s.exp(s.I*z)*P/z
 assert s.simplify(s.diff(radial,z,2)+2*s.diff(radial,z)/z+(1-ll*(ll+1)/z**2)*radial)==0
 pos=sum(s.factorial(2*jj)*s.factorial(ll+jj)/(2**(2*jj)*s.factorial(jj)**2*s.factorial(ll-jj)*z**(2*jj)) for jj in range(ll+1))
 assert s.expand(P*s.conjugate(P)-pos)==0
report={'kind':'local-check-only','stress_polynomial_divergence_residuals':[str(v) for v in res], 'trace_and_symmetry':'pass','symbolic_energy_and_flux_components':'pass','all_TE_TM_curls_and_divergences':'pass','outgoing_radial_ODE_and_modulus_degrees_0_to_6':'pass'}
if (here/'proposed-inventory.json').exists():
 d=json.loads((here/'proposed-inventory.json').read_text());rows=d['items']+[r for p in d['mathematical_pages'] for r in p['A_inventory']+p['B_inventory']];ids=[r['id'] for r in rows]
 assert len(ids)==len(set(ids))
 by={r['id']:r for r in rows}; visiting=set(); levels={}
 def level(i):
  if i in levels:return levels[i]
  assert i not in visiting,('cycle',i)
  visiting.add(i); ds=[v for v in by[i]['deps'] if v in by]; result=1+max(level(v) for v in ds) if ds else 0;visiting.remove(i);levels[i]=result;return result
 for i in by:assert by[i]['dependency_level']==level(i),(i,by[i]['dependency_level'],level(i))
 for r in rows:
  assert set(r['deps'])==set(r['dependency_roles']),r['id']
  if r['domain']=='mathematics':assert all(v=='mathematical-premise' for v in r['dependency_roles'].values()),r['id']
 for p in d['pages']:
  assert len(p['A_items'])==p['A_item_count']<=100
  assert len(p['B_items'])==p['B_item_count']<=100
 for p in d['mathematical_pages']:
  assert len(p['A_inventory'])==p['A_item_count']<=100
  assert len(p['B_inventory'])==p['B_item_count']<=100
 b={i for p in d['pages'] for i in p['B_items']}|{r['id'] for p in d['mathematical_pages'] for r in p['B_inventory']}
 assert not [(r['id'],v) for r in rows for v in r['deps'] if v in b]
 # Every proposal has exactly one A/B home; verify page graph, not just item graph.
 homes={};page_edges={}
 for pp in d['pages']:
  for key in ('A_items','B_items'):
   page=pp['A'] if key=='A_items' else pp['B'];page_edges.setdefault(page,set())
   for ii in pp[key]:
    assert ii not in homes,('duplicate home',ii)
    homes[ii]=page
 for pp in d['mathematical_pages']:
  for key in ('A_inventory','B_inventory'):
   page=pp['A'] if key=='A_inventory' else pp['B'];page_edges.setdefault(page,set())
   for rr in pp[key]:
    ii=rr['id'];assert ii not in homes,('duplicate home',ii);homes[ii]=page
 assert set(homes)==set(by),('homing coverage',set(by)-set(homes))
 for rr in rows:
  for dep in rr['deps']:
   if dep in homes and homes[dep]!=homes[rr['id']]:page_edges[homes[rr['id']]].add(homes[dep])
 visiting_pages=set();seen_pages=set()
 def visit_page(pp):
  assert pp not in visiting_pages,('page cycle',pp)
  if pp in seen_pages:return
  visiting_pages.add(pp)
  for qq in page_edges[pp]:visit_page(qq)
  visiting_pages.remove(pp);seen_pages.add(pp)
 for pp in page_edges:visit_page(pp)
 # Validate mathematical supplier target domains even for external research suppliers.
 srpath=here.parents[1]/'relativity/sr-em-supplier-contract.json'
 sr={r['id']:r for r in json.loads(srpath.read_text())['suppliers']}
 rootpath=here.parents[1]/'audit-expansion-2026-10-03/root-mathematical-supplier-contract.json'
 root_sup={r['id']:r for r in json.loads(rootpath.read_text())['suppliers']}
 repo=here.parents[4]
 for rr in rows:
  for dep in rr['deps']:
   target=by.get(dep) or sr.get(dep) or root_sup.get(dep)
   if target:
    if rr['domain']=='mathematics':assert target['domain']=='mathematics',(rr['id'],dep)
   else:assert (repo/'items'/(dep+'.md')).exists(),('missing dependency',rr['id'],dep)
 report.update(exact_homing_coverage='pass',page_dependency_DAG='pass',dependency_target_resolution_and_domains='pass')
 report.update(unique_ids=len(ids),dependency_levels='pass',roles_and_mathematical_domain='pass',page_caps='pass',B_supplier_leaf_rule='pass')
(here/'expansion-check-results.json').write_text(json.dumps(report,indent=2)+'\n')
print(json.dumps(report,indent=2))
