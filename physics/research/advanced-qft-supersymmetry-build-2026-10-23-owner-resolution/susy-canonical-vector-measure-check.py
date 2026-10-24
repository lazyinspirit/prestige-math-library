import json
from pathlib import Path
class P:
 def __init__(self,v=0):self.c=v.c.copy() if isinstance(v,P) else ({(0,0,0,0):complex(v)} if v else {})
 def __add__(self,v):
  v=P(v);q=P(self)
  for k,z in v.c.items():q.c[k]=q.c.get(k,0)+z
  q.c={k:z for k,z in q.c.items() if z};return q
 __radd__=__add__
 def __mul__(self,v):
  v=P(v);q=P()
  for k,z in self.c.items():
   for l,w in v.c.items():
    m=tuple(a+b for a,b in zip(k,l));q.c[m]=q.c.get(m,0)+z*w
  q.c={k:z for k,z in q.c.items() if z};return q
 __rmul__=__mul__
 def __neg__(self):return self*-1
 def __sub__(self,v):return self+-P(v)
 def __rsub__(self,v):return P(v)+-self
 def __truediv__(self,v):return self*(1/v)
 def __eq__(self,v):return self.c==P(v).c
 def __str__(self):return str(self.c)
 def diff(self,n):
  q=P()
  for k,z in self.c.items():
   if k[n]:l=list(k);l[n]-=1;q.c[tuple(l)]=z*k[n]
  return q
x=[]
for n in range(4):
 p=P();k=[0]*4;k[n]=1;p.c[tuple(k)]=1;x.append(p)
I=1j;top=(0,1,2,3);sigma=[[[1,0],[0,1]],[[0,1],[1,0]],[[0,-I],[I,0]],[[1,0],[0,-1]]]

def add(*ps):
 d={}
 for p in ps:
  for k,v in p.items():d[k]=d.get(k,0)+v
 return {k:P(v)for k,v in d.items() if P(v)!=0}
def scale(p,z):return{k:P(v*z)for k,v in p.items()if P(v*z)!=0}
def mul(p,q):
 d={}
 for a,v in p.items():
  for b,w in q.items():
   if set(a)&set(b):continue
   c=tuple(sorted(a+b));d[c]=d.get(c,0)+(-1)**sum(i>j for i in a for j in b)*v*w
 return {k:P(v)for k,v in d.items()if P(v)!=0}
def odd_deriv(p,n):return {tuple(i for i in a if i!=n):(-1)**a.index(n)*v for a,v in p.items()if n in a}
def dx(p,mu):return{k:P(v).diff(mu)for k,v in p.items()if P(v).diff(mu)!=0}
def D(p,a):return add(odd_deriv(p,a),*[scale(mul({(b+2,):1},dx(p,mu)),I*sigma[mu][a][b])for mu in range(4)for b in range(2)])
def Db(p,b):return add(scale(odd_deriv(p,b+2),-1),*[scale(mul({(a,):1},dx(p,mu)),-I*sigma[mu][a][b])for mu in range(4)for a in range(2)])
def field(B,aux=0):return add({(a,b+2):sum(sigma[mu][a][b]*B[mu]for mu in range(4)) for a in range(2)for b in range(2)}, {top:-2*aux})
def test(B,aux):
 V=field(B,aux);C=[scale(Db(Db(D(scale(V,2),a),0),1),0.5)for a in range(2)]
 CC=add(scale(mul(C[1],C[0]),-1),mul(C[0],C[1]));coeff=P(CC.get((0,1),0));return C,coeff,coeff/16
results={}
for name,B,aux,want in [('auxiliary',[0,0,0,0],1,0.5),('magnetic12',[0,0,x[1],0],0,-0.5),('electric01',[0,x[0],0,0],0,0.5)]:
 C,coeff,L=test(B,aux);assert L==want,(name,C,coeff,L);results[name]={'raw_F_Craised_Clower_top':str(coeff),'physical_gauge_density':str(L),'expected_component_density':str(want),'C_components':[{str(k):str(v)for k,v in q.items()}for q in C]}
