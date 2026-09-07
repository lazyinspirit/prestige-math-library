---
id: lem-euclidean-stokes-for-a-compactly-supported-form
title: "Compact-support Stokes on Euclidean space"
kind: lemma
status: published
origin: pipeline
deps: ["def-integral-of-an-oriented-chart-supported-top-form", "lem-exterior-and-cartan-calculus-extend-to-manifolds-with-boundary", "cor-repeated-riemann-integrals-on-rectangles", "thm-newton-leibniz-with-interior-derivative"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lee Theorem 16.11 proof pp.412–413; Merry Theorem 26.17"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: "Direct calculation and localization"
---
## Statement

For $n\geq1$ and $\eta\in\Omega_c^{n-1}(\mathbb R^n)$, with the standard orientation, $\int_{\mathbb R^n}d\eta=0$.

## Facts & Assumptions

[F1] [[def-integral-of-an-oriented-chart-supported-top-form]]: Let $M^n$ be oriented and $\omega$ a smooth top form with compact support contained in a connected chart $(U,\phi)$. For $n\geq1$ write $$(\phi^{-1})^*\omega=f\,dx^1\wedge\cdots\wedge dx^n.$$ Let $\sigma_\phi\in\{1,-1\}$ be the sign of its coordinate frame relative to the chosen orientation. Define the chart integral by $$I_\phi(\omega)=\sigma_\phi\int_{\mathbb R^n}\widetilde f(x)\,dx.$$ Here $\widetilde f$ is the Riemann-integrable zero extension, including across a genuine half-space face, as in lem-chart-supported-coefficients-have-well-defined-riemann-integrable-half-space-extensions. For $n=0$, a connected chart is a point $p$, and set $I_p(\omega)=\varepsilon(p)\omega(p)$ using its determinant-line sign. Empty support gives zero. Negative charts are allowed: the upper-half-line chart $u=b-t$ at the right endpoint of an increasing interval has sign $-1$.

[F2] [[lem-exterior-and-cartan-calculus-extend-to-manifolds-with-boundary]]: On smooth manifolds with boundary, the coordinate exterior derivative, pullback naturality, graded Leibniz rule, support containment, and Cartan identity hold for smooth forms: $$d(F^*\alpha)=F^*(d\alpha),\quad d(\alpha\wedge\beta)=d\alpha\wedge\beta+(-1)^{\deg\alpha}\alpha\wedge d\beta,$$ $$\operatorname{supp}d\alpha\subseteq\operatorname{supp}\alpha,\qquad \mathcal L_X\alpha=d(\iota_X\alpha)+\iota_Xd\alpha.$$ For arbitrary smooth vector fields at boundary points, $\mathcal L_X$ is defined by local Euclidean extensions; a two-sided flow inside the manifold is not required.

[F3] [[cor-repeated-riemann-integrals-on-rectangles]]: Let $Q=\prod_{j<n}[a_j,b_j]\subseteq\mathbb R^n$, where $n\ge1$ and every $a_j<b_j$. If $f:Q\to\mathbb R$ is continuous, then for every permutation of the coordinates the corresponding repeated Riemann integral exists and equals $\int_Qf$.

[F4] [[thm-newton-leibniz-with-interior-derivative]]: Let $a<b$. Suppose $G:[a,b]\to\mathbb R$ is continuous on $[a,b]$ and differentiable on $(a,b)$. If $f:[a,b]\to\mathbb R$ is Riemann integrable and $$f(x)=G'(x)\qquad(a<x<b),$$ then $$\int_a^b f=G(b)-G(a).$$ No derivative of $G$ at either endpoint is assumed, and the two endpoint values assigned to the integrable extension $f$ do not enter the conclusion.

## Proof

**Given:** The objects and hypotheses in the statement above.

1.1 Write $\eta=\sum_{i=1}^na_i\,dx^1\wedge\cdots\wedge\widehat{dx^i}\wedge\cdots\wedge dx^n$. The coordinate formula gives $d\eta=\sum_i(-1)^{i-1}\partial_i a_i\,dx^1\wedge\cdots\wedge dx^n$. Choose $R>0$ with the support inside $(-R,R)^n$, so all $a_i$ vanish near the outer faces. [F2, given]

2.1 Each derivative coefficient is continuous on the nondegenerate cube. Repeated Riemann integration may put $x_i$ first. Its integral along that coordinate is $a_i(\ldots,R,\ldots)-a_i(\ldots,-R,\ldots)=0$ by the fundamental theorem. Thus every term integrates to zero. [F3, F4, step 1.1]

3.1 The chart definition and linearity give the asserted zero sum. For $n=1$ there is one coefficient and the omitted wedge is the scalar one, so this is just the endpoint difference. Empty support and $\eta=0$ give the same identity. [F1, step 2.1] ∎
