---
id: ex-pac-mdp-delayed-q-zero-slack
kind: example
title: "Zero heuristic slack can still require one Delayed Q-learning update"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 7
deps:
  - def-admissible-mdp-heuristic
  - alg-delayed-q-learning
  - thm-delayed-q-learning-pac-bound
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
      locator: "§3.3.2, Lemma 25 and Theorem 16, PDF pp. 25–27 (printed pp. 2435–2436)."
generation:
  role: example
---

## Example

Consider a one-state MDP with $\gamma=0$ and actions $a,b$ of deterministic rewards $1,0$. Set $U(a)=U(b)=V^*(s)=V_{\max}=1$, use a tie order selecting $b$ first, and take any integer $m\ge1$ and $0<\epsilon_1<1/2$. Delayed Q-learning selects $b$ for its first $m$ samples and then lowers $Q(s,b)$, even though $\sum_{s,a}[U(s,a)-V^*(s)]_+=0$. In the PAC bound the resulting finite cost is covered by the additive $SA\epsilon(1-\gamma)$ term.

## Example references

[[def-admissible-mdp-heuristic|The admissible heuristic and zero positive slack]].

[[alg-delayed-q-learning|The batch threshold and update bonus]].

[[thm-delayed-q-learning-pac-bound|The corrected per-pair additive term]].

[Strehl, Li, and Littman, *Reinforcement Learning in Finite MDPs: PAC Analysis*](https://www.jmlr.org/papers/volume10/strehl09a/strehl09a.pdf).

## Facts & Assumptions

**Given:** The MDP, initialization, tie order, batch size, and bonus in the Example.

[F1] [[alg-delayed-q-learning]]: a batch updates exactly when the old value minus the sample mean is at least $2\epsilon_1$, replacing it by the sample mean plus $\epsilon_1$.

[F2] [[def-admissible-mdp-heuristic]]: $Q^*(s,a)\le U(s,a)$ and $D(s,a)=[U(s,a)-V^*(s)]_+$.

[F3] [[thm-delayed-q-learning-pac-bound]]: the count bound includes $SA\epsilon(1-\gamma)$ in addition to the sum of heuristic slacks.

## Proof

1.1 Initially $Q(s,a)=Q(s,b)=1$, so the tie order selects $b$. Since $\gamma=0$, each of its first $m$ targets is its observed reward $0$; no update occurs before the batch completes. At the $m$th sample the mean is $0$, so $Q(s,b)-0=1\ge2\epsilon_1$ and [F1] updates it to $\epsilon_1<1$. [given, F1, algebra]

2.1 The other action remains at value $1$, so the next greedy action is $a$. Also $V^*(s)=1$ and both heuristic values equal $1$, hence every $D(s,a)=0$ and their sum is zero. The batch of $m$ initial selections is a finite nonzero learning cost despite zero slack; [F3] retains a positive additive term $SA\epsilon(1-\gamma)$, which covers this per-pair initial-update allowance in the theorem's count calculation. [given, F2, F3, step 1.1, algebra] ∎
