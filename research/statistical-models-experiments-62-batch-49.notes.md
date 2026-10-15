# Batch 49 authoring notes — Spatial summaries and Palm laws

Run: statistical-models-experiments-62 · role: beta · batch: 49  
Pair: spatial-point-process-summaries-and-palm-laws / spatial-point-process-summaries-and-palm-laws-examples  
Dependency input SHA: 154742198c8edf599c86faa1cd9b420d50d94edcdefe07538e0a1672d56a7c21

## Controlling plan and reconciliation

Read CLAUDE.md, SCHEMA.md, WORKFLOW.md, the batch task, beta scaffold, dependency-level instructions, the owner authoring direction, the current plan, the complete design section, the plan specification rows, and the current run evidence. The owner authoring direction and current plan control authoring.

The current design at research/plan-statistical-models-experiments-track.md line 290 and the corresponding research/plan-spec.json page rows agree on the A/B IDs, title, order 2014, category, three page-level requires, and empty initial inventories. No design-versus-plan-spec conflict was found.

The older SME-49 row in research/pair-audit.json is stale where its quoted Palm scope and assumptions refer to the deleted configuration: it omits recentering the selected occurrence, conflates locations and occurrence indices, and lacks the one-occurrence deletion/multiplicity correction. The current design and research/statistical-models-experiments-62-owner-palm-resolution.json supply the controlling correction. The correction is treated as planning context only; source proofs and independent review remain separate.

## Inventory, dependencies, and levels

The manifest contains 18 A-page items and 2 B-page examples. Direct item dependencies and justified_by edges are recorded in statistical-models-experiments-62-batch-49.pages.json; labels below were recomputed using all current run manifests, so only dependencies in this run raise an item’s level.

| Level | Items |
|---:|---|
| 0 | lem-convex-windows-admit-rectangle-approximations-and-are-folner; lem-translation-invariant-locally-finite-borel-measure-on-rd; thm-choice-free-l1-mean-limit-for-stationary-sequences |
| 1 | def-spatial-recentering-action |
| 2 | def-stationary-point-process-and-intensity; lem-joint-measurability-of-spatial-recentering |
| 3 | def-full-palm-distribution; def-second-factorial-and-reduced-moment-measures; thm-poisson-mecke-identity; thm-stationary-point-process-intensity-measure-is-rho-lebesgue |
| 4 | thm-refined-campbell-formula-and-palm-law-existence; thm-second-factorial-and-reduced-measures-are-locally-finite; thm-stationary-point-process-counts-converge-to-spatial-intensity |
| 5 | thm-reduced-second-factorial-moment-palm-identity |
| 6 | def-pair-correlation-and-ripleys-k-function |
| 7 | alg-border-corrected-ripleys-k-estimator; ex-uniformly-translated-lattice-palm-and-multiplicities; thm-homogeneous-poisson-ripleys-k-is-ball-volume; thm-pair-correlation-integrates-to-ripleys-k |
| 8 | ex-window-edge-border-estimator |

Suppliers were authored before their in-batch consumers. The finite-intensity and sigma-finite Poisson Mecke identity is proved locally from the Poisson count interface rather than depending on the aggregate B48 Campbell theorem. The spatial count theorem uses a local choice-free L1 sequence-mean theorem and coordinate rectangle averages, then the compact-convex inner approximation and translated-boundary lemma.

The page-level requires were also examined: Poisson/Cox point-process models; measures and their basic properties; stationary Markov chains and ergodic limits. The Poisson, measure, product/kernel, Lebesgue, and expectation interfaces actually used appear as exact item dependencies. The stationary-sequence Birkhoff supplier thm-stationary-process-birkhoff-ergodic-limit was read in full, including its AC assumption; it is not used as a spatial theorem or as a shortcut. The local L1 theorem proves the sequence mean limit without choice, and the spatial proof identifies the full-translation invariant conditional expectation directly.

All current in-run transitive suppliers outside this pair were checked against their actual item bodies and hash-bound Step 1 records. The seven in-run suppliers in the pair’s transitive dependency closure are def-poisson-and-cox-point-process, def-random-measure-and-locally-finite-point-process, def-scalar-poisson-count-law, lem-deletion-of-one-point-is-measurable, lem-locally-compact-second-countable-spaces-have-compact-exhaustions, lem-mean-measure-and-integrals-of-a-random-point-process, and lem-poisson-count-law-normalization-and-moments; each currently has a closed ready Step 1 record. There is no absent or still-being-written supplier for this pair at handoff.

## Axioms and proof routes

The transitive random-point-process supplier closure carries AC and Countable Choice. The Borel Lebesgue normalization and convex-window approximation also carry Countable Choice. Those inherited assumptions are named in the relevant item statements and contracts; local occurrence calculations make no selections and no item adds dependent choice.

The existing aggregate B48 theorem thm-campbell-laplace-mecke-and-cox-moments has a broad closure containing AC and Countable Choice, including the paths through thm-compact-subset-of-a-hausdorff-space-is-closed to lem-finite-choice to AC, and through def-compact-space / def-standard-topologies to thm-countable-union-of-countable to Countable Choice. Batch 49 does not use that aggregate theorem. The local Mecke proof still inherits AC and Countable Choice through its point-process supplier; it avoids importing unrelated aggregate claims, not the base supplier’s axiom convention.

## Source reading and harvest

Two independent full-text treatments were inspected: Last–Penrose’s monograph and Baddeley’s complete lecture notes. The exact URLs, locators, every named result disposition, and the result-to-item mapping are in statistical-models-experiments-62-batch-49.coverage.json. Local text/PDF copies read:

