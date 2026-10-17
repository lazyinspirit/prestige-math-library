---
id: thm-infinite-fixed-pivot-sectional-global-wellposedness-and-bl-stability
kind: theorem
title: Unbounded-grid fixed-pivot dynamics are globally well posed and stable
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-infinite-fixed-pivot-sectional-dynamics
  - def-weighted-total-variation-space-for-population-measures
  - def-bounded-lipschitz-discrepancy-for-measures
  - lem-fixed-pivot-barycentric-identities
  - lem-weighted-total-variation-space-is-complete
justified_by: []
proof_strategy: direct
axiom_use: No choice principle is used; the positive Picard iterates start at the prescribed constant path and global continuation uses a norm limit.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: Philippe Laurençot, Weak compactness techniques and coagulation equations, §§3.1–3.4
      url: https://arxiv.org/pdf/1801.08312
    - title: Jitendra Kumar, Numerical approximations of population balance equations in particulate systems, Chapter 2, §2.2
      url: https://www.iitrpr.ac.in/jkumar/pub/Kumar_Dissertation_web.pdf
---

## Statement

Under the hypotheses of [[def-infinite-fixed-pivot-sectional-dynamics]], $F_\Delta$ is a well-defined locally Lipschitz vector field on the weighted measure space supported on $G$, and every positive initial grid measure $\nu_0\in\mathcal M_w(E)$ has a unique global positive solution to $\dot\nu=F_\Delta(\nu)$. On every finite interval it satisfies
$$M_1(\nu_t)=M_1(\nu_0),\quad M_0(\nu_t)\le M_0(\nu_0)e^{\beta_*Dt},$$
$$M_2(\nu_t)\le M_2(\nu_0)+K_*M_1(\nu_0)^2t+\frac{K_*\Delta^2}{8}\int_0^tM_0(\nu_s)^2\,ds+\frac{\beta_*D\Delta^2}{4}\int_0^tM_0(\nu_s)\,ds.$$
If $\nu,\eta$ are two such solutions and $\sup_{s\le T}(M_0(\nu_s)+M_0(\eta_s))\le N_T$, then
$$d_{BL}(\nu_t,\eta_t)\le e^{C_Tt}d_{BL}(\nu_0,\eta_0),\qquad 0\le t\le T,$$
where $C_T$ depends only on $N_T,K_*,L_K,\beta_*,L_\beta,D,L_B$. The proof also gives the vector-field estimate $\|F_\Delta(\nu)-F_\Delta(\eta)\|_{BL}\le C_Td_{BL}(\nu,\eta)$ for positive grid measures with the same number bound; here $\|\sigma\|_{BL}=d_{BL}(\sigma,0)$.

## Facts & Assumptions

**Given:** A semi-infinite positive pivot grid, bounded Lipschitz kernels, and the weighted measure space.

[F1] [[def-infinite-fixed-pivot-sectional-dynamics]]: $F_\Delta$ has nonnegative gains for positive states, per-parent coagulation loss rate $\int K(x,y)\nu(dy)$, and fragmentation loss rate $\beta(x)$. Its adopted daughter hypotheses include support in $[a,x]$, $B_x(E)\le D$, $\int zB_x(dz)=x$, and $d_{BL}(B_x,B_y)\le L_B|x-y|$.

[F2] [[def-weighted-total-variation-space-for-population-measures]]: $\|\sigma\|_w=\int(1+x^2)\,d|\sigma|$.

[F3] [[def-bounded-lipschitz-discrepancy-for-measures]]: $d_{BL}$ tests functions with supremum norm and Lipschitz constant at most $1$.

[F4] [[lem-fixed-pivot-barycentric-identities]]: $P_\Delta(z)$ is positive, has mass $z$, expected displacement at most $\Delta/2$, and second-moment excess at most $\Delta^2/4$.

[F5] [[lem-weighted-total-variation-space-is-complete]]: $\mathcal M_w(E)$ is complete in weighted total variation.

## Proof

