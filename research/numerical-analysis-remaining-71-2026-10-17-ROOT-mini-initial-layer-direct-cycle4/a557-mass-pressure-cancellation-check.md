# A557 checked against the actual smooth initialization

Research-only check, 2026-10-18. Downloaded Juntunen--Stenberg, *Analysis of finite element methods for the Brinkman problem*, Helsinki University of Technology Report A557 (2009), <https://math.aalto.fi/reports/a557.pdf>, and read the complete extracted text, including §§2--3.2 and the later sections. The PDF and extraction are saved beside this note. No canonical content or controls were changed.

## Actual source statements

The source studies (in its normalization) mass plus t² symmetric-gradient stiffness. Its velocity norm is

    ||v||t²=||v||2²+t²||eps(v)||2².

Its continuous pressure norm is

    ||q||Qt = sup_(v in H1_0) b(v,q)/||v||t,

and the discrete pressure norm is

    ||q_h||Qt,h² = sum_K hK²/(t²+hK²) ||grad q_h||L2(K)².

The generalized MINI family at polynomial degree k=1 is the actual P1 plus cubic/quartic cell bubble velocity with continuous P1 pressure. Lemma 1 uses the exact local bubble test

    v|K = [hK²/(t²+hK²)] bK grad q_h|K,

and local affine scaling. It needs no global inverse estimate. Lemma 2 combines that estimate with a local interpolant stable in both L2 and H1 and satisfying the weighted first-order interpolation estimate. One should use a genuine volume-based Clément-type operator to justify the stated L2 stability, rather than silently attribute L2 stability to an arbitrary face-average Scott--Zhang operator. The source's displayed chain in (35) includes an unnecessary reverse comparison with the interpolant; the standard argument only needs its forward stability and the weighted error bound.

Theorem 3 gives uniform mixed stability in the continuous pressure norm. Theorem 5 gives uniform quasioptimality in that norm. Theorem 7 gives quasioptimality in the computable pressure norm with an additional velocity approximation term

    t (sum_K hK^-2 ||u-v_h||L2(K)²)^(1/2).

Inserting the actual H2 Fortin interpolant makes this additional term at most C t h ||u||H2, without h_min. These are useful actual local facts.

At exactly t=0, the paper's definition of V changes from H1_0 to L2, and therefore its written finite-element space no longer imposes a boundary trace by membership in V. One must not identify that exact t=0 space automatically with our fixed zero-boundary MINI mass-initialization space. All limits used below retain the latter fixed space and are justified by its finite-dimensional matrices independently of the paper's t=0 convention.

## What the smooth substitution gives, exactly

Absorb the fixed viscosity normalization into t, and let u be a fixed smooth no-slip exact solenoidal velocity. Put F equal to its viscous Stokes force, so the continuous Brinkman problem with right side u+t²F has exact solution (u,0). The source's Theorem 5, together with the actual H2 Fortin approximation, gives

    ||u-w_t||t + ||pi_t||Qt <= C(h²+t h)||u||H2.             (1)

The same size follows from Theorem 7 in its computable norm. As t decreases to zero with the actual discrete space fixed, w_t tends to P_Zh u and pi_t tends to the actual mass-pressure phi_h, whose scalar Schur equation and bound ||grad phi_h||2<=Ch²||u||H2 are already proved.

The required homogeneous pressure transform is **not** pi_t itself. In the notation of the companion note, with lambda proportional to t^-2,

    C_pre(lambda+A_h)^-1(P_Zh u-s_h)
        = pi_t-phi_h-q_h/lambda.                            (2)

This is the exact full-test cancellation identity; normalizing viscosity only changes the relation between t and lambda. The separate estimate (1) and the existing mass-pressure bound yield only

    ||pi_t-phi_h||2 <= C(h²+t h)||u||H2.                    (3)

The nondecaying h² term in (3) remains as t tends to zero. It cannot be used as a positive-power high-frequency resolvent estimate. Although the actual difference in (2) tends to zero for each fixed finite mesh, the rate and its uniformity in grading are precisely the missing issue.

The computable norm does not automatically repair this loss. A factor t can recover L2 from Qt,h only for a separately established high-frequency pressure component. Low-frequency pressures have Qt,h comparable to an H1-type norm as t tends to zero; multiplying their entire norm by t gives an invalid L2 comparison. Neither local weights nor Theorem 6's statement of an O(h) bound justify discarding that low-frequency component.

## Present disposition

A557 supplies actual useful parameter-uniform stability and quasioptimality ingredients, and its local proof is compatible with the original no-global-inverse requirement. The direct substitution of smooth data does not yet estimate the mass-pressure cancellation in (2). No completed initialization estimate, improved resolvent decay, or original-scope counterexample is claimed. The source's later saturation assumptions belong to its a posteriori analysis and were not used here.

## Exact full-space Schur subtraction, retaining the coupled strain operator

Here is a further exact reduction that preserves the canonical form. Let H_t:L2(D)^d->V_h solve

    (H_t f,v_h)+t² a_nu(H_t f,v_h)=(f,v_h),    every v_h in V_h.

At t=0 this is the actual full-MINI mass projector R_h. All spaces are fixed, with zero boundary velocity degrees of freedom. Define

    G_t(q_h,r_h)=(H_t grad q_h,grad r_h).

Symmetry follows by testing the H_t equations against each other's solutions, and positivity follows by testing against H_t grad q_h. The bubble gradient test ensures injectivity on mean-zero Q_h for each t>=0. Thus this is precisely the Schur form for the full-space parameter problem. Its velocity operator retains

    a_nu(v,w)=2nu(eps(v),eps(w))
             =nu[(grad v,grad w)+(div v,div w)],   v,w in H1_0(D)^d.

The latter identity follows by integration by parts and density. Its divergence term cannot be deleted for arbitrary full-MINI fields, which are not exactly solenoidal. In particular this is a coupled elasticity-type resolvent, and no scalar-component heat estimate is being substituted.

For u in H2 intersect V_sigma put F=-nu Delta u, so a_nu(u,v)=(F,v) on H1_0. The actual mixed Brinkman solution with load u+t²F satisfies

    w_t=H_t(u+t²F)-H_t grad pi_t,
    G_t(pi_t,q_h)=(H_t(u+t²F),grad q_h).

Since (u,grad q_h)=0, writing d_t=H_t(u+t²F)-u gives

    G_t(pi_t,q_h)=(d_t,grad q_h).

The fixed-space t=0 equations give d_0=R_hu-u and G_0(phi_h,q_h)=(d_0,grad q_h). Subtracting yields

    G_t(pi_t-phi_h,q_h)
       =(d_t-d_0,grad q_h)+(G_0-G_t)(phi_h,q_h).            (4)

This identity keeps the entire mass-pressure cancellation inside the inverse Schur problem rather than estimating its terms separately in the final L2 pressure norm. It is valid with exactly the original canonical strain form.

Both d_0 and grad phi_h have the actual near-2 Lp size O(h^(2-3sigma)) from the separate higher-integrability proof, and hence positive boundary-strip energy gain. However, obtaining a quantitative bound for the right side of (4), followed by G_t inverse, still requires a uniform estimate for this coupled full-space resolvent beyond the already proved static Lp statements. A full-space scalar heat theorem would not be an adequate substitute. No such missing estimate is claimed here.
