---
id: cex-morera-without-continuity
kind: counterexample
title: "Morera's theorem fails without continuity"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-morera-triangle-theorem, def-edgewise-riemann-integral-around-complex-triangle, lem-changing-a-function-at-finitely-many-points, cor-complex-differentiability-implies-continuity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "B. V. Shabat, Introduction to Complex Analysis, Remark 2.22"
      url: "https://math.stanford.edu/~ryzhik/shabat-all.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** A function on an open subset of $\mathbb C$ whose integral around every contained triangle is zero must be holomorphic, even when continuity is not assumed.

In the edgewise Riemann sense, the function

$$f(z):=\begin{cases}1,&z=0,\\0,&z\ne0\end{cases}$$

has zero integral around every complex triangle, but is not holomorphic.

## Facts & Assumptions

**Given:** The displayed function $f:\mathbb C\to\mathbb C$ and an arbitrary ordered complex triangle.

[L1] If the velocity-weighted pullback of a function along each affine triangle edge is Riemann integrable, its edgewise triangle integral is the sum of those edge integrals ([[def-edgewise-riemann-integral-around-complex-triangle]]).

[L2] Changing a real Riemann-integrable function at finitely many points preserves integrability and its integral ([[lem-changing-a-function-at-finitely-many-points]]).

[L3] Every complex differentiable function is continuous at the point of differentiability ([[cor-complex-differentiability-implies-continuity]]).

[L4] Morera's theorem assumes continuity in addition to zero integrals around every contained filled triangle ([[thm-morera-triangle-theorem]]).

## Counterexample

**Proof technique:** direct.

1.1 Fix an arbitrary triangle and read its boundary integral in the edgewise sense of [L1] for the point-supported function $f$. [given, L1]

1.2 The function is discontinuous at $0$, since every punctured neighbourhood contains points where its value is $0$ while $f(0)=1$; by [L3], it is not complex differentiable, and hence not holomorphic, at $0$. [given, L3]

2.1 On a nonconstant affine edge, the edge map is injective and therefore meets $0$ at most once, so each real component of its velocity-weighted pullback differs from zero at at most one parameter and [L2] makes its integral zero; on a constant edge the velocity is zero, so its pullback integral is also zero. Hence [L1] gives zero around every triangle, including repeated or collinear vertices. [step 1.1, L1, L2]

3.1 Steps 2.1 and 1.2 exhibit vanishing edgewise triangle integrals without holomorphy, so removing the continuity hypothesis from [L4] makes the implication false. [step 2.1, step 1.2, L4] ∎
