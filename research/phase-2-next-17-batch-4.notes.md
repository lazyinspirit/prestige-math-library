# Phase 2 next 17 — batch 4 Step-1 construction notes

## Scope and outcome

Owned pair only:

- A: `grothendieck-spectral-sequences-and-computations`, order 365.069, category `homological-algebra`.
- B: `grothendieck-spectral-sequences-and-computations-examples`, order 365.070.

The imported 47-item inventory was audited afresh against the current plan, the complete HA-17 design, the seven required pages, the alpha drift report, and the run prerequisite audit. One necessary local lemma was inserted, giving 39 A items and 9 B items (48 total). The selected pair, page order, category, companion relation, and seven A-page requirements are unchanged. The B page still requires only its A page. No published content, shared plan, engine state, verdict, or canonical defect ledger was edited.

Every item now has a complete statement-level contract, proof strategy, source reference, and explicit dependency list. The intended proof route remains the design route: Cartan–Eilenberg data, the two finite-diagonal filtrations, identification of the composite by the acyclic-resolution theorem, first-quadrant convergence with its filtration, then the UCT/Kunneth and LHS computations. The consumer-batch dependency input remains `[]`: this pair needs no supplier from another batch and supplies no newly requested cross-batch pair.

## Plan/design conflicts and controlling resolutions

The current `research/plan-spec.json` controls all conflicts.

1. The design heading is “Grothendieck Spectral Sequences and Derived Computations”; the current plan and dispatch title are “Grothendieck Spectral Sequences and Computations”. The manifest uses the current-plan title.
2. Both current-plan page objects have `items: []`, while the complete design specifies 38 A items and 9 B items. Following the import instruction and prerequisite audit, the designed inventory was preserved rather than erased. The proof audit required one additional A lemma, so the owned manifest has 39 A and 9 B items.
3. Exact local insertion: `lem-finite-biproducts-of-injective-objects-are-injective` is placed immediately after `def-cartan-eilenberg-injective-resolution-of-a-bounded-below-complex` and before the totalization lemma. The original A inventory is unchanged except for this insertion. Dependency chain: `def-abelian-category`, `def-injective-object` -> the new finite-biproduct lemma -> `lem-a-cartan-eilenberg-resolution-totalizes-to-an-injective-resolution-in-the-required-derived-sense` -> every hyperderived/composite consumer. This is necessary because the imported consumer used `thm-a-coproduct-of-projectives-is-projective-and-a-product-of-injectives-is-injective`, whose general statement assumes AB3/AB3-star, while a Cartan–Eilenberg total degree is only a finite biproduct and the HA-17 theorem is for an arbitrary abelian category. The local coordinatewise extension proof is choice-free and avoids strengthening the theorem.
4. The stable design ID `lem-an-injective-resolution-for-f-produces-a-g-acyclic-resolution-after-f` can be misread as saying that applying F produces a resolution of F(A). Its manifest statement and proof strategy retain the ID but state only the correct termwise G-acyclicity and explicitly forbid that inference.
5. The imported Hyper-Ext contract said “bounded-below K” while displaying the contravariant formula `Ext^p(H^{-q}K,M)`. This conflicts with the design demand that variance and boundedness be stated correctly. It was repaired in place: the displayed first-variable formula now assumes bounded-above K, while the distinct second-variable formula `Ext^p(M,H^qK)` assumes bounded-below K. Stacks Tags 07AA and 0AVG give the two branches and their total degrees.
6. The design cites Sharifi Section 4.3 at printed pp.83–86. The current complete hosted PDF places the same stable section and theorem numbers at printed pp.94–97. Coverage records the live locator and preserves the design locator as historical drift.
7. Owner reconciliation requires the earlier published `def-dependent-choice` interface. That interface is retained even though its current metadata overimports `def-axiom-of-choice`; the published-interface defect is recorded below rather than worked around with the later duplicate DC page.

## Local dependency repairs

