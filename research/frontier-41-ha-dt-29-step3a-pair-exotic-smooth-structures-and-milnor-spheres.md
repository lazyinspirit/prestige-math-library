# Step 3a scope review — exotic-smooth-structures-and-milnor-spheres

- Run: `frontier-41-ha-dt-29` (batch 24), role alpha, label
  `step3a-pair-exotic-smooth-structures-and-milnor-spheres-85bf4c24d6d034ae`.
- A page: `exotic-smooth-structures-and-milnor-spheres` (order 579,
  differential topology, 43 items).
- B page: `exotic-smooth-structures-and-milnor-spheres-examples` (order 580,
  5 items); companion pointers agree A↔B.
- Decision: **sufficient** (recorded with `tools/step3-decisions.mjs
  record-scope`, non-owner review, at the current pair scope hash). Scope only:
  no item approval, no owner record, no scaffold, plan, manifest or page edit.

## Evidence read

- `research/frontier-41-ha-dt-29-batch-24.pages.json` (43 A + 5 B items, every
  item with an explicit `deps` array), `.coverage.json` (4 sources, 50
  harvested rows, 11 page-level canonical rows), `.notes.md` (scaffold
  decisions, the 23-planned + 20-support inventory, source stamps, the
  finite-CW/choice normalization), and `.cross-batch-dependencies.json`
  (15 rows: 12 direct cross-batch item edges plus the 3 page-level edges to
  the same-run supplier pages).
- `research/frontier-41-ha-dt-29-scope-ledger.json` (pages 579/580 owed),
  `research/frontier-41-ha-dt-29-drift-evidence.json` (verdict `no-drift`;
  remaining uncertainty is the Pontryagin sign, now carried by the local
  calibration items), and `research/frontier-41-ha-dt-29-alpha-step1-drift.md`
  (DT-32 section: closure and order check, design excludes dimension four,
  order-28 non-load-bearing).
- Prose design: `research/plan-differential-topology-track.md` DT-32
  (lines 1586–1655: 23 A items and 5 B items, hard-proof closure), the §8
  source-matrix row (line 1682), the ZF/choice ledger (lines 1928, 1936), the
  §12.1 non-supplied leaves (lines 2042–2047), the exact §12.4 `requires` row
  (line 2248), the §12.5 DT-32 contract (lines 2354–2399, including the
  mandated 20 local support items and the replacement of design item 19), and
  the §12.6 disposition “unnecessary DT-17/21/24/28 cone removed, exact
  invariant restored, deep classification leaves remain non-load-bearing”
  (line 2452).
- `research/frontier-41-ha-dt-29-owner-authoring-direction.md`: owner approved
  the 30-pair scope; the superseding F41 inventory note directs preserving and
  refining the local support items and forbids rehoming the pair.
- `research/frontier-41-ha-dt-29-batch-24-prereq-audit.md` and
  `research/frontier-41-ha-dt-29-batch-24-relative-lambda-gluing-proof.md`:
  the audited supplier interfaces and the local proof routes the scaffold
  strategies encode.
- Step-1 readiness: all **48** pair items have `step1-<id>.json` records with
  `decision: ready` and `owner: true`.

Checks run this session (read-only):

- `coverage-checklist.mjs` on the batch-24 coverage: 1 page, 50 harvested
  rows, **0 errors, 0 warnings**.
- `source-fetch-check.mjs` (check mode): **3/4 fetch-verified, 4/4 resolved**
  with 1 documented drop (Northwestern URL).
- `manifest-deps.mjs` on batch 24: **48 items, 0 missing deps arrays,
  0 errors**; over all 30 batch manifests: 883 items, 0 errors.
- Dependency-closure scan from the 48 pair items over all current manifests
  plus `items/*.md`: **2,760 ids (189 in-run, 2,571 published), 0 missing,
  0 planned-only**; all 12 direct cross-batch item edges and the 3 page-level
  edges are recorded in the batch-24 cross-batch-dependencies file.
- Exact string comparison: manifest A `requires` **equals plan §12.4** (11
  ids); B requires only its own A page.
- Inventory comparison: manifest A = the 23 designed claims **plus exactly the
  20 support items listed in plan §12.5** (set equality); B = the 5 designed
  examples/counterexamples; coverage record inventories all 48 ids exactly
  once (48 distinct, no duplicates, no extras).
- Collision/consumer scans: no pair id exists under `items/`; no published
  item references any pair id; no A item depends on a B item; the two
  `not-supplied` leaves have no consumer in any current manifest.

## Scope against the prose design

All 23 designed A claims are present, in prerequisite order:

