# Batch 62 authoring notes

Run: numerical-analysis-remaining-71-2026-10-17  
Pair: reaction-diffusion-invariants-and-pattern-discretization / reaction-diffusion-invariants-and-pattern-discretization-examples  
Assigned batch level: **2**; prerequisite batches: **44**  
Scheduling input: 4ca01d7134685648f68d617646c82aa2436d3988d099925108c91ae052ddf764

## Instructions, plan, and design

Read CLAUDE.md, SCHEMA.md, WORKFLOW.md, briefs/beta-scaffold.md, the owner authoring direction, the generated Batch 62 task and dependency ordering, the current plan-spec.json, the complete PE14 design section, and the current Batch 44 and Batch 61 evidence. The owner authoring direction controls the run-wide authoring requirements.

The controlling plan-spec.json row and the task specify these A-page requirements: parabolic-finite-difference-methods, finite-volume-diffusion-and-mimetic-fluxes, and imex-and-operator-splitting-methods. The PE14 design section additionally lists parabolic-finite-element-methods (NA-36) and nonlinear-parabolic-compactness-and-monotone-evolution (PE12), and its error route calls for the NA-36 spatial estimate. This is a design-versus-plan conflict. Per the dispatch rule, the manifest keeps the three plan-spec page edges and no extra NA-36 or PE12 edge; neither shared plan was edited.

The NA-36 bodies cor-parabolic-semidiscrete-spatial-error-rates and thm-parabolic-semidiscrete-ritz-error-splitting-and-energy-bound were inspected in full. They concern conforming finite elements and a Ritz map for a fixed elliptic form and use the stated Ritz projection, elliptic/adjoint regularity, and Countable Choice hypotheses. They do not supply a spatial error estimate for TPFA or the periodic centered difference stencil. The local periodic proof therefore proves its own second-order centered-stencil residual and commutator bounds; the bounded-box TPFA error result is proved by even reflection to that periodic branch. These results do not claim accuracy on general PE13 meshes.

The actual T04 items def-exact-split-flows-lie-strang-and-bracket, lem-lie-strang-local-error-expansions, and thm-lie-strang-global-orders-and-subflow-error were read with their proofs. T04's global error result is finite-dimensional and requires exact subflows, a common compact tube, smooth vector fields, and one-step stability; it does not supply a mesh-uniform PDE estimate or positivity. The local error proof establishes the required uniform bounds directly instead of applying T04 with constants that may depend on the grid.

## Supplier inspection and cross-batch status

The current Batch 44 bodies for def-fv-admissible-cell-face-mesh, def-tpfa-harmonic-face-scheme, and thm-tpfa-green-coercivity-maximum-principle were inspected, including complete definitions/statements and proofs. The Batch 62 no-flux TPFA definition uses the first two interfaces under their actual finite-mesh, positive-cell-volume, orthogonality, and positive-transmissibility hypotheses. It does not import the Dirichlet maximum-principle theorem for a no-flux problem. The no-flux/periodic semigroup theorem proves the required nonnegative row-stochastic exponential and weighted-mass identity locally. The two item edges are recorded in batch-62.cross-batch-dependencies.json. “Verified” there means the current supplier body and hypotheses were inspected; it does not assert independent acceptance.

Batch 40's current graph-diffusion items and thm-weighted-network-semigroup-and-euler-positivity were inspected as a possible reuse route. They are not a declared Batch 62 dependency, so the batch adds no Batch 40 edge or schedule change. The TPFA/periodic matrix properties used here are proved locally for the two declared discretizations.

The run status was recomputed from .autopilot at the start of the task: it remained at 1-scaffold, the owner hold was still present, and no writer was in flight. No autopilot state or verdict was edited.

## Inventory and dependency levels

The inventory contains 20 A items and 4 B items, below the 100-item A-page cap. Levels were recomputed from direct dependencies, counting current in-run Batch 44 suppliers; published suppliers do not add an in-run level. Batch 44's mesh definition is level 0 and its TPFA definition level 1.

