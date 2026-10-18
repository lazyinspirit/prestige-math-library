# Batch 46 authoring notes

Run: `numerical-analysis-remaining-71-2026-10-17`  
Pair: `nonlinear-full-approximation-multigrid` / `nonlinear-full-approximation-multigrid-examples`  
Role: beta, batch 46  
Authoring date: 2026-10-18 (Australia/Sydney)

## Controlling plan, design, and inventory

The current plan and `research/plan-spec.json` control the assigned category, page IDs, reading order, and prerequisite pages. The complete design section at `research/plan-numerical-spatial-track.md` §986 was read.

Two design labels are stale relative to the plan:

- The design places NA-07, `multigrid-methods-and-complexity`, in the old linear category. The current plan places it in `numerical-linear-algebra-and-approximation`.
- The design calls NA-09, `nonlinear-equations-and-newton-methods`, a same-frontier pair. The current plan and library place it on the published page in `numerical-optimization-inverse-problems-and-uncertainty-quantification`.

The assigned PE27 page remains in `numerical-pdes-and-spatial-discretization`, at order 2646, with its examples page at 2647. No mathematical-scope conflict was found. The supplied scheduling input was `33efdeaee27f3683259d18c2ebdc95fe38b1aff7075e5cdf75e423e2f231a186`; the recorded batch-level file currently lists batch 46 at level 1 with prerequisite batches 20 and 39 and input digest `197b26583eb6760dc45128e450c32a5132605d90cbe79ae29ccfd1909b60b88b`.

The final scaffold has 11 A-page items and 4 B-page examples. Item levels were recomputed over the current run manifests after the local second-derivative helper was added; all 15 declared levels match the run-wide logical-dependency calculation. The dispatched scheduling input SHA was `33efdeaee27f3683259d18c2ebdc95fe38b1aff7075e5cdf75e423e2f231a186`; the stored batch-dependency file records `197b26583eb6760dc45128e450c32a5132605d90cbe79ae29ccfd1909b60b88b`. No shared scheduler file was rewritten.

| Level | Items |
|---:|---|
| 0 | `alg-fas-two-grid-cycle`; `lem-fas-second-derivative-of-composed-cycle-map` |
| 1 | `alg-fas-vw-cycle`; `lem-fas-coarse-branch-derivative` |
| 2 | `lem-fas-vw-cycle-work-and-status`; `lem-fas-fine-root-fixed-point` |
| 3 | `thm-fas-local-contraction-under-derivative-bound`; `lem-fas-linear-vw-cycle-translation`; `ex-fas-reaction-poisson-tau-cancellation`; `cex-fas-zero-tau-breaks-fine-root` |
| 4 | `thm-fas-linear-cycle-reduces-to-galerkin-correction`; `lem-fas-inexact-coarse-solve-residual-defect`; `ex-fas-semilinear-reaction-diffusion-local-convergence`; `ex-fas-bifurcation-shrinks-contraction-ball` |
| 5 | `ex-fas-linear-cycle-equivalence` |

The A and B page inventories match the manifest. The page cap is not close to binding.

## Supplier review and unresolved interface

The actual batch-20 draft definition `alg-finite-galerkin-v-cycle` and theorem `thm-galerkin-coarse-correction-is-energy-orthogonal-projector` were read. The theorem’s literal hypotheses are SPD fine matrix and full-column-rank prolongation; the linear FAS consumer repeats these and uses its proved invertibility consequence. This records supplier-body inspection, not approval or acceptance of batch 20.

The following published supplier statements and complete proofs were read for their actual use:

- `thm-euclidean-implicit-function-theorem`: the consumer checks the open-domain, C1, zero-equation, and invertible partial-derivative conditions before using the branch formula.
- `thm-chain-rule-for-total-derivatives`: the branch-derivative proof uses its Euclidean composition rule.
- `lem-vector-newton-correction-error-under-lipschitz-jacobian`: the local contraction proof reverses the Taylor endpoints so its linear term is the derivative at the root.
- `thm-mean-value-inequality-for-total-derivatives`: the finite examples apply it to the derivative map on an open convex ball after proving the derivative bound.
- `thm-chain-sum-product-and-composition-rules-for-banach-derivatives` and `cor-finite-dimensional-normed-spaces-are-banach`: these support the new local second-derivative composition formula. The helper checks that the finite-dimensional operator spaces are Banach before applying the bounded-bilinear product and composition rules.

