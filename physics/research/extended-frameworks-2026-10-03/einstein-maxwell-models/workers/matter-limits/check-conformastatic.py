"""Independent exact rational jet checks from general Christoffel/Ricci formulas.
This checks representative jets, not a proof of the universal identity or audit.
"""
from pathlib import Path
from fractions import Fraction as F
import json
p=Path(__file__).parent
cases=[(F(1),[1,2,3],[[2,1,0],[1,3,2],[0,2,4]]),(F(2),[0,0,0],[[1,0,0],[0,-2,0],[0,0,3]]),(F(3,2),[-2,1,-1],[[0,-1,2],[-1,4,3],[2,3,-3]]),(F(7,3),[F(1,2),F(-2,3),F(3,4)],[[F(1,7),F(2,5),0],[F(2,5),F(-3,2),1],[0,1,F(5,4)]])]
fail=[];nchecks=0
for ci,(H,grad,hess) in enumerate(cases):
 H1=[F(0)]+list(map(F,grad));H2=[[F(0)]*4 for _ in range(4)]
 for i in range(3):
  for j in range(3):H2[i+1][j+1]=F(hess[i][j])
 g=[[F(0)]*4 for _ in range(4)];iv=[[F(0)]*4 for _ in range(4)]
 for i in range(4):g[i][i]=-H**-2 if i==0 else H**2;iv[i][i]=1/g[i][i]
 dg=[[[F(0)]*4 for _ in range(4)]for _ in range(4)]
 ddg=[[[[F(0)]*4 for _ in range(4)]for _ in range(4)]for _ in range(4)]
 for k in range(4):
  for i in range(4):dg[k][i][i]=2*H1[k]/H**3 if i==0 else 2*H*H1[k]
  for l in range(4):
   for i in range(4):ddg[k][l][i][i]=2*H2[k][l]/H**3-6*H1[k]*H1[l]/H**4 if i==0 else 2*H1[k]*H1[l]+2*H*H2[k][l]
 div=[[[ -sum(iv[a][i]*dg[k][i][j]*iv[j][b] for i in range(4) for j in range(4)) for b in range(4)]for a in range(4)]for k in range(4)]
 C=[[[sum(iv[a][d]*(dg[b][d][c]+dg[c][d][b]-dg[d][b][c])for d in range(4))/2 for c in range(4)]for b in range(4)]for a in range(4)]
 DC=[[[[sum(div[k][a][d]*(dg[b][d][c]+dg[c][d][b]-dg[d][b][c])+iv[a][d]*(ddg[k][b][d][c]+ddg[k][c][d][b]-ddg[k][d][b][c])for d in range(4))/2 for c in range(4)]for b in range(4)]for a in range(4)]for k in range(4)]
 R=[[sum(DC[a][a][i][j]-DC[j][a][i][a]+sum(C[a][i][j]*C[b][a][b]-C[a][i][b]*C[b][j][a]for b in range(4)) for a in range(4))for j in range(4)]for i in range(4)]
 q=sum(x*x for x in H1);lap=sum(H2[i][i]for i in range(1,4))
 for i in range(4):
  for j in range(4):
   predicted=q/H**6-lap/H**5 if i==j==0 else F(0) if i==0 or j==0 else -2*H1[i]*H1[j]/H**2+(q/H**2-lap/H if i==j else 0)
   nchecks+=1
   if R[i][j]!=predicted:fail.append({'case':ci,'i':i,'j':j,'actual':str(R[i][j]),'predicted':str(predicted)})
result={'date':'2026-10-04','command':'python3 '+str(p/'check-conformastatic.py'),'positive_H_rational_jets':len(cases),'ricci_components_checked':nchecks,'exact_fraction_arithmetic':True,'failures':fail,'scope':'General Christoffel/Ricci algorithm against ML07 table at four independently chosen smooth admissible jets. Universal proof is the explicit ML07 argument; this check is not independent acceptance.'}
(p/'conformastatic-check.json').write_text(json.dumps(result,indent=2)+'\n');print(json.dumps(result,indent=2));raise SystemExit(bool(fail))
