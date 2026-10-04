from pathlib import Path
import hashlib,json,sympy
from sympy.polys.fields import field
from sympy.polys.domains import QQ
K,r,y,A,Ar,Arr,b,br,brr=field('r,y,A,Ar,Arr,b,br,brr',QQ);z=K.zero;one=K.one
jets={r:one,A:Ar,Ar:Arr,b:br,br:brr}
def diff(f,i):
 if i==1:return sum(f.diff(v)*d for v,d in jets.items())
 if i==2:return f.diff(y)
 return z
g=[[z]*4 for _ in range(4)];gi=[[z]*4 for _ in range(4)];B=1-y*y
for i,v in enumerate([-A*A,1/b,r*r/B,r*r*B]):g[i][i]=v;gi[i][i]=1/v
Gamma={}
for i in range(4):
 for j in range(4):
  for k in range(4):Gamma[i,j,k]=sum(gi[i][l]*(diff(g[l][k],j)+diff(g[l][j],k)-diff(g[j][k],l))/2 for l in range(4))
Ric=[[sum(diff(Gamma[k,i,j],k)-diff(Gamma[k,i,k],j) for k in range(4))+sum(Gamma[k,k,l]*Gamma[l,i,j]-Gamma[k,j,l]*Gamma[l,i,k] for k in range(4) for l in range(4)) for j in range(4)] for i in range(4)]
scalar=sum(gi[i][j]*Ric[i][j] for i in range(4) for j in range(4))
Ein=[[sum(gi[i][k]*Ric[k][j] for k in range(4))-(scalar/2 if i==j else z) for j in range(4)] for i in range(4)]
expected=[-(1-b)/(r*r)+br/r,-(1-b)/(r*r)+2*b*Ar/(A*r),b*(Arr/A+Ar/(A*r))+br/2*(Ar/A+1/r)]
assert all(Ein[i][j]==(expected[i] if i==j and i<3 else expected[2] if i==j else z) for i in range(4) for j in range(4))
# Constant density radial pressure/lapse identities in dimensionless x.
F,x,aa,bb,u=field('x,aa,bb,u',QQ)
w=(bb-aa)/(3*aa-bb);phi_prime=u*x/(bb*(3*aa-bb));bprime=-u*x/bb
wp=w.diff(bb)*bprime
assert wp+(1+w)*phi_prime==F.zero
assert phi_prime-(u*x/2)*(1+3*w)/(bb*bb)==F.zero
out={'status':'all exact residuals zero','method':'polynomial-fraction algebra over QQ with independent radial metric jets; no numeric sampling','metric':'diag(-A²,1/b,r²/(1-y²),r²(1-y²))','Einstein_mixed_components_checked':16,'constant_density_pressure_lapse_checks':2,'hypotheses':'r>0,A>0,b>0,|y|<1; smooth derivatives Ar,Arr,br,brr; constant density B²=1-u x²,B>0,3a-B>0','sympy':sympy.__version__,'script_sha256':hashlib.sha256(Path(__file__).read_bytes()).hexdigest()}
Path(__file__).with_name('tov-check.json').write_text(json.dumps(out,indent=2)+'\n');print(json.dumps(out))
