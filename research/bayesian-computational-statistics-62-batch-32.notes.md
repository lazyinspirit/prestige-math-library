# Bayesian and Computational Statistics — batch 32 notes

Run: `bayesian-computational-statistics-62`  
Pair: `general-state-mcmc-kernels-and-reversibility` / `general-state-mcmc-kernels-and-reversibility-examples`  
Batch dependency level: **0**; prerequisite batches: **none**.  
Pinned scheduling input: `3faf79c7beba2f8b8c08044990a75629578be37e9469ad8ef11a95f86a8627d0`.

## Plan comparison and conflict record

The generated task and `research/plan-spec.json` agree on the A/B page IDs,
order (2104/2105), category, titles, and page requirements. The controlling
design is BCS-29, `research/plan-bayesian-computational-statistics-track.md`
§BCS-29 (line 151); its item inventory table (line 309) names
`def-general-state-reversibility-by-symmetric-flow-measure` and
`thm-general-state-reversibility-implies-invariance`. The current `plan-spec`
still has empty `items` arrays for these pages. I followed the controlling
design and recorded those two A-page items in the batch manifest. The design
also requires the finite reversible matrix, continuous symmetric random walk,
and invariant-but-nonreversible systematic composition; the three B-page
examples cover those cases. The plan-spec inventory is the only discrepancy;
the mathematical scope was not narrowed.

The design's four item-level `Requires` interfaces were inspected. The
published required stationary-chain page contains the general invariant-kernel
definition. Its time-homogeneous-chain definition and Chapman–Kolmogorov
theorem concern chain laws and iterates; the new result is kernel-level and
uses neither. The page requirement remains declared as assigned. The existing
`def-reversible-measure-and-detailed-balance` and
`lem-detailed-balance-implies-invariance` are countable-state results; they are
used only as special-case context, not as suppliers of the general-state proof.

## Inventory, dependencies, and levels

| Item | Home | In-batch suppliers | Level |
|---|---|---|---:|
| `def-general-state-reversibility-by-symmetric-flow-measure` | A | none | 0 |
| `thm-general-state-reversibility-implies-invariance` | A | definition | 1 |
| `ex-finite-two-state-reversible-markov-kernel` | B | definition, theorem | 2 |
| `ex-continuous-symmetric-random-walk-on-the-circle` | B | definition, theorem | 2 |
| `cex-systematic-composition-of-reversible-kernels-is-not-reversible` | B | definition, theorem | 2 |

The full direct `deps` arrays are in the batch manifest. The assigned-item
dependency-level calculation reports 5 items, no errors, and levels matching
the manifest. External suppliers do not raise those levels. Batch 32 has no
in-run batch supplier, so its scheduled level remains zero. The full run DAG
could not be recomputed because of the unrelated malformed title recorded
under “Run-wide blockers”; the shared scheduling artifact was not changed.

## Mathematical and supplier audit

The A definition makes the kernel joint flow an explicit probability measure
on the product sigma-algebra, defines the coordinate-transpose measure, and
states reversibility as equality of those measures. The published
`lem-prior-and-model-kernel-define-joint-law` applies to arbitrary measurable
spaces and supplies the nonnegative iterated-integral identity. The theorem
applies that identity to the two coordinate marginals; it needs no density,
standard-Borel hypothesis, recurrence condition, or choice axiom.

The finite example checks all four joint-flow atoms for the two-state matrix.
The circle walk checks the entire joint-flow measure using translation
invariance, including its atomic transition law. It inherits only
`AC_omega` from the existing normalized-circle-measure definition; the kernel
calculation itself uses no choice. The composition counterexample explicitly
uses the library's chronological convention: swapping 0/1 and then 1/2 gives
the cycle 0→2→1→0, whose uniform law is invariant but whose (0,2) and (2,0)
flow masses differ.

All direct external item suppliers listed in
`bayesian-computational-statistics-62-batch-32.cross-batch-dependencies.json`
were inspected in their current carriers. No assigned item has an absent or
unresolved supplier.

## Sources and retrieval

The A-page has two independent full-text treatments, including a book source:

