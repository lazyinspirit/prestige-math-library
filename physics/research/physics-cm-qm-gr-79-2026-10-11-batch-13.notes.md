# Batch 13 notes — `cm-math-chaos` / `cm-math-chaos-examples`

Run `physics-cm-qm-gr-79-2026-10-11`, role beta, label batch-13, covering the single A/B pair
`cm-math-chaos` (order 105) and `cm-math-chaos-examples`. Category
`non-relativistic-classical-mechanics-mathematics`, library `mathematics`. Step-1 complete
initial authoring; this file records checkpoint evidence, conflicts and unresolved findings. It
is not an approval, and no readiness record is independent mathematical approval — Step-2/3
review follows.

## Inventory and levels

- A page `cm-math-chaos`, 16 items, all `domain: mathematics`, all `deps` annotated
  `mathematical-premise`, none carrying `physical_scope`:
  `def-bilateral-symbol-and-bounded-sequence-space` (2),
  `lem-bounded-bilateral-sequence-ball-is-complete` (3),
  `lem-coded-quadratic-recurrence-is-a-contraction` (4),
  `lem-symbol-locality-gives-coding-continuity` (5),
  `thm-henon-coded-invariant-set-is-conjugate-to-shift` (6),
  `lem-finite-word-deviations-give-homoclinic-orbits` (7),
  `def-stable-unstable-cones-and-line-slopes` (0), `lem-slope-graph-transforms-converge` (1),
  `lem-weighted-tail-contractions-give-c-one-curves` (4),
  `lem-tail-curve-tangents-and-homoclinic-transversality` (8),
  `lem-close-map-first-component-has-uniform-inverse` (3),
  `lem-perturbed-scalar-recurrence-root-bounds` (4),
  `thm-explicit-perturbed-horseshoe-and-transversality` (5),
  `def-smooth-periodic-oscillator-pulse-model` (1),
  `lem-rescaled-pulse-map-is-c-one-close-to-kick` (2),
  `thm-smooth-fixed-mass-mechanical-horseshoe` (6).
- B page `cm-math-chaos-examples` lives only through its five examples:
  `ex-cm-chaos-contraction-and-coded-fixed-sequence-checks` (5),
  `ex-cm-chaos-slope-transform-fixed-point-checks` (5),
  `ex-cm-chaos-finite-word-homoclinic-code-checks` (8),
  `ex-cm-chaos-pulse-and-rotation-endpoint-checks` (2),
  `ex-cm-chaos-perturbed-root-and-margin-checks` (5).
- Levels are one plus the maximum level of an in-run `deps` target; published root suppliers and
  out-of-run pages do not raise levels. Verified mechanically with
  `node tools/physics-support/item-dependency-levels.mjs check --run physics-cm-qm-gr-79-2026-10-11`:
  zero errors naming a batch-13 item (the remaining errors name other batches' pages, e.g. the KAM
  batch's `cm-math-kam` items and the run's other empty scaffolds; they are outside this scope).
- Twenty-one items are far below the 100-item cap; no page split was needed. No item depends on a
  physical item, and no physical postulate, measurement or empirical claim appears anywhere: both
  pages are pure mathematics. The statistical/double-slit qualifications are therefore not
  implicated, and no experiment item is authored.
- Every in-run supplier from batches 1, 2 and 3 was read at its exact statement before use and is
  recorded in `…-batch-13.cross-batch-dependencies.json` (19 rows: 3 page edges + 16 item edges,
  all `verified`).

## Files written by this batch

- `items/` carriers for the 21 ids above; page carriers
  `library/non-relativistic-classical-mechanics-mathematics/cm-math-chaos.md` and
  `…-cm-math-chaos-examples.md`.
- `research/physics-cm-qm-gr-79-2026-10-11-batch-13.pages.json` (per-item statements, `deps`,
  `dependency_roles`, `dependency_level`, provenance, sources).
- `research/physics-cm-qm-gr-79-2026-10-11-batch-13.coverage.json` (8 source entries over the two
  pages, 39 harvested results, all 8 entries fetch-verified, 0 documented drops).
- `research/physics-cm-qm-gr-79-2026-10-11-batch-13.proof-contracts.json` (18 proof-bearing items,
  strict contract green, 249 recorded citation rows and 121 derivation rows, boundary worksheets
  for all eight standard cases on every item).
- `research/physics-cm-qm-gr-79-2026-10-11-batch-13.cross-batch-dependencies.json` (19 verified rows).
- `research/physics-cm-qm-gr-79-2026-10-11-step1-<id>.json` readiness records for the 21 ids,
  recorded last so their input hashes are current.

