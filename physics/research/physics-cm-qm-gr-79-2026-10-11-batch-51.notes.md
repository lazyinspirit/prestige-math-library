# Batch 51 notes — Qm One Dimensional Potentials

Run `physics-cm-qm-gr-79-2026-10-11`, role **beta**, batch **51**, covering the
pair `qm-one-dimensional-potentials` (A, order 181) and
`qm-one-dimensional-potentials-examples` (B, order 182), category
`non-relativistic-quantum-mechanics`, library `physics`. Both pages are
`status: draft`; this batch publishes nothing.

Read first: root `CLAUDE.md`, workspace `CLAUDE.md`, `SCHEMA.md`,
`WORKFLOW.md`, `../PHYSICS-CONTENT-MODEL.md`, the binding owner direction
`research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md`, the
batch dependency levels `research/physics-cm-qm-gr-79-2026-10-11-batch-dependency-levels.json`
(batch 51: level 10, requires batch 49 / page
`qm-interference-and-local-detection`), the design section
`research/plan-non-relativistic-quantum-mechanics-track.md` L3128, the
reservation in
`research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/inventory.json`
(order 09), the prose scaffold of the same directory (its pair-09 line and the
audit-repair sections), `research/plan-spec.json`, and the current supplier
carriers of the intervals pair (batch 38), the composites pair (batch 35) and
the physical framework pages (batches 43-49).

## Inventory

A page `qm-one-dimensional-potentials` (11 items; computed
`dependency_level` in parentheses):

1. `lem-nrqm-potentials-one-dimensional-flux-identity` (0) — batch-local
   mathematics: the one-dimensional continuity identity for the component
   reading of the model equation and the constancy of the current of a
   stationary solution.
2. `lem-nrqm-potentials-free-operator-differential-identification` (1) —
   identifies the framework's free Fourier-multiplier operator (with the
   convention fixed in the composites theorem) with minus `hbar^2/2m` times the
   second weak derivative on `W^{2,2}`, and transfers real bounded measurable
   potentials.
3. `lem-nrqm-potentials-positive-scaling-of-self-adjoint-operators` (3) —
   positive scaling preserves self-adjointness, transfer of resolvents,
   spectra, compact resolvents and eigenfamilies, and scales quadratic-form
   lower bounds.
4. `def-nrqm-potentials-one-dimensional-line-model` (9) — the declared
   effective line model: state space, position and momentum readings, assigned
   energy operator for a real bounded measurable potential, bound-state
   vocabulary and declared generalized stationary solutions with the current
   reading.
5. `def-nrqm-potentials-interval-and-delta-models` (10) — the declared
   Dirichlet and separated Robin interval models and the zero-range interface
   model with coupling `g`.
6. `pthm-nrqm-potentials-line-model-energy-and-stationary-states` (10) — the
   line-model energy observable, its unitary flow, the eigenray
   characterization of stationary states and the point-mass energy law.
7. `pthm-nrqm-potentials-barrier-flux-and-transmission` (10) — the unique
   rectangular-barrier scattering solution, its conserved current, exact `T`
   and `R`, the flux balance `T+R=1`, the fraction reading and the
   thick-barrier error bound.
8. `pthm-nrqm-potentials-finite-well-bound-states` (11) — finite square well:
   self-adjointness, exact root conditions, simplicity and parity, absence of
   eigenvalues outside `(-U,0)` and the bound-state count.
9. `pthm-nrqm-potentials-interval-spectra-completeness-and-nodes` (11) —
   interval spectra: compact resolvent, complete orthonormal eigenbases,
   min-max comparison, nodal counts, free box eigenpairs and the Robin
   eigenvalue condition.
10. `pthm-nrqm-potentials-delta-point-interaction-bound-state` (11) —
    zero-range model: self-adjointness, no negative eigenvalue for `g >= 0`
    and the unique attractive bound state with `E_g = -m g^2/(2 hbar^2)`.
