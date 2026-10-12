"""Exact rational coefficient checks; accompanying memo supplies the proof."""
from fractions import Fraction as Q
from itertools import product
from pathlib import Path
import json

S = [1, -1, -1, -1]
I = range(1, 4)
A = range(4)
def zero(): return [[0]*4 for _ in A]
def eps(a,b,c):
    if 0 in (a,b,c) or len({a,b,c}) != 3: return 0
    return 1 if (a,b,c) in ((1,2,3),(2,3,1),(3,1,2)) else -1
def sym(t): return [[Q(t[i][j]+t[j][i],2) for j in I] for i in I]
def reconstruct(E,B,i,j,k,l):
    # l=h-UU is diag(-1,-1,-1,-1), not diag(-1,-2,-2,-2).
    ll=lambda a,b: -int(a==b)
    u=lambda a: int(a==0)
    return (ll(j,k)*E[l][i]-ll(j,l)*E[k][i]-ll(i,k)*E[l][j]+ll(i,l)*E[k][j]
            -sum((u(k)*B[l][p]-u(l)*B[k][p])*S[p]*eps(p,i,j)
                 +(u(i)*B[j][p]-u(j)*B[i][p])*S[p]*eps(p,k,l) for p in A))

def calculate(E,B,X,dE,dB,rot,r=0,dr=None,lam=0):
    theta=-sum(X[i][i] for i in I)
    dr=[-r*theta,0,0,0] if dr is None else dr
    def G(a,o,b):
        if a==0: return 0
        if b==0 and o in I: return -X[a][o]
        if o==0 and b in I: return -X[a][b]
        return rot[a][o][b]
    def C(i,j,k,l): return reconstruct(E,B,i,j,k,l)
    def nc(a,i,j,k,l):
        ids=[i,j,k,l]
        ans=reconstruct(dE[a],dB[a],*ids)
        for slot,idx in enumerate(ids):
            for p in A:
                new=ids.copy();new[slot]=p
                ans-=G(a,p,idx)*C(*new)
        return ans
    def sch(i,j):
        return r*(int(i==j==0)-Q(S[i]*int(i==j),3))-Q(lam*S[i]*int(i==j),3)
    def ns(a,i,j):
        return (dr[a]*(int(i==j==0)-Q(S[i]*int(i==j),3))
                -sum(G(a,p,i)*sch(p,j)+G(a,p,j)*sch(i,p) for p in A))
    def F(j,k,l): return sum(S[a]*nc(a,a,j,k,l) for a in A)-Q(ns(k,l,j)-ns(l,k,j),2)
    electric=sym([[0]*4]+[[0]+[F(i,0,j) for j in I] for i in I])
    magnetic=sym([[0]*4]+[[0]+[sum(Q(eps(i,k,l)*F(j,k,l),2) for k,l in product(I,repeat=2)) for j in I] for i in I])
    def D(t,dt,a,i,j):
        return dt[a][i][j]-sum(rot[a][p][i]*t[p][j]+rot[a][p][j]*t[i][p] for p in I)
    def curl(t,dt,i,j):
        return sum(Q(eps(j,k,l)*D(t,dt,k,l,i)+eps(i,k,l)*D(t,dt,k,l,j),2) for k,l in product(I,repeat=2))
    def mix(t,i,j,transpose=False):
        return sum(Q((X[k][i] if transpose else X[i][k])*t[j][k]+(X[k][j] if transpose else X[j][k])*t[i][k],2) for k in I)
    electric_expected=[];magnetic_expected=[]
    for i in I:
        er=[];br=[]
        for j in I:
            double=sum(Q(X[k][l]*B[p][q]*(eps(p,k,i)*eps(q,l,j)+eps(p,k,j)*eps(q,l,i)),2) for k,l,p,q in product(I,repeat=4))
            er.append(dE[0][i][j]+curl(B,dB,i,j)+2*mix(E,i,j,True)+mix(E,i,j)+2*theta*E[i][j]
                      -int(i==j)*sum(X[k][l]*E[k][l] for k,l in product(I,repeat=2))
                      +Q(r*(X[i][j]+X[j][i]),4)-Q(dr[0]*int(i==j),6))
            br.append(dB[0][i][j]-curl(E,dE,i,j)+mix(B,i,j,True)+theta*B[i][j]+double)
        electric_expected.append(er);magnetic_expected.append(br)
    return electric==electric_expected,magnetic==magnetic_expected

def basis():
    ans=[]
    for diag in ((1,-1,0),(1,0,-1)):
        t=zero()
        for i,v in zip(I,diag):t[i][i]=v
        ans.append(t)
    for i,j in ((1,2),(1,3),(2,3)):
        t=zero();t[i][j]=t[j][i]=1;ans.append(t)
    return ans
rows=[]
def run(label,E=None,B=None,X=None,dE=None,dB=None,rot=None,**kw):
    ok=calculate(E or zero(),B or zero(),X or zero(),dE or [zero() for _ in A],dB or [zero() for _ in A],rot or [[[0]*4 for _ in A] for _ in A],**kw)
    rows.append({'coefficient':label,'electric':ok[0],'magnetic':ok[1]})
for name in ('E','B'):
    for n,t in enumerate(basis()):
        for a,b in product(I,repeat=2):
            x=zero();x[a][b]=1
            run(f'{name}{n} chi{a}{b}',**{name:t},X=x)
        for a in A:
            dt=[zero() for _ in A];dt[a]=t
            run(f'd{a}{name}{n}',**{'d'+name:dt})
        for a in I:
            for b,c in ((1,2),(1,3),(2,3)):
                rot=[[[0]*4 for _ in A] for _ in A]
                rot[a][b][c]=1;rot[a][c][b]=-1
                run(f'{name}{n} rotation{a}{b}{c}',**{name:t},rot=rot)
for a,b in product(I,repeat=2):
    x=zero();x[a][b]=1
    run(f'matter chi{a}{b}',X=x,r=1)
for a in A:
    dr=[0]*4;dr[a]=1
    run(f'matter dr{a}',dr=dr)
for a,b in product(I,repeat=2):
    x=zero();x[a][b]=1
    run(f'Lambda chi{a}{b}',X=x,lam=1)
assert all(row['electric'] and row['magnetic'] for row in rows), [r for r in rows if not(r['electric'] and r['magnetic'])]
out={'arithmetic':'exact fractions; no tolerance','scope':'All linear derivative and bilinear Weyl/connection coefficients on STF E,B; all nine chi slots, all nine spatial rotation slots, all four density derivative slots, matter chi, constant Lambda chi. Component partial derivatives are independent; D includes spatial rotation. These coefficient checks support the accompanying analytic derivation, not a whole dust-chain audit.','tests':len(rows),'all_pass':True,'rows':rows}
Path(__file__).with_name('full-projection-check.json').write_text(json.dumps(out,indent=2)+'\n')
print(json.dumps({k:v for k,v in out.items() if k!='rows'},indent=2))
