# Step 3b pair report — foliation-holonomy-and-the-holonomy-groupoid

- Run: `frontier-41-ha-dt-29`, batch 21, dispatch label
  `step3b-pair-foliation-holonomy-and-the-holonomy-groupoid-6b96f6e858bfc4ed`
  (successor of the failed dispatch `...-17c41061d8729bf5`, which authored most
  item bytes on 2026-10-05 14:02–14:50 but ended with `lastExitOk: false`
  before recording any decision).
- A page: `foliation-holonomy-and-the-holonomy-groupoid` (order 573,
  `differential-topology`, 23 items).
- B page: `foliation-holonomy-and-the-holonomy-groupoid-examples` (order 574,
  6 items). Batch 21 contains only this pair, so no sibling-pair rows share
  these files.
- Status: **all 29 items and both pages authored, audited, checked and
  decided; no open item obligations.** Run-level gates still fail on other
  in-flight pairs (see Open obligations).

## Entry audit (what this dispatch inherited)

All 29 item files and both library pages existed on disk, untracked, with
authoring performed by the failed predecessor; no Step-3b receipt existed.
This dispatch therefore re-audited every item against its manifest statement,
the DT-29 design block (`research/plan-differential-topology-track.md`
lines 1455–1497), the Step-3a scope review and its report, and the cited
suppliers, and repaired the defects found (below). Every statement and every
declared dependency of the scaffold is preserved, one level-neutral
definitional dependency edge was added to the theorem (see below), and no
claim was narrowed.

## Owned IDs, dependency order, decisions

| # | id | level | decision | repair in this dispatch |
|---|---|---|---|---|
| 1 | def-germ-of-a-local-diffeomorphism-at-a-point | 0 | accept | — |
| 2 | def-leafwise-path-and-leafwise-homotopy | 0 | accept | — |
| 3 | def-local-transversal-to-a-regular-foliation | 0 | repaired | stray `( [[...]])` parenthetical rewritten as `containing x (links) with` |
| 4 | def-map-transverse-to-a-regular-foliation | 0 | repaired | removed the incorrect “specialisation to the inclusion of D in TM” clause |
| 5 | lem-the-deck-group-of-a-covering-acts-by-a-covering-space-action | 0 | repaired | step 4.1 reduced to the sheet argument (duplicate alternative deleted) |
| 6 | prop-quotient-foliation-under-a-free-proper-foliated-action | 0 | accept | coverage alternative deps resynced to the declared deps |
| 7 | def-monodromy-groupoid-of-a-foliation | 1 | accept | — |
| 8 | def-suspension-foliation-of-a-group-action | 1 | repaired | **invalid proper-discontinuity argument replaced** (see below) |
| 9 | lem-a-leafwise-path-determines-a-germ-of-transverse-diffeomorphism | 1 | repaired | product-box precision in step 1.2; unproved refinement clause removed |
| 10 | lem-germs-of-local-diffeomorphisms-form-a-group | 1 | accept | — |
| 11 | prop-pullback-foliation-under-a-transverse-map | 1 | accept | — |
| 12 | lem-holonomy-germ-is-independent-of-the-foliation-chart-chain | 2 | accept | — |
| 13 | cex-nontransverse-pullback-of-a-foliation-can-change-rank | 2 | accept | — |
| 14 | lem-holonomy-respects-path-concatenation-and-reversal | 3 | accept | — |
| 15 | thm-holonomy-depends-only-on-leafwise-homotopy-relative-endpoints | 3 | repaired | **proof rebuilt as the cell-interchange (staircase) comparison; definition item added to deps** |
| 16 | def-holonomy-groupoid-of-a-foliation | 4 | accept | — |
| 17 | def-holonomy-representation-and-holonomy-group-of-a-leaf | 4 | repaired | two-line display formula joined to one source line (rendercheck) |
| 18 | prop-suspension-holonomy-is-the-germ-of-the-monodromy-action | 4 | accept | — |
| 19 | lem-holonomy-classes-form-a-groupoid-congruence | 5 | accept | — |
| 20 | lem-the-covering-of-a-leaf-associated-to-the-holonomy-kernel-exists | 5 | accept | — |
| 21 | rem-holonomy-and-monodromy-groupoids-need-not-be-hausdorff | 5 | accept | (external_dependency record was already authored) |
| 22 | rem-holonomy-is-a-germ-not-a-globally-defined-return-map | 5 | accept | — |
| 23 | ex-kronecker-foliation-of-the-torus-has-trivial-leaf-holonomy | 5 | repaired | step 2.1 quantifier corrected to `w ∈ [0,1)` |
| 24 | def-holonomy-cover-of-a-leaf | 6 | accept | — |
| 25 | prop-isotropy-of-the-holonomy-groupoid-is-the-leaf-holonomy-group | 6 | accept | — |
| 26 | ex-flat-bundle-foliation-from-a-linear-representation | 7 | accept | — |
| 27 | ex-mobius-band-central-leaf-has-reflection-holonomy | 7 | repaired | “circle bundle” corrected to interval bundle over the circle |
| 28 | ex-suspension-of-a-circle-diffeomorphism | 7 | accept | — |
| 29 | cex-two-nonhomotopic-leaf-loops-can-have-the-same-holonomy-germ | 8 | accept | — |

