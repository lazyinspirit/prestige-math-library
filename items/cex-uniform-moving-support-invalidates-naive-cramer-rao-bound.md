---
id: cex-uniform-moving-support-invalidates-naive-cramer-rao-bound
kind: counterexample
title: "Uniform moving support invalidates the naive score bound"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 8
deps:
  - def-axiom-of-choice
  - def-derivative
  - def-score-and-fisher-information
  - thm-score-mean-zero-and-information-identity
  - thm-cramer-rao-lower-bound
  - def-statistic-and-estimator
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-moments-variance-and-covariance
  - def-measure-with-density
  - thm-integration-against-a-density
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-continuous-implies-integrable
  - thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral
  - thm-ftc-second-part
  - lem-derivative-of-a-power
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "George Deligiannidis, SB2.1 Foundations of Statistical Inference, §3.1, support regularity discussion, PDF pp. 21–24"
      url: "https://www.stats.ox.ac.uk/~deligian/pdf/sb21/sb21_notes.pdf"
    - title: "Anna Mikusheva, MIT 14.381 Lecture 6: Efficient Estimators, Rao-Cramer Bound, PDF pp. 2, 5–6"
      url: "https://ocw.mit.edu/courses/14-381-statistical-method-in-economics-fall-2018/15224973dfc1c2b4287804c8712681f7_MIT14_381F18_lec6.pdf"
---

## Statement refuted
For every differentiable one-parameter density family, the formal score
$S_\theta=\partial_\theta\log p_\theta(X)$ and its finite positive second
moment $I(\theta)=\mathbb E_\theta S_\theta^2$ automatically give the
Cramér–Rao inequality
$\operatorname{Var}_\theta(T)\ge\psi'(\theta)^2/I(\theta)$ for every
unbiased finite-variance estimator $T$, even when the support depends on
$\theta$.

## Facts & Assumptions

**Given:** AC; $\theta>0$; the density family and estimator stated above.

[A1] [[def-axiom-of-choice]]: AC includes countable choice and supplies the selected representatives used by the score definition.

[F1] [[def-statistic-and-estimator]]: an estimator is a measurable statistic with a specified target.

[F2] [[def-measure-with-density]] and [[thm-integration-against-a-density]]: the law with density $p_\theta$ integrates a nonnegative $g$ as $\int g p_\theta\,d\lambda$.

[F3] [[thm-lebesgue-measure-of-a-box-of-every-kind]]: $\lambda((0,\theta))=\theta$ and $\lambda(\{0\})=\lambda(\{\theta\})=0$ for $\theta>0$.

[F4] [[thm-continuous-implies-integrable]], [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]], [[thm-ftc-second-part]], and [[lem-derivative-of-a-power]]: continuous functions on $[0,\theta]$ are Riemann integrable, their Riemann and Lebesgue integrals agree under countable choice, and antiderivatives evaluate the required polynomial integrals.

[F5] [[def-score-and-fisher-information]]: on the positive-density support, the score is the parameter derivative of the log density and information is the expected squared score.

[F6] [[def-moments-variance-and-covariance]]: variance and covariance are centered second moments.

[F7] [[thm-cramer-rao-lower-bound]]: the bound requires a mean-zero score and the score-covariance derivative identity; the fixed-support route is sufficient, not necessary.

[F8] [[def-derivative]]: the derivative is the limit of the difference quotient $(f(x)-f(c))/(x-c)$ at $c$.

## Counterexample

Assume AC. Let $\theta>0$ and $X\sim\mathrm{Unif}[0,\theta]$. Use the equivalent Lebesgue-density version $p_\theta(x)=\theta^{-1}\mathbf 1_{(0,\theta)}(x)$ with respect to Lebesgue measure, and set $T=2X$, estimating $\psi(\theta)=\theta$. The positive-density set $(0,\theta)$ changes with $\theta$.

**Proof technique:** direct.

1.1 By [F3], the endpoint singletons have measure zero and $\lambda((0,\theta))=\theta$, so this density version gives the law $\mathrm{Unif}[0,\theta]$ and has total mass one. Using [F2] for the nonnegative functions $2x$ and $(2x-\theta)^2$, then [F4] to evaluate their integrals, gives $\mathbb E_\theta T=\theta^{-1}\int_0^\theta2x\,dx=\theta$ and $\operatorname{Var}_\theta(T)=\mathbb E_\theta[(2X-\theta)^2]=\theta^{-1}\int_0^\theta(2x-\theta)^2\,dx=\theta^{-1}\left[\frac43x^3-2\theta x^2+\theta^2x\right]_0^\theta=\frac{\theta^2}{3}$. Thus $T$ is unbiased for $\psi(\theta)=\theta$ and has variance $\theta^2/3$. [A1, F1, F2, F3, F4, F6, given, algebra]

2.1 For $0<x<\theta$, $\ell_\theta(x)=-\log\theta$, so $S_\theta(x)=-1/\theta$. Therefore $I(\theta)=\mathbb E_\theta S_\theta^2=1/\theta^2$ but $\mathbb E_\theta S_\theta=-1/\theta\ne0$. Since the score is constant $P_\theta$-almost surely, $\operatorname{Cov}_\theta(T,S_\theta)=0$. On $\Theta=(0,\infty)$, $\psi(\theta)=\theta$ has difference quotient $1$ at every $x\ne\theta$, so [F8] gives $\psi'(\theta)=1$. Both score identities needed for [F7] fail here. [F5, F6, F7, F8, step 1.1, given, algebra]

3.1 The formula obtained by ignoring those failures would give $\psi'(\theta)^2/I(\theta)=\theta^2$, contradicting the actual $\operatorname{Var}_\theta(T)=\theta^2/3$ from step 1.1. This does not contradict [F7]: the moving support violates its regularity route, and the score-mean and covariance-derivative hypotheses fail explicitly in step 2.1. [F7, step 1.1, step 2.1, given, algebra] ∎
