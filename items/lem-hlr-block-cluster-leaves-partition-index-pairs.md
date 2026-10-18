---
id: lem-hlr-block-cluster-leaves-partition-index-pairs
kind: lemma
title: "Block-cluster leaves partition the index-pair set"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [ def-hlr-cluster-trees-and-geometric-admissibility ]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Steffen Börm, Lars Grasedyck, and Wolfgang Hackbusch, Hierarchical
        Matrices, MiS Lecture Note 21 (2003; revised June 2006), §§1.5, 2.2"
      url: "https://files-www.mis.mpg.de/mpi-typo3/preprints/ln/lecturenote-2103.pdf"
    - title: "Ralf Hiptmair, AdvNumCSE Lecture Document, Chapter 2, “Local Low-Rank
        Compression of Non-Local Operators” (ETH Zürich, AT’23), §§2.3.2–2.3.3"
      url: "https://people.math.ethz.ch/~grsam/ADVNCSE/ADVNCSE.pdf"
verification:
  precheck: pass
---

## Statement

Let $I,J$ be nonempty finite index sets with finite cluster trees, and construct the block-cluster tree as in [[def-hlr-cluster-trees-and-geometric-admissibility]]. Its terminal rectangles $\tau\times\sigma$ are pairwise disjoint and their union is $I\times J$.

## Facts & Assumptions

**Given:** Finite row and column cluster trees and the recursive block-cluster construction.

[F1] [[def-hlr-cluster-trees-and-geometric-admissibility]]: children of a cluster are disjoint and cover the parent; a block pair is stopped exactly when it is admissible or both clusters are leaves, and otherwise one nonleaf cluster is split into its child pairs.

## Proof

1.1 If a block node $(\tau,\sigma)$ is split on the row side, its child rectangles $(\tau_i,\sigma)$ are disjoint and cover $\tau\times\sigma$ because the $\tau_i$ partition $\tau$. If it is split on the column side, the rectangles $(\tau,\sigma_j)$ are disjoint and cover $\tau\times\sigma$ because the $\sigma_j$ partition $\sigma$. Thus every split replaces a block by a disjoint cover of that block. [given, F1, algebra]

2.1 Each split increases the depth of one cluster in a finite tree, so along every branch the sum of the remaining row and column depths decreases and the recursion terminates. Induct on this finite sum: a terminal node is its own terminal cover; a nonterminal node has children whose terminal covers partition their respective rectangles by the induction hypothesis, and step 1.1 shows that their union is a disjoint cover of the parent rectangle. Applying this to the root $(I,J)$ proves that the terminal rectangles partition $I\times J$. [given, F1, step 1.1, induction]

3.1 Two distinct terminal rectangles lie in different children of their first common split, whose rectangles are disjoint by step 1.1. Hence all terminal rectangles are pairwise disjoint, completing the partition claim. [step 1.1, step 2.1] ∎
