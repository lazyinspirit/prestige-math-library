"""Advisory finite algebra checks, not a geometric or rho certificate."""
import cmath,json
from fractions import Fraction as Q
from pathlib import Path
base=Path(__file__).parent
records=[]
for d in range(1,13):
 z=cmath.exp(2j*cmath.pi/d)
 for n in range(1,5):
  V=[[((7*i+11*j+3*i*j)%9)-4 for j in range(n)] for i in range(n)]
  C=[[[0 for j in range(n)] for i in range(n)] for k in range(d)]
  for i in range(n):
   for j in range(n):
    C[0][i][j]+=V[i][j]+V[j][i]
    C[1%d][i][j]-=V[i][j]
    C[-1%d][i][j]-=V[j][i]
  err=0.0
  for r in range(d):
   for s in range(d):
    for i in range(n):
     for j in range(n):
      lhs=sum(z**(-r*a+s*b)*C[(b-a)%d][i][j] for a in range(d) for b in range(d))/(d*d)
      rhs=((1-z**r)*V[i][j]+(1-z**(-r))*V[j][i])/d if r==s else 0
      err=max(err,abs(lhs-rhs))
  assert err<1e-10,(d,n,err)
  records.append({'d':d,'matrix_size':n,'maximum_error':err})
# Exact arithmetic in Q[z]/(z^2-z+1), where z is a primitive sixth root.
def add(x,y):return(x[0]+y[0],x[1]+y[1])
def neg(x):return(-x[0],-x[1])
def mul(x,y):
 a,b=x;c,d=y
 return(a*c-b*d,a*d+b*c+b*d)
one=(Q(1),Q(0));z=(Q(0),Q(1));zi=(Q(1),Q(-1))
a=add(one,neg(z));b=add(one,neg(zi));w=add(a,b)
# V=[[1,0],[-1,1]] -> H=[[w,-b],[-a,w]].
det=add(mul(w,w),neg(mul(a,b)))
assert det==(0,0) and w==(1,0)
result={'scope':'Finite Fourier normalization for cap-table block circulants only; not an identification of trivial-character W homology with H(1). No geometry, topology, rho independence or analytic index certification.','floating_advisory_cases':records,'exact_singular_character':{'V':[[1,0],[-1,1]],'root_relation':'z^2-z+1=0','det_H_remainder':[str(t) for t in det],'diagonal_H_remainder':[str(t) for t in w],'nonzero_singular_H':True},'all_pass':True}
(base/'finite-algebra-checks.json').write_text(json.dumps(result,indent=2)+'\n')
print('48 finite Fourier cases and exact primitive-sixth-root singular character check passed')
