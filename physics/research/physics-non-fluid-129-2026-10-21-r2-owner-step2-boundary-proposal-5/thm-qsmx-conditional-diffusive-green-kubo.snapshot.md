---
id: thm-qsmx-conditional-diffusive-green-kubo
kind: theorem
title: Integrable current correlations give a conditional variance coefficient
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-qsmx-lattice-current-and-limits
  - thm-qsm-dt-variance-green-kubo
  - thm-riemann-fubini-on-product-rectangles
  - thm-substitution
  - thm-ftc-second-part
  - thm-ftc-first-part
  - lem-cm-integral-and-ftc-for-continuous-normed-space-curves
dependency_roles:
  def-qsmx-lattice-current-and-limits: mathematical-premise
  thm-qsm-dt-variance-green-kubo: mathematical-premise
  thm-riemann-fubini-on-product-rectangles: mathematical-premise
  thm-substitution: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-ftc-first-part: mathematical-premise
  lem-cm-integral-and-ftc-for-continuous-normed-space-curves: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "J. Sirker, Transport in one-dimensional integrable quantum systems, SciPost Physics Lecture Notes 17 (2020), §§2.2–3"
      url: https://arxiv.org/pdf/1910.12155
      locator: "§2.2, PDF pp. 6–8, equations (2.23)–(2.28): current correlations, Drude contribution, and integrability-qualified regular diffusion coefficient."
    - title: "MIT OpenCourseWare 22.103, Microscopic Theory of Transport, Lecture 3: Diffusion and the Velocity Autocorrelation—Green-Kubo Relations"
      url: https://ocw.mit.edu/courses/22-103-microscopic-theory-of-transport-fall-2003/42a7a0ddcb94eb23f6c096ae04da0162_lec3.pdf
      locator: "Entire 4-page Lecture 3, equations (3.1)–(3.8): the stationary velocity-correlation identity and the conditional long-time diffusion limit."
    - title: "Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, complete lecture notes, Theorem 3.3.12 and proof"
      url: https://arxiv.org/pdf/1311.2717
      locator: "§3.3.11–3.3.12, printed pp. 68–71 (PDF pp. 67–70): finite-range infinite-volume dynamics and strong continuity."
---

## Statement

Fix a spatial normalization and current convention as in the finite-volume lattice-current definition. Let $C:[0,\infty)\to\mathbb R$ be a real, even, connected autocorrelation for that specified normalized current. In the classical alternative, let $(\Omega,\mathcal F,\mathbb P)$ be a probability space and let $t\mapsto J(t)$ be a norm-continuous map into the real Hilbert space $L^2(\Omega,\mathcal F,\mathbb P)$. Assume it is centered and second-order stationary, meaning $\mathbb E[J(t)]=0$ and $\mathbb E[J(s)J(t)]=C(t-s)$ for all $s,t\ge0$, with the even extension $C(-u)=C(u)$. Define $X_T:=\int_0^T J(t)\,dt$ as a Bochner integral in $L^2$. In this classical alternative assume $\lim_{R\to\infty}\int_0^R|C(t)|\,dt<\infty$ as an absolute improper Riemann integral. In the quantum alternative, let $V=V^*$ be the chosen spatially normalized current observable in a finite-range spin $C^*$-dynamical system with the exact hypotheses of the finite quantum variance theorem cited below, and let its invariant state $\phi$ satisfy $\phi(V)=0$. For its strongly continuous dynamics $\alpha_t$, define $X_T:=\int_0^T\alpha_t(V)\,dt$ as a norm-Riemann integral and $C(t):=\operatorname{Re}\phi(V\alpha_t(V))$. Invariance and self-adjointness make this real correlation even. This quantum alternative assumes exactly the Countable Choice, finite-matrix $C^*$-identity, interaction, state, and dynamics hypotheses in that supplier, and requires $C\in L^1([0,\infty))$ with respect to Lebesgue measure. In either alternative, the corresponding integral being finite gives
$$\lim_{T\to\infty}\frac{\operatorname{Var}(X_T)}{2T}=\int_0^\infty C(t)\,dt=:D\ge0,$$
where the classical variance is $\mathbb E[(X_T-\mathbb E X_T)^2]=\mathbb E[X_T^2]$ and the quantum variance is $\phi(X_T^2)$. The correlation already includes the chosen spatial normalization; if it is obtained from a finite-volume sequence, convergence to $C$ and the order of spatial, time, and frequency-regulator limits are assumptions, not conclusions here. If the chosen current observable $J$ or $V$ has units $\mathsf Q\,\mathrm{s}^{-1}$, both sides have units $\mathsf Q^2\,\mathrm{s}^{-1}$, multiplied by any declared spatial-normalization unit. This conditional variance coefficient is not by itself an empirical diffusion constant or a conductivity.

