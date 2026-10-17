"""Verify the KN component certificate using Python's exact Fraction arithmetic only.

No SymPy, floating point, parameter sampling, or trusted simplification is used.
Polynomial dictionaries map exponent tuples (r,y,M,a,q) to rational coefficients.
A rational value is n/(Sigma**s * Delta**d * b**t). Intermediate denominators
are retained; adding uses a common multiple and comparison cross-multiplies.
The certificate is a compressed field-expression trace of the item's algorithm,
not a claim that the algorithm's unreduced internal representations were run.
"""
from fractions import Fraction as F
from pathlib import Path
import json
from itertools import permutations
N=5; Z=(0,)*N

def clean(p): return {e:c for e,c in p.items() if c}
def const(c): return {Z:F(c)} if c else {}
def add(p,q):
 r=p.copy()
 for e,c in q.items():r[e]=r.get(e,0)+c
 return clean(r)
def neg(p):return {e:-c for e,c in p.items()}
def mul(p,q):
 r={}
 for e,c in p.items():
  for f,d in q.items():
   h=tuple(x+y for x,y in zip(e,f));r[h]=r.get(h,0)+c*d
 return clean(r)
def power(p,k):
 r=const(1)
 for _ in range(k):r=mul(r,p)
 return r
def derivative(p,k):
 if k is None:return {}
 r={}
 for e,c in p.items():
  if e[k]:
   f=list(e);f[k]-=1;r[tuple(f)]=c*e[k]
 return clean(r)
def var(i):
 e=list(Z);e[i]=1;return {tuple(e):F(1)}
r,y,M,a,q=map(var,range(5));r2=power(r,2);a2=power(a,2);y2=power(y,2)
S=add(r2,mul(a2,y2));D=add(add(r2,neg(mul(const(2),mul(M,r)))),add(a2,power(q,2)));B=add(const(1),neg(y2));R=add(r2,a2)
factors=(S,D,B)

def exact_quotient(p,d):
 """Multivariate long division: return quotient only for zero remainder."""
 rem=p.copy();out={};de=max(d);dc=d[de]
 while rem:
  e=max(rem)
  if any(x<z for x,z in zip(e,de)):return None
  h=tuple(x-z for x,z in zip(e,de));c=rem[e]/dc
  out[h]=out.get(h,0)+c;rem=add(rem,neg(mul({h:c},d)))
 return clean(out)

class Rat:
 def __init__(self,n=None,e=(0,0,0)):self.n=clean(n or {});self.e=e
 def __add__(self,v):
  if not isinstance(v,Rat):v=Rat(const(v))
  h=tuple(max(x,z) for x,z in zip(self.e,v.e))
  def lift(x):
   p=x.n
   for f,u,t in zip(factors,h,x.e):p=mul(p,power(f,u-t))
   return p
  return Rat(add(lift(self),lift(v)),h)
 __radd__=__add__
 def __neg__(self):return Rat(neg(self.n),self.e)
 def __sub__(self,v):return self+-v
 def __mul__(self,v):
  if not isinstance(v,Rat):v=Rat(const(v))
  return Rat(mul(self.n,v.n),tuple(x+z for x,z in zip(self.e,v.e)))
 __rmul__=__mul__
 def deriv(self,i):
  k={1:0,2:1}.get(i);v=Rat(derivative(self.n,k),self.e)
  for j,(p,t) in enumerate(zip(factors,self.e)):
   if t:
    e=list(self.e);e[j]+=1;v=v-Rat(mul(mul(const(t),self.n),derivative(p,k)),tuple(e))
  return v
 def same(self,v):return not (self-v).n

def decode(v):
 def poly(rows):
  out={}
  for e,c in rows:
   assert len(e)==5 and all(type(k)==int and k>=0 for k in e)
   assert tuple(e) not in out
   out[tuple(e)]=F(c)
  return clean(out)
 n=poly(v['n']);den=poly(v['d']);assert den
 assert v['zero_numerator']==(not n)
 ex=[]
 for fac in factors:
  k=0
  while True:
   z=exact_quotient(den,fac)
   if z is None:break
   den=z;k+=1
  ex.append(k)
 assert set(den)=={Z},'Unexpected denominator factor'
 return Rat({e:c/den[Z] for e,c in n.items()},tuple(ex))
def matrix(t):return [[decode(v) for v in row] for row in t]
def empty():return [[Rat() for _ in range(4)] for _ in range(4)]
checks=0
def check(v,w):
 global checks
 assert v.same(w),'Polynomial cross-product mismatch at check '+str(checks)
 checks+=1

