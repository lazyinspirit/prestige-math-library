---
id: fs-the-integral-of-a-top-form-is-defined-without-an-orientation
title: "False: top-form integration needs no orientation"
kind: false-statement
status: draft
origin: pipeline
deps: ["prop-reversing-orientation-negates-the-integral", "def-integral-of-an-oriented-chart-supported-top-form"]
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
    - title: "Lee Proposition 16.6(b) and Densities introduction pp.407, 428"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: "Direct calculation and localization"
---
## Statement

False assertion: a smooth compactly supported top form has a canonical signed integral independent of any orientation choice.

## Facts & Assumptions

[F1] [[prop-reversing-orientation-negates-the-integral]]: Let $-M$ have the opposite orientation on every component of an oriented smooth manifold $M$. For every compactly supported top form, $\int_{-M}\omega=-\int_M\omega$, in all dimensions.

[F2] [[def-integral-of-an-oriented-chart-supported-top-form]]: Let $M^n$ be oriented and $\omega$ a smooth top form with compact support contained in a connected chart $(U,\phi)$. For $n\geq1$ write $$(\phi^{-1})^*\omega=f\,dx^1\wedge\cdots\wedge dx^n.$$ Let $\sigma_\phi\in\{1,-1\}$ be the sign of its coordinate frame relative to the chosen orientation. Define the chart integral by $$I_\phi(\omega)=\sigma_\phi\int_{\mathbb R^n}\widetilde f(x)\,dx.$$ Here $\widetilde f$ is the Riemann-integrable zero extension, including across a genuine half-space face, as in lem-chart-supported-coefficients-have-well-defined-riemann-integrable-half-space-extensions. For $n=0$, a connected chart is a point $p$, and set $I_p(\omega)=\varepsilon(p)\omega(p)$ using its determinant-line sign. Empty support gives zero. Negative charts are allowed: the upper-half-line chart $u=b-t$ at the right endpoint of an increasing interval has sign $-1$.

## Refutation

**Given:** The proposed assertion; use the data constructed below.

1.1 Take $M=[0,1]$ and $\omega=dt$, which is smooth with compact support on this compact manifold. In the increasing orientation its integral is the ordinary interval integral $\int_0^1 1\,dt=1$. One may compute using a finite chart partition; its coefficients sum to one. [F2, algebra]

2.1 Reverse the orientation. Its integral becomes $-1$, which differs from $1$. The same nonzero form thus has opposite signed integrals under the two choices, refuting independence. [F1, step 1.1] ∎
