---
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
id: ex-ip-calibrated-posterior-sample
kind: example
title: An exact posterior sample need not minimize point risk
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
axiom_use: "AC is inherited only through the general posterior-mean proposition; the finite probability law and calculations are choice-free."
---

## Example

Assume the Axiom of Choice. Let $T$ take values $-1$ and $1$ with equal probabilities, let $Y=0$ deterministically, and use the squared-error loss on $\mathbb R$. The posterior is $\Pi_0=\tfrac12\delta_{-1}+\tfrac12\delta_1$. Given $Y=0$, draw $\widetilde T$ independently of $T$ from $\Pi_0$. Here **exact posterior calibration** means $\mathcal L(\widetilde T\mid Y=0)=\Pi_0$, which holds because the sampler kernel is $S_0=\Pi_0$. The posterior mean action $0$ has posterior risk $1$, while the expected squared error between the true posterior draw and the independent posterior sample is $2$. Thus even an exactly calibrated posterior sample is not the Bayes-optimal point action and is not itself the posterior mean.

## Example references

[[def-ip-learned-reconstruction-estimator|Posterior samplers are probability kernels and their draws are random]]

[[def-ip-inverse-risk-under-train-and-test-laws|Risk of a randomized rule under a joint law]]

[[prop-ip-posterior-mean-is-square-loss-optimal|The posterior mean uniquely minimizes full-space squared risk]]

[[def-conditional-law-given-a-random-element|Conditional law and its almost-sure version convention]]

## Facts & Assumptions

**Given:** AC; the symmetric two-point target law; the deterministic one-point data value; the posterior sampling kernel; and squared-error loss.

[A1] The Axiom of Choice is assumed by the general posterior-mean proposition. [[def-axiom-of-choice]]

[F1] A conditional law is a probability kernel satisfying the conditional-event integral identities; values at marginal-null data remain version choices. [[def-conditional-law-given-a-random-element]]

[F2] A posterior sampler is a kernel from data to target space, and it is exact when its law equals the posterior kernel. [[def-ip-learned-reconstruction-estimator]]

[F3] The posterior mean uniquely minimizes squared posterior risk over the full real Hilbert target. [[prop-ip-posterior-mean-is-square-loss-optimal]]

[F4] A randomized reconstruction rule's risk averages its loss over the joint target-data law and its output kernel. [[def-ip-inverse-risk-under-train-and-test-laws]]

## Verification

1.1 Because $Y=0$ with probability one, the constant kernel $\Pi_0=\tfrac12\delta_{-1}+\tfrac12\delta_1$ satisfies the conditional-law identity for the empty event and the whole sample space, so it is a posterior version. [F1, given]

1.2 The sampler kernel is $S_0=\Pi_0$, hence $\mathcal L(\widetilde T\mid Y=0)=\Pi_0$ and exact posterior calibration holds by [F2]. Its mean is $\tfrac12(-1)+\tfrac12(1)=0$. [F2, given, algebra]

1.3 Under posterior risk, the action $0$ has loss expectation $\tfrac12(-1-0)^2+\tfrac12(1-0)^2=1$. By [F3], whose AC hypothesis is stated in the Example, it is the unique Bayes point action. [A1, F3, given, algebra]

1.4 Conditional independence gives probability $1/2$ to equal draws, with squared difference $0$, and probability $1/2$ to unequal draws, with squared difference $4$. Therefore $E[(T-\widetilde T)^2\mid Y=0]=\tfrac12(0)+\tfrac12(4)=2$, which is the randomized rule risk under [F4]. [F1, F4, given, algebra]

2.1 The exact posterior sample has conditional law $\Pi_0$, but its random squared-error risk $2$ exceeds the posterior mean action's risk $1$; therefore posterior calibration of a sample does not make the sample the point Bayes action. [F3, step 1.2, step 1.3, step 1.4] ∎
