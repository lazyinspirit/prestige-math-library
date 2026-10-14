---
id: ex-finite-bandwidth-kde-smoothing
kind: example
title: "Finite-bandwidth Gaussian smoothing"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 6
deps:
  - def-density-target-and-kernel-density-estimator
  - lem-kde-evaluation-is-a-measurable-statistic
  - thm-change-of-variables-for-expectation
  - thm-integration-against-a-density
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - lem-plane-gaussian-integral-in-polar-coordinates
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Whitney K. Newey, Nonparametric and Semiparametric Estimation, MIT OpenCourseWare 14.385, Fall 2007, PDF pp. 1–3"
      url: "https://ocw.mit.edu/courses/14-385-nonlinear-econometric-analysis-fall-2007/655fcef1b4192f40d80edea3c1dd85ce_notes_nonsemi.pdf"
    - title: "Adrian Bowman and Ludger Evers, Nonparametric Smoothing, APTS 2013–14 course notes, §1.2.4, PDF p. 11"
      url: "https://warwick.ac.uk/fac/sci/statistics/apts/students/resources-1314/ns_notes.pdf"
---

## Example

Let $\tau>0$ and
$$f_\tau(x)=(2\pi\tau^2)^{-d/2} \exp\!\left(-\frac{\|x\|^2}{2\tau^2}\right),\qquad K_d(u)=(2\pi)^{-d/2}e^{-\|u\|^2/2}.$$
For every fixed bandwidth $h>0$,
$$\mathbb E\widehat f_h(x) =(2\pi(\tau^2+h^2))^{-d/2} \exp\!\left(-\frac{\|x\|^2}{2(\tau^2+h^2)}\right).$$
Thus the expected estimate is the centered Gaussian density with covariance
$(\tau^2+h^2)I_d$, and at $x=0$ it is strictly smaller than $f(0)$.

## Facts & Assumptions

**Given:** $d,n\ge1$, $\tau,h>0$, iid observations with density $f_\tau$, and kernel $K_d$.

[A1] The Axiom of Countable Choice, written $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[F1] The KDE formula and density-based sample model ([[def-density-target-and-kernel-density-estimator]]).

[F2] Expectations are integrals against the sample law, which has density $f$ ([[thm-change-of-variables-for-expectation]], [[thm-integration-against-a-density]]).

[F3] The Lebesgue integral is linear on integrable functions ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[F4] The nonnegative plane Gaussian integral is $\int_{\mathbb R^2}e^{-(x^2+y^2)}d(x,y)=\pi$ ([[lem-plane-gaussian-integral-in-polar-coordinates]]).

[F5] Tonelli permits factoring nonnegative product integrals ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F6] Under $\mathrm{AC}_\omega$, affine C$^1$ substitutions obey the nonnegative change-of-variables formula ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]).

## Verification


1.1 Put $I=\int_{\mathbb R}e^{-t^2}dt$. Tonelli [F5] and [F4] give $I^2=\pi$, so $I=\sqrt\pi$. Scaling by $s=t/\sqrt2$ with [F6] yields $\int (2\pi)^{-1/2}e^{-t^2/2}dt=1$; repeated Tonelli gives $\int K_d=1$. Since $f_\tau(x)=\tau^{-d}K_d(x/\tau)$, [F6] with $x=\tau u$ gives $\int f_\tau=1$. [given, A1, F4, F5, F6, algebra]

2.1 By [F1] and [F2], expectation of one KDE summand is integration of its Gaussian kernel against $f_\tau$. The summand is bounded for fixed $h$, hence integrable. The integrand is nonnegative; using [F6] with $T(u)=x-hu$ changes variables to $\int K_d(u)f_\tau(x-hu)du$. All summands have this expectation, so linearity [F3] gives $\mathbb E\widehat f_h(x)=\int_{\mathbb R^d}K_d(u)f_\tau(x-hu)du.$ The integral is finite because both Gaussian densities are bounded and integrable. [given, A1, F1, F2, F3, F6, step 1.1]

3.1 In the integrand of step 2.1, combine exponents using $\|u\|^2+\tau^{-2}\|x-hu\|^2 =\frac{\tau^2+h^2}{\tau^2} \left\|u-\frac{h x}{\tau^2+h^2}\right\|^2 +\frac{\|x\|^2}{\tau^2+h^2}.$ The remaining translated Gaussian integral is $(2\pi\tau^2/ (\tau^2+h^2))^{d/2}$ by [F4], [F5], and affine scaling [F6]. Multiplying the normalizing constants gives the displayed formula. [step 1.1, A1, F4, F5, F6, algebra, step 2.1]

4.1 At $x=0$, $\mathbb E\widehat f_h(0)=(2\pi(\tau^2+h^2))^{-d/2} <(2\pi\tau^2)^{-d/2}=f(0),$ because $h>0$. Therefore a finite positive bandwidth has nonzero bias in this example. [step 3.1, algebra] ∎

