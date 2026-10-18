---
id: ex-na-discounted-control-switching-policy-iteration
kind: example
title: A two-state switching example for discounted Howard iteration
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps: [def-na-finite-state-discounted-bellman-system, alg-na-finite-control-howard-policy-iteration, thm-na-howard-policy-iteration-monotone-improvement-termination]
justified_by: []
aliases: []
dependency_level: 4
proof_strategy: direct
axiom_base: All states, actions, policy solves, and comparisons are finite exact arithmetic.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Wang He, Reinforcement Learning: A Mathematical Introduction, Chapter 10, Policy Improvement and Policy Iteration"
      url: https://wanghemath.github.io/Book-MathRL/chapters/chapter-07-policy-improvement-and-policy-iteration.html
      locator: "§§10.6–10.10, policy improvement, exact policy iteration, and finite-state example."
    - title: "Kristian Debrabant and Espen R. Jakobsen, Semi-Lagrangian schemes for linear and fully non-linear Hamilton-Jacobi-Bellman equations"
      url: https://arxiv.org/pdf/1403.1217
      locator: "§1, controlled HJB operators and finite-control conventions, printed pp. 1–2."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Take states $S=\{1,2\}$ and discount $c=1$. At state $1$ the ordered actions
are `stay`, with generator row $(q_{11},q_{12})=(0,0)$ and reward $0$, then
`go`, with row $(-1,1)$ and reward $0$. At state $2$ the ordered actions are
`exit`, `tied-exit`, and `reset`, with rows respectively $(q_{21},q_{22})=(0,0)$,
$(0,0)$, and $(1,-1)$, and rewards $2,2,0$. The least-index initial policy
is `(stay, exit)`. Howard iteration makes one strict switch at state $1$,
retains `exit` at state `2` despite its tie, and terminates with value
$V=(1,2)$.

## Facts & Assumptions

**Given:** The finite discounted generator system and the deterministic strict-improvement/tie rule of [[alg-na-finite-control-howard-policy-iteration]].

[F1] A policy evaluation solves $(cI-Q^\pi)V=r^\pi$, and a state changes policy only if another action row is strictly greater; ties retain the current action ([[def-na-finite-state-discounted-bellman-system]], [[alg-na-finite-control-howard-policy-iteration]]).

[F2] Every strict policy switch weakly increases all values and strictly increases each switched value; termination occurs within the finite policy budget ([[thm-na-howard-policy-iteration-monotone-improvement-termination]]).

## Proof

1.1 Under `(stay, exit)`, the policy equations are $V_1=0$ and $V_2=2$, so $V=(0,2)$. At state $1$, the stay row has value $0$, while the go row has $-V_1+V_2=2>0$; hence the strict-improvement set contains state $1$. At state $2$, both exit actions have value $2=V_2$ and reset has value $V_1-V_2=-2$, so state $2$ is not switched. [F1, given, algebra]

2.1 The new policy `(go, exit)` solves $2V_1-V_2=0$ and $V_2=2$, hence $V=(1,2)$. At state $1$, go has value $-1+2=1=V_1$ and stay has value $0$; at state $2$, both exit rows remain tied at $2$ and reset has value $1-2=-1$. No strict improvement remains, so the algorithm terminates. The duplicate exit tie is retained exactly as specified, and the strict switch increases state $1$ from $0$ to $1$ as [F2] requires. [F1, F2, step 1.1, algebra] ∎
