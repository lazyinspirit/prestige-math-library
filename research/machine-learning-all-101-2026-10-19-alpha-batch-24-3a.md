# Batch 24 Step 3a adjudication

Run: `machine-learning-all-101-2026-10-19`; group: `batch-24`.

Read the dispatch, generated order, scope, reader report/findings, refuter report, and pre/post hash snapshots. Six touched obligations and reader:24:1 are owed; no page or refuter obligations. Published suppliers stay read-only. Engine owns stamping and gates.

## Dependency-level 0 review

- `def-mahalanobis-pseudometric`: accepted reader locator correction. Complete Definition requires symmetric PSD M and d>=1; q is nonnegative, square-root existence applies, and pseudometric separation is expressly not required. Source: Bellet–Habrard–Sebban https://arxiv.org/pdf/1306.6709 printed pp.9–10; Weinberger–Saul https://jmlr.org/papers/volume10/weinberger09a/weinberger09a.pdf section 2.1. Dependency `thm-of-square-roots` supplies the nonnegative root. No interface change.
- `lem-positive-semidefinite-cone-is-frobenius-closed`: accepted the explicit norm-induced metric and exact norm-axiom suppliers. Negative witness, strictly positive radius and entry Cauchy–Schwarz prove a complement ball; no choice axiom or invertibility is needed. Read `def-frobenius-matrix-norm`, `def-euclidean-inner-product`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `cor-triangle-inequality-for-inner-product-norm`, `def-norm-and-normed-space`, `def-metric-topology`, `def-metric-ball`. Complete risk review recorded before proceeding higher.
- `lem-symmetric-matrix-frobenius-isometry`: accepted source locator correction. All three steps checked: coordinate count d(d+1)/2, inverse dividing off-diagonals by sqrt(2), exact bilinear dot-product expansion and norm equality. d=1 has no off-diagonal coordinates. Exact suppliers are Frobenius entry formula, Euclidean coordinate dot product and positive square root.
- `thm-frobenius-projection-onto-psd-cone-is-spectral-clipping`: accepted source locator correction. Checked all five steps and exact spectral/positivity/unitary-invariance suppliers. Diagonal nonnegativity gives independent scalar lower bounds; equality kills off-diagonal squares and uniquely fixes every diagonal, including zero eigenvalues. Hence repeated eigenvalues and different eigenbases give the same minimizer. Complete risk review recorded. Higham https://nhigham.com/wp-content/uploads/2023/10/high88d.pdf Theorem 2.1, article pp.105–106, supplies the matching solution; Bindel https://www.cs.cornell.edu/courses/cs6210/2022fa/lec/2022-10-06.pdf section 2 is PDF pp.1–2 and section 6 is PDF p.5. Bindel's introductory strict-convexity wording is not used: local equality analysis proves uniqueness directly.

All six current touched item raw hashes equal their post-reader snapshot hashes. All six archived preimages at `research/machine-learning-all-101-2026-10-19-owner-step3-authenticated-preimages/preimage/items/` equal their pre-reader hashes; exact diffs were read. Four differences are source locators; two also add explicit prerequisite citations/metric or sum notation. No historical preimage uncertainty.

Level 0 checkpoint completed; subsequent review is recorded below.

## Dependency-level 1 review

`lem-svec-transports-frobenius-subgradients`: all four steps checked, including surjectivity in the complement-ball argument, empty domains and global domain-relative subgradient inequality. Exact convexity/subgradient/topology/ball definitions read. No defect; complete risk review recorded.

`thm-mahalanobis-distance-is-pseudometric`: accepted locator repair after checking all four steps. PSD form/operator correspondence and S* S factorization have the required real finite-dimensional hypotheses; norm equality follows from square-root uniqueness. Singular M and M=0 are valid and separation is not claimed. Complete risk review recorded.

Level 1 checkpoint completed.

## Dependency-level 2 review

