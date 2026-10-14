# Batch 24 authoring notes — Nonregular and Misspecified Limits

Run: mathematical-statistics-foundations-37  
Pair: boundary-and-misspecified-asymptotics / boundary-and-misspecified-asymptotics-examples  
Role: beta, batch 24  
Run batch level: 8; assigned page prerequisites: batches 21, 22, 23.

## Inventory and dependency levels

The controlling MSF-17 design specifies four A-page results and three B-page examples. The scaffold adds two local A-page prerequisites before their consumers: def-fisher-information-metric-distance and lem-quadratic-likelihood-optimization-is-fisher-distance. The final inventory is six A items and three B items. The new local definitions/results have explicit dependencies, complete definitions/proofs, and remain below the 100-item page cap.

Item levels were computed from all current nonempty manifests in this run after adding each logical dependency, including cross-pair in-run suppliers. The computed levels and manifest labels are:

| Item | Level |
|---|---:|
| def-pseudo-true-parameter-under-misspecification | 0 |
| thm-m-estimator-sandwich-limit-under-misspecification | 5 |
| def-fisher-information-metric-distance | 0 |
| lem-quadratic-likelihood-optimization-is-fisher-distance | 1 |
| thm-likelihood-ratio-limit-for-local-cones-in-a-qmd-model | 3 |
| cex-uniform-maximum-has-n-rate-not-root-n | 3 |
| ex-uniform-endpoint-mle | 4 |
| ex-one-sided-normal-likelihood-ratio-at-boundary | 4 |
| ex-normal-location-under-wrong-variance | 6 |

The misspecified theorem depends on the actual batch 20 def-m-estimator definition (level 4) as well as the batch 13 thm-vector-slutsky result (level 2). The cone theorem and Uniform counterexample depend on batch 22 def-qmd-path (level 2). The one-sided example depends on the batch 10 def-chi-square-law definition (level 0). The exact direct dependencies are in the page manifest and each carrier frontmatter.

The dispatched scheduling-input hash is dd05d82b8e5bf49626aa96d504293f4afc76b61792a92c3d8eaa81be00ba597c; the current owner-managed run dependency artifact reports input_sha256 6e1c86944ecd4ef6db1a3278746ff762bf62c176309acd6c8da4e73df54b6f80. The pair-level batch graph still records batch 24 at level 8 with prerequisites 21, 22, and 23. This hash discrepancy is left for the owner to reconcile; the shared run-wide dependency artifact was not edited.

## Design and plan comparison

The current plan row MSF-17 and plan-spec.json agree on page IDs, category, orders 1890/1891, titles, companion IDs, and page-level prerequisites. The plan-spec.json item arrays are empty placeholders; the full plan row controls the four A results and three B examples. The two added A items are local prerequisites required to give the Fisher distance and quadratic optimization facts complete definitions/proofs before use.

The older foundations-03 dossier at research/statistics-scaffolds-2026-10-11/foundations/foundations-03/dossier.md uses stale IDs and scope: thm-pseudo-true-mle-sandwich-asymptotics, ex-normal-location-with-wrong-known-variance, def-quadratic-mean-differentiability-score-and-information, and thm-qmd-implies-lan-for-iid-local-alternatives. The controlling plan uses thm-m-estimator-sandwich-limit-under-misspecification, ex-normal-location-under-wrong-variance, def-qmd-path, and thm-qmd-implies-lan-for-iid. The current batch uses the controlling IDs; no item was renamed to match the stale dossier.

## Supplier audit and unresolved page prerequisite

The batch 21 delta-method A page has current carriers for thm-first-and-second-order-delta-method-for-random-vectors and thm-z-estimator-asymptotic-linearity-and-normality; their statements and complete proofs were read. The former requires an explicit weak limit and Peano expansions. The latter assumes consistency, a root-rate residual, a nonsingular derivative, and local stochastic equicontinuity. The misspecified theorem does not replace those hypotheses with an unproved generic delta/Z-estimator citation.

The batch 22 likelihood A page carriers are present. The complete def-qmd-path body was read: it defines the common-dominator square-root-density L2 remainder and explicitly allows singular information while disclaiming pointwise density differentiability and local mutual absolute continuity. The batch 24 cone theorem assumes positive-definite information and a separate uniform local quadratic likelihood expansion with tight maximizers; it does not infer either property from QMD alone. The regular interior MLE/Wald assumptions were checked against the boundary example and are not used as a boundary theorem.

The batch 23 LAN A manifest currently lacks a body for exactly thm-convolution-bound-for-regular-estimators. Its manifest declares def-lan-experiment, def-regular-estimator-under-local-alternatives, thm-le-cam-third-lemma, thm-prokhorov-tightness-theorem-on-polish-spaces, def-multivariate-normal-law, lem-characteristic-function-of-a-multivariate-normal-law, thm-uniqueness-of-a-law-from-its-characteristic-function, and AC as its supplier interface. The proposed completion belongs on its already planned supplier page local-asymptotic-normality-contiguity-and-efficiency (order 1888), with that declared dependency set. The actual thm-qmd-implies-lan-for-iid body is now present and was read; it proves LAN for fixed local sequences through a mean-one likelihood-ratio proxy and does not claim uniformity over bounded local directions. No batch 24 proof uses the missing convolution result or the QMD-to-LAN theorem to assert a uniform likelihood expansion. The page-level requirement for the full LAN page remains unresolved for owner reconciliation; the affected item-level claim is page prerequisite closure, not a batch 24 proof step.

