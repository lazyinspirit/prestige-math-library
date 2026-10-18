from fractions import Fraction as F
from pathlib import Path
# Q[z,r]/(z^2+z+1,r^2-3), exact rational coordinates 1,z,r,zr.
Z=(F(0),F(0),F(0),F(0)); ONE=(F(1),F(0),F(0),F(0))
def add(a,b): return tuple(x+y for x,y in zip(a,b))
def neg(a): return tuple(-x for x in a)
def mul(a,b):
    out=[F(0)]*4
    for i,x in enumerate(a):
        for j,y in enumerate(b):
            z=(i%2)+(j%2); r=(i//2)+(j//2); coef=x*y*(3 if r==2 else 1); r%=2
            if z==2:
                out[2*r]-=coef; out[2*r+1]-=coef
            else: out[2*r+z]+=coef
    return tuple(out)
def power(a,n):
    b=ONE
    for _ in range(n): b=mul(b,a)
    return b
def mm(a,b): return [[sumf(mul(a[i][k],b[k][j]) for k in range(3)) for j in range(3)] for i in range(3)]
def sumf(xs):
    ans=Z
    for x in xs: ans=add(ans,x)
    return ans
z=(F(0),F(1),F(0),F(0)); invr=(F(0),F(0),F(1,3),F(0))
S=[[mul(invr,power(z,2*i*j%3)) for j in range(3)] for i in range(3)]
T=[[power(z,i*i%3) if i==j else Z for j in range(3)] for i in range(3)]
C=[[ONE if (i+j)%3==0 else Z for j in range(3)] for i in range(3)]
I=[[ONE if i==j else Z for j in range(3)] for i in range(3)]
kappa=mul(add(ONE,add(z,z)),invr)
scale=lambda a:[[mul(kappa,x) for x in row] for row in a]
ST=mm(S,T); invST=mm(mm(C,S),T)
assert mm(S,S)==C
assert mm(mm(ST,ST),ST)==scale(I)
assert mm(mm(invST,invST),invST)==scale(C)
assert scale(C)!=scale(I)
print('Exact field Q[z,r]/(z²+z+1,r²−3); z=exp(2πi/3), r=+sqrt(3).')
print('q(a)=z^(a²), b(a,b)=z^(2ab); D=r; kappa=(1+2z)/r.')
print('PASS S²=C, (ST)³=kappa I, (S^(-1)T)³=kappa C, and C != I.')
print('All arithmetic used Fraction coefficients; no numerical tolerance.')
