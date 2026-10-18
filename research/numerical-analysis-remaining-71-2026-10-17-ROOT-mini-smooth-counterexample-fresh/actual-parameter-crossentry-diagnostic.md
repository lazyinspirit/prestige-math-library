# Actual canonical-strain parameter DtN and source-to-pressure crossentry

Research exact-arithmetic computation, 2026-10-18. This extends the fully specified one-child conforming triangular template from `actual-coupled-dtn-recursion.md`. It computes actual coupled resolvents and the mass-potential subtraction. It is not a branching-template calculation or an original pressure counterexample. No canonical/runtime/hash/readiness files, tests or gates were touched.

## Canonical local block, including the parameter-dependent bubble elimination

For a triangle K of area V, put g_i=grad lambda_i and b=27 lambda_0 lambda_1 lambda_2. The exact bubble-gradient tensor is

    T=integral_K grad b tensor grad b
       =(81/20)V sum_i g_i tensor g_i.                       (1)

Indeed the normalized fourth-degree barycentric moments in the products of bubble derivatives are 1/90 when the omitted barycentric index agrees and 1/180 otherwise; sum_i g_i=0 gives (1).

The canonical bilinear form is 2nu integral eps(u):eps(v). Its P1 block is

    E_(i alpha,j beta)=nu V[delta_(alpha beta)g_i dot g_j
                                          +(g_i)_beta(g_j)_alpha]. (2)

Bubble-to-P1 stiffness is zero because integral_K grad b=0. The two-dimensional bubble block, including the resolvent parameter, is

    D_bb=lambda V(81/280)I+nu[trace(T)I+T].                  (3)

It is generally not scalar. The coupling of the retained nodal/pressure variables to the bubble is

    L_(i alpha,b)=lambda V(3/20)e_alpha,
    L_(pressure i,b)=V(9/20)g_i.                             (4)

The uncondensed retained block has velocity lambda M_P1+E, pressure coupling V g_j/3, and zero pressure-pressure block. The actual local condensed block is

    D_K(lambda,nu)=A_retained-L D_bb^(-1)L^T.                (5)

In particular one cannot reuse the static mass constants at positive viscosity. For a compact smooth-solenoidal source whose raw affine moments vanish and whose raw bubble moment is B, the exact condensed source is

    f_retained= -L D_bb^(-1)B.                              (6)

Equation (6) includes its induced pressure load. Setting lambda=1,nu=0 recovers the actual mass-projection block and source from the earlier note.

## Recursive parameter scaling

For reference size one and viscosity one, a child ratio r=1/2 has parameter lambda r^2. With pressure scaled by local size, the child contribution is

    R_r^T D_m(lambda r^2,nu) R_r,
    R_r=diag(I_velocity,r I_pressure).                      (7)

The exact code assembles the six actual filler triangles, inserts (7), and eliminates the nine child-boundary variables. Every depth uses its own recursively updated child DtN. For the mass comparator it uses lambda=1,nu=0 in the same formula; this is equivalent to the earlier mass-specific scaling because the local pressure Schur block then has the reciprocal lambda dependence.

## Fixed genuine source and observation

The unchanged source triangle is K=(A0,A1,B1) in the explicit template. Choose one fixed psi in Cc-infinity(K) with integral psi=0 and u=J grad psi satisfying

    (u,b_K)=(1,0).

The established moment-independence argument realizes these conditions. All raw affine moments vanish. This u is smooth, no slip and exactly solenoidal, with norms independent of recursion depth. Its force enters through (6), not a freely substituted root-only nodal load.

Choose one fixed q_src in Cc-infinity(K), of mean zero, with barycentric moments

    ((q_src,lambda_A0),(q_src,lambda_A1),(q_src,lambda_B1))
          =(1,-1,0).                                      (8)

Finite-dimensional smooth moment duality realizes (8). Its L2 projection to Q_h has uniformly bounded norm, and pairing any actual P1 pressure with q_src is exactly its A0 coefficient minus its A1 coefficient. The norms of these fixed functions are not numerically estimated or normalized away.

Let the actual body-force resolvent satisfy

    lambda(v,v_h)+a_nu(v,v_h)+b(v_h,pi_lambda)=(u,v_h),
    b(v,q_h)=0.

Let phi_u be the actual mass-projection multiplier,

    (P_Zh u,v_h)+b(v_h,phi_u)=(u,v_h).

The homogeneous actual Stokes orbit with initial value P_Zh u has Laplace pressure

    p_hat(lambda)=pi_lambda-phi_u.                          (9)

The code subtracts these two actual pressure observations. The fixed source also has Pi_hu=0 for the face-average-plus-cell-mean Fortin map, so the special defect Pi_hu-u is -u; this supplies the corresponding homogeneous defect observation up to sign. No assertion that other terms in the original smooth error cannot cancel it is made.

## Independent exact lift representation

For the same smooth observation, solve the actual parameter lift by the same mixed matrix with zero velocity load and pressure-constraint load (8). Call it W_lambda q. Its source-triangle bubble coefficient is c_(W_lambda,K). Symmetry of the actual mixed matrix gives

    (pi_lambda,q_src)=(u,W_lambda q)
                           =(1,0) dot c_(W_lambda,K).       (10)

The last equality uses the actual raw affine moments of u. The mass lift W_h gives the same identity for phi_u. Thus the independently recovered bubble difference must equal the actual pressure residue (9); this keeps the source admissibility and pressure subtraction visible.

`exact_parameter_triangle_dtn.py` computes both sides of (10), including their mass comparators, with exact Python Fraction arithmetic. `exact-parameter-triangle-dtn-result.json` saves all twelve actual parameter DtN matrices and crossentries. Every saved reciprocity equality holds exactly.

## Finite computed values and limits of the diagnostic

The following decimal values are rounded displays of the saved exact rational numbers. They are the unnormalized observations lambda^(1/4)|(p_hat,q_src)|, not pressure norms.

| Depth | lambda=1 | lambda=16 | lambda=256 | lambda=4096 |
|---|---:|---:|---:|---:|
| 1 | 1.311229 | 2.571632 | 3.984479 | 2.088117 |
| 2 | 1.203970 | 2.364963 | 3.688457 | 1.827614 |
| 3 | 1.201791 | 2.360932 | 3.684968 | 1.821099 |

These finite values exhibit no counterexample. There is only one child and no proved limiting or uniform parameter statement. The apparatus can be applied to a branching template once its actual finite vertex coordinates, triangle connectivity and child-boundary embeddings have been supplied. The present existence-only toothed-filler description is not such a mesh file; generating numerical matrices for it without those inputs would invent geometry.

Even an unbounded positive-real-parameter residue on an actual branching family would require the owner's finite-horizon Laplace argument, compatible original initialization and control of all remaining error terms. The nonlinear original scheme would additionally require an actual nonlinear realization. The code does not replace any of those steps by a static mass-gradient pollution example.
