# Step 3a scope review — the-smooth-h-cobordism-theorem

- Run: `frontier-41-ha-dt-29` (batch 15), role alpha, label
  `step3a-pair-the-smooth-h-cobordism-theorem-3b0983b363c61771`.
- A page: `the-smooth-h-cobordism-theorem` (order 561, differential topology,
  20 items).
- B page: `the-smooth-h-cobordism-theorem-examples` (order 562, 5 items);
  companion pointers agree A↔B.
- Decision: **sufficient** (recorded with `tools/step3-decisions.mjs
  record-scope`, non-owner review, at the current pair scope hash). Scope only:
  no item approval, no owner record, no scaffold, plan, manifest or page edit.

## Evidence read

- `research/frontier-41-ha-dt-29-batch-15.pages.json` (20 A + 5 B items, every
  item with an explicit `deps` array), `.coverage.json` (A 54 / B 47 harvested
  rows), `.notes.md` (scaffold decisions, repairs, source stamps), and
  `.cross-batch-dependencies.json` (71 reviewed rows: 5 page, 66 item).
- `research/frontier-41-ha-dt-29-scope-ledger.json` (pages 561/562 owed) and
  the drift record `research/frontier-41-ha-dt-29-alpha-step1-drift.md`
  (DT-23 verdict `no-drift`, selected suppliers orders 527–559 precede 561).
- Prose design: `research/plan-differential-topology-track.md` DT-23
  (lines 1210–1248: 16 A items, hard-proof closure lines 1237–1240, 5 B items),
  the §8 source row (line 1673: MH §§1–9 + Lück Ch. 1), the ZF/choice ledger
  (line 1928), and the exact §12.4 `requires` row (line 2245).
- `research/frontier-41-ha-dt-29-owner-authoring-direction.md`: its item-level
  clauses concern DT-19 and the added AT support pair; its DT-wide clauses
  ("retain all explicit dimension, coefficient, regularity, relative/parametric
  and convergence restrictions") are respected by this scaffold.
- Step-1 readiness: all **25** pair items have `step1-<id>.json` records with
  `decision: ready` (including the repaired trading lemma and the refreshed
  B4 record `...step1-cex-a-four-dimensional-boundary-case-....json`).

Checks I ran this session: `coverage-checklist.mjs` on the pair coverage
(2 pages, 101 rows, 0 errors, 0 warnings); `source-fetch-check.mjs` gate mode
(6/6 fetch-verified, 0 dropped); a dependency-closure scan over all 25 items
(215 declared edges, 98 distinct targets, **0** unresolved, **0**
planned-only); an exact string comparison of the manifest `requires` with the
plan §12.4 row (**equal**); and a scan that every `[[...]]` citation in every
statement/strategy is a declared dependency (0 undeclared).

Source re-verification I performed: I re-downloaded the three cited treatments
and the bodies match the coverage stamps byte-for-byte — Milnor 3 572 752 B
(121 pp.), Lück 1 474 199 B (197 pp.), Du 895 308 B (24 pp.). I read the
load-bearing passages: Lück §1.5 (printed pp. 20–21: the s-cobordism theorem is
false for n = dim M₀ = 4 in general by Donaldson, true for good groups in the
topological category by Freedman), Lück's numbering Lemma 1.16 (Elimination),
1.22 (Homology), 1.23 (Modification), 1.24 (Normal Form), which the four added
prerequisites cite; Milnor's Concluding Remarks (n = 4 case equivalent to the
4-disk conjecture; n = 5 case with S⁴ ends); and Du §4 (Mazur W_k has the
2-handle framed by k; W_k is contractible; M₋₃ is a homology 3-sphere with
π₁(M₋₃) ≅ ⟨a,b | b⁵ = a⁷, b⁴ = a²ba²⟩), which is exactly B3's statement.

## Scope against the prose design

All 16 designed A identifiers are present, in prerequisite order, with
design-matching claims: the symmetric definition (`def-h-cobordism`), the
vanishing relative homology (`lem-relative-homology-...-at-both-ends`), the
adapted/indexed handle presentation (`prop-h-cobordisms-admit-adapted-ordered-
handle-decompositions`), low- and high-index elimination
(`lem-zero-and-one-handles-...`, `lem-duality-eliminates-top-and-cotop-handles`),
concentration in two adjacent indices
(`lem-handle-trading-concentrates-...`), the middle-handle matrix and its
unimodularity/diagonalisation (`def-middle-handle-intersection-matrix-...`,
`lem-acyclicity-...-unimodular`, `lem-handle-slides-reduce-...`), the Whitney
realisation and cancellation (`lem-whitney-trick-realizes-...-geometrically`,
`lem-middle-handle-pairs-...-cancel`), the product theorem
(`thm-critical-point-free-cobordism-...`), the theorem itself
(`thm-smooth-simply-connected-h-cobordism-theorem`), and the two corollaries
plus the dimension remark (items 14–16). All 5 designed B rows are present
unchanged (product cobordism, elementary cancelling pair, Mazur homology-
cobordism counterexample, dimension-4 counterexample, finite matrix model).

