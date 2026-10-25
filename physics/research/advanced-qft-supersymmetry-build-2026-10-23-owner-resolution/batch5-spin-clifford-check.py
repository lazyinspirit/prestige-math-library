"""Exact finite Clifford/real-structure identities; not a replacement for analytic proofs."""
def eye(n):return [[int(i==j) for j in range(n)]for i in range(n)]
def scale(a,c):return [[c*x for x in row]for row in a]
def add(*a):return [[sum(x[i][j]for x in a)for j in range(len(a[0][0]))]for i in range(len(a[0]))]
def mul(a,b):return [[sum(a[i][k]*b[k][j]for k in range(len(b)))for j in range(len(b[0]))]for i in range(len(a))]
def conj(a):return [[x.conjugate()if hasattr(x,'conjugate')else x for x in row]for row in a]
def kron(a,b):return [[a[i//len(b)][j//len(b[0])]*b[i%len(b)][j%len(b[0])]for j in range(len(a[0])*len(b[0]))]for i in range(len(a)*len(b))]
def block(a,b,c,d):return [a[i]+b[i]for i in range(len(a))]+[c[i]+d[i]for i in range(len(c))]
def lower(a):return [row[2:]for row in a[2:]]
def plus(a):return [row[2:]for row in a[:2]]
I2=eye(2);Z2=scale(I2,0);I4=eye(4)
sigma=[[[0,1],[1,0]],[[0,-1j],[1j,0]],[[1,0],[0,-1]]]
Q=[scale(s,-1j)for s in sigma]
c=[block(Z2,q,q,Z2)for q in Q]+[block(Z2,I2,scale(I2,-1),Z2)]
Gamma=scale(mul(mul(mul(c[0],c[1]),c[2]),c[3]),-1)
assert Gamma==block(scale(I2,-1),Z2,Z2,I2)
for i in range(4):
 for j in range(4):assert add(mul(c[i],c[j]),mul(c[j],c[i]))==scale(I4,-2*int(i==j))
omega=[{(0,3):1,(1,2):1},{(1,3):1,(0,2):-1},{(2,3):1,(0,1):1}]
for a,o in enumerate(omega):
 co=add(*[scale(mul(c[i],c[j]),v)for(i,j),v in o.items()]);assert lower(co)==scale(Q[a],2)
 for i in range(4):
  con=[0]*4
  for(j,k),v in o.items():
   if j==i:con[k]+=v
   if k==i:con[j]-=v
  rhs=add(*[scale(c[k],-2*v)for k,v in enumerate(con)])
  assert plus(mul(c[i],co))==plus(rhs)
eps=scale(sigma[1],1j);J0=block(eps,Z2,Z2,eps);J5=mul(Gamma,J0);c5=scale(Gamma,1j)
assert mul(J0,conj(J0))==scale(I4,-1)
for ci in c:assert mul(J0,conj(ci))==mul(ci,J0)
assert mul(J5,conj(J5))==scale(I4,-1)
for ci in c+[c5]:assert mul(J5,conj(ci))==scale(mul(ci,J5),-1)
J=kron(J5,eps);assert mul(J,conj(J))==eye(8)
print('PASS: Clifford/chirality, all 12 self-dual contraction identities, Spin5 pseudoreality and tensor real involution.')
