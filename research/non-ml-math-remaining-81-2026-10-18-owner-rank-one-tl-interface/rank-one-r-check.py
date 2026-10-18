from fractions import Fraction as Q
q=Q(2)
qi=lambda r:(q**r-q**(-r))/(q-q**-1)
fac=lambda r: __import__('functools').reduce(lambda a,b:a*qi(b),range(1,r+1),Q(1))
n=3
zero=lambda n:[[Q(0) for j in range(n)] for i in range(n)]
def mul(a,b):return [[sum(a[i][k]*b[k][j] for k in range(len(b))) for j in range(len(b[0]))] for i in range(len(a))]
def add(a,b):return [[a[i][j]+b[i][j] for j in range(len(a))] for i in range(len(a))]
def scale(c,a):return [[c*x for x in row] for row in a]
def eye(n):return [[Q(i==j) for j in range(n)] for i in range(n)]
def power(a,r):
 b=eye(len(a))
 for _ in range(r):b=mul(b,a)
 return b

def kron(a,b):return [[a[i//len(b)][j//len(b)]*b[i%len(b)][j%len(b)] for j in range(len(a)*len(b))] for i in range(len(a)*len(b))]
E=zero(n);F=zero(n);K=zero(n);Ki=zero(n)
for j in range(n):
 K[j][j]=q**(2-2*j);Ki[j][j]=q**(-2+2*j)
 if j:E[j-1][j]=qi(3-j)
 if j<2:F[j+1][j]=qi(j+1)
I=eye(n);D=zero(9)
for i in range(n):
 for j in range(n):D[3*i+j][3*i+j]=q**((2-2*i)*(2-2*j)//2)
DE=add(kron(E,K),kron(I,E));opE=add(kron(K,E),kron(E,I));DF=add(kron(F,I),kron(Ki,F));opF=add(kron(I,F),kron(F,Ki))
def R(wrong):
 s=zero(9)
 for r in range(3):
  c=q**(r*(r+1)//2)*(1-q**-2)**r*(1/fac(r) if wrong else fac(r))
  s=add(s,scale(c,kron(scale(1/fac(r),power(E,r)),scale(1/fac(r),power(F,r)))))
 return mul(D,s)
right=R(False);wrong=R(True)
assert mul(right,DE)==mul(opE,right) and mul(right,DF)==mul(opF,right)
assert mul(wrong,DE)!=mul(opE,wrong)
print('PASS at exact generic q=2 on Delta(2) tensor Delta(2): corrected divided-power coefficient intertwines E,F; old inverse-factorial coefficient fails E. This is a convention diagnostic, not a proof of universal R or root specialization.')
