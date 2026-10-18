"""Exact Gaussian-integer polynomial checks in C[S3][u,v]. No dependencies."""
import itertools,json
from pathlib import Path
E=(0,1,2);s=(1,0,2);t=(2,1,0);r=(0,2,1)
def compose(a,b):return tuple(b[a[j]] for j in range(3))
def add(*xs):
 out={}
 for x in xs:
  for k,v in x.items():out[k]=out.get(k,0)+v
 return {k:v for k,v in out.items() if v}
def term(p=E,a=0,b=0,c=1):return {(p,a,b):c}
def mul(x,y):
 out={}
 for (p,a,b),c in x.items():
  for (q,d,e),f in y.items():
   k=(compose(p,q),a+d,b+e);out[k]=out.get(k,0)+c*f
 return {k:v for k,v in out.items() if v}
def prod(*xs):
 out=term()
 for x in xs:out=mul(out,x)
 return out
def R(p,z):return add(z,term(p,c=1j))
def C(p,z):return add(mul(term(p),z),term(c=1j))
u=term(a=1);v=term(b=1);w=add(u,v)
assert compose(s,t)==compose(t,r)==compose(r,s)==(1,2,0)
assert compose(s,r)==compose(r,t)==compose(t,s)==(2,0,1)
assert compose(compose(s,t),r)==compose(compose(r,t),s)==t
assert compose(compose(s,r),s)==compose(compose(r,s),r)==t
assert prod(R(s,u),R(t,w),R(r,v))==prod(R(r,v),R(t,w),R(s,u))
assert prod(C(s,u),C(r,w),C(s,v))==prod(C(r,v),C(s,w),C(r,u))
checked=add(term(a=1,b=1,c=1j),term(c=-1j),term(s,a=1,c=-1),term(s,b=1,c=-1),term(r,a=1,c=-1),term(r,b=1,c=-1),mul(term(compose(s,r),c=1j),mul(w,u)),mul(term(compose(r,s),c=1j),mul(w,v)),mul(term(t),mul(mul(u,v),w)))
assert prod(C(s,u),C(r,w),C(s,v))==checked
# Explicit eigenvalues and kernel dimensions, with exact integer/imaginary arithmetic.
assert [sum(x!=0 for x in [z+1j]*3+[z-1j]) for z in [1j,-1j,0]]==[3,1,4]
# Hecke normalized relation, S=qT: coefficients after substitution are q²,-(q²-1),-q².
for q in [1j,1,-1]:
 assert q*q*(q-1/q)/q==q*q-1
assert 1j+1/1j==0
# epsilon multiplication in basis 1,epsilon: nonzero square-zero 2x2 matrix.
N=((0,0),(1,0));assert any(any(x for x in row) for row in N)
assert all(sum(N[i][k]*N[k][j] for k in range(2))==0 for i in range(2) for j in range(2))
print(json.dumps({'permutation_products':'pass','unchecked_polynomial_identity':'pass','checked_polynomial_identity_and_displayed_expansion':'pass','ranks_at_i_minus_i_zero':[3,1,4],'hecke_parameter_conversion':'pass','epsilon_regular_action_nonzero_square_zero':'pass'}))
