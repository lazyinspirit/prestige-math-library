# Step 3a reader report — batch 58

Run: `physics-cm-qm-gr-79-2026-10-11`  
Role: reader  
Scope: batch `58`

## Opened inventory

Read the workspace instructions and content model, the reader brief, the batch-58 page manifest, and both assigned pages:

- `library/non-relativistic-quantum-mechanics/qm-central-potentials-and-hydrogen.md` (A page).
- `library/non-relativistic-quantum-mechanics/qm-central-potentials-and-hydrogen-examples.md` (B page).

Opened all 14 items listed by the current batch manifest. The A-page items were `lem-nrqm-central-exponential-moments`, `lem-nrqm-central-free-operator-differential-identification`, `def-nrqm-central-framework-central-potential-model`, `pthm-nrqm-central-spherical-reduction-of-smooth-states`, `def-nrqm-central-framework-coulomb-and-hydrogen-model`, `pthm-nrqm-central-coulomb-energy-observable-and-flow`, `pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy`, `pthm-nrqm-central-coulomb-bound-state-radial-distributions`, `pthm-nrqm-central-two-body-reduced-threshold-and-total-momentum`, and `rem-nrqm-central-scope-and-empirical-status`.

The B-page items were `ex-nrqm-central-hydrogen-bound-energy-units-and-reduced-mass`, `ex-nrqm-central-hydrogen-radial-distributions-and-moments`, `rem-nrqm-central-hydrogen-spectroscopy-status`, and `rem-nrqm-central-examples-scope-limits`.

Opened and checked the argument-critical mathematical suppliers in dependency order, including the exponential-moment and free-operator lemmas; the Fourier/Sobolev identifications; the angular-radial unitary and transported Coulomb endpoint realization; the Coulomb kinetic bound, Kummer solution, negative spectrum, Jost solution, continuum density and essential spectrum; the scaling lemmas; the two-body reduced-mass theorem; the ground-state radial probability theorem; the Euclidean and Hilbert tensor products; and the Coulomb Hardy and relative-compactness results. I also checked the cited framework statements for P1–P7, the quantity and unit conventions, the one-particle state space and operators, the observable and evolution readings, state geometry, the position-law theorem and the stationary-state theorem.

## Edit and evidence

Edited `items/pthm-nrqm-central-coulomb-bound-state-radial-distributions.md`. The upstream negative-subspace theorem leaves the regular radial solution's nonzero scalar unspecified, so normalizing its vector does not fix a global phase. Clause (b) now states the ground-state representative with an explicit unit phase. Fact F3 and proof step 2.1 distinguish that representative from the separately normalized ground vector supplied by `thm-nrqm-coulomb-ground-radial-probability-and-units`; step 2.1 computes the normalization from the radial norm. The position and radial densities, moments, mode and small-ball probability are unchanged. I checked its assigned consumers in batch 58: the two-body theorem and the examples and scope remarks use phase-independent energies or densities.

Updated the step-2.1 derivation in `research/physics-cm-qm-gr-79-2026-10-11-batch-58.proof-contracts.json`. The item had no `verification.judge` record to remove.

Required checks after the final item edit:

- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/pthm-nrqm-central-coulomb-bound-state-radial-distributions.md` — reflowed.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/pthm-nrqm-central-coulomb-bound-state-radial-distributions.md` — PASS; 1 checked, 0 failing.
- `node tools/physics-support/proof-layout.mjs items/pthm-nrqm-central-coulomb-bound-state-radial-distributions.md` — 1 item, 4 steps, 0 defects.

## Uneditable finding

`thm-nrqm-coulomb-onto-radial-continuum-transform` is a draft supplier in current-run batch 39 and outside this batch's edit scope. Its Statement clause (a) says that `T_l`, defined on compactly supported `L²` sources, “extends uniquely” to an isometry whose domain is the positive spectral subspace. Those domains do not make an extension as stated: the compact-source domain is not a subset of the positive spectral subspace. The proof instead extends `T_l` as a contraction on all of `L²`, shows it kills the nonpositive component, and restricts it to the positive subspace. State the induced map on the projected compact-source core (or say that `T_l = \widehat T_l E_{A_l}((0,\infty))`) to make the extension precise. The assigned consumer whose dependency closure reaches the supplier is `pthm-nrqm-central-two-body-reduced-threshold-and-total-momentum`. The observed supplier bytes remain current; the routing JSON binds their raw SHA-256.

## Page verdicts

- `qm-central-potentials-and-hydrogen`: qualified pass. The page summary tracks the conditional model and the assigned results. The remaining qualification is the batch-39 transform statement above, used by its two-body theorem.
- `qm-central-potentials-and-hydrogen-examples`: pass. Its computations and status record distinguish model calculations from measured spectroscopy, and its scope summary matches the four listed items.

## Blocker and coverage limitation

No local blocker remains. The batch-39 supplier finding is nonfatal to the intended spectral representation because its proof establishes the contraction-then-restriction construction, but its Statement needs the domain wording corrected. I reviewed the argument-critical supplier clauses listed above; I did not independently audit every transitive proof in the mathematical foundation beneath those suppliers, and I did not treat the truncated tail of the authoring coverage notes as evidence.