Four local prerequisites beyond the design are added, each required by the
design's own items 6–9 and each with a named source locator:
`prop-relative-handle-chain-complex-of-a-cobordism` (relative integral form,
Milnor §§3, 7; the in-run DT-8 statement is the closed/field form),
`lem-handle-elimination-by-trading-a-pair` (Lück Lemma 1.16; Milnor §8),
`lem-homology-lemma-realizes-handle-bases-by-isotopy` (Lück Lemma 1.22; Milnor
Thm 7.6, Lemma 7.7) and
`lem-modification-lemma-for-embedded-spheres-in-a-handle-presentation`
(Lück Lemma 1.23). The scaffold's concentration lemma is stated for every
admissible adjacent pair `2 ≤ k ≤ n−2` rather than one "middle" pair — a
documented strengthening with the sources' full range (Lück Lemma 1.24,
Ranicki Prop 8.31), no claim weakened.

The theorem statement matches design item 13 and the plan's dimension fact
(line 172): `dim W = n+1 ≥ 6` (n ≥ 5), closed simply connected faces, connected
W, conclusion `W ≅ M₀×[0,1]` rel M₀, with the dimension hypothesis printed at
the point of use. Design item 2's parenthetical local-coefficient form is
deliberately not on this page: the page's proof uses integral coefficients
only, and the based/group-ring form is owned by the DT-24 pair consuming
AT-22/AT-23 — a recorded scope boundary, not a dropped claim. Design item 15 is
realised as Milnor §9 Proposition A (homotopy spheres bounding a contractible
manifold are standard, n ≥ 5); the general topological Poincaré statement is
deferred to `exotic-smooth-structures-and-milnor-spheres`, which requires this
page and scaffolds the homeomorphism items — correct division of labour.
Design item 16 is carried by the remark plus B4, including the Whitney-disk
failure and the Donaldson/Freedman contrast.

## Source coverage

The pair carries 101 harvested rows with explicit dispositions (A: 25
included / 7 inline / 18 deferred / 3 out-of-scope / 1 already-published;
B is the corresponding subset), 0 errors and 0 warnings on the omission gate.
All deferred rows resolve to pages that exist: in-run batches 1, 3, 4, 14
(handle vocabulary, cancellation, handle complex, Whitney trick), the in-run
DT-24 pair (torsion/s-cobordism material), the in-run DT-27 pair (general
Poincaré), and the published `simple-homotopy-whitehead-groups-and-torsion`
page. The out-of-scope declines (triad Poincaré duality, 5-disc/Schoenflies,
surgery-program remark, Poincaré-sphere 0/2-handle example, Dehn surgery/Jester
material) each carry a specific reason and belong to other pairs. Each page has
three full treatments, including the Milnor monograph; 6/6 source entries are
fetch-verified, and I re-checked the load-bearing passages above. The design's
fourth source, Wall §§5.5–5.6, was not consulted (documented in the batch
notes); the plan's own §8 matrix certifies DT-23 on MH + Lück, and Ranicki
Ch. 8 §8.2 was read, so no designed result is left without two independent
treatments.

## Prerequisites

The page `requires` array equals plan §12.4 exactly (12 ids). All twelve are
available: six current-run pages — `handle-decompositions-duality-and-
rearrangement` (batch 1, order 527), `handle-cancellation-slides-and-elementary-
moves` (3/533), `morse-inequalities-and-the-handle-chain-complex` (4/535),
`smooth-surgery-traces-and-handle-trading` (13/557, page-level reading order
only — no item of this pair consumes one of its items), `the-whitney-trick-and-
surgery-below-the-middle-dimension` (14/559), all before 561 — and six
published pages (DT-11 intersection numbers; AT relative homology, CW, duality,
higher homotopy, Hurewicz/Whitehead; topology fundamental group). Every
declared item dependency resolves: 94 edges to `items/*.md` files whose
frontmatter `status` is `published` (verified for all 94), and 121 edges to
current-run scaffolds in the completed supplier batches above. No dependency
is absent from both the published library and the current scaffold; no
planned-only target exists. The 71 cross-batch rows are the producers' Step-3
reconciliation duty, not a gap here. No pair item id already exists under
`items/`, and no published item references a pair id.

