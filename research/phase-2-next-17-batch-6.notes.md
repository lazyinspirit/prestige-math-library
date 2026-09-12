# Phase 2 next 17 — beta batch 6 construction evidence

Run: `phase-2-next-17`. Role: beta. Batch: 6. Date: 2026-09-12.

Status: **23/23 owned items ready** (17 A, 6 B). This is Step 1 construction evidence for later owner/operator reconciliation and Step 3 review, not independent mathematical approval or permission to publish. No published content, shared plan, engine state, selected pair, or verdict was edited.

The pair and its coverage were imported from `phase-2-next-15` batch 5. They were not accepted on that history alone: the live run state, current plan, full designs, sources, statements, proofs, and transitive prerequisites were re-read. Fresh readiness records and hashes were written after the repairs below.

## Instructions, scope, and controlling design

Read in full: `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, the assigned beta task and briefs, `research/phase-2-next-17-planning-notes.md`, `research/phase-2-next-17-prerequisite-audit.md`, `research/phase-2-next-17-alpha-step1-drift.md`, the current plan object, and the complete assigned design section.

Design line 1668 begins the controlling A-page section and establishes the shared scope, conventions, warnings, and proof route. Line 1699 begins the B-page examples/counterexamples subsection. These are complementary locations in one design rather than competing designs: the A section controls the theorem spine and the B subsection controls its applications. `research/plan-spec.json` controls metadata conflicts for this run.

The owned inventory is in prerequisite order. It has 17 A items and 6 B items. One necessary local definition, `def-double-mapping-cylinder-homotopy-pushout-and-path-space-homotopy-pullback`, was inserted immediately before its Blakers–Massey consumer. The design's duplicate Hopf-degree item was not minted.

## Plan/design conflicts and repairs

1. The design names only `fibrations-fiber-bundles-and-homotopy-exact-sequences` as a direct prerequisite. The current plan additionally requires `relative-homology-excision-and-mayer-vietoris`, `cw-complexes-and-cellular-homology`, and `higher-homotopy-groups-and-cofiber-sequences`. The plan controls. All four roots are genuinely used by the final manifest.
2. The plan's item arrays are empty. Empty page-level arrays do not authorize deleting the reviewed design inventory, so the imported inventory was retained and audited.
3. The proposed `thm-hopf-degree-classification-of-sphere-self-maps` duplicates the published `thm-based-sphere-maps-are-classified-by-geometric-degree`. The published supplier is reused.
4. Design line 1690 describes the Blakers–Massey cartesian comparison in the wrong direction. For initial corner `A` and terminal homotopy pushout `P`, the comparison is `A -> B times^h_P C`, not a map starting at `P`. The scaffold records the correct direction and standard `(m+n-1)` connectivity in the repository's relative-group convention.
5. The Hurewicz contracts are restricted to CW pairs/CW complexes, or spaces already known homotopy equivalent to CW complexes. A bare weak CW approximation is not used to transport homology inside the Hurewicz proof, which would be circular here.
6. The imported finite-skeleton corollary overclaimed that every based representative lands in `X^n`. Hatcher's Corollary 4.9 fixes a 0-cell basepoint. The repaired statement makes that hypothesis explicit and makes no skeletal claim for a basepoint outside `X^n`.
7. The imported Freudenthal statement mixed Hatcher's unreduced two-cone proof with the separate reduced loop–suspension adjunction. The repaired statement and strategy consistently use the unreduced two-cone suspension based at a cone point and remove the unused reduced-adjunction dependency.
8. The B design gloss calls for a “source-standard weakly contractible noncontractible space,” while its stable item ID asks only for failure of Whitehead without CW type. The manifest uses the explicit continuous weak equivalence `Q_d -> Q`, which is not a homotopy equivalence. It proves exactly the stable claim without pretending that `Q` has one path component; the witness change is recorded rather than hidden.
9. The final B gloss suggests an acyclic noncontractible CW complex. The manifest instead uses the explicit map from `S^1` to the two-cell trefoil-presentation complex. Its cellular matrix proves an integral homology equivalence and its nonabelian fundamental-group quotient proves failure of homotopy equivalence, directly isolating the missing simple-connectivity hypothesis. No stronger acyclicity claim is made.

## Mathematical construction and dependency audit

The global cellular-approximation contract now separates axiom strength exactly. For a finite relative source, its finitely many cell deformations need only finite choice and the clause is choice-free. For an arbitrary cell set, `def-axiom-of-choice` selects one available deformation for every cell at a skeleton. The arbitrary-cell cellular-reduction and obstruction-extension lemmas declare AC and identify the same simultaneous cellwise selection. Consequently unrestricted relative/absolute Hurewicz and Whitehead declare AC; finite-CW Whitehead is preserved as a choice-free branch. CW approximation remains choice-free because it indexes attachments by all actual maps and all actual nullhomotopies and tests only finite spheres, disks, and homotopies. Homotopy excision and Freudenthal likewise use only the finite-source clause and remain choice-free.

`def-hurewicz-homomorphism` now declares the actual cubical-to-spherical and relative cubical-to-disk comparison lemmas, the valid-degree group-law lemmas, and homology additivity needed for pinch additivity. Its degree-one consumer now declares the singular chain/homology quotient used by the cycle-and-boundary argument. The low-cell lemma distinguishes the free groups at the relative n-skeleton from the cokernels after the `(n+1)`-cells, avoiding the imported wording that called the final groups free while also imposing relations.

The new homotopy-(co)limit definition fixes the CGWH models before use: May's ordinary double mapping cylinder supplies the homotopy pushout, the path-space homotopy pullback uses kified products/subspaces, and the canonical comparison sends `a` to `(f(a), t |-> [a,t], g(a))`. At a chosen source point the cylinder track itself is the pullback basepoint, so no artificial 0-cell restriction or false common endpoint basepoint is introduced. Rezk's Theorem 3.1 confirms the initial-corner comparison and its full Blakers–Massey proof. Rezk indexes maps by homotopy-fibre connectivity, one lower than the repository's relative-group convention; his `m+n` translates to the scaffold's `m+n-1`.

Every declared direct dependency and every newly exposed well-definedness supplier was opened and its statement and proof read. The audit covered 73 external dependency edges to 39 distinct external IDs. Every external item file is published; every edge lies in the transitive closure of the four plan roots; there are zero prerequisite B-page uses. The manifest has 26 local dependency edges, all pointing to earlier items. No missing ID, local cycle, forward proof edge, inadequate direction, hidden basepoint change, circular weak-equivalence use, Recorded-result replacement, or incompatible-axiom path was found. The AC edges terminate at the published choice axiom and introduce no path from a Foundations page to `deferred-set-theory-beyond-choice`.

No mathematical or publication-state defect was found in an actual published prerequisite. The whole-repository external-reference warnings listed below are unrelated consumer debt and do not block this supplier batch.

## Source evidence and dispositions

Coverage records 26 harvested results. Every result has an included/inline/already-published disposition or a specific out-of-scope reason. No source was dropped, no retrieval failed, and no retry allowance was consumed.

- Allen Hatcher, *Algebraic Topology*, Chapter 4: complete relevant arguments in §4.1, printed pp.346–354, and §4.2, pp.360–374 and 384–392. Fetch stamp: 1,337,444 bytes, 84 pages, SHA-256 prefix `2406a6d735efabec`.
- J. P. May, *A Concise Course in Algebraic Topology*: complete relevant proofs in Chapter 10 §§3–7, printed pp.75–80; Chapter 11 §§1–3, pp.83–90; and Chapter 15 §1, pp.117–119. Fetch stamp: 1,715,976 bytes, 251 pages, prefix `6724f02748ed1f2f`.
- Charles Rezk, *Proof of the Blakers–Massey theorem*: the full nine-page paper, especially Lemma 1.4 and the convention discussion on pp.1–2 and Theorem 3.1 with its complete proof on pp.5–9. Fetch stamp: 269,605 bytes, 9 pages, prefix `5edbf4333a382991`.

Hatcher and May are two independent book/full-note treatments for the A page. Rezk is the independent primary author-hosted check on the Blakers–Massey direction, convention shift, and proof.

## Cross-batch ledger and readiness

All consumers resolve to earlier local items or published items in the current plan prerequisite closure. No new current-run supplier/consumer edge or prerequisite pair is required, so `research/phase-2-next-17-batch-6.cross-batch-dependencies.json` remains exactly `[]`. `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-next-17` refreshed the canonical unified ledger through its required interface.

All 23 owned outcomes were recorded `ready` in manifest prerequisite order using exact declared dependency arrays. The records bind to the current item/dependency hashes. A concurrent whole-run Step 1 check remained in progress at 488/521 ready because other batches were still changing; the owned subset had 23/23 ready and zero open or stale records.

## Checks actually run

- Owned `manifest-deps`: 23 items, 0 normalized, 0 errors.
- Owned `content-policy --manifest-only`: 23 items, 0 errors, 0 warnings.
- Owned `coverage-checklist --require-destination`: 1 A page, 26 harvested results, 0 errors, 0 warnings. An initial run rejected the unrecognized source-kind label `author-hosted-paper`; it was corrected to `paper` and the rerun passed.
- Owned `source-fetch-check --stamp`: 3/3 sources fetch-verified, with the Rezk source newly stamped; ordinary recheck: 3/3 verified and 3/3 resolved, 0 drops.
- Page-membership/requires-closure audit: 73 external edges to 39 distinct published IDs, 0 outside the transitive plan closure, and 0 prerequisite B-page uses.
- Local prerequisite-order audit: 26 local edges, 0 forward or circular edges.
- Whole-run `manifest-deps`: 521 items, 0 normalized, 0 errors.
- `validate-plan research/plan-spec.json`: exit 0; declared page order is acyclic and consistent, with no item-level cycle, forward reference, B-page dependency, or unresolved ID among the 1,022 pages with item lists. Its redundant-prerequisite diagnostics are pre-existing.
- Whole-run `manifest-integrity`: all 34 owed pages present; 0 missing, 0 added.
- `fwdcheck --quiet`: exit 0, all forward-reference constraints pass.
- `extcheck --quiet`: exit 0 with 55 existing published consequences of Recorded material; none is an owned item or owned prerequisite defect, and the Foundations deferred-set-theory boundary passes.
- The first concurrent whole-run manifest-only policy snapshot found two errors outside batch 6 in batch 5: `thm-compact-locally-contractible-euclidean-subsets-are-neighborhood-retracts` and `lem-finite-cw-complexes-are-euclidean-neighborhood-retracts` named nonexistent `def-cw-complex`. That batch was repaired independently while this dispatch was active. The final rerun covered 521 items and passed with 0 errors and 0 warnings; this dispatch did not edit batch 5.

The full engine gate, publication, render/precheck, independent judge, and Step 3 approval are not claimed.
