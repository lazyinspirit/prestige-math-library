---
id: ex-inconsistent-system-detected-by-a-pivot
kind: example
title: 'A $3\times3$ system has no solution because its augmented column contains a pivot'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-rref-consistency-and-free-variable-parametrisation, cor-rank-criterion-for-consistency]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. Margalit and J. Rabinoff, Interactive Linear Algebra, §1.3"
      url: "https://textbooks.math.gatech.edu/ila/ila.pdf"
pipeline_run: null
---

## Example

The real system
$$x+y+z=1,\qquad 2x+2y+2z=3,\qquad x-y=0$$
is inconsistent.

## Facts & Assumptions

**Given:** The displayed system and its augmented matrix.

[L1] A pivot in the augmented column of the RREF is equivalent to inconsistency ([[thm-rref-consistency-and-free-variable-parametrisation]]).

[L2] Consistency is equivalent to equality of coefficient and augmented ranks ([[cor-rank-criterion-for-consistency]]).

## Verification

**Proof technique:** direct.

1.1 Subtracting twice row $0$ from row $1$ gives the row $(0,0,0\mid1)$, which normalizes to a pivot in the augmented column and represents $0=1$. [L1, algebra]

2.1 The coefficient matrix has rank $2$ because rows $(1,1,1)$ and $(1,-1,0)$ are independent, while the augmented matrix has the additional pivot and rank $3$. Thus [L2] independently gives inconsistency. [step 1.1, L2, algebra] ∎