Receipts: `research/frontier-41-ha-dt-29-step3b-review-<item>.json` for all 29,
confidence 1, dependency arrays equal to the manifest `deps`; the refreshed
pair scope receipt is `research/frontier-41-ha-dt-29-step3a-review-foliation-holonomy-and-the-holonomy-groupoid.json`
(sufficient, current hash `fbb16f8c…`). After the final revision of the
theorem (which is inside the input hash of its transitive consumers), 15
receipts were re-recorded: the theorem and its 14 transitive consumers —
`accept` for 11 of them, `repaired` for the theorem and for
`def-holonomy-representation-and-holonomy-group-of-a-leaf`,
`ex-kronecker-foliation-of-the-torus-has-trivial-leaf-holonomy` and
`ex-mobius-band-central-leaf-has-reflection-holonomy`, whose earlier repairs
remain in place.

## Repairs of substance

1. **def-suspension-foliation-of-a-group-action — proper discontinuity.** The
   inherited verification claimed that a compact set meets only finitely many
   sheets over an evenly covered set, arguing from disjointness alone; that
   argument is invalid (a compact set such as `{0} ∪ {1/n}` meets infinitely
   many pairwise disjoint open sets). The claim itself is true, and the item
   now proves it: a compact `C ⊆ B̃` is sequentially compact because the
   manifold `B̃` is first countable; for distinct `γ_n` with `x_n, γ_n x_n ∈ C`
   a convergent subsequence and the local sheet structure force `γ_m(U) =
   γ_n(U)` for all large `m,n`, so `γ_m` and `γ_n` agree on a nonempty open
   set, hence are equal — contradicting distinctness. Freeness, the reduction
   from `B̃ × F` to `B̃`, and the covering-space conclusion are unchanged.
