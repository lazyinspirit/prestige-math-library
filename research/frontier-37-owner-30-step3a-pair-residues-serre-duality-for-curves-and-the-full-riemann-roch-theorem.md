# Step 3a scope review — `residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem`

- Run: `frontier-37-owner-30`, batch 8, role alpha (step 3a scope review).
- A page: `residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem`
  (order 510.0163); B page: `residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem-examples`
  (order 510.0164).
- Scope decision: **sufficient** (receipt:
  `research/frontier-37-owner-30-step3a-review-residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem.json`).
- This report decides scope only. It is not an item approval, proof review, or owner record.

## Inputs read (exact paths)

- Design: `research/plan-algebraic-geometry-track.md` AV-25, heading at line 1782,
  table through line 1845 (A inventory 34 rows, B inventory 11 rows) and its
  residue/duality/Riemann–Roch prose and proof-route paragraph.
- Contract: `research/plan-spec.json` rows for both page ids (orders 510.0163/510.0164,
  empty item lists; A `requires` = kahler-differentials, sheaf-cohomology,
  cohomology-of-quasi-coherent-sheaves, smooth-proper-curves, riemann-roch-via-euler-characteristics,
  smooth-projective-serre-duality; B requires A).
- Manifest: `research/frontier-37-owner-30-batch-8.pages.json` (A: 47 items,
  B: 11 items; A `requires` matches the plan).
- Coverage: `research/frontier-37-owner-30-batch-8.coverage.json` (7 sources,
  53 harvested results) and the harvest/route record `research/frontier-37-owner-30-batch-8.notes.md`.
- Cross-batch edges: `research/frontier-37-owner-30-batch-8.cross-batch-dependencies.json`
  (207 rows) and the batch-5/6/7 supplier manifests.
- Owner decisions: `research/frontier-37-owner-30-operator-record.md` (2026-09-30 AG-LIE
  prerequisite + order move to 510.0163/510.0164; scoped four-item local-residue repair;
  refreshed readiness records). `research/frontier-37-owner-30-owner-authoring-direction.md`
  does not exist; no owner scope receipt for this pair exists yet (stage 3a is at 0/30).
- Published supplier: `research/frontier-35-ten-categories-deferred-smooth-projective-serre-duality-and-flag-variety-line-bundles.manifest.json`
  (the AG-LIE page; `library/algebraic-geometry/smooth-projective-serre-duality-and-flag-variety-line-bundles.md`).
- Source spot checks (live, 2026-09-30): re-downloaded Tate, MIT 18.725, Stacks
  curves, and Vakil 2025 PDFs; byte counts and SHA-256 prefixes match the coverage
  stamps exactly (below).

## Design vs delivered scaffold

- All 45 design rows are present on the two pages: 34/34 A rows and 11/11 B rows,
  0 design ids missing. The B page is exactly the design leaf list with matching kinds.
- The A page adds 13 non-design items, all recorded as foundation in the batch notes
  and each consumed in-run: `lem-uniformizer-differential-is-a-basis` (used by 5 items);
  the nine Tate abstract-residue items (`lem-finite-potent-trace-existence-and-uniqueness`
  3, `def-commensurable-subspaces-and-ideals-of-endomorphisms` 7,
  `lem-finite-potent-trace-linearity-and-conjugation` 5, `lem-e-ideals-and-commutator-trace` 2,
  `thm-abstract-residue-exists-unique` 5, `lem-abstract-residue-basic-properties` 2,
  `lem-abstract-residue-additivity` 1, `lem-abstract-residue-trace-under-finite-free-extension` 1);
  `cor-coefficient-trace-residue-agreement` (1); `lem-adelic-quotient-computes-h1-structure-sheaf`
  (1); `lem-twisting-sheaf-projective-space-ample` (1); `lem-degree-pullback-divisor-finite-morphism-curves`
  (2). They supply the global-residue and projectivity interfaces the design named,
  not new subject matter.
- Delivered counts: A = 5 definitions, 18 lemmas, 12 theorems, 10 corollaries,
  2 remarks; B = 8 examples, 3 counterexamples. Statements are substantive; no placeholders.
- Note nit (documentation only): the batch notes' "thirteen added" enumeration names
  `cor-projective-embedding-every-smooth-proper-curve`, which is a design row, and omits
  `lem-degree-pullback-divisor-finite-morphism-curves`; the manifest itself is correct.

