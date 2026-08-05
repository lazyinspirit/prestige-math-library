# Citation-precision audit — everything that cites `thm-nonnegative-series-bounded-partial-sums`

## The target, as it actually stands on disk

`items/thm-nonnegative-series-bounded-partial-sums.md` — theorem — A series of nonnegative terms converges iff its partial sums are bounded, and then the sum is their supremum

#### Statement

Let $(a_k)$ be a sequence of reals with $a_k \ge 0$ for every $k \in \mathbb{N}$,
let $s_n = \sum_{k<n} a_k$ be its partial sums and let
$S = \{\, s_n : n \in \mathbb{N} \,\}$ be the range of $(s_n)$ ([[def-series]]).
Then:

1. $(s_n)$ is nondecreasing ([[def-monotone-sequence]]) and $s_n \ge 0$ for every
   $n$;
2. $\sum a_k$ converges **if and only if** $S$ is bounded above
   ([[def-bounded-set]]), and in that case
   $$\sum_{k=0}^{\infty} a_k \;=\; \sup S ,$$
   so in particular $s_n \le \sum_{k=0}^{\infty} a_k$ for every $n$;
3. if $S$ is not bounded above then $s_n \to +\infty$
   ([[def-divergence-to-infinity]]) and $\sum a_k$ diverges.

This is the theorem that makes the nonnegative theory work: for terms of one
sign, convergence is a boundedness question and no candidate limit is ever
needed. Every comparison test on this page is an application of it.

## The 1 citing use(s), quoted verbatim from the citing items

### `thm-unordered-summability-of-real-families` (published-backward, page nets-and-filters-examples)

Title: Assuming countable choice, a real family is summable as a finite-subset net if and only if it has at most countable support and its nonzero terms are absolutely summable; its sum is independent of the enumeration

- [L2] A nonnegative series converges exactly when its partial sums are bounded above, and an absolutely convergent series is unchanged by a bijective rearrangement ([[thm-nonnegative-series-bounded-partial-sums]], [[thm-dirichlet-rearrangement]]).
