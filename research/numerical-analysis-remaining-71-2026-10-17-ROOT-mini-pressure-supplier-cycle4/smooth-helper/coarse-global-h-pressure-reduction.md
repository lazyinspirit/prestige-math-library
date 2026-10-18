# Coarse global mesh size with unrestricted local refinement

Research-only continuation, 2026-10-18. This records a further exact reduction for the actual MINI backward-Euler pressure and the remaining coarse-branch obligation. It does not repeat the already-established false full H1-projector argument, and proves no new counterexample to the smooth branch.

## 1. What would suffice for the coarse branch

Suppose a separate fine-mesh argument applies for h<h0, with h0>0 depending only on allowed domain, shape, viscosity and smooth-data quantities. On the complementary branch h>=h0, it would suffice to prove

    (sum_n tau_n ||p_h^n||2^(4/3))^(3/4) <= B,

where B is independent of h_min and the time partition, and depends only on those allowed quantities. Indeed the exact pressure has the bound T^(3/4)||p||L-infinity(L2), so the error norm is at most B+T^(3/4)M, and thus at most [(B+T^(3/4)M)/h0]h on this branch. This algebraic reduction does not itself establish B or any prescribed explicit constant formula.

The lower bound on h=max_K h_K gives no lower bound on h_min. A finite-dimensional estimate with a constant depending on the smallest cell therefore cannot serve as B. No smallness of a global error proportional to hM follows in this branch.

## 2. Exact instantaneous scalar Schur equation

Use R_h, g_h and their proved uniform gradient coercivity from `actual-mini-mass-schur-and-boundary-layer-test.md`. For the actual mixed solution, define the full velocity-test functional

    G_n(v_h)=(bar f_n,v_h)-a_nu(u_h^n,v_h)
                              -c(u_h^n;u_h^n,v_h).

The mixed equation is

    (D_tau u_h^n,v_h)+b(v_h,p_h^n)=G_n(v_h).

All discrete velocities, including the prescribed mass-projection initialization, belong to Z_h, so D_tau u_h^n also belongs to Z_h. Test with v_h=R_h grad q_h. Orthogonality to Z_h removes the time term exactly. Also b(R_h grad q_h,p_h^n)=g_h(q_h,p_h^n). Therefore

    g_h(p_h^n,q_h)=G_n(R_h grad q_h),   q_h in Q_h.              (1)

This identity is an actual pressure formula for every selected mixed solution. It needs no differentiation of the pressure primitive, no time-step ratio and no alternate initialization.

## 3. The forcing part already has a uniform bound

By linearity and positive definiteness of g_h, split p_h^n into three mean-zero pressures p_F^n+p_A^n+p_C^n, corresponding to the forcing, viscosity and convection terms in G_n. In particular

    g_h(p_F^n,q_h)=(bar f_n,R_h grad q_h).

Let kappa=7/10 in two dimensions and kappa=33/56 in three dimensions, as proved using the independent bubble projection in the structural note. Then g_h(q_h,q_h)>=kappa||grad q_h||2². Orthogonal projection contraction and testing with q_h=p_F^n give

    ||grad p_F^n||2 <= kappa^(-1)||bar f_n||2.

If the gradient vanishes the bound is immediate; otherwise divide the tested inequality. The zero-mean scalar Poincare inequality gives

    ||p_F^n||2 <= C_D kappa^(-1)||bar f_n||2.

Weighted Holder and Jensen for the original forcing averages now yield

    (sum_n tau_n ||p_F^n||2^(4/3))^(3/4)
      <= C_D kappa^(-1) T^(1/4)
                    (sum_n tau_n ||bar f_n||2²)^(1/2)
      <= C_D kappa^(-1) T^(1/4)||f||L2(L2).                    (2)

This is uniform under arbitrary local refinement and arbitrary partitions. It uses only the actual L2 forcing, not extra time regularity of f.

## 4. What is still missing

The remaining two exact scalar equations are

    g_h(p_A^n,q_h)=-a_nu(u_h^n,R_h grad q_h),
    g_h(p_C^n,q_h)=-c(u_h^n;u_h^n,R_h grad q_h).               (3)

The energy theorem controls max_n||u_h^n||2 and sum_n tau_n||u_h^n||V². Its usual trilinear estimates control the convection as an ell^(4/3)(V_h*) functional. Formula (3), however, tests it on the specific mass-orthogonal pressure lift R_h grad q_h. The proved Lp stability of R_h, positivity of g_h and its gradient-energy equivalence do not control the H1 norm of this lift. Substituting such an H1 bound would reintroduce the unavailable full H1-projector assertion.

Thus the forcing portion of B is proved, but neither an adequate uniform time-integrated bound for p_A+p_C on the actual trajectory nor a complete alternative estimate is proved here. An actual coarse-branch supplier could exploit the smooth-data initialization and the dynamic relation between these two terms; their independent treatment as arbitrary V_h* loads is not justified by the present results. Small-data Kato absorption from a fine-h approximation argument supplies no coarse-h conclusion without an additional estimate.

The bounded-slip initial-layer calculation in the structural note also gives no negative result here: its t^(-1/2) pressure is in L^(4/3), so a nonzero tangential trace by itself does not generate the required divergent pressure sequence. An admissible negative construction would have to produce the actual projected smooth solenoidal initialization, solve the actual nonlinear mixed scheme with the original averaged forcing, and prove failure of a bound independent of local refinement. No such construction was obtained.

This is a precise remaining authoring gap, not a claimed impossibility or an asserted open-problem classification. The frozen canonical suppliers and the accepted H2 proposal were left unchanged. Only this research note was added; no tests, gates, hashes or controls were changed or run.