## Design vs plan-spec

`research/plan-non-relativistic-classical-mechanics-track.md` L308 (section E27) controls: page id
`cm-math-chaos`, companion `cm-math-chaos-examples`, order 105, local proved section `E27`,
internal local proof dependencies `E2`, `E7`, `E12`, `M10`, published canonical mathematical
suppliers `thm-banach-fixed-point` and `thm-smooth-dependence-of-ode-solutions-on-parameters`, and
the reservation block `{"A_budget": 80, "B_budget": 30, "provisional_A_sections": ["E27"],
"section_count_not_item_count": true}` with the fifteen provisional split items now authored and
one further local definition (`lem-bounded-bilateral-sequence-ball-is-complete`) added to make the
sup-norm ball complete without new published suppliers.

**No `requires` extension was needed.** The plan-spec `requires` for order 105 is exactly the two
entries above, and the transitive closure of that pair already contains every page actually used:
`cm-math-geometry` (batch 1, `def-cm-stroboscopic-map`), `cm-math-balances` (batch 2,
`thm-cm-compact-continuation-for-locally-lipschitz-odes`), `cm-math-dynamics` (batch 3, the shift
space, shift metric/compactness, chaos definition and shift chaos theorem) and the published root
pages supplying `thm-banach-fixed-point`, the ODE dependence theorems, the inverse/implicit
function theorems, the determinant items and the metric/order foundations. `validate-plan.mjs`
therefore reports `undeclared-prereq` only for `cm-math-kam` (another batch's page) and a WARN
`redundant-prereq` for `cm-math-chaos` because `completeness-and-uniform-continuity` is already
reachable through `cm-math-canonical`; the plan-spec lists both explicitly, so the manifest keeps
both and the warning is recorded here rather than resolved by dropping a declared prerequisite.
The Step-1 drift record for this page is part of `…-alpha-step1-drift.md`; the plan-spec item lists
are empty (`items: []`), so there is no item-level plan conflict.

### How E27 was delivered

- Coding: `def-bilateral-symbol-and-bounded-sequence-space` and
  `lem-bounded-bilateral-sequence-ball-is-complete` build the two-sign shift space, its distance
  and the complete ball of bounded sequences; `lem-coded-quadratic-recurrence-is-a-contraction`
  proves the square-root contraction with constant `1/L` on `B_R`;
  `lem-symbol-locality-gives-coding-continuity` proves the finite-window locality, the uniform
  error `2R L^{-m}`, continuity and injectivity of `h`.
- Invariant set: `thm-henon-coded-invariant-set-is-conjugate-to-shift` proves invariance,
  conjugacy, sequential compactness (compactness under `AC_omega + DC`) and chaos of `F|Lambda`
  with sensitivity constant `2L`; `lem-finite-word-deviations-give-homoclinic-orbits` identifies
  the constant-code fixed points `r_u = 1 + u sqrt(a+1)` and the finite-word homoclinic points.
- Cones and curves: `def-stable-unstable-cones-and-line-slopes` fixes the cone, slope, line-field,
  stable/unstable-set and transverse-homoclinic vocabulary; `lem-slope-graph-transforms-converge`
  proves cone invariance, expansion and the unique invariant line fields;
  `lem-weighted-tail-contractions-give-c-one-curves` isolates the weighted half-tail contraction;
  `lem-tail-curve-tangents-and-homoclinic-transversality` produces the `C^1` stable and unstable
  curves through finite-word points, proves `C^s_{1/2} cap C^u_{1/2} = {0}` transversality, and
  identifies the local stable set of each fixed point exactly with the constructed graph over
  `|b - r_u| <= 1/8` (clause 4), the unstable analogue being its reflection under
  `Sigma(x,y) = (y,x)`.
- Persistence: `lem-close-map-first-component-has-uniform-inverse`,
  `lem-perturbed-scalar-recurrence-root-bounds` (including the exact orbit form
  `P_{u,w}(v)=0 iff B(u,V(u,v))=V(v,w)`) and
  `thm-explicit-perturbed-horseshoe-and-transversality` give the explicit perturbed horseshoe with
  hyperbolicity proved by an entrywise determinant expansion, so no structural-stability theorem
  is consumed.
- Smooth realisation: `def-smooth-periodic-oscillator-pulse-model`,
  `lem-rescaled-pulse-map-is-c-one-close-to-kick` (kick limit in `C^1`, smooth invertibility,
  symplecticity, reverse-conjugate closeness) and
  `thm-smooth-fixed-mass-mechanical-horseshoe` conclude chaos and transverse homoclinic points for
  the period map of the explicit smooth pulsed oscillator.

## Sources and source handling

Full-text sources (per-page entries in `.coverage.json`; bodies fetched and inspected, then stamped
by `source-fetch-check --stamp`; 8/8 entries fetch-verified, 0 documented drops):

- G. Teschl, *Ordinary Differential Equations and Dynamical Systems* (AMS GSM 140, author's
  complete online edition): Section 11.5 metric and Lemma 11.15 on two-sided sequence spaces;
  Sections 13.1-13.2 (quadratic horseshoe, coding, stable/unstable manifolds, transverse homoclinic
  points); Sections 2.4, 4.2, 6.4 and 4.6-4.7 (Gronwall, dependence, Poincare maps, periodic
  equations). The Melnikov Section 13.3 is recorded out of scope: persistence is proved by the
  explicit discrete perturbation theorem instead.
- P. Cvitanovic et al., *Chaos: Classical and Quantum* (ChaosBook.org edition 17.6.8): Chapter 14
  Section 14.6 (itinerary distance), Chapter 15 Sections 15.1-15.3 (stable/unstable curves,
  complete horseshoe, persistence remark), Chapter 8 Sections 8.2 and 8.5 (Hamiltonian maps and
  symplectic structure).
- R. Devaney and Z. Nitecki, *Shift automorphisms in the Henon mapping*, Comm. Math. Phys. 67
  (1979) 137-146: the Theorem statements i)-iv), the coding construction (pp. 142-143), Lemma 4 and
  Propositions 3-4 on invariant sectors and the uniform expansion factor (pp. 143-145). The
  small-parameter escape statements and the filtration construction are recorded out of scope.
