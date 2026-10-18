from fractions import Fraction as F
Z=(F(0),)*4
O=(F(1),F(0),F(0),F(0))
u=(F(0),F(0),F(1),F(0));v=(F(0),F(1),F(0),F(0))
def add(a,b):return tuple(x+y for x,y in zip(a,b))
def neg(a):return tuple(-x for x in a)
def mul(a,b):
 c=[F(0)]*7
 for i,x in enumerate(a):
  for j,y in enumerate(b):c[i+j]+=x*y
 for k in range(6,3,-1):c[k-4]+=c[k];c[k-2]-=c[k]
 return tuple(c[:4])
def trans(A):return [list(x) for x in zip(*A)]
def mm(A,B):return [[sumf(mul(x,y) for x,y in zip(r,c)) for c in zip(*B)] for r in A]
def sumf(xs):
 r=Z
 for x in xs:r=add(r,x)
 return r
def scale(x,A):return [[mul(x,y) for y in r] for r in A]
def diag(a,b,c):return [[a,Z,Z],[Z,b,Z],[Z,Z,c]]
I=diag(O,O,O);phi=add(O,u)
A=[[u,Z,v],[Z,O,Z],[v,Z,neg(u)]];B=[[O,Z,Z],[Z,u,v],[Z,v,neg(u)]]
Q1=[[mul(u,u),Z,mul(u,v)],[Z,Z,Z],[mul(u,v),Z,mul(v,v)]]
Q2=[[Z,Z,Z],[Z,mul(u,u),mul(u,v)],[Z,mul(u,v),mul(v,v)]]
assert mm(trans(A),A)==I and mm(trans(B),B)==I
assert mm(mm(trans(A),diag(O,Z,Z)),A)==Q1
assert mm(mm(trans(B),diag(Z,O,Z)),B)==Q2
for Q in [Q1,Q2]:assert trans(Q)==Q and mm(Q,Q)==Q and sumf(Q[i][i] for i in range(3))==O
for Q,R in [(Q1,Q2),(Q2,Q1)]:
 assert mm(mm(Q,R),Q)==scale(mul(u,u),Q)
 assert mm(mm(scale(phi,Q),scale(phi,R)),scale(phi,Q))==scale(phi,Q)
print('PASS: exact Q[v]/(v^4+v^2-1) check of both typed three-site Fibonacci 3x3 projectors, orthogonality/idempotence, trace1/rank1, and both TL adjacent relations. This finite check corroborates the explicit proof, not category coherence.')
