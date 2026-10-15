# Bayesian and Computational Statistics — batch 50 notes

Run: `bayesian-computational-statistics-62`  
Role: beta; pair: `resampling-algorithms-and-sampling-units` / `resampling-algorithms-and-sampling-units-examples`  
Assigned batch dependency level: 0; prerequisite batches: none  
Scheduling input recorded for this authoring handoff: `4353922e2bc21330b8d06b628923b2b91b410a0bed9abbcf2167572e3af83d9d`  
Output manifest: `research/bayesian-computational-statistics-62-batch-50.pages.json`

## Controlling plan and conflicts

The controlling owner direction is `research/bayesian-computational-statistics-62-owner-authoring-direction.md`. It assigns the conditional empirical-law bootstrap CLT to BCS-48, despite a historical index placing it on BCS-47. This batch proves only the finite conditional IID law of the bootstrap draws. It does not author or quote the conditional bootstrap CLT.

The complete BCS-47 design at `research/plan-bayesian-computational-statistics-track.md`, L204–205, matches `research/plan-spec.json` and the assigned batch scaffold on page IDs, category, order, titles, A-page prerequisite `randomized-treatment-assignment-and-sharp-null-tests`, and B-to-A edge. The plan-spec item arrays were empty before this authoring. I filled them with the local definitions, finite-law lemmas, algorithms, theorem, and examples listed below; no design claim was narrowed or omitted. The original B-page scaffold said the delete-two means and size-two subsampling law were distinct. For the same sample-mean statistic this is false: complementation bijects the two six-element collections. I corrected the item and manifest wording to preserve the required calculation and state the exact equality; the jackknife's uniform-average output remains distinct from the subsampling law and is not given a variance interpretation.

The design's dependent-time-series example is represented by the finite two-time block of a stationary binary Markov chain. Its transition matrix and invariant initial law are stated explicitly, giving the exact finite covariance witness. This keeps the pointwise-resampling failure example within the BCS-47 scope without importing an asymptotic bootstrap claim.

The BCS-47 design cites Bickel–Götze–van Zwet §§1–3, printed pp. 1–14. Inspection of the publisher's full paper shows §4 begins on printed p. 12. The coverage record therefore identifies the directly used algorithm section as §3, pp. 8–11. I read §§1–3 and pp. 12–14 for context; bootstrap success/failure and asymptotic validity results remain assigned to BCS-49, and the sample-splitting result is deferred to the cross-validation pair.

## Inventory, direct dependencies, and item levels

The 13-item inventory is in the batch manifest before the item carriers. `dependency_level` is zero without an in-run supplier and otherwise one plus the maximum level of the in-run suppliers. External published items do not raise the level.

| Item | Level | In-run suppliers |
|---|---:|---|
| `def-resampling-sampling-unit-contract` | 0 | — |
| `def-empirical-measure` | 0 | — |
| `lem-uniform-law-on-finite-subset-families` | 0 | — |
| `lem-empirical-measure-is-a-probability-measure` | 1 | `def-empirical-measure` |
| `alg-delete-d-jackknife-replicates` | 1 | `def-resampling-sampling-unit-contract`, `lem-uniform-law-on-finite-subset-families` |
| `alg-uniform-subsampling-without-replacement` | 1 | `def-resampling-sampling-unit-contract`, `lem-uniform-law-on-finite-subset-families` |
| `alg-n-out-of-n-bootstrap-from-empirical-law` | 2 | `def-resampling-sampling-unit-contract`, `def-empirical-measure`, `lem-empirical-measure-is-a-probability-measure` |
| `thm-bootstrap-draws-are-conditionally-iid-empirical-law` | 3 | `alg-n-out-of-n-bootstrap-from-empirical-law`, `def-empirical-measure`, `lem-empirical-measure-is-a-probability-measure` |
| `ex-two-point-bootstrap-sample-mean` | 4 | `alg-n-out-of-n-bootstrap-from-empirical-law`, `thm-bootstrap-draws-are-conditionally-iid-empirical-law`, `def-empirical-measure` |
| `ex-delete-d-and-subsampling` | 2 | `alg-delete-d-jackknife-replicates`, `alg-uniform-subsampling-without-replacement` |
| `ex-cluster-resampling-unit` | 4 | `def-resampling-sampling-unit-contract`, `alg-n-out-of-n-bootstrap-from-empirical-law`, `thm-bootstrap-draws-are-conditionally-iid-empirical-law`, `def-empirical-measure` |
| `cex-pointwise-bootstrap-does-not-preserve-dependent-pair-law` | 4 | `alg-n-out-of-n-bootstrap-from-empirical-law`, `thm-bootstrap-draws-are-conditionally-iid-empirical-law`, `def-empirical-measure`, `def-moments-variance-and-covariance` |
| `ex-assignment-randomization-versus-bootstrap` | 4 | `def-resampling-sampling-unit-contract`, `alg-n-out-of-n-bootstrap-from-empirical-law`, `thm-bootstrap-draws-are-conditionally-iid-empirical-law`, `def-finite-randomized-treatment-assignment-model`, `def-finite-population-average-treatment-effect-and-weak-null`, `def-fisher-sharp-null-and-predeclared-test-orderings`, `def-statistic-and-estimator`, `def-p-value`, `def-empirical-measure`, `thm-fisher-sharp-null-randomization-pvalues-are-valid` |

