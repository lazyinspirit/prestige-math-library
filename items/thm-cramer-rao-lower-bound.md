---
id: thm-cramer-rao-lower-bound
kind: theorem
title: "Scalar Cramér–Rao lower bound"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 7
deps:
  - def-axiom-of-choice
  - def-score-and-fisher-information
  - thm-score-mean-zero-and-information-identity
  - def-unbiased-estimator-and-umvu
  - def-statistic-and-estimator
  - def-likelihood-density
  - thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality
  - def-measure-with-density
  - thm-integration-against-a-density
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-moments-variance-and-covariance
  - def-integrable-real-and-complex-functions-and-their-integrals
  - def-l-p-space-as-a-quotient-by-null-functions
  - def-measure-null-set-and-almost-everywhere
  - def-inner-product-space
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
  - thm-nonnegative-integral-zero-iff-zero-almost-everywhere
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - cor-mean-value-theorem
  - thm-dominated-convergence
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "George Deligiannidis, SB2.1 Foundations of Statistical Inference, Theorem 5.3 and proof, PDF pp. 29–31"
      url: "https://www.stats.ox.ac.uk/~deligian/pdf/sb21/sb21_notes.pdf"
    - title: "Peter Kempthorne, MIT 18.655 Lecture 13: Unbiased Estimation and Risk Inequalities, Theorem 3.4.1 and proof, PDF pp. 10–11"
      url: "https://ocw.mit.edu/courses/18-655-mathematical-statistics-spring-2016/9e3152248b9f79ea4d5cfaae9f31c21b_MIT18_655S16_LecNote13.pdf"
---

## Statement

