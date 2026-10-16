---
id: thm-qa-22-adjoint-block-encoding
kind: theorem
title: Adjoint block encoding from inverse access
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 12
verification:
  precheck: pass
deps:
  - def-qa-22-block-encoding
  - def-qa-22-block-encoding-access-model
  - def-qc-dirac-notation-conversion
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - prop-adjoint-algebra
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 29 (17 April 2025)
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
    - title: András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond, Definition 43 and closure discussion
      url: https://arxiv.org/pdf/1806.01838
---

## Statement

Suppose $U$ is an $(\alpha,a,\varepsilon)$ block encoding of a square matrix $A$ with $\alpha>0$. If an implementation of $U^{\dagger}$ is separately supplied, then its zero-ancilla compression is $B_U^{\dagger}$ and

$$\left\|B_U^{\dagger}-\frac{A^{\dagger}}{\alpha}\right\|_{\rm op}=\left\|B_U-\frac{A}{\alpha}\right\|_{\rm op}\le\varepsilon.$$

For the declared rectangular padding $(E_{\rm in},E_{\rm out})$ of [[def-qa-22-block-encoding]], the same unitary $U^{\dagger}$ encodes $A^{\dagger}$ with the input and output embeddings swapped to $(E_{\rm out},E_{\rm in})$. The inverse circuit is an access requirement, not a free consequence of a matrix description.

## Facts & Assumptions

**Given:** A finite-dimensional block encoding with positive real normalization and the separately supplied inverse access specified in [[def-qa-22-block-encoding-access-model]].

[F1] [[def-qa-22-block-encoding]]: the compressed block is $B_U=J_a^{\dagger}UJ_a$ and the rectangular padded matrix is $\widehat A=E_{\rm out}AE_{\rm in}^{\dagger}$.

[F2] [[def-qa-22-block-encoding-access-model]]: $U^{\dagger}$ is a separate supplied operation with its own access cost.

[F3] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]: $\langle Tx,y\rangle=\langle x,T^{\dagger}y\rangle$.

[F4] [[prop-adjoint-algebra]]: $ (ST)^{\dagger}=T^{\dagger}S^{\dagger}$ and $(T^{\dagger})^{\dagger}=T$.

[F5] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: on a nonzero domain the operator norm is the maximum over unit vectors, and the zero-domain norm is zero.

[F6] [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]: $|\langle x,y\rangle|\le\|x\|\|y\|$.

## Proof

1.1 By [F1] and [F4], the supplied operation $U^{\dagger}$ from [F2] has compression $J_a^{\dagger}U^{\dagger}J_a=(J_a^{\dagger}UJ_a)^{\dagger}=B_U^{\dagger}$. In the rectangular case, $\widehat A^{\dagger}=E_{\rm in}A^{\dagger}E_{\rm out}^{\dagger}$, which is exactly the declared padding of $A^{\dagger}$ with the two embeddings exchanged. [F1, F2, F4, algebra]

1.2 For any vector $v$, [F5] and [F6] imply $\|v\|=\max_{\|y\|=1}|\langle v,y\rangle|$: Cauchy–Schwarz gives the upper bound, and if $v\ne0$ the unit vector $y=v/\|v\|$ attains it; for $v=0$ both sides are zero. Therefore, for any linear map $T:V\to W$ between nonzero finite-dimensional inner-product spaces, $\|T\|=\max_{\|x\|=\|y\|=1}|\langle Tx,y\rangle|=\max_{\|x\|=\|y\|=1}|\langle x,T^{\dagger}y\rangle|=\|T^{\dagger}\|$ by [F3] and maximizing over the unit vectors of $V$ and $W$. If either space is zero, both maps are zero and both norms are zero by [F5]. [F3, F5, F6, given, algebra]

2.1 In the rectangular case apply step 1.2 to $T=B_U-\widehat A/\alpha$; in the square case $\widehat A=A$. Since $\alpha$ is real, [F4] gives $T^{\dagger}=B_U^{\dagger}-\widehat A^{\dagger}/\alpha$, whose norm equals $\|T\|\le\varepsilon$. Also step 1.2 applied to $A$ gives $\|A^{\dagger}\|=\|A\|\le\alpha$. Together with the swapped padding of step 1.1, these are exactly the normalization and error requirements of [F1]. [step 1.1, step 1.2, F1, F4, algebra] ∎
