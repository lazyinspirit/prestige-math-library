# Batch 11 — Confidence Sets and Inversion

Run: mathematical-statistics-foundations-37  
Role: beta · batch: 11 · pair: confidence-sets-pivots-and-test-inversion  
Assigned batch level: 4 · prerequisite batches: 4, 8, 10  
Scheduling input hash: dd05d82b8e5bf49626aa96d504293f4afc76b61792a92c3d8eaa81be00ba597c

## Plan comparison

The controlling item design is MSF-10 in research/plan-mathematical-statistics-track.md at line 92. The MSF-10 row in research/plan-statistical-models-experiments-track.md at line 55 is a consistent category-interface table; it repeats the four A-page IDs and does not replace the full MSF-10 scope. research/plan-spec.json has the same four page prerequisites and deliberately has no item inventory. No plan conflict was found.

The A page contains the confidence-set and pivot definitions, pivot inversion, and event-level test inversion. The B page contains the required discrete-pivot, known-variance normal, unknown-variance t, uniform-maximum, and binomial examples. The exact t example uses the actual MSF-35 suppliers now present in the draft tree. Its local sample space is restricted to the common full-measure set where the sample standard deviation is positive.

## Item inventory and levels

The batch manifest records every direct dependency. The in-run dependency graph recomputes as follows:

| Level | Items | Principal in-run suppliers |
|---|---|---|
| 1 | def-confidence-set-and-coverage, def-pivot | def-statistical-experiment |
| 2 | thm-pivot-inversion-exact-coverage | Both level-1 definitions |
| 3 | ex-discrete-pivot-inversion-is-conservative, ex-known-variance-normal-mean-interval, ex-uniform-maximum-pivot-confidence-interval | Confidence/pivot definitions and pivot-inversion theorem as applicable |
| 5 | ex-exact-unknown-variance-normal-t-interval | MSF-35 t-CDF lemma (level 3) and exact normal t-pivot theorem (level 4) |
| 6 | thm-test-inversion-coverage | def-test-size-and-power (level 5) and the confidence-set definition |
| 7 | ex-binomial-tail-test-inversion | Test-inversion theorem (level 6), test-size definition (level 5), and binomial suppliers |

All nine batch-11 labels match the dependency-level computation. The largest item level is 7; this is distinct from the assigned page/batch scheduling level 4.

## Supplier reconciliation

The cross-batch dependency ledger records the verified page and item suppliers. I read the actual test-size definition and the MSF-35 chi-square, Student-t, exact normal t-pivot, and t-CDF carriers. The MSF-35 proof states AC, \(n\ge2\), \(\sigma>0\), \(S>0\) almost surely, and the \(t_{n-1}\) law; the CDF lemma proves the continuity, symmetry, strict increase, limits, and quantile uniqueness used by the example.

The known-variance normal example also uses the published continuity-from-below theorem; its full proof justifies both normal CDF tail limits from increasing measurable events.

The test-inversion theorem assumes measurable acceptance events with the point-null probability bound on the full observation space. The actual test-size definition expresses randomized tests through rejection-probability functions, not realized events. The item now states the event-level condition explicitly, explains the deterministic simple-null implication, and requires the auxiliary randomizer to be included in the observation for randomized use. The binomial example is deterministic and calculates its null rejection probability directly. No randomized event construction is claimed.

## Sources

The coverage ledger records four page-source fetch entries, locators, supported items, and each harvested result's included or inline disposition. Two independent treatments were read for each page: the full 8-page MIT 14.381 Lecture 11 and the finite-sample confidence-set/test-inversion unit in USC STAT 713 Lecture 14 (PDF pp. 1–24). The t formulas are source context, while the Gaussian and quantile arguments are supplied through the checked MSF-35 items. source-fetch-check --stamp passes 4/4 entries; no retrieval failure occurred, so no source_resolution recovery record was needed.

## Checks

- Precheck on all seven proof-bearing batch items: pass, 7/7.
- proof-layout on those seven explicit paths: 7 items, 21 steps, 0 defects.
- Strict proof contracts: 9/9 items, 0 errors, 0 warnings.
- Coverage checklist: 2 pages, 15 harvested results, 0 errors, 0 warnings.
- Content policy: 9 scoped items, 0 errors, 0 warnings.
- Source fetch check with stamps: 4/4 verified and resolved.
- Scoped item dependency computation: all nine items match their recorded levels.
- Step 1 decisions: all nine items recorded ready; scoped hash verification reports 9/9 current. The run-wide check is blocked at line 24, column 14 while parsing another pair's malformed source-title YAML.
- Batch dependency checker: blocked before batch results by the same unquoted YAML title, at line 29, column 14 (Jan van Neerven, γ-Radonifying operators: A Survey, §8, p. 32). The title occurs in other-pair carriers including items/lem-gaussian-centering-for-bounded-symmetric-quasiconvex-loss.md and items/thm-brunn-minkowski-for-compact-convex-sets.md. No other pair's file was edited; the dispatched batch level and input hash are recorded above.
