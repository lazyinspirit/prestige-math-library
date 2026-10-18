# Batch 26 authoring notes

Run `non-ml-math-remaining-81-2026-10-18`, batch 26, pair `finite-quantization-lloyd-and-compact-companders` / `finite-quantization-lloyd-and-compact-companders-examples`.

## Scope and controlling plan

No pair-specific design section was found; no design governed this pair. The controlling `IT23` row in `research/plan-spec.json` and §23 of `research/plan-information-theory-track.md` agree: define measurable nearest-center quantizers and exact finite empirical procedures; separate Lloyd descent/finite termination from exhaustive global optimization; prove the positive $C^1$ compact one-dimensional compander limit and optimal point density; include an exact suboptimal fixed-point counterexample. The B-page row calls for worked calculations and counterexamples and has no later A-page prerequisite. The A/B pages and 15-item manifest implement that scope.

The older `research/information-theory-planning/proposed-items.json` records Lloyd and exhaustive correctness as algorithm proof obligations. `SCHEMA.md` requires algorithms to define procedures and puts correctness, termination, and complexity in separately proved result items. The scaffold therefore separates the Lloyd and exhaustive procedures from their theorem items, including `thm-it-exhaustive-global-empirical-quantizer-is-optimal`. This is a schema-level correction to the older inventory, not a conflict with the controlling IT23 plan. No proposed claim was dropped to fit the page; A has 13 items and B has 2, both below the 100-item cap.

## Item inventory and dependency levels

The full dependency declarations are in `research/non-ml-math-remaining-81-2026-10-18-batch-26.pages.json`.

| Level | Items |
|---:|---|
| 0 | `lem-it-weighted-centroid-squared-error-identity`; `def-it-point-density-cumulative-map` |
| 1 | `def-it-finite-squared-error-quantizer`; `lem-it-point-density-cumulative-map-is-c2-diffeomorphism` |
| 2 | `lem-it-nearest-center-quantizer-is-borel-and-finite-distortion`; `def-it-compact-one-dimensional-compander` |
| 3 | `alg-it-finite-data-lloyd-quantizer`; `alg-it-exhaustive-global-empirical-quantizer`; `lem-it-compact-compander-quantizer-is-borel-and-finite-distortion` |
| 4 | `thm-it-finite-data-lloyd-termination-and-fixed-point`; `thm-it-exhaustive-global-empirical-quantizer-is-optimal`; `thm-it-compact-compander-high-rate-distortion`; `cex-it-lloyd-fixed-point-need-not-be-global` |
| 5 | `thm-it-optimal-compact-compander-density`; `ex-it-uniform-compact-compander` |

The in-run item chain begins with the Batch 11 supplier `def-it-single-letter-distortion-and-block-distortion` at level 0. It feeds `def-it-finite-squared-error-quantizer` at level 1, then the finite nearest-center and compact-compander definitions/lemmas, procedures, and their result items. The centroid identity and point-density cumulative-map branch are independent level-0 suppliers; the cumulative inverse lemma is level 1. A scoped recomputation including the current Batch 11 supplier and all Batch 26 items checked 16 items with no cycle or label errors; all declared levels matched.

The assigned task and `batch-26.source-coverage.json` use scheduling input SHA-256 `915d16d1d2dca7aabcef49ebb007bfda115172ff8e576a4dfe39b3be03f7c5a4`. The run-wide `batch-dependency-levels.json` currently has `input_sha256` `5b660437ff2af54b535a540c160e388767c35cc9176ba0f032f335e8f61d5bfe`. Both records place Batch 26 at level 4 with prerequisite Batch 11; the fingerprints differ. The shared run-wide artifact was left untouched for owner reconciliation.

## Mathematical scope and choices

- The finite quantizer definition covers measurable maps on Borel subsets of $\mathbb R^d$ with finite second moment, and separately defines the least-index nearest-center rule. Tie cells use strict inequalities against earlier indices and non-strict inequalities against later ones. The Borel and finite-distortion argument includes coincident centers and empty cells.
- The Lloyd procedure uses exact comparisons, least-index ties, unchanged empty centers, and an exact unchanged-center stop. A changed pass strictly lowers distortion; the finite center-state bound gives at most $2^{Nk}$ passes. The theorem concludes at a nearest-assignment/centroid fixed point and makes no global-optimality claim.
- The exhaustive procedure enumerates all $k^N$ assignments and uses $x_1$ for empty-cluster centers. Its separate theorem compares the exhaustive minimum against the nearest assignment of every competitor and proves global empirical optimality with an exponential exact-operation bound.
- The compander is a specified Borel interval partition, not asserted to be a nearest-center quantizer in source coordinates. The asymptotic theorem assumes positive normalized $C^1$ densities on fixed $[a,b]$ with $a<b$. It transforms to cumulative coordinates, bounds a uniform Taylor remainder, sums midpoint-cell terms, and passes to the Riemann limit. It makes no vector, unbounded-support, overload, or unrestricted optimal-quantizer claim.
- The optimal-density theorem proves the lower bound and unique equality case with the exact factorization $(z^{1/3}-1)^2(z^{1/3}+2)$. The B-page counterexample computes every distance, centroid, and distortion for the five-point data exactly; the uniform example evaluates each midpoint-cell integral exactly.
- No choice axiom is used. Finite ties, finite enumeration, inverse values, and all functions in the compact-interval arguments are specified canonically. The A-page TikZ schematic specializes to $g=1$, $[0,1]$, and $N=3$; its cells, reproduction values, and endpoint convention are stated alongside it. No proof relies on the drawing.

