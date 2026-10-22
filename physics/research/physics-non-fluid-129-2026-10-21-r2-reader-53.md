# Step 3a Reader Report — batch 53

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader  
Scope: batch `53`

## Opened inventory

Assigned pages:

- A page `nrqmx-magnetic-geometry`: [library/non-relativistic-quantum-mechanics/nrqmx-magnetic-geometry.md](../library/non-relativistic-quantum-mechanics/nrqmx-magnetic-geometry.md)
- B page `nrqmx-magnetic-geometry-examples`: [library/non-relativistic-quantum-mechanics/nrqmx-magnetic-geometry-examples.md](../library/non-relativistic-quantum-mechanics/nrqmx-magnetic-geometry-examples.md)

The A page's required pages were also opened: `nrqmx-form-spectral-methods`, `nrqmx-adiabatic-holonomy`, `qm-math-magnetic-and-detection`, `qm-math-oscillator`, and `nrqmx-operator-realizations`.

Assigned items were read in supplier-first order:

1. `def-nrqmx-magnetic-form-data`
2. `def-nrqmx-periodic-ring-domain`
3. `lem-nrqmx-magnetic-form-closability`
4. `lem-nrqmx-landau-form-diagonalization`
5. `thm-nrqmx-periodic-flux-spectrum`
6. `lem-nrqmx-landau-3d-form-diagonalization`
7. `post-nrqmx-magnetic-model-extension`
8. `pthm-nrqmx-landau-direct-integral`
9. `pthm-nrqmx-flux-ring-spectrum`
10. `pthm-nrqmx-pauli-square-identity`
11. `ex-nrqmx-landau-3d-continuum`
12. `ex-nrqmx-flux-half-crossing`

