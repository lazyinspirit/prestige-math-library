# Citation-precision audit — everything that cites `lem-positive-and-negative-parts`

## The target, as it actually stands on disk

`items/lem-positive-and-negative-parts.md` — lemma — Positive and negative parts: $a_k = a_k^{+} - a_k^{-}$ and $|a_k| = a_k^{+} + a_k^{-}$; a series converges absolutely iff both $\\sum a_k^{+}$ and $\\sum a_k^{-}$ converge, and for a conditionally convergent series both diverge to $+\\infty$

#### Statement

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

## The 1 citing use(s), quoted verbatim from the citing items

### `thm-unordered-summability-of-real-families` (published-backward, page nets-and-filters-examples)

Title: Assuming countable choice, a real family is summable as a finite-subset net if and only if it has at most countable support and its nonzero terms are absolutely summable; its sum is independent of the enumeration

- [L3] Positive and negative parts are nonnegative and $|a_i|=a_i^++a_i^-$ ([[lem-positive-and-negative-parts]]).
