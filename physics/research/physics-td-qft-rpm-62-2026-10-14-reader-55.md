# Step 3a reader report — batch 55

Run: `physics-td-qft-rpm-62-2026-10-14`  
Role: reader  
Batch: `55`

## Inventory opened

Assigned pages:

- `qft-x03` — [library/quantum-field-theory/qft-x03.md](../library/quantum-field-theory/qft-x03.md)
- `qft-x03-examples` — [library/quantum-field-theory/qft-x03-examples.md](../library/quantum-field-theory/qft-x03-examples.md)

Assigned items opened; supplier statements and proofs were inspected before final dispositions:

- `def-qft-x03-photon-count-pvm`
- `thm-qft-x03-photon-count-pvm`
- `pthm-qft-example-soft-coherent-counts`
- `ex-qft-x06`
- `exp-qft-fan-electron-moment-2022`
- `pthm-qft-reported-electron-anomaly-shift`

Page prerequisites read for scope and context: `qft-g01`, `qft-mx03`, `qft-mx04`, `qft-x01`, and `em-primitives-and-postulates`.

Claim-bearing suppliers inspected include `def-countable-choice`, `def-qft-example-data`, `def-qft-framework-units`, `def-qft-fock-and-test-spaces`, `def-projection-valued-measure`, `def-unbounded-linear-operator-domain-and-graph`, `def-adjoint-of-a-densely-defined-unbounded-operator`, `def-symmetric-self-adjoint-and-essentially-self-adjoint`, `def-qft-photon-transverse-space`, `def-qft-qed-photon-energy-multiplier`, `def-qft-finite-bounded-kraus-instrument`, `lem-qft-finite-instrument-normalization`, `def-qft-x03-photon-count-pvm`, `thm-qft-x03-photon-count-pvm`, `lem-qft-segal-weyl-domain`, `lem-qft-second-quantized-spectrum`, `lem-qft-qed-coherent-ir-obstruction`, `thm-qft-example-soft-current-angular-coherent`, `thm-logarithm-derivative-and-integral`, `post-qft-constructed-model-and-measurement`, `post-qft-free-photon-model`, `def-qft-example-observable-types`, and `lem-qft-example-penning-frequency-invariant`. The soft-current proof's measure, countability, polar-coordinate, and transverse-space suppliers were also inspected where invoked.

Source passages checked:

- Fan et al., [arXiv:2209.13084](https://arxiv.org/html/2209.13084), version 2: source identity and definition of the reported ratio (lines 18, 30), preparation and procedure (lines 62–71), weighted result and uncertainty budget (lines 88–102).
- Tong, [Quantum Field Theory, Chapter 6](https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html), §6.2.1, equations (6.513)–(6.524): transverse polarizations, creation/annihilation modes, and free photon Hamiltonian; §6.2.2 was checked for the contrasting auxiliary Lorentz-gauge discussion.
- Srednicki, [Quantum Field Theory draft](https://www.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf), §55, printed pp. 335–338: Coulomb-gauge transverse modes and photon Hamiltonian.
- Glauber, [“Coherent and Incoherent States of the Radiation Field”](https://www.ifi.unicamp.br/~cabrera/teaching/aula%2016%202011s1.pdf), §§II–III: coherent-state expansion and Poisson occupation law. The local assigned proof derives the distribution under its stated Fock and Born assumptions.

## Repairs and evidence

1. In `pthm-qft-example-soft-coherent-counts`, Step 4.3 used cutoffs `lambda_j = Lambda 2^-j` but wrote `C log(lambda_j/lambda_{j+1}) = C`. Since the ratio is `2`, the shell norm is `C log 2`. I corrected the equality; the following coherent-overlap expression already used `exp(-C log 2/2)`. I updated the batch-55 proof contract's `derive-4-3` claim and its adjacent-shell finite check.

2. In the same theorem's Statement, “future massive energy-momentum vectors” did not explicitly state the positive-energy condition used in Step 1.1. I made the mass-shell data explicit: `M_i > 0`, `E_i > 0`, and `E_i^2 - |p_i|^2 = M_i^2`, with the four-vector and units stated. The assigned consumer `ex-qft-x06` was checked: its incoming and outgoing data have positive energies and rest energy `M > 0`, so the clarified hypothesis preserves its use. I updated the `derive-1-1` contract claim.

3. In `exp-qft-fan-electron-moment-2022`, the Bohr-magneton formula used `e`, `hbar`, and `m` without their types and units. I specified `e > 0` in coulombs, `hbar` in joule-seconds, `m > 0` as the electron rest mass in kilograms, and the Bohr magneton's SI unit. Fan et al. state the same formula and electron charge convention; the report's measurement and uncertainty are otherwise faithful to the source. I updated the experiment setup review evidence in the proof contract.

4. In the assigned consumer `pthm-qft-reported-electron-anomaly-shift`, I tied the same Bohr-magneton notation to the experiment's explicit quantity definitions and units. The central-value subtraction and unchanged source-stated `1 sigma` uncertainty are correct. I added the corresponding setup excerpt to its proof contract.

After these repairs, reflow and precheck passed for all three changed items:

- `pthm-qft-example-soft-coherent-counts`: reflow unchanged; precheck pass.
- `exp-qft-fan-electron-moment-2022`: reflow unchanged; nonproof-structure precheck pass.
- `pthm-qft-reported-electron-anomaly-shift`: reflow completed; precheck pass.

No changed item had a stale `verification.judge` record to remove.

The required final command, `node tools/physics-support/proof-layout.mjs items/pthm-qft-example-soft-coherent-counts.md items/exp-qft-fan-electron-moment-2022.md items/pthm-qft-reported-electron-anomaly-shift.md`, was attempted after the final edits. It could not render: the app checkout has no installed `tsx` loader, so the support script selected its TypeScript fallback, which failed to resolve `@/components` from `web/components/library/ItemBody.tsx`. This is an environment/tooling blocker; the item prechecks passed, but the final renderer-backed layout check remains unavailable.

## Page verdicts

- `qft-x03`: no remaining page-summary defect. Its summary accurately scopes the number PVM, conditional draft QFT-MX03 supplier, free prepared state, and lack of detector or interacting-QED claims. Its assigned items are sound after the repairs above.
- `qft-x03-examples`: no remaining page-summary defect. The prepared-state example follows the theorem, and the experiment and affine-shift theorem preserve source attribution, conditions, uncertainty, and limitations.

## Uneditable findings

None. No defect remained in an out-of-scope dependency or page that warranted a routed finding.

## Blockers and coverage limits

- The renderer-backed `proof-layout` check failed as described above; only the required reflow and precheck commands passed.
- At the final status check, the live run reported a separate `3a-split` blocker: batch `42` had failed split three times. This is outside batch 55 and was not altered.
- The transitive dependency closure contains many general mathematical suppliers. I inspected the exact direct interfaces and proof arguments used by the assigned claims, but did not re-audit every underlying foundational result in that full closure. The QFT-MX03 mathematical result remains a draft prerequisite, and the assigned theorem preserves that conditional status.
- The experimental item does not reconstruct raw trial data, the covariance matrix, or the averaging weights; it states these source limitations and adds no statistical model or precision beyond the authors' report.
