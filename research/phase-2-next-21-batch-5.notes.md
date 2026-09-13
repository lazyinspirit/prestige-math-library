# Batch 5 Step 1 construction notes

Run `phase-2-next-21`, role beta, batch 5. Scope is exactly the two assigned A/B pairs. No published item, library page, plan, engine state, or Step 3 verdict was edited.

## Controlling designs and current-plan conflicts

### Bocksteins, Steenrod squares, and cohomology operations

The complete AT-9 section beginning at `research/plan-algebraic-topology-track.md` line 1144 controls the mathematical design. The second dispatched locator, line 1174, is an item inside that same section, not a competing design. I read the whole A inventory, B inventory, scope paragraph, warnings, proof route, and source block.

`research/plan-spec.json` controls the live page metadata. It differs from the prose design in two visible ways:

- the live title is `Bocksteins Steenrod Squares and Cohomology Operations`, without the design heading's punctuation;
- the live A-page prerequisites add `orientations-poincare-lefschetz-and-alexander-duality` to the design's cup/cap prerequisite. The live two-page prerequisite list is preserved. The added seam is genuinely used by `def-wu-classes-of-a-closed-manifold`.

The plan's empty `items` arrays are the generated Step 1 slots, not a reviewed competing inventory; the dispatched prose inventory was scaffolded and the necessary local suppliers below were added. The plan remains authoritative for order, IDs, titles, companions, categories, and `requires`.

### Local coefficients, twisted homology, and duality

The complete AT-23 section beginning at line 1789 controls. The second locator, line 1858, is its B-page subheading, so it is part of the same design rather than an alternative. The current plan's A title, order, companion, and six prerequisites match the final design binding table; there is no mathematical conflict. The plan's empty item arrays again represent unconstructed slots.

## Constructed inventories and prerequisite order

The manifest contains 53 items: 21 on the Steenrod A page, 7 on its B page, 19 on the local-coefficient A page, and 6 on its B page. All `deps` arrays are explicit. A direct filesystem/local-manifest audit found zero unresolved IDs.

Four necessary Steenrod supplier interfaces were inserted at their first points of use:

1. `lem-natural-higher-diagonal-approximations-on-singular-chains` before `def-higher-cup-i-products`;
2. `lem-cartan-coherence-for-higher-diagonal-approximations` before the Cartan theorem;
3. `lem-adem-double-power-comparison` before the Adem theorem;
4. `lem-cyclic-p-fold-power-construction` before odd-prime reduced powers.

These are proof-bearing interfaces, not inventory padding: deleting any one makes its first consumer undefined or unproved. The first two have closed acyclic-carrier strategies. The latter two expose the exact missing prerequisite apparatus and are escalated below.

Two necessary local-coefficient interfaces were inserted:

- `def-cup-and-cap-products-with-local-coefficient-pairings` occurs before twisted duality, because the existing untwisted cap product cannot type a map with two transported coefficient systems;
- `thm-cellular-cochains-compute-cohomology-with-local-coefficients` follows the cellular homology comparison. It supplies the actual cellular-to-singular cochain comparison already requested by Batch 6's consumer `thm-eilenberg-maclane-spaces-represent-singular-cohomology`.

The handedness convention is fixed throughout: the published deck action is left, universal-cover chains are made right modules by `c·g=g^{-1}c`, and the cochain form is `phi(c·g)=g^{-1}phi(c)`. The homology variance uses a coefficient morphism `L -> f^*K`; cohomology uses `f^*K -> L`. No ill-typed `Hom` over two right modules appears.

## Dependency and proof audit

I read the relevant statements and proofs, not merely page membership, for the published singular cochain and pair sequences; Alexander–Whitney cup/cap constructions and Leibniz identities; real and complex projective computations; universal covers and deck transformations; group rings and module/action correspondence; category/functor conventions; fiber transport; the orientation local system; compact-support cohomology; and the published Poincare and Poincare–Lefschetz proofs.

Key dependency chains are:

