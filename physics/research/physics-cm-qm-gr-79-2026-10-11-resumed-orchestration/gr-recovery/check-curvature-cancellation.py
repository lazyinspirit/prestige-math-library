from fractions import Fraction as Q
from itertools import product
import json
from pathlib import Path
I=range(4);g=[1,-1,-1,-1]
def eps(a,b,c):
 if len({a,b,c})<3 or 0 in (a,b,c):return 0
 return (-1)**sum([a,b,c][i]>[a,b,c][j] for i in range(3) for j in range(i+1,3))
def weyl(E,B):
 def ev(t,a,b):return t.get((a,b),0)
 l=lambda a,b:-int(a==b);u=lambda a:int(a==0)
 return {(i,j,k,lx):l(j,k)*ev(E,lx,i)-l(j,lx)*ev(E,k,i)-l(i,k)*ev(E,lx,j)+l(i,lx)*ev(E,k,j)-sum((u(k)*ev(B,lx,p)-u(lx)*ev(B,k,p))*g[p]*eps(p,i,j)+(u(i)*ev(B,j,p)-u(j)*ev(B,i,p))*g[p]*eps(p,k,lx) for p in I) for i,j,k,lx in product(I,repeat=4)}
cb=[];sb=[]
for mode in range(5):
 t={}
 if mode<2:t[mode+1,mode+1]=1;t[3,3]=-1
 else:
  a,b=[(1,2),(1,3),(2,3)][mode-2];t[a,b]=t[b,a]=1
 cb+=[weyl(t,{}),weyl({},t)]
for a in I:
 for b in range(a,4):sb.append({(i,j):int((i,j)==(a,b) or (i,j)==(b,a)) for i,j in product(I,repeat=2)})
zC={ix:0 for ix in product(I,repeat=4)};zS={ix:0 for ix in product(I,repeat=2)}
def test(C,S):
 R={(i,j,k,l):Q(C[i,j,k,l])+Q(1,2)*((g[i]*S[l,j] if i==k else 0)-(g[i]*S[k,j] if i==l else 0)-(g[j]*S[l,i] if j==k else 0)+(g[j]*S[k,i] if j==l else 0)) for i,j,k,l in product(I,repeat=4)}
 def action(B,ids,a,b):
  return -sum(g[p]*R[p,ids[v],a,b]*B[ids[:v]+(p,)+ids[v+1:]] for v in range(len(ids)) for p in I)
 for k,l in product(I,repeat=2):
  ans=sum(Q(1,2)*g[j]*g[i]*action(C,(i,j,k,l),j,i) for i,j in product(I,repeat=2))-sum(Q(1,2)*g[j]*(action(S,(l,j),j,k)-action(S,(k,j),j,l)) for j in I)
  assert ans==0,(k,l,ans)
basis=[(c,zS) for c in cb]+[(zC,s) for s in sb]
for a in range(20):
 for b in range(a,20):
  C={ix:basis[a][0][ix]+basis[b][0][ix] for ix in zC};S={ix:basis[a][1][ix]+basis[b][1][ix] for ix in zS};test(C,S)
report={'tests':210,'pass':True,'scope':'Exact rational polarization of the quadratic algebraic residual-free curvature cancellation: all 20 Weyl+Schouten basis variables and their symmetric pairs. This checks only that finite-dimensional identity, not the complete differential/subsidiary proof.'}
Path('research/physics-cm-qm-gr-79-2026-10-11-resumed-orchestration/gr-recovery/curvature-cancellation-check.json').write_text(json.dumps(report,indent=2)+'\n');print(report)