## Sources and source dispositions

Three complete full-text treatments were retrieved and the relevant reasoning was inspected: Robert M. Gray, *Source Coding Theory*, Chapter 5 §§5.1–5.3 and §5.6; Robert Gallager, MIT 6.450 Chapter 3 §§3.2.1–3.2.3, §3.7, and Appendix 3A; and Gray–Neuhoff, “Quantization,” §§II, III, and IV-A. The source URLs, exact locators, supported item IDs, dispositions, retrieval hashes, and stamps are recorded in `research/non-ml-math-remaining-81-2026-10-18-batch-26.source-coverage.json` and `...batch-26.source-evidence.json`. Coverage records 25 harvested results with included, inline-context, and out-of-scope dispositions. No source was dropped and no retrieval failed; no recovery retry or `source_resolution` entry was needed.

The sources provide context for nearest-center cells, centroid updates, Lloyd iteration, local minima, and high-rate point-density formulas. Their high-rate discussions retain small-cell, smoothness, and overload qualifications. They do not prove this pair's exact finite-state Lloyd bound, exhaustive global search theorem, or uniform compact $C^1$ Taylor limit; those arguments are complete local proofs. Gray's full author-hosted PDF is 197 pages by its MuPDF trailer and the inspected full edition. The fetch check's raw `/Type /Page` byte scan reports 591; the SHA-256 prefix `671c543ec37fa2e0` matches the inspected PDF, so this mechanical page-count discrepancy is documented rather than treated as a fetch failure.

`source-fetch-check --stamp` verified all 3 sources, with 0 failures, 0 drops, and 0 new stamps on the final check. Its earlier successful invocation wrote the current stamps.

## Cross-batch dependencies and readiness

The A-page prerequisite `rate-distortion-and-lossy-source-coding` is present and its current page body was read, but its status is draft. Batch 11 is still missing from the native run's `1-scaffold` stage, so this authoring record does not infer acceptance or publication. The pair imports no rate-distortion theorem.

The actual current body of `def-it-single-letter-distortion-and-block-distortion` was also read. It supplies a measurable single-letter $d:\mathcal X\times\widehat{\mathcal X}\to[0,+\infty]$, normalized additive block distortion $d_n$, and expected distortion $\mathbb E d_n$. The exact local specialization is $n=1$ and $d(x,c)=\|x-c\|_2^2$ on Borel $X\subseteq\mathbb R^d$ under the finite-second-moment hypothesis. It is a draft Batch 11 item with no native acceptance recorded. The 12 items affected through this item-level supplier are enumerated in the source-evidence record. No supplier excerpt, completed proof, or acceptance was invented.

All 15 items have placement and draft bodies. The ten proof-bearing items have exact-step proof contracts, 38 exact supplier citations, boundary worksheets, and local finite calculations; the definitions and algorithms have no phase proof, so proof contracts are not applicable to them. All 15 Step 1 decisions were recorded as `escalated`, without `--owner`, because the required A-page prerequisite remains draft and Batch 11 acceptance is pending. The item-level distortion supplier additionally blocks the 12 affected items. Each record names its examined item dependencies and the exact unresolved supplier context. These are authoring readiness escalations, not independent mathematical approval.

## Scoped checks and run status

- `precheck.mts --json` on the ten proof-bearing items: 10/10 passed.
- `proof-layout.mjs` on all 15 items: 40 numbered steps, 0 defects.
- `rendercheck.mjs` on 15 items and both pages, including the TikZ schematic: 17 checked, 0 errors, 0 warnings.
- Focused `depcheck.mjs` on the 15 assigned items: 0 errors, 0 warnings; 478 dependency-closure items checked.
- `content-policy.mjs` on the Batch 26 manifest: 15 scoped items, 0 errors, 0 warnings.
- Strict `proof-contract.mjs`: 10/10 contracts, 0 errors, 0 warnings.
- `coverage-checklist.mjs`: 2 pages, 25 harvested results, 0 errors, 0 warnings.
- Scoped dependency-level recomputation including the Batch 11 supplier and Batch 26: 16 items, no errors, all labels match.
- Final `source-fetch-check --stamp`: 3/3 sources fetch-verified and resolved, 0 failures, 0 drops.

`proof-contract-coverage.mjs --run ... --contracts ...` could not initialize its whole-run scope: it reports `Empty or invalid frontier page inventory finite-blocklength-and-reliability`, a different unfinished page. The strict Batch 26 contract validator passed independently. The aggregate `step1-decisions.mjs check --run ...` also stops before checking records because another run manifest duplicates `lem-3-manifold-boundary-kernel-is-lagrangian`; each Batch 26 record was written successfully with the required `record` command.

The final native status recomputation reports the run still at `1-scaffold`, 61/81 items covered, nothing in flight, and the blocker `plan() threw — Unexpected non-whitespace character after JSON at position 6647 (line 129 column 2)`. `research/plan-spec.json` itself parses as JSON; the native planner blocker remains for owner investigation. No published content, shared plan, engine state, verdict, or other pair's files were edited.
