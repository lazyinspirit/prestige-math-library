---
id: def-projected-bellman-error
kind: definition
title: State-weighted Bellman error and projected Bellman error
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-finite-markov-decision-process
  - def-policy-bellman-operator
  - def-sum-over-a-finite-index-set
  - lem-projected-bellman-error-is-well-defined
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Richard S. Sutton and Andrew G. Barto, Reinforcement Learning: An Introduction, 2nd ed."
      url: "https://raw.githubusercontent.com/mutual-ai/Book/main/books/RL/RLbook2020.pdf"
      locator: "§9.2 and §11.4, equations (11.11)–(11.22): weighted state norm, linear projection, Bellman error vector, mean square Bellman error, and projected Bellman error."
    - title: "John N. Tsitsiklis and Benjamin Van Roy, An Analysis of Temporal-Difference Learning with Function Approximation"
      url: "https://web.mit.edu/~jnt/www/Papers/J063-97-bvr-td.pdf"
      locator: "§III.A, printed p. 677, stationary-distribution inner product, finite linear feature space, and weighted projection."
---

## Definition

Let $S$ be a nonempty finite state set of a finite Markov decision process, let $0\leq\gamma<1$, let $\pi$ be a stationary Markov policy, and let $\mu:S\to[0,1]$ satisfy $\sum_{s\in S}\mu(s)=1$. The function $\mu$ is a fixed state-weighting distribution; it need not be stationary for $\pi$. Let $d$ be a positive integer, let $\phi:S\to\mathbb R^d$ be a feature map, and for $w\in\mathbb R^d$ put $v_w(s)=\phi(s)^\mathsf T w$.

For real functions $f,g:S\to\mathbb R$, write $f\sim_\mu g$ when $\sum_{s\in S}\mu(s)(f(s)-g(s))^2=0$. Let $[f]_\mu$ denote the equivalence class of $f$ and define $\langle[f]_{\mu},[g]_{\mu}\rangle_\mu=\sum_{s\in S}\mu(s)f(s)g(s)$ and $\|[f]_\mu\|_\mu^2=\langle[f]_{\mu},[f]_{\mu}\rangle_\mu$. Let $H_\mu$ be the resulting finite-dimensional real inner-product space, and let $V_\mu$ be the span in $H_\mu$ of the equivalence classes of the $d$ coordinate feature functions.

For $h\in H_\mu$, let $\Pi_\mu h$ be the unique vector in $V_\mu$ whose difference from $h$ is orthogonal to every vector in $V_\mu$. The Bellman-error vector for $v_w$ is $\delta_w=[T^\pi v_w-v_w]_\mu$. Define the mean square Bellman error and mean square projected Bellman error by $\operatorname{BE}_\mu(w)=\|\delta_w\|_\mu^2$ and $\operatorname{PBE}_\mu(w)=\|\Pi_\mu\delta_w\|_\mu^2$.

## Definition references

[[def-finite-markov-decision-process|A finite state/action model with a joint one-step reward-transition law and stationary Markov policies]].

[[def-policy-bellman-operator|The finite discounted policy Bellman operator]].

[[def-sum-over-a-finite-index-set|Finite indexed sums]].

[[lem-projected-bellman-error-is-well-defined|The finite weighted quotient and feature span admit the stated unique projection]].

[Sutton and Barto, *Reinforcement Learning: An Introduction*, 2nd ed., §§9.2 and 11.4](https://raw.githubusercontent.com/mutual-ai/Book/main/books/RL/RLbook2020.pdf).

[Tsitsiklis and Van Roy, “An Analysis of Temporal-Difference Learning with Function Approximation,” §III.A](https://web.mit.edu/~jnt/www/Papers/J063-97-bvr-td.pdf).
