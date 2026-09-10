# Step 5 dependency reconciliation

2026-09-10 03:17 UTC: synchronized all completed Balogh metadata through
the83/94 author checkpoint, then10 of11 helper metadata/contract handoffs.
Shared contract check covers93/94, with only the absent coloring-to-AD item
and its consumer citation as errors, plus one stick-lemma citation-density
warning. Topology contract mapping errors were corrected by their author and
rechecked before remerge. The A page was created with the unchanged60-item
inventory and passes rendercheck. Frontier dependency refresh passes.
Helpers retain their exact edition/source-reading evidence in their two
handoff receipts; no independent mathematical acceptance is asserted.

2026-09-10 03:05 UTC: synchronized completed author checkpoints for
`def-balogh-finite-restriction-data`,
`lem-balogh-countable-restriction-enumeration`, and
`ex-kojman-shelah-scale-used-at-a-tail-supremum` into the plan. Dependency
sets match current authored frontmatter: the first two remove unused
scaffold suppliers; the example names the actual definition/cofinality/
regularity/recursion inputs instead of the unused assembly lemma. No proof
body, pair scope, publication state or review verdict changed.

2026-09-10 03:00 UTC: batch15's72/94 checkpoint completes the authored
`thm-kojman-shelah-zfc-dowker-space` contract. Synchronized its additional
published `def-countable-paracompactness-and-dowker-space` dependency into
the plan. The author's local checks passed; independent6B review is pending.

2026-09-10 02:56 UTC: reconciled 21 additional batch15 metadata records from
completed author checkpoints into the canonical plan. Dependency sets were
checked against authored frontmatter (order ignored). This is mechanical
handoff reconciliation, not an independent mathematical audit; batch15 is still
authoring, and its full6B review remains required. Separately synchronized the
explicit tail-product membership hypothesis and regularity supplier for
`lem-scale-tail-suprema-have-prescribed-cofinality` into plan/manifest/SET30.
No published content, item inventory, verification stamp or pair scope changed.

