# Step 3a reader report — batch 42

Run: `physics-cm-qm-gr-79-2026-10-11`  
Role: independent reader  
Scope: batch `42` only

## Opened inventory

Pages:

- `library/non-relativistic-quantum-mechanics-mathematics/qm-math-magnetic-and-detection.md` (A page)
- `library/non-relativistic-quantum-mechanics-mathematics/qm-math-magnetic-and-detection-examples.md` (B/examples page)

Assigned A-page items reviewed:

- `def-nrqm-magnetic-and-detection-position-and-momentum-operators`
- `lem-nrqm-magnetic-and-detection-weak-product-rule`
- `lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint`
- `def-nrqm-magnetic-and-detection-magnetic-schrodinger-operator`
- `thm-nrqm-magnetic-and-detection-bounded-coefficient-magnetic-operator`
- `thm-nrqm-magnetic-and-detection-gauge-h2-domain-preservation`
- `thm-nrqm-magnetic-and-detection-gauge-transported-propagator`
- `thm-nrqm-magnetic-and-detection-smooth-local-continuity-calculation`
- `thm-nrqm-magnetic-and-detection-coherent-versus-mixed-bin-laws`
- `thm-nrqm-magnetic-and-detection-covariance-refined-uncertainty`
- `thm-nrqm-magnetic-and-detection-maximal-domain-position-and-momentum-uncertainty`
- `thm-nrqm-magnetic-and-detection-galilean-covariance`
- `thm-nrqm-magnetic-and-detection-conserved-spectral-probability-laws`
- `thm-nrqm-magnetic-and-detection-graph-domain-ehrenfest-and-timescale`
- `thm-nrqm-magnetic-and-detection-conditional-stern-gerlach-force`

Assigned B-page items reviewed:

- `ex-nrqm-magnetic-and-detection-gauge-phase-units`
- `ex-nrqm-magnetic-and-detection-finite-dark-bin-probability`
- `ex-nrqm-magnetic-and-detection-preparation-spread-versus-error`

Dependency statements/proofs opened where they support the checked claims:

- Published Sobolev and weak-derivative material: `def-sobolev-space-wkp-and-its-norm`, `def-weak-derivative-of-a-locally-integrable-function`, `lem-weak-derivatives-are-unique-almost-everywhere`, `cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn`, and `lem-complex-translation-and-approximate-identity-interfaces`.
- Fourier and operator material: `thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators`, `thm-kato-rellich`, `lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group`, `thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces`, `lem-weak-derivatives-are-polynomial-fourier-multipliers`, `thm-plancherel`, `def-fourier-transform-on-l-one-of-rn`, `def-adjoint-of-a-densely-defined-unbounded-operator`, and `def-symmetric-self-adjoint-and-essentially-self-adjoint`.
- Calculus and integration material: `thm-algebra-of-derivatives`, `thm-chain-rule-for-total-derivatives`, `thm-dominated-convergence`, `thm-differentiation-under-the-integral-sign`, and `thm-divergence-theorem-for-bounded-c-one-euclidean-domains`.
- Spectral material: `thm-spectral-theorem-for-unbounded-self-adjoint-operators`, `def-unbounded-integral-against-a-pvm`, `thm-bounded-borel-pvm-integral`, `lem-scalar-and-complex-measures-from-a-pvm`, and `def-projection-valued-measure`.
- In-run mathematical suppliers: `lem-nrqm-composites-chsh-and-finite-sampling-law`, `lem-nrqm-composites-marker-overlap-contraction`, `lem-nrqm-composites-weak-form-robertson-uncertainty`, `lem-nrqm-composites-density-and-scalar-spectral-probability`, `lem-nrqm-composites-nuclear-bounded-cyclicity`, `lem-nrqm-composites-rank-one-operator-calculus`, `prop-nrqm-orbital-and-spin-finite-spin-matrices`, and `lem-nrqm-intervals-endpoint-trace-and-half-line-decay`.
- For the SI dimension example, the official BIPM *SI Brochure*, 9th edition (2019), current PDF v4.01 (June 2026), §§2.3.1–2.3.4 and Tables 2–4 (printed pp. 126–134) was opened. Table 2 lists base units; §2.3.3/Table 3 describes the base-dimension convention; Table 4 lists named derived units. The assignment for the gauge function `chi` is explicitly a stipulated convention in the item.

The assigned carriers were read in manifest dependency-level order. I then checked the exact supplier statements and the relevant local supplier arguments above. I did not re-prove every published theorem in the recursive dependency closure or retrieve every cited background textbook; the assigned items supply the mathematical deductions locally, and the bibliographies are treated as source context rather than proof substitutes.

## Review and edits

1. `def-nrqm-magnetic-and-detection-position-and-momentum-operators` asserted that the position and momentum domains are dense because they contain the compactly supported smooth classes, but it did not establish that those classes are dense in `L^2`. This was a missing prerequisite for the asserted dense-domain property. I added the published `cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn` dependency and its `mathematical-premise` role, and stated the exact specialization: for `k=0`, `p=2`, the corollary gives density in `W^{0,2}`, while `def-sobolev-space-wkp-and-its-norm` identifies `W^{0,2}=L^2`. The operator domains contain these classes by the original argument. The item proof contract now records this support. No stale `verification.judge` record was present. Reflow reported unchanged; precheck reported `0 checked, 0 failing` because the carrier is a definition.

2. `ex-nrqm-magnetic-and-detection-gauge-phase-units` cited “Table 2 (SI base and derived units).” The cited locator conflated tables: BIPM Table 2 is the base-unit table; dimensions are described in §2.3.3/Table 3; named derived units are in Table 4. I corrected the source title/locator to §§2.3.1–2.3.4 and Tables 2–4. The exact BIPM source supports the SI base-unit and dimension-vector arithmetic; the item itself states that the assignment to `chi` is a convention, not a result derived from mathematics. Reflow reported unchanged; precheck passed with `1 checked, 0 failing`.

The required final proof-layout command on both changed items reported `2 items, 4 steps, 0 defects`.

## Page verdicts

- `qm-math-magnetic-and-detection`: **Pass after the density repair.** The page summary accurately describes the mathematical operator, gauge, continuity, bin-law, uncertainty, covariance, spectral, graph-domain and spin-coupled results. It does not state that these model deductions establish physical applicability or empirical outcomes.
- `qm-math-magnetic-and-detection-examples`: **Pass after the citation correction.** The three examples make mathematical calculations under stipulated models; the dark-bin example concerns a probability for a positive-width bin, and the preparation-error example reports no measurement.

## Unedited findings and blockers

- Unedited findings: none.
- Blocker: none.
