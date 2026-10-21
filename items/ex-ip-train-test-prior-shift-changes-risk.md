---
id: ex-ip-train-test-prior-shift-changes-risk
kind: example
title: A train/test prior shift changes reconstruction risk
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-ip-forward-map-and-solution-classes
  - def-ip-learned-reconstruction-estimator
  - def-ip-inverse-risk-under-train-and-test-laws
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
axiom_use: "No choice axiom is used; the two laws and the deterministic forward map are explicit finite objects."
---

## Example

Let the truth space and target space both be $U=Q=\{0,1\}\subset\mathbb R$, let the target map be the identity, let the data space be $Y=\{0\}$, and let the deterministic forward map be $F(t)=0$ for both truths. Use squared loss $\ell(t,a)=(t-a)^2$ and the point reconstruction rule $g(0)=0$. Let the training prior be $\pi_{\rm train}=\delta_0$ and the test prior be $\pi_{\rm test}=\delta_1$. The resulting joint laws of data and target are $P_{\rm train}=\delta_{(0,0)}$ and $P_{\rm test}=\delta_{(0,1)}$. The input marginal is the same in both laws, but $R_{P_{\rm train}}(g)=0$ and $R_{P_{\rm test}}(g)=1$; equality of input marginals alone does not bound target-risk change under prior shift.

## Example references

[[def-ip-forward-map-and-solution-classes|Forward maps, admissible truths, and target maps]]

[[def-ip-learned-reconstruction-estimator|A point reconstruction rule is a measurable map from data to target]]

[[def-ip-inverse-risk-under-train-and-test-laws|Risk is an expected loss under the specified joint law]]

## Facts & Assumptions

**Given:** The finite truth and data spaces, the constant forward map, the two prior laws, squared loss, and the rule in the Example.

[F1] An inverse-problem model specifies a forward map on an admissible truth class and a target map into a metric target space. [[def-ip-forward-map-and-solution-classes]]

[F2] A point reconstruction rule is a measurable data-to-target map. [[def-ip-learned-reconstruction-estimator]]

[F3] Under a joint data-target law, risk is the integral of the nonnegative loss evaluated at the target and rule output. [[def-ip-inverse-risk-under-train-and-test-laws]]

## Verification

1.1 Under either prior, the deterministic observation is $Y=F(T)=0$, so the training and test data marginals are both $\delta_0$. The target equals $0$ almost surely under $P_{\rm train}$ and equals $1$ almost surely under $P_{\rm test}$. [F1, given]

1.2 The rule $g(0)=0$ is measurable on the one-point data space and takes values in $Q$, so it is a point reconstruction rule. [F2, given]

2.1 By [F3], $R_{P_{\rm train}}(g)=(0-0)^2=0$ and $R_{P_{\rm test}}(g)=(1-0)^2=1$. Therefore the risk changes from zero to one while the input marginal remains fixed; no risk comparison follows from that marginal agreement alone. [F3, step 1.1, step 1.2, given, algebra] ∎
