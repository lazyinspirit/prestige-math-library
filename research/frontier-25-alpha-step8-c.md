# frontier-25 — Step 8 group c

## Summary

Adjudicated all 56 exact rejections for batches 6, 7, and 8: 24
`confirmed_fatal`, 32 `confirmed_nonfatal`, and 0 `false_positive`. Only the 24
fatal items were edited. There were no incoming alerts, outgoing cross-group
findings, published-item repairs, or web-source consultations.

The exact `(id, model, context_sha256, item_sha256)` records are appended to
`research/frontier-25-judge-adjudications.jsonl`. The tables below record every
rejection and its disposition.

## Confirmed fatal repairs

| item | outcome | repair |
|---|---|---|
| `def-chain-homotopy` | `confirmed_fatal` | Bound the source and target complexes to an abelian category before using sums and differences. |
| `def-lax-strong-and-strict-monoidal-functor` | `confirmed_fatal` | Replaced the ill-typed claim that a component is a natural isomorphism by the correct componentwise-isomorphism condition on the natural transformation. |
| `def-monoidal-equivalence` | `confirmed_fatal` | Specified the composite strong structures on `GF` and `FG` and the strict structures on identity functors. |
| `def-null-homotopic-chain-map` | `confirmed_fatal` | Added the abelian ambient-category hypothesis required for zero maps and addition. |
| `def-rooted-stable-tooth-comb` | `confirmed_fatal` | Required the root to be disjoint from all teeth and blocks before applying the complete/anticomplete predicates. |
| `def-the-reverse-and-the-opposite-of-a-monoidal-category` | `confirmed_fatal` | Defined both tensors on morphisms, completing the required bifunctors. |
| `ex-a-lax-monoidal-functor-that-is-not-strong` | `confirmed_fatal` | Defined the covariant direct-image action on functions and verified naturality of the binary structure map. |
| `ex-homotopy-classes-as-h-zero-of-a-hom-complex` | `confirmed_fatal` | Replaced the unbound `K(A)` by the ambient category `K(Ab)`. |
| `ex-shifting-a-three-term-complex-with-all-signs` | `confirmed_fatal` | Stopped calling the displayed zero differential nonzero. |
| `ex-the-free-monoid-monad-as-a-monoid-object` | `confirmed_fatal` | Replaced the false literal-word description by explicit conjugation formulas for the transported functor, unit, and multiplication. |
| `fs-a-monoid-object-in-the-endofunctor-category-is-the-definition-of-a-monad` | `confirmed_fatal` | Added the identity monad on large `Set` as the counterexample and cited the direct monad definition and size restriction. |
| `fs-a-monoidal-functor-is-one-whose-structure-maps-are-isomorphisms` | `confirmed_fatal` | Narrowed the false claim and title to lax monoidal functors, avoiding the source-dependent bare phrase. |
| `fs-the-shift-of-a-complex-keeps-the-same-differential-with-no-sign` | `confirmed_fatal` | Replaced the invalid homotopy-sign argument by a direct computation of the adopted shifted differential. |
| `fs-the-unit-constraints-must-be-imposed-as-axioms` | `confirmed_fatal` | Narrowed the claim to the three derived unitor identities rather than denying that unitors are structure data. |
| `lem-chain-homotopy-is-compatible-with-addition-and-composition` | `confirmed_fatal` | Added an abelian ambient category and bound every complex to it. |
| `prop-chain-homotopy-is-an-equivalence-relation` | `confirmed_fatal` | Added the abelian ambient-category hypothesis needed for zero, negatives, and sums. |
| `prop-null-homotopic-maps-form-a-two-sided-additive-ideal` | `confirmed_fatal` | Added the abelian ambient-category hypothesis and the resulting additivity of the complex category. |
| `prop-zero-homology-does-not-make-an-object-zero-in-the-homotopy-category` | `confirmed_fatal` | Bound `A` and the complex `C` in the statement and facts. |
| `rem-unbracketed-tensor-strings-are-not-yet-defined` | `confirmed_fatal` | Restricted the warning to three or more tensor factors and acknowledged the defined binary tensor. |
| `thm-a-bounded-above-acyclic-complex-of-injective-objects-is-contractible-when-its-cycle-monomorphisms-split` | `confirmed_fatal` | Corrected the false explanatory fact: injectivity of the terms alone does not provide the assumed cycle retractions. |
| `thm-a-bounded-below-acyclic-complex-of-projective-objects-is-contractible-when-its-cycle-epimorphisms-split` | `confirmed_fatal` | Corrected the dual false fact: projectivity of the terms alone does not provide the assumed cycle sections. |
| `thm-monoid-objects-in-a-cartesian-monoidal-category-are-monoids-in-the-ordinary-sense` | `confirmed_fatal` | Narrowed the title and conclusion to internal monoids in a cartesian category and ordinary monoids in `Set`. |
| `thm-monoidal-functors-compose-and-laxness-is-preserved` | `confirmed_fatal` | Replaced the ambiguous bare phrase in the title by “lax monoidal functors” and stated preservation of strength and strictness. |
| `thm-shift-is-an-additive-autoequivalence-of-the-complex-and-homotopy-categories` | `confirmed_fatal` | Added the missing abelian ambient-category hypothesis to the statement, given data, and additivity fact. |

