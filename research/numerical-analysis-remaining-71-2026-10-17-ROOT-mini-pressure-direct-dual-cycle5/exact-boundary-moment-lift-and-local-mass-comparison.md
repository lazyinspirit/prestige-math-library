# Exact boundary-moment lift and local mass comparison

Research proof, 2026-10-18. This supplies a depth-independent primal comparison with the ACTUAL weak-divergence boundary moments preserved. It does not prove nonextinction, a recursive invariant state, or an original pressure estimate/counterexample. Gradient-pressure convention is used throughout: the moment functional is q -> (v,grad q).

## 1. Boundary moments and their uniform scalar dual bound

Let C_r=[-4r,4r]x[0,4r] have the same seven-node boundary pattern: root, two base corners, two top corners, and the side strip nodes at height epsilon_strip*r, with 0<epsilon_strip<=1/8. Boundary edges are not subdivided. Let Q_h be the FULL continuous P1 space on any conforming triangulation inside this container, including arbitrary recursive descendants. Constants are included for this local argument.

Every boundary node belongs to an edge of length at least c r: base corners and root belong to the coarse base edges, strip nodes to the long side edges above them, and top corners to a long side or top edge. For any constant c and any q in Q_h, the exact one-dimensional P1 edge Gram matrix therefore gives

    sum_(i boundary) |q(i)-c|²
        <= C r^(-1) ||q-c||_L2(boundary C_r)².              (1)

Indeed sum only over the long edges; their endpoint Gram matrices have smallest eigenvalue their length/6 and cover all seven nodes. No small-strip inverse factor appears.

Taking c=mean_(C_r) q, the rectangle trace inequality and Poincare give

    sum_i |q(i)-mean q|² <= C ||grad q||_L2(C_r)².           (2)

For completeness the scaled rectangle trace inequality follows by applying the one-dimensional fundamental theorem and Cauchy--Schwarz along the normal line to each side, then integrating along that side:

    ||v||_L2(boundary C_r)²
      <= C[r^(-1)||v||_L2(C_r)²+r||grad v||_L2(C_r)²].

The rectangle Poincare bound ||q-mean q||2<=Cr||grad q||2 follows by integrating squared differences along two coordinate segments. These bounds extend from piecewise smooth functions to H1 by density; continuous P1 functions already admit the needed line identities almost everywhere.

Let ell=(ell_i) be any seven coefficients with sum_i ell_i=0. Define L(q)=sum ell_i q(i). Equation (2) proves

    |L(q)|<=C||ell||_ell2 ||grad q||2.                     (3)

This constant is independent of epsilon_strip, the mesh minimum size, and recursion depth.

## 2. Explicit actual MINI lift

Give the boundary nodes arbitrary velocity vectors g_i. Take the P1 nodal extension l_g with these values and every interior nodal value zero. On each cell correct its mean with the mean-one MINI bubble beta_K:

    E_g|K=l_g|K-beta_K mean_K(l_g).

This is conforming because beta_K vanishes on every face. It has trace g and mean zero on every cell. Reference polynomial norm bounds give

    ||E_g||2² <= C sum_i w_i |g_i|²,                       (4)

where w_i is the ACTUAL area of all cells incident to boundary vertex i. It also has (E_g,grad q)=0 for every q in Q_h.

Solve the finite scalar Neumann problem modulo constants

    (grad chi,grad q)=L(q),   q in Q_h.                    (5)

Its stiffness form is positive definite on Q_h/constants because the container mesh is connected. Thus (5) has one gradient solution. Testing by chi and using (3) gives

    ||grad chi||2<=C||ell||_ell2.                          (6)

Now set

    V_ell|K=beta_K grad chi|K.

This is an actual conforming MINI velocity of zero boundary trace. Because mean beta_K=1,

    (V_ell,grad q)=(grad chi,grad q)=L(q),
    ||V_ell||2²=gamma_2 ||grad chi||2²,
    gamma_2=10/7.                                       (7)

Consequently v=E_g+V_ell has the EXACT prescribed trace and ALL prescribed moments: interior pressure nodal loads are zero, boundary loads are ell. Moreover

    ||v||2² <= C sum_i w_i |g_i|²+C||ell||_ell2².          (8)

This is a primal lift of the actual moment functional, not a replacement by zero flux. The compatibility sum ell=0 is necessary and sufficient, since constants have zero gradient. Every vector in (8) is an actual finite-mesh H1 velocity, but no uniform H1 bound is claimed; the scalar lift can use deep cells.

## 3. Actual local mass minimality and affine background

Suppose W is an ACTUAL source-free mixed mass response in C_r with boundary nodal trace g, zero interior pressure loads, and boundary moment coefficients ell. For any competitor v with the same trace and moments, d=v-W has zero boundary trace and (d,grad q)=0 for every local q. Extend d by zero to the surrounding mesh. It is a genuine global MINI weak-kernel test. Actual homogeneous momentum therefore gives

    (W,d)=0,
    ||v||2²=||W||2²+||d||2².

Thus W minimizes mass over precisely that affine constraint set. Combining with (8),

    ||W||2² <= C sum_i w_i |g_i|²+C||ell||_ell2².          (9)

Subtract any affine Darcy background b. Let its exact boundary moment vector be

    ell_bg,i=(b,grad lambda_i^boundary extension).

It is independent of the chosen interior extension: constant b has zero pairing with grad q for every q of zero boundary trace. Equivalently ell_bg,i is the exact boundary integral of the pressure boundary hat times b dot n. It satisfies sum ell_bg=0. The shifted response W-b has trace g-b and moment vector ell-ell_bg, and is again source-free with pressure shifted by b dot x. Hence

    ||W-b||2²
       <= C sum_i w_i |g_i-b|²+C||ell-ell_bg||_ell2².      (10)

No pressure boundary state, inherited pressure source, or ancestor moment is deleted. One may therefore represent a local response by the PRIMAL boundary data (g,ell), dimension 14+6=20, rather than the dual data (g,pressure modulo constants). Formula (10) gives an actual positive mass comparison on that full state. It does not show that its intrinsic size is controlled by one root contrast.

For a real strain response, the corresponding feasible-set minimization concerns ||v||2²+lambda^(-1)a(v,v). The present full-depth scalar lift does not give a uniform strain cost, so (9)--(10) are asserted for MASS only. A real-parameter comparison would require a separate moment lift supported on the fixed current annulus or an explicit strain estimate. It must not be inferred from (8).

## Remaining use

This closes one necessary interface in a possible continue-versus-reset comparison: a competitor can preserve the actual boundary weak-divergence moments rather than silently setting them to zero. To exclude a finite-depth cutoff one must still compare the cost using the ACTUAL intrinsic moment state to the continuation cost, or prove a relative recurrence. Formula (10) alone does not do this, and does not yield pressure observation growth.
