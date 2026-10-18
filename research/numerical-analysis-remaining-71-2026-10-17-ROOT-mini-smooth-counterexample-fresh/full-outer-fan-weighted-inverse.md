# Full outer-fan inverse with designated child-root detection

Research proof, 2026-10-18. This solves the scalar outer-node mass block exactly in a geometry-independent weighted norm and retains the actual exterior mass reaction. It is a local algebra/energy interface, not a completed recursive pressure counterexample. No canonical/runtime/hash/readiness changes or tests.

## Exact actual mixed test and full outer-node equations

Let F be the entire radial parent fan with root 0, prescribed actual root velocity a, and outer nodes i, including ramps, guards and reserve-base endpoints. Every parent triangle contains the root and two outer vertices. Let W=P_Zh u with mass multiplier phi be an actual mass projection, and assume the supports of the tests below are disjoint from the fixed smooth source u. Fix one constant unit direction t and one scalar incoming pressure component p_0. Neither is selected separately at every node.

For outer node i use its actual nodal hat, corrected by -(14/27)b_K on parent-fan cells, but by -(20/27)b_K on its EXTERIOR cells. This is a continuous actual MINI test: the bubble corrections do not change its trace. Its parent bubble moment is zero, so parent mass elimination is exactly the condensed C block. Its exterior unweighted cell means vanish, so the exterior pressure pairing is exactly zero. The equation is therefore

    sum_(K parent incident i)|K|
       [16 b_i+b_j+a_t+18 p_(K,t)]/180 +R_i=0,             (1)

where b_i=W(i) dot t, j is the other outer vertex of K, a_t=a dot t, p_(K,t)=grad phi|K dot t, and

    R_i=(W,E_i^ext),
    E_i^ext|K=(lambda_i-(20/27)b_K)t

on exterior cells incident to i, zero elsewhere. Thus pressure impedance is not estimated or omitted in R_i: its pairing with this specific exterior test vanishes exactly.

For ANY constant vector c, R_i=(W-c,E_i^ext), by its cell means. This subtraction does not discard a boundary velocity or pressure reaction: it is a literal vanishing integral against this actual test.

Define

    A_i=sum_(K parent incident i)|K|,
    W_ij=sum_(K parent containing i,j)|K|,
    P_i=A_i^(-1)sum_(K parent incident i)|K|p_(K,t),
    w_i=b_i+p_0,  A=a_t+p_0.

Equation (1) is exactly

    16w_i+sum_j (W_ij/A_i)w_j+A=e_i,
    e_i=-18(P_i-p_0)-180R_i/A_i.                          (2)

All outer rows remain in this system. In particular guard values are solved with the block rather than inserted as an arbitrary uncontrolled constant d_b.

## Geometry-independent full-block inverse

Put B_ij=W_ij/A_i. Each parent triangle gives exactly one other outer neighbor, so B has nonnegative entries and row sum one, including end/ramp vertices. Moreover A_iB_ij=W_ij=W_ji=A_jB_ji. Hence B is self-adjoint in the weighted space

    ||v||_A^2=sum_i A_i|v_i|^2.

Jensen and the row/column balance give ||B||_(A->A)<=1, so every eigenvalue lies in [-1,1]. Thus 16I+B is positive definite, has inverse norm at most 1/15, and

    (16I+B)^(-1)1=1/17.

Consequently the exact actual solution of (2) satisfies

    ||w+(A/17)1||_A <=(1/15)||e||_A.                    (3)

No minimum angle, graph distance, minimum cell size, or N-dependent inverse constant enters (3). These enter separately in geometry/reset estimates, not in this finite scalar block.

Let E_p=||grad phi dot t-p_0||L2(F) and E_R^2=sum_i R_i^2/A_i. Jensen, counting the two outer vertices of each parent triangle, yields

    sum_i A_i|P_i-p_0|^2<=2 E_p^2.

Therefore the error in (3) obeys the concrete bound

    D:=||w+(A/17)1||_A
             <=[18sqrt(2)E_p+180E_R]/15.                (4)

Pressure-gradient deviations on guard/ramp cells are included in E_p; they have not been assigned zero or inferred small from their area alone.

## Exact exterior star-budget estimate

Let E_i be the total exterior triangle area incident to outer node i, and suppose the actual geometry gives E_i<=epsilon_Q A_i. The scalar exterior functions zeta_i=lambda_i-(20/27)b have local Gram diagonal 13/126 and off-diagonal 5/252. Its largest eigenvalue is exactly 1/7. Thus for arbitrary real nodal coefficients xi_i,

    ||sum_i xi_i E_i^ext||2^2
       <=(1/7)sum_i E_i xi_i^2
       <=(epsilon_Q/7)||xi||_A^2.

Duality now proves, for the ACTUAL velocity and any constant background c,

    E_R <=sqrt(epsilon_Q/7)||W-c||L2(exterior stars).      (5)

This is an actual mass reaction estimate. It needs no bound on the exterior pressure impedance, and does not assume the exterior velocity equals its boundary trace extension. Every exterior cell in these node stars is included; source overlap, if present at an initial coarse level, would add its actual load rather than disappear.