The only page-level prerequisite for this batch is the published SME-12 assignment page. I inspected its actual finite-assignment model, Fisher sharp-null and predeclared-score definitions, finite weighted upper-tail/randomized-tie lemma, and full sharp-null p-value proof. The model fixes the assignment law, units, and potential outcomes; the proof applies the finite rank lemma to that law and makes no IID-bootstrap validity claim. The assignment example states its observed assignment and holds it fixed in the pointwise-bootstrap contrast. Its weak-null caveat is supported by the exact published definition of the finite-population weak null.

The actual unit-record measurable space is now explicit in `def-resampling-sampling-unit-contract`; the complete record space is the input space for each of the three resampling algorithms. This resolves the type convention used by the algorithms and cluster example.

There are no prerequisites from another BCS batch, so `batch-50.cross-batch-dependencies.json` is empty. Planned in-run consumers are `iid-bootstrap-and-jackknife-validity` (batch 51), `block-bootstrap-for-dependent-data` (batch 53), and `statistical-and-computational-error-accounting` (batch 57). Their future claims must verify the actual suppliers they use; no absent consumer body is quoted here.

## Source reading and dispositions

The relevant claimed sections were extracted and read in full. I read the complete 22-page Stark Part 8, Bickel–Götze–van Zwet §§1–3 and printed pp. 12–14, and Efron–Tibshirani §§1–3 and 10 from the journal PDF. The Springer journal PDF had six unsuccessful `source-fetch-check` attempts (the initial request plus five retries), after which the Stanford LCS Technical Report 19 / BIO 101 copy was fetched and stamped. During this authoring handoff, I independently opened the official Springer PDF through its open-access article page and inspected the complete 35-page text, including the empirical-distribution bootstrap description (§§1–2), Cox's complete-triple unit example (§3), and delete-one jackknife construction (§10, printed pp. 30–33). This browser access does not overwrite the earlier fetch-check history: the old Springer record remains a documented transport drop, and the same-work Stanford PDF remains the active stamped alternative.

`source-fetch-check --stamp` resolved 4/4 source records: 3 fetch-verified and the original Springer URL documented as dropped. The Stanford PDF stamp records 2,592,671 bytes, SHA-256 prefix `40ef246828a2913d`, and 58 pages; the local MuPDF page tree reports 55 rendered pages. The inspected printed pages match the report pagination and the relevant section text. Bickel–Götze–van Zwet is stamped at 298,796 bytes / `7d4ea588181a0c76` / 31 pages; Stark is stamped at 209,042 bytes / `2bc2b8c469ecad5f` / 22 pages.

