# Batch 17 authoring notes — `emg-mm02`

## Plan, design, and inventory

The controlling design is `research/plan-einstein-maxwell-models-track.md` §
“Arbitrary-positive-H conformastatic Ricci and Einstein components” (L579),
read with its complete surrounding design text. It and `research/plan-spec.json`
agree on the page pair, titles, category, mathematics library, order 469/470,
and sole page prerequisite `emg-mm01`. The original reservation is three A
results (`lem-emg-conformastatic-curvature`,
`thm-emg-smooth-counterpoised-dust`, and
`cor-emg-regular-counterpoised-sphere`) and two B examples (B05 and B06).
The active manifest adds two A-page mathematical prerequisites, the chart
coordinate definition and its Lorentzian-frame lemma, before their consumers.
The resulting five A items and two B items are below the 100-item limit.

The older research-only `research/extended-frameworks-2026-10-03/einstein-
maxwell-models/proposed-inventory.json` conflicts with the controlling plan in
two places. Its EMG-MM02 page reservation additionally requires `EMG-MG01`,
which the current design and plan-spec do not require. Its ML07–ML09 and B05–
B06 rows also list generic extra dependencies: `def-emg-finite-real-supremum-
domain`, `def-emg-real-metric-axiom-convention`,
`lem-emg-metric-axioms-imply-nonnegativity`,
`lem-emg-sequence-limit-criterion-with-choice`, and
`def-emg-boundaryless-completeness-domain`. Those are not direct inputs to the
complete local coordinate, smooth-field, or proper-integral arguments authored
here; the exact differential, tensor, calculus, measure, and choice inputs are
listed on the current items below. The current plan controls. The old inventory
and the shared plan were left unchanged. The plan-spec item arrays remain
preauthoring placeholders; `batch-17.pages.json` records the actual authored
inventory.

## Scope and conventions

The A page defines a global length-coordinate chart on `M = R × D`, with
`D ⊆ R^3` open, positive `H`, signature `(-,+,+,+)`, coordinate orientation
`dx^0 ∧ dx^1 ∧ dx^2 ∧ dx^3`, and the future direction selected by
`n = H ∂_0`. Here `x^0 = ct`, `H` is dimensionless, and spatial derivatives,
`q = Σ H_i²`, and `ΔH` use the definitions on the chart item. The curvature
item fixes the Riemann sign
`R(X,Y)Z = ∇_X∇_Y Z − ∇_Y∇_X Z − ∇_[X,Y] Z`, the Ricci contraction, and the
Einstein tensor. Its arbitrary-positive-`H` tables do not assume harmonicity.
The coupled family is conditional on the stated smooth positive `H` with
`ΔH ≤ 0`, formal SI constants, `Λ = 0`, and only the indexed choice axiom
`AC_ω`. It checks the Maxwell, dust-exchange, and Einstein equations by
components, handles `ρ = 0` without division, and makes no physical-law,
realization, stability, or general initial-value claim. The sphere calculation
uses the induced spatial volume density and exact Lebesgue integrals; it makes
no ADM-mass identification. The B-page estimates are exact mathematical
bounds, not measurements or uncertainties. No reported observation or
statistical inference is used.

The current proof records preserve the plan’s signature, orientation, static
ansatz, and model warnings. The source paper’s `c = G = 1` and Gaussian units
are not imported into the SI component proof. All seven carriers remain in the
mathematics domain/library with `physical_scope: null` and mathematical-only
dependency roles.

## Item dependencies and levels

The assigned A-page items are ordered supplier-first. Levels were recomputed
from current in-run item suppliers; published mathematical dependencies do not
raise them.

- `def-emg-conformastatic-chart-data` — level 0; direct mathematical inputs:
  `thm-real-power-continuity-and-derivatives`,
  `thm-ck-euclidean-maps-closed-under-algebra-and-composition`. Its
  `justified_by` Lorentzian lemma is a validation context, not a logical level
  edge.
- `lem-emg-conformastatic-chart-is-lorentzian` — level 1; supplier:
  `def-emg-conformastatic-chart-data`.
- `lem-emg-conformastatic-curvature` — level 2; suppliers: chart definition,
  Lorentzian lemma, positive-base power derivative, chain rule, derivative
  algebra, and Clairaut–Schwarz mixed partials.
