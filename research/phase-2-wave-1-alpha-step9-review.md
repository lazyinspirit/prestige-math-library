# Step 9 scope-denial delta review — phase-2-wave-1

Reviewed the six pending delta rows, all owned by group c / batch 11. All six stand. The other 145 decisions retain their existing evidence; this is a delta review, not a new whole-run mathematical certification.

The active state identifies phase-2-wave-1 in .autopilot/phase-2-wave-1/state.json. Read CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md and briefs/tasks/frontier-dependency-ledger.md. Refreshed and read the unified frontier ledger before scope review.

## Completed scope decisions

### 2843d624517b7dd066c199559c023fceb2f4480f747effc1ccd4b1b1d66e52c1

**16.38 and Exercise 16.39 — stands.** Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf

Step 9: Lee pp.430–431, Proposition 16.38 and Exercise 16.39, asserts general pullback smoothness in clause (c); the map x -> x^2 pulls |dy| back to 2|x||dx|, not smooth at zero. The published prop-density-pullback-under-local-diffeomorphisms Statement and Proof 1.1–2.1 explicitly restrict to local diffeomorphisms and give this counterexample. The current Borel density definition uses only invertible chart transitions; lem-measurable-density-chart-integrals-agree-on-overlaps 1.1–2.1 uses a smooth diffeomorphism between open interiors. DG-17M in research/plan-differential-geometry-track.md requires no rank-dropping pullback theorem. Out-of-scope stands; destination null is appropriate, and no general smoothness assertion is imported.

### 29e2657e4ad0cb2932dcbca0306c1d7373c2d9368e49e411dc20aa056ed5f7e4

**Exercises 16.46–16.47 — stands.** Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf

Step 9: Lee p.433 Exercises 16.46–16.47 concern oriented Riemannian volume compatibility and local-isometry invariance. DG-18 riemannian-metrics-length-distance-and-volume in the current plan explicitly develops metrics/isometries and volume density/forms (items 1–7 and 31–36), downstream of DG-17M. The current ex-density-measure-on-a-nonorientable-manifold 1.1–3.1 calculates the seam matrix diag(1,(-1)^k), orthonormal normalization from det(A)^2=1, and mass 2 from the chart rectangle plus null seam. It does not invoke either general exercise. All other current batch-11 items construct ordinary density measures or use topology-compatible balls, without a general Riemannian metric theorem. Out-of-scope stands; the later page is a scope boundary, not an added dependency or a formal deferred destination.

### 3512473357fad3c5b1bc1c882bae8977b7a88cd1a5d4d1430add5209375667cb

**Exercise 16.44 — stands.** Source: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf

Step 9: Lee p.432 Exercise 16.44 asks for the density analogue of the finite-parametrization formula. Published thm-density-integration-is-defined-without-an-orientation explicitly includes that formula and proves it in 3.3, adapting prop-integration-of-top-forms-by-finite-parametrizations with absolute Jacobians, null boundary images and compact-interior exhaustion. Its hypotheses retain compact support and finitely many bounded Jordan parametrization domains. Current countable gluing instead uses nonnegative chart measures, countable summation and the Borel overlap lemma; thm-density-measure-integration-agrees-with-smooth-density-integration 4.1 compares compact smooth integrals by finite partition localization and the Borel Darboux lemma. No finite-parametrization theorem is silently extended to countable Borel integration. DG-14 is published and earlier in the current DG-17M plan closure. Out-of-scope stands; no destination is required for an already supplied result.

### acc9cd12f23b92d84e492c7f5ff0fafec41bc060df13204cee257c6d69d85f1d

**§11.4 fractional densities and intrinsic Lp duality — stands.** Source: https://djvu.online/file/NPF4BEtSuqdFA

Step 9: Folland §11.4 p.363 introduces fractional density transition powers and intrinsic Lp duality. The current def-borel-measurable-nonnegative-density-on-a-manifold uses the first power of the absolute Jacobian, with pointwise [0,infinity] coefficients. thm-density-measure-integration-agrees-with-smooth-density-integration proves nonnegative scalar integration, then ordinary real/complex L1 integration relative to the fixed measure, and completed Borel representatives; it asserts no intrinsic Lp duality or fractional bundle. All 18 batch-11 items and both current pages were read against DG-17M in the plan. This additional functional analysis is not a retained premise. Out-of-scope stands, with null destination.