11. `rem-nrqm-potentials-scope-and-idealizations` (12) — scope remark of the
    page: established results, declared model assumptions and deferrals.

B page `qm-one-dimensional-potentials-examples` (4 items):

1. `ex-nrqm-potentials-rectangular-barrier-tunnelling-and-thick-limit` (11) —
   exact finite check at `U=2E`, `kappa a = ln 10`: `T = 400/10201`,
   `R = 9801/10201`, rational brackets, thick-limit value `1/25` with exact
   difference `-201/255025` and the theorem's bound `201/125000`; positive
   transmission through the classically forbidden barrier.
2. `ex-nrqm-potentials-finite-well-exact-root-and-count` (12) — exact finite
   check: at `K = pi sqrt(2)/(4a)` the unique even bound state has
   `k = kappa = pi/(4a)` and `E = -U/2`, the root condition verified with
   `tan(pi/4) = 1`, and exact counts and parities at declared depths
   (`2aK/pi = 5/2` gives three states of types even, odd, even; the thresholds
   `1` and `2`; at least one state always).
3. `ex-nrqm-potentials-box-spectrum-and-nodes` (12) — exact finite check: free
   Dirichlet box eigenpairs, explicit nodal points `kL/n`, constant-shift
   spectrum with the min-max bound attained and positive gaps.
4. `rem-nrqm-potentials-examples-scope-limits` (13) — scope remark of the
   examples page.

Carriers
`library/non-relativistic-quantum-mechanics/qm-one-dimensional-potentials.md`
and `...-examples.md`; manifest
`research/physics-cm-qm-gr-79-2026-10-11-batch-51.pages.json`; proof contracts
`research/physics-cm-qm-gr-79-2026-10-11-batch-51.proof-contracts.json` (11
in-scope proof-bearing items; the two definitions and the two remarks carry no
proof section); coverage
`research/physics-cm-qm-gr-79-2026-10-11-batch-51.coverage.json`; cross-batch
input `research/physics-cm-qm-gr-79-2026-10-11-batch-51.cross-batch-dependencies.json`
(86 rows: 85 item edges + 1 page edge).

## Design versus plan (conflicts and deviations)

1. **`requires`.** The design section and `plan-spec.json` agree:
   `qm-interference-and-local-detection` for the A page and the companion for
   the B page; the carriers and manifest declare exactly these. No conflict.
2. **Reservation `requires_physics` codes.** The reservation's
   `requires_physics: [NRQ-A06, NRQ-A07]` are the inventory's codes for the
   massive-particle kinematics page and the interference page;
   plan-spec consolidates the declared page prerequisite as
   `qm-interference-and-local-detection`. No conflict.
3. **A inventory delivery.** The reservation asks for "H0+bounded V, finite
   wells/barriers, scattering flux/current, bound-state conditions,
   domain-specific box [M,D,P,T], 44". All six clusters are delivered:
   the free-plus-bounded-potential operator and its model reading by items 2
   and 4 and the theorem 6; the finite well by item 8; barriers and scattering
   current by items 1 and 7 and the example B1; the bound-state conditions by
   items 8 and 10; the domain-specific box by items 5 and 9 and the example
   B3. The reservation's count 44 is an upper budget, not a required item
   count; the batch delivers 11 A items, consistent with the delivery pattern
   of the neighbouring QM batches.
4. **Source pointer reconciliation (deviation, recorded).** The reservation's
   source line reads "Tong §§2.1–2.3; Binney Ch5; Teschl Ch9". The page
   harvests Tong §2.1.2, §2.3.1, §2.3.2 and §2.4.2 (the barrier material is
   §2.4.2, beyond the stated §§2.1–2.3), Binney §5.1 and §5.3, and Teschl
   §9.1, §9.2 and §9.7. Teschl contains no point-interaction section in
   Chapter 9; the delta model is therefore sourced to Tong §2.3.2 and Binney
   §5.1 (the infinitely narrow well), and the Teschl citations in the final
   carriers state only what was verified in the fetched text (Sturm–Liouville
   operators, the separated self-adjoint boundary conditions of Theorem 9.6
   with Dirichlet as `alpha = 0`, the essential spectrum lemma and the Sturm
   nodal count). The earlier auto-generated skeleton citation naming
   "transfer matrices" was corrected to the actual section content. No plan was
   edited.
