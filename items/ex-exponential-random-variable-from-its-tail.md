---
id: ex-exponential-random-variable-from-its-tail
kind: example
title: "Recovering an exponential law from its tail"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-countable-choice, def-cumulative-distribution-function-of-a-random-variable, cor-layer-cake-formulas-for-random-variables, thm-probability-law-and-distribution-function-correspondence]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Section 1.2"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Example

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

Fix $\lambda>0$ and suppose a nonnegative random variable $X$ satisfies
$$\mathbb P(X>t)=e^{-\lambda t}\qquad(t\ge0).$$
Then
$$F_X(x)=\begin{cases} 0,&x<0,\\ 1-e^{-\lambda x},&x\ge0, \end{cases}$$
its law on $\mathbb R$ is the exponential law with parameter $\lambda$, and
$$\mathbb E[X]=\frac1\lambda.$$

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and a nonnegative random variable $X$ with $\mathbb P(X>t)=e^{-\lambda t}$ for all $t\ge0$.

[L1] The cumulative distribution function is $F_X(x)=\mathbb P(X\le x)$ ([[def-cumulative-distribution-function-of-a-random-variable]]).

[L2] Assuming the Axiom of Countable Choice, distribution functions determine probability laws ([[thm-probability-law-and-distribution-function-correspondence]]).

[L3] For nonnegative random variables, $$\mathbb E[X]=\int_0^\infty\mathbb P(X>t)\,dt$$ ([[cor-layer-cake-formulas-for-random-variables]]).

## Verification

**Proof technique:** direct.

1.1 Because $X\ge0$, one has $F_X(x)=0$ for $x<0$. For $x\ge0$, $$F_X(x)=1-\mathbb P(X>x)=1-e^{-\lambda x}.$$ So the displayed formula is the CDF of $X$. [L1, given]

1.2 The tail integral from [L3] gives $$\mathbb E[X]=\int_0^\infty e^{-\lambda t}\,dt=\frac1\lambda.$$ [L3, algebra]

2.1 By [L2], that distribution function determines the law uniquely, and its interval increments are those of the exponential distribution with parameter $\lambda$. [step 1.1, L2]

3.1 Steps 1.1, 1.2, and 2.1 recover the law and its expectation from the tail. [step 1.1, step 1.2, step 2.1] ∎