`thm-lmnn-fixed-target-objective-is-convex`: every step and exact objective/finite-sum/trace/convexity supplier checked. Fixed targets make each margin affine; its positive part satisfies convexity directly. Nonnegative weights include mu=0,1; empty target/impostor sums are valid. PSD convexity is a direct quadratic-form calculation. No strict convexity or attained minimum is asserted. Complete risk review recorded. Level 2 checkpoint completed.

## Dependency-level 3 review

`lem-lmnn-explicit-subgradient-and-data-bound`: accepted reader repair after checking all five steps and exact F1–F5 suppliers. Correct nested sums have their intended finite domains. The two hinge cases include equality with coefficient zero; adding global supporting inequalities proves the subgradient claim. Symmetry, outer-product norm equality and the triangle inequality prove the finite data bound uniformly in M. Empty targets/impostors, coincident data, zero bound and endpoint weights pass. No interface change; complete risk review recorded. Level 3 checkpoint completed.

## Dependency-level 5 review

`thm-lmnn-projected-subgradient-best-average-bound`: every proof step and every actual direct supplier read. The generic best/average theorem was also read in full: its one-step sum telescopes and finite Jensen bounds the average; the minimum is bounded by the positive weighted gap average. Its hypotheses are all present here: m>=1, nonempty closed convex domain, convex function, T valid oracle calls, attained minimizer, uniform bound and positive steps. The estimate concerns M0 through M(T-1); it makes no final-iterate or test-error assertion. AComega is explicitly carried for the abstract projection route and chooses a minimizing sequence in that supplier; the clipping implementation is choice-free. R=0, Bdata=0, singular matrices and empty sums remain valid. Complete risk review recorded; no item decision is owed for this untouched carrier.

`ex-one-lmnn-projected-step-is-not-convergence`: all three verification steps checked directly. F([m])=2m, G=2, and 2-(1/4)2=3/2>0, so clipping is the identity. The objective drops 4 to 3, above optimum 0. This finite final-point example makes no asymptotic nonconvergence assertion. Complete risk review recorded; no item decision owed.

Algorithm prerequisite `alg-lmnn-finite-budget-projected-subgradient` was read completely. It is an algorithm with alg-ID and Definition; supplies exact input domains, loop, hinge branches, generic algorithm call and clipping alternative, status and outputs. It lists its earlier suppliers, without self-edge. No repair required. The assumed global minimizer remains a separate theorem hypothesis, never inferred from finite execution.

Additional source checks: Bubeck https://arxiv.org/pdf/1405.4980 section 3.1, printed pp.263–266: projected subgradient estimate and averaging proof read; the source's compact-domain/constant-step presentation is not silently applied to the unbounded cone. The exact variable-step bound comes from the proved local supplier. Bertsekas https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf Lecture 15 printed pp.200–205: projection update, supporting inequality and squared-distance estimate checked. Weinberger–Saul section 3.4 pp.220–221 and Appendix A.1–A.2 pp.239–240: matrix objective, outer-product subgradient and clipping match the local argument; no unconditional convergence statement is imported from the source prose.

All routed mathematical reviews completed; dispositions and checks follow.

## Published finding and decisions

`reader:24:1` / `def-frobenius-matrix-norm`: **confirmed_nonfatal**. Its complete Definition invokes the three norm axioms after identifying the entry norm with the induced inner-product norm. `def-inner-product-norm` defines that expression and points in prose to the separate proved corollary; the declared 257-item dependency closure does not reach `cor-triangle-inequality-for-inner-product-norm`. That exact corollary has been read and proves the required implication, so this is an immediately closable citation gap, not a false norm claim or an unmet substantial prerequisite. Current published raw SHA256 is `f261f1ce9cbd8d57bbd860188544ad7d06fcdf89e70fe7fc2d66f61ed9510a4b`. The routed observed/pre fingerprints are retained in the decision as workflow evidence, without identifying them with the raw hash. No historical counterexample or content repair is inferred.

