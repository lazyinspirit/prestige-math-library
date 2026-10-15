# Step 3a reader report — batch 58

Run: `bayesian-computational-statistics-62`  
Batch: `58`  
Dispatch: `reader-58`

## Opened inventory

Assigned pages:

- `library/bayesian-computational-statistics/multilevel-monte-carlo.md` (A page)
- `library/bayesian-computational-statistics/multilevel-monte-carlo-examples.md` (B page)

Assigned items, read supplier-first within the batch:

- `def-mlmc-hierarchy-and-coupled-corrections`
- `lem-mlmc-estimator-moments-and-mse`
- `thm-mlmc-complexity-under-rate-assumptions`
- `cor-mlmc-euler-hms-autonomous-cost-rate`
- `cor-mlmc-euler-finite-l2-and-weak-cost-rate`
- `ex-mlmc-finite-level-telescoping-and-bias`
- `ex-mlmc-euler-strong-and-weak-cost-regimes`
- `ex-mlmc-discontinuous-payoff-half-rate`
- `cex-mlmc-no-bias-rate-no-accuracy`
- `cex-mlmc-no-positive-variance-decay`

Page prerequisites opened:

- `library/bayesian-computational-statistics/statistical-and-computational-error-accounting.md`
- `library/numerical-analysis/euler-maruyama-convergence.md`

Direct dependency items from the batch manifest opened:

- `thm-iid-monte-carlo-mean-moments`
- `cor-expectation-linearity-monotonicity-and-modulus-bound`
- `thm-error-ledger-mse-covariance-identity`
- `alg-euler-maruyama-autonomous`
- `thm-euler-maruyama-strong-rate-under-higham-mao-stuart-hypotheses`
- `def-axiom-of-choice`
- `cor-cauchy-schwarz-for-random-variables`
- `thm-shared-brownian-euler-level-correction-rates`
- `thm-euler-maruyama-weak-order-one-under-backward-regularity`

Additional current Euler suppliers needed to check the imported rate arguments:

- `alg-euler-maruyama`
- `def-euler-maruyama-step-process-and-continuous-interpolation`
- `thm-euler-maruyama-uniform-moment-and-increment-bounds`
- `thm-euler-maruyama-strong-rate-for-square-integrable-initial-data`
- `lem-euler-maruyama-one-step-moment-and-increment-estimates`
- `lem-euler-maruyama-autonomous-interpolation-increment-moments`
- `lem-brownian-ito-integral-l1-maximal-bound`

Run-local context opened as navigation evidence, not as a verdict: the batch-58 page manifest, notes, prerequisite-context file, cross-batch dependency file, coverage file, and proof-contract file.

## Review and evidence

The geometric hierarchy defines integrable target and square-integrable levels, marginal-preserving adjacent couplings, independent copies within each block, and independent blocks across levels. The finite-estimator lemma correctly derives expectation telescoping, levelwise variance `V_l/N_l`, and the squared finest-level bias term. The error-ledger supplier's pairwise-independent special case is used for centered level errors; its statement and proof support that use.

The abstract cost theorem's level choice makes the absolute bias at most `epsilon/sqrt(2)`. Its ceiling allocation gives variance at most `epsilon^2/2`; the additional integer-rounding work is bounded by a geometric sum. The three cases `beta>1`, `beta=1`, and `0<beta<1` give the stated upper bounds. The assumption `alpha>=1/2` is used to absorb rounding work. The statement correctly gives an absolute-bias bound, specifies an infinite hierarchy while each estimator uses a finite prefix, and claims neither rate verification nor matching lower bounds.

The Euler corollaries keep the autonomous all-moment route separate from the finite-`L^2` route. The strong-error estimates imply correction second moment `O(h)` under the stated common-path coupling; the Lipschitz payoff then gives correction variance `O(h)`. The weak bias upgrade is conditional on the bounded payoff, backward equation, mixed-derivative, and moment premises. Both routes establish level-zero integrability/work because `h_0=T` is fixed. The Euler example's strong and weak cutoffs are respectively `L=2k+O(1)` and `L=k+O(1)` for `epsilon=2^-k`; both remain in the `beta=gamma=1` logarithmic work regime.

