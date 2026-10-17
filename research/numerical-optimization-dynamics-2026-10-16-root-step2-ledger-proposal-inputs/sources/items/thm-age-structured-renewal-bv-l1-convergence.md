---
id: thm-age-structured-renewal-bv-l1-convergence
kind: theorem
title: L1 convergence for BV data without renewal-boundary compatibility
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - def-age-structured-renewal-transport-problem
  - thm-age-structured-renewal-characteristic-solution
  - alg-age-structured-renewal-upwind-finite-volume
  - thm-age-structured-renewal-upwind-positivity-mass-bound-and-stability
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
axiom_base: No choice axiom is used; the compactness argument uses finite partitions, a diagonal subsequence and an explicit weak formulation.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Benoît Perthame, Introduction to Structured Equations in Biology, full lecture notes"
      url: "https://www.math.cmu.edu/cna/LectureNotesFiles/Perthame.pdf"
      locator: "Chapter 2, §§2.2–2.4, PDF pp. 16–23: uniqueness, upwind L1 bounds, compactness and weak-solution identification."
    - title: "MATH 575 lecture notes, §9 Finite difference methods for the transport equation"
      url: "https://ow3.math.rutgers.edu/~falk/math575/lecture16.pdf"
      locator: "Complete five-page PDF; §9, printed pp. 56–57/PDF pp. 1–2: upwind formula and CFL stability; the renewal-boundary BV compactness is established locally here."
---

## Statement

Let $n_0\ge0$ belong to $BV(0,\infty)\cap L^1(0,\infty)$, where $BV$ means finite total variation, and let $\mu,\beta$ be bounded nonnegative Lipschitz rates. Fix a finite horizon $T>0$. Initialize the finite-volume scheme with exact cell masses $M_j^0=\int_{C_j}n_0(a)\,da$. Assume every positive birth-quadrature evaluation succeeds and the quadrature rule settings are fixed over time. The compatibility between the one-sided initial trace and the renewal birth rate is not assumed. For any sequence of age cutoffs $A_m\to\infty$ with $A_m>T$ for all sufficiently large $m$, and admissible uniform grids with integers $J_m,N_m\ge1$, $A_m=J_m\Delta a_m$ and $T=N_m\Delta t_m$, assume $\Delta a_m,\Delta t_m>0$ and $\Delta a_m,\Delta t_m\to0$, $\Delta t_m/\Delta a_m\in[c_-,c_+]$ for fixed positive bounds, and the transport-plus-loss CFL; extend the cellwise-constant reconstructions by zero above each cutoff. Linear interpolation between time levels then converges to the mild solution in $C([0,T];L^1(0,\infty))$. This is an $L^1$ convergence statement; it asserts no smooth Taylor error rate.

## Facts & Assumptions

**Given:** The BV initial density, bounded Lipschitz rates, and the finite-volume update in [[def-age-structured-renewal-transport-problem]] and [[alg-age-structured-renewal-upwind-finite-volume]].

[F1] [[def-age-structured-renewal-transport-problem]]: a weak solution is continuous in time with values in L1 and satisfies the displayed test-function identity, initial trace and renewal birth relation.

[F2] [[thm-age-structured-renewal-characteristic-solution]]: the characteristic formula and Volterra equation have a unique mild solution.

[F3] [[alg-age-structured-renewal-upwind-finite-volume]]: the cell update is the explicit flux balance; birth weights are nonnegative, supported in each cell and sum to the cell width; the right boundary is absorbing.

[F4] [[thm-age-structured-renewal-upwind-positivity-mass-bound-and-stability]]: discrete masses stay nonnegative and their total is at most $1+\Delta t\beta_\infty$ times the preceding total.

## Proof

1.1 Write $u_j^k=M_j^k/\Delta a$, $B_k=B_h^k$, $\lambda=\Delta t/\Delta a$, and $V_k=|u_1^k-B_k|+\sum_{j=2}^{J}|u_j^k-u_{j-1}^k|$. The initial cell averages satisfy $V_0\le\operatorname{TV}(n_0)+\|n_0\|_\infty+\beta_\infty\|n_0\|_1$, which is finite because an integrable function of finite total variation on the half-line has finite essential supremum; the first term bounds differences of adjacent cell averages by averaging the variation measure. [given, F3, construct]

1.2 Put $d_1^k=u_1^k-B_k$ and $d_j^k=u_j^k-u_{j-1}^k$ for $2\le j\le J$. For $j\ge2$, subtract adjacent updates from [F3] to obtain $u_j^{k+1}-u_{j-1}^{k+1}=(1-\lambda-\Delta t\mu_j)(u_j^k-u_{j-1}^k)+\lambda(u_{j-1}^k-u_{j-2}^k)+\Delta t(\mu_{j-1}-\mu_j)u_{j-1}^k$. The CFL makes the first two coefficients nonnegative, and $|\mu_j-\mu_{j-1}|\le\operatorname{Lip}(\mu)\Delta a$. Summing their absolute-value bounds for $j=2,\dots,J$ gives at most $\sum_{j=2}^{J-1}|d_j^k|+(1-\lambda)|d_J^k|+\lambda|d_1^k|+\Delta t\operatorname{Lip}(\mu)N_k$: for $2\le j<J$ the two transport coefficients add to at most $1$, the last-cell coefficient is at most $1-\lambda$, and the boundary difference contributes $\lambda|d_1^k|$. The first-cell jump is $d_1^{k+1}=(1-\lambda-\Delta t\mu_1)d_1^k+(1-\Delta t\mu_1)B_k-B_{k+1}$. The quadrature weights are fixed and nonnegative, so $|B_{k+1}-B_k|\le\beta_\infty\sum_j|M_j^{k+1}-M_j^k|$. The update and the definition of $V_k$ give $\sum_j|M_j^{k+1}-M_j^k|\le\Delta t(V_k+\mu_\infty N_k)$. Also $|(1-\Delta t\mu_1)B_k-B_{k+1}|\le |B_k-B_{k+1}|+\Delta t\mu_\infty B_k$ and $B_k\le\beta_\infty N_k$. Adding the first-cell bound to the preceding sum combines the $d_1^k$ coefficients as $(1-\lambda-\Delta t\mu_1)+\lambda\le1$; all other variation coefficients are at most $1$. Therefore $V_{k+1}\le(1+C\Delta t)V_k+C\Delta t N_k$, with $C$ depending only on the rate bounds and Lipschitz constants. [given, F3, F4, step 1.1, algebra]

