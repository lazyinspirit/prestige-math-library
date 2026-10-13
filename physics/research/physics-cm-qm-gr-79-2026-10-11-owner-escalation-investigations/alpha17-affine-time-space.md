# Alpha17 affine-time-space escalation investigation

Read-only source review, first cycle. Owner: physics_alpha17_affine_owner. No source, contract, ledger, decision, control, gate or commit edits performed. This note is investigation evidence, not acceptance or certification.

## Confirmed current defects and exact boundaries

- `refuter:17:4`: confirmed. `def-cm-affine-time-space` says “Let A be a set” and quantifies action/displacement conditions only over points of A. Take V=R4, tau=first coordinate, K=R3 with Euclidean g, and A=empty with the unique empty action. Every written axiom holds vacuously. No origin belongs to A, so no adapted chart exists. Add “nonempty” to A; this restores the intended affine torsor class and preserves all nonempty affine models, without selecting an origin or identifying A with R4.
- `reader:17:11` and `refuter:17:5`: confirmed as a missing local chart-availability deduction. The present coordinate lemma starts with an adapted chart already given; its decomposition, bijection and distance proofs are valid under that explicit premise. It does not prove chart existence from raw data. The definition itself only defines adapted charts and coordinates conditionally. Physical smooth-structure uses require at least one such chart.
- Correction to the escalation's suggested supplier characterization: CURRENT imported `thm-gram-schmidt-orthonormalisation` explicitly constructs e_k=u_k/||u_k|| and asserts an orthonormal list, so a merely orthogonal Gram-Schmidt supplier is not a current defect. `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases` supplies an orthonormal basis of the three-dimensional inner-product space directly. Imported suppliers were read, not edited.
- Orientation is presently mentioned as “a chosen orientation of K”; make the fixing of that orientation explicit before defining charts, without choosing a basis. Both orientation classes remain admissible models.
- Related historical rank-nullity/quotient support (`reader:17:10`) is already explicit in the current definition. No repair of that current argument is proposed.

## Smallest sound completion

Proposed content write scope is ONLY:

1. `items/def-cm-affine-time-space.md`: require nonempty A; explicitly fix an orientation of K; refer to the existing justification lemma for chart existence as well as coordinate existence/uniqueness. Its existing justified_by edge already points to that lemma.
2. `items/lem-cm-adapted-coordinates-exist-and-are-unique.md`: add existence of an adapted chart from the raw data, preserving existing clauses and their numbers; declare the orthonormal-basis corollary and orientation definition as exact mathematical suppliers. Choose o in nonempty A, and choose u with tau(u)=1 by surjectivity. Choose an orthonormal basis of K using the corollary. If it has the wrong orientation, interchange its first two entries: orthonormality/basis status survives and the change-of-basis determinant is -1 by the exact orientation supplier. (Equivalently negate one entry and prove determinant -1.) This yields the required positively oriented orthonormal basis. The corollary already includes normalization; do not claim that an orthogonal list is automatically orthonormal. Add the witness o+tu in proof step 2.2 to make every slice nonempty under the corrected affine-space definition. No arbitrary choice axiom is needed for these finite existential choices.

No new intermediate item is needed: the existing well-definedness lemma naturally owns chart availability. No imported snapshot or original/root mathematics repair is proposed. The owner may mechanically reconcile batch-1 manifest/contracts afterward; this investigator has not edited those artifacts.

## Consumer implications

Current formal dependency closure has 551 items (two proposed changed suppliers and 549 consumers); the full-YAML HEAD graph has the identical cone. No current outside-cone item body mentions either root directly, and the definition has no aliases. Direct consumers are enumerated below. Physical spacetime `post-cm01-spacetime` already explicitly requires A nonempty and fixes its orientation. Its mathematical frame/smooth-structure availability gap is closed by the supplier completion. Current coordinate and chart-transition lemmas assume actual charts, so their old deductions do not require altered formulas. CM/QM frame, curve and unit definitions use fixed charts or inherit the physical arena; the added existence clause supplies their missing availability. Concrete boost examples use A=R4 and remain admissible. The definition change excludes only the vacuous empty countermodel; no examined direct consumer asserts existence of or makes essential use of an empty event space.

This is a scope investigation, not a completed post-change review of 549 consumers. The same reviewer must inspect every affected current carrier after the authorized interface change, supplier before consumer, recording focused dispositions and surgical fixes if needed. Consumer content writes are not proposed absent a demonstrated issue. Pages containing the suppliers/affected consumers are navigation context; no page content repair has been identified yet.

## Writer coordination

State and result artifacts establish batch1 completed at 2026-10-12T15:31:54.601Z, batch17 completed at 2026-10-12T15:55:00.048Z; their successful result receipts agree. No active writer for either minimal proposed source edit was present. The engine remains live at 3a-read, with unrelated native adjudications still able to write formal downstream consumers. The following exact active scope intersections are a point-in-time state snapshot, not locks. Root must recheck drain/ownership before any consumer writes. No process was interrupted or controlled by this investigation.

Recorded at 2026-10-12T16:04:54.760802+00:00.

### Direct consumers of `def-cm-affine-time-space`

- `def-cm01-units`
- `def-cm01-velocity-acceleration`
- `def-cm17-continuum-body-and-units`
- `def-nrqm-framework-inertial-frames`
- `def-nrqm-framework-newtonian-spacetime`
- `ex-cm-galilean-boost-coordinate-change`
- `ex-cm01-galilean-boost-of-a-free-motion`
- `ex-cm01-worldline-parameter-condition`
- `lem-cm-adapted-charts-and-galilean-transformations`
- `lem-cm-adapted-coordinates-exist-and-are-unique`
- `post-cm01-frames`
- `post-cm01-spacetime`
- `post-cm01-worldlines`
- `post-cm10-rigid-material`
- `pthm-cm01-galilean-kinematics`
- `rem-cm01-model-limit`

### Direct consumers of `lem-cm-adapted-coordinates-exist-and-are-unique`

- `def-cm01-velocity-acceleration`
- `def-nrqm-framework-inertial-frames`
- `def-nrqm-framework-newtonian-spacetime`
- `ex-cm-galilean-boost-coordinate-change`
- `lem-cm-adapted-charts-and-galilean-transformations`
- `post-cm01-frames`
- `rem-cm01-model-limit`

## Complete affected consumer cone by current batch

### Batch 1

- `def-cm-affine-time-space`
- `ex-cm-galilean-boost-coordinate-change`
- `lem-cm-adapted-charts-and-galilean-transformations`
- `lem-cm-adapted-coordinates-exist-and-are-unique`

### Batch 17

- `cex-cm01-coordinate-velocity-is-frame-dependent`
- `def-cm01-configuration`
- `def-cm01-units`
- `def-cm01-velocity-acceleration`
- `ex-cm01-dimension-bookkeeping`
- `ex-cm01-galilean-boost-of-a-free-motion`
- `ex-cm01-rotating-basis-of-a-free-motion`
- `ex-cm01-two-particle-rigid-rod-configuration`
- `ex-cm01-worldline-parameter-condition`
- `post-cm01-frames`
- `post-cm01-spacetime`
- `post-cm01-worldlines`
- `pthm-cm01-galilean-kinematics`
- `rem-cm01-model-limit`

### Batch 18

- `cex-cm02-nonunique-flow-for-a-continuous-force`
- `cex-cm02-singular-collision-finite-time`
- `def-cm02-newtonian-flow`
- `ex-cm02-constant-field-projectile`
- `ex-cm02-drag-terminal-velocity`
- `ex-cm02-force-model-regularity-checks`
- `ex-cm02-uniform-field`
- `post-cm02-drag`
- `post-cm02-force-superposition`
- `post-cm02-interactions`
- `pthm-cm02-continuation`
- `pthm-cm02-ivp`
- `rem-cm02-open-system-warning`

### Batch 19

- `cex-cm03-centrality-is-not-necessary-for-angular-momentum-conservation`
- `cex-cm03-closed-force-field-without-a-global-potential`
- `def-cm03-centre-of-mass-and-momenta`
- `def-cm03-potential-and-mechanical-energy`
- `ex-cm03-driven-mechanical-energy-balance`
- `ex-cm03-two-body-hooke-model-check`
- `pthm-cm03-angular-momentum-balance`
- `pthm-cm03-centre-of-mass-and-kinetic-splitting`
- `pthm-cm03-energy-balance`
- `pthm-cm03-frame-transformations`
- `pthm-cm03-momentum-balance`
- `pthm-cm03-work-energy`
- `rem-cm03-conservation-scope`

### Batch 20

- `cex-cm04-undamped-resonance-with-bounded-drive-is-unbounded`
- `def-cm04-one-dimensional-models-and-equilibria`
- `def-cm04-phase-plane-and-energy-level-sets`
- `ex-cm04-damped-regimes-check`
- `ex-cm04-harmonic-motion-check`
- `ex-cm04-pendulum-small-angle-check`
- `ex-cm04-resonance-response-check`
- `post-cm04-harmonic-model`
- `post-cm04-linear-damping-model`
- `post-cm04-sinusoidal-drive-model`
- `pthm-cm04-conservative-motion-and-energy`
- `pthm-cm04-damped-decay-and-stability`
- `pthm-cm04-damped-motion`
- `pthm-cm04-equilibrium-stability-at-a-strict-minimum`
- `pthm-cm04-harmonic-motion`
- `pthm-cm04-resonance-and-boundedness`
- `rem-cm04-linear-model-scope`

### Batch 21

- `cex-cm05-external-force-breaks-relative-reduction`
- `ex-cm05-barycentric-orbits-check`
- `ex-cm05-circular-orbit-frequency-check`
- `ex-cm05-gravitational-ellipse-and-period-check`
- `ex-cm05-parabolic-and-hyperbolic-branch-check`
- `post-cm05-central-model`
- `post-cm05-gravity`
- `pthm-cm05-circular-orbit`
- `pthm-cm05-conic`
- `pthm-cm05-effective-potential`
- `pthm-cm05-kepler-period`
- `pthm-cm05-plane-area`
- `pthm-cm05-relative-reduction`
- `rem-cm05-collision-scope`

