# Batch 20 — Secrecy and Information Privacy

Run: `non-ml-math-remaining-81-2026-10-18`  
Owner: beta · batch: `20` · assigned pair: `secrecy-and-information-privacy`  
Batch dependency level: `4` · prerequisite batches: `9`, `12`  
Scheduling input: `5603c5b65bcacb6824049cb5fd83ae9bcc27af211bbc1065273b52ec63a4f899`

## Authority, scope, and plan comparison

I read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, `briefs/beta-scaffold.md`, the assigned task and design inventory, the binding owner authoring direction, `research/plan-spec.json`, the information-theory track plan, and the batch dependency-level input. No pair-specific design section was found. The current IT12 plan controls: it calls for weak/strong secrecy, leakage/equivocation, finite source privacy–utility, the finite DMC wiretap auxiliary formula and degraded case, resolvability, and leftover hashing with exact conditions. The information-theory track IT12 paragraph agrees.

An older candidate inventory in `research/information-theory-planning/pages.json` declares additional page prerequisites (`measure-theoretic-information-and-conditioning`, `statistical-experiments-models-and-identifiability`, and `finite-sample-tests-neyman-pearson-and-valid-p-values`). Those conflict with the current assigned page prerequisites, which are `discrete-memoryless-channel-capacity` and `iid-lossless-source-coding-and-the-aep`; I followed the current task and plan. The old inventory also did not govern this pair's item boundaries.

Only Batch 20 draft items, the two assigned page carriers, and Batch 20 evidence files were changed. No published item, shared plan, run-state file, or verdict was edited. The A page has 14 items and the B page has 3, below the 100-item cap.

## Inventory and dependency levels

Levels were recomputed recursively from actual `deps` in the current run manifests; out-of-run dependencies contribute no in-run level. The table lists the assigned items in increasing item level. The batch's level 4 is separate from these item levels.

| Item level | Assigned items |
|---:|---|
| 0 | `thm-it-universal-hashing-leftover-bound` |
| 2 | `def-it-finite-source-privacy-utility-region`; `def-it-information-leakage-and-equivocation`; `lem-it-finite-wiretap-product-kernel-is-stochastic` |
| 3 | `def-it-wiretap-channel`; `thm-it-perfect-privacy-kernel-criterion` |
| 4 | `def-it-degraded-wiretap-channel`; `def-it-weak-and-strong-secrecy`; `lem-it-finite-dmc-information-density-concentration` |
| 5 | `def-it-wiretap-secrecy-capacities`; `lem-it-channel-resolvability-soft-covering`; `lem-it-classical-wiretap-auxiliary-cardinality`; `ex-it-information-bottleneck-finite-model`; `ex-it-weak-secrecy-does-not-imply-strong-secrecy` |
| 8 | `thm-it-finite-classical-wiretap-auxiliary-capacity` |
| 9 | `thm-it-degraded-wiretap-secrecy-capacity` |
| 10 | `ex-it-degraded-wiretap-capacity` |

The official item-dependency-levels graph over the assigned closure contains 34 unique in-run supplier items, no duplicate supplier IDs, and no dependency cycle. The actual Batch 12 graph computes `def-discrete-memoryless-channel` at level 2 (manifest label 1) and `lem-discrete-memoryless-channel-block-kernels-are-stochastic` at level 3 (manifest label 2); neither supplier was edited. The official graph exposed nine stale Batch 20 labels before correction: `def-it-finite-source-privacy-utility-region` 3/2, `def-it-information-leakage-and-equivocation` 3/2, `thm-it-perfect-privacy-kernel-criterion` 4/3, `lem-it-classical-wiretap-auxiliary-cardinality` 6/5, `thm-it-finite-classical-wiretap-auxiliary-capacity` 9/8, `thm-it-degraded-wiretap-secrecy-capacity` 10/9, `ex-it-information-bottleneck-finite-model` 6/5, `ex-it-weak-secrecy-does-not-imply-strong-secrecy` 6/5, and `ex-it-degraded-wiretap-capacity` 11/10. These assigned labels were corrected against the official graph; no other manifest was edited. The privacy-funnel example no longer lists the conditional-mutual-information equality theorem as a direct dependency because its proof uses the finite entropy chain rule; its level remains 5 because that chain-rule supplier is level 4 and itself has the theorem in its dependency closure.

