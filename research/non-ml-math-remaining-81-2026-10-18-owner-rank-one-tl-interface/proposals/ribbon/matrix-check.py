"""Exact fundamental checks; diagnostics, not substitutes for the all-rank proof."""
import json
import sympy as S

s = S.symbols('s', nonzero=True)
q = s**2
d = q+1/q
I = S.eye(2)
E = S.Matrix([[0,1],[0,0]])
F = E.T
K = S.diag(q,1/q)
cup = S.Matrix([0,1,-1/q,0])
cap = S.Matrix([[0,-q,1,0]])
kron = S.kronecker_product
P = S.Matrix([[1,0,0,0],[0,0,1,0],[0,1,0,0],[0,0,0,1]])
D = S.diag(s,1/s,1/s,s)
R = D*(S.eye(4)+(q-1/q)*kron(E,F))
c = P*R
U = -cup*cap
DE = kron(E,K)+kron(I,E)
DF = kron(F,I)+kron(K.inv(),F)

def zero(A):
    return all(S.simplify(x)==0 for x in A)

checks = {}
checks['cup_invariant_E_F_K'] = zero(DE*cup) and zero(DF*cup) and zero((kron(K,K)-S.eye(4))*cup)
checks['cap_invariant_E_F_K'] = zero(cap*DE) and zero(cap*DF) and zero(cap*(kron(K,K)-S.eye(4)))
checks['both_snakes'] = zero(kron(I,cap)*kron(cup,I)-I) and zero(kron(cap,I)*kron(I,cup)-I)
checks['loop_negative_delta'] = S.simplify((cap*cup)[0]+d)==0
checks['FS_negative_at_pivot_K'] = zero(K*S.Matrix([[0,-q],[1,0]]).T+S.Matrix([[0,-q],[1,0]]))
checks['R_intertwines'] = zero(R*DE-P*DE*P*R) and zero(R*DF-P*DF*P*R)
checks['c_formula'] = zero(c-s*S.eye(4)+U/s)
checks['U_quadratic'] = zero(U*U-d*U)
U1,U2 = kron(U,I),kron(I,U)
checks['U_TL_adjacent'] = zero(U1*U2*U1-U1) and zero(U2*U1*U2-U2)
checks['c_Yang_Baxter'] = zero(kron(c,I)*kron(I,c)*kron(c,I)-kron(I,c)*kron(c,I)*kron(I,c))
C1,C2=kron(c,I),kron(I,c)
checks['cup_slide_left'] = zero(C1*C2*kron(cup,I)-kron(I,cup))
checks['cup_slide_right'] = zero(C2*C1*kron(I,cup)-kron(cup,I))
checks['cap_slide_left'] = zero(kron(I,cap)*C1*C2-kron(cap,I))
checks['cap_slide_right'] = zero(kron(cap,I)*C2*C1-kron(I,cap))
checks['channel_eigenvalues'] = zero(c*cup+cup/s**3) and zero((c-s*S.eye(4))*(S.eye(4)-U/d))
T=q*U-S.eye(4)
checks['T_inverse_crossing_conversion'] = zero(T+s*c.inv())
checks['Hecke'] = zero((T-q*q*S.eye(4))*(T+S.eye(4)))

# Drinfeld map u=(ev_V tensor id)(c_(V,V*) tensor id)(id tensor coev_(V*)).
Ed = -(E*K.inv()).T
Fd = -(K*F).T
Dvd = S.diag(1/s,s,s,1/s)
cvd = P*Dvd*(S.eye(4)+(q-1/q)*kron(E,Fd))
u=S.zeros(2)
for a in range(2):
    for j in range(2):
        for b in range(2):
            u[j,a] += cvd[2*b+b,2*a+j]
checks['Drinfeld_u'] = zero(u-S.diag(s**-1,s**-5))
checks['twist_V'] = zero(u.inv()*K-s**3*I)
checks['twist_balance_channels'] = S.simplify(s**8/(s**3)**2-s**2)==0 and S.simplify(1/(s**3)**2-s**-6)==0

# A nonfundamental finite check sees the r=2 coefficient, and therefore [2]!.
weights2=[2,0,0,-2]
D22=S.diag(*[s**(a*b) for a in weights2 for b in weights2])
lam=q-1/q
R22=D22*(S.eye(16)+lam*kron(DE,DF)+q*lam**2/d*kron(DE**2,DF**2))
C12=kron(c,I,I)
C23=kron(I,c,I)
C34=kron(I,I,c)
blockflip=S.zeros(16)
for a in range(4):
    for b in range(4):
        blockflip[4*b+a,4*a+b]=1
checks['corrected_R_V2_V2_equals_block_crossing'] = zero(blockflip*R22-C23*C34*C12*C23)

assert all(checks.values()), checks
print(json.dumps({'symbolic_checks':checks,'count':len(checks),'parameters':'q=s^2; s nonzero; channel projector requires delta nonzero','scope':'exact symbolic fundamental module, not a universal-R or tilting proof'},indent=2))
