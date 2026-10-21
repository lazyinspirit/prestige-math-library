# Batch 23 authoring notes — inverse-problems-knot-theory-all-109-2026-10-19

## Scope, design, and plan reconciliation

This handoff covers only the A/B pair `posterior-computation-error-and-diagnostics`, its draft items and pages, and batch-23 evidence. The run-local owner direction was read before authoring and controls the frontmatter-only, no-summary page format. Both page bodies are empty. No published item, other pair, shared plan, engine state, or verdict was edited.

The complete IP-23 design at `research/plan-inverse-problems-track.md` §IP-23 (design entry near line 568) names `def-ip-posterior-computation-error-budget` and `prop-ip-bounded-posterior-functional-error` for A, with short-run exact-invariant sampling, biased PDE solver, and low-ESS examples for B. A adds one local bookkeeping definition before the proposition. The 100-item cap is not close to binding.

The design prose lists three extra A-page requirements: `statistical-and-computational-error-accounting`, `mcmc-diagnostics-and-finite-run-limitations`, and `feynman-kac-particle-filters`. The current `research/plan-spec.json` row and generated batch-23 manifest instead require only `hellinger-posterior-stability-and-discretization`, `function-space-mcmc-and-pcn`, and `stationary-markov-chains-and-ergodic-limits`; B requires A. I preserved the current plan-spec interface. The local proposition cites the published statistical-error ledger and ESS definition where its claims need them; no Feynman–Kac result is used. This conflict is recorded here and was not resolved by editing the shared plan.

Scheduling input: `394b3a6ddc24d5039024b0a5f3fa1ca2983c11bce6777cd1089a3afdc1d9e4e8`. The batch dependency-level record places batch 23 at level 4, after batches 17 and 22.

## Inventory, direct dependencies, and levels

The manifest records every direct dependency. Levels were recomputed over this batch's actual item graph: zero without an in-run supplier; otherwise one plus the maximum in-run supplier level. Items were authored in that ascending order.

| Level | Item | Direct dependencies |
|---:|---|---|
| 0 | `def-ip-posterior-computation-error-budget` | `def-axiom-of-choice`; `def-expectation-of-a-nonnegative-or-integrable-random-variable`; `def-invariant-and-stationary-distribution-for-a-markov-kernel`; `def-measure-kernel-and-probability-kernel`; `def-probability-measure`; `def-statistical-and-computational-error-ledger`; `def-time-homogeneous-markov-chain-with-transition-kernel` |
| 1 | `prop-ip-bounded-posterior-functional-error` | `def-axiom-of-choice`; `def-expectation-of-a-nonnegative-or-integrable-random-variable`; `def-invariant-and-stationary-distribution-for-a-markov-kernel`; `def-ip-posterior-computation-error-budget`; `def-moments-variance-and-covariance`; `def-probability-measure`; `def-stationary-process-and-canonical-shift`; `def-time-homogeneous-markov-chain-with-transition-kernel`; `def-total-variation-distance-for-probability-laws`; `thm-pathwise-error-ledger-decomposition`; `thm-total-variation-bounds-for-expectations` |
| 2 | `ex-ip-exact-invariant-kernel-short-run` | `def-axiom-of-choice`; `def-invariant-and-stationary-distribution-for-a-markov-kernel`; `def-ip-posterior-computation-error-budget`; `def-measure-kernel-and-probability-kernel`; `def-moments-variance-and-covariance`; `def-probability-measure`; `def-time-homogeneous-markov-chain-with-transition-kernel`; `prop-ip-bounded-posterior-functional-error` |
| 2 | `ex-ip-low-ess-despite-correct-invariance` | `def-axiom-of-choice`; `def-functional-specific-effective-sample-size`; `def-invariant-and-stationary-distribution-for-a-markov-kernel`; `def-ip-posterior-computation-error-budget`; `def-measure-kernel-and-probability-kernel`; `def-moments-variance-and-covariance`; `def-probability-measure`; `def-stationary-process-and-canonical-shift`; `def-time-homogeneous-markov-chain-with-transition-kernel`; `prop-ip-bounded-posterior-functional-error`; `thm-invariant-initial-law-makes-the-chain-stationary` |
| 2 | `ex-ip-biased-pde-solver-posterior-error` | `def-axiom-of-choice`; `def-ip-posterior-computation-error-budget`; `def-probability-measure`; `def-standard-normal-and-normal-laws`; `prop-ip-bounded-posterior-functional-error` |

The two in-run dependency edges are definition → proposition → each B example. Local dependency-level verification returns levels 0, 1, 2, 2, 2 with no cycles or label errors. The complete synchronized inventory, statements, dependency arrays, source metadata, axiom branches, and provenance are in [batch pages](inverse-problems-knot-theory-all-109-2026-10-19-batch-23.pages.json).

## Supplier inspection and exact interfaces

- The actual current IP-17 `thm-ip-hellinger-data-stability` and `thm-ip-posterior-potential-discretization-error` bodies and complete proofs were inspected. Their convention is the library root-L2 Hellinger distance; the potential theorem has its own weighted error assumptions and is not silently reduced to a generic solver or kernel estimate. The source Dashti–Stuart Theorem 4.9 uses a strictly positive `M2` hypothesis; the local supplier states a nonnegative range and proves its bound locally, so the source theorem is not treated as its proof. All six batch-17 records are `ready` and their stored hashes match the current supplier inputs.
- The actual IP-22 pCN algorithm and posterior-invariance proof were inspected. The theorem proves invariance only; it supplies no uniqueness, convergence, mixing, ESS, approximate-solver accuracy, or mesh-cost conclusion. All eight batch-22 records are `ready` and their stored hashes match the current supplier inputs.
- The published stationary-Markov-chain definitions and stationarity result used here were inspected. The proposition assumes stationarity for its finite-N variance identity and separately states absolute covariance summability. No central limit theorem follows or is claimed.
- Direct published definitions and proofs for probability kernels, invariant and stationary laws, probability measures, expectation, moments and covariance, total variation, the pathwise ledger decomposition, standard normal laws, functional-specific ESS, and the invariant-initial-law stationarity theorem were inspected. The exact dependency IDs and conventions appear in each carrier's `Facts & Assumptions` and the proof contracts.

