# Frontier-41-ha-dt-29 — Beta batch 21 scaffold notes

Pair: `foliation-holonomy-and-the-holonomy-groupoid` (A, order 573) /
`foliation-holonomy-and-the-holonomy-groupoid-examples` (B, order 574), category
`differential-topology`.

Owned outputs written: `research/frontier-41-ha-dt-29-batch-21.pages.json`,
`research/frontier-41-ha-dt-29-batch-21.coverage.json`, the 29 readiness records
`research/frontier-41-ha-dt-29-step1-<item>.json` (all `ready`), and the empty
consumer input `research/frontier-41-ha-dt-29-batch-21.cross-batch-dependencies.json`.
No published content, shared plan, engine state or verdict was edited.

## 1. Design and plan reconciliation

- Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the dispatch, the full DT-29
  design block at `research/plan-differential-topology-track.md` L1455–1495, its
  harvest rows H137–H141 (L1854–1858), §8 source register (L230–247), and
  `research/plan-spec.json`. The design and the spec agree on page ids, order,
  category, companion and the six declared prerequisites; the A page is order
  573 with no selected in-run A prerequisite, so batch 21 has no in-run supplier
  batch and no cross-batch consumer edge of its own.
- `research/frontier-41-ha-dt-29-alpha-step1-drift.md` records VERDICT
  `no-drift` for this page ("Remaining uncertainty: none about prerequisite
  closure; the non-Hausdorff caveat is retained"), matching what construction
  found. No conflict between design, spec and owner direction was found.
- `research/frontier-41-ha-dt-29-owner-authoring-direction.md` has no clause
  specific to DT-29 (its DT clauses concern DT-19's inherited definitions and the
  §12 orientation leaves); it was read before construction and constrains nothing
  in this pair beyond the normal rules.

## 2. What was built (29 items: 23 A + 6 B)

All design items were kept with their ids, kinds and proof roles. Six support
items and one well-definedness lemma were added ahead of their consumers, because
the design's list alone does not close:

| added item | why it is needed |
| --- | --- |
| `def-leafwise-path-and-leafwise-homotopy` | the domain of every holonomy item; the design's "path in a leaf" was undefined on this page |
| `def-germ-of-a-local-diffeomorphism-at-a-point` | the design's germs of transverse diffeomorphisms have no published carrier |
| `lem-germs-of-local-diffeomorphisms-form-a-group` | the holonomy group needs the group of germs (well-definedness certificate of the previous definition) |
| `lem-the-deck-group-of-a-covering-acts-by-a-covering-space-action` | the holonomy-cover and suspension constructions both need the deck action to be a covering-space action |
| `lem-the-covering-of-a-leaf-associated-to-the-holonomy-kernel-exists` | the holonomy cover is an existence statement, not a definition; the design gives only the definition |
| `lem-holonomy-classes-form-a-groupoid-congruence` | well-definedness certificate of the holonomy-groupoid definition (composition descends to holonomy classes) |
| `def-map-transverse-to-a-regular-foliation` | the pullback proposition's hypothesis (transversality of a *map* to a distribution) had no carrier; item 1 only covers submanifolds |

Dependency levels (computed by the same algorithm as
`tools/item-dependency-levels.mjs`, in-run deps only, recomputed after the final
edit): A page 0,0,0,1,1,2,3,3,4,0,5,6,1,4,5,6,0,1,0,1,4,5,5; B page
5,7,7,7,2,8. Maximum level 8. No cycle.

Notable interface choices recorded for Step 3:

- Item 12 (`prop-quotient-foliation-under-a-free-proper-foliated-action`) is
  stated for a **covering-space action of a discrete group**, not for a general
  free proper Lie-group action. The design's phrase "under the stated
  regularity" permits this; the general Lie-group form needs the
  quotient-manifold/slice theorem, which is not in this page's declared closure
  (see §6 escalation 1).
- Item 20/21 (`def-suspension...`, `prop-suspension-holonomy...`) use the
  library's deck-group convention (a loop class acts by the deck transformation
  moving the chosen fibre point to the lifted endpoint). With that convention the
  suspension holonomy germ of a base loop is the germ of `rho([gamma])^{-1}`, not
  `rho([gamma])`; the sign is stated in the item so authors do not flip it. For
  leaf *loops* the relevant class lies in the stabiliser `K_y`, and the holonomy
  representation of the leaf `L_y ~ Btilde/K_y` is the restriction of
  `rho(-)^{-1}`.
