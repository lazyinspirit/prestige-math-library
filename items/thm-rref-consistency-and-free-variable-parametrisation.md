---
id: thm-rref-consistency-and-free-variable-parametrisation
kind: theorem
title: "Reduced row echelon form detects consistency and parametrises every solution by the nonpivot variables"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-row-operations-preserve-solution-sets, thm-reduced-row-echelon-form-is-unique, def-matrix-equation-augmented-matrix-and-linear-system, def-row-echelon-reduced-row-echelon-and-pivots]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. Margalit and J. Rabinoff, Interactive Linear Algebra, §§1.3 and 2.4"
      url: "https://textbooks.math.gatech.edu/ila/ila.pdf"
pipeline_run: null
---

## Statement

Let $R$ be the RREF of $[A\mid b]$. The system $Ax=b$ is consistent exactly when the last column of $R$ is not a pivot column. When it is consistent, every nonpivot variable may be chosen arbitrarily, and each pivot variable is then determined uniquely by its row. This parametrises every solution exactly once.

## Facts & Assumptions

**Given:** A finite system $Ax=b$ over a field and the RREF $R$ of its augmented matrix.

[L1] Row operations on an augmented matrix preserve exactly its solution set ([[thm-row-operations-preserve-solution-sets]]).

[L2] Every finite matrix has a unique RREF ([[thm-reduced-row-echelon-form-is-unique]]).

[L3] The augmented matrix records the coefficients and right-hand side of $Ax=b$ ([[def-matrix-equation-augmented-matrix-and-linear-system]]).

[L4] In RREF, every pivot is the only nonzero entry in its column ([[def-row-echelon-reduced-row-echelon-and-pivots]]).

## Proof

**Proof technique:** constructive.

1.1 Replace $[A\mid b]$ by its unique RREF $R$. By [L1] this changes no solution. [L1, L2, L3, construct]

2.1 A pivot in the augmented column produces a row $0=1$, after its pivot has been normalized, so the system is inconsistent. Conversely, if there is no such pivot, every nonzero row has a coefficient pivot and imposes an equation for that pivot variable. [step 1.1, L4]

3.1 Choose arbitrary values for the nonpivot variables. Each pivot row then determines its pivot variable uniquely, and substituting these values satisfies every nonzero row while zero rows impose nothing. Every solution has those same free coordinates and therefore arises uniquely from this construction. [step 2.1, L3, L4, discharge-construct] ∎

