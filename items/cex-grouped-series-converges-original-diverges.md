---
id: cex-grouped-series-converges-original-diverges
kind: counterexample
title: "$(1-1) + (1-1) + \\dots$ converges to $0$ while $\\sum_{k} (-1)^{k}$ diverges"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [fs-grouping-can-be-undone, thm-grouping-of-series, lem-alternating-sequence, lem-nth-term-test, def-monotone-sequence, def-finite-sum, lem-finite-sum-laws, def-series, def-real-limit]
justified_by: []
aliases: []
landmark: false
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
    - title: "Grandi's series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Grandi%27s_series"
    - title: "Series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Series_(mathematics)"
    - title: "W. Fisher, Introduction to Analysis"
      url: "https://math.berkeley.edu/~willfisher/teaching/104sm24/main.pdf"
    - title: "John K. Hunter, An Introduction to Real Analysis, Chapter 4"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch4.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** if some grouping of a series converges, so does the series
([[thm-grouping-of-series]], [[def-series]]).

Let $(\varepsilon_k)$ be the alternating sequence ([[lem-alternating-sequence]]),
with even index map $e_j$ satisfying $e_0 = 0$ and $e_{j+1} = e_j + 2$, and group
the series $\sum_k \varepsilon_k$ in consecutive pairs, $n_j := e_j$. Each block is

$$B_j \;=\; \varepsilon_{e_j} + \varepsilon_{o_j} \;=\; 1 + (-1) \;=\; 0 ,$$

so the grouped series is $0 + 0 + 0 + \dots$ and converges to $0$, while
$\sum_k \varepsilon_k$ diverges, its terms having absolute value $1$ and so not
tending to $0$ ([[lem-nth-term-test]]). This is
[[fs-grouping-can-be-undone]] exhibited.

**The partial sums of $\sum \varepsilon_k$ are $0, 1, 0, 1, \dots$**, and the
grouping picks out exactly the even-indexed ones, all equal to $0$. That is what
[[thm-grouping-of-series]] says a grouping always does: it reads a subsequence of
the partial sums. A subsequence of a divergent sequence may of course converge,
which is the whole of the phenomenon.

## Facts & Assumptions

**Given:** The alternating sequence $(\varepsilon_k)$ with index maps $e$ and $o$, the grouping $n_j = e_j$, and the blocks $B_j = \sum_{k=n_j}^{n_{j+1}-1}\varepsilon_k$.

[L1] For this grouping every block is $0$, the grouped series converges to $0$, and $\sum_k \varepsilon_k$ diverges ([[fs-grouping-can-be-undone]], [[lem-nth-term-test]], [[def-real-limit]]).

[L2] The alternating sequence: $\varepsilon_0 = 1$, $\varepsilon_{k+1} = -\varepsilon_k$, $|\varepsilon_k| = 1$, $\varepsilon_{e_j} = 1$, $\varepsilon_{o_j} = -1$, $e_0 = 0$, $e_{j+1} = e_j + 2$, $o_j = e_j + 1$, and $e$ is strictly increasing ([[lem-alternating-sequence]], [[def-monotone-sequence]]).

[L3] Finite sums and partial sums: the empty sum is $0$, $\sum_{k<n+1}x_k = \sum_{k<n}x_k + x_n$ ([[def-finite-sum]], [[lem-finite-sum-laws]], [[def-series]]).

[L4] Grouping in the true direction: if $\sum a_k$ converges then every grouping with $n_0 = 0$ converges to the same sum, its $m$-th partial sum being $s_{n_m}$ ([[thm-grouping-of-series]]).

## Counterexample

**Proof technique:** direct.

1.1 The map $j \mapsto n_j = e_j$ is strictly increasing with $n_0 = 0$ and $n_{j+1} = n_j + 2$, so it is a grouping in the sense of [L4] and each block covers the two indices $e_j$ and $o_j$. [L2, L4]

1.2 An induction gives that the partial sums $A_n = \sum_{k<n}\varepsilon_k$ take only the values $0$ and $1$, with $A_{e_j} = 0$ and $A_{o_j} = 1$: $A_0 = 0$, and each step adds $\varepsilon_n \in \{1,-1\}$, alternately raising and lowering the value. [L2, L3]

1.3 The series $\sum_k \varepsilon_k$ diverges, since $|\varepsilon_k| = 1$ for every $k$, so $(\varepsilon_k)$ does not converge to $0$. [L1, L2]

2.1 Each block is $B_j = \varepsilon_{e_j} + \varepsilon_{o_j} = 1 - 1 = 0$, so the grouped series has all terms $0$, all partial sums $0$, and converges with sum $0$. [step 1.1, L1, L2, L3]

3.1 So a grouping of $\sum_k \varepsilon_k$ converges while the series itself does not; the refuted claim fails. [step 2.1, step 1.3]

4.1 What the true statement [L4] gives is the reverse implication, and step 1.2 shows why it cannot be reversed: the grouped partial sums are the subsequence $(A_{e_j})$, constantly $0$, of a sequence that oscillates between $0$ and $1$. [step 1.2, step 3.1, L4] ∎

## Remarks

- **A second bracketing gives a different answer, and it is just as legitimate.** Grouping as $1 + (-1+1) + (-1+1) + \dots$ is the grouping $n = (0, 1, 3, 5, \dots)$, whose blocks are $\{0\}$ and then the pairs $\{2j-1, 2j\}$ for $j \ge 1$. That $n$ is strictly increasing with $n_0 = 0$, so it satisfies the hypotheses of [[thm-grouping-of-series]] exactly as the pairing used above does; its grouped partial sums are $A_{n_m}$, that is $0, 1, 1, 1, \dots$, so this grouping converges to $1$ while the pairing from index $0$ converges to $0$. Two admissible groupings of one series with two different sums is the classical paradox attached to $\sum(-1)^k$, and nothing in [[thm-grouping-of-series]] is violated: that theorem says what the grouped sums are only when the original series converges, and here it does not.

- **No sum is being assigned to a divergent series here.** Both statements are about ordinary convergence in the sense of [[def-series]]: the grouped series converges, the original does not. Nothing on this page attaches a value to $\sum(-1)^k$.

- **What would have to be added.** By [[lem-nth-term-test]], $a_k \to 0$ is necessary for the original series to converge and is invisible to the grouped series; this witness violates exactly that condition, with blocks of the constant length $2$.
