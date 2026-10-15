# Batch 61 authoring notes — Group-sequential alpha spending

## Controlling inputs and conflict record

- Run statistical-models-experiments-62 was active at the 1-scaffold stage when this work began. Its assigned scheduling input was be0b7aca66787065a1de6e365a80730a6752b56b03a5c15b6c6abcb95603d30d. Batch 61 is assigned dependency level 0 and has no in-run supplier batch.
- The owner direction names research/plan-statistical-models-experiments-track.md as the controlling SME design. Its SME-61 contract specifies an exact simple-null canonical Gaussian model, prescheduled information fractions, a nondecreasing spending function, a one-sided recursive boundary equation, a separately calibrated two-sided crossing rule, and explicit warnings about estimated variance and data-dependent looks.
- The batch task and current research/plan-spec.json pair metadata retain page requirements on finite-sample-tests-neyman-pearson-and-valid-p-values, central-limit-theorems, and weak-convergence-tightness-and-representation. The track's SME-61 clause instead names MSF-08 def-test-size-and-power and the published Gaussian-law suppliers. The batch manifest preserves the plan-spec page requirements without editing either shared plan. The direct item dependencies follow the controlling track and the actual current supplier IDs.
- The audit dossier recorded def-test-size-and-power as planned but not active at audit time. The current published carrier now exists at items/def-test-size-and-power.md; its nonempty disjoint null/alternative convention and singleton-null size clause were inspected and used. No stale MSF-08 alias or invented supplier body is used.
- The CLT and weak-convergence pages are published and their current page summaries were inspected. They remain page-level plan context only: no asymptotic approximation or weak-convergence theorem is used by this exact finite-sample canonical-null proof.

## Inventory, interfaces, and levels

The A page contains, in supplier-first order:

1. def-group-sequential-alpha-spending-design, level 0.
2. alg-group-sequential-alpha-spending-boundary-calibration, level 1, depending on the design and carrying its AC hypothesis.
3. thm-group-sequential-alpha-spending-calibration, level 2, proving the covariance is positive definite, the Gaussian law has full support and atomless standard-normal marginals, and both one-sided and symmetric two-sided recursive roots exist uniquely.

The B page contains ex-pocock-spending-two-look and ex-obrien-fleming-spending-two-look, each at level 3. The final boundaries are left as the exact unique joint-law roots; no numerical result or closed form is claimed. The 2-look covariance matrix has determinant 1/2 and correlation 1/sqrt(2).

All direct in-run dependencies are within this pair and acyclic. The item-level calculation on the assigned manifest returns levels 0,1,2,3,3. The pair's batch level remains 0. The shared run dependency-level artifact is owner/engine state and was not edited; its recorded input digest predates the newly authored manifest, so the native engine must recompute its run scheduling snapshot before the next dispatch.

## Mathematical and axiom notes

- The spending function is only assumed nondecreasing, with A(0)=0 and A(1)=alpha in (0,1); continuity of A is not needed because only its values at the finite planned looks enter the recursion.
- The covariance factorization uses lower-triangular entries L_{j1}=sqrt(t_1/t_j) and L_{ji}=sqrt((t_i-t_{i-1})/t_j) for 2<=i<=j. It gives Sigma=LL^T with positive diagonal, hence positive definiteness. The full-support proof then uses the actual published multivariate-normal representation and the positive standard-normal density.
- For each look, the added-crossing probability is continuous and strictly decreasing in the scalar boundary. Full support gives strict decrease; the standard-normal density bound gives continuity; continuity from below gives the tail limits. The intermediate value theorem supplies the root, and strict decrease gives uniqueness. Flat spending uses +infinity and adds no crossing event.
- AC is explicit in the design, theorem, and examples and is present in their dependencies. It is used only through the actual Gaussian-law suppliers (multivariate and scalar normal construction/representation). The finite recursive root selection is choice-free because each root is unique and there are only finitely many looks.
- The theorem asserts exact error probabilities only under the stipulated simple-null joint Gaussian law and planned information fractions. It makes no composite-null monotonicity claim and supplies no guarantee for data-dependent timing or estimated variance.