## Confirmed nonfatal rejections

Each row below concerns a correct mathematical claim whose objection is an
immediately closable citation, tag, elementary derivation, or local proof gap.
Under the fatal-only rule these rows close without a content, contract, impact,
or verification change.

| item | outcome | disposition |
|---|---|---|
| `cex-a-comb-can-have-an-edge-between-two-blocks` | `confirmed_nonfatal` | The concrete singleton-block witness checks the omitted comb conditions directly. |
| `cex-a-quasi-isomorphism-with-no-homotopy-inverse` | `confirmed_nonfatal` | Homotopy equivalence to zero is immediately equivalent to contractibility. |
| `cex-an-acyclic-noncontractible-complex-from-a-nonsplit-extension` | `confirmed_nonfatal` | The degree-zero null-homotopy equation immediately supplies the prohibited section. |
| `def-shift-of-a-chain-map-and-chain-homotopy` | `confirmed_nonfatal` | Both well-definedness equations follow by direct substitution from the displayed definitions. |
| `ex-a-split-exact-complex-and-its-contraction` | `confirmed_nonfatal` | The three displayed identities are exactly the componentwise contraction equation. |
| `ex-the-five-bracketings-of-a-four-fold-product` | `confirmed_nonfatal` | The pentagon route identification is immediate from the page's displayed pentagon. |
| `fs-every-acyclic-complex-is-contractible` | `confirmed_nonfatal` | The missing degree-zero null-homotopy bridge is immediate. |
| `fs-every-quasi-isomorphism-is-a-chain-homotopy-equivalence` | `confirmed_nonfatal` | A homotopy inverse of the zero map would immediately contract the source. |
| `fs-the-homotopy-category-is-obtained-by-identifying-quasi-isomorphisms-with-identities` | `confirmed_nonfatal` | Acyclicity gives zero homology directly from the definitions. |
| `lem-a-bipartite-layer-is-small-unless-a-large-comb-already-appears` | `confirmed_nonfatal` | The proof separately establishes block width, disjointness, and tooth-block incidence. |
| `lem-a-degreewise-split-exact-complex-with-compatible-splittings-is-contractible` | `confirmed_nonfatal` | The displayed equation is the null-homotopy equation for the identity. |
| `lem-a-rooted-stable-tooth-comb-with-a-cross-edge-between-two-blocks-contains-a-five-cycle` | `confirmed_nonfatal` | Distinctness follows immediately from the cited rooted-comb definition. |
| `lem-the-shifted-differential-squares-to-zero` | `confirmed_nonfatal` | The omitted tag is the defining chain-complex equation from the given hypothesis. |
| `prop-a-chain-isomorphism-is-a-chain-homotopy-equivalence` | `confirmed_nonfatal` | Equality implies homotopy through the zero degree-one family. |
| `prop-homology-of-a-shift-is-shifted-homology` | `confirmed_nonfatal` | Naturality follows immediately from the degreewise identity on cycles and boundaries. |
| `prop-homotopy-equivalence-is-an-equivalence-relation-on-complexes` | `confirmed_nonfatal` | Transitivity of chain homotopy is already proved earlier on the page. |
| `prop-shift-preserves-chain-homotopy-equivalences-contractibility-and-quasi-isomorphisms` | `confirmed_nonfatal` | The cited natural homology-shift isomorphism supplies the used identification. |
| `prop-the-canonical-functor-from-complexes-to-the-homotopy-category-is-additive` | `confirmed_nonfatal` | The omitted fact tag is already listed and states that the source complex category is additive. |
| `thm-a-bipartite-graph-with-bounded-a-degree-has-a-large-comb-or-a-small-b-side` | `confirmed_nonfatal` | The phrase “layer hypotheses” abbreviates the immediately preceding construction, which verifies them explicitly. |
| `thm-a-category-with-finite-products-is-monoidal` | `confirmed_nonfatal` | The triangle's product domain is a local typo in an otherwise immediate projection-uniqueness check. |
| `thm-a-chain-homotopy-equivalence-is-a-quasi-isomorphism` | `confirmed_nonfatal` | Functoriality of homology is already listed as `[L3]`; the defect is only an omitted tag. |
| `thm-a-lax-monoidal-functor-carries-monoid-objects-to-monoid-objects` | `confirmed_nonfatal` | Naturality is part of the cited lax-monoidal definition and closes the pasted diagram. |
| `thm-a-monoid-object-in-the-endofunctor-category-is-exactly-a-monad` | `confirmed_nonfatal` | The monoid-object definition is an earlier same-page item and the comparison is componentwise. |
| `thm-a-poset-with-finite-meets-is-a-strict-monoidal-category` | `confirmed_nonfatal` | Monotonicity and associativity of meets follow immediately from their universal property. |
| `thm-a-tau-critical-graph-with-a-large-low-degree-induced-subgraph-has-a-rooted-stable-tooth-comb` | `confirmed_nonfatal` | Restricting the strict inequality to nonempty `A_i` and noting zero indices contribute zero closes the line. |
| `thm-c-five-free-graphs-satisfy-a-polynomial-kappa-bound` | `confirmed_nonfatal` | Applying the sparse-subgraph corollary with half the later epsilon fixes the parameter normalization immediately. |
| `thm-hom-in-the-homotopy-category-is-zero-degree-homology-of-the-hom-complex` | `confirmed_nonfatal` | Naturality is the canonical quotient identification under pre- and postcomposition. |
| `thm-modules-over-a-commutative-ring-form-a-monoidal-category` | `confirmed_nonfatal` | Coherence of the canonical pure-tensor associator and unitors is a routine direct check. |
| `thm-the-category-of-abelian-groups-is-monoidal-under-the-tensor-product` | `confirmed_nonfatal` | Tensor functoriality is a declared dependency and supplies the omitted bifunctor bridge. |
| `thm-the-endofunctor-category-of-a-small-category-is-strict-monoidal-under-composition` | `confirmed_nonfatal` | Whiskering functoriality follows immediately componentwise from functor composition. |
| `thm-the-endomorphisms-of-the-unit-form-a-commutative-monoid` | `confirmed_nonfatal` | Naturality is part of the cited monoidal-category definition; `[L1]` merely abbreviated it. |
| `thm-the-homotopy-category-is-additive` | `confirmed_nonfatal` | Degreewise biproducts already follow from the additive-category theorem used in `[L3]`; the over-narrow `[L4]` is unnecessary. |