### Batch 22

- `def-cm06-holonomic-constraint-model`
- `def-cm06-moving-frame`
- `def-cm06-nonholonomic-model`
- `ex-cm06-bead-on-a-rotating-wire`
- `ex-cm06-pendulum-tension-and-reaction-power`
- `ex-cm06-rolling-disk-model-comparison`
- `ex-cm06-rotating-chart-inertial-terms`
- `post-cm06-ideal-reaction-law`
- `pthm-cm06-inertial-forces`
- `pthm-cm06-multiplier-balance`
- `pthm-cm06-rheonomic-power`
- `rem-cm06-dalembert-vakonomic-distinction`

### Batch 23

- `def-cm07-action-and-mechanical-lagrangian`
- `def-cm07-generalized-coordinates-and-forces`
- `ex-cm07-free-particle-straight-lines`
- `ex-cm07-nonholonomic-unrestricted-action-fails`
- `ex-cm07-oscillator-stationary-saddle-check`
- `ex-cm07-pendulum-constraint-elimination-check`
- `ex-cm07-polar-coordinate-kinetic-metric-check`
- `ex-cm07-total-derivative-gauge-check`
- `pthm-cm07-boundary-terms-and-gauge`
- `pthm-cm07-coordinate-covariance-of-the-equations`
- `pthm-cm07-euler-lagrange-equations`
- `pthm-cm07-first-variation-and-euler-lagrange-expression`
- `pthm-cm07-lagrangian-reduction-of-ideal-constraints`
- `pthm-cm07-newton-equivalence`
- `rem-cm07-scope-and-singular-warnings`

### Batch 24

- `def-cm08-symmetry-of-the-mechanical-lagrangian`
- `ex-cm08-pair-potential-charges-check`
- `ex-cm08-rotating-chart-hamiltonian-not-mechanical-energy`
- `ex-cm08-time-dependent-potential-breaks-energy`
- `ex-cm08-uniform-field-breaks-translation-and-boost`
- `pthm-cm08-boost-boundary`
- `pthm-cm08-general-noether`
- `pthm-cm08-moving-chart-energy-function`
- `pthm-cm08-point-noether`
- `pthm-cm08-rotation`
- `pthm-cm08-time-energy`
- `pthm-cm08-translation`
- `rem-cm08-external-symmetry-breaking`

### Batch 25

- `def-cm09-coupled-quadratic-model`
- `ex-cm09-cubic-potential-error-check`
- `ex-cm09-degenerate-oscillator-subspace`
- `ex-cm09-double-pendulum-linear-modes`
- `ex-cm09-forced-resonant-mode-check`
- `ex-cm09-triatomic-translation-zero-mode`
- `ex-cm09-two-mass-spring-modes`
- `ex-cm09-unstable-quadratic-mode`
- `ex-cm09-weak-damping-averaging-check`
- `pthm-cm09-averaging-for-weak-damping`
- `pthm-cm09-forced-modal-response`
- `pthm-cm09-free-modes-and-degeneracy`
- `pthm-cm09-linearization-at-a-strict-minimum`
- `pthm-cm09-linearization-error-bound`
- `rem-cm09-zero-modes-degeneracy-and-scope`

### Batch 26

- `cex-cm10-degenerate-line-mass-singular-inertia`
- `def-cm10-angular-velocity`
- `def-cm10-inertia-tensor`
- `def-cm10-rigid-body-configuration`
- `ex-cm10-equilateral-triangle-rotational-inertia`
- `ex-cm10-euler-angle-pole-and-orientation`
- `ex-cm10-parallel-axis-shift-check`
- `post-cm10-rigid-material`
- `pthm-cm10-frame-covariance`
- `pthm-cm10-kinetic-splitting`
- `pthm-cm10-principal-axes`
- `rem-cm10-orientation-charts`

### Batch 27

- `cex-cm11-invariants-do-not-force-uniform-rotation`
- `ex-cm11-free-top-checks`
- `ex-cm11-heavy-top-steady-precession`
- `ex-cm11-intermediate-axis-escape`
- `post-cm11-heavy-top`
- `post-cm11-torque-balance`
- `pthm-cm11-euler-equations`
- `pthm-cm11-linearized-spin`
- `pthm-cm11-nonlinear-spin-stability`
- `pthm-cm11-principal-rotations`
- `pthm-cm11-top-reduction`
- `pthm-cm11-torque-free-invariants`

### Batch 28

- `def-cm12-cotangent-momentum`
- `def-cm12-hamiltonian`
- `def-cm12-hyperregularity`
- `def-cm12-regularity`
- `ex-cm12-mechanical-legendre-positive-metric`
- `ex-cm12-moving-coordinates`
- `ex-cm12-pendulum-legendre`
- `ex-cm12-shifted-momentum`
- `pthm-cm12-energy-time`
- `pthm-cm12-hamilton-equivalence`
- `pthm-cm12-local-legendre`
- `pthm-cm12-mechanical-hyperregularity`
- `rem-cm12-singular-models`

### Batch 29

- `def-cm13-canonical-form`
- `def-cm13-canonical-map`
- `def-cm13-hamiltonian-field`
- `def-cm13-poisson`
- `def-cm13-two-form`
- `ex-cm13-free-particle-flow-generating-function`
- `ex-cm13-fundamental-brackets-and-evolution-checks`
- `ex-cm13-isotropic-oscillator-flow-symplectic-and-volume-checks`
- `ex-cm13-point-transformation-generating-function-and-projection`
- `ex-cm13-verlet-map-of-the-mechanical-splitting-is-canonical`
- `pthm-cm13-bracket-identities`
- `pthm-cm13-dynamics-transport-under-canonical-maps`
- `pthm-cm13-flow-preservation`
- `pthm-cm13-generating-functions`
- `pthm-cm13-hamiltonian-field-integrates-the-model-equations`
- `pthm-cm13-liouville`
- `pthm-cm13-observable-evolution`
- `pthm-cm13-two-form-is-symplectic`
- `rem-cm13-locality-topology`

### Batch 30

- `cex-cm14-free-particle-noncompact-fibre`
- `cex-cm14-harmonic-model-critical-fibre`
- `def-cm14-complete-integrability`
- `def-cm14-complete-integral`
- `def-cm14-hamilton-jacobi-equation`
- `def-cm14-involution`
- `ex-cm14-harmonic-oscillator-hamilton-jacobi-check`
- `ex-cm14-kepler-radial-action-check`
- `ex-cm14-oscillator-caustic-check`
- `pthm-cm14-action-angle`
- `pthm-cm14-adiabatic-invariance`
- `pthm-cm14-hamilton-jacobi-characteristics`
- `pthm-cm14-regular-tori`
- `rem-cm14-scope-of-hamilton-jacobi-and-integrability`

### Batch 31

- `cex-cm15-deflection-need-not-decrease`
- `cex-cm15-momentum-alone-does-not-fix-the-impact`
- `cex-cm15-restitution-above-one-increases-energy`
- `def-cm15-asymptotic-data`
- `def-cm15-cross-section`
- `ex-cm15-control-volume-check`
- `ex-cm15-hard-sphere-reflection-check`
- `ex-cm15-impact-check`
- `ex-cm15-rocket-check`
- `ex-cm15-rutherford-cutoff-check`
- `post-cm15-impulse`
- `pthm-cm15-central-scattering`
- `pthm-cm15-control-volume-balance`
- `pthm-cm15-impact-balance`
- `pthm-cm15-rutherford-model`
- `rem-cm15-model-boundaries`

### Batch 32

- `cex-cm16-positive-growth-is-not-chaos`
- `cex-cm16-stability-does-not-imply-attraction`
- `def-cm16-chaos-list-for-model-maps`
- `def-cm16-finite-time-growth-rates`
- `def-cm16-flow-equilibria-and-invariant-sets`
- `def-cm16-stability-and-hyperbolicity-concepts`
- `def-cm16-stroboscopic-and-poincare-maps`
- `ex-cm16-isotropic-oscillator-return-map-check`
- `ex-cm16-linearization-and-growth-checks`
- `ex-cm16-pendulum-equilibrium-checks`
- `ex-cm16-pulse-horseshoe-data-check`
- `ex-cm16-recurrence-volume-check`
- `ex-cm16-two-rotor-kam-units-check`
- `pthm-cm16-energy-stability-and-instability`
- `pthm-cm16-hyperbolic-linearization`
- `pthm-cm16-recurrence-for-finite-volume-models`
- `pthm-cm16-separatrix-splitting-and-horseshoe`
- `pthm-cm16-two-rotor-kam`
- `pthm-cm16-variational-equation-and-linearization`
- `rem-cm16-scope-of-stability-and-chaos`

### Batch 33

- `def-cm17-continuum-body-and-units`
- `def-cm17-density-and-mass`
- `def-cm17-traction-and-stress`
- `ex-cm17-channel-flow-and-no-slip-check`
- `ex-cm17-elastic-plane-wave-and-energy-check`
- `ex-cm17-periodic-shear-exact-solution-check`
- `ex-cm17-riemann-shock-and-rarefaction-check`
- `ex-cm17-spring-chain-limit-numbers`
- `ex-cm17-string-modes-and-tail-check`
- `ex-cm17-uniform-expansion-transport-check`
- `post-cm17-contact-force-model`
- `post-cm17-continuum-kinematic-model`
- `post-cm17-fluid-constitutive`
- `post-cm17-linear-elastic-constitutive`
- `post-cm17-mass-balance`
- `post-cm17-momentum-balance`
- `pthm-cm17-chain-limit-of-the-string-model`
- `pthm-cm17-continuity-equation`
- `pthm-cm17-elastic-plane-wave-speeds`
- `pthm-cm17-incompressible-periodic-local-evolution`
- `pthm-cm17-linear-elastic-equation-of-motion`
- `pthm-cm17-momentum-equation`
- `pthm-cm17-stress-matrix-and-symmetry`
- `pthm-cm17-string-wave-solutions`
- `pthm-cm17-transport-and-material-derivative`
- `rem-cm17-boundary-regularity-and-scope`