The item-dependency page closure also includes `inverse-and-implicit-function-theorems`, `the-total-derivative`, `banach-space-differential-calculus-and-banach-manifolds`, and `finite-dimensional-normed-spaces-and-riesz-lemma`, in addition to the three task-declared prerequisite pages. These item-level page edges are recorded in the cross-batch dependency file; the page-frontmatter `requires` list remains exactly as specified by the plan.

The declared page prerequisite `nonlinear-parabolic-compactness-and-monotone-evolution` is retained. Batch-39 notes identify the still-unresolved `thm-pe12-l2-projector-w1p-stability` interface: a uniform W1p bound for the L2 projector on the standard mesh family, with shape-regularity, quasi-uniformity, polynomial-degree, and boundary hypotheses. The affected PE12 claims are `def-pe12-stable-conforming-fem-family`, `thm-pe12-backward-euler-galerkin-existence-energy`, `thm-pe12-monotone-fem-limit`, and `ex-pe12-p-laplacian`. Batch 46 makes no finite-element, parabolic-limit, projector-stability, or mesh-independent convergence claim, so this supplier is recorded as `not-consumed`; it is not a proof dependency of any batch-46 item.

The published nonlinear-equations page and actual solver bodies were inspected. The FAS algorithm states its own finite-budget exact/inexact/failure interface and does not treat a positive-tolerance Newton status as an exact root.

## Mathematics and proof scope

The A page defines the tau-corrected finite-budget two-grid cycle and recursive V/W cycle, then proves exact-root fixed-point consistency, the exact linear Galerkin reduction under explicit SPD/Galerkin/smoother hypotheses, local contraction from derivative bounds of the actual cycle, and an inexact-coarse-solve defect estimate under a separately stated residual-to-solution bound. The V/W cycle reports exact/inexact status from the final level residual and preserves nested coarse-call diagnostics. No global convergence, mesh-independent basin, or blanket linear-work assertion is made.

The B page contains exact finite calculations for tau cancellation, failure after omitting tau, a pitchfork example whose certified radius shrinks to zero, and a one-level Galerkin correction identity. The A-page semilinear example is the h=1 two-node discretization; its monotonicity, branch, derivative, Hessian bound, and 27/400 contraction factor are checked directly. No parabolic compactness or finite-element projector theorem is imported.

No choice axiom is used. The authored arguments use finite-dimensional real calculus, exact matrix algebra, and the stated supplier theorems. Proof contracts list `axioms_used: []` and `axiom_uses: []`; finite checks are exact hand calculations, not registry smoke tests. The author self-check entries are explicitly open and are not independent review or proof approval.

## Source reading and retrieval

The A-page source harvest and source stamps are in `numerical-analysis-remaining-71-2026-10-17-batch-46.coverage.json` and `...batch-46.source-evidence.json`.

- Briggs, Henson, and McCormick, *A Multigrid Tutorial*, 2nd ed.: Chapter 6 FAS slides 247–267 (PDF pp. 59–67), including the two-grid equation, tau correction, linear/root observations, and recursive cycles. Relevant extracted text is cached with SHA-256 `770486a5c5ba917d586cda531f62a85493fb731ce121a8d080d3d4f8d5560042`.
- Van Brummelen, *Basics of Multigrid Methods*: complete relevant slides 25–26 (PDF pp. 64–68). Extracted text SHA-256 `7178081793a63c6a742e64de7d81d99990de5a14005c3b2d1497935d7f0dd83c`.
- Henson, *Multigrid Methods for Nonlinear Problems: An Overview*, UCRL-JC-150259: the relevant FAS, nonlinear relaxation/cycling, and model-problem passages in §§3–5 of the 15-page report. Extracted full-report text SHA-256 `15f1bec7c967f14d72b98ad0ae1556d620718481ebb03fc9f9e3279a517e5da9`.
- Wang, Lecture 6, §§2.1.1–2.1.4: the prior full-text fetch and reading record were reused from `research/phase-2-remaining-27-batch-3.coverage.json`. The 16-page PDF stamp is dated 2026-09-14; the relevant rule section had already been recorded as inspected. Batch 46 reread the complete published library supplier proof and records the reused stamp and source history explicitly.

