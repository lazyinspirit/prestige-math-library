import itertools,json
# Advisory finite-field verification; the all-characteristic proof uses the
# exact quadratic polynomial identity and commuting-operator calculations.
def mul(A,B,p): return [[sum(x*y for x,y in zip(row,col))%p for col in zip(*B)] for row in A]
def add(A,B,p): return [[(x+y)%p for x,y in zip(r,s)] for r,s in zip(A,B)]
def scale(c,A,p):return [[c*x%p for x in r] for r in A]
def sub(A,B,p):return add(A,scale(-1,B,p),p)
def eye(n):return [[int(i==j) for j in range(n)] for i in range(n)]
def adjoint(M,p):
 a,b=M[0];c,d=M[1];N=[[d,-b],[-c,a]]
 basis=[[[0,1],[0,0]],[[1,0],[0,-1]],[[0,0],[1,0]]]
 cols=[]
 for X in basis:
  Y=mul(mul(M,X,p),N,p);cols.append([Y[0][1],Y[0][0],Y[1][0]])
 return [list(row) for row in zip(*cols)]
results=[]
for p in (3,5,7):
 I=eye(3); count=0; split=0;nonsplit=0
 for a,b,c,d in itertools.product(range(p),repeat=4):
  if (a*d-b*c)%p!=1:continue
  t=(a+d)%p;D=(t*t-4)%p
  if not D:continue
  M=[[a,b],[c,d]];Q=adjoint(M,p);v=[[b],[(a-d)*pow(2,-1,p)%p],[c]]
  ell=[[c,(a-d)%p,b]];pi=scale(2*pow(D,-1,p),mul(v,ell,p),p);J=sub(I,pi,p)
  R=scale(pow(D,-1,p),add(Q,scale(3-t*t,I,p),p),p)
  assert mul(pi,pi,p)==pi and mul(Q,v,p)==v
  assert mul(mul(sub(Q,I,p),R,p),J,p)==J
  assert mul(mul(R,sub(Q,I,p),p),J,p)==J
  for L in [eye(2),M,scale(-1,M,p)]:
   P=adjoint(L,p);assert mul(P,R,p)==mul(R,P,p)
   # The middle contraction cancellation is R(P-I)=(P-I)R;
   # degree0/2 cancellation is exactly the inverse on J checked above.
   assert mul(sub(P,I,p),v,p)==[[0],[0],[0]]
  count+=1
  if any((x*x-t*x+1)%p==0 for x in range(p)):split+=1
  else:nonsplit+=1
 results.append(dict(characteristic=p,nonparabolic_matrices=count,split=split,nonsplit=nonsplit))
print(json.dumps({'finite_checks':results,'status':'all assertions pass; advisory, not replacement for arbitrary-field proof'},indent=2))
