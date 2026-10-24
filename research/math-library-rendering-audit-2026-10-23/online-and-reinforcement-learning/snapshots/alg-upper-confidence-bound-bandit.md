---
id: alg-upper-confidence-bound-bandit
kind: algorithm
title: "Finite-horizon upper-confidence-bound bandit algorithm"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps: [def-stochastic-bandit-and-pseudo-regret, def-natural-logarithm, thm-natural-logarithm-laws]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Tor Lattimore and Csaba Szepesvári, Bandit Algorithms"
      url: "https://tor-lattimore.com/downloads/book/book.pdf"
      locator: "Chapter 7 §7.1, Algorithm 3, PDF p. 112 / printed p. 103."
verification:
  precheck: n/a
---

## Definition

Input integers $k,n$ with $1\le k\le n$, a confidence parameter $\delta\in(0,1)$, and access to an $n$-round $k$-armed stochastic bandit. Output the selected arms $A_1,\ldots,A_n$.

1. Initialize by choosing each arm once: set $A_t=t$ for $t=1,\ldots,k$, and observe each reward.
2. For each round $t=k+1,\ldots,n$, compute $T_i(t-1)=\sum_{s=1}^{t-1}\mathbf 1_{\{A_s=i\}}$ for every arm $i$. If $T_i(t-1)>0$, first set $\widehat\mu_i(t-1)=\bigl(\sum_{s=1}^{t-1}\mathbf 1_{\{A_s=i\}}Y_s\bigr)/T_i(t-1)$ and then set $U_i(t-1)=\widehat\mu_i(t-1)+\sqrt{2\log(1/\delta)/T_i(t-1)}$. If $T_i(t-1)=0$, set $U_i(t-1)=+\infty$.
3. Choose the least index $i$ attaining $\max_{j\in[k]}U_j(t-1)$ as $A_t$, then observe $Y_t$.

## Definition references

[[def-stochastic-bandit-and-pseudo-regret]]: the finite arm set, horizon, pull counts, observed rewards, and round order.

[[def-natural-logarithm]]: $\log$ is the inverse of the real exponential on positive reals.

[[thm-natural-logarithm-laws]]: the natural logarithm is increasing and satisfies the product and quotient laws.

[Tor Lattimore and Csaba Szepesvári, *Bandit Algorithms*](https://tor-lattimore.com/downloads/book/book.pdf): Chapter 7 §7.1, Algorithm 3, PDF p. 112 / printed p. 103.
