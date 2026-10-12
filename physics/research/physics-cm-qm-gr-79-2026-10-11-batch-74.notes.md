# Batch 74 notes — `gr-linearized-waves` / `gr-linearized-waves-examples`

Run `physics-cm-qm-gr-79-2026-10-11`, role beta, label batch-74, covers 74.
Step-1 complete initial authoring; a worker exit, the readiness records and
every green gate below are **not** independent mathematical approval (Steps
2–3 review follow). Single-agent authoring: no sub-agents were spawned; every
carrier was drafted, checked and recorded in this dispatch by the beta.

## Scope built

- A page `gr-linearized-waves` (order 251, category `general-relativity`,
  `library: physics`), 12 locally authored items: 3 definitions
  (`def-gr-plane-wave-perturbation`, `def-gr-wave-screen-and-tt-projection`,
  `def-gr-linearized-wave-regime-and-detector-coupling`), 3 lemmas
  (`lem-gr-null-phase-coordinate`, `lem-gr-tt-screen-projector`,
  `lem-gr-plane-wave-gauge-decomposition`), 2 mathematical theorems
  (`thm-gr-tt-plane-wave-solutions`, `thm-gr-tt-plane-wave-curvature`), 3
  physics-theorems (`pthm-gr-linearized-field-equations`,
  `pthm-gr-plane-wave-polarizations`,
  `pthm-gr-plane-wave-tidal-detector-response`) and 1 scope remark
  (`rem-gr-linearized-wave-scope-and-deferred`). Seven items are mathematics,
  five are physics (`domain: physics` with `physical_scope`).
- B page `gr-linearized-waves-examples` (order 252), 5 leaf items: 3 examples
  (`ex-gr-sinusoidal-tt-plane-wave`,
  `ex-gr-tt-screen-projection-computation`, `ex-gr-plane-wave-regauge-to-tt`)
  and 2 counterexamples
  (`cex-gr-subluminal-planar-profile-not-a-vacuum-wave`,
  `cex-gr-half-trace-subtraction-on-the-rest-space`); four are `domain:
  mathematics` and `ex-gr-sinusoidal-tt-plane-wave` is `domain: physics`
  (see the domain audit below).
- Library carriers `library/general-relativity/gr-linearized-waves.md` and
  `…-examples.md`, both `status: draft`, with page prose and the full item
  inventories. `_category.md` already existed and is unchanged.
- Manifest `research/physics-cm-qm-gr-79-2026-10-11-batch-74.pages.json`
  regenerated after every carrier or dependency edit; the final regeneration
  preceded the readiness records.
- Design budget (A 30 / B 12) and the 100-item cap are respected (12 + 5).
  No page split was needed; every prerequisite is placed on the page that
  uses it, and all remaining gaps are suppliers in earlier pages/batches.
- No experiment, measurement, apparatus record, empirical premise, empirical
  uncertainty or numerical amplitude occurs anywhere in the batch. The three
  physics-theorems state this explicitly, and
  `rem-gr-linearized-wave-scope-and-deferred` records what is deferred
  (sources and radiation, quadrupole energy, curved backgrounds, light
  propagation and optical readout, nonlinear and exact strong-field
  solutions, quantum aspects).

## Design versus plan-spec conflict (recorded; plan controls)