The deterministic finite-level example computes the telescope and residual bias correctly. The no-bias-rate counterexample has constant estimator one and MSE one at every finite level. In the nondecaying-variance counterexample, positive-level corrections have variance two; small error forces finest-level bias `h_L<=epsilon` and at least `2 epsilon^-2` finest-level samples, giving work at least `2 epsilon^-3`. The discontinuous-payoff example's density is normalized, its exact weak bias is `c h_l/4`, its shared-pair crossing probability is proportional to `sqrt(h_l)`, and the variance is bounded above and below by positive multiples of `sqrt(h_l)`. Its `O(epsilon^-5/2)` conclusion is correctly described as the abstract theorem's conservative guarantee under the `O(h^-1)` work bound, not as a sharp cost for its constant-work evaluator.

The current proof-contract file has ten entries. Its 28 citation excerpts matched their cited current source text; its 29 derivations map to the current numbered proof steps, and the recorded boundary cases agree with the current definitions, statements, and examples. No contract inconsistency was found.

Source checks:

- Giles, *Multilevel Monte Carlo Path Simulation*, §3, Theorem 3.1 and proof, [author PDF](https://people.maths.ox.ac.uk/gilesm/files/opre.pdf), PDF pp. 4–8. The theorem gives the three regimes and allocation proof. Its condition (i) is printed one-sided as `E[P_l - P] <= c_1 h_l^alpha`; the batch theorem instead assumes the absolute-bias bound and proves that version locally in steps 1.1–4.1. This difference does not leave the local claim unsupported.
- Reisinger, *Stochastic Simulation: Lecture 9a*, slides 4–12, [Oxford lecture PDF](https://courses.maths.ox.ac.uk/mod/resource/view.php?id=8613). The estimator, variance/cost allocation, and generalized MLMC theorem support the abstract construction; the local fixed-work-rate theorem imposes a sufficient `alpha>=1/2` condition for `gamma=1`.
- Higham, Mao, and Stuart, “Strong Convergence of Euler-Type Methods for Nonlinear Stochastic Differential Equations,” Assumptions 3.1, 4.1, 4.2 and Theorem 4.4, [author PDF](https://www.maths.ed.ac.uk/~dhigham/Publications/P44.pdf), PDF pp. 14–16 / printed pp. 1054–1056. The theorem gives `E sup |X-Y^h|^2=O(h)` under the one-sided-Lipschitz, globally Lipschitz diffusion, polynomial drift, and moment-bound conditions retained by the current Euler supplier.
- Li, *Lecture 16: Numerical SDEs: Basics*, Theorem 3.2 and proof, [lecture PDF](https://www.math.pku.edu.cn/teachers/litj/notes/appl_stoch/lect15.pdf), PDF pp. 8–9. That cited treatment gives weak order one in a one-dimensional additive-noise setting. The current weak Euler item states stronger explicit hypotheses and supplies its own multidimensional proof, so the broader claim does not rest on importing that narrower theorem.

## Edits and defects

No assigned item or page prose was edited. No confirmed defect requiring an uneditable finding remains. No item formatter or item validator was run because there was no item change.

## Page verdicts

- `multilevel-monte-carlo`: no confirmed title, summary, definition, statement, dependency, or proof defect found.
- `multilevel-monte-carlo-examples`: no confirmed inventory, example, counterexample, or summary defect found.

## Coverage and blocker

All assigned pages and items, all direct item dependencies listed for batch 58, and the current nontrivial Euler rate suppliers used by the corollaries were opened. I did not recursively re-audit every foundational proof in those Euler suppliers' own dependency closures (for example, the underlying Itô, stopping, and Gronwall results); their actual local uses and stated interfaces were checked.

There is no mathematical blocker. The run-status command reported that live status could not be recomputed because `tools/step6-finalize.mjs` is missing, and displayed its last report instead. That status limitation did not prevent this batch review.
