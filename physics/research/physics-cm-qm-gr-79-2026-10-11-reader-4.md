# Step 3a reader report — batch 4

Run: physics-cm-qm-gr-79-2026-10-11  
Role: reader  
Output: research/physics-cm-qm-gr-79-2026-10-11-reader-4.md

## Scope and opened inventory

Read the workspace instructions, physics content model, reader brief, and batch-4 manifest. Opened both assigned pages:

- library/non-relativistic-classical-mechanics-mathematics/cm-math-variations.md
- library/non-relativistic-classical-mechanics-mathematics/cm-math-variations-examples.md

Opened all 32 assigned item carriers, in dependency order.

A-page cm-math-variations (27 items):

- cex-cm-dalembert-and-vakonomic-evolutions-differ
- cor-cm-noether-charges-for-translations-rotations-and-boosts
- cor-cm-reduced-dalembert-and-generalized-forces
- def-cm-holonomic-constraint-and-ideal-reactions
- def-cm-infinitesimal-point-symmetry
- def-cm-legendre-map-in-a-time-dependent-chart
- def-cm-nonholonomic-velocity-constraint-law
- def-cm-time-dependent-lagrangian-and-action
- lem-cm-c2-bump-functions
- lem-cm-constraint-multipliers-and-accelerations
- lem-cm-first-variation-formula
- lem-cm-legendre-map-local-invertibility
- prop-cm-coordinate-covariance-of-the-euler-lagrange-expression
- prop-cm-hamiltonian-branch-identities
- prop-cm-ideal-holonomic-system-in-a-time-dependent-chart
- prop-cm-lagrangian-boundary-terms-and-scaling
- prop-cm-local-action-family-exists
- prop-cm-mechanical-chart-lagrangian-is-hyperregular
- prop-cm-nonholonomic-distribution-is-not-tangent-to-level-sets
- rem-cm-scope-of-point-symmetry
- rem-cm-scope-of-stationarity
- rem-cm-scope-of-the-legendre-map
- thm-cm-endpoint-action-differential
- thm-cm-hamilton-phase-action-stationarity
- thm-cm-point-noether-identity-with-time-reparametrization
- thm-cm-point-symmetry-charge-is-conserved
- thm-cm-stationarity-iff-euler-lagrange

Examples companion cm-math-variations-examples (5 items):

- ex-cm-stationary-path-need-not-be-a-local-minimum
- ex-cm-regular-lagrangians-need-not-be-hyperregular
- ex-cm-ideal-pendulum-equation-and-stability
- ex-cm-rotating-hoop-reduced-energy
- ex-cm-rolling-disk-acceleration

For the 64 published direct mathematical suppliers, inspected the exact Definition or Statement sections used by the assigned proofs and checked the local import-index mappings. Also opened the current-run draft suppliers def-cm-mechanical-vector-field-and-energy-in-a-chart, lem-cm-positive-definite-matrix-square-roots, lem-cm-energy-conservation-for-the-mechanical-system, thm-cm-quadratic-mode-decomposition, thm-cm-energy-stability-of-a-strict-minimum, def-cm-equilibrium-and-lyapunov-stability, and thm-cm-compact-continuation-for-locally-lipschitz-odes. Their assigned consumer paths were checked. Inspected the 24 proof-bearing contracts' fact/use and derivation-step mappings against the current item proofs.

## Findings not repaired

This is a read-only reader assignment. No item or page carrier was edited.

1. cor-cm-noether-charges-for-translations-rotations-and-boosts, Statement lines 40–47: a, b, and ε are used in the domain of U0 before they are bound, and a is later reused for a vector. The Lagrangian chart's time domain is therefore not fully specified. Bind endpoints and a positive extension width (preferably with endpoint names distinct from the symmetry vector).

2. def-cm-holonomic-constraint-and-ideal-reactions, Definition lines 51–53: M is called symmetric positive definite without defining the matrix condition. The cited invertible-matrix definition only defines invertibility. State Mᵀ=M and uᵀMu>0 for every nonzero u, or cite an exact earlier definition and give its content.

