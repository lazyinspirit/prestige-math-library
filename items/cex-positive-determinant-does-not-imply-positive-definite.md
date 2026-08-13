---
id: cex-positive-determinant-does-not-imply-positive-definite
kind: counterexample
title: 'Positive determinant does not imply positive definiteness'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-definiteness-inertia-and-signature-data-over-the-reals, def-determinant-of-a-square-matrix]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: 'J. Kuan, Positive Definite Matrices'
      url: 'https://math.berkeley.edu/~jkuan/Lecture_July31.pdf'
pipeline_run: null
---

## Statement refuted

**Refuted claim:** Every real symmetric matrix with positive determinant is positive definite.

## Facts & Assumptions

**Given:** The real diagonal matrix $A=\operatorname{diag}(-1,-1,1)$.

[L1] Positive definiteness requires $v^{\mathsf T}Av>0$ for every nonzero $v$, and the signs of a diagonal form give its inertia ([[def-definiteness-inertia-and-signature-data-over-the-reals]]).

[L2] The determinant is the signed Leibniz sum, which for a diagonal matrix reduces to the product of its diagonal entries ([[def-determinant-of-a-square-matrix]]).

## Counterexample

**Proof technique:** direct computation.

1.1 By [L2], $\det A=(-1)(-1)(1)=1>0$. [L2, algebra]

1.2 But $e_1^{\mathsf T}Ae_1=-1<0$, so [L1] shows that $A$ is not positive definite. Its inertia is $(1,2,0)$. [L1, algebra]

2.1 Thus a positive determinant alone does not imply positive definiteness. [step 1.1, step 1.2] ∎
