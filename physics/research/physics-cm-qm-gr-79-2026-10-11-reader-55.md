# Step 3a reader report — batch 55

Run: `physics-cm-qm-gr-79-2026-10-11`  
Role: reader  
Batch: `55`

## Opened inventory

### Assigned pages

- `qm-composites-entanglement-and-reduced-states` — `library/non-relativistic-quantum-mechanics/qm-composites-entanglement-and-reduced-states.md` (A page).
- `qm-composites-entanglement-and-reduced-states-examples` — `library/non-relativistic-quantum-mechanics/qm-composites-entanglement-and-reduced-states-examples.md` (B/examples page).

### Assigned items

**A page:**

- `lem-nrqm-composites-local-pvm-tensor-extension`
- `lem-nrqm-composites-pure-state-separability-criterion`
- `def-nrqm-composites-separable-and-entangled-states`
- `def-nrqm-composites-framework-composite-systems-and-local-readouts`
- `def-nrqm-composites-framework-reduced-preparations`
- `pthm-nrqm-composites-schmidt-reduction-and-pure-entanglement`
- `pthm-nrqm-composites-local-readout-laws-and-reduced-preparations`
- `pthm-nrqm-composites-local-statistics-of-products-and-entangled-preparations`
- `pthm-nrqm-composites-local-instruments-and-no-signalling`
- `def-nrqm-composites-marker-model-and-fringe-visibility`
- `pthm-nrqm-composites-marker-overlap-and-visibility-bound`
- `rem-nrqm-composites-scope-and-empirical-status`

**B/examples page:**

- `texp-nrqm-composites-singlet-correlations`
- `ex-nrqm-composites-marker-overlap-visibility`
- `ex-nrqm-composites-improper-versus-proper-mixtures`
- `rem-nrqm-composites-examples-scope-limits`

### Dependency context opened

I opened the exact statements and relevant proof sections of the draft suppliers used by the assigned arguments, in dependency order. This included the tensor construction and bounded-tensor maps; rank-one and trace-class calculus; the infinite Schmidt decomposition, density-operator expansion, separable partial trace and purity criterion; density-state convexity and completeness; nuclear cyclicity; countable Kraus normalization and local trace-preserving no-signalling; marker-overlap contraction; separation of density operators by bounded projections; selective and non-selective Lüders updates; finite spin matrices and tensor-spin composition; the spin-$s$ spectral law; position and momentum outcome laws; and the state, observable, measurement, preparation/apparatus, kinematics and units suppliers.

I also checked the relevant published Hilbert-space, PVM, measure regularity, bounded-PVM-integral, spectral-theorem, continuous-functional-calculus, trace-class, Cauchy–Schwarz, Heine–Borel, compact-image and Fubini statements. The report records two issues observed in another-batch draft suppliers; the current bytes of one of those carriers changed during review.

The current-run draft dependency carriers opened by ID were `lem-nrqm-composites-bounded-tensor-maps`, `lem-nrqm-composites-hilbert-tensor-construction`, `lem-nrqm-composites-rank-one-operator-calculus`, `thm-nrqm-composites-infinite-schmidt-decomposition`, `lem-nrqm-composites-density-and-scalar-spectral-probability`, `lem-nrqm-composites-separable-partial-trace`, `lem-nrqm-composites-nuclear-bounded-cyclicity`, `lem-nrqm-composites-countable-kraus-normalization`, `lem-nrqm-composites-local-trace-preserving-no-signalling`, `lem-nrqm-composites-marker-overlap-contraction`, `lem-nrqm-state-geometry-density-set-convex-and-complete`, `lem-nrqm-state-geometry-purity-criterion`, `lem-nrqm-observables-states-separated-by-bounded-projections`, `lem-nrqm-measurement-selective-luders-update`, `lem-nrqm-measurement-nonselective-luders-map`, `lem-norm-of-a-self-adjoint-operator-from-its-quadratic-form`, `pthm-nrqm-measurement-projective-outcomes-and-discarded-ensembles`, `pthm-nrqm-measurement-countable-kraus-instruments`, `pthm-nrqm-kinematics-spin-s-outcome-laws`, `pthm-nrqm-angular-momentum-spin-spectra-and-outcome-laws`, `prop-nrqm-orbital-and-spin-finite-spin-matrices`, `thm-nrqm-orbital-and-spin-finite-spin-block-decomposition`, and `thm-nrqm-orbital-and-spin-tensor-spin-composition`. Framework context read included `post-nrqm-framework-state-and-composition`, `post-nrqm-framework-observable-and-probability`, `post-nrqm-framework-ideal-conditional-measurement`, `post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle`, `post-nrqm-framework-identical-particles-and-spin`, `post-nrqm-framework-preparation-and-apparatus`, `def-nrqm-framework-quantities-and-units`, `def-nrqm-state-geometry-framework-state-space`, `def-nrqm-observables-framework-observable-and-outcome-law`, `def-nrqm-measurement-framework-declared-measurements-and-instruments`, `def-nrqm-kinematics-framework-massive-spin-s-model`, and `def-nrqm-angular-momentum-framework-angular-momentum-observables`.

