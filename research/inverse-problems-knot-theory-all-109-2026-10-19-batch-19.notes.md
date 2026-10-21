# Batch 19 authoring notes — Small-ball MAP and Cameron–Martin geometry

Run: inverse-problems-knot-theory-all-109-2026-10-19  
Pair: map-estimators-and-cameron-martin-geometry / map-estimators-and-cameron-martin-geometry-examples  
Scheduling input: 9a5cd4c81ba61d886842921bd70d69cb249dc00eb66a29e6357dfe0e32fd76bb

## Plan and supplier reconciliation

- Read the complete IP-19 design at research/plan-inverse-problems-track.md L475–494 and the supplementary IP-19 direction at L1356–1358. The controlling plan names three A claims and three B leaves. The owner direction requires a local ball-ratio proof, reuse of the published compact Cameron–Martin unit-ball result, and a strict separation between fixed-center ratios and global strong-MAP existence.
- Compared the page objects in research/plan-spec.json: page IDs, order, titles, categories and requires match. Both plan-spec item inventories are empty. There is no item-level conflict; the plan supplies the item inventory and proof scope.
- The batch manifest records the planned three A items, a new local finite-projection Anderson lemma required by the ratio proof, and the three B leaves. Dependency levels are: helper 0; Gaussian ratio 1; MAP definition 3; posterior OM theorem 4; all three examples 4. Cross-batch edges are only to batches 15 and 16; those suppliers were inspected before use.
- The inherited batch-19 run status was recomputed from .autopilot/ and git history. The run remains at scaffold with other work owner-held. No runtime state, shared plan, verdict, or published item was changed.

## Item checkpoints

1. lem-ip-banach-gaussian-cm-shift-ball-bound — proves the centered-ball shift inequality for Cameron–Martin centers, including singular finite coordinate covariance by restricting each projection to its covariance range. Assumptions are AC, HB and countable choice. Uses the published countable norming-family lemma, finite-dimensional Gaussian centering lemma, Gaussian RKHS interface and measure continuity from above. The finite-dimensional argument uses items/lem-gaussian-centering-for-bounded-symmetric-quasiconvex-loss.md and its complete Brunn–Minkowski proof in items/thm-brunn-minkowski-for-compact-convex-sets.md.

2. lem-ip-gaussian-shift-small-ball-ratio — proves the fixed-center Cameron–Martin ratio by the Cameron–Martin density, dense covariance-range approximants, and conditional exponential bounds on the centered ball. The residual upper bound uses the new local shift-ball lemma; the lower bound uses conditional symmetry and Jensen. Sources read in full: Dashti–Stuart–Voss, §3, Theorem 3.2 and proof (which calls, rather than proves, the Gaussian ratio), and Kekkonen–Korolev, §7.4, Theorem 7.5.3 (ratio stated without proof). The local proof supplies both omitted arguments.

3. def-ip-small-ball-map-estimator — defines the global strong small-ball mode against the supremum over all centers and a separate pairwise Cameron–Martin ratio mode. It explicitly says the second definition does not entail the first. It depends on the inspected batch-15 prior-domain definition and batch-16 posterior definition.

4. thm-ip-gaussian-small-ball-map-functional — for a fixed datum and full domain D=B, proves positive finite evidence from the subquadratic lower bound and Fernique, transfers the Gaussian ball ratio through local Lipschitz continuity, and proves a finite OM minimizer by coercivity and compactness of the published Cameron–Martin unit ball. Its minimizer equivalence is only for fixed Cameron–Martin centers. Sources read in full: Dashti–Stuart–Voss, Assumption 2.1, Definition 3.1, Theorem 3.2 and proof, Theorem 3.5, Corollary 3.10; Kekkonen–Korolev, §7.4, Theorems 7.5.2–7.5.3 and §7.5, Theorem 7.5.6 and proof.

5. ex-ip-finite-dimensional-small-ball-map-equals-density-mode — derives the explicit Gaussian posterior, identifies the unique density mode, proves its global small-ball maximality by finite-dimensional Gaussian centering, and verifies the local ball-average density ratio.

6. cex-ip-infinite-dimensional-pointwise-density-fallacy — constructs a Borel Gaussian on ell² from the batch-15 weighted-series lemma. Pairwise disjoint translated balls inside one bounded ball rule out any nonzero translation-invariant Borel measure finite on bounded sets. This refutes the claim of an infinite-dimensional Lebesgue-type density reference without claiming the Gaussian has no density relative to other measures.

7. ex-ip-map-differs-from-posterior-mean — uses a uniform prior and a valid binary likelihood; it proves evidence 1/12, posterior density 12 theta²(1-theta), strong small-ball MAP 2/3, and posterior mean 3/5.

## Sources and retrieval record

