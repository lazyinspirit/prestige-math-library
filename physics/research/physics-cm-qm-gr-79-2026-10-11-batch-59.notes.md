# Batch 59 notes — Qm Controlled Approximations

Run `physics-cm-qm-gr-79-2026-10-11`, role **beta**, batch **59**, covering the
pair `qm-controlled-approximations` (A, order 197) and
`qm-controlled-approximations-examples` (B, order 198), category
`non-relativistic-quantum-mechanics`, library `physics`. Both pages are
`status: draft`; this batch publishes nothing. No experiment item is built and
no measurement is asserted.

Read first: root `CLAUDE.md`, workspace `CLAUDE.md`, `README.md`, `SCHEMA.md`,
`WORKFLOW.md`, `../PHYSICS-CONTENT-MODEL.md`, the binding owner direction
`research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md` (no
batch-59-specific override; the general rules — draft content only, define
before naming, keep model deductions and empirical observations distinct — were
applied), the batch dependency levels
`research/physics-cm-qm-gr-79-2026-10-11-batch-dependency-levels.json` (batch
59: level 13, requires batches 41, 52, 58), the design section
`research/plan-non-relativistic-quantum-mechanics-track.md` L3313, and
`research/plan-spec.json`.

## Design vs plan-spec

The design reservation row 17 lists prerequisites `NRQ-A09`, `NRQ-A10`,
`NRQ-A16`, i.e. `qm-one-dimensional-potentials`, `qm-harmonic-oscillator` and
`qm-central-potentials-and-hydrogen`. The current plan-spec entry (which
controls this run) requires `qm-central-potentials-and-hydrogen`,
`qm-harmonic-oscillator` and `qm-math-fock-and-equilibrium`. The conflict is
resolved in favour of the plan: the A page declares exactly the three
plan-spec prerequisites in its manifest and carrier, and the B page declares
the A page. Item-level review found that the pair consumes
`qm-central-potentials-and-hydrogen` (batch 58: the declared Coulomb/hydrogen
model and the bound-spectrum theorem) and `qm-math-fock-and-equilibrium`
(batch 41: the variational ground/gap-overlap estimate), while **no** item
consumes any `qm-harmonic-oscillator` (batch 52) item; that declared ordering
prerequisite is retained exactly as the plan requires, and no mathematical
premise is drawn from it (recorded in the page-level cross-batch row).
`qm-one-dimensional-potentials` (batch 51) enters transitively through the
line-model item used by the WKB regime model, not as a declared page
prerequisite.

## Inventory

A page `qm-controlled-approximations` (12 items; manifest `dependency_level` in
parentheses):

1. `lem-nrqm-approximations-scaled-line-model-correspondence` (0) — exact
   nondimensionalisation: `u'' = (W-λ)u/h²` on `I` iff the physical line
   equation holds under `x = ℓξ`, and the phase integral transfers exactly.
2. `def-nrqm-approximations-framework-variational-trial-model` (9) — declared
   trial reading: assigned energy observable, form domain and form, model
   bottom, gap, discrete ladder, trial vector/value, scope.
3. `def-nrqm-approximations-framework-perturbed-family-model` (8) — declared
   perturbed family `H(λ)=H0+λV` with bounded self-adjoint `V`, gapped
   finite-multiplicity label, followed label, first-order operator and reduced
   inverse `S`.
4. `def-nrqm-approximations-framework-wkb-regime-model` (10) — declared WKB
   regime model: `C_c^5` potential, reference scales, dimensionless equation,
   turning points and regions (allowed = `W<λ`), hypotheses (W1)-(W3),
   declared barrier-transmission reading; cites the batch-40 two-turn
   tunnelling theorem as its matching normalization.
5. `post-nrqm-approximations-static-finite-level-dipole-coupling` (13) —
   adopted compressed finite-level dipole coupling for the declared Coulomb
   pair in a uniform field; explicitly excludes the uncompressed
   `-E_ext·D` (no lower bound).
6. `pthm-nrqm-approximations-variational-bounds-and-min-max` (10) — trial
   lower bound, gap-overlap control, min-max identities, trial-subspace
   consequence. Carries AC through the published min-max supplier.
