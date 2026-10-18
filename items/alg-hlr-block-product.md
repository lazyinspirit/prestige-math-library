---
id: alg-hlr-block-product
kind: algorithm
title: "Tolerance-controlled H-matrix block product"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - def-hlr-and-h2-block-matrix-representations
  - def-hlr-cluster-trees-and-geometric-admissibility
  - alg-hlr-bottom-up-recompression
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Steffen Börm, Lars Grasedyck, and Wolfgang Hackbusch, Hierarchical Matrices, MiS Lecture Note 21 (2003; revised June 2006), §6.2"
      url: "https://files-www.mis.mpg.de/mpi-typo3/preprints/ln/lecturenote-2103.pdf"
    - title: "Ralf Hiptmair, AdvNumCSE Lecture Document, Chapter 2, “Local Low-Rank Compression of Non-Local Operators” (ETH Zürich, AT’23), §2.4.4"
      url: "https://people.math.ethz.ch/~grsam/ADVNCSE/ADVNCSE.pdf"
---

## Definition

**Input:** H-matrix representations $A\in\mathbb F^{I\times K}$ and $B\in\mathbb F^{K\times J}$, a recursively generated output block-cluster partition as in [[def-hlr-cluster-trees-and-geometric-admissibility]], a rank cap $k\ge1$, local tolerances $\delta_b\ge0$ for far output blocks, and for each output block $b=(\tau,\sigma)$ a finite intermediate-cluster family $\mathcal K_b$ partitioning $K$ such that the restrictions $A_{\tau\kappa}$ and $B_{\kappa\sigma}$ are available in dense or factorized form for each $\kappa\in\mathcal K_b$. For a far output block, its factor-sum tree has one exact product term for each $\kappa\in\mathcal K_b$ and node tolerances totaling at most $\delta_b$. This compatibility condition is part of the input.

**Procedure:** For each output block, use the exact identity $C_b=\sum_{\kappa\in\mathcal K_b}A_{\tau\kappa}B_{\kappa\sigma}$. If the output block is near, form and store this dense sum exactly and report $e_b=0$. For a far output block, convert each product term to factor form: $UV^*\cdot PQ^*=U(V^*P)Q^*$ when both factors are low rank; $UV^*\cdot D=U(D^*V)^*$ and $D\cdot PQ^*=(DP)Q^*$ when one factor is dense; and $D_1D_2=D_1(D_2^*)^*$ when both are dense. These formulas produce factors with matching inner dimensions. Run [[alg-hlr-bottom-up-recompression]] on the resulting finite factor-sum tree with cap $k$. If any block returns **tolerance-not-met**, return that status and block identity; otherwise store the root factors and its certified bound $e_b\le\delta_b$.
