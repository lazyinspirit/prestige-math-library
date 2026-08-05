# Citation-precision audit — everything that cites `thm-dirichlet-rearrangement`

## The target, as it actually stands on disk

`items/thm-dirichlet-rearrangement.md` — theorem — Dirichlet's rearrangement theorem: an absolutely convergent series converges unconditionally, and every rearrangement of it has the same sum

#### Statement

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

## The 1 citing use(s), quoted verbatim from the citing items

### `thm-unordered-summability-of-real-families` (published-backward, page nets-and-filters-examples)

Title: Assuming countable choice, a real family is summable as a finite-subset net if and only if it has at most countable support and its nonzero terms are absolutely summable; its sum is independent of the enumeration

- [L2] A nonnegative series converges exactly when its partial sums are bounded above, and an absolutely convergent series is unchanged by a bijective rearrangement ([[thm-nonnegative-series-bounded-partial-sums]], [[thm-dirichlet-rearrangement]]).
