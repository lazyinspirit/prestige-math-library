# Step 3b — pair `short-loop-polygons-and-quantitative-energy-decrease`

Run `frontier-42-coxeter-32`; role `alpha-high`; batch 15.
A page `short-loop-polygons-and-quantitative-energy-decrease` (order 1746).
B page `short-loop-polygons-and-quantitative-energy-decrease-examples` (order 1747).
Scope decision: `research/frontier-42-coxeter-32-step3a-pair-short-loop-polygons-and-quantitative-energy-decrease.md` = `sufficient`.

This file is the running checkpoint. After every item: id, exact claim, conventions,
source locator, dependencies, decision, checks run, open gaps, next action.

## Owned IDs (13)

In dispatch order (dependency_level ascending, ties by page order then item ID):

1. `def-cg-short-loop-homotopy-and-nonshrinkability` (level 9, A page)
2. `def-cg-cyclic-small-mesh-polygon-and-midpoint-energy` (level 10, A page)
3. `lem-cg-cat-one-short-and-closed-local-geodesics` (level 10, A page)
4. `lem-cg-local-cat-one-products-from-sine-comparison` (level 11, A page)
5. `lem-cg-polygon-midpoint-drop-and-equality` (level 11, A page)
6. `lem-cg-finite-spherical-comparison-disks-and-radius-estimates` (level 13, A page)
7. `lem-cg-comparison-product-perturbation-and-degenerate-limits` (level 14, A page)
8. `lem-cg-uniform-energy-decrement-and-short-class-closedness` (level 15, A page)
9. `lem-cg-bowditch-quantitative-short-loop-control` (level 16, A page)
10. `ex-cg-midpoint-iteration-on-a-spherical-triangle` (level 16, B page)
11. `ex-cg-zero-length-boundary-of-the-energy-criterion` (level 16, B page)
12. `ex-cg-equally-spaced-points-on-a-short-circle-are-stationary` (level 17, B page)
13. `ex-cg-null-homotopy-versus-short-loop-shrinkability` (level 17, B page)

## Open obligations at entry

- All 13 item files absent from `items/` at dispatch start (checked 2026-10-07). Nothing published was edited.
- In-run suppliers that may be unfinished (authored by sibling workers in this run):
  batch 6 `lem-cg-metric-target-length-reparametrization-and-lower-semicontinuity`;
  batch 11 `def-cg-cat-zero-cat-one-and-local-geodesic`, `lem-cg-comparison-convexity-and-model-spaces`,
  `lem-cg-alexandrov-comparison-triangle-gluing`, `thm-cg-compact-local-cat-one-short-circle-criterion`.
  Exact consuming steps are flagged per item below as they arise; decisions stay escalated while a
  supplier file is absent.
- Dependency-level recomputation and `tools/item-dependency-levels.mjs check` before handoff.
- Pre-splice plan mismatch: `research/plan-coxeter-groups-track.md` §CG-12 lists 8 designed contracts;
  the manifest adds `lem-cg-cat-one-short-and-closed-local-geodesics` as a documented local prerequisite.
  Report for Step 4.
- `research/frontier-42-coxeter-32-step3a-pair-short-loop-polygons-and-quantitative-energy-decrease.md`
  observation 2: twelve published homes used by this pair are outside the declared `requires` closure
  (plan-declaration gap, not an unmet prerequisite) — report for Step 4.

## Inputs read

- `CLAUDE.md`, `SCHEMA.md`, `research/frontier-42-coxeter-32-owner-authoring-direction.md`,
  batch-15 `pages.json` / `coverage.json` / `notes.md` / `cross-batch-dependencies.json`,
  the Step-3a pair review, plan §CG-12 (`research/plan-coxeter-groups-track.md` lines 307–319),
  the native A/B page scaffolds, `research/coxeter-scaffold/geometric-source-report.md` and the
  batch-11 scaffolding of the four in-run suppliers (statements + strategies extracted from
  `research/frontier-42-coxeter-32-batch-11.pages.json`), and Bridson–Haefliger II.1.4 / II.1.7 /
  Davis I.2.16 full texts (downloaded to `/tmp/bh-full.pdf`, extracted with PyMuPDF) for the
  local-geodesic and characterisation-of-CAT proofs.

