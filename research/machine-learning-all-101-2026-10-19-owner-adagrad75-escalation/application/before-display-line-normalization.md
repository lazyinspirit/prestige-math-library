---
id: lem-adagrad-accumulated-gram-matrix-is-psd
kind: lemma
title: "AdaGrad accumulated Gram matrices and both scales are positive semidefinite"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - alg-adagrad
  - def-matrix-product-and-identity-matrix
  - def-transpose-of-a-matrix
  - lem-of-sign-rules
  - lem-psd-matrix-has-unique-psd-square-root
  - thm-of-square-roots
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all sums are finite."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Duchi, Hazan, and Singer, Adaptive Subgradient Methods for Online Learning and Stochastic Optimization, §2 (AdaGrad background; the finite Gram identity is proved locally here)"
      url: "https://www.jmlr.org/papers/volume12/duchi11a/duchi11a.pdf"
---

## Statement

For the AdaGrad inputs, at each round $t\in\{0,\ldots,T\}$ the accumulated matrix $G_t=\sum_{s=1}^t g_sg_s^\top$, with $G_0=0$, is a finite real symmetric positive-semidefinite matrix. More precisely, for every $v\in\mathbb R^d$,
$$
v^\top G_tv=\sum_{s=1}^t(g_s^\top v)^2\ge0,
\qquad
(G_t)_{ii}=\sum_{s=1}^t g_{s,i}^2\ge0.
$$
Here the coordinate and matrix-entry labels $i,j\in\{1,\ldots,d\}$ are one-based: $g_{s,i}=g_s(i-1)$ and $(G_t)_{ij}=G_t(i-1,j-1)$ in the underlying zero-based conventions. Empty sums have value zero. Therefore both the full-matrix scale $G_t^{1/2}$ and the diagonal scale $\operatorname{diag}(\sqrt{(G_t)_{11}},\ldots,\sqrt{(G_t)_{dd}})$ exist and are finite real symmetric positive-semidefinite matrices. Singular and zero accumulated matrices are allowed.

## Statement references

[[alg-adagrad]]: defines the accumulated gradient outer products and the two choices of scale.

## Facts & Assumptions

**Given:** Any finite gradient history $g_1,\ldots,g_t\in\mathbb R^d$ admitted by AdaGrad, including $t=0$. Coordinate and matrix-entry subscripts use the one-based relabeling specified in the Statement.

[F1] [[alg-adagrad]]: the accumulator is $G_t=\sum_{s=1}^tg_sg_s^\top$; its full and diagonal scales are the two matrices in the Statement.

[F2] [[def-matrix-product-and-identity-matrix]] [[def-transpose-of-a-matrix]]: finite matrix multiplication is given by sums of entrywise products, and transposition interchanges the two indices.

[F3] [[lem-of-sign-rules]]: a square of a real number is nonnegative, by the positive, negative, and zero cases; a finite sum of such squares is nonnegative.

[F4] [[lem-psd-matrix-has-unique-psd-square-root]]: every real symmetric positive-semidefinite matrix has a unique real symmetric positive-semidefinite square root.

[F5] [[thm-of-square-roots]]: every nonnegative real number has a unique nonnegative real square root.

## Proof

1.1 Write $g_{s,i}$ for the $i$th coordinate of $g_s$. By [F1, F2], $(G_t)_{ij}=\sum_{s=1}^tg_{s,i}g_{s,j}$. These are finite real sums, and commutativity of real multiplication gives $(G_t)_{ij}=(G_t)_{ji}$. Thus $G_t$ is finite and symmetric, also when $t=0$. [given, F1, F2, algebra]

2.1 For arbitrary $v\in\mathbb R^d$, expand $v^\top G_tv$ by [F2] and interchange the finite sum over $s$ with the two coordinate sums. For each $s$, the coordinate sums factor as $(\sum_i g_{s,i}v_i)(\sum_j g_{s,j}v_j)=(g_s^\top v)^2$. Hence $v^\top G_tv=\sum_s(g_s^\top v)^2\ge0$ by [F3], including the empty sum when $t=0$. Taking $i=j$ in step 1.1 also gives $(G_t)_{ii}=\sum_sg_{s,i}^2\ge0$. [step 1.1, F2, F3, algebra]

3.1 Steps 1.1 and 2.1 verify every input hypothesis of [F4], which gives the unique full-matrix scale as a finite real symmetric positive-semidefinite matrix. By [F5], each $r_i=\sqrt{(G_t)_{ii}}$ exists and is a nonnegative finite real. The diagonal matrix $D=\operatorname{diag}(r_1,\ldots,r_d)$ is symmetric, and $v^\top Dv=\sum_i r_iv_i^2\ge0$ by [F2, F3]. Thus the diagonal scale has the same required properties, with no positive-definiteness assumption. [step 1.1, step 2.1, F2, F3, F4, F5, algebra] ∎
