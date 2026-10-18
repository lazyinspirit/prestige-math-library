---
id: ex-screened-coulomb-blocks-accumulate-error
kind: example
title: Coulomb screening must accumulate every discarded-block bound
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 10
deps: [thm-positive-coulomb-bilinear-cauchy-schwarz-screening, thm-finite-gaussian-integral-evaluator-soundness-and-screening-error, alg-finite-gaussian-basis-integral-recurrence-evaluation]
proof_strategy: direct
axiom_use: None. The witness is a finite comparison of certified nonnegative error bounds.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Trygve Helgaker, Molecular Integral Evaluation, 10th Sostrup Summer School lecture notes (2008)"
      url: "https://trygvehelgaker.no/Presentations/Sostrup_Integrals_2008.pdf"
      locator: "Complete 41-page PDF; positive Coulomb matrix and Cauchy–Schwarz prescreening on p. 35."
    - title: "L. E. McMurchie and E. R. Davidson, One and Two Electron Integrals over Cartesian Gaussian Functions, UCRL-13791 (1976)"
      url: "https://digital.library.unt.edu/ark:/67531/metadc1057442/m2/1/high_res_d/5184486.pdf"
      locator: "Complete 23-page report; §V, pp. 19–21, computational considerations and contraction-loop scheme. The accumulated screening bound is demonstrated locally."
---

## Example

Suppose a finite screening queue has three candidate input-basis Coulomb quartets (which may be singleton-contraction primitive quartets), each with a verified weighted energy bound $w_j=0.4\tau$, and the total discarded-energy budget is $\tau>0$. Choose the permitted screening execution that skips a candidate whenever its cumulative bound fits the budget. With exact accumulation, the first two blocks are skipped and contribute a cumulative bound $0.8\tau$. The third would raise the cumulative bound to $1.2\tau$, so it must be evaluated or left unscreened. The reported discarded bound is $0.8\tau$; none of the skipped integrals is claimed to be zero. This is also an execution of the outward-rounded rule when these sums are represented exactly, for example $\tau=5$ and $w_j=2$ in a format containing $2,4,5,6$. Otherwise outward accumulation may conservatively prevent a skip or report a larger bound.

## Facts & Assumptions

**Given:** A total screening tolerance $\tau>0$, three finite candidate records with verified weighted Cauchy–Schwarz bounds $0.4\tau$, exact accumulation of these bounds, and the permitted policy that skips each candidate when the budget guard allows it. For an execution of [[alg-finite-gaussian-basis-integral-recurrence-evaluation]], assume the displayed sums are represented exactly in its format.

[F1] [[thm-positive-coulomb-bilinear-cauchy-schwarz-screening]]: each weighted discarded contribution is bounded by its certified diagonal Cauchy–Schwarz product, and total error is bounded by the sum of those terms.

[F2] [[thm-finite-gaussian-integral-evaluator-soundness-and-screening-error]]: every successful reported discarded-energy bound dominates the absolute contribution of all skipped terms.

[F3] [[alg-finite-gaussian-basis-integral-recurrence-evaluation]]: a candidate is skipped only when adding its certified weighted bound keeps the running total at most the requested tolerance.

## Verification

1.1 The first bound is $0.4\tau\le\tau$, and the cumulative sum after two is $0.8\tau\le\tau$, so [F3] permits both skips. The selected policy therefore skips both and, with the assumed exact accumulation, records $0.8\tau$. [given, F1, F3, algebra]

2.1 Adding the third gives $0.8\tau+0.4\tau=\frac65\tau>\tau$. By [F3], the screening guard therefore rejects skipping that third block and requires its evaluation or retention. By [F1]–[F2], the reported $0.8\tau$ bounds only the first two omitted contributions and does not assert exact sparsity. [given, F1, F2, F3, step 1.1, algebra] ∎
