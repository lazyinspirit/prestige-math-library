---
id: thm-na-howard-policy-iteration-monotone-improvement-termination
kind: theorem
title: Monotone improvement and finite termination of exact Howard iteration
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps: [alg-na-finite-control-howard-policy-iteration, lem-na-discounted-bellman-policy-matrix-inverse-positive, def-na-finite-state-discounted-bellman-system, lem-finite-set-has-max]
justified_by: []
aliases: []
dependency_level: 3
proof_strategy: direct
axiom_base: No choice principle is used; policy and state sets are finite.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Wang He, Reinforcement Learning: A Mathematical Introduction, Chapter 10, Policy Improvement and Policy Iteration"
      url: https://wanghemath.github.io/Book-MathRL/chapters/chapter-07-policy-improvement-and-policy-iteration.html
      locator: "§§10.6–10.9: policy-improvement theorem, exact algorithm, and finite termination."
verification:
  precheck: pass
---

## Statement

For exact policy evaluations, every strict switch in
[[alg-na-finite-control-howard-policy-iteration]] weakly increases the policy
value at every state and strictly increases it at each switched state. No
deterministic policy can recur after a strict switch. With budget
$P=\prod_i|A_i|$, the algorithm terminates within $P$ policy evaluations at
the unique solution of the Bellman system in
[[def-na-finite-state-discounted-bellman-system]]. A smaller budget may return
`budget_exhausted` without a solution claim.

## Facts & Assumptions

**Given:** A finite nonempty state set, finite ordered nonempty action sets,
generator rows, rewards, $c>0$, exact policy solves, and the iteration of
[[alg-na-finite-control-howard-policy-iteration]].

[F1] At each nonterminal policy $\pi_k$, the algorithm solves
$A^{\pi_k}V^k=r^{\pi_k}$ and changes only states where another action has
strictly greater Bellman row value; at such states it chooses a maximizing
action ([[alg-na-finite-control-howard-policy-iteration]]).

[F2] Every policy matrix inverse is entrywise nonnegative with strictly
positive diagonal ([[lem-na-discounted-bellman-policy-matrix-inverse-positive]]).

[F3] The policy set has exactly $P=\prod_i|A_i|$ possible deterministic
policies; every finite nonempty set of real values attains its extrema
([[def-na-finite-state-discounted-bellman-system]], [[lem-finite-set-has-max]]).

## Proof

1.1 Let $\pi_{k+1}$ follow a strict-improvement step from $\pi_k$. At an unchanged state $i$, $\pi_{k+1}(i)=\pi_k(i)$, so $(r^{\pi_{k+1}}-A^{\pi_{k+1}}V^k)_i=0$ by [F1]. At a switched state $i$, the new action has $\sum_jq^{\pi_{k+1}(i)}_{ij}V_j^k+r_i^{\pi_{k+1}(i)}>cV_i^k$, while the old policy equation gives $\sum_jq^{\pi_k(i)}_{ij}V_j^k+r_i^{\pi_k(i)}=cV_i^k$. Therefore the vector $z=r^{\pi_{k+1}}-A^{\pi_{k+1}}V^k$ is nonnegative and is strictly positive at every switched state. [F1, given, algebra]

2.1 The new exact policy solve gives $$A^{\pi_{k+1}}(V^{k+1}-V^k)=r^{\pi_{k+1}}-A^{\pi_{k+1}}V^k=z.$$ Multiplying by the nonnegative inverse in [F2] yields $V^{k+1}-V^k=(A^{\pi_{k+1}})^{-1}z\ge0$. At a switched state $i$, the $i$th coordinate is at least $(A^{\pi_{k+1}})^{-1}_{ii}z_i>0$, so the value increase is strict there. [F2, step 1.1, algebra]

3.1 If a policy recurred after at least one strict switch, exact evaluation of that same nonsingular policy matrix would reproduce its unique value vector, contradicting the componentwise nondecrease and the strict increase at each intervening switch from step 2.1. Thus all evaluated policies are distinct. There are only $P$ policies by [F3], so after at most $P$ evaluations the strict-improvement set is empty; the budget-$P$ algorithm cannot exhaust first. [F1, F3, step 2.1, algebra]

4.1 At termination, no action row exceeds the current policy row at any state. The policy equation says that the current row equals $cV_i$; hence $cV_i=\max_a(\sum_jq^a_{ij}V_j+r_i^a)$ at every state, so $V$ solves the Bellman system. For uniqueness, suppose $V,W$ are two solutions and let $d=V-W$. Choose a state $i$ where $d_i=\max_jd_j$, which exists by [F3]. For every action, $$\sum_jq^a_{ij}d_j=\sum_{j\ne i}q^a_{ij}(d_j-d_i)\le0$$ by the generator signs and row sum. The difference of the two maxima is at most the maximum of the rowwise differences, so $cd_i\le\max_a\sum_jq^a_{ij}d_j\le0$, whence $d_i\le0$. Thus $\max_j(V_j-W_j)\le0$. Interchanging $V,W$ gives the reverse inequality, so $V=W$. [F3, step 3.1, algebra] ∎