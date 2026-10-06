# Step 3a scope review — `characteristic-numbers-and-cobordism-obstructions`

- Run `frontier-41-ha-dt-29`; role alpha; label
  `step3a-pair-characteristic-numbers-and-cobordism-obstructions-d0cc14501822988c`.
- A page `characteristic-numbers-and-cobordism-obstructions` (order 553, batch 11,
  differential-topology); B page `characteristic-numbers-and-cobordism-obstructions-examples`
  (order 554, companion). Scope review only; no scaffold, manifest or item file was edited.
- Inputs read: DT-19 prose design `research/plan-differential-topology-track.md` L1048–1085 and
  §12.4/§12.5 (L2285–2290, L2447); `research/plan-spec.json` (pages 553/554 and 548.5/548.6);
  `research/frontier-41-ha-dt-29-batch-11.pages.json` (17 A + 4 B items),
  `…-batch-11.coverage.json`, `…-batch-11.notes.md`, `…-batch-11.cross-batch-dependencies.json`;
  `research/frontier-41-ha-dt-29-scope-ledger.json`;
  `research/frontier-41-ha-dt-29-owner-authoring-direction.md`; the 21 `step1-*` readiness records;
  the published DT-15/DT-16 items cited by the pair; the batch-30 AT support manifest and coverage;
  the batch-12 and batch-20 consumer manifests. Current run state: Step 2 assign closed
  (`.autopilot/frontier-41-ha-dt-29/state.json`, doneAt 2026-10-05T13:12:35Z); the Step 3a dispatch
  attempt 1 (events 2026-10-05T13:12Z) left no report or scope receipt, so this is a fresh review.

## Verdict

`sufficient` for `characteristic-numbers-and-cobordism-obstructions`. The planned 17 A + 4 B items
realize all 15 A design rows and all 4 B design rows: each design claim is either a scaffold item,
an inherited published item with a verified home, or the documented escalation whose missing supplies
are now present in the current scaffold (batch-30 AT pair, owner-approved at orders 548.5/548.6).
All 251 item-dependency edges of the pair resolve to published files or run items (0 unresolved);
no prerequisite required by any scaffolded claim is absent from both the published library and the
current scaffold. The `coverage-low-yield` warning (9/38 A-page rows scaffolded) is confirmed as
expected: the declines are published inheritance, the DT-20 seam, and the detection machinery
re-homed to the owner-approved support pair.

## Design → scaffold mapping (scope, not proof)

| Design row(s) | Realization in the batch-11 manifest | Evidence |
|---|---|---|
| 1, 2 definitions of SW/Pontryagin numbers | inherited published items (owner direction; not re-minted) | `items/def-stiefel-whitney-number-of-a-closed-manifold.md`, `items/def-pontryagin-number-of-a-closed-oriented-manifold.md` exist, `status: published`, correct homes |
| 3 degree constraint, 4 orientation behaviour | absorbed into those published definitions | SW def: wrong-degree monomials are value 0 by convention, "do not change when an orientation is supplied or reversed"; Pontryagin def: wrong dimension 0, `p_J[-M] = -p_J[M]`. Verified in the item texts |
| 5 stable tangent of a boundary | published `lem-boundary-stable-tangent-splits-off-a-trivial-line` (DT-15) | published file verified, used by the two published boundary-vanishing propositions |
| 6, 7 invariance + boundary vanishing corollary | `thm-characteristic-numbers-are-cobordism-invariants`, `cor-all-relevant-characteristic-numbers-vanish-on-null-cobordant-manifolds` | present with only published/DT-15 boundary suppliers |
| 8 product formula | `lem-characteristic-numbers-of-products-follow-the-whitney-sum-and-kunneth-formulas` (+ added `…kronecker…`, `…fundamental-class…` prerequisites) | present |
| 9 unoriented Thom detection | `thm-thom-stiefel-whitney-number-detection-of-unoriented-bordism` | statement matches the design (numbers agree iff cobordant, including null-cobordism criterion); strategy uses Thom-space operations + stable PT detector as §12.4 requires; deps = 4 batch-30 items, all present |
| 10 PT conversion | `lem-pontryagin-thom-converts-bordism-detection-to-a-thom-space-homotopy-problem` | present; states it does **not** prove separation (left to the batch-30 detector) |
| 11 rational detection, 12 integral torsion remark | `thm-rational-oriented-bordism-is-detected-by-pontryagin-numbers`, `rem-pontryagin-numbers-do-not-detect-integral-oriented-bordism-torsion` | present; remark is explicitly non-load-bearing (Wall), rational statement matches the design |
| 13 spanning proposition, 14 triangularity | `prop-products-of-complex-projective-spaces-span-rational-oriented-bordism` + `lem-projective-space-products-are-linearly-independent-in-rational-oriented-bordism` + `lem-projective-space-products-have-triangular-characteristic-number-matrix` + `lem-tangent-bundle-of-complex-projective-space-and-its-pontryagin-classes` | present; the matrix lemma was repaired from "triangular" to "invertible with triangular Newton comparison", keeping the source-backed DT-20 test family |
| 15 seam remark | `rem-characteristic-class-constructions-and-normalizations-are-at-owned` | present with the exact published AT ids |
| B 1–4 examples | the 4 manifest B items, identical ids to the design | direct id match |