Current body and hash checks for IP-17 and IP-22 are supplier evidence only, not independent approval or publication. There are no direct cross-batch item edges in the five authored items; the two required in-run page edges are recorded in [cross-batch dependency evidence](inverse-problems-knot-theory-all-109-2026-10-19-batch-23.cross-batch-dependencies.json). The published stationary page is not an in-run edge.

## Claims and proof review

- `def-ip-posterior-computation-error-budget` compares adjacent laws on one measurable space, requiring an explicit measurable pushforward when stage spaces differ. It defines the implemented kernel's invariant-law discrepancy separately from a one-step kernel distance, splits expected burn-in from pathwise Monte Carlo fluctuation, and never sets unavailable terms to zero. The TikZ-CD chain is explanatory; the proposition proves the scalar inequality directly.
- `prop-ip-bounded-posterior-functional-error` uses the library event-supremum convention, so the bounded-expectation factor is 2. Its stationary finite-N identity counts diagonal and lagged covariance terms; absolute summability gives the stated $1/N$ upper bound. This is not a CLT or confidence interval. AC is used only by the existing time-homogeneous Markov-chain interface; the expectation and covariance algebra are choice-free.
- `ex-ip-exact-invariant-kernel-short-run` checks the symmetric two-state kernel directly: $q=1-2\varepsilon=499/500$, $\mathbb E X_j=q^j$, and summing $j=1,\ldots,100$ gives the positive displayed average while $\pi(f)=0$. This error is in the finite-run/burn-in component.
- `ex-ip-low-ess-despite-correct-invariance` has stationary autocorrelation $\rho_f(k)=(49/50)^k$, integrated autocorrelation time $1+2\sum_{k\ge1}(49/50)^k=99$, and theoretical ESS $10000/99$. It does not assert a CLT or validate empirical ESS.
- `ex-ip-biased-pde-solver-posterior-error` explicitly assumes the toy solver output $u+2$. Completing the square gives $N(0,1/2)$ and $N(-1,1/2)$, and the indicator expectation difference is $\Phi_0(\sqrt2)-1/2>0$. No claim about general PDE discretization bias is made.

## Sources and retrieval

Two independent full-text treatments support A, including the Levin–Peres–Wilmer textbook. Both pages have source locators, harvested result dispositions, and each source's actual fetch stamp in [coverage](inverse-problems-knot-theory-all-109-2026-10-19-batch-23.coverage.json); the consolidated retrieval and reading record is [source evidence](inverse-problems-knot-theory-all-109-2026-10-19-batch-23.source-evidence.json). The six unique sources are Dashti–Stuart, Cotter–Roberts–Stuart–White, Gibbs–Su, Geyer, Levin–Peres–Wilmer, and Vehtari et al. The relevant complete arguments were inspected at the recorded locators. No retrieval failure occurred, no recovery retry was added, and no source was dropped or escalated in `source_resolution`; no mathematical coverage was waived.

## Contracts, checks, and readiness

The proof contract file contains all five items, actual proof steps and supplier excerpts, the eight-case boundary worksheet, axiom branches, the finite normal-normal smoke assertion, and author self-risk notes. The local normal-normal finite check examines 27 finite models and tests only posterior mean/variance parameters; it is not evidence for general solver accuracy.

Final scoped checks:

- `proof-layout`: 5 items, 14 numbered steps, 0 defects.
- `proof-contract --strict`: 5/5 contracts checked, 0 errors, 0 warnings.
- `finite-smoke`: the registered `normal-normal-finite-n-posterior` check passed its 27 finite-model calculations.
- `rendercheck`: all 5 items and both pages passed, 0 errors and warnings; page bodies remain empty.
- `content-policy`: 5 items, 0 errors and warnings.
- `coverage-checklist`: 2 pages, 9 harvested results, 0 errors and warnings.
- `source-fetch-check --stamp`: 8/8 source occurrences fetch-verified and resolved; 0 new stamps and 0 documented drops.
- Focused item dependency levels: all five labels match, no errors. Run-wide dependency-level check: 82 unrelated errors (75 empty scaffold inventories and 7 other label/value defects); zero batch-23 item errors.
- Native `step1-decisions record` created non-owner `ready` records for each of the five items, with exact direct dependencies and evidence. These are authoring-readiness records, not independent approval or publication. The run-wide Step-1 check remains open because other batches still contain escalations and empty scaffold inventories.

No tests were added or run. No source-resolution drop was claimed. Native workflow ownership, external review, and publication remain with the owner.

## Live run reconciliation

After authoring, recomputed native Autopilot status from `.autopilot/inverse-problems-knot-theory-all-109-2026-10-19`: at 2026-10-18T22:45:30Z the run remains at `1-scaffold`, 57/109 pairs are covered, no worker is in flight, and batch 23 is still listed as missing along with batches 20, 21, 24, 27–30 and 44 more. The existing owner-held blocker file requires Step-1 repair and recertification before transition. The five item readiness records are closed and their hashes match the current inputs; this does not create native pair coverage or a dispatch receipt. No engine state was changed. Current `git log -1` is `50139bdcb6 Defer compact construction artifact scans until author drain`.