## Designated child roots, guards and inherited pressure resets

Let J be the designated child-root subset, with total star weight A_J=sum_(i in J)A_i. Restricting (3) to J gives

    ||w||_(A,J)>=|A|sqrt(A_J)/17-D.                      (6)

If the actual child-root contrast of interest is d_i=w_i+h_i, where h_i contains inherited half-trace pressure/reset errors and the difference between the fixed t and each true base tangent, then

    ||d||_(A,J)>=|A|sqrt(A_J)/17-D-||h||_(A,J).           (7)

For example D+||h||_(A,J)<=|A|sqrt(A_J)/34 gives the quantitative designated-root lower bound ||d||_(A,J)>=|A|sqrt(A_J)/34. The negative transfer is thus established on the **selected roots**, not merely in an aggregate that could live on guards.

In the actual toothed geometry A_J is a fraction comparable to the reserve-width factor sigma of the full parent outer star weight. Thus squared relative error estimates cost 1/sigma when (7) is normalized by the full fan area. This factor is explicit; it is not claimed universal if sigma changes. Converting A_i to each child's physical area adds the actual fixed ratio r_i/d_i, which must also remain in the energy recurrence.

The normal component of a pressure gradient is not multiplied by s/d here. Rotation from the fixed t to a true edge tangent produces the ordinary angular error O(delta)|grad phi|; that term is part of h or E_p and must be charged to actual local energy by the owner's reset estimates. No pressure reset or affine-background quotient is assumed without that estimate. Formula (7) is ready for the full inherited-state recurrence, but does not prove its pressure/reset hypotheses itself.

## Exact finite full-side-chain diagnostic

The accompanying `exact_full_side_chain.py` solves a genuine fixed-length straight side [0,1/2] with root (1,-1/N), r=1/(10N), and 5N/2 adjacent true five-triangle rectangular children. All shared endpoint velocity and pressure rows are assembled. It uses exact three-by-three block Thomas elimination after local mixed Schur elimination, and optimizes the one incoming root pressure value over real data. The saved `exact-full-side-chain-result.json` contains the exact rational child quotient energies.

For N=4,8,16, the optimized child quotient energy divided by total child area is approximately 0.000503012, 0.000501922, 0.000503487. These are finite exact-arithmetic diagnostic values, not a limiting theorem. They differ from the shrinking two-child Dirichlet-window diagnostic, whose normalized quotient energy decreased with N. Hence the latter must not be used as evidence that a complete fixed-length chain loses its transfer. Neither diagnostic is the recursive toothed template or an original pressure counterexample.

## Guard-safe localization when the small star budget is not global

The inverse proof does not require the small exterior-star hypothesis. In particular G1 proved only for selected attachment centers is NOT enough by itself to use (5) for the entire outer block. Retain every exceptional guard/ramp/base row as follows.

Partition the outer vertices into G and H, with errors e_G and e_H extended by zero. Let L be the graph distance from the designated roots J to H in the actual outer adjacency graph (an absent path has infinite distance). For every k<L, the matrix block from H to J of B^k vanishes. The convergent exact Neumann series and ||B||_A<=1 therefore give

    ||1_J(16I+B)^(-1)e_H||_A
        <= (16^(-L)/15)||e_H||_A.                         (8)

Hence the actual designated-root error obeys the stronger localized bound

    ||w+(A/17)1||_(A,J)
       <= [||e_G||_A+16^(-L)||e_H||_A]/15.                (9)

All bad-row pressure and exterior reactions remain in e_H with their exact values from (2). No sign, cancellation, or guessed guard velocity is needed. For example if E_i/A_i<=epsilon_Q on G and <=Q_H on H, the same Gram duality, applied to coefficients supported in the respective sets, bounds the reaction terms by sqrt(epsilon_Q/7)||W-c|| and sqrt(Q_H/7)||W-c||. The bad contribution is then multiplied by 16^(-L). Similarly a bad-row pressure error is bounded by its actual local pressure norm, followed by the same attenuation.

Thus either a global small star budget or an actual separation/budget proof suffices. Neither is assumed automatically from selected-center G1. For a given finite template L and Q_H are explicitly geometric quantities; the existence of a large L and controlled Q_H must be verified on that template before claiming a small error coefficient. The estimate applies to all graph components and nonuniform areas without modification.

For the currently proposed template, `../N-ROOT-mini-fractional-projection-cycle4/current-annulus-joint-neutral-lift-bound.md`, the section "A simultaneous thin-collar refinement", supplies an explicit OPTIONAL template choice giving E_i<=epsilon_Q A_i on ALL fan vertices, including guards and ramps. It preserves the assigned three-node child bases and keeps additional long background edges below the mandatory fine-buffer line. This is the appropriate stated construction to invoke in (5); it is stronger than the original selected-center G1. The small pressure-reset estimate must likewise cover all fan triangles entering E_p, including short ramps. A mainfan-only reset estimate cannot be inserted into (4) without either its ramp extension or the explicit localization (9).
