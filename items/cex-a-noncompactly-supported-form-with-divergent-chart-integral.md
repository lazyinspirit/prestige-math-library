---
id: cex-a-noncompactly-supported-form-with-divergent-chart-integral
title: "A noncompactly supported form whose integral diverges"
kind: counterexample
status: draft
origin: pipeline
deps: ["def-integral-of-an-oriented-chart-supported-top-form"]
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
    - title: "Lee p.407 paragraph on noncompactly supported forms and convergence"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: "Direct calculation and localization"
---
## Statement refuted

False assertion: smoothness alone guarantees a finite integral of a top form on an oriented manifold, without a compact-support or convergence condition.

## Facts & Assumptions

[F1] [[def-integral-of-an-oriented-chart-supported-top-form]]: Let $M^n$ be oriented and $\omega$ a smooth top form with compact support contained in a connected chart $(U,\phi)$. For $n\geq1$ write $$(\phi^{-1})^*\omega=f\,dx^1\wedge\cdots\wedge dx^n.$$ Let $\sigma_\phi\in\{1,-1\}$ be the sign of its coordinate frame relative to the chosen orientation. Define the chart integral by $$I_\phi(\omega)=\sigma_\phi\int_{\mathbb R^n}\widetilde f(x)\,dx.$$ Here $\widetilde f$ is the Riemann-integrable zero extension, including across a genuine half-space face, as in lem-chart-supported-coefficients-have-well-defined-riemann-integrable-half-space-extensions. For $n=0$, a connected chart is a point $p$, and set $I_p(\omega)=\varepsilon(p)\omega(p)$ using its determinant-line sign. Empty support gives zero. Negative charts are allowed: the upper-half-line chart $u=b-t$ at the right endpoint of an increasing interval has sign $-1$.

## Counterexample

**Given:** The proposed assertion; use the data constructed below.

1.1 On the increasingly oriented line the form $dx$ is smooth, but its support is all of $\mathbb R$, which is not compact. Its restriction to every compact interval $[-R,R]$, $R>0$, has the ordinary integral $\int_{-R}^R1\,dx=2R$, computed using chart integration or a finite endpoint chart partition. [F1, algebra]

2.1 The values $2R$ are unbounded as $R$ increases. Hence even the elementary symmetric improper-integral attempt fails to give a finite value. The compact-support integral defined on this page is simply inapplicable to dx on the whole line; the calculation does not introduce a general improper manifold integral. [step 1.1, algebra] ∎