## Subject coverage (definitions, results, examples)

- Residues: coefficient-trace definition at closed points with finite separable residue
  field over arbitrary k (with the design's inseparable-point caveat), independence of the
  uniformizer in every characteristic, vanishing on exact differentials; Tate's abstract
  residue chain (finite-potent traces, E-ideals, residue existence/uniqueness, (R)-properties,
  additivity, trace under finite free extensions, coefficient-trace agreement); adelic
  presentation of `H^1(O_C)`; global residue theorem over perfect k.
- Principal parts and duality pairing: principal-parts sheaf, Čech `H^1` presentation,
  residue pairing, descent to cohomology, functoriality, local annihilator, left injectivity,
  dimension balance; over perfect k the residue pairing is identified with the trace pairing.
- Serre duality: over an arbitrary field the specialization of published AG-LIE duality for
  invertible sheaves, finite locally free sheaves, and coherent sheaves in Ext form; trace
  normalization remark; `h^1(O(D)) = l(K-D)`; no higher-dimensional duality is claimed
  (`rem-general-serre-duality-deferred`).
- Full Riemann–Roch and consequences: divisor form over arbitrary k, `deg K = 2g-2`,
  `h^0(omega) = g`, vanishing and exact formula for `deg > 2g-2`, base-point-freeness at
  `deg >= 2g`, very ampleness at `deg >= 2g+1` (with the AG-LIE embedding criteria inline),
  projective embedding of every smooth proper curve — ordered before its AG-LIE consumers
  and proved without duality/Riemann–Roch, so no circularity.
- Canonical map (including the hyperelliptic exception), hyperelliptic definition,
  plane-curve adjunction and genus formula, complete Riemann–Hurwitz with the different
  divisor and the pullback-degree lemma, the finite-étale genus relation, genus-one
  canonical bundle triviality (stated without a rational point), and the plane-cubic
  embedding.
- B page: residues on `P^1`, `P^1` duality twists, full RR on `P^1`, positive-degree RR on a
  genus-one curve, plane cubic and plane quartic adjunction, the hyperelliptic canonical-map
  counterexample, the sharpness counterexamples at `2g-1` and `2g`, a tame double cover
  Riemann–Hurwitz computation, and one explicit cocycle carried through the residue pairing.
  All 11 B items are dependency leaves (no run item depends on them).

## Deferred subjects, with destinations verified on disk

- Two deferred harvest rows (Gao–Zhang Theorem 7.4.1; Stacks Section 5) name destination
  `riemann-roch-for-curves-via-euler-characteristics`, the batch-7 A page, which exists in
  this run with `thm-riemann-roch-euler-characteristic-curve` and
  `thm-riemann-roch-as-l-minus-index`; the batch-7 scope review on disk is `sufficient`.
  This page consumes that pair and adds the duality identification.
- Six out-of-scope rows carry reasons: Birkhoff–Grothendieck splitting (not needed; the curve
  route uses ample twists, and batch 7 carries the splitting theorem), higher-dimensional
  Serre duality (covered by `rem-general-serre-duality-deferred`), higher-rank Euler
  characteristics (Gao–Zhang), Tate Theorems 4–5 (ramification route uses batch 6's
  canonical-bundle ramification formula), Lipman §§2.2–2.3, and Stacks Section 13 inseparable
  maps (batch 6 carries the inseparable-failure counterexample). No destination is missing.

## Prerequisites and dependency scope

- `requires` = 4 published pages (kahler-differentials, sheaf-cohomology,
  cohomology-of-quasi-coherent-sheaves, AG-LIE smooth-projective Serre duality) plus 2 in-run
  drafts earlier in the run (smooth-proper-curves, order 366.085; riemann-roch-via-euler-characteristics,
  order 366.087; this pair at 510.0163/510.0164 after published AG-LIE at 510.0161/510.0162).
- 202 manifest-declared item-level cross-batch edges (38 to batch 5, 119 to batch 6, 45 to
  batch 7); the review file holds 205 pair-consumer item rows and 2 page rows, all `open`
  against draft suppliers as expected, with no manifest-declared edge missing; three
  additional reviewed rows reference existing batch-5/6 items
  (`def-order-codimension-one-rational-function`, `def-canonical-line-bundle-curve`).
- All 97 direct external dependencies are published under `items/`; the 8 used AG-LIE items
  (`thm-serre-duality-smooth-projective-variety-locally-free-sheaves`,
  `def-smooth-projective-dualizing-line-bundle-and-trace`,
  `lem-coherent-sheaf-finite-twisted-locally-free-resolution-projective-space`,
  `lem-global-sheaf-ext-long-exact-in-first-variable`,
  `lem-smooth-closed-immersion-regular-conormal-sequence`,
  `lem-smooth-closed-subvariety-dualizing-line-bundle-adjunction`,
  `thm-serre-duality-projective-space-twisting-sheaves`,
  `def-sheaf-ext-for-coherent-modules`) exist in the AG-LIE manifest.
- Gates at review time: `manifest-deps` 58 items / 0 errors; `step1-decisions check --run`
  778/778 ready and closed; `item-dependency-levels` computed run-wide (batch 8 max 31).
- Role in the library: the pair is the apex of the run's AG curves chain (batches 5 -> 6 -> 7 -> 8);
  only its B page requires the A page, and no other current-run or planned page requires it.

## Source coverage

- Seven independent treatments, all fetch-verified with full-text stamps; my live
  re-downloads reproduce the stamps exactly: Vakil 2025 (9,643,655 bytes,
  `d07177aa0317c134`), MIT 18.725 (863,420, `7e6398eba5bb49b7`), Fulton (706,612,
  `937a5c2a962b5de1`), Gao–Zhang (796,444, `ffe0b153244db990`), Tate (1,001,892,
  `f2cc15171e5d44d9`), Lipman (341,704, `e8b91b1c45dba24a`), Stacks curves (745,082,
  `c4e3d4c0fc533a3d`).
- 53 harvest rows: 31 included, 13 inline, 1 already-published (Vakil 18.5.1),
  2 deferred, 6 out-of-scope. `coverage-checklist --require-destination`: 0 errors,
  0 warnings. `source-fetch-check --coverage`: 7/7 verified, 0 drops.
  `source-backing --require-verified`: 21/21 authored results backed.
- Named-result spot checks I performed on the fetched texts: MIT Theorem 24.3 (Serre duality)
  and Corollary 31 (`deg K = 2g-2`) are present; the Stacks table of contents confirms
  Sections 3–5, 7–9, 11–13 (linear series, duality, RR, very ample, genus, plane curves,
  Riemann–Hurwitz, inseparable maps); Tate's §1 Traces, §2 Abstract residues (Theorem 1,
  the (R)-properties), §3 Algebraic curves (Theorems 2–3 and the sum-of-residues corollary)
  are present (scan OCR is noisy, so a few individual tags were not re-read one by one);
  Vakil's 2025 TOC shows Chapter 27 is the cubic-surface chapter, so the design's
  "Ch. 27 §§27.1–27.6, pp. 567–579" locator is stale, and the corrected locators recorded in
  the coverage file (§18.5 at ~p. 514, §19.1 at ~p. 535, §19.5 at ~p. 545, §§29.1–29.4
  at pp. 793–812) match the edition.