- `thm-emg-smooth-counterpoised-dust` — level 3; suppliers: chart definition,
  Lorentzian lemma, curvature table, formal matter systems, explicit positive
  powers, countable choice, charged-dust projection, selected energy
  conditions, the Levi-Civita/tensor-derivative theorem, derivative algebra,
  the local exterior-derivative formula, and `d² = 0`.
- `cor-emg-regular-counterpoised-sphere` — level 4; suppliers: explicit power
  regimes, positive-root smoothness, countable choice, Lebesgue measure and
  nonnegative-integral definitions, signed-integrability and integral-linearity
  results, continuous-to-Borel and Borel-to-Lebesgue measurability, the polar
  surface-measure definition and polar-coordinate theorem, the sphere-area
  lemma, C1 change of variables, affine-hyperplane nullity, derivative/chain
  rules, trigonometric derivative/monotonicity/value identities, the inverse
  function theorem, IVT, Riemann integrability and its Lebesgue agreement,
  Newton–Leibniz, the energy-condition theorem, and the two local curvature and
  coupled-family items.
- `ex-emgmath-ml-b05` — level 5; suppliers: countable choice, the coupled
  family, curvature table, and sphere corollary.
- `ex-emgmath-ml-b06` — level 5; suppliers: countable choice, sphere
  corollary, and coupled family.

The A page requires `emg-mm01`; the B page requires `emg-mm02`. The direct
cross-batch file has one page edge and seven item edges, all `verified` after
checking each current interface and its stated use. These statuses record
scoped interface/readiness checks only; they are not independent proof
approval. `def-countable-choice` is on the published mathematics page
`countability-and-uncountability`, not in another batch of this run, so its
direct use is recorded on items but is not a run cross-batch row.

A read-only comparison of the eight rows with all manifest-declared direct
cross-batch page and item edges found no missing or extra rows.

The current batch-level computation is level 4 with prerequisites `[2, 15]`:
batch 15 supplies the required MM01 page and selected matter items, while batch
2 supplies the explicit-power definition and positive-root lemma. The shared
`batch-dependency-levels.json` still records level 4 with only `[15]`; its
check reports stale metadata. It is a shared owner file and was not edited.
The page-level plan prerequisite remains the exact planned `emg-mm01` edge.

## Cross-batch interfaces

`batch-17.cross-batch-dependencies.json` contains these eight direct edges:

- page `emg-mm02` → `emg-mm01` (batch 15);
- `thm-emg-smooth-counterpoised-dust` →
  `def-emg-matter-formal-systems` (15),
  `def-emg-explicit-power-regimes` (2),
  `thm-emg-charged-dust-projection` (15), and
  `thm-emg-selected-matter-energy-conditions` (15);
- `cor-emg-regular-counterpoised-sphere` →
  `def-emg-explicit-power-regimes` (2),
  `lem-emg-positive-square-root-smoothness` (2), and
  `thm-emg-selected-matter-energy-conditions` (15).

The batch-2 power definition and root-smoothness lemma have current owner
Step-1 `ready` records. The three batch-15 item suppliers have current
non-owner Step-1 `ready` records; their actual statements, relevant proofs,
hypotheses, signs, regularities, and choice strength were checked at use. The
MM01 page and its selected carriers were inspected. Its upstream page context
and unrelated edges remain observations about batch 15 and are not added as
MM02-owned review rows. Every consumer argument remains conditional on these
actual supplier statements and proofs.

## Sources and harvest

`batch-17.coverage.json` records the complete sources, URLs, locators, and all
seven harvested result dispositions. Two independent complete GR lecture-note
treatments were inspected, plus the complete specialized paper:

- Sean M. Carroll, *Lecture Notes on General Relativity*, complete 238-page
  PDF, <https://arxiv.org/pdf/gr-qc/9712019v1>. Ch. 3 equations (3.65)–(3.67)
  support the curvature-sign/convention cross-check; equations (3.90), (3.92),
  and (3.95) support the Ricci/scalar/Einstein contraction convention. These
  three harvested results are dispositioned inline in the curvature item,
  whose component products and contractions are recalculated locally.
- David Tong, *General Relativity*, complete 290-page author-hosted notes,
  <https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf>. §§3.2.2–
  3.2.3, equations (3.14)–(3.16), and §3.4.1, equations (3.39)–(3.41),
  independently support the coordinate curvature and contraction convention.
  Both harvested results are dispositioned inline in the curvature item.
