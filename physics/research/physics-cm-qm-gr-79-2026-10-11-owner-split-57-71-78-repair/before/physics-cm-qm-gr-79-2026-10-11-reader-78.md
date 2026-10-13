# Independent reader report — batch 78

Run: physics-cm-qm-gr-79-2026-10-11  
Role: Step 3a reader  
Scope: batch 78 only

## Review verdict

I independently reviewed both assigned pages and all 52 listed items, in supplier-before-consumer order. I repaired nine assigned items and updated their affected proof-contract records. No remaining defect was confirmed in an assigned item or page. Two nonfatal proof gaps were found in current-run draft dependencies outside this batch and are reported for owner disposition; their assigned consumer is the dust subsidiary/residual theorem. No blocker remains.

## Opened inventory

Assigned pages:

- A page: gr-gr14-full-high-regularity-symmetric-hyperbolic-proof
- B page: gr-gr14-full-high-regularity-symmetric-hyperbolic-proof-examples

### A page items

- def-gr-periodic-torus-and-sobolev-spaces
- lem-gr-finite-speed-independence-of-extension
- lem-gr-positive-definite-symmetric-matrix-bounds
- lem-gr-rational-diagonal-extraction
- lem-gr-periodic-fourier-differentiation-and-norm-equivalence
- def-gr-galerkin-fourier-projection
- def-gr-periodic-symmetric-hyperbolic-system
- lem-gr-periodic-sobolev-completeness
- lem-gr-periodic-sobolev-embedding
- lem-gr-galerkin-projection-properties
- lem-gr-periodic-sobolev-algebra
- lem-gr-smooth-composition-and-commutator-estimates
- lem-gr-galerkin-ode-local-solution
- lem-gr-galerkin-time-derivative-bound
- def-gr-dust-reduction-variables-and-gauge
- lem-gr-galerkin-compactness
- lem-gr-galerkin-energy-inequality
- lem-gr-galerkin-second-time-derivative-bound
- def-gr-barotropic-enthalpy-variable
- def-gr-dust-electric-magnetic-weyl-variables-and-schouten
- lem-gr-galerkin-limit-is-classical-solution
- def-gr-dust-torsion-and-curvature-residuals
- lem-gr-dust-symmetric-hyperbolic-reduction
- lem-gr-dust-weyl-reconstruction-from-electric-magnetic
- thm-gr-periodic-symmetric-hyperbolic-existence
- def-gr-harmonic-gauge-and-reduced-equations
- lem-gr-dust-reduced-evolution-equations
- thm-gr-constraint-equations-in-normal-frame
- thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability
- lem-gr-harmonic-initial-data-construction
- thm-gr-dust-subsidiary-and-residual-vanishing
- thm-gr-periodic-symmetric-hyperbolic-smooth-persistence
- lem-gr-dust-initial-data-and-tilted-initialization
- lem-gr-einstein-residual-and-subsidiary-identity
- lem-gr-reduced-einstein-principal-part
- thm-gr-local-symmetric-hyperbolic-well-posedness
- lem-gr-barotropic-fluid-symmetric-hyperbolic-system
- lem-gr-scalar-einstein-symmetric-hyperbolic-reduction
- thm-gr-harmonic-constraint-propagation
- thm-gr-reduced-einstein-local-existence
- thm-gr-local-geometric-uniqueness
- thm-gr-local-geometric-development
- thm-gr-barotropic-fluid-local-evolution
- thm-gr-dust-local-evolution
- thm-gr-scalar-field-local-evolution
- thm-gr-high-regularity-selected-matter-development
- pthm-gr-high-regularity-local-development
- rem-gr-high-regularity-scope

### B page items

- cex-gr-sobolev-embedding-needs-s-minus-m-above-three-halves
- ex-gr-periodic-energy-method-check
- cex-gr-negative-sound-speed-derivative-breaks-evolution
- ex-gr-fluid-principal-symbol-radiation

## Dependency and source checks

I opened the in-run draft dependencies used by the assigned dust residual and tilted-initialization arguments, including the spacelike hypersurface definition and normal lemma, the metric-selected connection and its tensor derivative, the local geodesic/exponential-map theorem, tensor and curvature definitions, the auxiliary complete Riemannian metric theorem, and the basic limit-curve lemma. Findings on two out-of-batch draft dependencies appear below.

For the dust reduction, I checked the local electric/magnetic Weyl reconstruction, reduced equations, and residual identities against H. Friedrich and A. D. Rendall, “The Cauchy Problem for the Einstein Equations,” section 4.2, especially equations (4.45)–(4.63), https://arxiv.org/pdf/gr-qc/0002074. The source supports the reduced geodesic-dust equations and the residual decomposition used locally. Its displayed sign/order for the double-epsilon term uses a different epsilon-index ordering; after matching the stated conventions, the local form and the trace-preservation calculation agree. I found no remaining source-fidelity defect in the assigned dust chain.

## Repairs made

