## Reader 4 — audit batch 5 (82 items)

You did **not** author this batch. That separation is the point of your role.

| order | kind | page | items |
|---|---|---|---|
| 220.2 | A | `finite-probability-spaces-and-random-variables` | 37 |
| 220.4 | B | `finite-probability-spaces-and-random-variables-examples` | 11 |
| 221 | A | `finite-probability-and-the-probabilistic-method` | 28 |
| 222 | B | `finite-probability-and-the-probabilistic-method-examples` | 6 |

Every item id is listed in `research/plan-spec.json` under these pages, and each
one is a file at `items/<id>.md`. The batch's own record — what its author
promised — is `research/frontier-12-batch-5.notes.md` and
`research/frontier-12-batch-5.proof-contracts.json`.

### Write your findings to

`research/frontier-12-reader-4.findings.md`

### You are READ-ONLY on content

Do not edit any file under `items/` or `library/`. Alpha adjudicates every
finding from disk and applies any repair. Your job is evidence, not a verdict.

### Priorities for this batch

Read every item, but spend your attention where the exposure is. 82 items is
a lot; a shallow pass over all of them is worth less than a real pass over the
proof-bearing ones plus a check of every citation.

Specific things known to be live in this run:

- **Hypotheses.** `char != 2` for polarisation and orthogonal diagonalisation;
  ordered fields for Sylvester's inertia; star-shaped rather than merely
  connected for the converse of closedness; smallness conditions in the
  category-theory limits; pairwise versus mutual independence in probability;
  nonnegativity for Markov; the split-characteristic-polynomial hypothesis where
  the source assumed an algebraically closed field.
- **Citation fidelity.** A `[F#]`/`[A#]`/`[L#]` fact must state the cited
  proposition itself. This run already caught one at scaffold stage — a quoted
  `|sin x| <= |x|` where the source states `sin(x) <= x` for `x >= 0`. Open the
  cited item on disk and compare; do not trust the restatement.
- **Green's theorem** (if batch 4) is deliberately scoped to elementary regions
  and finite unions. Complaining it does not cover arbitrary Jordan domains is
  NOT a finding. A proof step that quietly assumes a Jordan domain IS one.
- **Titles.** A title or Statement claiming more than the proof delivers is
  fatal, and the step-7 judges cannot see a false title.

Item ids, for your checklist:

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
- `thm-positive-probability-existence-principle`
- `thm-first-moment-method`
- `prop-deletion-alteration-method`
- `lem-exponential-dominates-one-plus-x`
- `def-erdos-renyi-random-graph`
- `lem-random-graph-fixed-pattern-probability`
- `def-moment-generating-function`
- `lem-mgf-of-independent-finite-sum`
- `lem-moment-bound-for-a-random-sign`
- `thm-chernoff-bound-for-independent-random-signs`
- `def-dependency-digraph-for-finite-events`
- `lem-local-lemma-conditional-probability-bound`
- `thm-asymmetric-lovasz-local-lemma`
- `cor-symmetric-lovasz-local-lemma`
- `thm-hypergraph-two-colouring-by-first-moment`
- `thm-hypergraph-two-colouring-by-local-lemma`
- `thm-max-cut-at-least-half-the-edges`
- `thm-szele-many-hamilton-paths-in-a-tournament`
- `def-tournament-property-s-k`
- `thm-tournament-property-s-k-existence`
- `def-dominating-set-in-a-graph`
- `thm-small-dominating-set-from-minimum-degree`
- `def-sum-free-set-of-integers`
- `lem-arbitrarily-large-primes-congruent-to-two-modulo-three`
- `thm-erdos-sum-free-subset-bound`
- `lem-random-graph-short-cycle-expectation`
- `lem-random-graph-independence-number-bound`
- `thm-erdos-high-girth-and-high-chromatic-number`
- `ex-triangle-count-in-the-erdos-renyi-random-graph`
- `ex-second-moment-bound-for-a-nonempty-random-subset`
- `ex-diagonal-ramsey-lower-bound-by-the-union-bound`
- `ex-local-lemma-hypergraph-parameter-check`
- `ex-high-girth-high-chromatic-parameter-ledger`
- `cex-first-moment-threshold-one-is-not-enough`
