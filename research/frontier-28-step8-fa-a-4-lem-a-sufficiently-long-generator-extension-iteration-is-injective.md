# Final-adjudicator evidence: `lem-a-sufficiently-long-generator-extension-iteration-is-injective`

Disposition: `repaired`

Source status: `verified`

Exact reviewed item hash before the independent repair: `5e46ef26bcaa26943074d06976290160277621c3b072ddf1bced7b390f031c89`.
Exact terminal item hash: `e743d5a31ef0c6fc73b04518ec3b95c62205e35b9d3ed1da43572813e30b4e80`.
Exact terminal context hash: `f3c770ac70c11f90467f09b8d51b0329e4290065ccd70705c4c38379e768882d`.

Currency note: the item bytes remain unchanged; this context hash was refreshed
after the later one-step generator item on the same A page was independently
repaired.

## Material inspected

I read the current lemma; its three cited dependencies and the underlying
one-step pushout definition; the projective/injective-resolutions A page and B
companion; the batch-8 manifest, source coverage, notes, batch contract, merged
contract, Step-6 risk/refuter records; both frozen judge rejections; both exact
Alpha adjudications and defect-ledger rows; and Alpha's two repair reports.

The first frozen rejection correctly required the Axiom of Choice and local
smallness inherited from the generator-detection lemma. Alpha added both. The
second frozen rejection correctly separated large-stage factorization from
extension across the generator. Alpha added the one-step extension lemma as a
separate dependency and fact.

## Authoritative verification

I verified the specialized construction against the Stacks Project,
`https://stacks.math.columbia.edu/tag/05AB`.

- Proposition 19.11.5 proves that a map from an object into a sufficiently
  high-cofinality colimit of injections factors through an earlier stage, using
  the increasing family of preimage subobjects and AB5.
- Lemma 19.11.6 is the extension-from-subobjects-of-a-generator criterion for
  injectivity.
- Theorem 19.11.7 constructs the same one-step pushout functor, iterates it
  transfinitely, factors a map `N -> M_lambda` through `M_alpha`, extends it to
  `U -> M_(alpha+1)`, and concludes that `M_lambda` is injective.

These are exactly the three interfaces used by the repaired local proof.

## Mathematical determination

Alpha's second repair is correct. Given `f:N -> M_lambda`, the factorization
lemma gives `f=j_(alpha,lambda) g` for some `alpha<lambda`. Since `lambda` is a
limit ordinal, `alpha+1<lambda`. The one-step construction produces
`h:U -> M_(alpha+1)` with restriction `eta_(M_alpha) g`. Compatibility of the
tower then gives

`j_(alpha+1,lambda) h|_N = j_(alpha,lambda) g = f`.

Thus every map from every subobject of the generator extends across the
generator, and the Choice-qualified detection lemma makes `M_lambda`
injective.

I independently repaired one remaining precision gap. The former proof said
to choose a limit ordinal "as in [L2]", although [L2] only states what happens
*if* a limit ordinal has cofinality above the bound. The statement and Given
now quantify the exact bound `kappa` and a limit ordinal `lambda` with
`cf(lambda)>kappa`; step 1.1 explicitly uses both the limit property and the
transition compatibility. I also added the one-step lemma to the stale batch
manifest and synchronized the endpoint, zero-subobject, degenerate-start, and
Choice boundary records in both contract carriers. No dependency item was
edited while resolving this queue position.

## Focused checks

- `precheck`: one item checked, zero failures.
- Strict batch-8 and merged proof contracts: zero errors and zero warnings for
  the item.
- `rendercheck`: clean YAML, math delimiters, wikilinks, and KaTeX.
- Citation fidelity: no missing quote or widening candidate for the item.
- Boundary audit: no contradiction or template for the item.
- Batch-8 content policy: no item finding.
- Repository dependency check: exit zero and final `OK`; standing warnings
  were unrelated.
