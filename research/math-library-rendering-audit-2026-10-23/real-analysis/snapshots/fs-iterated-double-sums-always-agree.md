---
id: fs-iterated-double-sums-always-agree
kind: false-statement
title: "FALSE: whenever both iterated sums of a double array exist, they are equal"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-double-series-fubini, def-absolute-and-conditional-convergence, def-finite-sum, lem-finite-sum-laws, def-series, def-real-limit]
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
    - title: "Fubini's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fubini%27s_theorem"
    - title: "Series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Series_(mathematics)"
    - title: "R. C. Gunning, Analytic Functions of Several Complex Variables"
      url: "https://web.math.princeton.edu/~gunning/bk.pdf"
    - title: "John K. Hunter, An Introduction to Real Analysis, Chapter 4"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch4.pdf"
pipeline_run: null
---

## Statement

**False claim:** for every array $a : \mathbb{N}\times\mathbb{N} \to \mathbb{R}$
such that every row series $\sum_j a_{ij}$ converges, every column series
$\sum_i a_{ij}$ converges, and both series of those sums converge, one has

$$\sum_{i=0}^{\infty}\Bigl(\sum_{j=0}^{\infty} a_{ij}\Bigr) \;=\; \sum_{j=0}^{\infty}\Bigl(\sum_{i=0}^{\infty} a_{ij}\Bigr) .$$

What is true is [[thm-double-series-fubini]], whose hypothesis is on the
**absolute** values: each row must be absolutely summable and the row totals of
absolute values must themselves be summable. Without that hypothesis both
iterated sums can exist and differ.

The witness is the array

$$a_{ij} := \begin{cases} 1 & \text{if } j = i, \\ -1 & \text{if } j = i-1 \text{ (that is } i = j+1), \\ 0 & \text{otherwise.} \end{cases}$$

Every row and every column has at most two nonzero entries, so every row series
and every column series converges. Row $0$ sums to $1$ and every later row to
$0$, giving iterated sum $1$; every column sums to $0$, giving iterated sum $0$.

## Facts & Assumptions

**Given:** The array $a$ with $a_{ii} = 1$ for every $i$, $a_{i+1,i} = -1$ for every $i$, and $a_{ij} = 0$ for all other pairs.

[A1] The refuted claim: whenever all the row and column series and both series of their sums converge, the two iterated sums are equal.

[L1] Finite sums: the empty sum is $0$ and $\sum_{k<n+1}x_k = \sum_{k<n}x_k + x_n$; a finite sum of zeros is $0$ ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L2] A series whose partial sums are constant from some index on converges to that constant, directly from the definition of a limit ([[def-series]], [[def-real-limit]]).

[L3] Fubini for double series, whose hypothesis is that each $\sum_j |a_{ij}|$ converges and that the series of those row totals converges ([[thm-double-series-fubini]], [[def-absolute-and-conditional-convergence]]).

## Refutation

**Proof technique:** direct.

1.1 Fix $i$. The only nonzero entries in row $i$ are $a_{ii} = 1$ and, when $i \ge 1$, $a_{i,i-1} = -1$, the latter being the entry $a_{(i-1)+1,\,i-1}$. Both have column index below $i+1$, so the partial sums $\sum_{j<Q} a_{ij}$ are constant for $Q \ge i+1$, every further term being $0$. [given, L1]

1.2 Fix $j$. The only nonzero entries in column $j$ are $a_{jj} = 1$ and $a_{j+1,j} = -1$, so $\sum_{i<P}a_{ij} = 0$ for $P \ge j+2$, and the column series converges with sum $C_j = 0$. [given, L1, L2]

2.1 Hence every row series converges: row $0$ has $\sum_{j<Q}a_{0j} = 1$ for $Q \ge 1$, so $R_0 = 1$; and for $i \ge 1$, $\sum_{j<Q}a_{ij} = -1 + 1 = 0$ for $Q \ge i+1$, so $R_i = 0$. [step 1.1, L1, L2]

2.2 The series $\sum_j C_j$ has all terms $0$, so it converges with sum $0$. [step 1.2, L1, L2]

3.1 The series $\sum_i R_i$ has partial sums equal to $1$ from index $1$ on, so it converges with sum $1$. [step 2.1, L1, L2]

4.1 All four convergence requirements of the claim hold, by step 2.1, step 3.1, step 1.2 and step 2.2, while the two iterated sums are $1$ and $0$, which are different. So the claim [A1] is false. [step 3.1, step 2.2, A1]

5.1 The hypothesis of [L3] is what fails: the row totals of absolute values are $A_0 = 1$ and $A_i = 2$ for $i \ge 1$, so $\sum_i A_i$ has unbounded partial sums and diverges, and Fubini's theorem does not apply. [step 4.1, L1, L3] ∎

## Remarks

- **The array is as small as such an array can be.** Every row and every column has at most two nonzero entries, and every entry is $0$, $1$ or $-1$; nothing is hidden in the size of the numbers. What makes the two iterated sums differ is only that the $-1$ in each column lies one row lower than the $+1$, so the cancellation happens along columns but is deferred along rows.

- **Both iterated sums exist, and that is the whole difficulty.** A claim of this shape is not refuted by an array for which one of the sums fails to exist; the point is that existence of both is not enough, and only an absolute hypothesis makes them agree.

- **The failure has the same shape as rearrangement.** By [[thm-double-series-fubini]] the common value, when the absolute hypothesis holds, is also the sum along any enumeration of $\mathbb{N}\times\mathbb{N}$; an iterated sum is one particular way of exhausting the array, and choosing a different exhaustion is exactly choosing a different order of summation. The companion examples page develops the same array.