## Residual uncertainty and minor observations (no action taken here)

1. I confirmed the mechanical gates and the scope-critical named results above, but did not
   re-read all 53 harvest rows line by line against the sources; complete harvest confirmation
   remains the step-5 source review.
2. The Stacks read range claims §§3–5, 7–9, 11–13; §§6 (weak vanishing) and 10 (genus-zero
   curves) carry no disposition. My check shows §6 is redundant with this page's duality-based
   vanishing route and §10 belongs to the batch-7 pair, so this is not a scope defect; the owner
   may want the harvest note to say so explicitly.
3. Locator nit: MIT Corollary 31 sits at the printed p. 60/61 boundary in the extracted text;
   the declared Lecture 25 range pp. 59–61 still covers it.
4. The AV-25 design prose itself still carries the stale Vakil chapter locator (already recorded
   as locator drift in the batch notes; the design file was not edited). A plan edit at the next
   design revision could update it; no effect on this pair's scope.

## Decision

**sufficient.** The planned definitions, results and examples cover the AV-25 subject
(residues, curve Serre duality over arbitrary fields, the full divisor Riemann–Roch theorem
and its standard consequences), the B page is exactly the design's example/counterexample
support, deferred harvest rows have existing in-run destinations, and every prerequisite is
declared and available (published or earlier in this run). Recorded with
`tools/step3-decisions.mjs record-scope --run frontier-37-owner-30 --page
residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem --decision sufficient`.
