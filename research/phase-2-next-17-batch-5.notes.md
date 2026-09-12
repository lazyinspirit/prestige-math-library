# Phase 2 next 17 — batch 5 Step-1 construction notes

## Scope and outcome

Owned pairs only:

- `cup-cap-cross-products-and-cohomology-rings` (AT-7), order 366.013, and its B page;
- `orientations-poincare-lefschetz-and-alexander-duality` (AT-8), order 366.015, and its B page.

AT-7's imported 17-A/8-B inventory was preserved and audited afresh. AT-8 was constructed in prerequisite order with 31 A items and 10 B items. The three additions to the generated 28-item AT-8 A outline are necessary proof suppliers, not inventory padding. Thus the owned manifest has 66 items: 64 `ready` and 2 `escalated`. No published content, shared plan, engine state, verdict, or selected pair was edited.

The complete normative and task material read for this construction was `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, `briefs/beta-scaffold.md`, `briefs/tasks/frontier-dependency-ledger.md`, the batch-5 task, `research/phase-2-next-17-prerequisite-audit.md`, the current `research/plan-spec.json` page objects, the complete AT-7 and AT-8 design sections in `research/plan-algebraic-topology-track.md`, current run evidence, and the actual statements and proofs of every load-bearing prerequisite.

For AT-7, design line 1016 controls the A-page scope, conventions, warnings, and proof route; line 1051 controls the complementary B examples. For AT-8, line 1073 controls the A page and line 1117 the complementary B page. Neither listed location supersedes the other because each A/B pair is complementary. The current plan controls metadata conflicts described below.

## Plan/design conflicts and controlling resolutions

The current `research/plan-spec.json` controls all conflicts; it was not changed in this dispatch.

1. The AT-7 design lists only `singular-cohomology-and-coefficient-theorems` as a page requirement, while the current plan also requires `cw-complexes-and-cellular-homology`. The manifest preserves both current-plan requirements. The extra page is genuinely used by the finite-CW and Künneth interfaces.
2. All four current-plan page objects have `items: []`. The complete design and imported Step-1 evidence contain the intended inventories, so the empty plan placeholders do not erase them.
3. The design's AT-7 outline includes chain cross-product and additive cochain cross-product interfaces that are already supplied by the prerequisite cohomology page. The imported manifest reuses those published suppliers and retains only the 17 genuinely local A interfaces. It also strengthens the design's overbroad arbitrary-triad prose by printing the excision/small-chain hypotheses actually needed for relative cup and cap products.
4. The AT-8 plan and design agree on the declared requirements `relative-homology-excision-and-mayer-vietoris` and AT-7. However, the retained design item `thm-simplicial-approximation-after-sufficient-subdivision` actually consumes published `thm-relative-simplicial-approximation-after-subdivision`, owned by `simplicial-subdivision-and-simplicial-approximation`, which is outside that closure. This contradicts the prerequisite audit's claim that the two declared pages are exactly sufficient. The plan remains controlling and unchanged, so the local item and its Lefschetz consumer are escalated rather than treating page publication as a proof check.
5. The 28-item AT-8 design omits three necessary intermediate results. The manifest adds, with stable unused IDs: `thm-topological-collaring-for-manifold-boundaries` immediately after degree and before the boundary-class construction; `thm-compact-locally-contractible-euclidean-subsets-are-neighborhood-retracts` immediately before Alexander duality; and `lem-finite-cw-complexes-are-euclidean-neighborhood-retracts` immediately before the Lefschetz theorem. These make collar existence, Alexander's neighborhood reduction, and the finite-CW ENR reduction explicit.
6. The design orders `def-relative-fundamental-class-and-boundary-orientation` before the lemma that constructs and verifies its class. The manifest places `lem-a-collar-identifies-boundary-local-homology-with-the-pair-fundamental-class` first, after the collar theorem, so existence and boundary-sign compatibility are established before the class is named.

## Exact owner escalation

Add the already-published page `simplicial-subdivision-and-simplicial-approximation` as a direct requirement of the AT-8 A page before final construction. No page split, selected-pair change, B-page requirement change, or new current-run pair is requested. The proposed post-reconciliation inventories remain A = 31 and B = 10.

Exact chain:

`thm-relative-simplicial-approximation-after-subdivision`
→ `thm-simplicial-approximation-after-sufficient-subdivision`
→ `thm-lefschetz-fixed-point-theorem-for-finite-complexes`.

The published theorem, its proof, Hatcher §2.C, and the local finite-complex reduction were inspected and are mathematically adequate. The defect is the missing page-level prerequisite edge. Accordingly only the two local items named in the chain are escalated; all independent AT-8 material remains ready.

## Mathematical and dependency audit

- Product conventions are cohomology-first cap, positive coboundary, a commutative unital coefficient ring for multiplicative claims, Koszul tensor-ring multiplication, and explicit relative/excisive domains. Bare abelian-group coefficients are not assigned a canonical cup multiplication.
- Top homology is not falsely declared zero for every compact nonorientable manifold over every ring: the contract includes the `R[2] = {r : 2r = 0}` alternative. The noncompact top-cycle argument is choice-free because a given finite cycle requires only one point and one connecting path at a time.
- The compact collar theorem is stated only in the needed compact-boundary scope. Its finite half-chart construction uses explicit radial bump functions and requires no Urysohn lemma, partition of unity, or Choice.
- Choice is declared exactly on the routes that use it: module/UCT duality in the local ball calculation, the selected countable exhaustion, general Poincaré and Poincaré–Lefschetz duality, the singular-cohomology Alexander/ENR reduction, and the finite-CW Lefschetz reduction. Choice-free branches remain explicit. No owned proof or prerequisite path reaches `deferred-set-theory-beyond-choice`.
- Alexander duality assumes a nonempty proper compact locally contractible subset and states reduced-degree conventions. Jordan–Brouwer concludes two complementary components and common boundary, not that the components are balls. Invariance of domain uses the exact embedded-disk/Jordan argument.
- The Lefschetz theorem is one-way. Its finite-CW route uses a Euclidean-neighborhood-retract reduction and trace cyclicity; it does not transfer the fixed-point property across a mere homotopy equivalence.
- Every local dependency precedes its consumer. B items depend only on their A page or earlier published suppliers, never on another B page. No Recorded result is used to prove its replacement.

The owned consumer-batch dependency input remains `[]`. This batch creates no dependency on a different batch in the current run. The missing simplicial page is a published prerequisite amendment, not a current-run supplier request. The canonical frontier ledger was refreshed with `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-next-17`.

## Full-text source evidence

Eight full-text source records support the two A pages, and coverage records 54 harvested results with an included/inline item, valid deferred destination, already-published disposition, or specific out-of-scope reason.

- Hatcher, *Algebraic Topology*, Chapter 3: AT-7 §3.2 and cap construction, and AT-8's complete §3.3 arguments, printed pp.206–260.
- Miller, *Lectures on Algebraic Topology*: AT-7 Lectures 28–29 and 33–34, and AT-8 Lectures 31–38, printed pp.76–108.
- May, *A Concise Course in Algebraic Topology*, Chapters 20–21, printed pp.151–174, including the full duality and boundary arguments.
- Hatcher, Chapter 2 §§2.B–2.C, printed pp.169–184, including Jordan–Brouwer, invariance of domain, and relative simplicial approximation.
- Hatcher, Appendix §§A.7–A.10, printed pp.8–11, including the ENR facts used by Alexander and Lefschetz.
- Walton, *Algebraic Topology IV*, §4.7, printed pp.95–98, an independent complete embedded-disk/Jordan–Brouwer/invariance-of-domain route.

All eight URLs yielded inspectable full PDFs on the initial recorded retrieval; no retry exhaustion, source drop, alternative-proof waiver, or owner source escalation applies. `source-fetch-check --stamp` reports 8/8 fetch-verified and 8/8 resolved. Deferred results go to `sheaf-cohomology-cech-cohomology-and-comparison`, `local-coefficients-twisted-homology-and-duality`, or `the-hirzebruch-signature-theorem` as appropriate.

## Published prerequisite state defect for canonical-ledger reconciliation

`library/algebraic-topology/singular-cohomology-and-coefficient-theorems.md` is published, but the following 15 actual AT-7 supplier item files still carry `status: draft` and `pipeline_run: phase-2-next-20`:

- `def-singular-cochain-complex-with-coefficients`
- `lem-the-singular-coboundary-squares-to-zero`
- `def-singular-cohomology-with-coefficients`
- `prop-singular-cohomology-is-contravariantly-functorial`
- `thm-homotopic-maps-induce-equal-maps-in-singular-cohomology`
- `def-relative-singular-cochain-complex`
- `thm-long-exact-sequence-of-a-pair-in-singular-cohomology`
- `def-kronecker-evaluation-pairing`
- `lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives`
- `lem-singular-uct-extension-from-cycle-projections`
- `thm-topological-universal-coefficient-short-exact-sequence-for-cohomology`
- `lem-singular-product-chain-equivalence-by-simplex-models`
- `def-additive-singular-cohomology-cross-product`
- `lem-additive-singular-cohomology-cross-product-is-well-defined`
- `thm-cohomological-kunneth-isomorphism-under-finite-free-hypotheses`

Their complete statements and proofs were inspected and are adequate for the exact owned uses, with existing judge-pass evidence. This is therefore a page/item publication-state mismatch, not a defective mathematical prerequisite and not a reason to block the new AT-8 supplier. Owner/operator repair should reconcile those item statuses with the published page and its completed evidence, then restamp downstream closure. This dispatch does not alter published files or the canonical published-consumer ledger.

## Check results

Owned-batch checks after construction:

- `manifest-deps`: 66 items, 0 normalized, 0 errors.
- `content-policy --manifest-only`: 66 scoped items, 0 errors, 0 warnings.
- `coverage-checklist --require-destination`: 2 A pages, 54 harvested results, 0 errors, 0 warnings.
- `source-fetch-check --stamp`: 8/8 fetch-verified, 8/8 resolved, 0 documented drops.
- `manifest-integrity --run phase-2-next-17`: 34/34 owed batch manifests present, 0 missing, 0 unexpected additions.

Whole-run checks at the final batch-5 snapshot:

- `manifest-deps research/phase-2-next-17-batch-*.pages.json`: 521 items, 0 normalized, 0 errors.
- Whole-run `content-policy --manifest-only`: 521 scoped items, 0 errors, 0 warnings.
- `validate-plan research/plan-spec.json`: success; declared page order is acyclic and consistent, with no item-level cycle, forward reference, B-page dependency, or unresolved ID among the 1022 pages carrying item lists. It reports the existing 597 empty plan inventories as diagnostics.
- `extcheck --quiet`: success with 55 repository-wide warnings about existing published consequences resting on Recorded material. None is a newly introduced or actual owned prerequisite after the collar proof was made self-contained.
- Whole-run `step1-decisions check` reports 513/521 ready and 8 escalations. Exactly the two simplicial/Lefschetz records above belong to batch 5; the other six are consumer-batch findings outside this dispatch's edit authority.

Fresh, hash-bound readiness records were written once in manifest order and refreshed only when an owned ready item's manifest content changed. The final owned result is 64 `ready` and 2 `escalated`, with no owner record and no escalation overwritten. These records establish Step-1 construction evidence only; owner/operator reconciliation and the engine gate still follow, and Step 3 independently reviews the mathematics.
