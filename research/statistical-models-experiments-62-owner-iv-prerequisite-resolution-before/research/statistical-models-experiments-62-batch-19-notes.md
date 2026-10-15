# Batch 19 — authoring and evidence notes

Run: `statistical-models-experiments-62` · pair: `potential-outcomes-and-causal-identification` · role: beta.

## Plan and design comparison

- The controlling design is `research/plan-statistical-models-experiments-track.md` §SME-19, L191–192. The current `research/plan-spec.json` entries agree on both page IDs, order, category, titles, and the four page requirements: `statistical-experiments-models-and-identifiability`, `markov-kernels-and-markov-chains`, `conditional-expectation`, and `conditional-distributions-and-regular-conditional-probability`. **No design-versus-plan conflict remains.** The batch manifest preserves those four requirements.
- The historical `models-03` dossier proposed earlier item names, a separate partial-identification definition, and an older theorem interface. The controlling SME-19 design does not promise partial-identification bounds; this pair therefore retains its point-identification scope and proves the stated standardization/RCD result locally. The dossier's treatment-version warning is carried in the A-page definition. Its extra B ideas are not substituted for the assigned B inventory of randomized assignment, binary confounding, and positivity failure.
- The historical audit row marked several MSF-01 interfaces `planned_not_in_active_items` at audit time. The owner direction and current library now control: the MSF-01 page is published at `library/mathematical-statistics/statistical-experiments-models-and-identifiability.md`, including `def-identifiability-of-an-estimand` and `thm-identifiability-iff-constant-on-equivalence-classes`. The theorem uses the actual current definition; no stale or invented MSF supplier is used.

## Item inventory and dependency levels

The manifest inventory was fixed before item carriers were authored. Batch 19 has no in-run supplier batch and remains `dependency_level: 0`; all declared page suppliers are published external context. The item levels recomputed from the batch-19 manifest are:

- Level 0: `def-potential-outcomes-and-consistency`, `def-positivity-for-discrete-treatment`, `lem-conditional-independence-integrable-factorization`.
- Level 1: `def-conditional-exchangeability-of-potential-outcomes`, `def-causal-average-treatment-effects`.
- Level 2: `thm-discrete-treatment-potential-outcome-mean-identification`.
- Level 3: `ex-randomized-treatment-identification`, `ex-binary-confounding-standardization`, `ex-positivity-failure-nonidentification`.

The A page contains six items and the B page three examples. No dependency cycle or additional in-run edge was found. The item dependency closure contains 722 items across 161 pages; there are no missing targets, open-problem suppliers, active fallback records, or external dependencies in the focused closure. All 713 external closure items are published. The renderer/dependency graph also exposes inherited page context through `relations-functions-and-quotients`, `infinite-product-measures-and-kolmogorov-extension`, and `probability-spaces-random-variables-and-expectation`; these are published transitive supports, not additional in-run suppliers or changes to the plan's four direct page requirements.

## Supplier and hypothesis review

The current published supplier bodies and proof routes were checked at the actual item homes:

- MSF-01: `def-statistical-experiment`, `def-estimand-on-a-statistical-model`, `def-observational-equivalence`, `def-identifiability-of-an-estimand`, and `thm-identifiability-iff-constant-on-equivalence-classes`.
- Conditional independence: `def-conditional-independence-given-a-sigma-algebra` and `lem-conditional-independence-equivalences-and-preservation`. The former defines CI by bounded measurable products and inherits Choice through conditional-expectation classes; measurable-map preservation supplies the coordinate implication.
- Conditional expectation: `def-conditional-expectation-given-a-sigma-algebra`, `def-conditional-expectation-as-an-ae-class`, `cor-conditional-lp-contraction`, `lem-conditional-expectation-is-unique-almost-surely`, `thm-basic-algebra-and-order-properties-of-conditional-expectation`, `thm-taking-out-what-is-known`, and `thm-tower-property-of-conditional-expectation`. The local integrable-factor lemma proves its truncation extension and uses the published L1/L∞ contraction.
- Standard-Borel/RCD route: `def-standard-borel-space`, `def-conditional-law-given-a-random-element`, `thm-existence-of-regular-conditional-distributions-for-standard-borel-targets`, `lem-regular-conditional-kernels-factor-through-a-standard-borel-conditioning-variable`, `thm-conditional-integration-through-a-regular-conditional-law`, and `lem-simultaneous-ae-uniqueness-of-regular-conditional-distributions`. The RCD statement is applied under each positive-mass treatment-stratum law; positivity proves equivalence of that law's L distribution with the target L law before integration.
- Law/target identities: `def-law-or-distribution-of-a-random-element` and `thm-change-of-variables-for-expectation`.

