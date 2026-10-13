# Reader report — batch 71

Run: physics-cm-qm-gr-79-2026-10-11  
Role: reader  
Coverage: batch 71

## Opened inventory

Pages opened:

- A page gr-flat-and-newtonian-bridges: [library/general-relativity/gr-flat-and-newtonian-bridges.md](../library/general-relativity/gr-flat-and-newtonian-bridges.md)
- B page gr-flat-and-newtonian-bridges-examples: [library/general-relativity/gr-flat-and-newtonian-bridges-examples.md](../library/general-relativity/gr-flat-and-newtonian-bridges-examples.md)

All 25 assigned items were opened and reviewed in supplier-before-consumer order.

A-page items (18):

- def-gr-minkowski-model-and-inertial-chart
- lem-gr-flat-model-connection-curvature-and-geodesics
- def-gr-flat-linearized-perturbation
- thm-gr-flat-linearized-curvature-and-gauge
- thm-gr-flat-wave-equation-duhamel-and-harmonic-gauge
- def-gr-stationary-weak-field-data
- lem-gr-weak-field-admissibility-and-inverse-bounds
- lem-gr-weak-field-christoffel-bounds
- thm-gr-weak-field-einstein-stress-hierarchy
- lem-gr-weak-field-geodesic-acceleration
- thm-gr-weak-field-scaled-trajectory-limit
- lem-gr-observer-relative-velocity-expansions
- thm-gr-vanishing-curvature-implies-locally-minkowski
- def-gr-newtonian-comparison-model-and-identification
- pthm-gr-minkowski-vacuum-model
- pthm-gr-uniform-weak-slow-correspondence
- rem-gr-local-flatness-versus-global-flatness
- rem-gr-flat-bridge-scope-and-limits

B-page items (7):

- ex-gr-linearized-curvature-of-the-diagonal-perturbation
- ex-gr-minkowski-free-fall-and-clock-identities
- ex-gr-observer-velocity-expansion-numeric-check
- ex-gr-weak-field-poisson-quadratic-potential
- ex-gr-scaled-newtonian-harmonic-trajectory
- cex-gr-first-order-vacuum-is-not-exact-vacuum
- cex-gr-flat-quotient-is-not-globally-minkowski

Dependency statements opened for the repairs included the observer energy/momentum and rest-space decomposition; real-power agreement and derivative rules; curvature and inverse-metric formulas; compactness, Taylor and Lorentzian-stability suppliers; stationary weak-field data and inverse/Christoffel bounds; the geodesic-acceleration estimate and Gronwall inequality; Euclidean inner product, Jacobian/gradient and total-derivative definitions; coordinate geodesic and proper-time statements; polar surface measure, closed-ball volume, Jordan-to-Lebesgue measure, polar coordinates and divergence/differentiation-under-the-integral suppliers; and the local-flow and covariant-pullback definitions. The changed Newtonian-comparison consumer and both page summaries were checked against the resulting definitions.

## Repairs and evidence

1. [lem-gr-observer-relative-velocity-expansions](../items/lem-gr-observer-relative-velocity-expansions.md): defined the observer rest-space norm by $|z|_n=\sqrt{g_p(z,z)}$, stated that it is induced by the positive-definite restriction of $g_p$, and applied it to $q_n(P)$. Added the rest-space positivity dependency. Replaced the unsupported smoothness assertion for $(1-z)^{-1/2}$ with the cited rational-to-real power agreement and real-power derivative, chain and scalar rules. Its proof contract now records the added suppliers.

2. [thm-gr-flat-linearized-curvature-and-gauge](../items/thm-gr-flat-linearized-curvature-and-gauge.md): changed the control to
   $B_K(A)=b_0+Lb_1+L^2b_2$,
   consistent with the dimensionless jet $(A,L\partial A,L^2\partial^2A)$. Updated the finite-dimensional Taylor proof and its constants. Moved the quadratic-remainder step after the scalar/Einstein first-variation calculation so $DF(0)=G^{(1)}(A)$ is established before use; clarified the pointwise nondegenerate path argument and adopted the stratified step labels. Updated citations, derivations and boundary records in the batch proof contract.

3. [lem-gr-weak-field-christoffel-bounds](../items/lem-gr-weak-field-christoffel-bounds.md): repaired step 2.2 by splitting the sum for $\Gamma^i{}_{0j}$ into $a=0$ and spatial $a=k$. The $a=0$ term contains $\partial_jg_{00}$, not only remainder derivatives; its product with $g^{i0}$ is bounded by $C\varepsilon^{5/2}/L$, while spatial remainder terms are bounded by $C\varepsilon^{3/2}/L$. Made inverse-component bounds explicit and defined the local $O(\varepsilon^a/L^b)$ convention. Qualified the remark so these are upper orders and need not be attained for every datum. Updated the proof-contract derivation.

4. [thm-gr-weak-field-scaled-trajectory-limit](../items/thm-gr-weak-field-scaled-trajectory-limit.md): specified the Euclidean inner product/norm, the coordinate-partial definition of $\nabla\psi$, the total derivative $D^2\psi=D(\nabla\psi)$, and its induced operator norm. Replaced the untyped Hessian bound and vector norms by these conventions. Rewrote the force comparison as a one-dimensional vector mean-value estimate along the segment in $K'$; this uses only the Hessian bound on that segment and avoids applying the open-set inequality on a compact set. Updated dependencies, roles and proof-contract sources.

