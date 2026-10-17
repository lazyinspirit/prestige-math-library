---
id: lem-diagonal-adagrad-subproblem-well-defined
kind: lemma
title: Diagonal AdaGrad subproblem has a unique minimizer
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-diagonal-adagrad-online-regret
  - def-proximal-mapping
  - thm-proximal-operator-existence-resolvent-firm-nonexpansive
  - def-proper-closed-convex-function-on-rn
  - def-indicator-function-of-closed-convex-set
  - lem-prox-indicator-is-euclidean-projection
  - def-convex-subset-of-euclidean-space
  - def-euclidean-inner-product
  - lem-positive-diagonal-map-preserves-closed-convexity
  - thm-of-square-roots
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Duchi, Elad Hazan, and Yoram Singer, Adaptive Subgradient Methods for Online Learning and Stochastic Optimization, JMLR 12 (2011)"
      url: https://jmlr.org/papers/volume12/duchi11a/duchi11a.pdf
      locator: Section 2, composite mirror-descent minimization update and its diagonal scaling.
    - title: "Sébastien Bubeck, Convex Optimization: Algorithms and Complexity, complete monograph"
      url: https://arxiv.org/pdf/1405.4980
      locator: Sections 3.1–3.3, Euclidean projection and proximal-gradient facts.
---

## Statement

Let C be a nonempty closed convex subset of R^d, let A=diag(a_1,...,a_d) with every a_j>0, and let eta>0 and x,g in R^d. Then the minimizer set

$$\operatorname*{argmin}_{z\in C}\{\eta\langle g,z\rangle+\tfrac12\|z-x\|_A^2\}$$

contains exactly one point.

## Facts & Assumptions

**Given:** C,A,eta,x,g and the AdaGrad objective in the Statement.

[F1] [[alg-diagonal-adagrad-online-regret]]: its update is the minimizer of eta<g,z>+||z-x||_A^2/2 over C, with A positive diagonal.

[F2] [[lem-positive-diagonal-map-preserves-closed-convexity]]: if T is diagonal with positive entries, TC is nonempty closed and convex whenever C is nonempty closed convex.

[F3] [[def-indicator-function-of-closed-convex-set]]: the indicator of a set is zero on the set and +infinity off it.

[F4] [[lem-prox-indicator-is-euclidean-projection]]: the indicator of a nonempty closed convex set is proper, closed, and convex.

[F5] [[def-proper-closed-convex-function-on-rn]]: proper means nonempty effective domain, convexity is the extended-real convexity inequality, and closedness means closed epigraph.

[F6] [[def-proximal-mapping]]: prox_g(v) is the set of global minimizers of g(y)+||y-v||_2^2/2 when the parameter is one.

[F7] [[thm-proximal-operator-existence-resolvent-firm-nonexpansive]]: for every proper closed convex g, prox_g(v) is a singleton.

[F8] [[thm-of-square-roots]]: each nonnegative real has a unique nonnegative square root.

[F9] [[def-euclidean-inner-product]]: the Euclidean squared norm is the sum of coordinate squares.

[F10] [[def-convex-subset-of-euclidean-space]]: convexity means every segment between points of C lies in C.

## Proof

**Given:** The set, matrix, and objective in the Statement.

1.1 Let T=diag(sqrt(a_1),...,sqrt(a_d)). By [F8] each entry is the nonnegative square root of a_j; it is nonzero because a_j>0, so T is invertible and T^2=A. Set C'=TC. Since T is positive diagonal, [F2] makes C' nonempty, closed, and convex; [F10] supplies the convex-set convention used by [F2]. Therefore [F3]–[F5] make its indicator ι_{C'} a proper closed convex function. [F2, F3, F4, F5, F8, F10, given, construct, algebra]

2.1 Put $v=Tx-\eta T^{-1}g$. Since $T$ is diagonal, $T(z-x)$ has squared norm $\|z-x\|_A^2$ and $\langle T(z-x),T^{-1}g\rangle=\langle z-x,g\rangle$. Coordinate expansion gives $\eta\langle g,z\rangle+\tfrac12\|z-x\|_A^2=\tfrac12\|Tz-v\|_2^2+\eta\langle g,x\rangle-\tfrac12\eta^2\|T^{-1}g\|_2^2$. The last two terms are independent of $z$, and $z\mapsto Tz$ bijects $C$ with $C'$, so the minimizers correspond to $\operatorname{prox}_{\iota_{C'}}(v)$ by [F3] and [F6]. [F1, F3, F6, F9, step 1.1, given, algebra]

3.1 By [F7] the latter proximal set is a singleton. The inverse map T^{-1} is one-to-one, so its corresponding minimizer z in C is also unique. This proves the Statement. [F7, step 2.1, algebra] ∎