- `def-cartan-eilenberg-injective-resolution-of-a-bounded-below-complex` now uses the general `def-direct-sum-total-complex-of-a-double-complex` rather than the Hom-specific `def-direct-sum-total-complex-on-finite-diagonals`, and declares `rem-commuting-versus-anticommuting-double-complex-conventions`. The strategy translates the cohomological source convention into the library's anticommuting convention before totalization.
- The totalization lemma now consumes the new finite-biproduct lemma. Its augmented-cone/acyclic-assembly argument and bounded-below homotopically-injective interpretation were checked in the cited proofs.
- `thm-hyper-ext-spectral-sequence` no longer depends backward on the UCT spectral sequence that it generalizes. It uses the two double-complex filtrations, first-quadrant convergence, and the published derived-Hom/Ext interface.
- `ex-a-collapse-with-a-noncanonical-extension-choice` no longer targets `cex-collapse-with-a-nonsplit-extension-problem`, whose statement provenance is `ai-generated` and therefore cannot be a dependency target. Its strategy now constructs and verifies `0 < 2Z/4Z < Z/4Z` inline, then separately invokes the field splitting proposition.
- The generic collapse/extension assertion is choice-free. Its separate PID splitting comparison now declares `def-axiom-of-choice` and identifies the exact use: choosing the free-submodule splitting in the published UCT argument.
- DC-bearing items state the two branches explicitly. Supplied successor/comparison maps and homotopies give the relative ZF construction; DC is used only to select a countable compatible sequence for one input. No claim makes a global simultaneous choice from DC. LHS uses DC for the published resolution-independent `H^n(G,-)` notation and retains the relative supplied-data `H_I` branch.

## Full-text source evidence

Six authoritative full sources support the A page. The coverage file records 28 harvested results, each with an included/inline destination or a specific out-of-scope reason.

- Weibel, Chapter 5: complete chapter PDF read through printed pp.145–152, including Sections 5.7–5.8 and their proofs.
- Sharifi, complete lecture-note PDF read through the current Section 4.3, printed pp.94–97.
- Stacks Project, Derived Categories: complete chapter PDF, Tags 015H–015N and their proofs read in full.
- Weibel, Chapter 6: complete chapter PDF read through printed pp.195–197, including the LHS construction and low-degree sequence.
- Stacks Project, Cohomology on Sites: complete 136-page PDF inspected; Section 32, Example 32.1/Tag 07AA on PDF p.76 gives the bounded-above first-variable Ext spectral sequence and its Hom double complex.
- Stacks Project, More on Algebra: complete 403-page PDF inspected; Section 69/Tag 0AVG on PDF p.176 gives the bounded-below second-variable Ext spectral sequence and cites the fully inspected Cartan–Eilenberg proof at Tag 015J.

All six URLs succeeded on their initial full-text retrieval; no retry exhaustion, source drop, replacement proof, or owner source escalation applies. `source-fetch-check --stamp` reports 6/6 fetch-verified and 6/6 resolved.

## Published prerequisite defects for canonical-ledger reconciliation

These files are read-only in this dispatch. They are recorded here with exact evidence, current publication state, affected owned consumers, and repair strategy for the owner/operator to reconcile with `research/published-consumer-supplier-ledger.md`.

### Missing DC dependencies in published item metadata

Each item below is `status: published`; its body expressly assumes the Axiom of Dependent Choice at the cited line, but its frontmatter `deps` omits `def-dependent-choice`.

- `def-group-cohomology-as-a-derived-functor`: `items/def-group-cohomology-as-a-derived-functor.md` line 10 omits DC; lines 27–34 assume it. Actual owned consumers are `lem-the-invariants-functor-for-n-sends-injectives-to-q-acyclic-modules`, `thm-lyndon-hochschild-serre-spectral-sequence`, and the LHS false-statement/example branch.
- `prop-positive-right-derived-functors-vanish-on-injective-objects`: line 10 omits DC; line 24 assumes it. Actual owned consumer: the N-invariants acyclicity lemma.
- `thm-acyclic-resolution-theorem-for-left-derived-functors`: line 10 omits DC; line 28 assumes it. Actual owned consumer: the dual left-derived Grothendieck remark and its UCT/Kunneth descendants.
- `thm-acyclic-resolution-theorem-for-right-derived-functors`: line 10 omits DC; line 28 assumes it. Actual owned consumer: `lem-the-total-cartan-eilenberg-complex-computes-the-derived-composite` and hence the Grothendieck branch.
- `thm-horseshoe-lemma-for-injective-resolutions`: line 10 omits DC; line 26 assumes it. Actual owned consumer: Cartan–Eilenberg existence.
- `thm-injective-comparison-map-exists`: line 10 omits DC; line 26 assumes it. Actual owned consumers: Cartan–Eilenberg existence, hyperderived independence, and Grothendieck naturality.
- `thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy`: line 10 omits DC; line 26 assumes it. Actual owned consumers: hyperderived independence and Grothendieck naturality.

Repair strategy: add `def-dependent-choice` to each published item's dependency metadata, preserve its stated supplied-data/relative branch where present, then re-audit and restamp downstream dependency closures. The owned manifest redeclares DC at each load-bearing interface, so the missing published edges do not leave an unstated assumption in this scaffold.

### Missing AC dependencies in published item metadata

