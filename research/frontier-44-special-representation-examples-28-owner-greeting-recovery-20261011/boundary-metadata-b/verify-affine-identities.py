# Exact polynomial check of all six braid coefficients, after common denominator clearing.
import json,itertools,pathlib
P=pathlib.Path(__file__).parent
zero={};one={(0,0,0,0):1}
def add(a,b):
 c=a.copy()
 for k,v in b.items():c[k]=c.get(k,0)+v
 return {k:v for k,v in c.items() if v}
def neg(a):return {k:-v for k,v in a.items()}
def mul(a,b):
 c={}
 for i,u in a.items():
  for j,v in b.items():
   k=tuple(x+y for x,y in zip(i,j));c[k]=c.get(k,0)+u*v
 return {k:v for k,v in c.items() if v}
def sub(a,b):return add(a,neg(b))
def var(i):return {tuple(int(i==j) for j in range(4)):1}
x=[var(i) for i in range(3)];z=var(3);pairs=[(0,1),(0,2),(1,2)]
D=one
for i,j in pairs:D=mul(D,sub(x[j],x[i]))
def numerator(kind,i,j):return mul(sub(z,one),x[j]) if kind=='c' else sub(x[j],mul(z,x[i]))
def clear_factor(kind,i,j):
 q=one
 for a,b in pairs:
  if (a,b)!=(min(i,j),max(i,j)):q=mul(q,sub(x[b],x[a]))
 if i>j:q=neg(q)
 return mul(numerator(kind,i,j),q)
def compose(p,q):return tuple(p[q[i]] for i in range(3))
def word(seq):
 terms=[(tuple(range(3)),one)]
 for idx in seq:
  s=list(range(3));s[idx],s[idx+1]=s[idx+1],s[idx];out=[]
  for p,c in terms:
   i,j=p[idx],p[idx+1]
   out.append((p,mul(c,clear_factor('c',i,j))))
   out.append((compose(p,s),mul(c,clear_factor('d',i,j))))
  terms=out
 ans={}
 for p,c in terms:ans[p]=add(ans.get(p,zero),c)
 return ans
a,b=word([0,1,0]),word([1,0,1]);differences={str(p):sub(a.get(p,zero),b.get(p,zero)) for p in itertools.permutations(range(3))}
report={'method':'sparse integer polynomial arithmetic in independent X1,X2,X3,z, with each rational factor cleared by common Delta=product_{i<j}(Xj-Xi); compares every coefficient in (K crossed S3)','six_braid_coefficients_zero':{p:not v for p,v in differences.items()},'pass':all(not v for v in differences.values())}
(P/'affine-polynomial-identity-check.json').write_text(json.dumps(report,indent=2)+'\n');print(json.dumps(report));assert report['pass']
