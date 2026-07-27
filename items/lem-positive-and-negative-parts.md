---
id: lem-positive-and-negative-parts
kind: lemma
title: "Positive and negative parts: $a_k = a_k^{+} - a_k^{-}$ and $|a_k| = a_k^{+} + a_k^{-}$; a series converges absolutely iff both $\\sum a_k^{+}$ and $\\sum a_k^{-}$ converge, and for a conditionally convergent series both diverge to $+\\infty$"
status: published
origin: session
deps: [def-absolute-and-conditional-convergence, def-series, def-max-min, def-abs-value, lem-of-abs-value, thm-nonnegative-series-bounded-partial-sums, lem-series-linearity, thm-direct-comparison-test, def-divergence-to-infinity, def-real-limit]
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
    - title: "Absolute convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Absolute_convergence"
    - title: "Positive and negative parts (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Positive_and_negative_parts"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals ([[def-series]]) and define its **positive
part** and **negative part** by

$$a_k^{+} \;:=\; \frac{|a_k| + a_k}{2}, \qquad a_k^{-} \;:=\; \frac{|a_k| - a_k}{2} \qquad (k \in \mathbb{N}),$$

with $|x|$ the absolute value ([[def-abs-value]]). Then:

1. $a_k^{+} = \max\{a_k, 0\}$ and $a_k^{-} = \max\{-a_k, 0\}$ ([[def-max-min]]);
   in particular $a_k^{+} \ge 0$ and $a_k^{-} \ge 0$, and
   $$a_k = a_k^{+} - a_k^{-}, \qquad |a_k| = a_k^{+} + a_k^{-} .$$
2. $\sum a_k$ converges absolutely
   ([[def-absolute-and-conditional-convergence]]) **if and only if** both
   $\sum a_k^{+}$ and $\sum a_k^{-}$ converge.
3. If $\sum a_k$ converges conditionally, then neither $\sum a_k^{+}$ nor
   $\sum a_k^{-}$ converges, and the partial sums of each diverge to $+\infty$
   ([[def-divergence-to-infinity]]).

Claim 3 is the engine of the rearrangement theory: a conditionally convergent
series carries an unlimited supply of positive terms and an unlimited supply of
negative ones, and its convergence is nothing but a cancellation between them.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals, its positive and negative parts $a_k^{+}$ and $a_k^{-}$ as displayed above, and the partial sums of the associated series ([[def-series]]).

[L1] Absolute value: $|x| \ge 0$, $-|x| \le x \le |x|$, and $|x| = x$ when $x \ge 0$ while $|x| = -x$ when $x < 0$ ([[def-abs-value]], [[lem-of-abs-value]]).

[L2] A maximum of a subset of $\mathbb{R}$ is its greatest element, and there is at most one ([[def-max-min]]).

[L3] Linearity of series: if $\sum x_k$ and $\sum y_k$ converge then so does $\sum (x_k + y_k)$, and $\sum c\,x_k$ converges for every real $c$ ([[lem-series-linearity]]).

[L4] Direct comparison: if $0 \le x_k \le y_k$ from some index on and $\sum y_k$ converges, then $\sum x_k$ converges ([[thm-direct-comparison-test]]).

[L5] For a series of nonnegative terms, convergence is equivalent to the range of the partial sums being bounded above; and if that range is not bounded above then the partial sums diverge to $+\infty$ ([[thm-nonnegative-series-bounded-partial-sums]], [[def-divergence-to-infinity]]).

[L6] $\sum a_k$ converges absolutely means $\sum |a_k|$ converges, and converges conditionally means it converges while $\sum |a_k|$ does not ([[def-absolute-and-conditional-convergence]], [[def-real-limit]]).

## Proof

**Proof technique:** direct.

1.1 For every $k$, $|a_k| + a_k \ge 0$ and $|a_k| - a_k \ge 0$, since $-|a_k| \le a_k \le |a_k|$; dividing by the positive real $2$ gives $a_k^{+} \ge 0$ and $a_k^{-} \ge 0$. [L1, algebra]

