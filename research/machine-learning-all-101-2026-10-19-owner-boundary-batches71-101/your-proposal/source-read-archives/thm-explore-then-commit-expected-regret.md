---
id: thm-explore-then-commit-expected-regret
kind: theorem
title: "Expected regret of explore-then-commit"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps: [def-stochastic-bandit-and-pseudo-regret, def-centered-subgaussian-reward, alg-explore-then-commit, lem-bandit-reward-table-has-fixed-conditional-laws, def-adversary-and-feedback-model, lem-independent-subgaussian-prefix-tail, lem-finite-arm-regret-decomposes-into-expected-action-counts]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Tor Lattimore and Csaba Szepesvári, Bandit Algorithms"
      url: "https://tor-lattimore.com/downloads/book/book.pdf"
      locator: "Theorem 6.1 and its complete expected-regret proof, Chapter 6 §6.1, PDF pp. 101–102 / printed pp. 92–93."
---

## Statement

Let $k,n,m$ be positive integers with $mk\le n$. In an $n$-round $k$-armed stochastic bandit, suppose all reward-stack entries are 1-sub-Gaussian. Run explore-then-commit with exploration count $m$. Its expected reward regret satisfies
$$
R_n\le m\sum_{i=1}^k\Delta_i+(n-mk)\sum_{i=1}^k\Delta_i\exp\!\left(-\frac{m\Delta_i^2}{4}\right).
$$
This is an expected-regret bound, not a high-probability guarantee.

## Statement references

[[def-stochastic-bandit-and-pseudo-regret]]: finite arm means, gaps, reward-stack model, and expected reward regret.

[[def-centered-subgaussian-reward]]: each reward entry is centered at its finite mean and has MGF bounded by $e^{\lambda^2/2}$ for every real $\lambda$.

[[alg-explore-then-commit]]: deterministic round-robin exploration followed by commitment to an empirical-mean maximizer.

[[lem-independent-subgaussian-prefix-tail]]: two-sided tails for deterministic prefixes of independent sub-Gaussian rewards.

[[lem-finite-arm-regret-decomposes-into-expected-action-counts]]: expected reward regret equals the sum of arm gaps times expected pull counts under the conditional-mean hypothesis.

[Tor Lattimore and Csaba Szepesvári, *Bandit Algorithms*](https://tor-lattimore.com/downloads/book/book.pdf): Theorem 6.1 and proof, Chapter 6 §6.1, PDF pp. 101–102 / printed pp. 92–93.

## Facts & Assumptions

**Given:** Integers $k,n,m\ge1$ with $mk\le n$, the stochastic reward-stack model, 1-sub-Gaussian reward entries, and explore-then-commit with least-index tie-breaking.

[F1] For each arm, $\mu_i$ is finite, $\Delta_i=\mu^*-\mu_i\ge0$, and expected reward regret is $R_n=\mathbb E[n\mu^*-\sum_{t=1}^nY_t]$ ([[def-stochastic-bandit-and-pseudo-regret]]).

[A1] Every table entry satisfies the exact centered 1-sub-Gaussian MGF bound ([[def-centered-subgaussian-reward]]).

[F2] The observed reward at each pull has the arm's fixed conditional law and conditional mean, even under adaptive choices on the independent reward stacks ([[lem-bandit-reward-table-has-fixed-conditional-laws]]; [[def-adversary-and-feedback-model]]).

[F3] Under the eventwise conditional-mean identity, expected regret decomposes as $R_n=\sum_{i=1}^k\Delta_i\,\mathbb E[T_i(n)]$ ([[lem-finite-arm-regret-decomposes-into-expected-action-counts]]).

[F4] During exploration, the algorithm pulls each arm exactly $m$ times and then commits to a least-index empirical-mean maximizer ([[alg-explore-then-commit]]).

[F5] For any fixed arm pair and deterministic prefix length, the centered sum of independent reward-table entries has the two-sided sub-Gaussian tail bound ([[lem-independent-subgaussian-prefix-tail]]).

## Proof

1.1 By [F2], the conditional-mean hypothesis of [F3] holds, so $R_n=\sum_{i=1}^k\Delta_i\mathbb E[T_i(n)]$. Let $J$ be the committed arm. The first $mk$ rounds pull each arm exactly $m$ times, and every later round pulls $J$; hence $T_i(n)=m+(n-mk)\mathbf1_{\{J=i\}}$. Taking expectations gives $R_n=m\sum_{i=1}^k\Delta_i+(n-mk)\sum_{i=1}^k\Delta_i\mathbb P(J=i)$. [given, F1, F2, F3, F4, algebra]

2.1 Fix an optimal arm $i^*$ with $\mu_{i^*}=\mu^*$. If a suboptimal arm $i$ is committed, its exploration mean is at least that of $i^*$, so $\{J=i\}\subseteq\left\{m^{-1}\sum_{s=1}^m(X_{s,i}-\mu_i)-m^{-1}\sum_{s=1}^m(X_{s,i^*}-\mu^*)\ge\Delta_i\right\}$. The displayed sum has $2m$ mutually independent centered 1-sub-Gaussian terms: the $m$ terms from arm $i$ and the negatives of the $m$ terms from arm $i^*$. Negation preserves the MGF bound by applying [A1] at $-\lambda$. Apply [F5] to these deterministic reward-stack prefixes with threshold $m\Delta_i$ to obtain $\mathbb P(J=i)\le\exp(-m\Delta_i^2/4)$. For an optimal arm the theorem's summand has $\Delta_i=0$, so no event bound is needed. [given, A1, F1, F4, F5, step 1.1, algebra]

3.1 Substituting these bounds on $\mathbb P(J=i)$ for each suboptimal arm into step 1.1, and using $\Delta_i\ge0$ for every arm, gives $R_n\le m\sum_{i=1}^k\Delta_i+(n-mk)\sum_{i=1}^k\Delta_i\exp(-m\Delta_i^2/4)$. The term with $n-mk=0$ is zero when exploration uses the whole horizon. [given, step 1.1, step 2.1, algebra] ∎
