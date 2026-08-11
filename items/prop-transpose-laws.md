---
id: prop-transpose-laws
kind: proposition
title: 'Transpose is linear and involutive, and $(AB)^{\mathsf T}=B^{\mathsf T}A^{\mathsf T}$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-transpose-of-a-matrix, def-matrix-product-and-identity-matrix,
       def-matrix-space, def-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'S. Axler, Linear Algebra Done Right, 4th ed., §3C, Exercises 14–15'
      url: 'https://linear.axler.net/LADR4e.pdf'
pipeline_run: null
---

## Statement

For matrices of the appropriate shapes and a scalar $\lambda$,

$$(A+B)^{\mathsf T}=A^{\mathsf T}+B^{\mathsf T},\qquad (\lambda A)^{\mathsf T}=\lambda A^{\mathsf T},\qquad (A^{\mathsf T})^{\mathsf T}=A,$$

and

$$(AB)^{\mathsf T}=B^{\mathsf T}A^{\mathsf T}.$$

Thus transpose is linear and involutive and reverses products.

## Facts & Assumptions

**Given:** A field $F$, matrices $A,B$ of the same shape, conformable matrices $A,C$, and a scalar $\lambda\in F$.

[L1] Transposition swaps the two entry indices ([[def-transpose-of-a-matrix]]).

## Proof

**Proof technique:** direct.

1.1 Swapping indices in the entrywise sum and scalar product gives the two linearity identities, and swapping twice gives $(A^{\mathsf T})^{\mathsf T}=A$. [given, L1]

2.1 For conformable $A\in M_{m\times n}(F)$ and $C\in M_{n\times p}(F)$, one has $((AC)^{\mathsf T})_{ki}=(AC)_{ik}=\sum_{j<n}a_{ij}c_{jk}$. [step 1.1, L1]

3.1 Commutativity in $F$ rewrites the sum in step 2.1 as $\sum_{j<n}(C^{\mathsf T})_{kj}(A^{\mathsf T})_{ji}=(C^{\mathsf T}A^{\mathsf T})_{ki}$, proving the product law entrywise. [step 2.1, L1] ∎
