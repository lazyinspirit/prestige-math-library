# Batch 12 authoring notes — Discrete Memoryless Channel Capacity

Run `non-ml-math-remaining-81-2026-10-18`; assigned pair `discrete-memoryless-channel-capacity` and its examples page.

## Plan and design reconciliation

- The owner authoring direction was read and applied. No pair-specific design section exists; no design governed this pair.
- The IT07 scope in `research/plan-spec.json` and `research/plan-information-theory-track.md` calls for channel sequences, a finite DMC, fixed-length codes and error criteria, the finite-DMC capacity formula with achievability and converse, and the finite-alphabet strong-converse branch. The A page also states the no-feedback/no-cost-constraint convention. The B page gives BSC and BEC calculations. The plan and track agree; no design conflict was found.
- The pair has 18 A items and 2 B examples, below the 100-item page cap. The A page’s `tikzcd` kernel arrow is explained in prose; no proof depends on the diagram.

## Inventory and dependency levels

Levels were recomputed from the assigned manifest using in-run `deps` only. External item suppliers do not raise an item’s in-run level. The graph is acyclic, `manifest-deps` found no missing dependency arrays, and the scoped level checker passed 20/20 items (maximum 7).

- Level 0: `def-channel-sequence`.
- Level 1: `def-discrete-memoryless-channel`.
- Level 2: `lem-discrete-memoryless-channel-block-kernels-are-stochastic`, `def-discrete-memoryless-channel-information-capacity`.
- Level 3: `def-fixed-length-channel-code`, `def-discrete-memoryless-channel-information-density`, `lem-discrete-memoryless-channel-capacity-is-attained`, `lem-discrete-memoryless-channel-n-letter-information-bound`.
- Level 4: `def-fixed-length-channel-code-errors`, `lem-discrete-memoryless-channel-iid-information-density-converges`, `lem-discrete-memoryless-channel-capacity-achieving-output-divergence-bound`.
- Level 5: `def-discrete-memoryless-channel-operational-capacity`, `lem-discrete-memoryless-channel-average-to-maximal-expurgation`, `thm-discrete-memoryless-channel-random-coding-achievability`, `lem-discrete-memoryless-channel-information-density-concentration`, `thm-discrete-memoryless-channel-average-error-converse`.
- Level 6: `thm-discrete-memoryless-channel-alphabet-scoped-strong-converse`, `thm-discrete-memoryless-channel-capacity-formula`.
- Level 7: `ex-binary-symmetric-channel-capacity`, `ex-binary-erasure-channel-capacity`.

## Conventions and arguments

- Alphabets are finite and nonempty for the DMC; rows are stochastic in the `W(y|x)` convention. The product law is proved to be a stochastic kernel. Rates and information use natural logarithms and nats. Zero coordinates remain in the displayed alphabets; every likelihood ratio is evaluated on its stated support.
- Codes are deterministic, fixed-length, and have no feedback or input-cost constraint. Average error uses a uniform message; maximal error is also defined. Capacity attainment is proved by continuity on the finite input simplex. The random-coding proof includes the threshold decoder, miss and false-pass bounds, the finite-ensemble selection, and the zero-rate boundary. The converse uses Fano’s inequality and the n-letter entropy bound. Expurgation proves the maximal-error branch. The strong converse is stated only for finite input and output alphabets and its proof handles outputs outside the likelihood-ratio support explicitly.
- The capacity-achieving output lemma proves support inclusion before differentiating and proves the row-divergence bound with a one-sided perturbation. The invoked finite-dimensional extreme-value theorem states its equivalence in ZF; the local finite sums, simplex argument, finite codebook selection, and all other claims use no choice axiom.
- BSC and BEC proofs derive their mutual information and optimize over all input laws; zero/one crossover, fully noisy, noiseless, and fully erased endpoints are included.

## Suppliers and cross-batch evidence

