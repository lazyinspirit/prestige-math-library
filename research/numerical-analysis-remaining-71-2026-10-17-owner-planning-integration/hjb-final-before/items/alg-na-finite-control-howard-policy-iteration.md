---
id: alg-na-finite-control-howard-policy-iteration
kind: algorithm
title: Finite-budget Howard policy iteration for a discounted generator Bellman system
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps: [def-na-finite-state-discounted-bellman-system, lem-na-discounted-bellman-policy-matrix-inverse-positive, lem-finite-set-has-max]
justified_by: []
aliases: []
dependency_level: 2
proof_strategy: not-applicable
axiom_base: All policies and states are finite, all solves are exact, and no choice principle is used.
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Wang He, Reinforcement Learning: A Mathematical Introduction, Chapter 10, Policy Improvement and Policy Iteration"
      url: https://wanghemath.github.io/Book-MathRL/chapters/chapter-07-policy-improvement-and-policy-iteration.html
      locator: "§§10.6–10.9: policy improvement, exact policy iteration, deterministic ties, and finite termination."
verification:
  precheck: n/a
---

## Definition

For the finite system of [[def-na-finite-state-discounted-bellman-system]],
order each finite set $A_i$ by its declared indices and put
$P=\prod_{i\in S}|A_i|$. The procedure takes an evaluation budget $K\ge1$
(default $K=P$) and proceeds as follows.

1. Initialize $\pi_0(i)$ to the least-index action in $A_i$.
2. For the current policy $\pi_k$, solve exactly
   $A^{\pi_k}V^k=r^{\pi_k}$.
3. Form the strict-improvement set
   $$J_k=\left\{i:\max_{a\in A_i}(Q_i^aV^k+r_i^a)>Q_i^{\pi_k(i)}V^k+r_i^{\pi_k(i)}\right\},$$
   where $Q_i^aV=\sum_jq^a_{ij}V_j$.
4. If $J_k=\varnothing$, return $(\texttt{converged},\pi_k,V^k)$.
5. If $J_k\ne\varnothing$ and $k+1=K$, return
   $(\texttt{budget\_exhausted},\pi_k,V^k)$; this status makes no Bellman-solution
   claim.
6. Otherwise, at each $i\in J_k$ switch to the least-index maximizing action
   in $A_i$; retain $\pi_k(i)$ at every state outside $J_k$ and continue.

The policy matrix solve is well-defined by
[[lem-na-discounted-bellman-policy-matrix-inverse-positive]]. A budget of $P$
policy evaluations is sufficient by the theorem below.
