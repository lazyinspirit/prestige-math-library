# Step 3a reader report — batch 51

Run: physics-td-qft-rpm-62-2026-10-14  
Role: independent reader  
Assigned pages: qft-f01 and qft-f01-examples

## Run state and scope

The physics autopilot status command reported the run in stage 3a-read with nothing running. After these report and findings files were written, a fresh status no longer listed batch 51 among the 3a-read artifact-missing units. The 3a-read coverage summary still lists batch 51 as missing, and 3a-split remains pending; I did not run an engine transition. I reviewed the current assigned carriers independently. No item or page prose was edited.

## Opened inventory

### Assigned pages

- qft-f01 — library/quantum-field-theory/qft-f01.md. Draft A page; requires qft-c01 and qft-mf04. Its summary accurately presents a selected free model, labels the species/statistics assignments as postulates, limits the occupation result to the named constructions, and disclaims empirical observations and broader spin-statistics conclusions. Verdict: pass.
- qft-f01-examples — library/quantum-field-theory/qft-f01-examples.md. Draft B page; requires qft-f01. Its summary accurately describes the normalizable-mode calculations as conditional model results, not measured data. Verdict: pass.

### Required page context

- qft-c01 — library/quantum-field-theory/qft-c01.md. Its unit/model summary matches the inspected framework-units and constructed-measurement items.
- qft-mf04 — library/quantum-field-theory-mathematics/qft-mf04.md. Its summary describes the actual scalar action-variation and free-domain carriers without asserting the missing charged-number result.

### Assigned items, in dependency order

1. post-qft-free-field-model — items/post-qft-free-field-model.md. Draft physical postulate.
2. def-qft-free-field-observables — items/def-qft-free-field-observables.md. Draft physical definition, after the postulate and its mathematical suppliers.
3. pthm-qft-free-fock-statistics — items/pthm-qft-free-fock-statistics.md. Draft physics theorem, after the postulate and Fock suppliers.
4. ex-qft-mode-occupations — items/ex-qft-mode-occupations.md. Draft example, after the theorem.

### Supporting item dependencies opened

Published mathematical premise: def-countable-choice.

Mathematical QFT suppliers: def-qft-scalar-mass-shell; def-qft-fock-and-test-spaces; def-qft-dirac-projections; lem-qft-dirac-projection-matrices; lem-qft-fock-ccr-car; lem-qft-segal-weyl-domain; lem-qft-second-quantized-spectrum; lem-qft-dirac-fermionic-translation-spectrum; lem-qft-free-action-equations; lem-qft-free-dirac-car-locality; lem-qft-smeared-free-scalar; lem-qft-free-domain-observables; lem-qft-mass-shell-measure-invariant; lem-qft-mass-shell-test-range-dense; lem-qft-fock-unitary-lift; lem-qft-mass-shell-test-restriction-continuity; lem-qft-scalar-poincare-action; and lem-qft-scalar-causal-commutator.

Physical QFT suppliers: def-qft-framework-units and post-qft-constructed-model-and-measurement.

Measurement mathematics: def-qft-finite-bounded-kraus-instrument and lem-qft-finite-instrument-normalization.

### Contracts

Read the four current contracts in research/physics-td-qft-rpm-62-2026-10-14-batch-51.proof-contracts.json. The theorem and example fact/derivation/boundary records match the current statements and proofs. The observable-definition risk note accurately leaves the charge-number result conditional.

### External source passages

