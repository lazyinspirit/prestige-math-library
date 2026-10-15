# Batch 4 authoring notes — Generalized linear models and Fisher scoring

Run `statistical-models-experiments-62`, beta / batch 4. The dispatched batch level is 1, with prerequisite batch 1; dispatch scheduling input was `be0b7aca66787065a1de6e365a80730a6752b56b03a5c15b6c6abcb95603d30d`. The pair owns A page `generalized-linear-models-and-fisher-scoring` (order 1924) and B page `generalized-linear-models-and-fisher-scoring-examples` (order 1925). Both remain draft.

## Controlling plan and conflict record

The current task and `research/plan-spec.json` give the A page the same nine required page interfaces, all retained in the scaffold manifest. The concise SME-04 `Requires` line in the track design names SME-01, MSF-04/05/07, conditional MSF-15, and matrix differentiation; it omits several contextual interfaces carried by the current plan spec. This is treated as shorthand, not as a waiver: the manifest retains scientific model contracts, dominated experiments, complete sufficiency/exponential families, Fisher information, likelihood asymptotics, matrix differentiation, CLT, independence, and inner-product spaces. The B page requires the A page.

The older `models-01` dossier calls its GLM proposal SME-03 and uses the former page IDs `generalized-linear-models` / `generalized-linear-models-examples`; the integrated track calls it SME-04 and the current stable page IDs are the ones assigned here. Per owner direction, stable page IDs and actual current supplier homes control. The dossier's `phi`/component-dispersion shorthand was narrowed to the current common `a(phi)` scale wherever a common-scale score or IRLS identity is asserted. There is no unresolved mathematical scope conflict. The dossier/audit's deviance-diagnostics source gap is preserved below.

## Inventory, logical dependencies, and levels

The exact direct `deps` arrays are in `statistical-models-experiments-62-batch-4.pages.json` and match the item carriers. Items were scaffolded supplier-first in ascending level. The scoped calculation over batches 1 and 4 finds 20 items, no cycles or label errors, and maximum level 7. The following table records each level and its in-run suppliers; external mathematical suppliers remain listed in each item's full manifest/carrier `deps`.

| Level | Item | In-run suppliers |
|---:|---|---|
| 1 | `def-glm-observation-family` | `def-scientific-statistical-model-contract` (batch 1) |
| 2 | `lem-glm-product-density` | `def-glm-observation-family` |
| 2 | `lem-glm-mean-and-variance-identities` | `def-glm-observation-family` |
| 3 | `def-generalized-linear-model` | `def-glm-observation-family`, both level-2 lemmas |
| 4 | `def-nested-model-deviance` | `def-generalized-linear-model`, `lem-glm-product-density` |
| 4 | `thm-canonical-glm-score-and-hessian` | `def-generalized-linear-model`, `lem-glm-product-density`, `lem-glm-mean-and-variance-identities` |
| 4 | `thm-glm-general-link-score-and-information` | `def-generalized-linear-model`, `def-glm-observation-family`, both level-2 lemmas |
| 4 | `ex-poisson-overdispersion` | `def-generalized-linear-model`, `lem-glm-mean-and-variance-identities` |
| 5 | `alg-fisher-scoring-irls` | `def-generalized-linear-model`, `thm-glm-general-link-score-and-information` |
| 5 | `lem-nested-model-deviance-nonnegative` | `def-nested-model-deviance` |
| 5 | `thm-canonical-glm-strict-concavity` | `thm-canonical-glm-score-and-hessian` |
| 6 | `ex-logistic-separation-no-finite-mle` | `def-generalized-linear-model`, canonical score/Hessian, strict concavity |
| 6 | `ex-identity-link-bernoulli-boundary` | `def-generalized-linear-model`, general-link score/information, IRLS algorithm |
| 6 | `ex-singular-fisher-information-nonunique-irls` | `def-generalized-linear-model`, general-link score/information, IRLS algorithm |
| 6 | `thm-irls-is-fisher-scoring-step` | `alg-fisher-scoring-irls`, `thm-glm-general-link-score-and-information` |
| 7 | `ex-bernoulli-logit-glm-one-step` | GLM definition, canonical score/Hessian, general-link information, algorithm, one-step identity |
| 7 | `ex-poisson-log-glm-one-step` | GLM definition, moment lemma, canonical score/Hessian, general-link information, algorithm, one-step identity |

The IRLS algorithm also explicitly depends on `thm-of-square-roots`, the Moore–Penrose definition/existence theorem, and the minimum-norm least-squares result. The manifest was corrected to remove the unused `lem-glm-mean-and-variance-identities` edge from the logistic-separation example; its stated proof uses the GLM definition, canonical score/Hessian, and strict-concavity result. Recomputed level remains 6.

## Supplier inspection and assumptions

