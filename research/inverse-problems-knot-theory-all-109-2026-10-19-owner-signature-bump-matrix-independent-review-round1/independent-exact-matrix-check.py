from fractions import Fraction as Q
from math import isqrt
import json
from pathlib import Path
B=Path(__file__).parent

def transpose(a):return list(map(list,zip(*a)))
def det(a):
 a=[[Q(x) for x in row] for row in a];d=Q(1)
 for k in range(len(a)):
  p=next((i for i in range(k,len(a)) if a[i][k]),None)
  if p is None:return Q(0)
  if p!=k:a[p],a[k]=a[k],a[p];d=-d
  v=a[k][k];d*=v
  for i in range(k+1,len(a)):
   r=a[i][k]/v
   for j in range(k+1,len(a)):a[i][j]-=r*a[k][j]
 return d

def inertia(a):
 a=[[Q(x) for x in row] for row in a];p=m=z=0
 while a:
  n=len(a);pivot=next((i for i in range(n) if a[i][i]),None)
  if pivot is None:
   ij=next(((i,j) for i in range(n) for j in range(i+1,n) if a[i][j]),None)
   if ij is None:z+=n;break
   i,j=ij
   # Replace basis vector i by ei+ej; this elementary congruence is invertible.
   old=[row[:] for row in a]
   for k in range(n):a[i][k]=old[i][k]+old[j][k];a[k][i]=old[k][i]+old[k][j]
   a[i][i]=old[i][i]+2*old[i][j]+old[j][j];pivot=i
  if pivot:
   a[0],a[pivot]=a[pivot],a[0]
   for row in a:row[0],row[pivot]=row[pivot],row[0]
  v=a[0][0];p+=v>0;m+=v<0
  a=[[a[i][j]-a[i][0]*a[0][j]/v for j in range(1,n)] for i in range(1,n)]
 return (p,m,z)

def vmat(a,b):
 w=a-b
 return [[0,1,1,0],[1,0,0,1],[0,0,1,w],[0,0,w,w*w+b]]

def hermitian_real_congruence(a,b,h):
 # For h>0, conjugate diag(I,bar(c)I) changes the actual complex H to
 # [[hA,hI],[hI,h^2B]], since |c|^2=h. This is an exact congruence.
 w=a-b
 return [[0,h,h,0],[h,0,0,h],[h,0,h*h,h*h*w],[0,h,h*h*w,h*h*(w*w+b)]]

def sig(a):p,m,z=inertia(a);return p-m

def join(a,b):
 n=len(a);m=len(b)
 return [list(row)+[Q(0)]*m for row in a]+[[Q(0)]*n+list(row) for row in b]

parameters=[(a,b) for b in [1,2,3,4,7,20] for a in [-30,-2,0,1,2,4,19,21,100]]
hvalues=sorted(set([Q(0),Q(1,1000000),Q(1,3),Q(1,2),Q(1),Q(2),Q(3),Q(3999999,1000000),Q(4)]))
tests=0;roots=0;outside=0
for a,b in parameters:
 v=vmat(a,b);t=transpose(v);skew=[[v[i][j]-t[i][j] for j in range(4)] for i in range(4)]
 assert det(skew)==1
 for h in hvalues:
  actual=0 if not h else sig(hermitian_real_congruence(a,b,h))
  q=1-2*(a-b)*h-b*h*h
  predicted=0 if not h or q>0 else (1 if q==0 else 2)
  assert actual==predicted,(a,b,h,actual,predicted)
  tests+=1;roots+=bool(h and q==0)
 outside+=1-8*(a-b)-16*b>0 # root beyond h=4

density=[];bump_tests=0
for target in [Q(1,1000000),Q(1,1000),Q(1,2),Q(1),Q(2),Q(3),Q(3999,1000),Q(3999999,1000000)]:
 tolerance=min(target,4-target)/16
 def threshold_near(t,eps):
  big=max(16/(eps*eps),4/eps)
  b=big.numerator//big.denominator+2
  r=1-t/2;a=(b*r).numerator//(b*r).denominator
  # Positive root is >=t and <t+eps, checked without taking a square root.
  assert 1-2*(a-b)*t-b*t*t>=0
  assert 1-2*(a-b)*(t+eps)-b*(t+eps)**2<0
  return a,b
 lo=threshold_near(target-4*tolerance,tolerance)
 hi=threshold_near(target+4*tolerance,tolerance)
 vlo=vmat(*lo);vhi=[[-x for x in row] for row in vmat(*hi)];v8=join(vlo,vhi);vt=transpose(v8)
 assert det([[v8[i][j]-vt[i][j] for j in range(8)] for i in range(8)])==1
 for h,want in [(max(Q(0),target-6*tolerance),0),(target,2),(min(Q(4),target+6*tolerance),0),(Q(4),0)]:
  l=hermitian_real_congruence(*lo,h);u=[[-x for x in row] for row in hermitian_real_congruence(*hi,h)]
  assert sig(join(l,u))==want,(target,h,want)
  bump_tests+=1
 density.append({'target_h':str(target),'tolerance':str(tolerance),'lower_pair':list(lo),'upper_pair':list(hi)})
result={'scope':'Independent exact rational finite-matrix validation; supports but does not replace the full symbolic proof review. No original author generator imported.','base_parameter_pairs':len(parameters),'base_inertia_tests':tests,'exact_root_tests':roots,'threshold_beyond_4_cases':outside,'constructed_8x8_bump_tests':bump_tests,'density_extreme_target_checks':density,'result':'all exact assertions pass'}
(B/'independent-exact-matrix-check.json').write_text(json.dumps(result,indent=2)+'\n')
print(json.dumps({k:v for k,v in result.items() if k!='density_extreme_target_checks'},indent=2))