- S. Dyatlov, MIT 18.155 lecture notes: existence of smooth compactly supported cutoffs, used for
  the normalised pulse; the remaining material of the notes is out of scope.

**Devaney–Nitecki retrieval record.** The Project Euclid URL initially returned a 1,167-byte
Incapsula bot-wall HTML page to a plain fetch. The first retry with a browser user agent returned
the complete 10-page PDF (943,063 bytes), which was inspected at the locators above; the full text
was independently retrieved through the search provider as a cross-check. The durable
`fetch_verified` stamp in the coverage file records the successful PDF fetch. No source drop was
needed and no alternative argument was substituted.

## Checks run (actual results)

- `precheck` (via `tsx-run`): 18 proof-bearing items checked, 0 failing; the three definition items
  pass the nonproof-structure check. Canonical step numbering adopted where the tool proposed it.
- `proof-layout.mjs` on all 21 item paths: 121 steps, 0 defects.
- `rendercheck.mjs` on all 21 items and both page carriers: OK (no wikilink inside math, no nested
  or unbalanced delimiters, no multiline display block, every math span parses under KaTeX, every
  frontmatter block parses).
- `coverage-checklist.mjs`: 2 pages, 39 harvested results, 0 errors, 0 warnings.
- `source-fetch-check.mjs --stamp` then check mode: 8/8 source entries fetch-verified, 8/8 resolved.
- `content-policy.mjs`: 21 scoped items, 0 errors, 0 warnings.
- `manifest-deps.mjs`: 21 items, 0 normalized, 0 errors.
- `item-dependency-levels.mjs check --run …`: no error naming a batch-13 item; the reported errors
  belong to other batches (see above).
- `audit-manifest.mjs research/…-batch-*.pages.json` over the full run: 6742 relationships over
  589 items in 79 batches, 0 defects (batch-13's in-run suppliers classify as `cross-batch`,
  published suppliers as `published-backward`).
- `proof-contract.mjs --strict`: 18/18 items checked, 0 errors, 0 warnings.
- `citation-fidelity.mjs`: 249 citations over 18 items; no missing quotes and no widening
  candidates found by the three detectors.
- `boundary-audit.mjs`: 144 rows, 19 not-applicable; no template cluster at or above three
  members. The one heuristic "contradicted" candidate (`lem-tail-curve-tangents-and-homoclinic-transversality`,
  `empty` axis, fired on the word "family" in the Statement) was resolved at the source: the
  Statement now reads "half-tail solution map $b\mapsto u_0(b)$", and the `empty` row records
  that these solutions are parametrized by `b` in the nonempty interval `[-R,R]` with nonempty
  curve domains and neighbourhood, so no quantification over an empty carrier occurs. Re-run:
  zero contradicted candidates.
