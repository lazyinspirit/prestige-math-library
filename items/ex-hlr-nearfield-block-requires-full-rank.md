---
id: ex-hlr-nearfield-block-requires-full-rank
kind: example
title: "A nearfield identity block requires full rank for subunit spectral error"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-hlr-cluster-trees-and-geometric-admissibility
  - def-hlr-and-h2-block-matrix-representations
  - thm-eckart-young-best-rank-k-approximation
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Steffen Börm, Lars Grasedyck, and Wolfgang Hackbusch, Hierarchical
        Matrices, MiS Lecture Note 21 (2003; revised June 2006), §§1.5–1.6"
      url: "https://files-www.mis.mpg.de/mpi-typo3/preprints/ln/lecturenote-2103.pdf"
verification:
  precheck: pass
---

## Example

Let $\tau=\{1,2\}$ have coordinates $0$ and $1$, choose leaf threshold $b=2$, and use the block $\tau\times\tau$. Its distance from itself is zero, so it is inadmissible and terminates as a dense near block. For $I_2$, no rank-one approximation has operator-norm error below one.

## Facts & Assumptions

**Given:** The cluster $\tau$, its two coordinates, the threshold $b=2$, and the identity matrix $I_2$.

[F1] [[def-hlr-cluster-trees-and-geometric-admissibility]]: a pair is admissible only at positive distance, and the block recursion stops when both clusters are leaves.

[F2] [[def-hlr-and-h2-block-matrix-representations]]: near block leaves are stored as full dense matrices.

[F3] [[thm-eckart-young-best-rank-k-approximation]]: every rank-at-most-one matrix has operator-norm error at least the second singular value of the identity matrix.

[F4] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: the operator norm is the maximum vector stretch over unit vectors.

## Verification

1.1 Since $\operatorname{dist}(\tau,\tau)=0$, $(\tau,\tau)$ is not admissible. The cluster has size $b$ and is a leaf, so its block pair is terminal and near by [F1]; [F2] therefore stores this block densely. [given, F1, F2, algebra]

2.1 The singular values of $I_2$ are $1,1$. Applying [F3] with rank cap one shows $\|I_2-B\|_2\ge1$ for every rank-at-most-one $B$, where [F4] identifies this norm as the maximum unit-vector stretch. Thus replacing this dense near block by a rank-at-most-one matrix cannot meet any spectral error tolerance strictly below one. [given, F3, F4, algebra] ∎
