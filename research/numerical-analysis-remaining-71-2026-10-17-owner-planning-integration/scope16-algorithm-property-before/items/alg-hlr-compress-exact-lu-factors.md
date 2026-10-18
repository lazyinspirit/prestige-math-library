---
id: alg-hlr-compress-exact-lu-factors
kind: algorithm
title: "Compress exact block LU factors with local tolerances"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-hlr-and-h2-block-matrix-representations
  - alg-hlr-core-svd-recompression-with-tolerance
  - def-finite-tensor-arrays-and-frobenius-inner-product
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Steffen Börm, Lars Grasedyck, and Wolfgang Hackbusch, Hierarchical Matrices, MiS Lecture Note 21 (2003; revised June 2006), §§6.2, 7.2"
      url: "https://files-www.mis.mpg.de/mpi-typo3/preprints/ln/lecturenote-2103.pdf"
    - title: "Ralf Hiptmair, AdvNumCSE Lecture Document, Chapter 2, “Local Low-Rank Compression of Non-Local Operators” (ETH Zürich, AT’23), §2.4.5"
      url: "https://people.math.ethz.ch/~grsam/ADVNCSE/ADVNCSE.pdf"
---

## Definition

**Input:** An exact factorization $A=LU$ of a square matrix $A\in\mathbb F^{n\times n}$, with $L$ block lower triangular and $U$ block upper triangular on a common ordered cluster partition; a rank cap $k\ge1$; and a local Frobenius tolerance for each admissible off-diagonal block of $L$ and $U$. The factorization $A=LU$ is supplied as a hypothesis, not computed by this procedure.

**Procedure:** Copy every dense nearfield block and every diagonal block exactly. For each strictly lower admissible block of $L$ and each strictly upper admissible block of $U$, apply [[alg-hlr-core-svd-recompression-with-tolerance]] with the given cap and local tolerance. Keep structural zero blocks zero. If any compression reports **tolerance-not-met**, return that status and the factor/block identity. Otherwise return $\widehat L,\widehat U$ and the local discarded-tail bounds $\epsilon_b^L,\epsilon_c^U$ reported by the recompressions. The exact diagonal blocks preserve block triangularity; no claim is made that the compressed factors are exact factors of $A$.
