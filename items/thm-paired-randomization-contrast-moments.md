---
id: thm-paired-randomization-contrast-moments
kind: theorem
title: Design expectation and variance of a paired contrast
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-randomized-complete-block-design
  - def-finite-randomized-treatment-assignment-model
  - def-finite-population-average-treatment-effect-and-weak-null
  - def-finite-probability-space-and-event
  - def-expectation-on-a-finite-probability-space
  - def-moments-variance-and-covariance
  - thm-covariance-bilinearity-and-symmetry
  - def-statistic-and-estimator
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Gary W. Oehlert, A First Course in Design and Analysis of Experiments, Chapter 13 §13.2"
      url: "https://users.stat.umn.edu/~gary/book/fcdae.pdf"
    - title: "Susan Holmes and Wolfgang Huber, Modern Statistics for Modern Biology, Chapter 13 §13.4.4"
      url: "https://www.huber.embl.de/msmb/13-chap.html"
---

## Statement

Consider one pair in the $t=2,b=1$ RCBD, with the two treatments labelled
$0$ and $1$. Let $Y_\ell(z)\in\mathbb R$ be unit $\ell$'s fixed potential
outcome under its own treatment $z\in\{0,1\}$, and assume no interference:
the outcome depends on the pair assignment only through that unit's own
treatment. Define $\delta_\ell=Y_\ell(1)-Y_\ell(0)$,
$\tau=(\delta_1+\delta_2)/2$, and the two possible observed contrasts
$$D_1=Y_1(1)-Y_2(0),\qquad D_2=Y_2(1)-Y_1(0).$$
If exactly one unit is assigned treatment $1$ uniformly at random, the
observed treated-minus-control contrast $D$ obeys
$$\mathbb E_d[D]=\tau,\qquad \operatorname{Var}_d(D)=\frac{(D_1-D_2)^2}{4}=\frac{\bigl((\delta_1-\delta_2)+2(Y_1(0)-Y_2(0))\bigr)^2}{4}.$$
Here $\mathbb E_d$ and $\operatorname{Var}_d$ average over treatment
assignment only, holding all potential outcomes fixed. The variance depends
on baseline outcomes as well as effect heterogeneity.

## Facts & Assumptions


**Given:** Two fixed units, binary potential outcomes with no interference, and uniform randomization of exactly one unit to treatment $1$.

[F1] In the finite assignment model, units and potential outcomes are fixed while assignment is random; the model itself imposes no no-interference assumption ([[def-finite-randomized-treatment-assignment-model]]).

[F2] The finite-population average treatment effect for two units is the average of their fixed unit-level effects ([[def-finite-population-average-treatment-effect-and-weak-null]]).

[F3] In a two-treatment, one-block RCBD, the two assignments are equally likely ([[def-randomized-complete-block-design]]).

[F4] On a finite probability space, expectation is the sum of values times their weights ([[def-expectation-on-a-finite-probability-space]]).

[F5] Variance is $\mathbb E[(X-\mathbb E[X])^2]$ and covariance is $\mathbb E[(X-\mathbb E[X])(Y-\mathbb E[Y])]$ for square-integrable variables ([[def-moments-variance-and-covariance]]).

[F6] A statistic is a measurable map of the observed data, and a statistic with the estimand's target space is an estimator ([[def-statistic-and-estimator]]).

[F7] The finite-assignment experiment uses the data space $\mathcal Z\times\mathbb R^{\mathcal I}$ with its full power-set sigma-algebra ([[def-finite-randomized-treatment-assignment-model]]).

[F8] Covariance is bilinear and symmetric, including constant summands ([[thm-covariance-bilinearity-and-symmetry]]).

## Proof

1.1 Embed the pair's design law in the finite binary assignment model on $\{0,1\}^2$ by giving weight $1/2$ to $(1,0)$ and $(0,1)$ and weight zero to $(0,0)$ and $(1,1)$. Zero-probability assignments are allowed by [F1]. The positive-weight assignments give the displayed $D_1,D_2$, with average $(\delta_1+\delta_2)/2$ and difference $(\delta_1-\delta_2)+2(Y_1(0)-Y_2(0))$. [F1, F3, algebra]

2.1 Define $D$ by the treated-minus-control formula on the two positive-weight assignments and, for example, by zero on the two zero-weight assignments. This is a function on the full-power-set data space [F7], hence a measurable statistic and estimator of $\tau$ by [F6]; its arbitrary zero-weight values do not affect design moments. [F6, F7, step 1.1]

2.2 By [F4], $\mathbb E_d[D]=(D_1+D_2)/2=(\delta_1+\delta_2)/2=\tau$, so the contrast estimates the pair's finite-population average effect without bias. [F2, F3, F4, step 1.1, algebra]

2.3 Let $X$ indicate that unit $1$ is assigned treatment $1$, so $D=D_2+(D_1-D_2)X$. Since the assignment space is finite, the variables are square-integrable. By [F5] and [F8], covariance with a constant is zero and $\operatorname{Var}_d(D)=(D_1-D_2)^2\operatorname{Var}_d(X)$. [F3, F5, F8, step 1.1, algebra]

3.1 The two equally weighted assignments give $\mathbb E_d[X]=1/2$ by [F4], hence $\operatorname{Var}_d(X)=1/4$ by [F5]. Therefore $\operatorname{Var}_d(D)=(D_1-D_2)^2/4$, which is the formula in the Statement. [F3, F4, F5, step 2.3, algebra] ∎