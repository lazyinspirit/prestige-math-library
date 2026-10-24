---
id: alg-hlr-block-matvec
kind: algorithm
title: "H-matrix block matrix-vector multiplication"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-hlr-and-h2-block-matrix-representations]
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
    - title: "Steffen Börm, Lars Grasedyck, and Wolfgang Hackbusch, Hierarchical Matrices, MiS Lecture Note 21 (2003; revised June 2006), §1.6"
      url: "https://files-www.mis.mpg.de/mpi-typo3/preprints/ln/lecturenote-2103.pdf"
    - title: "Ralf Hiptmair, AdvNumCSE Lecture Document, Chapter 2, “Local Low-Rank Compression of Non-Local Operators” (ETH Zürich, AT’23), §2.3.5"
      url: "https://people.math.ethz.ch/~grsam/ADVNCSE/ADVNCSE.pdf"
---

## Definition

**Input:** An H-matrix representation $\widetilde A$ on a finite block-cluster partition $\mathcal P$ as in [[def-hlr-and-h2-block-matrix-representations]], and a vector $x\in\mathbb F^J$.

**Procedure:** Initialize $y\in\mathbb F^I$ to zero. For every far block $b=(\tau,\sigma)$ with factors $U_b,V_b$, compute $z_b=V_b^*x|_\sigma$ and add $U_bz_b$ to $y|_\tau$. For every near block with dense entries $D_b$, compute $D_bx|_\sigma$ and add it to $y|_\tau$. Return $y$. All arithmetic is exact; contributions to a row cluster are summed over its block leaves.
