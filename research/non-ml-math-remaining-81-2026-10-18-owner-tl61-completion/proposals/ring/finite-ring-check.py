# Bounded diagnostic only; no general-proof or native-gate credit.
from pathlib import Path
import itertools,math,json
supplier=Path('research/non-ml-math-remaining-81-2026-10-18-owner-tl-spencer/finite-criterion-check.py').read_text().split('records=[]')[0]
exec(supplier)
records=[]
for modulus in (4,6,8,9):
 for delta in range(modulus):
  for n in range(4):
   basis=matchings(2*n);index={d:i for i,d in enumerate(basis)};width=len(basis)
   identity=tuple((j,2*n-1-j) for j in range(n));ident=index[identity]
   def product(u,v):
    out=[0]*width
    for i,a in enumerate(u):
     if not a:continue
     for j,b in enumerate(v):
      if not b:continue
      d,loops=multiply(n,basis[i],basis[j]);out[index[d]]=(out[index[d]]+a*b*pow(delta,loops,modulus))%modulus
    return out
   generators=[]
   for j in range(n-1):
    g=[0]*width;g[index[generator(n,j)]]=1;generators.append(g)
   solutions=[]
   for tail in itertools.product(range(modulus),repeat=width-1):
    v=list(tail);v.insert(ident,1)
    if all(not any(product(g,v)) for g in generators):
     assert product(v,v)==v
     assert all(not any(product(v,g)) for g in generators)
     solutions.append(v)
   bins=[1] if n<2 else ([1,delta,1] if n==2 else [1,delta*delta-1,delta*delta-1,1])
   prediction=all(math.gcd(b,modulus)==1 for b in bins)
   assert len(solutions)==int(prediction),(modulus,delta,n,len(solutions),prediction)
   records.append({'modulus':modulus,'delta':delta,'n':n,'normalized_solutions':len(solutions),'all_quantum_binomials_units':prediction})
p=Path(__file__).with_suffix('.json');p.write_text(json.dumps({'kind':'bounded-exact-composite-ring-diagnostic','method':'exhaustive identity-normalized diagram coefficients; full multiplication checks left/right annihilation, idempotence and uniqueness; independent gcd-unit criterion at n<=3','cases':len(records),'failures':0,'records':records},indent=2)+'\n')
print(len(records),'composite-ring cases; all exact predictions agree')
