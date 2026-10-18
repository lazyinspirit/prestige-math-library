---
id: thm-h2-matrix-vector-multiplication-correct
kind: theorem
title: "Nested-basis H² multiplication is exact for its represented matrix"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps:
  - def-hlr-and-h2-block-matrix-representations
  - def-h2-nested-cluster-bases-and-interaction-lists
  - lem-hlr-block-cluster-leaves-partition-index-pairs
  - alg-h2-matrix-vector-multiplication
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Steffen Börm, Lars Grasedyck, and Wolfgang Hackbusch, Hierarchical
        Matrices, MiS Lecture Note 21 (2003; revised June 2006), Chapter 9,
        §§9.1–9.2"
      url: "https://files-www.mis.mpg.de/mpi-typo3/preprints/ln/lecturenote-2103.pdf"
    - title: "Ralf Hiptmair, AdvNumCSE Lecture Document, Chapter 2, “Local Low-Rank
        Compression of Non-Local Operators” (ETH Zürich, AT’23), §2.4.6"
      url: "https://people.math.ethz.ch/~grsam/ADVNCSE/ADVNCSE.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

For every nested-basis H² representation $\widetilde A\in\mathbb F^{I\times J}$ and every vector $x\in\mathbb F^J$, [[alg-h2-matrix-vector-multiplication]] returns $\widetilde A x$ exactly.

## Facts & Assumptions

**Given:** The H² bases and transfer matrices, the represented matrix $\widetilde A$, its block-cluster partition, and $x\in\mathbb F^J$.

[F1] [[def-h2-nested-cluster-bases-and-interaction-lists]]: on each child $\tau_i$ of a parent $\tau$, $U_\tau|_{\tau_i}=U_{\tau_i}E^U_{\tau_i}$; column bases satisfy the analogous identity with $E^V$.

[F2] [[def-h2-nested-cluster-bases-and-interaction-lists]]: each admissible block is represented by $U_\tau S_{\tau\sigma}V_\sigma^*$, and each near block is stored densely.

[F3] [[lem-hlr-block-cluster-leaves-partition-index-pairs]]: terminal rectangles are disjoint and cover $I\times J$.

[F4] [[alg-h2-matrix-vector-multiplication]]: the procedure computes column coefficients upward, accumulates coupling products, propagates row coefficients downward, and multiplies dense near blocks directly.

## Proof

1.1 At a column leaf $\sigma$, the algorithm sets $z_\sigma=V_\sigma^*x|_\sigma$. Suppose this identity holds for both children $\sigma_1,\sigma_2$ of an internal cluster $\sigma$. By the nestedness in [F1] and the disjoint union of child indices, $V_\sigma^*x|_\sigma=\sum_{j=1}^2(E^V_{\sigma_j})^*V_{\sigma_j}^*x|_{\sigma_j}=\sum_{j=1}^2(E^V_{\sigma_j})^*z_{\sigma_j}$, exactly the upward update in [F4]. Induction gives $z_\sigma=V_\sigma^*x|_\sigma$ for every column cluster. [F1, F4, induction, algebra]

1.2 Fix a far block $(\tau,\sigma)$. Its coupling contributes $S_{\tau\sigma}z_\sigma=S_{\tau\sigma}V_\sigma^*x|_\sigma$ to $w_\tau$. Each downward transfer from a parent to a child applies the corresponding $E^U$; repeated nestedness [F1] therefore turns $U_\tau S_{\tau\sigma}V_\sigma^*x|_\sigma$ into exactly its restriction on every descendant row leaf. Summing the finite far-block contributions gives their full matrix action. [F1, F2, F4, algebra]

2.1 By [F2] and [F4], every near block contributes its exact dense product $D_{\tau\sigma}x|_\sigma$. The far and near block leaves partition $I\times J$ by [F3], so adding their actions gives every entry of $\widetilde A x$ exactly once in the matrix sum. Thus the returned vector is $\widetilde A x$. [F2, F3, F4, step 1.2, algebra] ∎