- Reinhard Meinel and Moritz Hütten, *On the black hole limit of electrically
  counterpoised dust configurations*, complete 8-page paper,
  <https://arxiv.org/pdf/1105.3807>. §2 equations (1)–(7) supply model context
  for the conformastatic form and selected formal matter equations. Both
  harvested results are dispositioned inline in the chart definition and
  coupled-family theorem; their differing unit and sign conventions are not
  used as proof steps.

The full-body fetch stamps from batch 15 were reused as existing evidence.
`source-fetch-check --stamp` verified all 3 sources with 0 new stamps, and check
mode verified all 3. There were no retrieval failures, recovery retries, drops,
or source-resolution escalations; `source_resolution` is empty. Harte’s
*Gravitational lensing beyond geometric optics I* was not selected: its
inspected wave-optics and transport results support the separate ML05 topic,
not this curvature table or smooth charged-dust family. No source is marked
`dropped`.

## Proof contracts, readiness, and checks

The proof contract covers the six proof-bearing carriers with 55 exact
fact/supplier citations, 35 numbered derivations, all eight boundary cases per
item, and the applicable finite exact-component checks. The chart definition
has no proof obligation; its `verification.precheck` is `n/a`. All six
proof-bearing items have `verification.precheck: pass`. The normative precheck
canonicalized phase labels and prior-step references to match dependency
layers; the arguments and calculations were unchanged.

`step1-decisions.mjs record` wrote seven fresh non-owner `ready` records in
supplier-first order. A scoped readiness recheck reports all seven hashes
current. These records mean the assigned statements, proofs, placement,
contracts, and prerequisite inputs are present for authoring review; they do
not grant independent proof approval or publication.

Final scoped results:

- Precheck: 6 proof-bearing items checked, 0 failing; the chart definition is
  not applicable to proof-format checking.
- Proof layout: 7 items, 35 steps, 0 defects.
- Rendercheck: 9 assigned item/page files passed KaTeX, links, delimiters, and
  frontmatter parsing.
- Coverage checklist: 1 A page, 7 harvested results, 0 errors, 0 warnings.
- Proof contract strict check: 6/6 items, 0 errors, 0 warnings.
- Depcheck: 7 selected items; focused prerequisite cycle context covered 1,319
  items and 355 pages, passed.
- Content policy: 7 items, 0 errors, 0 warnings.
- Manifest dependencies: 7 items, 0 missing deps arrays, 0 errors.
- Manifest integrity: 160 pages owed and present, no scope drift.
- Targeted item levels: all seven items pass at levels `[0,1,2,3,4,5,5]`.

## Run-wide findings for the owner

The run-wide proof-contract-coverage command currently stops at the unrelated
empty page inventory `emg-mp03`. The run-wide item-dependency-levels command
also reports 44 empty scaffold pages outside batch 17:

`emg-mp03`, `emg-mp03-examples`, `emg-mp02`, `emg-mp02-examples`,
`emg-ms03`, `emg-ms03-examples`, `emg-s01`, `emg-s01-examples`, `emg-s02`,
`emg-s02-examples`, `qsm-commuting-quantum-phases`,
`qsm-commuting-quantum-phases-examples`, `qsm-nonnormal-thermal-states`,
`qsm-nonnormal-thermal-states-examples`, `qsm-infinite-spin-physical-models`,
`qsm-infinite-spin-physical-models-examples`, `qsm-dt-channels`,
`qsm-dt-channels-examples`, `qsm-dt-relaxation`,
`qsm-dt-relaxation-examples`, `tgr-c04`, `tgr-c04-examples`, `tgr-et03`,
`tgr-et03-examples`, `tgr-pet01`, `tgr-pet01-examples`, `tgr-pet02`,
`tgr-pet02-examples`, `tgr-pet03`, `tgr-pet03-examples`, `tgr-g01`,
`tgr-g01-examples`, `tgr-g02`, `tgr-g02-examples`, `tgr-mhs01`,
`tgr-mhs01-examples`, and `tgr-phs01` through `tgr-phs04`, each with its
`-examples` companion. These pages are outside this assignment and were not
edited. The current run-wide item-level output shows no target-item level error.
