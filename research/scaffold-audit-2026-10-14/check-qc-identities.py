"""Finite witnesses only, never a general-proof or native-gate receipt."""
import json,pathlib
from fractions import Fraction as F
Z=(F(0),)*4
one=(F(1),F(0),F(0),F(0))
def add(a,b):return tuple(x+y for x,y in zip(a,b))
def neg(a):return tuple(-x for x in a)
def mul(a,b):
 out=[F(0)]*4
 for k,x in enumerate(a):
  for l,y in enumerate(b):
   sp=(k%2)+(l%2);ip=(k//2)+(l//2);out[(sp%2)+2*(ip%2)]+=x*y*(2 if sp==2 else 1)*(-1 if ip==2 else 1)
 return tuple(out)
h=(F(0),F(1,2),F(0),F(0));w=(F(0),F(1,2),F(0),F(1,2));wc=(F(0),F(1,2),F(0),F(-1,2))
def zeros(n):return [[Z for j in range(n)] for i in range(n)]
def ident(n):return [[one if i==j else Z for j in range(n)] for i in range(n)]
def matmul(a,b):
 n=len(a);m=zeros(n)
 for i in range(n):
  for j in range(n):
   for k in range(n):m[i][j]=add(m[i][j],mul(a[i][k],b[k][j]))
 return m
H=[[h,h],[h,neg(h)]];T=[[one,Z],[Z,w]];Td=[[one,Z],[Z,wc]]
def gate(g,t):
 m=zeros(8)
 for x in range(8):
  for y in range(8):
   if all(((x>>(2-k))&1)==((y>>(2-k))&1) for k in range(3) if k!=t):m[y][x]=g[(y>>(2-t))&1][(x>>(2-t))&1]
 return m
def cnot(a,b):
 m=zeros(8)
 for x in range(8):
  bits=[(x>>(2-k))&1 for k in range(3)];bits[b]^=bits[a];y=sum(v<<(2-k) for k,v in enumerate(bits));m[y][x]=one
 return m
seq=[gate(H,2),cnot(1,2),gate(Td,2),cnot(0,2),gate(T,2),cnot(1,2),gate(Td,2),cnot(0,2),gate(T,1),gate(T,2),gate(H,2),cnot(0,1),gate(T,0),gate(Td,1),cnot(0,1)]
u=ident(8)
for g in seq:u=matmul(g,u)
expected=zeros(8)
for x in range(8):expected[x^(((x>>2)&1)*((x>>1)&1))][x]=one
assert u==expected
ct=matmul(matmul(u,gate(T,2)),u)
for x in [0,2,4,6]:
 for y in range(8):assert ct[y][x]==(w if x==6 else one) if x==y else ct[y][x]==Z
# Finite binary rank check for exact declared surface patches.
def rank(rows):
 out={}
 for x in rows:
  while x:
   p=x.bit_length()-1
   if p in out:x^=out[p]
   else:out[p]=x;break
 return len(out)
checks=[]
for d in range(2,8):
 edges=[((i,j),(i+1,j)) for i in range(d) for j in range(d+1)]+[((i,j),(i,j+1)) for i in range(1,d) for j in range(d)]
 index={e:k for k,e in enumerate(edges)}
 xr=[sum(1<<k for k,e in enumerate(edges) if (i,j) in e) for i in range(1,d) for j in range(d+1)]
 zr=[]
 for i in range(d):
  for j in range(d):
   es=[((i,j),(i+1,j)),((i,j+1),(i+1,j+1)),((i,j),(i,j+1)),((i+1,j),(i+1,j+1))]
   zr.append(sum(1<<index[e] for e in es if e in index))
 assert all((x&z).bit_count()%2==0 for x in xr for z in zr)
 assert rank(xr)==d*d-1 and rank(zr)==d*d and len(edges)==2*d*d
 checks.append({'d':d,'qubits':len(edges),'X_rank':rank(xr),'Z_rank':rank(zr),'logical_qubits':len(edges)-rank(xr)-rank(zr)})
receipt={'status':'pass','scope':'Exact rational Q(i,sqrt2) 8-basis Toffoli and clean controlled-T witnesses; finite F2 check-matrix ranks/commutation for d=2..7 only. No general proof acceptance.','Toffoli_exact':True,'controlled_T_clean_exact':True,'surface_patches':checks}
pathlib.Path('research/scaffold-audit-2026-10-14/quantum-computing-finite-check.json').write_text(json.dumps(receipt,indent=2)+'\n');print(json.dumps(receipt,indent=2))
