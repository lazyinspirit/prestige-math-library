---
id: ex-integrating-a-compactly-supported-form-in-two-overlapping-charts
title: "Partition weights in two overlapping charts"
kind: example
status: draft
origin: pipeline
deps: ["thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement", "def-integral-of-an-oriented-chart-supported-top-form"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lee Proposition 16.5 proof pp.405–406"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: "Direct calculation and localization"
---
## Example

Let $f\in C_c^\infty((-1,1))$. Use the increasing charts $x$ and $y=2x$ on overlapping domains containing its support. For smooth weights $\rho,1-\rho$ with $0\leq\rho\leq1$ on a neighborhood of the support, the two weighted chart integrals sum to $\int f(x)dx$, independently of $\rho$.

## Facts & Assumptions

[F1] [[thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement]]: The compact-support integral on an oriented manifold is independent of the chart cover, coordinate maps, subordinate partition, and refinement. If $U\subset M$ is open and contains $\operatorname{supp}\omega$, with its restricted orientation, then $\int_U\omega|_U=\int_M\omega$.

[F2] [[def-integral-of-an-oriented-chart-supported-top-form]]: Let $M^n$ be oriented and $\omega$ a smooth top form with compact support contained in a connected chart $(U,\phi)$. For $n\geq1$ write $$(\phi^{-1})^*\omega=f\,dx^1\wedge\cdots\wedge dx^n.$$ Let $\sigma_\phi\in\{1,-1\}$ be the sign of its coordinate frame relative to the chosen orientation. Define the chart integral by $$I_\phi(\omega)=\sigma_\phi\int_{\mathbb R^n}\widetilde f(x)\,dx.$$ Here $\widetilde f$ is the Riemann-integrable zero extension, including across a genuine half-space face, as in lem-chart-supported-coefficients-have-well-defined-riemann-integrable-half-space-extensions. For $n=0$, a connected chart is a point $p$, and set $I_p(\omega)=\varepsilon(p)\omega(p)$ using its determinant-line sign. Empty support gives zero. Negative charts are allowed: the upper-half-line chart $u=b-t$ at the right endpoint of an increasing interval has sign $-1$.

## Verification

**Given:** The objects and hypotheses in the statement above.

1.1 The x-chart coefficient of the first term is $\rho(x)f(x)$. Since $dx=dy/2$, the y-chart coefficient of the second is $(1-\rho(y/2))f(y/2)/2$. Both have compact support; weights outside the support do not affect the products. The chart definition gives their ordinary Riemann integrals. [F2, algebra]

2.1 Substitute $y=2x$ in the second integral and add: $\int\rho f\,dx+\int(1-\rho)f\,dx=\int f\,dx$. This is the finite product-partition identity underlying global independence. It includes $f=0$ and weights identically zero or one; no unweighted overlap is counted twice. [F1, step 1.1] ∎
