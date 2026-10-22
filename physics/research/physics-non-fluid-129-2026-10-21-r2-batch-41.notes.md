# Batch 41 — Tetrads, Lorentz connections and spin interfaces

Run: `physics-non-fluid-129-2026-10-21-r2`; role: beta.

## Scope, plan comparison, and conflicts

Owned pair: `gr-fx13-tetrads-and-lorentz-spin` and
`gr-fx13-tetrads-and-lorentz-spin-examples`, category `general-relativity`,
library `physics`. The dispatch and current `research/plan-spec.json` agree on
the A/B IDs, title, category, library, order 779/780, and the six A-page
requirements. The B page requires the A page. No
`research/physics-non-fluid-129-2026-10-21-r2-owner-authoring-direction.md`
was present, so there is no owner override.

The detailed design reservation in
`research/plan-general-relativity-frontier-expansion-track.md` gives order
8025, while the controlling current plan gives 779/780. The batch manifest
uses the plan order. The detailed inventory lists four A items and two B
examples; the current `plan-spec.json` item arrays are empty. All six designed
claims are preserved. Four additional A-page items were added as local
prerequisites to discharge the design's explicit Lorentz-cover and frame-bundle
obligations. This is a recorded inventory expansion, not a statement change.

The six assigned page requirements were read in their current published pages.
`gr-tensors-and-observers` supplies the tetrad definition, local existence
proof, and change-of-basis lemma; `gr-connections-and-free-fall` and
`gr-framework-and-geometry` supply the smooth nondegenerate Lorentz metric and
the unique metric-selected connection; `gauge-groups-and-representation-theory-interfaces`
supplies the smooth principal-bundle and connection interfaces;
`riemann-curvature-and-riemannian-submanifolds` supplies the curvature-form
and second-Bianchi results; and
`topological-vector-bundles-and-grassmannian-classification` supplies the
frame, associated-bundle, and orientation interfaces. Their page-level
requirements remain exactly as planned. The new item proofs name their direct
mathematical suppliers separately.

## Design scope and conventions preserved

The Lorentz signature is `(-+++)`, the future cone is selected by the smooth
time-orientation field, and the spin group is defined through
`SL(2,C)` acting on Hermitian matrices. The spin-cover proposition proves
surjectivity by its differential, the inverse-function theorem, and
connectedness; it proves the kernel directly as `{+I,-I}`. The right-action
convention for the orthonormal frame bundle and the coframe change
`e'=Lambda e`, `omega'=Lambda omega Lambda^-1-dLambda Lambda^-1` are fixed
explicitly.

No global tetrad, spin structure, spinor field, or lift of a connection is
assumed to exist. The spin-lift item is conditional on supplied data. The
Euclidean `Spin(4)` result is not a Lorentz supplier; B example 2 shows with a
specific boost why an `SO(4)` target cannot serve verbatim. No time-gauge
`SU(2)` substitution, Palatini or Einstein-Cartan action, degenerate tetrad,
fermion torsion, or Holst/Immirzi term is asserted. These would require
separate stated equations or a supplied reduction. All ten items are
mathematical with `physical_scope: null`; no measurements or unit-dependent
claims are made.

## Prerequisite inspection and choice assumptions

The local tetrad definition, the local tetrad existence theorem, and the
metric-selected connection supplier all inherit `AC_omega` through the
canonical tangent-bundle and smooth-vector-field conventions. The assigned
connection definition, torsion equivalence, oriented frame-bundle result,
spin-cover proposition, spin-lift definition, Clifford proposition, and both
examples state this assumption where they use those interfaces. The two matrix
connectedness lemmas are choice-free. The cited Poincare-group item is used
only for its current proved six-dimensional smooth Lie-group structure on
`SO+(1,3)`; its statement assumes `AC_omega`, which the spin-cover proposition
carries explicitly.

The old general-relativity supplier register labels
`def-gauge-group-of-a-smooth-principal-bundle` as draft, but the current
`items/def-gauge-group-of-a-smooth-principal-bundle.md` is published. Its full
current definition was inspected; it distinguishes the structure group from
the gauge automorphism group. The current bytes and actual interface are used.
No prerequisite was escalated because a stale registry row, draft label,
pending precheck, missing local record, or absent independent approval.

## In-run item dependency order

The owned batch has no prerequisite batch inside this run and remains batch
level 0. Within the A/B pair, item levels were recomputed from the actual
manifest graph. The authoring order below places every in-run supplier before
its consumers; B examples are last.

