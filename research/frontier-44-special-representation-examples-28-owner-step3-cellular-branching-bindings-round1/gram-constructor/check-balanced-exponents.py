#!/usr/bin/env python3
"""Finite independent check of the literal normalized Gram exponent identity."""
from itertools import product
from collections import Counter
from functools import lru_cache
import json

def partitions(n, cap=None):
    if n==0:
        yield ();return
    for k in range(min(n,n if cap is None else cap),1-1,-1):
        for tail in partitions(n-k,k):yield (k,)+tail

def nodes(lam):return [(i,j) for i,a in enumerate(lam,1) for j in range(1,a+1)]

@lru_cache(None)
def tableaux(lam,d):
    ns=nodes(lam);out=[]
    for vals in product(range(1,d+1),repeat=len(ns)):
        t=dict(zip(ns,vals))
        if all((j==1 or t[i,j-1]<=v) and (i==1 or (i-1,j) not in t or t[i-1,j]<v) for (i,j),v in t.items()):out.append(t)
    return tuple(out)

@lru_cache(None)
def kostka(lam,d):
    z=Counter()
    for t in tableaux(lam,d):z[tuple(sum(v==k for v in t.values()) for k in range(1,d+1))]+=1
    return z

def signed(a,mu):
    if min(a,default=0)<0 or len(set(a))!=len(a):return 0
    inv=sum(a[i]<a[j] for i in range(len(a)) for j in range(i+1,len(a)))
    desc=sorted(a,reverse=True);col=[b-len(a)+i+1 for i,b in enumerate(desc)]
    if min(col,default=0)<0:return 0
    lam=tuple(sum(v>=r for v in col) for r in range(1,max(col,default=0)+1))
    if sum(lam)!=sum(mu):return 0
    return (-1)**inv*kostka(lam,len(mu))[mu]

def shift(beta,b,c,h):
    a=list(beta);a[b]-=h;a[c]+=h;return tuple(a)

def clean(a):return {k:v for k,v in a.items() if v}

cases=0
for n in range(1,6):
    d=n
    for lam in partitions(n):
        ns=nodes(lam);cols=[sum(x>=j for x in lam) for j in range(1,n+1)]
        beta=tuple(cols[j]+n-j-1 for j in range(n))
        literal={}
        for t in tableaux(lam,d):
            mu=tuple(sum(v==k for v in t.values()) for k in range(1,d+1))
            E=literal.setdefault(mu,Counter())
            for (i,j),v in t.items():
                for l in range(1,j):
                    for k in range(1,cols[l-1]+1):
                        if t[k,l]<v and all(t[kp,l]>v for kp in range(k+1,cols[l-1]+1)):
                            a=j-i+k-l
                            assert a>0,(lam,t,(i,j),(k,l),a)
                            E[a+1]+=1;E[a]-=1
        for mu,E in literal.items():
            A=Counter();H=Counter()
            for h in range(1,max(beta)+1):
                for b in range(n):
                    for c in range(n):
                        if b!=c and beta[b]-h<beta[c]:A[h]-=signed(shift(beta,b,c,h),mu)
            for a,b in ns:
                for c in range(b+1,lam[a-1]+1):
                    hab=lam[a-1]-b+cols[b-1]-a+1
                    hac=lam[a-1]-c+cols[c-1]-a+1
                    D=signed(shift(beta,c-1,b-1,hac),mu)
                    H[hab]+=D;H[hac]-=D
            assert clean(E)==clean(A)==clean(H),(lam,mu,clean(E),clean(A),clean(H))
            cases+=1
print(json.dumps({'status':'pass','n_range':[1,5],'alphabet_d':'n','checked_weight_cases':cases,'assertion':'normalized-gamma-tableau-exponents=corrected-beta-product-exponents=balanced-hookratio-exponents','scope':'finite-smoke-only-not-general-proof'},indent=2))
