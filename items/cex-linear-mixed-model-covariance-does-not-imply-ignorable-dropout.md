---
id: cex-linear-mixed-model-covariance-does-not-imply-ignorable-dropout
kind: counterexample
title: "A mixed-model covariance does not imply MAR dropout"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-linear-mixed-model
  - lem-marginal-covariance-of-linear-mixed-model
  - def-longitudinal-missingness-mechanisms
  - def-scientific-statistical-model-contract
  - def-moments-variance-and-covariance
justified_by: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Fan Li, STA610 Lecture 7: The Longitudinal Linear Mixed Model, PDF pp. 16–18"
      url: "https://stat.duke.edu/~fl35/teaching/610-26F/Lec7-LLME.pdf"
    - title: "Fan Li, STA610 Lecture 1: The Problem of Correlated Data, PDF pp. 4–6"
      url: "https://stat.duke.edu/~fl35/teaching/610-26F/Lecture1_ProblemOfCorrelatedData.pdf"
proof_strategy: direct
---

## Statement refuted

It is false that a correct random-intercept covariance model for a complete two-visit response vector implies dropout after the first visit is missing at random (MAR).

## Facts & Assumptions

**Given:** A finite probability space with independent signs $b,\varepsilon_1,\varepsilon_2\in\{-1,1\}$, each taking its two values with probability $1/2$.

[F1] The finite-dimensional mixed model requires finite second moments, zero means, and the stated covariance and independence conditions; it imposes no Gaussianity. [[def-linear-mixed-model]].

[F2] The marginal covariance is $ZGZ^T+R$. [[lem-marginal-covariance-of-linear-mixed-model]].

[F3] MAR requires the observation-pattern probability to depend on the full response only through the coordinates observed under that pattern. [[def-longitudinal-missingness-mechanisms]].

[F4] A deterministic observation mechanism is a measurable map from the full state to the recorded observation; a stochastic mechanism is a probability kernel with measurable event probabilities. [[def-scientific-statistical-model-contract]].

[A1] There is one subject, two scheduled visits, no observed covariates (equivalently, the covariate space is a singleton), $X=0_{2\times1}$, $Z=(1,1)^T$, $b$ has variance $1$, and $\varepsilon=(\varepsilon_1,\varepsilon_2)^T$ has covariance $I_2$.

## Construction
Let $\mu=0$ and set
$$Y_1=b+\varepsilon_1,\qquad Y_2=b+\varepsilon_2.$$
Observe $Y_1$ for every subject. Let $M_2=1$ mean the second visit is observed, and specify the observation mechanism
$$M_2=\mathbf 1\{Y_2=2\}.$$

## Verification

**Given:** The finite model and observation mechanism in the Counterexample.

1.1 The signs are centered, square-integrable, and independent; $b$ is independent of $\varepsilon$. Thus this is a moment-only random-intercept mixed model with $G=[1]$ and $R=I_2$. By [F2], its complete-response covariance is $\operatorname{Cov}\begin{pmatrix}Y_1\\Y_2\end{pmatrix} =\begin{pmatrix}1&1\\1&1\end{pmatrix}+I_2 =\begin{pmatrix}2&1\\1&2\end{pmatrix}.$ [F1, F2, A1]

1.2 Let the pattern space be $\mathcal R=\{0,1\}^2$ with its power-set $\sigma$-algebra, and define the full observation-pattern map $O(y_1,y_2)=(1,\mathbf 1\{y_2=2\})$. It is Borel measurable because its first coordinate is constant and its second is the indicator of a Borel set. The induced kernel $K(y,A)=\mathbf 1\{O(y)\in A\}$ is the point mass at $O(y)$ for each $y$; for every $A\subseteq\mathcal R$, $y\mapsto K(y,A)$ is measurable as the indicator of the Borel set $O^{-1}(A)$. Thus [F4] applies. Each sign triple has probability $1/8$. The two supported states $(1,-1,-1)$ and $(1,-1,1)$ both give observed first-visit value $Y_1=0$, but their second-visit values are $Y_2=0$ and $Y_2=2$, respectively; their patterns are $(1,0)$ and $(1,1)$. [F4, given, algebra]

2.1 For the missing-visit pattern $r=(1,0)$, the mechanism probability is $1$ at $(Y_1,Y_2)=(0,0)$ and $0$ at $(0,2)$. These supported full-data points have the same observed coordinates $Y_{\mathrm{obs}}(r)=Y_1=0$, so this pattern probability cannot depend only on the observed data for $r$. By [F3], the mechanism is not MAR, despite the correct random-intercept covariance in step 1.1. [F3, step 1.1, step 1.2] ∎

## Remarks

The example declares the full response law and the dropout kernel separately, as required by [[def-scientific-statistical-model-contract]]. The covariance identity constrains only the response law.