Other actual direct/transitive suppliers read include batch 20 def-m-estimator, batch 13 def-op-and-little-op-stochastic-bounds, thm-vector-stochastic-order-calculus, and thm-vector-slutsky, batch 10 def-chi-square-law, and the published probability, expectation, moment, CLT, convergence, portmanteau, continuous-mapping, and scalar Slutsky carriers. Each batch 24 fact has an exact supplier excerpt in the proof-contract file. No missing supplier body is represented by an invented quotation.

## Mathematical and source notes

- The pseudo-true definition maximizes the expectation under the actual law; it does not silently assert existence, uniqueness, separation, or interiority. The misspecified theorem states those as hypotheses and assumes zero expected score and the approximate score root instead of deriving them by unjustified differentiation of the population criterion.
- The sandwich proof obtains consistency from the criterion gap, uniform law, and separation; uses the assumed uniform Hessian law along the random segment; proves inverse-Hessian convergence by determinant/adjugate continuity; and applies the multivariate IID CLT and vector Slutsky. It uses AC only through the multivariate CLT.
- The cone proof compares truncated quadratic suprema directly under the stated local set convergence. The truncation argument allows nonconic finite-n sets and uses the limiting cone maximizer’s coercive bound; it does not assume that intersections with a fixed-radius ball automatically have Hausdorff convergence. The final factor-of-two distance identity is stated in the proof.
- The Uniform counterexample proves the exact n-scaled exponential limit and the failed QMD remainder on the newly gained support. The endpoint example notes that the all-zero sample (a null event) has no likelihood maximizer; its fallback is only a measurable extension.
- The one-sided normal example verifies QMD from the square-root-density Taylor remainder, verifies the uniform local expansion and tight maximizers, computes the exact LR statistic, and derives the 1/2 chi-square-zero plus 1/2 chi-square-one weights. The wrong-variance example computes the Gaussian moments and verifies the uniform criterion, Hessian, and score-root conditions before applying the sandwich theorem.
- Source harvest is recorded for both pages in the coverage file. It uses Bartlett Lectures 15, 22, and 26; Chen’s STAT 581 chapter; Self–Liang’s complete paper; and van der Vaart’s complete §6.5/Theorem 6.19 proof. The two pages each have independent lecture-note treatments and an additional independent paper/treatment for the cone result. A prior browser open of van der Vaart’s PDF timed out; an alternate full-text search was attempted, then the full PDF was retrieved and inspected locally, and its canonical URL later passed the direct source-fetch check. The source-fetch checker stamped all 12 page/source records with no failed attempts or drops. No unresolved source-resolution record was needed.

## Check record

Final scoped checks:

- Item dependency audit: all nine batch 24 items match their computed levels; the dependency graph reported no cycles.
- Proof layout: 9 items, 28 steps, 0 defects.
- Precheck: 7 proof-bearing items checked, 0 failures; the two definitions are not applicable. Each proof-bearing carrier records verification.precheck: pass.
- Strict proof contract: 9/9 items, 60 exact supplier excerpts, 28 mapped proof steps, 0 errors and 0 warnings.
- Coverage checklist: 2 pages, 20 harvested results, 0 errors and 0 warnings.
- Source fetch check: 12/12 page/source records fetch-verified; 0 documented drops and 0 failures.
- Content policy: 9 scoped items, 0 errors and 0 warnings.
- Focused depcheck: 9 target items, 1,595 dependency-closure items, 323 closure pages, 0 errors and 0 warnings.
- Rendercheck: 11 scoped item/page files, 0 errors and 0 warnings.

The full-run item-dependency-levels command exits 1 on 24 mismatched labels outside batch 24. Reported IDs are def-randomized-conditional-p-value, thm-conditional-randomized-p-uniformity, def-conditional-test-given-statistic, thm-conditioning-on-a-nuisance-sufficient-statistic, thm-conditional-test-controls-unconditional-level, ex-fishers-exact-test-from-two-binomial-samples, thm-z-estimator-consistency, def-dqm-submodel-through-a-law, thm-dqm-score-mean-zero, def-tangent-set, def-tangent-space, thm-tangent-space-is-closed-linear-subspace, def-nuisance-tangent-space, def-nuisance-tangent-orthogonal-complement, ex-bounded-scores-generate-unrestricted-tangent-space, ex-regular-bernoulli-submodel-dqm-score, ex-boundary-score-cone-and-linear-tangent-space, def-huber-covariance-model, lem-huber-covariance-mixture-is-a-probability-measure, lem-gaussian-kullback-leibler-covariance-formula, lem-clean-dense-gaussian-covariance-minimax-lower-bound, lem-clean-block-sparse-gaussian-covariance-minimax-lower-bound, lem-huber-covariance-contamination-modulus-lower-bound, and ex-dense-huber-covariance-model. These are outside the assigned pair and were not edited.

All nine Step 1 records are ready with owner=false and current item/dependency hashes. The batch 23 page-level dependency remains explicitly unresolved in the cross-batch record because the manifest still has no body for thm-convolution-bound-for-regular-estimators; the batch 24 items do not depend on that result directly.