- Category definitions (items 1–2), the Θₙ group interface (items 3–6,
  supported by the mandated `lem-theta-n-connected-sum-operation-is-well-defined`,
  `lem-orientation-reversal-is-inverse-in-theta-n`,
  `lem-parallelizable-boundaries-form-a-subgroup`), the h-cobordism
  identification (item 5), and the two deep context leaves (items 7 and 21,
  `P: not-supplied`, non-load-bearing per §12.1).
- The quaternionic construction and calculations (items 8–10, supported by
  the mandated `lem-euler-number-is-the-clutching-degree`,
  `lem-quaternionic-basic-clutchings-have-pontryagin-numbers-plus-and-minus-two`,
  `lem-degree-four-characteristic-numbers-add-under-clutching-product`): the
  published `±` conventions in the plan are replaced, per §12.5 and the drift
  record, by the exact local calibration `e(h+j)u`, `p₁=2(h−j)u`.
- Homology, simple connectivity and homotopy recognition (items 11–13), the
  two-disk h-cobordism and Alexander bridge (items 14–16), the boundary
  middle form and its gluing (item 17 with the mandated
  `def-boundary-middle-form-and-signature`,
  `lem-boundary-middle-form-is-well-defined-and-glues`), the relative
  Pontryagin square (items 18 and the mandated square/gluing lemmas), and the
  smooth detector (item 19).
- Design item 19 was replaced exactly as §12.5 directs by
  `def-milnor-lambda-candidate-from-a-filling` +
  `lem-relative-pontryagin-square-glues-across-a-seven-boundary` +
  `thm-milnor-lambda-invariant-is-well-defined-modulo-seven`, with
  λ(M)=2q(W)−σ(W) mod 7, oriented-boundary invariance and sign reversal under
  orientation reversal. The claim is preserved and made precise; nothing is
  weakened.
- Existence of exotic spheres (item 20, with the exact modulo-seven
  arithmetic λ=(h−j)²−1), and the two boundary remarks (items 22–23: the
  order-28 proof boundary and the dimension-four exclusion).

All 5 designed B rows are present unchanged: the quaternionic Hopf
normalization (1,0), the Gysin calculation for (2,−1), the bounding disk
bundle’s intersection matrix, two distinct λ values, and the
homeomorphism-vs-diffeomorphism counterexample. No B item is load-bearing and
the B page has no consumer.

The 20 support items are exactly the §12.5 list (verified as a set equality),
each before its consumers, so the “planned definitions, results, and examples”
of the design are covered at design breadth without scope expansion.

## Source coverage

The coverage record maps every one of the 48 ids to one of four inspected
works plus the local canonical development, with 0 errors and 0 warnings on
the omission gate:

- Milnor, *On Manifolds Homeomorphic to the 7-Sphere* (fetch-verified;
  589,787 B, 8-page scan; all seven mathematical pages inspected per the
  audit memo, which notes the scan has no text layer).
- Kervaire–Milnor, *Groups of Homotopy Spheres I* (fetch-verified;
  2,585,002 B, 35 pages; printed pp. 504–515 inspected; p. 512 is a
  statement/table locator only).
- Milnor, *Lectures on the h-Cobordism Theorem* (fetch-verified; 3,572,752 B,
  121 pages; §9 Proposition B and corollary, printed pp. 109–110, support the
  two-disk/Alexander route).
- Francis/Shen, Northwestern Math 465 Lecture 18 (complete 3-page handout
  downloaded and read in full; sha256 `cbfbad…e95e9d` reading receipt
  retained). Its URL is a documented fetch-backing drop: the scan class was
  mechanically blocked by the six-attempt budget before the reading receipt
  was entered; the content is corroborated by the three stamped treatments
  and an independent complete treatment (McEnroe, UChicago REU 2015) was
  located. Its two printed slips (the p₁ orientation shorthand and the
  `1+3x` Hℙ² denominator) are recorded out-of-scope and are not used.

Lück Ch. 6 §§6.1–6.7 and C §11.6.2, named in the plan source line, were not
consulted; this is recorded in the audit and covered by the §8 matrix, under
which DT-32 is certified on MI + KM (both stamped) and the Northwestern
lecture (read in full). No included result is left without backing per the
scaffold’s source-backing pass (37 authored results, every one backed; empty
reharvest list).

## Prerequisites (unmet-prerequisite audit)

The A page’s `requires` array equals plan §12.4 exactly (11 ids), and all
eleven are available: three current-run pages —
`intersection-pairings-self-intersection-and-euler-classes` (batch 2, order
531), `the-hirzebruch-signature-theorem` (batch 12, order 555),
`the-smooth-h-cobordism-theorem` (batch 15, order 561) — and eight published
pages (`smooth-cobordism-relations-groups-and-rings`,
`thom-spaces-normal-data-and-collapse-maps`,
`fibrations-fiber-bundles-and-homotopy-exact-sequences`,
`hurewicz-whitehead-freudenthal-and-cw-approximation`,
`topological-vector-bundles-and-grassmannian-classification`,
`leray-hirsch-thom-isomorphism-and-gysin-sequences`,
`stiefel-whitney-and-euler-classes-by-universal-constructions`,
`chern-and-pontryagin-classes-by-splitting-and-complexification`).
The B page requires only its own A page.

