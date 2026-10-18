---
id: alg-h2-matrix-vector-multiplication
kind: algorithm
title: "Nested-basis H² matrix-vector multiplication"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - def-hlr-and-h2-block-matrix-representations
  - def-h2-nested-cluster-bases-and-interaction-lists
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
    - title: "Steffen Börm, Lars Grasedyck, and Wolfgang Hackbusch, Hierarchical Matrices, MiS Lecture Note 21 (2003; revised June 2006), Chapter 9, §§9.1–9.2"
      url: "https://files-www.mis.mpg.de/mpi-typo3/preprints/ln/lecturenote-2103.pdf"
    - title: "Ralf Hiptmair, AdvNumCSE Lecture Document, Chapter 2, “Local Low-Rank Compression of Non-Local Operators” (ETH Zürich, AT’23), §2.4.6"
      url: "https://people.math.ethz.ch/~grsam/ADVNCSE/ADVNCSE.pdf"
---

## Definition

**Input:** An H² representation $\widetilde A$ with row bases $U_\tau$, column bases $V_\sigma$, transfer matrices from [[def-h2-nested-cluster-bases-and-interaction-lists]], and a vector $x\in\mathbb F^J$.

**Procedure:**

1. Initialize an upward coefficient vector $z_\sigma$ for each column cluster. At each leaf $\sigma$, set $z_\sigma=V_\sigma^*x|_\sigma$. At each internal cluster $\sigma$ with children $\sigma_1,\sigma_2$, set $z_\sigma=\sum_{j=1}^2(E^V_{\sigma_j})^*z_{\sigma_j}$.
2. Initialize a downward coefficient vector $w_\tau=0$ for each row cluster and an output vector $y=0$. For each admissible leaf $(\tau,\sigma)$, add $S_{\tau\sigma}z_\sigma$ to $w_\tau$. For each near leaf $(\tau,\sigma)$, add $D_{\tau\sigma}x|_\sigma$ to $y|_\tau$.
3. Traverse the row tree from root to leaves. For each parent $\tau$ and child $\tau_i$, add $E^U_{\tau_i}w_\tau$ to $w_{\tau_i}$. At each row leaf $\tau$, add $U_\tau w_\tau$ to $y|_\tau$. Return $y$.

The upward and downward traversals follow the finite cluster trees; block and cluster contributions are accumulated in exact arithmetic.
