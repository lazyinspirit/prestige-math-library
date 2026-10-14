---
id: lem-student-t-and-f-cdfs-are-continuous-and-strictly-increasing
kind: lemma
title: "Student t and Fisher F CDFs are continuous and strictly increasing on their supports"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-cumulative-distribution-function-of-a-random-variable
  - def-independent-random-elements
  - def-standard-normal-and-normal-laws
  - lem-axiom-of-choice-implies-countable-choice
  - lem-normal-density-has-total-mass-one
  - lem-positive-df-chi-square-has-density-and-regular-cdf
  - def-student-t-and-f-laws
  - thm-derivative-of-exponential
  - thm-continuity-from-below-for-measures
  - thm-dominated-convergence
  - thm-independent-random-elements-have-product-joint-law
  - thm-intermediate-value
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Dmitry Panchenko, MIT 18.443 Statistics for Applications, Fall 2003, Lectures 16–17"
      url: "https://mitocw.ups.edu.ec/courses/mathematics/18-443-statistics-for-applications-fall-2003/lecture-notes/18443.pdf"
    - title: "Joshua M. Tebbs, STAT 512 Lecture Notes, Chapter 8, §8.7.1"
      url: "https://people.stat.sc.edu/Tebbs/stat512/s24notes.pdf"
    - title: "Yen-Chi Chen, UW STAT 512 Lecture 8: Linear Models and Multivariate Normal Distributions"
      url: "https://faculty.washington.edu/yenchic/20A_stat512/Lec8_Linear.pdf"
---

## Statement

Assume the Axiom of Choice. For every $k\ge1$, the CDF of $t_k$ is continuous and strictly increasing on $\mathbb R$, is symmetric about zero, and has limits $0$ and $1$ at $-\infty$ and $+\infty$. For every $r,s\ge1$, the CDF of $F_{r,s}$ is continuous on $\mathbb R$, is zero on $(-\infty,0]$, and is strictly increasing on $(0,\infty)$ with limit $1$ at $+\infty$. Consequently, for each $u\in(0,1)$ each law has exactly one $u$-quantile on its support.

## Facts & Assumptions

**Given:** The Axiom of Choice, positive degrees of freedom, and the laws $t_k$ and $F_{r,s}$.

[A1] The Axiom of Choice covers the standard-normal law and implies the Countable Choice used in the normal-density supplier. [[def-axiom-of-choice]] [[lem-axiom-of-choice-implies-countable-choice]]

[F1] A standard normal has the strictly positive continuous density $\phi(x)=(2\pi)^{-1/2}e^{-x^2/2}$ with total mass one. [[def-standard-normal-and-normal-laws]] [[lem-normal-density-has-total-mass-one]] [[thm-derivative-of-exponential]]

[F2] The CDF of a real random variable is $F_X(x)=\mathbb P(X\le x)$. [[def-cumulative-distribution-function-of-a-random-variable]]

[F3] Positive-degree chi-square variables are positive almost surely and have CDFs continuous and strictly increasing on $(0,\infty)$. [[lem-positive-df-chi-square-has-density-and-regular-cdf]]

[F4] The t and F laws are ratios of independent normal and chi-square variables with positive degrees of freedom. [[def-student-t-and-f-laws]]

[F5] Dominated convergence passes limits through integrals with an integrable majorant. [[thm-dominated-convergence]]

[F6] Independent random elements have product joint law; Tonelli gives the iterated integral for nonnegative functions on the finite product spaces. [[thm-independent-random-elements-have-product-joint-law]] [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F7] Probabilities of increasing unions are the limits of the probabilities. [[thm-continuity-from-below-for-measures]]

[F8] A continuous real function on an interval takes every intermediate value. [[thm-intermediate-value]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 Let $\Phi$ be the standard-normal CDF. For $x<y$, [F1]–[F2] give $\Phi(y)-\Phi(x)=\int_x^y\phi(z)\,dz>0$. On every bounded interval $\phi$ is bounded, so $|\Phi(y)-\Phi(x)|\le M|y-x|$ there and $\Phi$ is continuous. The events $\{G\le m\}$ and $\{G>-m\}$ increase to the whole space as integer $m\to\infty$; [F7] and total mass one give the CDF limits $1$ and $0$. Thus $\Phi$ is continuous and strictly increasing on $\mathbb R$. [A1, F1, F2, F7, algebra]

1.2 For $x\le0$, $F_{r,s}(x)=0$ because its ratio is positive almost surely. For $x>0$, conditioning on $Q_s=q>0$ gives $F_{F_{r,s}}(x)=\int_{(0,\infty)}F_{\chi_r^2}(xrq/s)\,d\chi_s^2(q)$. If $x_j\to x>0$, continuity of the inner chi-square CDF and [F5] give continuity of this integral. If $0<x<y$, strict increase of the inner CDF on $(0,\infty)$ and positivity of $Q_s$ give a strict inequality between the two integrals. Dominated convergence as $x\downarrow0$ and $x\to\infty$ gives limits $0$ and $1$. Hence the F CDF is continuous on $\mathbb R$ and strictly increasing on $(0,\infty)$. [F3, F4, F5, F6]

2.1 On the product space defining $t_k$, condition on $Q_k=q>0$. Independence and [F6] give $F_{t_k}(x)=\int_{(0,\infty)}\Phi(x\sqrt{q/k})\,d\chi_k^2(q)$. If $x_j\to x$, the integrands converge pointwise and are bounded by $1$, so [F5] makes $F_{t_k}(x_j)\to F_{t_k}(x)$. If $x<y$, then $\Phi(y\sqrt{q/k})>\Phi(x\sqrt{q/k})$ for every $q>0$ by step 1.1, and [F3] says this is a full-measure set; integrating gives $F_{t_k}(y)>F_{t_k}(x)$. Dominated convergence as $x\to\pm\infty$ gives limits $1$ and $0$. [F3, F4, F5, F6, step 1.1]

3.1 The law $t_k$ is symmetric: replacing $G$ by $-G$ preserves the product law in [F4] and sends $T_k$ to $-T_k$. Continuity from step 2.1 therefore gives $F_{t_k}(0)=1/2$ and $F_{t_k}(-x)=1-F_{t_k}(x)$. For either law and any $u\in(0,1)$, the CDF limits and continuity give points $a<b$ in its support with $F(a)<u<F(b)$; [F8] applied on $[a,b]$ gives a point with CDF value $u$, and strict increase gives uniqueness. These unique points are the stated quantiles. In particular, for $0<\alpha<1$, $q_{1-\alpha/2}>0$ because $F_{t_k}(0)=1/2<1-\alpha/2$ and the CDF is strictly increasing. [F1, F2, F4, F8, step 2.1, step 1.2, algebra] ∎
