---
id: ex-pass-at-one-oracle-pass-n-verifier-selected-accuracy
kind: example
title: "Pass-at-one, oracle pass-at-N, and verifier-selected accuracy differ"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 6
deps:
  - def-verifier-and-generation-protocol
  - alg-budgeted-verifier-guided-generation
  - lem-budgeted-verifier-generation-termination-and-calls
  - thm-independent-generation-success-and-verifier-error
  - def-finite-sum
  - def-expectation-on-a-finite-probability-space
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - def-field
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

For one prompt let the finite response law assign mass $1/4$ to a correct response $c$ and mass $3/8$ to each of two incorrect responses $w_1,w_2$. Let the verifier accept $c$ and $w_1$ but reject $w_2$. The single-response pass@1 rate is $1/4$; for any integer $M\ge1$, the empirical pass@1 over $M$ independent replicas from this same law has expectation $1/4$. Oracle pass@2, the event that at least one of two independent candidates is correct, has probability $7/16$. For the same two candidates, use rejection search with budget $N=2$; its verifier-selected accuracy, the probability its output is correct conditional on being accepted, is $2/5$.

## Example references

[[def-verifier-and-generation-protocol|The finite law, correctness predicate, and verifier.]]

[[alg-budgeted-verifier-guided-generation|Rejection search returns the first accepted response or explicit failure.]]

[[thm-independent-generation-success-and-verifier-error|The oracle independent pass-at-N calculation.]]

## Facts & Assumptions

**Given:** The response probabilities, $C(c)=1$, $C(w_1)=C(w_2)=0$, $A(c)=A(w_1)=1$, $A(w_2)=0$, an integer $M\ge1$ with $M$ independent replicas from this response law when computing empirical pass@1, two independent candidates, and rejection search with budget $N=2$ on those candidates.

[F1] [[def-verifier-and-generation-protocol]]: correctness and acceptance are separate binary functions on the finite response set.

[F2] [[alg-budgeted-verifier-guided-generation]] [[lem-budgeted-verifier-generation-termination-and-calls]]: rejection search returns the first verifier-accepted response, or failure if all $N$ draws are rejected.

[F3] [[thm-independent-generation-success-and-verifier-error]]: for independent draws with one-draw correctness probability $p$, the probability that at least one of $N$ candidates is correct is $1-(1-p)^N$.

[F4] [[def-finite-sum]]: the empirical pass@1 rate is the finite average of the single-sample correctness indicators, with sums defined recursively. [[def-field]] supplies distributivity for finite expansions over the response list.

[F5] [[def-expectation-on-a-finite-probability-space]]: expectation on the finite sample space of the $M$ replicas is the probability-weighted sum over its outcomes.

[F6] [[cor-expectation-linearity-monotonicity-and-modulus-bound]]: expectation is linear for integrable random variables on a common probability space.

[F7] [[def-verifier-and-generation-protocol]]: the response law is a normalized mass function on the finite response set.

[F8] [[def-verifier-and-generation-protocol]]: independent responses from that law have the product joint mass.

## Verification

**Given:** The objects and sampling rule in the Example.

1.1 A single sample is correct exactly when it is $c$, so its pass@1 probability is $1/4$. The $M$ replicas have joint mass $\prod_{m=1}^{M}\pi(y_m)$ on the finite product $Y_q^M$ by [F8]. For one coordinate the total mass is $\sum_y\pi(y)=1$ by [F7]. When one more coordinate is added, distributivity in [F4] factors its finite sum as another factor $\sum_y\pi(y)=1$; induction therefore shows the total mass on $Y_q^M$ is $1$. If one coordinate is fixed at $y$, summing each of the other $M-1$ coordinates contributes a factor $1$, so that coordinate has marginal mass $\pi(y)$. Thus this is a finite probability space and each correctness indicator has expectation $1/4$. The indicators and their average are bounded and integrable; by [F5]–[F6] the average's expectation is the average of their expectations, also $1/4$. [given, F1, F4, F5, F6, F7, F8, algebra, induction]

1.2 With two independent candidates, the probability neither is correct is $(1-1/4)^2=9/16$. Therefore oracle pass@2 is $1-9/16=7/16$. [given, F1, F3, algebra]

1.3 A response is accepted with probability $1/4+3/8=5/8$. By the product law for independent candidates [F8], rejection search fails only if both candidates are $w_2$, which has probability $(3/8)^2=9/64$, so the probability it returns an accepted response is $55/64$. [given, F1, F2, F8, algebra]

2.1 By [F8], it returns a correct response if the first draw is $c$, or if the first is rejected $w_2$ and the second is $c$, an event of probability $1/4+(3/8)(1/4)=11/32=22/64$. Conditional on an accepted output, the selected accuracy is therefore $(22/64)/(55/64)=2/5$, distinct from the pass@1 and oracle pass@2 values above. [given, F1, F2, F8, step 1.3, algebra] ∎