## Review and edits

The item claims were checked as conditional consequences of the declared P1/P2/P3/P5/P6/P7 model readings and their mathematical hypotheses. The singlet and marked-model computations concern model probabilities, not measured frequencies. The remarks keep localized detections separate from accumulated distributions, make no experiment or measurement claim, and do not infer a physical mechanism or relativistic causality from the operator calculations.

Edits made:

- `def-nrqm-composites-separable-and-entangled-states`: completed the finite-dimensional closed-convex-hull argument by showing directly that the trace norm and finite real-coordinate Euclidean norm induce the same topology on the self-adjoint endomorphisms. Also made the tensor-map continuity estimate explicit. This closes the transfer from trace-norm compactness of the product-state set to its finite-coordinate compactness used with Heine–Borel and the finite-dimensional convex-hull reduction.
- `pthm-nrqm-composites-local-statistics-of-products-and-entangled-preparations`, `pthm-nrqm-composites-local-instruments-and-no-signalling`, `def-nrqm-composites-marker-model-and-fringe-visibility`, `pthm-nrqm-composites-marker-overlap-and-visibility-bound`, `texp-nrqm-composites-singlet-correlations`, `ex-nrqm-composites-marker-overlap-visibility`, and `ex-nrqm-composites-improper-versus-proper-mixtures`: carried the Axiom of Choice where the cited general spectral-law suppliers require it, added the corresponding dependency role, and recorded the choice premise in proof-bearing item facts/contracts and the steps that use those suppliers.
- `pthm-nrqm-composites-marker-overlap-and-visibility-bound`: restricted the trivial-marker visibility formula to bins with positive $p_{\mathrm{mix}}(B)$, since visibility is undefined when the phase-family total weight is zero; updated the proof-contract zero-boundary record accordingly.
- `rem-nrqm-composites-examples-scope-limits`: clarified that the example computations carry the choice hypotheses stated by their suppliers.

The proof contracts for the six changed proof-bearing items were updated with the Choice premise and its source. None of those items had a `verification.judge` record to remove. No assigned page prose was edited.

Validation after the final edits:

- Reflow and precheck ran for all nine changed items. All six proof-bearing items passed; the three non-proof carriers had zero applicable proof steps and no failures.
- `node tools/physics-support/proof-layout.mjs` ran once for the nine changed item paths: 26 steps, 0 defects.

## Findings outside edit scope

- `post-nrqm-framework-ideal-conditional-measurement`, clause (iv), attributes the density-operator eigen-expansion to the “rank-one calculus.” The opened rank-one-calculus item supplies the rank-one trace/operator formulas, while the eigen-expansion is supplied by `lem-nrqm-composites-density-and-scalar-spectral-probability` clause (a). This is a nonfatal citation attribution error; the latter supplier is already present in the postulate's dependency list. The current carrier bytes remain unchanged at split.
- `def-nrqm-measurement-framework-declared-measurements-and-instruments`, Definition clause (d), originally stated that positive-form Cauchy–Schwarz gives the operator inequality for a positive contraction tail used to prove strong convergence of each effect subseries. That Cauchy–Schwarz inequality alone did not establish the displayed vector-norm bound. On rechecking the carrier, it had been changed by another writer to give a valid positive-form Cauchy–Schwarz argument with $y=Dx$ and $0\le D\le I$, which closes the gap. Its current SHA-256 is `4b731e2884b1595c470618cad88b8233824a2315a3c8541ae82ca9a112d39669`; this does not bind the earlier bytes, which were not hashed, to an `observed_source` fingerprint. The current carrier is not reported as defective.

## Page verdicts

- `qm-composites-entanglement-and-reduced-states`: pass after the assigned repairs. Its conditional theorems, operator definitions and empirical-status summary agree with the verified model and mathematical suppliers. The P3 citation finding above remains routed to its owner.
- `qm-composites-entanglement-and-reduced-states-examples`: pass after the assigned repairs. The singlet, flat-profile visibility and proper/improper mixture calculations are internally consistent and explicitly non-empirical. The display does not claim finite-sample observations or test outcomes.

## Blocker and coverage note

No blocker. I reviewed every assigned page and item and the supplier statements/proof sections needed for the claims above. I did not independently audit the entire transitive proof graph of the mathematics library; deeper published foundations were treated as published after checking the exact statements used here. Two out-of-scope supplier observations are recorded in the findings file with the source-byte limitation noted above.
