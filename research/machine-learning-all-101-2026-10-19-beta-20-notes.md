# Batch 20 authoring notes — `ml02-clustering-mixtures`

## Objective and verified run state

- Run: `machine-learning-all-101-2026-10-19`; role/batch: beta / 20.
- Live status recomputed with `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --run machine-learning-all-101-2026-10-19 --state-dir .autopilot/machine-learning-all-101-2026-10-19` on 2026-10-19: run is `running`, stage `1-scaffold`, no workers in flight. The recorded stage summary has 0/101 scaffold results; batch 20 is an assigned independent level-0 pair.
- Scheduling input: SHA-256 `424a2623b4a02ffac30bca34f1e893445df04b9a3a30237f39748f9397b2e4a0`. Batch 20 has `dependency_level: 0`, `requires: []` at batch level.
- Owned pages: `ml02-clustering-mixtures` (A, order 2734) and `ml02-clustering-mixtures-examples` (B, order 2735), both `machine-learning`. The A page retains the nine page-level requirements in the scaffold manifest; the B page requires the A page.
- Initial item inventory and in-batch levels/dependencies were written to `research/machine-learning-all-101-2026-10-19-batch-20.pages.json` before any item carrier. The dependency levels are based on in-batch item edges; published suppliers do not raise these levels.
- The current design's source locator for ESL §8.5 says pp. 272–281, but the 12th corrected printing transitions to §8.6 on printed p. 279. Coverage will record the inspected §8.5 range as pp. 272–278, avoiding the next section.

## Plan comparison and decisions

- The pair-level page requirements in `plan-spec.json` and the generated task agree. The design's `**Requires:**` list names item-level mathematical suppliers; those are a separate interface and are being reflected in item `deps` where used. The page `requires` list is preserved as written.
- The dated 2026-10-18 interface repair says to reuse the published `def-kullback-leibler-divergence`, `thm-kullback-leibler-is-nonnegative`, `alg-expectation-maximization`, and `thm-em-observed-log-likelihood-is-nondecreasing`; it forbids a second generic dominated-KL or EM-ascent theorem. The older proposed-item list still includes `def-dominated-kl-divergence-for-em` and `thm-em-observed-likelihood-monotonicity-under-common-support`. Following the controlling interface, neither generic duplicate is in the batch inventory. The batch instead includes the local Gaussian-mixture M-step result and a Gaussian-mixture-specific observed-likelihood theorem.
- The current active library has no item named `thm-generalized-em-is-nondecreasing-under-q-ascent`. The actual published `thm-em-observed-log-likelihood-is-nondecreasing` explicitly covers both admissible generalized Q-ascent updates and attained exact M-steps, under its stated positive finite normalizers, directional support, absolute log-integrability, finite KL, and AC assumptions. The local monotonicity proof will map the Gaussian mixture to that actual interface and verify each condition; it will not quote or invent the absent ID.
- A published `thm-nondegenerate-multivariate-normal-law-has-density` uses a Cholesky factorization. The controlling design requires a local positive-spectral-square-root and linear-change-of-variables proof, so the new local density-normalization item will prove the required interface independently and will not use that published density theorem as a premise.
- The published `lem-log-determinant-concavity-on-positive-definite-matrices` proves non-strict concavity. The design asks for strict concavity and the Hessian calculation; the batch includes the stated local strict lemma and will prove strictness for nonzero symmetric directions.

## Item inventory and in-batch order

