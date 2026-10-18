"""Exact finite corroboration; the general module Jacobi proof is in the carrier."""
from fractions import Fraction as Q
from math import comb,factorial
from itertools import product

def trim(t):
 t=list(t)
 while t and t[-1]==0:t.pop()
 return tuple(t)
def add(*vs):
 d={}
 for v in vs:
  for x,c in v.items():d[x]=d.get(x,Q(0))+c
 return {x:c for x,c in d.items() if c}
def scale(v,c):return {x:a*c for x,a in v.items() if a*c}
def degree(t):return sum((i+1)*x for i,x in enumerate(t))
def cur(n,v,lam):
 out={}
 for (t,e),c in v.items():
  if n==0:
   out=add(out,{(t,e):c*lam})
   if e==1:out=add(out,{(t,0):c})
  else:
   j=abs(n);tt=list(t)+[0]*max(0,j-len(t))
   if n<0:tt[j-1]+=1;out=add(out,{(trim(tt),e):c})
   elif tt[j-1]:a=tt[j-1];tt[j-1]-=1;out=add(out,{(trim(tt),e):c*j*a})
 return out
def L(n,v,lam):
 out={}
 for x,c in v.items():
  q=degree(x[0]);w={x:c}
  for k in range(min(n,0)-q-1,max(n,0)+q+2):
   a,b=k,n-k
   if a>=0 and b<0:a,b=b,a
   out=add(out,scale(cur(a,cur(b,w,lam),lam),Q(1,2)))
 return out
basis=[(),(1,),(2,),(0,1)]
for lam in [Q(0),Q(1),Q(2)]:
 for t,e in product(basis,range(2)):
  v={(t,e):Q(1)};q=degree(t)
  expected=scale(v,q+lam*lam/2)
  if e==1:expected=add(expected,{(t,0):lam})
  assert L(0,v,lam)==expected
  for m,n in product(range(-2,3),repeat=2):
   lhs=add(L(m,L(n,v,lam),lam),scale(L(n,L(m,v,lam),lam),-1))
   rhs=scale(L(m+n,v,lam),m-n)
   if m+n==0:rhs=add(rhs,scale(v,Q(m**3-m,12)))
   assert lhs==rhs,(lam,t,e,m,n)
for r,s,j in product(range(1,5),range(1,5),range(7)):
 n=j+s
 oscillator=n*(-1)**(r-1)*comb(n+r-1,r-1)*comb(n-1,s-1)
 rational=(-1)**(r-1)*Q(factorial(r+s-1),factorial(r-1)*factorial(s-1))*comb(r+s+j-1,j)
 assert oscillator==rational
print('PASS: exact L0 Jordan formula, sampled Virasoro c=1 on all basis vectors of degrees0–2 for lambda0,1,2; divided-derivative contraction coefficients r,s1–4,j0–6. General Jacobi is proved in the manuscript, not by this finite check.')