3. def-cm-nonholonomic-velocity-constraint-law, frontmatter deps line 9 and Definition lines 58–61: the body uses the meanings of action, stationary, and Euler–Lagrange expression from def-cm-time-dependent-lagrangian-and-action, but that item is absent from deps. The linked supplier does not appear in the declared prerequisite closure. Add the mathematical-premise edge and account for its dependency ordering.

4. def-cm-time-dependent-lagrangian-and-action, Definition lines 67–76: “one-sided derivative” does not specify the side, while ε is admissible on a symmetric interval and δS is written with ordinary derivative notation. State that the derivative is two-sided, or explicitly define the chosen one-sided limit.

5. def-cm-nonholonomic-velocity-constraint-law, Definition lines 82–91: “directionally one-sided derivative” likewise does not specify the limiting side for s. Define the positive or negative one-sided limit, or state ordinary differentiability.

6. def-cm-infinitesimal-point-symmetry, Definition lines 50–57: the right side B_t+B_q·v is described as the derivative of B under q↦q+sξ(q), t↦t. At fixed t that variation gives B_q·ξ; B_t+B_q·v is the total time derivative of B(t,q(t)) along a trajectory. Correct the interpretation.

7. cor-cm-reduced-dalembert-and-generalized-forces, Statement line 44: M is assumed symmetric positive definite with no mathematical definition available in this carrier's dependency closure. Give the quadratic-form condition or cite and state an exact definition.

8. lem-cm-legendre-map-local-invertibility, Facts F4 and Proof step 1.2 (lines 86–90, 100): the proof uses that injectivity of an endomorphism of a finite-dimensional space is equivalent to invertibility, but the declared dependencies do not establish that implication. Add rank-nullity or give the finite-dimensional argument.

9. prop-cm-coordinate-covariance-of-the-euler-lagrange-expression, Facts F4 (lines 93–97): the converse is not established by the cited statement “the transpose of an invertible matrix is invertible”; that proves the forward direction. The proposition's proof only needs the forward implication under its assumed invertibility, so either narrow F4 to that implication or establish the converse with finite-dimensional linear algebra.

10. prop-cm-mechanical-chart-lagrangian-is-hyperregular, Facts F3 and Proof step 1.1 (lines 87–89, 103): M's trivial kernel is used to infer bijectivity without a finite-dimensional injective-to-surjective result in the dependency list. Add rank-nullity or prove this implication.

11. thm-cm-endpoint-action-differential, Proof step 1.1 (line 110): the chain-rule and integration-by-parts formulas multiply the gradient vectors L_q and L_v by the Jacobian ∂qX without transposes. The cited gradient definition uses vectors and the Jacobian has output rows/input columns; as written the products have no declared compatible shape. Use (∂qX)ᵀL_q and (∂q∂sX)ᵀL_v, including the corresponding transposed boundary term.

12. thm-cm-stationarity-iff-euler-lagrange, Facts F2 (lines 57–60): the bump has positive values throughout (t₁−ρ,t₁+ρ) and vanishes outside the closed interval, so its topological support includes the endpoints and is not contained in that open interval. State the nonzero locus or the closed support interval.

13. cex-cm-dalembert-and-vakonomic-evolutions-differ, Proof step 3.1 (line 102): y and z are introduced as primitives without a construction or a cited existence theorem. The required FTC for continuous integrands is not in the declared dependency list. Define them by oriented integrals and cite FTC, or give explicit antiderivatives and verify the derivatives.

14. cex-cm-dalembert-and-vakonomic-evolutions-differ, Proof step 3.1 (line 102): the global solution is called the unique d'Alembert motion, but restrictions to different open intervals are also motions under the definition. State uniqueness of the maximal motion or uniqueness up to restriction.

15. ex-cm-regular-lagrangians-need-not-be-hyperregular, Statement lines 45–48 and Facts F3 (lines 77–80): the statement gives the exact range (-1,1), but F3 only proves the range is contained in (-1,1) and that 1 is omitted. Show every p in (-1,1) is attained, for example by solving v/√(1+v²)=p.

