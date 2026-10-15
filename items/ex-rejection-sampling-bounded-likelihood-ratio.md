---
id: ex-rejection-sampling-bounded-likelihood-ratio
kind: example
title: A bounded target-to-proposal density ratio
status: draft
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

On $S=\{a,b\}$ with counting measure, let the target masses be
$f(a)=1/4,\ f(b)=3/4$ and the proposal masses be $g(a)=g(b)=1/2$.
The density ratio is bounded by $c=3/2$. Rejection sampling has acceptance
probability $2/3$, returns the target law, and has expected proposal count
$3/2$.

## Facts & Assumptions

[A1] The sample space is the two-point set $S=\{a,b\}$ with counting measure. The listed target and proposal functions are nonnegative.

[F1] [[def-counting-measure]], [[prop-counting-measure-is-a-measure]], [[def-integral-of-a-nonnegative-simple-function]], and [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]: on this finite space, the integral of a nonnegative function is the sum of its two values.

[F2] [[thm-rejection-sampling-has-target-acceptance-law]]: normalized shapes with envelope constant $c$ have accepted density $f$ and acceptance probability $1/c$.

[F3] [[thm-rejection-sampling-expected-proposal-count-under-finite-envelope]]: for normalized target and proposal densities, the expected count is $c$.

[F4] [[alg-rejection-sampling]]: for normalized shapes, a proposal $y$ with $g(y)>0$ is accepted when $U\le f(y)/(cg(y))$.

## Verification

**Given:** The target and proposal masses in the Example, and the algorithm's ideal independent proposal-uniform draws.

1.1 By [F1], $\int f\,d\#=1/4+3/4=1$ and $\int g\,d\#=1/2+1/2=1$. The ratios are $f(a)/g(a)=1/2$ and $f(b)/g(b)=3/2$, so $c=3/2$ is a finite envelope and is the least such constant. [A1, F1, algebra]

2.1 Applying [F2] gives the accepted masses $(1/4,3/4)$ and acceptance probability $1/c=2/3$; [F3] gives expected proposal count $c=3/2$. The two-point calculation is exact: accepted submasses are $1/2\cdot(1/3)=1/6$ at $a$ and $1/2\cdot1=1/2$ at $b$, totaling $2/3$; the factors follow from [F4], and dividing by $2/3$ gives $(1/4,3/4)$. [F2, F3, F4, step 1.1, algebra] ∎