7. `pthm-nrqm-approximations-nondegenerate-perturbation-expansion` (9) —
   simple gapped label: self-adjointness, followed label, coefficients
   `E'(0)`, `E''(0)`, gauge-fixed eigenvector, explicit cubic remainder.
8. `pthm-nrqm-approximations-degenerate-first-order-splitting` (9) — finite
   multiplicity: bounded reduced inverse, `dist(z, E+λ spec(V_E)) ≤
   4λ²v²/g`, no branch selection or relaxation.
9. `pthm-nrqm-approximations-wkb-allowed-region-error` (11) — Gronwall
   coefficient/wavefunction error on an interval with no turning point.
10. `pthm-nrqm-approximations-turning-point-connection` (11) — Airy
    connection across one simple turning point, with envelope errors and the
    `π/4` phase; no transmission coefficient.
11. `pthm-nrqm-approximations-barrier-transmission-asymptotics` (11) —
    separated smooth barrier: `T(h) = e^{-2S/h}(1+O(ε(h)+e^{-2S/h}))` with
    the physical exponent identity.
12. `rem-nrqm-approximations-scope-and-empirical-status` (14) — adopted
    clauses, proved statements, excluded configurations, the static-Stark
    limitation and the empirical status (no experiment on the page).

B page `qm-controlled-approximations-examples` (5 items):

13. `ex-nrqm-approximations-two-level-finite-gap-correction` (10) — exact
    two-level family, `E''(0)`, finite check of the cubic remainder
    (`≈1.51·10⁻⁵ g ≤ g/32`).
14. `ex-nrqm-approximations-stark-finite-level-shift` (15) — compressed
    two-state Stark family: vanishing first-order shift, exact quadratic
    splitting, finite remainder check (`Δ(33-8√17)/64 ≈ 2.37·10⁻⁴ Δ ≤ Δ/32`);
    `D_rel` declared, not computed.
15. `ex-nrqm-approximations-zeeman-multiplet-splitting` (12) — spin-one
    multiplet: exact linear triplet `ε, ε±λℏγB_z`, degenerate localisation
    check, Larmor precession reference; no branch selection.
16. `ex-nrqm-approximations-smooth-barrier-tunnelling-limits` (12) —
    smooth-barrier semiclassical limit and the exact rectangular
    thick-barrier prefactor `16E(U-E)/U²`; the wall is the case excluded
    from the smooth theorem.
17. `rem-nrqm-approximations-examples-scope-limits` (16) — what the examples
    check, what they do not contain (no measured shift, splitting, rate or
    count), and the deferrals.

Capacity: A 12 items, B 5 items — both far below the 100-item page cap.
Items were authored suppliers-first in ascending dependency order (levels
0, 8-14 on A and 10-16 on B), with the manifest levels recomputed mechanically
(`/tmp/build-59.mjs`) after the final dependency edit; `item-dependency-levels
check --run` reports no batch-59 finding (the remaining run-wide errors are
later batches with empty scaffolds).

## Model choices and conventions

- **Static Stark limitation.** The uncompressed coupling `-E_ext·D` has no
  lower bound and is excluded everywhere; only the compressed finite-level
  operator of the postulate is used, and the scope remark records the
  exclusion.
- **Allowed/forbidden convention.** Allowed region `W < λ` (positive
  dimensionless kinetic energy), forbidden `W > λ`; the sign is fixed once in
  the regime model and used consistently in the error, connection and barrier
  theorems.
- **Degenerate perturbation.** The theorem gives only spectral localisation
  within `4λ²v²/g` of `E + λ spec(P0VP0)`; no instantaneous branch selection,
  relaxation or equilibration is asserted, and the textbook "jump" sentence
  is explicitly not imported (it is documented in the scope remark).
- **Choice.** The min-max consumer carries the Axiom of Choice; the other
  statements carry Countable Choice through their suppliers. Roles and use
  sites are recorded in the manifest `dependency_roles` and in the proof
  contracts.
