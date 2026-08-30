---
id: thm-total-variation-is-a-measure
kind: theorem
title: "The total variation of a signed or complex measure is a positive measure"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-measure, def-total-variation-of-a-signed-or-complex-measure, thm-total-variation-of-a-complex-measure-is-finite, prop-jordan-parts-and-total-variation-formulas-for-signed-measures]
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, Theorem 9.10"
      url: "https://measure.axler.net/MIRA.pdf"
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Chapter 12"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
---

## Statement

Let $\nu$ be a signed measure or a complex measure on $(X,\mathcal A)$. Then
$|\nu|$ is a measure on $(X,\mathcal A)$.

## Facts & Assumptions

**Given:** A signed measure or complex measure $\nu$ on $(X,\mathcal A)$.

[L1] The total variation $|\nu|(E)$ is defined by a supremum of nonnegative
partition sums over countable measurable partitions of $E$.
([[def-total-variation-of-a-signed-or-complex-measure]])

[L2] A measure is a nonnegative set function with value $0$ at $\varnothing$
and countable additivity on pairwise disjoint measurable families.
([[def-measure]])

## Proof

**Proof technique:** direct.

1.1 The set function $|\nu|$ is nonnegative by [L1]. Also $|\nu|(\varnothing)=0$, [L1, L2]
because the only countable measurable partition of $\varnothing$ has every part
equal to $\varnothing$ and hence partition sum $0$.

1.2 Let $(E_m)$ be pairwise disjoint measurable sets and put $E=\bigcup_m E_m$. [L1]
For each $m$, choose a countable measurable partition $(A_{m,k})_k$ of $E_m$.
Then the doubly indexed family $(A_{m,k})_{m,k}$ is a countable measurable
partition of $E$, so [L1] gives
$$\sum_m |\nu|(E_m)\le |\nu|(E)$$
after taking suprema over all admissible partitions of the pieces.

2.1 Conversely, let $(B_j)$ be a countable measurable partition of $E$. Then [L1, step 1.2]
each $(B_j\cap E_m)_j$ is a countable measurable partition of $E_m$, and
$$|\nu(B_j)|\le \sum_m |\nu(B_j\cap E_m)|$$
by the triangle inequality applied to the disjoint decomposition
$B_j=\bigcup_m (B_j\cap E_m)$. Summing over $j$ and using [L1] on each piece
gives
$$\sum_j |\nu(B_j)|\le \sum_m |\nu|(E_m).$$
Taking the supremum over all partitions $(B_j)$ of $E$ yields
$|\nu|(E)\le\sum_m |\nu|(E_m)$.

3.1 Steps 1.2 and 2.1 prove countable additivity. Together with step 1.1 and [L2, step 1.1, step 1.2, step 2.1] ∎
[L2], this shows that $|\nu|$ is a measure.
