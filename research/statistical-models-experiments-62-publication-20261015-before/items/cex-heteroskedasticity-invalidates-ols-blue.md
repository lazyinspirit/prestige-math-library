---
id: cex-heteroskedasticity-invalidates-ols-blue
kind: counterexample
title: "Unequal error variances can make OLS fail to be BLUE"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 5
deps:
  - def-fixed-design-linear-regression-model
  - def-linear-estimability-in-fixed-design
  - thm-linear-estimability-iff-row-space
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - thm-ols-unbiasedness-and-covariance-full-rank
  - thm-gauss-markov-for-fixed-design-regression
  - def-moments-variance-and-covariance
  - thm-covariance-bilinearity-and-symmetry
  - def-probability-measure
  - cor-expectation-agrees-with-the-finite-weighted-sum
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
    - title: "Statistics: Lecture Three — Linear Models"
      url: "https://www.stat.berkeley.edu/~rice/Stat230A/statiii.pdf"
    - title: "Statistics for Applications, Section 15: Multiple Linear Regression"
      url: "https://ocw.mit.edu/courses/18-443-statistics-for-applications-fall-2006/dbc17cbfdac61daaff75056992d0af9a_section15.pdf"
proof_strategy: direct
---

## Statement refuted

For every full-column-rank fixed design and every mean-zero error law with
finite second moments, OLS is the best linear unbiased estimator of every
contrast, regardless of the error covariance.

## Facts & Assumptions

[F1] OLS is BLUE for every estimable contrast when the fixed full-rank design has mean-zero errors with covariance $\sigma^2I_n$, $\sigma^2>0$. [[thm-gauss-markov-for-fixed-design-regression]].

[F2] Expectation is linear, and covariance is bilinear on finite linear combinations. [[cor-expectation-linearity-monotonicity-and-modulus-bound]], [[thm-covariance-bilinearity-and-symmetry]].

[F3] On a finite probability space, expectation is the sum of values weighted by their point probabilities. [[cor-expectation-agrees-with-the-finite-weighted-sum]].

[F4] A probability measure is a measure of total mass one. [[def-probability-measure]].

[F5] Variance and covariance are centered second moments. [[def-moments-variance-and-covariance]].

## Counterexample

**Proof technique:** direct.

**Given:** Let $n=2$, $p=1$, $X=(1,1)^T$, and $\beta\in\mathbb R$. Let
$\Omega=\{-1,1\}^2$ with $\mathcal F=\mathcal P(\Omega)$ and
$\mathbb P(A)=|A|/4$ for $A\subseteq\Omega$; write the coordinate signs as
$U,V$. Set
$$\epsilon=(U,3V)^T,\qquad Y=X\beta+\epsilon.$$
Each of the four pairs $(U,V)\in\{-1,1\}^2$ has probability $1/4$. Both errors
have mean zero, but their variances are $1$ and $9$. The single column of $X$ is
nonzero, so the design has full column rank and estimates the intercept
contrast $\beta$. For each $\beta$, define its observation law on
$\mathcal B(\mathbb R^2)$ by
$$P_\beta(B):=\frac14\sum_{(u,v)\in\Omega}\mathbf 1_B(\beta+u,\beta+3v).$$

1.1 The weights $1/4$ are nonnegative and sum to one. For a disjoint sequence of subsets of $\Omega$, at most four sets are nonempty, so additivity of cardinality gives countable additivity; thus $\mathbb P$ is a probability measure by [F4]. In the displayed formula, $P_\beta(\mathbb R^2)=1$; for any disjoint Borel sequence, each of the four outcomes contributes to at most one term, so $P_\beta$ is countably additive and hence a probability measure on $\mathcal B(\mathbb R^2)$. Direct weighted sums using [F3] give $\mathbb E U=\mathbb E V=0$, $\mathbb E U^2=\mathbb E V^2=1$, and $\mathbb E(UV)=0$. Thus $\mathbb E\epsilon=0$ and, by [F5], $\operatorname{Cov}(\epsilon)=\operatorname{diag}(1,9)$, which is not a scalar multiple of $I_2$. By linearity [F2], $\mathbb E_\beta Y=X\beta$. [given, F2, F3, F4, F5, algebra]

1.2 Here $X^TX=2$, so the unique OLS estimate is $\widehat\beta=\frac{Y_1+Y_2}{2}=\beta+\frac{U+3V}{2}.$ It is unbiased by [F2], and bilinearity gives $\operatorname{Var}(\widehat\beta)=(1+9)/4=5/2$. [F2, F5, algebra]

2.1 The alternative estimator $\widetilde\beta=\frac9{10}Y_1+\frac1{10}Y_2=\beta+\frac9{10}U+\frac3{10}V$ is linear and unbiased because its coefficients sum to one and both error means vanish. Its variance is $\frac{81}{100}\operatorname{Var}(U)+\frac9{100}\operatorname{Var}(V)+\frac{54}{100}\operatorname{Cov}(U,V)=\frac9{10}<\frac52.$ So OLS is not BLUE in this model. The covariance premise in [F1] fails, which is the stated boundary of the Gauss–Markov theorem. [given, F1, F2, F5, step 1.1, step 1.2, algebra] ∎