- Dashti, Stuart and Voss, MAP Estimators and Their Consistency in Bayesian Nonparametric Inverse Problems, full PDF https://arxiv.org/pdf/1303.4795; inspected §2, Assumption 2.1; §3, Definitions 3.1 and 3.2, Theorem 3.2 complete proof; §3.3 Theorem 3.5; §3.4 Corollary 3.10.
- Kekkonen and Korolev, Inverse Problems lecture notes, full PDF https://www.damtp.cam.ac.uk/research/cia/files/teaching/Inverse_Problems_2019/LectureNotes2019.pdf; inspected §7.4 Theorems 7.5.2–7.5.3 and §7.5 Theorem 7.5.6 complete proof.
- Giné and Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models, full book PDF https://www.statslab.cam.ac.uk/~nickl/Site/__files/FULLPDF.pdf; inspected §2.4, Lemma 2.4.4 and Theorem 2.4.5 complete proofs, and §4.4.1.
- Lambley, Strong maximum a posteriori estimation in Banach spaces with Gaussian priors, author manuscript https://arxiv.org/pdf/2304.13622; inspected Definition 2.1, Proposition 3.1, Corollaries 3.2–3.3, Lemmas 4.4–4.5 and the complete proof of Theorem 1.1. It is context for the separate global-mode obligation and is not used to prove the assigned theorem.
- A Springer copy of Lifshits, Gaussian Random Functions, was considered but not used. The publisher direct-PDF route returned a cookie interstitial through the initial fetch and five source-fetch retries. Search found the publisher subscription page and Google Books preview; no full argument was harvested. Coverage retains the failure, search outcomes, and the complete local ratio argument with its exact dependencies.
- The first Warwick repository URL for Lambley returned HTTP 404 through the initial fetch and five source-fetch retries. Search located the official repository record and the author's arXiv full text. The arXiv text was inspected for the same relevant proof and is the retained, fetchable context source; the dead repository URL is retained as a documented drop.

## Cross-batch interfaces inspected

- Batch 15 def-ip-prior-on-a-forward-domain (level 1): the prior is a Borel probability with full mass on the declared domain. For the main theorem, the domain is specialized to B.
- Batch 15 lem-ip-gaussian-series-prior-regularity (level 2): square-summable weighted Gaussian series converge in the selected Hilbert norm and have the stated Gaussian law under AC and countable choice.
- Batch 16 def-ip-misfit-evidence-and-posterior-law (level 2): the fixed-data posterior is the normalized likelihood-potential weighting on the declared prior domain.
- Batch 16 thm-ip-function-space-posterior-propriety (level 3): a finite continuous potential with a common integrable lower envelope gives finite positive evidence. For the main theorem, the singleton datum uses M_1(t)=max(0, epsilon*t²-M_epsilon) and Fernique integrability.

## Owner escalation — global strong MAP

The plan explicitly says the fixed-center ball-ratio theorem and global strong-MAP existence are separate conclusions. No global strong-MAP theorem is claimed here. Lambley's global theorem is proved through an M-property and a uniform decentering estimate; Proposition 3.1 uses a Banach Gaussian coordinate expansion, and the theorem's stated scope includes a nondegenerate Gaussian prior. That complete global proof is not a prerequisite supplied by batches 15/16 and is not obtained by the local fixed-center ratio or OM-minimizer proof. If the owner expects a global strong-MAP item in this batch, it needs a separate placement and declared hypotheses plus a local K–L/decentering supplier; do not infer it from the authored theorem.

## Validation and next action

- The manifest matches the seven carrier inventories, statements, direct dependencies and computed item levels. The cross-batch file contains all 69 direct dependency edges; source-resolution validation reports zero errors.
- Proof layout: 7 items, 20 steps, 0 defects. Strict proof contracts: 7/7 items, 0 errors and 0 warnings. Render check: all 7 items and 2 YAML-only pages pass; every math span parses. Scoped depcheck: 7 items pass, with prerequisite cycle checks covering 1,733 items and 410 pages.
- Statement-first: all 7 assigned items pass the targeted policy check. The run-wide statement-first command stops at the empty inventory in batch 100 before reaching this pair.
- Coverage checklist: 2 pages, 21 harvested results, 0 errors and 0 warnings. Source-fetch check: 7/9 URLs stamped; both remaining URLs are validated documented drops, so all 9 are resolved.
- The full-run item-dependency-level check reports 131 errors in other batches, mainly empty inventories and pre-existing stale dependency levels. It reports no error for any of these seven IDs; their computed levels are 0, 1, 3, 4, 4, 4 and 4, matching the labels.
- Step 1 readiness records were written as ready for all seven assigned items, with each item’s declared direct dependency IDs and the evidence above. A recomputed run status still has work outside batch 19; the separate global strong-MAP issue is recorded in the owner-escalation section above.

## Direct dependency and readiness ledger