1.3 Iterating [F4] gives $N_k\le(1+\Delta t\beta_\infty)^kN_0\le e^{k\Delta t\beta_\infty}N_0\le e^{\beta_\infty T}N_0$. Iterating the recurrence in step 1.2 gives $V_k\le(1+C\Delta t)^kV_0+C\Delta t\sum_{r=0}^{k-1}(1+C\Delta t)^{k-1-r}N_r\le e^{CT}(V_0+CTe^{\beta_\infty T}N_0)$. The same update gives $\sum_j\Delta a|u_j^{k+1}-u_j^k|\le\Delta t(V_k+\mu_\infty N_k)$; hence the linear time interpolation is uniformly Lipschitz into $L^1$. [F4, step 1.2, algebra]

2.1 On any fixed interval $[0,R]$, the uniform $L^1$ and variation bounds make the time slices precompact in $L^1$: replacing each slice by averages on blocks of width $\rho$ changes its $L^1$ norm by at most $\rho V_k$, while those block averages lie in a bounded finite-dimensional set. A diagonal extraction at rational times and the uniform time-Lipschitz bound from step 1.3 give a subsequence converging uniformly in time in $L^1$ on every bounded age interval. A newborn cohort has age at most $T$; under the upwind update it can move at most one cell per step, so all newborn mass lies below age $T/c_-+\Delta a$. For $R>T/c_-+\Delta a$, births therefore contribute nothing above $R$. An initial cell moves by at most $k$ cells, so any initial mass reconstructed above $R$ came from initial cells whose lower endpoint exceeds $R-k\Delta a-\Delta a\ge R-T/c_- -\Delta a$. Its mass is at most $\int_{R-T/c_- -2\Delta a}^\infty n_0$ (extend $n_0$ by zero to negative ages); mortality and outflow only decrease that inherited mass. This tail tends to zero uniformly as $R\to\infty$. For the exact solution, [F2] shows that newborns have age at most $T$, while mass above $R>T$ comes only from initial ages above $R-T$ and is at most $\int_{R-T}^\infty n_0$. Hence the subsequence converges in $C([0,T];L^1(0,\infty))$. [F2, step 1.3, construct]

2.2 Let $\phi_j^k=\phi(t_k,(a_{j-1}+a_j)/2)$ for a compactly supported $C^1$ test function with terminal value zero. Multiplying [F3] by $\phi_j^{k+1}$ and summing by parts gives the exact discrete weak identity $-\sum_{k,j}M_j^k(\phi_j^{k+1}-\phi_j^k)-\Delta t\sum_{k,j<J}F_j^k(\phi_{j+1}^{k+1}-\phi_j^{k+1})+\Delta t\sum_{k,j}\mu_jM_j^k\phi_j^{k+1}=\sum_jM_j^0\phi_j^0+\Delta t\sum_kB_k\phi_1^{k+1}$; the outflow term vanishes because the test is supported below the cutoff. Uniform $L^1$ convergence, Lipschitz continuity of $\mu,\beta$, and mesh refinement make the sums converge to the weak transport/loss terms. Since each positive birth rule is supported in its cell and its weights sum to $\Delta a$, $|B_k-\int\beta(a)u_h(t_k,a)da|\le2\operatorname{Lip}(\beta)\Delta a\,N_k$, so the birth sum converges to the boundary term. The limit therefore satisfies [F1] with the given initial trace. [F1, F3, step 2.1, algebra]

3.1 In characteristic coordinates $x=a-t$ on $a>t$, the weak identity [F1] becomes $\partial_t v(t,x)=-\mu(x+t)v(t,x)$ in distributions; multiplication by $\exp(\int_x^{x+t}\mu)$ makes its distributional $t$-derivative zero, and the initial trace gives $v(t,x)=n_0(x)S(x,t)$. On $0<a<t$, use $s=t-a$ and obtain $\partial_a w(s,a)=-\mu(a)w(s,a)$ with trace $w(s,0)=B(s)$; the same integrating-factor argument gives $w(s,a)=B(s)S(0,a)$. Substitution into the renewal relation in [F1] yields the Volterra equation of [F2], whose solution is unique. Thus every subsequential limit equals the mild solution. Since every subsequence has a further subsequence with this same limit, the entire sequence converges. [F1, F2, step 2.2, algebra] ∎
