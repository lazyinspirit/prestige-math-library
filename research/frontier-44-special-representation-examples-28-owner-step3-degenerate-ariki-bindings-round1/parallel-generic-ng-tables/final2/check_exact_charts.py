from fractions import Fraction as F
from itertools import product
q=F(2)
def sw(t,r):
 t=list(t);t[r],t[r+1]=t[r+1],t[r];return tuple(t)
def add(A,B):
 C={}
 for c in A.keys()|B.keys():
  f=A.get(c,lambda t:F(0));g=B.get(c,lambda t:F(0));C[c]=lambda t,f=f,g=g:f(t)+g(t)
 return C
def neg(A):return {c:(lambda t,f=f:-f(t)) for c,f in A.items()}
def mult(A,coef):return {c:(lambda t,c=c,f=f:coef(c,t)*f(t)) for c,f in A.items()}
def X(c,t,r):return q**c[r]*(1-t[r])
def P(c,t,r):
 a,b=c[r:r+2];return F(1) if a==b else (1-q)/(1-X(c,t,r)/X(c,t,r+1))
def Q(c,t,r):
 a,b=c[r:r+2];u,v=t[r:r+2];x,z=X(c,t,r),X(c,t,r+1)
 return 1-q+q*v-u if a==b else -q**a/(x-z) if a==b+1 else (x-q*z)/(x-z)
def psi(A,r):
 C={}
 for c,f in A.items():
  a,b=c[r:r+2]
  if a==b:g=lambda t,f=f:(f(sw(t,r))-f(t))/(t[r]-t[r+1]);d=c
  else:g=lambda t,f=f,a=a,b=b:(t[r+1]-t[r] if a==b+1 else F(1))*f(sw(t,r));d=sw(c,r)
  C=add(C,{d:g})
 return C
def T(A,r):return add(psi(mult(A,lambda c,t:Q(c,t,r)),r),neg(mult(A,lambda c,t:P(c,t,r))))
def DL(A,r):
 C={}
 for c,f in A.items():
  d=sw(c,r)
  C=add(C,{d:lambda t,f=f,d=d:(q*X(d,t,r)-X(d,t,r+1))/(X(d,t,r)-X(d,t,r+1))*f(sw(t,r))})
  C=add(C,{c:lambda t,f=f,c=c:(1-q)*X(c,t,r+1)/(X(c,t,r)-X(c,t,r+1))*f(t)})
 return C
def word(A,op,rs):
 for r in reversed(rs):A=op(A,r)
 return A
def K(c,t,r):
 a,b=c[r:r+2];u,v=t[r:r+2];return F(0) if a==b else v-u if b==a+1 else u-v if a==b+1 else F(1)
points=[(F(1,11),F(2,13),F(3,17)),(F(2,19),F(3,23),F(5,29))]
checks=0
def equal(A,B,label):
 global checks
 for c in A.keys()|B.keys():
  for t in points:
   av=A.get(c,lambda t:F(0))(t);bv=B.get(c,lambda t:F(0))(t)
   assert av==bv,(label,c,t,av,bv)
   checks+=1
patterns={'distinct':[(0,1,2),(2,0,1),(0,3,7)],'first_equal':[(0,0,1),(1,1,0),(0,0,3)],'last_equal':[(0,1,1),(1,0,0),(0,3,3)],'outer_equal':[(0,1,0),(1,0,1),(0,3,0)],'all_equal':[(0,0,0),(2,2,2)]}
for label,colors in patterns.items():
 for c in colors:
  for ex in [(0,0,0),(1,0,0),(0,1,1),(2,1,3),(3,2,1)]:
   A={c:lambda t,ex=ex:t[0]**ex[0]*t[1]**ex[1]*t[2]**ex[2]}
   correction=F(1) if c[0]==c[2] and c[1]==c[0]+1 else F(-1) if c[0]==c[2] and c[0]==c[1]+1 else F(0)
   equal(add(word(A,psi,[0,1,0]),neg(word(A,psi,[1,0,1]))),mult(A,lambda c,t:correction),label+' KLR braid')
   equal(word(A,T,[0,1,0]),word(A,T,[1,0,1]),label+' Hecke braid')
   for r in [0,1]:
    equal(psi(psi(A,r),r),mult(A,lambda c,t:K(c,t,r)),label+' KLR square')
    equal(T(T(A,r),r),add(mult(T(A,r),lambda c,t:q-1),mult(A,lambda c,t:q)),label+' Hecke square')
    equal(T(A,r),DL(A,r),label+' exact corrected Q chart')
    recovered=add(T(mult(A,lambda c,t:1/Q(c,t,r)),r),mult(A,lambda c,t:P(c,t,r)/Q(c,t,r)))
    equal(recovered,psi(A,r),label+' crossing inverse')
    equal(T(mult(T(A,r),lambda c,t:X(c,t,r)),r),mult(A,lambda c,t:q*X(c,t,r+1)),label+' TXT')
    equal(mult(A,lambda c,t:q**c[r]*(1-(1-q**(-c[r])*X(c,t,r)))),mult(A,lambda c,t:X(c,t,r)),label+' X dot inverse')
print('PASS:',checks,'exact Fraction scalar comparisons; all five patterns, both arrow orientations, nonadjacent colors, corrected charts, quadratic/braid/mixed and inverse generators')