`research/plan-general-relativity-track.md` L214–237 (page GR10) reserves
`requires: [GR04, GR05, GR06, GR07]` for this page. `research/plan-spec.json`
declares for `gr-linearized-waves` only
`requires: ["gr-flat-and-newtonian-bridges","gr-local-and-global-energy"]`.
The current plan controls this run, so the scaffold keeps exactly the two
plan prerequisites as its design roots; the manifest additionally declares
the dependency closure needed by the authored items (see "Page requires
reconciliation" below). The design's "def perturbation/gauge/trace reverse"
is delivered by the batch-71 supplier
`def-gr-flat-linearized-perturbation` on `gr-flat-and-newtonian-bridges`,
not by a duplicate local definition.

## Design inventory coverage

Design inventory "def perturbation/gauge/trace reverse" =
`def-gr-plane-wave-perturbation` plus the batch-71 suppliers
`def-gr-flat-linearized-perturbation`,
`thm-gr-flat-linearized-curvature-and-gauge`; "M18 linearized field
equations" = `pthm-gr-linearized-field-equations` (with
`thm-gr-flat-linearized-curvature-and-gauge` clause (c) and
`thm-gr-flat-wave-equation-duhamel-and-harmonic-gauge` for existence);
"pthm plane-wave polarization/geodesic-deviation response" =
`pthm-gr-plane-wave-polarizations`,
`thm-gr-tt-plane-wave-solutions`, `thm-gr-tt-plane-wave-curvature`,
`pthm-gr-plane-wave-tidal-detector-response`; "def approximation and
detector coupling" =
`def-gr-linearized-wave-regime-and-detector-coupling`. The mathematical
support items (`def-gr-wave-screen-and-tt-projection`,
`lem-gr-null-phase-coordinate`, `lem-gr-tt-screen-projector`,
`lem-gr-plane-wave-gauge-decomposition`) exist because the design's claims
cannot be stated or proved without the screen, the projectors and the
amplitude classification. B-page leaves: `ex-gr-sinusoidal-tt-plane-wave`,
`ex-gr-tt-screen-projection-computation`, `ex-gr-plane-wave-regauge-to-tt`,
`cex-gr-subluminal-planar-profile-not-a-vacuum-wave`,
`cex-gr-half-trace-subtraction-on-the-rest-space`.

## Mathematical route and conventions

- Karplus-style local development of the flat linearization: all items live
  in the flat model $(\mathbb R^4,\eta,\partial_0)$ with the inertial chart;
  the family machinery, first-order coefficients and the quadratic-remainder
  bound are batch-71 suppliers (`def-gr-flat-linearized-perturbation`,
  `thm-gr-flat-linearized-curvature-and-gauge`), and the all-space
  harmonic-gauge existence statement is
  `thm-gr-flat-wave-equation-duhamel-and-harmonic-gauge`.
- Phase coordinate $u=x^0-x^3$, null wave covector, TT profiles with
  amplitudes $A_+,A_\times$; TT plane waves $h_{11}=A_+(u)$,
  $h_{22}=-A_+(u)$, $h_{12}=A_\times(u)$ are harmonic-gauge solutions of the
  linearized vacuum equations whose exact vacuum residual is
  $O(\lambda^2)$ on compact sets.
- Gauge classification is finite-dimensional linear algebra at a fixed null
  $k$: the exact decomposition $V_0=T\oplus G$ with $\dim(V_0/G)=2$ and the
  explicit TT representative $Z_0=-X_{00}/(2\omega)$,
  $Z_1=-X_{01}/\omega$, $Z_2=-X_{02}/\omega$,
  $Z_3=Z_0-X_{03}/\omega$.
- Curvature convention: $R^{(1)}_{0i0j}=-\tfrac12\partial_0^2h_{ij}$ for
  spatial planar waves; for TT screen waves
  $R^{(1)}_{0101}=-\tfrac12A_+''$, $R^{(1)}_{0102}=-\tfrac12A_\times''$.
- Detector response: straight free-fall worldlines for the TT family,
  first-order relative acceleration
  $\tfrac12\lambda\,\partial_0^2h^i{}_j\,\delta^j$, strain
  $\sqrt{1+\lambda a}-1$ with screen-arm law
  $a=A_+\cos2\theta+A_\times\sin2\theta$. No apparatus, readout, noise or
  observation is modelled.
- The half-trace subtraction is proved to belong to the **rank-two screen
  projector**: `lem-gr-tt-screen-projector` proves idempotence, ranks and
  orthogonality, and
  `cex-gr-half-trace-subtraction-on-the-rest-space` shows that the same
  formula with the rank-three spatial projector has trace $-1\ne0$ for
  $A=\operatorname{diag}(0,1,1,0)$. The literature treatment (Carroll
  (6.57)) states the projection with the four-dimensional projector
  $P=\eta-n\otimes n$; the library keeps the mathematically correct rank-two
  screen form and records the rank-three failure as a counterexample, so the
  source is cited for the construction and not as an authority for the
  weight.

## Formatting-corruption repair (recovery of this dispatch)

A bad in-place regex in an earlier segment of this dispatch had joined
multi-line `$$…$$` blocks and following prose in several carriers. All of it
was repaired before the final gates:

- Deleting and re-authoring clean carriers:
  `def-gr-plane-wave-perturbation`,
  `def-gr-wave-screen-and-tt-projection`, `lem-gr-null-phase-coordinate`,
  `lem-gr-tt-screen-projector`, `lem-gr-plane-wave-gauge-decomposition`,
  `thm-gr-tt-plane-wave-solutions`, `thm-gr-tt-plane-wave-curvature`,
  `pthm-gr-linearized-field-equations`,
  `def-gr-linearized-wave-regime-and-detector-coupling`,
  `pthm-gr-plane-wave-polarizations` (done before this segment).
- Reconstructed in this segment:
  `pthm-gr-plane-wave-tidal-detector-response` (Statement clauses (b)–(c),
  the `Status` paragraph, the `Facts & Assumptions` block and proof steps
  1.1–3.1 rebuilt from the damaged single line; the source text of every
  formula was sliced programmatically, not retyped),
  `ex-gr-sinusoidal-tt-plane-wave` (two hard-wrapped displays joined),
  `ex-gr-tt-screen-projection-computation` (two joined displays split,
  one hard-wrapped display joined),
  `cex-gr-subluminal-planar-profile-not-a-vacuum-wave` (Statement refuted
  and Counterexample sections rebuilt), and
  `cex-gr-half-trace-subtraction-on-the-rest-space` (body rebuilt; the
  frontmatter was re-emitted from the manifest metadata after a slicing
  error removed it, then re-checked).
- Every proof-bearing step is now a single source row ending in its
  `[justifications]` (with `∎` on the final step), and each item's step
  numbering was adopted to the canonical layered numbering that
  `precheck` computes mechanically (single-step relabels and, where needed,
  reordering — `pthm-gr-linearized-field-equations`,
  `lem-gr-plane-wave-gauge-decomposition`,
  `lem-gr-tt-screen-projector`, `thm-gr-tt-plane-wave-curvature`,
  `lem-gr-null-phase-coordinate`, `pthm-gr-plane-wave-polarizations`,
  `ex-gr-plane-wave-regauge-to-tt`, `ex-gr-sinusoidal-tt-plane-wave`).
- The two counterexamples were restructured to the house section order
  (`Statement refuted` → `Facts & Assumptions` → `Counterexample` →
  `Remarks`), which also satisfies `proof-layout`'s requirement that the
  `Counterexample` section carry the numbered witness.
- `proof_strategy: direct` was added to the five B-page items (their
  `## Verification` sections had been failing the phase-format precheck for
  the missing field).
- Invalid proof tags (a `[[…]]`-style item id used as a tag term) were
  removed from `pthm-gr-plane-wave-tidal-detector-response`.

## Domain audit (math items may not take physics dependencies)

A post-authoring audit against `physics-content.mjs`'s rules
(`math-physics-dependency`, `mathematical-role`, `role-supplier`) found one
violation: `ex-gr-sinusoidal-tt-plane-wave` was `domain: mathematics` but
depended on the physics definition
`def-gr-linearized-wave-regime-and-detector-coupling` through its strain
clause, which mathematical items may not do. Fixed by moving the example to
`domain: physics` (a physics-domain kind is permitted for examples, as the
93 run examples and 22 run counterexamples of that domain already show),
adding a nonempty `physical_scope`, and adding a closing sentence to the
Example section stating that clause 3 evaluates the ideal-detector
definition of the companion page and that no observation, apparatus or
numerical wave quantity is asserted. The B-page prose was updated to match,
the manifest was regenerated (domain change), the item's phases were
re-checked (`precheck` pass, `rendercheck` OK, `proof-layout` 0 defects) and
its readiness record was re-recorded (the previous record was stale, which
`step1-decisions` permits). A scoped run of the engine's own
`validatePhysicsContent` over the 17 items and 2 pages now reports
**0 errors**.

## Page requires reconciliation

The manifest `requires` lists are the dependency closure of the page's
items, transitively reduced against the merged run requires graph, with the
plan-mandated pages kept as roots. Final values (synced into the two library
page frontmatters):

- `gr-linearized-waves`: `["construction-of-r-via-cauchy-sequences","gr-local-and-global-energy","gr-flat-and-newtonian-bridges"]`.
- `gr-linearized-waves-examples`: `["gr-linearized-waves"]`.

With these, `validate-plan` reports **no** error or warning for either batch
page (previously it flagged `undeclared-prereq` for
`construction-of-r-via-cauchy-sequences` and 145 `redundant-prereq`
warnings).

## Dependency levels (mechanical, run-global)

Computed over all current run manifests, so a level counts in-run suppliers
in any batch; recomputed after every dependency edit and after the final
manifest regeneration:

| item | level |
|---|---|
| `def-gr-wave-screen-and-tt-projection` | 5 |
| `lem-gr-tt-screen-projector` | 6 |
| `ex-gr-tt-screen-projection-computation` | 7 |
| `cex-gr-half-trace-subtraction-on-the-rest-space` | 7 |
| `def-gr-plane-wave-perturbation` | 8 |
| `lem-gr-null-phase-coordinate` | 9 |
| `lem-gr-plane-wave-gauge-decomposition` | 9 |
| `ex-gr-plane-wave-regauge-to-tt` | 10 |
| `thm-gr-tt-plane-wave-solutions` | 11 |
| `thm-gr-tt-plane-wave-curvature` | 12 |
| `cex-gr-subluminal-planar-profile-not-a-vacuum-wave` | 12 |
| `pthm-gr-linearized-field-equations` | 13 |
| `def-gr-linearized-wave-regime-and-detector-coupling` | 14 |
| `pthm-gr-plane-wave-polarizations` | 14 |
| `pthm-gr-plane-wave-tidal-detector-response` | 15 |
| `ex-gr-sinusoidal-tt-plane-wave` | 15 |
| `rem-gr-linearized-wave-scope-and-deferred` | 16 |

`node tools/physics-support/item-dependency-levels.mjs check --run
physics-cm-qm-gr-79-2026-10-11` reports no error for any batch-74 item; its
46 `empty scaffold inventory` errors are the unauthored other batches.

## Sources and harvest

Three sources, all lecture notes of the same material, each fetched as full
text and inspected (text extraction kept in `/tmp/c69-*.txt` for this
dispatch), and all six coverage entries stamped by
`source-fetch-check --stamp`:

- S. M. Carroll, *Lecture Notes on General Relativity*, arXiv:gr-qc/9712019
  — Ch. 6 (6.20)–(6.66), printed pp. 145–153 (PDF pp. 152–160):
  linearized field equations and gauge, plane-wave solutions, the TT
  projector with the half-trace subtraction, and the geodesic-deviation
  response (6.58)–(6.62).
- D. Tong, *General Relativity* (Cambridge Part III, Michaelmas 2019) —
  §5.2.1–5.2.2, printed pp. 210–216 (PDF pp. 217–223): the plane-wave
  ansatz, null wavevector, transversality, the two polarisations and the
  bobbing response.
- H. S. Reall, *Part III General Relativity* (Cambridge, Oct 12, 2022) —
  §7.1, §7.3, printed pp. 71–81 (PDF pp. 72–82): perturbations, trace
  reversal and de Donder gauge; plane waves and the polarization matrix
  (7.49); the parallelly transported frame and geodesic deviation
  (7.52)–(7.55).

Dispositions: all harvested results are **included** or **inline** in the
named items (see `…-batch-74.coverage.json`); nothing was deferred or left
out of scope, and no source drop or `source_resolution` record was needed.
Every harvested result's exact locator and supporting item is recorded in
the coverage file; `coverage-checklist --require-destination` reports
2 pages, 21 harvested results, 0 errors, 0 warnings, and
`source-fetch-check` (check mode) reports 6/6 fetch-verified.

## Cross-batch dependencies