### Batch 34

- `cex-cm18-finite-sample-may-miss-the-signal`
- `def-cm18-calibration`
- `def-cm18-observable-model`
- `def-cm18-sampling-model`
- `ex-cm18-frame-change-of-an-observation-model`
- `ex-cm18-pendulum-calibration-proposal`
- `ex-cm18-uniform-motion-sampling-check`
- `rem-cm18-em-bridge`
- `rem-cm18-galilean-regime`
- `rem-cm18-model-test`
- `rem-cm18-numerical-error`
- `rem-cm18-primary-report-contract`
- `rem-cm18-qm-bridge`

### Batch 43

- `cex-nrqm-framework-mean-position-can-fail-to-exist`
- `cex-nrqm-framework-quadratic-shear-is-not-galilean`
- `cex-nrqm-framework-zero-mass-has-no-self-adjoint-limit`
- `def-nrqm-framework-classical-apparatus-trajectories`
- `def-nrqm-framework-inertial-frames`
- `def-nrqm-framework-newtonian-spacetime`
- `def-nrqm-framework-quantities-and-units`
- `ex-nrqm-framework-dimension-bookkeeping`
- `ex-nrqm-framework-quantity-type-checks`
- `post-nrqm-framework-autonomous-dynamics`
- `post-nrqm-framework-ideal-conditional-measurement`
- `post-nrqm-framework-identical-particles-and-spin`
- `post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle`
- `post-nrqm-framework-observable-and-probability`
- `post-nrqm-framework-preparation-and-apparatus`
- `post-nrqm-framework-state-and-composition`
- `rem-nrqm-framework-assumption-classes-and-scope`
- `rem-nrqm-framework-examples-scope-limits`
- `rem-nrqm-framework-primitive-and-derived-status`

### Batch 44

- `cex-nrqm-state-geometry-zero-vector-is-not-a-preparation`
- `def-nrqm-state-geometry-framework-state-space`
- `ex-nrqm-state-geometry-coherent-versus-mixed-preparation`
- `ex-nrqm-state-geometry-finite-spin-bloch-ball`
- `ex-nrqm-state-geometry-fixed-mode-two-level-states`
- `ex-nrqm-state-geometry-nonunique-preparation-ensembles`
- `pthm-nrqm-state-geometry-mixtures-and-extremal-preparations`
- `pthm-nrqm-state-geometry-pure-preparation-phase-invariance`
- `rem-nrqm-state-geometry-examples-scope-limits`
- `rem-nrqm-state-geometry-scope-and-empirical-status`

### Batch 45

- `cex-nrqm-observables-plane-wave-is-not-a-preparation`
- `def-nrqm-observables-framework-observable-and-outcome-law`
- `ex-nrqm-observables-position-bin-probabilities`
- `ex-nrqm-observables-position-mean-without-variance`
- `ex-nrqm-observables-two-level-energy-readout`
- `pthm-nrqm-observables-born-outcome-law-properties`
- `pthm-nrqm-observables-position-and-momentum-outcome-laws`
- `pthm-nrqm-observables-preparation-moments`
- `pthm-nrqm-observables-states-separated-by-born-statistics`
- `rem-nrqm-observables-examples-scope-limits`
- `rem-nrqm-observables-scope-and-empirical-status`

### Batch 46

- `def-nrqm-measurement-framework-declared-measurements-and-instruments`
- `ex-nrqm-measurement-absorption-instrument`
- `ex-nrqm-measurement-degenerate-coarse-versus-fine-update`
- `ex-nrqm-measurement-serial-stern-gerlach-filters`
- `ex-nrqm-measurement-three-polarizer-chain`
- `pthm-nrqm-measurement-countable-kraus-instruments`
- `pthm-nrqm-measurement-degenerate-eigenspace-update`
- `pthm-nrqm-measurement-finite-effects-dilation`
- `pthm-nrqm-measurement-instrument-updates-not-determined-by-effects`
- `pthm-nrqm-measurement-projective-outcomes-and-discarded-ensembles`
- `rem-nrqm-measurement-examples-scope-limits`
- `rem-nrqm-measurement-scope-and-empirical-status`

### Batch 47

- `cex-nrqm-autonomous-dynamics-superposition-with-distinct-energies-is-not-stationary`
- `def-nrqm-autonomous-dynamics-framework-evolution`
- `ex-nrqm-autonomous-dynamics-finite-stationary-superposition`
- `ex-nrqm-autonomous-dynamics-two-level-precession`
- `pthm-nrqm-autonomous-dynamics-heisenberg-picture`
- `pthm-nrqm-autonomous-dynamics-schrodinger-picture-flow`
- `pthm-nrqm-autonomous-dynamics-stationary-states-and-energy-conservation`
- `rem-nrqm-autonomous-dynamics-examples-scope-limits`
- `rem-nrqm-autonomous-dynamics-scope-and-empirical-status`

### Batch 48

- `def-nrqm-kinematics-framework-massive-spin-s-model`
- `ex-nrqm-kinematics-gaussian-position-momentum-packet`
- `pthm-nrqm-kinematics-boost-covariance`
- `pthm-nrqm-kinematics-spin-s-outcome-laws`
- `pthm-nrqm-kinematics-translation-covariance`
- `rem-nrqm-kinematics-examples-scope-limits`
- `rem-nrqm-kinematics-scope-and-empirical-status`
- `texp-nrqm-kinematics-dirichlet-momentum-warning`

### Batch 49

- `def-nrqm-interference-recorded-detector-and-sampling-model`
- `def-nrqm-interference-two-path-preparation-and-detection-model`
- `ex-nrqm-interference-ideal-flat-two-path-screen-distribution`
- `ex-nrqm-interference-uniform-phase-averaging`
- `exp-nrqm-interference-bach-electron-double-slit`
- `pthm-nrqm-interference-coherent-and-mixture-detection-laws`
- `pthm-nrqm-interference-continuity-and-local-probability-balance`
- `pthm-nrqm-interference-recorded-bin-laws-loss-and-conditioning`
- `rem-nrqm-interference-examples-scope-limits`
- `rem-nrqm-interference-scope-and-deferred-content`
- `texp-nrqm-interference-finite-sample-fringe-failure`

### Batch 50

- `def-nrqm-uncertainty-preparation-spread`
- `ex-nrqm-uncertainty-gaussian-minimum-spread`
- `pthm-nrqm-uncertainty-compatible-sharp-observables-and-joint-law`
- `pthm-nrqm-uncertainty-position-momentum-incompatible`
- `pthm-nrqm-uncertainty-position-momentum-relation`
- `pthm-nrqm-uncertainty-robertson-relation`
- `rem-nrqm-uncertainty-energy-time-caveat`
- `rem-nrqm-uncertainty-error-disturbance-distinction`
- `rem-nrqm-uncertainty-examples-scope-limits`
- `rem-nrqm-uncertainty-scope-and-empirical-status`
- `texp-nrqm-uncertainty-spin-half-incompatibility`

### Batch 51

- `def-nrqm-potentials-interval-and-delta-models`
- `def-nrqm-potentials-one-dimensional-line-model`
- `ex-nrqm-potentials-box-spectrum-and-nodes`
- `ex-nrqm-potentials-finite-well-exact-root-and-count`
- `ex-nrqm-potentials-rectangular-barrier-tunnelling-and-thick-limit`
- `pthm-nrqm-potentials-barrier-flux-and-transmission`
- `pthm-nrqm-potentials-delta-point-interaction-bound-state`
- `pthm-nrqm-potentials-finite-well-bound-states`
- `pthm-nrqm-potentials-interval-spectra-completeness-and-nodes`
- `pthm-nrqm-potentials-line-model-energy-and-stationary-states`
- `rem-nrqm-potentials-examples-scope-limits`
- `rem-nrqm-potentials-scope-and-idealizations`

### Batch 52

- `def-nrqm-oscillator-coherent-states`
- `def-nrqm-oscillator-framework-quadratic-potential-model`
- `ex-nrqm-oscillator-coherent-trajectory`
- `ex-nrqm-oscillator-ground-state-gaussian`
- `ex-nrqm-oscillator-ladder-norms`
- `pthm-nrqm-oscillator-coherent-state-evolution`
- `pthm-nrqm-oscillator-coherent-state-fluctuations`
- `pthm-nrqm-oscillator-energy-spectrum-and-completeness`
- `rem-nrqm-oscillator-examples-scope-limits`
- `rem-nrqm-oscillator-scope-and-empirical-status`

### Batch 53

- `cex-nrqm-symmetries-nonconstant-potential-breaks-translation`
- `def-nrqm-symmetries-framework-symmetry-groups-and-conservation`
- `ex-nrqm-symmetries-central-potential-rotation-invariance`
- `ex-nrqm-symmetries-free-translation-and-momentum`
- `ex-nrqm-symmetries-parity-selection-rule`
- `post-nrqm-symmetries-prescribed-external-coupling`
- `pthm-nrqm-symmetries-gauge-covariance`
- `pthm-nrqm-symmetries-generator-conservation`
- `pthm-nrqm-symmetries-rotational-and-parity-invariance`
- `pthm-nrqm-symmetries-translation-invariance-and-momentum-conservation`
- `rem-nrqm-symmetries-examples-scope-limits`
- `rem-nrqm-symmetries-scope-and-empirical-status`

### Batch 54