- `prop-modules-over-a-field-are-projective-flat-and-injective` is published. Its line 7 deps omit `def-axiom-of-choice`, while lines 27, 32, 34, and 36 explicitly use Choice for a basis and complements. Actual owned consumer: `prop-a-collapsed-first-quadrant-spectral-sequence-with-field-vector-space-abutment-splits-noncanonically` and its B-page example.
- `thm-universal-coefficient-theorem-for-cohomology-over-a-pid` is published. Its line 7 deps omit `def-axiom-of-choice`, while lines 27 and 36 explicitly assume/use Choice to obtain the free-submodule splitting. Actual owned consumers: `prop-collapse-of-uct-or-kunneth-still-leaves-the-recorded-extension-problem`, `fs-collapse-of-the-uct-spectral-sequence-gives-a-natural-splitting`, and the UCT B-page example.

Repair strategy: add `def-axiom-of-choice` to each published item's dependency metadata and re-audit downstream closure. The owned consumers already declare AC and identify its use; the generic collapse-without-splitting branch remains choice-free.

### DC interface overstates axiom strength

`def-dependent-choice` is published. Its frontmatter line 10 lists `def-axiom-of-choice`, although lines 38–48 define DC as its own axiom; AC implying DC is not needed to state DC. Consequently every manifest path through this owner-selected interface mechanically imports full AC even when the actual proof needs only DC or supplied countable choices.

Repair strategy: remove `def-axiom-of-choice` from the logical `deps` of `def-dependent-choice`, retain AC-implies-DC only as a non-load-bearing remark/justification, and re-audit consumers' axiom-strength claims. Until that owner repair, the owned contracts state the logical DC and supplied-data branches honestly, while these notes do not claim that the current metadata closure is DC-only.

### Published-page/draft-item status mismatch

`library/homological-algebra/spectral-sequences.md` is `status: published` at line 4, but six actual prerequisites used by this pair remain `status: draft` despite authored proofs and a recorded Terra pass:

- `def-collapse-at-a-page` (item line 20),
- `def-edge-homomorphisms-of-a-first-quadrant-spectral-sequence` (line 20),
- `def-r-page-of-the-spectral-sequence-of-a-filtered-complex` (line 20),
- `lem-the-filtered-differential-induces-d-r-on-the-r-page` (line 20),
- `prop-collapse-does-not-in-general-split-the-abutment` (line 20),
- `thm-the-next-page-is-the-homology-of-the-current-page` (line 21).

Their complete statements and proofs were read and were adequate for their exact owned uses, so they were not represented as published suppliers and do not create a mathematical proof gap in this scaffold. Owner/operator reconciliation must make the item/page publication state coherent before final publication.

## Check results

Owned-batch checks after repair:

- `manifest-deps`: 48 items, 0 normalized, 0 errors.
- `content-policy --manifest-only`: 48 scoped items, 0 errors, 0 warnings.
- `coverage-checklist --require-destination`: 1 A page, 28 harvested results, 0 errors, 0 warnings.
- `source-fetch-check --stamp`: 6/6 fetch-verified, 6/6 resolved, 0 documented drops.

Whole-run checks:

- `manifest-deps research/phase-2-next-17-batch-*.pages.json`: 480 items, 0 normalized, 0 errors.
- Whole-run `content-policy --manifest-only`: 480 scoped items, 3 errors, all outside batch 4. The errors are in `thm-regular-value-formula-for-degree` for missing `def-fundamental-class-of-a-compact-oriented-manifold` and `def-degree-of-a-map-between-oriented-closed-manifolds`, and in `prop-degree-is-multiplicative-under-composition` for missing `prop-manifold-degree-is-functorial-and-detected-by-top-cohomology`.
- `validate-plan research/plan-spec.json --repo . --max-items 60`: success; declared page order is acyclic and consistent, with no item-level cycles, forward references, B-page dependencies, or unresolved IDs among pages carrying item lists. It notes that 597 planned pages still have empty item lists.
- `extcheck --quiet`: success with 55 repository-wide `unproved-on-published` warnings, none newly introduced by or specific to batch 4.

No Foundations item or page is in this batch, and the audited dependency closure has no route to `deferred-set-theory-beyond-choice`. No Recorded result is consumed to prove a replacement.

Readiness decisions are fresh for `phase-2-next-17` and are hash-bound to the repaired 48-item manifest: 48 `ready`, 0 `escalated`, 0 owner records. A post-record `step1-decisions check` reports 0 open items on the two owned pages. These records establish Step-1 construction readiness only; owner/operator reconciliation and the full engine gate remain required, and Step 3 independently reviews the mathematics.
