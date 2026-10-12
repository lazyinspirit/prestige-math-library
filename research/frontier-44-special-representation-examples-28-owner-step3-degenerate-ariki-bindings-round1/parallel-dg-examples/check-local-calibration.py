from fractions import Fraction as Q
import json

def add(a,b):return tuple(x+y for x,y in zip(a,b))
def scale(c,a):return tuple(Q(c)*x for x in a)
def mul(a,b):
 return (a[0]*b[0]+a[1]*b[2],a[0]*b[1]+a[1]*b[3],a[2]*b[0]+a[3]*b[2],a[2]*b[1]+a[3]*b[3],a[4]*b[4],a[4]*b[5]+a[5]*b[4],a[6]*b[6],a[6]*b[7]+a[7]*b[6])
def rank(cols):
 A=[list(map(Q,row)) for row in zip(*cols)];r=0
 for c in range(len(cols)):
  p=next((j for j in range(r,len(A)) if A[j][c]),None)
  if p is None:continue
  A[r],A[p]=A[p],A[r];v=A[r][c];A[r]=[x/v for x in A[r]]
  for j in range(len(A)):
   if j!=r:v=A[j][c];A[j]=[x-v*y for x,y in zip(A[j],A[r])]
  r+=1
 return r
one=(1,0,0,1,1,0,1,0);zero=(0,)*8
x=(0,1,0,0,0,1,0,1);y=(0,-1,0,0,1,1,-1,1);u=(0,-1,-1,0,1,0,-1,0)
checks={}
checks['defining_relations']=mul(u,u)==one and mul(x,x)==zero and mul(x,y)==mul(y,x) and mul(u,x)==add(mul(y,u),scale(-1,one)) and mul(u,y)==add(mul(x,u),one)
checks['derived_y_square']=mul(y,y)==mul(add(x,y),u)
words=[one,x,y,mul(x,y),u,mul(x,u),mul(y,u),mul(mul(x,y),u)]
checks['eight_word_image_rank']=rank(words)==8
z=add(x,y);z2=mul(z,z);E0=mul(add(one,scale(-1,z2)),add(one,scale(-1,z2)));odd=scale(Q(1,2),add(scale(3,z),scale(-1,mul(z2,z))))
Ep=scale(Q(1,2),add(add(one,scale(-1,E0)),odd));Em=scale(Q(1,2),add(add(one,scale(-1,E0)),scale(-1,odd)))
checks['Hermite_projectors']=E0==(1,0,0,1,0,0,0,0) and Ep==(0,0,0,0,1,0,0,0) and Em==(0,0,0,0,0,0,1,0)
f=((0,0,0),(2,0,0),(0,1,0));e=((0,1,0),(0,0,2),(0,0,0))
def mm(A,B):return tuple(tuple(sum(A[i][k]*B[k][j] for k in range(len(B))) for j in range(len(B[0]))) for i in range(len(A)))
ef=mm(e,f);fe=mm(f,e);checks['commutator_2_0_minus2']=tuple(tuple(ef[i][j]-fe[i][j] for j in range(3)) for i in range(3))==((2,0,0),(0,0,0),(0,0,-2))
checks['divided_second_powers']=mm(f,f)==((0,0,0),(0,0,0),(2,0,0)) and mm(e,e)==((0,0,2),(0,0,0),(0,0,0))
assert all(checks.values()),checks
print(json.dumps({'scope':'Exact finite algebra/model and operator calibration only; not independent proof acceptance','checks':checks,'all_pass':True},indent=2))
