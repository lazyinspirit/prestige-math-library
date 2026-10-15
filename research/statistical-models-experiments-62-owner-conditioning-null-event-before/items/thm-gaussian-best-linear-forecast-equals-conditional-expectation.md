---
id: thm-gaussian-best-linear-forecast-equals-conditional-expectation
kind: theorem
title: A Gaussian finite-history forecast is a conditional expectation
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-best-linear-forecast-from-a-finite-history
  - thm-finite-history-best-linear-predictor-exists-uniquely
  - thm-normal-equations-for-best-affine-l2-prediction
  - lem-uncorrelated-jointly-gaussian-blocks-are-independent
  - def-axiom-of-choice
  - def-multivariate-normal-law
  - def-conditional-expectation-given-a-sigma-algebra
  - lem-conditioning-a-known-variable-and-an-independent-variable
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - lem-conditional-expectation-is-unique-almost-surely
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Dewei Wang, STAT 720 Time Series Analysis, Section 5.2"
      url: "https://people.stat.sc.edu/wang528/Stat%20720/STAT720%20Notes.pdf"
    - title: "Nicolai Meinshausen, Time Series Analysis: Notes for the course HS 2022, Section 2.7"
      url: "https://www.stat.ethz.ch/~nicolai/timeseries/TimeSeries2022b.pdf"
---

## Statement

Assume the Axiom of Choice. Let $X$ be a weakly stationary real process and
let $n,h\ge1$. If the finite vector $(X_{n+h},X_n,\ldots,X_1)$ is jointly
multivariate normal, then the finite-history best linear forecast satisfies
$\widehat X_{n+h}=\mathbb E[X_{n+h}\mid\sigma(X_1,\ldots,X_n)]$ almost surely.
The history covariance may be singular. Without joint Gaussianity the equality
need not hold.

## Facts & Assumptions

**Given:** AC, a weakly stationary real process $X$, integers $n,h\ge1$, and a
jointly multivariate-normal vector $(X_{n+h},X_n,\ldots,X_1)$.

[A1] AC is inherited from the multivariate-normal and conditional-expectation
suppliers used in this Gaussian branch. [[def-axiom-of-choice]]

[F1] The finite-history affine minimization has a unique predictor class even
when the history covariance is singular. [[thm-finite-history-best-linear-predictor-exists-uniquely]]

[F2] The affine projection theorem supplies normal equations and an intercept
for a minimizing affine representative, including with singular covariance.
[[thm-normal-equations-for-best-affine-l2-prediction]]

[F3] A multivariate-normal law is preserved by reading any finite linear
projection as a scalar normal projection. [[def-multivariate-normal-law]]

[F4] Jointly Gaussian blocks with zero cross-covariance are independent, with
singular covariance allowed. [[lem-uncorrelated-jointly-gaussian-blocks-are-independent]]

[F5] If an integrable random variable is independent of a sigma-algebra, its
conditional expectation is its ordinary mean; a measurable integrable
variable is its own conditional expectation. [[lem-conditioning-a-known-variable-and-an-independent-variable]]

[F6] Conditional expectation is linear on integrable variables and is unique
as an almost-sure class. [[thm-basic-algebra-and-order-properties-of-conditional-expectation]]
[[lem-conditional-expectation-is-unique-almost-surely]]

[F7] Conditional expectation given a sigma-algebra is defined by measurability,
integrability and equality of integrals on every event in that sigma-algebra.
[[def-conditional-expectation-given-a-sigma-algebra]]

## Proof

1.1 Let $Y=(X_n,\ldots,X_1)$ and choose an affine representative $\widehat X_{n+h}$ of the unique class in [F1]. Put $R=X_{n+h}-\widehat X_{n+h}$. By [F2], its mean is zero by the intercept equation, and each normal equation gives $\operatorname{Cov}(X_{n+h},Y_i)=\operatorname{Cov}(\widehat X_{n+h},Y_i)$, hence $\operatorname{Cov}(R,Y_i)=0$. [given, F1, F2]

2.1 The vector $(R,Y)$ is an affine linear image of $(X_{n+h},Y)$, so every scalar linear projection is normal by [F3] and $(R,Y)$ is jointly multivariate normal. Step 1.1 gives zero cross-covariance between $R$ and each coordinate of $Y$, so [F4] makes $R$ independent of $Y$ and therefore of $\mathcal G:=\sigma(Y)$. [A1, F3, F4, step 1.1]

3.1 The forecast $\widehat X_{n+h}$ is an affine function of $Y$, hence $\mathcal G$-measurable and integrable. By [F5], $\mathbb E[R\mid\mathcal G]=\mathbb E[R]=0$ and $\mathbb E[\widehat X_{n+h}\mid\mathcal G]=\widehat X_{n+h}$. Since $X_{n+h}=R+\widehat X_{n+h}$, [F6] makes the forecast a version of $\mathbb E[X_{n+h}\mid\mathcal G]$ under [F7]; uniqueness in [F6] gives the almost-sure equality. AC is used only through the Gaussian and conditional-expectation branches. [A1, F5, F6, F7, step 2.1] ∎

## Remarks

The companion page includes a finite three-state process where the conditional
mean is not affine in the observed history.