### e11adb9fede9ea8c4a7a64cd9f7c8fb387a0ee47eec073cfe85cda39f021e079

**§11.4 Haar application — stands.** Source: https://djvu.online/file/NPF4BEtSuqdFA

Step 9: Folland §11.4 p.362 constructs left Haar measure by translating an identity inner product to a left-invariant Riemannian metric. The current batch-11 construction assumes only a supplied manifold and density, and obtains Radon regularity from compact-finite chart estimates and the second-countable LCH regularity theorem (thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure 1.1–3.1). No group operation, left translation or invariance is asserted by the 18 current items or their pages. The current DG plan places Lie-group Haar applications at DG-33; DG-17M is the ordinary density-measure bridge. Out-of-scope stands; no formal deferral destination or new prerequisite is needed.

### e765cb777fe7c795d0c4c1469090362b238c2cae318d5fb312ff911f8f8a5243

**§11.4 Hausdorff normalization — stands.** Source: https://djvu.online/file/NPF4BEtSuqdFA

Step 9: Folland §11.4 p.362 relates induced Riemannian volume to Hausdorff measure via Theorem 11.25 and a normalization factor. Current DG-17M constructs its measure from coordinate Lebesgue integrals and absolute-Jacobian overlap substitution; neither the A-page statements/proofs nor the seven B-page calculations identify it with Hausdorff measure. The flat strip example computes rectangle area directly, not via an area formula. The current DG plan separates geometric measure theory from this track; ordinary Borel Radon volume is the binding DG-17M contract. Out-of-scope stands with null destination; no required normalization premise is lost.

## Frontier reconciliation

Read the current full supplier and consumer proofs for the two recorded batch-10 → batch-11 edges: the Borel change-of-variables lemma supplies the overlap lemma, and the Euclidean surface-measure page supplies the measurable-density page requirement. The overlap application has m=n>=1, open interiors, an invertible smooth transition, and nonnegative Borel h equal to the target coefficient times the Borel-set indicator. Both proofs assume AC_omega and retain 0 times infinity = 0. The supplier permits infinite integrals without subtraction; the consumer restores null boundary faces and treats dimension zero and empty sets separately. The existing review locators remain accurate. The supplier proof uses the compact-support Riemann/Darboux bridge and Radon uniqueness, not the declined Hausdorff, Haar, fractional-density, or general pullback assertions.

All 15 batch inputs exist. Two declared edges have verified reviews; no open findings, orphaned reviews, missing batch inputs or removed-but-persisting edges were present. The existing owning-input evidence remains accurate, so no input edit is necessary. No new implicit same-frontier use was found in the scoped batch-11 reading. This check does not replace Step-6 edge verdicts or Step-9 certification.

## Changes, ledger, and remaining work

Changed mathematical item IDs: **[]**. No scope additions or overturns, content repairs, manifests, contracts, risks, splice or impact changes are needed. The only authored decision changes are the six rows above in research/phase-2-wave-1-alpha-c-scope-decisions.json.

research/phase-2-wave-1-step9-mathematical-review.task.md is absent. No extra supervising mathematical review or associated blocking obligation applies. Read all 72 defect-ledger rows for this run by disposition: none is open, so there is no row to close/defer and no ledger append or render is needed. Existing independent evidence is preserved.

Focused validation completed:

- `node tools/scope-decisions.mjs refresh --run phase-2-wave-1 --all` — exit 0; all seven groups have zero pending decisions.
- `node tools/scope-decisions.mjs check --run phase-2-wave-1 --all` — exit 0; 151 current declines, zero errors.
- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-wave-1 --require-reviewed` — exit 0; refreshed and deduplicated, complete batch and edge review inputs.

No mathematical files changed, so proof/render checks were not rerun and no new mathematical gate pass is claimed. The original six-row delta remains the engine's input record; the owning scope decisions now close those rows. No unresolved blocker was found within this dispatch. Next action belongs to the engine: render/freeze the Step-9 register and perform its required recertification and stage transitions.
