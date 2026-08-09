---
id: thm-dirichlet-rearrangement
kind: theorem
title: "Dirichlet's rearrangement theorem: an absolutely convergent series converges unconditionally, and every rearrangement of it has the same sum"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-rearrangement-and-unconditional-convergence, def-absolute-and-conditional-convergence, lem-absolute-convergence-implies-convergence, lem-positive-and-negative-parts, thm-nonnegative-series-bounded-partial-sums, lem-series-linearity, thm-induction-principle, def-finite-sum, lem-finite-sum-laws, lem-limit-preserves-order, def-injection-surjection-bijection, def-series, def-real-limit]
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
    - title: "Riemann series theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_series_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "N. Donaldson, Math 140A: Real Analysis notes"
      url: "https://www.math.uci.edu/~ndonalds/math140a/notes.pdf"
    - title: "John K. Hunter, An Introduction to Real Analysis, Chapter 4"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch4.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals whose series converges absolutely
([[def-absolute-and-conditional-convergence]]), and let
$\sigma : \mathbb{N} \to \mathbb{N}$ be a bijection
([[def-injection-surjection-bijection]]). Then:

1. $\sum |a_{\sigma(k)}|$ converges, with
   $\sum_{k=0}^{\infty} |a_{\sigma(k)}| = \sum_{k=0}^{\infty} |a_k|$; that is,
   the rearranged series again converges absolutely;
2. $\sum a_{\sigma(k)}$ converges, with
   $$\sum_{k=0}^{\infty} a_{\sigma(k)} \;=\; \sum_{k=0}^{\infty} a_k .$$

Consequently an absolutely convergent series converges unconditionally
([[def-rearrangement-and-unconditional-convergence]]).

The engine of the proof is a single statement about series of **nonnegative**
terms: for those, the sum is the supremum of the partial sums
([[thm-nonnegative-series-bounded-partial-sums]]), a quantity that cannot see the
order of the terms. The general case is reduced to that one through the positive
and negative parts ([[lem-positive-and-negative-parts]]), which is why no
manipulation of signed finite sums over shuffled index sets occurs anywhere below.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals with $\sum |a_k|$ convergent, and a bijection $\sigma : \mathbb{N} \to \mathbb{N}$.

[L1] Finite sums: $\sum_{k<0} x_k = 0$, $\sum_{k<n+1} x_k = \sum_{k<n} x_k + x_n$, and a finite sum may be split at any intermediate index ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L2] Monotonicity of finite sums: if $x_k \le y_k$ for all $k < n$ then $\sum_{k<n} x_k \le \sum_{k<n} y_k$; in particular a finite sum of nonnegative terms is nonnegative ([[lem-finite-sum-laws]]).

[L3] For a series of nonnegative terms, convergence is equivalent to the range of the partial sums being bounded above, and then the sum is the supremum of that range; in particular every partial sum is at most the sum ([[thm-nonnegative-series-bounded-partial-sums]], [[def-series]]).

[L4] Limits preserve non-strict inequalities holding eventually ([[lem-limit-preserves-order]], [[def-real-limit]]).

[L5] The principle of induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L6] A bijection is injective and surjective; $f[S]$ and $f^{-1}[T]$ denote image and preimage ([[def-injection-surjection-bijection]]).

[L7] Positive and negative parts: $a_k^{+} = (|a_k| + a_k)/2$ and $a_k^{-} = (|a_k| - a_k)/2$ are nonnegative, $a_k = a_k^{+} - a_k^{-}$, $|a_k| = a_k^{+} + a_k^{-}$, and $\sum |a_k|$ converges if and only if both $\sum a_k^{+}$ and $\sum a_k^{-}$ converge ([[lem-positive-and-negative-parts]]).

[L8] Linearity of series ([[lem-series-linearity]]).

[L9] If $\sum |x_k|$ converges then $\sum x_k$ converges ([[lem-absolute-convergence-implies-convergence]]).

[L10] Unconditional convergence means every rearrangement converges to the same sum ([[def-rearrangement-and-unconditional-convergence]]).

## Proof

**Proof technique:** direct.