| Dependency level | Item | In-batch dependencies |
|---:|---|---|
| 0 | `def-k-means-objective` | none |
| 0 | `def-finite-gaussian-mixture` | none |
| 0 | `lem-log-determinant-strictly-concave-on-positive-definite-matrices` | none |
| 0 | `thm-equal-spherical-mixture-low-variance-kmeans-limit` | none; finite softmax statement/proof is choice-free |
| 1 | `alg-lloyd-k-means` | `def-k-means-objective` |
| 1 | `thm-finite-gaussian-component-density-normalized` | `def-finite-gaussian-mixture` |
| 2 | `thm-lloyd-objective-monotonicity-and-termination` | `def-k-means-objective`, `alg-lloyd-k-means` |
| 2 | `alg-gaussian-mixture-em` | `def-finite-gaussian-mixture`, `thm-finite-gaussian-component-density-normalized` |
| 3 | `thm-gaussian-mixture-exact-m-step-maximizes-q` | `alg-gaussian-mixture-em`, `def-finite-gaussian-mixture`, `thm-finite-gaussian-component-density-normalized`, `lem-log-determinant-strictly-concave-on-positive-definite-matrices` |
| 4 | `thm-gaussian-mixture-em-observed-likelihood-is-nondecreasing` | `alg-gaussian-mixture-em`, `thm-gaussian-mixture-exact-m-step-maximizes-q` |
| 2 | `ex-fractional-gaussian-mixture-responsibilities` (B) | `def-finite-gaussian-mixture`, `thm-finite-gaussian-component-density-normalized`, `thm-equal-spherical-mixture-low-variance-kmeans-limit` |
| 2 | `ex-gaussian-mixture-likelihood-unbounded` (B) | `def-finite-gaussian-mixture`, `thm-finite-gaussian-component-density-normalized` |
| 3 | `ex-lloyd-tie-sensitive-local-minima` (B) | `alg-lloyd-k-means`, `def-k-means-objective`, `thm-lloyd-objective-monotonicity-and-termination` |

The companion items use only A-page suppliers. `cross-batch-dependencies` is empty because batch 20 has no in-run supplier batches; the published prerequisites are recorded in item `deps` and the note below, not misrepresented as current-run batch edges.

### Completed item: `def-k-means-objective`

- Claim/conventions: for finite observations in `R^p`, `1 <= K <= n`, labels in `{1,...,K}`, and centers in `R^p`, define squared Euclidean distance coordinatewise and `J` as the within-cluster sum of squares; empty clusters contribute zero.
- Dependencies: none. This is a stand-alone definition; no choice, probability, or least-squares result is used.
- Sources: ESL §13.2.1 (printed pp. 460–461) and Bishop §9.1 (printed pp. 424–429), both read in full for this topic. Their objective conventions agree with the local formula.
- Placement: A page `ml02-clustering-mixtures`; item `dependency_level: 0`.
- Validation/readiness: carrier is drafted; final proof-layout/precheck/source-fetch checks and Step-1 decision remain pending until the batch is complete.
- Next: define Lloyd's procedure against this objective, with initial smallest-index ties and retention of the current label on subsequent ties.

### Completed item: `alg-lloyd-k-means`

- Claim/conventions: initialize labels by nearest-center assignment with smallest-index ties; each iteration reassigns to a nearest center, retaining the current label on a tie, then replaces each nonempty center by its sample mean and leaves empty centers fixed. Stop only when both labels and centers are unchanged, so a label-stable but not yet mean-updated state is not mistaken for a fixed point.
- Dependencies: `def-k-means-objective` (local level 0); item level 1. The procedure itself uses only finite index comparisons and arithmetic; the least-squares theorem is reserved for the separate objective theorem.
- Sources: ESL §13.2.1 and Algorithm 14.1 (printed pp. 460 and 510); Bishop §9.1 (printed pp. 424–429). Both descriptions support alternating nearest-center assignment and mean updates; neither supplies this exact explicit tie/empty-cluster/stop convention.
- Placement: A page `ml02-clustering-mixtures`.
- Validation/readiness: carrier is drafted; final checks and Step-1 decision remain pending.
- Next: prove monotonicity, strict decrease on changed assignments, and finite termination to a coordinatewise fixed point.

### Completed item: `thm-lloyd-objective-monotonicity-and-termination`

