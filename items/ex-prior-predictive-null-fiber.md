---
id: ex-prior-predictive-null-fiber
kind: example
title: A prior-predictive null fiber has no quotient posterior
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-posterior-evidence-normalizer-and-fiberwise-update
  - prop-fiberwise-posterior-propriety-iff-finite-positive-evidence
  - thm-bayes-formula-for-dominated-kernels
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Gelman et al., Bayesian Data Analysis, 3rd ed., §1.3"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
    - title: "Johnson, Ott & Dogucu, Bayes Rules!, §§2.1.3–2.1.4, 2.3.4–2.3.6"
      url: "https://www.bayesrulesbook.com/chapter-2.html"
---

## Example

Let $\Theta=\{a,b\}$ have its full power-set sigma-algebra and prior mass
$1/2$ at each point. Let the data space be $\mathsf Y=\{0,1,2\}$ with its
full power-set sigma-algebra and counting measure. Conditional on $a$, the
observation is $0$ with probability one; conditional on $b$, it is $1$ with
probability one. The sampling kernel has density $\ell(a,y)=\mathbf1_{\{0\}}(y)$
and $\ell(b,y)=\mathbf1_{\{1\}}(y)$; it is jointly measurable on these finite
power-set spaces. Then $Z(2)=0$, so the quotient formula is undefined at $2$;
the prior-predictive probability of that observation is zero.

## Facts & Assumptions

[F1] [[def-posterior-evidence-normalizer-and-fiberwise-update]]: at a fixed data value, the evidence is the integral of the nonnegative likelihood section against the prior measure, and a quotient update is defined only for finite positive evidence.

[F2] [[prop-fiberwise-posterior-propriety-iff-finite-positive-evidence]]: zero evidence cannot be made into a probability by finite positive scaling.

[F3] [[thm-bayes-formula-for-dominated-kernels]]: for a proper prior and a jointly measurable normalized sampling-kernel density, the evidence $m$ is the data marginal density; the kernel uses the quotient where $0<m<\infty$ and the prior as the stated filler where $m=0$ or $m=\infty$. The filled fibers have zero prior-predictive marginal mass.

**Given:** The finite prior, data space, conditional laws, and likelihood density specified in the Example.

## Verification

1.1 The likelihood sections are normalized: $L_0(a)=1$, $L_1(b)=1$, and all other parameter-data pairs have likelihood zero. Therefore $Z(0)=1/2$, $Z(1)=1/2$, and $Z(2)=0$. [given, F1, algebra]

2.1 By [F3], the prior-predictive mass at $2$ is $Z(2)$ times its counting measure, hence zero. At this fiber every numerator $\int_A L_2\,d\Pi$ is also zero, so the displayed quotient is $0/0$ and is not defined; the theorem's chosen filler is $K(2,A)=\Pi(A)$. This filler is a version value on a prior-predictive null event, not an update inferred from the observation. [step 1.1, F2, F3, algebra] ∎

