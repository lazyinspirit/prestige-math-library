---
id: ex-random-intercept-intraclass-correlation
kind: example
title: "Random-intercept covariance and intraclass correlation"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-linear-mixed-model
  - lem-marginal-covariance-of-linear-mixed-model
  - def-moments-variance-and-covariance
justified_by: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Fan Li, STA610 Lecture 1: The Problem of Correlated Data, PDF pp. 4–8"
      url: "https://stat.duke.edu/~fl35/teaching/610-26F/Lecture1_ProblemOfCorrelatedData.pdf"
    - title: "Duchateau, Janssen, and Rowlands, Linear Mixed Models, Chapter 2 §§2.3.1–2.4.1"
      url: "https://biometrics.ilri.org/Publication/Full%20Text/Linear_Mixed_Models/Chapter2_2_1to2_2.htm"
proof_strategy: direct
---

## Example

For a subject $j$ measured at two distinct visits, let
$$Y_{ji}=\mu+b_j+\varepsilon_{ji},$$
where $\mathbb E b_j=0$, $\operatorname{Var}(b_j)=\tau^2\ge0$, the residuals have mean zero and variance $\sigma^2\ge0$, the residuals are independent of each other, and $b_j$ is independent of the residual vector $(\varepsilon_{j1},\varepsilon_{j2})$. If $\tau^2+\sigma^2>0$, the marginal correlation between the two observations is
$$\operatorname{Corr}(Y_{j1},Y_{j2})=\frac{\tau^2}{\tau^2+\sigma^2}.$$
This is the random-intercept intraclass correlation (ICC).

## Facts & Assumptions

**Given:** The two-visit random-intercept special case of [[def-linear-mixed-model]] with the moment and independence assumptions in the Example.

[F1] The mixed-model marginal covariance is $ZGZ^T+R$ and does not require Gaussianity. [[lem-marginal-covariance-of-linear-mixed-model]].

[F2] Variance and covariance are centered second moments. [[def-moments-variance-and-covariance]].

[A1] $\tau^2,\sigma^2\ge0$ and $\tau^2+\sigma^2>0$.

[A2] For square-integrable real random variables $U,W$ with positive variances, use the convention $\operatorname{Corr}(U,W):=\operatorname{Cov}(U,W)/\sqrt{\operatorname{Var}(U)\operatorname{Var}(W)}$. Correlation is undefined if either variance is zero.

## Verification

**Given:** The model in the Example.

1.1 For either visit, the random part is $b_j+\varepsilon_{ji}$, so its variance is $\tau^2+\sigma^2$ because the two terms are independent and centered. Equivalently, in the marginal-covariance formula use random-intercept design row $1$, $G=[\tau^2]$, and residual diagonal entry $\sigma^2$. [F1, F2, A1]

1.2 For the two distinct visits, both observations contain the same $b_j$. The covariance formula gives $\operatorname{Cov}(Y_{j1},Y_{j2})=\tau^2$; the residual cross-covariance is zero by the assumed independence. [F1, A1]

2.1 By [A1], both marginal variances are positive. Dividing the covariance from step 1.2 by the square root of the product of the two equal variances from step 1.1 gives $\tau^2/(\tau^2+\sigma^2)$ by [A2]. If $\tau^2=0<\sigma^2$ the ICC is $0$; if $\sigma^2=0<\tau^2$ it is $1$; if both are zero the correlation is undefined. [A2, step 1.1, step 1.2, A1, algebra] ∎
