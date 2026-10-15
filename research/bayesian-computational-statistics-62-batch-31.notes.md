# Batch 31 — ordinary and self-normalized importance sampling

## Plan and scope comparison

The controlling BCS-28 design in `research/plan-bayesian-computational-statistics-track.md` §147, the assigned task, and the current `research/plan-spec.json` agree on A/B page IDs, order 2102/2103, category, titles, and the required B-page companion relationship. The current plan-spec entries have `items: []`; these are unfilled scaffold inventories, not conflicting claim inventories. The batch manifest records the seven planned A items and three B examples/counterexamples.

The design explicitly requires BCS-25 and conditionally imports the exact first-order delta theorem if its hypotheses match. The generated pair requirement additionally names `delta-method-and-asymptotic-normality`; this is consistent with the ratio-CLT route. The current published `thm-first-and-second-order-delta-method-for-random-vectors` accepts a Borel map with a pointwise first-order expansion, and the ratio proof verifies the map and expansion at the positive denominator limit. No scope or claim conflict was found.

## Item inventory and recomputed levels

Levels were recomputed from the batch 28 and batch 31 manifests after adding the actual BCS-25 result IDs to the local theorem dependencies. The scoped graph has 17 items across four pages, no cycles, and no level-label errors. Batch 31 remains level 1 with prerequisite batch 28.

| Item | Page | Level | In-run suppliers |
|---|---|---:|---|
| `alg-importance-sampling` | A | 0 | none |
| `thm-ordinary-importance-sampling-is-unbiased` | A | 1 | `alg-importance-sampling` |
| `thm-ordinary-importance-sampling-finite-variance-under-weighted-second-moment` | A | 2 | ordinary algorithm, unbiasedness theorem, BCS-25 mean-moments and scalar-CLT items |
| `alg-self-normalized-importance-sampling` | A | 0 | none |
| `thm-self-normalized-importance-sampling-is-consistent-under-finite-moments` | A | 2 | self-normalized algorithm and BCS-25 mean-consistency theorem |
| `thm-self-normalized-importance-sampling-ratio-clt-and-consistent-mcse` | A | 3 | self-normalized algorithm and consistency theorem |
| `def-importance-weight-effective-sample-size` | A | 1 | self-normalized algorithm |
| `ex-ordinary-and-self-normalized-importance-sampling-on-two-point-space` | B | 2 | ordinary algorithm, unbiasedness theorem, self-normalized algorithm |
| `cex-ordinary-importance-sampling-infinite-variance-under-light-tailed-proposal` | B | 3 | ordinary algorithm and weighted-second-moment theorem |
| `cex-importance-weight-ess-misses-target-region` | B | 2 | ESS definition and self-normalized algorithm |

Published measure, probability, moment, strong-law, multivariate-CLT, delta-method, and normal-law suppliers are outside this run and do not raise in-run levels.

## Supplier-body checks

Read the current BCS-25 A-page summary and all five actual A-item bodies. The direct local interfaces used here are `thm-iid-monte-carlo-mean-moments` (mean and variance of a real IID sample mean), `thm-iid-monte-carlo-mean-consistency` (almost-sure sample-mean convergence under a finite first absolute moment), and `thm-iid-monte-carlo-central-limit` (AC and positive finite variance). Their current Step-1 records are `ready`; the BCS-25 carriers remain drafts, and these records are not independent review or acceptance.

Read the published delta-method theorem's full Statement, Facts, Proof, and Remarks. The ratio proof uses its first-order branch only, with (Z_p>0); the derivative remainder is checked directly. Read the current IID, measurability, change-of-variables, moment, strong-law, Holder, nonnegative-integral, normal-law, and multivariate-CLT suppliers at their item bodies. The ordinary variance theorem uses the BCS-25 moment/CLT results; its zero-variance limit is proved separately. AC is used only by the nondegenerate CLT branch. The self-normalized ratio CLT uses the published multivariate IID CLT and delta theorem under explicit AC; its plug-in variance consistency uses only choice-free IID strong laws.

## Source reading and retrieval evidence

The A-page coverage ledger records the items supported and each harvested result's disposition. Relevant full-text ranges inspected:

