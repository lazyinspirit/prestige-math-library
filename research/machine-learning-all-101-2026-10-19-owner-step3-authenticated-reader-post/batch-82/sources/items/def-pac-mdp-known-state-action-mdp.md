---
id: def-pac-mdp-known-state-action-mdp
kind: definition
title: "Known-state/action MDP with optimistic self-loops"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-pac-mdp-bounded-reward-model
  - def-admissible-mdp-heuristic
  - thm-pac-mdp-value-functions
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Alexander L. Strehl, Lihong Li, and Michael L. Littman, Reinforcement Learning in Finite MDPs: PAC Analysis"
      url: "https://www.jmlr.org/papers/volume10/strehl09a/strehl09a.pdf"
      locator: "Definition 6 and Lemma 9, PDF pp. 13–14 (printed pp. 2425–2426)."
---

## Definition

Let $M$ be a bounded-reward finite discounted MDP with discount $\gamma$, let $K\subseteq D$ be a set of known state-action pairs, and let $q:D\to[0,V_{\max}]$ with $V_{\max}\le(1-\gamma)^{-1}$. The **known-state/action MDP** $M_K(q)$ agrees with $M$ on every pair in $K$. For each pair $(s,a)\notin K$, add a distinct absorbing state $\bot_{s,a}$ with one admissible action. The unknown pair transitions deterministically to $\bot_{s,a}$ and gives deterministic reward $(1-\gamma)q(s,a)$; the sink action self-loops with the same deterministic reward $(1-\gamma)q(s,a)$. These rewards lie in $[0,1]$. The sink state's value is $q(s,a)$, so the unknown pair's Bellman backup is exactly $(1-\gamma)q(s,a)+\gamma q(s,a)=q(s,a)$, independent of the value function on the original states.

## Definition references

[[def-pac-mdp-bounded-reward-model|The finite discounted MDP and its admissible state-action pairs]].

[[def-admissible-mdp-heuristic|The normalized discounted-value cap]].

[Strehl, Li, and Littman, *Reinforcement Learning in Finite MDPs: PAC Analysis*](https://www.jmlr.org/papers/volume10/strehl09a/strehl09a.pdf).
