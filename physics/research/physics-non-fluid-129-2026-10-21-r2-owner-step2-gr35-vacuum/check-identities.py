import sympy as s,json,time
M,a,r,u=s.symbols('M a r u');S=r*r+a*a*u*u;D=r*r-2*M*r+a*a;q=1-u*u;A=r*r+a*a;x=[r,u]
G=s.Matrix([[2*M*r-S,-2*M*a*r*q],[-2*M*a*r*q,q*(A*A-a*a*D*q)]])/S
Gi=s.Matrix([[-(A*A-a*a*D*q),-2*M*a*r],[-2*M*a*r,(D-a*a*q)/q]])/(S*D)
h=s.diag(S/D,S/q);hi=s.diag(D/S,q/S);out=[]
def chk(name,e):
 vals=list(e)if isinstance(e,s.MatrixBase)else[e]
 nums=[s.Poly(s.fraction(s.cancel(v))[0],M,a,r,u)for v in vals]
 ok=all(n.is_zero for n in nums);out.append({'identity':name,'zero_polynomial':ok});print(name,ok,flush=True)
 if not ok:print([str(n.as_expr())for n in nums if not n.is_zero],flush=True)
chk('G inverse',G*Gi-s.eye(2));chk('det G',G.det()+D*q)
Gamma=[[[s.cancel(sum(hi[k,l]*(s.diff(h[l,j],x[i])+s.diff(h[l,i],x[j])-s.diff(h[i,j],x[l]))for l in range(2))/2)for j in range(2)]for i in range(2)]for k in range(2)]
expected=[[[r/S-(r-M)/D,a*a*u/S],[a*a*u/S,-D*r/(S*q)]],[[-a*a*u*q/(S*D),r/S],[r/S,a*a*u/S+u/q]]]
for k in range(2):
 for i in range(2):
  for j in range(i,2):chk('base Gamma '+str((k,i,j)),Gamma[k][i][j]-expected[k][i][j])
Rh=s.zeros(2)
for i in range(2):
 for j in range(2):Rh[i,j]=sum(s.diff(Gamma[k][i][j],x[k])-s.diff(Gamma[k][k][i],x[j])+sum(Gamma[k][i][j]*Gamma[l][l][k]-Gamma[k][j][l]*Gamma[l][i][k]for l in range(2))for k in range(2))
Rhexp=s.diag(M*r*(3*a*a*u*u-r*r)/(S*S*D),M*r*(3*a*a*u*u-r*r)/(S*S*q));chk('base Ricci h',Rh-Rhexp)
W=[(r-M)/D,-u/q];P=[Gi*G.diff(t)for t in x]
Prr=M*M*a*a*u*u+3*M*M*r*r-2*M*a*a*r*u*u-M*a*a*r-3*M*r**3+a*a*r*r*u*u+r**4
Qrr=M*M*a**4*u**4-2*M*M*a*a*r*r*u*u+5*M*M*r**4-2*M*a**4*r*u**4+2*M*a**4*r*u*u-2*M*a*a*r**3*u*u-2*M*a*a*r**3-4*M*r**5+a**4*r*r*u**4+2*a*a*r**4*u*u+r**6
Puu=-M*r*u*u+M*r+a*a*u**4+r*r*u*u;Quu=u*u*(-4*M*a*a*r*u*u+4*M*a*a*r+a**4*u**4+2*a*a*r*r*u*u+r**4);B=-M*a*a*u*u+M*a*a-2*M*r*r+a*a*r*u*u+r**3
Hexp=s.Matrix([[Prr/(S*D*D),-u*B/(q*S*D)],[-u*B/(q*S*D),Puu/(q*q*S)]])
Texp=s.Matrix([[Qrr/(S*S*D*D),-u*B/(q*S*D)],[-u*B/(q*S*D),Quu/(q*q*S*S)]])
for i,j in [(0,0),(0,1),(1,1)]:
 H=-s.diff(W[j],x[i])+sum(Gamma[k][i][j]*W[k]for k in range(2));T=s.trace(P[i]*P[j])/4
 chk('H '+str((i,j)),H-Hexp[i,j]);chk('T '+str((i,j)),T-Texp[i,j]);chk('full base Ricci '+str((i,j)),Rhexp[i,j]+Hexp[i,j]-Texp[i,j])
z=u*u;U=-4*M*r*z-a*a*z*z+3*a*a*z+3*r*r*z-r*r;V=4*M*a*a*r*z-3*a**4*z-3*a*a*r*r*z+a*a*r*r+r**4
Z=-8*M*M*a**4*r*r*z*z+8*M*M*a**4*r*r*z-2*M*a**6*r*z**3+4*M*a**6*r*z*z-6*M*a**6*r*z-2*M*a**4*r**3*z*z-8*M*a**4*r**3*z+2*M*a**4*r**3-8*M*a*a*r**5*z+4*M*a*a*r**5+a**8*z**3+a**6*r*r*z**3+3*a**6*r*r*z*z+3*a**4*r**4*z*z+3*a**4*r**4*z+3*a*a*r**6*z+a*a*r**6+r**8
Cexp=s.Matrix([[2*M*a*a*r*U,2*M*a*r*q*V],[2*M*a*r*q*V,-q*Z]])/S**4
for name,t,c,ex in [('Cr',r,D,Cexp),('Cu',u,q,-Cexp)]:
 C=-(c*G.diff(t)).diff(t)/(2*S)+c*(G.diff(t)*Gi*G.diff(t))/(2*S)
 for i,j in [(0,0),(0,1),(1,1)]:chk(name+str((i,j)),C[i,j]-ex[i,j])
chk('rr explicit zero numerator',M*r*(3*a*a*u*u-r*r)*D+S*Prr-Qrr);chk('uu corrected zero numerator',M*r*(3*a*a*u*u-r*r)*q+S*Puu-Quu)
wrong=(M*r*(3*a*a*u*u-r*r)*q+S*Puu*q-Quu).subs({M:2,a:1,r:5,u:s.Rational(1,2)})
print('review historical wrong numerator',wrong,flush=True)
json.dump({'checks':out,'all_pass':all(v['zero_polynomial']for v in out),'historical_wrong_numerator':str(wrong),'method':'Exact rational cancellation; each resulting numerator polynomial in M,a,r,u has every coefficient zero. No numeric sampling used for identity checks.'},open(__file__.replace('.py','.json'),'w'),indent=2)
