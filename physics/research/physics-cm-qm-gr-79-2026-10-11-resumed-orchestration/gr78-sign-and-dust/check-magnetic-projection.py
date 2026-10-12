import itertools,json
from pathlib import Path
s=[1,-1,-1,-1];U=[1,0,0,0]
def ep(a,b,c):
 if 0 in (a,b,c) or len({a,b,c})<3:return 0
 return 1 if (a,b,c) in [(1,2,3),(2,3,1),(3,1,2)] else -1
def calc(B,X):
 def C(i,j,k,l):
  return -sum((U[k]*B[l][p]-U[l]*B[k][p])*s[p]*ep(p,i,j)+(U[i]*B[j][p]-U[j]*B[i][p])*s[p]*ep(p,k,l) for p in range(4))
 def G(a,o,b):
  if a==0:return 0
  if b==0 and o>0:return -X[a][o]
  if o==0 and b>0:return -X[a][b]
  return 0
 def nab(a,i,j,k,l):
  args=[i,j,k,l];res=0
  for slot,idx in enumerate(args):
   for p in range(4):
    aa=args.copy();aa[slot]=p;res-=G(a,p,idx)*C(*aa)
  return res
 def F(j,k,l):return sum(s[a]*nab(a,a,j,k,l) for a in range(4))
 proj=[[sum((ep(i,k,l)*F(j,k,l)+ep(j,k,l)*F(i,k,l))/4 for k,l in itertools.product(range(1,4),repeat=2)) for j in range(1,4)] for i in range(1,4)]
 Q=[];Qc=[];chi=-sum(X[i][i] for i in range(1,4))
 for i in range(1,4):
  row=[];rc=[]
  for j in range(1,4):
   lie=-sum(X[i][l]*B[l][j]+X[j][l]*B[i][l] for l in range(1,4))
   first=sum((X[l][i]*B[j][l]+X[l][j]*B[i][l])/2 for l in range(1,4))
   second=sum(X[i][l]*B[j][l]+X[j][l]*B[i][l] for l in range(1,4))
   double=sum(X[k][l]*B[p][q]*(ep(p,k,i)*ep(q,l,j)+ep(p,k,j)*ep(q,l,i))/2 for k,l,p,q in itertools.product(range(1,4),repeat=4))
   rest=lie+first+second+chi*B[i][j]
   row.append(rest-double);rc.append(rest+double)
  Q.append(row);Qc.append(rc)
 return proj,Q,Qc
basis=[]
for diagonal in [(1,-1,0),(1,0,-1)]:
 b=[[0]*4 for _ in range(4)]
 for i,v in enumerate(diagonal,1):b[i][i]=v
 basis.append(b)
for i,j in [(1,2),(1,3),(2,3)]:
 b=[[0]*4 for _ in range(4)];b[i][j]=b[j][i]=1;basis.append(b)
rows=[]
for bi,b in enumerate(basis):
 for a,k in itertools.product(range(1,4),repeat=2):
  x=[[0]*4 for _ in range(4)];x[a][k]=1
  p,old,new=calc(b,x)
  rows.append({'B_basis':bi,'chi_basis':[a,k],'old_equals_projection':old==p,'corrected_equals_projection':new==p})
r={'scope':'Exact finite bilinear tensor-component check of B/chi lower-order magnetic projection with E=0, spatial component derivatives zero, Γ0=0 and Γa^b0=Γa^0b=−chi_ab. Five symmetric tracefree B basis tensors and nine chi basis matrices span all45 bilinear coefficients. Schouten zero; density zero. Not a whole dust-chain proof.','tests':45,'corrected_pass':all(x['corrected_equals_projection'] for x in rows),'original_mismatches':sum(not x['old_equals_projection'] for x in rows),'rows':rows}
p=Path(__file__).with_name('magnetic-projection-check.json');p.write_text(json.dumps(r,indent=2)+'\n');print(json.dumps({k:v for k,v in r.items() if k!='rows'},indent=2))