1. lem-gr-periodic-fourier-differentiation-and-norm-equivalence: specified the previously free Sobolev index as an integer s >= 0 in the statement and facts. This makes each Fourier-weight comparison quantified.
2. lem-gr-galerkin-projection-properties: quantified s in clause (b), made clauses (c) and (d) hold for every integer r >= 0, and made the clause (e) range explicit as integer s >= 1. This removes free indices and the mismatched bounds.
3. lem-gr-periodic-sobolev-algebra: kept the Leibniz estimate on smooth factors first, then passed to general Sobolev factors through Fourier truncations, completeness, uniform convergence, and weak-derivative identities for the product. Added the periodic integration-by-parts fact needed to identify classical derivatives of a C^k periodic function with its weak derivatives. This avoids applying the classical Leibniz rule before regularity has been established.
4. thm-gr-periodic-symmetric-hyperbolic-smooth-persistence: renamed the Sobolev-order variable to q, avoiding collision with the ambient state-space dimension in O subset R^m.
5. lem-gr-harmonic-initial-data-construction: strengthened the local-coordinate hypothesis to smooth product coordinates (s,x^1,x^2,x^3) with s=0 on the slice and coordinate vector partial_s equal to the prescribed normal there. The former condition on the differential of a scalar function did not define the coordinate vector used by the construction.
6. thm-gr-reduced-einstein-local-existence: described the initial metric as a field of Lorentzian bilinear forms on the restricted ambient tangent bundle over the initial slice, whose restriction to the tangent bundle of the slice is positive definite. This corrects the former rank mismatch from calling a four-dimensional Lorentzian metric a metric on a three-dimensional slice.
7. def-gr-dust-reduction-variables-and-gauge: renamed the open solution region to mathcal U, retaining U for the dust unit velocity and removing the notation collision.
8. def-gr-periodic-symmetric-hyperbolic-system: made the solution-class indices explicit and parameterized the stated class by s, retaining the contextual alias. Removed the unsupported assertion that the coefficient-composition norm is bounded by a function of the H^s norm of the state alone; the definition now requires the displayed products to be L^2 classes without claiming that global bound.
9. def-gr-barotropic-enthalpy-variable: specified that c_s = sqrt(p') is a dimensionless sound-speed ratio and that the SI speed is c c_s.

The algebra repair uses the assigned Fourier/Sobolev suppliers, including the Fourier differentiation and norm-equivalence lemma, Sobolev completeness, and the Sobolev embedding estimate. The GR coordinate and initial-data repairs use the stated smooth product-coordinate, induced-metric, and bundle conventions in their cited suppliers.

## Proof contracts and validation

I refreshed the affected proof-contract statement/definition quotes and the algebra derivation claims and inputs in research/physics-cm-qm-gr-79-2026-10-11-batch-78.proof-contracts.json. A consistency check found zero stale source quotes and confirmed the algebra contract now matches the repaired proof. No changed item had a stale verification.judge record.

For all nine changed items, reflow returned unchanged, and precheck reported no failures (the six proof items passed; the three definitions had zero checked proof items and zero failures). I ran the required proof-layout command once over all nine paths; it reported 9 items, 27 steps, 0 defects.

## Uneditable findings

- thm-gr-auxiliary-complete-riemannian-metric, proof step 4.1: the proof says a global proper sublevel K compact in M is “hence compact in M_0.” For a disconnected manifold, K need not be a subset of the selected component. The completeness argument can be closed by using K intersect M_0: the component is closed, so this intersection is compact and contains the Cauchy tail. The claimed inference is invalid as written but the local repair is immediate. This supplier is outside batch 78; its dependency closure reaches assigned consumer thm-gr-dust-subsidiary-and-residual-vanishing.
- lem-gr-basic-limit-curve, proof step 7.1: the first sentence assumes each gamma_k is defined on all of [0,infinity), while statement (b) permits varying intervals that contain each compact interval only eventually. The broader claim needs a tail-and-diagonal extraction using the eventual domain condition; that step is absent. The assigned dust residual proof applies the time-reversed result to curves already defined on the entire half-line, which matches the special case actually handled here, but the supplier's broader statement remains unsupported. This supplier is outside batch 78; its dependency closure reaches assigned consumer thm-gr-dust-subsidiary-and-residual-vanishing.

## Page verdicts

- gr-gr14-full-high-regularity-symmetric-hyperbolic-proof (A): all 48 items and its summary reviewed. Nine confirmed local defects were repaired. No other assigned-carrier defect remains. The two nonfatal dependency findings above are routed for owner disposition.
- gr-gr14-full-high-regularity-symmetric-hyperbolic-proof-examples (B): all four examples/counterexamples and its summary reviewed; no defect found.

## Blocker and coverage limit

No blocker. I did not independently re-audit every item in the transitive mathematical prerequisite closure. I opened the definitions and results needed to check the assigned arguments, the named current-run draft dependencies, and the cited dust source; the remaining imported mathematical foundations are a genuine limit on this review.
