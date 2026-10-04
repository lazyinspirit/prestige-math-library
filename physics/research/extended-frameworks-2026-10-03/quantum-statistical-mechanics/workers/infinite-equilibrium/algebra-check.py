from pathlib import Path
import math,cmath,json
p=Path(__file__).parent
I=[[1+0j,0j],[0j,1+0j]];X=[[0j,1+0j],[1+0j,0j]];Z=[[1+0j,0j],[0j,-1+0j]]
def eye(n):return [[complex(i==j) for j in range(n)] for i in range(n)]
def add(A,B):return [[a+b for a,b in zip(x,y)] for x,y in zip(A,B)]
def scale(A,s):return [[s*a for a in row] for row in A]
def mul(A,B):return [[sum(A[i][k]*B[k][j] for k in range(len(B))) for j in range(len(B[0]))] for i in range(len(A))]
def kron(A,B):return [[A[i][j]*B[k][l] for j in range(len(A[0])) for l in range(len(B[0]))] for i in range(len(A)) for k in range(len(B))]
def trace(A):return sum(A[i][i] for i in range(len(A)))
def frob(A):return math.sqrt(sum(abs(a)**2 for row in A for a in row))
def expm(A):
 term=eye(len(A));res=term
 for n in range(1,100):term=scale(mul(term,A),1/n);res=add(res,term)
 return res
H=add(kron(Z,Z),scale(add(kron(X,I),kron(I,X)),.4));A=kron(Z,I);B=add(kron(Z,I),kron(I,X));beta=.7;t=.3
E=expm(scale(H,-beta));rho=scale(E,1/trace(E))
def alpha(B,z):return mul(mul(expm(scale(H,1j*z)),B),expm(scale(H,-1j*z)))
upper=trace(mul(mul(rho,A),alpha(B,t+1j*beta)));cycled=trace(mul(mul(rho,alpha(B,t)),A));assert abs(upper-cycled)<1e-12
D=scale(add(mul(H,A),scale(mul(A,H),-1)),1j);eps=1e-6;difference=add(scale(add(alpha(A,eps),scale(A,-1)),1/eps),scale(D,-1));assert frob(difference)<2e-5
K=add(H,scale(kron(X,I),.2));logdiff=abs(cmath.log(trace(expm(scale(H,-beta))))-cmath.log(trace(expm(scale(K,-beta)))));assert logdiff<=beta*.2+1e-12
B=kron(I,X);smallt=.04;comm=add(mul(alpha(A,smallt),B),scale(mul(B,alpha(A,smallt)),-1));mu=.5;kappa=1.4;M=2;R=1;bound=2*math.exp((2*kappa*M*math.exp(mu*R))*smallt-mu);assert frob(comm)<=bound
report={'noncommuting_two_site_kms_boundary_error':abs(upper-cycled),'generator_finite_difference_error':frob(difference),'logZ_norm_comparison':'pass','small_time_path_bound_frobenius_sufficient_check':'pass','qualification':'Independent finite-matrix power-series numerical spot checks only, not proof certification; hbar=1 and chosen numerical energy/time units.'};(p/'algebra-check-results.json').write_text(json.dumps(report,indent=2)+'\n');print(json.dumps(report))
