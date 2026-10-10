# Step 3a scope dispatch report — pair `sr-proper-time-comparisons`

- Run: `physics-em-sr-40-2026-10-08` · role: alpha (Step 3a scope review)
- Pair: `sr-proper-time-comparisons` (A, order 219) / `sr-proper-time-comparisons-examples` (B, order 220), batch 6
- Decision recorded for the A page: **sufficient** (scope only; no item approval, no owner record)

## Inputs read

- Manifests: `research/physics-em-sr-40-2026-10-08-batch-6.pages.json` (both pages, all 15 item
  contracts: 9 A + 6 B) and `research/plan-spec.json` entries for both pages (orders, `requires`,
  companion, `scaffold` pointer); supplier and consumer manifests (batches 1–5, 10) at item level
  where the dependency closure required them.
- Coverage/notes/dependencies: `...-batch-6.coverage.json` (1 page, 3 sources, 20 harvested
  results), `...-batch-6.notes.md` (scaffolder's mapping, local closure decisions, recorded checks),
  `...-batch-6.cross-batch-dependencies.json` (105 current rows: 104 item-consumer rows into
  batches 1–4 plus 1 page row `sr-proper-time-comparisons` → `sr-observer-measurements`).
- Prose design: `research/plan-special-relativity-track.md` §"Proper Time Comparisons" (order
  219/220; SR06/SR06B reservations), `.../relativity/scaffold/special-relativity.md` row SR06,
  `.../scaffold/prose-scaffold.md` SR06 source-coverage row, `.../scaffold/sr-supplier-proofs.md` §S6,
  `.../scaffold/mathematical-prerequisites.md` §M02 with the `closure-ledger.json` M02 row
  ("closed-stated-mathematics", arguments S6: global flat bound/equality, reverse inequality,
  reunion example), and `.../scaffold/proposed-inventory-and-checks.json` SR06/SR06B rows.
- Owner direction: `research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md`, including the
  binding clauses on weak piecewise histories (do not require continuous derivative limits), the
  corrected home of `def-sr-piecewise-proper-time` on `sr-worldlines-and-clocks`, and the
  requirement to preserve the exact straight-worldline maximum, strictness, twin numerical examples
  and empirical qualifications.
- No prior Step 3a review or owner scope decision exists for this pair (checked
  `research/*step3a-*sr-proper-time*`; the two `...-step3a-pair-sr-proper-time-comparisons-*.task.md`
  files are identical task shells). Sibling convention: the SR05 report
  `research/physics-em-sr-40-2026-10-08-step3a-pair-sr-causality-and-signals.md`.

## Scope comparison: design ↔ scaffold

The SR06 reservation asks for "M02 reverse inequality/endpoint bound; texp piecewise inertial twin
reunion; pthm same-endpoint duration calculation; acceleration/synchronization caveats" (budget
18 A / 10 B; requires SR03–04; closure S6; status "exact stated local arguments available").

| Design element | Planned item(s) | Assessment |
|---|---|---|
| M02 reverse inequality | `lem-sr-reverse-cauchy-schwarz-for-future-timelike-vectors` (reversed Cauchy–Schwarz, exact equality case, past-timelike clause), `cor-sr-reverse-triangle-and-future-cone-convexity` (reversed triangle, convexity, finite sums with equality) | present |
| M02 endpoint bound | `def-sr-piecewise-proper-time` (well-defined total proper time; now homed on `sr-worldlines-and-clocks`, order 213, per the owner direction), `lem-sr-endpoint-displacement-of-a-future-timelike-worldline`, `lem-sr-rest-frame-of-a-future-timelike-displacement`, `thm-sr-endpoint-proper-time-bound-and-flat-maximum` (bound, equality case, strictness, straight value) | present |
| texp piecewise inertial twin reunion | `texp-sr-piecewise-inertial-twin-reunion` (explicit stay-at-home and two-leg histories, corner `r`, readings `2T` and `2T/γ`, conditional conclusion, scope exclusions) | present |
| pthm same-endpoint duration calculation | `pthm-sr-same-endpoint-clock-comparison` (straight reading, general bound with equality iff the straight image, strict case for non-straight piecewise-inertial itineraries, chart independence) | present |
| acceleration/synchronization caveats | `rem-sr-twin-acceleration-and-synchronization-caveats` (no acceleration term; corner idealization; non-symmetry via affine chart transitions; the two simultaneity slices `T/γ²` and `T(1+v²/c²)` and gap `2Tv²/c²`; no empirical content) | present |
| stable S6 id `thm-sr-future-cone-and-flat-domain-of-dependence` | not re-minted; homed on `sr-causality-and-signals` (batch 5), recorded in the notes; this pair has its own cone-reversal/endpoint items | consistent |

- `def-sr-inertial-and-piecewise-inertial-worldline` supplies the pair's own inertial/piecewise
  vocabulary, matching the owner direction's clause on weak piecewise histories; the endpoint
  theorem's class is the approved weak piecewise-C¹ class (its former corner-hypothesis (H) class
  remains the ordinary Riemann special case), supplied through
  `lem-sr-weak-piecewise-causal-integrability` on `sr-worldlines-and-clocks`.
