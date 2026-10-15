# Step 3a reader report — batch 41

Run: `physics-td-qft-rpm-62-2026-10-14`  
Role: read-only reader  
Scope: batch `41`

## Opened inventory

Pages reviewed:

- `library/quantum-field-theory-mathematics/qft-mx01.md` (A page)
- `library/quantum-field-theory-mathematics/qft-mx01-examples.md` (B page)

Assigned items reviewed:

- `def-qft-example-data`
- `thm-qft-example-finite-dyson-unitarity`
- `lem-qft-example-golden-kernel`
- `lem-qft-example-oscillator-feynman-prescription`
- `ex-qftmath-x01`
- `ex-qftmath-x03`

Direct mathematical dependencies opened to check supplier statements and uses:

- `def-countable-choice`
- `thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness`
- `def-fourier-transform-on-l-one-of-rn`
- `def-complex-exponential`
- `def-schwartz-space-and-its-seminorms`
- `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`
- `thm-complex-exponential-is-entire-with-derivative-itself`
- `lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness`
- `thm-l-one-l-two-agreement-of-fourier-transform`
- `thm-plancherel`
- `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`
- `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`
- `thm-fourier-transform-maps-schwartz-space-continuously-to-itself`
- `thm-nrqm-oscillator-hermite-recurrence`
- `thm-nrqm-oscillator-oscillator-scaling-and-exact-realization`

Additional published definitions opened to assess the oscillator item's distribution notation:
`def-distribution`, `def-distributional-derivative`, `def-dirac-delta-and-its-derivatives`, `def-tempered-distribution`, `def-schwartz-topology-and-convergence`, and `thm-test-function-operations-are-continuous`.

The run's batch-41 proof contract was read as review context. It is not a proof verdict.

## Findings not editable in this read-only assignment

1. **`def-qft-example-data`, natural-unit field convention.** The item assigns dimensions to a scalar field and a Dirac field but does not define the fields as maps or state the four-dimensional action/kinetic-term normalization that fixes these canonical field dimensions. “Common natural-unit field convention” does not identify those missing hypotheses. Tong §0.1 supports the use of natural units and mass dimensions generally, but does not provide the specific scalar/Dirac field-dimension statements ([Tong, §0.1](https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S0.html), lines 64–83). The formulation needs the precise field types and canonical-normalization convention, or a source that states those conditions.

2. **`def-qft-example-data`, gauge notation.** The Definition introduces `A_lower`, `D_a`, `A -> A+dχ`, and `ψ -> exp(iqχ/ħ)ψ` without specifying the spacetime domain, the types of `A`, `χ`, and `ψ`, or the regularity needed for `∂_a`. The convention needs an explicit coordinate/spacetime domain, one-form/scalar-field types, and regularity. Tong §1.1 describes fields as quantities defined at every point of space and time and identifies spatial/vector types for electromagnetic fields ([Tong, §1.1](https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S1.html), lines 26–35); the assigned definition does not give the corresponding domains/types for its gauge notation.

3. **`def-qft-example-data`, SI dimensions of `μ0`.** The given clause says the constants have dimensions “as stated above,” but the Definition gives no unit for `μ0`. Proof 1.1 uses `[μ0] = kg m C^-2` to conclude `g` is dimensionless, and Proof 2.1 also uses SI electromagnetic units. BIPM identifies the permeability unit as H m^-1 (equivalently kg m C^-2); it should be stated or bound to an exact source premise in this item ([BIPM, SI Brochure, 9th ed., Table 4 and Appendix 1, Resolution 1](https://www.bipm.org/utils/common/pdf/si-brochure/SI-Brochure-9.pdf), printed pp. 134 and 189, PDF pp. 135 and 190).

4. **`lem-qft-example-oscillator-feynman-prescription`, Plemelj proof.** Proof 1.2 calls `∫ xψ/(x²+ε²)` the real part of the regularized integral, and Proof 2.1 calls `-∫ φ ε/(x²+ε²)` its imaginary part. The declared Schwartz space is complex-valued. For complex tests these are not the real and imaginary parts of the scalar integral; the decomposition is `∫ xφ/(x²+ε²) - i∫ εφ/(x²+ε²)`. For example, with `φ(x)=i exp(-x²)`, the actual integral has a positive real part and zero imaginary part, while the stated identifications do not. The Plemelj identity is valid, but these written proof calculations are false for the stated test-function class and need repair.

5. **`lem-qft-example-oscillator-feynman-prescription`, distribution operations.** The Statement asserts distributional derivatives and a distributional Fourier limit, while its dependencies define Schwartz functions and Fourier transforms but do not supply the distribution/derivative convention or specify the limit topology. The proof's half-line integration by parts would prove an identity once one adopts the distributional derivative definition, but that definition is not stated or declared as a prerequisite. The available published `def-distributional-derivative` defines the test-function action, and `def-tempered-distribution` defines the Schwartz-dual setting; the item should use those suppliers or define the operations and convergence mode locally.

6. **Page `qft-mx01`, final summary paragraph.** The sentence “The local arguments prove every mathematical claim” overstates the current proof status because the oscillator item's Plemelj proof contains the false complex-test calculations above. The summary can be revisited after the item repair.

## Page verdicts

- **`qft-mx01` (A): not accepted.** The summary's completeness claim is not supported by the current oscillator proof. Its local item claims are appropriately bounded to finite/one-mode models, but the convention item also needs the missing field/gauge definitions and SI unit detail recorded above.
- **`qft-mx01-examples` (B): no defect found.** Both examples accurately compute their selected finite-model values, preserve the distinction between matrix-element squares and probabilities, and avoid claims about continuum decay or spatial causality.

## Edits and validation

No source items or pages were edited because this is a read-only reader assignment. The defects above remain for owner disposition. No reflow, precheck, proof-layout, or test command was run; the required formatter/check sequence applies after an authorized edit.

The cited source passages were checked: Tong, *Quantum Field Theory*, [§0.1](https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S0.html) (natural units and mass dimensions, lines 64–83), [§3.1.1](https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S3.html) (Dyson formula, lines 153–158), [§3.6.1](https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S3.html) (Golden Rule, lines 566–577), and [§§2.1.1, 2.7.1–2.7.2](https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S2.html) (oscillator, Feynman prescription, Green functions, lines 59–65 and 474–484); Srednicki, [*Quantum Field Theory* draft](https://web.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf), Problem 9.5(b)–(g), printed pp. 84–85 (PDF pp. 83–84); Fitzpatrick, [*Quantum Mechanics*](https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf), Chapter 13 §§13.3 and 13.5 (printed pp. 177 and 180–181); and the BIPM [9th-edition SI brochure](https://www.bipm.org/utils/common/pdf/si-brochure/SI-Brochure-9.pdf), SI derived-unit table p. 134 and permeability-of-vacuum unit in Appendix 1, Resolution 1, p. 189 (PDF pp. 135 and 190). These sources support the items' contextual references; the local mathematical arguments remain the proof obligations.

## Blocker and coverage limitation

No blocker was found. The physics autopilot status reports the run as active at `3a-read`, with no worker currently running. One acquisition-order deviation occurred: `thm-l-one-l-two-agreement-of-fourier-transform` was opened before its header exposed `thm-plancherel` as a dependency; Plancherel was then opened before the Golden-kernel argument was assessed. The published direct suppliers were checked at their exact statements and uses; their full transitive proof closures were not independently audited. All assigned items and both assigned pages were opened. No empirical claims or observations occur in this batch.
