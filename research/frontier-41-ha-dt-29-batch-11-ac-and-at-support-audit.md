# Batch 11 AC and Algebraic Topology support audit

Initial read-only audit of the current F41 batch-11 scaffold, its owner-held
Step-1 records, and the order-548.5/548.6 AT support pair. The owner then
authorized a separate AC statement repair, recorded below. No receipt or run
state was changed.

## Findings

- The rational spanning proposition explicitly says **Assume AC** and directly
  depends on `def-axiom-of-choice`. Its step 5 uses full AC in the algebraic
  duality argument: if the rational homology vector space had an infinite
  basis, AC gives the corresponding independent coordinate functionals, so
  its dual could not be finite-dimensional. The theorem
  `thm-rational-oriented-bordism-is-detected-by-pontryagin-numbers` also
  explicitly assumes AC and directly depends on the axiom. Full AC is stronger
  than and covers the AC\u03c9 assumptions inherited from the cited smooth normal
  data/classifying-map suppliers. The current proof does not establish these
  claims under AC\u03c9 alone.
- The AT pair contains 55 A-items and 4 B-items; all 59 current Step-1 records
  are ready. Its rational Hurewicz theorem, rationalization lemma, and shared
  Thom-prespectrum definition explicitly assume AC and locally supply the
  previously missing rational branch. The batch-11 rational-spanning proof
  consumes these suppliers at lower page order. Thus the former external
  prerequisite/proof gap is closed at scaffold readiness; final workflow
  authoring and supplier re-reads remain.
- The repaired batch-11 Thom/Stiefel--Whitney detection strategy now consumes
  the AT stable Thom-cohomology, finite-detector, and stable-detector chain; its
  Step-1 record says the full local chain has been reviewed. Its strategy and
  dependencies recorded AC, but its Statement initially omitted that premise;
  the owner-directed follow-up below now states it explicitly. Its AT-dependent
  cross-batch rows remain `open` pending final supplier authoring and re-read.
- There is a separate statement-contract issue in the Thom-detection AT
  ancestry. The twelve items listed in batch-30 notes \u00a7 5 item 4 have direct
  `def-axiom-of-choice` dependencies and identify AC use in their strategies,
  but their Statements omit the AC premise. All twelve are in the dependency
  closure of the batch-11 Thom-detection theorem; none is in the rational
  spanning proposition's AT dependency closure. This does not leave a missing
  mathematical supplier proof, but the twelve standalone supplier claims
  overstate what their recorded proofs establish unless the library accepts
  an inherited-AC convention. The least destructive repair is to state the
  existing AC contract on those twelve cards, then refresh affected batch-30
  evidence in dependency order. No weakening to AC\u03c9 has been proved.

The twelve affected items are `lem-mod-two-eilenberg-maclane-base-and-path-loop-inputs`,
`lem-infinite-real-projective-space-is-a-marked-mod-two-eilenberg-maclane-space`,
`lem-admissible-square-action-has-a-distinct-leading-monomial`,
`lem-fundamental-path-fibration-class-has-the-normalized-relative-lift`,
`lem-relative-lifts-produce-cohomological-transgressions`,
`thm-borel-polynomial-base-from-a-transgressive-simple-fiber-system`,
`lem-universal-mod-two-class-detects-admissible-composites-in-the-strict-range`,
`lem-external-evaluation-detects-tensor-square-operations`,
`prop-serre-polynomial-cohomology-of-mod-two-eilenberg-maclane-spaces`,
`thm-admissible-square-algebra-is-a-connected-bialgebra`,
`lem-metastable-cohomology-of-eilenberg-maclane-spaces`, and
`thm-stable-unoriented-thom-cohomology-is-free-over-the-square-algebra`.

## Receipt state and minimal order

The read-only `step1Decision` check finds exactly three stale owner-held
batch-11 records: `thm-thom-stiefel-whitney-number-detection-of-unoriented-bordism`,
`prop-products-of-complex-projective-spaces-span-rational-oriented-bordism`,
and `thm-rational-oriented-bordism-is-detected-by-pontryagin-numbers`.
The other 18 batch-11 item records are current. The three are marked `ready`
but are not closed because their hashes no longer match current item/dependency
inputs; their stored timestamps are 2026-10-04. The rational proposition's
current dependency list explicitly includes AC and the AT support suppliers.

Minimal dependency-ordered work:

1. Resolve the twelve AC statement contracts in the AT Thom-detection
   ancestry (if enforcing explicit hypotheses), then refresh only affected
   AT receipts after their content is stable.
2. Re-read the final AT supplier items and refresh the three owner-held
   batch-11 Step-1 records; the rational independent-projective-products and
   triangularity suppliers are already current.
3. Reconcile the open cross-batch supplier rows after final authoring and
   supplier certification. Do not treat Step-1 readiness as final proof
   approval.

Checks used: current manifest/receipt inspection and the read-only
`step1Decision` helper from `tools/step1-decisions.mjs`; the latter found
59/59 AT receipts current and 18/21 batch-11 receipts current. The conclusions
above describe scaffold and contract status only, not a final Step-3 audit.

## Owner-directed follow-up

The owner chose to preserve all claims and expose the full-AC premise in the
Statements. We updated the original twelve AT items listed above, ten
in-run consumers in the Thom-detection ancestry, and the batch-11
Thom/Stiefel--Whitney detection consumer, for 23 Statements total. Each now
starts with `Assume AC.`; the ten batch-30 consumers also directly depend on
`def-axiom-of-choice` (already present on the batch-11 consumer). The batch-30
and batch-11 manifests, two AT item-inventory JSON carriers, the exact
Statement copies in the Steenrod--Eilenberg--Mac Lane and Thom-detection
integration drafts, and batch-30/batch-11 notes were aligned. The rational
branch needed no such consumer edits. Proofs and claims are unchanged. These
edits invalidate affected Step-1 hashes; receipts and gates have not been
refreshed or retried.