1.1 The grid $G$ has no finite accumulation point, so it is closed in $E$. A weighted-total-variation limit of measures supported on $G$ assigns zero variation to $E\setminus G$, hence the grid-supported subspace is closed and complete by [F5]. For $z\ge a$, [F4] gives $\int w(u)P_\Delta(z)(du)\le w(z)+\Delta^2/4\le(5/4)w(z)$. Thus projection maps weighted measures boundedly into this subspace. The positive cone is closed: if $\nu_n\ge0$ and $\nu_n\to\nu$ in weighted total variation, then $\nu^-(E)\le\|\nu-\nu_n\|_{TV}\to0$. [given, F2, F4, F5, algebra]

1.2 Testing the equation with $1$ gives $M_0'\le\beta_*D M_0$, since each aggregation event changes number by $-1$ and each fragmentation increment is at most $D$. Testing with $x$ gives zero coagulation increment by [F4], and zero fragmentation increment because $\int zB_x(dz)=x$ by [F1] and projection preserves each daughter's mass by [F4]. Thus $M_1'=0$. Testing with $x^2$, each coagulation event contributes at most $2xy+\Delta^2/4$, and each fragmentation event contributes at most $D\Delta^2/4$ because daughter second moment before projection is at most $x^2$. Integrating the resulting inequalities proves all three displayed moment bounds. [given, F1, F4, algebra]

1.3 For an admissible test $\varphi$ in [F3], let $\bar\varphi(z)=\int\varphi(u)P_\Delta(z)(du)$. On each cell this is the linear interpolant of the endpoint values; its slope has absolute value at most $1$. Continuity at the pivots gives $\|\bar\varphi\|_\infty\le1$ and $\operatorname{Lip}(\bar\varphi)\le1$ on all of $E$. The coagulation test integrand $\tfrac12K(x,y)[\bar\varphi(x+y)-\varphi(x)-\varphi(y)]$ is bounded and Lipschitz in each variable with constants depending only on $K_*,L_K$. [given, F1, F3]

2.1 Write $F_\Delta(\nu)=G_\Delta(\nu)-q_\nu\nu$, where $q_\nu(x)=\int K(x,y)\nu(dy)+\beta(x)$ and $G_\Delta$ is the sum of the positive aggregation and fragmentation gains in [F1]. On a signed-measure ball $\|\nu\|_w\le R$, $\|q_\nu\|_\infty\le K_*R+\beta_*$, and $q_\nu\ge0$ when $\nu\ge0$. The bound in step 1.1 and $w(x+y)+w(x)+w(y)\le3w(x)w(y)$ bound the aggregation gain by a constant times $K_*R^2$; for fragmentation, $\int z^2B_x(dz)\le x^2$ and $B_x(E)\le D$ bound the gain by a constant times $\beta_*(D+1)R$. Bilinearity makes the aggregation gain locally Lipschitz, and the fragmentation gain is bounded linear. [given, F1, F2, step 1.1, algebra]

2.2 Decompose $\nu\otimes\nu-\eta\otimes\eta=(\nu-\eta)\otimes\nu+\eta\otimes(\nu-\eta)$. Each section of the step 1.3 integrand, scaled by its bounded-Lipschitz norm, is an admissible test in [F3]. The resulting coagulation difference is bounded by $C_K(M_0(\nu)+M_0(\eta))d_{BL}(\nu,\eta)$. For fragmentation the integrand $\beta(x)[\int\bar\varphi\,dB_x-\varphi(x)]$ has supremum at most $\beta_*(D+1)$ and Lipschitz constant at most $L_\beta(D+1)+\beta_*(L_B+1)$, so its difference is bounded by a constant times $d_{BL}(\nu,\eta)$. [F1, F3, step 1.3, algebra]

