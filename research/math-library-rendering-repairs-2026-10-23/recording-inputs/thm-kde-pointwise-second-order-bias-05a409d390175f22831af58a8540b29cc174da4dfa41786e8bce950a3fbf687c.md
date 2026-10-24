---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/thm-kde-pointwise-second-order-bias.json
  precheck: pass
id: thm-kde-pointwise-second-order-bias
kind: theorem
title: "Pointwise second-order bias of the KDE"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 6
deps:
  - def-density-target-and-kernel-density-estimator
  - lem-kde-evaluation-is-a-measurable-statistic
  - lem-c2-density-with-bounded-hessian-is-bounded
  - def-identically-distributed-and-iid-random-variables
  - thm-change-of-variables-for-expectation
  - thm-integration-against-a-density
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - cor-c-one-change-of-variables-for-l-one-functions
  - thm-chain-rule-for-total-derivatives
  - thm-integration-by-parts
  - thm-ftc-second-part
  - def-countable-choice
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-dominated-convergence
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Whitney K. Newey, Nonparametric and Semiparametric Estimation, MIT OpenCourseWare 14.385, Fall 2007, Proposition 1, PDF p. 3"
      url: "https://ocw.mit.edu/courses/14-385-nonlinear-econometric-analysis-fall-2007/655fcef1b4192f40d80edea3c1dd85ce_notes_nonsemi.pdf"
    - title: "Adrian Bowman and Ludger Evers, Nonparametric Smoothing, APTS 2013–14 course notes, §1.2.1, PDF p. 8"
      url: "https://warwick.ac.uk/fac/sci/statistics/apts/students/resources-1314/ns_notes.pdf"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $X_1,\ldots,X_n$ be iid with a Borel
probability density version $f$ on $\mathbb R^d$. Let
$K:\mathbb R^d\to\mathbb R$ be Borel with $K\in L^1\cap L^2$,
$\int K(u)du=1$, $\int u_jK(u)du=0$ for each $j$, and
$\int|K(u)|\|u\|^2du<\infty$. Suppose $f$ has continuous second partial
derivatives and a globally bounded continuous Hessian. At each fixed
$x\in\mathbb R^d$, as $h\downarrow0$,
$$\mathbb E\widehat f_h(x)-f(x) =\frac{h^2}{2}\sum_{j,k=1}^d\mu_{jk}\,\partial_{jk}f(x)+o(h^2), \qquad \mu_{jk}:=\int_{\mathbb R^d}u_ju_kK(u)du.$$
Here $r(h)=o(h^2)$ means $r(h)/h^2\to0$ as $h\downarrow0$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $d,n\ge1$, iid $X_i$ with density version $f$, a normalized kernel $K$ with the stated integrability and moment conditions, fixed $x$, and $h>0$.

[A1] The Axiom of Countable Choice, written $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[F1] The kernel estimate is $(nh^d)^{-1}\sum_iK((x-X_i)/h)$; the density version is nonnegative, Borel and integrates to one ([[def-density-target-and-kernel-density-estimator]]).

[F2] Each fixed-$x$ evaluation is a measurable real statistic ([[lem-kde-evaluation-is-a-measurable-statistic]]).

[F3] A nonnegative $C^2$ density with bounded Hessian is bounded ([[lem-c2-density-with-bounded-hessian-is-bounded]]).

[F4] Iid random elements are mutually independent and have the same law ([[def-identically-distributed-and-iid-random-variables]]).

[F5] Expectation is integration against the law, and integration against $f\,d\lambda_d$ is integration of the product with $f$ for nonnegative integrands ([[thm-change-of-variables-for-expectation]], [[thm-integration-against-a-density]]).

[F6] Under $\mathrm{AC}_\omega$, the C$^1$ diffeomorphism $u\mapsto x-hu$ permits substitution for nonnegative integrands and for integrable signed integrands ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]], [[cor-c-one-change-of-variables-for-l-one-functions|A $C^1$ diffeomorphism satisfies the change-of-variables formula for $L^1$ functions]]).

[F7] The Lebesgue integral is linear on $L^1$ ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[F8] Dominated convergence applies to a pointwise convergent family with one integrable majorant ([[thm-dominated-convergence]]).

[F9] The total-derivative chain rule differentiates a smooth function along an affine line, and integration by parts plus the second fundamental theorem evaluates the integral Taylor remainder ([[thm-chain-rule-for-total-derivatives]], [[thm-integration-by-parts]], [[thm-ftc-second-part]]).

## Proof


1.1 By [F2], $Z_i:=K((x-X_i)/h)$ is a measurable real random variable. By [F3], $f$ is bounded. Applying [F5] to $|Z_i|$, then [F6] to $u\mapsto x-hu$, gives $\mathbb E|Z_i|=\int|K((x-t)/h)|f(t)dt =h^d\int|K(u)|f(x-hu)du \le h^d\|f\|_\infty\|K\|_1<\infty.$ Thus every $Z_i$ is integrable. Put $g(t)=K((x-t)/h)$ and $g^+=\max(g,0)$, $g^-=\max(-g,0)$. Both parts are nonnegative and their density integrals are finite, being bounded by the absolute integral just established. Apply [F5] separately to $g^+$ and $g^-$, then subtract their finite integrals using [F7]: $\mathbb EZ_i=\int g^+f-\int g^-f=\int gf$. This derives the signed density identity without applying the nonnegative density theorem directly to $g$. Since the $X_i$ have the same law, the $Z_i$ have the same expectation. Linearity [F7] and the signed substitution in [F6] therefore yield $\mathbb E\widehat f_h(x)=\frac1{h^d}\mathbb E Z_1 =\int_{\mathbb R^d}K(u)f(x-hu)du.$ [given, A1, F1, F2, F3, F4, F5, F6, F7]

1.2 For fixed $u$, set $q(t)=f(x-thu)$ on $[0,1]$. By [F9], $q'(0)=-h\nabla f(x)\cdot u$ and $q''(t)=h^2u^TD^2f(x-thu)u$. Integration by parts with $1-t$ and $q'$, then the second fundamental theorem, gives $f(x-hu)=f(x)-h\nabla f(x)\cdot u+ h^2\int_0^1(1-t)u^TD^2f(x-thu)u\,dt.$ For $u\ne0$, subtracting $\frac{h^2}{2}u^TD^2f(x)u$ defines a remainder $h^2\|u\|^2\rho(h,u)$, where $\rho(h,u)=\int_0^1(1-t) \frac{u^T(D^2f(x-thu)-D^2f(x))u}{\|u\|^2}dt.$ Continuity of the Hessian at $x$ gives $\rho(h,u)\to0$ for each fixed $u$; the global Hessian bound gives $|\rho(h,u)|\le H$ uniformly in $h,u$. Set $\rho(h,0)=0$. [given, F9, algebra]

2.1 Substitute the expansion from step 1.2 into the convolution in step 1.1. The first moments are absolutely integrable because $|u_j|\le1+\|u\|^2$ and $K\in L^1$ with finite second absolute moment, so unit mass cancels $f(x)$ and the zero first moments cancel the linear term. The remaining quadratic term is $\frac{h^2}{2}\sum_{j,k}\mu_{jk}\partial_{jk}f(x)$. Moreover, $|K(u)|\|u\|^2H$ is integrable and dominates the scaled remainder. Applying [F8] as $h\downarrow0$ shows that the remainder divided by $h^2$ tends to zero. The second moments $\mu_{jk}$ are absolutely finite by the same integrable moment condition. [step 1.1, step 1.2, F8, algebra] ∎

