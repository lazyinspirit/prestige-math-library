---
id: ex-riemann-rearrangement-to-a-prescribed-sum
kind: example
title: "An explicit greedy rearrangement of the alternating harmonic series with sum $0$, and the same recipe for any prescribed real"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-riemann-series-theorem, ex-alternating-harmonic-series, lem-positive-and-negative-parts, def-rearrangement-and-unconditional-convergence, def-absolute-and-conditional-convergence, thm-well-ordering-principle, thm-recursion, def-series]
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
    - title: "Riemann series theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_series_theorem"
    - title: "Harmonic series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Harmonic_series_(mathematics)"
    - title: "N. Donaldson, Math 140A: Real Analysis notes"
      url: "https://www.math.uci.edu/~ndonalds/math140a/notes.pdf"
    - title: "John K. Hunter, An Introduction to Real Analysis, Chapter 4"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch4.pdf"
pipeline_run: null
---

## Example

Let $a_j = (-1)^j/\iota(j+1)$ be the terms of the alternating harmonic series,
which converges conditionally ([[ex-alternating-harmonic-series]]). Fix a real
$c$. The **greedy rearrangement towards $c$** is the bijection $\sigma$ of
$\mathbb{N}$ produced by the following rule, which is exactly the construction of
[[thm-riemann-series-theorem]] with the constant target $c$:

> at each step, if the running sum of the terms already used is at most $c$, take
> the next unused nonnegative term of the series; otherwise take the next unused
> negative term.

By [[thm-riemann-series-theorem]] the resulting rearrangement converges, with

$$\sum_{k=0}^{\infty} a_{\sigma(k)} \;=\; c .$$

For $c = 0$ the rule produces, in order,

$$1,\ -\tfrac12,\ -\tfrac14,\ -\tfrac16,\ -\tfrac18,\ \tfrac13,\ -\tfrac1{10},\ -\tfrac1{12},\ -\tfrac1{14},\ -\tfrac1{16},\ \tfrac15,\ \dots$$

the running sums after the successive terms being
$1,\ \tfrac12,\ \tfrac14,\ \tfrac1{12},\ -\tfrac1{24}$, then $\tfrac7{24}$ after
$\tfrac13$, and so on: one positive term followed by however many negative terms
are needed to bring the running sum below $0$ again.

The same series therefore has rearrangements summing to $0$, to $S$ itself, to
$\tfrac32 S$ ([[ex-alternating-harmonic-rearranged-to-three-halves]]) and to every
other real number, while its terms are never changed.

## Facts & Assumptions

**Given:** The terms $a_j = (-1)^j/\iota(j+1)$ of the alternating harmonic series, and a real number $c$.

[L1] The alternating harmonic series converges and does not converge absolutely, so it converges conditionally ([[ex-alternating-harmonic-series]], [[def-absolute-and-conditional-convergence]]).

[L2] For a conditionally convergent series both part series $\sum a_j^{+}$ and $\sum a_j^{-}$ diverge to $+\infty$, which is what keeps both supplies of terms inexhaustible ([[lem-positive-and-negative-parts]]).

[L3] The Riemann series theorem: for a conditionally convergent series and every real $c$ there is a bijection $\sigma$ of $\mathbb{N}$ with $\sum a_{\sigma(k)}$ convergent of sum $c$; the bijection is the greedy one described above, built by the recursion theorem on a state carrying the two counters and the running sum, with no least crossing index selected and no choice made ([[thm-riemann-series-theorem]], [[thm-recursion]], [[thm-well-ordering-principle]], [[def-rearrangement-and-unconditional-convergence]], [[def-series]]).

## Verification

**Proof technique:** direct.

1.1 The alternating harmonic series converges conditionally. [given, L1]

2.1 Its nonnegative terms are $a_{2i} = 1/\iota(2i+1)$, that is $1, 1/3, 1/5, \dots$, and its negative terms are $a_{2i+1} = -1/\iota(2i+2)$, that is $-1/2, -1/4, -1/6, \dots$; by [L2] the sums of each family are unbounded, so neither supply is exhausted at any stage of the greedy rule. [step 1.1, L2]

3.1 By the Riemann series theorem applied with the constant target $c$, the greedy rule defines a bijection $\sigma$ of $\mathbb{N}$ and $\sum_k a_{\sigma(k)}$ converges with sum $c$. [step 1.1, step 2.1, L3]

4.1 Taking $c = 0$ gives a rearrangement of the alternating harmonic series with sum $0$, and taking $c$ arbitrary gives one with sum $c$; the terms used are the same in every case. [step 3.1, L3] ∎

## Remarks

- **The displayed initial segment is arithmetic, not a further claim.** Starting from a running sum of $0$, which is at most $c = 0$, the rule takes the first nonnegative term $1$; the running sum $1$ then exceeds $0$, so negative terms are taken until it drops below $0$, which the successive values $\tfrac12,\ \tfrac14,\ \tfrac1{12},\ -\tfrac1{24}$ show happens after four of them. The reader may continue the computation indefinitely; nothing in the verification depends on it.

- **Why the greedy rule terminates each phase.** Each phase ends because the relevant part series diverges to $+\infty$ ([[lem-positive-and-negative-parts]]), so however far along the supply one is, enough remains to cross the target. This is the only place conditional convergence is used, and it is the reason the example has no analogue for an absolutely convergent series.

- **The overshoot vanishes, which is why the sum is exactly $c$.** At each crossing the running sum differs from $c$ by at most the term just used, and the terms of a convergent series tend to $0$; since both supplies are consumed in order and both are exhausted, the terms used at successive crossings tend to $0$ as well.
