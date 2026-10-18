# Smooth instantaneous pressure: third-cycle helper review

## Outcome and scope

No complete first-order instantaneous pressure proof was obtained under the unchanged smooth-velocity hypotheses. The existing pressure-primitive theorem is unchanged. The analysis below gives two rigorous reductions and isolates the extra estimates needed by a possible stronger-norm derivative argument. Those extra estimates are not established here, and are not asserted to be necessary for every possible proof.

All reasoning retains the original domain, affine matching shape-regular MINI meshes, arbitrary time partitions, averaged forcing, mass-orthogonal initialization, and actual mixed scheme solution. In particular, no uniform H1 stability of the projector onto the discrete kernel is assumed.

Read CLAUDE.md and README.md, the applicable schema/workflow material, the actual smooth-velocity and integrated-pressure carriers, the actual escalation remark, the first-cycle integrated-pressure research, and the second-cycle final review. The initial combined tool output truncated some material; the integrated-pressure carrier was subsequently read separately and completely. The existing He source extraction was examined for the backward-Euler recurrence (PDF pp.25–27); it supplies no estimate resolving the gap below. No new full-text literature theorem is claimed or used.

## 1. A mass-error decomposition with genuinely zero initial discrete error

Write P for the L2-orthogonal projection onto Z_h and S for the actual solenoidal energy projection in the current velocity theorem. Set

    rho(t) = (I-P)u(t),    xi^n = Pu(t_n)-u_h^n.

Then e_n=rho(t_n)+xi^n, and xi^0=0 exactly under the original initialization. Since P is a fixed bounded linear L2 operator,

    D_tau rho_n = (I-P) [tau_n^{-1} integral_{I_n} u_t(t) dt].

For almost every t, best approximation and S u_t(t) in Z_h give

    ||(I-P)u_t(t)||_2 <= ||u_t(t)-S u_t(t)||_2
                         <= C h (1+nu^{-1}) M.

This is precisely the existing static approximation followed by Poincare; it requires no H1 bound on P. Averaging and Poincare therefore give

    sup_{v_h != 0} |(D_tau rho_n,v_h)| / ||v_h||_V
        <= C_P C h (1+nu^{-1}) M.

Consequently, with q=4/3 and the original full-test norm,

    Delta <= C_P C T^{3/4} h (1+nu^{-1}) M
             + (sum_n tau_n ||D_tau xi^n||_{V_h^*}^{4/3})^{3/4}.

Here ||w||_{V_h^*}=sup_{v_h !=0}|(w,v_h)|/||v_h||_V; its tests range over all V_h. This isolates a genuinely zero-initial-value discrete derivative problem. It does not solve it.

Indeed the kernel equation for xi contains the viscous defect a_nu(Pu_n-u_n,z_h). The currently proved approximation bound for S does not control ||Pu_n-u_n||_V. Replacing S by P in the velocity proof therefore introduces a new unproved spatial estimate. The vanishing xi^0 alone does not remove the issue.

## 2. What an L2 derivative argument would have to establish

The exact time-averaging defect is better behaved than a generic V* load. For exact divergence-free no-slip velocities, a_nu(w,v)=(-nu Delta w,v) for w in H2 and v in V. Also b(v,q)=(grad q,v) for q in H1. In dimension at most three, H2 embeds in L-infinity and grad H2 embeds in L3. Thus, writing N(u)=(u dot grad)u, one has

    ||N(a)-N(b)||_2
       <= C (||a||_{H2}+||b||_{H2}) ||a-b||_{H2}.

The exact nodal and averaged mixed equations consequently differ by the L2-representable functional

    r_n = -nu Delta(bar u_n-u_n)
              + grad(bar p_n-p_n) + overline{N(u)}_n-N(u_n),

with

    ||r_n||_2 <= C tau_n [(nu+1)M+M^2].

The sign of this r_n depends only on which equation is subtracted; its norm estimate does not. Here D_tau u_n is the exact interval average of u_t, so there is no second time derivative or Taylor remainder. This useful reduction leaves spatial projection, initialization, and nonlinear discrete-error issues intact.

The stronger estimate

    (sum_n tau_n ||D_tau e_n||_2^{4/3})^{3/4} <= C(hM+tau_max M^2)

would imply the required Delta estimate immediately by Poincare. This would avoid the false H1-projector argument. It is, however, a stronger proposed supplier, not a result of the present energy estimate.

The simplest derivative-energy test exposes an initial term ||theta^0||_V^2 for theta^n=Su_n-u_h^n, whereas the actual initialization supplies only the already-proved ||theta^0||_2 <= C h(1+nu^{-1})M. On arbitrarily graded meshes, a global inverse estimate replaces this with a constant involving the smallest element scale. That does not produce the required uniform first-order rate. This observation concerns that proof route; it does not refute the original pressure claim.

