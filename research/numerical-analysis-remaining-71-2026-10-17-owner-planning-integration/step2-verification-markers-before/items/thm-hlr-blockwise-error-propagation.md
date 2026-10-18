---
id: thm-hlr-blockwise-error-propagation
kind: theorem
title: "Blockwise Frobenius errors propagate by disjoint block sums"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps:
  - alg-hlr-block-addition
  - alg-hlr-block-product
  - thm-hlr-core-svd-recompression-is-best-rank-tolerance
  - lem-hlr-bottom-up-recompression-error-bound
  - lem-hlr-block-cluster-leaves-partition-index-pairs
  - def-finite-tensor-arrays-and-frobenius-inner-product
  - thm-cauchy-schwarz-in-an-inner-product-space
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Steffen Börm, Lars Grasedyck, and Wolfgang Hackbusch, Hierarchical Matrices, MiS Lecture Note 21 (2003; revised June 2006), §§1.6, 6.2"
      url: "https://files-www.mis.mpg.de/mpi-typo3/preprints/ln/lecturenote-2103.pdf"
    - title: "Ralf Hiptmair, AdvNumCSE Lecture Document, Chapter 2, “Local Low-Rank Compression of Non-Local Operators” (ETH Zürich, AT’23), §§2.4.2–2.4.4"
      url: "https://people.math.ethz.ch/~grsam/ADVNCSE/ADVNCSE.pdf"
---

## Statement

For any finite matrix partition into disjoint blocks, if each local residual satisfies $\|E_b\|_F\le\delta_b$, then the assembled residual satisfies $\|E\|_F\le(\sum_b\delta_b^2)^{1/2}$. In particular, let $A,B$ be conformable finite real or complex matrices, and let $\widetilde A,\widetilde B$ be approximations with $\|A-\widetilde A\|_F\le\epsilon_A$ and $\|B-\widetilde B\|_F\le\epsilon_B$. If a successful block addition or block product from [[alg-hlr-block-addition]] or [[alg-hlr-block-product]] returns $\widehat S$ or $\widehat C$, with disjoint output blocks $b$ and local Frobenius errors $e_b\le\delta_b$, put $\delta=(\sum_b\delta_b^2)^{1/2}$. Then

$$\|A+B-\widehat S\|_F\le\epsilon_A+\epsilon_B+\delta,$$

and

$$\|AB-\widehat C\|_F\le\epsilon_A\|B\|_F+\|A\|_F\epsilon_B+\epsilon_A\epsilon_B+\delta.$$

## Facts & Assumptions

**Given:** The target matrices, their H-matrix approximations, successful block-operation outputs, and local block-error budgets.

[F1] [[alg-hlr-block-addition]] and [[alg-hlr-block-product]]: near blocks are computed exactly; on success, each far output block has a certified Frobenius error bound $e_b$ no larger than its allocated tolerance.

[F2] [[lem-hlr-bottom-up-recompression-error-bound]]: for each successful factor-sum tree, the returned block approximation error is at most the sum of its nodewise core-SVD discarded-tail norms, which is bounded by the sum of its node tolerances.

[F3] [[lem-hlr-block-cluster-leaves-partition-index-pairs]]: every recursively generated terminal block partition is pairwise disjoint and covers the output index-pair set.

[F4] [[def-finite-tensor-arrays-and-frobenius-inner-product]]: the Frobenius norm is the Euclidean norm of the finite matrix-entry list.

[F5] [[thm-cauchy-schwarz-in-an-inner-product-space]]: the absolute inner product of two vectors is at most the product of their norms.

## Proof

1.1 Let $\Delta_b$ be the actual residual in output block $b$. For near blocks it is zero; for far blocks [F1] and [F2] give $\|\Delta_b\|_F\le e_b\le\delta_b$. By [F3] their entry supports are disjoint, so [F4] gives $\|\Delta\|_F^2=\sum_b\|\Delta_b\|_F^2\le\sum_b\delta_b^2$. Hence $\|\Delta\|_F\le\delta$. [F1, F2, F3, F4, algebra]

2.1 For addition, write $\widehat S=\widetilde A+\widetilde B+\Delta$. Expanding the squared Frobenius norm as the finite entry inner product and applying [F5] gives the triangle inequality. Therefore $\|A+B-\widehat S\|_F\le\|A-\widetilde A\|_F+\|B-\widetilde B\|_F+\|\Delta\|_F\le\epsilon_A+\epsilon_B+\delta$. [F4, F5, step 1.1, algebra]

3.1 For multiplication, put $E_A=\widetilde A-A$ and $E_B=\widetilde B-B$. Since $\widehat C=\widetilde A\widetilde B+\Delta$, expansion gives $AB-\widehat C=-(E_AB+AE_B+E_AE_B+\Delta)$. For any conformable $X,Y$, entrywise Cauchy–Schwarz gives $|(XY)_{ij}|^2\le(\sum_\ell|X_{i\ell}|^2)(\sum_\ell|Y_{\ell j}|^2)$; summing over $i,j$ gives $\|XY\|_F^2\le\|X\|_F^2\|Y\|_F^2$. Thus $\|E_AB\|_F\le\epsilon_A\|B\|_F$, $\|AE_B\|_F\le\|A\|_F\epsilon_B$, and $\|E_AE_B\|_F\le\epsilon_A\epsilon_B$. The triangle inequality from [F4,F5] and step 1.1 give the stated product bound. [F4, F5, step 1.1, algebra] ∎
