---
id: fs-geometric-multiplicity-determines-jordan-block-sizes
kind: false-statement
title: "FALSE: Geometric multiplicity alone determines Jordan block sizes"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-jordan-form-uniqueness-from-ranks-of-powers, cor-jordan-block-data-controls-eigenspaces-and-polynomials]
aliases: []
landmark: false
proof_strategy: counterexample
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. Treil, Linear Algebra Done Wrong, Chapter 9, Sections 4.3-4.4"
      url: "https://www.math.brown.edu/streil/papers/LADW/LADW_2017-09-04.pdf"
pipeline_run: null
---

## Statement

**False claim.** The geometric multiplicity of an eigenvalue determines all Jordan block sizes at that eigenvalue.

## Facts & Assumptions

**Given:** For any $\lambda\in F$,
$$A=J_3(\lambda)\oplus J_1(\lambda),\qquad B=J_2(\lambda)\oplus J_2(\lambda).$$

[L1] The geometric multiplicity is the number of Jordan blocks for the eigenvalue ([[cor-jordan-block-data-controls-eigenspaces-and-polynomials]]).

[L2] Ranks of shifted powers determine every Jordan block size ([[thm-jordan-form-uniqueness-from-ranks-of-powers]]).

## Refutation

**Proof technique:** counterexample.

1.1 Each matrix has exactly two $\lambda$-blocks, so [L1] gives geometric multiplicity two for both. [L1, algebra]

1.2 Yet $(A-\lambda I)^2$ has rank one, contributed by $J_3(0)^2$, while $(B-\lambda I)^2=0$; [L2] therefore distinguishes the block multisets $\{3,1\}$ and $\{2,2\}$. [L2, algebra]

2.1 Equal geometric multiplicity has not determined the sizes, so the claim is false. [step 1.1, step 1.2] ∎
