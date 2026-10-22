---
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
id: ex-ip-posterior-mean-outside-nonconvex-signal-class
kind: example
title: A posterior mean can lie outside a nonconvex signal class
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-ip-forward-map-and-solution-classes
  - def-ip-learned-reconstruction-estimator
  - def-ip-inverse-risk-under-train-and-test-laws
  - prop-ip-posterior-mean-is-square-loss-optimal
  - def-conditional-law-given-a-random-element
  - def-axiom-of-choice
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
axiom_use: "AC is inherited only through the general posterior-mean proposition; the finite posterior and risk calculations are choice-free."
---

## Example

Assume the Axiom of Choice. Let the admissible signal set be $S=\{-1,1\}\subset\mathbb R$, which is nonconvex because it omits the midpoint $0$, let the target be the signal itself, and let the data space consist of one point $Y=\{0\}$. Use the constant forward map $F(t)=0$ and the prior assigning probability $1/2$ to each signal. The posterior law at the sole datum is therefore $\Pi_0=\tfrac12\delta_{-1}+\tfrac12\delta_1$. Under squared loss on the full action space $\mathbb R$, the posterior mean is $0$, which is outside $S$; its posterior risk at action $a$ is $1+a^2$, so its unique unconstrained minimum is $1$ at $a=0$. If actions are restricted to $S$, both admissible actions have risk $2$. The proposition concerns the full Hilbert action space and does not assert that the posterior mean is an admissible signal.

## Example references

[[def-ip-forward-map-and-solution-classes|Forward map, admissible truths, and target map]]

[[def-ip-learned-reconstruction-estimator|Point reconstruction rules and their target space]]

[[def-ip-inverse-risk-under-train-and-test-laws|Squared-error risk under a joint law]]

[[prop-ip-posterior-mean-is-square-loss-optimal|The posterior mean uniquely minimizes full-space squared risk]]

[[def-conditional-law-given-a-random-element|Conditional law given the constant observation]]

## Facts & Assumptions

**Given:** AC, the two-point signal set, constant observation, equal prior weights, and squared loss.

[A1] The Axiom of Choice is assumed by the general posterior-mean proposition. [[def-axiom-of-choice]]

[F1] A conditional law is a probability kernel satisfying the conditional-event integral identities. [[def-conditional-law-given-a-random-element]]

[F2] In a real Hilbert target with finite second moment, the posterior mean uniquely minimizes posterior squared risk over the full target space. [[prop-ip-posterior-mean-is-square-loss-optimal]]

[F3] Reconstruction risk is the expected target-action loss under the specified joint law. [[def-ip-inverse-risk-under-train-and-test-laws]]

## Verification

1.1 Since $Y=0$ almost surely, the constant kernel $K(0,\cdot)=\Pi_0$ satisfies the conditional-law identity both for the empty event and for the whole sample space; hence it is a posterior version for the stated joint law. [F1, given]

1.2 Direct integration gives $\mu(0)=\tfrac12(-1)+\tfrac12(1)=0$. Since $S=\{-1,1\}$, this posterior mean is not an admissible signal, and $S$ is nonconvex because it omits the midpoint of its two elements. [given, algebra]

2.1 For every $a\in\mathbb R$, $\int(t-a)^2\Pi_0(dt)=\tfrac12(-1-a)^2+\tfrac12(1-a)^2=1+a^2$. The unique minimizer over $\mathbb R$ is $0$; on the restricted set $S$, both values $a=\pm1$ have risk $2$. This also agrees with the full-space proposition [F2], whose AC hypothesis is stated in the Example, while the restricted-action calculation is separate. [A1, F2, F3, given, algebra] ∎