- Claim: nearest assignment is nonincreasing for fixed centers and strictly decreases the objective whenever a label changes; the mean update is the unique least-squares center for each nonempty cluster; the combined procedure terminates after finitely many assignments at a coordinatewise fixed point.
- Proof route: apply the actual finite-dimensional least-squares normal-equation theorem to the replication map for each nonempty cluster; then use the tie-retention rule for strict assignment decrease. After the mean update, each labeling has a unique objective value, so finite `K^n` labelings cannot recur through nonterminal steps.
- Dependencies: `def-k-means-objective`, `alg-lloyd-k-means`, and published `thm-least-squares-solutions-and-normal-equation`; in-batch level 2. No choice axiom or probabilistic assumption is used.
- Sources: ESL Algorithm 14.1 (printed p. 510) and Bishop §9.1 (printed pp. 424–429) supply the alternating procedure and local-optimum caveat. Their stated convergence arguments do not contain our explicit tie-retention/finite-recurrence proof; that argument is complete locally.
- Placement: A page `ml02-clustering-mixtures`; explicit non-global local fixed points are assigned to the B companion.
- Validation/readiness: proof is drafted; final proof-contract, precheck, layout and Step-1 decision remain pending.
- Next: define the positive-weight, SPD Gaussian mixture and prove the component-density normalization with the required spectral-square-root route.

### Completed item: `def-finite-gaussian-mixture`

- Claim/conventions: define the SPD multivariate Gaussian component formula, a finite mixture with strictly positive weights summing to one, the iid finite-sample likelihood, and normalized responsibility weights. Singular covariances are outside this mixture definition. AC is stated because the cited multivariate-normal-law interface assumes it.
- Dependencies: the real spectral theorem, AC, determinant/invertible-matrix conventions, moments/covariance, multivariate normal law, and scalar normal law; local `justified_by` result `thm-finite-gaussian-component-density-normalized` is not duplicated in `deps`. In-batch dependency level is 0.
- Sources: ESL §§13.2.3 and 14.3.7 and Bishop §§9.2–9.2.2 support mixture densities, responsibilities and the model conventions. Item `sources.references` will remain aligned with the batch source ledger.
- Placement: A page `ml02-clustering-mixtures`.
- Validation/readiness: carrier drafted; density well-definedness remains to be discharged by the local spectral-root proof before readiness.
- Next: prove the density formula is the law's normalized Lebesgue density, using independent scalar standard normals and linear change of variables under the stated AC/CC branch.

### Completed item: `thm-finite-gaussian-component-density-normalized`

- Claim: under AC, for every finite-dimensional SPD covariance, the local component formula is exactly the Lebesgue density of the multivariate normal law and integrates to one.
- Proof route: diagonalize `Sigma` by the real spectral theorem; form the symmetric positive root `A`; use the independent scalar standard-normal product density; apply the nonnegative `C^1` change-of-variables formula to `y -> mu + A y`; compute `det A = sqrt(det Sigma)` and `A^{-2}=Sigma^{-1}`. Product-law identification uses Tonelli and a generating rectangle pi-system.
- Axiom branch: AC is stated and used twice: the multivariate-normal construction supplies the independent normal coordinates, and AC implies countable choice for the product-Lebesgue and change-of-variables suppliers. The argument makes no further choice.
- Dependencies: local `def-finite-gaussian-mixture` plus the actual standard/multivariate normal, finite product law, Tonelli, product-Lebesgue, spectral, determinant, AC-to-CC and change-of-variables suppliers. In-batch level 1. The existing Cholesky-based published density theorem was inspected but is not used as a premise.
- Placement: A page `ml02-clustering-mixtures`; this is the `justified_by` result for the mixture definition.
- Validation/readiness: proof drafted; final precheck, proof-contract, layout, source-fetch and readiness checks remain pending.
- Next: prove strict log-determinant concavity for the affine-span covariance maximization.

### Completed item: `thm-equal-spherical-mixture-low-variance-kmeans-limit`

