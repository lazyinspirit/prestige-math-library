---
id: ex-finite-mean-infinite-variance-monte-carlo-integrand
title: "Finite mean does not give a finite-variance Monte Carlo error"
kind: example
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-iid-monte-carlo-estimators
  - def-identically-distributed-and-iid-random-variables
  - def-countable-choice
  - def-random-element-and-real-random-variable
  - thm-probability-law-and-distribution-function-correspondence
  - thm-change-of-variables-for-expectation
  - thm-real-power-continuity-and-derivatives
  - lem-rational-power-monotone
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - cor-layer-cake-formulas-for-random-variables
  - thm-layer-cake-formula-for-l-p-powers
  - thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line
  - lem-truncated-integrals-of-rational-powers
  - thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral
  - thm-continuous-implies-integrable
  - cor-continuous-functions-are-borel-measurable
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-monotone-convergence-for-the-integral
  - thm-iid-monte-carlo-mean-consistency
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice is used for the CDF-to-law correspondence and the continuous-to-Borel and Riemann/Lebesgue bridges in the moment calculation; no full AC or dependent choice is used, and the conditional IID consistency result is choice-free."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 2"
      url: "https://artowen.su.domains/mc/Ch-intro.pdf"
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed."
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Example

Assume the Axiom of Countable Choice. Let $F(x)=0$ for $x<1$ and $F(x)=1-x^{-3/2}$ for $x\ge1$. The CDF-to-law theorem gives a probability law with CDF $F$. Let $Y$ be the identity random variable under this law, and let $(Y_i)_{i\ge1}$ be any real IID sequence with this common law. Then $\mathbb E[Y_1]=3$ but $\mathbb E[Y_1^2]=+\infty$. Thus the sample mean is strongly and weakly consistent, while no finite population standard error $\sigma/\sqrt n$ is available. For a finite sample of real outputs the empirical quantity $s_n/\sqrt n$ can still be computed, but this example supplies no finite-variance interpretation for it.

## Facts & Assumptions

**Given:** Countable Choice, the displayed function $F$, and a real IID sequence $(Y_i)_{i\ge1}$ with the probability law constructed from $F$.

[A1] [[def-countable-choice]]: Countable Choice says every countable family of nonempty sets has a choice function.

[F1] [[thm-real-power-continuity-and-derivatives]]: For rational $\alpha$, $x\mapsto x^\alpha$ is continuous and differentiable on $(0,\infty)$ with derivative $\alpha x^{\alpha-1}$.

[F2] [[lem-rational-power-monotone]]: For positive rational $r$, $a\mapsto a^r$ is strictly increasing on positive reals.

[F3] [[thm-probability-law-and-distribution-function-correspondence]]: Under Countable Choice, every nondecreasing right-continuous $F$ with limits $0$ and $1$ at the two infinities is the CDF of a unique Borel probability measure on $\mathbb R$.

[F4] [[def-random-element-and-real-random-variable]]: A real random variable is a measurable map to $\mathbb R$; the identity map on a Borel probability space is measurable.

[F5] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: A nonnegative random variable may have extended expectation $\mathbb E[Y]=\int Y\,d\mathbb P$.

[F6] [[cor-layer-cake-formulas-for-random-variables]]: For nonnegative $Y$, $\mathbb E[Y]=\int_0^\infty\mathbb P(Y>t)\,dt$, with infinity allowed.

[F7] [[thm-layer-cake-formula-for-l-p-powers]]: For measurable $Y$ and $p>0$, $\mathbb E[|Y|^p]=p\int_0^\infty t^{p-1}\mathbb P(|Y|>t)\,dt$, with infinity allowed.

[F8] [[lem-truncated-integrals-of-rational-powers]]: For rational $p\ne1$ and $0<A<B$, $\int_A^B t^{-p}\,dt=(B^{1-p}-A^{1-p})/(1-p)$.

[F9] [[thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line]]: Under Countable Choice, if a nonnegative function is Riemann integrable on compact intervals and its improper Riemann integral is finite, that value equals its Lebesgue integral on the half-line.

[F10] [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]: Under Countable Choice, a bounded Riemann-integrable function on a compact interval has the same Lebesgue and Riemann integrals.

[F11] [[cor-continuous-functions-are-borel-measurable]]: Under Countable Choice, continuous maps between Euclidean spaces are Borel measurable.

[F12] [[thm-arithmetic-and-lattice-operations-preserve-measurability]]: Products of measurable real functions are measurable.

[F13] [[thm-monotone-convergence-for-the-integral]]: Integrals of an increasing sequence of nonnegative measurable functions increase to the integral of their pointwise limit.

