---
id: alg-ucrl2
kind: algorithm
title: "UCRL2 for finite communicating MDPs"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps: [alg-extended-value-iteration, lem-ucrl2-uniform-confidence-bounds, lem-ucrl2-evi-termination]
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - {title: "Thomas Jaksch, Ronald Ortner, and Peter Auer, Near-optimal Regret Bounds for Reinforcement Learning", url: "https://www.jmlr.org/papers/volume11/jaksch10a/jaksch10a.pdf", locator: "§3, Algorithm 1 and §3.1, Algorithm 2, PDF pp. 5–7."}
    - {title: "Christos Dimitrakakis and Ronald Ortner, Decision Making Under Uncertainty and Reinforcement Learning: Theory and Algorithms", url: "https://www.cse.chalmers.se/~chrdimi/downloads/book.pdf", locator: "Chapter 10.3.1, UCRL2 Algorithm 10.1 and analysis, printed pp. 224–228."}
proof_strategy: direct
---

## Definition

Input a finite communicating MDP, horizon $T\ge1$, confidence parameter $\delta\in(0,1)$, and fixed orders of states/actions. Start one episode at $t_1=1$. At the start $t_k$ of episode $k$, let $N_k(s,a)$ be the number of visits to $(s,a)$ before $t_k$, with empirical reward mean $\widehat r_k(s,a)=0$ and a fixed default probability vector when $N_k(s,a)=0$. Otherwise use the empirical mean reward and empirical next-state distribution. Put $n_k(s,a)=\max\{1,N_k(s,a)\}$ and
$$b^r_k(s,a)=\sqrt{\frac{7\log(2SAt_k/\delta)}{2n_k(s,a)}},\qquad b^p_k(s,a)=\sqrt{\frac{14S\log(2At_k/\delta)}{n_k(s,a)}}.$$
Set $\widetilde r_k(s,a)=\min\{1,\widehat r_k(s,a)+b^r_k(s,a)\}$. Run extended value iteration with these estimates/radii and tolerance $1/\sqrt{t_k}$, obtaining a stationary deterministic policy $\pi_k$. Let $v_k(s,a)$ start at zero and count visits within this episode. Follow $\pi_k$ until some $v_k(s,a)$ reaches $\max\{1,N_k(s,a)\}$, or until $T$ observations have been made; then start the next episode if time remains. All ties use the fixed orders. The positive radii ensure finite inner termination by the separate termination lemma. In particular, always $v_k(s,a)\le\max\{1,N_k(s,a)\}$; when $N_k(s,a)>0$, a completed triggering episode doubles that pair's total count.

## Definition references

[Extended value iteration](../items/alg-extended-value-iteration.md): specifies the optimistic confidence-set Bellman updates and stopping rule.

[Uniform confidence bounds](../items/lem-ucrl2-uniform-confidence-bounds.md): supplies the simultaneous empirical reward and transition radii.

[UCRL2](https://www.jmlr.org/papers/volume11/jaksch10a/jaksch10a.pdf): §3, Algorithm 1, PDF pp. 5–6.

[Extended Value Iteration](https://www.jmlr.org/papers/volume11/jaksch10a/jaksch10a.pdf): §3.1, Algorithm 2, PDF pp. 6–7.

[Independent UCRL2 treatment](https://www.cse.chalmers.se/~chrdimi/downloads/book.pdf): Chapter 10.3.1, printed pp. 224–228.

[Finite EVI termination](../items/lem-ucrl2-evi-termination.md): proves that each positive-tolerance planning call returns.