| Source and inspected locator | Supported items and disposition |
|---|---|
| Efron–Tibshirani (1985), Stanford LCS report §§1–3, printed pp. 1–16, and §10, pp. 45–49. [Full-text PDF](https://stacks.stanford.edu/file/xv648rw7816/xv648rw7816_LCS-19.pdf) · [Original journal URL](https://link.springer.com/content/pdf/10.2333/bhmk.12.17_1.pdf) | Empirical mass definition → `def-empirical-measure`; size-n IID resampling algorithm → `alg-n-out-of-n-bootstrap-from-empirical-law`; complete record example → `def-resampling-sampling-unit-contract`; delete-one points → `alg-delete-d-jackknife-replicates`; jackknife scaling/linearization → deferred to BCS-48. |
| Bickel–Götze–van Zwet (1997), §3, printed pp. 8–12 (Theorem 3 ends on p. 12; §4 begins on that page); §§1–3 and pp. 12–14 were also read. [Full text](https://www3.stat.sinica.edu.tw/statistica/oldpdf/a7n11.pdf) | n/n bootstrap → `alg-n-out-of-n-bootstrap-from-empirical-law`; uniform fixed-size subsets → `alg-uniform-subsampling-without-replacement`; m/n validity and the replacement version → deferred to BCS-49; sample splitting → deferred to `cross-validation-risk-and-model-comparison`; parametric Hellinger branch → out of scope for this empirical-law/unit-contract page. |
| Stark (2008), Part 8 §§1.1–1.2, PDF pp. 2–7. [Full notes](https://www.stat.berkeley.edu/~stark/Teach/S240/Notes/ch8.pdf) | Empirical bootstrap sampling → `alg-n-out-of-n-bootstrap-from-empirical-law`; delete-one replicates → `alg-delete-d-jackknife-replicates`; target-specific jackknife bias/variance scaling → deferred to BCS-48. |

The local proofs do not import any source's bootstrap-validity claim. Efron–Tibshirani explicitly omit most proofs; the empirical-measure probability, conditional IID identity, and finite subset law are proved here. The exact finite examples are directly enumerated. The failed Springer transport was resolved to the accessible Stanford report copy, while preserving the original fetch attempts and per-item arguments in `source_resolution`; the drop applies only to that transport URL, not to mathematical coverage.

## Axioms and mathematical limits

The finite probability and subset arguments are choice-free. The subset lemma uses clause 1 of the published finite-subset theorem; its induction proof of that clause is separate from its self-map clause. The function-count, product-rule, Dirac-measure, finite weighted-tail, and Fisher p-value supplier proofs were inspected at their actual cited clauses. No arbitrary-index product measure is used: the bootstrap index vectors have a finite explicitly weighted space. The assignment example uses the published finite assignment law and Fisher sharp null; it does not imply validity under a weak average-effect null.

The algorithms define resampling laws only. They do not assert consistency, coverage, or variance-estimation validity. In particular, this batch does not supply the BCS-48 conditional bootstrap CLT, BCS-49 m-out-of-n/subsampling validity conditions, BCS-50 block-bootstrap theorem, or the future consumer arguments in BCS-57.

## Checks and readiness

Final scoped checks on 2026-10-15:

- Manifest, two page placements, all 13 item identities, `deps`, `justified_by`, dependency levels, coverage identity/hash, proof-contract scope, and the empty cross-batch input were synchronized: 2 pages and 13 items, no mismatch.
- Batch-only `dependencyLevels` check: 13 items, levels 0–4, no errors. The dependency closure contains 315 external items, all present and published; no unowned draft or missing supplier was found.
- `proof-contract.mjs --strict`: 13/13 contracts checked, zero errors or warnings.
- Scoped phase precheck: 8/8 proof-bearing items passed. Definitions and algorithms have `verification.precheck: n/a`; proof-bearing drafts record `pass`.
- `proof-layout.mjs`: 13 items, 25 numbered steps, zero defects.
- `rendercheck.mjs`: 15 changed item/page files, zero errors or warnings.
- Focused `depcheck`: 13 item checks plus the two pages and prerequisite cycle closure passed with zero errors/warnings. Focused `fwdcheck`, `extcheck`, and `content-policy` also passed with zero errors/warnings.
- `source-fetch-check --stamp`: 3/4 sources fetch-verified and 4/4 resolved, with one documented Springer transport drop backed by the stamped Stanford full-text copy. No new fetch was needed.
- `step1-decisions` records: all 13 batch items are `ready`; each row names its examined direct dependencies and uses the current item/dependency hash. These authoring readiness records are not independent approval.

The required run-wide `node tools/item-dependency-levels.mjs check --run bayesian-computational-statistics-62` currently fails only because 56 page inventories are empty in 28 other BCS pairs. Those A pages and their `-examples` companions are: `misspecified-posterior-consistency`, `parametric-bernstein-von-mises-and-misspecification`, `gaussian-process-support-and-concentration`, `gaussian-process-posterior-contraction`, `dirichlet-normal-mixture-contraction`, `functional-bayesian-limits-and-credible-set-calibration`, `adaptive-empirical-bayes-credible-set-calibration`, `laplace-approximation-and-marginal-integration`, `approximate-bayesian-computation-and-simulation-based-inference`, `mcmc-ergodicity-and-mixing`, `mcmc-clt-and-monte-carlo-standard-error`, `hamiltonian-monte-carlo-and-leapfrog`, `langevin-monte-carlo-mala-and-ula`, `adaptive-mcmc-convergence-and-limitations`, `mcmc-diagnostics-and-finite-run-limitations`, `kalman-filtering`, `kalman-smoothing-and-rts-recursion`, `feynman-kac-particle-filters`, `smc-clts-error-and-degeneracy`, `particle-smoothing-backward-simulation-and-rbpf`, `particle-mcmc-pmmh-and-particle-gibbs`, `data-assimilation-variational-and-ensemble-methods`, `abc-mcmc-and-sequential-abc`, `multilevel-monte-carlo`, `randomized-quasi-monte-carlo-and-replicates`, `synthetic-likelihood-and-indirect-inference`, `identifiability-and-approximation-bias-in-computational-inference`, and `marginal-likelihoods-bayes-factors-and-empirical-bayes`. Batch 50 has no empty inventory and its scoped dependency check passes; these other pairs were not edited.

Published supplier items remain external context; no published content, shared plan, verdict, or engine state was edited.