| Batch15 item | Current handoff |
|---|---|
| `thm-bpi-equivalent-to-arbitrary-language-compactness` | Direct dependencies: `lem-set-sized-parallel-henkinization-preserves-consistency`, `thm-bpi-equivalent-to-propositional-compactness`, `thm-set-language-first-order-soundness`, `thm-henkin-closed-term-truth-lemma`, `lem-consistent-sentence-decision`, `lem-hilbert-propositional-and-equality-rules`, `lem-derivation-finite-support-and-concatenation` |
| `thm-dowker-product-characterization` | Direct dependencies: `thm-countable-paracompactness-shrinking-criterion`, `def-product-topology`, `lem-normality-is-closed-hereditary`, `def-axiom-of-choice`, `lem-normality-via-shrinking`, `lem-locally-finite-unions-and-closures`, `thm-heine-borel-r`, `thm-of-archimedean` |
| `def-reduced-ordinal-products-and-scales` | Well-definedness: `lem-progressive-products-and-true-cofinality-transfers` |
| `lem-pcf-cofinality-ideals-and-cutoff-conventions` | Direct dependencies: `lem-progressive-products-and-true-cofinality-transfers`, `def-axiom-of-choice`, `thm-cofinality-basics`, `thm-regularity-of-the-alephs`, `thm-transfinite-recursion`, `lem-cardinal-arithmetic-basic-laws`, `cor-cardinal-absorption`, `thm-ultrafilter-characterisation` |
| `lem-club-continuity-produces-strongly-increasing-subsequences` | Direct dependencies: `def-strong-increase-and-bounding-projections-for-countable-products`, `lem-uncountable-club-guessing-at-a-double-successor`, `thm-small-intersections-of-clubs`, `thm-cofinality-basics`, `thm-transfinite-recursion`, `def-axiom-of-choice`, `thm-regularity-of-the-alephs` |
| `thm-pcf-ideal-directedness-and-ultrafilter-cofinality-cutoffs` | Direct dependencies: `lem-progressive-products-and-true-cofinality-transfers`, `lem-pcf-cofinality-ideals-and-cutoff-conventions`, `lem-directed-progressive-products-have-club-continuous-chains`, `lem-strong-increase-gives-bounding-projections`, `lem-bounding-projections-give-exact-upper-bounds`, `def-axiom-of-choice`, `thm-cofinality-basics`, `thm-regularity-of-the-alephs`, `thm-transfinite-recursion`, `lem-cardinal-arithmetic-basic-laws`, `cor-cardinal-absorption`, `thm-ultrafilter-characterisation` |
| `thm-progressive-pcf-has-a-maximum-and-continuous-cutoff-ideals` | Direct dependencies: `lem-progressive-products-and-true-cofinality-transfers`, `lem-pcf-cofinality-ideals-and-cutoff-conventions`, `thm-pcf-ideal-directedness-and-ultrafilter-cofinality-cutoffs`, `def-axiom-of-choice`, `thm-cofinality-basics`, `thm-regularity-of-the-alephs`, `thm-transfinite-recursion`, `lem-cardinal-arithmetic-basic-laws`, `cor-cardinal-absorption`, `thm-ultrafilter-lemma` |
| `thm-progressive-pcf-has-universally-cofinal-sequences` | Direct dependencies: `lem-progressive-products-and-true-cofinality-transfers`, `lem-pcf-cofinality-ideals-and-cutoff-conventions`, `thm-pcf-ideal-directedness-and-ultrafilter-cofinality-cutoffs`, `def-axiom-of-choice`, `thm-cofinality-basics`, `thm-regularity-of-the-alephs`, `thm-transfinite-recursion`, `lem-cardinal-arithmetic-basic-laws`, `cor-cardinal-absorption`, `thm-ultrafilter-characterisation` |
| `thm-pcf-generators-restrict-finitely-cover-and-carry-scales` | Direct dependencies: `lem-progressive-products-and-true-cofinality-transfers`, `lem-pcf-cofinality-ideals-and-cutoff-conventions`, `thm-pcf-ideal-directedness-and-ultrafilter-cofinality-cutoffs`, `thm-progressive-pcf-has-a-maximum-and-continuous-cutoff-ideals`, `thm-progressive-pcf-has-universally-cofinal-sequences`, `lem-universal-pcf-sequences-have-strong-increase-and-exact-bounds`, `thm-pcf-cofinality-ideals-have-single-generators`, `def-axiom-of-choice`, `thm-cofinality-basics`, `thm-regularity-of-the-alephs`, `thm-transfinite-recursion`, `lem-cardinal-arithmetic-basic-laws`, `cor-cardinal-absorption`, `thm-ultrafilter-lemma` |
| `def-rudin-ordinal-box-space` | Direct dependencies: `def-reduced-ordinal-products-and-scales`, `def-order-topology-on-an-ordinal`, `def-product-topology`, `def-axiom-of-choice`; Well-definedness: `lem-rudin-box-space-basic-neighborhoods-and-p-space` |
| `lem-rudin-box-space-basic-neighborhoods-and-p-space` | Direct dependencies: `def-rudin-ordinal-box-space`, `thm-cofinality-basics`, `def-axiom-of-choice`, `def-rudin-ambient-ordinal-box-space`, `def-order-topology-on-an-ordinal` |
| `lem-rudin-disjoint-box-refinement` | Direct dependencies: `def-rudin-ambient-ordinal-box-space`, `lem-rudin-box-space-basic-neighborhoods-and-p-space`, `thm-transfinite-recursion`, `thm-regularity-of-the-alephs`, `lem-ordinal-basics`, `def-axiom-of-choice`, `def-ordinal`, `thm-cofinality-basics` |
| `lem-rudin-bounded-cofinality-hull-transfer` | Provenance: statement/proof ai-altered |
| `lem-rudin-discrete-families-have-discrete-ambient-closures` | Direct dependencies: `lem-rudin-bounded-cofinality-hull-transfer`, `lem-rudin-box-space-basic-neighborhoods-and-p-space`, `def-axiom-of-choice`, `prop-cumulative-hierarchy-transitivity-and-growth`; Provenance: statement/proof ai-altered |
| `lem-rudin-internal-hull-tail-domination` | Direct dependencies: `def-rudin-ordinal-box-space`, `def-rudin-ambient-ordinal-box-space`, `lem-rudin-bounded-cofinality-hull-transfer`, `thm-regularity-of-the-alephs`, `def-axiom-of-choice`, `prop-cumulative-hierarchy-transitivity-and-growth` |
| `lem-rudin-neighborhoods-of-initial-top-slices-contain-tails` | Direct dependencies: `lem-rudin-internal-hull-tail-domination`, `lem-rudin-box-space-basic-neighborhoods-and-p-space`, `thm-regularity-of-the-alephs`, `thm-cofinality-basics`, `def-axiom-of-choice`, `prop-cumulative-hierarchy-transitivity-and-growth`; Provenance: statement/proof ai-altered |
| `thm-rudin-tail-neighborhood-obstruction` | Direct dependencies: `def-rudin-ordinal-box-space`, `lem-rudin-neighborhoods-of-initial-top-slices-contain-tails`, `thm-cofinality-basics`, `thm-regularity-of-the-alephs`, `def-axiom-of-choice`, `lem-ordinal-sum-as-an-order-type`, `cor-cardinal-absorption` |
| `lem-cofinal-aleph-product-cardinality` | Direct dependencies: `lem-cardinal-arithmetic-basic-laws`, `def-aleph-and-beth-hierarchies`, `def-axiom-of-choice` |
| `thm-rudin-dowker-space-and-cardinality` | Direct dependencies: `thm-rudin-box-space-is-collectionwise-normal`, `thm-rudin-tail-neighborhood-obstruction`, `thm-countable-paracompactness-shrinking-criterion`, `lem-cardinal-arithmetic-basic-laws`, `lem-cofinal-aleph-product-cardinality`, `thm-regularity-of-the-alephs`, `def-axiom-of-choice`, `def-countable-paracompactness-and-dowker-space`, `lem-ordinal-product-as-an-order-type`, `cor-cardinal-absorption`, `thm-cofinality-basics`, `def-rudin-ordinal-box-space` |
| `lem-kojman-shelah-subspace-is-closed` | Direct dependencies: `def-kojman-shelah-scale-subspace`, `lem-kojman-shelah-tail-supremum-closure`, `lem-rudin-box-space-basic-neighborhoods-and-p-space`, `def-axiom-of-choice`, `thm-cofinality-basics`, `thm-regularity-of-the-alephs`, `thm-transfinite-recursion` |
| `lem-kojman-shelah-subspace-is-cofinal-and-has-successor-size` | Direct dependencies: `def-kojman-shelah-scale-subspace`, `lem-scale-tail-suprema-have-prescribed-cofinality`, `thm-cofinality-basics`, `def-axiom-of-choice`, `thm-regularity-of-the-alephs`, `lem-cardinal-arithmetic-basic-laws`, `cor-cardinal-absorption`, `thm-transfinite-recursion` |