- `validate-plan.mjs research/plan-spec.json --run …`: no `undeclared-prereq`, `forward-ref`,
  cycle or size error for `cm-math-chaos` or its companion; one `redundant-prereq` WARN recorded
  above; the eight `undeclared-prereq` errors belong to `cm-math-kam`.
- `depcheck.mjs` (whole repo): FAIL is driven by the pre-existing published-unaudited root corpus;
  the batch-13-specific findings were two classes, both addressed: every `cited-not-in-deps` line
  naming a batch-13 item was removed during the final dependency sync, and the single
  `link-unresolved` line (`[[cm-math-chaos-examples]]` from a definition item) was converted to
  plain text because item bodies resolve item ids only, not page ids.
- `fwdcheck.mjs` (whole repo): the reported hard errors name no batch-13 item; the batch's pages
  contain no forward reference.
- `proof-contract-coverage.mjs --run … --contracts …`: cannot complete a whole-run pass because
  pages of other, not-yet-authored batches are still empty scaffolds (it stops at
  `cm-math-numerical` with "Empty or invalid frontier page inventory"); this is a run-completeness
  condition outside batch 13, and no finding touches the batch.
- `frontier-dependency-ledger.mjs refresh --run …`: refreshed and deduplicated.

## Final consistency pass (post-authoring repairs)

- Conclusion step-lists repaired so that every cited label exists and names the intended step:
  `lem-slope-graph-transforms-converge` step 6.1 (garbled "steps 3.1-2.3 and 3.1" replaced by the
  clause mapping: steps 3.1, 4.1 and 5.1 for clause 3, steps 3.2 and 5.1 for clause 4, step 4.2
  for the uniqueness assertions); `lem-perturbed-scalar-recurrence-root-bounds` step 6.1 (garbled
  "steps 1.1, 3.1-2.2, 3.1 and 4.1" replaced by step 1.1 for clause 1, steps 2.1, 2.2, 3.1 and
  4.1 for clause 2, step 5.1 for clause 3, step 2.3 for clause 4);
  `lem-bounded-bilateral-sequence-ball-is-complete` step 5.1 ("steps 1.1-3.1" expanded to "steps
  1.1, 2.1 and 3.1"; the clause-3 reference to step 1.2 was checked and is correct, since step
  1.2 is the isometry step that proves clause 3).
- Checked and left unchanged, every cited label verified to exist and to prove the named content:
  `thm-henon-coded-invariant-set-is-conjugate-to-shift` step 5.1 (step 1.2 continuity, step 4.3
  mixing, step 4.4 dense periodic points, step 3.2 sensitivity) and
  `lem-tail-curve-tangents-and-homoclinic-transversality` step 6.1 (steps 4.3 and 5.1).
- After the edits: `regen-contract-entries` for the four touched ids, `proof-contract --strict`
  18/18 with 0 errors and 0 warnings, `citation-fidelity` and `boundary-audit` clean, and the
  readiness records for all 21 items re-recorded so their input hashes are current.

## Unresolved findings and escalations

- No published mathematical defect was found in a supplier used by this batch, and no escalation to
  the owner is required: every prerequisite used is either published, or an in-run draft from
  batches 1-3 whose statement was read and recorded in the cross-batch file. The owner-authoring
  direction's exception for EM/SR draft context is not implicated (no such item is used).
- The only recorded plan divergence is the WARN `redundant-prereq` (declared both
  `cm-math-canonical` and `completeness-and-uniform-continuity`), which follows the plan-spec text;
  recorded here rather than silently resolved.
- `def-smooth-periodic-oscillator-pulse-model` refers to its companion examples page by name only,
  because item-level wikilinks are resolved against item ids. The page carriers link the item ids.
- All mathematical content is conditional on its explicit hypotheses (`a >= 100`, the stated ball
  and cone parameters, `epsilon <= 1/6` and `C epsilon <= 1` for the perturbed theorem, and
  `0 < delta < delta_0` for the smooth realisation); no absolute smallness, optimality or physical
  interpretation is claimed. Sensitivity constants `2L` and `2l` are not claimed optimal, and no
  attractor, measure-theoretic or physical statement is made.

## Readiness

Readiness records were recorded for all 21 items with `step1-decisions.mjs record` after the final
carriers, page files, coverage, contracts and manifest were written, with the item's `deps` array
as the examined-dependency list. `step1-decisions.mjs check --run …` then reports the batch's
records closed (subject to the run-wide state outside this batch).
