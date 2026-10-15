# Batch 24 — authoring and reconciliation notes

Run: `bayesian-computational-statistics-62`  
Role: beta  
Assigned pair: `em-algorithm-and-latent-variable-likelihood-ascent`  
Assignment scheduling input: `4ed94d6dc549cc068dd4534cb7baf19af51695b688c69a621c2da0b929f58c45`

## Scope and controlling decisions

The pair contains four A-page items and five B-page examples. The item inventory and direct dependencies are in `bayesian-computational-statistics-62-batch-24.pages.json`; the source harvest is in the matching coverage file. The A and B pages are the assigned `em-algorithm-and-latent-variable-likelihood-ascent` pair.

The BCS-21 track design names BCS-20 and BCS-02 as prerequisites, while the assigned page and `plan-spec.json` list BCS-20 only. BCS-20 itself requires BCS-02, so the assigned BCS-20 page edge supplies the stated transitive prerequisite; no extra page edge was introduced.

The BCS-21 design supplies four A-page item IDs, while its current `plan-spec.json` row and scaffold pages had empty item arrays. The authored manifest uses the four design IDs and the five examples assigned by the batch design. This records the inventory discrepancy without changing the shared plan.

The design lists Figueiredo as its treatment. The A page also uses Dempster–Laird–Rubin and MIT OpenCourseWare so the page has independent full treatments, including full lecture notes, as required by the authoring instructions. Source URLs, locators, item support, and dispositions are recorded in the coverage JSON.

## Dependency levels and owner reconciliation

The batch assignment names dependency level 3 and prerequisite batch 23 under scheduling input `4ed94d6dc549cc068dd4534cb7baf19af51695b688c69a621c2da0b929f58c45`. The current `bayesian-computational-statistics-62-batch-dependency-levels.json` records batch 24 at level 4 with prerequisite batches 8 and 23, under current input hash `d5afbc58d190a5bd47a64f06af255e64c3a9c76360785bf50274409a59aba610`. This is a shared scheduling conflict; the current graph is left intact and the assignment record has not been changed here.

The added batch-8 edge is required by `ex-gaussian-mixture-likelihood-unbounded-under-covariance-collapse`, whose Gaussian component density uses `lem-normal-location-scale-density`. The actual batch-8 draft statement and complete proof were inspected, and the exact cross-batch interface is recorded in `bayesian-computational-statistics-62-batch-24.cross-batch-dependencies.json`. The proposed reconciliation is to retain that supplier and align the assignment prerequisites with the current graph by listing batch 8 alongside batch 23 and setting batch 24 to dependency level 4. The example remains in its assigned B page. The supplier is draft; this evidence does not claim its acceptance.

Item levels were recomputed from the batch-8, batch-23, and batch-24 inventories. All nine batch-24 item labels match: `alg-expectation-maximization` 2; `thm-em-observed-log-likelihood-is-nondecreasing` 3; `thm-generalized-em-is-nondecreasing-under-q-ascent` 4; `rem-em-ascent-does-not-imply-global-optimality-or-convergence` 5; finite-mixture and generalized-step examples 3; two-maxima and covariance-collapse examples 6; support-loss example 3. No cycle was found in this scoped item graph.

The strict scoped level check also finds four stale labels in batch 8: `thm-normal-normal-hierarchical-shrinkage` (declared 4, computed 3), `ex-improper-variance-hyperprior-can-make-posterior-improper` (3, computed 2), `ex-full-hyperposterior-versus-plug-in-normal-hierarchy` (5, computed 4), and `ex-hierarchical-normal-pooling-extremes` (5, computed 4). They are outside this assignment and were not edited.

## Suppliers inspected

- Batch 23: the draft bodies and full proofs for `def-latent-variable-joint-and-observed-data-factorization`, `thm-observed-density-is-latent-marginal-under-tonelli`, and `thm-kullback-leibler-is-nonnegative` were inspected. The consumers cite only the supplier claims they use. These suppliers remain drafts; no acceptance or independent approval is claimed.
- Batch 8: `lem-normal-location-scale-density` was inspected for the covariance-collapse example. It remains a draft, and the example carries its AC hypothesis explicitly.
- Published prerequisites used locally include the likelihood-density, conditional-density, Bayes, conditional-expectation, conditional-Jensen, KL-definition, density-integration, Tonelli, and Axiom-of-Choice items. The direct item dependencies and quoted supplier interfaces are in the item frontmatter and proof contracts.

## Mathematical review

The algorithm's finite-KL admissibility clause states the AC-dependent absolutely-continuous branch separately from the choice-free non-absolute-continuity rejection branch. The generalized-step example declares AC for its finite-KL admissibility calculation; the support-loss example uses only the choice-free failure branch. The main theorem proves the directional identity
`ell_x(theta)-ell_x(theta_t) = Q(theta|theta_t)-Q(theta_t|theta_t)+D(q_t||q_theta)` by constructing the Radon–Nikodym density ratio directly. Its Jensen argument now integrates the exponential ratio only over current latent support and bounds that integral by the full observed-marginal ratio. This avoids the false extra assumption that candidate support is contained in current support. The generalized-EM corollary, exact-Q example, tied-maximizer example, covariance-collapse example, and support-loss counterexample state their domains and boundary conventions explicitly.

## Source retrieval history

The full 39-page Dempster–Laird–Rubin archival PDF was inspected at §2, equation (2.17), and §3, equations (3.1)–(3.10), Lemma 1, and Theorem 1. The full 35-page Figueiredo lecture note was inspected at §§1–3. The full 44-page MIT OpenCourseWare lecture note was inspected at PDF pp. 25–31 for the theorem argument and pp. 37–41 for finite-mixture responsibilities. The coverage file lists the item-by-item harvested results and whether each was included or not relied upon.

