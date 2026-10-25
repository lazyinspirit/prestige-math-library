---
id: alg-hlr-block-addition
kind: algorithm
title: "Tolerance-controlled H-matrix block addition"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - def-hlr-and-h2-block-matrix-representations
  - alg-hlr-bottom-up-recompression
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Steffen Börm, Lars Grasedyck, and Wolfgang Hackbusch, Hierarchical Matrices, MiS Lecture Note 21 (2003; revised June 2006), §6.2"
      url: "https://files-www.mis.mpg.de/mpi-typo3/preprints/ln/lecturenote-2103.pdf"
    - title: "Ralf Hiptmair, AdvNumCSE Lecture Document, Chapter 2, “Local Low-Rank Compression of Non-Local Operators” (ETH Zürich, AT’23), §2.4.3"
      url: "https://people.math.ethz.ch/~grsam/ADVNCSE/ADVNCSE.pdf"
---

## Definition

**Input:** Two H-matrix representations $A,B$ on the same block-cluster partition $\mathcal P$, a rank cap $k\ge1$, and for each far block $b\in\mathcal P$ a factor-sum tree with node tolerances whose total is at most $\delta_b\ge0$. The tree leaves are the exact factors of $A_b$ and $B_b$.

**Procedure:** For each near block, store the exact dense sum $A_b+B_b$ and report local error $e_b=0$. For each far block, run [[alg-hlr-bottom-up-recompression]] on its factor-sum tree with cap $k$. If any block returns **tolerance-not-met**, return that status and the block identity; otherwise store the root factors, report the certified error bound $e_b$ returned by that routine, and retain the block partition. The input's node budgets sum to at most $\delta_b$, so $e_b\le\delta_b$ by the bottom-up error guarantee.