- Quan Zhou, *STAT 689 Unit 1*, complete five-page lecture note, §1.3, Theorems 1.2–1.3 and proofs, plus Exercise 1.2, PDF pp. 3–4.
- Thomas B. Schön and Fredrik Lindsten, *Learning of Dynamical Systems: Particle Filters and Markov Chain Methods*, Chapter 4 §§4.3.1 and 4.3.3, displayed PDF pp. 52–54 and 58–61 / printed pp. 49–51 and 55–58. The intervening implementation note was not used. The local proof retains stronger explicit integrability and second-moment assumptions.
- Louis Aslett, *Data Science and Statistical Modelling*, Chapter 5 §§5.3.1–5.3.3: ordinary unbiasedness/variance proofs, the self-normalized bias warning, ESS formula, and missed-region caveat.
- Tuan Anh Le, *Importance Sampling*, complete 103-line note. The note's CLT/delta exposition cites Wikipedia and its displayed derivative for (g(a,b)=a/b) has a first-coordinate typo; neither is used in the local proof.
- *Monte Carlo Methods course notes*, Chapter 6 §§6.1–6.2, PDF pp. 1–8: change-of-measure estimator, weighted-second-moment variance threshold, SNIS ratio/bias outline, and weight ESS formula. Its terse proof text is not substituted for the local arguments.

`source-fetch-check --stamp` passed for five full-text sources (Zhou: 158168-byte PDF, 5 pages, `98d94f8c4b3abf22`; Schön–Lindsten: 8728956-byte PDF, 133 pages, `b558ec9c892c6937`; Aslett: 106693-byte HTML, 37166 text characters, `4cdf051e8f1815db`; Le: 15150-byte HTML, 10346 text characters, `7a40386eebf72aa0`; Arizona: 113191-byte PDF, 13 pages, `50adf2cba24bd41c`). The planned Art Owen Chapter 9 PDF remains a documented drop after the initial failure and five recovery retries. Its `source_resolution` record preserves the attempts, searches, and complete local alternatives with dependencies for every affected A item; no mathematical claim was dropped with the source.

## Example coverage and limitations

The B page includes a finite two-point calculation where ordinary IS is unbiased but one-draw SNIS has bias (-1/4), a Laplace-target/exponential-proposal weighted-second-moment divergence, and a positive-probability event with full-size observed weight ESS that misses target mass (1/2). ESS is defined only as an observed-weight imbalance diagnostic; it does not certify support coverage, finite variance, accuracy, or convergence.

## Checks and handoff

Final scoped checks passed:

- Dependency levels: batch 28 plus batch 31, 17 items across four pages, no cycles or mismatched labels.
- Proof precheck: all five proof-bearing changed items pass under `direct`.
- Proof layout: all five explicitly changed item paths, 18 numbered steps, zero defects.
- Strict proof contracts: 10/10 manifest items, zero errors or warnings. Citation fidelity: 46 exact excerpts checked, zero missing quotes or widening candidates.
- Focused depcheck: all 10 assigned items; 1,624-item / 161-page prerequisite closure, zero errors or warnings.
- Rendercheck: all five changed item files and both A/B pages; YAML and KaTeX parse successfully.
- Content policy: all 10 manifest items, zero errors or warnings.
- Source-fetch check: five current full-text stamps verify; the Owen source is one documented drop with its preserved recovery history and alternatives.
- Step-1 readiness: all 10 assigned items recorded `ready`; current dependency-hash validation confirms 10/10 closed. This records authoring readiness only, not independent review or acceptance.

The last recomputed autopilot status snapshot I inspected (updated 2026-10-15T04:35Z) left the run in `1-scaffold` and reported a malformed YAML handoff for `ex-uniform-endpoint-bootstrap-failure-and-m-out-of-n-remedy` (the attempted handoff had an unquoted title at line 3; the current item file has a quoted title). A later Step-1 blocker register (2026-10-15T04:51:01Z) also lists unit 28 as artifact-incomplete and no longer running. Its BCS-25 record for `thm-iid-monte-carlo-sample-variance-consistency` has a stale readiness hash, but batch 31 does not use that theorem. The actual BCS-25 item bodies batch 31 uses are present and ready; the remaining issue is reconciliation of the declared BCS-25 page-level prerequisite before run progression. These items and run state are outside batch 31; this pair's handoff does not repair or clear the run-level blockers.
