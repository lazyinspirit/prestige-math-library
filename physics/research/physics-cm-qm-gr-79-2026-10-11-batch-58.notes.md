# Batch 58 notes — Qm Central Potentials And Hydrogen

Run `physics-cm-qm-gr-79-2026-10-11`, role **beta**, batch **58**, covering the
pair `qm-central-potentials-and-hydrogen` (A, order 195) and
`qm-central-potentials-and-hydrogen-examples` (B, order 196), category
`non-relativistic-quantum-mechanics`, library `physics`. Both pages are
`status: draft`; this batch publishes nothing. No experiment item is built.

Read first: root `CLAUDE.md`, workspace `CLAUDE.md`, `README.md`, `SCHEMA.md`,
`WORKFLOW.md`, `../PHYSICS-CONTENT-MODEL.md` (including the statistical-evidence
section), the binding owner direction
`research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md` (no
batch-58-specific override; the general rules — draft suppliers only after
inspection, carry physical premises and choice assumptions, new content stays
draft — were applied), the batch dependency levels
`research/physics-cm-qm-gr-79-2026-10-11-batch-dependency-levels.json` (batch
58: level 12, requires batches 39, 51, 55), the design section
`research/plan-non-relativistic-quantum-mechanics-track.md` L3289, the
reservation in
`research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/inventory.json`
(order 16) together with prose-scaffold row 16, and `research/plan-spec.json`.

## Design vs plan-spec

The design reservation (prose-scaffold row 16) names prerequisites `NRQ-A09`,
`NRQ-A12`, `NRQ-A13`, i.e. `qm-one-dimensional-potentials`,
`qm-angular-momentum-and-spin` and `qm-composites-entanglement-and-reduced-states`,
plus the Coulomb/negative-radial math closure `M13, M22, M23`. The current
plan-spec entry (which controls this run) requires
`qm-composites-entanglement-and-reduced-states`, `qm-math-coulomb` and
`qm-one-dimensional-potentials`. The conflict is recorded and resolved in
favour of the plan: the A page declares exactly the three plan-spec
prerequisites in its manifest and carrier. Item-level review of all fifteen
carriers found **no** batch-58 proof step that consumes an item of
`qm-angular-momentum-and-spin` (batch 54); the angular content enters through
the batch-39 `qm-math-coulomb` reduction and the batch-37
`thm-nrqm-orbital-and-spin-sphere-onb` spherical-harmonic basis, and the
Coulomb math closure is exactly what `qm-math-coulomb` supplies. The B page
records the design's `[E pending]` spectroscopy candidate as a deferral (below).
Both pages list `requires` exactly as plan-spec does (A: the three page ids;
B: A).

## Inventory

A page `qm-central-potentials-and-hydrogen` (11 items; manifest
`dependency_level` in parentheses):

1. `lem-nrqm-central-exponential-moments` (0) — $\int_0^\infty r^k e^{-\lambda r}dr=k!/\lambda^{k+1}$ for $\lambda>0$, $k\ge0$, under Countable Choice.
2. `lem-nrqm-central-positive-scaling-spectral-measure` (0) — for $c>0$, $E_{cA}(B)=E(c^{-1}B)$, with domain/resolvent comparison for the unbounded calculus.
3. `lem-nrqm-central-free-operator-differential-identification` (1) — the three-dimensional free operator is the weak Laplacian on $W^{2,2}$, and bounded $V$ gives $-\frac{\hbar^2}{2m}\Delta_w+V$ on the same domain.
4. `def-nrqm-central-framework-central-potential-model` (9) — the declared central-potential model: state space, bound $V$, assigned energy operator $H_V$, spherical/effective-potential reading, stationary/bound-state vocabulary, exclusions.
5. `pthm-nrqm-central-spherical-reduction-of-smooth-states` (10) — smooth compactly supported radial vectors satisfy the declared radial equation.
6. `def-nrqm-central-framework-coulomb-and-hydrogen-model` (12) — one-centre $H_\kappa$ with $a_\kappa=\hbar^2/(m\kappa)$, two-body $H_2$, centre-of-mass/relative decomposition, reduced mass, hydrogen-like identification, exclusions.
7. `pthm-nrqm-central-coulomb-energy-observable-and-flow` (13) — assigned energy observable, self-adjointness, Stone flow.
8. `pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy` (14) — $E_n=-m\kappa^2/(2\hbar^2n^2)$, $n^2$-fold model degeneracy, completeness on the negative subspace, nonzero continuum.
9. `pthm-nrqm-central-coulomb-bound-state-radial-distributions` (15) — radial density, ground state $4r^2a_\kappa^{-3}e^{-2r/a_\kappa}$, mean $3a_\kappa/2$, mode $a_\kappa$.
10. `pthm-nrqm-central-two-body-reduced-threshold-and-total-momentum` (16) — $U_\Phi H_2U_\Phi^{-1}=T_R\otimes I+I\otimes C_\mu$, relative levels as thresholds, no total eigenvalues, no definite total momentum.
11. `rem-nrqm-central-scope-and-empirical-status` (17) — scope, exclusions, empirical status, no experiment reported.

