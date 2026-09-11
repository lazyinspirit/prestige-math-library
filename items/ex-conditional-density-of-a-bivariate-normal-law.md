---
id: "ex-conditional-density-of-a-bivariate-normal-law"
kind: "example"
title: "Conditional density of a bivariate normal law"
deps: ["thm-conditional-density-formula", "lem-normal-density-has-total-mass-one", "def-standard-normal-and-normal-laws", "thm-tonelli-theorem-for-sigma-finite-product-spaces", "thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral", "def-axiom-of-choice", "thm-substitution", "thm-indefinite-integral-of-a-nonnegative-function-is-a-measure", "thm-monotone-convergence-for-the-integral", "thm-probability-law-and-distribution-function-correspondence", "thm-integration-by-parts", "thm-derivative-of-exponential", "thm-chain-rule", "thm-integration-against-a-density", "thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces"]
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
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Example

Assume AC for the analytic normalization suppliers. Let $\sigma_X,\sigma_Y>0$, $-1<r<1$ and $m_X,m_Y\in\mathbb R$. Put $u=(x-m_X)/\sigma_X$, $v=(y-m_Y)/\sigma_Y$. The bivariate normal law with density
$$p(x,y)=\frac{1}{2\pi\sigma_X\sigma_Y\sqrt{1-r^2}}\exp\!\left(-\frac{u^2-2ruv+v^2}{2(1-r^2)}\right)$$

has means $m_X,m_Y$, standard deviations $\sigma_X,\sigma_Y$ and correlation r. A conditional law of X given Y=y is
$$N\!\left(m_X+r\frac{\sigma_X}{\sigma_Y}(y-m_Y),\ \sigma_X^2(1-r^2)\right)\qquad(y\in\mathbb R).$$

The singular endpoints $|r|=1$ are outside this density assertion.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the example.

[F1] Normalize joint density sections at finite positive marginal density. [[thm-conditional-density-formula]].

[F2] Under AC phi(t)=exp(-t^2/2)/sqrt(2pi) is a positive normalized density. [[lem-normal-density-has-total-mass-one]].

[F3] N(a,s^2) is the affine pushforward of N(0,1). [[def-standard-normal-and-normal-laws]].

[F4] Tonelli computes the nonnegative joint marginal and moments. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]].

[F5] Compact continuous integrals agree with Lebesgue integrals under countable choice. [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]].

[F6] AC supplies the countable choices in normalization, compact integration and CDF correspondence. [[def-axiom-of-choice]].

[F7] Affine substitutions apply on compact intervals with continuous outer Gaussian integrands and constant derivatives. [[thm-substitution]].

[F8] The joint density defines a measure. [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]].

[F9] Increasing compact intervals give nonnegative full-line integrals. [[thm-monotone-convergence-for-the-integral]].

[F10] Equality of CDFs identifies two real probability laws under countable choice. [[thm-probability-law-and-distribution-function-correspondence]].

[F11] Compact C1 Gaussian factors permit integration by parts. [[thm-integration-by-parts]].

[F12] The exponential derivative is itself. [[thm-derivative-of-exponential]].

[F13] The chain rule differentiates the Gaussian exponent. [[thm-chain-rule]].

[F14] Moments under a density are integrals of the corresponding products. [[thm-integration-against-a-density]].

[F15] Absolutely integrable moment products permit signed iterated integration. [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]].

## Verification

**Proof technique:** direct.

1.1 Write $\phi(t)=e^{-t^2/2}/\sqrt{2\pi}$ and $g_{a,s}(x)=s^{-1}\phi((x-a)/s)$ for s>0. For any compact interval [b,d], use [F7] with affine map $(x-a)/s$ and continuous outer function phi; its derivative is the integrable constant 1/s. By [F5] this proves the same substitution for Lebesgue integrals. Let b decrease to minus infinity and d increase to infinity, using [F9], to get $\int g_{a,s}=1$ from [F2]. For a fixed upper endpoint z, the identical limiting argument gives $\int_{-\infty}^z g_{a,s}(x)dx=\int_{-\infty}^{(z-a)/s}\phi(t)dt$. This is the CDF of the affine law [F3], since s>0. Thus [F10] identifies the density law with $N(a,s^2)$. All countable-choice hypotheses are supplied by [F6]. [F2, F3, F5, F6, F7, F9, F10]

2.1 Completing the square gives $u^2-2ruv+v^2=(u-rv)^2+(1-r^2)v^2$. Put $a(y)=m_X+r\sigma_Xv$ and $s=\sigma_X\sqrt{1-r^2}>0$. Direct substitution into the displayed p yields $$p(x,y)=g_{m_Y,\sigma_Y}(y)\,g_{a(y),s}(x).$$ It is positive and product-measurable: it is obtained from measurable coordinate projections by continuous arithmetic and exponential operations with fixed nonzero denominators. Step 1.1 and [F4] give marginal $m(y)=g_{m_Y,\sigma_Y}(y)$ and total mass $\int m=1$. Hence [F8] constructs the joint probability. Its marginal is finite positive at every y. Apply [F1]: the normalized section is exactly $g_{a(y),s}$, which step 1.1 identifies as the asserted normal law. No exceptional filler is needed here. When r=0 this conditional density is independent of y and has the original X parameters. [step 1.1, F1, F4, F8]

2.2 For completeness the parameters have their claimed moment meanings. By [F12]–[F13], $\phi\prime(t)=-t\phi(t)$. On [-R,R], [F11] with factors t and phi gives $\int_{-R}^R t^2\phi(t)dt=\int_{-R}^R\phi(t)dt-2R\phi(R)$. The derivatives are continuous, hence satisfy its compact integrability hypotheses, and [F5] converts to Lebesgue integrals. Since $\phi\prime(t)=-t\phi(t)\le0$ for $t\ge0$, $R\phi(R)\le2\int_{R/2}^R\phi(t)dt\to0$, using the finite integral in [F2]. By [F9] the second moment is one. The bound $|t|\le1+t^2$ gives finite first absolute moment; symmetry and substitution t to -t give mean zero. Affine substitution now gives $\int xg_{a,s}(x)dx=a$ and $\int(x-a)^2g_{a,s}(x)dx=s^2$, using [F14] for the density interpretation. [step 1.1, F2, F5, F7, F9, F11, F12, F13, F14]

3.1 Using the factorization of step 2.1 and step 2.2, nonnegative Tonelli gives $E(Y-m_Y)^2=\sigma_Y^2$ and $$E(X-m_X)^2=\int\bigl(s^2+(a(y)-m_X)^2\bigr)m(y)dy=\sigma_X^2(1-r^2)+r^2\sigma_X^2=\sigma_X^2.$$ This also gives finite absolute first moments, so [F15] permits signed integration and yields $EX=m_X$, $EY=m_Y$. The product $(X-m_X)(Y-m_Y)$ is absolutely integrable because $2|ab|\le a^2+b^2$. Thus [F15] again gives $$E[(X-m_X)(Y-m_Y)]=\int r\frac{\sigma_X}{\sigma_Y}(y-m_Y)^2m(y)dy=r\sigma_X\sigma_Y.$$ Division by the positive standard deviations gives correlation r. At $|r|=1$ the displayed density denominator and conditional scale cease to be positive, so neither the normalized density nor this density argument asserts that singular case. [step 2.1, step 2.2, F4, F14, F15] ∎
