# Batch 25 authoring notes — Density Estimation

## Plan reconciliation

The controlling MSF-24 section in `research/plan-mathematical-statistics-track.md` requires MSF-01, MSF-02, probability spaces/random variables/expectation, and product measures/Fubini–Tonelli. The planning-scope registry maps MSF-01 and MSF-02 to `statistical-experiments-models-and-identifiability` and `estimators-and-randomized-procedures`; `research/plan-spec.json` agrees on the pair and scope. No substantive plan/spec conflict was found. The assigned A/B pair preserves pointwise density estimation, bias, variance, integrated MISE upper rate, Gaussian constants, finite-bandwidth smoothing, and boundary bias; it claims no minimax lower bound.

The batch dependency input records pair level 2 and prerequisite batches 1 and 2. Item levels use the actual in-run item graph: the KDE definition is level 4, its local suppliers level 5, A-page bias/variance/MISE results and the finite-bandwidth/boundary examples level 6, and Gaussian constants level 7. These labels are recomputed from the batch manifests by `item-dependency-levels.mjs`.

## Prerequisites and interfaces

The actual MSF-01 and MSF-02 A pages and all their listed items were inspected; each supplier has a ready Step-1 record. The cross-batch dependency ledger records the concrete page and item interfaces, without claiming independent review. The KDE definition retains the parameterized experiment, estimand, and measurable-statistic conventions. It explicitly treats $f(x)$ as version-specific and makes no identifiability claim for arbitrary density versions.

The global MISE argument also uses the existing $W^{2,2}$ definition, $C_c^\infty$ density result, product-measure/Tonelli results, Holder, and the $L^1$ change-of-variables corollary. Pointwise substitutions and nonnegative-KDE normalization use the C¹ change-of-variables result. These direct item dependencies are declared on the carriers; the mathematical supplier pages are not added to the planned page-level `requires` list. The proof statements carry ACω exactly where the cited Sobolev, Lebesgue-box, or change-of-variables suppliers require it. No full AC or dependent choice is assumed.

The variance theorem states both $h_n\to0$ and $nh_n^d\to\infty$, following the regimes stated in Newey's Proposition 2 and the APTS treatment. The local expansion uses $h_n\to0$; the second condition records the usual vanishing-variance regime and remains an explicit sufficient hypothesis.

## Source reading and dispositions

- Newey, *Nonparametric and Semiparametric Estimation*, full 24-page MIT OpenCourseWare PDF; KDE development and proofs reviewed on PDF pp. 1–7. Its pointwise, variance, and MISE formulas are independently reproved under explicit local hypotheses.
- Bowman and Evers, *Nonparametric Smoothing*, full 103-page APTS notes; KDE sections 1.2–1.2.4 reviewed on PDF pp. 6–10. This is the second independent full lecture-note treatment for the A page. Its informal asymptotics are corroboration; omitted assumptions are supplied locally.
- Tibshirani, *Nonparametric Regression: Nearest Neighbors and Kernels*, full 11-page Berkeley notes; §3, p. 4 and §3.1, pp. 5–7 inspected. The Gaussian-kernel convention is used as limited corroboration. The regression boundary discussion is explicitly out of scope and is not treated as a density-estimation result.

Every harvested source claim has an item disposition in batch coverage. No retrieval failed, no source was dropped, and no source-resolution escalation was needed. `source-fetch-check --stamp` verified all recorded full-text sources; the source records retain the fetch stamps and prior retrieval attempts.

## Open handoff checks

No assigned prerequisite body is missing. The dependency ledger leaves the owning pairs' independent review separate from this authoring verification. The pointwise variance bandwidth condition and the $W^{2,2}$/ACω route are recorded above for owner reconciliation; neither weakens the planned claims. No cross-batch plan change or page-capacity issue was required.

## Scoped checks and handoff

- The carrier/manifest audit found 12 matching item inventories and dependency lists. The scoped item-dependency calculation across batches 1, 2 and 25 checked 28 items, maximum level 7, with no errors.
- Focused `depcheck` checked the 12 assigned items and their prerequisite closure (1,077 items, 173 pages): zero errors or warnings. `content-policy` checked all 12 batch items: zero errors or warnings.
- Strict proof-contract validation checked all 12 items, 106 fact-to-supplier citations and 33 proof-step mappings: zero errors or warnings. `proof-layout` checked 11 proof-bearing carriers and 33 rendered steps, with zero defects.
- The line-based `precheck` checked 11 proofs: five passed and six returned a canonical phase-layer repair: `lem-kde-evaluation-is-a-measurable-statistic`, `lem-kde-jointly-measurable-in-sample-and-evaluation-point`, `thm-kde-pointwise-second-order-bias`, `thm-kde-global-mise-upper-rate`, `ex-finite-bandwidth-kde-smoothing`, and `ex-kde-boundary-bias`. For example, it proposes changing `1.2` (which cites `1.1`) to `2.1`, contrary to the explicitly required sequential phase-step example (`1.1`, `1.2`, with `1.2` citing `1.1`). The requested numbering was retained; `proof-layout` independently confirms the rendered step rows and tags. This parser discrepancy is left visible for owner review.
- `coverage-checklist` checked both pages and all 23 harvested source results with zero errors. It reports one advisory low-yield warning: 6 of 16 A-page harvest rows are directly included, while the others are explicitly inline or out of scope with item-specific dispositions and reasons. Alpha should confirm those dispositions during independent review.
- `source-fetch-check` verified all 6 coverage records (three unique URLs repeated on the B page), with no new fetches, failures or drops. No `source_resolution` entry was needed.
- The dispatch records pair level 2 with prerequisite batches 1 and 2. The read-only batch-level check currently stops while parsing an unrelated batch-23 supplier carrier: `items/lem-gaussian-centering-for-bounded-symmetric-quasiconvex-loss.md:25` and `items/thm-brunn-minkowski-for-compact-convex-sets.md:30` contain the unquoted source title `γ-Radonifying operators: A Survey`, which YAML reads as a nested mapping. This is outside batch 25 ownership; those files were not changed. The owner-controlled batch-level record was not rewritten. Item-level labels were recomputed from the current manifests as required.

The ten harvest rows not marked `included` are not missing mathematical claims: they are recorded as local inline derivations, corroboration without imported hypotheses, or out of scope (including the regression-only boundary discussion). The low-yield warning is advisory evidence for independent confirmation, not owner acceptance.