## Cross-batch prerequisite interfaces

The current Batch 12 DMC definitions, product-kernel lemma, operational capacity definition, and capacity theorem were inspected as actual bodies/proofs. The finite DMC and product-law hypotheses used here match those bodies. Batch 12's random-coding achievability fixes a capacity-achieving input law, so it does not establish fixed-auxiliary threshold reliability; the wiretap theorem proves that case locally.

The current Batch 9 AEP page and AEP lemma were inspected. The page manifest lists `def-finite-source-information-density-and-typical-set`, and `lem-finite-alphabet-iid-information-aep` depends on it, but the carrier file `items/def-finite-source-information-density-and-typical-set.md` is absent. The manifest describes its planned interface as normalized block information density and an epsilon-typical set on the positive-probability support of a finite-alphabet IID source. That is planning context only; no supplier body, proof, or acceptance is claimed. No Batch 20 proof imports an AEP assertion, and the local fixed-law information-density concentration lemma is proved independently. The missing Batch 9 definition remains a page-level prerequisite blocker for readiness.

All finite entropy/KL suppliers used by the proofs were inspected directly, including the finite MI and entropy-chain definitions, finite KL equality, finite Markov data processing, and erasure-aware Fano corollary. The new auxiliary-cardinality proof also checks the published finite-dimensional Heine–Borel and extreme-value suppliers; their actual proof bodies were read for the compactness and attainment uses.

## Mathematical content and proof route

- The public-seed leftover-hash theorem states the two-universal collision hypothesis, finite total-variation convention, conditional guessing probability, and the exact condition `M g(X|Z) <= 4 epsilon^2` for distance at most `epsilon`.
- The wiretap definition fixes the joint finite kernel and its two marginals, product convention, private encoder randomness, no-feedback/no-key model, public code description, and average/maximal error. A local product-kernel lemma removes a cyclic well-definedness dependency.
- The source privacy–utility definition uses the factorization `P_SX K_Z|X`; the perfect-privacy theorem proves both directions, including zero-mass sensitive values and zero-probability output columns.
- The fixed-law information-density lemma proves finite support, expectation/variance, Chebyshev concentration, and an exponential upper tail. Resolvability is proved locally with explicit expected-KL and expected-TV bounds.
- The wiretap capacity theorem achieves every rate below a fixed auxiliary difference by pair-threshold decoding and randomization, applies resolvability, selects a deterministic public codebook, proves the exact average-divergence identity, and expurgates to maximal error while preserving strong secrecy. Its converse uses erasure-aware Fano, an exact hybrid telescoping identity, and the conditional Markov law for each positive-mass past/future context. The cardinality lemma is separately proved and makes the maximum finite.
- The degraded theorem reduces the auxiliary by finite Markov data processing. The B page computes a BEC cascade, a finite information-bottleneck objective and privacy boundary, and a noiseless weak-versus-strong leakage sequence.

All logarithms and rates are in natural-log nats. No choice axiom is used; the arguments concern finite supports and finite-dimensional real simplexes.

## Sources and harvest

The A page uses seven full-text source documents across five independent treatments: El Gamal–Kim's 641-page book-length PDF (wiretap chapter); Cuff's complete lectures 12, 13, and 15 (four pages each); Narayan–Tyagi's 150-page monograph (complete Chapter 5 §§5.2–5.3); Bloch–Laneman's complete 23-page paper (§§II, III, V); and Salamatian et al.'s complete five-page paper (§§II–III). The relevant proof reasoning, assumptions, metric distinctions, and locators are recorded in `batch-20.source-coverage.json` and `batch-20.source-evidence.json`. The source harvest contains 27 entries, each with a disposition. The three repeated source records on the B page refer to the same URLs and stamps as the A page; they support the examples.

`node tools/source-fetch-check.mjs --coverage research/non-ml-math-remaining-81-2026-10-18-batch-20.source-coverage.json --stamp` passed: 10/10 source uses fetch-verified, 10 newly stamped, 0 documented drops. The duplicated B-page stamps match the same full-text URLs and hashes. `node tools/coverage-checklist.mjs research/non-ml-math-remaining-81-2026-10-18-batch-20.coverage.json --json` passed: 2 pages, 27 harvested results, 0 errors, 0 warnings.

