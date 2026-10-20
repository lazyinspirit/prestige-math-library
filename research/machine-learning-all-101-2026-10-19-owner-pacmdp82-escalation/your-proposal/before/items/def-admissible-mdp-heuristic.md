---
id: def-admissible-mdp-heuristic
kind: definition
title: "Admissible upper heuristic for a discounted MDP"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-pac-mdp-bounded-reward-model
  - thm-pac-mdp-value-functions
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Alexander L. Strehl, Lihong Li, and Michael L. Littman, Reinforcement Learning in Finite MDPs: PAC Analysis"
      url: "https://www.jmlr.org/papers/volume10/strehl09a/strehl09a.pdf"
      locator: "§1.3, PDF p. 5 (printed p. 2416); admissible heuristics."
    - title: "Csaba Szepesvári, Algorithms for Reinforcement Learning"
      url: "https://old.sztaki.hu/~szcsaba/papers/RLAlgsInMDPs-lecture.pdf"
      locator: "§4.2.3, PDF pp. 50–51; optimistic initialization for R-max."
---

## Definition

For a bounded-reward finite discounted MDP, an **admissible upper heuristic** is a function $U:D\to[0,V_0]$ such that $Q^*(s,a)\le U(s,a)$ for every admissible pair and a supplied scalar satisfies $0\le V_0\le(1-\gamma)^{-1}$. Define the effective reward-scale cap $V_{\max}=\max\{1,V_0\}$. Then $U(s,a)\le V_{\max}\le(1-\gamma)^{-1}$. The floor at $1$ is part of this convention because an observed reward can lie anywhere in $[0,1]$, even when the heuristic values are all smaller than $1$.

## Definition references

[[def-pac-mdp-bounded-reward-model|The finite state-action domain and bounded real rewards]].

[[thm-pac-mdp-value-functions|Optimal action values and the geometric discounted-value cap]].

[Strehl, Li, and Littman, *Reinforcement Learning in Finite MDPs: PAC Analysis*](https://www.jmlr.org/papers/volume10/strehl09a/strehl09a.pdf).

[Szepesvári, *Algorithms for Reinforcement Learning*](https://old.sztaki.hu/~szcsaba/papers/RLAlgsInMDPs-lecture.pdf).
