---
id: thm-kde-pointwise-variance
kind: theorem
title: "Pointwise variance of the KDE"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 6
deps:
  - def-density-target-and-kernel-density-estimator
  - lem-kde-evaluation-is-a-measurable-statistic
  - def-identically-distributed-and-iid-random-variables
  - lem-measurable-functions-preserve-independence
  - thm-factorization-of-expectations-for-independent-variables
  - def-moments-variance-and-covariance
  - thm-change-of-variables-for-expectation
  - thm-integration-against-a-density
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - cor-c-one-change-of-variables-for-l-one-functions
  - def-countable-choice
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-dominated-convergence
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Whitney K. Newey, Nonparametric and Semiparametric Estimation, MIT OpenCourseWare 14.385, Fall 2007, Proposition 2, PDF p. 4"
      url: "https://ocw.mit.edu/courses/14-385-nonlinear-econometric-analysis-fall-2007/655fcef1b4192f40d80edea3c1dd85ce_notes_nonsemi.pdf"
    - title: "Adrian Bowman and Ludger Evers, Nonparametric Smoothing, APTS 2013–14 course notes, §1.2.1, PDF p. 8"
      url: "https://warwick.ac.uk/fac/sci/statistics/apts/students/resources-1314/ns_notes.pdf"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $X_1,\ldots,X_n$ be iid with bounded
continuous Borel density version $f$ on $\mathbb R^d$. Let
$K:\mathbb R^d\to\mathbb R$ be Borel, $K\in L^1\cap L^2$, and
$\int K(u)du=1$. For fixed $x\in\mathbb R^d$, along bandwidths $h=h_n>0$
with $h_n\to0$ and $nh_n^d\to\infty$,
$$\operatorname{Var}(\widehat f_{h_n}(x)) =\frac{f(x)\|K\|_2^2}{nh_n^d}+o((nh_n^d)^{-1}).$$

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, iid $X_1,\ldots,X_n$ with bounded continuous density version $f$, a Borel kernel $K\in L^1\cap L^2$ with unit integral, a fixed $x$, and $h_n\to0$, $nh_n^d\to\infty$.

[A1] The Axiom of Countable Choice, written $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[F1] The fixed-point estimate is $\widehat f_h(x)=(nh^d)^{-1}\sum_iK((x-X_i)/h)$ ([[def-density-target-and-kernel-density-estimator]]).

[F2] Its fixed-point evaluations are measurable ([[lem-kde-evaluation-is-a-measurable-statistic]]).

[F3] The $X_i$ are independent and identically distributed random elements ([[def-identically-distributed-and-iid-random-variables]]).

[F4] Measurable functions of independent random elements remain independent ([[lem-measurable-functions-preserve-independence]]).

[F5] Expectations of integrable products of independent real random variables factor ([[thm-factorization-of-expectations-for-independent-variables]]).

[F6] For a square-integrable real random variable, $\operatorname{Var}(Z)=\mathbb E[(Z-\mathbb EZ)^2]$ ([[def-moments-variance-and-covariance]]).

[F7] Expectation is integration against the law, and a density law satisfies $\int g\,d(f\lambda_d)=\int gf\,d\lambda_d$ for nonnegative measurable $g$ ([[thm-change-of-variables-for-expectation]], [[thm-integration-against-a-density]]).

[F8] Under $\mathrm{AC}_\omega$, nonnegative C$^1$ substitutions obey the Lebesgue change-of-variables formula ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]).

[F9] Under $\mathrm{AC}_\omega$, a C$^1$ diffeomorphism obeys the change-of-variables formula for integrable functions ([[cor-c-one-change-of-variables-for-l-one-functions]]).

[F10] Dominated convergence applies under the integrable majorant $\|f\|_\infty K^2$ ([[thm-dominated-convergence]]).

[F11] Expectation is linear for finite sums of integrable variables ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

## Proof


1.1 Put $Z_i=K((x-X_i)/h)$. By [F2] and [F7], and using the nonnegative substitution $u\mapsto x-hu$ from [F8], $\mathbb E[Z_i^2]=h^d\int K(u)^2f(x-hu)du \le h^d\|f\|_\infty\|K\|_2^2<\infty.$ Likewise $\mathbb E|Z_i|\le h^d\|f\|_\infty\|K\|_1<\infty$, so each $Z_i$ is integrable and square-integrable. The maps $z\mapsto K((x-z)/h)$ preserve independence by [F4]; identical laws of $X_i$ give identical laws of $Z_i$. [given, A1, F1, F2, F3, F4, F7, F8]

2.1 Let $W_i=Z_i-\mathbb E Z_i$. For $i\ne j$, [F5] applied to the independent integrable variables $W_i,W_j$ gives $\mathbb E[W_iW_j]=\mathbb E[W_i]\mathbb E[W_j]=0$. Expanding the finite square and using expectation linearity [F11] therefore gives $\operatorname{Var}(\widehat f_h(x)) =\frac{1}{nh^{2d}}\left(\mathbb E[Z_1^2]-(\mathbb EZ_1)^2\right).$ [step 1.1, F3, F5, F6, F11, algebra]

3.1 Step 1.1 shows that $t\mapsto K((x-t)/h)f(t)$ is integrable. Put $g(t)=K((x-t)/h)$ and decompose $g=g^+-g^-$ into its nonnegative parts. The density integrals of both parts are finite because $\int|g|f<\infty$ by step 1.1. Apply the nonnegative density identity [F7] to each part and subtract using [F11], obtaining $\mathbb EZ_1=\int gf$. Applying the signed substitution [F9] to this integrable product gives $\mathbb E Z_1=h^d\int K(u)f(x-hu)du$, so $|\mathbb EZ_1|\le h^d\|f\|_\infty\|K\|_1$. Along any sequence $h_n\to0$, [F10] gives $\int K(u)^2f(x-h_nu)du\longrightarrow f(x)\|K\|_2^2.$ Thus the first term in step 2.1 is $f(x)\|K\|_2^2/(nh_n^d)+o((nh_n^d)^{-1})$. The subtracted mean-square term is $O(n^{-1})=o((nh_n^d)^{-1})$ because $h_n^d\to0$. The additional $nh_n^d\to\infty$ condition places the expansion in the vanishing-variance regime. This proves the formula. [step 1.1, step 2.1, F7, F9, F10, F11, algebra] ∎

