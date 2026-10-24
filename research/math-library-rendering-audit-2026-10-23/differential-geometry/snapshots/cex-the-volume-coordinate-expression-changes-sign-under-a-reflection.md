---
id: cex-the-volume-coordinate-expression-changes-sign-under-a-reflection
kind: counterexample
title: "The volume coordinate expression changes sign under a reflection"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges,
       prop-exterior-power-duality-pairing]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2019).pdf"
---

## Statement refuted

**False claim:** the coordinate expression of a top-degree form is unchanged by
a reflection.

## Facts & Assumptions

**Given:** The reflection $R:\mathbb R^2\to\mathbb R^2$, $R(x,y)=(x,-y)$, and the form $\omega=dx\wedge dy$.

[L1] Pullback preserves wedge products ([[prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges]]).

## Counterexample
**Proof technique:** direct.

1.1 The reflection satisfies $R^*dx=dx$ and $R^*dy=d(-y)=-dy$. [given, algebra]

2.1 By [L1], $$ R^*\omega=R^*(dx\wedge dy)=R^*dx\wedge R^*dy=dx\wedge(-dy)=-dx\wedge dy. $$ [L1, step 1.1, algebra]

3.1 Therefore the top-degree form changes sign under the reflection, so the claimed invariance is false. [step 2.1] ∎