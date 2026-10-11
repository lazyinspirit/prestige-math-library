"""Finite symbolic diagnostics for the proved orbit-elimination formula."""
from itertools import product, combinations
from collections import defaultdict
from pathlib import Path
import json

def matrices(n,r):
 def rec(left,k,prefix):
  if k==1: yield prefix+[left]; return
  for a in range(left+1): yield from rec(left-a,k-1,prefix+[a])
 yield from (tuple(x) for x in rec(r,n*n,[]))
def sums(D,n): return [sum(D[i*n+j] for i in range(n)) for j in range(n)]
def orbit(w,nu,n):
 D=[0]*(n*n); start=0
 for j,a in enumerate(nu):
  for x in w[start:start+a]: D[x*n+j]+=1
  start+=a
 return tuple(D)
def rect(D,n):
 return tuple(sum(D[s*n+t] for s in range(n) for t in range(n) if (s<=a and t>=b) if a<b) if a<b else sum(D[s*n+t] for s in range(n) for t in range(n) if s>=a and t<=b) for a in range(n) for b in range(n) if a!=b)
def op(vec,i,a,raise_):
 out=defaultdict(lambda:defaultdict(int))
 for w,pol in vec.items():
  pos=[j for j,x in enumerate(w) if x==i+(1 if raise_ else 0)]
  for J in combinations(pos,a):
   exp=sum(w[j+1:].count(i) if raise_ else w[:j].count(i+1) for j in J)
   ww=list(w)
   for j in J: ww[j]=i if raise_ else i+1
   for k,c in pol.items(): out[tuple(ww)][k+exp]+=c
 return {w:dict(p) for w,p in out.items()}
counts={'matrix_cases':0,'nontrivial_eliminations':0,'orbit_coefficient_comparisons':0}
for n in (2,3):
 for r in range(5):
  words=list(product(range(n),repeat=r))
  for D in matrices(n,r):
   counts['matrix_cases']+=1
   nu=sums(D,n)
   upper=[j-i for i in range(n) for j in range(i+1,n) if D[i*n+j]]
   lower=[i-j for i in range(n) for j in range(i) if D[i*n+j]]
   if not upper and not lower: continue
   C=list(D); moves=[]
   if upper:
    k=max(upper)
    for i in range(n-1):
     b=D[i*n+i+k] if i+k<n else 0
     if b: C[i*n+i+k]-=b; C[(i+1)*n+i+k]+=b; moves.append((i,b,True))
   else:
    k=max(lower)
    for i in range(n-2,-1,-1):
     b=D[(i+1)*n+i+1-k] if i+1-k>=0 else 0
     if b: C[(i+1)*n+i+1-k]-=b; C[i*n+i+1-k]+=b; moves.append((i,b,False))
   C=tuple(C)
   vec={w:{0:1} for w in words if orbit(w,nu,n)==C}
   for i,b,up in moves: vec=op(vec,i,b,up)
   coeff={}
   for w,p in vec.items():
    B=orbit(w,nu,n)
    if B in coeff: assert coeff[B]==p,('invariance',n,r,D,B,w,p,coeff[B])
    else: coeff[B]=p
    counts['orbit_coefficient_comparisons']+=1
   assert D in coeff
   assert len(coeff[D])==1 and next(iter(coeff[D].values()))==1,('unit',D,coeff[D])
   for B in coeff:
    assert all(a<=b for a,b in zip(rect(B,n),rect(D,n))),('order',n,r,D,B)
    if B!=D: assert rect(B,n)!=rect(D,n)
   counts['nontrivial_eliminations']+=1
counts['limitations']='Finite symbolic checks only; general proof is in the new carrier, not inferred from these checks.'
Path(__file__).with_name('orbit-elimination-check-result.json').write_text(json.dumps(counts,indent=2)+'\n')
print(json.dumps(counts,indent=2))
