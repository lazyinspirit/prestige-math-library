---
id: lem-positive-df-chi-square-has-density-and-regular-cdf
kind: lemma
title: "Positive-degree chi-square laws have a positive density and regular CDF"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-chi-square-law
  - def-countable-choice
  - def-multivariate-normal-law
  - def-polar-surface-measure-on-the-unit-sphere
  - def-standard-normal-and-normal-laws
  - lem-axiom-of-choice-implies-countable-choice
  - lem-normal-density-has-total-mass-one
  - thm-continuity-from-below-for-measures
  - thm-independent-random-elements-have-product-joint-law
  - thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Aditya Guntuboyina, UC Berkeley Stat 201A Fall 2019, Lecture Notes, §§5.5–5.6"
      url: "https://www.stat.berkeley.edu/~aditya/resources/FullLectureNotes201AFall2019.pdf"
    - title: "Yen-Chi Chen, UW STAT 512 Lecture 8: Linear Models and Multivariate Normal Distributions"
      url: "https://faculty.washington.edu/yenchic/20A_stat512/Lec8_Linear.pdf"
    - title: "Dmitry Panchenko, MIT 18.443 Statistics for Applications, Fall 2003, Lecture 16"
      url: "https://mitocw.ups.edu.ec/courses/mathematics/18-443-statistics-for-applications-fall-2003/lecture-notes/18443.pdf"
---

## Statement

Assume the Axiom of Choice. For every integer $k\ge1$, the law $\chi_k^2$ has density
$$
f_k(x)=c_k x^{k/2-1}e^{-x/2}\mathbf 1_{\{x>0\}},\qquad c_k=\frac{\sigma_{k-1}(S^{k-1})}{2(2\pi)^{k/2}}>0,
$$
where $\sigma_{k-1}$ is the polar surface measure on the unit sphere in $\mathbb R^k$. Consequently, $Q_k>0$ almost surely, and its cumulative distribution function is continuous on $\mathbb R$ and strictly increasing on $(0,\infty)$.

## Facts & Assumptions

**Given:** The Axiom of Choice and an integer $k\ge1$.

[A1] The Axiom of Choice implies Countable Choice, which is the hypothesis of the polar-coordinate theorem. [[def-axiom-of-choice]] [[lem-axiom-of-choice-implies-countable-choice]] [[def-countable-choice]]

[F1] The law $\chi_k^2$ is the law of $\|G\|^2$ for $G\sim N_k(0,I_k)$ with independent standard-normal coordinates. [[def-chi-square-law]] [[def-multivariate-normal-law]]

[F2] A standard normal coordinate has density $\phi(x)=(2\pi)^{-1/2}e^{-x^2/2}$ and total mass one. [[def-standard-normal-and-normal-laws]] [[lem-normal-density-has-total-mass-one]]

[F3] Independent random elements have the finite product of their marginal laws. [[thm-independent-random-elements-have-product-joint-law]]

[F4] Tonelli permits integration of nonnegative functions on sigma-finite products, and product Lebesgue measure agrees with Euclidean Lebesgue measure on Borel sets. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] [[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]]

[F5] For nonnegative Borel functions, polar coordinates give $\int_{\mathbb R^k} h(z)\,dz=\int_0^\infty\int_{S^{k-1}}h(r\omega)r^{k-1}\,d\sigma_{k-1}(\omega)\,dr$, with finite $\sigma_{k-1}$. [[thm-polar-coordinates-formula-for-lebesgue-measure]] [[def-polar-surface-measure-on-the-unit-sphere]]

[F6] Measures are continuous from below on increasing sequences of measurable sets. [[thm-continuity-from-below-for-measures]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 By [F1]–[F3], the joint law of $G$ is the finite product of the standard-normal coordinate laws. On every measurable rectangle, Tonelli and [F4] show that this product has density $\prod_{j=1}^k\phi(z_j)=(2\pi)^{-k/2}e^{-\|z\|^2/2}$ relative to $\lambda_k$; uniqueness of the finite product law extends the identity from rectangles to every Borel set. [A1, F1, F2, F3, F4]

2.1 For $t>0$, [F1], step 1.1 and [F5] give $\mathbb P(Q_k\le t)=(2\pi)^{-k/2}\sigma_{k-1}(S^{k-1})\int_0^{\sqrt t}e^{-r^2/2}r^{k-1}\,dr=c_k\int_0^t x^{k/2-1}e^{-x/2}\,dx$ by the substitution $x=r^2$. The radial integral is finite near zero because $k/2-1>-1$, and the polar measure is finite by [F5]. [F1, F2, F3, F4, F5, step 1.1, algebra]

3.1 The random variable $Q_k=\|G\|^2$ is finite everywhere, so the events $\{Q_k\le m\}$ increase to the whole probability space as $m\to\infty$. By [F6], their probabilities tend to $1$. If $\sigma_{k-1}(S^{k-1})$ were zero, step 2.1 would give zero probability for every finite $t$, a contradiction. Thus $c_k>0$. Step 2.1 then gives the density on $(0,\infty)$, and as $t\downarrow0$ its integral tends to zero; hence $\mathbb P(Q_k=0)\le\mathbb P(Q_k\le t)\to0$. Thus $Q_k>0$ almost surely. [F1, F5, F6, step 2.1]

4.1 The density in step 3.1 is locally integrable at zero and continuous and positive for $x>0$. Its integral over any interval $(a,b)\subset(0,\infty)$ is therefore positive, and its integral over a shrinking interval tends to zero. Thus the CDF is strictly increasing on $(0,\infty)$ and continuous at every positive $x$; step 2.1 also gives continuity at zero and no atom there. It is zero on $(-\infty,0]$. [step 2.1, step 3.1] ∎