- `def-nrqm-angular-momentum-framework-angular-momentum-observables`
- `ex-nrqm-angular-momentum-l-eigenfunctions`
- `ex-nrqm-angular-momentum-spin-half-directional-probabilities`
- `ex-nrqm-angular-momentum-zeeman-toy-model`
- `post-nrqm-angular-momentum-magnetic-moment-coupling`
- `pthm-nrqm-angular-momentum-orbital-eigenstates-and-quantum-numbers`
- `pthm-nrqm-angular-momentum-spin-spectra-and-outcome-laws`
- `pthm-nrqm-angular-momentum-stern-gerlach-conditional-force`
- `pthm-nrqm-angular-momentum-total-conservation`
- `pthm-nrqm-angular-momentum-two-spin-composition`
- `pthm-nrqm-angular-momentum-zeeman-precession`
- `rem-nrqm-angular-momentum-examples-scope-limits`
- `rem-nrqm-angular-momentum-scope-and-empirical-status`
- `texp-nrqm-angular-momentum-stern-gerlach-splitting`

### Batch 55

- `def-nrqm-composites-framework-composite-systems-and-local-readouts`
- `def-nrqm-composites-framework-reduced-preparations`
- `def-nrqm-composites-marker-model-and-fringe-visibility`
- `ex-nrqm-composites-improper-versus-proper-mixtures`
- `ex-nrqm-composites-marker-overlap-visibility`
- `pthm-nrqm-composites-local-instruments-and-no-signalling`
- `pthm-nrqm-composites-local-readout-laws-and-reduced-preparations`
- `pthm-nrqm-composites-local-statistics-of-products-and-entangled-preparations`
- `pthm-nrqm-composites-marker-overlap-and-visibility-bound`
- `pthm-nrqm-composites-schmidt-reduction-and-pure-entanglement`
- `rem-nrqm-composites-examples-scope-limits`
- `rem-nrqm-composites-scope-and-empirical-status`
- `texp-nrqm-composites-singlet-correlations`

### Batch 56

- `def-nrqm-bell-declared-spin-arrangement`
- `ex-nrqm-bell-worked-angles-and-product-mixture`
- `pthm-nrqm-bell-tsirelson-bound-for-arrangements`
- `rem-nrqm-bell-boundaries-and-comparison-scope`
- `rem-nrqm-bell-examples-scope-limits`
- `rem-nrqm-bell-scope-and-empirical-status`
- `rem-nrqm-bell-selection-loss-and-fair-sampling`
- `texp-nrqm-bell-finite-sample-chsh`
- `texp-nrqm-bell-singlet-arrangement-contrast`

### Batch 57

- `def-nrqm-identical-particles-framework-orbital-occupation-model`
- `def-nrqm-identical-particles-framework-species-sectors-and-preparations`
- `ex-nrqm-identical-particles-exchange-versus-coulomb-terms`
- `pthm-nrqm-identical-particles-orbital-occupation-exclusion`
- `pthm-nrqm-identical-particles-permutation-invariance`
- `rem-nrqm-identical-particles-examples-scope-limits`
- `rem-nrqm-identical-particles-scope-and-empirical-status`
- `texp-nrqm-identical-particles-two-fermion-spatial-spin-symmetry`

### Batch 58

- `def-nrqm-central-framework-central-potential-model`
- `def-nrqm-central-framework-coulomb-and-hydrogen-model`
- `ex-nrqm-central-hydrogen-bound-energy-units-and-reduced-mass`
- `ex-nrqm-central-hydrogen-radial-distributions-and-moments`
- `pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy`
- `pthm-nrqm-central-coulomb-bound-state-radial-distributions`
- `pthm-nrqm-central-coulomb-energy-observable-and-flow`
- `pthm-nrqm-central-spherical-reduction-of-smooth-states`
- `pthm-nrqm-central-two-body-reduced-threshold-and-total-momentum`
- `rem-nrqm-central-examples-scope-limits`
- `rem-nrqm-central-hydrogen-spectroscopy-status`
- `rem-nrqm-central-scope-and-empirical-status`

### Batch 59

- `def-nrqm-approximations-framework-perturbed-family-model`
- `def-nrqm-approximations-framework-variational-trial-model`
- `def-nrqm-approximations-framework-wkb-regime-model`
- `ex-nrqm-approximations-smooth-barrier-tunnelling-limits`
- `ex-nrqm-approximations-stark-finite-level-shift`
- `ex-nrqm-approximations-two-level-finite-gap-correction`
- `ex-nrqm-approximations-zeeman-multiplet-splitting`
- `post-nrqm-approximations-static-finite-level-dipole-coupling`
- `pthm-nrqm-approximations-barrier-transmission-asymptotics`
- `pthm-nrqm-approximations-degenerate-first-order-splitting`
- `pthm-nrqm-approximations-nondegenerate-perturbation-expansion`
- `pthm-nrqm-approximations-turning-point-connection`
- `pthm-nrqm-approximations-variational-bounds-and-min-max`
- `pthm-nrqm-approximations-wkb-allowed-region-error`
- `rem-nrqm-approximations-examples-scope-limits`
- `rem-nrqm-approximations-scope-and-empirical-status`

### Batch 60

- `def-nrqm-driven-dynamics-framework-adiabatic-protocol`
- `def-nrqm-driven-dynamics-framework-driven-model`
- `def-nrqm-driven-dynamics-framework-interaction-picture`
- `ex-nrqm-driven-dynamics-ammonia-two-level-resonance`
- `ex-nrqm-driven-dynamics-circular-drive-exact-populations`
- `ex-nrqm-driven-dynamics-driven-oscillator-coherent-response`
- `ex-nrqm-driven-dynamics-linear-drive-rotating-wave-budget`
- `pthm-nrqm-driven-dynamics-bounded-norm-propagator`
- `pthm-nrqm-driven-dynamics-circular-drive-exact-rabi`
- `pthm-nrqm-driven-dynamics-common-domain-propagator`
- `pthm-nrqm-driven-dynamics-coulomb-adiabatic-leakage`
- `pthm-nrqm-driven-dynamics-finite-adiabatic-leakage`
- `pthm-nrqm-driven-dynamics-first-order-transition-amplitude`
- `pthm-nrqm-driven-dynamics-linear-drive-rotating-wave-error`
- `pthm-nrqm-driven-dynamics-mild-propagator-and-pictures`
- `rem-nrqm-driven-dynamics-examples-scope-limits`
- `rem-nrqm-driven-dynamics-scope-and-empirical-status`

### Batch 61

- `def-nrqm-scattering-coulomb-dollard-model`
- `def-nrqm-scattering-framework-short-range-model`
- `def-nrqm-scattering-partial-wave-and-phase-shift-readings`
- `def-nrqm-scattering-single-channel-resonance-model`
- `def-nrqm-scattering-stationary-beam-and-cross-section-model`
- `ex-nrqm-scattering-born-uniform-ball-amplitude`
- `ex-nrqm-scattering-long-range-tail-and-coulomb-warning`
- `ex-nrqm-scattering-single-channel-resonance-cross-section`
- `ex-nrqm-scattering-square-well-s-wave-phase-shift`
- `pthm-nrqm-scattering-compact-support-asymptotic-completeness`
- `pthm-nrqm-scattering-controlled-born-approximation`
- `pthm-nrqm-scattering-coulomb-dollard-completeness`
- `pthm-nrqm-scattering-partial-wave-cross-section`
- `pthm-nrqm-scattering-resolvent-tail-asymptotic-completeness`
- `pthm-nrqm-scattering-single-channel-resonance-cross-section`
- `pthm-nrqm-scattering-stationary-dynamical-identification`
- `pthm-nrqm-scattering-stationary-wave-amplitude-and-flux`
- `pthm-nrqm-scattering-wave-operator-existence-and-free-continuity`
- `rem-nrqm-scattering-examples-scope-limits`
- `rem-nrqm-scattering-long-range-and-threshold-limits`
- `rem-nrqm-scattering-scope-and-empirical-status`

### Batch 62

- `def-nrqm-many-body-framework-declared-fixed-n-model`
- `def-nrqm-many-body-framework-entropy-and-free-energy`
- `def-nrqm-many-body-framework-one-body-reduced-operator`
- `ex-nrqm-many-body-finite-mode-noninteracting-thermal-ensemble`
- `ex-nrqm-many-body-gas-statistics-dilute-limits`
- `ex-nrqm-many-body-two-site-bond-thermal-ensemble`
- `post-nrqm-many-body-canonical-equilibrium-ensemble`
- `pthm-nrqm-many-body-exchange-energy-splitting`
- `pthm-nrqm-many-body-noninteracting-sector-diagonalization`
- `pthm-nrqm-many-body-one-body-readout-law`
- `pthm-nrqm-many-body-thermal-equilibrium-characterization`
- `pthm-nrqm-many-body-thermal-occupation-predictions`
- `pthm-nrqm-many-body-unitary-evolution-preserves-entropy`
- `rem-nrqm-many-body-examples-scope-limits`
- `rem-nrqm-many-body-scope-and-empirical-status`
- `texp-nrqm-many-body-two-site-no-thermalization`

### Batch 63

- `def-nrqm-photons-framework-fixed-mode-polarization-model`
- `def-nrqm-photons-framework-ideal-counting-and-detection-model`
- `def-nrqm-photons-framework-radiation-sector-and-quantum-assignments`
- `ex-nrqm-photons-malus-and-jones-analyzer-ratios`
- `ex-nrqm-photons-single-mode-number-statistics-coherent-and-thermal`
- `post-nrqm-photons-radiation-extension-and-transverse-mode-assignment`
- `pthm-nrqm-photons-fixed-mode-number-and-energy-statistics`
- `pthm-nrqm-photons-fixed-mode-polarization-outcome-law`
- `pthm-nrqm-photons-one-photon-number-energy-and-momentum-laws`
- `rem-nrqm-photons-examples-scope-limits`
- `rem-nrqm-photons-scope-and-empirical-status`
- `texp-nrqm-photons-classical-field-and-quantized-detection-comparison`

### Batch 64

