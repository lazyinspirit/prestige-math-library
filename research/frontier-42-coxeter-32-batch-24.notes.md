# Batch 24 notes — `affine-reflections-coroot-translations-and-alcoves` (CG-19)

Run `frontier-42-coxeter-32`, role beta, label `batch-24`, covers 24. One A/B pair:

- A page `affine-reflections-coroot-translations-and-alcoves`, order **1764**, category `coxeter-groups`, 7 items.
- B page `affine-reflections-coroot-translations-and-alcoves-examples`, order **1765**, 4 items.

Artifacts written by this batch: `research/frontier-42-coxeter-32-batch-24.pages.json`,
`research/frontier-42-coxeter-32-batch-24.coverage.json`,
`research/frontier-42-coxeter-32-batch-24.cross-batch-dependencies.json`,
`research/frontier-42-coxeter-32-step1-<item>.json` (11 readiness records),
`research/frontier-42-coxeter-32-batch-24-url-liveness.json` (mechanical sweep output), and this file.
No published content, shared plan, engine state or verdict was edited.

## 1. Inputs read

`CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, `briefs/beta-scaffold.md`, `briefs/tasks/frontier-dependency-ledger.md`,
the dispatch and task prompt, owner direction `research/frontier-42-coxeter-32-owner-authoring-direction.md` (binding),
design `research/plan-coxeter-groups-track.md` §CG-19 (L449ff), `research/plan-spec.json` (CG-19 / CG-19-B entries),
`research/coxeter-scaffold/inventory.json` (CG-19 page entry), `research/coxeter-scaffold/independent-audit.md`
(line 23 of the audit table: gallery-disk moves replace the bounded-inequality/translation-uniqueness route),
`research/coxeter-scaffold/geometric-source-report.md` §"Crystallographic affine alcoves",
`research/coxeter-scaffold/algebraic-source-report.md` §"Elementary affine Weyl theory, independent of loop algebras",
drift review `research/frontier-42-coxeter-32-alpha-step1-drift.md` (§`affine-reflections-coroot-translations-and-alcoves`: **VERDICT: no-drift**;
its "Remaining" note — gallery homotopy and simple-transitivity proofs remain draft obligations — is the authoring burden carried by
`lem-cg-affine-generic-gallery-paths-and-disk-moves` and `thm-cg-affine-alcove-transitivity-presentation-and-length`), current plan, gate tools and the published suppliers read below.

## 2. Plan vs design

`research/plan-spec.json` order 1764 (CG-19) and 1765 (CG-19-B) agree with the dispatch and the design on id, kind,
category, title, companion, requires and order; both plan entries carry **empty `items` arrays**, so the design file is the only
item-level source and there is **no plan/design conflict to record**. The design's five local supplier contracts
(`def-cg-affine-root-hyperplane-reflection-and-alcove`, `lem-cg-affine-reflection-identities-and-local-finiteness`,
`lem-cg-highest-root-and-fundamental-alcove`, `lem-cg-affine-generic-gallery-paths-and-disk-moves`,
`thm-cg-affine-alcove-transitivity-presentation-and-length`) are all present; the repaired gallery-disk route of the
independent audit is preserved (no bounded-inequality shortcut). The binding owner direction's "keep the richest sound promised
claims / no empty scaffold contracts / definitions get well-definedness justifiers" is respected.

Two local suppliers were added beyond the design's five, because the repaired route needs facet/type bookkeeping and
rank-two residues before the presentation theorem:

| Item | Role |
|---|---|
| `lem-cg-affine-alcove-separation-and-facet-types` (A, level 3) | separation by one wall, triangle identity, trivial affine stabiliser of the fundamental alcove, well-defined facet type map, panel rules (needed by the disk-move calculus and by both B examples) |
| `lem-cg-affine-point-stabilizers-and-vertex-residues` (A, level 10) | finiteness/generation of point stabilisers, the local link, vertex types, rank-two boundary words trivial in the abstract group (the codimension-two input to the disk-move calculus) |

The B page realises the four promised companion behaviours: A1 line geometry and translations; A2/B2 alcove shapes and corner
data; root vs coroot translation lattices (two conventions); extended affine Weyl group and non-trivial alcove stabilisers.

## 3. Manifest inventories and dependency levels

A page (7 items): `def-...` 0 · `lem-...` identities/local finiteness 1 · highest root/fundamental alcove 2 ·
separation/facet types 3 · point stabilizers/vertex residues 10 · generic galleries/disk moves 11 ·
transitivity/presentation/length 16.
B page (4 items): root vs coroot lattices 2 · A1 line 4 · A2/B2 corner data 13 · extended affine group 13.

Levels use the in-run rule (published and other out-of-run suppliers do not raise a level). Step 3b removed the B2 example's unused
`def-full-euclidean-lattice-and-covolume` dependency, so its level is 2 rather than the scaffold's 3; the item and manifest agree.
The latest run-wide `item-dependency-levels check` has **no batch-24 mismatch** and six level mismatches in other batches:
`thm-cg-cone-cat-equivalence-and-polyhedral-link-criterion`, `thm-cg-compact-local-cat-one-short-circle-criterion`,
`thm-cg-affine-gram-classification-and-euclidean-realization`, `ex-cg-a-tilde-2-radical-vector-and-affine-slice`,
`ex-cg-b-tilde-versus-c-tilde-diagrams`, and `ex-cg-indefinite-coxeter-form-is-not-affine`. No pair-local cycle exists.

## 4. Repairs and checks made during construction

1. **B-page suppliers are leaves.** Early deps on the batch-2 *examples* page (`ex-hh-finite-dihedral-reduced-words`,
   `ex-hh-exchange-deletion-on-a-nonreduced-word`) were removed — a dep must never point into a B/examples page
   (`content-policy` rule `batch-b-leaf-target`) — and replaced by the batch-2 **A-page** items
   `lem-hh-dihedral-root-recurrence-and-root-sign`, `thm-hh-coxeter-exchange-deletion-and-faithfulness`,
   `thm-hh-matsumoto-reduced-word-theorem`, `thm-hh-parabolic-minimal-representatives-and-length-additivity`. The one stale
   `[[ex-hh-...]]` link left in a strategy paragraph was rewritten to the A-page supplier. Whole-run
   `content-policy --manifest-only` passes with 0 errors / 0 warnings.
2. **Design contract restored in A6.** The design contract for `lem-cg-affine-generic-gallery-paths-and-disk-moves` begins
   "Prove Q and Q∨ discrete full-rank lattices from simple-root/coroot bases"; the first draft omitted it. Clause **(0)** was
   added: `α_s^∨` is a positive multiple of the simple root `α_s`, hence a real basis of `E`, and the coordinate map
   `T: R^S → E`, `m ↦ Σ m_s α_s^∨` is a topological isomorphism carrying the discrete lattice `Z^S` onto `Q^∨` (and the same
   for `Q`), so both are discrete full-rank subgroups of `E` meeting every bounded set in finitely many points. New published
   suppliers: `thm-coordinate-map-for-a-finite-dimensional-normed-space`,
   `def-topological-isomorphism-of-normed-spaces`,
   `thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates`,
   `def-coroot-and-dual-root-system`, `def-linear-basis`. Step 3b then replaced this supplier-based discreteness proof with a
   local dual-basis coordinate bound, removing `lem-discrete-subgroups-of-real-vector-spaces-are-lattices` from the current item.
   Its level remains 11 because item 6 is the highest in-run dependency.
3. **Inadequate dependency repaired in the B example `ex-cg-root-versus-coroot-translation-lattices`.** The first draft declared
   `thm-lagrange` (`|G| = [G:H]|H|` for **finite** `G`) for the index `[Q:Q^∨] = 2` and the covolume comparison — a hypothesis
   mismatch, since `Q` and `Q^∨` are infinite free abelian groups. The example now declares
   `cor-index-of-a-full-rank-integer-sublattice-is-the-absolute-determinant` and `def-index` for the index calculation. Step 3b
   defined covolume locally as basis-parallelogram area, proved the displayed determinant calculation, and removed the unused
   `def-full-euclidean-lattice-and-covolume` dependency. The resulting level is 2.
4. **Declared use made explicit in A7.** The reducible-system clause of the length formula (`design: "reducible systems use
   products"`) now names `thm-hh-parabolic-minimal-representatives-and-length-additivity` (2)–(3) in the strategy text, so the
   declared cross-batch edge has a visible use.
