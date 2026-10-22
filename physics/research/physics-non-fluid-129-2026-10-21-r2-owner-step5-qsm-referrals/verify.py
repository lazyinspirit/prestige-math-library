from pathlib import Path
from fractions import Fraction as Q
from itertools import product
import subprocess, json, hashlib, datetime
OUT=Path(__file__).resolve().parent
ROOT=OUT.parents[1]
REL=OUT.relative_to(ROOT)
def sha(b): return hashlib.sha256(b).hexdigest()
def norm(v): return sum(x*x for x in v)
def dot(a,b): return sum(x*y for x,y in zip(a,b))
def sub(a,b): return [x-y for x,y in zip(a,b)]
def kron(a,b): return [x*y for x in a for y in b]
# Exact two-cut example, with a retained first-site vector having two nonzero coordinates.
u=[Q(3,5),Q(4,5)]; v=[Q(-4,5),Q(3,5)]
e00=[Q(1),Q(0),Q(0),Q(0)]; e01=[Q(0),Q(1),Q(0),Q(0)]; e11=[Q(0),Q(0),Q(0),Q(1)]
r1=[Q(16,25)*a+Q(12,25)*b for a,b in zip(e00,e11)]
x1=kron(u,r1); discarded1=[Q(3,5)*x for x in kron(v,e01)]
psi=[a+b for a,b in zip(x1,discarded1)]
phi=[Q(16,25)*x for x in kron(u,e00)]
eps1=sub(psi,x1);eps2=sub(x1,phi)
assert norm(psi)==1 and norm(eps1)==Q(9,25) and norm(eps2)==Q(144,625)
assert dot(eps1,eps2)==0 and norm(sub(psi,phi))==Q(369,625)
assert norm(sub(psi,phi))==norm(eps1)+norm(eps2)
# The returned contraction A1[i1] A2[i2] A3[i3] is exactly phi.
contracted=[u[i1]*int(i2==0)*(Q(16,25) if i3==0 else 0) for i1,i2,i3 in product(range(2),repeat=3)]
assert contracted==phi and len(r1)==4 and len(phi)==8
# Enumerate all endpoint-labelled exact sequences F3 -> F3^2 -> F3.
nonzero=[v for v in product(range(3),repeat=2) if v!=(0,0)]
seqs=[(i,p) for i,p in product(nonzero,repeat=2) if sum(a*b for a,b in zip(i,p))%3==0]
orbits=set()
for i,p in seqs:
    orbit=tuple(sorted((tuple(a*x%3 for x in i),tuple(b*x%3 for x in p)) for a,b in product([1,2],repeat=2)))
    orbits.add(orbit)
assert len(seqs)==16 and len(orbits)==4 and all(len(o)==4 for o in orbits)
lines=sorted({tuple(sorted(tuple(a*x%3 for x in i) for a in [1,2])) for i in nonzero})
assert len(lines)==4
finite={'qualification':'Exact finite checks only; the general proofs are the algebraic arguments in report.md and candidates. No numerical SVD or independent acceptance is claimed.','mps':{'N':3,'rank_caps':[1,1],'first_retained_vector':['3/5','4/5'],'first_discarded_squared_norm':'9/25','second_discarded_squared_norm':'144/625','error_squared_norm':'369/625','discarded_components_pairing':'0','compressed_remainder_coordinates':4,'full_chain_coordinates':8,'contraction_equals_embedded_terminal':True},'hall':{'field':3,'subspaces':4,'endpoint_labelled_exact_sequences':16,'endpoint_automorphism_group_size':4,'quotient_orbits':4,'each_orbit_size':4}}
(OUT/'finite-checks.json').write_text(json.dumps(finite,indent=2)+'\n')
candidates=[str(REL/'candidates/thm-qsmx-schmidt-mps-error.md'),str(REL/'candidates/def-qsmx-spin-weight-and-hall-realization.md')]
consumers=['items/alg-qsmx-schmidt-mps-truncation.md','items/thm-qsmx-exchange-lie-weight-blocks.md','items/thm-qsmx-klr-character-specialization.md','items/cex-qsmx-categorification-not-spectrum.md']
commands=[['node','tools/tsx-run.mjs','tools/physics-support/precheck.mts',*candidates,'--json'],['node','tools/physics-support/rendercheck.mjs',*candidates,*consumers,'--json'],['node','tools/physics-support/proof-layout.mjs',*candidates]]
checks=[]
for index,command in enumerate(commands,1):
    result=subprocess.run(command,cwd=ROOT,text=True,capture_output=True)
    row={'command':command,'cwd':str(ROOT),'exit_code':result.returncode,'stdout':result.stdout,'stderr':result.stderr,'checked_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'inputs':{p:sha((ROOT/p).read_bytes()) for p in (candidates if index!=2 else candidates+consumers)},'qualification':'Research-candidate focused mechanical check; not a native gate, native review, source acceptance, certification, or recertification.'}
    (OUT/f'check-{index}.json').write_text(json.dumps(row,indent=2)+'\n');checks.append({'file':f'check-{index}.json','exit_code':result.returncode,'stdout':result.stdout[:2000],'stderr':result.stderr[:1000]})
print(json.dumps({'finite_checks':'pass','checks':checks},indent=2))
