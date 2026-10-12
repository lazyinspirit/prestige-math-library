"""Finite regression evidence, not a substitute for the written proof."""
from functools import lru_cache
from itertools import product
import json,random,time
from pathlib import Path
@lru_cache(None)
def parts(n,m=None):
 if m is None: m=n
 if n==0:return ((),)
 return tuple((i,)+p for i in range(min(n,m),0,-1) for p in parts(n-i,i))
def pad(p,L):return tuple(p)+(0,)*(L-len(p))
def partition(p):return all(i>=0 for i in p) and all(a>=b for a,b in zip(p,p[1:]))
def reduction(lam,mu,s):
 L=len(lam); rho=tuple(map(min,lam,mu)); om=tuple(map(max,lam,mu))+(0,)
 ds=tuple(max(0,rho[i]-om[i+1]-2*s) for i in range(L))
 D=tuple(sum(ds[i:]) for i in range(L))
 return rho,om,ds,D,tuple(lam[i]-D[i] for i in range(L)),tuple(mu[i]-D[i] for i in range(L))
def subparts(p):
 def rec(i,top,acc):
  if i==len(p): yield tuple(acc); return
  for a in range(min(p[i],top)+1):yield from rec(i+1,a,acc+[a])
 yield from rec(0,p[0] if p else 0,[])
def near_subparts(p,d):
 def rec(i,top,left,acc):
  if i==len(p):
   if left==0:yield tuple(acc)
   return
  for e in range(min(left,p[i])+1):
   a=p[i]-e
   if a<=top:yield from rec(i+1,a,left-e,acc+[a])
 yield from rec(0,p[0] if p else 0,d,[])
def cells(p,a):return tuple((i,c) for i in range(len(p)) for c in range(p[i],a[i],-1))
def column_pairs(C):return {(i,j) for i in range(len(C)) for j in range(i+1,len(C)) if C[i][1]==C[j][1]}
@lru_cache(None)
def lr(p,a,beta):
 C=cells(p,a); value={}; counts=[0]*(len(beta)+1)
 def rec(k):
  if k==len(C):return 1
  i,c=C[k]; tot=0
  for label in range(1,len(beta)+1):
   if counts[label]>=beta[label-1]:continue
   if label>1 and counts[label]>=counts[label-1]:continue
   if (i,c+1) in value and label>value[i,c+1]:continue
   if (i-1,c) in value and label<=value[i-1,c]:continue
   value[i,c]=label;counts[label]+=1;tot+=rec(k+1);counts[label]-=1;del value[i,c]
  return tot
 return rec(0)
start=time.time();triple_count=alpha_count=lr_checks=inverse_checks=shift_checks=0
# Exhaust all triples up to n=7; each admissible common subpartition and all small LR contents.
for n in range(8):
 for lp,mp,np in product(parts(n),repeat=3):
  L=max(1,len(lp),len(mp),len(np)); l=pad(lp,L);m=pad(mp,L);v=pad(np,L);s=n-v[0]
  if any(abs(a-b)>s for a,b in zip(l,m)):continue
  rho,om,ds,D,pl,pm=reduction(l,m,s);R=sum(pl);pr=tuple(rho[i]-D[i] for i in range(L));g0=n-sum(rho)
  assert partition(pl) and partition(pm) and sum(pm)==R and R<=2*s*L*L
  assert partition((R-s,)+v[1:]);triple_count+=1
  forward={}
  for a in subparts(rho):
   q=n-sum(a)
   if q>s:continue
   pa=tuple(a[i]-D[i] for i in range(L));assert partition(pa);alpha_count+=1;forward[pa]=a
   for outer,pouter in [(l,pl),(m,pm)]:
    C=cells(outer,a);Cp=cells(pouter,pa)
    assert tuple((i,c-D[i]) for i,c in C)==Cp
    assert column_pairs(C)==column_pairs(Cp)
    for beta in parts(q):
     assert lr(outer,a,beta)==lr(pouter,pa,beta);lr_checks+=1
  for q in range(g0,s+1):
   for theta in near_subparts(pr,q-g0):
    assert theta in forward and n-sum(forward[theta])==q;inverse_checks+=1
  # Check direct sharp s-gap shifts t=1,3 at every admissible cut.
  for k in range(1,L+1):
   if rho[k-1]<om[k]+s:continue
   for t in [1,3]:
    l2=tuple(x+(t if i<k else 0) for i,x in enumerate(l));m2=tuple(x+(t if i<k else 0) for i,x in enumerate(m))
    for a in forward.values():
     a2=tuple(x+(t if i<k else 0) for i,x in enumerate(a))
     for outer,o2 in [(l,l2),(m,m2)]:
      C=cells(outer,a);C2=cells(o2,a2)
      assert tuple((i,c+(t if i<k else 0)) for i,c in C)==C2
      assert column_pairs(C)==column_pairs(C2);shift_checks+=1
# Exact old-map false identity at n=26, using two-row JT and the unique q=3 index.
l=(14,10,2);m=(13,8,5);a=(13,8,2);pl=(10,10,2);pm=(9,8,5);pa=(9,8,2)
assert lr(m,a,(3,))==lr(pm,pa,(3,))==1
old_value=lr(l,a,(3,)); reduced_value=lr(pl,pa,(3,));assert (old_value,reduced_value)==(1,0)
from fractions import Fraction
from math import factorial
from collections import Counter
def two_subset_character(cycle):
 coeff=[1,0,0]
 for length in cycle:
  for j in range(2,length-1,-1): coeff[j]+=coeff[j-length]
 return coeff[2]
def standard(cycle): return cycle.count(1)-1
def two_row(cycle): return two_subset_character(cycle)-1-standard(cycle)
def z(cycle):
 v=1
 for length,multiplicity in Counter(cycle).items():v*=length**multiplicity*factorial(multiplicity)
 return v
finite_character_values={str(n):str(sum((Fraction(two_row(c)**2*standard(c),z(c)) for c in parts(n)),Fraction(0))) for n in [4,5]}
assert finite_character_values=={'4':'0','5':'1'}
summary={'scope':'all triples of partitions of 0<=n<=7 in row-difference case; all q<=s common subpartitions and all LR contents; direct s-gap shifts t=1,3','triples':triple_count,'common_subpartitions':alpha_count,'exact_LR_equalities':lr_checks,'inverse_indices':inverse_checks,'single_cut_cell_comparisons':shift_checks,'printed_map_counterexample':{'original':old_value,'printed_reduced':reduced_value},'finite_character_values':finite_character_values,'seconds':time.time()-start,'not_a_general_proof':True}
print(json.dumps(summary,indent=2));Path(__file__).with_name('finite-regression.json').write_text(json.dumps(summary,indent=2)+'\n')
