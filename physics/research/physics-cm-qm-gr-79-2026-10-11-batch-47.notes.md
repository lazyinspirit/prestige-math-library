# Batch 47 notes — `qm-autonomous-dynamics` (order 173/174)

Run: `physics-cm-qm-gr-79-2026-10-11`. Role: beta (Step 1 authoring). Pair:
A `qm-autonomous-dynamics` (order 173), B `qm-autonomous-dynamics-examples`
(order 174), category `non-relativistic-quantum-mechanics`, library `physics`.
Design: `research/plan-non-relativistic-quantum-mechanics-track.md` L3038.
Owner direction read: `research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md`
(binding; no batch-47-specific clause beyond the general construction rules).
Status: authoring complete; independent review pending.

## Items and dependency levels

A page (8 items): `lem-nrqm-autonomous-dynamics-flow-calculus` (0),
`lem-nrqm-autonomous-dynamics-heisenberg-flow` (1),
`lem-nrqm-autonomous-dynamics-stationary-ray-characterization` (1),
`def-nrqm-autonomous-dynamics-framework-evolution` (7),
`pthm-nrqm-autonomous-dynamics-schrodinger-picture-flow` (8),
`pthm-nrqm-autonomous-dynamics-heisenberg-picture` (9),
`pthm-nrqm-autonomous-dynamics-stationary-states-and-energy-conservation` (9),
`rem-nrqm-autonomous-dynamics-scope-and-empirical-status` (10).

B page (4 items): `ex-nrqm-autonomous-dynamics-two-level-precession` (10),
`ex-nrqm-autonomous-dynamics-finite-stationary-superposition` (10),
`cex-nrqm-autonomous-dynamics-superposition-with-distinct-energies-is-not-stationary` (11),
`rem-nrqm-autonomous-dynamics-examples-scope-limits` (12).

Levels were computed from the run's current manifests with
`node --input-type=module` + `runPages/dependencyLevels`
(`item-dependency-levels.mjs` exports) and the manifest labels were aligned to the
computed values; `check --run` reports **0 batch-47 errors** and no cycle. The run-wide errors remaining at the time of
recording (54) are other batches' `empty scaffold inventory` entries; other
batches are editing concurrently, so that count drifts.

## Design, plan and manifest conflicts (recorded)

1. **Budget bookkeeping.** The design reserves 32 A items and 18 B items; 8 A and
   4 B items are authored. The reservation is a cap, not a claim list; every
   promised claim is covered: P4 (definition + three theorems), Stone/domain
   invariance/Schroedinger equation (`pthm-...-schrodinger-picture-flow`),
   Schroedinger/Heisenberg pictures (`lem-...-heisenberg-flow`,
   `pthm-...-heisenberg-picture`), energy conservation and stationary states
   (`pthm-...-stationary-states-and-energy-conservation`), B: two-level precession
   (`ex-...-two-level-precession`) and finite stationary superposition
   (`ex-...-finite-stationary-superposition`). No promised claim was dropped; the
   smaller count is packaging, and the page stays far below the 100-item cap.
2. **`requires_physics: [NRQ-A03]` is a claim id, not a page id.** The page
   requires edge is `qm-observables-and-born-probabilities` in the manifest and
   the library carrier; NRQ-A03 has no home page in `plan-spec.json` (which has
   empty item arrays for this run). The manifest and carrier agree; recorded as a
   plan-vocabulary conflict.
3. **`plan-spec.json` carries no item inventories for this pair**; the control is
   the track design plus this batch manifest. No claim was taken from the plan
   spec item arrays because they are empty.
4. **Design source line vs used sources.** The design's line "Teschl §5.1; Binney
   §§2.2,3.3; MIT Ch6" was read as a source suggestion, not an obligation.
   Binney §3.3 (motion in a magnetic field, pp. 45-52) is dispositioned
   `out-of-scope` in the coverage harvest: it is the species-specific magnetic
   realization owned by the earlier magnetic-and-detection pair, and this pair
   asserts no spin/magnetic identification. Binney §2.2, §2.2.1 and §4.4 are used;
   MIT Ch6 and Ch7 are used.

## Sources (fetched, stamped, locators verified against the PDFs)

