#!/usr/bin/env python3
"""Exact small Coxeter characteristic polynomials and parabolic-orbit certificates.

No floating point or full exceptional-group enumeration. The mathematical
interpretation uses the scaffold's faithful reflection/chamber/parabolic proofs.
"""
from collections import deque, Counter
from fractions import Fraction
from pathlib import Path
import json

ZERO=(0,0); ONE=(1,0)
def add(x,y): return (x[0]+y[0],x[1]+y[1])
def neg(x): return (-x[0],-x[1])
def mul(x,y,relation):
    c0,c1=relation
    return (x[0]*y[0]+c0*x[1]*y[1], x[0]*y[1]+x[1]*y[0]+c1*x[1]*y[1])
def div(x,k): return (Fraction(x[0],k),Fraction(x[1],k))
def scalar(x): return [str(x[0]),str(x[1])]
def pmul(a,b):
    out=[0]*(len(a)+len(b)-1)
    for i,x in enumerate(a):
        for j,y in enumerate(b):out[i+j]+=x*y
    return out

def qproduct(degrees):
    p=[1]
    for d in degrees:p=pmul(p,[1]*d)
    return p

CASES=[
 {'type':'E6','rank':6,'edges':[(0,1,3),(1,2,3),(2,3,3),(3,4,3),(2,5,3)],'delete':0,'parabolic':'D5','degrees':[2,5,6,8,9,12],'par_degrees':[2,4,5,6,8],'h':12,'exponents':[1,4,5,7,8,11]},
 {'type':'E7','rank':7,'edges':[(0,1,3),(1,2,3),(2,3,3),(3,4,3),(4,5,3),(2,6,3)],'delete':5,'parabolic':'E6','degrees':[2,6,8,10,12,14,18],'par_degrees':[2,5,6,8,9,12],'h':18,'exponents':[1,5,7,9,11,13,17]},
 {'type':'E8','rank':8,'edges':[(0,1,3),(1,2,3),(2,3,3),(3,4,3),(4,5,3),(5,6,3),(2,7,3)],'delete':6,'parabolic':'E7','degrees':[2,8,12,14,18,20,24,30],'par_degrees':[2,6,8,10,12,14,18],'h':30,'exponents':[1,7,11,13,17,19,23,29]},
 {'type':'F4','rank':4,'edges':[(0,1,3),(1,2,4),(2,3,3)],'delete':0,'parabolic':'B3','degrees':[2,6,8,12],'par_degrees':[2,4,6],'h':12,'exponents':[1,5,7,11]},
 {'type':'H3','rank':3,'edges':[(0,1,5),(1,2,3)],'delete':2,'parabolic':'I2(5)','degrees':[2,6,10],'par_degrees':[2,5],'h':10,'exponents':[1,5,9]},
 {'type':'H4','rank':4,'edges':[(0,1,5),(1,2,3),(2,3,3)],'delete':3,'parabolic':'H3','degrees':[2,12,20,30],'par_degrees':[2,6,10],'h':30,'exponents':[1,11,19,29]},
]
# Cyclotomic polynomials in ascending coefficient order.
PHI={10:[1,-1,1,-1,1],12:[1,0,-1,0,1],18:[1,0,0,-1,0,0,1],30:[1,1,0,-1,-1,-1,0,1,1]}
def zadd(a,b):return [a[i]+b[i] for i in range(len(a))]
def zneg(a):return [-x for x in a]
def zmul(a,b,mod):
    out=pmul(a,b);n=len(mod)-1
    out+= [0]*max(0,n-len(out))
    for k in range(len(out)-1,n-1,-1):
        t=out[k]
        for j in range(n+1):out[k-n+j]-=t*mod[j]
    return out[:n]
def zpow(k,h):
    mod=PHI[h]; n=len(mod)-1; p=[1]+[0]*(n-1);z=[0,1]+[0]*(n-2)
    for _ in range(k%h):p=zmul(p,z,mod)
    return p

