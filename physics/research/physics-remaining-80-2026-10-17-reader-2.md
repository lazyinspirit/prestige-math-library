# Step 3a reader report — batch 2

Run: `physics-remaining-80-2026-10-17`  
Role: reader  
Batch: `2`

## Opened assigned inventory

Pages:

- A page [emg-mg02](../library/einstein-maxwell-models-mathematics/emg-mg02.md), including its scope, required-page list, item list, and chart-convention diagram.
- B page [emg-mg02-examples](../library/einstein-maxwell-models-mathematics/emg-mg02-examples.md), including its scope, placement, and conditional wording.

Assigned items were read in dependency order:

1. [def-emg-finite-real-supremum-domain](../items/def-emg-finite-real-supremum-domain.md)
2. [def-emg-real-metric-axiom-convention](../items/def-emg-real-metric-axiom-convention.md)
3. [lem-emg-metric-axioms-imply-nonnegativity](../items/lem-emg-metric-axioms-imply-nonnegativity.md)
4. [def-emg-explicit-power-regimes](../items/def-emg-explicit-power-regimes.md)
5. [lem-emg-positive-square-root-smoothness](../items/lem-emg-positive-square-root-smoothness.md)
6. [lem-emg-sequence-limit-criterion-with-choice](../items/lem-emg-sequence-limit-criterion-with-choice.md)
7. [def-emg-boundaryless-completeness-domain](../items/def-emg-boundaryless-completeness-domain.md)
8. [def-emg-set-size-and-class-schema](../items/def-emg-set-size-and-class-schema.md)
9. [def-emg-extended-pointwise-product](../items/def-emg-extended-pointwise-product.md)
10. [def-emg-lp-class-and-representative](../items/def-emg-lp-class-and-representative.md)
11. [def-emg-local-potentials-and-circle-data](../items/def-emg-local-potentials-and-circle-data.md)
12. [lem-emg-local-potential-construction](../items/lem-emg-local-potential-construction.md)
13. [lem-emg-circle-connection-gluing](../items/lem-emg-circle-connection-gluing.md)
14. [lem-emg-sphere-flux-holonomy](../items/lem-emg-sphere-flux-holonomy.md)
15. [ex-emgmath-monopole-patch-flux](../items/ex-emgmath-monopole-patch-flux.md)

The current batch-2 proof contract and empty cross-batch dependency file were also inspected. The contract was treated as evidence and updated only for the repair recorded below.

## Dependency and source review

I checked the exact dependency statements used in the assigned arguments, including the published Lorentzian-form and exterior-calculus suppliers, principal-bundle and de Rham definitions, root and smooth inverse-function results, real-limit and countable-choice definitions, Riemannian completeness terminology, measure and Lp definitions, and the integration results used by the flux proof.

For the sphere-flux argument, I read the published [finite-parametrization integration proposition](../items/prop-integration-of-top-forms-by-finite-parametrizations.md), its Stokes and smooth-singular-simplex suppliers, and the relevant finite-chart localization and additivity dependencies. The reduction to a chart-supported form in the published proposition is supplied through the declared dependency closure, in particular [lem-finite-chart-localization-for-compactly-supported-forms-on-manifolds-with-boundary](../items/lem-finite-chart-localization-for-compactly-supported-forms-on-manifolds-with-boundary.md). No defect remains in that prerequisite chain.

I checked the cited source sections used for the circle-connection discussion:

- David Tong, *Gauge Theory*, §§1.1.1–1.1.2, https://davidtong.org/pdfs/teaching/gauge-theory/gauge.pdf. Section 1.1.1 gives the quantum charged-particle phase restriction; §1.1.2 gives the north/south monopole potentials and transition discussion. The assigned sphere example states that its normalization condition is geometric and does not import Tong’s quantum assumption.
- Scott Morrison, *Connections on Principal Fibre Bundles*, §§5.1 and 7.1–7.3, https://tqft.net/papers/ConnectionsAndBundles.pdf. These sections discuss horizontal connections, connection forms, local representatives, and curvature.
- John M. Lee, *Introduction to Smooth Manifolds*, Proposition 16.8 and proof, printed pp. 408–409 (PDF pp. 425–426), https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf. The source gives the finite parametrization integration formula used for the compact sphere calculation.
- Sheldon Axler, *Measure, Integration & Real Analysis*, Definition 7.17 and Theorem 7.18, PDF pp. 216–217, https://measure.axler.net/MIRA.pdf. These support the quotient-norm context for the Lp definition.

## Review and edit evidence

In `lem-emg-sphere-flux-holonomy`, the original step 1.1 computed the sphere flux in spherical coordinates without invoking the listed finite-parametrization integration theorem. I repaired that step by specifying the open rectangle parameterization, verifying that it is an orientation-preserving diffeomorphism onto the sphere minus the poles and one meridian, and noting its smooth extension and image-closure coverage. The step now explicitly applies [F15]. The [batch-2 proof contract](physics-remaining-80-2026-10-17-batch-2.proof-contracts.json) records [F15] as used in steps 1.1 and 2.1 and includes the repaired derivation.

After the final item edit:

- Reflow: unchanged.
- Precheck: pass for `items/lem-emg-sphere-flux-holonomy.md`.
- Proof layout: 1 item, 8 steps, 0 defects.

No stale `verification.judge` record was present on the repaired item.

## Page verdicts

- `emg-mg02`: **pass**. The page summary matches the assigned definitions and results. The one proof omission found in the flux item was repaired. No unresolved prerequisite defect was found.
- `emg-mg02-examples`: **pass**. The page summary and conditional example are faithful to the sphere-flux statement. The page expressly disclaims empirical monopole observations and quantum inference.

## Uneditable defects and blockers

None found. No blocker remains.

## Coverage note

All two assigned pages and all 15 assigned items were reviewed, with direct prerequisite statements checked where needed to trace the claims. The relevant full source sections for the sphere integration and circle-connection claims were inspected. Imported mathematical suppliers remained read-only, and the directly referenced imported snapshots matched `research/math-imports.json` at handoff. I did not independently re-audit unrelated transitive proofs elsewhere in the published mathematics library. No unresolved limitation affects the batch-2 conclusions.
