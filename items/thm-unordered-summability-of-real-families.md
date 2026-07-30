---
id: thm-unordered-summability-of-real-families
kind: theorem
title: "Assuming countable choice, a real family is summable as a finite-subset net if and only if it has at most countable support and its nonzero terms are absolutely summable; its sum is independent of the enumeration"
status: published
origin: session
deps: [ex-finite-subset-net-for-unordered-real-summation, def-absolute-and-conditional-convergence, thm-dirichlet-rearrangement, thm-countable-union-of-countable, def-countable-choice, lem-positive-and-negative-parts, thm-nonnegative-series-bounded-partial-sums, cor-archimedean-reciprocal, def-sum-over-a-finite-index-set]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Unconditional convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Unconditional_convergence"
pipeline_run: null
---

## Statement

**Assume countable choice.** Let $a:I\to\mathbb R$ and $S=\{i:a_i\ne0\}$. Then the finite-subset net of $a$ is convergent if and only if $S$ is at most countable and its finite enumeration, or any bijective enumeration $e:\mathbb N\to S$ when $S$ is infinite, gives an absolutely convergent series of nonzero terms. Its net limit equals that finite sum or series sum and is independent of the enumeration.

## Facts & Assumptions

**Given:** A real family $a:I\to\mathbb R$ and its finite-subset net.

[L1] Under countable choice, a countable union of at most countable sets is at most countable ([[thm-countable-union-of-countable]], [[def-countable-choice]]).

[L2] A nonnegative series converges exactly when its partial sums are bounded above, and an absolutely convergent series is unchanged by a bijective rearrangement ([[thm-nonnegative-series-bounded-partial-sums]], [[thm-dirichlet-rearrangement]]).

[L3] Positive and negative parts are nonnegative and $|a_i|=a_i^++a_i^-$ ([[lem-positive-and-negative-parts]]).

[L4] For every positive real $t$ there is $n\ge1$ with $1/n<t$ ([[cor-archimedean-reciprocal]]).

[L5] A real series is absolutely convergent exactly when the series of absolute values converges; sums over finite index sets are invariant under their enumerations ([[def-absolute-and-conditional-convergence]], [[def-sum-over-a-finite-index-set]]).


## Proof

**Proof technique:** direct.

1.1 Suppose the finite-subset net converges to $L$. There are a finite $F_0\subseteq I$ and $C>0$ such that $|\sum_{i\in F}a_i|\le C$ for every finite $F\supseteq F_0$. If $P\subseteq I\setminus F_0$ is finite and all $a_i$ for $i\in P$ are positive, then $$ \sum_{i\in P}a_i =\sum_{i\in F_0\cup P}a_i-\sum_{i\in F_0}a_i \le C+\left|\sum_{i\in F_0}a_i\right|. $$ The same argument applied to finite sets of negative terms bounds their absolute-value sums. [L3, L5]

1.2 Conversely, let an enumeration of $S$ have absolutely convergent series sum $s$. Given $\varepsilon>0$, choose a finite initial segment $F_0$ whose remaining absolute series sum is below $\varepsilon$. For every finite $F\supseteq F_0$, $$ \left|\sum_{i\in F}a_i-s\right| \le \sum_{i\in S\setminus F}|a_i| <\varepsilon. $$ Indices outside $S$ contribute zero, so the finite-subset net converges to $s$. [L2, L5]

2.1 For each $n\ge1$, the sets $\{i\notin F_0:a_i^+\ge1/n\}$ and $\{i\notin F_0:a_i^-\ge1/n\}$ are finite, since a finite subset with more than $nC'$ members would have sum exceeding the bound $C'$. Every nonzero real lies in one of these level sets for some $n$ by [L4], so [L1] makes $S$ at most countable. [step 1.1, L1, L3, L4]

2.2 With any enumeration of $S$, the positive and negative partial sums are bounded by step 1.1, hence converge by [L2]. Thus the series of absolute values converges by [L3], so the enumerated nonzero terms form an absolutely convergent series. [step 1.1, L2, L3]

3.1 Any two infinite enumerations differ by a bijective rearrangement, so [L2] gives the same sum; finite enumerations give the same finite-set sum by [L5]. This proves both directions and enumeration independence. [step 2.2, step 1.2, L2, L5] ∎