The published item remains unchanged. Under the required exclusive lock, reread and merged its existing A-P classification row with the new dependency finding, retaining batch-22 reference-format maintenance and historical repair evidence. Added a bounded published-ledger entry with the precise supplier, actual owned consumer and owner repair strategy: add the missing corollary edge/citation or prove its implication locally. Closed defect `ml101-b24-3a-frobenius-norm-edge` has disposition `nonfatal-recorded`; pending published source maintenance is expressly not repaired or cleared. The reader's assigned consumer already directly cites the norm theorem in F4 and steps 1.2/4.1. The closedness lemma's F4 likewise carries it directly. No owner decision is needed to complete these sound owned arguments.

The decisions file contains exactly seven owed obligations: six `touched:24:<id>` entries with `accepted_repair`, and `reader:24:1` with `confirmed_nonfatal`. All completed repairs have `repair_confidence: 1`. Nine closed ledger rows distinguish five item-specific source-locator defects, the explicit cone-metric prerequisite, the subgradient index notation, its exact norm citations, and the published norm prerequisite. The reader decision references exactly its one published-finding row. No refuter/page decisions were invented, and untouched risk-review carriers have no extra decisions.

## Metadata reconciliation and scope

Alpha changed no item bytes, Statement or Definition. All six accepted item hashes still equal the post-reader snapshots. The reader had omitted manifest synchronization: updated the two repaired items' `deps` in the owned batch pages manifest and the five corrected source locators across its six touched entries. Matched the Bellet and Bindel source-coverage locators and added the two newly direct published suppliers to the batch dependency-input inventory. Existing contract derivations/citation quotations already match current proofs; only eight `risk_review` objects were added. Page inventories, page metadata and scheduling inputs remain intact. No material rewrite or judge-stamp alteration occurred. Frontier dependency ledger has an owned-consumer record; stable IDs and all proposed withdrawals remain present. No cross-batch mathematical repair is necessary because no original interface changed.

All 15 primary item sections were checked for uninterrupted statements/definitions/examples: no hyperlinks occur inside them. No TikZ/tikzcd diagrams occur in the owned items; no required diagram addition was identified. No page-only obligation was routed, and page bodies were not edited.

## Local validation

- Initial `node tools/risk-report.mjs research/machine-learning-all-101-2026-10-19-batch-24.proof-contracts.json` identified eight HIGH/CRITICAL items; after individual proof/supplier reviews, the same command with `--require-reviewed` returned 0 errors (11 proof carriers routed).
- `node tools/proof-contract.mjs research/machine-learning-all-101-2026-10-19-batch-24.proof-contracts.json --strict`: 11/11 checked, 0 errors, 0 warnings.
- `node tools/tsx-run.mjs tools/precheck.mts` with the 15 explicit current manifest item paths: 11 proof-bearing items checked, 0 failing.
- `node tools/rendercheck.mjs` with those same explicit paths: 15 files, no YAML, link/math delimiter or KaTeX errors.
- Final single batched `node tools/proof-layout.mjs items/def-mahalanobis-pseudometric.md items/lem-lmnn-explicit-subgradient-and-data-bound.md items/lem-positive-semidefinite-cone-is-frobenius-closed.md items/lem-symmetric-matrix-frobenius-isometry.md items/thm-frobenius-projection-onto-psd-cone-is-spectral-clipping.md items/thm-mahalanobis-distance-is-pseudometric.md`: 6 items, 20 steps, 0 defects. Alpha made no item edit or formatter pass.
- Focused raw-hash, manifest-dependency, uninterrupted-section and diagram inventory checks were clean. Exact obligation-set comparison found 7 unique decisions matching the scope. Ledger append accepted 9 rows and refreshed its generated view.

No unresolved owned mathematical blocker or escalation remains. The published missing-edge maintenance is routed and pending as described above. No judge, stamp, self-certification, publication, dispatch or engine gate battery was initiated. Engine/owner next action: bind current decision/carrier hashes, run native gates, and route the recorded published maintenance.
