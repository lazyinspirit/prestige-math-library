# Four pressure-observable coarse sources with uniform initial contrast

Research proof, 2026-10-18. This uses a REFLECTION-SYMMETRIC finite template, an explicit admissible modification of the research geometry. It normalizes the restricted four-source family in the pressure-observable bridge. It does not prove propagation or fractional divergence.

## 1. Symmetric mesh and fixed coarse source family

Use the convex pentagon D and two unchanged coarse triangles K_-,K_+ from the six-source normalization note. Require the actual C mesh to be invariant under S(x,y)=(-x,y). This can be achieved by placing two mirror-image protected fan patterns in its right and left halves, with mirrored holes/filler and paired reflected descendant templates, and using the same terminal depth on every branch. Each protected fan and all its holes lie strictly in its OWN single affine macrozone; no fan triangle crosses the symmetry interface x=0. The checked logarithmic corner lift is affine on the right fan/holes and zero on the left, with its reflected version interchanging the roles. All interfaces are retained in the finite filler triangulation. This is a geometry requirement of this construction, not a claim that the previous one-sided mesh was already symmetric.

Let w_j, j=1,...,4, be the standard coarse MINI bubbles b_K e_i on K_-,K_+, extended by zero. The bridge note constructs four fixed smooth exactly solenoidal sources u_j such that

    R_h u_j=w_j

on EVERY depth, using the six-actuator invertible coarse moment map. Their H² bounds and the w_j H1 bounds are independent of depth. We prove

    max_j |L(P_hu_j,phi_j)|>=c_N>0,                       (1)
    L(v,phi)=v(o) dot t+[phi(c_+)-phi(o)]/(4r).

The constant may depend on the ONE fixed finite template N and its shape bound, but not on the refinement depth. Uniformity in N is not claimed or needed for (1).

## 2. The adjoint and small coarse bubble moments

Use the SAME adjoint problem as in the six-source note:

    (w,z)+(z,grad p)=z(o) dot t,
    (w,grad q)=[q(c_+)-q(o)]/(4r).                         (2)

Write w|K=lambda_o a+b_K c_K on the two unchanged coarse triangles. Put

    e=max_j |(w_j,w)|.

Bubble momentum testing of (2) has zero velocity right-hand side. Hence

    |grad p|K|<=C e.                                     (3)

This follows directly from (w,b_K e_i)+(integral_K b_K)partial_i p=0, not from a bound on the individual velocity coefficients. More explicitly

    c_K=-(14/27)a+O(e),
    mean_K w=a/10+O(e).                                  (4)

All constants in (3)--(4) are fixed coarse-cell constants.

Let q_d be the global pressure hat of the bottom vertex d. It is supported ONLY on K_-,K_+, and the right side of (2) is zero for q_d. On both cells grad q_d=(0,-1/(4r)). Their equal areas are 8r². Equations (2),(4) give

    0=(w,grad q_d)=-(2r/5)a_n+O(e),
    |a_n|<=C e,                                         (5)

where n=(0,1), t=(1,0). Gauge p(o)=0. Equation (3) makes all three base values p(c_-),p(o),p(c_+) of order e. No bound on a_t is asserted.

## 3. A well-posed local C response with mixed pressure boundary conditions

Restrict (2) to C. Its velocity trace is zero at every boundary vertex except o, where it is a. Its pressure trace on the coarse base is the three prescribed values just bounded. For pressure tests vanishing on that WHOLE base, its weak-divergence load is zero, since the global G is supported at o,c_+. Its interior velocity tests have zero force.

This local problem is uniquely solvable for any boundary velocity and base pressure trace. One elementary proof eliminates the zero-boundary velocity unknown using its L2 orthogonal projector R_0. Its velocity space contains every cell bubble, so

    (R_0grad q,grad q)>=gamma_2^(-1)||grad q||2²,
    gamma_2=10/7,

for every continuous P1 q vanishing on the base. The stiffness seminorm is a norm on this pressure space because its base trace is zero. A neutral boundary velocity lift and any H1-bounded extension of the three base values then give

    ||w_response||2<=C[||E_g||2+||grad P_base||2].          (6)

Only depth-uniform lift bounds are needed. Set the other four boundary pressure nodal values to zero and use the checked logarithmic seven-node pressure lift; this gives a bound C_N for (6), independent of descendant depth. The neutral velocity lift has a depth-uniform mass bound. Thus perturbing root normal velocity and all three base pressures by O(e) changes the local velocity in L2(C) by at most C_N e.

