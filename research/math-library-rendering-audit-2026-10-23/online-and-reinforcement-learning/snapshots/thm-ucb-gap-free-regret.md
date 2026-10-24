---
id: thm-ucb-gap-free-regret
kind: theorem
title: Gap-free expected regret of UCB
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 6
deps:
- def-stochastic-bandit-and-pseudo-regret
- def-centered-subgaussian-reward
- alg-upper-confidence-bound-bandit
- def-natural-logarithm
- thm-natural-logarithm-laws
- lem-bandit-reward-table-has-fixed-conditional-laws
- lem-finite-arm-regret-decomposes-into-expected-action-counts
- lem-ucb-sharp-suboptimal-arm-expected-pulls
- thm-cauchy-schwarz-finite
- cor-expectation-linearity-monotonicity-and-modulus-bound
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
  - title: Tor Lattimore and Csaba Szepesvári, Bandit Algorithms
    url: https://tor-lattimore.com/downloads/book/book.pdf
    locator: Theorem 7.2 and complete source proof, printed p. 108 / PDF p. 117, give
      8 outside the radical. The retained sqrt(8*n*k*log n) estimate is a separate
      local owner-delegated sharpening, via once-per-prefix counting, deterministic
      tail integration and finite Cauchy–Schwarz.
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

[[lem-ucb-sharp-suboptimal-arm-expected-pulls]]: the local once-per-prefix argument gives the sharper expected-pull estimate used in the finite Cauchy–Schwarz proof.

[[lem-finite-arm-regret-decomposes-into-expected-action-counts]]: expected regret is the gap-weighted sum of expected pull counts under the fixed conditional-mean law.

[Tor Lattimore and Csaba Szepesvári, *Bandit Algorithms*](https://tor-lattimore.com/downloads/book/book.pdf): Theorem 7.2 and proof, Chapter 7 §7.1, PDF p. 117 / printed p. 108.

## Facts & Assumptions

**Given:** The unchanged finite reward-stack bandit, horizon $n\ge\max\{k,2\}$, centered 1-sub-Gaussian entries, and UCB with $\delta=n^{-2}$ in the Statement.

[F1] The gaps are nonnegative and exactly one arm is pulled each round, so $\sum_iT_i(n)=n$. [[def-stochastic-bandit-and-pseudo-regret]]

[F2] Reward entries satisfy the exact centered MGF condition, and the algorithm uses the stated confidence schedule. [[def-centered-subgaussian-reward]] [[alg-upper-confidence-bound-bandit]]

[F3] The reward-stack model supplies the eventwise conditional-mean hypothesis of the finite-arm regret decomposition. [[lem-bandit-reward-table-has-fixed-conditional-laws]]

[F4] Under that hypothesis, expected reward regret equals $\sum_i\Delta_i\mathbb E[T_i(n)]$. [[lem-finite-arm-regret-decomposes-into-expected-action-counts]]

[F5] For every suboptimal arm, the unchanged UCB rule satisfies $\mathbb E[T_i(n)]\le3+8\log(n)/\Delta_i^2$. [[lem-ucb-sharp-suboptimal-arm-expected-pulls]]

[F6] For finite real lists, $(\sum_i a_ib_i)^2\le(\sum_i a_i^2)(\sum_i b_i^2)$, with the corresponding nonnegative square-root inequality. [[thm-cauchy-schwarz-finite]]

[F7] The logarithm is increasing, so $L=\log n>0$ for $n\ge2$. [[def-natural-logarithm]] [[thm-natural-logarithm-laws]]

[F8] Expectation is linear for finite sums of integrable random variables. [[cor-expectation-linearity-monotonicity-and-modulus-bound]]

## Proof

1.1 By [F3], the actual reward table meets the conditional-mean premise of [F4], hence $R_n=\sum_i\Delta_i\mathbb E[T_i(n)]$. All counts are bounded, and [F1] gives $\sum_i\mathbb E[T_i(n)]=n$. [given, F1, F3, F4, F8]

2.1 Let $I=\{i:\Delta_i>0\}$ and, for $i\in I$, put $q_i=(\mathbb E[T_i(n)]-3)_+$. By [F5], $\Delta_i^2q_i\le8L$. Also $q_i\le\mathbb E[T_i(n)]$, so $\sum_{i\in I}q_i\le n$ by step 1.1. Therefore $R_n\le3\sum_i\Delta_i+\sum_{i\in I}\Delta_iq_i.$ Zero-gap arms contribute zero, and no reciprocal of a zero gap occurs. [F1, F2, F5, F7, step 1.1, construct, algebra]

3.1 Apply [F6] to the finite nonnegative lists $a_i=\Delta_i\sqrt{q_i}$ and $b_i=\sqrt{q_i}$ for $i\in I$. Step 2.1 yields $\sum_{i\in I}\Delta_iq_i\le\sqrt{\left(\sum_{i\in I}\Delta_i^2q_i\right)\left(\sum_{i\in I}q_i\right)}\le\sqrt{8|I|Ln}\le\sqrt{8nk\log n}.$ If $I$ is empty both sums and the regret are zero; otherwise the same finite inequality applies. Substitution in step 2.1 proves the unchanged Statement. [F6, F7, step 2.1, cases, algebra] ∎