B page `qm-central-potentials-and-hydrogen-examples` (4 items):

12. `ex-nrqm-central-hydrogen-bound-energy-units-and-reduced-mass` (17) — unit/dimension check of $E_n$, reduced mass, independent derivation (no reproduction of the erroneous printed source formula).
13. `ex-nrqm-central-hydrogen-radial-distributions-and-moments` (16) — finite checks of the ground-state density, moments and $\langle r\rangle$ in the declared model.
14. `rem-nrqm-central-hydrogen-spectroscopy-status` (17) — the `[E pending]` deferral: no measured line, wavelength or frequency is asserted.
15. `rem-nrqm-central-examples-scope-limits` (18) — scope limits of the examples page.

Capacity: A 11/54, B 4/28 within the reservation caps; both pages are far below
the 100-item page cap. Items were authored suppliers-first in the manifest's
ascending dependency order (levels 0,0,1,9,10,12,13,14,15,16,17 and B
16-18), and the levels were recomputed with
`/tmp/fix-levels.mjs` after the dependency edits; `item-dependency-levels.mjs
check --run` reports no batch-58 finding (the remaining run-wide errors are
later batches with empty scaffolds).

## Sources and dispositions

`research/physics-cm-qm-gr-79-2026-10-11-batch-58.coverage.json`:

- A page: Tong, *Quantum Mechanics* §§4.2–4.4 (lecture notes, printed
  pp.104–121, PDF = printed + 3); Binney–Skinner, *The Physics of Quantum
  Mechanics* §8.1–§8.2 (textbook, printed pp.182–198); Teschl, *Mathematical
  Methods in Quantum Mechanics* Ch.10 (monograph, printed pp.221–238, PDF =
  printed + 12); Bühler–Salamon, *Functional Analysis* §5.2 and §5.6 (ETH
  lecture notes, printed pp.219–232 and 273–290); NIST DLMF §5.2(i), §5.5(i)
  (reference work) for the exponential-moment lemma.
- B page: Binney–Skinner §8.1; Tong §4.3.1–4.3.2; Teschl §10.4.
- 41 harvested headings, every one disposed (21 included on the A page, 7 on
  the B page, plus inline/out-of-scope/deferred rows with written reasons).
  Deferrals: the three-dimensional oscillator (→ `qm-harmonic-oscillator`),
  the photon discussion (→ `qm-photons-and-radiation-modes`), Teschl §10.3
  angular momentum (→ `qm-math-coulomb`), and the design's spectroscopy data
  candidate `[E pending]` (→ `qm-light-matter-and-spectral-transitions`).
  Out of scope: Binney §8.2/§8.2.1/§8.2.2 fine and hyperfine structure and
  Teschl §10.5 ground-state non-degeneracy, each with a result-specific reason.
- `source-fetch-check --stamp`: **8/8 source instances fetch-verified**, full
  PDF/HTML bodies, hashes recorded; no source drop, no `source_resolution`
  entry, no retries consumed. Tong/Binney/Teschl hashes match the hashes
  already recorded for batch 55 (Binney `f19649bce67898ee`, Teschl
  `8dc8de0b58aa0a3f`).
- Design warning honoured: the hydrogen energy example derives and
  dimension-checks $E_n$ from the declared model and Binney (8.25)–(8.27), and
  does not reproduce Tong's erroneous printed formula; the remark items
  reproduce no numerical value from the sources.

## Choice and physical assumptions

The two math lemmas and the free-operator lemma carry the Axiom of Countable
Choice (and the Axiom of Choice where the cited published supplier does, e.g.
the spectral theorem for unbounded self-adjoint operators); the Coulomb
theorems inherit AC from the batch-39 mathematics in their deps, and no
consumer is choice-free unless its supplier chain is. All physics items are
`domain: physics`, adopt P1/P2/P4/P5/P6/P7 explicitly (or through the declared
model items that do), and state their model status and exclusions in
`physical_scope`. No measured quantity, empirical constant or observation is
asserted anywhere in the batch.

## Cross-batch dependencies

