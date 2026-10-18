"""Exact rational weak-bialgebra check on M2(Q) tensor M2(Q)^op."""
from fractions import Fraction as F
from itertools import product
B=list(product(range(2),repeat=4))
def one(a):return {a:F(1)}
def add(*xs):
 z={}
 for x in xs:
  for k,v in x.items():z[k]=z.get(k,F(0))+v
 return {k:v for k,v in z.items() if v}
def scale(x,c):return {k:v*c for k,v in x.items() if v*c}
def pb(x,y):
 a,b,c,d=x;e,f,g,h=y
 return (a,f,g,d) if b==e and h==c else None
def mul(x,y):
 z={}
 for a,v in x.items():
  for b,w in y.items():
   k=pb(a,b)
   if k is not None:z[k]=z.get(k,F(0))+v*w
 return {k:v for k,v in z.items() if v}
def eps(x):return sum(v*2 for (a,b,c,d),v in x.items() if b==c and a==d)
def delta(x):
 z={}
 for (a,b,c,d),v in x.items():
  for i,j in product(range(2),repeat=2):z[((a,b,i,j),(j,i,c,d))]=v/2
 return z
I=add(*(one((i,i,j,j)) for i,j in product(range(2),repeat=2)));E=delta(I)
def tmul(x,y):
 z={}
 for a,v in x.items():
  for b,w in y.items():
   k=tuple(pb(c,d) for c,d in zip(a,b))
   if None not in k:z[k]=z.get(k,F(0))+v*w
 return {k:v for k,v in z.items() if v}
def et(x):return add(*(scale(one(b),v*eps(mul(one(a),x))) for (a,b),v in E.items()))
def sp(x):return add(*(scale(one(a),v*eps(mul(one(b),x))) for (a,b),v in E.items()))
def dleg(x,leg):
 z={}
 for k,v in x.items():
  for (a,b),w in delta(one(k[leg])).items():
   kk=k[:leg]+(a,b)+k[leg+1:];z[kk]=z.get(kk,F(0))+v*w
 return {k:v for k,v in z.items() if v}
# Coassociativity and both coalgebra counits.
for a in B:
 d=delta(one(a));assert dleg(d,0)==dleg(d,1)
 assert add(*(scale(one(y),v*eps(one(x))) for (x,y),v in d.items()))==one(a)
 assert add(*(scale(one(x),v*eps(one(y))) for (x,y),v in d.items()))==one(a)
for a,b in product(B,repeat=2):assert delta(mul(one(a),one(b)))==tmul(delta(one(a)),delta(one(b)))
# Both weak unit identities.
E1={(a,b,c):v*w for (a,b),v in E.items() for c,w in I.items()};E2={(a,b,c):v*w for a,v in I.items() for (b,c),w in E.items()}
assert tmul(E1,E2)==dleg(E,0)==dleg(E,1)==tmul(E2,E1)
# Both weak counit identities, trilinear so basis triples suffice.
for a,b,c in product(B,repeat=3):
 target=eps(mul(mul(one(a),one(b)),one(c)))
 assert target==sum(v*eps(mul(one(a),one(x)))*eps(mul(one(y),one(c))) for (x,y),v in delta(one(b)).items())
 assert target==sum(v*eps(mul(one(a),one(y)))*eps(mul(one(x),one(c))) for (x,y),v in delta(one(b)).items())
# All basis h and target-base x, with no commutativity assumption.
for a in B:
 for i,j in product(range(2),repeat=2):
  h=one(a);x=add(*(one((i,j,k,k)) for k in range(2)))
  left=add(*(scale(mul(et(mul(one(h1),x)),one(h2)),v) for (h1,h2),v in delta(h).items()))
  right=add(*(scale(mul(sp(et(mul(one(h2),x))),one(h1)),v) for (h1,h2),v in delta(h).items()))
  assert left==mul(h,x);assert right==mul(h,sp(x))
h=one((0,0,0,1));wrong=add(*(scale(mul(one(h1),sp(et(one(h2)))),v) for (h1,h2),v in delta(h).items()))
assert wrong=={} and h!={}
print('PASS: all weak-bialgebra axioms; both repaired unit identities on a noncommutative base; old right-factor order fails (0 != E11 tensor E12).')
