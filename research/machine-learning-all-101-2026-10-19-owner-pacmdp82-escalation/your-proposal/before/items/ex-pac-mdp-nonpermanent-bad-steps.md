---
id: ex-pac-mdp-nonpermanent-bad-steps
kind: example
title: "A finite bad-step count need not be a permanent stopping time"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-pac-mdp-bounded-reward-model
  - def-pac-mdp-sample-complexity
  - thm-pac-mdp-value-functions
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Alexander L. Strehl, Lihong Li, and Michael L. Littman, Reinforcement Learning in Finite MDPs: PAC Analysis"
      url: "https://www.jmlr.org/papers/volume10/strehl09a/strehl09a.pdf"
      locator: "§1.5, discussion following Definitions 1–2, PDF pp. 6–7 (printed p. 2418)."
generation:
  role: example
---

## Example

Consider a one-state MDP with $\gamma=0$ and two actions $a,b$ whose deterministic rewards are $1,0$, respectively. For an integer $n\ge1$, let a deterministic history-dependent controller choose $b$ at times $1,\ldots,n$ and $n+2$, and choose $a$ at every other time. For $\epsilon=1/2$, it has exactly $n+1$ bad steps, including one after a good step.

## Example references

[[def-pac-mdp-bounded-reward-model|The one-state finite MDP and deterministic rewards]].

[[def-pac-mdp-sample-complexity|Bad steps are counted over the whole run, with no prefix condition]].

[[thm-pac-mdp-value-functions|Optimal value and continuation values]].

[Strehl, Li, and Littman, *Reinforcement Learning in Finite MDPs: PAC Analysis*](https://www.jmlr.org/papers/volume10/strehl09a/strehl09a.pdf).

## Facts & Assumptions

**Given:** The MDP, controller, time indices, and $\epsilon$ in the Example.

[F1] [[thm-pac-mdp-value-functions]]: with $\gamma=0$, the continuation value is the expected immediate reward and the optimal state value is $1$.

[F2] [[def-pac-mdp-sample-complexity]]: a time is $\epsilon$-bad exactly when its continuation value is strictly below $V^*(s)-\epsilon$.

## Proof

1.1 Since $\gamma=0$, every reward after the next reward has coefficient zero. Thus the controller continuation value at time $t$ is exactly the deterministic reward of its action at $t$, while the optimal value is $V^*=1$. [given, F1, algebra]

2.1 At exactly the indices $1,\ldots,n,n+2$, the chosen action is $b$, so its continuation value is $0<1-1/2$ and each of those times is bad by [F2]. At every other time it chooses $a$ and has value $1$, so that time is not bad. There are $n+1$ bad indices, and $n+2$ is bad after the good index $n+1$. [given, F1, F2, step 1.1, algebra] ∎