5. **Interval and contact mathematics as suppliers.** The design's proof route
   assigns the interval/Sturm material to `M19` and the local mathematics pair.
   The page consumes the already authored items of
   `qm-math-intervals-and-contacts` (batch 38) and of `qm-math-composites`
   (batch 35) and proves the remaining identifications
   (free-operator differential form, positive scaling) locally. This follows
   the current published-supplier rule without weakening any claim.

## Source audit and repairs

Six source entries over the two pages (three distinct works) were fetched as
complete documents and stamped; locators were verified by extracting and
inspecting pages (PyMuPDF on the fetched PDFs):

- **D. Tong, *Quantum Mechanics* (author-hosted lecture set, 133 pp).** PDF
  page = printed page + 3. Harvested: §1.2.2 printed pp. 11–13 (PDF 14–16),
  probability conservation and the current; §2.1.2 printed pp. 24–27 (PDF
  27–30), the infinite well, its sine solutions, its energies and its nodal
  structure; §2.3.1 printed pp. 42–48 (PDF 45–51), the finite well, matching,
  parity and the even and odd root conditions; §2.3.2 printed pp. 48–49 (PDF
  51–52), the delta jump condition, single bound state and energy; §2.4.2
  printed pp. 60–63 (PDF 63–66), barrier matching, the transmission formula and
  thick-barrier suppression.
- **J. Binney and D. Skinner, *The Physics of Quantum Mechanics* (310 pp).**
  PDF page = printed page + 8. Harvested: §5.1 printed pp. 75–79 (PDF 83–87),
  the square well, parity, the condition `k tan(ka)=K`, the always-present
  ground state and the count thresholds; §5.3 printed pp. 84–89 (PDF 92–97),
  scattering amplitudes, reflection and transmission and tunnelling through a
  barrier. The pair uses §5.1 and §5.3 only; the double-well/maser material of
  §5.2 and the cross-section and resonance material are out of scope with
  reasons in the coverage file.
- **G. Teschl, *Mathematical Methods in Quantum Mechanics* (1st ed. 2009,
  317 pp).** PDF page = printed page + 12. Harvested: §9.1 printed pp. 181–187
  (PDF 193–199), Sturm–Liouville operators on intervals; §9.2 printed pp.
  187–195 (PDF 199–207), the Weyl alternative and Theorem 9.6 on separated
  self-adjoint boundary conditions (Dirichlet as `alpha = 0`, Neumann as
  `alpha = pi/2`); §9.7 printed pp. 214–220 (PDF 226–232), the essential
  spectrum `[0,infinity)` for decaying potentials (Lemma 9.35), Sturm
  comparison (Theorem 9.39) and the nodal count (Theorem 9.40). The
  point-interaction material of the pair is not attributed to Teschl; see item
  4 of the previous section.

All six coverage entries are fetch-verified with stamps
(`source-fetch-check --coverage … --stamp`; check mode now reports 6/6
resolved). The coverage checklist reports 2 pages, 38 harvested result
headings, 0 errors and 0 warnings; every `included` disposition names a
scaffolded batch-51 item and every decline carries a specific reason.

## Dependency verification

- **In-batch order.** Authoring followed the computed item order; the manifest
  labels (0, 1, 3, 9, 10, 10, 10, 11, 11, 11, 12 on A; 11, 12, 12, 13 on B)
  equal the levels computed by `item-dependency-levels.mjs check --run`; no
  batch-51 line appears in that run-wide report. `depcheck` reports page
  dependency depth 55 (A) / 56 (B) with 0 errors and 0 warnings; `fwdcheck`
  and `extcheck` are clean; `manifest-deps` reports 15 items, 0 errors.
