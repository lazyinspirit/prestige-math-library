---
id: ex-support-mismatch-prevents-covariate-weighting
kind: example
title: "Support mismatch prevents covariate-shift weighting"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - cor-integral-over-a-null-set-vanishes
  - def-source-target-distributions-and-shift
  - thm-covariate-shift-importance-weighting
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Shai Ben-David et al., A Theory of Learning from Different Domains, Machine Learning 79 (2010), §3"
      url: "https://link.springer.com/content/pdf/10.1007/s10994-009-5152-4.pdf"
    - title: "Masashi Sugiyama, Learning under Non-stationarity: Covariate Shift Adaptation by Importance Weighting, Handbook of Computational Statistics, 2nd ed., Chapter 31 (2012), §3.1"
      url: "https://www.ms.k.u-tokyo.ac.jp/sugi/2012/CSAreview.pdf"
---

## Example

Let $\mathsf X=\mathsf Y=\{0,1\}$ with the discrete sigma-algebras. Let the source joint law put mass one on $(0,0)$ and the target joint law put mass one on $(1,0)$. Both conditional label kernels assign label $0$ with probability one at each input. The input marginals are $\mu_S=\delta_0$ and $\mu_T=\delta_1$. Although the conditional label laws agree, there is no nonnegative measurable $w$ satisfying $\mu_T(A)=\int_Aw\,d\mu_S$ for every measurable $A$.

## Example references

[[def-source-target-distributions-and-shift]]: defines the joint laws, conditional label kernels, input marginals, and the covariate-shift condition.

[[thm-covariate-shift-importance-weighting]]: requires absolute continuity of the target input marginal with respect to the source marginal.

[Ben-David et al., §3, printed pp. 154–155](https://link.springer.com/content/pdf/10.1007/s10994-009-5152-4.pdf): distinguishes shifts in input laws from changes in labeling functions.

## Facts & Assumptions

**Given:** The two finite joint laws and their common constant conditional label kernel in the Example.

[F1] [[def-source-target-distributions-and-shift]]: covariate shift requires $\mu_T\ll\mu_S$ as well as equality of conditional label kernels $\mu_T$-almost everywhere.

[F2] [[cor-integral-over-a-null-set-vanishes]]: the integral of a nonnegative measurable function over a measurable null set is zero.


## Verification

1.1 For $A=\{1\}$, the specified point masses give $\mu_S(A)=0$ and $\mu_T(A)=1$. Thus $\mu_T\not\ll\mu_S$ by the definition of absolute continuity. [F1, given]

2.1 If a nonnegative measurable density $w$ satisfied the proposed setwise identity, then $\int_Aw\,d\mu_S=0$ by [F2], contradicting $\mu_T(A)=1$ from step 1.1. [F2, step 1.1, algebra]

3.1 The kernels agree everywhere, but the absolute-continuity hypothesis in [F1] fails by step 1.1, so the covariate-shift importance-weighting theorem does not apply. [F1, step 1.1] ∎