An exploratory Bloch–Barros book-mirror candidate was not selected: one attempted URL returned HTTP 404 and an Internet Archive PDF candidate returned HTTP 401. The prior authoring record did not retain those exact URLs or attempt timestamps; this limitation is stated in `batch-20.source-evidence.json`, not filled with guessed values. Searches found and the author read the alternative full texts listed above. The candidate is not cited, no Batch 20 item depends on it, and complete local proofs cover resolvability and both wiretap capacity claims.

## Proof contracts and current run state

`batch-20.proof-contracts.json` covers all 11 proof-bearing items with 49 numbered-step derivations, 61 exact supplier excerpts, eight boundary dispositions per item, finite checks where applicable, and no axiom uses. Final strict validation and citation-fidelity checks passed with 0 errors, 0 warnings, 0 missing quotes, and 0 widening candidates.

The live `.autopilot` status reports the run as running at `1-scaffold`, 75/81 batches covered, with no workers in flight; batches 14, 18, 19, 20, 78, and 79 remain missing from the stage coverage. Its current blocker is the plan JSON parse failure at position 6647 (line 129, column 2). The latest `git log` entry is unrelated and there is no Batch 20 authoring commit. No `RESUME.md` claim was used.

All 17 assigned items have Step 1 `escalated` records; none is marked ready. The first record, `thm-it-universal-hashing-leftover-bound`, was initially written with the correct empty direct-dependency list but a generic unresolved-prerequisite reason. It remains escalated and was not overwritten; the exact missing AEP supplier and its effect are recorded above and in `batch-20.cross-batch-dependencies.json`. The other 16 records list their examined dependencies and the AEP blocker. The run-wide `node tools/step1-decisions.mjs check --run non-ml-math-remaining-81-2026-10-18` completed but reports `closed:false` (1,522 run items, 987 ready); this batch's 17 escalations and an unrelated empty `relay-and-interference-channel-bounds-examples` inventory remain among the open work. No `--owner` option was used. The AEP page prerequisite and the draft status of the required pages prevent readiness. These records do not constitute independent approval.

## Scoped checks

Final scoped checks after the last item, contract, and manifest edits:

- `node tools/proof-layout.mjs` on all 17 assigned item files: **17 items, 49 steps, 0 defects**.
- `node tools/tsx-run.mjs tools/precheck.mts --json` on all 17 assigned item files: **11 proof-bearing items checked, 0 failures**; the six definitions have no proof body.
- `node tools/rendercheck.mjs --json` on all 17 items and both page carriers: **19 files, 0 errors, 0 warnings**.
- Focused `node tools/depcheck.mjs --items-file /tmp/non-ml-math-batch-20-item-ids.json --json`: **445 dependency-closure items, 443 pages, 0 errors, 0 warnings**; both assigned pages and all 17 items were checked.
- `node tools/content-policy.mjs research/non-ml-math-remaining-81-2026-10-18-batch-20.pages.json --json`: **17 items, 0 errors, 0 warnings**.
- The official dependency graph computed all **17/17 assigned item levels with 0 mismatches**. The run-wide graph reports the unrelated empty inventory `relay-and-interference-channel-bounds-examples`; the two existing Batch 12 label mismatches in this batch's prerequisite closure remain out of scope and are recorded above.
- Strict proof-contract validation: **11/11 proof-bearing items, 49 steps, 0 errors, 0 warnings**. Citation fidelity: **61 citations, 0 missing quotes, 0 widening candidates**.
- `node tools/coverage-checklist.mjs research/non-ml-math-remaining-81-2026-10-18-batch-20.coverage.json --json`: **2 pages, 27 harvested results, 0 errors, 0 warnings**.
- `node tools/source-fetch-check.mjs --coverage research/non-ml-math-remaining-81-2026-10-18-batch-20.source-coverage.json --stamp`: **10/10 source uses fetch-verified, 0 newly stamped; 10/10 resolved, 0 drops**.
