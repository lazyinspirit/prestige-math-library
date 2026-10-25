---
id: ex-bayes-theorem-for-two-urns
kind: example
title: "Bayes' theorem for choosing one of two urns and observing a colour"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-conditional-probability, thm-finite-bayes-theorem, def-product-of-finite-probability-spaces]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "C. M. Grinstead and J. L. Snell, Introduction to Probability, 2nd ed., Section 4.1"
      url: "https://math.dartmouth.edu/~prob/prob/prob.pdf"
pipeline_run: null
---

## Example

Choose urn $U_1$ with probability $1/3$ and urn $U_2$ with probability $2/3$, independently choose a uniform auxiliary value $r\in\{1,2,3,4\}$, and declare the observation red when $U_1$ was chosen and $r\le3$, or when $U_2$ was chosen and $r=1$. Thus the red likelihoods are $3/4$ and $1/4$, respectively. The posterior probability of $U_1$ after observing red is $3/5$.

## Facts & Assumptions

**Given:** The finite two-stage experiment in the Example.

[L1] Bayes' theorem over a positive-probability finite partition gives posterior probability as prior times likelihood divided by total likelihood ([[thm-finite-bayes-theorem]]).

[L2] A finite product experiment assigns product weights to its branches ([[def-product-of-finite-probability-spaces]]).

[L3] Conditional probability is the probability of an intersection divided by the positive probability of the conditioning event ([[def-conditional-probability]]).

## Verification

**Proof technique:** direct.

1.1 In the product space, the three red branches over $U_1$ have total weight $(1/3)(3/4)=1/4$, and the one red branch over $U_2$ has weight $(2/3)(1/4)=1/6$. Hence $\mathbb P(\mathrm{red})=5/12>0$. [L2, algebra]

2.1 Directly, $\mathbb P(U_1\mid\mathrm{red})=(1/4)/(5/12)=3/5$. [step 1.1, L3, algebra]

3.1 Bayes' formula [L1] has the same numerator $1/4$ and denominator $1/4+1/6=5/12$, so it also gives $3/5$. [step 1.1, step 2.1, L1, algebra] ∎
