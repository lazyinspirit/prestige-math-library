---
id: lem-adagrad-projection-exists
kind: lemma
title: A singular AdaGrad metric still has a projection minimizer
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - alg-adagrad
  - def-euclidean-inner-product
  - def-semicontinuity-on-euclidean-subsets
  - thm-euclidean-semicontinuous-extreme-value-theorem
  - thm-heine-borel-rn
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Elad Hazan, Introduction to Online Convex Optimization, second edition"
      url: "https://arxiv.org/pdf/1909.05207"
      locator: "§5.6, full-matrix AdaGrad update and metric projection, PDF pp. 113–118."
    - title: "John Duchi, Elad Hazan, and Yoram Singer, Adaptive Subgradient Methods for Online Learning and Stochastic Optimization"
      url: "https://www.jmlr.org/papers/volume12/duchi11a/duchi11a.pdf"
      locator: "§2, diagonal adaptive metric update, PDF pp. 8–10; existence on compact K is proved locally here."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Statement

Let $d\ge1$, let $K\subseteq\mathbb R^d$ be nonempty, bounded, closed, and convex, let $H$ be a fixed real positive-semidefinite matrix, and let $y\in\mathbb R^d$. The function $x\mapsto(x-y)^\top H(x-y)$ attains a minimum on $K$. This conclusion allows $H$ to be singular and makes no uniqueness claim.

## Statement references

[[alg-adagrad]]: the AdaGrad update uses this quadratic objective with $H=H_t$ and $y=y_{t+1}$.

## Facts & Assumptions

**Given:** A nonempty bounded closed convex $K\subseteq\mathbb R^d$, a fixed positive-semidefinite matrix $H$, and $y\in\mathbb R^d$.

[F1] [[alg-adagrad]]: the metric projection objective is $Q(x)=(x-y)^\top H(x-y)$, with $H$ positive semidefinite; its minimizer may be nonunique.

[F2] [[def-euclidean-inner-product]]: $\|v\|_2^2=\sum_{i=1}^d v_i^2$, so each coordinate satisfies $|v_i|\le\|v\|_2$.

[F3] [[def-semicontinuity-on-euclidean-subsets]]: every continuous real-valued function on a Euclidean subset is lower semicontinuous there.

[F4] [[thm-euclidean-semicontinuous-extreme-value-theorem]]: a real-valued lower semicontinuous function on a nonempty compact Euclidean set attains its minimum.

[F5] [[thm-heine-borel-rn]]: in finite-dimensional Euclidean space, a set is compact if it is closed and bounded.

## Proof

1.1 By [F5], the nonempty closed bounded set $K$ is compact. [given, F5]

1.2 Since $K$ is bounded, choose $B<\infty$ with $\|x\|_2\le B$ for every $x\in K$, and put $M=B+\|y\|_2$. For $x,z\in K$, expanding the finite matrix products and factoring each difference gives $Q(x)-Q(z)=\sum_{i,j=1}^d H_{ij}((x_i-z_i)(x_j-y_j)+(z_i-y_i)(x_j-z_j))$. Thus $|Q(x)-Q(z)|\le2M(\sum_{i,j}|H_{ij}|)\|x-z\|_2$, by [F2]; hence $Q$ is continuous on $K$. [given, F1, F2, algebra, choose]

2.1 By [F3], $Q$ is lower semicontinuous on $K$. Apply [F4] to the nonempty compact set in step 1.1 to obtain a minimizer. No step requires $H$ to be invertible, and the argument does not distinguish or select a unique minimizer. [step 1.1, step 1.2, F3, F4] ∎