The exact direct item suppliers of these carriers were opened: `def-nrqm-magnetic-and-detection-position-and-momentum-operators`, `def-complex-lp-and-euclidean-test-function-conventions`, `def-l-p-space-as-a-quotient-by-null-functions`, `def-countable-choice`, `def-nrqm-intervals-hilbert-sobolev-spaces`, `lem-nrqm-intervals-endpoint-trace-and-half-line-decay`, `def-axiom-of-choice`, `def-dependent-choice`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-integration-by-parts-for-absolutely-continuous-functions`, `cor-cauchy-schwarz-inequality-for-l-two`, `thm-nrqm-oscillator-oscillator-scaling-and-exact-realization`, `def-fourier-transform-on-l-one-of-rn`, `thm-plancherel`, `cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space`, `lem-nrqm-composites-euclidean-l2-product-unitary`, `cor-c-one-change-of-variables-for-l-one-functions`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `def-the-standard-smooth-step-function`, `cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn`, `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`, `thm-dominated-convergence`, `thm-nrqmx-interval-unitary-boundaries`, `lem-nrqm-intervals-integration-by-parts`, `def-fourier-coefficients-and-trigonometric-polynomials`, `thm-trigonometric-system-is-complete-in-l-two-of-the-torus`, `thm-kato-rellich`, `def-relative-boundedness-with-respect-to-an-operator`, `thm-spectral-theorem-for-unbounded-self-adjoint-operators`, `thm-nrqmx-closed-form-representation`, `def-divergence-and-curl-of-a-c1-vector-field`, and `thm-algebra-of-derivatives`.

The two draft suppliers are in other current-run batches: `thm-nrqmx-interval-unitary-boundaries` (batch 43) and `thm-nrqmx-closed-form-representation` (batch 44). Their statements and proofs were inspected independently. For the form-representation supplier, I also checked the exact interfaces it uses in `def-closed-sectorial-form-and-its-associated-operator`, `def-nrqm-coulomb-closed-semibounded-forms`, `thm-riesz-representation-for-hilbert-space`, `thm-cauchy-schwarz-in-an-inner-product-space`, and `thm-unbounded-borel-functional-calculus`; its uses of Choice and the unbounded spectral theorem were checked against their statements.

## Review conclusions

- The magnetic form is finite on the stated test core, Hermitian, lower bounded, and the stated closability argument tests the limits of the covariant derivatives and the nonnegative potential factor against the dense core. The form-closure and representation hypotheses used by the postulate match the suppliers.
- The periodic domain uses the exact endpoint traces from the interval Sobolev suppliers. The periodic flux theorem's self-adjointness, Fourier eigenvalues, spectral type, integer-shift unitary, and gauge-removal condition follow under its stated Choice hypotheses. The physical ring theorem preserves the ideal zero-width and periodic-wavefunction assumptions and the half-flux example correctly identifies the two ground labels.
- The planar Landau transform uses the stated wave-number normalization and the translated oscillator center. Its coefficient form and domain match the oscillator and Fourier suppliers. The three-dimensional extension adds the longitudinal multiplier with the correct SI dimensions; the example's multiplication operator has spectrum `[E0, infinity)` and absolutely continuous scalar spectral measures, including no threshold atom.
- The Pauli square identity has the correct commutator sign for `Pi_j = -i hbar partial_j - q A_j` and the stated curl convention. It is restricted to the smooth compactly supported core and does not assert a closed-domain identity or a measured electron `g`-factor.
- No experiment or empirical premise occurs in the assigned carriers. The physical conclusions are conditional model deductions and do not claim that the ideal models are realized by a material.

Source review was limited to cited sections, not entire books. The opened passages were:

- David Tong, [*Applications of Quantum Mechanics*](https://www.damtp.cam.ac.uk/user/tong/aqm/aqm.pdf), §§1.1.1, 1.2, 1.3.1, and 1.5 (printed pp. 4–6, 14–15, and 23–26): minimal coupling with general signed charge; Landau gauge and oscillator levels; flux-threaded ring Hamiltonian and periodic Fourier energies; spin coupling `-g q S·B/(2m)`.
- V. P. Nair, [*Notes on Quantum Mechanics*](https://nair.ccny.cuny.edu/Notes-QM.pdf), §§11.2–11.3 and 13.1–13.2 (printed pp. 127–130 and 137–143): the Pauli square expansion, Aharonov–Bohm flux phase, and Landau levels. These passages use Gaussian-unit `c` factors; the assigned items state and use SI conventions explicitly.
- Aram Harrow, [MIT 8.06 Spring 2016 Lecture Notes, Chapter 4](https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2016/6e02558ecf4b7af37d2cdff550fc0f71_MIT8_06S16_chap4.pdf), §§3.1–3.2 and 3.5 (printed pp. 21–24 and 33–34): minimal-coupling Hamiltonian, the Landau-gauge oscillator including free longitudinal motion, and flux-loop/Aharonov–Bohm context. These passages also use `c`-dependent Gaussian conventions.

## Edits and evidence

1. In the assigned A-page prose, the sentence at lines 63–64 said the loop orientation was stated “in the result.” The assigned ring theorem states the circulation, while its `Remarks` specify that increasing `phi` is the loop orientation and positive flux has that circulation. I changed the page summary to say that the theorem's `Remarks` fix the convention. This corrects the location without changing the claim.
2. In `items/thm-nrqmx-periodic-flux-spectrum.md`, the TikZ-CD square at lines 128–131 originally labelled the codomain of both `T_alpha` operators as `H^2_per(S^1)`. Each operator has domain `H^2_per(S^1)` and codomain `L^2(S^1)`, so I changed the lower row to `L^2(S^1)`. The top `U_j` preserves the periodic domain and the bottom `U_j` is the same unitary multiplier on the Hilbert space; the square expresses `T_{alpha+j} U_j = U_j T_alpha` as proved in step 4.1. The diagram is not used in the proof. The proof contract has no diagram field and no proof derivation changed; the item had no `verification.judge` record.

After the item edit, the required commands completed:

- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/thm-nrqmx-periodic-flux-spectrum.md` — reflowed.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/thm-nrqmx-periodic-flux-spectrum.md` — pass, 1 checked, 0 failing.
- `node tools/physics-support/proof-layout.mjs items/thm-nrqmx-periodic-flux-spectrum.md` — 1 item, 4 steps, 0 defects.

The other assigned diagrams were checked against the text: the planar Landau diagram's partial Fourier, shear, and oscillator-coefficient maps have the stated domains and directions; the ring schematic depicts the increasing-`phi` orientation, radius, and excluded flux core consistently with the theorem's idealized setup.

## Defects not repaired

None identified. In particular, no defect was found in either draft supplier from batches 43 and 44, and no out-of-scope supplier or page finding remains.

## Page verdicts

- `nrqmx-magnetic-geometry` (A): pass after the summary-location correction. Its summaries match the item definitions, conditional model results, scope limitations, and source conventions.
- `nrqmx-magnetic-geometry-examples` (B): pass. Both examples state conditional consequences of the ideal models; neither is presented as an experiment or finite-sample observation.

## Blocker

None.