`source-fetch-check --stamp --timeout-sec 12` reported 4/4 sources fetch-verified, 0 newly stamped, 4/4 resolved, and 0 drops. The previous exploratory failures recorded in the authoring session were an HKUST tutorial mirror (HTTP 403 twice), a Trottenberg mirror (HTTP 404), and a Stanford Brandt PDF that downloaded as image-only pages. Their original URL strings and timestamps were not preserved, so they are not reconstructed. None is cited or used, and no `source_resolution` drop or owner-escalation waiver applies. Searches and exact known outcomes are retained in `source-evidence.json`.

## Readiness

`node tools/step1-decisions.mjs record` wrote `ready` for all 15 items with their direct item dependencies and, for the V/W algorithm, its `justified_by` work lemma. The authoring readiness records are hash-current; no `--owner` flag was used. The previous `alg-fas-two-grid-cycle` ready record was preserved unchanged. These records do not grant independent proof review or acceptance.

The page-level PE12 requirement remains visible for owner reconciliation, with the exact unresolved supplier and affected PE12 claims above. The FAS items do not consume that theorem.

## Scoped check results

- `node tools/tsx-run.mjs tools/precheck.mts` on the 13 proof-bearing batch-46 items: 13 checked, 0 failing.
- `node tools/proof-layout.mjs` on the 15 assigned item files: 15 items, 44 steps, 0 defects.
- `node tools/proof-contract.mjs research/numerical-analysis-remaining-71-2026-10-17-batch-46.proof-contracts.json --strict`: 13/13 proof-bearing items, 0 errors, 0 warnings.
- `node tools/content-policy.mjs research/numerical-analysis-remaining-71-2026-10-17-batch-46.pages.json`: 15 scoped items, 0 errors, 0 warnings.
- `node tools/coverage-checklist.mjs research/numerical-analysis-remaining-71-2026-10-17-batch-46.coverage.json --require-destination`: 1 A page, 23 harvested results, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/numerical-analysis-remaining-71-2026-10-17-batch-46.coverage.json --timeout-sec 12`: 4/4 fetched and resolved.
- `node tools/depcheck.mjs --items-file /tmp/na46-item-selection.json`: 15 focused items and their prerequisite cycle checks passed; closure covered 607 items and 191 pages.
- `node tools/rendercheck.mjs` on the 15 items and 2 pages: 17 files passed real KaTeX parsing and renderer YAML parsing.
- Run-wide item-level recomputation: all 15 batch-46 item labels match their computed levels. The run-wide `item-dependency-levels.mjs check` remains red on 31 unrelated errors: 6 empty scaffold inventories and 25 other stale item-level labels.
- Run-wide `batch-dependency-levels.mjs check` cannot complete because existing malformed item frontmatter outside batch 46 fails YAML parsing. The current diagnostic points to `items/def-maxwell-edge-fem-semidiscretization.md` at the unquoted source title on line 21 (“Douglas N. Arnold …”; the parser reports line 20, column 14 inside the frontmatter); a read-only scan found 14 malformed external item frontmatters. These files were left untouched as required. The stored batch-level row for batch 46 remains level 1 with prerequisites 20 and 39; the check cannot validate the stored input digest until that YAML blocker is resolved.
- Final on-disk autopilot status: run still at Step 1 scaffold, 44/71 covered, nothing in flight, with the recorded owner repair/recertification blocker in `research/numerical-analysis-remaining-71-2026-10-17-step1-blockers.json`.

No test suite was run; the requested scoped checks were run.