- Claim: for fixed finite data, centers, and positive fixed weights, the normalized softmax of negative squared distances concentrates on the nearest-center set; tied centers receive weights proportional to their mixture weights. The finite log-sum-exp objective converges to the sum of the nearest squared distances and hence the minimum over finite labelings.
- Proof route: factor out the minimum squared distance for each observation; the remaining finite sum converges to the positive total weight of the nearest-center set. This proves both responsibility and objective limits and explicitly covers ties.
- Dependencies/axioms: no item dependencies; finite real algebra only, no probability or choice axiom. In-batch level 0.
- Sources: ESL Exercise 13.1 (printed p. 481) and Bishop §9.3.2 (printed pp. 443–444) state the low-variance relationship; the sources pose or derive only the unweighted/unique-nearest intuition, while the local proof establishes the weighted tied-center formula and finite log-sum-exp limit.
- Placement: A page `ml02-clustering-mixtures`.
- Validation/readiness: proof drafted; final contract/precheck/layout and Step-1 decision pending.
- Next: establish the strict log-determinant lemma used to identify the unrestricted covariance M-step.

### Completed item: `lem-log-determinant-strictly-concave-on-positive-definite-matrices`

- Claim: along any nonconstant line segment in the SPD cone, `g(t)=log det(A_0+tH)` has `g''(t)=-tr(A_t^{-1}HA_t^{-1}H)<0`; therefore the log determinant satisfies the strict chord inequality.
- Proof route: Jacobi's derivative formula and the inverse derivative give the Hessian expression. Congruence by `A_t^{-1/2}` turns the trace into the sum of squares of a nonzero symmetric matrix. The mean-value theorem converts strict negative curvature into the strict chord inequality.
- Dependencies: current real spectral theorem, determinant differential, matrix inverse derivative, total-derivative chain rule, natural-log derivative and trace definition; in-batch level 0. No axiom is used.
- Sources: Boyd–Vandenberghe, *Convex Optimization*, §3.1.5, printed p. 74. The text proves the non-strict second-derivative test; the local item records the strict case by observing that a nonzero direction has at least one nonzero eigenvalue after invertible congruence. The existing published concavity lemma was read but not used as a premise because it states only non-strict concavity.
- Placement: A page `ml02-clustering-mixtures`.
- Validation/readiness: proof drafted; final proof-contract, precheck, layout, source-fetch and Step-1 decision remain pending.
- Next: define the full-affine-span exact Gaussian-mixture EM procedure and prove its weighted M-step is an attained Q maximizer.

## Supplier and source checks completed

- Read the actual published statements/proofs for least-squares minimization, the current EM procedure and observed-likelihood identity, the directional KL definition and nonnegativity theorem, expectation and covariance conventions, standard and multivariate normal laws, the nondegenerate normal density theorem, independent product laws, Tonelli, the real spectral theorem, linear and nonnegative-integral change of variables, and the AC-to-countable-choice bridge. The exact dependencies and caveats are recorded in each new carrier's `deps` and proof facts.
- The generic EM supplier's observed likelihood is defined only on positive finite marginals. It requires current posterior support absolutely continuous with respect to candidate posterior, absolute integrability of both complete-data log densities, and finite `D(q_t || q_theta)`; its KL direction is not interchangeable. For the finite Gaussian mixture with strictly positive weights, SPD covariances, finite observations and finite label space, each component density and each observed marginal is positive and finite, all posterior label masses are positive, the KL sum is finite, and the complete log-density is finite on a finite latent support. AC is retained because the published KL/EM interface uses a finite-valued Radon–Nikodym representative. The M-step theorem separately proves SPD covariance updates under the explicit full-affine-span condition.
- Read full relevant text from ESL (Hastie–Tibshirani–Friedman), *The Elements of Statistical Learning*, corrected 12th printing: §§13.2.1–13.2.3, Exercise 13.1, §8.5.1–8.5.3, and §§14.3.4–14.3.7. ESL supplies the objectives, algorithms, mixture/EM discussion and monotonicity argument; Exercise 13.1 asks for, but does not prove, the low-variance limit.
- Read full relevant text from Bishop, *Pattern Recognition and Machine Learning*: §2.3 (Gaussian density/covariance conventions); Chapter 9 §§9.1, 9.2.1–9.2.2, 9.3.1–9.3.2 and 9.4. Bishop gives the K-means alternations, Gaussian mixture responsibilities and weighted parameter updates, singular-likelihood warning, low-variance hard-assignment limit and EM lower-bound monotonicity argument.
- Read Boyd–Vandenberghe, *Convex Optimization*, §3.1.5, printed p. 74. The source factors an SPD line as `Z^(1/2)(I+t Z^(-1/2)V Z^(-1/2))Z^(1/2)` and computes the second derivative as a negative sum of eigenvalue squares; the local item states and proves the strict case `V != 0`.
- No source retrieval failure occurred during reading. `source-fetch-check --stamp` remains pending on the finished batch coverage file; no `source_resolution` failure record is warranted at this checkpoint.