- The A page carries 9 items against the 18-slot budget; the B page carries 6 leaf items against 10
  — worked reverse Cauchy–Schwarz and equality, the two-leg/straight comparison at β = 3/5, the
  simultaneity gap at the turn, two hypothesis-boundary counterexamples (unsigned-inequality
  orientation failure; a past-directed itinerary attaining the endpoint bound without future
  orientation), and the worked rest-frame construction. The SR06B row ("worked
  examples/countermodels explicitly listed in framework prose; leaf only") is respected; no item or
  page outside the B page consumes a B item (checked over all current manifests), and no B item
  appears in any dependency list.
- Historical vs current layout: the Step-1 notes describe a 10-item A page including
  `def-sr-piecewise-proper-time`; the current manifest's 9 items reflect the later owner-directed
  move of that definition to `sr-worldlines-and-clocks` (order 213, before its consumers here).
  Nothing promised by the design is dropped; the notes' table is historical context.

## Source coverage

- Three sources, 20 harvested results; dispositions 9 `included`, 1 `inline`, 6 `deferred`,
  4 `out-of-scope` (coverage file). `coverage-checklist --require-destination` on the batch file:
  1 page, 20 results, 0 errors, 0 warnings — every deferred destination exists in the run
  (`sr-observer-measurements` 215, `sr-experimental-interface` 231) or in the plan
  (`gr-connections-and-free-fall` 237).
- Fetch-verified stamps are live in the coverage file (3/3): Crowell 10,728,180 bytes / 246 pages;
  Carroll 1,583,209 bytes / 238 pages; Reall 1,017,792 bytes / 125 pages (Internet Archive copy,
  with the batch-1 DAMTP TLS attempt history reused verbatim).
- Carried source limitations (as recorded, consistent with the retrieval records): Crowell's
  (+−−−)/c=1 formulas are converted to (−+++) with x⁰ = ct; his reverse triangle inequality is left
  to a problem, so the complete equality-case argument is supplied locally; his twin computation is
  a single diagram evaluation; his empirical narratives (Hafele–Keating, Chou et al. 2010, the 1974
  CERN muon experiment) are secondary reports deferred to `sr-experimental-interface` with the
  primary-report requirement. Carroll's maximality discussion is heuristic with an explicit curved
  "locally" caveat; Reall states the Minkowski maximum as "it can be shown". The flat global bound
  and equality case are supplied locally (design S6/M02); curved maximality and the variational
  route are deferred to `gr-connections-and-free-fall`.
- I did not re-fetch the PDFs during this dispatch (the coverage stamps and check runs above stand);
  a bounded consistency spot-check of Crowell §1.5 against its LibreTexts mirror matched the
  coverage descriptions (reversed Cauchy–Schwarz for timelike vectors; future-directedness needed
  only for the reversed triangle inequality).

## Prerequisites and unmet-prerequisite check

- 154 declared `deps` edges over the 15 items; 53 distinct prerequisites: 36 resolve to in-run
  items (batches 1–4 plus this page) and 17 to published imported mathematical items on disk;
  **0 unresolved**. No mathematical item of this pair depends on a physical item (checked run-wide
  over all current manifests).
- Page `requires`: `sr-observer-measurements` (in-run, order 215 < 219) and
  `construction-of-the-natural-numbers` (published imported mathematics page, plan order 80.12 <
  219, present in `library/foundations/` and in `research/math-imports.json`). The one Step-1
  `undeclared-prereq` finding recorded in the notes (the `thm-induction-principle` dependency via
  `cor-sr-reverse-triangle-and-future-cone-convexity`) is repaired in the current plan and manifest.
- First-hand tool runs this dispatch: `manifest-deps.mjs` on the batch-6 manifest → 15 items,
  0 errors; `content-policy.mjs --manifest-only` over all current manifests → 471 scoped items,
  0 errors, 0 warnings; `coverage-checklist.mjs ... --require-destination` → 0 errors;
  `item-dependency-levels.mjs check --run` → exit 0 (471 items, 80 pages, max level 24, no batch-6
  error); `frontier-item-gate.mjs --run ... --tool validate-plan` → exit 0, "declared page order is
  acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or
  unresolved ids", with **no finding for this pair** (the 33 advisory `redundant-prereq` warnings
  are all on EM pages).
- Consumers: `sr-accelerated-observers` (batch 10, order 227) declares the page edge; the batch-6
  cross-batch file carries 105 recorded incoming edges, all open pending authoring (expected at
  Step 3a). The B page is a leaf everywhere.
- **No unmet prerequisite found.** Every supplier the pair names is scaffolded in this run or is a
  published import; the previously recorded repair is present and the plan validator is clean.

## Observations and uncertainty (non-blocking)

1. The notes' 10-item layout and the current 9-item manifest differ only by the owner-directed move
   of `def-sr-piecewise-proper-time`; later readers should use the current manifests, not the notes'
   table.
2. The interface observations recorded at Step 1 (batch-3's piecewise-C¹ definition and the
   piecewise wording of the clock postulate) remain owner-side interface matters; the pair supplies
   its own weak-piecewise object and does not restate or weaken any batch-3 claim, so they are not
   scope gaps for this pair.
3. Source-status honesty is preserved and the pair asserts no empirical result; the remark
   explicitly excludes apparatus and measurement, and any future empirical twin/clock narrative
   requires primary reports in `sr-experimental-interface`.
4. Step 3a is scope only: proof correctness, source-fidelity re-verification and statistical review
   remain later-stage duties. Uncertainties carried honestly: the coverage dispositions rely on the
   recorded fetch stamps (not re-fetched here); dependency-level labels were not recomputed item by
   item beyond the run-wide level check above.

## Decision

Scope **sufficient**: every SR06/SR06B design element maps to scaffolded items (with the
owner-directed home move recorded and nothing dropped), the three sources are covered with all 20
harvested results disposed and every destination checked to exist, all 154 dependency edges resolve
(36 in-run + 17 published imports, 0 missing), the page `requires` repairs are present, and the
plan validator reports no finding for this pair. No omissions requiring enrichment or a pair merger
were found; the only prerequisites mentioned as potentially unmet at Step 1
(`construction-of-the-natural-numbers`) are now declared and gate-clean.