- The required page route `f-divergences-renyi-and-hypothesis-testing` exists as a draft A page. Its current page text and the actual finite probability-vector, stochastic-kernel, and KL supplier bodies were inspected. The finite alphabet and support conventions, `K(y|x)` orientation, and KL direction `D(P||Q)` with natural logarithms match this pair’s uses.
- Its declared page route continues through `measure-theoretic-information-and-conditioning` and `finite-sample-tests-neyman-pearson-and-valid-p-values`; the former also names `finite-alphabet-entropy-and-divergence` and `conditional-distributions-and-regular-conditional-probability`. Those page files exist. This channel-capacity pair imports no regular-conditional-probability or hypothesis-testing claim from that route; its local proofs supply the finite arguments.
- Actual statements and proof bodies for the direct batch-4 and batch-7 item suppliers were inspected. The cross-batch sidecar records one page route and 48 item edges with evidence. These `verified` records describe interface/readiness checks only; they do not claim independent proof acceptance. Published suppliers used for calculus, logarithms, kernels, and finite-dimensional extrema were also inspected for the specific hypotheses and properties cited locally.
- The source-fetch check found no retrieval failures, so no recovery retry or source-resolution row was needed. Source locators, read extents, supported items, fetch stamps, and every harvested result disposition are recorded in the coverage file.

## Sources and coverage

- Polyanskiy and Wu, *Information Theory: From Coding to Learning*, full 730-page author-hosted text: Chapter 19 §§19.1–19.3 (printed pp. 370–380) for channel sequences, codes, capacity, BSC and BEC; Chapter 22 §22.1 (pp. 422–427) for the complete finite-alphabet strong-converse argument.
- Gallager, *Principles of Digital Communication I*, full 56-page MIT course text: Chapter 8 §§8.7.1–8.7.4 (printed pp. 281–287; PDF pp. 32–38) for the DMC, n-letter bound, Fano converse, and random-coding proof.
- MIT 6.441 Lecture 8, full 17-page note: PDF pp. 2–10 for channel sequences, single-letterization, BSC/BEC, and capacity-maximizing inputs.
- The A and B coverage entries record 31 harvested results with destinations. `source-fetch-check --stamp` passed 4/4 sources; the final check-only run also passed 4/4. `coverage-checklist --require-destination` passed with 0 errors and one low-yield warning: 8 of 26 A-page harvested results are included as new items. The remaining outcomes are explicitly recorded as inline, deferred, or out of scope with destinations or reasons; Alpha should review those dispositions.

## Scoped checks and readiness

- `manifest-deps.mjs`: pass, 20 items, 0 missing arrays.
- Scoped item dependency levels: pass, 20 items, maximum level 7, no cycles or label mismatches.
- `proof-contract.mjs --strict`: pass, 20/20 contracts, 74 exact supplier citations, 33 numbered-step mappings, 0 errors or warnings.
- `proof-layout.mjs` on all 20 changed items: pass, 33 steps, 0 defects.
- Scoped precheck: pass, 13 proof-bearing items, 0 failures; the 7 definitions have no proof body.
- `rendercheck.mjs` on the 20 items and both pages: pass, 22 files; all math parsed and frontmatter rendered.
- `source-fetch-check.mjs --coverage … --stamp`: pass, 4/4 fetch-verified; no new stamp was needed. The final check-only run passed 4/4.
- `step1-decisions.mjs record` wrote all 20 items as `ready`, without `--owner`. A scoped current-hash check passed 20/20. These are authoring-readiness records, not independent mathematical approval.

## Run-wide scheduling blocker

- The dispatched task states dependency level 3 with prerequisite batch 7 and scheduling input `825ada459eb8a44f2bca9b180e0d40e43ed62d08f26d224468ce63c38b792042`. The shared batch-level artifact currently records batch 12 at level 3 with `requires: [4, 7]` and input hash `4836a2dc692b41d7ae72da9e8835da8103ab7bed3d61c4896f751a14ba7c829d`. The item manifest has direct batch-4 as well as batch-7 suppliers. This dispatch/artifact discrepancy is left for owner reconciliation; no shared plan, scheduling artifact, or engine state was changed.
- The final read-only `batch-dependency-levels.mjs check --run …` cannot recompute the run graph because an unrelated published item has invalid unquoted YAML at `items/prop-first-order-star-commutator-is-a-poisson-bracket.md:22` (`locator: §1.2, first approximation: Poisson structures`). The pair-scoped dependency graph and all batch-12 item levels pass. The owner must repair the unrelated metadata and reconcile the shared schedule before a run-wide check can pass.