def verify_spectrum(cp,case,field):
    h=case['h'];mod=PHI[h]; n=len(mod)-1
    one=[1]+[0]*(n-1);p=[one]
    for e in case['exponents']:
        root=zpow(e,h);out=[[0]*n for _ in range(len(p)+1)]
        for i,c in enumerate(p):
            out[i]=zadd(out[i],zneg(zmul(c,root,mod)))
            out[i+1]=zadd(out[i+1],c)
        p=out
    # cp is descending; compare in Q[z]/Phi_h. H fields use positive phi.
    theta=zadd(one,zadd(zpow(h//5,h),zpow(h-h//5,h))) if field=='Q(phi)' else None
    actual=[]
    for a,b in reversed(cp):
        c=[a]+[0]*(n-1)
        if b:
            assert theta is not None,(field,b)
            c=zadd(c,[b*t for t in theta])
        actual.append(c)
    assert actual==p,(case['type'],'spectrum mismatch',actual,p)

def run(case):
    n=case['rank']; labels={m for _,_,m in case['edges']}
    if 5 in labels:field='Q(phi)';rel=(1,1)
    elif 4 in labels:field='Q(sqrt(2))';rel=(2,0)
    else:field='Q';rel=(0,0)
    coeff=[[ZERO]*n for _ in range(n)]; adj=[[] for _ in range(n)]
    for i,j,m in case['edges']:
        c=ONE if m==3 else (0,1)
        coeff[i][j]=coeff[j][i]=c;adj[i].append(j);adj[j].append(i)
    def reflect(v,s):
        a=v[s]; out=list(v);out[s]=neg(a)
        for j in adj[s]:out[j]=add(v[j],mul(coeff[j][s],a,rel))
        return tuple(out)
    seed=tuple(ONE if i==case['delete'] else ZERO for i in range(n))
    states=[seed];words=[[]];distance=[0];index={seed:0};q=deque([0])
    while q:
        i=q.popleft()
        for s in range(n):
            v=reflect(states[i],s)
            if v not in index:
                assert len(states)<1000,case['type']+' exceeds small quotient bound'
                index[v]=len(states);states.append(v);words.append(words[i]+[s]);distance.append(distance[i]+1);q.append(index[v])
    edges=[[index[reflect(v,s)] for s in range(n)] for v in states]
    for i,row in enumerate(edges):
        for s,j in enumerate(row):
            assert edges[j][s]==i
            assert abs(distance[i]-distance[j])<=1
        v=seed
        for s in words[i]:v=reflect(v,s)
        assert v==states[i] and len(words[i])==distance[i]
    counts=Counter(distance);quotient=[counts[i] for i in range(max(distance)+1)]
    assert pmul(qproduct(case['par_degrees']),quotient)==qproduct(case['degrees']),case['type']+' Poincare factor mismatch'
    # Bipartite product, recorded as applied-reflection sequence.
    colors={0:0};todo=deque([0])
    while todo:
        i=todo.popleft()
        for j in adj[i]:
            if j not in colors:colors[j]=1-colors[i];todo.append(j)
            assert colors[j]!=colors[i]
    sequence=[i for color in [0,1] for i in range(n) if colors[i]==color]
    basis=[tuple(ONE if i==j else ZERO for i in range(n)) for j in range(n)]
    columns=[]
    for v in basis:
        for s in sequence:v=reflect(v,s)
        columns.append(v)
    A=[[columns[j][i] for j in range(n)] for i in range(n)]
    def matmul(a,b):
        out=[[ZERO]*n for _ in range(n)]
        for i in range(n):
            for j in range(n):
                for k in range(n):out[i][j]=add(out[i][j],mul(a[i][k],b[k][j],rel))
        return out
    B=[[ONE if i==j else ZERO for j in range(n)] for i in range(n)]; cp=[ONE]
    for k in range(1,n+1):
        AB=matmul(A,B); tr=ZERO
        for i in range(n):tr=add(tr,AB[i][i])
        ck=neg(div(tr,k));cp.append(ck)
        for i in range(n):AB[i][i]=add(AB[i][i],ck)
        B=AB
    assert all(x==ZERO for row in B for x in row)
    verify_spectrum(cp,case,field)
    return {'type':case['type'],'rank':n,'diagram_edges':case['edges'],'field':field,'theta_relation':{'theta_squared':list(rel)},'deleted_node':case['delete'],'parabolic':case['parabolic'],'orbit_size':len(states),'quotient_length_polynomial':quotient,'coxeter_applied_sequence':sequence,'coxeter_matrix':[[scalar(x) for x in row] for row in A],'characteristic_polynomial_descending':[scalar(x) for x in cp],'h':case['h'],'spectral_exponents':case['exponents'],'degrees_verified_by_uniform_argument':case['degrees'],'parabolic_degrees':case['par_degrees'],'checks':{'orbit_closed':True,'word_upper_bounds':True,'edge_distance_lower_bounds':True,'reflection_involutions':True,'poincare_product_identity':True,'cyclotomic_spectrum_identity':True,'characteristic_recurrence_final_zero':True},'states':[{'coordinates':[[a,b] for a,b in v],'applied_sequence':words[i],'distance':distance[i],'reflection_edges':edges[i]} for i,v in enumerate(states)]}

if __name__=='__main__':
    results=[run(c) for c in CASES]
    out=Path(__file__).with_name('finite-degree-poincare-certificates.json')
    out.write_text(json.dumps({'version':1,'arithmetic':'exact integers and rational quadratic coefficients; no floats','scope':'exceptional parabolic-orbit and rank-at-most-eight spectral certificates; mathematical interpretation in parent proof note','cases':results},indent=2)+'\n')
    for r in results:print(r['type']+': '+str(r['orbit_size'])+' orbit vertices; exact quotient/spectrum/product checks PASS')
    print(str(out))
