# Exact Step-8 repair envelope — 8-close, round 1

The JSON envelope below is the authority for this dispatch. It contains every failing gate from the battery,
complete relevant diagnostic records, exact current rejection tuples, and explicit run/published ownership.
The full_evidence file retains the original untruncated battery output and all ownership assignments.
Read its relevant sections if a diagnostic is ambiguous; do not infer absence from this scoped view.
Act only on `assigned_items` and `live_tuples`; do not substitute the latest event-log row.

```json
{
  "version": 1,
  "run": "frontier-31a",
  "stage": "8-close",
  "round": 1,
  "mode": "close",
  "group": "b",
  "full_evidence": "research/frontier-31a-8-close-repair-evidence-1-1b833b433a6c0ebbe749a69ebb079d43e7e81752b8295b5177ea847b52741790.json",
  "full_evidence_sha256": "1b833b433a6c0ebbe749a69ebb079d43e7e81752b8295b5177ea847b52741790",
  "failures": [
    {
      "id": "boundary-audit",
      "stage": "8-close",
      "why": "Every line above is a candidate for a human read, not a verdict.",
      "output": "boundary-audit: 5632 rows over 1 contract file(s); 4631 marked not_applicable\n\nTEMPLATE REUSE — 7 cluster(s) at or above 3 members.\nA rationale shared across many items is not a determination about any of them.\n\n  5 rows · axes: degenerate, iff-forward, iff-reverse, nonempty-choice, zero\n    \"Full-resolution calculation in 1.1; right exactness and H0 in 1.2; horseshoe kernel and converse in 2.1–3.1. Zero tensor functors are exact. DC and supplied res…\"\n    items: thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes\n\n  5 rows · axes: degenerate, iff-forward, iff-reverse, nonempty-choice, zero\n    \"Full-resolution forward argument in 1.1, natural Tor0 and cokernel calculation in 1.2, left-variable LES and converse in 2.1–3.1. Zero tensor functors are exact…\"\n    items: thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes\n\n  5 rows · axes: degenerate, empty, endpoints, iff-forward, iff-reverse\n    \"This explicit positive-integer finite-complex calculation has no additional empty branch.\"\n    items: ex-the-tensor-double-complex-in-low-degrees\n\n  3 rows · axes: endpoints, one, zero\n    \"All eight zero/positive degree patterns are checked in 1.2 and 2.1–2.3; the short-extension pullback/pushout case uses the short five lemma; degree-zero composi…\"\n    items: thm-yoneda-product-is-associative-and-unital\n\n  3 rows · axes: degenerate, nonempty-choice, zero\n    \"The finite elimination in 2.1–2.2 handles degree zero and zero complexes; step 4.1 uses DC for comparisons and explicit signed total homotopies for independence…\"\n    items: thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic\n\n  3 rows · axes: degenerate, nonempty-choice, zero\n    \"Step 1.1 licenses the projection using AC and projectivity; sigma(f)=[f q pi] in 2.1–3.1 is linear and a section, including G=0, C=0 and zero cycle/boundary gro…\"\n    items: thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally\n\n  3 rows · axes: degenerate, empty, zero\n    \"Step 5.1 includes empty sums and zero modules; the LES and free kernel computation remain valid.\"\n    items: lem-the-kunneth-tor-map\n\nCONTRADICTED DISPOSITIONS — none found by the three detectors.\n\nUPHELD BY REVIEW — 7 row(s) an Alpha read and kept, with reasons on the record:\nEvery line above is a candidate for a human read, not a verdict.\n",
      "named_ids": [
        "thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes",
        "thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes",
        "ex-the-tensor-double-complex-in-low-degrees",
        "thm-yoneda-product-is-associative-and-unital",
        "thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic",
        "thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally",
        "lem-the-kunneth-tor-map"
      ]
    }
  ],
  "mechanical_residue": "",
  "live_items": [
    {
      "id": "thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-tensor-double-complex-in-low-degrees",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-yoneda-product-is-associative-and-unital",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-the-kunneth-tor-map",
      "scope": "run",
      "owner": "b"
    }
  ],
  "assigned_items": [
    {
      "id": "thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-tensor-double-complex-in-low-degrees",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-yoneda-product-is-associative-and-unital",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-the-kunneth-tor-map",
      "scope": "run",
      "owner": "b"
    }
  ],
  "live_tuples": []
}
```

---

# Step 8 adjudication — group **b**, run `frontier-31a`

