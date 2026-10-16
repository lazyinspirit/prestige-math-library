---
id: ex-qc-solovay-kitaev-error-budget
kind: example
title: A Three-Factor Solovay–Kitaev Error Budget
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 9
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps:
  - thm-qc-solovay-kitaev-error-and-resource-bound
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - cor-triangle-inequality-for-inner-product-norm
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Christopher M. Dawson and Michael A. Nielsen, The Solovay–Kitaev Algorithm, arXiv:quant-ph/0505030v2"
      url: https://arxiv.org/pdf/quant-ph/0505030
      locator: §2, compiler error allocation across a finite gate sequence, PDF pp. 3–4
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: https://arxiv.org/pdf/1907.09415
      locator: Ch. 2 §2.2, PDF pp. 26–29
---

## Statement

Suppose a fixed three-factor unitary block is $U=G_3G_2G_1$, where each
$G_j=e^{i\phi_j}S_j$ with $\phi_j\in\mathbb R$ and $S_j\in SU(2)$. If unitary
gate words $W_j$ satisfy
$\|S_j-W_j\|\le\varepsilon/3$, then the word product
$C=W_3W_2W_1$ satisfies
$\min_{|\lambda|=1}\|U-\lambda C\|\le\varepsilon$.

## Example

Take three one-qubit factors in a fixed decomposition of a block. Each
Solovay–Kitaev call is assigned one third of the total error tolerance. The
scalar phases are recorded as one phase for the whole unconditional block.

## Verification

**Given:** $G_j=e^{i\phi_j}S_j$ and unitary words $W_j$ with
$\|S_j-W_j\|\le\varepsilon/3$ for $j=1,2,3$.

[F1] The operator norm is submultiplicative
([[cor-operator-norm-submultiplicative-and-t-star-t-identity]]).

[F2] The operator norm is the maximum over unit vectors
([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]), and the
inner-product vector norm satisfies the triangle inequality
([[cor-triangle-inequality-for-inner-product-norm]]).

1.1 Insert one factor at a time: $S_3S_2S_1-W_3W_2W_1=(S_3-W_3)S_2S_1+ W_3(S_2-W_2)S_1+W_3W_2(S_1-W_1)$. [given, algebra]

2.1 Each $S_j$ and $W_j$ is unitary by the Given. For any unitary $Q$, $\|Qv\|=\|v\|$ for every unit vector $v$, so [F2] gives $\|Q\|=1$. The submultiplicativity in [F1] and the triangle inequality in [F2] therefore bound the norm of the right side by $\|S_3-W_3\|+\|S_2-W_2\|+\|S_1-W_1\|\le\varepsilon$. [F1, F2, step 1.1]

3.1 By Given, the scalar factors in $G_3G_2G_1$ multiply to $\lambda=e^{i(\phi_1+\phi_2+\phi_3)}$. Therefore $\|U-\lambda C\|=\|S_3S_2S_1-W_3W_2W_1\|\le\varepsilon$ by step 2.1. This is an unconditional-block guarantee; it does not license discarding $\lambda$ inside a later control. [given, step 2.1, algebra] ∎