## Unresolved obligations and next action

- No unresolved mathematical supplier has been identified. The only named-interface discrepancy is the missing generalized-EM ID noted above; the actual current published theorem covers the required conclusion under explicit hypotheses.
- Next: author the three assigned B examples, then synchronize the A/B page frontmatter, manifests, proof contracts, coverage and dependency records. Source fetch stamps, scoped checks and Step-1 decisions remain pending.

### Completed item: `alg-gaussian-mixture-em`

- Claim/conventions: finite exact EM for positive-weight, SPD Gaussian mixtures on a full-affine-span sample; computes current responsibilities, then normalized effective-count weights, weighted means and weighted covariances for a finite requested number of steps. It makes no convergence or global-optimum claim.
- Dependencies: `alg-expectation-maximization`, AC, `def-finite-gaussian-mixture`, and `thm-finite-gaussian-component-density-normalized`; item level 2. Removed unused expectation/covariance dependencies after confirming the algorithm's inputs and formulas require neither supplier.
- Sources: ESL §§8.5.2 and 14.3.7; Bishop §§9.2.2 and 9.4. The texts supply the E/M formulas; the stricter full-affine-span domain is explicit in the local procedure so the unrestricted covariance step remains in the SPD parameter space.
- Placement: A page `ml02-clustering-mixtures`; `justified_by` is the local attained-M-step theorem.
- Validation/readiness: carrier drafted; final proof-layout/precheck/source-fetch and Step-1 decision pending.
- Unresolved obligations: none identified for the formulas; exact well-definedness is proved by the next item.

### Completed item: `thm-gaussian-mixture-exact-m-step-maximizes-q`

- Claim: for finite observations with full affine span and a current positive-weight/SPD mixture, all responsibilities and effective counts are positive, each responsibility-weighted scatter is SPD, and the exact weight/mean/covariance formulas uniquely attain the global maximum of the finite complete-data Q function.
- Proof route: finite categorical KL gives the unique weight maximizer; weighted-centering expansion gives the unique means; full affine span proves each scatter SPD; precision parametrization reduces covariance optimization to strictly concave `log det A - tr(A S)`, with a zero derivative at `A=S^{-1}` and a one-dimensional strict-concavity argument establishing the unique global maximum.
- Dependencies: `alg-gaussian-mixture-em`, `def-finite-gaussian-mixture`, local density normalization, AC, finite categorical probability/KL definition and nonnegativity, strict log-determinant concavity, Jacobi/log/chain derivative facts, trace/determinant conventions and spectral theorem. In-batch level 3. Direct supplier bodies were inspected; no least-squares theorem is needed for the weighted mean proof.
- Sources: Bishop §9.2.2 and ESL §8.5.2 describe weighted Gaussian-mixture EM updates; the local proof supplies attainment and uniqueness under the explicit full-affine-span condition.
- Placement: A page `ml02-clustering-mixtures`; justifies the exact update procedure's well-definedness.
- Validation/readiness: proof drafted; proof-contract, layout/precheck, source-fetch and Step-1 checks pending.
- Unresolved obligations: none identified; exact finite-KL equality is the published categorical KL equality clause. The local density and strict-logdet supplier proofs are available and reviewed.

### Completed item: `thm-gaussian-mixture-em-observed-likelihood-is-nondecreasing`

