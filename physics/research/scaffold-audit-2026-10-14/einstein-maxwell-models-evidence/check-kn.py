"""Exact polynomial-fraction KN Einstein–Maxwell check. No numeric sampling."""
from pathlib import Path
import json,time,hashlib
import sympy
from sympy.polys.fields import field
from sympy.polys.domains import QQ
K,r,y,M,a,Q=field('r,y,M,a,Q',QQ)
zero=K.zero; one=K.one
S=r*r+a*a*y*y; D=r*r-2*M*r+a*a+Q*Q; B=1-y*y; R=r*r+a*a
vars=[None,r,y,None]
def diff(f,i):return f.diff(vars[i]) if vars[i] is not None else zero
def mat():return [[zero for _ in range(4)] for _ in range(4)]
g=mat();gi=mat()
g[0][0]=-(D-a*a*B)/S;g[0][3]=g[3][0]=-a*B*(R-D)/S;g[3][3]=B*(R*R-a*a*D*B)/S;g[1][1]=S/D;g[2][2]=S/B
gi[0][0]=-(R*R-a*a*D*B)/(S*D);gi[0][3]=gi[3][0]=-a*(R-D)/(S*D);gi[3][3]=(D-a*a*B)/(S*D*B);gi[1][1]=D/S;gi[2][2]=B/S
start=time.time(); print('inverse',flush=True)
assert all(sum(g[i][k]*gi[k][j] for k in range(4))==(one if i==j else zero) for i in range(4) for j in range(4))
assert (g[0][0]*g[3][3]-g[0][3]**2)*g[1][1]*g[2][2]==-S*S
J=mat()
for i in range(4):J[i][i]=one
J[0][1]=-R/D;J[3][1]=-a/D
gin=[[sum(J[k][i]*g[k][l]*J[l][j] for k in range(4) for l in range(4)) for j in range(4)] for i in range(4)]
H=2*M*r-Q*Q
gexpected=mat();gexpected[0][0]=-(1-H/S);gexpected[0][1]=gexpected[1][0]=one;gexpected[1][3]=gexpected[3][1]=-a*B;gexpected[0][3]=gexpected[3][0]=-a*B*H/S;gexpected[2][2]=S/B;gexpected[3][3]=B*(R+a*a*B*H/S)
assert gin==gexpected
A=[-Q*r/S,zero,zero,Q*r*a*B/S]
F=[[diff(A[j],i)-diff(A[i],j) for j in range(4)] for i in range(4)]
Fu=[[sum(gi[i][k]*gi[j][l]*F[k][l] for k in range(4) for l in range(4)) for j in range(4)] for i in range(4)]
maxwell=[sum(diff(S*Fu[i][j],i) for i in range(4)) for j in range(4)]
assert maxwell==[zero]*4
print('maxwell zero',flush=True)
Gamma={}
for i in range(4):
 for j in range(4):
  for k in range(j,4):
   v=sum(gi[i][l]*(diff(g[l][k],j)+diff(g[l][j],k)-diff(g[j][k],l))/2 for l in range(4))
   Gamma[i,j,k]=v;Gamma[i,k,j]=v
print('connection',round(time.time()-start,2),flush=True)
Ric=mat()
for i in range(4):
 for j in range(i,4):
  v=sum(diff(Gamma[k,i,j],k)-diff(Gamma[k,i,k],j) for k in range(4))
  v+=sum(Gamma[k,k,l]*Gamma[l,i,j]-Gamma[k,j,l]*Gamma[l,i,k] for k in range(4) for l in range(4))
  Ric[i][j]=Ric[j][i]=v
  print('ricci',i,j,round(time.time()-start,2),flush=True)
w=Q*Q/S**2
RicExpected=mat();RicExpected[0][0]=w*(D+a*a*B)/S;RicExpected[0][3]=RicExpected[3][0]=-w*a*B*(D+R)/S;RicExpected[3][3]=w*(a*a*D*B*B+B*R*R)/S;RicExpected[1][1]=-w*S/D;RicExpected[2][2]=w*S/B
assert Ric==RicExpected
F2=sum(F[i][j]*Fu[i][j] for i in range(4) for j in range(4))
stress=[[2*sum(F[i][k]*gi[k][l]*F[j][l] for k in range(4) for l in range(4))-g[i][j]*F2/2 for j in range(4)] for i in range(4)]
residual=[[Ric[i][j]-stress[i][j] for j in range(4)] for i in range(4)]
assert all(v==zero for row in residual for v in row)
scalar=sum(gi[i][j]*Ric[i][j] for i in range(4) for j in range(4))
assert scalar==zero
ric2=sum(gi[i][k]*gi[j][l]*Ric[i][j]*Ric[k][l] for i in range(4) for j in range(4) for k in range(4) for l in range(4))
assert ric2==4*Q**4/S**4
expectedF2=-2*Q*Q*(r**4-6*a*a*r*r*y*y+a**4*y**4)/S**4
assert F2==expectedF2
receipt={'status':'all exact residuals zero','method':'rational-function arithmetic over QQ(r,y,M,a,Q); numerator cancellation, no numeric tests','sympy':sympy.__version__,'inverse_components':16,'determinant':'-Sigma^2 in (t,r,y,phi)','ingoing_metric_transform_components':16,'ricci_compact_formula_components':16,'maxwell_components':4,'ricci_components':16,'scalar_curvature':str(scalar),'ricci_squared':'4 Q^4 / Sigma^4','F_squared':str(F2),'seconds':round(time.time()-start,3),'script_sha256':hashlib.sha256(Path(__file__).read_bytes()).hexdigest(),'domain':'Sigma!=0, Delta!=0, 1-y^2!=0; real exterior r>0, |y|<1, Delta>0 gives -+++; rational identities extend to every nonsingular real chart component'}
Path(__file__).with_name('kn-check.json').write_text(json.dumps(receipt,indent=2)+'\n');print(json.dumps(receipt),flush=True)
