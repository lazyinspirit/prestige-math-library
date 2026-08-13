## refuter-1 — the probabilistic method — Local Lemma, Chernoff, Erdős constructions

You are **read-only**. You cannot write files, and you never propose an edit
directly into content — you report evidence and Alpha adjudicates it from disk.

### Your assignment

| order | kind | page | items |
|---|---|---|---|
| 221 | A | `finite-probability-and-the-probabilistic-method` | 28 |
| 222 | B | `finite-probability-and-the-probabilistic-method-examples` | 6 |

**34 items.** Every id below is a file at `items/<id>.md`.

The batch's own record — what the author promised — is the matching
`research/frontier-12-batch-<i>.notes.md` and
`research/frontier-12-batch-<i>.proof-contracts.json`. The merged contract is
`research/frontier-12-proof-contracts.json`.

### Where the exposure is

This is the highest-exposure page in the run. The Lovász Local Lemma is the
single place where a plausible-looking induction most often fails.

Spend the bulk of your attention here:

- `lem-local-lemma-conditional-probability-bound` and
  `thm-asymmetric-lovasz-local-lemma`. The standard proof is an induction on the
  size of the conditioning set, and the subtle step is splitting the conditioning
  events into those adjacent and those non-adjacent to the event in question, and
  checking the denominator is nonzero before dividing. **Verify the induction is
  well-founded and that the nonzero denominator is established, not assumed.**
  Check the dependency-digraph convention in `def-dependency-digraph-for-finite-events`
  matches how the theorem uses it — mutual independence from the non-neighbours
  as a *set* is stronger than pairwise independence, and the proof needs the
  stronger form.
- `cor-symmetric-lovasz-local-lemma`. Check the exact constant. The usual form is
  `e·p·(d+1) <= 1`; whether the digraph degree `d` counts the event itself is a
  classic off-by-one. Confirm the corollary's constant is what its own asymmetric
  theorem actually yields.
- `thm-chernoff-bound-for-independent-random-signs` with
  `def-moment-generating-function`, `lem-mgf-of-independent-finite-sum`,
  `lem-moment-bound-for-a-random-sign`. Check the MGF bound
  `cosh(t) <= exp(t^2/2)` is proved and not asserted, and that the optimisation
  in `t` is valid at the endpoint chosen.
- `thm-erdos-high-girth-and-high-chromatic-number` with
  `lem-random-graph-short-cycle-expectation` and
  `lem-random-graph-independence-number-bound`. The deletion step must delete
  *edges* from short cycles and the parameter choices must be simultaneously
  satisfiable for large `n`. Check the asymptotics actually close, and that the
  independence-number bound is applied to the graph that survives deletion.
- `lem-arbitrarily-large-primes-congruent-to-two-modulo-three` and
  `thm-erdos-sum-free-subset-bound`. Check the prime-selection argument and the
  middle-interval sum-free argument.
- `thm-szele-many-hamilton-paths-in-a-tournament` — check the counting.
- `lem-exponential-dominates-one-plus-x` is used pervasively; check its exact
  statement and direction.

Independence hypotheses are the live risk on this page: **mutual versus pairwise**
independence, and whether a lemma proved for independent events is applied to
events that are only pairwise independent.

### Item ids


**`finite-probability-and-the-probabilistic-method`**

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

**`finite-probability-and-the-probabilistic-method-examples`**

- `ex-triangle-count-in-the-erdos-renyi-random-graph`
- `ex-second-moment-bound-for-a-nonempty-random-subset`
- `ex-diagonal-ramsey-lower-bound-by-the-union-bound`
- `ex-local-lemma-hypergraph-parameter-check`
- `ex-high-girth-high-chromatic-parameter-ledger`
- `cex-first-moment-threshold-one-is-not-enough`