- Claim: each finite exact Gaussian-mixture EM update from a positive-weight/SPD initial parameter preserves the mixture domain and does not decrease the finite iid observed log likelihood, for fixed data with full affine span.
- Proof route: realize the finite label vector as latent data with product Lebesgue/counting reference measure; verify joint measurability and normalization, compute the observed marginal and positive posterior on every label, check directional support, finite KL and absolute log-integrability, identify the finite posterior Q with the local M-step Q, then apply the actual published EM identity and induct over updates.
- Dependencies: local exact EM and M-step items; actual published EM algorithm and `thm-em-observed-log-likelihood-is-nondecreasing`; finite Gaussian definition/density theorem; latent-factorization and observed-marginal suppliers; product measure, Tonelli, product-Lebesgue, Borel-measurability and AC-to-countable-choice suppliers; KL definition/nonnegativity. In-batch level 4.
- Sources: ESL §8.5.2 and §14.3.7; Bishop §§9.2.2 and 9.4. Full relevant published supplier bodies were reread: EM requires positive finite marginals, current-posterior support absolutely continuous with respect to candidate posterior, finite directional KL, and absolute integrability of both complete log densities. The finite positive label model verifies each hypothesis directly.
- Placement: A page `ml02-clustering-mixtures`.
- Validation/readiness: complete proof draft; contracts, proof-layout/precheck, source-fetch and Step-1 checks pending.
- Unresolved obligations: none identified; the constructed complete-data density and each admissibility condition are verified locally. No generic replacement EM result is authored.

### Completed item: `ex-lloyd-tie-sensitive-local-minima`

- Claim: for four ordered points and two clusters, three explicitly supplied starting centers lead under current-label tie retention to terminal partitions with costs 2, 2, and 1; the two cost-2 terminal states retain their tied boundary observations.
- Proof route: calculate every initialization assignment and mean update; at each updated pair, verify all strict nearest comparisons and the exact tied observation; check unchanged labels/centers and evaluate the squared-error objective directly. A TikZ number-line diagram records the terminal assignments and centers; the proof does not depend on it.
- Dependencies: `alg-lloyd-k-means` (level 1) and `def-k-means-objective` (level 0), so example level 2. The general Lloyd convergence theorem was removed as an unnecessary edge because all three finite runs are checked directly.
- Sources: ESL §14.3.5 and Bishop §9.1 describe the algorithm and local fixed-point caveat; the explicit runs and tie computations are local.
- Placement: B companion `ml02-clustering-mixtures-examples`.
- Validation/readiness: proof and diagram drafted; diagram rendering, proof-contract/layout/precheck and Step-1 decision pending.
- Unresolved obligations: none identified.

### Completed item: `ex-fractional-gaussian-mixture-responsibilities`

- Claim: for one observation at 0, component means -1 and 1, equal positive variance and weights 1/3 and 2/3, the responsibilities are exactly those weights for every variance and stay fractional as variance decreases to zero.
- Proof route: substitute the one-dimensional Gaussian formula; equal squared distances give the same positive density, which cancels in the normalized responsibilities; apply the finite tied-center low-variance theorem.
- Dependencies: AC, `def-finite-gaussian-mixture`, local density normalization, and `thm-equal-spherical-mixture-low-variance-kmeans-limit`; level 2. Density normalization is retained to confirm these are component probability densities, not merely positive kernels.
- Sources: Bishop §9.3.2 and Exercise 9.11; ESL Exercise 13.1 (printed p. 481). Sources motivate the low-variance relationship; the weighted tie formula is verified locally.
- Placement: B companion `ml02-clustering-mixtures-examples`.
- Validation/readiness: complete proof draft; contract/layout/precheck and Step-1 decision pending.
- Unresolved obligations: none identified.

### Completed item: `ex-gaussian-mixture-likelihood-unbounded`

- Claim: the two-point sample `{0,1}` has unbounded likelihood in the two-component family with equal positive weights, means zero, and variances `epsilon^2` and 1, for every `epsilon>0`.
- Proof route: lower-bound the mixture density at 0 by its shrinking-variance component and at 1 by the fixed unit-variance component; multiply the bounds to obtain `L_epsilon >= e^(-1/2)/(8 pi epsilon)` and let epsilon approach zero through positive values.
- Dependencies: AC, `def-finite-gaussian-mixture`, and local density normalization; level 2. Both Gaussian covariances remain strictly positive along the family.
- Sources: Bishop §9.2.2 and ESL §14.3.7 discuss singular/unbounded finite-mixture likelihood; the exact two-point lower bound is proved locally.
- Placement: B companion `ml02-clustering-mixtures-examples`.
- Validation/readiness: complete proof draft; contract/layout/precheck and Step-1 decision pending.
- Unresolved obligations: none identified.