2026-09-09, 17:53 UTC. Completed author receipts for batches 1–14 and16
use Astra/medium. Root synchronized dependency arrays from those
completed manifests into `plan-spec.json`; no proof, scope or verification
was changed. Batch6's three authored statement clauses were also synchronized
as recorded below. This is not an independent
mathematical review. Other batches remain worker-owned and in progress.

| Batch | Added direct edges | Evidence |
|---|---|---|
| 1 | 15 edges across eight items: completion of measures; integer part and Archimedean reciprocal; countable subadditivity and integral linearity; complex Holder/Minkowski; exponential monotonicity; nonnegative integral order rules, real powers and logarithm; Archimedean property. | `phase-2-catchup-24-batch-1.pages.json`, `.notes.md`, `.proof-contracts.json` |
| 2 | None. | Batch 2 final receipt and manifest. |
| 3 | Fourteen additions for inverse tangent, null singleton measure, measure continuity, compactness, distance functions, subadditivity and power continuity; one unused law-construction edge removed from the CDF equivalence lemma, whose authored proof uses measure continuity directly. | Batch 3 final mathematical decisions and manifest. |
| 4 | Twenty-two additions for completeness/countability, null integrals, measurable limits, continuous measurability, logarithm, conditional-class algebra, finite probabilities, MCT and conditional variance. | Batch 4 final checkpoints and manifest. |
| 5 | Six edges: tensor kernel/cokernel lemma adds DC, recursion and free-projectivity; splitting adds the tensor-total-complex definition; both examples add the tensor kernel/cokernel lemma. | Batch 5 final shared-plan handoff and manifest. |
| 6 | Thirteen additions across eight items: page/differential definitions, limiting cycles/boundaries and the E0/E1 identifications. | Batch 6 final Alpha synchronization list and manifest. |
| 7 | Eleven edges across six items: coefficient Koszul-complex definition; length additivity; finite modules over Noetherian rings; degree-indexed multiplicity convention. | Batch 7 final shared-plan handoff and manifest. |
| 11 | None. Earlier draft-render flags are followed by the author's successful final scoped render check. | Batch 11 final receipt and manifest. |
| 8 | One intermediate-value edge for the arbitrary-subspace/cofibration counterexample. | Batch 8 final handoff and manifest. |
| 9 | Twelve additions across eleven items: exterior derivative and pullback, de Rham Mayer–Vietoris, tensor-product universal property/basis, and Newton–Leibniz for curve calculations. | Batch 9 final handoff and manifest. |
| 10 | One Brauer-pair-order edge for the maximal-pair theorem. | Batch 10 final handoff and manifest. |
| 12 | Three edges to successor-left addition, additive identity and discrete natural order. | Batch 12 checkpoint 3 and final manifest. |
| 13 | Three edges for positive-history reconstruction: base free bases, free-product normal form and Britton's lemma. | Batch 13 completed manifest and proof contracts. |
| 14 | Three edges for the actual non-inclusion collapse-chain example: countable elementary submodels/collapse, Hartogs and AC. | Batch 14 final handoff and manifest. |
| 16 | AD definition for the Baire-property theorem; dyadic coding/measure transfer and rational density for the AD+DC measurability theorem. Three edges, preserving the stated choice boundaries. | Batch 16 final manifest and contracts. |

