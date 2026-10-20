---
id: alg-explore-then-commit
kind: algorithm
title: "Explore-then-commit for a finite stochastic bandit"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps: [def-stochastic-bandit-and-pseudo-regret]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Tor Lattimore and Csaba Szepesvári, Bandit Algorithms"
      url: "https://tor-lattimore.com/downloads/book/book.pdf"
      locator: "Chapter 6 §6.1, Algorithm 1, PDF p. 101 / printed p. 92."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Definition

Input integers $k,n,m\ge1$ with $mk\le n$, and access to an $n$-round $k$-armed stochastic bandit. The output is the sequence of selected arms $A_1,\ldots,A_n$ and the committed arm $J$.

1. For rounds $t=1,\ldots,mk$, choose arm $A_t=1+((t-1)\bmod k)$ and observe its reward $Y_t$. Thus each arm is explored exactly $m$ times.
2. For each $i\in[k]$, form its exploration mean
   $$
   \widehat\mu_i=\frac1m\sum_{r=1}^m Y_{(r-1)k+i}.
   $$
3. Let $J$ be the least index attaining $\max_{i\in[k]}\widehat\mu_i$.
4. For every remaining round $t=mk+1,\ldots,n$, choose $A_t=J$ and observe its reward.

## Definition references

[[def-stochastic-bandit-and-pseudo-regret]]: the horizon, finite arm set, reward observations, and non-anticipating round order used by the procedure.

[Tor Lattimore and Csaba Szepesvári, *Bandit Algorithms*](https://tor-lattimore.com/downloads/book/book.pdf): Chapter 6 §6.1, Algorithm 1, PDF p. 101 / printed p. 92.