| Item level | Items |
|---:|---|
| 0 | def-reaction-vector-field-and-quasipositivity; def-periodic-reaction-diffusion-grid; cex-consistent-mass-p1-fem-diffusion-fails-positivity |
| 1 | def-reaction-invariant-rectangle; def-stoichiometric-mass-invariant |
| 2 | def-semilinear-reaction-diffusion-system; def-fv-tpfa-no-flux-diffusion-specialization; thm-quasipositive-reaction-flow-preserves-invariant-rectangle-and-mass; lem-forward-euler-reaction-step-preserves-invariant-rectangle-and-mass |
| 3 | def-cell-centered-rectangular-no-flux-tpfa-grid; thm-reaction-diffusion-continuous-mass-balance; lem-periodic-fv-grid-spatial-consistency; lem-periodic-fv-grid-reaction-diffusion-commutator-bound; prop-two-species-continuous-and-discrete-turing-criterion; thm-fv-and-periodic-diffusion-flow-preserves-rectangles-and-mass |
| 4 | alg-exact-lie-reaction-diffusion-step; alg-euler-reaction-lie-diffusion-step; ex-brusselator-continuous-turing-instability |
| 5 | thm-exact-lie-step-preserves-invariant-rectangle-and-mass; thm-euler-lie-step-preserves-invariant-rectangle-and-mass; ex-three-cell-grid-suppresses-continuous-turing-mode |
| 6 | thm-periodic-reaction-diffusion-lie-error-estimate; ex-fisher-kpp-forward-reaction-euler-bound |
| 7 | thm-cell-centered-no-flux-reaction-diffusion-lie-error |

The A-page sequence defines reaction fields, rectangles, mass functionals, both finite grids, ODE and Euler invariance, continuous mass balance, spatial consistency and commutator estimates, dispersion, diffusion semigroup invariants, split algorithms, and their preservation/error theorems. The B page contains the FEM positivity counterexample, the continuous and discrete Brusselator mode calculations, and the Fisher–KPP step-bound example.

## Scope, caveats, and owner escalation

The page defines the continuous semilinear equation on periodic domains and bounded polyhedral domains. Continuous mass balance is proved choice-free on boxes/tori and on a separate bounded piecewise-C1 branch under the explicitly declared AC_omega hypothesis and the published divergence theorem. The diffusion matrix is constant diagonal; no cross-diffusion theorem is claimed.

The preservation result covers no-flux TPFA on the PE13 admissible mesh and the periodic centered grid. The convergence results are for (i) smooth periodic solutions on the centered rectangular grid and (ii) smooth solutions on rectangular Cartesian no-flux TPFA grids whose even reflection is C1_t C4_x. Their constants are grid-independent. The three-cell example proves only linear mode stability/instability. The consistent-mass P1 counterexample is not a claim about mass-lumped P1 methods.

A broader smooth-solution error estimate for general refining PE13 polyhedral TPFA families remains an owner-level placement question. Positivity and mass conservation hold on those meshes, but this batch does not prove family-wide spatial consistency at boundaries or a mesh-uniform commutator/residual estimate there. If the design's broad finite-time error claim is intended for arbitrary PE13 mesh families, a candidate supplier is thm-tpfa-reaction-diffusion-mesh-uniform-error, placed on this A page after stating a uniformly regular refining mesh family, homogeneous boundary fluxes, a proven smooth-solution residual bound, and the required mesh-uniform semigroup/commutator hypotheses. No general-mesh rate is silently inferred from the rectangular-grid proofs.

The design's NA-36 route is separately unresolved as a design/plan conflict: its current FE/Ritz suppliers do not apply to the selected TPFA/centered-difference branches, and the controlling plan-spec omits that page edge. Owner reconciliation is needed if a distinct conforming-FE error branch is still required. The current A page has room for such a branch; no claim was weakened to fit.

## Sources and retrieval