- Roberts and Rosenthal, “General State Space Markov Chains and MCMC
  Algorithms,” §2, Definition and Proposition 1, PDF pp. 4–5. The complete
  64-page PDF was retrieved and pages 4–6 were inspected. Its reversibility
  definition and stationarity consequence support the local measure-level
  argument; the Metropolis–Hastings construction is recorded out of scope for
  BCS-29.
- Meyn and Tweedie, *Markov Chains and Stochastic Stability*, Ch. 10,
  §10.1.1, printed pp. 235–237. The complete 26-page chapter PDF was retrieved.
  The embedded text encoding did not extract cleanly, so the relevant pages
  235–238 were rendered and inspected. Invariant-measure equations support the
  setwise conclusion; recurrence, uniqueness, and subinvariance results are
  recorded out of scope.

The coverage file records seven harvested results and their dispositions.
`source-fetch-check --stamp` verified both full-text URLs: Roberts–Rosenthal,
404,183 bytes, 64 pages, SHA-256 prefix `74427b1238e2de80`; Meyn–Tweedie,
254,483 bytes, 26 pages, SHA-256 prefix `152890b0d271bb65`. Each source had one
successful fetch attempt, with no retrieval failures, retries, drops, or
`source_resolution` entries.

## Scoped checks and readiness

All five item decision records are current and `ready`. The definition has no
proof phase; the other four items have complete local arguments and strict
proof contracts. These are authoring-readiness records, not independent
approval.

| Check | Result |
|---|---|
| Assigned item dependency levels | 5 items; levels 0, 1, 2, 2, 2; 0 errors |
| `manifest-deps` | 5 items; 0 missing arrays; 0 errors |
| `content-policy` | 5 scoped items; 0 errors; 0 warnings |
| focused `depcheck` | 5 items / 2 pages; 0 errors; 0 warnings |
| focused `fwdcheck` | 0 errors; 0 warnings |
| focused `extcheck` | 5 items; 0 errors; 0 warnings |
| `precheck` | 5 files; 4 proofs passed; definition not applicable; 0 failed |
| strict proof-contract check | 5/5 contracts; 0 errors; 0 warnings |
| explicit `proof-layout` | 5 items; 15 steps; 0 defects |
| `rendercheck` | 5 items and 2 pages; 0 errors; 0 warnings |
| `coverage-checklist` | 1 A page; 7 harvested results; 0 errors; 0 warnings |
| `source-fetch-check` | 2/2 sources verified |

## Run-wide blockers outside batch 32

The run-wide `item-dependency-levels.mjs check --run
bayesian-computational-statistics-62` is not clean: it reports 66 empty
inventories on other pages and 19 existing level mismatches. The empty-page
inventory is:

`conjugate-families-and-posterior-prediction`, `conjugate-families-and-posterior-prediction-examples`, `marginal-likelihoods-bayes-factors-and-empirical-bayes`, `marginal-likelihoods-bayes-factors-and-empirical-bayes-examples`, `misspecified-posterior-consistency`, `misspecified-posterior-consistency-examples`, `parametric-bernstein-von-mises-and-misspecification`, `parametric-bernstein-von-mises-and-misspecification-examples`, `gaussian-process-priors-and-posterior-laws`, `gaussian-process-priors-and-posterior-laws-examples`, `gaussian-process-support-and-concentration`, `gaussian-process-support-and-concentration-examples`, `gaussian-process-posterior-contraction`, `gaussian-process-posterior-contraction-examples`, `dirichlet-process-priors-and-finite-partition-updates`, `dirichlet-process-priors-and-finite-partition-updates-examples`, `dirichlet-normal-mixture-contraction`, `dirichlet-normal-mixture-contraction-examples`, `functional-bayesian-limits-and-credible-set-calibration`, `functional-bayesian-limits-and-credible-set-calibration-examples`, `adaptive-empirical-bayes-credible-set-calibration`, `adaptive-empirical-bayes-credible-set-calibration-examples`, `em-algorithm-and-latent-variable-likelihood-ascent`, `em-algorithm-and-latent-variable-likelihood-ascent-examples`, `variational-inference-and-evidence-lower-bound`, `variational-inference-and-evidence-lower-bound-examples`, `laplace-approximation-and-marginal-integration`, `laplace-approximation-and-marginal-integration-examples`, `approximate-bayesian-computation-and-simulation-based-inference`, `approximate-bayesian-computation-and-simulation-based-inference-examples`, `mcmc-ergodicity-and-mixing`, `mcmc-ergodicity-and-mixing-examples`, `mcmc-clt-and-monte-carlo-standard-error`, `mcmc-clt-and-monte-carlo-standard-error-examples`, `hamiltonian-monte-carlo-and-leapfrog`, `hamiltonian-monte-carlo-and-leapfrog-examples`, `langevin-monte-carlo-mala-and-ula`, `langevin-monte-carlo-mala-and-ula-examples`, `adaptive-mcmc-convergence-and-limitations`, `adaptive-mcmc-convergence-and-limitations-examples`, `mcmc-diagnostics-and-finite-run-limitations`, `mcmc-diagnostics-and-finite-run-limitations-examples`, `kalman-filtering`, `kalman-filtering-examples`, `kalman-smoothing-and-rts-recursion`, `kalman-smoothing-and-rts-recursion-examples`, `feynman-kac-particle-filters`, `feynman-kac-particle-filters-examples`, `smc-clts-error-and-degeneracy`, `smc-clts-error-and-degeneracy-examples`, `particle-smoothing-backward-simulation-and-rbpf`, `particle-smoothing-backward-simulation-and-rbpf-examples`, `particle-mcmc-pmmh-and-particle-gibbs`, `particle-mcmc-pmmh-and-particle-gibbs-examples`, `data-assimilation-variational-and-ensemble-methods`, `data-assimilation-variational-and-ensemble-methods-examples`, `abc-mcmc-and-sequential-abc`, `abc-mcmc-and-sequential-abc-examples`, `multilevel-monte-carlo`, `multilevel-monte-carlo-examples`, `randomized-quasi-monte-carlo-and-replicates`, `randomized-quasi-monte-carlo-and-replicates-examples`, `synthetic-likelihood-and-indirect-inference`, `synthetic-likelihood-and-indirect-inference-examples`, `identifiability-and-approximation-bias-in-computational-inference`, `identifiability-and-approximation-bias-in-computational-inference-examples`.

The 19 existing level mismatches are: `def-posterior-predictive-law` 1→2;
`thm-posterior-predictive-mixture-is-a-kernel` 2→3;
`thm-posterior-predictive-moment-decomposition` 3→4;
`def-posterior-credible-set` 1→2;
`lem-measurable-posterior-quantile-and-cdf-bracketing` 2→3;
`thm-central-posterior-quantile-interval-is-credible` 3→4;
`def-posterior-median` 1→2;
`lem-lower-posterior-median-is-measurable` 3→4;
`def-posterior-risk-and-bayes-action` 1→2;
`thm-posterior-mean-is-squared-error-bayes-action` 2→3;
`thm-posterior-median-minimizes-absolute-risk` 4→5;
`thm-finite-class-maximal-mass-is-zero-one-bayes-action` 2→3;
`ex-posterior-predictive-mixture-adds-parameter-uncertainty` 4→5;
`ex-asymmetric-loss-changes-the-posterior-optimal-action` 3→4;
`ex-posterior-median-can-be-nonunique` 5→6;
`ex-continuous-density-mode-under-zero-one-loss` 2→3;
`ex-posterior-credible-interval-need-not-have-nominal-frequency-coverage` 4→5;
`thm-bootstrap-fails-at-nonsmooth-boundary-and-degenerate-mean-functionals` 2→4;
`ex-nonsmooth-boundary-bootstrap-failure` 3→5.

The run-wide `proof-contract-coverage` command also reports a missing contract
for `ex-holder-density-rate-from-entropy-balance`, outside this pair. Its
frontier scope is not batch-selectable; the strict contract check scoped to the
five batch-32 items passes.

A read-only full run batch-level recomputation is blocked by malformed YAML in
the unrelated item `items/ex-uniform-endpoint-bootstrap-failure-and-m-out-of-n-remedy.md`:
its line 3 title contains an unquoted colon (`Uniform endpoint: ordinary
bootstrap failure and the m-out-of-n remedy`). No source or shared scheduling
artifact was changed. The assigned batch still has no in-run batch supplier;
the owner must refresh the shared run graph after that separate carrier is
repaired.