Assume AC for the selected density representatives. Let $\Theta$ be an open
interval, fix $\theta\in\Theta$, and let $\psi:\Theta\to\mathbb R$ be
differentiable at $\theta$. Let $T$ be a real-valued estimator
([[def-statistic-and-estimator]]) with
$\mathbb E_\eta T=\psi(\eta)$ on a neighborhood of $\theta$ and
$\mathbb E_\theta[T^2]<\infty$. Let the score $S_\theta$ have
$\mathbb E_\theta S_\theta=0$ and Fisher information
$I(\theta)=\mathbb E_\theta S_\theta^2\in(0,\infty)$. If
$$\operatorname{Cov}_\theta(T,S_\theta)=\psi'(\theta),$$
then
$$\operatorname{Var}_\theta(T)\ge\frac{\psi'(\theta)^2}{I(\theta)}.$$
Equality holds exactly when
$$T-\psi(\theta)=\frac{\psi'(\theta)}{I(\theta)}S_\theta \quad P_\theta\text{-almost surely}.$$

The covariance identity is an explicit hypothesis. One sufficient way to
establish it is to assume the regularity hypotheses of
[[thm-score-mean-zero-and-information-identity]] on a neighborhood, together
with a neighborhood $V$ of $\theta$, a nonnegative integrable $H$, and one $\mu$-null
set $N_H$ such that $|T(x)\partial_\eta p_\eta(x)|\leq H(x)$ for every
$x\notin N_H$ and every $\eta\in V$. The mean value theorem and dominated
convergence then differentiate $\mathbb E_\eta T=\int T p_\eta\,d\mu$ and
give the covariance identity. This is only one sufficient regularity route; the bound
itself does not require common support if its score and covariance identities
have been established by another valid argument. The theorem's hypotheses
also include every finite-variance unbiased estimator in the sense of
[[def-unbiased-estimator-and-umvu]] whenever its score-covariance identity
holds.

## Facts & Assumptions

**Given:** AC; an open scalar parameter interval and a fixed $\theta\in\Theta$; a measurable real estimator $T$ with $\mathbb E_\eta T=\psi(\eta)$ locally, finite $\mathbb E_\theta T^2$, and differentiable $\psi$; a score $S_\theta$ with $\mathbb E_\theta S_\theta=0$, $I(\theta)=\mathbb E_\theta S_\theta^2\in (0,\infty)$; and the score-covariance identity $\operatorname{Cov}_\theta(T,S_\theta)=\psi'(\theta)$. Alternatively, assume the sufficient common-support density and integrable-envelope route stated above.

[A1] [[def-axiom-of-choice]]: AC says every family of nonempty sets has a choice function; it supplies the density representatives used by the score definition.

[F1] [[def-score-and-fisher-information]]: on positive support, $S_\theta=\partial_\theta\log p_\theta$ and $I(\theta)=\mathbb E_\theta S_\theta^2$.

[F2] [[thm-score-mean-zero-and-information-identity]]: under the displayed common-support and derivative-envelope hypotheses, the score has mean zero and the information identity holds.

[F3] [[def-statistic-and-estimator]]: an estimator is a measurable statistic with the target measurable space specified.

[F4] [[def-moments-variance-and-covariance]]: for square-integrable real random variables, variance is $\mathbb E[(T-\mathbb ET)^2]$ and covariance is $\mathbb E[(T-\mathbb ET)(S-\mathbb ES)]$.

[F5] [[def-l-p-space-as-a-quotient-by-null-functions]] and [[def-measure-null-set-and-almost-everywhere]]: $L^2(P_\theta)$ consists of square-integrable real functions modulo equality $P_\theta$-almost everywhere.

[F6] [[thm-linearity-of-the-lebesgue-integral-on-l-one]] and [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]: expectations are linear on integrable functions, and a nonnegative function with integral zero vanishes almost everywhere.

[F7] [[def-inner-product-space]]: a real inner product is a symmetric bilinear positive-definite pairing.

[F8] [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]: in a real inner product space, Cauchy–Schwarz holds, with equality exactly when the two vectors are linearly dependent.

[F9] [[cor-mean-value-theorem]] and [[thm-dominated-convergence]]: a differentiable parameter function has its difference quotient bounded by a derivative bound on the segment, and an integrable majorant permits the limit to pass through the integral.

[F10] [[def-likelihood-density]]: $p_\eta$ is a selected RN density representative of the sampling law.

[F11] [[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]]: the selected RN density satisfies $P_\eta(A)=\int_Ap_\eta\,d\mu$.

[F12] [[def-measure-with-density]] and [[thm-integration-against-a-density]] and [[def-integrable-real-and-complex-functions-and-their-integrals]]: for the density law $P_\eta=p_\eta\,d\mu$, the density identity holds for nonnegative $g$. For real integrable $g$, applying the nonnegative identity to $g^+$ and $g^-$ gives the signed identity; applying it to $|g|$ verifies that $gp_\eta$ is integrable.

[F13] [[def-unbiased-estimator-and-umvu]]: unbiasedness means integrability and $\mathbb E_\eta T=\psi(\eta)$ at every parameter; finite-variance unbiasedness also requires $T\in L^2(P_\eta)$ at every parameter.

## Proof

**Proof technique:** direct.

1.1 Every globally finite-variance unbiased estimator in [F13] satisfies the theorem's local mean and second-moment hypotheses. For the stated broader class, if the score-covariance identity is assumed directly, it is already available. Under the sufficient density route, linearity [F6] and [F12] give $$\frac{\psi(\theta+h_n)-\psi(\theta)}{h_n}=\int T(x)\frac{p_{\theta+h_n}(x)-p_\theta(x)}{h_n}\,d\mu.$$ The mean value theorem [F9] bounds the integrand by the common integrable envelope outside $N_H$; its pointwise limit is $T(x)\partial_\theta p_\theta(x)$. Dominated convergence [F9] therefore gives $\psi'(\theta)=\int T\,\partial_\theta p_\theta\,d\mu$. On the common positive support, [F1] gives $\partial_\theta p_\theta=p_\theta S_\theta$. The product $TS_\theta$ is integrable by $2|TS_\theta|\le T^2+S_\theta^2$. By [F10], [F11], and [F12], $P_\theta=p_\theta\,d\mu$ and $\int T\partial_\theta p_\theta\,d\mu=\mathbb E_\theta[T S_\theta]$. Since $\mathbb E_\theta S_\theta=0$ by [F2] and $\mathbb E_\theta T=\psi(\theta)$, [F4] identifies this with $\operatorname{Cov}_\theta(T,S_\theta)$. Thus either allowed route supplies the covariance identity. [A1, F1, F2, F3, F4, F6, F9, F10, F11, F12, F13, given, choose]

2.1 Put $U=T-\psi(\theta)$. The $P_\theta$-almost-everywhere classes of $U$ and $S_\theta$ lie in $L^2(P_\theta)$ by [F4]–[F5]. Their product is integrable since $2|US_\theta|\le U^2+S_\theta^2$. Expectation linearity [F6] and $\mathbb E_\theta S_\theta=0$ give $\langle U,S_\theta\rangle:=\mathbb E_\theta[US_\theta] =\operatorname{Cov}_\theta(T,S_\theta)=\psi'(\theta)$. The pairing $\langle V,W\rangle=\mathbb E_\theta[VW]$ is an inner product on these classes: symmetry and bilinearity follow from [F6], and positive definiteness follows from [F6]. [F4, F5, F6, F7, step 1.1, given, algebra]

3.1 By Cauchy–Schwarz [F8] in this real inner product space, $\psi'(\theta)^2=|\langle U,S_\theta\rangle|^2 \le\langle U,U\rangle\langle S_\theta,S_\theta\rangle =\operatorname{Var}_\theta(T)I(\theta)$. Divide by $I(\theta)>0$ to obtain the stated lower bound. [F4, F8, step 2.1, given, algebra]

4.1 Since $I(\theta)>0$, equality in step 3.1 holds exactly when the $L^2(P_\theta)$ classes of $U$ and $S_\theta$ are linearly dependent [F8]. Taking their inner product with $S_\theta$ and using step 2.1 fixes the coefficient as $\psi'(\theta)/I(\theta)$; conversely that relation gives equality by direct substitution. This is precisely the asserted almost-sure equality condition. [F8, step 2.1, step 3.1, given, algebra] ∎
