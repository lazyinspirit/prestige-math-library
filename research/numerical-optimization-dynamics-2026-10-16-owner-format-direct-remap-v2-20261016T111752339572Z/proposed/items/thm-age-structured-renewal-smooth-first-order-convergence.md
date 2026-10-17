---
id: thm-age-structured-renewal-smooth-first-order-convergence
kind: theorem
title: First-order finite-volume convergence for compatible smooth renewal data
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - def-age-structured-renewal-transport-problem
  - def-age-structured-renewal-finite-cutoff-model
  - thm-age-structured-renewal-finite-cutoff-characteristic-solution
  - alg-age-structured-positive-birth-quadrature
  - alg-age-structured-renewal-upwind-finite-volume
  - thm-age-structured-renewal-upwind-positivity-mass-bound-and-stability
  - thm-composite-midpoint-error-bound
  - lem-discrete-one-step-error-recurrence-bound
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
axiom_base: No choice axiom is used; the proof uses cell integration, Taylor bounds and a finite error recurrence.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Benoît Perthame, Introduction to Structured Equations in Biology, full lecture notes"
      url: "https://www.math.cmu.edu/cna/LectureNotesFiles/Perthame.pdf"
      locator: "Chapter 2, §2.3, PDF pp. 17–20: upwind cell-mass formulation, L1 stability and moment estimates."
    - title: "MATH 575 lecture notes, §9 Finite difference methods for the transport equation"
      url: "https://ow3.math.rutgers.edu/~falk/math575/lecture16.pdf"
      locator: "Complete five-page PDF; §9, printed pp. 56–57/PDF pp. 1–2: first-order upwind formula, CFL stability and consistency argument; renewal and mortality terms are proved locally here."
    - title: "MATH 373 lecture notes, §8 Approximation of Integrals"
      url: "https://sites.math.rutgers.edu/~falk/math373/lecture12.pdf"
      locator: "Complete four-page Lecture 12 PDF; §8.2, printed pp. 37–38/PDF pp. 3–4: composite midpoint rule and its $C^2$ error term."
    - title: "Lecture 14: Quadrature, Introduction to Numerical Computation II, Kent State University notes"
      url: "https://www.math.kent.edu/~reichel/courses/intr.num.comp.2/lecture18/quadrature.pdf"
      locator: "Complete eight-page lecture PDF; the Taylor expansion and composite midpoint rule, PDF pp. 4–6, derive positive panel weights and the second-order error term."
---

## Statement

Fix $T>0$ and a cutoff $A>T$. Let $n^A$ be the finite-age solution from [[thm-age-structured-renewal-finite-cutoff-characteristic-solution]] with initial density $n_0^A\in C^2([0,A])$ and assume $\mu,\beta\in C^2([0,A])$ are nonnegative and bounded. Assume $n^A$ extends to $C^2([0,T]\times[0,A])$. Its smoothness at the renewal corner includes $n_0^A(0)=B_A(0)$ and $-(n_0^A)'(0)-\mu(0)n_0^A(0)=B_A'(0)$; no boundary value is imposed at the absorbing outflow. Take integers $J,N\ge1$, set $\Delta a=A/J$ and $\Delta t=T/N$, and use the corresponding uniform age and time grids. Initialize with exact cell masses and use the one-panel midpoint rule in each cell from [[alg-age-structured-positive-birth-quadrature]]. Assume $\Delta t/\Delta a\in[c_-,c_+]$ for fixed $0<c_-\le c_+<\infty$ and the transport-plus-loss CFL. Define

$$\epsilon_Q:=\max_{0\le k<N}\left|B_h(\overline M(t_k))-\int_0^A\beta(a)n^A(t_k,a)\,da\right|,$$

where $B_h(\overline M(t_k))$ is the birth-rate quadrature applied to the exact cell-average masses $\overline M_j(t_k)=\int_{C_j}n^A(t_k,a)\,da$. Then the cell-mass error $E_k=\sum_j|M_j^k-\int_{C_j}n^A(t_k,a)\,da|$ obeys

$$\max_{0\le k\le N}E_k\le C_T(\Delta a+\Delta t+\epsilon_Q).$$

The piecewise-constant reconstruction $u_h^k=M_j^k/\Delta a$ on cell $C_j$ and zero above $A$ satisfies the same $L^1$ error order. For the midpoint rule, $\epsilon_Q\le C_T\Delta a$ under the stated regularity, so the method is first order in age mesh and time step. If the capped adaptive rule is used instead, the estimate requires an independently established true $\epsilon_Q$; its reported indicator is not substituted for that hypothesis.

## Facts & Assumptions

**Given:** The smooth finite-cutoff solution and finite-volume scheme from [[def-age-structured-renewal-finite-cutoff-model]], [[thm-age-structured-renewal-finite-cutoff-characteristic-solution]] and [[alg-age-structured-renewal-upwind-finite-volume]], under the hypotheses in the Statement.

[F1] [[def-age-structured-renewal-finite-cutoff-model]]: $n_t+n_a=-\mu n$ on $0<a<A$, the renewal inflow is $B_A(t)=\int_0^A\beta(a)n^A(t,a)\,da$, and the upper boundary is absorbing outflow.

[F2] [[thm-age-structured-renewal-finite-cutoff-characteristic-solution]]: $n^A$ follows characteristics, satisfies the renewal relation, and its exact initial-cohort outflow is absorbing.

[F3] [[alg-age-structured-renewal-upwind-finite-volume]]: the cell-mass step is $M_j^{k+1}=M_j^k-\Delta t(F_j^k-F_{j-1}^k)-\Delta t\mu_jM_j^k$ with upwind face fluxes and absorbing top outflow.

