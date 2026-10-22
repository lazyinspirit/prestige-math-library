"""Finite integer sign check; the general ZF proof is in the companion lemma.
C=F is six scalar groups with d_odd=1, d_even=0; f=g=2.
h_even=-3, h_odd=2, so 1-gf=dh+hd but h^2 != 0 and fg is not idempotent.
No result about all rings is inferred from these samples.
"""
import json
from pathlib import Path
m=5
size=lambda n: max(0,min(n+1,m+1))
def z(a,b): return [[0]*b for _ in range(a)]
def ident(a): return [[int(i==j) for j in range(a)] for i in range(a)]
def add(a,b): return [[x+y for x,y in zip(r,s)] for r,s in zip(a,b)]
def neg(a): return [[-x for x in r] for r in a]
def mul(a,b):
    if not a:return []
    cols=len(b[0]) if b else 0
    return [[sum(a[i][k]*b[k][j] for k in range(len(b))) for j in range(cols)] for i in range(len(a))]
def hpow(j,k):
    if not(0<=j<=k<=m):return 0
    v=1
    for t in range(j,k):v*=(-3 if t%2==0 else 2)
    return v
def delta(n):
    a=z(size(n-1),size(n))
    for k in range(size(n-1)):
        for j in range(size(n)):
            if j==k+1:a[k][j]=(-1)**(n+k+1)*(1 if j%2 else 0)
            elif j==k:a[k][j]=-3 if (n+k)%2 else 4
            elif j<k:a[k][j]=(-1)**(n+k)*4*hpow(j,k)
    return a
def inc(n):return [[int(i==j) for j in range(size(n))] for i in range(size(n+1))]
def alpha(n):return [[2 if j==n else 0] for j in range(size(n))] if 0<=n<=m else z(size(n),0)
def beta(n):return [[2*hpow(j,n) for j in range(size(n))]] if 0<=n<=m else z(0,size(n))
def dc(n):return [[1 if n%2 else 0]] if 1<=n<=m else z(1 if 0<=n-1<=m else 0,1 if 0<=n<=m else 0)
checks=[]
for n in range(1,16):
    assert mul(delta(n-1),delta(n))==z(size(n-2),size(n)),('square',n)
    assert mul(delta(n),alpha(n))==mul(alpha(n-1),dc(n)),('alpha',n)
    assert mul(beta(n-1),delta(n))==(mul(dc(n),beta(n)) if n<=m else z(1 if n-1==m else 0,size(n))),('beta',n)
    checks.extend([['d-square',n],['alpha-chain',n],['beta-chain',n]])
for n in range(15):
    left=add(mul(delta(n+1),inc(n)),(mul(inc(n-1),delta(n)) if n else z(1,1)))
    right=add(ident(size(n)),neg(mul(alpha(n),beta(n)))) if n<=m else ident(size(n))
    assert left==right,('homotopy',n)
    checks.append(['inclusion-homotopy',n])
p=delta(8)
assert mul(p,p)==p
assert delta(9)==add(ident(6),neg(p))
checks.extend([['tail-idempotent',8],['tail-complement',9]])
result={'finite_integer_example':{'degrees':[0,m],'rank_per_degree':1,'f':2,'g':2,'h_even':-3,'h_odd':2,'h_squared_nonzero':True,'fg_strictly_idempotent':False},'checks':checks,'assertions_passed':len(checks),'scope':'Finite sign certificate only; arbitrary noncommutative-ring validity comes from the full local proof.'}
print(json.dumps(result,indent=2))
