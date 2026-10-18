---
id: def-na-finite-state-discounted-bellman-system
kind: definition
title: Finite-state discounted generator Bellman system
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps: [def-natural-numbers, def-real-numbers, lem-finite-set-has-max]
justified_by: []
aliases: []
dependency_level: 0
proof_strategy: not-applicable
axiom_base: Definition only; all state and action sets are finite and no choice principle is used.
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Wang He, Reinforcement Learning: A Mathematical Introduction, Chapter 10, Policy Improvement and Policy Iteration"
      url: https://wanghemath.github.io/Book-MathRL/chapters/chapter-07-policy-improvement-and-policy-iteration.html
      locator: "§§10.2–10.9: finite discounted policy evaluation, greedy improvement, and policy iteration."
verification:
  precheck: n/a
---

## Definition

Let $S=\{1,\ldots,n\}$ be a nonempty finite state set, let each state $i$
have a nonempty finite ordered action set $A_i$, and let $c>0$. For
$a\in A_i$, choose real coefficients $q^a_{ij}$ satisfying
$$q^a_{ij}\ge0\quad(j\ne i),\qquad \sum_{j=1}^nq^a_{ij}=0,$$
and a reward $r_i^a\in\mathbb R$. The row $q_i^a$ is a conservative generator
row. A deterministic policy is a map $\pi$ with $\pi(i)\in A_i$. Its policy
matrix and reward vector are
$$A^\pi_{ij}=c\,\delta_{ij}-q^{\pi(i)}_{ij},\qquad r^\pi_i=r_i^{\pi(i)}.$$
The **discounted finite-state Bellman system** is
$$cV_i-\max_{a\in A_i}\left(\sum_{j=1}^nq^a_{ij}V_j+r_i^a\right)=0, \qquad i\in S.$$
The policy evaluation equation for $\pi$ is $A^\pi V=r^\pi$.

Here $\delta_{ij}$ is $1$ when $i=j$ and $0$ otherwise.

## Remarks

For any $\lambda>\max_{i,a}(-q^a_{ii})$, define, for each $i$ and $a\in A_i$,
$p^a_{ij}=\delta_{ij}+q^a_{ij}/\lambda$. Each such row has nonnegative
entries and sums to one. Substituting
$q^a_{ij}=\lambda(p^a_{ij}-\delta_{ij})$ gives the equivalent system
$$V_i=\max_{a\in A_i}\left(\gamma\sum_jp^a_{ij}V_j+\frac{r_i^a}{c+\lambda}\right),\qquad \gamma=\frac{\lambda}{c+\lambda}<1.$$
This is a finite discrete-time discounted Bellman system with state-dependent
action sets; no stochastic process representation is needed by the
policy-iteration proof.