5. Dependency adequacy was checked against the actual statements of the load-bearing suppliers read in full text
   (e.g. `def-reduced-crystallographic-euclidean-root-system` gives positivity and crystallographic integrality;
   `def-coroot-and-dual-root-system` gives `α^∨ = 2α/(α,α)`; `prop-highest-root-exists-and-is-unique-in-an-irreducible-finite-root-system`;
   `thm-the-weyl-group-acts-simply-transitively-on-weyl-chambers`; batch-2 `def-hh-coxeter-matrix-word-group-and-length`,
   `lem-hh-dihedral-root-recurrence-and-root-sign`, `thm-hh-coxeter-exchange-deletion-and-faithfulness`,
   `thm-hh-matsumoto-reduced-word-theorem`, `thm-hh-parabolic-minimal-representatives-and-length-additivity`;
   batch-21 `lem-cg-integer-pairings-and-allowed-dihedral-labels`, `thm-cg-crystallographic-finite-type-and-lattice-stability`).
   All 63 unique dependency IDs resolve: 49 published items on disk (status `published`), 7 in-run items of other batches
   (batch 2: five; batch 21: two) and the 7 batch-24 items themselves; no missing, circular or forward edge; `dependency_level` labels match the computed values.
   Declared-but-textually-unlinked background deps exist in this batch exactly as in the other batches of the run (30–65 per
   batch); Step 3 must use each declared dep or drop it — no tool flags unused declarations at Step 1.