def main():
 p=Path(__file__).with_name('physics-remaining-80-2026-10-17-batch-21.kn-certificate.json')
 c=json.loads(p.read_text());assert c['variables']==['r','y','M','a','q']
 g=matrix(c['g']);inv=matrix(c['inverse']);A=list(map(decode,c['potential']))
 expected=empty();expected[0][0]=Rat(neg(add(D,neg(mul(a2,B)))),(1,0,0));expected[0][3]=expected[3][0]=Rat(neg(mul(mul(a,B),add(R,neg(D)))),(1,0,0));expected[3][3]=Rat(mul(B,add(power(R,2),neg(mul(mul(a2,D),B)))),(1,0,0));expected[1][1]=Rat(S,(0,1,0));expected[2][2]=Rat(S,(0,0,1))
 for i in range(4):
  for j in range(4):check(g[i][j],expected[i][j]);check(sum(g[i][k]*inv[k][j] for k in range(4)),Rat(const(i==j)))
 det=Rat()
 for perm in permutations(range(4)):
  v=Rat(const((-1)**sum(perm[i]>perm[j] for i in range(4) for j in range(i+1,4))))
  for i in range(4):v=v*g[i][perm[i]]
  det=det+v
 check(det,Rat(neg(power(S,2))))
 expectedA=[Rat(neg(mul(q,r)),(1,0,0)),Rat(),Rat(),Rat(mul(mul(mul(q,r),a),B),(1,0,0))]
 for i in range(4):check(A[i],expectedA[i])
 ff=matrix(c['field']);up=matrix(c['raised_field']);ga=[matrix(t) for t in c['connection']]
 for i in range(4):
  for j in range(4):
   check(ff[i][j],A[j].deriv(i)-A[i].deriv(j))
   check(up[i][j],sum(inv[i][k]*inv[j][l]*ff[k][l] for k in range(4) for l in range(4)))
   for k in range(4):check(ga[i][j][k],sum(inv[i][l]*(g[l][k].deriv(j)+g[l][j].deriv(k)-g[j][k].deriv(l))*F(1,2) for l in range(4)))
 for j in range(4):
  v=sum((Rat(S)*up[i][j]).deriv(i) for i in range(4));check(v,decode(c['maxwell'][j]));check(v,Rat())
 ric=matrix(c['ricci']);stress=matrix(c['twice_Q']);res=matrix(c['einstein']);f2=decode(c['F_squared'])
 check(f2,sum(ff[i][j]*up[i][j] for i in range(4) for j in range(4)))
 expectedRic=empty();q2=power(q,2)
 expectedRic[0][0]=Rat(mul(q2,add(D,mul(a2,B))),(3,0,0));expectedRic[0][3]=expectedRic[3][0]=Rat(neg(mul(mul(mul(q2,a),B),add(D,R))),(3,0,0));expectedRic[1][1]=Rat(neg(q2),(1,1,0));expectedRic[2][2]=Rat(q2,(1,0,1));expectedRic[3][3]=Rat(mul(q2,add(mul(mul(a2,D),power(B,2)),mul(B,power(R,2)))),(3,0,0))
 for i in range(4):
  for j in range(4):
   v=sum(ga[k][i][j].deriv(k)-ga[k][i][k].deriv(j) for k in range(4))+sum(ga[k][k][l]*ga[l][i][j]-ga[k][j][l]*ga[l][i][k] for k in range(4) for l in range(4))
   check(ric[i][j],v);check(ric[i][j],expectedRic[i][j])
   v=2*sum(ff[i][k]*inv[k][l]*ff[j][l] for k in range(4) for l in range(4))-g[i][j]*f2*F(1,2)
   check(stress[i][j],v);check(stress[i][j],expectedRic[i][j]);check(res[i][j],ric[i][j]-stress[i][j]);check(res[i][j],Rat())
 sc=sum(inv[i][j]*ric[i][j] for i in range(4) for j in range(4));check(sc,decode(c['scalar']));check(sc,Rat())
 rr=sum(inv[i][k]*inv[j][l]*ric[i][j]*ric[k][l] for i in range(4) for j in range(4) for k in range(4) for l in range(4));check(rr,decode(c['ricci_squared']));check(rr,Rat(mul(const(4),power(q,4)),(4,0,0)))
 check(f2,Rat(mul(mul(const(-2),q2),add(add(power(r,4),neg(mul(const(6),mul(mul(a2,r2),y2)))),mul(power(a,4),power(y,4)))),(4,0,0)))
 print(json.dumps({'status':'pass','exact_polynomial_equalities':checks,'connection_entries':64,'ordered_ricci_entries':16,'maxwell_zeros':4,'einstein_zeros':16,'arithmetic':'Python standard-library Fraction and explicit sparse polynomial operations','domain':'Sigma>0, Delta!=0, b=1-y^2>0; no division by M,a,q,r'}))
if __name__=='__main__':main()
