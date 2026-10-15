---
id: thm-ols-unbiasedness-and-covariance-full-rank
kind: theorem
title: "Full-rank OLS is unbiased with its classical covariance"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-fixed-design-linear-regression-model
  - thm-least-squares-fitted-vector-and-solution-set
  - thm-rank-nullity
  - def-moments-variance-and-covariance
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - thm-covariance-bilinearity-and-symmetry
  - def-euclidean-inner-product
  - lem-standard-basis-of-f-n
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Statistics: Lecture Three — Linear Models"
      url: "https://www.stat.berkeley.edu/~rice/Stat230A/statiii.pdf"
    - title: "Statistics for Applications, Section 15: Multiple Linear Regression"
      url: "https://ocw.mit.edu/courses/18-443-statistics-for-applications-fall-2006/dbc17cbfdac61daaff75056992d0af9a_section15.pdf"
proof_strategy: direct
---

## Statement

Let $X\in\mathbb R^{n\times p}$ have full column rank (its columns are
linearly independent) in a fixed-design
first-moment regression model. Suppose for some $\sigma^2>0$ the error vector
$\epsilon_\beta:=Y-X\beta$ has finite second moments,
$\mathbb E_\beta\epsilon_\beta=0$, and
$\operatorname{Cov}_\beta(\epsilon_\beta)=\sigma^2 I_n$ for every $\beta$,
where the vector covariance matrix has entries
$\operatorname{Cov}_\beta(\epsilon_{\beta,i},\epsilon_{\beta,j})$.
Then the unique least-squares estimator is
$$\widehat\beta=(X^TX)^{-1}X^TY,$$
it is unbiased for $\beta$, and its covariance matrix is
$$\operatorname{Cov}_\beta(\widehat\beta)=\sigma^2(X^TX)^{-1}.$$
No Gaussian assumption is made.

## Facts & Assumptions

**Given:** Integers $n,p\ge1$, a fixed-design first-moment regression model, full-column-rank $X\in\mathbb R^{n\times p}$, and the finite second-moment assumptions in the Statement.

[F1] The fixed design has response mean $\mathbb E_\beta Y=X\beta$. [[def-fixed-design-linear-regression-model]].

[F2] Least-squares minimizers satisfy $X^T(Xb-Y)=0$; when $\ker X=\{0\}$ the minimizer is unique. [[thm-least-squares-fitted-vector-and-solution-set]].

[F3] For the endomorphism $G(v)=X^TXv$ of $\mathbb R^p$, rank-nullity gives $\dim\mathbb R^p=\dim\ker G+\dim\operatorname{im}G$. [[thm-rank-nullity]].

[F4] Expectation is linear on finite sums of integrable random variables. [[cor-expectation-linearity-monotonicity-and-modulus-bound]].

[F5] Covariance is bilinear in finite linear combinations of square-integrable random variables. [[thm-covariance-bilinearity-and-symmetry]].

[F6] Variance and covariance are expectations of centered products. [[def-moments-variance-and-covariance]].

[F7] The standard coordinate vectors form a basis of $\mathbb R^p$, so $\dim\mathbb R^p=p$. [[lem-standard-basis-of-f-n]].

[F8] The Euclidean inner product is positive definite and $\|z\|_2^2=z^Tz$; in particular $z\ne0$ implies $\|z\|_2^2>0$. [[def-euclidean-inner-product]].

[A1] The error coordinates are square-integrable, have mean zero, and satisfy $\operatorname{Cov}_\beta(\epsilon_\beta)=\sigma^2 I_n$ for $\sigma^2>0$.

## Proof

**Proof technique:** direct.

1.1 Full column rank means $Xv\ne0$ for every nonzero $v\in\mathbb R^p$. By [F8], $v^TX^TXv=\|Xv\|_2^2>0$ for such $v$, so $Gv=0$ forces $v=0$. Thus $G$ has trivial kernel. The domain $\mathbb R^p$ has dimension $p$ by [F7]; rank-nullity [F3] gives $\dim\operatorname{im}G=p$, so $G$ is surjective and invertible. The normal equation in [F2] now gives the unique minimizer $\widehat\beta=(X^TX)^{-1}X^TY$. [F2, F3, F7, F8, algebra]

2.1 Write $A=(X^TX)^{-1}X^T$. By the fixed-design model [F1], $\epsilon_\beta=Y-X\beta$, so $Y=X\beta+\epsilon_\beta$. Step 1.1 gives $\widehat\beta=\beta+A\epsilon_\beta$. By [F4] and [A1], $\mathbb E_\beta\widehat\beta=\beta+A\mathbb E_\beta\epsilon_\beta=\beta.$ [F1, A1, F4, step 1.1, algebra]

3.1 By [F5] and [F6], the $(r,s)$ entry of the covariance matrix of $A\epsilon_\beta$ is $\sum_{i<n}\sum_{j<n} A_{ri}A_{sj}\operatorname{Cov}_\beta(\epsilon_{\beta,i},\epsilon_{\beta,j})=\sigma^2\sum_{i<n} A_{ri}A_{si}.$ Thus $\operatorname{Cov}_\beta(\widehat\beta)=\sigma^2AA^T$ by step 2.1. Since $X^TX$ is symmetric, $AA^T=(X^TX)^{-1}X^TX(X^TX)^{-1}=(X^TX)^{-1}.$ No step uses the shape of the error distribution beyond its stated moments. [A1, F5, F6, step 1.1, step 2.1, algebra] ∎