## 5. Sources and coverage

Coverage file: A page 9 sources, B page 4 sources (13 entries, 9 unique URLs): Morgan (Columbia Lecture XII and IX, full text),
Magyar arXiv:0705.3826 (author survey), McCammond et al. (Trans. AMS), Perrin (lecture notes), Aguiar–Petersen (FPSAC),
Davis (author manuscript of the book), Knapp (author-hosted book, Chapter II), Vogan (MIT notes) for A; Morgan, McCammond et al.,
Magyar, Knapp for B. Two independent treatments per A page are included (a monograph/book plus lecture notes and/or a research
paper). Every harvested result has a disposition (`inline` with an item ID, `included`, `already-published`, or `out-of-scope`
with a specific reason — e.g. the torus/π₁ material and the affine weak order are out of scope for this pair).

- Source-history correction: an early draft carried the wrong arXiv id `0709.0707` (a convex-bodies paper); the manifest and
  coverage now cite `https://arxiv.org/pdf/0705.3826` (Magyar, *Notes on Schubert classes of a loop group*). No stale
  `0709.0707` string remains.
- `source-fetch-check --stamp` stamped the added Morgan Lecture IX source; the current batch gate verifies **13/13 sources**
  (0 documented drops).
- `url-sweep` scoped to this batch: **8/8 live, 0 failed** (output `research/frontier-42-coxeter-32-batch-24-url-liveness.json`).
  The run-level liveness file is engine-owned; it is left alone by this batch.
- No source drop and no `source_resolution` escalation was needed.
- Advisory: `coverage-checklist` reports `coverage-low-yield` for the A page (7/40 harvested results
  scaffolded). This is deliberate — the design's closure for this pair is 7 A items, and the declined rows are recorded with
  reasons (out of scope for this pair/track). Alpha should confirm the declines, per the tool's instruction.

## 6. Cross-batch dependency input

`research/frontier-42-coxeter-32-batch-24.cross-batch-dependencies.json` contains six current review rows (four item, two page),
all `status: open` with substantive evidence (required claim, hypotheses, use location, adequacy):
items A5, A6, A7 → batch-2 `def-hh-coxeter-matrix-word-group-and-length`; A5 → batch-21
`lem-cg-integer-pairings-and-allowed-dihedral-labels`; page rows → batch-21
`crystallographic-root-lattices-and-weyl-group-interfaces` and batch-4 `real-forms-and-reflection-geometry` (the latter is a
page-level `requires` edge with no item-level consumer; Step 3 should confirm the interface covers the hypotheses used or narrow it).
The unified ledger currently contains the same six batch-24 edges and no orphaned batch-24 review. The gate form
`refresh --require-reviewed` fails **run-wide only** because other batches have not yet supplied their inputs
(at the time of writing, unreviewed batches: 16, 19, 20, 25, 27, 28, 29, 30, 31, 32); this is outside batch-24 scope.

