"""Independent small finite check; supplements the general proof, never replaces it."""
from itertools import product
from fractions import Fraction
from collections import Counter
import json
q=2;n=3
vectors=list(product(range(q),repeat=n));zero=(0,)*n
nonzero=[v for v in vectors if v!=zero]
def add(a,b):return tuple((x+y)%q for x,y in zip(a,b))
lines=[frozenset([zero,v]) for v in nonzero]
planes=set()
for u in nonzero:
 for v in nonzero:
  if v!=u:planes.add(frozenset([zero,u,v,add(u,v)]))
flags=[(F,G) for F in lines for G in planes if F<G]
def apply(A,v):return tuple(sum(A[i*n+j]*v[j] for j in range(n))%q for i in range(n))
counts=[]
for A in product(range(q),repeat=n*n):
 count=0
 for F,G in flags:
  if all(apply(A,v)==zero for v in F) and all(apply(A,v) in F for v in G) and all(apply(A,v) in G for v in vectors):count+=1
 if count:counts.append(count)
gl=1
for i in range(n):gl*=q**n-q**i
mass=Fraction(sum(x*x for x in counts),gl)
expected=Fraction(6,(q-1)**3)
assert mass==expected
print(json.dumps({'check':'direct enumeration of all 2^(3*3) operators and all complete flags on F_2^3','flags':len(flags),'operators_admitting_lowered_complete_flag':len(counts),'flag_count_distribution':dict(sorted(Counter(counts).items())),'sum_squared_flag_counts':sum(x*x for x in counts),'GL3':gl,'mass':str(mass),'expected_power_sum_norm_3_factorial_over_q_minus_1_cubed':str(expected),'pass':True},indent=2))
