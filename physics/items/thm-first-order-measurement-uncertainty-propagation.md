---
id: thm-first-order-measurement-uncertainty-propagation
kind: theorem
title: "First-order propagation of measurement uncertainty"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-measurand-calibration-and-measurement-uncertainty
  - def-moments-variance-and-covariance
  - thm-covariance-bilinearity-and-symmetry
  - def-real-frechet-derivative-on-real-and-complex-matrix-spaces
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "JCGM 100:2008, Evaluation of Measurement Data — Guide to the Expression of Uncertainty in Measurement, clauses 4.1 and 5.1–5.2"
      url: "https://www.bipm.org/documents/20126/2071204/JCGM_100_2008_E.pdf/cb0ef43f-baa5-11cf-3f85-4dcd86f77bd6"
    - title: "JCGM 100:2008/Amd.1:2026, Amendment 1: Nonlinearity in Measurement Models"
      url: "https://www.bipm.org/documents/20126/2071204/JCGM_100_Amd1_2026.pdf"
    - title: "NIST/SEMATECH Engineering Statistics Handbook, Chapter 2: Measurement Process Characterization"
      url: "https://www.itl.nist.gov/div898/handbook/toolaids/pff/mpc.pdf"
    - title: "Sai Ravela, MIT OpenCourseWare, Quantifying Uncertainty: Summary lecture notes, Fall 2012"
      url: "https://www.ocw.mit.edu/courses/12-s990-quantifying-uncertainty-fall-2012/a1cf07c268b15238d4351c512d31b28b_MIT12_S990F12_Summary.pdf"

---

## Statement

Let $d\ge1$, let $\hat x\in U$ for an open set $U\subseteq\mathbb R^d$, and
let $f:U\to\mathbb R$ be differentiable at $\hat x$. Let $X$ be an
$\mathbb R^d$-valued random element on one probability space with
square-integrable coordinate variables $X_i$, means $\mathbb E[X_i]=\hat x_i$,
and $X\in U$ almost surely. Let
$\Sigma_{ij}=\operatorname{Cov}(X_i,X_j)$, set
$g=\nabla f(\hat x)$, and define
$$Q_{\mathrm{lin}}=f(\hat x)+g^T(X-\hat x),\qquad u_c^2=\operatorname{Var}(Q_{\mathrm{lin}}).$$
Then
$$u_c^2=g^T\Sigma g=\sum_{i=1}^d g_i^2\Sigma_{ii}+2\sum_{1\le i<j\le d}g_i g_j\Sigma_{ij}.$$
The equality is exact for the first-order linearized output. To interpret it
as an approximation to uncertainty in the nonlinear output $f(X)$, require
$f(X)$ to be a measurable, square-integrable random output (including a
measurable definition on any null event where $X\notin U$) and require the
first-order model to be adequate. This interpretation is not an assertion of
exact finite-sample variance or interval coverage.

## Facts & Assumptions

**Given:** The objects and hypotheses of the Statement.

[F1] [[def-moments-variance-and-covariance]]: for square-integrable real random variables, variance and covariance are the expectations of the centered square and centered product.

[F2] [[thm-covariance-bilinearity-and-symmetry]]: covariance is symmetric and bilinear on finite linear combinations of square-integrable real random variables on one common probability space; constant summands are allowed.

[F3] [[def-real-frechet-derivative-on-real-and-complex-matrix-spaces]]: after identifying $\mathbb R^d$ with $d\times1$ real matrices, differentiability at $\hat x$ means a real-linear first-order map whose remainder divided by the Euclidean input norm tends to zero.

[F4] [[def-measurand-calibration-and-measurement-uncertainty]]: the input estimates are $\hat x_i=\mathbb E[X_i]$, $\Sigma_{ij}=\operatorname{Cov}(X_i,X_j)$, and $u_c^2=\operatorname{Var}(Q_{\mathrm{lin}})$ for the stated first-order linearized output.

## Proof

1.1 Identify $\mathbb R^d$ with real $d\times1$ matrices and let $L=Df(\hat x)$. By [F3], $f(\hat x+h)=f(\hat x)+L[h]+r(h)$ with $r(h)/\|h\|\to0$. For the standard basis $e_i$, put $g_i=L[e_i]$; linearity gives $L[h]=\sum_i g_i h_i=g^T h$. Thus $Q_{\mathrm{lin}}$ is the first-order Taylor term. [given, F3, choose, algebra]

1.2 Put $c=f(\hat x)-g^T\hat x$. Then $(\sum_i g_iX_i)^2\le d\sum_i g_i^2X_i^2$, and $(c+\sum_i g_iX_i)^2\le2c^2+2d\sum_i g_i^2X_i^2$. Since each $X_i$ is square-integrable and $d$ is finite, the right side has finite expectation, so $Q_{\mathrm{lin}}$ is square-integrable. Thus [F1] defines its variance and all covariances below. [given, F1, algebra]

2.1 By [F1], $\operatorname{Var}(Q_{\mathrm{lin}})=\operatorname{Cov}(Q_{\mathrm{lin}},Q_{\mathrm{lin}})$. Apply the finite bilinearity in [F2] to step 1.2; the constant has zero covariance, so $\operatorname{Var}(Q_{\mathrm{lin}})=\sum_{i=1}^d\sum_{j=1}^d g_i g_j\operatorname{Cov}(X_i,X_j)$. [F1, F2, step 1.2, algebra]

3.1 By [F4], each covariance in step 2.1 is $\Sigma_{ij}$, so the double sum is $g^T\Sigma g$. Symmetry in [F2] pairs the $(i,j)$ and $(j,i)$ terms to give the stated diagonal and off-diagonal form. It is nonnegative because it equals the variance in [F1], and [F4] therefore gives the stated $u_c^2$ formula. [F1, F2, F4, step 2.1, algebra] ∎

## Remarks

No independence assumption is used. The formula includes covariance between calibration coefficients, reference standards, corrections, and any later reading included in $X$. The first-order Taylor rule is appropriate only when the nonlinear remainder is negligible for the measurement at hand. JCGM 100:2008/Amd.1:2026 calls for higher-order terms when nonlinearity is significant; Monte Carlo methods are outside this result. Neither $u_c$ nor $u_c^2$ alone supplies a confidence interval or coverage probability.
