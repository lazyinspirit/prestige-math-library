from fractions import Fraction as F
from itertools import product,permutations
I=range(4); g=[1,-1,-1,-1]
def eps(*ix):
 if len(set(ix))<4:return 0
 return (-1)**sum(ix[a]>ix[b] for a in I for b in range(a+1,4))
def Scur(S,i,j,k,l):
 return F(1,2)*((g[i]*S[l,j] if i==k else 0)-(g[i]*S[k,j] if i==l else 0)-(g[j]*S[l,i] if j==k else 0)+(g[j]*S[k,i] if j==l else 0))
def check(jet,label):
 FF={(j,k,l):sum(g[i]*(jet[i,i,j,k,l]-F(1,2)*((g[i]*Sjet[i,l,j] if i==k else 0)-(g[i]*Sjet[i,k,j] if i==l else 0))) for i in I) for j,k,l in product(I,repeat=3)}
 worst=F(0); example=None
 for i,m,j,k,l in product(I,repeat=5):
  lhs=g[i]*sum(jet[a,i,m,b,c]+Scur({(u,v):Sjet[a,u,v] for u,v in product(I,repeat=2)},i,m,b,c) for a,b,c in [(j,k,l),(k,l,j),(l,j,k)])
  rhs=F(1,2)*sum(eps(j,k,l,p)*g[p]*FF[p,r,s]*eps(m,i,r,s)*g[i]*g[r]*g[s] for p,r,s in product(I,repeat=3))
  if abs(lhs-rhs)>worst:worst=abs(lhs-rhs);example=(i,m,j,k,l,lhs,rhs)
 if worst:raise AssertionError((label,worst,example))
# Build ten Weyl basis tensors by electric/magnetic reconstruction, via algebraic Riemann projection for E and pair dual for B.
W=[]
for mode in range(5):
 E={(a,b):F(0) for a,b in product(range(1,4),repeat=2)}
 if mode<2:E[mode+1,mode+1]=1;E[3,3]=-1
 else:
  a,b=[(1,2),(1,3),(2,3)][mode-2];E[a,b]=E[b,a]=1
 def h(a,b):return g[a] if a==b and a else 0
 def ll(a,b):return (g[a] if a==b else 0)-(2 if a==b==0 else 0)
 def ee(a,b):return E.get((a,b),0)
 C={(i,j,k,l):ll(j,k)*ee(l,i)-ll(j,l)*ee(k,i)-ll(i,k)*ee(l,j)+ll(i,l)*ee(k,j) for i,j,k,l in product(I,repeat=4)}
 W.append(C)
 W.append({(i,j,k,l):F(1,2)*sum(C[i,j,p,q]*eps(p,q,k,l)*g[p]*g[q] for p,q in product(I,repeat=2)) for i,j,k,l in product(I,repeat=4)})
zero={(d,i,j,k,l):F(0) for d,i,j,k,l in product(I,repeat=5)}
Sjet={(d,i,j):F(0) for d,i,j in product(I,repeat=3)}
for n,C in enumerate(W):
 for d in I:
  jet=zero.copy()
  for ix,val in C.items():jet[(d,)+ix]=val
  check(jet,('weyl',n,d))
print('PASS: 40 independent Weyl derivative basis jets; all 1024 identity components each.')
# 40 symmetric S derivative coordinates, solve the 4 conservation equations for Sjet[k,0,0] using a safe pivot: its coefficient is -g0 for k!=0, k0 instead use Sjet[1,0,1]. General rational nullspace Gaussian elimination.
coords=[(d,i,j) for d in I for i in I for j in range(i,4)]
M=[]
for l in I:
 row=[]
 for co in coords:
  d,i,j=co
  def val(a,b,c):return int(a==d and ((b,c)==(i,j) or (b,c)==(j,i)))
  row.append(F(sum(g[a]*val(a,l,a) for a in I)-sum(g[a]*val(l,a,a) for a in I)))
 M.append(row)
piv=[];r=0
for c in range(len(coords)):
 p=next((a for a in range(r,4) if M[a][c]),None)
 if p is None:continue
 M[r],M[p]=M[p],M[r];v=M[r][c];M[r]=[x/v for x in M[r]]
 for a in range(4):
  if a!=r:
   v=M[a][c];M[a]=[x-v*y for x,y in zip(M[a],M[r])]
 piv.append(c);r+=1
 if r==4:break
free=[c for c in range(len(coords)) if c not in piv]
for c in free:
 x=[F(0)]*len(coords);x[c]=1
 for a,p in enumerate(piv):x[p]=-M[a][c]
 Sjet={(d,i,j):F(0) for d,i,j in product(I,repeat=3)}
 for (d,i,j),v in zip(coords,x):Sjet[d,i,j]=Sjet[d,j,i]=v
 check(zero,('schouten',c))
print('PASS: 36 basis jets spanning div S = d tr S; all 1024 identity components each.')