1.2 For every $k$, $a_k^{+} - a_k^{-} = \bigl((|a_k| + a_k) - (|a_k| - a_k)\bigr)/2 = a_k$ and $a_k^{+} + a_k^{-} = \bigl((|a_k| + a_k) + (|a_k| - a_k)\bigr)/2 = |a_k|$. [algebra]

1.3 Assume now that $\sum a_k$ converges conditionally, so $\sum a_k$ converges and $\sum |a_k|$ diverges. [L6]

2.1 If $a_k \ge 0$ then $|a_k| = a_k$, so $a_k^{+} = a_k$ and $a_k^{-} = 0$; if $a_k < 0$ then $|a_k| = -a_k$, so $a_k^{+} = 0$ and $a_k^{-} = -a_k$. In both situations $a_k^{+}$ is the greater of $a_k$ and $0$ and $a_k^{-}$ is the greater of $-a_k$ and $0$, which is claim 1 together with step 1.1 and step 1.2. [L1, L2, step 1.1, step 1.2, algebra]

2.2 From step 1.1 and step 1.2, $0 \le a_k^{+} \le a_k^{+} + a_k^{-} = |a_k|$ and $0 \le a_k^{-} \le |a_k|$ for every $k$. [step 1.1, step 1.2, algebra]

2.3 If both $\sum a_k^{+}$ and $\sum a_k^{-}$ converge, then $\sum |a_k| = \sum (a_k^{+} + a_k^{-})$ converges. [step 1.2, L3]

3.1 If $\sum |a_k|$ converges then, by comparison with $\sum |a_k|$ using step 2.2, both $\sum a_k^{+}$ and $\sum a_k^{-}$ converge. [step 2.2, L4]

3.2 If $\sum a_k^{+}$ converged, then $\sum a_k^{-} = \sum \bigl(a_k^{+} + (-1)a_k\bigr)$ would converge by linearity, whence $\sum |a_k|$ would converge by step 2.3; since $\sum |a_k|$ diverges, $\sum a_k^{+}$ diverges. [step 1.3, step 1.2, step 2.3, L3]

3.3 If $\sum a_k^{-}$ converged, then $\sum a_k^{+} = \sum (a_k^{-} + a_k)$ would converge by linearity, whence again $\sum |a_k|$ would converge; since $\sum |a_k|$ diverges, $\sum a_k^{-}$ diverges. [step 1.3, step 1.2, step 2.3, L3]

4.1 Claim 2 is the conjunction of step 2.3 and step 3.1, read through the definition of absolute convergence. [step 2.3, step 3.1, L6]

5.1 Both $\sum a_k^{+}$ and $\sum a_k^{-}$ are series of nonnegative terms by step 1.1, so each diverges only if the range of its partial sums fails to be bounded above, and then those partial sums diverge to $+\infty$; this is claim 3. [step 1.1, step 3.2, step 3.3, L5] ∎

## Remarks

- **The two parts are determined by the terms, with no choice anywhere.** The displayed formulas define $a^{+}$ and $a^{-}$ outright, and step 2.1 identifies them with the two maxima; nothing in the proof selects one of several candidates.

- **Claim 3 is sharp in both directions.** Absolute convergence makes both part series converge, and then $\sum_{k=0}^{\infty} a_k$ is the difference of their sums. Conditional convergence makes both part series diverge to $+\infty$, and the difference of their partial sums is what converges. There is no third possibility for a convergent series, because claim 2 covers the case where one of them converges: if exactly one converged, $\sum a_k = \sum(a_k^{+} - a_k^{-})$ could not converge, since the sum of a convergent and a divergent series diverges.

- **Why $\max$ is mentioned at all.** The formulas with $|a_k|$ are what the algebra uses, while $\max\{a_k, 0\}$ is what the name "positive part" means and what makes claims about signs immediate. Step 2.1 records that they agree, so either may be used later without further comment.