| Item level | Items |
|---|---|
| 0 | `def-gr-fx-tetrad-spin-connection`, `lem-gr-fx-sl2c-connected`, `lem-gr-fx-so-plus-connected`, `prop-gr-fx-oriented-time-oriented-orthonormal-frame-bundle` |
| 1 | `prop-gr-fx-spin-double-cover`, `prop-gr-fx-torsion-free-tetrad-equivalence` |
| 2 | `def-gr-fx-lorentz-spin-lift` |
| 3 | `prop-gr-fx-lorentz-clifford-compatibility` |
| 4 | `ex-gr-fx13-1`, `ex-gr-fx13-2` |

The dependency chain is explicit: the Lorentz double-cover proof uses the two
local connectedness lemmas; the spin-lift definition uses the proved cover and
proved oriented time-oriented orthonormal frame bundle; Clifford compatibility
uses that spin-lift interface; both B examples use all four originally planned
A items and the actual Lorentz cover. The torsion result constructs the
connection from the supplied Levi-Civita theorem and proves the converse from
the Cartan torsion equation. No dependency cycle was found. The page cap is not
approached (eight A items and two B items).

Batch 42's holonomy page has an outgoing page requirement on this A page. Its
consumer is outside this batch and is noted as downstream context only; it is
not inserted as an unsupported row in this batch's dependency-review file. The
B-to-A page edge is within this batch. Therefore the owned
`batch-41.cross-batch-dependencies.json` is the required empty array.

## Source reading and harvested results

Three independent full-text treatments were read: Carroll's complete tetrad
and non-coordinate-basis chapter; Tong's complete connection-form and spinor
sections (one treatment, two section URLs); and Oblak's full SL(2,C) connected
and Lorentz-cover sections. The PDFs read locally are retained under the
batch's `sources/raw/` directory. The source-reading file records exact URLs,
locators, harvested source results, dispositions, and retrieval notes; the
coverage JSON records item support for each result and fetch-verification
stamps. Coverage checklist currently reports 19 harvested results, zero
errors, and zero warnings. There were no retrieval failures among selected
sources and no source-resolution drops or escalations. The separately
considered Rovelli PDF was not cited because its local text extraction did not
expose the relevant passages reliably; the three readable independent
sources provide the required coverage.

## Current authoring readiness

Before recording readiness, `loadStep1Record` read the current run snapshot
(258 pages, 242 populated items). The ten owned records were initially missing,
which was the expected pre-recording state and was not treated as a prerequisite
gap. After final scoped checks, `step1Decision` confirms all ten records are
`ready`, hash-current, and non-owner; each records its direct dependencies.
Current supplier statements and proofs were inspected directly, with their
actual hypotheses and interfaces recorded in the items. No escalation is open.

## Scoped checks and outstanding limits

Final checks after the last item and manifest edits:

| Check | Result |
|---|---|
| `proof-layout.mjs` on the ten explicit changed item files | Pass: 10 items, 32 numbered steps, 0 defects. |
| Strict batch proof contracts | Pass: 10/10 items, 0 errors, 0 warnings; every numbered step is mapped and each linked fact has an exact supplier excerpt. |
| `content-policy.mjs` on the batch manifest | Pass: 10 scoped items, 0 errors, 0 warnings. |
| Focused `depcheck.mjs` | Pass: 10 selected items; 1,178 dependency-closure items, 0 closure pages, 0 errors, 0 warnings. |
| Coverage checklist with destination requirement | Pass: 19 harvested results, 0 errors, 0 warnings. |
| `source-fetch-check.mjs` | Pass: 4/4 source URLs fetch-verified; 0 drops. |
| Scoped item dependency levels | Pass: all ten items, levels 0–4, 0 errors. |
| Batch dependency-level schedule | Pass: 129 batches, maximum level 5; batch 41 level 0 with no in-run prerequisite batches. Current batch 42 is level 1 and requires batches 40 and 41. |
| Whole-run item dependency checker | Exit 1 due 190 empty or malformed scaffold inventories in other batches; 0 errors name this pair or its items. The assigned pair's scoped graph passes; other batches remain outside ownership. |

The Step 1 snapshot used for the final records contains 258 run pages and 242
populated run items. All ten assigned readiness records are current. These Step 1
records document completed authoring and prerequisite inspection; they do not constitute
independent proof approval or close later review gates. No owned prerequisite,
source retrieval, proof-contract, or placement blocker remains.