## Alerts and sources

No incoming alert existed, and the adjudications exposed no defect in another
group or in published content. No web search was needed: every disputed point
was resolved from the current item text and the exact cited library items
already opened in the Step-7 context.

## Rejudge targets

`def-chain-homotopy`, `def-lax-strong-and-strict-monoidal-functor`,
`def-monoidal-equivalence`, `def-null-homotopic-chain-map`,
`def-rooted-stable-tooth-comb`,
`def-the-reverse-and-the-opposite-of-a-monoidal-category`,
`ex-a-lax-monoidal-functor-that-is-not-strong`,
`ex-homotopy-classes-as-h-zero-of-a-hom-complex`,
`ex-shifting-a-three-term-complex-with-all-signs`,
`ex-the-free-monoid-monad-as-a-monoid-object`,
`fs-a-monoid-object-in-the-endofunctor-category-is-the-definition-of-a-monad`,
`fs-a-monoidal-functor-is-one-whose-structure-maps-are-isomorphisms`,
`fs-the-shift-of-a-complex-keeps-the-same-differential-with-no-sign`,
`fs-the-unit-constraints-must-be-imposed-as-axioms`,
`lem-chain-homotopy-is-compatible-with-addition-and-composition`,
`prop-chain-homotopy-is-an-equivalence-relation`,
`prop-null-homotopic-maps-form-a-two-sided-additive-ideal`,
`prop-zero-homology-does-not-make-an-object-zero-in-the-homotopy-category`,
`rem-unbracketed-tensor-strings-are-not-yet-defined`,
`thm-a-bounded-above-acyclic-complex-of-injective-objects-is-contractible-when-its-cycle-monomorphisms-split`,
`thm-a-bounded-below-acyclic-complex-of-projective-objects-is-contractible-when-its-cycle-epimorphisms-split`,
`thm-monoid-objects-in-a-cartesian-monoidal-category-are-monoids-in-the-ordinary-sense`,
`thm-monoidal-functors-compose-and-laxness-is-preserved`, and
`thm-shift-is-an-additive-autoequivalence-of-the-complex-and-homotopy-categories`.