[F14] [[thm-iid-monte-carlo-mean-consistency]]: For a real IID sequence with finite first absolute moment, its Monte Carlo sample mean converges in probability and almost surely to the common mean.

[F15] [[def-iid-monte-carlo-estimators]]: The empirical $s_n/\sqrt n$ is a statistic for real samples; its interpretation as an estimate of a finite population standard error is under the finite-second-moment condition.

[F16] [[thm-change-of-variables-for-expectation]]: Expectations of measurable functions of a random variable are integrals against its law, including extended expectations for nonnegative functions.

[F17] [[thm-continuous-implies-integrable]]: A continuous real function on a compact interval is bounded and Riemann integrable there.

## Verification

1.1 For $x\ge1$, $x\mapsto x^{3/2}$ is strictly increasing by [F2], so its positive reciprocal $x^{-3/2}$ is decreasing; it is continuous by [F1]. Thus the displayed $F$ is nondecreasing and right-continuous, including at $x=1$ where its two formulas agree. For $x\ge1$, [F2] gives $x^{1/2}\ge1$, hence $0\le x^{-3/2}=x^{-1}x^{-1/2}\le x^{-1}$. Since $x^{-1}\to0$, $F(x)\to1$ as $x\to+\infty$; also $F(x)\to0$ as $x\to-\infty$. By [A1] and [F3], $F$ defines a Borel probability law $\mu$. Since $F(1)=0$, $\mu((-\infty,1])=0$ and hence $\mu([1,\infty))=1$. Restricting $\mu$ to $[1,\infty)$ gives a probability space on which the identity random variable $Y(x)=x$ is measurable by [F4], has CDF $F$, and satisfies $Y\ge1$. [A1, F1, F2, F3, F4, given]

2.1 If $0\le t<1$, $F(t)=0$ and hence $\mathbb P(Y>t)=1$. For $t\ge1$, the CDF gives $\mathbb P(Y>t)=1-F(t)=t^{-3/2}$. By the nonnegative expectation definition [F5] and layer-cake formula [F6], $\mathbb E[Y]=1+\int_1^\infty t^{-3/2}\,dt$. The function $t^{-3/2}$ is nonnegative and continuous on every compact $[1,R]$ by [F1]. For $R>1$, [F8] gives $\int_1^R t^{-3/2}\,dt=2(1-R^{-1/2})\to2$; [F9] identifies this finite improper integral with its Lebesgue value. Therefore $\mathbb E[Y]=3$. [F1, F3, F5, F6, F8, F9, step 1.1]

3.1 Since $Y\ge1$ on the restricted space, $\mathbb P(|Y|>t)=\mathbb P(Y>t)$. By the nonnegative expectation definition [F5] and [F7] with $p=2$, $\mathbb E[Y^2]=1+2\int_1^\infty t^{-1/2}\,dt$. Extend $h(t)=t^{-1/2}$ from $[1,\infty)$ by $h(t)=1$ for $t<1$; it is continuous at $1$ and on both pieces, so [F11] makes it Borel. Since $[1,N]$ is Borel, [F12] makes each $h\mathbf1_{[1,N]}$ measurable. For each integer $N\ge2$, [F1] gives continuity of $t^{-1/2}$ on $[1,N]$, so [F17] makes it bounded and Riemann integrable there; [F8] and [F10] then give $\int_{[1,N]}t^{-1/2}\,d\lambda=2(\sqrt N-1)$. These values diverge because the natural numbers are unbounded. The truncations increase pointwise to $t^{-1/2}\mathbf1_{[1,\infty)}$, so [F13] gives $\int_{[1,\infty)}t^{-1/2}\,d\lambda=+\infty$. Hence $\mathbb E[Y^2]=+\infty$. [F1, F5, F7, F8, F10, F11, F12, F13, F17, step 2.1, algebra]

4.1 The given sequence has common law $\mu$. By [F11], the functions $y\mapsto|y|$ and $y\mapsto y^2$ are Borel; applying [F16] to these nonnegative functions gives $\mathbb E|Y_1|=\mathbb E|Y|=3$ and $\mathbb E[Y_1^2]=\mathbb E[Y^2]=+\infty$. Thus $Y_1$ is integrable, and [F16] applied to the identity gives $\mathbb E[Y_1]=\mathbb E[Y]=3$. [F11, F16, given, step 2.1, step 3.1]

5.1 By step 4.1, $\mathbb E|Y_1|=3<\infty$, so [F14] proves strong and weak consistency of $\bar Y_n$. Step 4.1 shows $\mathbb E[Y_1^2]=+\infty$, so the finite-second-moment condition in [F15] fails and no finite population standard error $\sigma/\sqrt n$ is available. For each realized sample of size $n\ge2$, the empirical formula remains a statistic by [F15]. [given, F14, F15, step 4.1] ∎
