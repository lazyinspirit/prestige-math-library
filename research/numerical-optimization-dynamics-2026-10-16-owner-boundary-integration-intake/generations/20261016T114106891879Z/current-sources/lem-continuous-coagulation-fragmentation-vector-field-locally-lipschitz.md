---
id: lem-continuous-coagulation-fragmentation-vector-field-locally-lipschitz
kind: lemma
title: The bounded-kernel continuous coagulation-fragmentation field is locally Lipschitz
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps: [lem-continuous-coagulation-operator-weighted-total-variation-bound, lem-continuous-fragmentation-operator-weighted-total-variation-bound, def-continuous-size-coagulation-fragmentation-weak-model]
justified_by: []
proof_strategy: direct
axiom_use: No choice principle is used; the estimate is bilinearity and the triangle inequality.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: Philippe Laurençot, Weak compactness techniques and coagulation equations, §§3.1–3.4
      url: https://arxiv.org/pdf/1801.08312
    - title: Philippe Laurençot and Stéphane Mischler, From the discrete to the continuous coagulation-fragmentation equations, §§1–2
      url: https://www.ceremade.dauphine.fr/~mischler/articles/14CFDtoC.pdf
---

## Statement

Let $F(\mu)=\mathcal C(\mu,\mu)+\mathcal F\mu$ be the vector field from [[def-continuous-size-coagulation-fragmentation-weak-model]]. On the ball $\|\mu\|_w,\|\nu\|_w\le R$ it satisfies

$$\|F(\mu)-F(\nu)\|_w\le\bigl(3K_*R+\beta_*(D+1)\bigr)\|\mu-\nu\|_w.$$

Also, $F(0)=0$.

## Facts & Assumptions

**Given:** The symmetric bilinear coagulation operator and linear fragmentation operator on $\mathcal M_w(E)$.

[F1] [[lem-continuous-coagulation-operator-weighted-total-variation-bound]]: $\|\mathcal C(\alpha,\gamma)\|_w\le\frac32K_*\|\alpha\|_w\|\gamma\|_w$.

[F2] [[lem-continuous-fragmentation-operator-weighted-total-variation-bound]]: $\|\mathcal F\alpha\|_w\le\beta_*(D+1)\|\alpha\|_w$.

## Proof

1.1 Bilinearity and symmetry give $\mathcal C(\mu,\mu)-\mathcal C(\nu,\nu)=\mathcal C(\mu-\nu,\mu)+\mathcal C(\nu,\mu-\nu)$. Applying [F1] to each term and the ball bounds yields at most $3K_*R\|\mu-\nu\|_w$. [given, F1, algebra]

2.1 Linearity and [F2] bound the fragmentation difference by $\beta_*(D+1)\|\mu-\nu\|_w$. Adding the coagulation and fragmentation estimates proves the stated Lipschitz bound. Both operators vanish at the zero measure, so $F(0)=0$. [given, F2, step 1.1, algebra] ∎