2. **thm-holonomy-depends-only-on-leafwise-homotopy-relative-endpoints.** Two
   defects were repaired. (a) The inherited “chart-strip” proof was invalid:
   the Lebesgue number argument gives only that the *cells* of a fine grid lie
   in charts, and a full strip `[s_{j-1},s_j] × [0,1]` can have diameter
   `≥ 1`, so it need not lie in any chart. (b) A first replacement family
   (“Ω_ℓ = union of the first ℓ cells ordered by increasing `j+k`”) is also
   invalid as a source of consecutive single-cell L-route moves: direct
   enumeration on a 2×2 grid shows the only first interchangeable cell is
   `R_{m,1}` (for instance `R_{2,1}`), never `R_{1,1}`. The final proof uses
   the monotone lattice paths `σ_0 = E^mN^n → … → σ_{mn} = N^nE^m` obtained
   by `mn` adjacent interchanges `EN → NE`; consecutive paths agree outside
   the parameter interval of the interchanged pair, where they run the two
   L-routes around the cell spanned by that pair. Since `H` maps that cell
   into one chart and the cell’s image is connected inside one leaf, both
   routes have images in a single plaque with the same endpoints; hence one
   and the same chart chain — the cell’s chart on the middle interval, common
   outer charts elsewhere — is admissible for both paths, so by the
   definition of the germ the two paths receive one and the same composite
   germ, and by chain independence the same intrinsic germ. Chaining over the
   interchanges compares `P_0 = const_x * b` with `P_{mn} = a * const_y`; the
   constant segments contribute identity germs (their chart transport matches
   equal transverse coordinates at a single point), so `h_a = h_b`. The
   definition item
   `lem-a-leafwise-path-determines-a-germ-of-transverse-diffeomorphism` was
   added to the item deps and to the batch manifest row as the cited
   construction (new fact F4; the item’s level stays 3), and the contract
   citations, step inputs and boundary worksheet were resynced. This
   supersedes both earlier versions of the proof.
3. **lem-a-leafwise-path-determines-a-germ-of-transverse-diffeomorphism.**
   Equal transverse coordinates place `u` and `h(u)` in one level set, and the
   proof now shrinks the chart to a product box (whose plaques are exactly its
   connected level sets) before asserting they lie in one plaque; the clause
   asserting refinement-independence was removed because that is the next
   lemma’s claim, and the now-unused overlapping-plaques fact was deleted.
4. **def-holonomy-representation-and-holonomy-group-of-a-leaf.** The
   `rho_x` display block spanned two source lines; joined to one line (the
   `rendercheck` multiline-display defect). The formula is unchanged.
5. **def-map-transverse-to-a-regular-foliation, def-local-transversal…,
   lem-the-deck-group…, ex-kronecker…, ex-mobius-band…**: the accuracy and
   redundancy repairs listed in the table.
6. **Coverage row repair.** `research/frontier-41-ha-dt-29-batch-21.coverage.json`
   named `prop-a-smooth-map-with-everywhere-smooth-local-inverses-is-a-local-diffeomorphism`
   among the alternative deps of `prop-quotient-foliation-under-a-free-proper-foliated-action`,
   which the item no longer declares; the stale id was removed so the
   alternative’s deps are a subset of the declared deps
   (`coverage-checklist --require-destination`: 2 pages, 131 results,
   0 errors, 0 warnings).

## Checks actually run (all from the repo root, on the current bytes)

- `node tools/proof-layout.mjs items/<29 ids>.md` → `29 items, 90 steps, 0 defects`.
- `node tools/tsx-run.mjs tools/precheck.mts items/<29 ids>.md` → `18 checked, 0 failing`.
- `node tools/rendercheck.mjs items/<29 ids>.md library/differential-topology/foliation-holonomy-and-the-holonomy-groupoid{,-examples}.md`
  → OK, 31 files.
- `node tools/content-policy.mjs research/frontier-41-ha-dt-29-batch-21.pages.json`
  → `29 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/manifest-deps.mjs research/frontier-41-ha-dt-29-batch-21.pages.json`
  → `29 item(s), 0 normalized, 0 error(s)`.
- `node tools/proof-contract.mjs research/frontier-41-ha-dt-29-batch-21.proof-contracts.json --strict`
  → ok, 0 errors, 0 warnings (quote and step-input contracts resynced for the
  edited items).
- `node tools/citation-fidelity.mjs research/frontier-41-ha-dt-29-batch-21.proof-contracts.json --fail-on-missing-quote`
  → no missing quotes, no widening candidates.
- `node tools/boundary-audit.mjs research/frontier-41-ha-dt-29-batch-21.proof-contracts.json --fail-on-contradicted --fail-on-template --json`
  → no templates, no contradictions.