Four complete independent treatments were inspected: Hundsdorfer's 93-page lecture notes (§4, printed pp. 25–29; §6, pp. 37–41; §9, pp. 60–64); Doria's 190-page lecture notes (§§10.6–10.8, PDF pp. 149–153); Droniou's 38-page review (§1.3 and §§2–2.2, PDF pp. 6–10); and the full updated Eymard–Gallouët–Herbin finite-volume text (Chapter 9 §§9.2–9.3, PDF pp. 38–47). URLs, locators, supported items, and dispositions for all 15 harvested results are in batch-62.coverage.json.

source-fetch-check --stamp verified all four source URLs and recorded four fetch stamps. There were no retrieval failures, alternative searches, source drops, or recovery retries; tools/source-resolution.mjs was not edited. The local mathematical arguments do not rely on any uninspected source excerpt.

## Scoped checks

Results are recorded after the final authoring pass below. These checks are authoring evidence only and do not constitute independent approval.


| Scoped check | Final result |
|---|---|
| tools/author-check.mts for run/batch 62 | Pass; receipt: research/numerical-analysis-remaining-71-2026-10-17-author-check-62.json. It records passing precheck, renderer, content-policy, and strict contracts. |
| node tools/proof-layout.mjs on the 15 changed proof-bearing items | Pass: 15 items, 51 steps, 0 defects. |
| Scoped precheck on those 15 proof-bearing items | Pass: 15 checked, 0 failing. |
| Strict proof contracts | Pass: 15/15 contracts, 61 exact supplier citations, 51 mapped steps, 0 errors/warnings. |
| Scoped rendercheck | Pass: all 24 item files and both page carriers; real KaTeX and renderer YAML parsing succeeded. |
| Scoped content-policy | Pass: 24 items, 0 errors/warnings. |
| Focused depcheck | Pass: 24 assigned items, 1,060-item dependency closure and 290-page prerequisite closure; 0 errors/warnings. |
| manifest-deps on the Batch 62 manifest | Pass: 24 items, 0 normalized, 0 errors. |
| Scoped inventory/frontmatter/level recomputation | Pass: all 24 manifest dependencies match item frontmatter, all dependency levels match the in-run Batch 44/62 graph, and both page carriers match manifest order. Item levels range from 0 to 7. |
| coverage-checklist with Batch 62 coverage | Pass: 1 A page, 15 harvested results, 0 errors/warnings. |
| source-fetch-check on the stamped Batch 62 coverage | Pass: 4/4 full-text sources fetch-verified; 0 drops. |
| Batch 62 Step 1 readiness records | Pass for this pair: 24/24 current records are ready and hash-current, with examined direct dependencies recorded. No owner override was used. |
| Run-wide item-dependency-levels check | Pass: 0 dependency-level errors in the current run-wide inventory; no Batch 62 item errors. |

The scoped recomputation also verifies all Batch 62 frontmatter levels, manifest dependencies, and A/B carrier inventories against the current Batch 44/62 graph.

The run-wide Step 1 ledger remains open outside Batch 62: the current full-run check reports 1,391 items, 1,041 ready, and outstanding records/escalations elsewhere. A focused hash check confirms all 24 Batch 62 records are closed/current.

Readiness records and this batch note describe authoring state only; independent review and owner reconciliation of the broad-mesh error route remain outstanding.


## Owner post-authoring interface disposition — 2026-10-17T13:43:56.021262+00:00

Historical author notes/results above remain unchanged. Root read the complete ROOT-reaction-phase-scope-reconciliation-cycle1 REPORT and exact proposal. The selected FV mathematical scope already includes full admissible-mesh invariants and nonempty all-dimension periodic/reflected-rectangular smooth-error branches with their exact hypotheses. No additional mandatory item/pair or conforming-FE branch follows from the controlling OR scope. Root corrected only the incompatible NA36/FV proof-route sentences and annotated context in the controlling spatial design and four plan-spec descriptions; actual item Statements/Definitions/inventories remain unchanged. Preimages and exact disposition are in owner-planning-integration/reaction-phase-owner-interface-reconciliation.json. This is planning reconciliation, not independent mathematical acceptance, source-reading reassignment or gate coverage. Native reviews and gates remain required.
