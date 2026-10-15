---
id: ex-covariance-kernel-and-intrinsic-variogram-checks
kind: example
title: "A failed stationary covariance and a valid quadratic variogram"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-random-field-stationarity-covariance-and-variogram
  - lem-random-field-covariance-kernel-is-positive-semidefinite
  - thm-order-two-field-variogram-is-conditionally-negative-definite
  - def-finite-probability-space-and-event
  - def-finite-real-random-variable-and-distribution
  - def-expectation-on-a-finite-probability-space
  - def-moments-variance-and-covariance
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Evgeny Spodarev, Spatial Statistics: Lecture Notes (2024)"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.110/lehre/ss24/SpatialStatistics_2024.pdf"
    - title: "Evgeny Spodarev, Random Fields I: Lecture Notes (Draft, 2009)"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/allgemein/zuloeschen/Random_Field.pdf"
    - title: "Hermine Biermé, Introduction to random fields and scale invariance: Lecture I (2016)"
      url: "https://www.lebesgue.fr/sites/default/files/attach/Bierme_Lecture1.pdf"
---

## Example

On $\mathbb R$, the lag function $C(h)=1+h^2$ is not a stationary covariance.
By contrast, $\gamma(h)=h^2$ is a valid order-two intrinsic variogram: if
$Z$ takes the values $\pm\sqrt2$ with equal probabilities and $X(t)=tZ$, then
$\tfrac12\mathbb E[(X(t+h)-X(t))^2]=h^2$. This field has stationary
second-order increments but is not wide stationary.

## Facts & Assumptions

**Given:** The real-lag candidate $C(h)=1+h^2$ and the finite probability
space $\Omega=\{-1,+1\}$ with equal weights.

[F1] [[def-random-field-stationarity-covariance-and-variogram]]: a wide-
stationary field has a covariance kernel depending only on lag; an
order-two intrinsic field has displacement-only finite increment second
moments.

[F2] [[lem-random-field-covariance-kernel-is-positive-semidefinite]]: every
finite covariance matrix of real field values has nonnegative real quadratic
forms.

[F3] [[thm-order-two-field-variogram-is-conditionally-negative-definite]]:
for real coefficients summing to zero, the variogram quadratic form is
nonpositive.

[F4] [[def-finite-probability-space-and-event]]: the two outcomes each receive
weight $1/2$.

[F5] [[def-finite-real-random-variable-and-distribution]]: a real random
variable on this space is a real-valued function on its two outcomes.

[F6] [[def-expectation-on-a-finite-probability-space]]: expectation is the
sum of the two outcome values weighted by $1/2$.

[F7] [[def-moments-variance-and-covariance]]: for a square-integrable real
variable, variance is the expected centered square.

## Verification

1.1 If $C$ were a stationary covariance, its matrix at the two sites $0$ and $1$ would be $$M=\begin{pmatrix}C(0)&C(-1)\\C(1)&C(0)\end{pmatrix}=\begin{pmatrix}1&2\\2&1\end{pmatrix}.$$ The covariance-kernel lemma [F2] would make this matrix positive semidefinite, but for $v=(1,-1)^T$, $v^TMv=-2<0$. Hence $C(h)=1+h^2$ is not a stationary covariance. [given, F2, algebra]

1.2 For any real $a_1,\ldots,a_n$ with $\sum_i a_i=0$ and sites $s_1,\ldots,s_n$, $$\sum_{i,j}a_i a_j(s_i-s_j)^2=-2\left(\sum_i a_i s_i\right)^2\le0.$$ This directly verifies the zero-sum CND inequality for $\gamma(h)=h^2$ and is consistent with [F3]. [given, F3, algebra]

1.3 Define $Z(\omega):=\sqrt2\,\omega$ on $\Omega=\{-1,+1\}$. By the finite space and expectation definitions [F4]–[F6], $$\mathbb E[Z]=\tfrac12\sqrt2-\tfrac12\sqrt2=0,\qquad\mathbb E[Z^2]=\tfrac12(2)+\tfrac12(2)=2.$$ [F4, F5, F6, construct]

2.1 Define $X(t):=tZ$, so every coordinate has finite range and is square-integrable. For any admissible $t,h$, $X(t+h)-X(t)=hZ$, and $$\frac12\mathbb E[(X(t+h)-X(t))^2]=\frac12h^2\mathbb E[Z^2]=h^2,$$ independent of $t$. Its increment mean is also zero, so the stated intrinsic stationarity and variogram claim hold by [F1]. [given, F1, F6, step 1.3, algebra]

3.1 The field mean is zero and $\operatorname{Var}(X(t))=2t^2$ by [F6]–[F7], so its variance is not constant in $t$. Thus this intrinsically stationary field is not wide stationary, as claimed. [given, F1, F6, F7, step 1.3, step 2.1, algebra] ∎