## Checkpoint — items 1–5 authored (all `precheck` clean)

1. `def-cg-short-loop-homotopy-and-nonshrinkability` — definition; scaffold statement kept verbatim
   (short loops <2π, uniform-plus-length topology, short-loop homotopy, shrinkability). `precheck: n/a`.
2. `def-cg-cyclic-small-mesh-polygon-and-midpoint-energy` — definition; scaffold statement verbatim
   (uniform radius deferred to consumer, mesh/L/E, midpoint operation, zero-limit basin). `precheck: n/a`.
3. `lem-cg-cat-one-short-and-closed-local-geodesics` — full proof of (i)–(iii); the (ii) proof follows
   Bridson–Haefliger II.1.4(2) with the maximal-set + comparison-angle argument, and (iii) the
   two-arc uniqueness contradiction. Sources: BH II.1.4 (downloaded text read), Davis I.2.16.
4. `lem-cg-local-cat-one-products-from-sine-comparison` — full proof of the l²-product sine
   comparison (product geodesics, radial ODE, differential inequality, maximum principle, vertex-to-side
   and law-of-cosines all-pairs). **DEP AMENDMENT:** the scaffold deps included
   `lem-cg-alexandrov-comparison-triangle-gluing`; the authored proof uses the equivalent
   law-of-cosines comparison (BH II.1.7 (2)⟹(3)) instead, so that declaration was dropped and the
   `dependency_level` recomputed to 10; the statement's route sentence was adjusted accordingly.
   To be mirrored in the manifest and in the batch-15 cross-batch input (row marked `removed`).
