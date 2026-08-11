---
id: thm-row-operations-preserve-solution-sets
kind: theorem
title: "Elementary row operations on an augmented matrix preserve exactly the solutions of its linear system"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-elementary-row-operations-and-row-equivalence, lem-elementary-row-operations-are-reversible, def-matrix-equation-augmented-matrix-and-linear-system]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "D. Margalit and J. Rabinoff, Interactive Linear Algebra, §1.2"
      url: "https://textbooks.math.gatech.edu/ila/ila.pdf"
pipeline_run: null
---

## Statement

If an elementary row operation transforms the augmented matrix $[A\mid b]$ into $[A'\mid b']$, then
$$S(A,b)=S(A',b').$$
Consequently every finite row reduction of an augmented matrix preserves its solution set exactly.

## Facts & Assumptions

**Given:** A system $Ax=b$ over a field and one elementary row operation applied to its augmented matrix.

[L1] Elementary row operations are swaps, nonzero row scalings and additions of a multiple of one row to another ([[def-elementary-row-operations-and-row-equivalence]]).

[L2] Every elementary row operation has an elementary inverse ([[lem-elementary-row-operations-are-reversible]]).

[L3] The system $Ax=b$ consists of the row equations $\sum_{j<n}a_{ij}x_j=b_i$, and $[A\mid b]$ records their coefficients and right-hand sides ([[def-matrix-equation-augmented-matrix-and-linear-system]]).

## Proof

**Proof technique:** direct.

1.1 A row swap only reorders equations; multiplying an equation by $c\ne0$ preserves it in both directions after multiplication by $c^{-1}$; and replacing one equation by itself plus $c$ times another preserves simultaneous satisfaction because the added equation already holds. Thus every solution of the original system solves the transformed system. [L1, L3, algebra]

2.1 Apply the same argument to the inverse operation from [L2] to obtain the reverse inclusion. Hence the solution sets are equal, without any assumption that $A$ is square or invertible; iteration gives the finite-reduction claim. [step 1.1, L2] ∎

