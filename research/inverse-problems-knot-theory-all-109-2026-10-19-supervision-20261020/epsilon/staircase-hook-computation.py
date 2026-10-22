"""Exact finite F_0 boundary certificate for the proposed staircase tensor.
This is algebra only: geometric realization of its three factors is NOT assumed.
"""
from itertools import product
import json
from pathlib import Path

def staircase(steps):
    a=[sum(steps)//2];m=[0];d={}
    for n in range(0,len(steps),2):
        h,v=steps[n:n+2]
        a += [a[-1]-h,a[-1]-h-v]
        m += [m[-1]-2*h+1,m[-1]-2*h]
        d[n+1]=[(n,h),(n+2,0)]
    return a,m,d

def dual(c):
    a,m,d=c;r={}
    for x,terms in d.items():
        for y,k in terms:r.setdefault(y,[]).append((x,k))
    return [-t for t in a],[-t for t in m],r

factors=[staircase([1,1,1,1]),dual(staircase([1,3,2,2,3,1])),staircase([1,3,3,1])]
basis=list(product(*[range(len(f[0])) for f in factors]))
A={b:sum(f[0][x] for f,x in zip(factors,b)) for b in basis}
M={b:sum(f[1][x] for f,x in zip(factors,b)) for b in basis}

def d(b,k):
    result=set()
    for j,f in enumerate(factors):
        for y,r in f[2].get(b[j],[]):
            c=list(b);c[j]=y;t=(tuple(c),k+r)
            if t in result:result.remove(t)
            else:result.add(t)
    return result

def in_ne(b,k,s=0):
    i,j=-k,A[b]-k
    return i>=0 and j>=s and min(i,j-s)==0

def slice_basis(degree):
    return [(b,(M[b]-degree)//2) for b in basis if (M[b]-degree)%2==0 and in_ne(b,(M[b]-degree)//2)]
rows=slice_basis(0);cols=slice_basis(1);ri={x:i for i,x in enumerate(rows)}
mat=[]
for c in cols:
    v=0
    for t in d(*c):
        if in_ne(*t):
            assert t in ri
            v ^= 1<<ri[t]
    mat.append(v)
# Column elimination retaining the chain furnishing each pivot.
pivots={}
for q,v in enumerate(mat):
    chain=1<<q
    while v:
        p=v.bit_length()-1
        if p not in pivots:pivots[p]=(v,chain);break
        w,z=pivots[p];v^=w;chain^=z
z=((0,0,0),0);assert A[z[0]]==M[z[0]]==0
v=1<<ri[z];chain=0
while v:
    p=v.bit_length()-1
    assert p in pivots,'F0 nonzero in the candidate tensor'
    w,z=pivots[p];v^=w;chain^=z
bound=[cols[q] for q in range(len(cols)) if (chain>>q)&1]
actual=set()
for c in bound:
    for t in d(*c):
        if in_ne(*t):
            if t in actual:actual.remove(t)
            else:actual.add(t)
assert actual=={((0,0,0),0)}
# Verify square-zero symbolically on every R-basis generator, without hook truncation.
for b in basis:
    dd=set()
    for c,k in d(b,0):
        for t in d(c,k):
            if t in dd:dd.remove(t)
            else:dd.add(t)
    assert not dd
out={'scope':'Finite candidate staircase tensor only; NO geometric knot admission',
     'factor_steps':[[1,1,1,1],[-1,-3,-2,-2,-3,-1],[1,3,3,1]],
     'factor_A':[f[0] for f in factors],'factor_M':[f[1] for f in factors],
     'R_basis_dimension':len(basis),'NE_M0_basis_dimension':len(rows),'NE_M1_basis_dimension':len(cols),
     'vertical_generator':{'basis':[0,0,0],'U_exponent':0,'A':0,'M':0},
     'F0_bounding_chain':[{'basis':list(b),'U_exponent':k,'i':-k,'j':A[b]-k,'M':M[b]-2*k} for b,k in bound],
     'exact_NE_boundary':[{'basis':[0,0,0],'U_exponent':0}],
     'conclusion':'Candidate tensor tau0 epsilon+1. Actual knot identification still requires three independent geometric admissions.'}
path=Path(__file__).with_name('staircase-hook-result.json');path.write_text(json.dumps(out,indent=2)+'\n');print(json.dumps(out,indent=2))
