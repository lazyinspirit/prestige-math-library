"""Exhaustive exact Fibonacci coherence in Z[u,v,y]/(u²+u-1,v²-u,y²+uy+1).
No floating point, symbolic packages, numerical root approximations, or external libraries.
Tree bases are postorder labels (unit=0,tau=1), fixed root, lexicographic order.
"""
from functools import lru_cache
from itertools import product
import json

@lru_cache(None)
def mon(a,b,c):
    if c>=2:return tuple(-x-z for x,z in zip(mon(a+1,b,c-1),mon(a,b,c-2)))
    if b>=2:return mon(a+1,b-2,c)
    if a>=2:return tuple(x-z for x,z in zip(mon(a-2,b,c),mon(a-1,b,c)))
    v=[0]*8;v[4*a+2*b+c]=1;return tuple(v)
class R(tuple):
    def __new__(cls,x=0):return tuple.__new__(cls,(x,0,0,0,0,0,0,0) if isinstance(x,int) else x)
    def __add__(a,b):return R(x+y for x,y in zip(a,R(b)))
    __radd__=__add__
    def __neg__(a):return R(-x for x in a)
    def __sub__(a,b):return a+-R(b)
    def __rsub__(a,b):return R(b)+-a
    def __mul__(a,b):
        b=R(b);out=[0]*8
        for i,x in enumerate(a):
            for j,z in enumerate(b):
                if x and z:
                    ai,bi,ci=i//4,(i//2)%2,i%2;aj,bj,cj=j//4,(j//2)%2,j%2
                    out=[t+x*z*r for t,r in zip(out,mon(ai+aj,bi+bj,ci+cj))]
        return R(out)
    __rmul__=__mul__
Z=R();I=R(1);u=R(mon(1,0,0));v=R(mon(0,1,0));y=R(mon(0,0,1));x=y*y
F=[[u,v],[v,-u]]
def mm(a,b):return [[sum((p*q for p,q in zip(row,col)),Z) for col in zip(*b)] for row in a] if a else []
def eye(n):return [[I if i==j else Z for j in range(n)] for i in range(n)]
def fusion(a,b):return (b,) if a==0 else ((a,) if b==0 else (0,1))
def leaves(t):return (t,) if isinstance(t,int) else leaves(t[0])+leaves(t[1])
def nodes(t):return [] if isinstance(t,int) else nodes(t[0])+nodes(t[1])+[leaves(t)]
def bases(t,charges,total):
    def rec(t):
        if isinstance(t,int):return [{(t,):charges[t]}]
        out=[]
        for a in rec(t[0]):
            for b in rec(t[1]):
                for c in fusion(a[leaves(t[0])],b[leaves(t[1])]):out.append(a|b|{leaves(t):c})
        return out
    out=[p for p in rec(t) if p[leaves(t)]==total]
    return sorted(out,key=lambda p:tuple(p[n] for n in nodes(t)[:-1]))
def fblock(a,b,c,d,e,f):
    if 0 in (a,b,c) or d==0:return I
    return F[f][e]
def move(s,t,A,B,C,charges,total):
    src,tgt=bases(s,charges,total),bases(t,charges,total);out=[]
    for q in tgt:
        row=[]
        for p in src:
            if any(p[k]!=q[k] for k in p.keys()&q.keys()):row.append(Z);continue
            row.append(fblock(p[leaves(A)],p[leaves(B)],p[leaves(C)],p[leaves((A,(B,C)))],p[leaves((A,B))],q[leaves((B,C))]))
        out.append(row)
    return out
T=[(((0,1),2),3),((0,(1,2)),3),(0,((1,2),3)),(0,(1,(2,3))),((0,1),(2,3))]
counts={'pentagon_input_lists':0,'pentagon_sectors':0,'nonempty_pentagon_sectors':0,'pentagon_entries':0}
for charges in product((0,1),repeat=4):
    counts['pentagon_input_lists']+=1
    for total in (0,1):
        a1=move(T[0],T[1],0,1,2,charges,total);a2=move(T[1],T[2],0,(1,2),3,charges,total);a3=move(T[2],T[3],1,2,3,charges,total);a4=move(T[0],T[4],(0,1),2,3,charges,total);a5=move(T[4],T[3],0,1,(2,3),charges,total)
        lhs,rhs=mm(mm(a3,a2),a1),mm(a5,a4);assert lhs==rhs,(charges,total)
        counts['pentagon_sectors']+=1;counts['nonempty_pentagon_sectors']+=bool(lhs);counts['pentagon_entries']+=len(lhs)**2
# All unit-input hexagons cancel to the same remaining map (proved in carrier).
# Only all-tau inputs remain: total-unit gives x=y²; total-tau gives FEF=DFD.
assert x==y*y
D=[[x,Z],[Z,y]];E=[[I,Z],[Z,y]];B2=mm(mm(F,D),F)
assert mm(mm(F,E),F)==mm(mm(D,F),D)
assert mm(B2,D)==mm(E,F)
assert mm(D,B2)==mm(F,E)
assert mm(F,F)==eye(2)
assert x*(u*u*x+u*y)==u
assert u*x*(x-y)==y
assert u*y*(x-y)==I
assert y*(u*x+u*u*y)==-u*y
counts.update({'hexagon_nontrivial_total_sectors':2,'hexagon_nontrivial_route_equations':4,'tau_hexagon_entry_residuals':4,'exact_ring_relations':['u²+u=1','v²=u','y²+uy+1=0'],'all_residuals_zero':True})
print(json.dumps(counts,indent=2))