- **Supplier rule.** Every external mathematical premise consumed by the pair
  is a published canonical root-library item (checked for `def-derivative`,
  `thm-chain-rule`, the change-of-variables corollary, the spectral-form,
  spectral-theorem, projection-valued-measure, Kato-Rellich, operator-norm,
  resolvent, discrete-spectrum, min-max and self-adjoint-norm-extrema items,
  and the countable/axiom-of-choice items). In-run draft physics results and
  the newly authored local mathematics of batches 37-58 are consumed only
  where the engine has released the supplier batches and the actual statements
  and hypotheses were read and recorded in the cross-batch input; no planned
  supplier and no unproved reservation is consumed.
- **Empirical status.** No experiment, measured value, apparatus, calibration,
  sampling model or uncertainty record appears on either page; `D_rel` and
  the gyromagnetic parameter are declared model parameters.

## Sources and dispositions

`research/physics-cm-qm-gr-79-2026-10-11-batch-59.coverage.json`:

- A page: Binney–Skinner, *The Physics of Quantum Mechanics* (textbook) Ch. 9
  (printed pp. 203-213) and §11.6 (pp. 253-254), PDF = printed + 8;
  Zwiebach, MIT 8.05 Ch. 1 §5 (course notes, printed pp. 18-21);
  Teschl, *Mathematical Methods in Quantum Mechanics* (monograph, 1st ed.)
  §4.3 (pp. 117-119), §4.4 (pp. 119-121), §6.1 (pp. 133-136), §6.6
  (pp. 153-159), §9.7 (pp. 214-220), PDF offsets verified per section;
  Fitzpatrick, *Quantum Mechanics* (course text, 222 pp.) §§5.3-5.6
  (pp. 64-75); DLMF §9.7 (subsections (i)-(v)) and §9.2. The pair's Olver,
  *Asymptotics and Special Functions* (1974) Ch. 11 citation is consulted
  through the DLMF survey and is recorded as such.
- B page: Binney–Skinner Ch. 9 and §5.3.1; Zwiebach MIT 8.05 Ch. 7
  §§2-5 (printed pp. 2-16); Fitzpatrick §§5.3-5.6.
- Harvest: 43 source-anchored results, every one disposed — 27 `included`,
  6 `inline`, 4 `deferred` and 6 `out-of-scope`, each decline with a
  result-specific reason. Deferrals resolve to `qm-driven-dynamics-and-adiabatic-limits`
  (time-dependent perturbation theory and the golden rule),
  `qm-light-matter-and-spectral-transitions` (radiative rates and selection
  rules), `qm-harmonic-oscillator` (the Gaussian trial application) and
  `qm-math-fock-and-equilibrium` (the eigenspace/gap estimate, supplied there
  to this pair).
- Locator precision: during authoring review the Fitzpatrick locators were
  corrected against the source's own chapter contents (5.3 p. 64, 5.4
  pp. 70-72, 5.5 pp. 72-73, 5.6 pp. 73-75), the MIT Ch. 1 §5 locator to
  printed pp. 18-21 and the MIT Ch. 7 locators to §§2-5 (printed pp. 2-16),
  and the Teschl §4.3/§4.4 PDF offsets to +12 (pp. 129-131 / 131-133); the
  item source titles carry the corrected ranges.
- `source-fetch-check --stamp`: **9/9 source instances fetch-verified** (nine
  instances across the two pages), full bodies, hashes recorded; no drop, no
  `source_resolution` entry, no retries consumed. The Binney hash
  `f19649bce67898ee` and the Teschl hash `8dc8de0b58aa0a3f` match the hashes
  already recorded for batch 58, and the local reader copies of
  Binney/Teschl/Fitzpatrick/MIT Ch. 1/MIT Ch. 7 match the stamped bytes.

## Cross-batch dependencies and ledger

