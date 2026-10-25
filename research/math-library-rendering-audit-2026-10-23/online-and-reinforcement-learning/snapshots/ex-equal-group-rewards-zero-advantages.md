---
id: ex-equal-group-rewards-zero-advantages
kind: example
title: "Equal group rewards set every normalized advantage to zero"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - def-verifier-and-generation-protocol
  - alg-finite-group-relative-policy-update
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references: []

---

## Example

For any prompt, suppose every response in the policy support receives reward $7$ and the group size is $G=3$. Then every sampled group has mean reward $7$, population standard deviation $0$, and normalized advantages $A_i=0$. The reward surrogate contribution to the finite group-relative objective is exactly zero for every candidate policy parameter; the separately specified KL penalty remains in the objective formula.

## Example references

[[alg-finite-group-relative-policy-update|The population-standard-deviation zero branch and clipped group objective.]]

## Facts & Assumptions

**Given:** A prompt with a finite supported response set, reward $r(y)=7$ on every supported response, three independent group draws, and the finite group-relative update convention.

[F1] [[def-verifier-and-generation-protocol]]: a response policy has a finite fixed support and a finite real reward on each supported response.

[F2] [[alg-finite-group-relative-policy-update]]: for $G\ge2$, the group uses the population standard deviation; when it is zero all advantages are set to zero, while the objective also includes its exact KL penalty.

## Verification

**Given:** The objects and conventions in the Example.

1.1 Since every reward is $7$, the group mean is $\overline R=(7+7+7)/3=7$, and each difference $R_i-\overline R$ is zero. Thus the population standard deviation is $s=0$. [given, F1, F2, algebra]

2.1 By the specified zero-standard-deviation branch in [F2], each $A_i=0$. For every sampled response and candidate parameter, both arguments of the clipped minimum are zero, so its average reward-surrogate contribution is zero. The objective's separately defined KL term remains. [F2, step 1.1, algebra] ∎