- `node tools/finite-smoke.mjs research/frontier-41-ha-dt-29-batch-21.proof-contracts.json`
  → 0 errors; `node tools/risk-report.mjs research/frontier-41-ha-dt-29-batch-21.proof-contracts.json`
  → 0 errors, 29 items routed.
- `node tools/item-dependency-levels.mjs check --run frontier-41-ha-dt-29`
  → exit 1 run-wide with 22 errors, none naming a batch-21 item (stored levels
  equal the recomputed levels for the pair:
  0,0,0,1,1,2,3,3,4,0,5,6,1,4,5,6,0,1,0,1,4,5,5 / 5,7,7,7,2,8; maximum 8;
  the theorem stays at 3 with the added definition dependency).
- `node tools/coverage-checklist.mjs research/frontier-41-ha-dt-29-batch-21.coverage.json --require-destination`
  → `2 page(s), 131 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-41-ha-dt-29-batch-21.coverage.json`
  → `8/8 source(s) resolved (2 documented drops; 6 fetch-verified)`.
- `node tools/validate-plan.mjs research/plan-spec.json` → exit 0.
- `node tools/extcheck.mjs`, `node tools/depsource.mjs`,
  `node tools/prosecheck.mjs` → exit 0, no finding naming a batch-21 item or
  page. `node tools/rendercheck.mjs` (repo-wide) → exit 0, 25837 files OK.
- `node tools/fwdcheck.mjs --quiet` → exit 1 run-wide (14 errors), all in
  other in-flight pairs (e.g. `link-unplanned` for
  `thm-whitney-trick-in-the-two-dimensional-borderline-case` consumers such as
  `lem-h-cobordisms-admit-two-index-normal-form-presentations`, and
  `forward-undeclared`/`forward-dangling` rows of the Whitney/handle and
  Cerf-theory pairs); none names a batch-21 item.
- `node tools/depcheck.mjs` → exit 1 run-wide (858 finding lines) with no
  finding naming a batch-21 item or page; all reported ids belong to other
  in-flight pairs.
- `node tools/step3-decisions.mjs check --run frontier-41-ha-dt-29 --phase final`
  → 0 open rows among the 29 owned ids (run-wide 489 open rows belong to other
  pairs); `--phase scope` → the pair is closed.
- `node tools/scope-decisions.mjs check --run frontier-41-ha-dt-29 --group i`
  → the 22 decline rows owned by this pair are current `stands` entries with
  concrete evidence in
  `research/frontier-41-ha-dt-29-alpha-i-scope-decisions.json`; the group-i
  errors come from the 17 still-pending rows of two other pairs
  (`whitehead-torsion-and-the-s-cobordism-theorem`, 10 rows, and
  `pontryagin-thom-and-framed-cobordism`, 7 rows). Run-wide:
  `457 current decline(s), 464 error(s)`.

## Interface and convention record

- **Added suppliers: none.** All 29 owned ids are original scaffold ids from
  the immutable pre-author inventory (23 A + 6 B); this dispatch created no
  new item, so no auditor-created certification applies and every id carries
  an ordinary current Step-3 item decision.
- **New dependency edge (declared, level-neutral).**
  `thm-holonomy-depends-only-on-leafwise-homotopy-relative-endpoints` now
  additionally declares
  `lem-a-leafwise-path-determines-a-germ-of-transverse-diffeomorphism` (level
  1), cited there as the definitional chart-chain construction (fact F4); the
  edge is recorded identically in the item frontmatter and the batch-21
  manifest row, and the theorem’s `dependency_level` remains 3.
- `prop-quotient-foliation-under-a-free-proper-foliated-action` is stated for
  a free and properly discontinuous action of a discrete group (the
  covering-space form); the general free-proper Lie-group form needs the
  quotient-manifold/slice theorem, which lies outside the page closure, and no
  consumer needs it (documented restriction, unchanged).