`research/physics-cm-qm-gr-79-2026-10-11-batch-59.cross-batch-dependencies.json`
contains 98 rows: 95 item edges and 3 page edges, every row `verified` with
inline-citation or postulate-label evidence and the supplier's read title and
statement head. 73 item edges cite the supplier by id inline in the carrier;
22 are framework edges invoked by postulate label (P1/P2/P4/P6) or inherited
vocabulary and carry individually written evidence. Supplier batches:
37, 39, 40, 41, 43, 44, 45, 47, 48, 51, 54, 58. Page edges: the A page's
three declared prerequisites, with the `qm-harmonic-oscillator` row recording
explicitly that no item-level premise is drawn from that page.

`frontier-dependency-ledger.mjs refresh --run ...` was attempted four times
after the final edits (23:52, 23:55, 23:59 and after the readiness records)
and remains blocked by an out-of-scope concurrent condition:
`...-batch-66.cross-batch-dependencies.json` (another batch's file, unchanged
since 23:47) contains two rows with `status: "pending"`, which the ledger
schema rejects ("invalid review or consumer ownership"; allowed statuses are
open/verified/removed per `briefs/tasks/frontier-dependency-ledger.md`). No
batch-59 row is affected: a direct re-check of the batch-66 file against the
current manifests found the two offending rows belong to batch 66
(`lem-gr-observer-projection-decomposition`) and batch 59's 98 rows all
validate and have reviews (0 orphans). The batch-59 input file is complete and
current; the run-level merge is an engine/owner reconciliation item for the
batch-66 owner, and this batch does not edit another batch's input.

## Verification

- `precheck.mts` on all 17 items: **12 proof-bearing items pass, 0 failing**
  (the four definitions, the postulate and the two remarks are
  `not-applicable`).
- `rendercheck.mjs` on all 17 items and both pages (via author-check):
  **OK, 19 files** — no wikilink in math, no nested delimiters, every math
  span parses under KaTeX, every frontmatter YAML parses.
- `proof-layout.mjs` on all 17 items: **17 items, 49 numbered steps,
  0 defects** (final run after the last edits).
- `proof-contract.mjs ... --strict`: **0 errors, 0 warnings, 11/11 items
  checked** (citations, derivations, boundary cases).
- `content-policy.mjs` on the manifest: **17 items, 0 errors, 0 warnings**.
- `author-check.mts physics-cm-qm-gr-79-2026-10-11 59`: **ok: true**
  (fingerprint `dbaf954de8de6b610871ac196858e03a3d7ae311c8cb453950ea10b923a926f1`),
  all four sub-gates true.
- Scoped `depcheck --items-file`, `fwdcheck --items-file`,
  `extcheck --items-file` on the 17 ids: **all exit 0**; depcheck 0 warnings
  after the one repair below, fwdcheck 0 findings, extcheck corpus-wide
  "0 recorded-not-proved, 0 resting on them".
- `coverage-checklist.mjs ... --require-destination`: **2 pages, 43
  harvested results, 0 errors, 0 warnings**.
- `source-fetch-check.mjs` (check mode): **9/9 fetched-verified research
  sources**.
- `item-dependency-levels check --run`: no batch-59 finding; the listed
  errors are the later batches (60-64) whose scaffold inventories are still
  empty.
- `validate-plan.mjs plan-spec.json --run ...`: 7 run-wide errors, **all in
  the GR pages** (`gr-gr15-...`, `gr-causal-and-initial-value-boundaries`);
  none involves `qm-controlled-approximations` or its examples. Recorded as
  unrelated run-wide debt.
- One repair during the loop: scoped depcheck flagged that
  `def-nrqm-approximations-framework-wkb-regime-model` cited
  `thm-nrqm-controlled-dynamics-two-turn-barrier-tunnelling-error` in clause
  (d) without declaring it; the edge was added to `deps` with role
  `mathematical-premise` (level unchanged, batch-40 supplier), the manifest
  and cross-batch input regenerated, and all checks re-run.

## Escalations and deferrals

No unresolved prerequisite and no owner escalation. The design/plan conflict
above is recorded and resolved in favour of the plan. The two decline classes
(Fermi-golden-rule/rates and the nuclear/photon applications) are deferred to
their track pages, and the Gaussian trial and gap estimate are supplied by
their own pages; the empirical status of both pages is "no observation
reported". No page split or capacity escalation is needed (A 12/100,
B 5/100).
