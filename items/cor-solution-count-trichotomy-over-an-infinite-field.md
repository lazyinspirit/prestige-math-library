---
id: cor-solution-count-trichotomy-over-an-infinite-field
kind: corollary
title: "Over an infinite field, a finite linear system has no solution, exactly one solution, or infinitely many solutions according to its pivots"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-rref-consistency-and-free-variable-parametrisation, def-finite-cardinality, def-countable, def-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. Margalit and J. Rabinoff, Interactive Linear Algebra, §1.3.2"
      url: "https://textbooks.math.gatech.edu/ila/ila.pdf"
pipeline_run: null
---

## Statement

Let $F$ be an infinite field. A finite system over $F$ has no solutions when its augmented column contains a pivot, exactly one solution when it is consistent and every variable column contains a pivot, and infinitely many solutions when it is consistent and has a nonpivot variable. Consistency is not implied by the pivot condition on the variable columns: over any field the system with matrix $\begin{pmatrix}1\\0\end{pmatrix}$ and right-hand side $\begin{pmatrix}0\\1\end{pmatrix}$ has a pivot in its single variable column and also a pivot in its augmented column, and has no solution.

## Facts & Assumptions

**Given:** A finite system over an infinite field $F$.

[L1] RREF detects inconsistency and parametrises solutions by arbitrary values of the nonpivot variables ([[thm-rref-consistency-and-free-variable-parametrisation]]).

[L2] A set is finite when it is equinumerous with a natural number ([[def-finite-cardinality]]).

[L3] A field supplies addition, multiplication and distinct $0,1$, and each nonzero scalar is invertible ([[def-field]]).

[L4] An infinite set is one that is not finite; countability is a separate property and is not assumed here ([[def-countable]]).

## Proof

**Proof technique:** direct.

1.1 If the augmented column is a pivot column, [L1] gives no solution. [L1, L2, L3]

2.1 If there is no augmented pivot and no free variable, [L1] determines every variable uniquely, so there is exactly one solution. [step 1.1, L1]

3.1 If a free variable exists, fix all other free variables and let that one range through $F$. The parametrisation of [L1] assigns distinct solutions to distinct scalars, injecting the infinite set $F$ into the solution set; hence the solution set is not finite and is infinite. [step 2.1, L1, L4] ∎

