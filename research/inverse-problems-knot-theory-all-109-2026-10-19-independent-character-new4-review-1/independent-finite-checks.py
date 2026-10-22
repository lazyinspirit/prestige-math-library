import json,math
from collections import defaultdict
N=6
zero=(0,)*N
def C(n):return {} if not n else {zero:n}
def v(i,e=1):
 t=list(zero);t[i]=e;return {tuple(t):1}
def add(*ps):
 d=defaultdict(int)
 for p in ps:
  for t,c in p.items():d[t]+=c
 return {t:c for t,c in d.items() if c}
def neg(p):return {t:-c for t,c in p.items()}
def sub(p,q):return add(p,neg(q))
def mul(p,q):
 d=defaultdict(int)
 for a,c in p.items():
  for b,e in q.items():d[tuple(x+y for x,y in zip(a,b))]+=c*e
 return {t:c for t,c in d.items() if c}
def matmul(A,B):return [[add(*(mul(A[i][k],B[k][j]) for k in range(2))) for j in range(2)] for i in range(2)]
def ma(*As):return [[add(*(A[i][j] for A in As)) for j in range(2)] for i in range(2)]
def mn(A):return [[neg(a) for a in r] for r in A]
def sc(p,A):return [[mul(p,a) for a in r] for r in A]
def tr(A):return add(A[0][0],A[1][1])
def inv(A):return [[A[1][1],neg(A[0][1])],[neg(A[1][0]),A[0][0]]]
I=[[C(1),C(0)],[C(0),C(1)]]
A=[[v(0),v(1)],[v(2),mul(v(0,-1),add(C(1),mul(v(1),v(2))))]]
B=[[v(3),v(4)],[v(5),mul(v(3,-1),add(C(1),mul(v(4),v(5))))]]
a,b,c=tr(A),tr(B),tr(matmul(A,B));AB=matmul(A,B)
identities={'A_inverse':ma(inv(A),A,mn(sc(a,I))),'B_inverse':ma(inv(B),B,mn(sc(b,I))), 'A_square':ma(matmul(A,A),I,mn(sc(a,A))), 'B_square':ma(matmul(B,B),I,mn(sc(b,B))), 'polarization':ma(AB,matmul(B,A),mn(sc(a,B)),mn(sc(b,A)),mn(sc(sub(c,mul(a,b)),I))), 'ABA':ma(matmul(AB,A),mn(sc(c,A)),mn(B),sc(b,I)), 'ABB':ma(matmul(AB,B),mn(sc(b,AB)),A)}
assert all(not x for M in identities.values() for r in M for x in r)
# Torus family in variables eta,v with eta inverted.
s=add(v(0),v(0,-1));Y=[[v(1),C(1)],[sub(mul(v(1),sub(s,v(1))),C(1)),sub(s,v(1))]]
assert sub(sub(mul(Y[0][0],Y[1][1]),mul(Y[0][1],Y[1][0])),C(1))=={}
assert tr(Y)==s
# Four panels in oriented component order, not crossing-number order.
panels={1:{'over':1,'L':2,'R':3,'source':3,'target':2,'traversal':(2,3)},2:{'over':4,'L':2,'R':1,'source':1,'target':2,'traversal':(1,2)},3:{'over':2,'L':4,'R':3,'source':3,'target':4,'traversal':(3,4)},4:{'over':3,'L':4,'R':1,'source':1,'target':4,'traversal':(4,1)}}
letters=[];arc=1
for crossing in [2,1,3,4]:
 p=panels[crossing];assert p['traversal'][0]==arc
 sign=1 if p['traversal']==(p['source'],p['target']) else -1
 assert p['traversal']==(p['source'],p['target']) or p['traversal']==(p['target'],p['source'])
 letters.append([p['over'],sign]);arc=p['traversal'][1]
assert arc==1 and letters==[[4,1],[1,-1],[2,1],[3,-1]] and sum(s for _,s in letters)==0
print(json.dumps({'generic_Laurent_chart_matrix_identities':list(identities),'all_28_entry_residuals_zero':True,'torus_family_determinant_one_and_trace_verified':True,'figure8_underpass_order':[2,1,3,4],'blackboard_word_letters':letters,'self_writhe':0,'scope':'Independent exact Laurent polynomial matrix verification and traversal/sign table reconstruction from read local TikZ panels; not a substitute for the actual topological peripheral-word supplier.'},indent=2))
