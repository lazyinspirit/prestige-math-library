---
id: thm-hlr-block-matvec-correct
kind: theorem
title: "H-matrix block multiplication returns the represented matrix action"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - def-hlr-and-h2-block-matrix-representations
  - lem-hlr-block-cluster-leaves-partition-index-pairs
  - alg-hlr-block-matvec
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Steffen Börm, Lars Grasedyck, and Wolfgang Hackbusch, Hierarchical
        Matrices, MiS Lecture Note 21 (2003; revised June 2006), §1.6"
      url: "https://files-www.mis.mpg.de/mpi-typo3/preprints/ln/lecturenote-2103.pdf"
    - title: "Ralf Hiptmair, AdvNumCSE Lecture Document, Chapter 2, “Local Low-Rank
        Compression of Non-Local Operators” (ETH Zürich, AT’23), §2.3.5"
      url: "https://people.math.ethz.ch/~grsam/ADVNCSE/ADVNCSE.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

For every H-matrix representation $\widetilde A\in\mathbb F^{I\times J}$ on the block-cluster partition of [[lem-hlr-block-cluster-leaves-partition-index-pairs]] and every vector $x\in\mathbb F^J$, [[alg-hlr-block-matvec]] returns $\widetilde A x$ exactly.

## Facts & Assumptions

**Given:** The represented H-matrix $\widetilde A$, its block-cluster partition, and $x\in\mathbb F^J$.

[F1] [[def-hlr-and-h2-block-matrix-representations]]: each block leaf stores exactly its represented dense or factorized submatrix, and the leaf blocks determine $\widetilde A$.

[F2] [[lem-hlr-block-cluster-leaves-partition-index-pairs]]: the terminal block rectangles are disjoint and cover $I\times J$.

[F3] [[alg-hlr-block-matvec]]: for each leaf it computes the stored block times the corresponding subvector and adds that contribution to the corresponding output rows.

## Proof

1.1 By [F1], $\widetilde A$ is the matrix obtained by placing its stored block matrices on their index rectangles and putting no entries outside those rectangles. [given, F1, construct]

2.1 By [F2], each pair $(i,j)\in I\times J$ lies in exactly one leaf rectangle. By [F3], the algorithm adds the contribution $\widetilde A_{ij}x_j$ to output coordinate $i$ from that leaf, and no other leaf includes that entry. Summing over the finite partition gives $y_i=\sum_{j\in J}\widetilde A_{ij}x_j$ for every $i\in I$, which is exactly $y=\widetilde A x$. [F2, F3, step 1.1, algebra] ∎
