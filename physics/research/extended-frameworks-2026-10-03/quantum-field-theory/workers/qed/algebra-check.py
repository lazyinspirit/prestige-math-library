"""Reproducible exact algebra diagnostics; no continuum or truncation-limit test."""
from fractions import Fraction as F
from pathlib import Path
import json,hashlib
Z=(F(0),F(0));O=(F(1),F(0));I=(F(0),F(1))
def q(x):
 if isinstance(x,tuple):return x
 if isinstance(x,complex):return F(int(x.real)),F(int(x.imag))
 return F(x),F(0)
def add(x,y):x=q(x);y=q(y);return x[0]+y[0],x[1]+y[1]
def neg(x):x=q(x);return -x[0],-x[1]
def mul(x,y):x=q(x);y=q(y);return x[0]*y[0]-x[1]*y[1],x[0]*y[1]+x[1]*y[0]
# explicit sum helper (kept separate from matrix loops)
def total(xs):
 r=Z
 for x in xs:r=add(r,x)
 return r
def matrix(n):return [[Z for _ in range(n)] for _ in range(n)]
def eye(n):return [[O if i==j else Z for j in range(n)] for i in range(n)]
def mm(A,B):return [[total(mul(A[i][k],B[k][j]) for k in range(len(B))) for j in range(len(B[0]))] for i in range(len(A))]
def plus(A,B):return [[add(x,y) for x,y in zip(a,b)] for a,b in zip(A,B)]
def scale(c,A):return [[mul(c,x) for x in row] for row in A]
def comm(A,B):return plus(mm(A,B),scale(-1,mm(B,A)))
# Complete Clifford basis identities (entries in exact Gaussian rationals).
sigma=[[[0,1],[1,0]],[[0,-1j],[1j,0]],[[1,0],[0,-1]]]
beta=matrix(4)
for i in range(4):beta[i][i]=q(1 if i<2 else -1)
alpha=[]
for S in sigma:
 A=matrix(4)
 for i in range(2):
  for j in range(2):A[i][j+2]=A[i+2][j]=q(S[i][j])
 alpha.append(A)
gamma=[beta]+[mm(beta,A) for A in alpha]
for a in range(4):
 for b in range(4):
  assert plus(mm(gamma[a],gamma[b]),mm(gamma[b],gamma[a]))==scale(2*(1 if a==0 else -1) if a==b else 0,eye(4))
# Exact off-shell matrix Ward relation at a nondegenerate rational point.
def slash(p):return total_matrix([scale(p[0],gamma[0])]+[scale(-p[i],gamma[i]) for i in range(1,4)])
def total_matrix(xs):
 A=matrix(len(xs[0]))
 for B in xs:A=plus(A,B)
 return A
mu=F(2);p=[5,1,2,0];k=[1,0,1,1];pk=[x+y for x,y in zip(p,k)]
def inverse(p):
 den=F(p[0]**2-sum(x*x for x in p[1:]))-mu*mu
 return scale(1/den,plus(slash(p),scale(mu,eye(4))))
S=inverse(p);Sp=inverse(pk)
assert mm(mm(Sp,slash(k)),S)==plus(S,scale(-1,Sp))
# Rational transverse projector representative.
v=[F(1),F(2),F(2)];norm2=sum(x*x for x in v)
P=[[q((1 if i==j else 0)-v[i]*v[j]/norm2) for j in range(3)] for i in range(3)]
assert mm(P,P)==P and total(P[i][i] for i in range(3))==q(2)
# Finite Fourier COMPRESSION diagnostic of infinite rotor charge algebra.
# U here is compressed, hence not unitary; this is NOT a replacement model.
basis=[(n,bits) for n in range(-2,3) for bits in range(4)];index={b:i for i,b in enumerate(basis)};N=len(basis)
E=matrix(N);U=matrix(N);cs=[matrix(N),matrix(N)]
for col,(n,bits) in enumerate(basis):
 E[col][col]=q(n)
 if (n+1,bits) in index:U[index[n+1,bits]][col]=O
 for site in range(2):
  if bits&(1<<site):cs[site][index[n,bits^(1<<site)]][col]=q((-1)**((bits&((1<<site)-1)).bit_count()))
def adj(A):return [[(A[j][i][0],-A[j][i][1]) for j in range(len(A))] for i in range(len(A))]
assert comm(E,U)==U
ns=[mm(adj(c),c) for c in cs]
G0=plus(plus(E,scale(-1,ns[0])),eye(N));G1=plus(scale(-1,E),scale(-1,ns[1]))
hop=mm(mm(adj(cs[0]),U),cs[1]);H=plus(mm(E,E),plus(hop,adj(hop)))
assert comm(G0,H)==matrix(N) and comm(G1,H)==matrix(N)
physical=[i for i in range(N) if G0[i][i]==Z and G1[i][i]==Z];assert len(physical)==2
assert comm(G0,cs[0])==cs[0] and comm(G1,cs[1])==cs[1]
receipt={'status':'exact diagnostic identities pass','arithmetic':'pairs of fractions.Fraction; no floating-point arithmetic in matrix checks','checks':['all16 Clifford anticommutators','one nondegenerate rational off-shell Ward matrix example','one exact transverse projector example','rotor Fourier-compression charge/hopping commutators and nonempty Gauss sector'],'scope':'diagnostic examples supplement complete general proofs; compressed U is not unitary and not substituted for full compact rotor model','compressed_dimension':N,'physical_compression_dimension':len(physical),'script_sha256':hashlib.sha256(Path(__file__).read_bytes()).hexdigest()}
Path(__file__).with_name('algebra-check.json').write_text(json.dumps(receipt,indent=2)+'\n');print(json.dumps(receipt))