| Item | Level | Step 1 | Direct dependencies |
|---|---:|---|---|
| lem-ip-banach-gaussian-cm-shift-ball-bound | 0 | ready (research/inverse-problems-knot-theory-all-109-2026-10-19-step1-lem-ip-banach-gaussian-cm-shift-ball-bound.json) | def-axiom-of-choice, def-countable-choice, def-hahn-banach-extension-principle-relative, def-borel-gaussian-random-element-on-a-separable-banach-space, def-banach-gaussian-covariance-operator-and-rkhs, thm-banach-gaussian-covariance-rkhs-is-well-defined, def-multivariate-normal-law, lem-separable-banach-has-countable-norming-family, lem-gaussian-centering-for-bounded-symmetric-quasiconvex-loss, thm-continuity-from-above-for-measures |
| lem-ip-gaussian-shift-small-ball-ratio | 1 | ready (research/inverse-problems-knot-theory-all-109-2026-10-19-step1-lem-ip-gaussian-shift-small-ball-ratio.json) | def-axiom-of-choice, def-countable-choice, def-hahn-banach-extension-principle-relative, def-borel-gaussian-random-element-on-a-separable-banach-space, def-banach-gaussian-covariance-operator-and-rkhs, thm-banach-gaussian-covariance-rkhs-is-well-defined, thm-cameron-martin-translation-for-separable-banach-gaussian-law, thm-support-of-banach-gaussian-is-closure-of-rkhs, lem-ip-banach-gaussian-cm-shift-ball-bound, lem-separable-banach-has-countable-norming-family, def-polish-space, thm-every-borel-probability-on-a-polish-space-is-tight, def-multivariate-normal-law, def-standard-normal-and-normal-laws |
| def-ip-small-ball-map-estimator | 3 | ready (research/inverse-problems-knot-theory-all-109-2026-10-19-step1-def-ip-small-ball-map-estimator.json) | def-axiom-of-choice, def-ip-misfit-evidence-and-posterior-law, def-ip-prior-on-a-forward-domain, def-banach-space, def-borel-probability-law-on-a-polish-space, def-separable-space, thm-finite-and-countable-subadditivity-of-measures |
| thm-ip-gaussian-small-ball-map-functional | 4 | ready (research/inverse-problems-knot-theory-all-109-2026-10-19-step1-thm-ip-gaussian-small-ball-map-functional.json) | def-axiom-of-choice, def-countable-choice, def-hahn-banach-extension-principle-relative, def-ip-prior-on-a-forward-domain, def-ip-misfit-evidence-and-posterior-law, thm-ip-function-space-posterior-propriety, def-ip-small-ball-map-estimator, lem-ip-gaussian-shift-small-ball-ratio, def-borel-gaussian-random-element-on-a-separable-banach-space, def-banach-gaussian-covariance-operator-and-rkhs, thm-banach-gaussian-covariance-rkhs-is-well-defined, def-polish-space, thm-every-borel-probability-on-a-polish-space-is-tight, thm-support-of-banach-gaussian-is-closure-of-rkhs, lem-banach-gaussian-rkhs-unit-ball-is-compact, thm-fernique-integrability-for-separable-banach-gaussian-law, thm-bolzano-weierstrass |
| ex-ip-finite-dimensional-small-ball-map-equals-density-mode | 4 | ready (research/inverse-problems-knot-theory-all-109-2026-10-19-step1-ex-ip-finite-dimensional-small-ball-map-equals-density-mode.json) | def-ip-small-ball-map-estimator, def-ip-misfit-evidence-and-posterior-law, def-axiom-of-choice, def-multivariate-normal-law, thm-nondegenerate-multivariate-normal-law-has-density, lem-gaussian-centering-for-bounded-symmetric-quasiconvex-loss, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant |
| cex-ip-infinite-dimensional-pointwise-density-fallacy | 4 | ready (research/inverse-problems-knot-theory-all-109-2026-10-19-step1-cex-ip-infinite-dimensional-pointwise-density-fallacy.json) | def-ip-small-ball-map-estimator, lem-ip-gaussian-series-prior-regularity, def-axiom-of-choice, def-countable-choice, def-measure, thm-finite-and-countable-subadditivity-of-measures, prop-measure-monotonicity, thm-rationals-countable, lem-rat-embeds-dense, thm-product-of-countable, thm-countable-union-of-countable |
| ex-ip-map-differs-from-posterior-mean | 4 | ready (research/inverse-problems-knot-theory-all-109-2026-10-19-step1-ex-ip-map-differs-from-posterior-mean.json) | def-ip-small-ball-map-estimator, def-ip-misfit-evidence-and-posterior-law, def-lebesgue-measure-and-the-lebesgue-sigma-algebra |

All seven records are hash-current against their carrier and declared dependency list. No supplier used by these items is unavailable. The unresolved global strong-MAP result is not an item in the planned inventory and remains the owner escalation described above.

At the recomputed run-level Step 1 check, 613 items were inventoried and 390 were ready; the run remained open elsewhere, and none of these seven batch-19 items appeared in the outstanding work list.