## Statement references

[[def-qsmx-lattice-current-and-limits]]

[[thm-qsm-dt-variance-green-kubo]]

[Sirker, §§2.2–3](https://arxiv.org/pdf/1910.12155)

[MIT OpenCourseWare 22.103, Lecture 3](https://ocw.mit.edu/courses/22-103-microscopic-theory-of-transport-fall-2003/42a7a0ddcb94eb23f6c096ae04da0162_lec3.pdf)

[Naaijkens, §3.3](https://arxiv.org/pdf/1311.2717)

## Facts & Assumptions

**Given:** The fixed current normalization; either the centered stationary real process with absolutely convergent improper Riemann correlation integral or the exact finite-range quantum-spin data with Lebesgue-integrable correlation in the Statement.

[A1] In the quantum alternative, assume Countable Choice and the finite-matrix $C^*$-identity, together with the finite-range interaction, consistent local states, strongly continuous dynamics, invariant state, and centered self-adjoint observable specified in [[thm-qsm-dt-variance-green-kubo]]. This is only Countable Choice, not the full Axiom of Choice.

[F1] [[def-qsmx-lattice-current-and-limits]]: the finite current is $J_L=\sum_j(i/\hbar)[h_{j,j+1},q_{j+1}]$, its connected correlation is normalized per the declared convention, and the order of any volume/time/regulator limits must be stated.

[F2] [[thm-qsm-dt-variance-green-kubo]]: under [A1] and its exact finite-range spin-system hypotheses, the symmetrized quantum integrated-observable variance divided by $2T$ converges to the integral of its absolutely integrable real correlation and is nonnegative.

[F3] [[thm-riemann-fubini-on-product-rectangles]]: Riemann-integrable functions on products of nondegenerate rectangles have equal lower and upper section-integral iterates; when all sections are integrable, their ordinary iterated Riemann integrals equal the product integral.

[F4] [[thm-substitution]]: for a continuous integrand, the affine substitution $u=t-s$ on a finite interval changes the integral with its oriented endpoints and derivative factor.

[F5] [[thm-ftc-second-part]]: if a function is differentiable on a compact interval with integrable derivative, its derivative integral is the endpoint difference.

[F6] [[lem-cm-integral-and-ftc-for-continuous-normed-space-curves]]: continuous curves in complete normed real vector spaces have norm-Riemann integrals; the integral is linear and commutes with bounded linear maps.

[F7] [[thm-ftc-first-part]]: if $C$ is continuous on a compact interval, its integral function $F(t)=\int_0^t C(u)\,du$ is differentiable with $F'=C$, including the one-sided endpoint derivatives.

## Proof

**Proof technique:** stationary covariance identity and an absolute-tail estimate.

**Given:** [A1], [F1]–[F7], the stationary centered classical process or quantum observable, and its alternative's absolute-integrability hypothesis.

1.1 In the classical alternative fix $T>0$ and use Lebesgue measure on $[0,T]$ for the Bochner integral. For each $n\ge1$, let $J_n:[0,T]\to L^2(\Omega,\mathcal F,\mathbb P)$ take the value $J(kT/n)$ on $[kT/n,(k+1)T/n)$ for $0\le k<n$ and the value $J(T)$ at $T$. Each $J_n$ is a measurable simple function. Uniform continuity of $J$ on $[0,T]$ gives $\sup_{t\in[0,T]}\|J_n(t)-J(t)\|_2\to0$, and hence $\int_0^T\|J_n(t)-J(t)\|_2\,dt\to0$. Thus $J$ is strongly measurable (an almost-everywhere limit of measurable simple functions), and $\int_0^T\|J(t)\|_2\,dt<\infty$ because $J$ is bounded. By the definition of the Bochner integral as the $L^1$-norm limit of integrals of simple functions, $J$ is Bochner integrable. The Bochner integrals of $J_n$ are the left-endpoint Riemann sums for $J$; they converge both to the Bochner integral by the $L^1$ approximation and to the norm-Riemann integral by [F6]. Hence these integrals agree. The expectation functional $\Lambda(Y):=\mathbb E[Y]=\langle Y,1\rangle_{L^2}$ is bounded since $|\Lambda(Y)|=|\langle Y,1\rangle_{L^2}|\le\|Y\|_2\|1\|_2=\|Y\|_2$. Applying the bounded-linear-map clause of [F6] gives $\mathbb E[X_T]=\int_0^T\mathbb E[J(t)]\,dt=0$, so $\operatorname{Var}(X_T)=\mathbb E[X_T^2]$. [given, F6, construct, algebra]

2.1 The spatially normalized current convention is fixed by [F1]. In the quantum alternative, [A1] and [F2] apply to the exact $\alpha_t$, invariant state $\phi$, and centered self-adjoint $V$ in the Statement, so the supplier gives the variance identity and limit. The evenness asserted in the Statement follows from $C(-t)=\operatorname{Re}\phi(V\alpha_{-t}(V))=\operatorname{Re}\phi(\alpha_t(V)V)=\operatorname{Re}\overline{\phi(V\alpha_t(V))}=C(t)$, using invariance and self-adjointness. In the classical alternative, continuity of the inner product makes $(s,t)\mapsto\mathbb E[J(s)J(t)]=C(t-s)$ continuous on $[0,T]^2$. Riemann sums for $X_T$ converge in $L^2$, so continuity of the inner product makes the expectations of their squared norms converge to $\mathbb E[X_T^2]$; each squared-sum expectation is a product Riemann sum for this continuous kernel. Thus [F3] gives $\mathbb E[X_T^2]=\int_0^T\int_0^T C(t-s)\,ds\,dt$, which equals $\operatorname{Var}(X_T)$ by step 1.1. The integrand is symmetric because $C$ is even. The diagonal has zero area: it lies in strips of width $\delta$ and area at most $2T\delta+\delta^2$, tending to zero, so a bounded continuous integrand contributes zero there. Off the diagonal the two triangular restrictions are continuous; on a grid meeting the diagonal their upper-lower gap is bounded by the kernel oscillation away from the diagonal plus twice its supremum times the diagonal-strip area. Hence the product of the triangular indicator with the kernel is Riemann integrable. Each section has at most one jump and is therefore Riemann integrable. For the upper triangle, $g(t):=\int_0^t C(t-s)\,ds$ satisfies $|g(t)-g(t\prime)|\le T\omega_C(|t-t\prime|)+\|C\|_\infty|t-t\prime|$, where $\omega_C(\delta):=\sup_{|u-v|\le\delta}|C(u)-C(v)|\to0$; hence its outer integral is continuous. The lower triangle has the same estimate with reversed limits. Splitting the square into its two triangles and applying [F3] to each gives $2\int_0^T\int_0^t C(t-s)\,ds\,dt$. [given, A1, F1, F2, F3, F6, step 1.1, algebra]

3.1 For the classical alternative, apply [F4] to $\varphi(s)=t-s$ on $[0,t]$. It gives $\int_t^0 C(u)\,du=-\int_0^t C(t-s)\,ds$; reversing the oriented endpoints yields $\int_0^t C(t-s)\,ds=F(t)$, where $F(t):=\int_0^t C(u)\,du$. By [F7], $F'=C$; the product rule gives $(tF(t))'=F(t)+tC(t)$, a continuous derivative. Applying [F5] to $tF(t)$ and using $F(T)=\int_0^T C(u)\,du$ yields $\int_0^T F(t)\,dt=\int_0^T(T-u)C(u)\,du$. Thus step 2.1 gives $\operatorname{Var}(X_T)/(2T)=\int_0^T(1-u/T)C(u)\,du$. [step 2.1, F4, F5, F7, algebra]

4.1 In the classical alternative, put $K:=\int_0^\infty|C(u)|\,du<\infty$. For $T>R>0$, the difference between step 3.1 and the improper integral is bounded by
$$\left|\int_0^T(1-u/T)C(u)\,du-\int_0^\infty C(u)\,du\right|\le\frac{R}{T}K+2\int_R^\infty|C(u)|\,du.$$
First choose $R$ so the tail is arbitrarily small, then let $T\to\infty$; this proves the classical limit. The quantum limit is supplied by [F2]. [given, F2, step 3.1, algebra]

5.1 In the classical alternative every finite-time variance is nonnegative, so its limit is nonnegative; in the quantum alternative nonnegativity is part of [F2]. The limit therefore has the stated sign in either case. [F2, step 4.1, algebra] ∎

