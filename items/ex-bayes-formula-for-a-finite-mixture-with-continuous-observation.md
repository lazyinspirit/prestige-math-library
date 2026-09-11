---
id: "ex-bayes-formula-for-a-finite-mixture-with-continuous-observation"
kind: "example"
title: "Bayes formula for a finite mixture with continuous observation"
deps: ["thm-bayes-formula-for-dominated-kernels", "lem-normal-density-has-total-mass-one", "def-standard-normal-and-normal-laws", "def-axiom-of-choice", "thm-indefinite-integral-of-a-nonnegative-function-is-a-measure", "thm-substitution", "thm-monotone-convergence-for-the-integral", "thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral", "thm-probability-law-and-distribution-function-correspondence"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Varadhan, Probability Theory, Chapter 4"
      url: https://math.nyu.edu/~varadhan/course/PROB.ch4.pdf
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Example

Assume AC for Gaussian normalization and the cited analytic interfaces. Let $0<p<1$, with prior $P(J=0)=p$ and $P(J=1)=1-p$. Given J=j the observation has density $g_j(y)=(2\pi)^{-1/2}e^{-(y-j)^2/2}$, the law $N(j,1)$. Then a posterior probability of J=1 given Y=y is
$$w(y)=\frac{(1-p)g_1(y)}{p g_0(y)+(1-p)g_1(y)}=\frac{(1-p)e^{y-1/2}}{p+(1-p)e^{y-1/2}}.$$

It is defined for every real y. At $y=1/2$ it equals the prior probability $1-p$.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the example.

[F1] Normalize a supplied dominated likelihood against the prior. [[thm-bayes-formula-for-dominated-kernels]].

[F2] The standard Gaussian density is positive and integrates to one under AC. [[lem-normal-density-has-total-mass-one]].

[F3] Normal location parameters refer to affine pushforwards of the standard law. [[def-standard-normal-and-normal-laws]].

[F4] AC supplies Gaussian normalization and countable-choice analytic bridges. [[def-axiom-of-choice]].

[F5] Each nonnegative likelihood density defines a measure. [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]].

[F6] Translation substitutions hold for compact continuous Gaussian integrands. [[thm-substitution]].

[F7] Increasing compact intervals exhaust the nonnegative full-line integrals. [[thm-monotone-convergence-for-the-integral]].

[F8] Compact continuous substitutions convert to Lebesgue integrals under countable choice. [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]].

[F9] CDFs uniquely identify real probability measures under countable choice. [[thm-probability-law-and-distribution-function-correspondence]].

## Verification

**Proof technique:** direct.

1.1 For j=0 the integral of $g_0$ is one by [F2]. For j=1, the translation $t=y-1$ has derivative one; [F6] with continuous outer phi, then [F8] and [F7] on increasing compact intervals, gives $\int g_1=\int\phi=1$. The same calculation on $(-\infty,z]$ gives $\int_{-\infty}^z g_j=\int_{-\infty}^{z-j}\phi$, the CDF of the translated standard law [F3]. Therefore [F9] identifies it as $N(j,1)$. Both functions are positive measurable and finite. By [F5] they define probability likelihoods; measurability in the discrete parameter j is automatic because the parameter set is finite. The joint density $(j,y)\mapsto g_j(y)$ is measurable since each of its two sections is, and the two slices are measurable. The declared AC [F4] covers all analytic choice assumptions. [F2, F3, F4, F5, F6, F7, F8, F9]

2.1 Take prior $\pi=p\delta_0+(1-p)\delta_1$ on the two-point space and observation Lebesgue measure, which is sigma-finite. In [F1] the marginal density is $m(y)=pg_0(y)+(1-p)g_1(y)>0$ and finite for every real y. Its total mass is $p+(1-p)=1$ by step 1.1. The posterior mass of {1} is therefore the first displayed ratio, and that of {0} is $1-w(y)$; these sum to one. Dividing numerator and denominator by $g_0(y)>0$ and computing $g_1(y)/g_0(y)=\exp((y^2-(y-1)^2)/2)=e^{y-1/2}$ gives the second ratio. At $y=1/2$ the exponential is one, so $w(1/2)=1-p$. For p=1/2, for example, $w(0)=1/(1+e^{1/2})$ and $w(1)=e^{1/2}/(1+e^{1/2})$. Finally for every Borel B, $\int_B w(y)m(y)dy=(1-p)\int_Bg_1(y)dy=P(J=1,Y\in B)$, directly verifying the posterior event calculation. [step 1.1, F1] ∎