There is also an independent nonlinear issue: testing the full nonlinear error equation with D_tau theta does not permit replacing its V norm by its L2 norm. The existing trilinear V-based estimates and the energy bound alone do not authorize that step. Thus even an initial fractional estimate would not, by itself, constitute a complete Navier–Stokes proof.

For comparison, a rigorous linear conditional estimate is immediate. If a sequence theta solves

    (D_tau theta^n,z_h)+a_nu(theta^n,z_h)=(F_n,z_h),

for every z_h in Z_h, with F_n in L2, then testing with D_tau theta^n, multiplying by tau_n, summing, and using the symmetric-form Hilbert identity gives

    sum_n tau_n ||D_tau theta^n||_2^2
        <= a_nu(theta^0,theta^0)+sum_n tau_n ||F_n||_2^2.

Therefore its full-test L^{4/3} derivative norm is bounded by C_P T^{1/4} times the square root of the displayed right side. This conclusion is independent of the partition. Applying it to the actual nonlinear error would require proving the appropriate L2 load estimate, in addition to a uniform O(h) energy norm of the actual theta^0. Neither is supplied here. In particular, the term N(e) for e in H1 is generally only L^{3/2} in three dimensions, so an energy estimate for e cannot simply be cited as an L2 load estimate.

## 3. A rigorous arbitrary-partition smoothing calculation

The following elementary calculation clarifies one possible treatment of the initial layer. It is only a diagnostic auxiliary estimate.

On the finite-dimensional Hilbert space Z_h with L2 inner product define the positive self-adjoint discrete Stokes operator A_h by

    (A_h z_h,w_h)_2 = a_nu(z_h,w_h),    z_h,w_h in Z_h.

Let y^0 be arbitrary in Z_h and solve the homogeneous linear recursion

    D_tau y^n + A_h y^n = 0.

For 0<s<1, put R_n(A_h)=product_{j=1}^n(I+tau_j A_h)^{-1}. Spectral diagonalization gives y^n=R_n(A_h)y^0 and D_tau y^n=-A_h R_n(A_h)y^0. For every eigenvalue lambda>0,

    product_{j<=n}(1+tau_j lambda) >= 1+t_n lambda.

Hence, with c_s=sup_{x>0} x^{1-s}/(1+x)<infinity,

    ||D_tau y^n||_2 <= c_s t_n^{s-1} ||A_h^s y^0||_2.

For s>1/4, a=(4/3)(1-s)<1. Since t^{-a} is decreasing, the right-endpoint sum is at most its integral, on every partition without a step-ratio assumption. Therefore

    (sum_n tau_n ||D_tau y^n||_2^{4/3})^{3/4}
      <= c_s [1-(4/3)(1-s)]^{-3/4}
              T^{s-1/4} ||A_h^s y^0||_2.

All constants here are independent of mesh dimension, eigenvalues, and individual time steps. They inherit viscosity through A_h^s.

Thus a proved uniform fractional approximation estimate

    ||A_h^s(Su_0-Pu_0)||_2 <= C h(1+nu^{-1})M,    some s>1/4,

would control the homogeneous initialization component in this stronger L2 derivative route. No such estimate is proved by the current suppliers. At s=1/4 the particular pointwise-bound integration above has the nonintegrable majorant t^{-1}; this is a limitation of that integration argument, not a proof that an endpoint orbit estimate fails. Nor is s>1/4 asserted to be necessary for the weaker full-test V_h^* bound actually sought.

One cannot replace the fractional norm by the known L2 norm in this argument: in the scalar recursion A=lambda and one first interval tau_1=lambda^{-1},

    tau_1^{3/4}|D_tau y^1| = (1/2) lambda^{1/4}|y^0|.

This only refutes a uniform L2-to-L^{4/3}(L2) homogeneous derivative bound for arbitrary initial errors. It is not a counterexample to the MINI pressure statement, whose actual initial errors are special and whose requested derivative norm is weaker.

## 4. Remaining local theory

The direct full-test interface in the existing escalation remains the smallest established sufficient interface: prove Delta <= C(hM+tau_max M^2), or prove the same instantaneous pressure rate directly.

The zero-initial discrete mass decomposition in section 1 may help formulate an alternative parabolic estimate, but its spatial viscous defect needs actual control. The stronger L2 derivative approach needs both a uniform treatment of the actual mass-projection initialization layer and a complete treatment of the nonlinear residual on the original three-dimensional smooth branch. Section 3 proves a possible initial-layer estimate conditional on a fractional spatial bound, and does not supply that bound.

No new quasiuniformity, domain regularity, mesh/time coupling, initialization rule, or extra time derivatives of the exact solution have been inserted. No instantaneous conclusion has been inferred by differentiating the already-proved small primitive. Neither failure of a particular proof route nor the false full-kernel projector assertion is taken as evidence that the original exact pressure claim is impossible or an open problem.

Only this research note was written; no canonical content, metadata, manifests, contracts, hashes, levels, readiness records, runtime state, tests, or gates were changed or run.
