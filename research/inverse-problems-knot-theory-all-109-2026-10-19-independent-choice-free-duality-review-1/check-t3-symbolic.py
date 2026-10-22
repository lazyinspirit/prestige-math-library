# Exact arithmetic in Z[a^+-1,b^+-1]; the coefficient a=x-1 is invertible in K.
from pathlib import Path
import json
zero={};one={(0,0):1};a={(1,0):1};b={(0,1):1};ia={(-1,0):1}
def add(p,q):
 r=dict(p)
 for k,v in q.items():
  r[k]=r.get(k,0)+v
  if not r[k]:del r[k]
 return r
def neg(p):return {k:-v for k,v in p.items()}
def mul(p,q):
 r={}
 for (i,j),v in p.items():
  for (k,l),w in q.items():r=add(r,{(i+k,j+l):v*w})
 return r
def mm(A,B):return [[sum_poly(mul(A[i][k],B[k][j]) for k in range(len(B))) for j in range(len(B[0]))] for i in range(len(A))]
def sum_poly(ps):
 r={}
 for p in ps:r=add(r,p)
 return r
def ma(A,B):return [[add(x,y) for x,y in zip(r,s)] for r,s in zip(A,B)]
def eye(n):return [[one if i==j else zero for j in range(n)] for i in range(n)]
d1=[[a,b,zero]];d2=[[neg(b),zero,zero],[a,zero,zero],[zero,a,b]];d3=[[zero],[neg(b)],[a]]
h0=[[ia],[zero],[zero]];h1=[[zero,ia,zero],[zero,zero,ia],[zero,zero,zero]];h2=[[zero,zero,ia]]
assert mm(d1,d2)==[[zero]*3]
assert mm(d2,d3)==[[zero],[zero],[zero]]
assert mm(d1,h0)==eye(1)
assert ma(mm(d2,h1),mm(h0,d1))==eye(3)
assert ma(mm(d3,h2),mm(h1,d2))==eye(3)
assert mm(h2,d3)==eye(1)
result={'chain_square_identities':2,'contracting_homotopy_identities':4,'exact_symbolic_coefficient_ring':'Z[a^+-1,b^+-1], embedded in Q(x,y) by a=x-1,b=y-1','all_pass':True,'scope':'Only explicit T3 coefficient chain algebra; group-ring H1 and dual-annihilator arguments separately read and checked mathematically.'}
Path(__file__).with_name('t3-symbolic-results.json').write_text(json.dumps(result,indent=2)+'\n');print(json.dumps(result))
