import json,pathlib,datetime
class P:
 def __init__(self,x=0):self.c={k:v for k,v in (x if isinstance(x,dict) else {0:x}).items() if v}
 def __add__(self,o):
  o=o if isinstance(o,P) else P(o);r=dict(self.c)
  for k,v in o.c.items():r[k]=r.get(k,0)+v
  return P(r)
 __radd__=__add__
 def __neg__(self):return P({k:-v for k,v in self.c.items()})
 def __sub__(self,o):return self+-co(o)
 def __rsub__(self,o):return co(o)+-self
 def __mul__(self,o):
  o=co(o);r={}
  for k,v in self.c.items():
   for j,w in o.c.items():r[k+j]=r.get(k+j,0)+v*w
  return P(r)
 __rmul__=__mul__
 def __pow__(self,n):
  r=P(1)
  for _ in range(n):r=r*self
  return r
 def __eq__(self,o):return self.c==co(o).c
 def at(self,x):return sum(v*x**k for k,v in self.c.items())
 def __repr__(self):return str(self.c)
def co(x):return x if isinstance(x,P) else P(x)
def mat(a):return [[co(x) for x in row] for row in a]
def mul(a,b):return [[sum(a[i][k]*b[k][j] for k in range(len(b))) for j in range(len(b[0]))] for i in range(len(a))]
def trans(a):return list(map(list,zip(*a)))
def theta(a):return [[(q-1 if i==j else 0)-a[i][j] for j in range(2)] for i in range(2)]
def eq(a,b):return all(a[i][j]==b[i][j] for i in range(len(a)) for j in range(len(a[0])))
def evalm(a,x,mod=None):return [[v.at(x)%mod if mod else v.at(x) for v in row] for row in a]
q=P({1:1});G=mat([[q+1,-1],[-1,q*q+1]]);B=mat([[q+1,q*q],[q*q,q**3+q]]);Phi=mat([[1,0],[q-1,-1]])
M1=mat([[q,0],[-1,-1]]);M2=mat([[0,1],[q,q-1]]);P1=mat([[-1,0],[-q*q,q]]);P2=M2
assert eq(mul(mul(Phi,G),trans(Phi)),B)
for M,A in [(M1,P1),(M2,P2)]:
 assert eq(mul(A,Phi),mul(Phi,theta(M)))
 for a in [M,A]:assert eq(mul(a,a),[[(q-1)*a[i][j]+(q if i==j else 0) for j in range(2)] for i in range(2)])
assert eq(mul(mul(P1,P2),P1),mul(mul(P2,P1),P2))
det=B[0][0]*B[1][1]-B[0][1]*B[1][0];assert det==q*(q*q+q+1)
out={'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'model':'Exact integer-polynomialHeckeS3 λ21rank2cell/polytabloid comparison','assertions':['Phi*G*Phi^t=beta','Pi*Phi=Phi*theta(Mi)','quadraticrelations on both modules','braidrelation on ordinarymodule','detGram=q(1+q+q²)'],'successful':True,'q_minus_one':{'ordinary_beta':evalm(B,-1),'Murphy_Gram':evalm(G,-1),'Phi':evalm(Phi,-1),'det':det.at(-1)},'char2_q_one':{'ordinary_beta':evalm(B,1,2),'Murphy_Gram':evalm(G,1,2),'Phi':evalm(Phi,1,2),'radical_dimension':0},'scope':'Finite exactsmoke on displayedNEW50example assertions; not generalproof of q-Garnir orintegralduality'}
D=pathlib.Path(__file__).parent;(D/'rank-three-symbolic-check.json').write_text(json.dumps(out,indent=2)+'\n');print(json.dumps(out,indent=2))
