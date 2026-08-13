## refuter-7 — the finite-probability foundations

You are **read-only**. You cannot write files, and you never propose an edit
directly into content — you report evidence and Alpha adjudicates it from disk.

### Your assignment

| order | kind | page | items |
|---|---|---|---|
| 220.2 | A | `finite-probability-spaces-and-random-variables` | 37 |
| 220.4 | B | `finite-probability-spaces-and-random-variables-examples` | 11 |

**48 items.** Every id below is a file at `items/<id>.md`.

The batch's own record — what the author promised — is the matching
`research/frontier-12-batch-<i>.notes.md` and
`research/frontier-12-batch-<i>.proof-contracts.json`. The merged contract is
`research/frontier-12-proof-contracts.json`.

### Where the exposure is

This page was split off at decision D1 and is the foundation the
probabilistic-method page rests on. 27 later pages depend on the pair.

The live hypothesis risk on this page is **mutual versus pairwise independence**,
and it is stated correctly at the definitions — check it stays correct at every
point of use.

Concentrate on:

- `def-independence-of-events` and `lem-mutual-independence-under-subfamilies-and-complements`.
  Mutual independence requires the product condition on **every** subfamily, not
  just pairs. Check the complements lemma proves what it claims for the mutual
  case.
- `thm-variance-of-a-sum-under-pairwise-independence` (or whatever the page calls
  it): variance addition needs only **pairwise** independence, and linearity of
  expectation needs **none**. Check neither is over-hypothesised and neither is
  under-hypothesised.
- `thm-markov-inequality` — **nonnegativity is the hypothesis** and it is not
  decorative. Check it is stated and used.
- `thm-chebyshev-inequality`, `lem-cauchy-schwarz-for-finite-random-variables`,
  `thm-finite-second-moment-lower-bound`,
  `cor-relative-variance-positive-probability-bound`. Check the Cauchy–Schwarz
  proof handles the degenerate case where a second moment vanishes, and that the
  second-moment lower bound's division is guarded by a nonzero denominator.
- `thm-finite-bayes-theorem`, `thm-finite-law-of-total-probability`,
  `thm-conditional-probability-multiplication-and-chain-rules`. Every conditional
  probability needs `P(B) > 0`; check the hypothesis is present at each
  statement and that partitions are of **positive-probability** events where
  required.
- `def-product-of-finite-probability-spaces` and
  `thm-product-probability-has-independent-coordinate-events`. Check the product
  measure is well-defined (weights sum to 1) and the independence claim is for
  coordinate events, proved not asserted.
- The B page at order 220.4 gained three boundary items late — Markov sharp,
  Markov failing without nonnegativity, Chebyshev sharp. Check each witness
  actually is what it claims: compute the distribution and verify the equality or
  the failure.

### Item ids


**`finite-probability-spaces-and-random-variables`**

- `def-finite-probability-space-and-event`
- `lem-finite-probability-basic-laws`
- `thm-finite-additivity-of-probability`
- `cor-two-event-inclusion-exclusion`
- `thm-finite-union-bound`
- `def-conditional-probability`
- `thm-conditional-probability-multiplication-and-chain-rules`
- `thm-finite-law-of-total-probability`
- `thm-finite-bayes-theorem`
- `def-pairwise-and-mutual-independence-of-events`
- `thm-event-independence-via-conditioning`
- `lem-mutual-independence-under-subfamilies-and-complements`
- `def-uniform-finite-probability-space`
- `def-product-of-finite-probability-spaces`
- `thm-product-probability-has-independent-coordinate-events`
- `def-finite-real-random-variable-and-distribution`
- `def-expectation-on-a-finite-probability-space`
- `lem-expectation-by-distribution`
- `thm-linearity-of-expectation`
- `thm-expectation-monotonicity-and-bounds`
- `def-indicator-random-variable`
- `lem-indicator-expectation-and-products`
- `def-independence-of-finite-random-variables`
- `thm-event-independence-and-indicator-independence`
- `thm-expectation-of-products-of-independent-random-variables`
- `def-variance-and-covariance`
- `lem-variance-and-covariance-identities`
- `thm-covariance-bilinearity-and-symmetry`
- `thm-variance-of-a-finite-sum`
- `cor-variance-adds-for-pairwise-independent-random-variables`
- `def-bernoulli-and-binomial-random-variables`
- `lem-bernoulli-and-binomial-mean-and-variance`
- `thm-markov-inequality`
- `thm-chebyshev-inequality`
- `lem-cauchy-schwarz-for-finite-random-variables`
- `thm-finite-second-moment-lower-bound`
- `cor-relative-variance-positive-probability-bound`

**`finite-probability-spaces-and-random-variables-examples`**

- `ex-loaded-die-and-conditional-probability`
- `ex-bayes-theorem-for-two-urns`
- `ex-pairwise-independent-events-not-mutually-independent`
- `cex-equal-probability-events-need-not-be-independent`
- `cex-uncorrelated-random-variables-need-not-be-independent`
- `cex-dependent-variables-need-not-factor-expectation`
- `fs-linearity-of-expectation-requires-independence`
- `ex-strict-union-bound-for-overlapping-events`
- `ex-chebyshev-inequality-is-sharp`
- `ex-markov-inequality-is-sharp`
- `cex-markov-inequality-fails-without-nonnegativity`
