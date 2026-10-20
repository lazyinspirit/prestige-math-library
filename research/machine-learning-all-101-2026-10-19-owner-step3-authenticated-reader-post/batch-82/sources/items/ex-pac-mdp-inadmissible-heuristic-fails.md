---
id: ex-pac-mdp-inadmissible-heuristic-fails
kind: example
title: "An inadmissible heuristic can suppress exploration forever"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - def-pac-mdp-bounded-reward-model
  - def-pac-mdp-sample-complexity
  - alg-r-max
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
      locator: "§1.3 and §2.1, PDF p. 5 and pp. 7–10 (printed p. 2417 and pp. 2419–2422)."
generation:
  role: example
---

## Example

Consider a one-state MDP with $\gamma=0$ and actions $a,b$ having deterministic rewards $1,0$. Run the R-MAX procedure outside its admissibility guarantee with the inadmissible heuristic $U(a)=U(b)=0$, supplied scalar $V_0=0$ (so $V_{\max}=1$), tolerance $\beta=1/2$, any integer threshold $m\ge1$, and a tie order that selects $b$ first. It observes only $b$, chooses $b$ forever, and is $1/2$-bad at every time.

## Example references

[[def-pac-mdp-bounded-reward-model|The one-state MDP and deterministic rewards]].

[[alg-r-max|Unknown action values remain at their heuristic until visited]].

[[def-pac-mdp-sample-complexity|Bad-step continuation values and the count]].

[Strehl, Li, and Littman, *Reinforcement Learning in Finite MDPs: PAC Analysis*](https://www.jmlr.org/papers/volume10/strehl09a/strehl09a.pdf).

## Facts & Assumptions

**Given:** The MDP, heuristic, tie order, threshold, and algorithm in the Example.

[F1] [[alg-r-max]]: a visited pair becomes known after $m$ samples and receives its empirical reward mean; an unvisited pair keeps its heuristic value.

[F2] [[def-pac-mdp-bounded-reward-model]]: the pair $a$ has true optimal action value $Q^*(s,a)=1$.

[F3] [[def-pac-mdp-sample-complexity]]: with $\gamma=0$, an action with reward $0$ has zero continuation value and is bad for $\epsilon=1/2$ when $V^*=1$.

## Proof

1.1 Initially both action values equal $0$, so the fixed tie order chooses $b$. Its next state is the same state and its reward is $0$. Before the $m$th observation it remains unknown at value $0$. Since $\gamma=0$ and $\beta=1/2$, the sweep count is $L=\max\{1,\lceil\ln 2\rceil\}=1$; on reaching $m$ samples, its empirical reward mean is $0$ and this sweep gives its known backup $0$, while the unvisited action $a$ still has heuristic value $0$. [given, F1, F2, algebra]

2.1 The rebuilt values remain tied at zero, so the tie order again selects $b$. Induction over subsequent visits shows $a$ is never sampled and the table always has $Q(s,a)=Q(s,b)=0$. The heuristic is inadmissible since $U(a)=0<1=Q^*(s,a)$. At every time the continuation reward is zero, while $V^*(s)=1$, so $0<1-1/2$ and every time is bad. [given, F1, F2, F3, step 1.1, induction] ∎
