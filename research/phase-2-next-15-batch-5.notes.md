# Phase 2 next 15 — beta batch 5 construction evidence

Run: `phase-2-next-15`. Role: beta. Date: 2026-09-11.

Status: **47/47 owned items ready.** This is Step 1 construction evidence for owner/operator reconciliation and Step 3 review, not independent mathematical approval or permission to publish. No published content, shared plan, engine state, selected pair, or verdict was edited.

## Instructions, scope, and controlling design

Read in full: `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, the beta scaffold and dependency-ledger briefs, the assigned task, current plan, run task and planning evidence, the complete AT-7 and AT-12 design sections, and the actual relevant prerequisite statements and proofs. Live `.autopilot/` state and git history, rather than any concluded `RESUME.md`, established the run state.

For AT-7, line 1016 begins the controlling A-page section and line 1051 begins its B-page subsection. They are complementary locations in one design, not rival designs: lines 1016–1050 control the A inventory, conventions, and route; lines 1051–1060 control the B inventory. For AT-12, line 1667 begins the controlling A-page section and line 1698 begins its B-page subsection; lines 1667–1697 control A and lines 1698–1705 control B for the same reason. In metadata conflicts, `research/plan-spec.json` controls this run.

The owned inventory has 47 stable unused IDs in prerequisite order:

- AT-7 A/B: 17 A items and 8 B items.
- AT-12 A/B: 16 A items and 6 B items.

No new pair, page split, cross-batch input, or forward dependency is required.

## Plan/design comparison and recorded conflicts

The current plan agrees with the design on page IDs, titles, category, companions, and orders. Its item arrays are empty, so they do not compete with the design inventories. It differs on direct page prerequisites:

1. AT-7 design line 1020 names only `singular-cohomology-and-coefficient-theorems`; the current plan additionally requires `cw-complexes-and-cellular-homology`. The plan controls, and the extra edge is genuinely used by the projective-space and surface calculations.
2. AT-12 design line 1671 names only `fibrations-fiber-bundles-and-homotopy-exact-sequences`; the current plan additionally requires `relative-homology-excision-and-mayer-vietoris`, `cw-complexes-and-cellular-homology`, and `higher-homotopy-groups-and-cofiber-sequences`. The plan controls, and all four roots are used.
3. The design duplicates already-published suppliers `def-singular-chain-cross-product-on-generators`, `lem-singular-chain-cross-product-boundary-formula`, and `prop-singular-chain-cross-products-are-natural` under the proposed IDs `def-eilenberg-zilber-singular-cross-product` and `thm-singular-cross-product-boundary-formula`. The scaffold reuses the published suppliers rather than duplicating them.
4. The design's `def-singular-cochain-cross-product` and `thm-cochain-cross-product-leibniz-identity` are already supplied by the additive external-product interface on AT-6. The local cup definition consumes that interface and records the coefficient-ring multiplication, avoiding redundant items.
5. The AT-12 design's proposed `thm-hopf-degree-classification-of-sphere-self-maps` duplicates the published `thm-based-sphere-maps-are-classified-by-geometric-degree`; the published theorem is reused.
6. Design line 1041 overstates the arbitrary-triad relative cup product. A simplex in `A union B` need not lie wholly in either member. The scaffold therefore states the required open-cover, CW-subcomplex, or explicit small-chain comparison hypothesis and records the small-chain dependencies.
7. Design line 1689 describes the Blakers–Massey comparison as starting at the homotopy pushout. For a homotopy-pushout square with initial corner `A` and terminal corner `P`, the cartesian comparison is `A -> B times^h_P C`. The scaffold uses this correct direction and the standard `(m+n-1)` connectivity.
8. The Hurewicz contracts are restricted to CW pairs/CW complexes, or spaces already known homotopy equivalent to CW complexes. A bare weak CW approximation is not used to transport homology inside the proof of Hurewicz, which would be circular at this point in the page.

## Mathematical construction and dependency audit

The AT-7 route fixes the positive coboundary convention and the front/back Alexander–Whitney formula. The shuffle comparison precedes cup products; Leibniz precedes descent; reversal with the Koszul twist precedes graded commutativity. Relative cup and cap domains include the actual quotient/small-chain hypotheses. Cap is written with cohomology first, and its boundary and projection signs were checked under that convention. The multiplicative Künneth statement invokes the finite-free additive supplier only for bijectivity and carries AC exactly through that supplier. UCT/Künneth consumers directly declare `def-axiom-of-choice`; the cochain identities and homotopies remain choice-free.

The projective-space examples do not depend on prerequisite B pages. Their needed cellular groups are reconstructed inline from the incidence-degree theorem, the missing-adjacent-cell corollary, and cellular comparison. The circle cap example uses the assumed evaluation normalization and the A-page `H_0` description. The suspension vanishing proof uses cohomology homotopy invariance, not the inadequate homology-of-a-contractible-space corollary.

The AT-12 route keeps cellular approximation, compact-image quantifiers, CW approximation, Hurewicz, homotopy excision, Freudenthal, and Whitehead logically separated. The low-cell Hurewicz lemma does not claim informal cell cancellation: it builds a relative CW model using actual maps/nullhomotopies, proves the model map is a relative homotopy equivalence by a mapping-cylinder cell-extension argument, then compares the homotopy and cellular incidence cokernels. This inlines the needed obstruction argument and does not consume the later Whitehead theorem. Hurewicz uses CW hypotheses; Whitehead uses only relative homotopy vanishing and cellular obstruction extension. The CW-approximation construction indexes all actual data and does not choose representatives, so no AC is used.

The homotopy-excision and Freudenthal endpoint inequalities were checked explicitly. Blakers–Massey uses the initial-corner-to-homotopy-pullback map. The two negative examples were checked directly: `Q_d -> Q` is a continuous weak equivalence with no continuous inverse up to homotopy, and the two-cell complex `<a,b | a^2=b^3>` has the stated homology while surjecting onto nonabelian `S_3`.

Every direct dependency resolves within the current page-requires transitive closure or to an earlier local item. A separate page-membership scan found zero prerequisite-example-page uses after the inline repairs. Statements and proof bodies were checked for hypotheses, direction, basepoints, connectivity indexing, signs, well-definedness, and axiom strength. There is no missing ID, local cycle, forward edge, or B-page dependency. No Recorded result proves its replacement, and no Foundations path reaches `deferred-set-theory-beyond-choice`.

## Published-page/item-state defect for the canonical ledger

`library/algebraic-topology/singular-cohomology-and-coefficient-theorems.md` is `status: published`, but the following actual transitive suppliers used by AT-7 are still `status: draft` in their item files, with `pipeline_run: phase-2-next-20`:

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

Exact consumer chains include Alexander–Whitney/Eilenberg–Zilber through the draft simplex-model equivalence; cup and relative products through the draft cochain, additive-product, and pair-sequence items; and ring calculations through the draft UCT and cohomological Künneth items. Their complete current statements and proofs were opened and found mathematically adequate, including the explicit AC declarations, and their judge metadata records pass. They were not treated as published. This is a page/item publication-state mismatch, not a mathematical defect in the checked proofs, so it does not block these new suppliers. Repair strategy: the canonical owner should reconcile the concluded `phase-2-next-20` artifacts and either publish/audit these items together with the already-published page or remove/downgrade their page exposure. This dispatch changed no status.

No defective published proof was found in the actual usable closure. Unrelated external-reference warnings were not used to block the batch.

## Source evidence and dispositions

Coverage records 45 harvested results. Every result is included/inline/already-published, deferred to a valid destination, or out of scope with a specific reason. No source was dropped and no retry limit was reached.

- Hatcher, *Algebraic Topology*, Chapter 3: complete relevant arguments in §3.2, printed pp. 206–229, and §3.3, pp. 239–241. Fetch stamp: 1,292,366 bytes, 76 pages, SHA-256 prefix `3fe35aae9c2bddc3`.
- Miller, *Lectures on Algebraic Topology*: complete relevant constructions and proofs in Lectures 28–29, printed pp. 76–83, and Lectures 33–34, pp. 91–96. Miller's additional cochain-cross-product sign was translated to the repository's positive-differential convention. Fetch stamp: 957,927 bytes, 115 pages, prefix `d027416ce17889f2`.
- Hatcher, *Algebraic Topology*, Chapter 4: complete relevant arguments in §4.1, printed pp. 346–354, and §4.2, pp. 360–374 and 384–392. Fetch stamp: 1,337,444 bytes, 84 pages, prefix `2406a6d735efabec`.
- May, *A Concise Course in Algebraic Topology*: complete relevant proofs in Chapter 10 §§3–6, printed pp. 75–79; Chapter 11 §§1–3, pp. 83–90; and Chapter 15 §1, pp. 117–119. Fetch stamp: 1,715,976 bytes, 251 pages, prefix `6724f02748ed1f2f`.

These give two independent full treatments, including a textbook/full lecture-note set, for each A page.

## Cross-batch ledger and owned outcomes

All owned consumers resolve to earlier items in the same pair or to the current plan's prerequisite closure. No new current-run supplier/consumer edge is needed, so `research/phase-2-next-15-batch-5.cross-batch-dependencies.json` is exactly `[]`. `tools/frontier-dependency-ledger.mjs refresh --run phase-2-next-15` was run through the required ledger interface.

All 47 outcomes were recorded `ready` in manifest prerequisite order with exact declared dependency arrays and source/dependency evidence. The records bind to the current manifest hashes. There are no owned escalations, missing records, or stale records.

## Checks actually run

- Owned `manifest-deps`: 47 items, 0 normalized, 0 errors.
- Owned `content-policy --manifest-only`: 47 items, 0 errors, 0 warnings.
- Owned `coverage-checklist --require-destination`: 2 A pages, 45 harvested results, 0 errors, 0 warnings.
- Owned `source-fetch-check --stamp`: 4/4 sources newly fetch-verified; ordinary recheck: 4/4 verified and 4/4 resolved, 0 drops.
- Page-membership/requires-closure audit: 4 owned A/B pages, 0 missing suppliers, 0 suppliers outside transitive requires, and 0 prerequisite B-page uses.
- Whole-run `manifest-deps` concurrent snapshot: 455 items, 0 normalized, 0 errors.
- `validate-plan research/plan-spec.json`: exit 0; declared page order acyclic and consistent, with no item-level cycle, forward reference, B-page dependency, or unresolved ID among the 1,022 pages with item lists. Its redundant-prerequisite diagnostics are pre-existing.
- Whole-run `manifest-integrity`: all 30 owed pages present, none missing or added.
- `extcheck --quiet`: exit 0 with 55 existing published consequences resting on recorded-not-proved material; none is an owned item or owned prerequisite defect.
- Whole-run manifest-only policy currently has 8 errors, all outside batch 5: three missing dependencies in the degree/de Rham batch and five in the affine Kac–Moody batch. The owned policy check passes.

The full engine gate, publication, render/precheck, independent judge, and Step 3 approval were not claimed.
