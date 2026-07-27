---
id: ex-fat-cantor-measure-computed
kind: example
title: "The intervals removed from the Smith-Volterra-Cantor set have total length $1/2$, so the set cannot be covered by intervals of total length less than $1/2$"
status: published
origin: session
deps: [thm-fat-cantor-set-has-positive-measure, def-fat-cantor-set, lem-finite-interval-cover-total-length, lem-nondegenerate-interval-is-not-null, def-measure-zero-and-content-zero, thm-geometric-series, def-series, def-interval, def-integer-power, lem-power-laws, def-finite-sum, lem-finite-sum-laws, thm-nonnegative-series-bounded-partial-sums, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
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
    - title: "Smith-Volterra-Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Smith%E2%80%93Volterra%E2%80%93Cantor_set"
    - title: "Null set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Null_set"
pipeline_run: null
---

## Example

Let $S$ be the Smith-Volterra-Cantor set ([[def-fat-cantor-set]]). At stage $n$
exactly $2^n$ open intervals, each of length $4^{-n-1}$, are removed, so the
lengths removed at that stage total $2^{n} \cdot 4^{-n-1} = 4^{-1} \cdot 2^{-n}$
and over all stages they total

$$\sum_{n=0}^{\infty} 4^{-1} \cdot 2^{-n} \;=\; 4^{-1} \cdot 2 \;=\; \tfrac12 .$$

Correspondingly, **no cover of $S$ by intervals has total length below
$\tfrac12$**: if $(a_k)$, $(b_k)$ are sequences of reals with $a_k \le b_k$,
$S \subseteq \bigcup_k [a_k,b_k]$ and $\sum_{k<i}(b_k - a_k) \le M$ for every
$i$, then $M \ge \tfrac12$ ([[thm-fat-cantor-set-has-positive-measure]]).

The two numbers are the two halves of the unit interval's length, and the second
is what "the set has positive measure" means in the vocabulary available here:
this library defines no outer measure, so the assertion is about covers and their
total lengths, never about a number attached to $S$ itself.

## Facts & Assumptions

**Given:** The Smith-Volterra-Cantor set $S$, the lengths $(\lambda_n)$, the gaps $g_n$, the lists $(N_n, \ell^{(n)})$ and the removed intervals $M^{(n)}_j = (e^{(n)}_j + \lambda_{n+1},\ e^{(n)}_j + g_n)$ of [[def-fat-cantor-set]].

[L1] Each $M^{(n)}_j$ has length $g_n - \lambda_{n+1} = \lambda_n - 2\lambda_{n+1} = 4^{-n-1}$, and $\sum_{j<N_n} c = 2^{n}c$ for every real $c$ ([[def-fat-cantor-set]], [[def-interval]], [[def-integer-power]], [[lem-power-laws]]).

[L2] $\sum_{n=0}^{\infty}2^{-n} = 2$, convergent series scale termwise, and a series of nonnegative terms converges exactly when its partial sums are bounded, the sum being their supremum ([[thm-geometric-series]], [[def-series]], [[thm-nonnegative-series-bounded-partial-sums]], [[def-finite-sum]], [[lem-finite-sum-laws]]).

[L3] If sequences $(a_k)$, $(b_k)$ with $a_k \le b_k$ cover $S$ and all partial total lengths are at most $M$, then $M \ge 2^{-1}$; and $S$ is not null ([[thm-fat-cantor-set-has-positive-measure]], claim 4, [[def-measure-zero-and-content-zero]]).

[L4] A finite family of intervals covering $[a,b]$ has total length at least $b-a$, and the same holds for a countable family ([[lem-finite-interval-cover-total-length]], [[lem-nondegenerate-interval-is-not-null]]).

[L5] Ordered-field arithmetic: $0 < 1$, so $2 > 0$ and $4 > 0$; adding a constant and multiplying by a positive preserve an inequality ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Verification

**Proof technique:** direct.

1.1 **Stage $n$.** By [L1] the intervals removed at stage $n$ are the $M^{(n)}_j$ for $j < N_n$, each of length $4^{-n-1}$, so their lengths total $\sum_{j<N_n} 4^{-n-1} = 2^{n} \cdot 4^{-n-1}$, which equals $4^{-1} \cdot 2^{-n}$ because $4^{-n-1} = 4^{-1} \cdot 4^{-n} = 4^{-1} \cdot 2^{-2n}$ and $2^{n} \cdot 2^{-2n} = 2^{-n}$ by [L1] and [L5]. [given, L1, L5]

2.1 **All stages together.** The terms $4^{-1}2^{-n}$ are nonnegative, and by [L2] the series $\sum_n 4^{-1}2^{-n}$ converges with sum $4^{-1} \cdot 2 = 2^{-1}$. So the total length of all the removed intervals is exactly $2^{-1}$. [step 1.1, L2, L5]

3.1 **The lower bound for covers.** [L3] says precisely that a bound $M$ on all the partial total lengths of a cover of $S$ satisfies $M \ge 2^{-1}$; so no cover of $S$ by intervals, countable or finite, has total length below $2^{-1}$, and in particular $S$ is not null. The two computations fit together: the removed intervals of total length $2^{-1}$ and any cover of $S$ of total length $M$ together cover $[0,1]$, so $M + 2^{-1} \ge 1$ by [L4], which is the same bound. [step 2.1, L3, L4] ∎

## Remarks

- **What the numbers do and do not say.** "Total length of the removed
  intervals" is a sum of lengths of an explicit family, and "no cover below
  $1/2$" is a statement about all covers. Neither says that $S$ *has measure*
  $1/2$: that would require an outer measure, which is not defined at this point
  in the reading order. The pair of statements is nevertheless the exact content
  of the classical assertion.

- **Why $4^{-n}$ and not $3^{-n}$.** For the middle-thirds construction the
  removed length at stage $n$ is $2^{n}3^{-n-1}$, and
  $\sum_n 2^{n}3^{-n-1} = 3^{-1} \cdot 3 = 1$, so everything is removed in the
  sense of total length and the Cantor set is null
  ([[thm-cantor-set-properties]]). Here the removed pieces shrink faster than
  they multiply and only half the length goes.

- **The bound $1/2$ is sharp in one direction only.** The removed intervals
  together with a cover of $S$ must reach total length $1$, so a cover of $S$
  cannot do better than $1/2$; whether total length exactly $1/2$ is approached by
  covers of $S$ is a question about outer measure and is not asked here.
