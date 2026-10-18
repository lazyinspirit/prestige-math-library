---
id: lem-na-discounted-bellman-policy-matrix-inverse-positive
kind: lemma
title: Inverse positivity of discounted finite-state policy matrices
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps: [def-na-finite-state-discounted-bellman-system, thm-invertible-matrix-theorem, lem-finite-set-has-max]
justified_by: []
aliases: []
dependency_level: 1
proof_strategy: direct
axiom_base: No choice principle is used; the argument is finite-dimensional real algebra.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Wang He, Reinforcement Learning: A Mathematical Introduction, Chapter 10, Policy Improvement and Policy Iteration"
      url: https://wanghemath.github.io/Book-MathRL/chapters/chapter-07-policy-improvement-and-policy-iteration.html
      locator: "§§10.3–10.6: finite exact policy evaluation and its linear system."
verification:
  precheck: pass
---

## Statement

For every policy $\pi$ in [[def-na-finite-state-discounted-bellman-system]],
the matrix $A^\pi=cI-Q^\pi$ is nonsingular, $(A^\pi)^{-1}$ is entrywise
nonnegative, and each diagonal entry of $(A^\pi)^{-1}$ is strictly positive.

## Facts & Assumptions

**Given:** A finite state set, $c>0$, and policy generator coefficients with
$q_{ij}\ge0$ for $i\ne j$ and $\sum_jq_{ij}=0$.

[F1] For the policy generator, $q_{ij}\ge0$ off the diagonal,
$\sum_jq_{ij}=0$, and $A=cI-Q$ ([[def-na-finite-state-discounted-bellman-system]]).

[F2] A real square matrix with trivial kernel is invertible
([[thm-invertible-matrix-theorem]]).

[F3] Every nonempty finite set of real numbers attains its maximum and minimum
([[lem-finite-set-has-max]]).

## Proof

1.1 Nonsingularity. Suppose $Az=0$ for a nonzero real vector $z$. The finite set $\{|z_j|:1\le j\le n\}$ has a maximum by [F3]; choose an index $i$ attaining it, so $|z_i|=\max_j|z_j|>0$. By the zero row sum, $(Az)_i=cz_i+\sum_{j\ne i}q_{ij}(z_i-z_j)$. If $z_i>0$, every term in the sum is nonnegative and $cz_i>0$, contradicting $(Az)_i=0$. If $z_i<0$, every sum term is nonpositive and $cz_i<0$, again a contradiction. Thus the kernel is zero, and [F2] makes the square matrix nonsingular. [F1, F2, F3, choose, algebra]

2.1 Inverse positivity. Let $y\ge0$ and let $z=A^{-1}y$, which exists by step 1.1. If $z_i<0$ at an index where $z$ is minimal, then $(Az)_i=cz_i+\sum_{j\ne i}q_{ij}(z_i-z_j)<0$, contradicting $y_i\ge0$. The finite set of coordinates of $z$ attains its minimum by [F3], so this argument proves $A^{-1}y=z\ge0$ for every $y\ge0$. Applying it to each standard basis vector shows that every entry of $A^{-1}$ is nonnegative. [F1, F3, step 1.1, choose, algebra]

3.1 Positive diagonal. Fix $i$ and set $z=A^{-1}e_i\ge0$ by step 2.1. If $z_i=0$, then $(Az)_i=\sum_{j\ne i}q_{ij}(0-z_j)\le0$, while $(Az)_i=(e_i)_i=1$. Hence $z_i=(A^{-1})_{ii}>0$. This proves the claim. [F1, step 2.1, algebra] ∎