- G. Teschl, *Mathematical Methods in Quantum Mechanics*, 1st ed. 2009 (monograph),
  `https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf` — fetched
  2026-10-11, 317 pages, sha256_16 `8dc8de0b58aa0a3f`. Used: §2.1 pp. 55-58;
  §3.1 pp. 87-93 (spectral theorem and functional calculus, identity
  `||P(f)psi||^2 = int |f|^2 d mu_psi`); Thms 5.1-5.2 pp. 123-125 (generation,
  domain invariance, derivative characterization), eq. (5.4) p. 124
  (time-independent expectations, conservation of energy); Thm 8.1 (Noether)
  p. 174.
  **Locator correction (authoring repair):** two items initially cited
  "Section 3.3, printed pages 92-95 (invariant spectral probabilities and
  stationary states)". Page 92 of the book is in §3.1 "The spectral theorem";
  §3.3 "Spectral types" begins at printed p. 105. The citations were corrected to
  §3.1 pp. 87-93 and §5.1 pp. 123-125/(5.4) respectively.
- B. Zwiebach, MIT 8.05 (Fall 2013), Ch. 6 "Quantum Dynamics" (lecture notes),
  OCW URL in the coverage file — fetched, 51 pages, sha256_16
  `4de0ffc54c76fec1`. Used: §2.1-2.3 chapter pp. 10-17, §3.1-3.3 chapter
  pp. 18-25 (TOC verified).
- B. Zwiebach, MIT 8.05, Ch. 7 "Two State Systems", OCW URL in the coverage file —
  fetched, 22 pages, sha256_16 `a6299201ef0ece84`. Used: §2-3 chapter pp. 2-6.
  **Locator correction:** "Sections 2-3, printed pages 2-7" corrected to chapter
  pp. 2-6, since §4 starts at p. 7.
- J. Binney and D. Skinner, *The Physics of Quantum Mechanics* (textbook),
  `https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf` — fetched,
  310 pages, sha256_16 `f19649bce67898ee`. Printed = PDF - 8 verified; used
  §2.2, §2.2.1 (pp. 21-24, eqs. (2.29), (2.32), (2.34)) and §4.3-4.4 (pp. 68-71).
- D. Tong, *Quantum Mechanics* (lecture notes),
  `https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf` — fetched,
  133 pages, sha256_16 `34b3882872333dc1`. Used §1.2 printed pp. 9-14.

Coverage: 2 pages, 29 harvested results, every entry dispositioned
(included/inline/out-of-scope), 0 errors, 0 warnings.

## Dependency verification and repairs

In-run suppliers were read at their current carriers and reviewed edge-by-edge in
`...-batch-47.cross-batch-dependencies.json` (52 rows: 51 item edges + 1 page
edge): batch 43 (`post-nrqm-framework-autonomous-dynamics`,
`post-nrqm-framework-state-and-composition`,
`post-nrqm-framework-observable-and-probability`,
`def-nrqm-framework-quantities-and-units`), batch 44
(`def-nrqm-state-geometry-framework-state-space`,
`def-nrqm-state-geometry-pure-mixed-states-and-purity`,
`def-nrqm-state-geometry-state-vectors-and-rays`,
`lem-nrqm-state-geometry-ray-to-rank-one-projection`), batch 45
(`def-nrqm-observables-framework-observable-and-outcome-law`), batch 35
(`lem-nrqm-composites-density-and-scalar-spectral-probability`,
`lem-nrqm-composites-nuclear-bounded-cyclicity`,
`lem-nrqm-composites-rank-one-operator-calculus`), batch 42
(`thm-nrqm-magnetic-and-detection-conserved-spectral-probability-laws`). All
statuses `verified`; every row states the exact content used and where.

**Implicit-use repair (authoring).** The finite-superposition example's
return-time criterion (iii) and the two-level example's periodicity (vi), and the
counterexample's evaluation at `t=0`, use the exponential kernel
`exp(i*theta)=1 iff theta in 2*pi*Z`. The cited Euler/addition/modulus facts do
not by themselves give it, so the published item
`thm-kernel-and-fibres-of-complex-exponential` (`ker(exp)=2*pi*i*Z`) was added as
a dependency (role `mathematical-premise`) of
`ex-nrqm-autonomous-dynamics-finite-stationary-superposition`,
`ex-nrqm-autonomous-dynamics-two-level-precession` and
`cex-nrqm-autonomous-dynamics-superposition-with-distinct-energies-is-not-stationary`,
and is cited in their [F3]/[F6]/[F4] fact blocks and the affected steps. It is a
published out-of-run supplier, so no dependency level changed.

**Well-definedness repair.** In `lem-nrqm-autonomous-dynamics-stationary-ray-characterization`
step 3.1, the passage from "K=Cu is one-dimensional" to `T_K u = lambda u` now
records explicitly that a self-adjoint operator is densely defined, so its domain
is all of the one-dimensional space K (the earlier phrasing assumed `T_K u` was
defined). The item, its proof contract and its readiness record were refreshed;
all six items whose dependency closure contains this lemma were re-recorded with
unchanged carriers (hash-currency refresh), and all 12 records are closed.