The remaining added A items (`lem-collapse-of-an-embedded-manifold-classifies-through-the-universal-thom-prespectrum`,
`lem-every-unoriented-and-oriented-bordism-class-is-realized-by-an-embedded-collapse`,
`thm-universal-pontryagin-thom-correspondence-for-unoriented-and-oriented-bordism`) build the
universal PT interface that design row 9's hard-proof closure requires; they are consistent with
§12.4/§12.5 and consume the moved batch-30 prespectrum definition. Nothing in the design's A/B
inventory is dropped or narrowed.

## Source coverage

- Three full texts for the pair: Milnor–Stasheff Chs. 16–19 (original pp. 183–230, 326 pp., recorded
  sha256_16 `e5a712237dd7959a`), Weston §§6–18 (37 pp., sha256_16 `8dfca70146b0bd6b`), Freed
  Lectures 1, 7–12 (208 pp., sha256_16 `ddecb72e0c9197c6`); all fetch-verified; the Milnor–Stasheff mirror recovery
  (6 failed Rochester attempts) is documented in the coverage row. Hatcher VBKT is cited for one
  computation and is not counted in the harvest.
- A-page dispositions: 13 already-published, 9 included, 16 deferred; B page: 11 included, 1 deferred.
  Every deferred row names a destination. Of the 12 `owner-decision` rows: TW §6 freeness, §8
  metastable EM cohomology, §12 Thom-module freeness, §17 away-from-two BO/BSO, §13 detection,
  Freed Thm 1.40 and (12.9)/(12.13) have exact batch-30 scaffold items
  (`thm-connected-graded-module-coalgebra-with-injective-unit-orbit-is-free`,
  `lem-metastable-cohomology-of-eilenberg-maclane-spaces`,
  `thm-stable-unoriented-thom-cohomology-is-free-over-the-square-algebra`,
  `thm-bo-bso-cohomology-away-from-two`, `thm-stable-unoriented-thom-homotopy-is-injectively-detected`,
  `thm-rational-hurewicz-for-highly-connected-cw-complexes`); MS Cor 18.9 and Freed 11.46 are
  delivered by the spanning proposition; MS Cor 18.10's rational half by the rational detection
  theorem and its integral half by the non-load-bearing Wall remark; TW §7's dyadic-partition count
  is superseded as not needed by the local detection route (batch-11 notes §5). MS Thm 18.8's
  integral rank/finiteness half is **not claimed** (see prerequisites). The 3 DT-20 rows and the
  1 batch-30 prespectrum row are correctly homed.

## Prerequisite findings (unmet-prerequisite check)

