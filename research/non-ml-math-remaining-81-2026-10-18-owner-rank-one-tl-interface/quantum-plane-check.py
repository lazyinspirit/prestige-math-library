from fractions import Fraction as Q
from functools import reduce
q=Q(2)
qi=lambda n:(q**n-q**(-n))/(q-q**-1)
fac=lambda r:reduce(lambda x,y:x*qi(y),range(1,r+1),Q(1))
def zero(m,n):return [[Q(0) for _ in range(n)] for _ in range(m)]
def eye(n):return [[Q(i==j) for j in range(n)] for i in range(n)]
def mul(a,b):return [[sum(a[i][k]*b[k][j] for k in range(len(b))) for j in range(len(b[0]))] for i in range(len(a))]
def add(a,b):return [[a[i][j]+b[i][j] for j in range(len(a[0]))] for i in range(len(a))]
def scale(c,a):return [[c*x for x in row] for row in a]
def kron(a,b):return [[a[i//len(b)][j//len(b[0])]*b[i%len(b)][j%len(b[0])] for j in range(len(a[0])*len(b[0]))] for i in range(len(a)*len(b))]
def power(a,r):
 b=eye(len(a))
 for _ in range(r):b=mul(b,a)
 return b

def plane(n):
 E=zero(n+1,n+1);F=zero(n+1,n+1);K=zero(n+1,n+1);Ki=zero(n+1,n+1)
 for j in range(n+1):
  K[j][j]=q**(n-2*j);Ki[j][j]=q**(-n+2*j)
  if j:E[j-1][j]=qi(j)
  if j<n:F[j+1][j]=qi(n-j)
 return E,F,K,Ki

def tensor(a,b):
 E,F,K,Ki=plane(a);e,f,k,ki=plane(b)
 return add(kron(E,k),kron(eye(a+1),e)),add(kron(F,eye(b+1)),kron(Ki,f))
for a in range(1,5):
 for b in range(1,5):
  inj=zero((a+1)*(b+1),a*b);mu=zero(a+b+1,(a+1)*(b+1))
  for i in range(a):
   for j in range(b):
    inj[i*(b+1)+j+1][i*b+j]=q**(i+b-1-j)
    inj[(i+1)*(b+1)+j][i*b+j]=-q**-1
  for i in range(a+1):
   for j in range(b+1):mu[i+j][i*(b+1)+j]=q**(i*(b-j))
  assert mul(mu,inj)==zero(a+b+1,a*b)
  for mid,left,right in zip(tensor(a,b),tensor(a-1,b-1),plane(a+b)[:2]):
   for r in range(1,a+b+1):
    M=scale(1/fac(r),power(mid,r));L=scale(1/fac(r),power(left,r));R=scale(1/fac(r),power(right,r))
    assert mul(M,inj)==mul(inj,L)
    assert mul(mu,M)==mul(R,mu)
print('PASS: exact generic q=2 quantum-plane insertion/multiplication and every divided E/F power through a+b, 1<=a,b<=4. General integral exactness and root specialization are proved by the manuscript unit path elimination, not by sampling.')
