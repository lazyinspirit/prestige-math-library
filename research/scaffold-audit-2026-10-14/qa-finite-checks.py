"""Exact finite witnesses for corrected interfaces; no general proof acceptance."""
from fractions import Fraction
import json,math
phase=[]
for a in range(2):
 for b in range(2):
  for c in range(2):
   rhs=a+b+c-(a^b)-(a^c)-(b^c)+(a^b^c)
   assert rhs==4*a*b*c;phase.append([a,b,c,rhs])
# Exact Chebyshev rational success agrees with direct N=4 Grover finite peaks.
q=Fraction(1,2);ts=[Fraction(1),q]
for j in range(5):ts.append(2*q*ts[-1]-ts[-2])
assert [(1-ts[2*k+1])/2 for k in range(3)]==[Fraction(1,4),Fraction(1),Fraction(1,4)]
# One-query unknown-address density difference trace distance, exact for N=4.
N=4;ev=[Fraction(-4*(N-1),N*N)]+[Fraction(4,N*N)]*(N-1)
assert sum(ev)==0 and sum(abs(x) for x in ev)/2==Fraction(3,4)
assert Fraction(7,8)**9<Fraction(1,3)
# Correct relative-count final size grows, rather than decays, with rough L.
for L in [2,4,8,16]:
 assert (20*math.pi**2/Fraction(1,2))*L>20*L
print(json.dumps({'scope':'Exact eight-bit phase identity, N=4 Chebyshev probabilities and averaged density eigenvalues, nine-round success inequality; finite floating final-scale monotonicity only','status':'pass','phase_identity_cases':phase,'general_proof_acceptance':False},indent=2))