## Final scoped validation and handoff status

The following final checks supersede the earlier per-item “pending” validation lines above.

- **Items and placement:** all 10 A items and 3 B examples are present. The A page has 10/100 items and the B companion has 3 examples; both authored page bodies are empty frontmatter-only pages. Item statements contain no hyperlinks, and the manifest statements, titles, kinds, dependencies, levels, justifiers, sources, and provenance match their carriers.
- **Dependency order:** the scoped `dependencyLevels([batch20 pages])` check passes for 13/13 items, maximum item level 4. The graph is acyclic; authorship order is level 0 through level 4. `cross-batch-dependencies.json` is `[]`.
- **Proof format:** `tools/tsx-run.mjs tools/precheck.mts` passes all 9 proof-bearing items. `proof-layout.mjs` passes 9 items / 43 numbered steps with 0 defects. The strict proof-contract check passes 13/13 items, 71 exact supplier citations, and all numbered-step mappings/boundaries.
- **Rendering and policy:** `rendercheck.mjs` passes the 13 item carriers and 2 pages; content-policy passes 13 scoped items with 0 errors/warnings; focused depcheck passes the selected items and their prerequisite page/item cycles.
- **Coverage and retrieval:** coverage-checklist passes 1 A page and 28 harvested headings with 0 errors/warnings. `source-fetch-check --stamp` verifies the 3/3 sources (ESL, Bishop, Boyd–Vandenberghe); no retrieval failure occurred and no `source_resolution` entry is needed.
- **Mathematical review:** the exact supplier bodies/proofs and the complete relevant ESL, Bishop, and Boyd–Vandenberghe passages were inspected. No unresolved mathematical supplier or local proof gap remains. No finite-smoke registry check applies to this pair; the finite examples are calculated directly in their proof steps.
- **Run-wide dependency blockers outside batch 20:** scoped levels pass, but `item-dependency-levels.mjs check --run` cannot pass the full run while other batches have empty inventories and malformed rows. Its named unrelated level mismatches are `lem-largest-sample-covariance-eigenvalue-upper-bound` (0, computed 1), `lem-largest-sample-covariance-eigenvalue-lower-bound` (0, computed 1), `thm-bai-yin-smallest-singular-value-limits` (0, computed 1), `thm-largest-eigenvalue-sample-covariance-edge` (1, computed 2), and `thm-smallest-positive-eigenvalue-sample-covariance-edge` (1, computed 2). The run-level batch checker also stops at `Duplicate item undefined`.
- **Step-1 readiness recording is blocked by the shared run manifest:** read-only inspection found `research/machine-learning-all-101-2026-10-19-batch-26.pages.json`, page `ml02-causal-pc`, contains 15 string entries (`def-causal-discovery-oracle-regime`, etc.) rather than item objects with IDs. `step1-decisions.mjs record` was attempted for `def-k-means-objective` and failed before writing a record with `Duplicate item undefined`; `step1-decisions.mjs check` fails with the same error. I did not repair batch 26 or the owner-controlled `.autopilot` blocker because both are outside this assignment. No Step-1 decision records were written for batch 20; the 13 items are locally complete but remain unrecorded until the owner repairs the shared inventory and reruns the native recording/check commands.
- **Live run verification:** recomputed `.autopilot` status is `running`, stage `1-scaffold`, 7/101 covered, no workers in flight. The owner blocker in `research/machine-learning-all-101-2026-10-19-step1-blockers.json` requires repair and recertification before transition. The latest `git log` entry checked is `dd17c1fe56` (“Lower mathematics workflow worker concurrency to 20”). No shared plan, verdict, or engine-state files were edited.