- **Actual proof dependencies.** Every fact of the eleven contract-bearing
  items is cited at the step that uses it (71 citation contracts, 0 strict
  errors, 0 warnings); `citation-fidelity` finds no quote-not-found and no
  widening candidate, and `boundary-audit` reports 88 rows with 15
  `not_applicable` dispositions, no template reuse and no contradicted
  disposition. Two integrity repairs were made while checking actual uses:
  (i) the interval-spectra theorem's Robin step now cites the
  compact-resolvent fact `[F5]` that it applies, and (ii) the finite-well
  theorem's boundedness-below claim was replaced by the composites theorem's
  own lower bound instead of an unsupported spectral-infimum argument. No
  claim was weakened.
- **Cross-batch input.** `...-batch-51.cross-batch-dependencies.json` records
  86 `verified` rows: 85 item edges and 1 page edge
  (`qm-one-dimensional-potentials -> qm-interference-and-local-detection`).
  Supplier batches: 35 (`qm-math-composites`), 36
  (`qm-math-oscillator`), 38 (`qm-math-intervals-and-contacts`), 43
  (`qm-framework-and-quantities`), 45
  (`qm-observables-and-born-probabilities`), 47 (`qm-autonomous-dynamics`)
  and 48 (`qm-massive-particle-kinematics`). Each row states the dependency
  role, the required content and the use location; the claims were read at the
  suppliers' current carriers. `frontier-dependency-ledger.mjs refresh --run`
  refreshed and deduplicated the run-wide ledger with this file included.

## Recorded cross-batch defects (not repaired here)

These were found by the run-wide checks; they are outside batch 51's edit
scope and were not modified.

1. **Run-wide `item-dependency-levels.mjs check` errors.** Unauthored pairs
   still carry empty scaffold inventories (for example
   `qm-angular-momentum-and-spin`, `qm-composites-entanglement-and-reduced-states`,
   `qm-central-potentials-and-hydrogen`, `qm-controlled-approximations`,
   `qm-three-dimensional-scattering`), and two authored items of batch 40
   (`qm-math-controlled-dynamics`) have manifest labels that differ from the
   computed levels: `ex-nrqm-controlled-dynamics-gap-closing-failure` declares
   2 and computes 1; `ex-nrqm-controlled-dynamics-long-time-rwa-limitation`
   declares 3 and computes 2. No batch-51 item is named.
2. **Run-wide `validate-plan.mjs research/plan-spec.json --run` reports 577
   findings**, none naming a batch-51 page or item; the listing shows
   `qm-one-dimensional-potentials` (11 items) after its prerequisite page and
   `...-examples` (4 items) after the A page, and the findings concern other
   batches (for example GR `gr-gr14-full-high-regularity-symmetric-hyperbolic-proof`
   undeclared prerequisites and `qm-state-geometry-examples` prerequisites).
3. **`physics-check.mjs --run` aborts before validation** with
   `Invalid or empty current page in physics-cm-qm-gr-79-2026-10-11-batch-54.pages.json`,
   so the run-wide physics-content gate cannot complete while batch 54's
   scaffold is empty. A scoped `validatePhysicsContent` over the batch-51
   closure reports 37 errors run-wide, **0 naming a batch-51 item** (the
   reported errors name CM, angular-momentum and GR items of other batches).

## Checks run (exact results)

- `precheck.mts` on all 15 items: 11 checked, 0 failing (the two definitions
  and two remarks are not proof-bearing).
- `rendercheck.mjs` on all 15 items + 2 page carriers: OK — 17 files, no
  wikilink inside math, no nested or unbalanced delimiters, no multiline
  display block, every math span parses under KaTeX, every frontmatter block
  parses. Initial run flagged multiline display blocks; the affected display
  formulas were joined to one source line each, and the check is clean.