## Changed artifacts

- Repaired 24 owned item files; no page file or item id changed.
- Appended all 56 exact-hash outcomes to
  `research/frontier-25-judge-adjudications.jsonl`.
- Appended 24 exact-linked rows to `research/defect-ledger.jsonl` through
  `tools/defect-ledger.mjs append`; the assembly file is
  `research/frontier-25-alpha-c-step8-ledger-rows.json`, and the generated view
  was refreshed.

## Checks

- Targeted precheck: all 17 repaired proof-bearing items pass after adopting
  the stored phase format; the other repaired items are definitions or a
  free-form remark.
- Targeted render check: all 24 repaired files pass YAML, delimiter, and KaTeX
  validation.
- Dependency check exits successfully; it reports only existing advisory
  warnings.
- Step-8 guard: all 86 concurrent working-tree item changes are licensed by
  exact `confirmed_fatal` adjudications or terminal resolutions.
- Step-8 scope check: four groups, 381 items, zero open rejection, and zero
  unresolved cross-group alert.
- Frontier-25 defect-ledger row validation: 164 rows checked with zero schema
  errors.
- Whole-run defect-ledger linkage is not yet green: 68 fatal rows owned by
  other groups currently lack matching ledger rows. No reported linkage error
  names a group-c item.

## Blockers

None within group c. The engine owns targeted rejudgment of the 24 repaired
items. Whole-run defect-ledger linkage awaits the other groups' append
operations.

## Step-8 preflight repair-integrity round 1

### Assigned gate residue

- `proof-contract`: repaired the group-c citation quotes and derivation maps
  made stale by the licensed Step-8 item edits.
- `citation-fidelity`: the same documentary regeneration removed every
  group-c missing-quote candidate; the detector now reports no widening
  candidate in batches 6, 7, or 8.
- `risk-report`: no group-c review was missing. The existing complete reviews
  were preserved by regeneration and all three owned batch checks pass with
  `--require-reviewed`.
- `rendercheck`: its sole named item belongs to group a, so this dispatch made
  no change for that failure.
- `defect-ledger`: the reported stale open row belongs to group d, so this
  dispatch made no ledger change.

### Documentary ids regenerated

Batch 6:
`thm-monoidal-functors-compose-and-laxness-is-preserved`,
`thm-a-lax-monoidal-functor-carries-monoid-objects-to-monoid-objects`,
`fs-a-monoidal-functor-is-one-whose-structure-maps-are-isomorphisms`,
`fs-an-unbracketed-tensor-product-of-three-objects-is-well-defined-in-any-monoidal-category`,
`fs-a-monoid-object-in-the-endofunctor-category-is-the-definition-of-a-monad`,
and `ex-a-lax-monoidal-functor-that-is-not-strong`.