## 4. Exact parity reference and contradiction

Let w_ref be the local response of Section 3 with root velocity a_t t, zero other velocity trace, and zero base pressure trace. All its pressure tests vanishing on the base have zero divergence load. Uniqueness and the reflection invariance of the actual mesh imply

    w_ref(SX)=-S w_ref(X),
    p_ref(SX)=-p_ref(X).                                 (7)

Indeed applying (w,p)->(-S w(SX),-p(SX)) preserves this problem and the root tangential trace. The global root pressure hat q_o restricts to an even scalar P1 function on C. Therefore

    (w_ref,grad q_o)_C=0.                                (8)

The difference between the actual restriction w and w_ref has root normal trace O(e) by (5) and base pressure values O(e) by (3). Equation (6) gives ||w-w_ref||L2(C)<=C_N e. The pressure root hat has gradient supported on the INITIAL root-star triangles, which are unchanged under descendant replacement. Its gradient norm on C is a fixed finite number independent of depth. Thus

    |(w,grad q_o)_C|<=C_N e.                             (9)

The two coarse-cell contributions also satisfy

    (w,grad q_o)_(K_- union K_+)
        =(2r/5)a_n+O(e)=O(e).                            (10)

Here the two coarse gradients of lambda_o have opposite tangential components and equal normal components; their common velocity mean is a/10+O(e). Combining (9)--(10) with the EXACT global root pressure equation in (2) yields

    1/(4r)=|(w,grad q_o)|<=C_N e.

Hence e>=c_N>0 uniformly in descendant depth. Reciprocity gives

    (u_j,w)=(R_hu_j,w)=(w_j,w)
            =L(P_hu_j,phi_j),

which proves (1).

## Remaining logical chain

The four u_j are now BOTH admissible pressure-observable sources in the bridge AND uniformly coupled to the initial root contrast. To refute the original smooth pressure clause it would suffice to prove actual physical H^s divergence, for some s<1/4, of P_hu_j for at least one of them along a subsequence. The existing nonextinction/relative-state gap remains. An absolute weighted-error budget does not by itself rule out a finite-depth cutoff.

This note is mass-only. An actual-strain parity comparison would require its own local uniform response estimate. It is unnecessary for the pressure-observable bridge, which obtains the real pressure output from mass roughness through the exact spectral decomposition.

## Quantified addendum: replace the raw root hat by a cheap base-trace extension

The fixed finite constant in (9) can be controlled by the already checked pressure lifts instead of the potentially large gradient of the raw mesh root hat. Let H_- and H_+ be reflected corner pressure lifts on C, with base corner traces (1,0,0) and (0,0,1), respectively, and ||grad H_±||_2<=K_log. Set

    q_new=1-H_--H_+ on C.

It has exactly the SAME piecewise affine base trace as the root hat: zero at c_± and one at o. It is even under reflection. Above C its other boundary values are free, which is allowed: the local pressure tests in Section 3 need vanish only on the BASE. Therefore q_new-q_o is an admissible zero-base pressure test for both the actual local response and the parity reference, and

    (w,grad q_new)_C=(w,grad q_o)_C,
    (w_ref,grad q_new)_C=0.

Extend q_new below C by the unchanged coarse root hat. This gives a global continuous P1 pressure test; any mean correction has zero gradient and does not change G. Its global G value is exactly -1/(4r), as before.

The base pressure perturbation O(e) has actual extension gradient at most C K_log e. The root normal perturbation O(e) has a neutral mass lift at most C e (indeed C sqrt(a)e under the sharp root-star geometry). Hence the local mass comparison gives

    ||w-w_ref||_2 <= C(1+K_log)e.

Since ||grad q_new||_2<=2K_log, the upper C moment is at most C(1+K_log)^2 e. The two bottom coarse moments remain O(e) with fixed constants. Consequently the original source bound can be quantified as

    max_j |L(P_hu_j,phi_j)| >= c/(1+K_log)^2,            (11)

with c depending only on the unchanged coarse geometry, r, and fixed reference MINI constants. It does not contain the raw root-hat gradient or a hidden descendant-depth factor. For the checked logarithmic construction K_log^2<=C(1+log(1/epsilon_strip)), the lower bound is inverse-logarithmic in the fixed template parameters. The four smooth source H2 bounds remain fixed by the unchanged coarse moment map.

This addendum strengthens the source normalization only. It does not establish spectral-residue visibility without the corresponding actual left-row/invariant-subspace estimate.
