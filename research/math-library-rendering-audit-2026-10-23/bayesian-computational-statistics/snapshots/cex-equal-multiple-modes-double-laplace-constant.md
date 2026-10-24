---
id: cex-equal-multiple-modes-double-laplace-constant
kind: counterexample
title: Two equal modes contribute two Gaussian terms
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-countable-choice
  - def-higher-derivatives-and-smoothness
  - def-hessian-and-euclidean-critical-point
  - thm-additivity-over-subintervals
  - thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral
  - thm-continuous-implies-integrable
  - thm-laplace-approximation-under-unique-interior-maximum
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice is inherited from the Laplace theorem and the Riemann-to-Lebesgue integral comparison; no full Axiom of Choice is used."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "NIST Digital Library of Mathematical Functions, §2.3(iii), Laplace's Method"
      url: "https://dlmf.nist.gov/2.3"
      locator: "Section §2.3(iii), equations (2.3.13)–(2.3.18), for localization at dominant modes; the equal-mode sum is proved locally."
    - title: "Francis Bach, Approximating Integrals with Laplace's Method"
      url: "https://francisbach.com/laplace-method/"
      locator: "Opening discussion of a strict global minimizer and localization near the mode; the equal-mode sum is proved locally."
---

## Statement refuted

For every phase with two distinct equal-height nondegenerate interior maxima,
the Laplace term computed at either one of the maxima is asymptotic to the
whole integral.

## Facts & Assumptions

**Given:** $K=[-2,2]$, $h(x):=-(x^2-1)^2$, and the Riemann integral
$I_n:=\int_{-2}^{2}e^{nh(x)}\,dx$ for integers $n\ge1$.

[A1] [[def-countable-choice]]: every countable family of nonempty sets has a choice function.

[F1] [[thm-laplace-approximation-under-unique-interior-maximum]]: under its stated compactness, unique-mode, local quadratic, and global gap hypotheses, the integral is asymptotic to the amplitude at the mode times $e^{nh(\hat x)}(2\pi/n)^{1/2}/\sqrt{-h''(\hat x)}$ in dimension one.

[F2] [[thm-continuous-implies-integrable]]: a continuous real function on a closed bounded interval is Riemann integrable.

[F3] [[thm-additivity-over-subintervals]]: for an integrable function and $a<c<b$, $\int_a^b f=\int_a^c f+\int_c^b f$.

[F4] [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]: assuming Countable Choice, a bounded Riemann-integrable function on a closed interval is Lebesgue integrable there with the same integral.

[F5] [[def-hessian-and-euclidean-critical-point]]: in dimension one the Hessian is the second derivative.

[F6] [[def-higher-derivatives-and-smoothness]]: $C^3$ means the first three derivatives exist and are continuous.

## Proof

1.1 Factoring gives $h(x)=-(x-1)^2(x+1)^2\le0$, with equality exactly at $x=-1$ and $x=1$. Direct differentiation gives $h'(x)=-4x^3+4x$ and $h''(x)=4-12x^2$, so each mode is interior, has height $0$, and has negative Hessian $h''(\pm1)=-8$ by [F5]. [given, F5, algebra]

1.2 On $K_-=[-2,0]$, the unique maximizer is $-1$. If $|x+1|\le1/2$, then $|x-1|\ge1$ and $h(x)\le-(x+1)^2$; if $x\in K_-\setminus B(-1,1/2)$, then $|x+1|\ge1/2$ and $|x-1|\ge1$, so $h(x)\le-1/4$. Thus the Laplace theorem's local quadratic and strict global gap conditions hold on $K_-$. [given, F1, algebra]

1.3 On $K_+=[0,2]$, the unique maximizer is $1$. If $|x-1|\le1/2$, then $|x+1|\ge1$ and $h(x)\le-(x-1)^2$; if $x\in K_+\setminus B(1,1/2)$, then $|x-1|\ge1/2$ and $|x+1|\ge1$, so $h(x)\le-1/4$. Both intervals are compact of positive length, the amplitude $a\equiv1$ is integrable and positive at the mode, and the polynomial $h$ is $C^3$ by [F6]. [given, F1, F2, F6, algebra]

2.1 Apply [F1] separately on $K_-$ and $K_+$. If $J_n^-:=\int_{K_-}e^{nh}\,d\lambda_1$ and $J_n^+:=\int_{K_+}e^{nh}\,d\lambda_1$, then $J_n^-\sim\sqrt\pi/(2\sqrt n)$ and $J_n^+\sim\sqrt\pi/(2\sqrt n)$, because each mode has height $0$ and $-h''=8$. [A1, F1, step 1.1, step 1.2, step 1.3, algebra]

3.1 By [F2] and [F4], the Riemann and Lebesgue integrals on each half agree; by [F3], $I_n=J_n^-+J_n^+$. Therefore $I_n\sim\sqrt\pi/\sqrt n$: dividing by $\sqrt\pi/\sqrt n$ gives half the sum of two ratios tending to $1$. [A1, F2, F3, F4, step 2.1, algebra]

4.1 A one-mode term is $\sqrt\pi/(2\sqrt n)$, while step 3.1 gives $I_n/(\sqrt\pi/(2\sqrt n))\to2$. This ratio is not $1$, so the statement refuted fails. [step 2.1, step 3.1, algebra] ∎
