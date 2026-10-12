#!/usr/bin/env python3
from itertools import combinations
from collections import defaultdict
import json

def partitions(n,cap=None):
    if n==0:
        yield ();return
    for k in range(min(n,n if cap is None else cap),0,-1):
        for p in partitions(n-k,k):yield(k,)+p

def dominates(a,b):return all(sum(a[:r])>=sum(b[:r]) for r in range(1,max(len(a),len(b))+1))
def restricted(a,e):return all(a[r]-(a[r+1] if r+1<len(a) else 0)<e for r in range(len(a)))
def addable(a):return [(r,a[r-1]+1) for r in range(1,len(a)+1) if r==1 or a[r-2]>a[r-1]]+[(len(a)+1,1)]
def add(a,C):
    a=list(a)+([0] if any(r==len(a)+1 for r,c in C) else [])
    for r,c in C:a[r-1]+=1
    return tuple(a)
def weight(a,e):return tuple(sum((c-r)%e==i for r,x in enumerate(a,1) for c in range(1,x+1)) for i in range(e))
def ladder(r,c,e):return(e-1)*r+c-e

def word(a,e):
    ns=[(r,c) for r,x in enumerate(a,1) for c in range(1,x+1)]
    return tuple((c-r)%e for r,c in sorted(ns,key=lambda x:(ladder(*x,e),-x[0])))

boundary_cases=0
for e in range(2,7):
    for n in range(14):
        P=list(partitions(n));W={a:weight(a,e) for a in P}
        for a in P:
            if not restricted(a,e):continue
            mx=max((ladder(r,c,e) for r,x in enumerate(a,1) for c in range(1,x+1)),default=-1)
            for l in range(mx+1,mx+e+1):
                i=l%e;L=[x for x in addable(a) if ladder(*x,e)==l]
                for k in range(1,len(L)+1):
                    delta=add(a,sorted(L,reverse=True)[:k])
                    for b in P:
                        if not dominates(b,a) or W[a]!=W[b]:continue
                        B=[x for x in addable(b) if (x[1]-x[0])%e==i]
                        for C in combinations(B,k):
                            gamma=add(b,C);boundary_cases+=1
                            assert dominates(gamma,delta),(e,a,b,l,k,delta,gamma)

criterion_cases=0
for e in range(2,7):
    states={():{()}}
    for n in range(1,11):
        new=defaultdict(set)
        for w,shapes in states.items():
            for a in shapes:
                for x in addable(a):new[w+((x[1]-x[0])%e,)].add(add(a,[x]))
        for lam in partitions(n):
            if not restricted(lam,e):continue
            w=word(lam,e)
            for mu in new[w]:
                criterion_cases+=1
                assert dominates(mu,lam),(e,lam,w,mu)
        states=new

print(json.dumps({'status':'pass','missing_lemma_remains_unproved':True,'boundary_scope':{'e':[2,6],'size_of_alpha':[0,13],'checked_extension_cases':boundary_cases},'ladder_word_scope':{'e':[2,6],'n':[1,10],'checked_matching_shape_cases':criterion_cases},'not_claimed':['general-proof','classifier-acceptance','same-shape-tableau-uniqueness']},indent=2))
