# Exact rational specialization check; the symbolic proof is in the proposal.
from fractions import Fraction as F
q=F(2)
def mat(n):return [[F(0) for _ in range(n)] for _ in range(n)]
def diag(v):
 a=mat(len(v))
 for i,x in enumerate(v):a[i][i]=F(x)
 return a
def mul(a,b):return [[sum(a[i][k]*b[k][j] for k in range(len(b))) for j in range(len(b[0]))] for i in range(len(a))]
def add(a,b):return [[x+y for x,y in zip(r,t)] for r,t in zip(a,b)]
def sc(c,a):return [[c*x for x in r] for r in a]
def sub(a,b):return add(a,sc(-1,b))
def powm(a,n):
 z=diag([1]*len(a))
 for _ in range(n):z=mul(z,a)
 return z
def kron(a,b):return [[a[i//len(b)][j//len(b[0])]*b[i%len(b)][j%len(b[0])] for j in range(len(a[0])*len(b[0]))] for i in range(len(a)*len(b))]
def zero(a):return all(x==0 for r in a for x in r)
E1=mat(4);E1[2][1]=F(1)
E2=mat(4);E2[1][0]=E2[3][2]=F(1)
E=[E1,E2];G=[list(map(list,zip(*e))) for e in E]
w=[[0,-1,1,0],[-1,1,-1,1]];K=[diag([q**t for t in v]) for v in w];Ki=[diag([q**(-t) for t in v]) for v in w];A=[[2,-1],[-2,2]]
checks={}
for i in range(2):
 for j in range(2):
  checks[f'K{i+1}E{j+1}']=zero(sub(mul(mul(K[i],E[j]),Ki[i]),sc(q**A[i][j],E[j])))
  checks[f'K{i+1}F{j+1}']=zero(sub(mul(mul(K[i],G[j]),Ki[i]),sc(q**(-A[i][j]),G[j])))
  c=sc(1/(q-q**-1),sub(K[i],Ki[i])) if i==j else mat(4)
  checks[f'mixed{i+1}{j+1}']=zero(sub(sub(mul(E[i],G[j]),mul(G[j],E[i])),c))
def serre(x,y,n):
 cs=[F(1),q+q**-1,F(1)] if n==2 else [F(1),q*q+1+q**-2,q*q+1+q**-2,F(1)]
 z=mat(len(x))
 for r in range(n+1):z=add(z,sc((-1)**r*cs[r],mul(mul(powm(x,n-r),y),powm(x,r))))
 return z
for name,x in [('E',E),('F',G)]:
 checks[name+'Serre12']=zero(serre(x[0],x[1],2))
 checks[name+'Serre21']=zero(serre(x[1],x[0],3))
DE=[add(kron(E[i],Ki[i]),kron(diag([1]*4),E[i])) for i in range(2)]
DS=serre(DE[0],DE[1],2)
expected=[F(0)]*16;expected[10]=q**-2*(1-q)*(1+q*q)
checks['DeltaSerreOn_v0_v1']=[r[1] for r in DS]==expected
assert all(checks.values()),checks
print(checks)
print('At q=2, Delta(S12)(v0 tensor v1) =',expected[10],'v2 tensor v2')