- coefficient short exact sequence -> cochain lift -> well-defined Bockstein -> naturality/suspension and derivation;
- higher diagonals -> cup-i coboundary -> squares -> representative/model independence -> instability/suspension -> Cartan coherence -> Cartan;
- orientation local homology transport -> orientation R-system -> paired local cap product -> ball duality -> Mayer–Vietoris/exhaustion -> twisted Poincare duality -> collar/five-lemma -> twisted Poincare–Lefschetz duality;
- universal cover/deck action -> right group-ring chains -> balanced tensor and typed equivariant Hom -> local (co)homology -> cellular comparison/pair sequences/excision -> computations and later consumers;
- published fiber transport -> homology/cohomology invariance -> the Serre local systems. The mapping-torus counterexample compares two explicit formal tables and does not use the later Serre spectral sequence.

No manifest dependency is missing, circular, or forward under `validate-plan`. No item uses a Recorded result to prove its replacement. The Foundations dependency path reaches the published `def-axiom-of-choice` only and does not reach `deferred-set-theory-beyond-choice`.

### Choice accounting

- `def-bockstein-connecting-operation` assumes AC for the general set-indexed choice of coefficient lifts on singular simplices. Its standard residue-sequence constructions use canonical representatives and remain choice-free.
- `thm-local-systems-on-a-connected-cw-complex-correspond-to-modules-over-its-group-ring` assumes AC only for a path from the basepoint to every point when constructing a module-based quasi-inverse. The fundamental-groupoid definition and pullback remain choice-free.
- twisted Poincare and Poincare–Lefschetz duality assume AC exactly where the published untwisted proof spends it: countable coordinate-neighborhood selection and local free-module/UCT comparison choices. The orientation local system itself is published and choice-free.
- None of the cup-i carrier constructions invokes AC: the standard simplices have explicit cone contractions.

## Escalation: required prerequisite split

Five readiness records are escalated:

- `lem-adem-double-power-comparison`;
- `thm-adem-relations-for-steenrod-squares`;
- `lem-cyclic-p-fold-power-construction`;
- `def-mod-p-reduced-power-operations`;
- `thm-reduced-powers-satisfy-naturality-instability-cartan-and-adem-relations`.

The issue is mathematical, not source availability. Mosher–Tangora's cup-i construction closes the elementary square properties and Cartan, but its Adem proof invokes Serre's later computation of `H^*(K(Z_2,n);F_2)`, proved there with spectral sequences. In this library the representability/Postnikov page is a later consumer of AT-9, so that route is circular/forward. Steenrod–Epstein gives a direct complete construction, but it first develops free acyclic equivariant resolutions, equivariant carriers/cohomology, transfer, cyclic p-fold external powers, the cohomology of the standard `C_p` resolution, and the `C_p wr C_p` double-power comparison. None is in the current prerequisite closure. A claim that the Adem and odd-primary theorems follow from the listed cup-i identities would therefore be inadequate.

Owner proposal, without changing the selected pairs: add a new prerequisite A/B pair at orders **366.0168/366.0169**, immediately before AT-9 and after the existing cup/cap page.

Proposed A page `equivariant-chain-models-transfer-and-cyclic-power-constructions`:

1. `def-free-acyclic-g-chain-resolution`;
2. `def-equivariant-cochain-complex`;
3. `thm-equivariant-acyclic-carrier-existence-and-uniqueness`;
4. `def-transfer-in-equivariant-cohomology`;
5. `thm-transfer-restriction-and-diagonal-identities`;
6. `def-external-p-fold-cohomology-power`;
7. `thm-external-power-is-natural-and-descends-after-the-diagonal`;
8. `thm-standard-cyclic-resolution-computes-h-star-of-bc-p`;
9. `lem-binomial-action-on-the-standard-cyclic-resolution`;
10. `thm-wreath-product-double-power-comparison`.

Proposed B page `equivariant-chain-models-transfer-and-cyclic-power-constructions-examples`:

1. `ex-the-standard-periodic-resolution-of-a-cyclic-prime-order-group`;
2. `ex-transfer-kills-the-mod-p-diagonal-composite`;
3. `ex-the-transposition-action-in-the-double-power-comparison`.

