"""Independent direct gamma multiplication against all trace identities and
massive scattering polynomial at integer shell data. Universal proof is QX04/06.
Intermediate complex Gaussian integers below 2**53 are exactly representable.
"""
from pathlib import Path
from fractions import Fraction
import json,itertools
p=Path(__file__).parent
zero=lambda:[[0j]*4 for _ in range(4)]
I=zero()
for i in range(4):I[i][i]=1
sig=[[[0,1],[1,0]],[[0,-1j],[1j,0]],[[1,0],[0,-1]]]
g=[];g0=zero()
for i in range(4):g0[i][i]=1 if i<2 else-1
g.append(g0)
for s in sig:
 a=zero()
 for i in range(2):
  for j in range(2):a[i][j+2]=s[i][j];a[i+2][j]=-s[i][j]
 g.append(a)
h=[1,-1,-1,-1]
def mm(a,b):
 out=[[sum(a[i][k]*b[k][j]for k in range(4))for j in range(4)]for i in range(4)]
 for row in out:
  for z in row:
   assert z.real.is_integer()and z.imag.is_integer()and abs(z.real)<2**53 and abs(z.imag)<2**53
 return out
def tr(a):return sum(a[i][i]for i in range(4))
def prod(*arr):
 a=I
 for b in arr:a=mm(a,b)
 return a
def plus(a,b):return[[a[i][j]+b[i][j]for j in range(4)]for i in range(4)]
def scale(c,a):return[[c*a[i][j]for j in range(4)]for i in range(4)]
def metric(a,b):return h[a]if a==b else 0
errors=[];gamma_checks=0
for a,b in itertools.product(range(4),repeat=2):
 gamma_checks+=1
 if plus(mm(g[a],g[b]),mm(g[b],g[a]))!=scale(2*metric(a,b),I):errors.append('Clifford')
for a,b,c,d in itertools.product(range(4),repeat=4):
 gamma_checks+=1;rhs=4*(metric(a,b)*metric(c,d)-metric(a,c)*metric(b,d)+metric(a,d)*metric(b,c))
 if tr(prod(g[a],g[b],g[c],g[d]))!=rhs:errors.append('trace4')
for a,b,c in itertools.product(range(4),repeat=3):
 gamma_checks+=1
 if tr(prod(g[a],g[b],g[c]))!=0:errors.append('trace3')
def slash(v):return[[sum(h[a]*v[a]*g[a][i][j]for a in range(4))for j in range(4)]for i in range(4)]
amp=[]
for m,mi,pin,kout in[(3,4,4,3),(0,3,5,4),(3,0,4,5),(0,0,5,5)]:
 for cos in[-1,0,1]:
  p1=[5,0,0,pin];p2=[5,0,0,-pin];k1=[5,kout if cos==0 else 0,0,cos*kout];k2=[5,-k1[1],0,-k1[3]]
  A=plus(slash(p2),scale(-m,I));B=plus(slash(p1),scale(m,I));C=plus(slash(k1),scale(mi,I));D=plus(slash(k2),scale(-mi,I))
  raw=sum(h[a]*h[b]*tr(prod(A,g[a],B,g[b]))*tr(prod(C,g[a],D,g[b]))for a in range(4)for b in range(4))
  assert raw.imag==0 and raw.real.is_integer()
  value=Fraction(int(raw.real),4*100**2);be=Fraction(pin**2,25);bm=Fraction(kout**2,25);target=3-be-bm+be*bm*cos**2
  if value!=target:errors.append('massive polynomial')
  amp.append({'m':m,'M':mi,'cos':cos,'direct_trace':str(value),'polynomial':str(target)})
result={'date':'2026-10-04','command':'python3 '+str(p/'check-traces.py'),'gamma_identities_checked':gamma_checks,'massive_shell_cases':len(amp),'scattering_comparisons':amp,'exact_small_gaussian_integer_and_fraction_arithmetic':True,'errors':errors,'scope':'Local finite-matrix consistency check; complete universal proofs are QX04/QX06,not independent acceptance.'}
(p/'trace-check.json').write_text(json.dumps(result,indent=2)+'\n');print(json.dumps({'gamma_checks':gamma_checks,'scattering_cases':len(amp),'errors':errors}));raise SystemExit(bool(errors))