1.1 **Finite domination.** For every $n \in \mathbb{N}$ the following holds: for every sequence $(c_k)$ of nonnegative reals, every $Q \in \mathbb{N}$ and every injective map $\tau$ from $\{k : k < n\}$ into $\{k : k < Q\}$, one has $\sum_{k<n} c_{\tau(k)} \le \sum_{k<Q} c_k$. This is proved by induction on $n$, the sequence, $Q$ and $\tau$ being universally quantified inside the induction statement. At $n = 0$ the left side is the empty sum $0$ and the right side is nonnegative. Assume the statement at $n$, and let $\tau$ be injective from $\{k : k < n+1\}$ into $\{k : k < Q\}$; put $p := \tau(n)$, so $p < Q$, and let $(c'_k)$ agree with $(c_k)$ except that $c'_p := 0$, again a nonnegative sequence. The restriction of $\tau$ to $\{k : k < n\}$ is injective into $\{k : k < Q\}$ and never takes the value $p$, so $c'_{\tau(k)} = c_{\tau(k)}$ for $k < n$, and the induction hypothesis gives $\sum_{k<n} c_{\tau(k)} = \sum_{k<n} c'_{\tau(k)} \le \sum_{k<Q} c'_k$. Splitting the sum $\sum_{k<Q}$ at $p$ and at $p+1$ shows $\sum_{k<Q} c'_k = \sum_{k<Q} c_k - c_p$, so adding $c_p$ to both sides gives $\sum_{k<n+1} c_{\tau(k)} \le \sum_{k<Q} c_k$. [L1, L2, L5, L6]

1.2 **Bounding index.** For every injective $\rho : \mathbb{N} \to \mathbb{N}$ and every $n \in \mathbb{N}$ there is $Q \in \mathbb{N}$ with $\rho(k) < Q$ for all $k < n$: at $n = 0$ take $Q = 0$, and if $Q$ works for $n$ then the greater of $Q$ and $\rho(n)+1$ works for $n+1$, the order on $\mathbb{N}$ being total. [L5, L6]

1.3 Since $\sigma$ is a bijection, for every $j \in \mathbb{N}$ there is exactly one $k$ with $\sigma(k) = j$; write $\sigma^{-1}(j)$ for that $k$. Then $\sigma^{-1}$ is a bijection of $\mathbb{N}$, with $\sigma(\sigma^{-1}(j)) = j$ for every $j$. [L6, choose]

1.4 By [L7] both $\sum a_k^{+}$ and $\sum a_k^{-}$ converge; write $U$ and $V$ for their sums. Since $a_k = a_k^{+} - a_k^{-}$, linearity gives $\sum_{k=0}^{\infty} a_k = U - V$. [given, L7, L8]

1.5 The positive and negative parts are defined pointwise from the value of the term, so the positive part of $a_{\sigma(k)}$ is $a_{\sigma(k)}^{+}$ and its negative part is $a_{\sigma(k)}^{-}$; both are nonnegative sequences in the index $k$. [L7]

2.1 **The nonnegative case, one inequality.** Let $(c_k)$ be a sequence of nonnegative reals with $\sum c_k$ convergent of sum $M$, and let $\rho$ be a bijection of $\mathbb{N}$. For each $n$ pick $Q$ as in step 1.2; then $\rho$ restricted to $\{k : k<n\}$ is injective into $\{k : k<Q\}$, so $\sum_{k<n} c_{\rho(k)} \le \sum_{k<Q} c_k \le M$ by step 1.1 and [L3]. The terms $c_{\rho(k)}$ are nonnegative, so the partial sums of $\sum c_{\rho(k)}$ are bounded above by $M$; hence that series converges, and since each partial sum is at most $M$ its sum is at most $M$. [step 1.1, step 1.2, L2, L3, L4]

3.1 **The nonnegative case, equality.** With $(c_k)$, $M$ and $\rho$ as in step 2.1, write $M'$ for the sum of $\sum c_{\rho(k)}$, so $M' \le M$. The sequence $(c_{\rho(k)})_k$ is nonnegative with convergent series of sum $M'$, and its rearrangement along the bijection $\rho^{-1}$ is $j \mapsto c_{\rho(\rho^{-1}(j))} = c_j$; so step 2.1, applied to that sequence and that bijection, gives $M \le M'$. Hence $M' = M$. [step 1.3, step 2.1]

4.1 Applying step 3.1 to the nonnegative sequence $(|a_k|)$, whose series converges by hypothesis, and to $\sigma$: the series $\sum |a_{\sigma(k)}|$ converges with the same sum as $\sum |a_k|$, which is claim 1. [given, step 3.1]

4.2 Applying step 3.1 to $(a_k^{+})$ and to $(a_k^{-})$, each with the bijection $\sigma$: the series $\sum a_{\sigma(k)}^{+}$ and $\sum a_{\sigma(k)}^{-}$ converge, with sums $U$ and $V$ respectively. [step 3.1, step 1.4, step 1.5]

5.1 Since $a_{\sigma(k)} = a_{\sigma(k)}^{+} - a_{\sigma(k)}^{-}$ for every $k$, linearity gives that $\sum a_{\sigma(k)}$ converges with sum $U - V$, which by step 1.4 equals $\sum_{k=0}^{\infty} a_k$; this is claim 2. [step 1.4, step 1.5, step 4.2, L8]

6.1 The same conclusion is available from claim 1 alone: $\sum |a_{\sigma(k)}|$ converges, so $\sum a_{\sigma(k)}$ converges; step 5.1 is what identifies its sum. [step 4.1, L9]

7.1 Claims 1 and 2 hold for an arbitrary bijection $\sigma$, so $\sum a_k$ converges and every rearrangement of it converges to the same sum, that is, $\sum a_k$ converges unconditionally. [step 4.1, step 5.1, L9, L10] ∎

## Remarks

- **Why the nonnegative case is the whole theorem.** For nonnegative terms the sum is the supremum of the set of partial sums ([[thm-nonnegative-series-bounded-partial-sums]]), and step 2.1 shows that each partial sum of a rearrangement is bounded by the original sum, and conversely. No cancellation can occur, so nothing depends on the order. Everything genuinely signed in the theorem is handled by [[lem-positive-and-negative-parts]], which splits the series into two nonnegative ones.

- **What step 1.1 is, and why it is proved rather than assumed.** It says that a finite sum of nonnegative terms taken along an injective list of indices is at most the sum over an initial segment containing all those indices. This is the one piece of finite combinatorics the theorem needs, and it is not among the laws of [[lem-finite-sum-laws]], all of which compare sums term by term over the same index range. The proof zeroes out one term at a time, which is what keeps it inside those laws.

- **The hypothesis cannot be weakened.** [[thm-riemann-series-theorem]] shows that for a conditionally convergent series every real number, and $\pm\infty$ besides, is the sum of some rearrangement; and [[cor-unconditional-iff-absolute-in-r]] turns the two theorems together into an exact characterisation.