Batch 7:
`prop-chain-homotopy-is-an-equivalence-relation`,
`lem-chain-homotopy-is-compatible-with-addition-and-composition`,
`prop-null-homotopic-maps-form-a-two-sided-additive-ideal`,
`thm-chain-homotopic-maps-induce-the-same-map-on-homology`,
`lem-composition-of-homotopy-classes-is-well-defined`,
`thm-the-homotopy-category-is-additive`,
`prop-homotopy-equivalence-is-an-equivalence-relation-on-complexes`,
`fs-chain-homotopic-maps-are-equal-as-chain-maps`,
`fs-every-acyclic-complex-is-contractible`,
`fs-every-quasi-isomorphism-is-a-chain-homotopy-equivalence`,
`fs-the-shift-of-a-complex-keeps-the-same-differential-with-no-sign`,
`ex-a-contracting-homotopy-for-the-two-term-identity-complex`,
`ex-two-homotopic-maps-with-different-components`, and
`cex-an-acyclic-noncontractible-complex-from-a-nonsplit-extension`.

Batch 8:
`thm-a-tau-critical-graph-with-a-large-low-degree-induced-subgraph-has-a-rooted-stable-tooth-comb`,
`lem-a-rooted-stable-tooth-comb-with-a-cross-edge-between-two-blocks-contains-a-five-cycle`,
and `ex-a-rooted-stable-tooth-comb-with-two-teeth`.

### Licensing evidence

`live_tuples` is empty, and no item text was edited in this dispatch. The
documentary drift was caused by the already-licensed repairs recorded above,
principally the exact fatal rows for `def-lax-strong-and-strict-monoidal-functor`
(`fc72d371c22da8a30f66a7452ae73374586ac4a1d5b9334af4f178ff2a86a500`),
`def-chain-homotopy`
(`588330a9b44d8d453c2c11b44c9b4002c8b2760b31419f1f54d6719bf82684bc`),
`lem-chain-homotopy-is-compatible-with-addition-and-composition`
(`6494a31a158203c85ad87fa144450beee7bfc918c9fdc3a2544142561fdb2f0d`),
`prop-null-homotopic-maps-form-a-two-sided-additive-ideal`
(`46a7dd6e88caba4275453b01f874c4c63b3e37c56f51500013573170edab8018`),
`prop-zero-homology-does-not-make-an-object-zero-in-the-homotopy-category`
(`82267532fe1f11eebb2bcf9ea9d43732ce39817d8833dec1e55982f09def8b27`),
`rem-unbracketed-tensor-strings-are-not-yet-defined`
(`b654452a5b80731abf93baee9a7a3d621a685e1ebb66203592bd4469c6a03a07`),
`fs-a-monoid-object-in-the-endofunctor-category-is-the-definition-of-a-monad`
(`8d08359c36f6a9a414abf7ad9f210a6c4b170402f1317d67f23761c5e47d0603`),
`fs-the-shift-of-a-complex-keeps-the-same-differential-with-no-sign`
(`61d35c833100e45c8f57023a68b545170ab825e4df5f484c72b06eb2c971416a`),
and `def-rooted-stable-tooth-comb`
(`74f849189c9e0d1b843d1f107ca3ca789aa69c1f15a33de2ad8ebd09097241ce`).

### Changed files

- `research/frontier-25-batch-6.proof-contracts.json`
- `research/frontier-25-batch-7.proof-contracts.json`
- `research/frontier-25-batch-8.proof-contracts.json`
- `research/frontier-25-proof-contracts.json`, mechanically re-merged from all
  eleven current batch contracts
- this group report

No item, page, adjudication, impact, verification, or append-only ledger was
changed in this preflight dispatch.

### Targeted checks

- Batch-6 proof contract: 32/32 checked, 0 errors, 0 warnings.
- Batch-7 proof contract: 37/37 checked, 0 errors, 0 warnings.
- Batch-8 proof contract: 12/12 checked, 0 errors, 0 warnings.
- Citation fidelity over all three owned contracts: 209 citations, no missing
  quote, no widening candidate.
- Risk report with required reviews: 32, 37, and 12 items routed respectively,
  with 0 errors in every batch.
- Step-8 scope check: 4 groups and 381 items scoped, with zero open rejection
  and zero unresolved cross-group alert.

### Blocker

The run-wide Step-8 guard is not green: 109 of 111 current item changes are
licensed, but group-d items `def-deterministic-pda` and
`lem-dpdas-have-unique-computations` are currently unlicensed. The latter has a
`confirmed_nonfatal` disposition, so its content edit is specifically forbidden
by the fatal-only rule. Neither item is owned by group c; this dispatch did not
alter or disposition either one.
