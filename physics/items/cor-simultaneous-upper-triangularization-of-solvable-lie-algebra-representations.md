---
id: cor-simultaneous-upper-triangularization-of-solvable-lie-algebra-representations
kind: corollary
title: Simultaneous triangularization of solvable representations
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-lies-theorem, def-subrepresentation-quotient-representation-and-intertwiner, def-quotient-vector-space-and-canonical-projection]
landmark: false
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Milne, Lie Algebras, Theorem 3.7"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "Theorem 3.7, printed p. 17"
---

## Statement

Let $\mathfrak g$ be finite-dimensional solvable over an algebraically closed
field of characteristic zero, and let $V$ be a finite-dimensional
$\mathfrak g$-module. Then $V$ has a complete invariant flag. Equivalently,
there is a basis in which every representing matrix is upper triangular.

## Facts & Assumptions

**Given:** A representation of $\mathfrak g$ on $V$ under Lie's theorem hypotheses.

[L1] Every nonzero finite-dimensional module under these hypotheses has a common eigenvector ([[thm-lies-theorem]]).

[L2] Invariant subspaces and their quotients carry the restricted and induced representations ([[def-subrepresentation-quotient-representation-and-intertwiner]]).

[L3] The canonical vector-space quotient projection is linear and surjective ([[def-quotient-vector-space-and-canonical-projection]]).

## Proof

**Proof technique:** induction on $\dim V$.

1.1 If $V=0$, the empty flag and empty basis have the required properties. [base, given]

1.2 Assume $V\neq0$ and the corollary for smaller-dimensional modules. [ih, given]

1.3 By [L1], choose a common eigenvector $0\neq v\in V$. Its line $V_1=kv$ is $\mathfrak g$-invariant. [L1, L2]

2.1 The quotient $V/V_1$ has the induced representation by [L2] and dimension one less. Step 1.2 supplies its complete invariant flag. Taking inverse images under the projection in [L3] and adjoining $0\subset V_1$ gives a complete invariant flag in $V$. [L2, L3, step 1.2, step 1.3]

3.1 A basis adapted to this finite flag makes every representing matrix upper triangular. Conversely, the spans of the first $i$ vectors in a common upper-triangular basis form the complete invariant flag. These are finite sequential basis choices and require no AC. [step 1.1, step 2.1, discharge-induction] ∎
