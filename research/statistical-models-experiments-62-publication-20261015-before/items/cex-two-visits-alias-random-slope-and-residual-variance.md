---
id: cex-two-visits-alias-random-slope-and-residual-variance
kind: counterexample
title: "Two visits can alias random-slope and residual variance components"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 5
deps:
  - def-linear-mixed-model
  - def-gaussian-linear-mixed-model
  - def-multivariate-normal-law
  - lem-characteristic-function-of-a-normal-law
  - lem-characteristic-functions-under-affine-maps-and-independent-sums
  - lem-characteristic-function-of-a-multivariate-normal-law
  - thm-uniqueness-of-a-law-from-its-characteristic-function
  - thm-real-square-matrix-invertible-iff-determinant-nonzero
  - def-axiom-of-choice
  - lem-marginal-covariance-of-linear-mixed-model
  - thm-variance-component-identifiability-iff-covariance-map-injective
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
    - title: "Fan Li, STA610 Lecture 6: Linear Mixed-Effects Models, PDF pp. 13–15"
      url: "https://stat.duke.edu/~fl35/teaching/610-26F/Lec6-LME.pdf"
    - title: "Fan Li, STA610 Lecture 7: The Longitudinal Linear Mixed Model, PDF pp. 6–8"
      url: "https://stat.duke.edu/~fl35/teaching/610-26F/Lec7-LLME.pdf"
proof_strategy: direct
---

## Statement refuted

It is false that two visits at times $0$ and $1$, together with a full-rank fixed design, always identify the random-intercept/random-slope covariance matrix and the residual variance in a Gaussian longitudinal mixed model.

## Facts & Assumptions

**Given:** One subject has observations at $t=0,1$, with fixed and random design
$$X=Z=\begin{pmatrix}1&0\\1&1\end{pmatrix},$$
and the Gaussian branch of [[def-linear-mixed-model]].

[F1] The marginal covariance is $ZGZ^T+R$. [[lem-marginal-covariance-of-linear-mixed-model]].

[F2] In the Gaussian model, covariance-parameter identifiability is equivalent to injectivity of $\theta\mapsto V(\theta)$. [[thm-variance-component-identifiability-iff-covariance-map-injective]].

[F3] Under AC, the Gaussian branch gives jointly normal latent and residual vectors; scalar normal characteristic functions, the affine transformation rule, and uniqueness of characteristic functions identify the resulting multivariate-normal response law from its mean and covariance. [[def-gaussian-linear-mixed-model]], [[def-multivariate-normal-law]], [[lem-characteristic-function-of-a-normal-law]], [[lem-characteristic-functions-under-affine-maps-and-independent-sums]], [[lem-characteristic-function-of-a-multivariate-normal-law]], [[thm-uniqueness-of-a-law-from-its-characteristic-function]].

[F4] A real square matrix is invertible exactly when its determinant is nonzero. [[thm-real-square-matrix-invertible-iff-determinant-nonzero]].

[A1] AC holds. [[def-axiom-of-choice]].

## Construction
Set $R_1=I_2$ and $G_1=I_2$. For a second parameter tuple set
$$G_2=\begin{pmatrix}4/5&1/5\\1/5&3/5\end{pmatrix}, \qquad R_2=\frac65 I_2.$$
Use the same fixed parameter $\beta$ for both models.

## Verification

**Given:** The parameter tuples and design in the Counterexample.

1.1 The matrix $G_2$ is positive definite because for every $(x,y)\ne(0,0)$, $\begin{pmatrix}x&y\end{pmatrix}G_2\begin{pmatrix}x\\y\end{pmatrix} =\frac45\left(x+\frac14y\right)^2+\frac{11}{20}y^2>0.$ Also $G_1=I_2$ and $R_1=I_2$ are positive definite, while $R_2=(6/5)I_2$ is positive definite since $6/5>0$. The design has determinant $1$, so [F4] makes it invertible and therefore full rank. [F4, given, algebra]

1.2 For the first tuple, $V_1=ZG_1Z^T+R_1 =\begin{pmatrix}1&1\\1&2\end{pmatrix}+I_2 =\begin{pmatrix}2&1\\1&3\end{pmatrix}.$ [F1, given, algebra]

2.1 Direct multiplication gives $ZG_2Z^T=\begin{pmatrix}4/5&1\\1&9/5\end{pmatrix}, \qquad V_2=ZG_2Z^T+R_2 =\begin{pmatrix}2&1\\1&3\end{pmatrix} =V_1.$ The covariance parameter tuples are distinct, so the covariance map is not injective. [F1, given, step 1.1, algebra]

3.1 Under either Gaussian tuple, $Y-X\beta$ has every scalar projection normal: in direction $u$, the coefficient vector on $(b,\varepsilon)$ is $(Z^Tu,u)$ and its variance is $u^TV_i u$. Since $V_1=V_2$, these projections have identical characteristic functions, so [F3] gives equal response laws. The covariance-component tuples are distinct, so the parameter is not identifiable. [A1, F2, F3, given, step 2.1] ∎

## Remarks

The witness keeps $G_2$ and both residual covariance matrices positive definite. It shows an exact covariance alias at two visits; more replication of the same two-visit design preserves the same alias.
