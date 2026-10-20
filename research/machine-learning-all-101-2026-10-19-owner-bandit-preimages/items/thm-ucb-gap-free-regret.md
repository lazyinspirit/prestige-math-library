---
id: thm-ucb-gap-free-regret
kind: theorem
title: "Gap-free expected regret of UCB"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 6
deps: [def-stochastic-bandit-and-pseudo-regret, def-centered-subgaussian-reward, alg-upper-confidence-bound-bandit, def-natural-logarithm, thm-natural-logarithm-laws, lem-bandit-reward-table-has-fixed-conditional-laws, lem-ucb-suboptimal-arm-expected-pulls, lem-finite-arm-regret-decomposes-into-expected-action-counts]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Tor Lattimore and Csaba Szepesvári, Bandit Algorithms"
      url: "https://tor-lattimore.com/downloads/book/book.pdf"
      locator: "Theorem 7.2 and proof, Chapter 7 §7.1, PDF p. 117 / printed p. 108; it derives the gap-free bound from the per-arm pull bound of Theorem 7.1."
---

## Statement

Let $n,k$ be integers with $n\ge\max\{k,2\}$. In an $n$-round $k$-armed stochastic bandit, suppose all reward-stack entries are 1-sub-Gaussian. Run the upper-confidence-bound algorithm with $\delta=n^{-2}$. Its expected reward regret satisfies
$$
R_n\le\sqrt{8nk\log n}+3\sum_{i=1}^k\Delta_i,
$$
where $\log$ is the natural logarithm. This is an expected-regret bound, not a high-probability guarantee.

## Statement references

[[def-stochastic-bandit-and-pseudo-regret]]: the finite reward-stack model, gaps, and expected reward regret.

[[def-centered-subgaussian-reward]]: the exact mean-centred MGF condition for each reward entry.

[[alg-upper-confidence-bound-bandit]]: the UCB index and finite-horizon schedule.

[[lem-ucb-suboptimal-arm-expected-pulls]]: the deterministic-prefix expected-pull bound used for each gap threshold.

[[lem-finite-arm-regret-decomposes-into-expected-action-counts]]: expected regret is the gap-weighted sum of expected pull counts under the fixed conditional-mean law.

[Tor Lattimore and Csaba Szepesvári, *Bandit Algorithms*](https://tor-lattimore.com/downloads/book/book.pdf): Theorem 7.2 and proof, Chapter 7 §7.1, PDF p. 117 / printed p. 108.

## Facts & Assumptions

**Given:** Integers $n,k$ with $n\ge\max\{k,2\}$, the finite reward-stack model with all entries 1-sub-Gaussian, and UCB run with $\delta=n^{-2}$.

[F1] The gaps are $\Delta_i=\mu^*-\mu_i\ge0$, expected reward regret is $R_n=\mathbb E[n\mu^*-\sum_{t=1}^nY_t]$, and exactly one arm is chosen in each round, so $\sum_{i=1}^kT_i(n)=n$ ([[def-stochastic-bandit-and-pseudo-regret]]).

[A1] Each reward stack entry satisfies the exact centered 1-sub-Gaussian MGF bound ([[def-centered-subgaussian-reward]]).

[F2] The reward-stack model satisfies the fixed conditional-mean identity required by the regret-decomposition result ([[lem-bandit-reward-table-has-fixed-conditional-laws]]).

[F3] Expected regret decomposes as $R_n=\sum_{i=1}^k\Delta_i\mathbb E[T_i(n)]$ ([[lem-finite-arm-regret-decomposes-into-expected-action-counts]]).

[F4] Every arm with $\Delta_i>0$ satisfies $\mathbb E[T_i(n)]\le3+16\log(n)/\Delta_i^2$ ([[lem-ucb-suboptimal-arm-expected-pulls]]).

[F5] $\log n>0$ for $n\ge2$ ([[def-natural-logarithm]], [[thm-natural-logarithm-laws]]).

## Proof

1.1 By [F2], [F3] applies and gives $R_n=\sum_{i=1}^k\Delta_i\mathbb E[T_i(n)]$. [given, F1, F2, F3]

2.1 Let $L=\log n>0$ and $\varepsilon=\sqrt{16kL/n}$. Split arms into $\Delta_i<\varepsilon$ and $\Delta_i\ge\varepsilon$. The small-gap contribution is at most $\varepsilon\sum_i\mathbb E[T_i(n)]=n\varepsilon$ by [F1]. For every large-gap arm, [F4] gives $\Delta_i\mathbb E[T_i(n)]\le3\Delta_i+16L/\Delta_i\le3\Delta_i+16L/\varepsilon$. There are at most $k$ such arms, so $R_n\le n\varepsilon+3\sum_i\Delta_i+16kL/\varepsilon=8\sqrt{nkL}+3\sum_i\Delta_i$. This is the stated bound. [given, A1, F1, F4, F5, step 1.1, algebra] ∎
