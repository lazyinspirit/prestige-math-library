---
id: ex-rejection-sampling-unnormalized-finite-measures
kind: example
title: Rejection sampling with unnormalized finite masses
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - alg-rejection-sampling
  - def-counting-measure
  - def-integral-of-a-nonnegative-simple-function
  - prop-counting-measure-is-a-measure
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - thm-rejection-sampling-expected-proposal-count-under-finite-envelope
  - thm-rejection-sampling-has-target-acceptance-law
generation:
  role: example
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 4 §4.7
      url: https://artowen.su.domains/mc/Ch-nonunifrng.pdf
    - title: Computational Statistics with R, Chapter 6 §6.1
      url: https://cswr.nrhstat.org/reject-samp.html
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Example

On $S=\{a,b\}$ with counting measure, take unnormalized target masses
$\tilde f(a)=2,\ \tilde f(b)=1$ and proposal shape
$\tilde g(a)=\tilde g(b)=1$. With $c=2$, the envelope holds and
$Z_f=3,\ Z_g=2$. Rejection sampling accepts with probability $3/4$, returns
normalized target masses $(2/3,1/3)$, and uses $4/3$ proposals on average.

## Facts & Assumptions

[A1] The sample space is the two-point set $S=\{a,b\}$ with counting measure. The displayed shapes are nonnegative.

[F1] [[def-counting-measure]], [[prop-counting-measure-is-a-measure]], [[def-integral-of-a-nonnegative-simple-function]], and [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]: on this finite space, the integral of a nonnegative function is the sum of its two values.

[F2] [[thm-rejection-sampling-has-target-acceptance-law]]: unnormalized shapes with envelope constant $c$ have acceptance probability $Z_f/(cZ_g)$ and accepted masses $\tilde f/Z_f$.

[F3] [[thm-rejection-sampling-expected-proposal-count-under-finite-envelope]]: the expected count is the reciprocal of the acceptance probability.

[F4] [[alg-rejection-sampling]]: for unnormalized shapes, a proposal $y$ with $\tilde g(y)>0$ is accepted when $U\le\tilde f(y)/(c\tilde g(y))$.

## Verification

**Given:** The shapes and envelope constant in the Example, counting measure, and the ideal independent proposal-uniform draws.

1.1 By [F1], $Z_f=2+1=3$ and $Z_g=1+1=2$. Pointwise, $\tilde f(a)=2=2\tilde g(a)$ and $\tilde f(b)=1\le2\tilde g(b)$, so $c=2$ is a valid finite envelope. [A1, F1, algebra]

2.1 Applying [F2] gives acceptance probability $p=Z_f/(cZ_g)=3/4$ and accepted masses $(\tilde f(a)/Z_f,\tilde f(b)/Z_f)=(2/3,1/3)$. [F2, step 1.1, algebra]

3.1 Direct finite enumeration checks the same result: the proposal is uniform on $\{a,b\}$; by [F4], $a$ is always accepted and $b$ is accepted with probability $1/2$. The accepted submasses are therefore $1/2$ and $1/4$, their sum is $3/4$, and normalization gives $(2/3,1/3)$. By [F3] the expected count is $1/p=4/3$. [F3, F4, step 2.1, algebra] ∎