- `proof-layout.mjs` on the 11 proof-bearing items: 11 items, 51 steps, 0
  defects (run after the final edits).
- `depcheck.mjs --items-file`: OK; page dependency depth 55 (A) / 56 (B); no
  cited-not-in-deps warnings remain.
- `fwdcheck.mjs --items-file`: OK. `extcheck.mjs --items-file`: OK — 28476
  items, 0 recorded-not-proved.
- `manifest-deps.mjs`: 15 items, 0 normalized, 0 errors.
- `manifest-integrity.mjs --run`: 158 pages owed, 158 in the manifests, no
  scope drift.
- `content-policy.mjs research/...-batch-51.pages.json`: 15 scoped items, 0
  errors, 0 warnings.
- `item-dependency-levels.mjs check --run`: no batch-51 line; remaining errors
  are the other-batch findings recorded above.
- `coverage-checklist.mjs --require-destination`: 2 pages, 38 harvested
  results, 0 errors, 0 warnings.
- `source-fetch-check.mjs --coverage ... --stamp` and check mode: 6/6 source
  entries fetch-verified, 6/6 resolved, 0 documented drops.
- `proof-contract.mjs --strict`: 11/11 items checked, 0 errors, 0 warnings.
- `citation-fidelity.mjs`: no quote-not-found, no widening candidate.
- `boundary-audit.mjs`: 88 rows, 15 not_applicable, no template reuse at or
  above 3 members, no contradicted dispositions.
- Scoped `validatePhysicsContent` over the batch-51 closure: 0 errors naming a
  batch-51 item (37 run-wide findings recorded above).
- `frontier-dependency-ledger.mjs refresh --run`: refreshed and deduplicated.
- `validate-plan.mjs research/plan-spec.json --run`: 577 run-wide findings,
  none naming a batch-51 page or item.

## Empirical qualifications and scope

The pair is a conditional model development. The A page is entirely
conditional on P1, P2, P4 and P5, on the declared effective one-dimensional
reduction, on the declared potentials, boundary conditions and coupling, and
on the cited mathematics; it records no count, rate, spectrum, uncertainty or
measured value. The reduction from the three-dimensional model, the interval
boundary conditions, the zero-range interface condition and the scattering
reading of the current ratios are declared assumptions in the sense of P7; an
identification of a concrete material system with them is a tested
identification with uncertainty and is not produced anywhere in the batch.
The scattering solution of the barrier item is a declared generalized
stationary solution and not an element of the model state space, so no Born
probability is read from it. The three examples are exact finite computations
in the declared models (rational brackets and algebraic identities), not
simulations, measurements or statistical inference; the only decimals present
are bracketed by exact rationals proved in the verifications. Agreement of any
of these formulas with a measurement would be evidence about the combined
model, apparatus and analysis assumptions, not a proof of the model.

## Escalations

None held for a batch-51 item: all 15 items are authored with their
prerequisites, contracts, page placement and evidence, and no batch-51 claim
is blocked. The run-wide blockers recorded above (empty scaffold manifests for
later QM/GR batches blocking the run-wide physics-content gate, and the two
batch-40 dependency-level mismatches) are owned by those batches or the owner
and were not modified here.

## Readiness

All 15 items were recorded `ready` with
`node tools/physics-support/step1-decisions.mjs record --run physics-cm-qm-gr-79-2026-10-11 --item <ID> --decision ready --dependencies <JSON deps> --reason <evidence summary>`
**after** the final item carriers, the final manifest regeneration and the
proof contracts. The dependency lists passed are the items' declared `deps`,
including the cross-batch and imported suppliers actually used. A scoped check
of the freshness records shows no open batch-51 record. Handoff artifacts: the
A/B carriers, the manifest, the coverage, the proof contracts, the cross-batch
input and these notes. Step 2/3 independent review follows; a readiness record
is not mathematical approval.