`…-batch-74.cross-batch-dependencies.json` holds 103 rows: 100 item rows
plus 3 page rows. Every row was built by scanning the final item deps
against the union of run manifests (in-run suppliers only; out-of-run
mathematical imports are not batches of this run), and each row's evidence
records the exact declared use (Facts citation and/or the proof steps that
use the supplier) and the supplier's home page and batch. Page rows cover
`gr-linearized-waves → gr-flat-and-newtonian-bridges`,
`gr-linearized-waves → gr-local-and-global-energy` and
`gr-linearized-waves-examples → gr-linearized-waves`.
`frontier-dependency-ledger.mjs refresh --run …` completed after the last
input write ("refreshed and deduplicated"; exit 0), and the unified ledger
`research/physics-cm-qm-gr-79-2026-10-11-cross-batch-dependencies.json`
records batch 74 in `reviewed_batches` with 99 edges whose `consumer_batch`
is `74` (the page rows collapse into the item-level edges under the
ledger's `(kind, consumer, supplier)` deduplication). Two later refresh
attempts (needed only because the notes and a domain fix followed, neither
of which changes the input) failed with
`physics-cm-qm-gr-79-2026-10-11-batch-40.cross-batch-dependencies.json:
invalid review or consumer ownership` — a concurrent writer's half-written
input for **another** batch, not batch 74. The batch-74 input file is final;
re-run the refresh once batch 40 settles.

## Proof contracts

`…-batch-74.proof-contracts.json` (version 1, level
`physics-cm-qm-gr-79-2026-10-11-batch-74`) covers all 13 proof-bearing items
(the two definitions and the remark are outside contract scope, matching
batches 71/73). Citations quote the cited item's own statement/definition
section verbatim (regenerated from the final carriers); derivations map
every numbered step with its stated inputs; `routine_steps` is empty; the
boundary worksheet disposes of all eight standard cases per item, with the
AC disposition recorded as the inherited countable choice of the cited
suppliers (no new choice is used anywhere on the page).
`proof-contract --strict` reports 0 errors, 0 warnings, 13/13 items.

## Checks run (actual results)

| check | result |
|---|---|
| `precheck` (17 items) | 4 not-applicable (definitions/remark), 13 pass, 0 fail |
| `rendercheck` (17 items + 2 pages) | OK — no wikilink in math, no nested/unbalanced delimiters, no multiline display, all math parses in KaTeX, all frontmatter parses |
| `proof-layout` (17 items) | 17 items, 60 steps, 0 defects |
| `proof-contract --strict` | 0 errors, 0 warnings, 13/13 |
| `depcheck --items-file` (17 items) | OK, selected item/page and cycle checks pass |
| `fwdcheck --items-file` (17 items) | OK; batch 74 declares no forward reference (the sole A→B wikilink was replaced by prose before the final gates) |
| `extcheck` | OK — 28271 items, 0 recorded-not-proved, 0 resting on them |
| `citecheck` (17 items) | 1 heuristic warning: `thm-gr-tt-plane-wave-curvature.md` step 2.2 matches the word "antisymmetr…" (index-pair antisymmetry of a tensor), not an order axiom — triaged as case (c), phrase used but the move not made |
| `manifest-deps` | 17 items, 0 errors |
| `content-policy` (batch manifest) | 17 scoped items, 0 errors, 0 warnings |
| scoped `validatePhysicsContent` (17 items, 2 pages; import check bypassed) | 0 errors after the domain fix |
| `item-dependency-levels check --run` | 0 errors for batch 74; 46 expected empty-inventory errors for unauthored batches |
| `coverage-checklist --require-destination` | 2 pages, 21 harvested results, 0 errors, 0 warnings |
| `source-fetch-check --stamp` then check | 6/6 fetch-verified |
| `validate-plan --run` | FAIL run-wide with 7 `undeclared-prereq` errors — all on **other** batches' QM pages (`qm-math-coulomb`, `qm-math-controlled-dynamics`, `qm-math-fock-and-equilibrium`, `qm-uncertainty-and-compatibility[-examples]`); no batch-74 error or warning |
| `physics-check --run --plan` | FAIL run-wide before item checks: `mathematics import changed: items/def-dependent-choice.md; reconcile and re-import before a new run` — external import drift in the read-only mathematical workspace, not caused by batch 74 and outside this batch's authority; needs owner/operator reconciliation |
| `step1-decisions check --run` | 1046/1126 ready run-wide; all 17 batch-74 items closed (not in the work list) |

## Readiness records

All 17 items recorded `ready` (no escalation) after the final carrier writes,
each with its declared dependency IDs; `step1-decisions check` shows no
batch-74 item outstanding. No `--owner` reset and no escalation was used.
Known run-wide findings that remain outside batch 74's authority (recorded
above): the 7 `undeclared-prereq` errors on QM pages, and the mathematics
import drift blocking `physics-check`.

## Explicit non-claims

- No observation, apparatus, calibration, noise model, light-propagation
  model, event rate, amplitude value or statistical statement occurs on
  either page; the physics items carry no empirical premise and say so.
- No exact vacuum solution is claimed: the TT plane-wave metrics satisfy the
  exact vacuum field law only up to a residual bounded by a constant times
  the square of the amplitude on compact sets, and every physics-theorem
  states its conclusions as conditional model deductions.
- No energy, flux, radiation or source statement is made; those are listed
  as deferred in `rem-gr-linearized-wave-scope-and-deferred`.
- The batch does not attempt any Step-2 or Step-3 gate, audit, verdict or
  publication; `status: draft` throughout.