- David Tong, Quantum Field Theory, Chapter 2: §§2.2–2.4.1, especially the scalar oscillator and Fock conventions (eqs. 2.93–2.95, 2.123–2.126), vacuum convention (2.98), and positive-energy shell measure (2.133–2.139). These are conventional formal treatments; they do not establish the local operator-domain proofs.
- David Tong, Quantum Field Theory, Chapter 4: §4.3 (Dirac action and the two equations from variation, eqs. 4.357–4.359) and §4.7 (plane-wave solutions, beginning at 4.410). The source uses different metric conventions from the local items; the local items state their own (-+++) convention.
- David Tong, Quantum Field Theory, Chapter 5: §5.2 and §5.2.1 (fermion field anticommutation relations, particle/antiparticle modes, and exclusion, eqs. 5.452–5.459).
- Mark Srednicki, Quantum Field Theory, author-hosted 2006 draft: §3, eqs. 3.15–3.17 for mass-shell and measure conventions, and the inspected spinor-quantization passages in §§37 and 39 for Dirac field equations, CAR, and particle/antiparticle modes. This draft uses its own conventions and is contextual source material, not proof of the local operator statements.

## Review and verdicts

### post-qft-free-field-model

The postulate defines the affine Minkowski and length-coordinate conventions through def-qft-framework-units, carries the inverse-length mass parameter and SI conversion, states the classical scalar and commuting-spinor action densities, and identifies the scalar bosonic and Dirac CAR-Fock assignments as adopted assumptions. The action equations are explicitly conditional on lem-qft-free-action-equations; the scalar and Dirac field carriers are used at their stated test-smearing and domain scope. The item does not claim that nature realizes the model or report data. Verdict: pass.

### def-qft-free-field-observables

The definition specifies local test spaces, the generated scalar Weyl algebra, the even Dirac CAR algebra, vacuum vector states, scalar and Dirac generator conventions, the scalar number-operator domain, and the conditional instrument-based measurement interpretation. It distinguishes model probabilities from observed outcomes and excludes point-field operators and coincident products. The charge-number expression is explicitly marked as a candidate; it does not assert self-adjointness or a proved maximal-domain result. The actual lem-qft-free-domain-observables carrier does not prove that planned charge result, and the assigned definition does not present it as proved. Verdict: pass.

### pthm-qft-free-fock-statistics

The proof uses the exact Fock vacuum, CCR/CAR relations, creation/annihilation formulas, and maximal domains. The bosonic induction, factorial normalization, CAR one-mode norm, projection identity, and composition-domain calculation are valid under the stated Countable Choice and selected-representation assumptions. It does not infer universal statistics or make an empirical claim. Verdict: pass.

### ex-qft-mode-occupations

The reciprocal-square series gives a normalized bosonic vector; the annihilation image has squared norm proportional to a divergent harmonic series, so the exact supplier domain excludes that vector. The CAR calculation correctly gives a normalized one-particle state and zero double creation. No observation or statistical inference is claimed. Verdict: pass.

The compressed tested-kernel calculation in lem-qft-free-dirac-car-locality, Proof 2.3, closes immediately by expanding u_F and u_G in the supplied Fourier definitions and applying Fubini; it does not require a pointwise field. I treated this as a nonfatal exposition omission, not a finding.

## Uneditable issue

The current post-qft-free-field-model contract’s non_derivation evidence says the action-variation supplier carrier is absent. The current postulate lists lem-qft-free-action-equations in deps and identifies it at [L1], and the supplier carrier exists with a complete conditional proof. The contract has no observation timestamp or source hash establishing when the absence statement was true. I record this as suspected stale contract evidence, not a defect in the postulate’s mathematics. I did not edit the contract because this reader assignment licenses repairs only in assigned item prose or A-page prose.

No confirmed mathematical defect remains in an assigned item, page, or inspected supplier.

## Edits and validation

No edits were made. Because there was no item repair or formatter run, I did not run proof-layout, reflow, or precheck. No validator pass is claimed.

## Coverage limits and blocker

No blocker prevented the independent review. I inspected the current relevant QFT supplier statements and complete proofs for the local arguments that support the assigned claims, but did not independently reprove every lower-level mathematical result in their full transitive foundations. The cited textbooks support the conventional formulations and source context; they do not establish that a physical model describes nature. The only remaining issue is the timestamp-unbound contract evidence described above.