The Oxford Lauritzen lecture URL `https://www.stats.ox.ac.uk/~steffen/teaching/gm03/emalgoc.pdf` returned HTTP 403 through the initial attempt and five recovery retries. Three alternative searches were recorded. The source is marked dropped with certain confidence; complete replacement arguments and dependencies are recorded for `ex-em-finite-mixture-responsibilities` and `ex-generalized-em-increases-q-without-maximizing`. MIT is the retrieved replacement. `source-fetch-check` reports 6/7 fetch stamps and 7/7 resolved, with the one drop documented rather than stamped.

## Scoped checks

- `precheck.mts`: 7 proof-bearing items pass; the algorithm and remark are not applicable.
- `proof-layout.mjs`: 9 assigned items, 23 numbered steps, 0 defects.
- `proof-contract.mjs --strict`: all 9 assigned items pass with no errors or warnings.
- `rendercheck.mjs`: all 9 items and both page Markdown files pass; 11 files checked.
- `manifest-deps.mjs`: both pages contain explicit dependency arrays; 9 items, 0 errors.
- Scoped item dependency computation: all 9 batch-24 item levels match the current batch-8/23/24 graph. The four unrelated batch-8 label discrepancies are listed above.
- `source-fetch-check.mjs`: 6/7 sources are fetch-stamped and all 7/7 are resolved.
- `batch-dependency-levels.mjs check`: passes for the 62-batch graph; current maximum batch level is 5. The current graph still records batch 24 at level 4 with prerequisites 8 and 23.
- `manifest-integrity.mjs`: 124/124 planned pages present, with no missing or added page IDs.
- `step1-decisions.mjs record`: all nine batch-24 items are recorded `ready` with their direct dependencies and non-owner evidence. The exported local decision check confirms all nine records closed. The run-wide check remains open at 370/621 items, with 271 work entries outside this pair.
- Whole-run `item-dependency-levels.mjs check` is not clean because of out-of-scope empty scaffold inventories and dependency labels. Empty inventories reported were `misspecified-posterior-consistency-examples`, `parametric-bernstein-von-mises-and-misspecification`, `parametric-bernstein-von-mises-and-misspecification-examples`, `gaussian-process-support-and-concentration`, `gaussian-process-support-and-concentration-examples`, `gaussian-process-posterior-contraction`, `gaussian-process-posterior-contraction-examples`, `adaptive-empirical-bayes-credible-set-calibration`, `adaptive-empirical-bayes-credible-set-calibration-examples`, `mcmc-clt-and-monte-carlo-standard-error-examples`, `adaptive-mcmc-convergence-and-limitations`, `adaptive-mcmc-convergence-and-limitations-examples`, `mcmc-diagnostics-and-finite-run-limitations`, `mcmc-diagnostics-and-finite-run-limitations-examples`, `kalman-smoothing-and-rts-recursion`, `kalman-smoothing-and-rts-recursion-examples`, `smc-clts-error-and-degeneracy`, `smc-clts-error-and-degeneracy-examples`, `particle-smoothing-backward-simulation-and-rbpf`, `particle-smoothing-backward-simulation-and-rbpf-examples`, `particle-mcmc-pmmh-and-particle-gibbs`, `particle-mcmc-pmmh-and-particle-gibbs-examples`, `data-assimilation-variational-and-ensemble-methods`, `data-assimilation-variational-and-ensemble-methods-examples`, `abc-mcmc-and-sequential-abc`, `abc-mcmc-and-sequential-abc-examples`, `identifiability-and-approximation-bias-in-computational-inference`, and `identifiability-and-approximation-bias-in-computational-inference-examples`. The scoped batch-8/23/24 check confirms every batch-24 label and reports only the four batch-8 discrepancies listed above. Other reported stale labels are `def-approximate-bayesian-computation` (0, computed 1), `alg-abc-rejection` (1, 2), `thm-abc-zero-tolerance-target-is-summary-posterior-under-density-regularity` (1, 3), `thm-sufficient-summary-recovers-full-posterior` (1, 4), `thm-abc-rejection-target-is-tolerance-conditioned-posterior` (2, 3), `cex-abc-zero-tolerance-limit-fails-without-integrable-envelope` (2, 4), `ex-abc-finite-sample-sufficient-summary` (3, 5), `cex-identifiable-model-with-insufficient-abc-summary` (3, 4), `ex-abc-vanishing-acceptance-rate` (3, 4), `lem-harris-ergodic-stationary-chain-is-strong-mixing` (4, 5), `thm-mcmc-clt-sufficient-regimes` (5, 6), and `thm-overlapping-batch-means-strong-consistency` (6, 7). No out-of-scope items were edited.
- Whole-run proof-contract coverage cannot enumerate the frontier because `prop-compact-kl-projection-tests-under-fractional-moment-continuity` is missing. The explicit strict proof-contract check for all nine batch-24 items passes.

## Run state and limits

The live Autopilot status was read from disk after the batch-24 records were written. Run `bayesian-computational-statistics-62` remains running at the held `1-scaffold` stage (33/62 covered; batch 24 is no longer listed as missing), with nothing in flight. Its status reports a malformed-frontmatter handoff for `ex-uniform-endpoint-ordinary-bootstrap-failure-and-the-m-out-of-n-remedy` at `title: Uniform endpoint: ordinary bootstrap failure and the m-out-of-n remedy`; the run's Step 1 blocker record also names units 51, 55, and 10 as artifact-incomplete and no longer running. These are outside batch 24. No engine state, shared plan, or owner verdict was changed.

The batch-24 draft is authoring evidence only. Draft supplier bodies were inspected, but no supplier acceptance, Step 3 judgment, or independent approval is claimed.
