---
id: thm-grouping-of-series
kind: theorem
title: "Grouping: if $\\sum a_k$ converges and $(n_j)$ is strictly increasing with $n_0 = 0$, the series of blocks $\\sum_{k=n_j}^{n_{j+1}-1} a_k$ converges to the same sum"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-series, def-finite-sum, lem-finite-sum-laws, lem-subsequence-inherits-limit, def-monotone-sequence, thm-induction-principle, def-real-limit]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Series_(mathematics)"
    - title: "T. Tao, Analysis I, 3rd ed., §7.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Fisher, Introduction to Analysis"
      url: "https://math.berkeley.edu/~willfisher/teaching/104sm24/main.pdf"
    - title: "John K. Hunter, An Introduction to Real Analysis, Chapter 4"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch4.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals whose series converges ([[def-series]]), with
sum $S$, and let $n : \mathbb{N} \to \mathbb{N}$ be strictly increasing
([[def-monotone-sequence]]) with $n_0 = 0$. Define the **blocks**

$$B_j \;:=\; \sum_{k = n_j}^{n_{j+1}-1} a_k \qquad (j \in \mathbb{N}),$$

each a finite sum of $n_{j+1} - n_j \ge 1$ consecutive terms
([[def-finite-sum]]). Then $\sum B_j$ converges, with

$$\sum_{j=0}^{\infty} B_j \;=\; S .$$

The proof shows more, and the extra is what makes the theorem trivial once seen:
the $m$-th partial sum of $\sum B_j$ is exactly $s_{n_m}$, the $n_m$-th partial
sum of $\sum a_k$. Grouping does not produce a new series so much as a
subsequence of the old partial sums.

**The converse fails.** A grouped series may converge while the original diverges,
and [[fs-grouping-can-be-undone]] records that, with the witness on the companion
page. What the theorem needs is convergence of $\sum a_k$ as a hypothesis, and
$n_0 = 0$, without which the first block would omit the terms before $n_0$.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals with $\sum a_k$ convergent of sum $S$ and partial sums $s_n = \sum_{k<n} a_k$; a strictly increasing $n : \mathbb{N} \to \mathbb{N}$ with $n_0 = 0$; and the blocks $B_j = \sum_{k=n_j}^{n_{j+1}-1} a_k$.

[L1] Finite sums: $\sum_{k<0} x_k = 0$ and $\sum_{k<m+1} x_k = \sum_{k<m} x_k + x_m$ ([[def-finite-sum]]).

[L2] Splitting: if $m \le n$ then $\sum_{k<n} a_k = \sum_{k<m} a_k + \sum_{k=m}^{n-1} a_k$ ([[lem-finite-sum-laws]]).

[L3] The partial sums of a series and the meaning of its sum ([[def-series]], [[def-real-limit]]).

[L4] A subsequence of a convergent sequence converges to the same limit; a subsequence is indexed by a strictly increasing map $\mathbb{N} \to \mathbb{N}$ ([[lem-subsequence-inherits-limit]], [[def-monotone-sequence]]).

[L5] The principle of induction on $\mathbb{N}$ ([[thm-induction-principle]]).

## Proof

**Proof technique:** direct.

1.1 Since $n$ is strictly increasing, $n_j < n_{j+1}$ for every $j$, so each block $B_j$ is a finite sum over a nonempty range of indices and is a well-determined real. [given, L1, L2]

1.2 The map $m \mapsto n_m$ is strictly increasing, so $(s_{n_m})_m$ is a subsequence of the convergent sequence $(s_n)$ and therefore converges to $S$. [given, L3, L4]

2.1 An induction on $m$ gives $\sum_{j<m} B_j = s_{n_m}$ for every $m \in \mathbb{N}$: at $m = 0$ the left side is the empty sum $0$ and the right side is $s_{n_0} = s_0 = 0$; and if $\sum_{j<m} B_j = s_{n_m}$ then $\sum_{j<m+1} B_j = s_{n_m} + B_m = \sum_{k<n_m} a_k + \sum_{k=n_m}^{n_{m+1}-1} a_k = \sum_{k<n_{m+1}} a_k = s_{n_{m+1}}$, the middle equality being splitting at $n_m \le n_{m+1}$. [given, step 1.1, L1, L2, L5]

3.1 By step 2.1 the partial sums of $\sum B_j$ are precisely the terms $s_{n_m}$, so $\sum B_j$ converges with sum $S$. [step 2.1, step 1.2, L3] ∎

## Remarks

- **Why $n_0 = 0$ is a hypothesis and not a normalisation.** If $n_0 > 0$ the same computation gives $\sum_{j<m} B_j = s_{n_m} - s_{n_0}$, so the grouped series converges to $S - s_{n_0}$: the terms $a_0, \dots, a_{n_0 - 1}$ are simply omitted. The theorem as stated is the case where nothing is omitted.

- **Blocks may be as long as one likes, and the theorem is indifferent.** No bound on $n_{j+1} - n_j$ is assumed, and none is needed: the argument never looks inside a block. This is exactly what fails in the converse direction, where the cancellation hidden inside long blocks is what the grouped series cannot see.

- **The result also gives the associativity one expects of a convergent series.** Any two groupings of a convergent series have the same sum, both being $S$; so one may insert brackets at will, though never remove them ([[fs-grouping-can-be-undone]]).
