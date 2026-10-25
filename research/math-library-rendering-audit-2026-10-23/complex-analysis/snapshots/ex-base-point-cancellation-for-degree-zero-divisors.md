---
id: ex-base-point-cancellation-for-degree-zero-divisors
kind: example
title: Base-point cancellation for degree-zero divisors
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 23
deps:
  - def-abel-jacobi-map
  - lem-holomorphic-differentials-separate-generic-points
  - def-axiom-of-choice
  - def-divisor-principal-and-canonical-divisor-riemann-surface
  - def-jacobian-of-a-compact-riemann-surface
  - lem-abel-jacobi-map-is-well-defined-and-base-point-independent
  - lem-period-pairing-is-well-defined-and-computed-by-integration
  - def-path-integral-of-a-holomorphic-differential-on-a-riemann-surface
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Eduard Looijenga, Riemann Surfaces (2007 author lecture notes)"
      url: "https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf"
      locator: "Ch. 7 §2, Corollary 7.3: $I(D)=\\sum_pn_pI^p_o$ for $D=\\sum n_p(p)$ of degree zero and the base-point independence, printed p. 61."
    - title: "Curtis T. McMullen, Riemann Surfaces, Harvard Math 213b course notes (2026)"
      url: "https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf"
      locator: "Ch. 15, $\\varphi(\\sum Q_i-P_i)(\\omega)=\\sum\\int_{P_i}^{Q_i}\\omega$ and $f(Q)=\\varphi(Q-P)$, printed p. 129."
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a compact
connected Riemann surface, let $D=\sum_pn_p\,p$ be a divisor of degree zero and
let $p_0,q_0\in X$ be two base points with point maps $u_{p_0},u_{q_0}$
([[def-abel-jacobi-map]]). Then in $\operatorname{Jac}(X)$
$$\sum_pn_p\,u_{p_0}(p)=\sum_pn_p\,u_{q_0}(p),$$
so the class $u(D)$ is well defined without a base point; and for all $p,q\in X$
and all paths $\gamma$ from $p$ to $q$,
$$u((q)-(p))=\Bigl[\omega\mapsto\int_\gamma\omega\Bigr],\qquad u((q)-(p))+u((r)-(q))=u((r)-(p)).$$
In degree $1$ the base point does matter: for a single point $p$ one has
$$u_{p_0}(p)-u_{q_0}(p)=-u_{q_0}(p_0),$$
which is nonzero in general: when $g\ge1$ the map $u_{q_0}$ is an immersion, hence nonconstant, so $u_{q_0}(p_0)\ne0$ for suitable $p_0\ne q_0$.

## Facts & Assumptions

**Given:** Full AC, a compact connected Riemann surface $X$, two base points $p_0,q_0$, and a degree-zero divisor $D=\sum_pn_p\,p$.

[F1] The addition rule $u_{b}(q)-u_{b}(p)=[\omega\mapsto\int_p^q\omega]$ holds for every base point $b$ and all $p,q\in X$; the point classes are represented by path integrals modulo the period lattice ([[def-abel-jacobi-map]], [[lem-abel-jacobi-map-is-well-defined-and-base-point-independent]], [[def-path-integral-of-a-holomorphic-differential-on-a-riemann-surface]]).

[F2] The linear extension $u_b(D)=\sum_pn_pu_b(p)$ is defined by finite sums, and on $\operatorname{Div}^0(X)$ it is independent of the base point and additive ([[def-abel-jacobi-map]], [[def-divisor-principal-and-canonical-divisor-riemann-surface]]).

[F3] If $g\ge1$, then for every $p$ some holomorphic differential is nonzero at $p$, so the derivative of $u_{q_0}$ at $p$ is nonzero and $u_{q_0}$ is an immersion; an immersion out of a connected surface is nonconstant, so there is $p_0\ne q_0$ with $u_{q_0}(p_0)\ne0$ ([[lem-holomorphic-differentials-separate-generic-points]], [[lem-abel-jacobi-map-is-well-defined-and-base-point-independent]]).

[F4] Full AC is inherited from the Abel-Jacobi construction ([[def-axiom-of-choice]]).

## Verification

**Given:** The objects and conventions in the Statement.

1.1 By the addition rule of [F1] applied with base point $q_0$, $u_{q_0}(p)=u_{q_0}(p_0)+[\omega\mapsto\int_{p_0}^p\omega]=u_{q_0}(p_0)+u_{p_0}(p)$; hence $u_{p_0}(p)-u_{q_0}(p)=-u_{q_0}(p_0)$ for every $p$, the displayed degree-one formula. Summing with coefficients $n_p$ gives $\sum_pn_pu_{p_0}(p)-\sum_pn_pu_{q_0}(p)=-\bigl(\sum_pn_p\bigr)u_{q_0}(p_0)=0$ because $\deg D=\sum_pn_p=0$. [F1, F2]

1.2 The formula $u((q)-(p))=[\omega\mapsto\int_\gamma\omega]$ is the addition rule of [F1], read for the difference of two points; it is independent of $\gamma$ by the well-definedness lemma [F1]. Adding the two classes for the pairs $(q,p)$ and $(r,q)$ and using additivity of the integral under concatenation gives $u((q)-(p))+u((r)-(q))=u((r)-(p))$. [F1]

2.1 When $g\ge1$, [F3] makes $u_{q_0}$ nonconstant, while $u_{q_0}(q_0)=0$ by [F1]. Hence there exists $p_0\ne q_0$ with $u_{q_0}(p_0)\ne0$. Step 1.1 then makes the degree-one difference $u_{p_0}(p)-u_{q_0}(p)$ nonzero for every $p$. This proves the claimed base-point dependence in degree one without assuming a torus model. [F1, F3, step 1.1]

3.1 Claims: base-point independence on $\operatorname{Div}^0(X)$ by step 1.1, the path-integral formula and three-point additivity by step 1.2, and the degree-one dependence by step 2.1; all under the inherited AC of [F4]. [F4, step 1.1, step 1.2, step 2.1] ∎