## Role in the library

The pair is the DT-23 commissioned page at orders 561/562. Every in-run
consumer that names a pair item resolves to an item that exists: DT-24
`whitehead-torsion-and-the-s-cobordism-theorem` (batch 16, order 563) consumes
`def-h-cobordism`, the adapted-presentation, trading, duality-elimination,
modification, relative-handle-complex, middle-matrix and product-theorem items
(20 declared edges); DT-27 `exotic-smooth-structures-and-milnor-spheres`
(batch 24, order 579) consumes `def-h-cobordism` and
`thm-smooth-simply-connected-h-cobordism-theorem` for its θₙ/diffeomorphism
and homeomorphism items (5 declared edges). No published page or item
references the pair yet.

## Uncertainty and observations for the owner

1. **The dimension-4 failure attribution (uncertain sourcing of a
   strengthening, not a scope gap).** `rem-the-h-cobordism-theorem-does-not-
   cover-boundary-dimension-four` states (ii) that "there exist h-cobordisms
   over closed simply connected 4-manifolds that are not diffeomorphic to the
   product, by Donaldson's work". Lück §1.5 (read this session, printed
   pp. 20–21) supports the failure of the s-cobordism theorem for
   n = dim M₀ = 4 "in general, by the work of Donaldson" and the
   good-group topological case by Freedman, but does not itself print
   "simply connected" counterexamples; Milnor's Concluding Remarks (read)
   record the n = 4 case as equivalent to the 4-disk conjecture and the n = 5
   case with S⁴ ends. The simply connected smooth examples are documented in
   the modern literature (Kasprowski–Powell–Ray, *Counterexamples in 4-manifold
   topology*, EMS Surv. Math. Sci. 9 (2022) 193–249, Example 1.13 with §5.8
   presenting Donaldson's first pair: smooth orientable simply connected
   4-manifolds that are smoothly s-cobordant and homeomorphic but not
   diffeomorphic, so no h-cobordism between them is a product). The claim is
   therefore true, but its printed citation base does not certify the
   strengthening; recommended author action at Step 3b is to add an exact
   Donaldson (J. Differential Geom. 18 (1983) 279–315) or Kasprowski–Powell–
   Ray locator, or to align the sentence with Lück's "in general". This is a
   source-locator observation, not a reason to change the approved scope.
2. **Wall §§5.5–5.6 unused (recorded, no coverage loss).** The design's source
   line names Wall; the batch notes record that the §8 matrix certifies DT-23
   on MH + Lück and that no result in the batch depends on Wall. With Ranicki
   Ch. 8 §8.2 read, every designed row has two independent full treatments.
   The owner may annotate the source line, as batch 3 did for a stale
   Pajitnov row; no enrichment is needed.
3. **In-run supplier note for batch 14 (not this pair's scope gap).**
   `thm-whitney-trick-in-the-two-dimensional-borderline-case` states its
   hypothesis for `r ≤ 2` (with the π₁-injection condition) while its strategy
   parenthetical says r = 1 is "excluded here by r+s ≥ 5"; the parenthetical is
   inconsistent with the statement but the statement is the one consumed (this
   pair uses only the r = 2, s ≥ 3 case, and the r = 1 elimination uses the
   1-dimensional boundary spheres differently). Already logged in the batch-15
   notes; the batch-14 owner should reconcile the parenthetical at Step 3b.
4. **Recorded deliberate boundaries (no action).** Item 2's local-coefficient
   parenthetical is owned by DT-24/AT-22/23; item 15's general topological
   Poincaré content is owned by DT-27. Both were considered and deliberately
   excluded here, so the owner can distinguish omission from ownership.
5. Statement-level fidelity, proof correctness, dependency minimality and the
   Mazur-group computation were **not** judged here; those belong to Step 3b
   and Step 5 (the noted Du locators and the Lück/Ranicki/Milnor passages give
   the authors verified entry points).

## Scope decision

The planned definitions, results and examples cover the pair's intended
subject at design breadth — the symmetric h-cobordism definition, the
integral handle-complex target, the complete normalise → concentrate →
diagonalise → Whitney-realise → cancel → integrate proof route with each
dimension/simplicity hypothesis at its point of use, the product theorem and
its classification and Poincaré corollaries, the sharp dimension-4 boundary
with its counterexample, and the five designed examples/counterexamples
(product, cancelling pair, Mazur homology cobordism, dimension four, finite
matrix model) — with source backing for every designed row and every added
local prerequisite, correct deferrals with resolving destinations, and all
planned prerequisites either published or scaffolded ahead of this pair.
Recorded: **sufficient**.