3.1 On the closed positive path ball of radius $R>2\|\nu_0\|_w$, let $C_R$ bound $\|G_\Delta(\xi)\|_w$ and $L_R$ be its Lipschitz constant, as obtained in step 2.1. For positive paths in that ball, set $$\Phi(\xi)_t=e^{-\int_0^tq_{\xi_s}(\cdot)ds}\nu_0+\int_0^te^{-\int_s^tq_{\xi_r}(\cdot)dr}G_\Delta(\xi_s)\,ds.$$ Since $\|q_{\xi_t}-q_{\xi_s}\|_\infty\le K_*\|\xi_t-\xi_s\|_w$, $q_\xi$ is continuous in time in $L^\infty(E)$; the gain path is continuous in $\mathcal M_w(E)$ by step 2.1. For bounded $b$, multiplication $M_b\sigma=b\sigma$ has $\|M_b\|\le\|b\|_\infty$, so the survival multipliers are continuous in operator norm and the formula defines a continuous path. They lie in $[0,1]$, so $\Phi$ preserves positivity. Its norm is at most $\|\nu_0\|_w+TC_R$, hence it maps the ball into itself when $T C_R\le R-\|\nu_0\|_w$. Since $|q_\xi-q_\zeta|_\infty\le K_*\|\xi-\zeta\|_w$, the inequalities $|e^{-u}-e^{-v}|\le|u-v|$ for $u,v\ge0$ and the triangle inequality give $$\|\Phi(\xi)-\Phi(\zeta)\|_{C\mathcal M_w}\le\left(TL_R+TK_*\|\nu_0\|_w+\frac12T^2K_*C_R\right)\|\xi-\zeta\|_{C\mathcal M_w}.$$ Choose $T$ so this coefficient is $q<1$. The positive path ball is nonempty because it contains $\xi^0_t=\nu_0$. Iteration $\xi^{j+1}=\Phi(\xi^j)$ from $\xi^0$ satisfies $\|\xi^{j+1}-\xi^j\|\le q^j\|\xi^1-\xi^0\|$; for $m>n$, $\|\xi^m-\xi^n\|\le q^n\|\xi^1-\xi^0\|/(1-q)\to0$. Completeness from step 1.1 gives a limit, and the contraction bound makes $\Phi$ continuous, so the limit is fixed. Any two fixed points have distance at most $q$ times itself, so they coincide. For a fixed point, $S_\xi(t,s):=M_{e^{-\int_s^tq_{\xi_r}(\cdot)dr}}$ has operator-norm derivative $\partial_tS_\xi(t,s)=-M_{q_{\xi_t}}S_\xi(t,s)$, since the scalar exponential difference quotients converge uniformly in size. Splitting the difference quotient of the source integral at $s=t$ gives endpoint term $G_\Delta(\xi_t)$ and integral term $-M_{q_{\xi_t}}\int_0^tS_\xi(t,s)G_\Delta(\xi_s)ds$; hence the fixed point solves the equation in [F1]. Conversely, for any positive solution $\zeta$, the inverse multiplier $A_\zeta(t):=M_{e^{\int_0^tq_{\zeta_s}(\cdot)ds}}$ is operator-norm differentiable with $A_\zeta'=M_{q_{\zeta_t}}A_\zeta$. The product difference quotient gives $(A_\zeta\zeta)'=A_\zeta G_\Delta(\zeta)$; integrating this continuous derivative by telescoping partitions and multiplying by $A_\zeta(t)^{-1}$ recovers the same mild formula. Continuity at $0$ puts any competing solution in this ball on a sufficiently short interval, where the fixed-point uniqueness just proved applies. [given, F1, F5, step 1.1, step 2.1, choose]

3.2 On $[0,T]$ the number and second-moment estimates bound $\|\nu_t\|_w=M_0(\nu_t)+M_2(\nu_t)$. The local Lipschitz estimates in step 2.1 bound $\|F_\Delta(\nu_t)\|_w$ there, so $\nu_t$ is Cauchy in weighted total variation at any finite endpoint. Completeness gives a positive limit; the local construction restarts there and uniqueness glues the extension. Therefore no finite maximal endpoint exists. [F2, F5, step 2.1, step 1.2, algebra]

4.1 Integrating the two weak equations and using the number bound in the Statement gives $d(t)\le d(0)+C_T\int_0^t d(s)ds$, where $d(t)=d_{BL}(\nu_t,\eta_t)$. With $g(t)=d(0)+C_T\int_0^td(s)ds$, one has $d\le g$ and $g'\le C_Tg$ almost everywhere. Thus $(e^{-C_Tt}g(t))'\le0$ and $d(t)\le e^{C_Tt}d(0)$. [F1, F3, step 1.2, step 2.2, algebra] ∎

