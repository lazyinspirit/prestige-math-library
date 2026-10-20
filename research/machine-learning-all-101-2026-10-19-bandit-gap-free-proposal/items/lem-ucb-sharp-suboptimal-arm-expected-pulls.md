---
id: lem-ucb-sharp-suboptimal-arm-expected-pulls
kind: lemma
title: A sharper expected suboptimal-arm pull count for the unchanged UCB rule
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
- def-stochastic-bandit-and-pseudo-regret
- def-centered-subgaussian-reward
- alg-upper-confidence-bound-bandit
- lem-independent-subgaussian-prefix-tail
- lem-ucb-prefix-envelope-sum-bound
- lem-probability-measure-basic-identities
- cor-expectation-linearity-monotonicity-and-modulus-bound
- cor-expectation-of-an-indicator-is-probability
- thm-natural-logarithm-laws
- def-natural-logarithm
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: Lattimore and Szepesvári, Bandit Algorithms, Theorems 7.1–7.2; independent
      local sharpening of the expected-pull argument
    url: https://tor-lattimore.com/downloads/book/book.pdf
    locator: Printed pp. 105–108 / PDF pp. 114–117. The source proves coefficient
      16 for pulls and 8 outside the regret radical; this local helper is a separate
      owner-delegated improvement.
---

## Statement

Let $n\ge\max\{k,2\}$ be integers. In the finite reward-stack bandit model, assume all entries are centered 1-sub-Gaussian and run the stated UCB algorithm with $\delta=n^{-2}$. Every arm $i$ with gap $\Delta_i>0$ satisfies
$$\mathbb E[T_i(n)]\le3+\frac{8\log n}{\Delta_i^2}.$$
This is a local sharpening of the coefficient-16 expected-pull bound; the algorithm and confidence radius are unchanged.

## Statement references

[Lattimore and Szepesvári, *Bandit Algorithms*, Theorem 7.1](https://tor-lattimore.com/downloads/book/book.pdf): proves the coefficient-16 count estimate; the smaller coefficient is proved here.

## Facts & Assumptions

**Given:** The finite independent reward table, UCB rule, horizon and suboptimal arm in the Statement.

[F1] An arm has fixed mean $\mu_i$, gap $\Delta_i=\mu^*-\mu_i$, and its $s$ observations are the first $s$ entries of its independent stack. [[def-stochastic-bandit-and-pseudo-regret]]

[F2] All reward entries satisfy the centered 1-sub-Gaussian MGF condition. [[def-centered-subgaussian-reward]]

[F3] UCB first plays every arm once, then selects an index maximizer with index $\widehat\mu_{i,s}+\sqrt{2\log(1/\delta)/s}$ at count $s\ge1$. [[alg-upper-confidence-bound-bandit]]

[F4] For each fixed prefix of length $s$, both centered mean tails at threshold $x\ge0$ are at most $e^{-sx^2/2}$. [[lem-independent-subgaussian-prefix-tail]]

[F5] Finite unions have probability at most the sum of their probabilities, and event probabilities are at most one. [[lem-probability-measure-basic-identities]]

[F6] Expectation is linear and monotone on integrable finite sums, and the expectation of an indicator is its probability. [[cor-expectation-linearity-monotonicity-and-modulus-bound]] [[cor-expectation-of-an-indicator-is-probability]]

[F7] If $n\ge5$, $L=\log n$ and $a>0$, the sum of $\exp(-((a\sqrt{s}-2\sqrt L)_+)^2/2)$ for $1\le s<n$ is at most $1+8L/a^2$. [[lem-ucb-prefix-envelope-sum-bound]]

[F8] The natural logarithm is increasing and satisfies its product and reciprocal laws. [[def-natural-logarithm]] [[thm-natural-logarithm-laws]]

## Proof

1.1 Put $L=\log n>0$ and let $i^*$ be the least-index optimal arm. For a fixed prefix $s\in[n]$, put $r_s=\sqrt{4L/s}$. By [F8], this is the index bonus at $\delta=n^{-2}$. Let $G=\bigcap_{s=1}^n\{\widehat\mu_{i^*,s}+r_s\ge\mu^*\}.$ Every event in its complement is a fixed-prefix lower-tail event of probability at most $e^{-sr_s^2/2}=n^{-2}$ by [F2] and [F4]. Hence $\mathbb P(G^c)\le1/n$ by [F5]. [given, F1, F2, F3, F4, F5, F8, construct, algebra]

2.1 Fix the suboptimal arm $i$. It is played once during initialization. On $G$, any later play when its current count is $s$ requires $\widehat\mu_{i,s}+r_s\ge\mu^*$: its selected index is at least the current index of $i^*$, which is at least $\mu^*$. Each such count $s\in\{1,\ldots,n-1\}$ can be charged at most once, since a play increases the count by one. Always $T_i(n)\le n$. Thus pointwise $T_i(n)\le1+\sum_{s=1}^{n-1}\mathbf1_{\{\widehat\mu_{i,s}+r_s\ge\mu^*\}}+n\mathbf1_{G^c}.$ [F1, F3, step 1.1, given]

3.1 For a fixed $s$, the event inside the sum in step 2.1 is $\widehat\mu_{i,s}-\mu_i\ge\Delta_i-r_s$. If this threshold is positive, [F4] bounds its probability by $\exp(-s(\Delta_i-r_s)^2/2)$. If it is nonpositive, use the bound $1$ in [F5]. Consequently, in both cases its probability is at most $\exp\left(-\frac{(\Delta_i\sqrt{s}-2\sqrt L)_+^2}{2}\right).$ These are tails at deterministic prefix counts, never a tail theorem evaluated at a random count. [given, F1, F2, F4, F5, step 1.1, algebra]

4.1 Take expectations in step 2.1, using [F6]. The count and indicators are bounded and therefore integrable. Step 1.1 makes the last term at most $1$, while step 3.1 bounds the finite sum. If $n\ge5$, [F7] with $a=\Delta_i>0$ therefore gives $\mathbb E[T_i(n)]\le2+\sum_{s=1}^{n-1}\exp\left(-\frac{(\Delta_i\sqrt{s}-2\sqrt L)_+^2}{2}\right)\le3+\frac{8L}{\Delta_i^2}.$ [F6, F7, step 1.1, step 2.1, step 3.1, algebra]

5.1 If $2\le n\le4$, the existence of a suboptimal arm implies $k\ge2$. Initialization plays every other arm at least once, so $T_i(n)\le n-k+1\le3$ pointwise. This proves the desired bound in the remaining horizons. If $k=1$ there is no suboptimal arm, so the assertion is vacuous. Together with step 4.1 this proves the Statement. [F1, F3, F6, step 4.1, given, cases, algebra] ∎