- `def-suspension-foliation-of-a-group-action` and
  `prop-suspension-holonomy-is-the-germ-of-the-monodromy-action` use the
  library deck-group convention, so the suspension holonomy germ of a base
  loop is the germ of `ρ([γ])^{-1}`; recomputed and verified.
- `rem-holonomy-and-monodromy-groupoids-need-not-be-hausdorff` is
  `proved_here: false` with the full `external_dependency` record (Meinrenken
  notes; exact statement of Prop. 2.9 / Remark 2.10 / Exercises 2.2–2.4).
- `cex-nontransverse-pullback-of-a-foliation-can-change-rank` keeps the
  locally altered witness `f(t) = (0,t²)` (provenance `ai-altered`, two
  fetch-verified reference URLs, locator notes the witness is
  author-constructed).
- Countable choice `AC_ω` is carried through the smooth-distribution and
  holonomy interface; the deck-group lemma and the two pure planar items are
  choice-free.

## Published concerns (exact evidence, for the owner / later steps)

1. **Other in-flight pairs, fwdcheck.** `node tools/fwdcheck.mjs --quiet`
   currently exits 1 with 14 errors, all naming other pairs: `link-unplanned`
   for `thm-whitney-trick-in-the-two-dimensional-borderline-case` consumers
   (e.g. `lem-h-cobordisms-admit-two-index-normal-form-presentations`,
   `lem-group-labelled-homology-lemma-realizes-group-ring-handle-bases-by-isotopy`),
   `forward-undeclared` links such as
   `items/lem-c2-leaf-intersection-with-a-box-transversal-is-countable.md` →
   `def-natural-number-coding-of-finite-sequences`, and the
   `forward-dangling` row of
   `items/rem-elementary-moves-do-not-constitute-full-cerf-theory-here.md`.
   None names a batch-21 item. Confidence: confirmed (exact tool output); the
   run-level gate cannot pass until the owning pairs repair these.
2. **Other in-flight pairs, depcheck.** Repo-wide `depcheck` exits 1 with 858
   finding lines, including `published-unaudited` rows (e.g.
   `cex-outer-induction-is-not-the-kronecker-product`,
   `ex-thom-space-of-the-mobius-line-bundle`) and `b-leaf-content` rows in
   other batches. None names a batch-21 item. Confidence: confirmed (tool
   output); repair is the owning pairs’ Step-3 obligation.
3. **Other in-flight pairs, dependency levels.** Repo-wide
   `item-dependency-levels.mjs check --run frontier-41-ha-dt-29` exits 1 with
   22 errors (e.g. `lem-metastable-embedding-for-maps-from-a-compact-manifold`,
   `thm-whitney-move-removes-a-cancelling-pair-of-intersections`,
   `thm-high-dimensional-whitney-trick`), none a batch-21 item.
4. **Scope decisions run-wide.** `scope-decisions.mjs check --all` reports
   `457 current decline(s), 464 error(s)` for other pairs/groups; group i’s
   batch-21 rows are all current `stands` decisions, and the remaining
   group-i errors (17 rows) belong to
   `whitehead-torsion-and-the-s-cobordism-theorem` and
   `pontryagin-thom-and-framed-cobordism`.

## Open obligations at handoff

1. Run-level gates (`fwdcheck`, `depcheck`, `item-dependency-levels`,
   `scope-decisions`) still fail on other in-flight pairs, as recorded above;
   nothing in this pair is outstanding.
2. Steps 5–8 owe the thorough independent mathematical audit of these items
   (this dispatch is authoring-level audit only); the repairs of substance
   (items 8, 9, 15 and 5) deserve particular attention, above all the
   cell-interchange argument of item 15 and its new definition dependency.
3. If any item on this pair is later edited, the affected Step-3b receipts
   become stale and must be re-recorded after the content and contract checks
   are rerun; any edit to item 15 in particular invalidates the 15 receipts
   re-recorded here (the theorem and its transitive consumers).
