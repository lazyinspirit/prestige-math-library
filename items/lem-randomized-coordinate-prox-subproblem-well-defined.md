---
id: lem-randomized-coordinate-prox-subproblem-well-defined
kind: lemma
title: "Coordinate proximal subproblems are attained uniquely and descend"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-randomized-coordinate-proximal-descent
  - thm-proximal-operator-existence-resolvent-firm-nonexpansive
  - lem-coordinate-block-smoothness-descent-model
  - def-proper-closed-convex-function-on-rn
  - def-proximal-mapping
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Stephen J. Wright, Coordinate Descent Algorithms, §3.7"
      url: "https://arxiv.org/html/1502.04759v1"
    - title: "Clément Royer, Regularized, Large-Scale and Distributed Optimization, Lecture 3, §3.1"
      url: "https://www.lamsade.dauphine.fr/~croyer/ensdocs/RLD/LectureNotesOML-RLD.pdf"
---

## Statement

For the model and inputs of [[alg-randomized-coordinate-proximal-descent]], every selected exact block subproblem has a unique minimizer. If the update is exact, the objective does not increase. If its accepted inner point has certified model gap at most $\epsilon_k$, then the new objective is at most the old objective plus $\epsilon_k$.

## Facts & Assumptions

**Given:** A feasible iterate $x$, a selected block $i$, positive majorizer $M_i$, and proper closed convex block penalty $g_i$.

[F1] [[alg-randomized-coordinate-proximal-descent]]: the block model is $q_i(u)=\langle\nabla_i f(x),u-x_i\rangle+(M_i/2)\|u-x_i\|_2^2+g_i(u)$, and an accepted inexact point satisfies $q_i(u)-\inf q_i\le\epsilon_k$.

[F2] [[thm-proximal-operator-existence-resolvent-firm-nonexpansive]]: for proper closed convex $g$, positive $t$, and any $v$, the proximal set $\operatorname{prox}_{tg}(v)$ is a singleton.

[F3] [[def-proximal-mapping]]: $\operatorname{prox}_{tg}(v)$ is the set of global minimizers of $g(u)+\|u-v\|_2^2/(2t)$.

[F4] [[def-proper-closed-convex-function-on-rn]]: each $g_i$ is proper, closed and convex on its Euclidean block space.

[F5] [[lem-coordinate-block-smoothness-descent-model]]: changing one block by $h$ raises $f$ by at most $\langle\nabla_i f(x),h\rangle+(L_i/2)\|h\|_2^2$.

## Proof

1.1 Complete the square in $q_i$: with $v_i=x_i-M_i^{-1}\nabla_i f(x)$, its $u$-dependent terms are $g_i(u)+(M_i/2)\|u-v_i\|_2^2$. Taking $t=1/M_i>0$ in [F2]–[F4] proves the exact block minimizer exists and is unique. [F2, F3, F4, given, algebra]

2.1 For an exact update, $q_i(u^*)\le q_i(x_i)=g_i(x_i)$. For an accepted inexact update, [F1] gives $q_i(u)\le q_i(u^*)+\epsilon_k\le q_i(x_i)+\epsilon_k$. Apply [F5] with $h=u-x_i$ and cancel the unchanged penalties on the other blocks; the resulting objective is at most $F(x)$ in the exact case and at most $F(x)+\epsilon_k$ in the inexact case. [F1, F5, step 1.1, algebra] ∎

