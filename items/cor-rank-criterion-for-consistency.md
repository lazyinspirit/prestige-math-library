---
id: cor-rank-criterion-for-consistency
kind: corollary
title: 'The system $Ax=b$ is consistent if and only if $\operatorname{rank}(A)=\operatorname{rank}([A\mid b])$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-rref-consistency-and-free-variable-parametrisation, thm-row-rank-equals-column-rank]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Hefferon, Linear Algebra, 4th ed., Ch. One, §III.2"
      url: "https://jheffero.w3.uvm.edu/linearalgebra/book.pdf"
pipeline_run: null
---

## Statement

For every finite system $Ax=b$ over a field,
$$Ax=b\text{ is consistent}\quad\Longleftrightarrow\quad \operatorname{rank}(A)=\operatorname{rank}([A\mid b]).$$

## Facts & Assumptions

**Given:** A coefficient matrix $A$ and augmented matrix $[A\mid b]$.

[L1] Consistency is equivalent to absence of a pivot in the augmented column of the RREF ([[thm-rref-consistency-and-free-variable-parametrisation]]).

[L2] Matrix rank equals the number of pivots ([[thm-row-rank-equals-column-rank]]).

## Proof

**Proof technique:** direct.

1.1 Row reduce the augmented matrix. Its coefficient block is an echelon form row equivalent to $A$, while the whole reduced matrix is an echelon form of $[A\mid b]$. Thus [L2] identifies their respective pivot counts with the two ranks. Those counts differ exactly when the augmented column supplies one additional pivot. [L1, L2]

2.1 By [L1], absence of that additional augmented pivot is equivalent to consistency. Step 1.1 therefore proves both directions. [step 1.1, L1] ∎
