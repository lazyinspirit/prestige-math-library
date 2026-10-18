---
id: alg-hlr-bottom-up-recompression
kind: algorithm
title: "Bottom-up low-rank recompression of block contributions"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-hlr-and-h2-block-matrix-representations
  - lem-hlr-block-cluster-leaves-partition-index-pairs
  - alg-hlr-core-svd-recompression-with-tolerance
  - thm-hlr-core-svd-recompression-is-best-rank-tolerance
  - def-finite-tensor-arrays-and-frobenius-inner-product
  - thm-cauchy-schwarz-in-an-inner-product-space
justified_by: [lem-hlr-bottom-up-recompression-error-bound]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pass
sources:
  references:
    - title: "Steffen Börm, Lars Grasedyck, and Wolfgang Hackbusch, Hierarchical Matrices, MiS Lecture Note 21 (2003; revised June 2006), §§6.2, 7.1–7.2"
      url: "https://files-www.mis.mpg.de/mpi-typo3/preprints/ln/lecturenote-2103.pdf"
    - title: "Ralf Hiptmair, AdvNumCSE Lecture Document, Chapter 2, “Local Low-Rank Compression of Non-Local Operators” (ETH Zürich, AT’23), §§2.4.2–2.4.3"
      url: "https://people.math.ethz.ch/~grsam/ADVNCSE/ADVNCSE.pdf"
---

## Definition

Let $b=(\tau,\sigma)$ be an admissible leaf of the finite block-cluster partition in [[def-hlr-and-h2-block-matrix-representations]]. A **factor-sum tree for $b$** is a finite rooted binary tree whose leaves carry factor pairs $U_v\in\mathbb F^{\tau\times r_v}$, $V_v\in\mathbb F^{\sigma\times r_v}$ for exact contributions $M_v=U_vV_v^*$; each internal node denotes the sum of the exact matrices denoted by its two children. Here $\mathbb F\in\{\mathbb R,\mathbb C\}$, $*$ is conjugate transpose, and all factors have the displayed finite dimensions.

**Input:** Such a tree, a rank cap $k\ge1$, node tolerances $\theta_v\ge0$ whose sum over all nodes is at most a requested block tolerance $\delta_b\ge0$, and the procedures/results [[alg-hlr-core-svd-recompression-with-tolerance]] and [[thm-hlr-core-svd-recompression-is-best-rank-tolerance]].

**Procedure:** Traverse the tree in postorder. At a leaf, pass its exact factor pair to core-SVD recompression. At an internal node, concatenate the returned child factor pairs, which represents the sum of the two child approximations, and pass that pair to core-SVD recompression. At every node use effective core cap $k_b=\min(k,|\tau|,|\sigma|)$ and tolerance $\theta_v$. If any call returns **tolerance-not-met**, return that status and node. On success, retain its factors and exact discarded-tail norm $\rho_v$. Define the node's reported error bound by $e_v=\rho_v$ at a leaf and $e_v=e_{v_1}+e_{v_2}+\rho_v$ at an internal node. If all calls succeed, return the root factors and $e_{\rm root}$. Then the root matrix has rank at most $k$ and its Frobenius error from the sum of all leaf contributions is at most $e_{\rm root}\le\sum_v\theta_v\le\delta_b$. A failed call means only that this chosen tree and its assigned local budgets did not produce a certificate; it does not assert that no rank-$k$ approximation of the full sum meets $\delta_b$.

Near blocks are not passed to this routine: they are assembled and stored densely and exactly. For a leaf carrying a dense contribution $D\in\mathbb F^{m\times n}$, use the exact factor pair $(D,I_n)$, where $I_n$ is the identity matrix; the routine may then compress it under its assigned tolerance.

The rank and error guarantees are proved in [[lem-hlr-bottom-up-recompression-error-bound]].
