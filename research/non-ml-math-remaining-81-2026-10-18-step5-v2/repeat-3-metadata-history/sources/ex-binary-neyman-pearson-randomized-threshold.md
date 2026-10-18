---
id: ex-binary-neyman-pearson-randomized-threshold
kind: example
title: A binary Neyman–Pearson boundary randomization
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-finite-probability-vector
  - def-finite-probability-space-and-event
  - def-finite-hypothesis-testing-beta
  - def-randomized-test
  - def-test-size-and-power
  - def-expectation-on-a-finite-probability-space
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 14, §§14.1–14.2 and §14.4"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-2022.pdf"
---

## Example

Let the null law be $P=(2/3,1/3)$ and the alternative law be $Q=(1/3,2/3)$
on $\mathcal X=\{a,b\}$. For the type-I bound $\epsilon=1/2$, the optimal
test rejects with probability $1/4$ at $a$ and probability $1$ at $b$.

## Facts & Assumptions

**Given:** The displayed null $P$, alternative $Q$, and
$\epsilon=1/2$.

[F1] [[def-randomized-test]]: $\phi(x)\in[0,1]$ is the probability of
rejecting the null after observing $x$; $1-\phi(x)$ is the acceptance
probability.

[F2] [[def-test-size-and-power]]: for a simple null $P$ the type-I error is
$E_P\phi$, and under the alternative $Q$ the rejection probability is the
power $E_Q\phi$.

[F3] [[def-finite-hypothesis-testing-beta]]: $\beta_\epsilon(P,Q)$ is
the infimum of $E_Q[1-\phi]$ over all rejection functions with
$E_P\phi\le\epsilon$.

[F4] [[def-finite-probability-vector]]: $P,Q$ are probability vectors on
$\{a,b\}$ with the displayed coordinates.

[F5] [[def-finite-probability-space-and-event]] and
[[def-expectation-on-a-finite-probability-space]]: the displayed vectors
give finite laws, with $E_P h=\sum_xp_xh(x)$ and $E_Qh=\sum_xq_xh(x)$.

## Verification

**Given:** $P=(2/3,1/3)$ is the null, $Q=(1/3,2/3)$ is the alternative,
and the test function is a rejection probability.

1.1 Define $\phi(a)=1/4$ and $\phi(b)=1$. By [F1], this is a valid randomized test. Its type-I error is $(2/3)(1/4)+(1/3)(1)=1/2$, and its type-II error is $(1/3)(3/4)+(2/3)(0)=1/4$ by [F2, F3, F5]. [F1, F2, F3, F4, F5, construct, algebra]

2.1 Consider any feasible test and put $u=\phi(a)$, $v=\phi(b)$. If $u\le1/4$, then its alternative rejection probability is $E_Q\phi=u/3+2v/3\le1/12+2/3=3/4$ by [F5]. If $u>1/4$, the constraint $2u/3+v/3\le1/2$ gives $v\le3/2-2u$, hence $E_Q\phi\le u/3+(2/3)(3/2-2u)=1-u<3/4$ by [F5]. Thus no feasible test has smaller type-II error than the candidate in step 1.1, proving $\beta_{1/2}(P,Q)=1/4$. [F1, F2, F3, F4, F5, step 1.1, algebra]

3.1 The alternative-to-null likelihood ratios are $q_a/p_a=1/2$ and $q_b/p_b=2$. The test of step 1.1 rejects fully at the larger ratio $b$ and randomizes at the smaller ratio $a$ to exhaust the remaining type-I budget. This verifies the threshold direction for $H_0:P$ against $H_1:Q$. [F1, F2, step 1.1, algebra] ∎
