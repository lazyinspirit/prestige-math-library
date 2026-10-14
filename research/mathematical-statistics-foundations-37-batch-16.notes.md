# Batch 16 authoring notes — Chaining and Uniform Limits

Run `mathematical-statistics-foundations-37`, beta batch 16. The dispatch scheduling input is `dd05d82b8e5bf49626aa96d504293f4afc76b61792a92c3d8eaa81be00ba597c`. The stored `batch-dependency-levels.json` records input hash `6e1c86944ecd4ef6db1a3278746ff762bf62c176309acd6c8da4e73df54b6f80`. Both specify batch dependency level 3 and prerequisites 13, 14, and 15; the hash discrepancy does not change this batch's declared schedule.

## Controlling design and conflict record

The controlling design is `research/plan-mathematical-statistics-track.md`, MSF-20 (the MSF-20 row at line 97). It commissions the uniform-law, empirical-risk, chaining, bracketing-equicontinuity, functional-limit and example claims authored here. `research/plan-statistical-models-experiments-track.md` line 60 is a cross-category interface reference; it does not supersede the mathematical-statistics item scope or proof route. `research/plan-spec.json` agrees on page IDs, category, title, order and page prerequisites; its empty item arrays are pre-authoring placeholders, not a conflicting inventory. The older `research/mathematical-statistics-foundations-37-planning-scope.json` / `foundations-04` dossier has stale item names and broader claims and is superseded by the controlling plan and `research/mathematical-statistics-foundations-37-owner-authoring-direction.md`.

No mathematical claim was narrowed to resolve these planning differences. Batch 16 retains the controlling fixed-$P$ bracketing and explicit measurability/axiom scope.

## Inventory and dependency levels

The A page has 8 items and the B page has 3; both are below the 100-item cap. The batch dependency-level file assigns this batch level 3 with prerequisites 13–15. Item `dependency_level` values below are the computed item-DAG levels, distinct from the batch level. Carrier frontmatter and manifest dependency lists agree.

| Item | Item level | Direct dependencies |
|---|---:|---|
| `def-glivenko-cantelli-class` | 1 | `def-empirical-process-and-rademacher-process`; `thm-dominated-convergence` |
| `thm-empirical-risk-oracle-bound` | 1 | `def-empirical-process-and-rademacher-process` |
| `lem-empirical-process-bracketing-maximal-inequality` | 1 | `def-empirical-process-and-rademacher-process`; `lem-probability-measure-basic-identities`; `thm-dominated-convergence`; `thm-bernstein-independent-sums`; `thm-layer-cake-formula-for-l-p-powers` |
| `def-donsker-class-and-asymptotic-equicontinuity` | 2 | `def-empirical-process-and-rademacher-process`; `def-covering-packing-bracketing-number-and-metric-entropy`; `def-convergence-in-distribution-of-random-elements`; `def-tight-family-of-probability-measures` |
| `thm-dudley-entropy-integral` | 2 | `def-covering-packing-bracketing-number-and-metric-entropy`; `def-subgaussian-variable-and-vector` |
| `thm-gc-by-bracketing-entropy` | 2 | `def-glivenko-cantelli-class`; `lem-probability-measure-basic-identities`; `def-countable-choice`; `def-empirical-process-and-rademacher-process`; `def-covering-packing-bracketing-number-and-metric-entropy`; `thm-dominated-convergence`; `thm-kolmogorov-iid-l1-strong-law` |
| `cex-pointwise-strong-laws-do-not-imply-uniform-law` | 2 | `def-empirical-process-and-rademacher-process`; `def-glivenko-cantelli-class`; `def-identically-distributed-and-iid-random-variables`; `lem-probability-measure-basic-identities`; `def-probability-measure` |
| `lem-empirical-process-asymptotic-equicontinuity-from-bracketing-entropy` | 3 | `def-donsker-class-and-asymptotic-equicontinuity`; `def-empirical-process-and-rademacher-process`; `def-covering-packing-bracketing-number-and-metric-entropy`; `def-countable-choice`; `cor-markov-inequality-for-random-variables`; `lem-empirical-process-bracketing-maximal-inequality`; `thm-dominated-convergence` |
| `ex-threshold-class-is-glivenko-cantelli` | 3 | `def-countable-choice`; `def-covering-packing-bracketing-number-and-metric-entropy`; `def-empirical-process-and-rademacher-process`; `def-glivenko-cantelli-class`; `thm-gc-by-bracketing-entropy` |
| `thm-empirical-process-functional-clt` | 4 | `def-axiom-of-choice`; `def-asymptotic-distribution`; `def-donsker-class-and-asymptotic-equicontinuity`; `def-empirical-process-and-rademacher-process`; `def-countable-choice`; `def-covering-packing-bracketing-number-and-metric-entropy`; `def-metric-completion`; `def-metric-space`; `def-multivariate-normal-law`; `def-polish-space`; `def-standard-borel-space`; `def-borel-sigma-algebra`; `def-tight-family-of-probability-measures`; `cor-first-borel-cantelli-lemma-for-events`; `cor-markov-inequality-for-random-variables`; `lem-countable-uniformly-dense-tests-on-a-compact-metric-space`; `lem-empirical-process-asymptotic-equicontinuity-from-bracketing-entropy`; `lem-characteristic-function-of-a-normal-law`; `lem-probability-measure-basic-identities`; `thm-c-k-complete-in-the-sup-metric`; `thm-complete-and-totally-bounded-implies-compact`; `thm-cramer-wold-device`; `thm-dominated-convergence`; `thm-every-borel-probability-on-a-polish-space-is-tight`; `thm-euclidean-space-complete`; `thm-kolmogorov-extension-for-standard-borel-coordinate-spaces`; `thm-metric-completion-exists`; `thm-multivariate-iid-central-limit-theorem`; `thm-rationals-countable`; `thm-uniqueness-of-a-law-from-its-characteristic-function`; `thm-dudley-entropy-integral` |
| `ex-uniform-empirical-cdf-converges-to-brownian-bridge` | 5 | `def-donsker-class-and-asymptotic-equicontinuity`; `def-empirical-process-and-rademacher-process`; `def-covering-packing-bracketing-number-and-metric-entropy`; `thm-empirical-process-functional-clt`; `def-axiom-of-choice` |

