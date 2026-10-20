---
id: thm-ucb-gap-dependent-regret
kind: theorem
title: "Gap-dependent expected regret of UCB"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 6
deps: [def-stochastic-bandit-and-pseudo-regret, def-centered-subgaussian-reward, alg-upper-confidence-bound-bandit, def-natural-logarithm, thm-natural-logarithm-laws, lem-bandit-reward-table-has-fixed-conditional-laws, lem-ucb-suboptimal-arm-expected-pulls, lem-finite-arm-regret-decomposes-into-expected-action-counts]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Tor Lattimore and Csaba Szepesvári, Bandit Algorithms"
      url: "https://tor-lattimore.com/downloads/book/book.pdf"
      locator: "Theorem 7.1 and proof, Chapter 7 §7.1, PDF pp. 114–117 / printed pp. 105–108."
    - title: "Sébastien Bubeck and Nicolò Cesa-Bianchi, Regret Analysis of Stochastic and Nonstochastic Multi-armed Bandit Problems"
      url: "https://arxiv.org/pdf/1204.5721"
      locator: "Theorem 2.1 and proof, Chapter 2 §2.2, PDF pp. 14–15 / printed pp. 11–12; its MGF confidence schedule and constants differ."
---

## Statement

Let $n,k$ be integers with $n\ge\max\{k,2\}$. In an $n$-round $k$-armed stochastic bandit, suppose all reward-stack entries are 1-sub-Gaussian. Run the upper-confidence-bound algorithm with $\delta=n^{-2}$. Its expected reward regret satisfies
$$
R_n\le 3\sum_{i=1}^k\Delta_i+\sum_{i:\Delta_i>0}\frac{16\log n}{\Delta_i},
$$
where $\log$ is the natural logarithm. This is an expected-regret bound, not a high-probability guarantee.

## Statement references

[[def-stochastic-bandit-and-pseudo-regret]]: the finite reward-stack model, gaps, and expected reward regret.

[[def-centered-subgaussian-reward]]: the exact mean-centred MGF condition for each reward entry.

[[alg-upper-confidence-bound-bandit]]: the UCB index and the finite-horizon schedule used by the theorem.

[[lem-ucb-suboptimal-arm-expected-pulls]]: the deterministic-prefix expected-pull bound for each suboptimal arm.

[[lem-finite-arm-regret-decomposes-into-expected-action-counts]]: expected regret is the gap-weighted sum of expected pull counts under the fixed conditional-mean law.

[Tor Lattimore and Csaba Szepesvári, *Bandit Algorithms*](https://tor-lattimore.com/downloads/book/book.pdf): Theorem 7.1 and proof, Chapter 7 §7.1, PDF pp. 114–117 / printed pp. 105–108.

[Sébastien Bubeck and Nicolò Cesa-Bianchi, *Regret Analysis of Stochastic and Nonstochastic Multi-armed Bandit Problems*](https://arxiv.org/pdf/1204.5721): Theorem 2.1 and proof, Chapter 2 §2.2, PDF pp. 14–15 / printed pp. 11–12; its confidence schedule and constants differ.

## Facts & Assumptions

**Given:** Integers $n,k$ with $n\ge\max\{k,2\}$, the finite reward-stack model with all entries 1-sub-Gaussian, and UCB run with $\delta=n^{-2}$.

[F1] The gaps are $\Delta_i=\mu^*-\mu_i\ge0$ and expected reward regret is $R_n=\mathbb E[n\mu^*-\sum_{t=1}^nY_t]$ ([[def-stochastic-bandit-and-pseudo-regret]]).

[A1] Each reward stack entry satisfies $\mathbb E[\exp(\lambda(X_{s,i}-\mu_i))]\le\exp(\lambda^2/2)$ for every real $\lambda$ ([[def-centered-subgaussian-reward]]).

[F2] The reward-stack model satisfies the fixed conditional-mean identity required by the regret-decomposition result ([[lem-bandit-reward-table-has-fixed-conditional-laws]]).

[F3] Under that identity, $R_n=\sum_{i=1}^k\Delta_i\mathbb E[T_i(n)]$ ([[lem-finite-arm-regret-decomposes-into-expected-action-counts]]).

[F4] For every $i$ with $\Delta_i>0$, $\mathbb E[T_i(n)]\le3+16\log(n)/\Delta_i^2$ ([[lem-ucb-suboptimal-arm-expected-pulls]]).

[F5] The algorithm uses the natural logarithm and $\log(n)>0$ for $n\ge2$ ([[def-natural-logarithm]], [[thm-natural-logarithm-laws]]).

## Proof

1.1 By [F2], the conditional-mean hypothesis of [F3] holds for the observed rewards of the UCB policy. Therefore $R_n=\sum_{i=1}^k\Delta_i\mathbb E[T_i(n)]$. [given, F1, F2, F3]

2.1 If $\Delta_i=0$, its summand is zero. For every remaining arm, substitute [F4] into step 1.1 and distribute the nonnegative coefficient $\Delta_i$ to obtain $R_n\le\sum_{i:\Delta_i>0}(3\Delta_i+16\log n/\Delta_i)=3\sum_{i=1}^k\Delta_i+\sum_{i:\Delta_i>0}16\log n/\Delta_i$. This is the asserted expected-regret bound. [given, A1, F1, F4, F5, step 1.1, algebra] ∎
