## Reader 1 — audit batch 2 (76 items)

You did **not** author this batch. That separation is the point of your role.

| order | kind | page | items |
|---|---|---|---|
| 66 | A | `composition-series-and-solvable-groups` | 27 |
| 67 | B | `composition-series-and-solvable-groups-examples` | 10 |
| 104 | A | `free-modules-and-exact-sequences` | 29 |
| 105 | B | `free-modules-and-exact-sequences-examples` | 10 |

Every item id is listed in `research/plan-spec.json` under these pages, and each
one is a file at `items/<id>.md`. The batch's own record — what its author
promised — is `research/frontier-12-batch-2.notes.md` and
`research/frontier-12-batch-2.proof-contracts.json`.

### Write your findings to

`research/frontier-12-reader-1.findings.md`

### You are READ-ONLY on content

Do not edit any file under `items/` or `library/`. Alpha adjudicates every
finding from disk and applies any repair. Your job is evidence, not a verdict.

### Priorities for this batch

Read every item, but spend your attention where the exposure is. 76 items is
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

- `def-subnormal-normal-series-refinement-and-equivalence`
- `def-composition-series-composition-factors-and-length`
- `thm-every-finite-group-has-a-composition-series`
- `lem-dedekind-modular-law-for-subgroups`
- `thm-zassenhaus-butterfly-lemma`
- `thm-schreier-refinement-theorem`
- `thm-jordan-holder-theorem-for-groups`
- `cor-order-is-the-product-of-composition-factor-orders`
- `def-characteristic-subgroup`
- `lem-characteristic-subgroups-are-normal-and-characteristic-is-transitive`
- `thm-derived-subgroup-is-characteristic-and-abelianization-is-universal`
- `def-derived-series-solvable-group-and-derived-length`
- `lem-homomorphisms-respect-commutators-and-derived-series`
- `thm-solvable-iff-it-has-an-abelian-factor-series`
- `thm-subgroups-and-quotients-of-solvable-groups-are-solvable`
- `thm-extensions-and-direct-products-of-solvable-groups-are-solvable`
- `thm-finite-solvable-iff-composition-factors-have-prime-order`
- `thm-a-five-and-symmetric-groups-from-degree-five-are-not-solvable`
- `def-subgroup-commutator-and-lower-central-series`
- `def-upper-central-series`
- `def-nilpotent-group-and-nilpotency-class`
- `lem-central-series-commutator-criterion`
- `thm-upper-and-lower-central-characterizations-of-nilpotence`
- `thm-subgroups-quotients-and-finite-products-of-nilpotent-groups`
- `thm-finite-p-groups-are-nilpotent`
- `cor-nilpotent-groups-and-finite-p-groups-are-solvable`
- `thm-central-extensions-and-nilpotency-class`
- `ex-two-composition-series-of-the-cyclic-group-of-order-twelve`
- `ex-composition-and-derived-series-of-s-three`
- `ex-composition-and-derived-series-of-s-four`
- `ex-upper-and-lower-central-series-of-the-dihedral-group-of-order-eight`
- `ex-heisenberg-group-is-nilpotent-of-class-two`
- `fs-composition-factors-determine-a-finite-group-up-to-isomorphism`
- `fs-every-solvable-group-is-abelian`
- `fs-an-extension-of-nilpotent-groups-is-nilpotent`
- `fs-every-subnormal-series-is-a-normal-series`
- `fs-normal-in-characteristic-implies-normal-in-the-whole-group`
- `def-direct-sum-of-a-family-of-modules`
- `thm-universal-property-of-module-direct-sums`
- `def-free-module-on-a-set-and-standard-basis`
- `thm-universal-property-of-free-modules`
- `cor-every-module-is-a-quotient-of-a-free-module`
- `def-invariant-basis-number-and-rank-of-a-free-module`
- `thm-nonzero-commutative-rings-have-invariant-basis-number`
- `def-exact-and-short-exact-sequences-of-modules`
- `lem-endpoints-in-a-short-exact-sequence`
- `def-split-short-exact-sequence`
- `thm-splitting-lemma-for-modules`
- `def-hom-groups-and-induced-hom-maps`
- `thm-hom-functors-are-left-exact`
- `lem-four-lemma-for-modules`
- `thm-five-lemma-for-modules`
- `thm-snake-lemma-for-modules`
- `def-projective-module`
- `thm-free-modules-are-projective-with-choice-boundary`
- `thm-projective-module-characterizations`
- `thm-direct-sums-of-projectives-and-enough-projectives`
- `def-injective-module`
- `thm-injective-module-characterizations`
- `thm-baer-criterion-for-injective-modules`
- `def-divisible-module-over-an-integral-domain`
- `thm-injective-modules-over-a-pid-are-exactly-divisible`
- `lem-every-abelian-group-embeds-in-a-divisible-group`
- `thm-products-of-injective-modules`
- `lem-coinduced-modules-are-injective`
- `thm-module-categories-have-enough-injectives`
- `ex-standard-basis-and-universal-map-from-r-three`
- `cex-z-mod-n-is-not-a-free-z-module`
- `cex-free-module-rank-fails-over-an-endomorphism-ring`
- `ex-projective-nonfree-module-z-two-over-z-six`
- `cex-nonsplit-short-exact-sequence-of-integers-mod-two`
- `ex-canonical-split-sequence-of-a-direct-sum`
- `cex-contravariant-hom-need-not-be-right-exact`
- `fs-every-short-exact-sequence-splits`
- `fs-every-projective-module-is-free`
- `fs-every-injective-module-is-projective`