All suppliers were placed before consumers in item-level order. The full current item dependency check passes: 477 items across 74 pages, maximum level 12, no label errors or cycles.

## Proof routes and axioms

- The Glivenko–Cantelli definition states pointwise measurability and the outer-probability convention. Finite $L^1(P)$ bracketing yields the probability law through clipped integrable endpoints, finite endpoint SLLNs, and pointwise-measurable approximation. That branch is choice-free. Countable Choice is used only to select covers at countably many scales for the almost-sure branch.
- The empirical-risk result is the deterministic two-deviation comparison for an arbitrary approximate minimizer; it assumes a nonempty class and finite lower population-risk infimum and uses no exact minimizer or axiom.
- The Dudley proof derives the finite sub-Gaussian maximum bound, constructs nets by least-index enumeration in a specified dense set, telescopes the process, controls the residual, and bounds the dyadic sum by the entropy integral. Its selections are choice-free under the stated listing/separability assumptions.
- The local empirical maximal inequality uses Bernstein tails, layer-cake integration, envelope truncation, nested finite partitions, first-failed-cutoff decomposition, residual-width compensation and summation. The entropy-equicontinuity lemma forms brackets for centered differences, refines finite partitions cumulatively, applies this local inequality, then transfers from the pointwise-dense subclass. Countable Choice is explicitly assumed for the countable bracket selections.
- The functional CLT constructs consistent Gaussian finite-dimensional laws, a continuous tight Gaussian version, and the process limit by finite-net approximation after proving finite-dimensional convergence and asymptotic equicontinuity. AC is used for the multivariate iid CLT, Gaussian extension and tightness; Countable Choice is used for metric completion and countable constructions. The CDF example carries AC. The strong threshold example carries Countable Choice.
- The counterexample proves each fixed finite subset is null by explicit interval covers and finite subadditivity, then uses countable subadditivity for its pointwise strong law; the realized sample set witnesses uniform deviation one. The threshold example gives finite $L^1$ brackets, and the empirical-CDF example gives finite $L^2$ brackets, an integrable entropy bound and the covariance $\min(s,t)-st$.

The nine proof-bearing items have contracts with actual numbered steps, claims, input labels, cited supplier excerpts, boundaries and axiom uses. The two definitions are marked non-proof items.

## Sources, reading and dispositions

Source locators, supported items, harvested results, each result's disposition and retrieval stamps are recorded in `research/mathematical-statistics-foundations-37-batch-16.coverage.json`.

