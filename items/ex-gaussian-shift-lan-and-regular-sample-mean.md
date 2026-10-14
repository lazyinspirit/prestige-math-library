---
id: ex-gaussian-shift-lan-and-regular-sample-mean
kind: example
title: Gaussian shift LAN and the regular sample mean
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 7
deps:
  - def-qmd-path
  - def-likelihood-density
  - thm-qmd-implies-lan-for-iid
  - def-lan-experiment
  - def-regular-estimator-under-local-alternatives
  - def-standard-normal-and-normal-laws
  - lem-normal-density-has-total-mass-one
  - lem-characteristic-function-of-a-normal-law
  - lem-characteristic-functions-under-affine-maps-and-independent-sums
  - thm-uniqueness-of-a-law-from-its-characteristic-function
  - thm-dominated-convergence
  - thm-derivative-of-exponential
  - thm-chain-rule
  - thm-ftc-first-part
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: Peter Bartlett, Theoretical Statistics, Stat 210B Lecture 23, PDF pp. 2–3 and 6–9
      url: https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/23notes.pdf
    - title: John Duchi, A few notes on contiguity, asymptotics, and local asymptotic normality, §2.1
      url: https://web.stanford.edu/class/stats300b/Notes/contiguity-and-asymptotics.pdf
---

## Statement

Let $X_1,\ldots,X_n$ be IID $N(\theta,1)$ and take $\theta_0=0$. This
one-dimensional model is QMD at zero with score $s(x)=x$ and information
$I=1$. For every fixed $h$, the local laws $P_{n,h}=N(h/\sqrt n,1)^{\otimes n}$
are exactly dominated by $P_{n,0}$ and
$$\log\frac{dP_{n,h}}{dP_{n,0}}(X_1,\ldots,X_n) =h\Delta_n-\tfrac12h^2,\qquad \Delta_n=\frac1{\sqrt n}\sum_{i=1}^nX_i.$$
The sample mean estimator is regular, with
$$\sqrt n\left(\bar X_n-\frac h{\sqrt n}\right)\Rightarrow N(0,1)$$
under $P_{n,h}$ for each fixed $h$.

## Facts & Assumptions

**Given:** AC; the standard normal density $\phi(x)=(2\pi)^{-1/2}e^{-x^2/2}$;
independent observations; and the definitions of QMD, LAN, and regularity.

[A1] [[def-axiom-of-choice]]: AC is assumed by the normal-law and
characteristic-function uniqueness suppliers.

[F1] [[def-standard-normal-and-normal-laws]] and
[[lem-normal-density-has-total-mass-one]]: The density $\phi$ defines the
probability law $N(0,1)$.

[F2] [[lem-characteristic-function-of-a-normal-law]]: If $X\sim N(m,\sigma^2)$,
then $EX=m$, $\operatorname{Var}(X)=\sigma^2$, and its characteristic
function is $\exp(imt-\sigma^2t^2/2)$.

[F3] [[lem-characteristic-functions-under-affine-maps-and-independent-sums]]:
The characteristic function of an independent sum is the product of the
component characteristic functions, with the corresponding affine scaling.

[F4] [[thm-uniqueness-of-a-law-from-its-characteristic-function]]: Probability
laws with the same characteristic function are equal.

[F5] [[thm-dominated-convergence]]: A pointwise limit dominated in absolute
value by one integrable function passes through the Lebesgue integral.

[F6] [[thm-derivative-of-exponential]] and [[thm-chain-rule]]: The real
exponential differentiates by itself, and derivatives of compositions obey
the chain rule.

[F7] [[thm-ftc-first-part]]: Integrating a continuous derivative along an
interval recovers the endpoint difference.

[F9] [[def-qmd-path]], [[def-lan-experiment]], and
[[def-regular-estimator-under-local-alternatives]]: QMD is the square-root
density $L^2$ expansion, LAN is the local likelihood expansion with Gaussian
central sequence, and regularity requires one common centered limit law for
each fixed local $h$.

[F10] [[thm-qmd-implies-lan-for-iid]]: A QMD IID model has the LAN expansion
with its score and information, using mean-one proxies when needed.

[F11] [[def-likelihood-density]]: The Gaussian densities used here are
measurable densities with respect to Lebesgue measure and give the stated
probability laws by integration.

## Proof

**Proof technique:** verify square-root differentiability and compute the
local likelihood ratio exactly.

1.1 Let $g_\theta(x)=\sqrt{\phi(x-\theta)} =(2\pi)^{-1/4}e^{-(x-\theta)^2/4}$. By [F6] its derivative is $\partial_\theta g_\theta(x)=\tfrac12(x-\theta)g_\theta(x)$, so $\partial_\theta g_0(x)=\tfrac12xg_0(x)$. For $|\theta|\le1$, $|\partial_\theta g_\theta(x)| \le C(1+|x|)e^{-((|x|-1)_+)^2/4}=:G(x),$ whose square is integrable: it is bounded on $[-2,2]$, and for $|x|\ge2$ it is bounded by $C'(1+x^2)e^{-x^2/8}$. Substituting $x=2y$ reduces the tail integral to a constant times $\int(1+4y^2)e^{-y^2/2}dy$, finite by the second moment statement in [F2]. By [F7], $(g_t-g_0)/t=\int_0^1\partial_\theta g_{rt}\,dr$; this converges pointwise to $\tfrac12xg_0$. Its difference is bounded by $2G$, so [F5] applied to the squared difference gives convergence in $L^2(dx)$. Thus the QMD residual has norm $o(|t|)$, which is exactly the scalar QMD condition. [F1, F2, F5, F6, F7, F11, given, algebra]

1.2 The density ratio is $\prod_{i=1}^n\frac{\phi(X_i-h/\sqrt n)}{\phi(X_i)} =\exp\!\left(\frac h{\sqrt n}\sum_{i=1}^nX_i-\frac{h^2}{2}\right).$ Each density is positive, so this is a full mean-one likelihood ratio. By [F2]–[F4], the characteristic function of $\Delta_n$ is $\prod_{i=1}^n\exp\left(-\frac{t^2}{2n}\right)=e^{-t^2/2},$ so $\Delta_n\sim N(0,1)$ exactly. Comparing with [F9] proves exact LAN with $K=1$ and no remainder. [F1, F2, F3, F4, F9, F11, given, algebra]

2.1 The score is $s(x)=x$. By [F2], $E_0s=0$ and $E_0s^2=1$, so the information is $I=1$. By [F10], the general QMD-to-LAN result applies and predicts the same score and information; the direct computation below also shows the proxy is the exact alternative law. [F2, F10, step 1.1, algebra]

3.1 Under $P_{n,h}$, the variables $X_i-h/\sqrt n$ are IID $N(0,1)$. The same characteristic-function product using [F3]–[F4] gives $\sqrt n\left(\bar X_n-\frac h{\sqrt n}\right) =\frac1{\sqrt n}\sum_i(X_i-h/\sqrt n)\sim N(0,1)$ exactly, which implies the displayed convergence. The limiting law does not depend on fixed $h$, which is regularity by [F9]. The calculation includes $h=0$ and every finite $h$. [A1, F2, F3, F4, F9, given, algebra] ∎

