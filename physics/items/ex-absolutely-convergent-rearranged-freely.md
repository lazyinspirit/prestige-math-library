---
id: ex-absolutely-convergent-rearranged-freely
kind: example
title: "Every rearrangement of $\\sum_{k \\ge 0} (-1/2)^{k}$ converges to $2/3$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-dirichlet-rearrangement, def-rearrangement-and-unconditional-convergence, def-absolute-and-conditional-convergence, thm-geometric-series, def-integer-power, lem-power-laws, lem-of-abs-value, thm-induction-principle, def-series]
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
    - title: "Geometric series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Geometric_series"
    - title: "Absolute convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Absolute_convergence"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "N. Donaldson, Math 140A: Series"
      url: "https://www.math.uci.edu/~ndonalds/math140a/3series.html"
pipeline_run: null
---

## Example

Let $r := -1/2$ and consider $\sum_{k \ge 0} r^{k}$, with $r^k$ the integer power
([[def-integer-power]]), so that the first term is $r^0 = 1$. Then:

$$\sum_{k=0}^{\infty} \Bigl(-\tfrac12\Bigr)^{k} \;=\; \frac{1}{1 - (-1/2)} \;=\; \frac{2}{3},$$

the series converges absolutely
([[def-absolute-and-conditional-convergence]]), and **every** rearrangement of it
along a bijection of $\mathbb{N}$
([[def-rearrangement-and-unconditional-convergence]]) converges, again to $2/3$.

This is the contrast case for the whole page. The alternating harmonic series
([[ex-alternating-harmonic-series]]) has terms with the same alternating sign
pattern, tending to $0$ just as these do, and can be rearranged to any real
whatever; this series cannot be rearranged to anything but $2/3$. The difference
is absolute convergence and nothing else, by
[[cor-unconditional-iff-absolute-in-r]].

## Facts & Assumptions

**Given:** $r = -1/2$ and the sequence $a_k := r^{k}$ ([[def-integer-power]]).

[L1] Geometric series: for $|x| < 1$ the series $\sum x^k$ converges with sum $1/(1-x)$, the series starting at $k = 0$ with first term $x^0 = 1$ ([[thm-geometric-series]], [[def-series]]).

[L2] Absolute value: $|xy| = |x|\,|y|$, $|1| = 1$, and $|-1/2| = 1/2$ ([[lem-of-abs-value]]).

[L3] Powers: $x^0 = 1$ and $x^{n+1} = x^n x$ ([[def-integer-power]], [[lem-power-laws]]).

[L4] The principle of induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L5] An absolutely convergent series converges unconditionally: every rearrangement converges to the same sum ([[thm-dirichlet-rearrangement]], [[def-rearrangement-and-unconditional-convergence]], [[def-absolute-and-conditional-convergence]]).

## Verification

**Proof technique:** direct.

1.1 An induction gives $|r^{k}| = |r|^{k} = (1/2)^{k}$ for every $k$: at $k = 0$ both sides are $1$, and $|r^{k+1}| = |r^{k} r| = |r^{k}|\,|r| = (1/2)^{k}(1/2)$. [L2, L3, L4]

1.2 Since $|r| = 1/2 < 1$, the series $\sum_k r^{k}$ converges with sum $1/(1-r) = 1/(3/2) = 2/3$. [L1, L2, algebra]

2.1 Since $|1/2| = 1/2 < 1$, the series $\sum_k |r^{k}| = \sum_k (1/2)^{k}$ converges, with sum $1/(1 - 1/2) = 2$; so $\sum_k r^{k}$ converges absolutely. [step 1.1, L1, L2]

3.1 By Dirichlet's rearrangement theorem, for every bijection $\sigma$ of $\mathbb{N}$ the series $\sum_k r^{\sigma(k)}$ converges, with the same sum $2/3$. [step 2.1, L5]

4.1 So the series converges absolutely with sum $2/3$, and every rearrangement of it converges to $2/3$. [step 1.2, step 2.1, step 3.1] ∎

## Remarks

- **The starting index matters and is stated.** The series begins at $k = 0$, and its first term is $r^{0} = 1$; the same series started at $k = 1$ would sum to $2/3 - 1 = -1/3$. [[thm-geometric-series]] makes the same point for $\sum 2^{-k}$, whose sum is $2$ from index $0$ and $1$ from index $1$.

- **Nothing is checked bijection by bijection.** The point of [[thm-dirichlet-rearrangement]] is that no property of $\sigma$ beyond bijectivity is used; the sum of the absolute values, here $2$, is what bounds every partial sum of every rearrangement.

- **The signs are a red herring.** The same conclusion holds for $\sum (1/2)^{k}$, whose terms are all positive; a series of nonnegative terms that converges is absolutely convergent, so no such series has an interesting rearrangement theory. The alternating signs here are chosen only to make the comparison with the alternating harmonic series exact.
