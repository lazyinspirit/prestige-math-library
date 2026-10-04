"""Local research regressions; these do not certify proofs or production readiness."""
from pathlib import Path
from fractions import Fraction
import hashlib,itertools,json,math,re
BASE=Path(__file__).resolve().parent
ROOT=BASE.parents[3]
results=[]
def record(name,detail): results.append({'check':name,'result':'pass','detail':detail})
ledger=json.loads((BASE/'closure-ledger.json').read_text())
assert ledger['framework_audit_complete'] is True
assert ledger['required_undischarged_contracts']==[]
ids={x['id'] for x in ledger['new_developments']}
assert ids=={f'M{i}' for i in range(11,38)}
for row in ledger['new_developments']:
    assert not row['physical_dependencies']
    assert all(d in ids or re.fullmatch(r'M(?:[0-9]|10)',d) for d in row['mathematical_dependencies'])
graph={r['id']:r['mathematical_dependencies'] for r in ledger['new_developments']}
visiting=set();visited=set()
def visit(i):
    if i in visited or i not in graph:return
    assert i not in visiting
    visiting.add(i)
    for d in graph[i]:visit(d)
    visiting.remove(i);visited.add(i)
for i in graph:visit(i)
record('ledger schema, local DAG and mathematical independence','27 developments, no physical dependencies, no local cycles, exact baseline/adopted-framework completion scope; stronger prospective theorem remains unproved')
source=(BASE/'scaffold/completed-developments.md').read_text()
positions={i:source.index(f'## {i}.') for i in ids}
for i,deps in graph.items():
    for d in deps:
        if d in positions:assert positions[d]<positions[i],(d,i)
record('supplier-first local prose','Every declared new local mathematical dependency precedes its consumer in completed-developments.md')
eta=Fraction(1,7);final_bound=1-Fraction(2400,7)/350;initial_bound=1-Fraction(300,400)
assert eta>final_bound and eta<=initial_bound
assert 400*300==350*Fraction(2400,7)
record('M10 finite-reservoir regression',f'eta={eta}, invalid final bound={final_bound}, valid initial bound={initial_bound}, exact equal products')
beta=.7;eps=2.3
work=[0.,eps];weights=[.5,.5]
rhs=(1+math.exp(-beta*eps))/2
lhs=sum(p*math.exp(-beta*w) for p,w in zip(weights,work))
assert abs(lhs-rhs)<1e-14
free=-math.log(rhs)/beta
assert 0<free<eps and sum(p*w for p,w in zip(weights,work))>=free
record('M20 quench fluctuation identity','Exact finite enumeration matches Jarzynski and has probability 1/2 of work below Delta F')
J=.8;h=.2
for n in range(2,8):
    z=sum(math.exp(beta*(J*sum(s[i]*s[(i+1)%n] for i in range(n))+h*sum(s))) for s in itertools.product([-1,1],repeat=n))
    a=math.exp(beta*J)*math.cosh(beta*h)
    b=math.sqrt(math.exp(2*beta*J)*math.sinh(beta*h)**2+math.exp(-2*beta*J))
    expected=(a+b)**n+(a-b)**n
    assert abs(z-expected)<=1e-12*max(z,expected)
record('M18 Ising transfer formula','Periodic chains N=2 through 7 checked by direct enumeration against both eigenvalues')
prose=(BASE/'scaffold/prose-scaffold.md').read_text()
inventory=re.findall(r'(?:def|lem|thm|pthm|post|rem)-td(?:math)?-[a-z0-9-]+',prose[prose.index('### Expanded A/B research inventories'):])
collision=[]
for ident in set(inventory):
    if (ROOT/'items'/f'{ident}.md').exists() or (ROOT/'physics/items'/f'{ident}.md').exists():collision.append(ident)
