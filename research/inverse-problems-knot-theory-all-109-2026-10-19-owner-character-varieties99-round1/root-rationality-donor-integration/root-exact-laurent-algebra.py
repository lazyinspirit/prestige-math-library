import json

def p(c=0,m=0,t=0): return {(m,t):c} if c else {}
def add(a,b):
 c=a.copy()
 for k,v in b.items():
  c[k]=c.get(k,0)+v
  if not c[k]: del c[k]
 return c
def neg(a): return {k:-v for k,v in a.items()}
def sub(a,b): return add(a,neg(b))
def mul(a,b):
 c={}
 for (i,j),v in a.items():
  for (k,l),w in b.items(): c=add(c,p(v*w,i+k,j+l))
 return c
def power(a,n):
 c=p(1)
 for _ in range(n): c=mul(c,a)
 return c
def mm(a,b): return [[add(mul(a[i][0],b[0][j]),mul(a[i][1],b[1][j])) for j in range(2)] for i in range(2)]
def inv(a): return [[a[1][1],neg(a[0][1])],[neg(a[1][0]),a[0][0]]]
def trace(a): return add(a[0][0],a[1][1])
A=[[p(1,1),p(1)],[p(),p(1,-1)]];B=[[p(1,1),p()],[p(1,0,1),p(1,-1)]]
x=add(p(1,1),p(1,-1));x2=power(x,2);a=add(add(p(1,2),p(1,-2)),p(-3));F=sub(add(p(1,0,2),mul(a,p(1,0,1))),a)
W=mm(mm(mm(A,inv(B)),inv(A)),B);R=[[sub(u,v) for u,v in zip(r,s)] for r,s in zip(mm(B,W),mm(W,A))]
assert R==[[p(),neg(F)],[mul(p(1,0,1),F),p()]]
X3=mm(mm(A,B),inv(A));X4=mm(mm(mm(mm(inv(B),A),B),inv(A)),B);C=mm(mm(mm(X4,inv(A)),B),inv(X3))
expected=add(add(sub(power(x,4),mul(p(5),x2)),p(2)),mul(F,sub(mul(x2,add(p(1,0,1),p(1))),mul(p(1,0,1),F))))
assert trace(C)==expected
X=p(1,1);bb=add(add(add(add(neg(power(X,4)),power(X,3)),mul(p(2),power(X,2))),X),p(-1));disc=sub(power(bb,2),mul(p(4),power(X,4)))
expected=mul(mul(power(sub(X,p(1)),2),power(add(X,p(1)),2)),mul(add(add(power(X,2),X),p(1)),add(sub(power(X,2),mul(p(3),X)),p(1))))
assert disc==expected
out={'method':'Exact integer Laurent polynomial arithmetic in M,t; no numeric sampling','unfilled_relator_all4_entries':'pass','preferred_longitude_trace_before_quotient':'pass','quadratic_discriminant_factorization':'pass','limits':'Algebra only. Actual preferred word and geometric image completeness rely on complete bound topology and representation proofs.'}
base='research/inverse-problems-knot-theory-all-109-2026-10-19-owner-character-varieties99-round1/root-rationality-donor-integration/'
open(base+'root-symbolic-assembly-checks.json','w').write(json.dumps(out,indent=2)+'\n')
print(json.dumps(out))