- `def-nrqm-light-matter-framework-dipole-drive-and-long-wavelength`
- `def-nrqm-light-matter-framework-finite-level-coupled-model`
- `def-nrqm-light-matter-framework-spectral-transition-and-detection`
- `ex-nrqm-light-matter-hydrogen-dipole-angular-factors`
- `ex-nrqm-light-matter-two-level-dipole-drive-check`
- `post-nrqm-light-matter-vacuum-preparation-and-emission-assumption`
- `pthm-nrqm-light-matter-dipole-selection-rules`
- `pthm-nrqm-light-matter-first-order-emission-and-absorption-coefficients`
- `pthm-nrqm-light-matter-golden-rule-limit-and-rate-reading`
- `pthm-nrqm-light-matter-stimulated-dipole-drive-transitions`
- `rem-nrqm-light-matter-examples-scope-limits`
- `rem-nrqm-light-matter-scope-and-empirical-status`
- `texp-nrqm-light-matter-spectral-density-and-detected-photon-comparison`

## Exact writer scope snapshot

```json
[
  {
    "dispatch": "3a-adjudicate:3a-batch-31",
    "state": {
      "stage": "3a-adjudicate",
      "role": "alpha",
      "label": "3a-batch-31",
      "covers": [
        "31"
      ],
      "attempt": 1,
      "attempts": 1,
      "startedAt": "2026-10-12T15:45:53.477Z",
      "endedAt": null,
      "lastExitOk": null
    },
    "affected_items": [
      "cex-cm15-deflection-need-not-decrease",
      "cex-cm15-momentum-alone-does-not-fix-the-impact",
      "cex-cm15-restitution-above-one-increases-energy",
      "def-cm15-asymptotic-data",
      "def-cm15-cross-section",
      "ex-cm15-control-volume-check",
      "ex-cm15-hard-sphere-reflection-check",
      "ex-cm15-impact-check",
      "ex-cm15-rocket-check",
      "ex-cm15-rutherford-cutoff-check",
      "post-cm15-impulse",
      "pthm-cm15-central-scattering",
      "pthm-cm15-control-volume-balance",
      "pthm-cm15-impact-balance",
      "pthm-cm15-rutherford-model",
      "rem-cm15-model-boundaries"
    ],
    "exact_manifest_scope": {
      "31": {
        "items": [
          "def-cm15-asymptotic-data",
          "def-cm15-cross-section",
          "pthm-cm15-central-scattering",
          "pthm-cm15-rutherford-model",
          "post-cm15-impulse",
          "pthm-cm15-impact-balance",
          "pthm-cm15-control-volume-balance",
          "rem-cm15-model-boundaries",
          "ex-cm15-hard-sphere-reflection-check",
          "ex-cm15-rutherford-cutoff-check",
          "cex-cm15-deflection-need-not-decrease",
          "ex-cm15-impact-check",
          "cex-cm15-restitution-above-one-increases-energy",
          "cex-cm15-momentum-alone-does-not-fix-the-impact",
          "ex-cm15-rocket-check",
          "ex-cm15-control-volume-check"
        ],
        "pages": [
          "library/non-relativistic-classical-mechanics/cm15-scattering-and-impulse-model-boundaries.md",
          "library/non-relativistic-classical-mechanics/cm15-scattering-and-impulse-model-boundaries-examples.md"
        ]
      }
    }
  },
  {
    "dispatch": "3a-adjudicate:3a-batch-33",
    "state": {
      "stage": "3a-adjudicate",
      "role": "alpha",
      "label": "3a-batch-33",
      "covers": [
        "33"
      ],
      "attempt": 1,
      "attempts": 1,
      "startedAt": "2026-10-12T15:46:59.481Z",
      "endedAt": null,
      "lastExitOk": null
    },
    "affected_items": [
      "def-cm17-continuum-body-and-units",
      "def-cm17-density-and-mass",
      "def-cm17-traction-and-stress",
      "ex-cm17-channel-flow-and-no-slip-check",
      "ex-cm17-elastic-plane-wave-and-energy-check",
      "ex-cm17-periodic-shear-exact-solution-check",
      "ex-cm17-riemann-shock-and-rarefaction-check",
      "ex-cm17-spring-chain-limit-numbers",
      "ex-cm17-string-modes-and-tail-check",
      "ex-cm17-uniform-expansion-transport-check",
      "post-cm17-contact-force-model",
      "post-cm17-continuum-kinematic-model",
      "post-cm17-fluid-constitutive",
      "post-cm17-linear-elastic-constitutive",
      "post-cm17-mass-balance",
      "post-cm17-momentum-balance",
      "pthm-cm17-chain-limit-of-the-string-model",
      "pthm-cm17-continuity-equation",
      "pthm-cm17-elastic-plane-wave-speeds",
      "pthm-cm17-incompressible-periodic-local-evolution",
      "pthm-cm17-linear-elastic-equation-of-motion",
      "pthm-cm17-momentum-equation",
      "pthm-cm17-stress-matrix-and-symmetry",
      "pthm-cm17-string-wave-solutions",
      "pthm-cm17-transport-and-material-derivative",
      "rem-cm17-boundary-regularity-and-scope"
    ],
    "exact_manifest_scope": {
      "33": {
        "items": [
          "def-cm17-continuum-body-and-units",
          "post-cm17-continuum-kinematic-model",
          "def-cm17-density-and-mass",
          "post-cm17-mass-balance",
          "pthm-cm17-transport-and-material-derivative",
          "pthm-cm17-continuity-equation",
          "def-cm17-traction-and-stress",
          "post-cm17-contact-force-model",
          "post-cm17-momentum-balance",
          "pthm-cm17-stress-matrix-and-symmetry",
          "pthm-cm17-momentum-equation",
          "post-cm17-linear-elastic-constitutive",
          "pthm-cm17-linear-elastic-equation-of-motion",
          "pthm-cm17-elastic-plane-wave-speeds",
          "post-cm17-fluid-constitutive",
          "pthm-cm17-incompressible-periodic-local-evolution",
          "pthm-cm17-chain-limit-of-the-string-model",
          "pthm-cm17-string-wave-solutions",
          "rem-cm17-boundary-regularity-and-scope",
          "ex-cm17-uniform-expansion-transport-check",
          "ex-cm17-elastic-plane-wave-and-energy-check",
          "ex-cm17-string-modes-and-tail-check",
          "ex-cm17-spring-chain-limit-numbers",
          "ex-cm17-riemann-shock-and-rarefaction-check",
          "ex-cm17-channel-flow-and-no-slip-check",
          "ex-cm17-periodic-shear-exact-solution-check",
          "cex-cm17-traction-symmetry-without-stress-matrix"
        ],
        "pages": [
          "library/non-relativistic-classical-mechanics/cm17-classical-continua-with-explicit-constitutive-assumptions.md",
          "library/non-relativistic-classical-mechanics/cm17-classical-continua-with-explicit-constitutive-assumptions-examples.md"
        ]
      }
    }
  },
  {
    "dispatch": "3a-adjudicate:3a-batch-43",
    "state": {
      "stage": "3a-adjudicate",
      "role": "alpha",
      "label": "3a-batch-43",
      "covers": [
        "43"
      ],
      "attempt": 1,
      "attempts": 1,
      "startedAt": "2026-10-12T15:51:19.724Z",
      "endedAt": null,
      "lastExitOk": null
    },
    "affected_items": [
      "cex-nrqm-framework-mean-position-can-fail-to-exist",
      "cex-nrqm-framework-quadratic-shear-is-not-galilean",
      "cex-nrqm-framework-zero-mass-has-no-self-adjoint-limit",
      "def-nrqm-framework-classical-apparatus-trajectories",
      "def-nrqm-framework-inertial-frames",
      "def-nrqm-framework-newtonian-spacetime",
      "def-nrqm-framework-quantities-and-units",
      "ex-nrqm-framework-dimension-bookkeeping",
      "ex-nrqm-framework-quantity-type-checks",
      "post-nrqm-framework-autonomous-dynamics",
      "post-nrqm-framework-ideal-conditional-measurement",
      "post-nrqm-framework-identical-particles-and-spin",
      "post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle",
      "post-nrqm-framework-observable-and-probability",
      "post-nrqm-framework-preparation-and-apparatus",
      "post-nrqm-framework-state-and-composition",
      "rem-nrqm-framework-assumption-classes-and-scope",
      "rem-nrqm-framework-examples-scope-limits",
      "rem-nrqm-framework-primitive-and-derived-status"
    ],
    "exact_manifest_scope": {
      "43": {
        "items": [
          "def-nrqm-framework-newtonian-spacetime",
          "def-nrqm-framework-galilei-transformations",
          "lem-nrqm-framework-galilei-transformations-form-a-group",
          "def-nrqm-framework-inertial-frames",
          "def-nrqm-framework-classical-apparatus-trajectories",
          "def-nrqm-framework-quantities-and-units",
          "lem-nrqm-framework-ccr-on-the-schwartz-core",
          "post-nrqm-framework-state-and-composition",
          "post-nrqm-framework-observable-and-probability",
          "post-nrqm-framework-ideal-conditional-measurement",
          "post-nrqm-framework-autonomous-dynamics",
          "post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle",
          "post-nrqm-framework-identical-particles-and-spin",
          "post-nrqm-framework-preparation-and-apparatus",
          "rem-nrqm-framework-assumption-classes-and-scope",
          "rem-nrqm-framework-primitive-and-derived-status",
          "ex-nrqm-framework-dimension-bookkeeping",
          "ex-nrqm-framework-quantity-type-checks",
          "cex-nrqm-framework-zero-mass-has-no-self-adjoint-limit",
          "cex-nrqm-framework-quadratic-shear-is-not-galilean",
          "cex-nrqm-framework-mean-position-can-fail-to-exist",
          "rem-nrqm-framework-examples-scope-limits"
        ],
        "pages": [
          "library/non-relativistic-quantum-mechanics/qm-framework-and-quantities.md",
          "library/non-relativistic-quantum-mechanics/qm-framework-and-quantities-examples.md"
        ]
      }
    }
  },
  {
    "dispatch": "3a-adjudicate:3a-batch-22",
    "state": {
      "stage": "3a-adjudicate",
      "role": "alpha",
      "label": "3a-batch-22",
      "covers": [
        "22"
      ],
      "attempt": 1,
      "attempts": 1,
      "startedAt": "2026-10-12T15:57:48.722Z",
      "endedAt": null,
      "lastExitOk": null
    },
    "affected_items": [
      "def-cm06-holonomic-constraint-model",
      "def-cm06-moving-frame",
      "def-cm06-nonholonomic-model",
      "ex-cm06-bead-on-a-rotating-wire",
      "ex-cm06-pendulum-tension-and-reaction-power",
      "ex-cm06-rolling-disk-model-comparison",
      "ex-cm06-rotating-chart-inertial-terms",
      "post-cm06-ideal-reaction-law",
      "pthm-cm06-inertial-forces",
      "pthm-cm06-multiplier-balance",
      "pthm-cm06-rheonomic-power",
      "rem-cm06-dalembert-vakonomic-distinction"
    ],
    "exact_manifest_scope": {
      "22": {
        "items": [
          "def-cm06-holonomic-constraint-model",
          "post-cm06-ideal-reaction-law",
          "pthm-cm06-multiplier-balance",
          "pthm-cm06-rheonomic-power",
          "def-cm06-moving-frame",
          "pthm-cm06-inertial-forces",
          "def-cm06-nonholonomic-model",
          "rem-cm06-dalembert-vakonomic-distinction",
          "ex-cm06-bead-on-a-rotating-wire",
          "ex-cm06-pendulum-tension-and-reaction-power",
          "ex-cm06-rotating-chart-inertial-terms",
          "ex-cm06-rolling-disk-model-comparison"
        ],
        "pages": [
          "library/non-relativistic-classical-mechanics/cm06-regular-constraints-and-moving-frames.md",
          "library/non-relativistic-classical-mechanics/cm06-regular-constraints-and-moving-frames-examples.md"
        ]
      }
    }
  },
  {
    "dispatch": "3a-adjudicate:3a-batch-34",
    "state": {
      "stage": "3a-adjudicate",
      "role": "alpha",
      "label": "3a-batch-34",
      "covers": [
        "34"
      ],
      "attempt": 1,
      "attempts": 1,
      "startedAt": "2026-10-12T15:58:26.242Z",
      "endedAt": null,
      "lastExitOk": null
    },
    "affected_items": [
      "cex-cm18-finite-sample-may-miss-the-signal",
      "def-cm18-calibration",
      "def-cm18-observable-model",
      "def-cm18-sampling-model",
      "ex-cm18-frame-change-of-an-observation-model",
      "ex-cm18-pendulum-calibration-proposal",
      "ex-cm18-uniform-motion-sampling-check",
      "rem-cm18-em-bridge",
      "rem-cm18-galilean-regime",
      "rem-cm18-model-test",
      "rem-cm18-numerical-error",
      "rem-cm18-primary-report-contract",
      "rem-cm18-qm-bridge"
    ],
    "exact_manifest_scope": {
      "34": {
        "items": [
          "def-cm18-observable-model",
          "def-cm18-calibration",
          "def-cm18-sampling-model",
          "rem-cm18-model-test",
          "rem-cm18-numerical-error",
          "rem-cm18-galilean-regime",
          "rem-cm18-em-bridge",
          "rem-cm18-qm-bridge",
          "rem-cm18-primary-report-contract",
          "ex-cm18-pendulum-calibration-proposal",
          "ex-cm18-uniform-motion-sampling-check",
          "ex-cm18-frame-change-of-an-observation-model",
          "cex-cm18-finite-sample-may-miss-the-signal"
        ],
        "pages": [
          "library/non-relativistic-classical-mechanics/cm18-measurement-uncertainty-and-later-bridges.md",
          "library/non-relativistic-classical-mechanics/cm18-measurement-uncertainty-and-later-bridges-examples.md"
        ]
      }
    }
  },
  {
    "dispatch": "3a-adjudicate:3a-batch-44",
    "state": {
      "stage": "3a-adjudicate",
      "role": "alpha",
      "label": "3a-batch-44",
      "covers": [
        "44"
      ],
      "attempt": 1,
      "attempts": 1,
      "startedAt": "2026-10-12T15:58:42.409Z",
      "endedAt": null,
      "lastExitOk": null
    },
    "affected_items": [
      "cex-nrqm-state-geometry-zero-vector-is-not-a-preparation",
      "def-nrqm-state-geometry-framework-state-space",
      "ex-nrqm-state-geometry-coherent-versus-mixed-preparation",
      "ex-nrqm-state-geometry-finite-spin-bloch-ball",
      "ex-nrqm-state-geometry-fixed-mode-two-level-states",
      "ex-nrqm-state-geometry-nonunique-preparation-ensembles",
      "pthm-nrqm-state-geometry-mixtures-and-extremal-preparations",
      "pthm-nrqm-state-geometry-pure-preparation-phase-invariance",
      "rem-nrqm-state-geometry-examples-scope-limits",
      "rem-nrqm-state-geometry-scope-and-empirical-status"
    ],
    "exact_manifest_scope": {
      "44": {
        "items": [
          "def-nrqm-state-geometry-state-vectors-and-rays",
          "lem-nrqm-state-geometry-normalization-and-phase-classes",
          "lem-nrqm-state-geometry-ray-to-rank-one-projection",
          "def-nrqm-state-geometry-pure-mixed-states-and-purity",
          "lem-nrqm-state-geometry-density-set-convex-and-complete",
          "lem-nrqm-state-geometry-purity-criterion",
          "lem-nrqm-state-geometry-extreme-points-of-the-state-space",
          "def-nrqm-state-geometry-framework-state-space",
          "pthm-nrqm-state-geometry-pure-preparation-phase-invariance",
          "pthm-nrqm-state-geometry-mixtures-and-extremal-preparations",
          "rem-nrqm-state-geometry-scope-and-empirical-status",
          "ex-nrqm-state-geometry-normalization-and-phase-check",
          "ex-nrqm-state-geometry-finite-spin-bloch-ball",
          "ex-nrqm-state-geometry-fixed-mode-two-level-states",
          "ex-nrqm-state-geometry-coherent-versus-mixed-preparation",
          "ex-nrqm-state-geometry-nonunique-preparation-ensembles",
          "cex-nrqm-state-geometry-zero-vector-is-not-a-preparation",
          "rem-nrqm-state-geometry-examples-scope-limits"
        ],
        "pages": [
          "library/non-relativistic-quantum-mechanics/qm-state-geometry.md",
          "library/non-relativistic-quantum-mechanics/qm-state-geometry-examples.md"
        ]
      }
    }
  },
  {
    "dispatch": "3a-adjudicate:3a-batch-45",
    "state": {
      "stage": "3a-adjudicate",
      "role": "alpha",
      "label": "3a-batch-45",
      "covers": [
        "45"
      ],
      "attempt": 1,
      "attempts": 1,
      "startedAt": "2026-10-12T15:59:54.817Z",
      "endedAt": null,
      "lastExitOk": null
    },
    "affected_items": [
      "cex-nrqm-observables-plane-wave-is-not-a-preparation",
      "def-nrqm-observables-framework-observable-and-outcome-law",
      "ex-nrqm-observables-position-bin-probabilities",
      "ex-nrqm-observables-position-mean-without-variance",
      "ex-nrqm-observables-two-level-energy-readout",
      "pthm-nrqm-observables-born-outcome-law-properties",
      "pthm-nrqm-observables-position-and-momentum-outcome-laws",
      "pthm-nrqm-observables-preparation-moments",
      "pthm-nrqm-observables-states-separated-by-born-statistics",
      "rem-nrqm-observables-examples-scope-limits",
      "rem-nrqm-observables-scope-and-empirical-status"
    ],
    "exact_manifest_scope": {
      "45": {
        "items": [
          "lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues",
          "lem-nrqm-observables-outcome-law-affinity-and-trace-norm-continuity",
          "lem-nrqm-observables-moments-and-variance",
          "lem-nrqm-observables-states-separated-by-bounded-projections",
          "def-nrqm-observables-framework-observable-and-outcome-law",
          "pthm-nrqm-observables-born-outcome-law-properties",
          "pthm-nrqm-observables-preparation-moments",
          "pthm-nrqm-observables-position-and-momentum-outcome-laws",
          "pthm-nrqm-observables-states-separated-by-born-statistics",
          "rem-nrqm-observables-scope-and-empirical-status",
          "ex-nrqm-observables-two-level-energy-readout",
          "ex-nrqm-observables-position-bin-probabilities",
          "cex-nrqm-observables-plane-wave-is-not-a-preparation",
          "ex-nrqm-observables-position-mean-without-variance",
          "rem-nrqm-observables-examples-scope-limits"
        ],
        "pages": [
          "library/non-relativistic-quantum-mechanics/qm-observables-and-born-probabilities.md",
          "library/non-relativistic-quantum-mechanics/qm-observables-and-born-probabilities-examples.md"
        ]
      }
    }
  },
  {
    "dispatch": "3a-adjudicate:3a-batch-46",
    "state": {
      "stage": "3a-adjudicate",
      "role": "alpha",
      "label": "3a-batch-46",
      "covers": [
        "46"
      ],
      "attempt": 1,
      "attempts": 1,
      "startedAt": "2026-10-12T16:00:35.699Z",
      "endedAt": null,
      "lastExitOk": null
    },
    "affected_items": [
      "def-nrqm-measurement-framework-declared-measurements-and-instruments",
      "ex-nrqm-measurement-absorption-instrument",
      "ex-nrqm-measurement-degenerate-coarse-versus-fine-update",
      "ex-nrqm-measurement-serial-stern-gerlach-filters",
      "ex-nrqm-measurement-three-polarizer-chain",
      "pthm-nrqm-measurement-countable-kraus-instruments",
      "pthm-nrqm-measurement-degenerate-eigenspace-update",
      "pthm-nrqm-measurement-finite-effects-dilation",
      "pthm-nrqm-measurement-instrument-updates-not-determined-by-effects",
      "pthm-nrqm-measurement-projective-outcomes-and-discarded-ensembles",
      "rem-nrqm-measurement-examples-scope-limits",
      "rem-nrqm-measurement-scope-and-empirical-status"
    ],
    "exact_manifest_scope": {
      "46": {
        "items": [
          "lem-nrqm-measurement-selective-luders-update",
          "lem-nrqm-measurement-nonselective-luders-map",
          "def-nrqm-measurement-framework-declared-measurements-and-instruments",
          "pthm-nrqm-measurement-projective-outcomes-and-discarded-ensembles",
          "pthm-nrqm-measurement-degenerate-eigenspace-update",
          "pthm-nrqm-measurement-instrument-updates-not-determined-by-effects",
          "pthm-nrqm-measurement-finite-effects-dilation",
          "pthm-nrqm-measurement-countable-kraus-instruments",
          "rem-nrqm-measurement-scope-and-empirical-status",
          "ex-nrqm-measurement-serial-stern-gerlach-filters",
          "ex-nrqm-measurement-three-polarizer-chain",
          "ex-nrqm-measurement-absorption-instrument",
          "ex-nrqm-measurement-degenerate-coarse-versus-fine-update",
          "rem-nrqm-measurement-examples-scope-limits"
        ],
        "pages": [
          "library/non-relativistic-quantum-mechanics/qm-measurement-and-instruments.md",
          "library/non-relativistic-quantum-mechanics/qm-measurement-and-instruments-examples.md"
        ]
      }
    }
  },
  {
    "dispatch": "3a-adjudicate:3a-batch-47",
    "state": {
      "stage": "3a-adjudicate",
      "role": "alpha",
      "label": "3a-batch-47",
      "covers": [
        "47"
      ],
      "attempt": 1,
      "attempts": 1,
      "startedAt": "2026-10-12T16:01:17.598Z",
      "endedAt": null,
      "lastExitOk": null
    },
    "affected_items": [
      "cex-nrqm-autonomous-dynamics-superposition-with-distinct-energies-is-not-stationary",
      "def-nrqm-autonomous-dynamics-framework-evolution",
      "ex-nrqm-autonomous-dynamics-finite-stationary-superposition",
      "ex-nrqm-autonomous-dynamics-two-level-precession",
      "pthm-nrqm-autonomous-dynamics-heisenberg-picture",
      "pthm-nrqm-autonomous-dynamics-schrodinger-picture-flow",
      "pthm-nrqm-autonomous-dynamics-stationary-states-and-energy-conservation",
      "rem-nrqm-autonomous-dynamics-examples-scope-limits",
      "rem-nrqm-autonomous-dynamics-scope-and-empirical-status"
    ],
    "exact_manifest_scope": {
      "47": {
        "items": [
          "lem-nrqm-autonomous-dynamics-flow-calculus",
          "lem-nrqm-autonomous-dynamics-heisenberg-flow",
          "lem-nrqm-autonomous-dynamics-stationary-ray-characterization",
          "def-nrqm-autonomous-dynamics-framework-evolution",
          "pthm-nrqm-autonomous-dynamics-schrodinger-picture-flow",
          "pthm-nrqm-autonomous-dynamics-heisenberg-picture",
          "pthm-nrqm-autonomous-dynamics-stationary-states-and-energy-conservation",
          "rem-nrqm-autonomous-dynamics-scope-and-empirical-status",
          "ex-nrqm-autonomous-dynamics-two-level-precession",
          "ex-nrqm-autonomous-dynamics-finite-stationary-superposition",
          "cex-nrqm-autonomous-dynamics-superposition-with-distinct-energies-is-not-stationary",
          "rem-nrqm-autonomous-dynamics-examples-scope-limits"
        ],
        "pages": [
          "library/non-relativistic-quantum-mechanics/qm-autonomous-dynamics.md",
          "library/non-relativistic-quantum-mechanics/qm-autonomous-dynamics-examples.md"
        ]
      }
    }
  },
  {
    "dispatch": "3a-adjudicate:3a-batch-48",
    "state": {
      "stage": "3a-adjudicate",
      "role": "alpha",
      "label": "3a-batch-48",
      "covers": [
        "48"
      ],
      "attempt": 1,
      "attempts": 1,
      "startedAt": "2026-10-12T16:01:33.554Z",
      "endedAt": null,
      "lastExitOk": null
    },
    "affected_items": [
      "def-nrqm-kinematics-framework-massive-spin-s-model",
      "ex-nrqm-kinematics-gaussian-position-momentum-packet",
      "pthm-nrqm-kinematics-boost-covariance",
      "pthm-nrqm-kinematics-spin-s-outcome-laws",
      "pthm-nrqm-kinematics-translation-covariance",
      "rem-nrqm-kinematics-examples-scope-limits",
      "rem-nrqm-kinematics-scope-and-empirical-status",
      "texp-nrqm-kinematics-dirichlet-momentum-warning"
    ],
    "exact_manifest_scope": {
      "48": {
        "items": [
          "lem-nrqm-kinematics-orthogonal-sums-of-self-adjoint-operators",
          "lem-nrqm-kinematics-component-valued-wavefunction-identifications",
          "lem-nrqm-kinematics-componentwise-position-and-momentum",
          "lem-nrqm-kinematics-ccr-and-internal-factor-commutation",
          "lem-nrqm-kinematics-momentum-representation",
          "def-nrqm-kinematics-framework-massive-spin-s-model",
          "pthm-nrqm-kinematics-spin-s-outcome-laws",
          "pthm-nrqm-kinematics-translation-covariance",
          "pthm-nrqm-kinematics-boost-covariance",
          "rem-nrqm-kinematics-scope-and-empirical-status",
          "ex-nrqm-kinematics-gaussian-position-momentum-packet",
          "ex-nrqm-kinematics-plane-wave-generalized-eigenfunction",
          "cex-nrqm-kinematics-ccr-cannot-hold-for-bounded-operators",
          "texp-nrqm-kinematics-dirichlet-momentum-warning",
          "rem-nrqm-kinematics-examples-scope-limits"
        ],
        "pages": [
          "library/non-relativistic-quantum-mechanics/qm-massive-particle-kinematics.md",
          "library/non-relativistic-quantum-mechanics/qm-massive-particle-kinematics-examples.md"
        ]
      }
    }
  },
  {
    "dispatch": "3a-adjudicate:3a-batch-49",
    "state": {
      "stage": "3a-adjudicate",
      "role": "alpha",
      "label": "3a-batch-49",
      "covers": [
        "49"
      ],
      "attempt": 1,
      "attempts": 1,
      "startedAt": "2026-10-12T16:01:42.821Z",
      "endedAt": null,
      "lastExitOk": null
    },
    "affected_items": [
      "def-nrqm-interference-recorded-detector-and-sampling-model",
      "def-nrqm-interference-two-path-preparation-and-detection-model",
      "ex-nrqm-interference-ideal-flat-two-path-screen-distribution",
      "ex-nrqm-interference-uniform-phase-averaging",
      "exp-nrqm-interference-bach-electron-double-slit",
      "pthm-nrqm-interference-coherent-and-mixture-detection-laws",
      "pthm-nrqm-interference-continuity-and-local-probability-balance",
      "pthm-nrqm-interference-recorded-bin-laws-loss-and-conditioning",
      "rem-nrqm-interference-examples-scope-limits",
      "rem-nrqm-interference-scope-and-deferred-content",
      "texp-nrqm-interference-finite-sample-fringe-failure"
    ],
    "exact_manifest_scope": {
      "49": {
        "items": [
          "lem-nrqm-interference-component-cross-term-and-recorded-bin-laws",
          "def-nrqm-interference-two-path-preparation-and-detection-model",
          "def-nrqm-interference-recorded-detector-and-sampling-model",
          "pthm-nrqm-interference-coherent-and-mixture-detection-laws",
          "pthm-nrqm-interference-recorded-bin-laws-loss-and-conditioning",
          "pthm-nrqm-interference-continuity-and-local-probability-balance",
          "texp-nrqm-interference-finite-sample-fringe-failure",
          "rem-nrqm-interference-scope-and-deferred-content",
          "ex-nrqm-interference-ideal-flat-two-path-screen-distribution",
          "ex-nrqm-interference-uniform-phase-averaging",
          "exp-nrqm-interference-bach-electron-double-slit",
          "rem-nrqm-interference-examples-scope-limits"
        ],
        "pages": [
          "library/non-relativistic-quantum-mechanics/qm-interference-and-local-detection.md",
          "library/non-relativistic-quantum-mechanics/qm-interference-and-local-detection-examples.md"
        ]
      }
    }
  },
  {
    "dispatch": "3a-adjudicate:3a-batch-50",
    "state": {
      "stage": "3a-adjudicate",
      "role": "alpha",
      "label": "3a-batch-50",
      "covers": [
        "50"
      ],
      "attempt": 1,
      "attempts": 1,
      "startedAt": "2026-10-12T16:01:51.679Z",
      "endedAt": null,
      "lastExitOk": null
    },
    "affected_items": [
      "def-nrqm-uncertainty-preparation-spread",
      "ex-nrqm-uncertainty-gaussian-minimum-spread",
      "pthm-nrqm-uncertainty-compatible-sharp-observables-and-joint-law",
      "pthm-nrqm-uncertainty-position-momentum-incompatible",
      "pthm-nrqm-uncertainty-position-momentum-relation",
      "pthm-nrqm-uncertainty-robertson-relation",
      "rem-nrqm-uncertainty-energy-time-caveat",
      "rem-nrqm-uncertainty-error-disturbance-distinction",
      "rem-nrqm-uncertainty-examples-scope-limits",
      "rem-nrqm-uncertainty-scope-and-empirical-status",
      "texp-nrqm-uncertainty-spin-half-incompatibility"
    ],
    "exact_manifest_scope": {
      "50": {
        "items": [
          "def-nrqm-uncertainty-strong-spectral-commutation",
          "lem-nrqm-uncertainty-schrodinger-robertson-anticommutator-bound",
          "def-nrqm-uncertainty-preparation-spread",
          "lem-nrqm-uncertainty-bounded-borel-calculus-of-commuting-operators",
          "thm-nrqm-uncertainty-joint-pvm-criterion",
          "lem-nrqm-uncertainty-product-domain-commutator-identity",
          "lem-nrqm-uncertainty-approximation-by-product-domain-vectors",
          "pthm-nrqm-uncertainty-robertson-relation",
          "pthm-nrqm-uncertainty-position-momentum-relation",
          "pthm-nrqm-uncertainty-compatible-sharp-observables-and-joint-law",
          "pthm-nrqm-uncertainty-position-momentum-incompatible",
          "rem-nrqm-uncertainty-scope-and-empirical-status",
          "ex-nrqm-uncertainty-gaussian-minimum-spread",
          "texp-nrqm-uncertainty-spin-half-incompatibility",
          "cex-nrqm-uncertainty-commutator-zero-on-a-core-is-not-spectral-compatibility",
          "rem-nrqm-uncertainty-energy-time-caveat",
          "rem-nrqm-uncertainty-error-disturbance-distinction",
          "rem-nrqm-uncertainty-examples-scope-limits"
        ],
        "pages": [
          "library/non-relativistic-quantum-mechanics/qm-uncertainty-and-compatibility.md",
          "library/non-relativistic-quantum-mechanics/qm-uncertainty-and-compatibility-examples.md"
        ]
      }
    }
  },
  {
    "dispatch": "3a-adjudicate:3a-batch-51",
    "state": {
      "stage": "3a-adjudicate",
      "role": "alpha",
      "label": "3a-batch-51",
      "covers": [
        "51"
      ],
      "attempt": 1,
      "attempts": 1,
      "startedAt": "2026-10-12T16:01:56.147Z",
      "endedAt": null,
      "lastExitOk": null
    },
    "affected_items": [
      "def-nrqm-potentials-interval-and-delta-models",
      "def-nrqm-potentials-one-dimensional-line-model",
      "ex-nrqm-potentials-box-spectrum-and-nodes",
      "ex-nrqm-potentials-finite-well-exact-root-and-count",
      "ex-nrqm-potentials-rectangular-barrier-tunnelling-and-thick-limit",
      "pthm-nrqm-potentials-barrier-flux-and-transmission",
      "pthm-nrqm-potentials-delta-point-interaction-bound-state",
      "pthm-nrqm-potentials-finite-well-bound-states",
      "pthm-nrqm-potentials-interval-spectra-completeness-and-nodes",
      "pthm-nrqm-potentials-line-model-energy-and-stationary-states",
      "rem-nrqm-potentials-examples-scope-limits",
      "rem-nrqm-potentials-scope-and-idealizations"
    ],
    "exact_manifest_scope": {
      "51": {
        "items": [
          "lem-nrqm-potentials-one-dimensional-flux-identity",
          "lem-nrqm-potentials-free-operator-differential-identification",
          "lem-nrqm-potentials-positive-scaling-of-self-adjoint-operators",
          "def-nrqm-potentials-one-dimensional-line-model",
          "def-nrqm-potentials-interval-and-delta-models",
          "pthm-nrqm-potentials-line-model-energy-and-stationary-states",
          "pthm-nrqm-potentials-barrier-flux-and-transmission",
          "pthm-nrqm-potentials-finite-well-bound-states",
          "pthm-nrqm-potentials-interval-spectra-completeness-and-nodes",
          "pthm-nrqm-potentials-delta-point-interaction-bound-state",
          "rem-nrqm-potentials-scope-and-idealizations",
          "ex-nrqm-potentials-rectangular-barrier-tunnelling-and-thick-limit",
          "ex-nrqm-potentials-finite-well-exact-root-and-count",
          "ex-nrqm-potentials-box-spectrum-and-nodes",
          "rem-nrqm-potentials-examples-scope-limits"
        ],
        "pages": [
          "library/non-relativistic-quantum-mechanics/qm-one-dimensional-potentials.md",
          "library/non-relativistic-quantum-mechanics/qm-one-dimensional-potentials-examples.md"
        ]
      }
    }
  },
  {
    "dispatch": "3a-adjudicate:3a-batch-54",
    "state": {
      "stage": "3a-adjudicate",
      "role": "alpha",
      "label": "3a-batch-54",
      "covers": [
        "54"
      ],
      "attempt": 1,
      "attempts": 1,
      "startedAt": "2026-10-12T16:02:13.075Z",
      "endedAt": null,
      "lastExitOk": null
    },
    "affected_items": [
      "def-nrqm-angular-momentum-framework-angular-momentum-observables",
      "ex-nrqm-angular-momentum-l-eigenfunctions",
      "ex-nrqm-angular-momentum-spin-half-directional-probabilities",
      "ex-nrqm-angular-momentum-zeeman-toy-model",
      "post-nrqm-angular-momentum-magnetic-moment-coupling",
      "pthm-nrqm-angular-momentum-orbital-eigenstates-and-quantum-numbers",
      "pthm-nrqm-angular-momentum-spin-spectra-and-outcome-laws",
      "pthm-nrqm-angular-momentum-stern-gerlach-conditional-force",
      "pthm-nrqm-angular-momentum-total-conservation",
      "pthm-nrqm-angular-momentum-two-spin-composition",
      "pthm-nrqm-angular-momentum-zeeman-precession",
      "rem-nrqm-angular-momentum-examples-scope-limits",
      "rem-nrqm-angular-momentum-scope-and-empirical-status",
      "texp-nrqm-angular-momentum-stern-gerlach-splitting"
    ],
    "exact_manifest_scope": {
      "54": {
        "items": [
          "lem-nrqm-angular-momentum-product-flow-generator",
          "lem-nrqm-angular-momentum-su2-lift-of-the-rotation-action",
          "lem-nrqm-angular-momentum-orbital-casimir-identity",
          "def-nrqm-angular-momentum-framework-angular-momentum-observables",
          "post-nrqm-angular-momentum-magnetic-moment-coupling",
          "pthm-nrqm-angular-momentum-spin-spectra-and-outcome-laws",
          "pthm-nrqm-angular-momentum-orbital-eigenstates-and-quantum-numbers",
          "pthm-nrqm-angular-momentum-total-conservation",
          "pthm-nrqm-angular-momentum-zeeman-precession",
          "pthm-nrqm-angular-momentum-stern-gerlach-conditional-force",
          "pthm-nrqm-angular-momentum-two-spin-composition",
          "rem-nrqm-angular-momentum-scope-and-empirical-status",
          "ex-nrqm-angular-momentum-spin-half-directional-probabilities",
          "ex-nrqm-angular-momentum-l-eigenfunctions",
          "ex-nrqm-angular-momentum-zeeman-toy-model",
          "texp-nrqm-angular-momentum-stern-gerlach-splitting",
          "rem-nrqm-angular-momentum-examples-scope-limits"
        ],
        "pages": [
          "library/non-relativistic-quantum-mechanics/qm-angular-momentum-and-spin.md",
          "library/non-relativistic-quantum-mechanics/qm-angular-momentum-and-spin-examples.md"
        ]
      }
    }
  }
]
```

