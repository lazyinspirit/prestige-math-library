---
id: thm-gaussian-tail-exponential-tilting
kind: theorem
title: Gaussian tail tilting is logarithmically efficient but not bounded-relative-error
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-rare-event-efficiency-criteria
  - def-standard-normal-and-normal-laws
  - def-axiom-of-choice
  - lem-standard-normal-mills-ratio
  - thm-ordinary-importance-sampling-is-unbiased
  - thm-ordinary-importance-sampling-finite-variance-under-weighted-second-moment
  - thm-iid-monte-carlo-mean-moments
proof_strategy: direct
axiom_use: "AC is inherited through the published standard-normal definition; the likelihood-ratio and moment calculations add no choice."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Gino Biondini, An Introduction to Rare Event Simulation and Importance Sampling, Handbook of Statistics 33, Chapter 2, ``3.1–3.4, 8"
      url: "https://www.math.buffalo.edu/~biondini/papers/handbookstatistics2015v33chapter2.pdf"
    - title: "Patrick Laub, Algorithms for Rare Event Estimation, Short Course, Lecture 1 Part 2, Exponential Tilting"
      url: "https://laub.au/rare-events/slides/L1ii.slides.html"
    - title: "NIST Digital Library of Mathematical Functions, `7.12(i), Equation (7.12.1)"
      url: "https://dlmf.nist.gov/7.12"
---

## Statement

Assume AC. Let $P=N(0,1)$, $A_a=[a,\infty)$, $p_a=P(A_a)=\bar\Phi(a)$, and $Q_a=N(a,1)$, for $a>0$. Let $Z_a=\mathbf1_{A_a}(X)\,dP/dQ_a(X)$ for $X\sim Q_a$, and let $\widehat p_{a,n}$ be the average of $n$ IID copies. Then
$
\mathbb E_{Q_a}[Z_a]=p_a,\qquad
\mathbb E_{Q_a}[Z_a^2]=e^{a^2}\bar\Phi(2a).
$
As $a\to\infty$, $\widehat p_{a,n}$ is logarithmically efficient, while its one-sample relative error grows asymptotically as $(\pi/2)^{1/4}\sqrt a$. In particular this tilt is not bounded-relative-error.

## Facts & Assumptions

**Given:** The standard-normal density and tail, the event $A_a$, the proposal $Q_a$, and $a>0$.

[A1] [[def-axiom-of-choice]]: AC is inherited through [[def-standard-normal-and-normal-laws]]; no further choice is used.

[F1] [[def-standard-normal-and-normal-laws]]: $N(0,1)$ has density $\phi(x)=e^{-x^2/2}/\sqrt{2\pi}$, and $N(a,1)$ is its translate by $a$.

[F2] [[lem-standard-normal-mills-ratio]]: $\bar\Phi(x)\sim\phi(x)/x$ and $\log\bar\Phi(x)\sim-x^2/2$ for $x\to\infty$.

[F3] [[def-rare-event-efficiency-criteria]]: Relative error is $\sqrt{\operatorname{Var}(Z_a)}/p_a$, and logarithmic efficiency is determined by $\log\mathbb E[Z_a^2]/\log(p_a^2)$.

[F4] [[thm-ordinary-importance-sampling-is-unbiased]]: Under the event-support and integrability hypotheses, the ordinary importance-sampling mean equals $p_a$.

[F5] [[thm-ordinary-importance-sampling-finite-variance-under-weighted-second-moment]]: A finite weighted second moment gives $\operatorname{Var}(Z_a)=\mathbb E[Z_a^2]-p_a^2$.

[F6] [[thm-iid-monte-carlo-mean-moments]]: For $n$ IID square-integrable contributions, the sample mean has mean $p_a$ and variance $\operatorname{Var}(Z_a)/n$.

## Proof

1.1 For every $x\in\mathbb R$, the density ratio is $\phi(x)/\phi(x-a)=\exp(-ax+a^2/2)$. The proposal has positive density on $A_a$, and $0\le Z_a\le e^{-a^2/2}$ on $A_a$, so the event-support and integrability hypotheses of [F4] hold. Hence $\mathbb E_{Q_a}Z_a=p_a$. [A1, F1, F4, given, algebra]

1.2 Direct integration gives $ \mathbb E_{Q_a}Z_a^2=\int_a^\infty e^{-2ax+a^2}\phi(x-a)\,dx. $ With $y=x-a$, the integrand becomes $e^{-2ay-a^2}\phi(y)=e^{a^2}\phi(y+2a)$; the integral is $e^{a^2}\bar\Phi(2a)$, which is finite for every $a>0$. [F1, given, algebra]

2.1 For the average of $n\ge1$ IID contributions, [F6] gives $$\mathbb E[\widehat p_{a,n}^2]=p_a^2+\frac{\mathbb E[Z_a^2]-p_a^2}{n},\qquad p_a^2\le\mathbb E[\widehat p_{a,n}^2]\le p_a^2+\mathbb E[Z_a^2].$$ By [F2], $\log p_a^2=-a^2+o(a^2)$ and $\log\mathbb E[Z_a^2]=a^2+\log\bar\Phi(2a)=-a^2+o(a^2)$. Therefore also $\log(p_a^2+\mathbb E[Z_a^2])=-a^2+o(a^2)$. The two bounds squeeze $\log\mathbb E[\widehat p_{a,n}^2]=-a^2+o(a^2)$, while $2\log p_a=-a^2+o(a^2)$. By [F3], the logarithmic-efficiency ratio tends to $1$. [F2, F3, F6, step 1.2, given, algebra]

3.1 Mills' equivalent in [F2] yields $ \frac{\mathbb E Z_a^2}{p_a^2}\sim \frac{e^{a^2}\phi(2a)/(2a)}{(\phi(a)/a)^2} =\sqrt{\pi/2}\,a. $ Using [F4] and [F5], $\operatorname{RE}(\widehat p_{a,1})^2=\mathbb E Z_a^2/p_a^2-1\sim\sqrt{\pi/2}\,a$; taking square roots gives the stated divergence. [F2, F4, F5, step 1.2, algebra] ∎