- scratchpad/statistics-scaffolds-2026-10-11/sources/models-05/kit-last-penrose-lectures-on-poisson-process-2017.pdf and .txt
- scratchpad/statistics-scaffolds-2026-10-11/sources/models-05/baddeley-spatial-point-processes-and-applications.pdf and .txt

The source harvest records 41 named results: 15 included or inline on this pair and 26 deliberately out of scope, each with an item-specific reason. The coverage checklist reports zero errors and one coverage-low-yield warning (15/41 destinations); the remaining results concern multivariate identities, alternate characterizations, unrelated second-moment calculations, small-window limits, isotropy, thinning, and Palm laws outside the assigned claims. They were not omitted from the source harvest.

The Last–Penrose Theorem 8.14 statement is in scope, but its inspected proof is not a complete justification for the full stated generality: it treats dimension two and leaves higher dimensions to the reader. Later it identifies a limit with a full-sequence liminf from convergence in probability, which is not valid in general. Batch 49 does not repeat either gap. thm-stationary-point-process-counts-converge-to-spatial-intensity proves the all-dimensional L1 limit by coordinate averages, identifies invariance under every real translation through a symmetric-difference bound, and identifies the conditional expectation by integrating over each invariant event. The Appendix B.2 blocking argument for the stationary-sequence L1 mean limit was inspected in full; a complete choice-free proof is supplied.

Baddeley is used as an independent conceptual and formula cross-check, not as a replacement for the complete local arguments. The source’s border discussion describes bias correction; the assigned algorithm records only a finite-data procedure and claims no unbiasedness, consistency, or asymptotic guarantee.

The stamped fetch check succeeded for both independent sources at 2026-10-14 18:18 UTC with no recovery retries: Last–Penrose PDF, 1,465,585 bytes, SHA-256 prefix 04423f7ad07ca1d0; Baddeley PDF, 999,280 bytes, SHA-256 prefix 04dd2e35366dffcf. The coverage file records the exact timestamps and fetch metadata. No retrieval failed, so no source_resolution drop or escalation record was created.

## Contracts, carriers, and checks

The A page carries all local definitions and intermediate results before the dependent claims; the B page contains the translated-lattice and finite-window border examples. Both page lists, item manifests, direct dependencies, in-run levels, coverage, and proof contracts are kept aligned.

statistical-models-experiments-62-batch-49.proof-contracts.json covers all 20 IDs, maps each numbered step to its actual claim and final-tag inputs, and includes exact supplier excerpts for every linked fact. It includes all eight required boundary dispositions for every item and finite arithmetic checks for the two examples and the Poisson r=0 endpoint.

Final observed checks:

- node tools/proof-contract.mjs research/statistical-models-experiments-62-batch-49.proof-contracts.json --strict — passed, 20/20 items; zero errors and warnings.
- node tools/coverage-checklist.mjs research/statistical-models-experiments-62-batch-49.coverage.json — zero errors; one low-yield warning described above.
- node tools/source-fetch-check.mjs --coverage research/statistical-models-experiments-62-batch-49.coverage.json --stamp — passed, 2/2 fetch-verified, 2 newly stamped, 0 documented drops.
- node tools/manifest-deps.mjs research/statistical-models-experiments-62-batch-49.pages.json — passed, 20 items; zero missing dependencies.
- node tools/content-policy.mjs research/statistical-models-experiments-62-batch-49.pages.json — passed, 20 items; zero errors and warnings.
- node tools/proof-layout.mjs on the 20 explicitly changed items — passed, 78 numbered steps; zero defects.
- node tools/rendercheck.mjs on all 20 changed items and both page carriers — passed, 22 files; KaTeX and frontmatter parsed.
- node tools/item-dependency-levels.mjs check --run statistical-models-experiments-62 — parses the current manifests and reports 11 level errors, all in other batches: lem-bounded-predictable-counting-integral has no integer label; the four Cox items lem-cox-partial-likelihood-hessian-convergence, lem-cox-score-martingale-replacement, thm-cox-score-limit-and-estimator-linearization, and cor-cox-partial-likelihood-asymptotic-normality are each one level below computed; and the six random-field items def-random-field-stationarity-covariance-and-variogram, lem-random-field-covariance-kernel-is-positive-semidefinite, thm-gaussian-random-field-existence-from-a-positive-semidefinite-kernel, thm-order-two-field-variogram-is-conditionally-negative-definite, thm-continuous-stationary-field-covariance-has-bochner-measure, and ex-covariance-kernel-and-intrinsic-variogram-checks are each one level below computed. No batch-49 item is reported in error. A focused recomputation over batch-48 supplier levels and all 20 final batch-49 dependency arrays found no label mismatch. Later dependency edits add only published external suppliers, so no in-run level changed.
- node tools/step1-decisions.mjs record — succeeded for all 20 assigned items in ascending dependency level, without --owner. Each hash-bound record lists its exact direct deps and justified_by inputs; a subsequent readiness audit found 20/20 closed and current.

## Live run state and readiness

The final recomputed status at 2026-10-14 18:30 UTC has .autopilot/statistical-models-experiments-62 running at 1-scaffold, with 48/62 pages covered. Batch 49 is no longer listed among missing pages or missing artifacts. The run remains on its owner repair and recertification hold, pointing to research/statistical-models-experiments-62-step1-blockers.json; the remaining missing items and artifacts are outside this pair.

During an earlier tooling attempt, the out-of-scope research/statistical-models-experiments-62-batch-42.pages.json temporarily failed JSON parsing because a comma was missing after the statement for cor-stable-ar-long-run-variance-plug-in-consistency. It became parseable before readiness recording; batch 49 did not edit that file. The whole-run dependency-level check now runs and reports the unrelated errors listed above.

All 20 batch-49 Step 1 records are now ready and hash-current. They record the exact direct deps and definition discharges from the manifest, and they do not constitute independent approval.