5. `lem-cg-polygon-midpoint-drop-and-equality` — full proof of (i)–(vi) (Lebesgue-number uniform
   radius, pointwise midline bound, monotonicity, equality analysis via the degenerate model triangle,
   convergence in the basin, compactness/decrement argument for openness, degenerate cases).
   **Statement repair:** clause (v) said all iterates lie in "nested" balls
   $\bar B((f^mx)_0,L(f^mx)/2)$; nesting fails in general, so the true claim ("for every $m$ with
   $L(f^mx)<l/2$ all later iterates lie in that closed ball, whose radii tend to 0") is stated.
   Added published dep `thm-extreme-value-metric`.

## Checkpoint — items 6–9 (A-page lemmas)

6. `lem-cg-finite-spherical-comparison-disks-and-radius-estimates` — statement: (i) spherical radius
   estimate $d(a,x)\le r/2$ for a closed curve of length $2r<2\pi$; (ii) quadrilateral separation with an
   explicit continuous constant $\delta(\eta,\mu)$; (iii)(a)–(f) the midpoint-operation comparison disk
   (perimeters, distance-nonincreasing map, cone/boundary angles, no interior closed geodesic, CAT(1));
   (iv) the quantitative index estimate $\zeta_k\le(\xi_k+\xi_{k+1})/2-\delta(\eta,\mu)$. Source locators:
   Bowditch §3.3.9–3.3.15 (scanned pp. 24–27), Davis I.2.8, BH II.1.4. Proof steps 1.1–7.1.
   **Open obligation (unresolved):** clause (iii)(e) — no simple closed local geodesic in the comparison
   disk — is the source's finite row induction (printed p. 27). The scan has no text layer and the OCR of
   the key page produced only fragments, so the interior case is **not proved here**; step 1.6 says so
   explicitly, and clause (iii)(f) and the quantitative output (iv) are conditional on (iii)(e)–(f).
   Supplier uses: `thm-cg-compact-local-cat-one-short-circle-criterion` at step 5.1 (forward implication
   only), `thm-cg-cone-cat-equivalence-and-polyhedral-link-criterion` at step 4.2 (polyhedral link
   criterion for the piecewise-spherical disk, cited provisionally). Both supplier files are now on disk
   (authored 2026-10-07 in batch 11) but each carries its own flagged open obligations and an escalated
   item decision. Decision: **escalate** (open clause (iii)(e) and unreconciled suppliers).

7. `lem-cg-comparison-product-perturbation-and-degenerate-limits` — statement (i)–(iii): the
   regular-polygon perturbation in $X\times\mathbb R^2$ removes the nondegeneracy hypothesis of item 6;
   the limit $\varepsilon\to0$ passes the quantitative inequality to $x$ with constants depending only on
   $n$ and $L$. Steps 1.1–6.1. Repairs this session: AC bookkeeping added to step 6.1 ("AC enters only
   through the supplier [F2]", citing [F7]) per the published convention. Consumes item 6 at steps 3.1,
   4.1 and 5.1. Decision: **escalate** (transitive on item 6).

8. `lem-cg-uniform-energy-decrement-and-short-class-closedness` — statement (i) uniform decrement with
   the explicit minorant $\lambda_n$; (ii) bounded iteration; (iii) closedness of the basin in the piece
   $\{L<2\pi\}$ and no short-loop homotopy crossing it, plus exclusion of straight equilateral tuples;
   (iv) no circularity. Steps 1.1–8.1. Repairs this session: removed an unused fact (cat-one short
   geodesics + comparison convexity — not used anywhere in the authored proof), renumbered the
   metric-convergence fact, and added AC bookkeeping at step 8.1 with the new [F6] citation. Clause (iii)
   was repaired in the previous session (closedness only in the piece $L<2\pi$). Consumes items 6 and 7
   at steps 3.1/4.1/8.1. Decision: **escalate** (transitive on items 6–7).

9. `lem-cg-bowditch-quantitative-short-loop-control` — statement (i) polygon transfer; (ii) basin =
   short-shrinkable class on polygons; (iii) short loops below $m$ are shrinkable and, when $m<2\pi$, the
   minimum is attained by an isometrically embedded circle; (iv) the CAT(1) equivalence. Steps 1.1–8.1.
   Consumes item 6 and the uniform-energy lemma (F4) at steps 6.1–7.2 and the criterion [F7] at steps
   7.1–7.2. Decision: **escalate** (transitive on item 6 and the criterion).

## Checkpoint — items 10–13 (B-page examples)

10. `ex-cg-midpoint-iteration-on-a-spherical-triangle` — explicit equilateral spherical triangle under
    the midpoint iteration; side recursion $s_{k+1}=\arccos(\cos s_k/\cos(s_k/2))\downarrow0$; the
    equality case of the polygon lemma does not occur. Steps 1.1–6.1. Repairs this session: the
    conclusion's clause mapping corrected to the actual steps (clause (i) is 1.1, 2.1, 3.1; clause (ii)
    is 4.1, 5.1); step 4.1 extended to verify the statement's promised agreement with
    `lem-cg-uniform-energy-decrement-and-short-class-closedness` (i) explicitly, which also gives the
    AC-bookkeeping citation [L5] a real use. Decision: **escalate** (transitive on item 6).

11. `ex-cg-zero-length-boundary-of-the-energy-criterion` — constant tuples; degeneration of $\lambda_n$ at
    both endpoints of $(0,2\pi)$; collapsed edges; no uniform gap at zero. Steps 1.1–2.1. Repair:
    conclusion clause (ii) mapped to steps 1.2–1.4; AC bookkeeping ([L6]) at step 2.1. Decision:
    **escalate** (transitive).

12. `ex-cg-equally-spaced-points-on-a-short-circle-are-stationary` — the equally spaced tuple on
    $S^1_\ell$ ($\ell<2\pi$) is stationary with $L(f^kx)=\ell$; it realizes the equality case; the full
    circle is a short nonshrinkable loop; the boundary case $\ell=2\pi$ is stationary on the CAT(1)
    circle. Steps 1.1–4.1. Repairs: conclusion clause (i) mapped to steps 1.1 and 2.1; AC bookkeeping
    ([L5]) at step 4.1. Decision: **escalate** (transitive).

13. `ex-cg-null-homotopy-versus-short-loop-shrinkability` — $S^2$ has $m=2\pi$ and every short loop
    shrinkable; the latitude contraction is an ordinary null-homotopy through non-short loops; $S^1_\ell$
    has a short nonshrinkable loop; separation by the criterion. Steps 1.1–2.1. Repair: AC bookkeeping
    ([L6]) at step 2.1. Decision: **escalate** (transitive).

## Repairs made this session (all 13 items)

- De-doubled LaTeX escapes (`\\to` → `\to`, `L_\\infty` → `L_\infty`, …) in the body of five items
  (8, 9, 11, 12, 13); rendercheck had reported KaTeX parse errors for them. Frontmatter YAML escaping
  preserved.
- Inserted the missing proof-phase heading in seven items (7, 8, 9: `## Proof`; 10–13:
  `## Verification`). The numbered steps had been sitting inside `## Facts & Assumptions`, so the step
  parser returned zero steps and precheck passed vacuously.
- Fixed four stale step references in conclusion steps (item 10 "1.1-2.1"/"4.1-3.2"; item 11 "1.2-2.3";
  item 12 "1.1-1.2") and two literature locators containing dotted numbers that the strict contract
  parser reads as step tokens (item 3 `II.1.4(2)`, item 6 `Bowditch 3.3.13`).
- Added missing fact→step citations so that every declared fact is used: item 5 [F13] at step 1.3
  (reverse triangle inequality for continuity of the distance functions), item 6 [F7] at step 1.1
  (round sphere $S^2$) and [F6] at step 5.1 (compactness of the disk as a continuous image of the finite
  union of its compact spherical triangles), and AC bookkeeping citations at items 7, 8, 10, 11, 12, 13
  (published convention: the final step records "AC enters only through the supplier(s) …").
- Removed one unused fact from item 8 (cat-one short geodesics + comparison convexity) and renumbered the
  remaining facts; the removed items stay in the item's declared deps (unused deps are permitted; the
  dependency_level is unchanged).
