from fractions import Fraction as F
from itertools import product
import json
I=[[F(int(i==j)) for j in range(4)] for i in range(4)]
B=[row[:] for row in I]; B[0][:2]=[F(5,4),F(3,4)];B[1][:2]=[F(3,4),F(5,4)]
Bi=[row[:] for row in I];Bi[0][:2]=[F(5,4),F(-3,4)];Bi[1][:2]=[F(-3,4),F(5,4)]
R=[row[:] for row in I];R[1][1]=R[2][2]=F(0);R[1][2]=F(-1);R[2][1]=F(1)
Ri=[list(row) for row in zip(*R)]
def mv(A,v):return tuple(sum(a*b for a,b in zip(row,v)) for row in A)
def mm(A,B):return [[sum(A[i][k]*B[k][j] for k in range(4)) for j in range(4)]for i in range(4)]
def add(v,w):return tuple(a+b for a,b in zip(v,w))
def sub(v,w):return tuple(a-b for a,b in zip(v,w))
matrices=[(I,I),(B,Bi),(Bi,B),(R,Ri),(mm(B,R),mm(Ri,Bi))]
vectors=list(product(map(F,[-1,0,1]),repeat=4));count=0;old_fail=0
for M,N in matrices:
 assert mm(M,N)==I and mm(N,M)==I
 for b in vectors:
  for u in vectors:
   forward=lambda z:mv(N,sub(z,b))
   inverse=lambda z:add(mv(M,z),b)
   assert forward(inverse(u))==u and inverse(forward(u))==u
   old_fail+=forward(mv(M,add(u,b)))!=u
   count+=1
witness={'b':['1','0','0','0'],'u':['0','0','0','0'],'correct_inverse':['1','0','0','0'],'old_inverse':[str(v) for v in mv(B,(F(1),F(0),F(0),F(0)))]}
print(json.dumps({'cases':count,'both_compositions':'exact Fraction identities pass','matrices':5,'origins':81,'coordinates':81,'old_formula_failures':old_fail,'explicit_boost_witness':witness},indent=2))
