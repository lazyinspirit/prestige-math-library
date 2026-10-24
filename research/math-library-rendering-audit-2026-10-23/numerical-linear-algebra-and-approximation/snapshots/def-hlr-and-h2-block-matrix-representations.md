---
id: def-hlr-and-h2-block-matrix-representations
kind: definition
title: "H-matrix block representation"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-hlr-cluster-trees-and-geometric-admissibility
  - lem-hlr-block-cluster-leaves-partition-index-pairs
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Steffen Börm, Lars Grasedyck, and Wolfgang Hackbusch, Hierarchical Matrices, MiS Lecture Note 21 (2003; revised June 2006), §§1.6, 2.2"
      url: "https://files-www.mis.mpg.de/mpi-typo3/preprints/ln/lecturenote-2103.pdf"
    - title: "Ralf Hiptmair, AdvNumCSE Lecture Document, Chapter 2, “Local Low-Rank Compression of Non-Local Operators” (ETH Zürich, AT’23), §2.4.1"
      url: "https://people.math.ethz.ch/~grsam/ADVNCSE/ADVNCSE.pdf"
---

## Definition

Let $\mathbb F\in\{\mathbb R,\mathbb C\}$, let $I,J$ be nonempty finite index sets with point assignments as in [[def-hlr-cluster-trees-and-geometric-admissibility]], and let $\mathcal P$ be the block-cluster leaves of [[lem-hlr-block-cluster-leaves-partition-index-pairs]]. Fix an integer rank cap $k\ge1$. An **H-matrix representation with cap $k$** assigns to each far block $b=(\tau,\sigma)\in\mathcal P$ factors $U_b\in\mathbb F^{\tau\times r_b}$ and $V_b\in\mathbb F^{\sigma\times r_b}$ with $0\le r_b\le k$, representing that block by $U_bV_b^*$. Each near block is stored as its full dense matrix $D_b\in\mathbb F^{\tau\times\sigma}$. Since $\mathcal P$ partitions $I\times J$, these blocks determine a unique represented matrix $\widetilde A\in\mathbb F^{I\times J}$.

The rank cap on far blocks is an assumption about the representation or the target's approximability; geometric admissibility alone does not imply that a given matrix block has low rank. Near blocks remain dense and receive no low-rank guarantee.