- Item 10's statement promise of agreement with the uniform decrement supplier is now discharged in
  step 4.1.

## Gates run (this session)

- `node tools/tsx-run.mjs tools/precheck.mts <13 items>` → 11 checked (2 definitions n/a), 0 failing.
- `node tools/rendercheck.mjs <13 items + 2 pages>` → 15 files, no defects (KaTeX and YAML clean).
- `node tools/proof-layout.mjs <13 items>` (single batched run) → 13 items, 94 steps, 0 defects.
- `node tools/content-policy.mjs research/frontier-42-coxeter-32-batch-15.pages.json` → 13 scoped,
  0 errors, 0 warnings.
- `node tools/coverage-checklist.mjs research/frontier-42-coxeter-32-batch-15.coverage.json
  --require-destination` → 1 page, 30 harvested results, 0 errors.
- `node tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-15.pages.json` → 13 items,
  0 errors.
- `node tools/proof-contract.mjs research/frontier-42-coxeter-32-batch-15.proof-contracts.json --strict`
  → 0 errors, 0 warnings, 13/13 items (149 fact→source citations with exact source quotes and step uses;
  all 94 numbered steps mapped; 104 boundary dispositions).
- `node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` → the only failure is the
  sibling item `ex-cg-reducible-semidefinite-forms-are-factorwise` (dependency_level 15 vs computed 16),
  which is not in this pair; no batch-15 item is named.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` → refreshed (33 rows
  for batch 15): new row item 6 → `thm-cg-cone-cat-equivalence-and-polyhedral-link-criterion` (step 4.2),
  row item 6 → `thm-cg-compact-local-cat-one-short-circle-criterion` updated with the current
  reconciliation, and the row item 4 → `lem-cg-alexandrov-comparison-triangle-gluing` marked `removed`
  with evidence of the actual removal.
- `node tools/validate-plan.mjs research/plan-spec.json --pages-file <both page ids>` → OK at page level
  ("declared page order is acyclic and consistent"); item-level validation is not yet possible because
  the plan-spec entries for both pages carry `"items": []` (pre-splice).
  `--run frontier-42-coxeter-32` → FAIL, with 32 `undeclared-prereq` findings all on sibling pages
  (finite-coxeter-diagrams-and-complete-classification[-examples], finite-reflection-length-…-examples,
  finite-reflection-arrangements-…[-examples], coxeter-descents-…[-examples], tits-cones-…,
  generic-coxeter-hecke-…-examples) and 121 `frontier-selection` warnings run-wide (manifest items
  absent from the plan pages, whose item lists are still empty). None of the findings names this pair.

## Step-4 reports (pre-splice; no action taken here)

- Plan §CG-12 lists 8 designed contracts; the manifest carries 9 A-page items
  (`lem-cg-cat-one-short-and-closed-local-geodesics` was added as a documented local prerequisite).
- Step-3a observation 2: twelve published homes used by this pair lie outside the declared `requires`
  closure (plan-declaration gap).
- The plan-spec entries for both pages have empty item lists; item-level plan validation
  (`validate-plan`) is deferred to the splice.
- Sibling page `large-spherical-metric-flags-and-the-moussong-girth-theorem` carries a
  `[redundant-prereq]` warning: it requires `cat-comparison-link-criteria-and-local-globalization`
  directly although it already reaches it through this A page.
- Run-wide run-mode `validate-plan` failure (32 sibling `undeclared-prereq` errors) as listed above.

## Handoff

- Completed IDs (authored, on the pages, in the manifest, in coverage and in the strict proof contract):
  `def-cg-short-loop-homotopy-and-nonshrinkability`, `def-cg-cyclic-small-mesh-polygon-and-midpoint-energy`,
  `lem-cg-cat-one-short-and-closed-local-geodesics`, `lem-cg-local-cat-one-products-from-sine-comparison`,
  `lem-cg-polygon-midpoint-drop-and-equality`, `lem-cg-finite-spherical-comparison-disks-and-radius-estimates`,
  `lem-cg-comparison-product-perturbation-and-degenerate-limits`,
  `lem-cg-uniform-energy-decrement-and-short-class-closedness`,
  `lem-cg-bowditch-quantitative-short-loop-control`, `ex-cg-midpoint-iteration-on-a-spherical-triangle`,
  `ex-cg-zero-length-boundary-of-the-energy-criterion`,
  `ex-cg-equally-spaced-points-on-a-short-circle-are-stationary`,
  `ex-cg-null-homotopy-versus-short-loop-shrinkability`; both pages updated.
- Added suppliers: none (no new item ID was created in this dispatch; the ninth A-page item was already
  registered by the previous incarnation).
- Published concerns: none found — no published item or page was edited, and all published sources were
  cited as-is with exact quotes in the proof contract.
- Open obligations (owner-resolved): item 6 clause (iii)(e) (row induction not reconstructed — honest
  reading limit of the scanned source); the two batch-11 suppliers flagged above; the escalated decisions
  of items 6–13; the pre-splice plan mismatch and published-home declaration gap for Step 4.
- Item decisions: items 1–5 recorded `accept`/`repaired`; items 6–13 recorded `escalate` (reasons and
  examined dependency IDs in the receipts, `research/frontier-42-coxeter-32-step3b-review-<id>.json`).
- Missing items, pages, contracts or this report would have failed the handoff; none is missing.

## Decision bookkeeping addendum

- Scope decision refreshed twice: the first refresh followed the item authoring repairs; the second
  followed the manifest sync (item 5's clause (v) statement and item 4's statement/deps/dependency_level
  mirrored from the authored files). Receipt:
  `research/frontier-42-coxeter-32-step3a-review-short-loop-polygons-and-quantitative-energy-decrease.json`
  (decision `sufficient`, non-owner). The pair's scope check is clean as of this recording.
- Item decisions recorded: 1–2 `accept`, 3–5 `repaired`, 6–13 `escalate`; receipts
  `research/frontier-42-coxeter-32-step3b-review-<id>.json` with examined dependency IDs (the full
  declared dep lists) and the concrete evidence above.
- Caveat (honest bookkeeping): the repository is under concurrent sibling editing, and the Step-3
  decision hashes cover the *transitive* closure of each item's inputs. Editing any shared supplier
  stales an earlier receipt; the accept/repaired receipts for the owner items were refreshed after the
  manifest sync, and the escalate receipts keep their recorded reasons regardless. If a sibling edit
  touches a transitive supplier after this recording, the final Step-3 gate will require a fresh audit
  of the affected receipt by whoever owns the run at that time; this is recorded here rather than
  hidden.

- Current Step-3 state for the pair: scope closed; items 1-5 closed (accept/repaired, confidence 1);
  items 6-13 escalated and awaiting the owner's resolution of the item 6 open obligation and the two
  flagged batch-11 suppliers. The run-wide final gate remains open on sibling batches, as expected
  pre-splice.