The full transitive closure of the 48 items resolves to 2,760 ids (189
current-run, 2,571 published) with **0 missing** targets and **0**
planned-only targets, so **no prerequisite is absent from both the published
library and the current scaffold**. The 12 direct cross-batch item edges are
all recorded in the batch-24 cross-batch-dependencies file. No pair id
collides with a published item, and no published item consumes a pair id.
The two deliberately `not-supplied` statements
(`prop-homotopy-spheres-are-stably-parallelizable`,
`thm-kervaire-milnor-theta-seven-is-cyclic-of-order-twenty-eight`) have no
consumer anywhere in the run, matching §12.1’s non-load-bearing requirement.

Confirmed observations (non-blocking, for the authoring step):

1. **Undeclared but available interface (not an absence).**
   `lem-theta-n-connected-sum-operation-is-well-defined` and
   `lem-parallelizable-boundaries-form-a-subgroup` use the path-connectedness
   of GL⁺(k,ℝ) in their strategies without declaring it. The fact exists in
   the current scaffold as batch-9
   `lem-positively-oriented-bases-are-path-connected` (“equivalently
   GL⁺(k,ℝ) is path-connected”). Recommend the authors declare that edge (or
   an equivalent local step) at Step 3b; since the supplier exists, this is a
   dependency-exactness note, not an unmet prerequisite.
2. **Coverage placement.** The batch-24 coverage record carries a single page
   entry, for the A page; the 5 B items are inventoried in the same record
   (all 48 ids exactly once, 50 rows, 0/0). If per-page coverage entries are
   expected for B pages, this placement should be reconciled; the tooling
   accepts it.
3. **Superseded prose `Requires` cone.** The DT-32 prose line names DT-17,
   DT-21, DT-22, DT-24, DT-28, obstruction theory and stable spectra; §12.6
   explicitly removed the unnecessary cone and §12.4 is binding. The manifest
   matches §12.4, so the difference is a recorded owner-directed
   normalization, not a scope loss.
4. **Statement-level fidelity, proof correctness and dependency minimality
   were not judged here**; those are Step 3b/Step 5 duties. My closure and
   interface checks used the declared dependency graph and the published
   supplier statements actually named by the pair (Gysin sphere-bundle
   sequence, upper-to-lower clutching convention, oriented clutching
   classification, top-Chern = Euler, complex orientation, and the
   choice-free finite-CW clause of the homology–Whitehead example all read and
   found to match the interfaces the pair consumes).

## Role in the library

DT-32 is the track’s capstone for “Milnor bundles, smooth detection,
homotopy-sphere group context”. Its only in-run consumer is its own B page
(`exotic-smooth-structures-and-milnor-spheres-examples`, a genuine dependency
leaf); no other page or item in the frontier, and no published item, references
the pair. The three supplier pages it consumes in-run (batches 2, 12, 15)
precede it in order, and its own items supply the downstream context the plan
assigns (Θₙ/bPₙ₊₁ interface plus the sourced order-28 leaf).

## Uncertainty

- I did not independently re-download the stamped PDFs in this session; the
  check-mode `source-fetch-check` re-verified 3/4 sources live and the
  remaining source is a documented drop with a retained full-reading receipt.
  Claims about the sources’ internal content rest on the recorded audit memos,
  which this review treats as evidence, not as my own reading.
- The “no unmet prerequisite” finding is limited to the declared dependency
  graph (direct, transitive and cross-batch edges), the page-level `requires`
  arrays, and the interfaces I spot-checked. Fine-grained hypothesis matching
  inside individual proof strategies is deliberately deferred to Step 3b.
- I found no evidence supporting `insufficient` scope; no omitted topic,
  result or example was identified relative to the design or the pair’s
  intended subject.

## Scope decision

The planned definitions, results and examples adequately cover the intended
subject: the plan’s 23 A claims and 5 B examples are all present with matching
or owner-mandated-refined statements, the exact 20 §12.5 support items are in
place before their consumers, every item is source-backed in the coverage
record (0 errors/0 warnings; 3/4 fetch-verified with one documented drop),
all eleven page prerequisites and the full item dependency closure resolve to
the published library or current-run scaffolds, and the two deep
classification claims remain the only non-supplied, non-load-bearing leaves.
Recorded: **sufficient**.