## 7. Readiness records

All 11 items carry a `ready` Step-1 record (`node tools/step1-decisions.mjs check --run frontier-42-coxeter-32` lists **no
batch-24 item** among the open work; the open items are another batch's in-flight scaffolds). Each record lists the examined
dependency IDs (manifest `deps`), hypothesis checks and evidence. Five records (A6, A7, `ex-cg-a2-and-b2-...`,
`ex-cg-root-versus-...`, `ex-cg-extended-...`) were re-recorded after the repairs in §4. Step 1 records proof *design*
closure only; no proof is claimed to be written, and Step 3 owns authoring and review.

## 8. Gate results (latest pair pass)

| Check | Result |
|---|---|
| Explicit-path `precheck` | 11 item files, 10 proof-bearing sections checked, **0 failures** |
| Explicit-path `rendercheck` | 13 item/page files, **0 errors, 0 warnings** |
| `content-policy` batch 24 | 11 items, **0 errors, 0 warnings** |
| Strict batch-24 proof contracts | 10 proof-bearing items, **0 errors, 0 warnings** |
| `manifest-deps` batch 24 | 11 items, **0 errors** |
| `coverage-checklist` batch 24 | 2 pages, 50 harvested results, **0 errors, 1 advisory warning** (`coverage-low-yield`, 7/40 on A) |
| `source-fetch-check` batch 24 | **13/13 sources fetch-verified and resolved** |
| Focused `depcheck`, `extcheck`, `fwdcheck`, `depsource`, `pathcheck`, `prosecheck` | no unresolved dependencies, no errors; `prosecheck` has 0 warnings after the final wording repair |
| `item-dependency-levels check --run` | no batch-24 mismatch; six errors remain in the other items listed in §3 |
| `validate-plan research/plan-spec.json --run frontier-42-coxeter-32` | nine errors remain, all outside batch 24: two B-leaf and seven undeclared-prerequisite findings listed in the Step-3b report |
| `step3-decisions check --phase scope` | this pair is current/sufficient; three other pair scopes still need review |

## 9. Unresolved findings for the owner / Step 3

1. **Open authoring escalations:** item 6 uses draft batch-2 `def-hh-coxeter-matrix-word-group-and-length` at step 5.1 and draft
   batch-21 `lem-cg-integer-pairings-and-allowed-dihedral-labels` at step 2.2. Item 7 uses the draft Coxeter definition in its
   Statement, Fact F8 and steps 1.6, 2.1, 3.1, and uses owner-held item 6 at steps 1.5, 1.6, 2.1. Item 8 uses item 7 at
   steps 1.3, 3.1, 5.1 and the draft Coxeter definition in Fact F5 and steps 3.1–3.2. B item 9 uses item 6 in step 4.1 and
   item 8 in Fact F6/steps 3.1, 4.1, 5.1; B item 10 uses item 8 in Fact F7/steps 3.1, 4.1. Keep those decisions escalated
   until suppliers are authored and actual uses reconciled.
2. **Page-level prerequisites:** `crystallographic-root-lattices-and-weyl-group-interfaces` (batch 21) and
   `real-forms-and-reflection-geometry` (batch 4) remain open in the page-level dependency input. Their current item interfaces
   are drafts; retain both edges until the owners reconcile them.
3. **Coverage advisory:** the low-yield 7/40 A-page result is the same reviewed, deliberate scope decision from Step 3a; all
   declined rows carry reasons. The current scope receipt is refreshed.
4. **Run-wide validator errors:** the six level mismatches and nine `validate-plan` errors concern other pairs. No batch-24
   item or prerequisite edge is reported by those checks.
5. **Published content:** no defective published library item was confirmed. Morgan Lecture XII Corollary 2.2 remains a
   confirmed external-source error: its “at most $2r$ chambers” bound fails for the A3 central arrangement (six walls, 24
   chambers); item 1's local $2^N$ sign-pattern argument does not use it. All assigned proofs are choice-free.