You are the group Alpha for batches **8**, **9**, **10**: 5 A/B pair(s), 10 page(s), 233 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-31a-alpha-b-step8-context.json` is what a group Alpha for this group wrote during step 7,
while the judges were still sweeping and no verdict existed. It records the
conventions your pages fix, which items the rest lean on, which published
dependencies were actually opened, and what already looked thin.

**Its `concerns` list is evidence, not decoration.** Each entry was found with
nobody suggesting where to look. A judge rejection landing at the same place is
two independent readings agreeing and should be very hard to call a
`false_positive`; a rejection landing nowhere near any of them is not thereby
wrong, but it is the case to read most carefully against the text.

It is notes, not authority. Where it and the item files disagree, the files win.

## Read scope, write scope

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-31a-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 8 | `ext-and-balanced-resolutions` | A | homological-algebra | 365.051 | `delta-functors-and-universality-examples` |
| 8 | `ext-and-balanced-resolutions-examples` | B | homological-algebra | 365.052 | `ext-and-balanced-resolutions` |
| 8 | `yoneda-extensions-and-homological-dimension` | A | homological-algebra | 365.053 | `ext-and-balanced-resolutions-examples` |
| 8 | `yoneda-extensions-and-homological-dimension-examples` | B | homological-algebra | 365.054 | `yoneda-extensions-and-homological-dimension` |
| 9 | `tor-flatness-and-global-dimension` | A | homological-algebra | 365.055 | `yoneda-extensions-and-homological-dimension-examples`, `flatness-and-faithful-flatness` |
| 9 | `tor-flatness-and-global-dimension-examples` | B | homological-algebra | 365.056 | `tor-flatness-and-global-dimension` |
| 9 | `universal-coefficients-and-kunneth-theorems` | A | homological-algebra | 365.057 | `tor-flatness-and-global-dimension-examples` |
| 9 | `universal-coefficients-and-kunneth-theorems-examples` | B | homological-algebra | 365.058 | `universal-coefficients-and-kunneth-theorems` |
| 10 | `group-cohomology-as-a-derived-functor` | A | homological-algebra | 365.059 | `universal-coefficients-and-kunneth-theorems-examples`, `the-group-algebra-and-representations` |
| 10 | `group-cohomology-as-a-derived-functor-examples` | B | homological-algebra | 365.06 | `group-cohomology-as-a-derived-functor` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `ext-and-balanced-resolutions` — Ext and Balanced Resolutions (35 item(s))

- `def-ext-via-an-injective-resolution-of-the-second-variable` · definition — Ext via an injective resolution of the second variable
- `def-ext-via-a-projective-resolution-of-the-first-variable` · definition — Ext via a projective resolution of the first variable
- `prop-ext-zero-is-hom-for-the-injective-construction` · proposition — The degree-zero injective construction of Ext is Hom
- `prop-ext-zero-is-hom-for-the-projective-construction` · proposition — The degree-zero projective construction of Ext is Hom
- `prop-injective-ext-is-contravariant-in-the-first-and-covariant-in-the-second-variable` · proposition — Injective-resolution Ext has the stated bifunctor variance
- `prop-projective-ext-is-contravariant-in-the-first-and-covariant-in-the-second-variable` · proposition — Projective-resolution Ext has the stated bifunctor variance
- `prop-positive-ext-vanishes-on-an-injective-second-variable` · proposition — Positive injective-resolution Ext vanishes on an injective second variable
- `prop-positive-ext-vanishes-on-a-projective-first-variable` · proposition — Positive projective-resolution Ext vanishes on a projective first variable
- `def-hom-double-complex-of-a-projective-and-an-injective-resolution` · definition — The Hom double complex of projective and injective resolutions
- `lem-the-two-hom-double-complex-differentials-commute-before-signing` · lemma — The two Hom double-complex differentials commute before signing
- `def-direct-sum-total-complex-on-finite-diagonals` · definition — The direct-sum total complex on finite diagonals
- `lem-acyclic-assembly-by-exact-columns` · lemma — Acyclic assembly by exact columns
- `lem-acyclic-assembly-by-exact-rows` · lemma — Acyclic assembly by exact rows
- `lem-hom-from-a-projective-object-makes-the-injective-resolution-columns-exact` · lemma — Hom from a projective makes injective-resolution columns exact
- `lem-hom-into-an-injective-object-makes-the-projective-resolution-rows-exact` · lemma — Hom into an injective makes projective-resolution rows exact
- `thm-projective-and-injective-constructions-of-ext-are-naturally-isomorphic` · theorem — Projective and injective constructions of Ext are naturally isomorphic
- `lem-the-ext-balance-isomorphism-is-independent-of-resolution-comparison-data` · lemma — The Ext balance isomorphism is independent of resolution comparison data
- `prop-the-ext-balance-isomorphism-is-natural-in-both-variables` · proposition — The Ext balance isomorphism is natural in both variables
- `prop-the-ext-balance-isomorphisms-satisfy-change-of-resolution-cocycle-laws` · proposition — Ext balance isomorphisms satisfy change-of-resolution cocycle laws
- `def-balanced-ext-bifunctor` · definition — The balanced Ext bifunctor
- `thm-long-exact-ext-sequence-in-the-second-variable` · theorem — The long exact Ext sequence in the second variable
- `thm-long-exact-ext-sequence-in-the-first-variable` · theorem — The long exact Ext sequence in the first variable
- `prop-the-two-ext-long-exact-sequences-agree-under-balance` · proposition — The two Ext long exact sequences agree under balance
- `thm-ext-dimension-shifting-in-the-first-variable` · theorem — Ext dimension shifting in the first variable
- `thm-ext-dimension-shifting-in-the-second-variable` · theorem — Ext dimension shifting in the second variable
- `cor-ext-can-be-computed-from-any-projective-resolution-of-the-first-variable` · corollary — Ext can be computed from any projective resolution of the first variable
- `cor-ext-can-be-computed-from-any-injective-resolution-of-the-second-variable` · corollary — Ext can be computed from any injective resolution of the second variable
- `prop-exact-functors-compatible-with-hom-transport-ext-under-the-stated-adjunction-hypotheses` · proposition — Exact functors compatible with Hom transport Ext under stated adjunction hypotheses
- `lem-ext-one-of-z-mod-n-by-z-is-z-mod-n` · lemma — Ext one of Z modulo n by Z is Z modulo n
- `fs-ext-is-defined-before-choosing-or-supplying-resolutions` · false-statement — FALSE: Ext is defined before choosing or supplying resolutions
- `fs-projective-ext-and-injective-ext-are-equal-by-definition` · false-statement — FALSE: projective and injective Ext are equal by definition
- `fs-ext-is-covariant-in-both-variables` · false-statement — FALSE: Ext is covariant in both variables
- `fs-positive-ext-vanishes-whenever-either-variable-is-injective` · false-statement — FALSE: positive Ext vanishes whenever either variable is injective
- `fs-a-double-complex-totalisation-is-unambiguous-with-infinite-diagonals` · false-statement — FALSE: double-complex totalisation is unambiguous with infinite diagonals
- `fs-balance-of-ext-requires-the-spectral-sequence-pages` · false-statement — FALSE: balance of Ext requires spectral-sequence pages

### `ext-and-balanced-resolutions-examples` — Ext and Balanced Resolutions — Examples (7 item(s))

- `ex-ext-zero-as-hom-in-both-constructions` · example — Ext zero as Hom in both constructions
- `ex-ext-from-a-two-term-projective-resolution` · example — Ext from a two-term projective resolution
- `ex-ext-of-a-cyclic-abelian-group-by-an-abelian-group` · example — Ext of a cyclic abelian group by an abelian group
- `ex-the-hom-double-complex-in-low-bidegrees` · example — The Hom double complex in low bidegrees
- `ex-an-ext-dimension-shift` · example — An Ext dimension shift
- `cex-positive-ext-does-not-vanish-for-an-injective-first-variable` · counterexample — Positive Ext need not vanish for an injective first variable
- `ex-naturality-of-the-balance-isomorphism` · example — Naturality of the balance isomorphism

### `yoneda-extensions-and-homological-dimension` — Yoneda Extensions and Homological Dimension (44 item(s))

- `def-extension-of-an-object-by-an-object-in-an-abelian-category` · definition — An extension of an object by an object in an abelian category
- `def-equivalence-of-extensions` · definition — Equivalence of extensions
- `prop-a-morphism-of-extensions-is-an-isomorphism` · proposition — A morphism of extensions is an isomorphism
- `prop-equivalence-of-extensions-is-an-equivalence-relation` · proposition — Equivalence of extensions is an equivalence relation
- `def-split-extension-class` · definition — The split extension class
- `def-pullback-and-pushout-of-an-extension` · definition — Pullback and pushout of an extension
- `lem-pullback-and-pushout-descend-to-extension-classes` · lemma — Pullback and pushout descend to extension classes
- `def-baer-sum-of-extension-classes` · definition — The Baer sum of extension classes
- `lem-baer-sum-of-short-exact-sequence-classes-is-independent-of-representatives` · lemma — The Baer sum is independent of representatives
- `thm-baer-sum-makes-extension-classes-an-abelian-group` · theorem — Baer sum makes extension classes an abelian group
- `prop-extension-classes-are-contravariant-in-the-quotient-and-covariant-in-the-subobject` · proposition — Extension classes are contravariant in the quotient and covariant in the subobject
- `def-class-of-an-extension-in-derived-ext-one` · definition — The derived Ext-one class of an extension
- `lem-equivalent-extensions-have-the-same-ext-class` · lemma — Equivalent extensions have the same Ext class
- `lem-every-ext-one-class-is-represented-by-an-extension` · lemma — Every Ext-one class is represented by an extension
- `lem-two-extensions-with-the-same-ext-class-are-equivalent` · lemma — Two extensions with the same Ext class are equivalent
- `thm-yoneda-ext-one-is-naturally-isomorphic-to-derived-ext-one` · theorem — Yoneda Ext one is naturally isomorphic to derived Ext one
- `cor-the-class-of-extensions-is-a-set-whenever-derived-ext-one-is-a-set` · corollary — Extension classes form a set whenever derived Ext one does
- `def-n-fold-yoneda-extension` · definition — An n-fold Yoneda extension
- `def-equivalence-of-n-fold-extensions` · definition — Equivalence of n-fold extensions
- `def-yoneda-splice-product` · definition — The Yoneda splice product
- `lem-yoneda-splicing-is-well-defined-on-equivalence-classes` · lemma — Yoneda splicing is well-defined on equivalence classes
- `thm-yoneda-product-is-associative-and-unital` · theorem — The Yoneda product is associative and unital
- `thm-higher-yoneda-ext-agrees-with-derived-ext` · theorem — Higher Yoneda Ext agrees with derived Ext
- `prop-the-yoneda-product-agrees-with-the-derived-ext-composition-product` · proposition — The Yoneda product agrees with derived Ext composition
- `def-graded-ext-algebra-of-an-object` · definition — The graded Ext algebra of an object
- `def-projective-dimension-of-an-object` · definition — Projective dimension of an object
- `def-injective-dimension-of-an-object` · definition — Injective dimension of an object
- `thm-projective-dimension-at-most-n-iff-the-nth-syzygy-is-projective` · theorem — Projective dimension at most n iff the nth syzygy is projective
- `thm-projective-dimension-at-most-n-iff-higher-ext-vanishes` · theorem — Projective dimension at most n iff higher Ext vanishes
- `thm-injective-dimension-at-most-n-iff-higher-ext-vanishes` · theorem — Injective dimension at most n iff higher Ext vanishes
- `cor-projective-dimension-is-the-largest-nondegenerate-ext-degree-when-finite` · corollary — Finite projective dimension is the largest nonzero Ext degree
- `def-left-and-right-global-dimension-of-a-ring` · definition — Left and right global dimension of a ring
- `def-global-dimension-of-an-abelian-category` · definition — Global dimension of an abelian category
- `thm-global-dimension-is-the-supremum-of-nondegenerate-ext-degrees` · theorem — Global dimension is the supremum of nonzero Ext degrees
- `prop-global-dimension-zero-characterises-semisimple-module-categories` · proposition — Global dimension zero characterises semisimple module categories
- `prop-hereditary-rings-have-global-dimension-at-most-one` · proposition — Hereditary rings have global dimension at most one
- `lem-subgroups-of-free-abelian-groups-are-free` · lemma — Subgroups of free abelian groups are free
- `thm-the-integers-have-global-dimension-one` · theorem — The integers have global dimension one
- `fs-an-extension-of-m-by-n-represents-ext-one-of-n-by-m` · false-statement — FALSE: an extension of M by N represents Ext one of N by M
- `fs-baer-sum-is-formed-by-taking-only-the-direct-sum-of-middle-objects` · false-statement — FALSE: Baer sum only takes the direct sum of middle objects
- `fs-equivalence-classes-of-extensions-automatically-form-a-set` · false-statement — FALSE: extension classes automatically form a set
- `fs-the-yoneda-product-is-graded-commutative-for-every-abelian-category` · false-statement — FALSE: the Yoneda product is graded commutative for every abelian category
- `fs-projective-dimension-is-the-length-of-any-projective-resolution` · false-statement — FALSE: projective dimension is the length of any projective resolution
- `fs-left-and-right-global-dimension-are-equal-by-definition` · false-statement — FALSE: left and right global dimensions are equal by definition

### `yoneda-extensions-and-homological-dimension-examples` — Yoneda Extensions and Homological Dimension — Examples (8 item(s))

- `ex-the-split-extension-as-the-zero-baer-class` · example — The split extension as the zero Baer class
- `ex-baer-sum-of-two-extensions-of-cyclic-groups` · example — Baer sum of two extensions of cyclic groups
- `ex-ext-one-of-z-mod-n-by-an-abelian-group-as-extension-classes` · example — Ext one of Z modulo n by an abelian group as extension classes
- `ex-splicing-two-short-exact-sequences` · example — Splicing two short exact sequences
- `ex-a-noncommutative-yoneda-product` · example — A noncommutative Yoneda product
- `ex-projective-dimension-of-a-cyclic-abelian-group` · example — Projective dimension of a cyclic abelian group
- `ex-global-dimension-of-a-field-and-of-the-integers` · example — Global dimension of a field and of the integers
- `cex-two-equivalent-higher-extensions-with-no-single-isomorphism-of-middle-terms` · counterexample — Equivalent higher extensions need not have one middle-term isomorphism

### `tor-flatness-and-global-dimension` — Tor Flatness and Global Dimension (41 item(s))

- `def-tensor-product-total-complex-of-chain-complexes` · definition — The tensor product of a right and a left chain complex is totalized on finite diagonals with the Koszul differential
- `lem-the-tensor-total-differential-is-well-defined-and-squares-to-zero` · lemma — The tensor-total differential is balanced, well defined, and squares to zero
- `def-tor-by-resolving-the-left-module` · definition — Tor from a projective resolution of the left module
- `def-tor-by-resolving-the-right-module` · definition — Tor from a projective resolution of the right module
- `prop-tor-zero-is-the-tensor-product-in-either-construction` · proposition — Degree-zero Tor is the tensor product in either construction
- `prop-each-tor-construction-is-covariant-in-both-variables` · proposition — Each resolution-defined Tor construction is covariant in both variables
- `prop-positive-tor-vanishes-when-the-resolved-variable-is-projective` · proposition — Positive Tor vanishes when the resolved variable is projective
- `def-tensor-double-complex-of-two-projective-resolutions` · definition — The first-quadrant tensor double complex of two projective resolutions
- `def-left-and-right-flat-modules-over-an-arbitrary-ring` · definition — Left and right flat modules over an arbitrary ring
- `lem-projective-modules-are-flat-over-an-arbitrary-ring` · lemma — Projective left and right modules are flat over an arbitrary ring
- `rem-projective-modules-are-flat-is-supplied-by-mod-three` · remark — The earlier flatness page is the commutative specialization; this page records the arbitrary-handed version used in balance
- `lem-the-rows-of-the-augmented-tensor-double-complex-are-exact` · lemma — The augmented rows of the tensor double complex are exact
- `lem-the-columns-of-the-augmented-tensor-double-complex-are-exact` · lemma — The augmented columns of the tensor double complex are exact
- `thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic` · theorem — The left and right projective constructions of Tor are naturally isomorphic
- `prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions` · proposition — The Tor balance isomorphism is natural and coherent under a change of resolutions
- `def-balanced-tor-bifunctor` · definition — The balanced Tor bifunctor
- `thm-long-exact-tor-sequence-in-the-left-module-variable` · theorem — The long exact Tor sequence in the left-module variable
- `thm-long-exact-tor-sequence-in-the-right-module-variable` · theorem — The long exact Tor sequence in the right-module variable
- `prop-tor-dimension-shifting` · proposition — Tor admits dimension shifting in either variable
- `thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes` · theorem — A left module is flat exactly when Tor one against every right module vanishes
- `thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes` · theorem — A right module is flat exactly when Tor one against every left module vanishes
- `cor-a-short-exact-sequence-stays-exact-after-tensoring-exactly-when-its-tor-boundary-obstruction-vanishes` · corollary — The Tor boundary is exactly the obstruction to left exactness after tensoring a fixed short exact sequence
- `thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion` · theorem — Tor one of a cyclic abelian group detects n-torsion
- `thm-tor-of-two-cyclic-abelian-groups` · theorem — Tor one of two cyclic abelian groups is cyclic of gcd order
- `thm-higher-tor-over-the-integers-vanishes` · theorem — Higher Tor over the integers vanishes
- `prop-torsion-free-abelian-groups-are-flat` · proposition — Torsion-free abelian groups are flat
- `thm-over-a-pid-flat-is-equivalent-to-torsion-free` · theorem — Over a principal ideal domain flatness is equivalent to torsion-freeness
- `thm-tor-symmetry-over-a-commutative-ring` · theorem — Tor is symmetric over a commutative ring
- `def-flat-dimension-of-a-module` · definition — The flat dimension of a module
- `thm-flat-dimension-at-most-n-iff-higher-tor-vanishes` · theorem — Flat dimension at most n is equivalent to the prescribed higher Tor vanishing
- `def-left-and-right-weak-global-dimension` · definition — Left and right weak global dimension
- `prop-weak-global-dimension-is-at-most-corresponding-global-dimension` · proposition — Weak global dimension is at most the corresponding global dimension
- `thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric` · theorem — Weak global dimension is Tor-detected and left-right symmetric
- `prop-semisimple-rings-have-vanishing-positive-tor-and-ext` · proposition — Semisimple rings have vanishing positive Tor and Ext
- `prop-the-integers-have-weak-and-global-dimension-one` · proposition — The integers have weak and global dimension one
- `fs-tor-takes-two-left-modules-over-an-arbitrary-ring` · false-statement — Tor does not take two left modules over an arbitrary ring without extra bimodule structure
- `fs-the-two-tor-constructions-are-equal-by-definition` · false-statement — The two resolution constructions of Tor are not equal by definition
- `fs-flat-modules-have-projective-dimension-zero` · false-statement — Flat modules need not have projective dimension zero
- `fs-tor-one-vanishes-only-when-one-module-is-projective` · false-statement — Vanishing Tor one does not require a projective factor
- `fs-tor-is-symmetric-over-every-noncommutative-ring` · false-statement — Tor is not symmetric as a typed expression over every noncommutative ring
- `fs-tor-one-of-r-mod-i-and-m-is-always-the-i-torsion-submodule-of-m` · false-statement — Tor one of R modulo I and M is not always the I-torsion submodule of M

### `tor-flatness-and-global-dimension-examples` — Tor Flatness and Global Dimension — Examples (8 item(s))

- `ex-tor-of-two-cyclic-groups-from-a-two-term-resolution` · example — Tor of two cyclic groups from a two-term resolution
- `ex-tor-detects-n-torsion` · example — Tor detects n-torsion
- `ex-a-flat-nonprojective-module` · example — A flat nonprojective module
- `ex-localization-is-flat-and-has-vanishing-positive-tor` · example — Localization is flat and has vanishing positive Tor
- `ex-the-tensor-double-complex-in-low-degrees` · example — The tensor double complex in low degrees
- `ex-tor-symmetry-over-a-commutative-ring` · example — Tor symmetry over a commutative ring
- `cex-a-noncommutative-handedness-error-in-tor` · counterexample — A noncommutative handedness error in Tor
- `ex-weak-dimension-and-global-dimension-for-a-field-and-the-integers` · example — Weak and global dimension for a field and the integers

### `universal-coefficients-and-kunneth-theorems` — Universal Coefficients and Kunneth Theorems (32 item(s))

- `def-cochain-complex-hom-from-a-chain-complex` · definition — The Hom cochain complex of a chain complex
- `lem-the-hom-cochain-differential-squares-to-zero` · lemma — The Hom cochain differential squares to zero
- `def-chain-complex-with-coefficients-by-tensoring` · definition — A chain complex with coefficients obtained by tensoring
- `lem-cycle-boundary-short-exact-sequences-for-a-free-complex-over-a-pid` · lemma — The cycle-boundary short exact sequences for a free complex over a PID
- `thm-submodules-of-free-modules-over-a-pid-are-free` · theorem — A submodule of an arbitrary-rank free module over a PID is free
- `lem-boundaries-and-cycles-in-a-free-complex-over-a-pid-are-free` · lemma — Boundaries and cycles in a free complex over a PID are free
- `lem-the-universal-coefficient-edge-map-for-homology-is-well-defined` · lemma — The homological universal-coefficient edge map is well defined
- `lem-the-universal-coefficient-tor-obstruction-map-for-homology` · lemma — The homological universal-coefficient Tor obstruction map
- `thm-universal-coefficient-theorem-for-homology-over-a-pid` · theorem — The universal coefficient theorem for homology over a PID
- `thm-the-homology-universal-coefficient-sequence-splits-nonnaturally` · theorem — The homology universal-coefficient sequence splits nonnaturally
- `cex-the-universal-coefficient-splitting-cannot-in-general-be-chosen-naturally` · counterexample — A universal-coefficient splitting cannot in general be chosen naturally
- `def-evaluation-map-from-cohomology-to-hom-of-homology` · definition — The evaluation map from cohomology to Hom of homology
- `lem-the-cohomology-universal-coefficient-extension-map` · lemma — The cohomological universal-coefficient extension map
- `thm-universal-coefficient-theorem-for-cohomology-over-a-pid` · theorem — The universal coefficient theorem for cohomology over a PID
- `thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally` · theorem — The cohomology universal-coefficient sequence splits nonnaturally
- `cor-cohomology-with-a-divisible-abelian-coefficient-group-is-hom-of-homology` · corollary — Cohomology with a divisible abelian coefficient group is Hom of homology
- `prop-modules-over-a-field-are-projective-flat-and-injective` · proposition — Modules over a field are projective, flat, and injective
- `cor-cohomology-over-a-field-is-dual-to-homology-for-finite-dimensional-complexes` · corollary — Cohomology over a field is dual to homology for finite-dimensional complexes
- `def-homology-cross-product-for-tensor-complexes` · definition — The homology cross product for tensor complexes
- `lem-the-kunneth-cross-product-map-is-well-defined-and-natural` · lemma — The Kunneth cross-product map is well defined and natural
- `lem-the-kunneth-tor-map` · lemma — The Kunneth Tor map
- `thm-kunneth-theorem-for-free-complexes-over-a-pid` · theorem — The Kunneth theorem for free complexes over a PID
- `thm-the-kunneth-sequence-splits-nonnaturally` · theorem — The Kunneth sequence splits nonnaturally
- `cor-kunneth-over-a-field` · corollary — Kunneth over a field
- `cor-kunneth-when-one-homology-family-is-flat` · corollary — Kunneth when one homology family is flat
- `prop-euler-characteristic-is-multiplicative-under-the-finite-kunneth-hypotheses` · proposition — Euler characteristic is multiplicative under the finite Kunneth hypotheses
- `prop-the-kunneth-cross-product-is-graded-commutative-under-the-twist-map` · proposition — The Kunneth cross product is graded commutative under the twist map
- `fs-the-universal-coefficient-theorem-always-gives-a-natural-direct-sum-decomposition` · false-statement — The universal coefficient theorem does not always give a natural direct-sum decomposition
- `fs-uct-for-homology-has-an-ext-term-and-uct-for-cohomology-a-tor-term` · false-statement — The homological and cohomological UCT correction terms are not reversed
- `fs-kunneth-over-a-pid-is-always-a-tensor-product-isomorphism` · false-statement — Kunneth over a PID is not always a tensor-product isomorphism
- `fs-freeness-of-chain-groups-can-be-dropped-from-the-classical-kunneth-statement` · false-statement — Freeness of chain groups cannot simply be dropped from the classical Kunneth statement
- `fs-the-kunneth-short-exact-sequence-has-a-canonical-splitting` · false-statement — The Kunneth short exact sequence has no generally canonical splitting

### `universal-coefficients-and-kunneth-theorems-examples` — Universal Coefficients and Kunneth Theorems — Examples (7 item(s))

- `ex-uct-homology-with-z-mod-m-coefficients` · example — Universal-coefficient homology with Z modulo m coefficients
- `ex-uct-cohomology-of-a-two-term-free-complex` · example — Universal-coefficient cohomology of a two-term free complex
- `ex-a-nonzero-tor-correction-in-universal-coefficients` · example — A nonzero Tor correction in universal coefficients
- `ex-kunneth-for-two-cyclic-two-term-complexes` · example — Kunneth for two cyclic two-term complexes
- `ex-kunneth-over-a-field` · example — Kunneth over a field
- `cex-a-nonnatural-choice-of-uct-splitting` · counterexample — A nonnatural choice of universal-coefficient splitting
- `ex-euler-characteristic-of-a-tensor-product-complex` · example — Euler characteristic of a tensor-product complex

### `group-cohomology-as-a-derived-functor` — Group Cohomology as a Derived Functor (42 item(s))

- `def-integral-group-ring-module-and-trivial-module-convention` · definition — Integral group-module and trivial-module convention
- `def-invariants-functor-of-a-group-module` · definition — The invariants functor of a group module
- `thm-invariants-are-hom-from-the-trivial-group-ring-module` · theorem — Invariants are Hom from the trivial group-ring module
- `prop-the-invariants-functor-is-left-exact` · proposition — The invariants functor is left exact
- `def-group-cohomology-as-a-derived-functor` · definition — Group cohomology as the right derived invariants functor
- `def-coinvariants-functor-of-a-group-module` · definition — The coinvariants functor of a group module
- `prop-the-coinvariants-functor-is-right-exact` · proposition — The coinvariants functor is right exact
- `def-group-homology-as-a-derived-functor` · definition — Group homology as the left derived coinvariants functor
- `prop-degree-zero-group-cohomology-and-homology-are-invariants-and-coinvariants` · proposition — Degree-zero group cohomology and homology are invariants and coinvariants
- `thm-long-exact-sequence-in-group-cohomology` · theorem — Long exact sequence in group cohomology
- `thm-long-exact-sequence-in-group-homology` · theorem — Long exact sequence in group homology
- `def-unnormalized-homogeneous-bar-resolution` · definition — Unnormalized homogeneous bar resolution
- `lem-the-bar-differential-is-group-equivariant-and-squares-to-zero` · lemma — The bar differential is group equivariant and squares to zero
- `def-bar-augmentation` · definition — Bar augmentation
- `lem-the-augmented-bar-complex-is-exact` · lemma — The augmented bar complex is exact
- `thm-the-bar-complex-is-a-free-resolution-of-the-trivial-module` · theorem — The bar complex is a free resolution of the trivial module
- `def-inhomogeneous-group-cochains` · definition — Inhomogeneous group cochains
- `lem-the-inhomogeneous-group-cochain-differential-squares-to-zero` · lemma — The inhomogeneous group-cochain differential squares to zero
- `thm-homogeneous-and-inhomogeneous-group-cochains-are-isomorphic-complexes` · theorem — Homogeneous and inhomogeneous group cochains are isomorphic complexes
- `thm-the-bar-cochain-complex-computes-derived-group-cohomology` · theorem — The bar cochain complex computes derived group cohomology
- `def-normalized-bar-resolution` · definition — Normalized bar resolution
- `lem-degenerate-bar-chains-form-a-contractible-subcomplex` · lemma — Degenerate bar chains form a contractible subcomplex
- `thm-normalized-and-unnormalized-bar-complexes-are-chain-homotopy-equivalent` · theorem — Normalized and unnormalized bar complexes are chain-homotopy equivalent
- `cor-normalized-cochains-compute-group-cohomology` · corollary — Normalized cochains compute group cohomology
- `def-restriction-induction-and-coinduction-for-group-modules` · definition — Restriction, induction, and coinduction for group modules
- `thm-induction-is-left-adjoint-and-coinduction-right-adjoint-to-restriction` · theorem — Induction is left adjoint and coinduction right adjoint to restriction
- `lem-the-group-ring-is-free-over-a-subgroup-ring` · lemma — The group ring is free over a subgroup ring
- `thm-shapiro-lemma-for-group-cohomology` · theorem — Shapiro lemma for group cohomology
- `thm-shapiro-lemma-for-group-homology` · theorem — Shapiro lemma for group homology
- `def-cohomological-dimension-of-a-group` · definition — Cohomological dimension of a group
- `thm-group-cohomological-dimension-is-detected-by-cohomology-vanishing` · theorem — Group cohomological dimension is detected by cohomology vanishing
- `def-restriction-and-corestriction-on-group-cohomology` · definition — Restriction and corestriction on group cohomology
- `lem-corestriction-is-independent-of-the-coset-representatives` · lemma — Corestriction is independent of the coset representatives
- `thm-restriction-corestriction-composite-is-multiplication-by-the-index` · theorem — Restriction--corestriction composite is multiplication by the index
- `lem-positive-group-cohomology-of-the-trivial-group-vanishes` · lemma — Positive group cohomology of the trivial group vanishes
- `prop-finite-groups-have-torsion-annihilation-in-positive-cohomology` · proposition — Finite groups have torsion annihilation in positive cohomology
- `thm-groups-of-finite-integral-cohomological-dimension-are-torsion-free` · theorem — Groups of finite integral cohomological dimension are torsion free
- `fs-group-cohomology-is-the-derived-functor-of-coinvariants` · false-statement — FALSE: group cohomology is the derived functor of coinvariants
- `fs-the-bar-contracting-homotopy-is-group-equivariant` · false-statement — FALSE: the bar contracting homotopy is group equivariant
- `fs-h-one-is-defined-here-as-crossed-homomorphisms-modulo-principal-ones` · false-statement — FALSE: H^1 is defined here as crossed homomorphisms modulo principal ones
- `fs-h-two-is-defined-here-as-equivalence-classes-of-group-extensions` · false-statement — FALSE: H^2 is defined here as equivalence classes of group extensions
- `fs-shapiro-lemma-needs-no-distinction-between-induction-and-coinduction` · false-statement — FALSE: Shapiro lemma needs no distinction between induction and coinduction

### `group-cohomology-as-a-derived-functor-examples` — Group Cohomology as a Derived Functor — Examples (9 item(s))

- `ex-group-cohomology-of-the-trivial-group` · example — Group cohomology of the trivial group
- `ex-degree-zero-invariants-and-coinvariants` · example — Degree-zero invariants and coinvariants
- `ex-the-first-three-bar-differentials` · example — The first three bar differentials
- `ex-normalizing-an-inhomogeneous-cochain` · example — Normalizing an inhomogeneous cochain
- `ex-a-periodic-resolution-for-a-finite-cyclic-group` · example — A periodic resolution for a finite cyclic group
- `ex-cohomology-of-a-finite-cyclic-group-from-the-periodic-resolution` · example — Cohomology of a finite cyclic group from the periodic resolution
- `ex-shapiro-lemma-for-the-trivial-subgroup` · example — Shapiro lemma for the trivial subgroup
- `cex-the-underlying-bar-contraction-is-not-equivariant` · counterexample — The underlying bar contraction is not equivariant
- `ex-cohomological-dimension-of-the-trivial-group-and-of-an-infinite-cyclic-group` · example — Cohomological dimension of the trivial and infinite cyclic groups

## Your seams

Another group's pages depend on yours:

- `schur-multipliers-and-universal-central-extensions` (group a) requires your `group-cohomology-as-a-derived-functor-examples`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-7 reader warnings

3 warning(s) a Step-7 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-eedd76f6e3fe0a8936542f98 · `def-evaluation-map-from-cohomology-to-hom-of-homology`** (from group b, would-be-fatal) — Its sole Definition says only that it introduces the standard construction under hypotheses stated below; it gives neither source, target, nor formula. The later cohomological UCT theorem invokes this evaluation map, so the definition is not a mathematical definition as written.
- **s8a-c05dbe583155ecd391aa8052 · `thm-the-integers-have-global-dimension-one`** (from group b, would-be-fatal) — The statement and Given omit the Axiom of Choice, but proof step 1.1 invokes lem-subgroups-of-free-abelian-groups-are-free, whose statement explicitly assumes Choice, to make a free presentation into a length-one projective resolution. The cited hypothesis is silently dropped.
- **s8a-de638321040ad5d9ffdb051f · `prop-modules-over-a-field-are-projective-flat-and-injective`** (from group b, would-be-fatal) — The statement says every module over a field is free, while the proof assumes a basis. Its direct dependency cor-every-vector-space-has-a-basis explicitly assumes the Axiom of Choice; neither the statement nor Given carries that assumption.

Append one owning-group disposition per warning to `research/frontier-31a-step8-alert-decisions.jsonl`.
A Step-7 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-8 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-31a-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — frozen integrity close, `frontier-31a`

The final judge boundary is closed. The generated repair envelope above is
authoritative: review only its exact `assigned_items` and `live_tuples`, with
their explicit run or published scope; use a focused check when supported.

Do not alter mathematical items, start a judge cycle, or change another group's
records. You may correct a contract or receipt only when it exactly describes
the current item and cannot conceal a defect. A mathematical correction is a
blocker for the supervising session.

Return the gate, ids, non-item records changed, focused checks, and blockers.