## Phase 2 completion (authorized supplier repair)

The two supplier files and owning batch1 manifest/contracts were replaced atomically after preserving exact before bytes in `alpha17-affine-before/`. The Definition now requires nonempty A and explicitly fixes its orientation. The coordinate lemma preserves clauses 1/2 and all previous proof labels, appending clause 3 and step 5.1 for chart availability; it adds the slice witness o+tu. The existing normalized orthonormal-basis corollary and the determinant-minus-one orientation interchange supply the exact missing construction. No nonempty affine model is excluded.

Scoped precheck, real YAML/KaTeX rendering, and proof-layout pass (two items, six steps, zero defects). Strict explicit proof-contract checks pass for the changed coordinate lemma and the owning batch1 transition lemma and boost-example contracts (three items, zero errors/warnings). The full affected DAG with recursive supplier context has 4,030 nodes, including all 551 affected carriers; no missing/YAML errors or dependency cycles. These are local inspections, not an engine gate.

Focused consumer checks now cover 549 consumers plus the two repaired suppliers = 551 affected carriers, with zero consumer checks pending **for the two precise interface deltas**. `alpha17-affine-consumer-delta-checks.json` records dependency-ordered incoming suppliers, actual targeted use passages, current claim-premise extracts, hash-bound carriers and individual limited dispositions. This is an interface-delta review, not a full audit of unrelated physics/math arguments or sources. No consumer source repair was required. Native writers can still alter those carriers; the recorded current hashes identify this review context and root must reconcile changed bytes at its later integration pass.

Only two outside-scope stale supplier citation-quote records remain in batch17 contracts (the free-motion boost and worldline-parameter examples); authorization was requested to refresh these quotes, or root can perform that mechanical reconciliation. Global ledger/Alpha17 decisions remain untouched for root serialization. No publication, imported/root-math edit, engine control, gate or commit occurred.

### Authorized batch17 quote reconciliation

After rechecking state and finding no active batch17 source scope, preserved exact batch17 contract before bytes and atomically refreshed ONLY the Definition quotes in L1 for `ex-cm01-galilean-boost-of-a-free-motion` and `ex-cm01-worldline-parameter-condition`. Strict scoped contract check passes (2/2 items, zero errors/warnings). All requested local source/metadata repairs are now complete; global ledger/decision serialization remains root-owned. Final evidence is in the source receipt, limited consumer-check artifact, DAG artifact and source patch beside this note.
