"""Compute every F coefficient from actual ell=4 TL cup/cap/JW matrices."""
import sympy as S,itertools,json
d=S.sqrt(2);q=(1+S.I)/d;rootd=S.sqrt(d)
I=S.eye(2);w=S.Matrix([0,1,-1/q,0]);b=S.Matrix([[0,-q,1,0]])
p2=S.eye(4)+w*b/d
kron=S.kronecker_product
deg={0:0,1:2,2:1};ident={0:S.eye(1),1:p2,2:I}
inc={};ret={}
for x in [0,1,2]:
    inc[0,x,x]=inc[x,0,x]=ident[x];ret[0,x,x]=ret[x,0,x]=ident[x]
inc[2,2,0]=w/rootd;ret[2,2,0]=-b/rootd
inc[2,2,1]=ret[2,2,1]=p2
inc[1,2,2]=-rootd*kron(p2,I)*kron(I,w)
ret[1,2,2]=rootd*kron(I,b)*kron(p2,I)
inc[2,1,2]=-rootd*kron(I,p2)*kron(w,I)
ret[2,1,2]=rootd*kron(b,I)*kron(I,p2)
W2=kron(I,w,I)*w;B2=b*kron(I,b,I)
inc[1,1,0]=-kron(p2,p2)*W2;ret[1,1,0]=-B2*kron(p2,p2)
def fusion(a,c):
    if a==2 and c==2:return (0,1)
    if a==2 or c==2:return (2,)
    return(a^c,)
def simple(A):return A.applyfunc(S.simplify)
for key in inc:
    assert simple(ret[key]*inc[key]-ident[key[2]])==S.zeros(2**deg[key[2]])
records=[]
for a,c,e in itertools.product(range(3),repeat=3):
 for out in range(3):
  left=[x for x in fusion(a,c) if out in fusion(x,e)]
  right=[x for x in fusion(c,e) if out in fusion(a,x)]
  if not left:continue
  F=S.zeros(len(right),len(left))
  for j,f in enumerate(right):
   Rdag=ret[a,f,out]*kron(ident[a],ret[c,e,f])
   for k,g in enumerate(left):
    L=kron(inc[a,c,g],ident[e])*inc[g,e,out]
    F[j,k]=S.simplify((Rdag*L)[0,0])
    expected=(-1/S.sqrt(2)*(-1)**(f*g) if a==c==e==2 else -1 if (a,c,e,out) in [(1,2,1,2),(2,1,2,1)] else 1)
    assert S.simplify(F[j,k]-expected)==0,(a,c,e,out,f,g,F[j,k],expected)
  records.append({'inputs':[a,c,e],'total':out,'left_channels':left,'right_channels':right,'F':[[str(v) for v in F.row(j)] for j in range(F.rows)]})
s=S.exp(S.I*S.pi/8)
cross=s*S.eye(4)+s**-1*w*b
crossrecords=[]
for a,c in itertools.product(range(3),repeat=2):
 na,nb=deg[a],deg[c];total=na+nb
 C=S.eye(2**total)
 for j in range(nb):
  for i in range(na-1,-1,-1):
   position=i+j
   C=kron(S.eye(2**position),cross,S.eye(2**(total-position-2)))*C
 for out in fusion(a,c):
  actual=S.simplify(S.expand_complex((ret[c,a,out]*C*inc[a,c,out])[0,0]))
  expected=(1 if a==0 or c==0 else -1 if a==c==1 else S.I if a!=c else -s**-3 if out==0 else s)
  assert S.simplify(S.expand_complex(actual-expected))==0,(a,c,out,actual,expected)
  crossrecords.append({'inputs':[a,c],'output':out,'object_crossing':str(expected)})
print(json.dumps({'labels':{'0':'unit','1':'eta','2':'D'},'F_blocks':records,'object_crossings':crossrecords},indent=2))
