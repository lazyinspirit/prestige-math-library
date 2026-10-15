# Step 3a reader report — batch 61

Run: `statistical-models-experiments-62`  
Role: reader  
Scope: batch `61`

## Opened inventory

- Assigned A page: `group-sequential-alpha-spending` — `library/statistical-models-and-experiments/group-sequential-alpha-spending.md`.
- Assigned B page: `group-sequential-alpha-spending-examples` — `library/statistical-models-and-experiments/group-sequential-alpha-spending-examples.md`.
- Assigned items, reviewed in dependency order: `def-group-sequential-alpha-spending-design`, `alg-group-sequential-alpha-spending-boundary-calibration`, `thm-group-sequential-alpha-spending-calibration`, `ex-pocock-spending-two-look`, and `ex-obrien-fleming-spending-two-look`.
- Direct item suppliers opened: `def-test-size-and-power`, `def-multivariate-normal-law`, `lem-characteristic-function-of-a-multivariate-normal-law`, `def-standard-normal-and-normal-laws`, `lem-normal-density-has-total-mass-one`, `def-axiom-of-choice`, `thm-continuity-from-below-for-measures`, `thm-intermediate-value`, `def-real-exponential-function-and-e`, `def-natural-logarithm`, `thm-natural-logarithm-laws`, and `thm-exponential-is-strictly-increasing`.
- Manifest prerequisite page summaries opened: `finite-sample-tests-neyman-pearson-and-valid-p-values`, `central-limit-theorems`, and `weak-convergence-tightness-and-representation`.
- Batch-61 proof contracts and cross-batch dependency evidence were inspected against the current item text; their recorded citations and derivation rows match the current step labels and claims.
- External source passages checked:
  - DeMets and Lan, “Interim Analysis: The Alpha Spending Function Approach,” section “The Alpha Spending Function,” PDF pp. 6–7 (printed pp. 1346–1347), https://eclass.uoa.gr/modules/document/file.php/MATH301/PracticalSession3/LanDeMets.pdf. The displayed formulas give the O’Brien–Fleming-type and Pocock-type spending functions and the information-fraction covariance used here.
  - Grayling, Wason, and Mander, “Group Sequential Trial Designs for Normally Distributed Outcome Variables,” §2 and §3.1, https://arxiv.org/pdf/1710.03127. The canonical joint distribution has covariance ratio `sqrt(I_l1/I_l2)` for `l1 ≤ l2`; §3.1 defines rejection as crossing an absolute-value boundary at any look.
  - Minas, *Multivariate Global Testing and Adaptive Designs*, Chapter 5 §§5.3–5.3.1, printed pp. 72–73, https://wrap.warwick.ac.uk/id/eprint/58321/7/WRAP_THESIS_Minas_2013.pdf. The section describes a prespecified finite number of group-sequential analyses and stagewise critical values.

## Review findings

The design definition states a finite prescheduled look schedule, the spending-function conditions, and the stipulated simple-null Gaussian law. Its covariance is valid: the theorem’s lower-triangular factor has diagonal entries `1` and `sqrt((t_i-t_{i-1})/t_i)`, and telescoping gives `LL^T = Σ`. Strict information-fraction inequalities make the factor invertible, so the joint law is nondegenerate.

The calibration proof supplies the boundary existence and uniqueness argument locally. Standard-normal marginals are atomless with a strictly positive bounded density. Invertibility and independent standard-normal coordinates give full support. At each look, the no-earlier-crossing set is open and nonempty; the one-sided and symmetric crossing-probability functions are therefore strictly decreasing, continuous, and have the required tail endpoints. The intermediate value theorem gives a unique finite root for each positive increment. The flat-increment branch assigns `+infinity` and leaves the cumulative event unchanged. Finite induction gives `P_0(R_k)=A(t_k)` for every look and terminal probability `alpha`.

The size conclusion is restricted to an experiment with a nonempty alternative and singleton null law `P_0`. The rejection region is a finite union of Borel threshold events, so its indicator is measurable, and the size definition reduces to its probability under the sole null law. The definition and theorem retain the caveat that this does not establish error control for data-dependent timing, estimated variance, or an unspecified composite null.

Both examples are consistent with that result. The Pocock-type curve has the stated endpoint, range, and monotonicity; the O’Brien–Fleming-type curve is nondecreasing on `(0,1]` and tends to zero at zero. Their first symmetric boundaries follow from the standard-normal quantile and symmetry. The final boundaries are uniquely defined by the joint crossing equation, with correlation `1/sqrt(2)`. The Pocock conditional continuation calculation follows from subtracting the first-look crossing probability from the terminal probability and dividing by the positive continuation probability. No unsupported numerical value for either final boundary is claimed.

The three manifest-required pages are placement prerequisites. The finite-sample testing page supplies the size definition used here. The current proof makes no CLT or weak-convergence inference: it assumes the canonical Gaussian null law explicitly, as its A-page summary says.

## Edits

None. No confirmed defect required repair, so no proof contract, judge record, or item formatting was changed and no reflow, precheck, or proof-layout command was needed.

## Uneditable defects

None found in assigned pages, assigned items, or the opened direct suppliers.

## Page verdicts

- `group-sequential-alpha-spending`: sound. The summary accurately states the stipulated model, exact finite-look calibration, and limitations.
- `group-sequential-alpha-spending-examples`: sound. The summary accurately describes the two named spending curves and their uniquely calibrated final roots.

## Blocker

None.

## Coverage note

All assigned pages and items, the direct item suppliers used in their arguments, and the manifest prerequisite page summaries listed above were opened. I did not audit the complete transitive proof closure of every published supplier; no defect was observed in the supplied statements needed by this batch.
