# Step 3a reader report — batch 48

Run: physics-cm-qm-gr-79-2026-10-11  
Role: reader  
Scope: batch 48

## Opened inventory

Pages:

- qm-massive-particle-kinematics — library/non-relativistic-quantum-mechanics/qm-massive-particle-kinematics.md
- qm-massive-particle-kinematics-examples — library/non-relativistic-quantum-mechanics/qm-massive-particle-kinematics-examples.md

Assigned items, reviewed in their page dependency order:

- lem-nrqm-kinematics-orthogonal-sums-of-self-adjoint-operators
- lem-nrqm-kinematics-component-valued-wavefunction-identifications
- lem-nrqm-kinematics-componentwise-position-and-momentum
- lem-nrqm-kinematics-ccr-and-internal-factor-commutation
- lem-nrqm-kinematics-momentum-representation
- def-nrqm-kinematics-framework-massive-spin-s-model
- pthm-nrqm-kinematics-spin-s-outcome-laws
- pthm-nrqm-kinematics-translation-covariance
- pthm-nrqm-kinematics-boost-covariance
- rem-nrqm-kinematics-scope-and-empirical-status
- ex-nrqm-kinematics-gaussian-position-momentum-packet
- ex-nrqm-kinematics-plane-wave-generalized-eigenfunction
- cex-nrqm-kinematics-ccr-cannot-hold-for-bounded-operators
- texp-nrqm-kinematics-dirichlet-momentum-warning
- rem-nrqm-kinematics-examples-scope-limits

I also inspected the mathematical and physical suppliers used to check the arguments, including the componentwise scalar-operator lemma, Hilbert tensor construction and bounded tensor maps, the multiplication-operator spectral lemma, the bounded-potential Hamiltonian theorem, the L² Hilbert-space lemma, the interval Sobolev and integration-by-parts items, the twisted-periodic momentum theorem, P2/P4/P5/P6, the inertial-frame and unit conventions, and the spin-matrix proposition.

## Edits and evidence

- In lem-nrqm-kinematics-orthogonal-sums-of-self-adjoint-operators, proof step 3.1 now handles M=0 directly by the upper bound. When M>0, the maximizing component space is nonzero, so the unit-sphere formula for the operator norm supplies the approximate unit vectors used in the lower bound. This closes the zero-space case without relying on a nonexistent unit vector.
- In lem-nrqm-kinematics-component-valued-wavefunction-identifications, step 1.2 now uses Cauchy–Schwarz to establish integrability of each component product and finite linearity of the integral. It no longer applies Tonelli to signed real and imaginary parts. Step 1.3 states that the algebraic tensor map is onto H^(r). Step 2.2 proves completeness of H^(r) from completeness of scalar L² and the finite number of components before extending the isometry.
- In lem-nrqm-kinematics-componentwise-position-and-momentum, step 1.2 applies dominated convergence to the squared Fourier-space difference, using the integrable bound 16π²|ξ_j|²|F₂g|², to establish the claimed L² limit.
- In pthm-nrqm-kinematics-translation-covariance, the proof now distinguishes invariance under a fixed translation from invariance under every translation. New proof step 1.4 derives that a bounded measurable function invariant almost everywhere under every translation is constant almost everywhere: choose a Borel representative, apply Tonelli to the disagreement set on bounded cubes, and use the determinant-one linear change (x,a) ↦ (x,x−a). The converse follows because translations preserve null sets. The proof contract now records the exact Borel-representative, Tonelli, linear change-of-variables, and C¹ change-of-variables suppliers.
- In rem-nrqm-kinematics-scope-and-empirical-status, the Torre citation was corrected: equation (6.4) gives ordinary composition for pure boosts, while equation (6.8) gives the projective relation between boosts and spatial translations. The author-hosted preprint states the boost wave-function law at equation (4.23) and identifies the passive frame moving with velocity −u at §4, pp. 12–13; §6, p. 17 distinguishes these two composition statements. [Torre, Galilean Relativity and the Path Integral Formalism in Quantum Mechanics](https://arxiv.org/pdf/2306.13487)
- The batch proof contract was refreshed for the changed proof steps and for exact current source quotations used by assigned items. No verification.judge records were present on the changed carriers.

## Uneditable dependency defects

1. thm-nrqm-intervals-twisted-periodic-momentum-domain, assigned to batch 38, describes Teschl §9.1 as treating “self-adjoint boundary conditions for first-order differential expressions.” Section 9.1 is explicitly Sturm–Liouville operators; equation (9.1) is the second-order expression r⁻¹(−(pf′)′+qf), and the section's boundary discussion is for that expression. The assigned consumer is texp-nrqm-kinematics-dirichlet-momentum-warning. Teschl's source confirms the discrepancy at §9.1, eq. (9.1), pp. 181–182, and Theorem 9.6, pp. 187–188. The thought-experiment's local adjoint and extension arguments were checked separately; they do not make the citation description accurate. [Teschl, Mathematical Methods in Quantum Mechanics](https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf)
2. def-nrqm-framework-quantities-and-units, assigned to batch 43, describes BIPM Table 2 as supporting both derived units and the exact defining constants h, c, e. In the BIPM brochure, §2.2 Table 1 lists the seven defining constants, including h, c, e; §2.3.1 Table 2 lists only the SI base units, while derived-unit examples are in Tables 5–6. The assigned consumer is def-nrqm-kinematics-framework-massive-spin-s-model. The exact constants stated in the supplier are correct; this finding concerns its inaccurate source locator/description. [BIPM, The International System of Units, 9th ed., version 4.01](https://www.bipm.org/documents/20126/41483022/SI-Brochure-9-EN.pdf)

## Page verdicts

- qm-massive-particle-kinematics: its mathematical and physics claims are conditional on the stated mathematical assumptions and P2/P4/P5/P6. The page reports no experiment or measured parameter. The only routed issue touching this page is the out-of-scope citation description in its units supplier.
- qm-massive-particle-kinematics-examples: the Gaussian calculation is for one family of preparations, the plane-wave functional is not a normalizable state, and the interval warning is explicitly hypothetical. No counts, apparatus, calibration, uncertainty, or experimental inference are asserted. The interval supplier citation issue is routed separately.

## Checks and limitations

- Reflow and precheck were run on every changed item. All changed proof-bearing items passed; the changed nonproof remark has no proof-layout check.
- proof-contract.mjs --strict research/physics-cm-qm-gr-79-2026-10-11-batch-48.proof-contracts.json: 12/12 proof-bearing items, 0 errors, 0 warnings.
- Final proof-layout.mjs run on the five changed item paths: 5 items, 26 steps, 0 defects.
- No local mathematical blocker remains in the assigned proofs. Two fatal citation defects remain in draft suppliers owned by batches 38 and 43 and are reported in the findings JSON.
- I did not read the full 2,110-item transitive dependency closure or audit every external reference in that closure. I checked the dependencies material to the assigned arguments and consulted the source sections needed to resolve the two citation issues and verify the corrected Torre description; conclusions are limited to that review scope.
