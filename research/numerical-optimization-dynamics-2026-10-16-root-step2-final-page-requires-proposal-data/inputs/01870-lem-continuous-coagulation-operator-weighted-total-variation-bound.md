---
id: lem-continuous-coagulation-operator-weighted-total-variation-bound
kind: lemma
title: Bounded coagulation is bilinear and bounded in weighted total variation
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-continuous-size-coagulation-fragmentation-weak-model
  - def-weighted-total-variation-space-for-population-measures
justified_by: []
proof_strategy: direct
axiom_use: No choice principle is used; the estimate is pointwise and then integrated.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: Philippe Laurençot, Weak compactness techniques and coagulation equations, §§1 and 3
      url: https://arxiv.org/pdf/1801.08312
    - title: Philippe Laurençot and Stéphane Mischler, From the discrete to the continuous coagulation-fragmentation equations, §§1–2
      url: https://www.ceremade.dauphine.fr/~mischler/articles/14CFDtoC.pdf
---

## Statement

For the coagulation bilinear operator $\mathcal C$ of [[def-continuous-size-coagulation-fragmentation-weak-model]], every $\mu,\nu\in\mathcal M_w(E)$ satisfies

$$\|\mathcal C(\mu,\nu)\|_w\le\frac32K_*\|\mu\|_w\|\nu\|_w.$$

## Facts & Assumptions

**Given:** The weight $w(x)=1+x^2$, the bounded kernel $0\le K\le K_*$, and the signed-measure operator.

[F1] [[def-continuous-size-coagulation-fragmentation-weak-model]]: $\mathcal C(\mu,\nu)=\frac12\iint K(x,y)(\delta_{x+y}-\delta_x-\delta_y)\,\mu(dx)\nu(dy)$.

[F2] [[def-weighted-total-variation-space-for-population-measures]]: $\|\sigma\|_w=\int w\,d|\sigma|$.

## Proof

1.1 For $x,y\ge a$, $w(x+y)+w(x)+w(y)=3+2x^2+2xy+2y^2\le3(1+x^2)(1+y^2)$, since the difference is $(x-y)^2+3x^2y^2\ge0$. [given, F2, algebra]

1.2 Total variation of a signed integral is bounded by the integral against the variation measures. Applying this to [F1] and using $K\le K_*$ gives
$\|\mathcal C(\mu,\nu)\|_w\le\frac{K_*}{2}\iint[w(x+y)+w(x)+w(y)]\,|\mu|(dx)|\nu|(dy)$.
Step 1.1 factors this bound as $\frac32K_*(\int w\,d|\mu|)(\int w\,d|\nu|)$, which is the claimed estimate by [F2]. [given, F1, F2, step 1.1, algebra] ∎
