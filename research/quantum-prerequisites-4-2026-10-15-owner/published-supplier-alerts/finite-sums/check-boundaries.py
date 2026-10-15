from fractions import Fraction
from math import prod
# Independent endpoint enumeration compared with the additive-witness indexing;
# this is finite convention sanity evidence, not a replacement for induction.
checked=0
for endpoint in range(17):
 for lower in range(endpoint+1):
  witnesses=[d for d in range(18) if lower+d==endpoint]
  assert len(witnesses)==1
  shifted=[lower+j for j in range(witnesses[0])]
  direct=list(range(lower,endpoint))
  assert shifted==direct
  a=lambda k: Fraction((-1)**k*(k%5),k+1)
  assert sum(map(a,range(endpoint)),Fraction())==sum(map(a,range(lower)),Fraction())+sum(map(a,shifted),Fraction())
  assert prod(map(a,range(endpoint)))==prod(map(a,range(lower)))*prod(map(a,shifted))
  if lower==endpoint:
   assert shifted==[] and sum(map(a,shifted),Fraction())==0 and prod(map(a,shifted))==1
  checked+=1
for N in range(1,33):
 witnesses=[d for d in range(34) if 1+d==N+1]
 assert witnesses==[N]
 assert sum((Fraction(1,1+j) for j in range(N)),Fraction())==sum((Fraction(1,n) for n in range(1,N+1)),Fraction())
for q in [1,2,4,8,16]:
 assert q+q==2*q
 assert (q+1)+q==2*q+1
 harmonic=lambda N:sum((Fraction(1,n) for n in range(1,N+1)),Fraction())
 block=sum((Fraction(1,n) for n in range(q+1,2*q+1)),Fraction())
 assert harmonic(2*q)==harmonic(q)+block
 assert block>=Fraction(1,2)
print(f'{checked} half-open boundary/split cases, including empty and zero endpoint; 32 harmonic-prefix identifications; 5 exact doubling blocks passed')