- David Pollard, *Empirical Processes: Theory and Applications*, complete author-hosted 1990 text: http://www.stat.yale.edu/~pollard/Books/Iowa/Iowa-notes.pdf. Read Sections 3–4 (printed pp. 9–20) and 8–10 (printed pp. 39–56), including the full chaining proofs and the empirical-process measurability/uniform-law/function-limit arguments. Relevant results are harvested for the Dudley bound, Donsker conventions, functional CLT and examples; alternate manageability/VC results are marked out of scope where listed in coverage.
- Jon A. Wellner, *Empirical Processes: Theory and Applications*, complete corrected 2005 University of Washington notes: https://faculty.washington.edu/jonw/RESEARCH/TALKS/Delft/emp-proc-delft-big.pdf. Read Chapter 1 §§2–3 and 6–7 (PDF pp. 6–58 for the A page), including full proofs of the functional-convergence criterion, Dudley bound, finite-$L^1$ bracketing GC result, maximal inequality, and bracketing equicontinuity/Donsker route. The B page also records §§1–2 and 6–7. The VC theorem and alternative hypotheses are explicitly out of scope in coverage.
- Cornell CS 3780/5780, Lecture 16, *Empirical Risk Minimization and Model Selection*, complete official nine-page PDF: https://www.cs.cornell.edu/courses/cs5780/2025sp/notes/lec16-erm-model-selection.pdf. Read pp. 1–5 and the full finite-class exact-ERM oracle proof on pp. 4–5; the carrier proves the nonempty-class, approximate-minimizer extension directly.

The coverage file has 5 source entries across the A/B pages (3 distinct URLs) and 21 harvested results. Retrieval succeeded for 5/5 source entries; all are stamped. No source was dropped, no retrieval failed, and no `source-resolution` recovery/escalation record was needed. No reading beyond the recorded full-text ranges is claimed.

## Cross-batch evidence and owner readiness

The 23 batch-16 cross-batch item/page edges are all `verified`. The batch-15 empirical-process carrier and manifest dependency sets agree; its current owner Step 1 record marks construction readiness and the inspected $P_n$, $P$, $\mathbb G_n$, iid, and outer/separable conventions match these consumers. The batch-15 entropy carrier and manifest list the same six dependencies, including `thm-real-power-laws`; its current owner Step 1 record also marks construction readiness. Closed class-centered balls, measurable almost-sure bracket endpoints, and $L^1/L^2$ widths match the consumers. These are construction-interface checks, not mathematical acceptance. The prerequisite-page edge was checked against the actual page inventory and prose.

The owner resolution `research/mathematical-statistics-foundations-37-owner-entropy-supplier-resolution.json` reconciled the seven original E16 escalations and records that root owns native readiness/hash reconciliation. Current batch-16 Step 1 records for those items are owner-written `ready` records. I did not use `--owner` or edit an owner decision. At this handoff, the owner records for `def-donsker-class-and-asymptotic-equicontinuity` and `thm-gc-by-bracketing-entropy` are hash-closed; the current owner records for `thm-dudley-entropy-integral`, `lem-empirical-process-asymptotic-equicontinuity-from-bracketing-entropy`, `thm-empirical-process-functional-clt`, `ex-threshold-class-is-glivenko-cantelli`, and `ex-uniform-empirical-cdf-converges-to-brownian-bridge` report changed-item/dependency hashes and require root reconciliation. The equicontinuity and threshold carriers now state their exact entropy/empirical-process supplier interfaces in labeled facts; no owner record was overwritten.

The four non-owner records are `ready`: `def-glivenko-cantelli-class` and `lem-empirical-process-bracketing-maximal-inequality` remain closed; the changed `thm-empirical-risk-oracle-bound` and `cex-pointwise-strong-laws-do-not-imply-uniform-law` records were re-recorded as `ready` against their current item hashes and exact dependencies. The maximal-inequality item was restored to its handoff-time supplier note and its record remains hash-closed. All readiness here is construction status only; it is not independent review or acceptance.

## Scoped check results

- Precheck: 9 proof-bearing items, 0 failures (2 definitions are not applicable).
- Proof layout: 11 explicitly changed items, 42 steps, 0 defects.
- Strict proof contracts: 11/11 items, 0 errors, 0 warnings.
- Manifest dependency check: 11 items, 0 normalized, 0 errors.
- Content policy: 11 items, 0 errors and 0 warnings.
- Scoped dependency check: 11 selected items; their prerequisite closure covers 1,627 items and 161 pages; no errors or cycles.
- Render check: 13 files (11 carriers and 2 pages), no math, link or frontmatter defects.
- Coverage checklist: 2 pages, 21 harvested results, 0 errors and 0 warnings.
- Source fetch check: 5/5 source entries resolved and fetch-verified, 0 drops.
- Whole-run item dependency-level check: pass, 477 items across 74 pages, maximum item level 12.

No published content, shared plans, shared dependency state, other batch carriers, or review verdicts were edited. Batch 16 remains a draft authoring handoff.