The batch-1 carrier `def-scientific-statistical-model-contract` was read with its seven actual definition suppliers. It provides the scientific units, indices, variable roles, estimand, observation mechanism, support, law, conditioning, and adequacy fields, but explicitly does not prove adequacy or imply independence/common support. Its current hash-bound Step 1 record checks `ready` (`owner:false`). Our response-family definition separately assumes finite independent coordinates, an explicit product sampling law, and common component supports. All nine page-level supplier interfaces are recorded `verified` in the cross-batch input after inspecting actual supplier bodies and the relevant proofs. The separate `thm-of-square-roots` interface is also recorded.

The local route uses explicit finite families of supplied component densities, fixed common supports, sigma-finite base measures, local integrable first- and second-derivative envelopes, finite second moments, and—where Fisher scoring is stated—a positive common scale, positive variance, and nonzero link derivative. Product density is proved by finite product measures, Tonelli on rectangles, and probability-measure uniqueness. Moment identities differentiate normalized densities only under the stated envelopes. The general-link information calculation uses independent coordinates and zero-mean residuals. The WLS algorithm defines a single-valued Moore–Penrose minimum-norm selection; its equality to `beta + I^{-1}U` is asserted only when information is invertible. No convergence, termination, finite-MLE existence, iid asymptotic calibration, saturated-model chi-square law, or deviance-residual goodness-of-fit result is claimed. Deviance is defined only for nested models on common support with finite real suprema, and nonnegativity follows from set inclusion.

No Axiom of Choice branch is imported. The generic exponential-family, Fisher-information, and CLT suppliers were inspected, including the AC-dependent representative-selection branches; the authored arguments instead use the explicitly supplied finite densities. CLT, Borel–Cantelli, zero–one, and Wald/score/LR asymptotics are not used. The fixed/conditioned-design scope does not silently assume identically distributed observations or empirical model adequacy.

## Source reading and disposition

Two independent treatments were read in full: MIT 18.650 Lecture 10, all 53 PDF pages, and CMU Tibshirani GLM notes, all 6 pages. Coverage records exact URLs, page locators, every harvested result's item and disposition, and the reasons for declines. Fetch inspection and `source-fetch-check --stamp` verified all four page-source retrievals:

- MIT PDF: 307,901 bytes, 53 pages, SHA-256 prefix `af23e7d87f09feec`.
- CMU PDF: 154,238 bytes, 6 pages, SHA-256 prefix `74cc997b24139128`.

The A-page harvest has 18 results: 2 included, 9 inline, and 7 out of scope. The B-page harvest has 12: 8 inline and 4 out of scope. The coverage checklist has no errors but emits its low-yield advisory for both pages (2/18 and 0/12 `included` results); inline results are carried by local definitions/proofs/examples, and the out-of-scope results each have specific reasons. Alpha/owner confirmation of these dispositions remains an advisory handoff item, not an unresolved mathematical premise. MIT's p. 37 global Newton-convergence assertion and OCR-damaged p. 49 WLS line were not adopted. CMU's p. 3 Bernoulli normalizer sign and p. 5 final-WLS inference shortcut were rejected. Neither source supplies deviance diagnostics. No retrieval failed or was dropped, so no `source_resolution` entry was needed.

## Contracts and local checks

The 17-item proof contract contains exact supplier excerpts, each proof step's claim and inputs, boundary worksheets, and finite arithmetic records for the explicit Bernoulli, Poisson, separation, overdispersion, identity-boundary, and singular-design calculations. Strict proof-contract validation passes for all 17 items with no warnings. Thirteen proof-bearing items pass precheck; their `verification.precheck` fields record `pass`. All 17 changed items pass explicit `proof-layout` (29 numbered steps, 0 defects). Rendercheck passes all 19 changed item/page files with 0 errors and 0 warnings. Scoped `depcheck`, `fwdcheck`, and `extcheck` all pass; manifest dependency validation reports 17 items and 0 errors. Content policy reports 17 items with 0 errors/warnings. Source fetch check reports 4/4 verified and resolved. Page inventories, item dependency sets, and page listings were reconciled.

The scoped item-level calculation over batches 1 and 4 passes. Run-wide checks remain blocked by other batches and were not repaired here: `item-dependency-levels check` finds empty sibling scaffold inventories and pre-existing level mismatches outside batch 4; proof-contract coverage cannot construct its whole-run scope because `stratified-sampling-and-allocation` has an empty/invalid inventory; and the read-only frontier-ledger collection encounters an invalid review/ownership row in batch 21. The shared batch-dependency-levels artifact is stale after current manifest authoring: the live recomputation changes its input hash from recorded `f44a63775dd68759c41c2fbc1304c8cc5f627d9d0d84ffaf1aa0227b5b330879` to `d80556bb6561b48d89b4546c407205dfc2deaa81aefe7ebda64f0db1b7b1895b`, while batch 4 still computes as level 1 requiring batch 1. That shared artifact is for owner/engine reconciliation after the remaining manifests settle and was not rewritten.

These records document authoring and mechanical checks only; they are not independent approval or publication.

After those checks, `step1-decisions.mjs record` wrote `ready` for all 17 assigned items with their exact direct dependency IDs. The final hash-bound check reports 17/17 closed and ready, with no owner-controlled records. This is author readiness only; the low-yield source-disposition advisory and independent approval remain visible for owner review.