The ATE and CATE use the target population law. Conditional exchangeability is stated as a full-data assumption, not inferred from the observed distribution. Positivity is required almost surely under the target L law for every treatment in the contrast; no uniform lower bound is assumed. The standard-Borel RCD formula is an almost-sure version. The theorem is restricted to discrete treatment and asserts no pointwise effect at a null value of a continuous treatment. The positivity-failure example supplies two full-data laws with the same observed law but different ATEs.

Choice is declared in each author-owned item that uses the library's conditional-expectation or RCD class conventions. The local integrable-factor proof uses Choice only through those classes and Lp contraction. The finite model arithmetic in the examples is explicit; the formal conditional-independence convention remains under its stated Choice assumption.

## Source reading and retrieval history

- Hernán–Robins, *Causal Inference: What If*: the full 365-page author-hosted 19 August 2026 PDF was fetched and the complete focused units H&R Ch. 1 §§1.1–1.5, printed pp. 3–12, and Ch. 3 §§3.1–3.6, printed pp. 27–45, were read. The stale 2024 Harvard PDF URL returned a 275,031-byte HTML profile response at `2026-10-14T16:44:53.516Z`. The recovery search `Hernan Robins Causal Inference What If full PDF author hosted chapter 1 chapter 3` led to the author page `https://miguelhernan.org/whatifbook`; its current-version link resolved to `https://miguelhernan.org/s/hernanrobins_WhatIf_19aug26.pdf`. The failed attempt and successful alternative are preserved in `research/statistical-models-experiments-62-batch-19.coverage.json`.
- Kang, “Causal Inference: Identification Under Strong Ignorability”: the complete author-hosted HTML note was inspected, including its randomization/consistency assumptions, stratified exchangeability and overlap, ATE derivation, support qualification, and observational-study caveat.
- Aldous–Chewi, Probability Theory Lecture 9 §9.2: the complete conditional-independence definition and equivalent conditional-expectation identity were inspected. The local integrable extension is proved rather than imported.
- `source-fetch-check --stamp` verified all three full texts: H&R PDF (11,315,465 bytes; 365 pages), Kang HTML (57,291 bytes; 26,718 extracted text characters), and Aldous–Chewi PDF (644,028 bytes; 104 pages). No source was dropped; the recovered H&R source is the one cited in the authored items.

## Scoped checks and readiness

- Batch-19 `dependencyLevels` check: 9 items; levels 0–3 as listed above; no cycles. The 9 manifest `deps` arrays exactly match the 9 item carriers. `manifest-deps`: 9 items, no missing arrays or errors.
- `precheck`: 9 files, 5 proof-bearing files checked, 0 failures; the four definitions are not applicable. `proof-layout`: 9 items, 20 proof steps, 0 defects.
- Strict proof-contract check: 9/9 checked, 0 errors or warnings. Focused `depcheck`: 9 items, 722-item/161-page prerequisite closure, 0 errors or warnings. Focused `fwdcheck` and `extcheck`: 0 errors or warnings.
- `content-policy`: 9 scoped items, 0 errors or warnings. `rendercheck`: all 9 items and both pages, 0 errors or warnings; all math spans parsed by the real KaTeX renderer. `source-fetch-check`: 3/3 verified.
- The first focused `depcheck` found one `b-leaf-content` edge because the theorem's null-treatment remark pointed to a published example on another pair's B page. That dependency was removed and replaced by the published A-side almost-sure RCD uniqueness theorem; the remark now states only the a.e. qualification proved by that supplier. The final focused dependency check passes.
- `step1-decisions record` marked all nine owned items `ready` with their examined direct dependencies; an item-scoped re-read confirms all nine records are closed at current hashes. The run-wide readiness check reported 206 items, 28 ready, and `closed: false` because other batches still have empty scaffold inventories and missing records. No cross-batch supplier is outstanding for batch 19.

No unresolved mathematical or retrieval blocker remains for this pair. Completion records are author readiness evidence, not independent approval.
