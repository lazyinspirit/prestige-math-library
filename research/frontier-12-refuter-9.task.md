## refuter-9 — batch 2: composition series, solvable groups, free modules and exact sequences

You are **read-only**. You cannot write files. Alpha adjudicates every finding
from disk. Your job is evidence, not a verdict.

### Your assignment

| order | kind | page | items |
|---|---|---|---|
| 66 | A | `composition-series-and-solvable-groups` | 27 |
| 67 | B | `composition-series-and-solvable-groups-examples` | 10 |
| 104 | A | `free-modules-and-exact-sequences` | 29 |
| 105 | B | `free-modules-and-exact-sequences-examples` | 10 |

**76 items.** Every id below is a file at `items/<id>.md`. The batch's own
record is `research/frontier-12-batch-2.notes.md` and
`research/frontier-12-batch-2.proof-contracts.json`.

### Where the exposure is

Batch 2 is the only batch in the run without a dedicated refuter until now, so
this is its skeptical pass. Two classical error-prone areas.

**Composition series and solvable groups (order 66).**

- `thm-zassenhaus-butterfly-lemma`. The butterfly lemma is where subgroup
  bookkeeping goes wrong. Check that `V = A* n B` really is contained in
  `M = A* n B*` (needed for `X* = XM`), that both Dedekind modular-law
  applications have their containment hypothesis satisfied, and that the
  normality claims `X <| X*` and `Y <| Y*` are proved rather than asserted.
- `thm-schreier-refinement-theorem` and `thm-jordan-holder-theorem-for-groups`.
  Check the refinement construction indexes correctly (the doubly-indexed
  refinement is easy to misalign by one), that repeated terms are handled, and
  that Jordan-Holder's uniqueness is up to permutation **and** isomorphism.
  Check the existence claim `thm-every-finite-group-has-a-composition-series`
  handles the trivial group.
- The derived series and solvability: check
  `lem-homomorphisms-respect-commutators-and-derived-series`, and that
  solvability's equivalence with a terminating derived series is proved in both
  directions. Check `def-characteristic-subgroup` is actually used where
  normality of derived subgroups is claimed.
- Both central series (upper and lower) and nilpotence: check the indexing
  conventions agree between the two and that nilpotent implies solvable is
  proved, not assumed.

**Free modules and exact sequences (order 104).**

- `thm-splitting-lemma-for-modules`. This is a three-way equivalence (left
  splitting, right splitting, direct-sum decomposition). Check **every**
  direction is proved and that the isomorphism constructed in each is the one
  claimed. A common error is proving only two of the three implications.
- `thm-five-lemma-for-modules` and `lem-four-lemma-for-modules`. The four lemma
  carries the real diagram chase. Verify each chase step: element chosen,
  exactness invoked, commutativity invoked. Check the injective half uses `a`
  surjective (not `a` injective) and the surjective half uses `e` injective.
- `def-exact-and-short-exact-sequences-of-modules` and
  `lem-endpoints-in-a-short-exact-sequence`: check exactness at the endpoints
  gives injectivity/surjectivity in the direction claimed.
- `cex-nonsplit-short-exact-sequence-of-integers-mod-two` and
  `fs-every-short-exact-sequence-splits`: verify the witness
  (0 -> Z/2 -> Z/4 -> Z/2 -> 0 or similar) genuinely does not split, with the
  argument given.
- Free modules: check the universal property is stated with the right
  quantifiers, that basis-freeness is used where invoked, and whether any claim
  silently assumes the invariant basis number property or a commutative ring
  where the page has not established it.

### Item ids


**`composition-series-and-solvable-groups`**

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

**`composition-series-and-solvable-groups-examples`**

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

**`free-modules-and-exact-sequences`**

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

**`free-modules-and-exact-sequences-examples`**

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