[F4] [[thm-age-structured-renewal-upwind-positivity-mass-bound-and-stability]]: for the same coefficients and positive quadrature, a one-step mass difference is amplified by at most $1+\Delta t\beta_\infty$.

[F5] [[thm-composite-midpoint-error-bound]]: for $f\in C^2[a,b]$, the composite midpoint error on width $h$ is at most $(b-a)h^2\max|f''|/24$.

[F6] [[lem-discrete-one-step-error-recurrence-bound]]: if $e_0\le C_0h$ and $e_{k+1}\le(1+Lh)e_k+Ch^2$ on a fixed grid $Nh=T$, then $\max_ke_k\le C_T h$.

## Proof

1.1 Let $\overline M_j(t)=\int_{C_j}n^A(t,a)\,da$ and $\overline u_j(t)=\overline M_j(t)/\Delta a$. The smooth finite-age characteristic solution [F2] satisfies the transport equation and renewal boundary in [F1]. Integrating [F1] over one cell and one time step gives $\overline M_j(t_{k+1})=\overline M_j(t_k)-\int_{t_k}^{t_{k+1}}[n^A(s,a_j)-n^A(s,a_{j-1})]ds-\int_{t_k}^{t_{k+1}}\int_{C_j}\mu(a)n^A(s,a)\,da\,ds$, with $n^A(s,a_0)=B_A(s)$ and the outgoing trace at $a_J=A$. [F1, F2, construct, algebra]

2.1 Taylor's formula in age gives $\overline u_j(t)-n^A(t,a_j)=-\frac{\Delta a}{2}(n^A)_a(t,a_j)+O(\Delta a^2)$ uniformly. For interior cells, subtracting adjacent face-flux errors cancels the leading term and leaves $O((\Delta a)^2)$ per cell because $(n^A)_{aa}$ is bounded. In the first and last cells there is only one uncancelled endpoint face error, of size $O(\Delta a)$; these two cells contribute $O(\Delta t\Delta a)$ in total. Taylor's formula in time gives a face-integral remainder $O(\Delta t^2\Delta a)$ per cell after adjacent differences, using bounded $(n^A)_{ta}$, hence $O(\Delta t^2)$ after summing. At the inlet, the smooth trace gives $(n^A)_t(t,a_0)=B_A'(t)$, so the time derivative of $n^A(t,a_1)-B_A(t)$ is also bounded by $\Delta a\|(n^A)_{ta}\|_\infty$; thus the boundary birth flux has no additional O(\Delta t^2) term beyond this face remainder and $\Delta t\epsilon_Q$. For the reaction term, first note that $\overline u_j(t)=n^A(t,a_j^c)+O((\Delta a)^2)$ by the symmetric cell average. Thus replacing $\mu(a)n^A(t,a)$ by $\mu(a_j^c)\overline u_j(t)$ has per-cell error $O((\Delta a)^3)$: the midpoint formula [F5] bounds the error for $\mu n^A$, and the cell-average replacement changes the midpoint value by $O((\Delta a)^2)$ times the cell width. Summing and multiplying by $\Delta t$ gives $O(\Delta t(\Delta a)^2)$. Freezing the reaction term at $t_k$ instead of integrating in time contributes $O(\Delta t^2)$ after summing cells, since $(\mu n^A)_t$ is bounded. Therefore $\|\rho^k\|_{\ell^1}\le C\Delta t(\Delta a+\Delta t+\epsilon_Q)$ for sufficiently fine meshes with $\Delta a\le1$. [given, F5, step 1.1, algebra]

3.1 Set $e_k=\sum_j|M_j^k-\overline M_j(t_k)|$. Apply the one-step stability [F4] to the numerical and exact cell-average states and add the local defect from step 2.1; this yields $e_{k+1}\le(1+\beta_\infty\Delta t)e_k+C\Delta t(\Delta a+\Delta t+\epsilon_Q)$, with $e_0=0$. [F3, F4, step 2.1, algebra]

4.1 Put $D=\Delta a+\Delta t+\epsilon_Q$. Iterating the recurrence in step 3.1 gives $e_k\le C\Delta tD\sum_{r=0}^{k-1}(1+\beta_\infty\Delta t)^r\le C_TD$, where the bound also holds when $\beta_\infty=0$, in which case the sum is $k\le T/\Delta t$. For the midpoint birth rule, split each cell defect into $\overline u_j[Q_M(\beta;C_j,1)-\int_{C_j}\beta]$ and $\int_{C_j}\beta(a)(\overline u_j-n^A(t_k,a))\,da$. The first term is $O((\Delta a)^3)$ per cell by [F5] and bounded $n^A$; in the second, subtract $\beta$ at the cell midpoint because $\int_{C_j}(\overline u_j-n^A)=0$, then use $|\beta(a)-\beta(a_j^c)|\le\operatorname{Lip}(\beta)\Delta a$ and $\int_{C_j}|\overline u_j-n^A|=O((\Delta a)^2)$ from bounded $(n^A)_a$. Summing gives $\epsilon_Q=O((\Delta a)^2)$, hence in particular $O(\Delta a)$. With the two-sided mesh ratio, $D=O(\Delta t)$; the recurrence then has additive term $C'\Delta t^2$, and [F6] gives the stated first-order estimate. Finally, on each cell $\int_{C_j}|n^A(t_k,a)-\overline u_j(t_k)|da\le (\Delta a)^2\|(n^A)_a\|_\infty$; summing over $A/\Delta a$ cells adds only $O(\Delta a)$ to the cell-mass error, proving the reconstruction claim. [F5, F6, step 3.1, algebra] ∎