Exact consumer chains after the split would be:

- items 1–9 -> `lem-cyclic-p-fold-power-construction` -> `def-mod-p-reduced-power-operations` -> the odd-primary theorem;
- items 1–10 -> `lem-adem-double-power-comparison` -> the mod-two Adem theorem and the odd-primary Adem clauses.

Primary source: Steenrod–Epstein, Chapters V–VIII, especially VII §§2–6 and VIII §1. Independent construction control: Mosher–Tangora Chapters 2–3, with its later Serre dependency explicitly excluded as a current proof route. The present manifest preserves all requested public claims and makes the blockers visible; it does not treat the proposed page as published.

## Sources and correction handling

The coverage file records 46 harvested headings with dispositions and exact locators. Seven source entries were full-text verified and stamped: Hatcher, May, Mosher–Tangora, Steenrod–Epstein, Davis–Kirk, plus the repeated page-specific Hatcher/Davis–Kirk entries and Hatcher's errata. The source checker reports `7/7 fetch-verified` and no documented drops.

Hatcher's published erratum for Theorem 3H.6 changes one of the repeated twisted coefficient occurrences to ordinary coefficients. The scaffold follows the corrected formulas and Davis–Kirk's stronger arbitrary-module formulation. This is a defect in the cited edition's original theorem statement, not a defect in any owned published library item. No owned-note evidence of another published prerequisite defect was found.

The independent URL liveness sweep found May, Mosher–Tangora, Steenrod–Epstein, and Davis–Kirk live. Cornell's `AT.pdf` and `AT-errata.pdf` timed out at both 22 seconds and a single 90-second diagnostic retry. This does not undo full-text verification: both Cornell PDFs had already been successfully downloaded, parsed page-by-page, inspected, and stamped by `source-fetch-check`. No source-resolution drop is asserted.

## Readiness and checks

- Step 1 records: **48 ready, 5 escalated**, for all 53 owned items. The only open owned rows are the five listed above.
- Batch coverage: pass, 2 A pages, 46 harvested results, 0 errors/warnings.
- Batch manifest dependencies: pass, every item has an explicit array; direct resolution audit found 0 missing IDs.
- Batch content policy: pass, 53 items, 0 errors/warnings.
- Whole-run manifest dependency check: pass, 745 items, 0 missing arrays/errors at the final rerun.
- Current plan validation: pass; declared page order is acyclic and item-level checked pages have no unresolved IDs, forward references, or cycles.
- Whole-run content policy: pass at the final rerun, 745 items, 0 errors/warnings. An earlier diagnostic found two unrelated other-batch defects (`prop-regular-common-level-sets-are-lagrangian-submanifolds` named missing `thm-regular-level-set-theorem`, and `ex-two-step-cohen-iteration-is-a-product` depended on B-page item `ex-two-cohen-reals-as-mutually-generic-coordinates`); their owners repaired them before this final rerun, and Batch 5 did not edit them.
- External-reference check: exit 0. It reports the repository's existing 55 published consequences of Recorded material, none introduced or consumed by an owned item.
- Source fetch check: pass, 7/7 full-text verified.
- URL liveness check: 4/6 live; two Cornell timeout diagnostics as recorded above.
- Cross-batch input: `research/phase-2-next-21-batch-5.cross-batch-dependencies.json` is empty because Batch 5 owns no consumer of another current batch. The derived ledger was refreshed. Incoming Batch 6 has a verified item edge to the newly supplied cellular-cochain theorem. Its separate page-edge evidence still contains the stale phrase that the comparison is lacking; that row belongs to Batch 6 and was not edited here. The page edge correctly remains open because the supplier page is scaffolded, not published.
- Scaffold verdict check: expected Step 1 failure because Step 3 has issued no page verdicts for any run page. No Step 3 verdict was created or edited.

Owner/operator reconciliation and the Step 3 mathematical review remain required; a worker readiness record is not independent approval.