- Item 23 is planned as a **recorded, not proved here** remark
  (`proved_here: false`) with `external_dependency` to the Meinrenken notes
  (Proposition 2.9 + Remark 2.10, Exercises 2.2–2.4) and the Leiden groupoid
  section. The page's groupoids are set-theoretic, so nothing about Hausdorffness
  is asserted or proved locally; this is the design's "record the caveat without
  entering C*-algebras" clause.
- The Kronecker example treats the isotropy statement (trivial holonomy group of
  every leaf) **and** the fact that non-closed leaf paths over a base loop can
  still have non-trivial holonomy germs (item 21). The two are different objects
  and are kept apart: `pi_1` of an irrational leaf is trivial, while the leaf path
  over a base loop is not a loop in the leaf.

## 3. Source ledger

Two independent treatments were read for the A page: Calegari's monograph
(primary construction and holonomy transport) and Meinrenken's full lecture-note
set (transversals, monodromy/holonomy groups and groupoids, non-Hausdorffness).
The Leiden seminar notes (the design's "L", itself MMF-derived corroboration) were
also read in full over the relevant sections and corroborate every construction;
they are **not** counted as an independent second treatment, exactly as the design
says.

| key | treatment | URL | exact locators read |
| --- | --- | --- | --- |
| CC | Danny Calegari, *Foliations and the Geometry of 3-Manifolds* (monograph) | https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf | §4.2, printed pp. 140–143 (PDF pp. 149–152) in full; §4.3, printed pp. 144–147 (PDF pp. 153–156), Examples 4.7–4.10 |
| MEN | Eckhard Meinrenken, *Lie Groupoids and Lie Algebroids*, MAT1341 Fall 2017 (lecture notes) | https://www.math.toronto.edu/mein/teaching/MAT1341_LieGroupoids/Groupoids.pdf | §2.1–§2.3, printed pp. 10–14 (Examples 2.1–2.5; Definitions 2.6–2.8; Proposition 2.9; Remark 2.10; §2.4 appendix) |
| LEI | Leiden NCG seminar, *Noncommutative Geometry of Foliations* (seminar notes, MMF-derived) | https://ncg-leiden.github.io/foliation2023/foliation_notes.pdf | §1.3, printed pp. 8–10; §2.1, printed pp. 11–14; §3.2, printed pp. 20–21 |

MMF (Moerdijk–Mrčun, *Introduction to Foliations and Lie Groupoids*, Cambridge
2003), the design's first-named treatment, **could not be retrieved as full
text**. Recorded with the initial failure plus five recovery retries and three
autonomous searches in the coverage drop record: the publisher landing page and
the DOI (which redirects to it) carry only the description and table of contents;
the chapter page carries only an abstract; the author-hosted errata sheet is one
page; Google Books serves a metadata stub; archive.org returns a search shell; the
searches found no author-hosted or open copy. A `source_resolution` with
`status: dropped`, `decided_by: step-1-scaffolder`, `confidence: certain` is
attached to that source entry on both pages, with one alternative argument per
design result (13 on the A page, 6 on the B page) pointing at the fetch-verified
treatments. Every design harvest heading H137–H141 is covered by those
treatments; no claim, hypothesis or proof route was dropped or weakened. Item
`source_resolution` rows do not silently retire the MMF citation: the manifest
item references cite only CC/MEN/LEI (sources actually read), and this note keeps
MMF's design locators as history for the owner.

Checks actually run (all from the repo root):

- `node tools/source-fetch-check.mjs --coverage research/frontier-41-ha-dt-29-batch-21.coverage.json --stamp`
  → `6/6 source(s) fetch-verified (6 newly stamped)`; check mode → `8/8 source(s)
  resolved (2 documented drops; not fetch stamps)`, exit 0.
- `node tools/url-sweep.mjs --coverage ... --recover --fail-on-dead` (output to a
  temporary path, not the engine's artifact) → `3/3 live; 0 failed` and
  `5 citation decision(s) (2 documented source drops)`, exit 0.
- `node tools/source-backing.mjs --coverage ... --liveness <temp>` (reharvest
  plan to a temporary path) → `49 authored result(s) ... every one still backed
  by an openable source or documented alternative argument`, exit 0.
- `node tools/coverage-checklist.mjs research/frontier-41-ha-dt-29-batch-21.coverage.json --require-destination`
  → `2 page(s), 131 harvested result(s), 0 error(s), 0 warning(s)`, exit 0.

## 4. Dependency accounting and checks

- `node tools/manifest-deps.mjs research/frontier-41-ha-dt-29-batch-21.pages.json`
  → `29 item(s), 0 normalized, 0 error(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-41-ha-dt-29-batch-21.pages.json`
  → `29 scoped item(s), 0 error(s), 0 warning(s)`.
- A closure check against `plan-spec.json` requires every published dependency of
  every item to be homed on a page in the transitive `requires` closure of the
  consumer page (the `undeclared-prereq` rule). Result: **0 dependencies outside
  the closure** (all 29 items, all deps resolved either in-batch or on published
  pages).
- `node tools/item-dependency-levels.mjs check --run frontier-41-ha-dt-29` at the
  time of writing reports errors **only** for other batches' still-empty page
  shells (batches 1–20 and 22–29 were still in flight); no batch-21 item has a
  level or deps error. The same algorithm run over batch 21 alone reproduces the
  labels recorded in the manifest.
- `node tools/step1-decisions.mjs check --run frontier-41-ha-dt-29`: all 29
  batch-21 items are closed (`ready`); the run-wide check is not yet closed
  because other in-flight batches still have missing or stale records (their authors
  are editing manifests concurrently).
- `node tools/extcheck.mjs` → exit 0; the listed recorded-not-proved warnings are
  all outside this batch.
- `node tools/validate-plan.mjs research/plan-spec.json` → exit 0 (batch-21 items
  are not yet spliced; the undeclared-prereq check above is the relevant local
  check).
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-41-ha-dt-29`
  → refreshed. Batch 21 declares no cross-batch dependency of its own, so its
  consumer input is `[]` (valid: no such dependencies). The engine records two
  supplier-side page edges, batches 22 and 23 consuming this A page; their
  reviews are the consumers' Step-3b obligation. `--require-reviewed` currently
  fails only on other batches' missing inputs.

## 5. Readiness records

All 29 items were recorded `ready` in dependency-level order with their examined
dependency IDs, the published suppliers each strategy rests on, and the
fetch-verified source locators. No item was recorded `escalated`: every item has a
complete proof strategy whose prerequisites are met (published carriers for the
manifold/foliation/covering theory) or are earlier batch-21 items.

## 6. Escalations and residual uncertainty (honest)

1. **General free proper quotient foliation.** The design's
   `prop-quotient-foliation-under-a-free-proper-foliated-action` is scaffolded for
   discrete covering-space actions. A general free proper Lie-group action would
   need the quotient-manifold/slice theorem, whose carrier
   (`lie-subgroups-actions-and-homogeneous-spaces`) is **outside** this page's
   declared `requires` closure; adding the general form needs either a new
   prerequisite pair or a plan-level `requires` amendment. Not blocking: no
   DT-29 item and no declared consumer needs the general form.
2. **MMF full text unavailable** (paywall; documented drop). The design's
   locators for MMF remain unverified by this worker. The accessible treatments
   cover every design result, and the drop record is complete (initial failure +
   five retries, searches, alternatives). If the owner prefers item-level MMF
   locators, that is an owner/plan reconciliation, not a mathematical gap.
3. **Item 23 is recorded, not proved** (`proved_here: false`). Non-Hausdorffness
   of the monodromy/holonomy groupoids is a source statement here; constructing
   the étale topology on the arrow space is deliberately out of this page's
   scope. Step 3 must author the `external_dependency` record
   (`source_url` = the Meinrenken notes URL, `exact_statement`,
   `local_proof_attempt`, `necessity`) or the item will fail policy.
4. **AC_ω propagation.** The manifold/distribution foundations of this track
   assume Countable Choice (`def-countable-choice` appears in the deps of every
   proof item whose argument traverses the leaf-existence or distribution
   machinery); item statements carry the assumption accordingly. Choice-free
   items are the purely covering-theoretic ones (e.g. the deck-action lemma).
5. **Published defects.** No defect was found in the published suppliers read for
   this batch (the Frobenius page's foliation items, the covering-space page, the
   smooth-manifold/tangent/bundle pages, the Sard/transversality vocabulary, the
   homotopy page). Their statements and proof strategies were read at the level
   needed to certify the dependency interfaces above; this is a Step-1
   interface check, not the Step-3/Step-5 review.
6. **Conventions to watch in Step 3.** (a) the `rho([gamma])^{-1}` sign of item
   21; (b) item 23's `proved_here: false` shape; (c) item 9's change-of-transversal
   conjugacy clause (Leiden Proposition 2.4(3)) should be expanded in the proof
   of the definition's well-definedness discussion; (d) the `justified_by`
   pairings planned here are `def-germ-of-a-local-diffeomorphism-at-a-point`
   ← `lem-germs-of-local-diffeomorphisms-form-a-group` and
   `def-holonomy-groupoid-of-a-foliation` ←
   `lem-holonomy-classes-form-a-groupoid-congruence`.


## ACω dependency-contract audit (2026-10-05)

Use the supplier-first audit at `research/frontier-41-ha-dt-29-ac-omega-contract-audit.md`. Batch 21 has 10 affected item contract(s): cex-nontransverse-pullback-of-a-foliation-can-change-rank, cex-two-nonhomotopic-leaf-loops-can-have-the-same-holonomy-germ, def-local-transversal-to-a-regular-foliation, def-map-transverse-to-a-regular-foliation, ex-flat-bundle-foliation-from-a-linear-representation, ex-kronecker-foliation-of-the-torus-has-trivial-leaf-holonomy, ex-mobius-band-central-leaf-has-reflection-holonomy, ex-suspension-of-a-circle-diffeomorphism, rem-holonomy-and-monodromy-groupoids-need-not-be-hausdorff, rem-holonomy-is-a-germ-not-a-globally-defined-return-map. The audit records the exact smooth-distribution/coorientation/holonomy use, the axiom supplier, downstream propagation, and omitted atlas-only or pure-planar nodes. Coverage dependency projections and affected cross-batch rows were synchronized; receipts, gates and autopilot state were not refreshed.
## Owner-local readiness repair (2026-10-05)

The nontransverse-pullback counterexample had false preimage and differential calculations. Its repaired witness is f(t)=(0,t²) into the horizontal foliation on R²: dfₜ(v)=(0,2tv), so the inverse-image tangent space is zero for t≠0 and all T₀R at zero. Rank is nonconstant. The original counterexample inference and pair scope are retained; provenance records the locally altered witness, and the coverage rationale distinguishes the source's transverse construction from this direct computation. There are no run-local consumers of this B item.

The pullback proposition's former extension of arbitrary df(X) along a noninjective map to an ambient vector field was invalid. Its strategy now uses transverse foliation coordinates y and the submersion y∘f: its kernel is exactly the inverse-image distribution, its local levels are integral plaques, and maximal plaque components give the pulled-back leaves. The proposition's statement is unchanged, so consumers retain the same exact output interface. Readiness is construction scaffolding only; no independent proof approval is recorded.

### Exact current Step-1 receipt refresh inventory

22 current receipts were recorded through `tools/step1-decisions.mjs record` in supplier-first order. Existing hash-current rows were preserved. This records construction readiness, not independent proof certification.

- `def-local-transversal-to-a-regular-foliation` — `ready`; `owner: false`.
- `lem-a-leafwise-path-determines-a-germ-of-transverse-diffeomorphism` — `ready`; `owner: false`.
- `lem-holonomy-germ-is-independent-of-the-foliation-chart-chain` — `ready`; `owner: false`.
- `thm-holonomy-depends-only-on-leafwise-homotopy-relative-endpoints` — `ready`; `owner: false`.
- `lem-holonomy-respects-path-concatenation-and-reversal` — `ready`; `owner: false`.
- `def-holonomy-representation-and-holonomy-group-of-a-leaf` — `ready`; `owner: false`.
- `lem-the-covering-of-a-leaf-associated-to-the-holonomy-kernel-exists` — `ready`; `owner: false`.
- `def-holonomy-cover-of-a-leaf` — `ready`; `owner: false`.
- `def-holonomy-groupoid-of-a-foliation` — `ready`; `owner: false`.
- `lem-holonomy-classes-form-a-groupoid-congruence` — `ready`; `owner: false`.
- `prop-isotropy-of-the-holonomy-groupoid-is-the-leaf-holonomy-group` — `ready`; `owner: false`.
- `def-map-transverse-to-a-regular-foliation` — `ready`; `owner: false`.
- `prop-pullback-foliation-under-a-transverse-map` — `ready`; `owner: false`.
- `prop-suspension-holonomy-is-the-germ-of-the-monodromy-action` — `ready`; `owner: false`.
- `rem-holonomy-is-a-germ-not-a-globally-defined-return-map` — `ready`; `owner: false`.
- `rem-holonomy-and-monodromy-groupoids-need-not-be-hausdorff` — `ready`; `owner: false`.
- `ex-kronecker-foliation-of-the-torus-has-trivial-leaf-holonomy` — `ready`; `owner: false`.
- `ex-mobius-band-central-leaf-has-reflection-holonomy` — `ready`; `owner: false`.
- `ex-suspension-of-a-circle-diffeomorphism` — `ready`; `owner: false`.
- `ex-flat-bundle-foliation-from-a-linear-representation` — `ready`; `owner: false`.
- `cex-nontransverse-pullback-of-a-foliation-can-change-rank` — `ready`; `owner: false`.
- `cex-two-nonhomotopic-leaf-loops-can-have-the-same-holonomy-germ` — `ready`; `owner: false`.

## Step-3b audit checkpoint — thm-holonomy proof revision (2026-10-06)

- Owned pair: `foliation-holonomy-and-the-holonomy-groupoid` (+ `-examples`),
  batch 21, 29 items (23 A + 6 B). Entry state: all 29 files and both pages
  authored by the failed predecessor dispatch; no Step-3b receipts.
- Item revised: `thm-holonomy-depends-only-on-leafwise-homotopy-relative-endpoints`
  (level 3). Claim and conventions unchanged: for a leafwise homotopy
  relative to endpoints from `a` to `b` and transversals `T` at `x`, `T'` at
  `y`, one has `h_a(T',T) = h_b(T',T)` as germs, so the germ depends only on
  the leafwise homotopy class relative to endpoints and the endpoint
  transversals.
- Defects repaired in this dispatch:
  1. The inherited "chart-strip" proof was invalid: a full strip
     `[s_{j-1},s_j] x [0,1]` can have diameter `>= 1`, so a Lebesgue number
     for the cover by chart preimages need not put any strip into one chart.
  2. The first replacement described the staircase family as the boundary
     paths of the unions of the first `l` cells ordered by increasing `j+k`;
     that family cannot produce consecutive single-cell L-route interchanges
     (on a 2x2 grid the only first interchange adds `R_{2,1}`, not `R_{1,1}`;
     checked by direct enumeration). The final text instead uses the monotone
     lattice paths from `sigma_0 = E^m N^n` to `sigma_{mn} = N^n E^m` obtained
     by `mn` adjacent interchanges `EN -> NE`.
- Final proof structure (4 steps): 1.1 the homotopy image lies in the leaf
  `L` through `x` (so `H o c` is leafwise for every curve `c` in the square);
  2.1 grid with every cell mapped into one foliation chart, staircase family
  of monotone paths, end paths `const_x * b` and `a * const_y`; 2.2 for one
  interchange the two routes have images in the cell's chart with endpoints
  in a common plaque, so the same chart chain (cell chart on the middle
  interval) is admissible for both consecutive paths and the composite germ
  is one and the same; 3.1 chain over the interchanges and remove the
  constant segments, whose chart transport is the identity germ.
- Facts/contract: F1 `def-leafwise-path-and-leafwise-homotopy`;
  F2 `lem-holonomy-germ-is-independent-of-the-foliation-chart-chain`;
  F3 `thm-lebesgue-number-lemma`; F4 (new, the definitional construction)
  `lem-a-leafwise-path-determines-a-germ-of-transverse-diffeomorphism`.
  Citation uses: F1 -> 1.1, 2.1, 3.1; F2 -> 2.2, 3.1; F3 -> 2.1;
  F4 -> 2.2, 3.1. Derivations rebuilt for 1.1/2.1/2.2/3.1; boundary
  worksheet rewritten (empty, zero not-applicable; one, degenerate,
  endpoints, AC_omega checked; iff cases not-applicable).
- Dependencies: `lem-a-leafwise-path-determines-a-germ-of-transverse-diffeomorphism`
  added to the item frontmatter `deps` and to the batch-21 manifest row in the
  same position; the item's dependency_level stays 3 (max dep level is still
  2) and `item-dependency-levels.mjs check --run frontier-41-ha-dt-29` reports
  no batch-21 item.
- Checks on the final bytes: `proof-layout` 29 items / 90 steps / 0 defects;
  `precheck` 18 checked / 0 failing; `rendercheck` 31 files OK (repo-wide
  25837 files OK); `content-policy` 29 items 0/0; `manifest-deps` 0 errors;
  `proof-contract --strict` 0 errors / 0 warnings; `citation-fidelity` no
  missing quotes; `boundary-audit` no templates or contradictions;
  `coverage-checklist --require-destination` 2 pages / 131 results / 0/0;
  `source-fetch-check` 8/8 resolved (2 documented drops); `finite-smoke` 0;
  `risk-report` 0 errors / 29 routed; `validate-plan` exit 0; `extcheck`,
  `depsource`, `prosecheck` exit 0. Run-wide `fwdcheck`, `depcheck`,
  `item-dependency-levels`, `scope-decisions` still fail only on other
  in-flight pairs (no finding names a batch-21 item or page).
- Receipts: the thm receipt re-recorded `repaired` (confidence 1), and the 14
  transitive consumers (whose input hashes include the thm bytes) re-recorded
  — accept for 10, repaired for 4 (`def-holonomy-representation...`,
  `ex-kronecker...`, `ex-mobius-band...`, plus the thm). `step3-decisions
  check --phase final` reports 0 open rows among the 29 owned ids; `--phase
  scope` shows the pair closed.
- Next action: Steps 5-8 independent audit; the cell-interchange argument of
  the theorem and the new F4 dependency are the first things to re-read.