## Source reading and harvest

- DeMets–Lan, full article PDF pp. 2–3 and 6–7 inspected. The p. 6 alpha-spending formulas were also checked against a rendered page image. The article's fixed Pocock/O’Brien–Fleming boundaries and information-estimation discussion are dispositioned separately in the coverage file.
- Grayling–Wason–Mander, full article PDF pp. 2–4 inspected for the known-variance model, canonical joint law, stopping-event decomposition, and operating-characteristic equations. Its treatment-effect power and sample-size targets are explicitly out of scope.
- Minas, Multivariate Global Testing and Adaptive Designs, Chapter 5 §§5.3–5.3.1, printed pp. 72–73 / PDF pp. 93–94, inspected as the book-length independent treatment. Its multivariate global tests and implementation package discussion are dispositioned out of scope.
- These are three independent full-text treatments, including a doctoral thesis. The coverage file records 16 harvested results: 10 included in the five authored items and 6 explicitly out of scope. It has no unresolved source-resolution record. source-fetch-check --stamp verified all three full-text PDFs; the final check reports 3/3 fetch-verified with recorded byte counts, hashes, and page counts.

## Scoped checks and readiness

- The scoped item-dependency calculation passes for all five manifest items at levels 0, 1, 2, 3, 3; no in-run cycle is present.
- Strict proof-contract validation passes for all five items with no errors or warnings. The proof contracts cite exact current supplier sections and map every fact and numbered step.
- Precheck passes all three proof-bearing items; the definition and algorithm are not applicable. Actual-renderer proof-layout passes for the five changed items with 14 numbered steps and 0 defects. Rendercheck passes all five items and both pages, with 0 errors and 0 warnings.
- Focused depcheck passes the five items, their direct/indirect supplier closure, and both pages with 0 errors and 0 warnings. Extcheck passes all five items; content-policy passes all five; manifest-deps passes all five.
- Coverage-checklist passes one A page and 16 harvested results with 0 errors and 0 warnings. Source-fetch-check verifies all 3 full-text PDFs with recorded byte counts, hashes, and page counts. URL liveness reports 3/3 live; source-backing confirms all 5 authored results remain backed by an openable source with no drop records.
- All five Step-1 decisions are current and ready, with explicit examined dependencies and evidence in the run's per-item Step-1 files. No owner flag was used, and no escalation was overwritten.

## Run-level dependency recomputation blocker

The assigned item-level dependency check passes. A read-only recomputation of the shared run batch-dependency artifact could not complete because tools/batch-dependency-levels.mjs parses current carriers across the run and encounters malformed frontmatter on Batch 60's subgaussian-mixture-confidence-sequences page:

- items/def-gaussian-mixture-confidence-sequence-boundary.md, line 18.
- items/lem-gaussian-exponential-mixture-integral.md, line 25.
- items/lem-gaussian-mixture-boundary-crossing-equivalence.md, line 23.
- items/thm-gaussian-mixture-test-supermartingale.md, line 26.
- items/thm-subgaussian-mixture-confidence-sequence.md, line 28.

Each has an unquoted source title beginning “Aaditya Ramdas, Martingales 1: Concentration Inequalities — Conjugate Mixtures”; the colon after “1” makes the YAML parser treat the line as a nested mapping. These are outside Batch 61's assignment and were not edited. A direct batch-dependency-levels check still fails on that parse error.

The latest autopilot status read at 2026-10-14T17:17:03.739Z reports the run at 1-scaffold with 7/62 batch results. The current Step-1 blocker file names a separate stage-stalemate on unit 22: it is covered but artifact-incomplete and no longer running. That blocker file has no Batch 61 entry. The shared run-level dependency artifact still records Batch 61 at level 0 with no in-run supplier batches, while its input digest predates this authored manifest. The owner/engine must resolve the Batch 60 parse error, the separate unit-22 stalemate, and refresh the shared scheduling input before transition; no shared plan or engine-state file was changed here.