5. [lem-gr-flat-model-connection-curvature-and-geodesics](../items/lem-gr-flat-model-connection-curvature-and-geodesics.md): specified $s_0\in I$ in the proper-time formula. Defined $t(s)=(x_0^0+sv^0)/c$, its inverse reparametrization $\gamma_t(t)=\gamma((ct-x_0^0)/v^0)$ on $t(I)$, and the Euclidean norm used for $|\mathbf w|<c$. Added the norm fact to the proof contract.

6. [def-gr-newtonian-comparison-model-and-identification](../items/def-gr-newtonian-comparison-model-and-identification.md): replaced the ill-typed identification of the gradient with the total derivative. Defined $\nabla\Phi_N$ as the vector of standard-coordinate partial derivatives and stated $D\Phi_N(q)[v]=\langle\nabla\Phi_N(q),v\rangle$. Added the gradient, total-derivative/Jacobian and Euclidean-inner-product prerequisites. The assigned consumers use this definition through the same dictionary.

7. [thm-gr-flat-wave-equation-duhamel-and-harmonic-gauge](../items/thm-gr-flat-wave-equation-duhamel-and-harmonic-gauge.md): closed the gap between Jordan content and polar surface measure. The closed unit 3-ball is Jordan measurable with content $4\pi/3$; the Jordan/Lebesgue supplier gives the same Lebesgue measure, and the polar-coordinate formula for the ball indicator yields $\sigma(S^2)=4\pi$. Added those supplier dependencies and explained the bridge in Fact F1 and the statement’s normalization citation. The remaining spherical-mean and Duhamel steps were retained.

8. [ex-gr-weak-field-poisson-quadratic-potential](../items/ex-gr-weak-field-poisson-quadratic-potential.md): separated the stationary-data remainder-domain parameter $\varepsilon_1^{\mathrm{data}}=1>\varepsilon_0=1/2$ from the distinct flat-linearized-family parameter $\delta_1=1/2$. The zero remainder is defined on the larger required interval, so the data witness and the linearized-family witness are both explicit.

9. [pthm-gr-uniform-weak-slow-correspondence](../items/pthm-gr-uniform-weak-slow-correspondence.md): removed duplicate mid-step justification groups so each complete proof step ends with its tags. Updated the Hessian supremum and discrepancy $D(S)$ to use the scaled trajectory theorem’s Euclidean/operator-norm conventions. Synchronized its proof-contract derivations.

10. [def-gr-flat-linearized-perturbation](../items/def-gr-flat-linearized-perturbation.md): added a local-flow calculation supporting the pullback interpretation of the gauge formula. The flow equation, smoothness, mixed-partial equality and covariant-tensor pullback formula give the derivative $h_{ab}-\partial_a\xi_b-\partial_b\xi_a$. The remark explicitly limits the calculation to where the local flow is defined; it does not assume completeness.

11. [ex-gr-scaled-newtonian-harmonic-trajectory](../items/ex-gr-scaled-newtonian-harmonic-trajectory.md): propagated the scaled theorem’s conventions into the worked example: unmarked vector norms are Euclidean, the gradient is the coordinate vector of partial derivatives, and $\|D^2\psi\|_{\mathrm{op}}=1$. Updated H3, facts, dependencies and affected proof-contract entries.

## Uneditable finding

[thm-gr-tt-plane-wave-solutions](../items/thm-gr-tt-plane-wave-solutions.md) is assigned to current-run batch 74 and is outside this edit authorization. Its Fact F5 and proof step 3.1 still use $\max\{1,L,L^2\}B_K(A)$ as a bound on the raw two-jet. Under the repaired clause (f), the second-derivative component is bounded by $B_K(A)/L^2$, so the asserted raw-jet bound fails for allowed $0<L<1$; step 3.1 also uses incompatible bounds $L^2\delta_*$ on the second-derivative entries. This leaves that item’s proof of its quadratic-residual clause unsupported. The exact current-run finding is in the accompanying JSON; no out-of-scope item was edited.

## Page verdicts

- gr-flat-and-newtonian-bridges (A): **No page-prose defect found.** Its flat-model, observer, linearization and conditional-bridge summaries remain supported by the corrected assigned items. No page edit was needed.
- gr-flat-and-newtonian-bridges-examples (B): **No page-prose defect found.** Its worked-example and scaled-trajectory summaries agree with the linked example, which now states its norm conventions explicitly. No B-page edit was made.

## Validation and blocker

Reflow and precheck passed for all 9 changed proof-bearing items; the 2 changed definitions had no proof body and were not applicable to precheck. The required batched proof-layout check covered 11 changed items and 47 numbered steps, with 0 defects. The batch proof-contract file was updated for changed supplier citations and proof derivations, and checked for step/source-quote alignment.

No blocker remains for batch 71. The batch 74 consumer issue is the reported out-of-scope finding. I did not audit every item in other batches beyond the reverse consumer affected by the changed public bound.