All 107 additions use existing suppliers in the same batch or earlier pages;
no pair or frontier was added. Authored suppliers remain draft. The completed
authors report passing scoped checks; Step 5's whole-run gate and Step 6
adjudication remain pending. New supplier text does not close published
consumer debt. Existing ledger classifications and published proofs are
unchanged. Retain later item-specific dispositions over historical findings.

Batch6 additionally requested canonical synchronization of the associated-
graded definition's well-definedness backlink, seven generated-leaf provenance
records, and three authored clauses: filtration-lowering E1 differential,
existence-qualified mapping at infinity, and regular/coregular stabilization.
These were copied from its completed manifest, retaining its proof-review
obligations; no independent mathematical acceptance is asserted here.

Six Unicode-escape warnings in five completed draft files were resolved by
decoding the title escapes to their intended Unicode characters. Scoped
rendering passes for all five. No proof body changed. Global depcheck's
remaining published-unaudited van Kampen item is pre-existing A-P debt; its
metadata/proof remains untouched under the current workflow-only instruction.

Batch14's eleven-item source-reading qualification was addressed using the
already covered Moschovakis full text and bounded local proof comparison.
See `phase-2-catchup-24-step5-logic-source-reconciliation.md`. The retained
Avigad reference is not claimed freshly read. Independent review remains due.