assert not collision
record('new proposed filenames','No collisions with root or physics item filenames; alias-global certification is outside this local research check')
mapping=json.loads((BASE/'scaffold/supplier-map.json').read_text())
assert len(mapping['direct_ids'])==34 and len(mapping['records'])==529
mismatch=[];missing=[]
for r in mapping['records']:
    for key in ('original_path','import_path'):
        p=ROOT/r[key]
        if not p.exists():missing.append(str(p));continue
        digest=hashlib.sha256(p.read_bytes()).hexdigest()
        expected=r['raw_sha256'] if key=='original_path' else r['pinned_sha256']
        if digest!=expected:mismatch.append({'id':r['id'],'path':r[key]})
assert not mismatch and not missing
record('inherited supplier identity','All 529 originals and 529 imported files match the existing recorded SHA256 values; identity only, not proof acceptance')
wider=json.loads((BASE/'wider-corpus-supplier-review.json').read_text())
for r in wider['suppliers']:
    assert hashlib.sha256((ROOT/r['path']).read_bytes()).hexdigest()==r['raw_sha256']
    assert r['read_statement'] and r['read_actual_argument_or_definition']
assert sum(r['status']=='draft' for r in wider['suppliers'])==3
assert sum(r['status']=='published' for r in wider['suppliers'])==len(wider['suppliers'])-3
record('wider authorized corpus identity and status',f'{len(wider["suppliers"])} root mathematical suppliers pinned; three explicit heat drafts remain honestly unpublished; symplectic originals currently have published frontmatter')
lrows=ledger['ly_developments']
lgraph={r['id']:r['mathematical_dependencies'] for r in lrows}
assert len(lgraph)==len(lrows)
assert all(not r['physical_dependencies'] for r in lrows)
ltext=(BASE/'scaffold/ly-closure-developments.md').read_text()
lpos={i:ltext.index(f'## {i}.') for i in lgraph}
for i,deps in lgraph.items():
    for dep in deps:
        assert dep in lgraph or dep in graph or re.fullmatch(r'M(?:[0-9]|10)',dep),(i,dep)
        if dep in lpos:assert lpos[dep]<lpos[i],(dep,i)
record('additional supplier-first argument chain',f'{len(lrows)} L interfaces/developments; exact declared local suppliers precede consumers and have no physical dependencies')
review=(BASE/'reader-limits/joule1850-primary-report-review.md').read_text()
assert abs(97470.2*.563209/7000-7.842299)<1e-6
assert abs(6067.114/7.842299-773.640)<1e-3
assert abs(772.692*.3048*9.80665*1.8-4157.331)<.001
assert 'confidence' in review and 'author reprint' in review
record('actual primary-report arithmetic','Joule water capacity/work corrections and expressly conventional modern-unit comparison reproduce printed values; no confidence interval fabricated')
frozen=json.loads((BASE/'baseline-claim-map.json').read_text())
for row in frozen['baseline_sources']:
    assert hashlib.sha256((ROOT/row['path']).read_bytes()).hexdigest()==row['sha256']
assert len(frozen['pages'])==21
assert len(frozen['original_named_interface_dispositions'])==53
assert all(r['required_content_preserved'] for r in frozen['original_named_interface_dispositions'])
for row in frozen['pages']:
    assert row['named_A_count']==len(row['named_A_ids'])<=row['A_reserved_item_cap']<=100
    assert row['B_reserved_item_cap']<=100 and not row['production_items_created']
record('frozen baseline scope and final homes/caps','Exact baseline files/quotes and all53 original interface dispositions pinned;21pairs with one final A home per named ID, B leaf caps and every page below hard100-item limit')
artifact={'date':'2026-10-03','command':'python3 physics/research/first-principles-2026-10-03/thermodynamics/audit-checks.py','exit_code':0,'proof_certification':False,'checks':results}
(BASE/'audit-checks.json').write_text(json.dumps(artifact,indent=2)+'\n')
print(json.dumps({'passes':len(results),'proof_certification':False,'framework_audit_complete':True}))