**Prose repairs.** Two stale step references left by an earlier canonicalization
were fixed: `ex-...-two-level-precession` step 5.1 ("Steps 1.1 to 6.2" -> the
seven existing steps) and `ex-...-finite-stationary-superposition` step 4.1
("Steps 1.1 to 4.2" -> steps 1.1, 2.1, 2.2, 3.1, 3.2, 3.3). Both wrap-up steps
now name only existing steps; proof-layout stays 0 defects.

No circular, forward or missing dependency remains; every proof item was
re-examined for hypothesis strength (strong PVM compatibility only where stated;
domain hypotheses `A D(H_op) subset D(H_op)` carried into the equations).

## Checks run (exact results)

- `precheck.mts` on all 9 proof items: 9 checked, 0 failing.
- `proof-layout.mjs` on the same 9 items: 9 items, 57 steps, 0 defects
  (re-run after every edit).
- `manifest-deps`: 12 items, 0 missing, 0 errors.
- `content-policy`: 12 scoped items, 0 errors, 0 warnings.
- `coverage-checklist`: 2 pages, 29 harvested results, 0 errors, 0 warnings.
- `source-fetch-check --coverage ... --stamp`: 7/7 sources fetch-verified
  (7 stamped); check mode 7/7 verified.
- `proof-contract.mjs --strict`: 9/9 items, 0 errors, 0 warnings.
- `depcheck --items-file` (12 items): OK (page depth 53/54; no cycle).
- `fwdcheck --items-file`: OK; the 12 items carry the inherited forward marker of
  their prerequisite cones (informational).
- `extcheck --items-file`: OK (no recorded-not-proved members in scope).
- `rendercheck` on the 12 items + 2 page carriers: OK.
- `manifest-integrity --run`: 158 pages owed, 158 present, no scope drift.
- Scoped `validatePhysicsContent` (12 items, 2 pages): 0 errors.
- `boundary-audit` (self-check, not a gate): 72 boundary rows over the batch
  contract, 18 `not_applicable`, no template reuse and no contradicted
  disposition detected.
- `citation-fidelity` (self-check, not a gate): 93 citations over the 9 proof
  items, every recorded quote found in its cited source section, no widening
  candidate detected.
- `frontier-dependency-ledger.mjs refresh --run`: refreshed; all 52
  consumer-batch-47 edges reviewed; batch 47 no longer unreviewed. Orphaned
  reviews in the ledger (a live count, other batches are editing concurrently)
  belong to batches 39, 40, 41 and 71 and none is a batch-47 row.

Run-wide checks that fail only on **other** batches (recorded, not batch-47
defects):

- `validate-plan --run`: 2 `undeclared-prereq` errors for
  `qm-math-controlled-dynamics` and `qm-math-fock-and-equilibrium`; no
  `qm-autonomous-dynamics` error.
- `item-dependency-levels check --run`: 54 `empty scaffold inventory` errors from
  other batches at the time of recording; 0 batch-47 errors.
- `proof-contract-coverage --run`: aborts on the empty frontier inventory
  `cm08-symmetry-noether-and-conditional-conservation`.
- `physics-check --run`: aborts on the empty
  `physics-cm-qm-gr-79-2026-10-11-batch-24.pages.json`.
- `verifyMathematicsImports`: fails on unrelated repo-wide drift
  `items/fs-rational-power-of-negative-base.md`; no imported mathematics item
  consumed by this batch is affected.

## Empirical qualifications and scope

Every item is conditional on the framework postulates P1, P2 and P4 and the cited
mathematics; `rem-nrqm-autonomous-dynamics-scope-and-empirical-status` records
that the isolated-system idealization is an adopted model assumption and that no
apparatus, calibration, data or measured value appears anywhere in the pair. The
examples are exact finite model computations with declared model parameters; the
counterexample refutes one informally stated universal claim about
distinct-energy superpositions and asserts nothing about detectors, decoherence
or laboratory data.

## Escalations

None. No unmet prerequisite, page split, capacity problem or source-outage
escalation remains for this batch; the repairs above were completable locally.

## Readiness

All 12 items recorded `ready` via
`step1-decisions.mjs record --run physics-cm-qm-gr-79-2026-10-11 --item ... --decision ready`
with the examined dependency lists, after the final item carriers **and** the
final manifest regeneration (the manifest carries each item's text, so ordering
matters). Records were re-synced for hash currency after the stationary-ray
well-definedness repair and the manifest sync; at handoff all 12 records verify
closed against current inputs. Step 2/3 independent review follows; a readiness
record is not mathematical approval.
