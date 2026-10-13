# Step 3a reader report — batch 23

Run: `physics-cm-qm-gr-79-2026-10-11`  
Role: reader  
Scope: batch 23, CM07 stationary action and examples

## Opened inventory

Pages reviewed:

- `cm07-stationary-action-and-lagrangian-dynamics` — A page.
- `cm07-stationary-action-and-lagrangian-dynamics-examples` — B/examples page.

Assigned items reviewed:

- A page: `def-cm07-action-and-mechanical-lagrangian`, `pthm-cm07-first-variation-and-euler-lagrange-expression`, `pthm-cm07-euler-lagrange-equations`, `pthm-cm07-newton-equivalence`, `pthm-cm07-coordinate-covariance-of-the-equations`, `pthm-cm07-boundary-terms-and-gauge`, `def-cm07-generalized-coordinates-and-forces`, `lem-cm07-immersion-euler-lagrange-transport`, `pthm-cm07-lagrangian-reduction-of-ideal-constraints`, and `rem-cm07-scope-and-singular-warnings`.
- B page: `ex-cm07-free-particle-straight-lines`, `ex-cm07-oscillator-stationary-saddle-check`, `ex-cm07-polar-coordinate-kinetic-metric-check`, `ex-cm07-total-derivative-gauge-check`, `ex-cm07-nonholonomic-unrestricted-action-fails`, and `ex-cm07-pendulum-constraint-elimination-check`.

Supplier items opened to check the model and proof uses include `post-cm01-spacetime`, `post-cm01-frames`, `post-cm01-worldlines`, `post-cm02-force-superposition`, `def-cm01-configuration`, `def-cm01-velocity-acceleration`, `def-cm01-units`, `def-cm03-potential-and-mechanical-energy`, `def-cm02-newtonian-flow`, `pthm-cm02-ivp`, `pthm-cm02-continuation`, `def-cm-time-dependent-lagrangian-and-action`, `lem-cm-first-variation-formula`, `thm-cm-stationarity-iff-euler-lagrange`, `def-cm06-holonomic-constraint-model`, `post-cm06-ideal-reaction-law`, `lem-cm-constraint-multipliers-and-accelerations`, `prop-cm-coordinate-covariance-of-the-euler-lagrange-expression`, `prop-cm-lagrangian-boundary-terms-and-scaling`, `def-cm-nonholonomic-velocity-constraint-law`, `cex-cm-dalembert-and-vakonomic-evolutions-differ`, `def-cm-legendre-map-in-a-time-dependent-chart`, `prop-cm-mechanical-chart-lagrangian-is-hyperregular`, and `rem-cm-scope-of-stationarity`.

Mathematical supplier statements used in the checks include the total derivative chain rule, equality of mixed partials, closure of (C^k) maps, Euclidean inverse function and higher-regularity theorems, matrix rank-nullity, Heine–Borel, compact continuous images, the extreme value theorem, the fundamental theorem of calculus, linearity and monotonicity of the integral, continuous-implies-integrable, the continuous zero-integral lemma, vector-valued derivatives and integrals, Euclidean inner product and norm facts, interval conventions, trigonometric identities and periods, positive-base real-power differentiation, square-root existence, and the Archimedean property. Their exact statements were checked where used in the local arguments.

## Repairs and evidence

- `pthm-cm07-euler-lagrange-equations`: narrowed the title to the actual conclusion. The statement permits a residual force (d), and its proof identifies (\mathsf Mx''=-\nabla_xU) with the potential part only; it does not identify that equation with the full model equation when (d\ne0).
- `pthm-cm07-coordinate-covariance-of-the-equations`: narrowed the title to the potential-part equation. Renamed the clause-2 local open coordinate set from (U) to (W), since (U) already denotes the potential. The statement, facts, proof and proof-contract derivation now use the same name; the mathematical claim is unchanged.
- `ex-cm07-nonholonomic-unrestricted-action-fails`: replaced the conclusion about “minimizing use of the substituted or augmented action” with the conclusion actually proved: this d'Alembert motion is not a vakonomic stationary-action motion for the stated data. The local definitions specify the augmented-action vakonomic prescription; the proof does not define or analyze a separate minimization problem or prove equivalence with every substituted-action formulation. The proof now derives the contradiction on any nondegenerate interval in the vakonomic definition. Its contract records the updated steps and the calculus suppliers used by the current Facts.
- `ex-cm07-oscillator-stationary-saddle-check`: stated (T>0) explicitly, since ([0,T]), the frequency ratios and the integral calculations require a positive duration. Declared the fixed unit vector (e) dimensionless and added ([e]=1) to the unit declaration.

None of the changed item carriers had a `verification.judge` record to remove. `reflow.mts` and `precheck.mts` completed on all four changed items. On the nonholonomic example, the first post-repair precheck requested the canonical depth numbering; that form was adopted, the proof contract step map was updated, and the final precheck passed. The final batched proof-layout check reported 4 items, 19 steps and 0 defects.

## Finding outside the edit scope

`pthm-cm02-ivp` (batch 18), Proof step 2.1, omits the two smallness conditions needed by its cited quantitative Picard–Lindelöf clause [L3]: (hM\le r) and (\Lambda h<1). The step first chooses a compact cylinder and obtains finite bounds, then applies [L3] without explicitly shrinking the time width to meet those inequalities. The omission is nonfatal: after choosing one larger compact cylinder and bounds (M_0,\Lambda_0), take a smaller width (h\le h_0) with (hM_0\le r) and (\Lambda_0h<1); the same bounds hold on the smaller cylinder. The assigned consumer is `pthm-cm07-newton-equivalence`, whose dependency list reaches this supplier directly. It is recorded as a nonfatal in-run dependency finding with the current source hash in the findings JSON.

## Page verdicts

- `cm07-stationary-action-and-lagrangian-dynamics`: reviewed. The variational definitions and conditional equation identities are supported by the cited chart and first-variation results; the ideal-constraint reduction proof correctly uses the rank condition and the adopted ideal-reaction law. The repaired titles now state the potential-part scope explicitly. The nonfatal batch-18 proof omission above reaches `pthm-cm07-newton-equivalence`.
- `cm07-stationary-action-and-lagrangian-dynamics-examples`: reviewed. The examples' exact calculations match their displayed force models, constraints, endpoint conditions and units. The nonholonomic conclusion is now limited to the vakonomic stationary-action prescription actually defined and checked. Its page summary remains consistent with the demonstrated model-specific inequivalence.

## Coverage note and blocker

No blocker remains for batch 23. I initially opened `def-cm07-action-and-mechanical-lagrangian` and `rem-cm07-scope-and-singular-warnings` before their suppliers; I opened and checked their supplier statements before evaluating their downstream arguments. I did not re-audit every transitive proof in the imported mathematical library. The direct Tong PDF URL could not be retrieved by the web reader in this session; its cited text was not used as a proof premise, and the reviewed arguments rely on the local supplier statements and explicit computations. The run notes and proof contracts were treated as navigation and evidence, not as verdicts.