`research/physics-cm-qm-gr-79-2026-10-11-batch-58.cross-batch-dependencies.json`
contains 112 rows: 109 item edges and 3 page edges, all `verified`. Supplier
batches: 35 (5), 37 (1), 39 (23), 43 (47), 44 (6), 45 (8), 47 (6), 48 (9),
51 (4). Every row states the consumer's role, the inline citation (or that the
declared edge is not repeated inline — 24 rows — with the transitive route via
the declared model items for the batch-39/51 mathematics and the inherited
framework-assumption route for the rest), the supplier's title and statement
head, and the hypothesis check. The page edges are A→`qm-math-coulomb`,
A→`qm-one-dimensional-potentials` and A→`qm-composites-entanglement-and-reduced-states`;
for the last, page-level review found no item-level consumption of any
batch-55 item (the two-body tensor construction reads P1 clause (iv) and the
batch-35 math items), which is recorded honestly for Step 3.

## Checks (actual results)

- `precheck.mts` on the 10 proof-bearing items: all PASS (defs/remarks skipped
  by design).
- `proof-layout.mjs` on all 15 items: 15 items, 44 steps, 0 defects.
- `rendercheck.mjs` on 15 items + 2 pages: OK (17 files).
- `content-policy.mjs` on the manifest: 15 items, 0 errors, 0 warnings.
- `manifest-deps.mjs`: 15 items, 0 errors.
- `item-dependency-levels.mjs check --run`: 0 batch-58 findings; run-wide 14
  errors, all `empty scaffold inventory` for later unbuilt pairs (56, 57,
  59–64 and one GR batch), none in batch 58.
- `depcheck.mjs --items-file` (15 ids): OK, page depths 56/57, no cycle.
- `fwdcheck.mjs --items-file`: OK (inherited forward references only, no open
  forward reference created by this batch).
- `extcheck.mjs --items-file`: 0 recorded-not-proved, 0 resting on them.
- `proof-contract.mjs … --strict`: 0 errors, 0 warnings, 10/10 items
  (re-run after the 34-excerpt citation-quality pass; still 0/0).
- `citecheck.mjs` on the 15 items: every recognised elementary move cites a
  home that states it (0 warnings).
- `coverage-checklist.mjs … --require-destination`: 2 pages, 41 harvested
  results, 0 errors, 0 warnings.
- `source-fetch-check.mjs` (check mode): 8/8 fetch-verified.
- `author-check.mts physics-cm-qm-gr-79-2026-10-11 58`: **ok: true**,
  fingerprint `ffdc68467a718571…` (refreshed after the proof-contract
  citation-quality pass below), all four sub-checks exit 0 (precheck,
  rendercheck, content-policy on items, strict proof contract); result file
  `research/physics-cm-qm-gr-79-2026-10-11-author-check-58.json`.
- `validate-plan.mjs research/plan-spec.json --run …`: exit 1 with the
  run-wide 2 errors both on `qm-identical-particles-and-exclusion` (batch 57,
  another owner's scope: `undeclared-prereq` toward
  `chains-antichains-sperner-and-dilworth` and toward `qm-harmonic-oscillator`)
  and 470 run-wide warnings; **no error or warning references any batch-58
  item or page** (`grep nrqm-central` = 0 matches), and pages 195/196 list
  exactly the plan-spec prerequisites.
- `frontier-dependency-ledger.mjs refresh --run …`: refreshed; batch 58 now
  reviewed with 112/112 rows `verified` in the unified ledger.
- `step1-decisions.mjs check --run …`: **0 outstanding batch-58 rows** (all 15
  items closed; run-wide 1377/1407 ready with 44 outstanding work units, all
  in other batches).

## Readiness records

All 15 items recorded `ready` in ascending dependency order (levels
0,0,1,9,10,12,13,14,15,16,16,17,17,17,18) with
`node tools/physics-support/step1-decisions.mjs record`, each carrying its
full examined-dependency list and an evidence reason naming the scoped checks,
the supplier statements examined, and the absence of unresolved prerequisites
or escalation. Ownership: every record is a beta record (`owner: false`); no
escalation record was written, and no published item was touched.

## Escalations and status

No escalation. No experiment was built because the design's only evidence
candidate is marked pending and no source-backed observation record
(preparation, apparatus, calibration, sampling, uncertainty) was harvested; the
deferral is recorded in the item `rem-nrqm-central-hydrogen-spectroscopy-status`
and in the coverage file, and no empirical claim is made. Published-corpus
defects: none found in batch-58 scope. The proof contracts' 91 citation
excerpts were checked against the cited sections: all are exact substrings,
and 34 excerpts that the mechanical extractor had taken from setup or example
sentences (for example the `H={0}` clause of the unbounded PVM integral, the
compact-image clause of the continuous-image theorem, the essential-spectrum
clauses, the squared-spectrum clauses and the kinematics Born-law clause) were
replaced by hand with the exact clause the fact uses; the strict contract gate
re-passed 0/0 afterwards, and Step 3 remains the independent mathematical
review.