16. ex-cm-stationary-path-need-not-be-a-local-minimum, Example lines 51–59: “local minimum” and “nearby” require a topology on the admissible curve space, which is not specified. The displayed perturbation decreases action and tends to q* in the usual C² topology, but that topology or an explicit variation-local definition should be stated.

17. ex-cm-rotating-hoop-reduced-energy, Proof step 2.3 (line 149): strict-minimum and non-minimum conclusions require 1−cos θ>0 for small nonzero θ. Facts F1 only gives |cos θ|≤1, which is not strict. Supply a local proof, such as 1−cos θ=2sin²(θ/2) with nonvanishing of sin near zero.

18. ex-cm-rotating-hoop-reduced-energy, Proof step 3.1 (line 151): a nonzero derivative formula at a phase point does not alone show that an actual solution passes through that point. Apply local existence for the smooth phase vector field before using the point as a witness of nonconservation.

19. rem-cm-scope-of-stationarity, Remarks lines 37–41: the cited theorem is an equivalence between stationarity and the Euler–Lagrange equation; it is not stated “in that direction only” as written. Separate the stationarity equivalence from the first-order necessary condition for an extremum, and qualify that latter condition with its function-space notion of local extremum.

20. thm-cm-point-noether-identity-with-time-reparametrization, title line 4: the title uses p·ξ, but the item defines the charge using L_v and neither defines p nor depends on an exact p-definition. Replace p by L_v or bind p:=L_v.

21. In-run dependency lem-cm-positive-definite-matrix-square-roots, Proof steps 2.1 and 3.1 (lines 60 and 64): step 2.1 infers invertibility from a trivial kernel without a finite-dimensional argument. Step 3.1 infers positive definiteness from a trivial kernel; the displayed quadratic-form identity instead needs to be applied to every nonzero x. Rank-nullity closes the first gap; the second needs the direct strict quadratic-form argument. This draft batch-3 supplier is reached directly by assigned lem-cm-constraint-multipliers-and-accelerations (and through other assigned consumers).

22. In-run dependency thm-cm-energy-stability-of-a-strict-minimum, Facts F4 (line 63): it cites def-euclidean-inner-product for the norm triangle and reverse-triangle inequalities, while that definition explicitly says the norm property is proved separately in thm-cauchy-schwarz-and-the-euclidean-norm and is not assumed there. The F4 inequalities are unused by the theorem's proof, but the citation is inaccurate. The assigned consumer is ex-cm-ideal-pendulum-equation-and-stability.

23. In-run dependency thm-cm-energy-stability-of-a-strict-minimum, Facts F4 (line 63): same citation defect as finding 22. The assigned consumer is ex-cm-rotating-hoop-reduced-energy.

For findings 20–22, the producer bytes observed were still current at report time. Raw SHA-256 values are bound in the findings JSON.

## Page verdicts

- cm-math-variations: not accepted. The page summary matches the listed subject matter, but multiple assigned definitions and theorem proofs have the defects above.
- cm-math-variations-examples: not accepted. The summary is broadly consistent with the examples, but the d'Alembert witness, exact range claim, local-minimum qualifications, and rotating-hoop deductions require repair or clarification.

## Edits, checks, and blockers

No item or page edits were made because this is a read-only reader assignment. Consequently no item reflow, precheck, or proof-layout command was run. No blocker prevented the review.

## Coverage note

All two assigned pages and all 32 assigned carriers were opened and reviewed. Exact Definition/Statement sections were opened for all 64 published direct suppliers; I did not re-audit every proof in those published items. The seven current-run draft dependencies listed above were read in full, along with their relevant direct supplier statements. The batch's 24 proof-contract entries were checked for fact-use and derivation-step coverage against the authored proofs; I did not independently re-verify every stored quotation beyond the clauses relevant to these findings. No web search was needed for the checked arguments. A final status check showed modified item carriers outside batch 4; they were not opened or changed as part of this assignment.
