---
id: lem-csm-frontier-error-budget-composition
kind: lemma
title: Additive composition of finite sampling error budgets
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 0
deps: []
dependency_roles: {}
justified_by: []
aliases: []
physical_scope: null
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David A. Levin, Yuval Peres, and Elizabeth L. Wilmer, Markov Chains and Mixing Times, second edition"
      url: https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf
      locator: "Chapter 4, §§4.1–4.2, printed pp. 47–49 (PDF pp. 62–64): total variation as a metric and finite-law error comparisons. The scalar four-term decomposition below is proved locally."
verification:
  precheck: pending
---

## Statement

Let $\theta,\theta_T,m,\widehat m,\widetilde m\in\mathbb R$ be, respectively, a target quantity, a finite/truncated target, the exact mean under the specified finite sampling law, one realized sample statistic, and its rounded computed value. Let $\epsilon_{\rm tr},\epsilon_{\rm mix},\epsilon_{\rm stat},\epsilon_{\rm arith}\geq0$ have the same units as these quantities. If
$$|\theta_T-\theta|\leq\epsilon_{\rm tr},\qquad |m-\theta_T|\leq\epsilon_{\rm mix},\qquad |\widehat m-m|\leq\epsilon_{\rm stat},\qquad |\widetilde m-\widehat m|\leq\epsilon_{\rm arith},$$
then
$$|\widetilde m-\theta|\leq\epsilon_{\rm tr}+\epsilon_{\rm mix}+\epsilon_{\rm stat}+\epsilon_{\rm arith}.$$
Here the statistical inequality is conditional on the explicitly supplied realized-error event; the statement assigns no probability to that event. The four terms respectively record truncation, finite-sampling bias or mixing, statistical deviation, and arithmetic rounding. No term may be omitted unless its corresponding error is separately proved to be zero.

## Facts & Assumptions

**Given:** The five real quantities, four nonnegative error bounds, and the four inequalities in the Statement.

[A1] The statistical deviation bound is an explicit event assumption for the realized sample; it is not a deductive consequence of the sampling algorithm.

## Proof
**Given:** [A1] and the four stated error inequalities.

1.1 Insert the intermediate real quantities in the order $\widetilde m,\widehat m,m,\theta_T,\theta$ and apply the real triangle inequality repeatedly: $$|\widetilde m-\theta|\leq|\widetilde m-\widehat m|+|\widehat m-m|+|m-\theta_T|+|\theta_T-\theta|.$$ This bounds the total error by the sum of its four intermediate discrepancies. [given, algebra]

2.1 Substitute the four assumed bounds into step 1.1 to obtain $|\widetilde m-\theta|\leq\epsilon_{\rm arith}+\epsilon_{\rm stat}+\epsilon_{\rm mix}+\epsilon_{\rm tr}$. The proof is conditional on the statistical event in [A1] and asserts no confidence level or probability for it. [given, A1, step 1.1, algebra] ∎