- **Confirmed available (no gap).** All 120 distinct published dependencies carry `status: published`;
  all run-side suppliers of this pair (batch-9 `def-pontryagin-thom-collapse-of-a-framed-neat-cobordism`,
  batch-30 prespectrum/rational-Hurewicz/detector/oriented-Schubert items, batch-2 page) exist in the
  current scaffold and are ordered before 553. Batch-30's own 549 dependency edges resolve with 0
  unresolved. The plan's DT-19 `requires` array omits AT-12
  (`hurewicz-whitehead-freudenthal-and-cw-approximation`) and AT-14
  (`the-serre-spectral-sequence-and-applications`), but both pages are **published**
  (`library/algebraic-topology/…`), so their absence is a plan-conformance note, not an unmet
  prerequisite; the rational-Hurewicz and detection inputs are additionally scaffolded locally in
  batch 30.
- **Confirmed boundary (not a claimed result).** The unoriented *ring presentation* (TW §13 polynomial
  structure) and the integral rank/finiteness statement (MS Thm 18.8) are not claimed anywhere in this
  pair; the detection theorem explicitly asserts detection only, matching design row 9 and the page
  description "SW/Pontryagin numbers, boundary vanishing, Thom detection". If the owner wants the
  polynomial presentation/finiteness, that is an enrichment decision.
- **Uncertainty, recorded honestly.** (i) The in-scaffold batch-30 route must still close at authoring;
  this is this pair's only material supplier risk, and it is a different pair's scope. (ii) If that
  route fails, the classical fallback (Milnor–Stasheff Thm 18.3 epsilon-isomorphism + Thm 18.8) needs
  Serre finiteness for unstable homotopy groups of spheres; no exact named published item exists
  (searched `items/` and the library), although the published Serre page has
  `thm-serre-finiteness-transfer-for-simply-connected-base-and-fiber` and
  `cor-serre-finite-generation-torsion-and-p-primary-transfer` from which the sphere statement is
  standardly derived — I did not verify that derivation. This affects only the unclaimed integral
  rank row, so it does not block scope.

## Library role and consumers

- B page is a leaf consuming only the A page; its 4 examples test the A-page claims (RP^n numbers,
  CP^2 normalization, degree-eight product matrix with determinant 45, orientation reversal).
- Declared consumers: `the-hirzebruch-signature-theorem` (batch 12) and
  `characteristic-class-obstructions-to-immersions-and-embeddings` (batch 20). Batch-12 item-level
  edges into this pair (`thm-hirzebruch-signature-theorem` → spanning proposition; the L-genus and
  CP^n items → product/Kronecker/fundamental-class/tangent-bundle lemmas) all resolve to planned
  A-page items. No consumer needs a claim this pair does not plan.

## Checks run (actual results)

| check | result |
|---|---|
| `node tools/manifest-deps.mjs research/frontier-41-ha-dt-29-batch-11.pages.json` | 21 items, 0 errors |
| dependency resolution scan (batch 11, 251 edges; batch 30, 549 edges) | 0 unresolved; every published target `status: published` |
| `node tools/coverage-checklist.mjs …batch-11.coverage.json --require-destination` | 2 pages, 50 rows, 0 errors, 1 warning (`coverage-low-yield`, 9/38 on the A page) — confirmed as expected |
| `node tools/step3-decisions.mjs` scope-state inspection | no prior owner/review scope receipt for this page; fresh review required (this report) |

## Item-level notes for Step 3b / owner (not scope blockers; no edits made)

1. `thm-rational-oriented-bordism-is-detected-by-pontryagin-numbers` strategy opens "Keep the current
   statement of …" — a leftover authoring directive that should become argument text during 3b.
2. B1's parenthetical `RP^3 = ∂D²-bundle data` is elliptical; also `w(T RP^n)` has only even-degree
   terms mod 2 for odd `n`, so all odd `RP^n` have vanishing numbers — B1 is correct as written
   (it asserts consistency, not an `iff`), but the `2^s − 1` sample is not exhaustive and may be
   clarified during authoring.
3. Coverage prose for MS Cor 18.9 / TW §13 still reads "escalated / missing inputs" while the scaffold
   now holds the support items; recommend an owner coverage refresh when next touched.
4. All 21 items carry `step1` readiness records (18 non-owner `ready`, 3 owner-held `ready`).

## Decision

Record `sufficient` for `characteristic-numbers-and-cobordism-obstructions` with this report path as
the scope evidence. No owner scope action is required; Step 3b authoring must close the batch-30
supplier chain and re-read the final supplier texts.
