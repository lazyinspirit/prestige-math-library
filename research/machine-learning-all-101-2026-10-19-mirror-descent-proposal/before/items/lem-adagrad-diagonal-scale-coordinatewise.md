---
id: lem-adagrad-diagonal-scale-coordinatewise
kind: lemma
title: The diagonal AdaGrad scale is the coordinatewise square root
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - alg-adagrad
  - def-matrix-product-and-identity-matrix
  - thm-matrix-of-the-adjoint-is-the-conjugate-transpose
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Elad Hazan, Introduction to Online Convex Optimization, second edition"
      url: "https://arxiv.org/pdf/1909.05207"
      locator: "§5.6, Algorithm 19 diagonal scale and notation, PDF pp. 113–118; the coordinatewise identity is proved locally here."
    - title: "John Duchi, Elad Hazan, and Yoram Singer, Adaptive Subgradient Methods for Online Learning and Stochastic Optimization"
      url: "https://www.jmlr.org/papers/volume12/duchi11a/duchi11a.pdf"
      locator: "§2, Figure 1 and Algorithm 1, coordinatewise accumulated squared gradients, PDF pp. 8–10."
verification:
  precheck: n/a
---

## Statement

For the diagonal AdaGrad choice $H_t=\operatorname{diag}(\sqrt{(G_t)_{11}},\ldots,\sqrt{(G_t)_{dd}})$ with $G_t=\sum_{s=1}^t g_sg_s^\top$, the $i$th diagonal entry is

$$ (H_t)_{ii}=\sqrt{\sum_{s=1}^t g_{s,i}^2},\qquad i=1,\ldots,d.$$

## Statement references

[[alg-adagrad]]: defines the accumulated Gram matrix and the diagonal AdaGrad scale.

[[def-matrix-product-and-identity-matrix]]: defines the coordinate formula for matrix products.

[[thm-matrix-of-the-adjoint-is-the-conjugate-transpose]]: identifies the transpose entries used in the outer product.

## Facts & Assumptions

**Given:** The vectors $g_1,\ldots,g_t\in\mathbb R^d$ and the diagonal-scale definition in the statement.

[F1] [[alg-adagrad]]: $G_t=\sum_{s=1}^tg_sg_s^\top$ and $H_t=\operatorname{diag}(\sqrt{(G_t)_{11}},\ldots,\sqrt{(G_t)_{dd}})$ for the diagonal choice.

[F2] [[def-matrix-product-and-identity-matrix]] [[thm-matrix-of-the-adjoint-is-the-conjugate-transpose]]: $(g_sg_s^\top)_{ii}=g_{s,i}g_{s,i}$ by the matrix-product entry formula and transpose convention.

## Proof

1.1 For each $i$, the definition of matrix multiplication gives $(G_t)_{ii}=\sum_{s=1}^t(g_sg_s^\top)_{ii}=\sum_{s=1}^t g_{s,i}g_{s,i}=\sum_{s=1}^t g_{s,i}^2$. [given, F1, F2, algebra]

2.1 Taking the nonnegative scalar square root of the identity in step 1.1 and using the diagonal-scale definition in [F1] gives $(H_t)_{ii}=\sqrt{\sum_{s=1}^t g_{s,i}^2}$ for every $i$. [step 1.1, F1, algebra] ∎