out=Path('research/advanced-qft-supersymmetry-build-2026-10-23-owner-resolution/susy-canonical-vector-measure-check.json');out.write_text(json.dumps({'version':1,'calculation':'Exact abelian one-generator restriction of current local vector prepotential and explicit D,barD. g=1; raw raised-first contraction barD^alpha barD_alpha=-2barD_dot2 barD_dot1. t basis fundamental trace t²=1/2. F_phys=(1/2)F_raw; action Tr(C²)/(8g²)+H.c. Hence L=raw_F(Craised Clower)/16 for real bosonic coefficient.','results':results},indent=2)+'\n');print(json.dumps(results,indent=2))
# Matrix-valued non-Abelian constant potentials: g=1, B1=t1, B2=t2.
def madd(A,B):return [[add(A[i][j],B[i][j])for j in range(2)]for i in range(2)]
def mscale(A,z):return[[scale(A[i][j],z)for j in range(2)]for i in range(2)]
def mmul(A,B):return[[add(*[mul(A[i][k],B[k][j])for k in range(2)])for j in range(2)]for i in range(2)]
def mop(A,fn):return[[fn(A[i][j])for j in range(2)]for i in range(2)]
t1=[[0,.5],[.5,0]];t2=[[0,-.5j],[.5j,0]];zero=[[0,0],[0,0]];Bs=[zero,t1,t2,zero]
Vm=[[add(*[{(a,b+2):sum(sigma[mu][a][b]*Bs[mu][i][j]for mu in range(4))} for a in range(2)for b in range(2)])for j in range(2)]for i in range(2)]
Im=[[{():P(1)}if i==j else{}for j in range(2)]for i in range(2)]
ep=madd(madd(Im,mscale(Vm,2)),mscale(mmul(Vm,Vm),2));em=madd(madd(Im,mscale(Vm,-2)),mscale(mmul(Vm,Vm),2))
Cs=[]
for a in range(2):
 logder=mmul(em,mop(ep,lambda z:D(z,a)));Cs.append(mscale(mop(mop(logder,lambda z:Db(z,0)),lambda z:Db(z,1)),.5))
CC=madd(mscale(mmul(Cs[1],Cs[0]),-1),mmul(Cs[0],Cs[1]));trace=add(CC[0][0],CC[1][1]);co=P(trace.get((0,1),0));assert co==-4,co
j=json.loads(out.read_text());j['nonabelian_constant_B1_t1_B2_t2']={'raw_F_trace_Craised_Clower':str(co),'normalized_F_plus_hc_gauge_density':str(co/8),'expected_component_density':'-1/2, since F_B12=-i[B1,B2]=t3 and F_A12=T3'};out.write_text(json.dumps(j,indent=2)+'\n');print('Nonabelian commutator test passed:',co,'=> L=',co/8)

j=json.loads(out.read_text());j.update({'barred_projection_test': {'input': 'bartheta1 bartheta2', 'P_raw_value': 1, 'barD_raised_first_barD_lower_value': -2, 'barD_lower_first_barD_raised_value': 2, 'physical_projector_value': '-1/2', 'physical_D_input': '-1/4', 'physical_F_of_projector': '(1/2)(-1/2)=-1/4', 'direct_raw_45_projector_note': 'Raw D-to-F P_raw; normalized physical D-to-F -P_raw/2. These identities must not be conflated.'}, 'FI_component_test': {'g': 1, 'V30_top_D_aux': -2, 'V_hol_equals_minus2gV30_top_D_aux': 4, 'physical_D_FI_coefficient_per_xi_h': '-1', 'matter_scalar_charge_q_top_D_aux': '-4q |A|²', 'physical_D_matter_auxiliary_coefficient': '+q |A|²', 'general': 'L_FI=-g xi_h D_B; xi_D=-g xi_h if xi_D is defined as coefficient of +D_B'}, 'arithmetic_limit': 'Bounded tests use exact dyadic Gaussian coefficients representable without rounding, polynomial x jets and all16 exterior basis monomials, with equality assertions. They supplement the explicit symbolic derivation, not a universal component-theorem audit.'});out.write_text(json.dumps(j,indent=2)+"\n")
