---
id: thm-balanced-one-way-random-effects-expected-mean-squares
kind: theorem
title: "Expected mean squares in the balanced one-way normal random-effects model"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - cor-variance-adds-for-pairwise-independent-random-variables
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - def-axiom-of-choice
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-independent-random-elements
  - def-moments-variance-and-covariance
  - lem-measurable-functions-preserve-independence
  - lem-normal-location-scale-mean-and-variance
justified_by: []
proof_strategy: direct
axiom_use: "AC is required by the library's normal-law definition and its normal-moment supplier. The expectation and variance algebra uses no additional choice."
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
    - title: "Andrew Gelman et al., Bayesian Data Analysis, 3rd ed., §5.4"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
      locator: "Chapter 5, §5.4, printed pp. 114–118: the balanced normal random-effects ANOVA table, expected between/within mean squares, method-of-moments estimate, and warning about negative estimates."
    - title: "NIST/SEMATECH e-Handbook of Statistical Methods, §7.4.4, What are variance components?"
      url: "https://itl.nist.gov/div898/handbook/prc/section4/prc44.htm"
      locator: "Full page inspected, lines 23–46: random-effects ANOVA expected-mean-square table, method-of-moments equations, and the possibility of negative variance-component estimates."
---

## Statement

Let $k,r\ge2$, let $\mu\in\mathbb R$, $\tau^2\ge0$, and $\sigma^2>0$.
For $i=1,\ldots,k$, let the group blocks
$U_i=(a_i,\boldsymbol\epsilon_i)$ be independent random elements on one
probability space, where $\boldsymbol\epsilon_i=(\epsilon_{i1},\ldots,\epsilon_{ir})$.
Within each block, $a_i$ and $\boldsymbol\epsilon_i$ are independent and the
coordinates of $\boldsymbol\epsilon_i$ are mutually independent. Assume
$a_i\sim N(0,\tau^2)$ and
$\epsilon_{ij}\sim N(0,\sigma^2)$. Put
$Y_{ij}=\mu+a_i+\epsilon_{ij}$,
$\bar Y_{i\cdot}=r^{-1}\sum_{j=1}^rY_{ij}$, and
$\bar Y_{\cdot\cdot}=k^{-1}\sum_{i=1}^k\bar Y_{i\cdot}$. Define
$$MSB=\frac{r}{k-1}\sum_{i=1}^k(\bar Y_{i\cdot}-\bar Y_{\cdot\cdot})^2,\qquad MSW=\frac{1}{k(r-1)}\sum_{i=1}^k\sum_{j=1}^r(Y_{ij}-\bar Y_{i\cdot})^2.$$
Then
$$\mathbb E[MSB]=\sigma^2+r\tau^2,\qquad \mathbb E[MSW]=\sigma^2.$$
Equating these two population moments to the observed mean squares gives the
raw method-of-moments estimates
$$\widehat{\sigma^2}_{\rm MOM}=MSW,\qquad \widehat{\tau^2}_{\rm MOM}=\frac{MSB-MSW}{r}.$$
The second estimate is not constrained to be nonnegative.

## Facts & Assumptions

**Given:** A balanced one-way model with $k,r\ge2$, a fixed mean $\mu$, independent
group blocks, independent random effects and errors within each block, and the
stated normal laws and variances.

[A1] AC is assumed because the library's standard normal law and the cited
normal-moment result require it. [[def-axiom-of-choice]]

[F1] For $X\sim N(m,v)$ with $v\ge0$, $\mathbb E[X]=m$ and
$\operatorname{Var}(X)=v$. [[lem-normal-location-scale-mean-and-variance]]

[F2] For a finite pairwise-independent family of square-integrable random
variables, the variance of its sum is the sum of its variances.
[[cor-variance-adds-for-pairwise-independent-random-variables]]

[F3] Applying measurable functions separately to independent random elements
preserves their independence. [[lem-measurable-functions-preserve-independence]]

[F4] Variance is $\mathbb E[(X-\mathbb E X)^2]$ for square-integrable $X$.
[[def-moments-variance-and-covariance]]

[F5] Expectation is integration on the underlying probability space.
[[def-expectation-of-a-nonnegative-or-integrable-random-variable]]

[F6] Expectation is linear for finite sums of integrable random variables.
[[cor-expectation-linearity-monotonicity-and-modulus-bound]]

[F7] Random elements are independent when their generated sigma-algebras are
independent. [[def-independent-random-elements]]

## Proof

**Proof technique:** compute the centered group-mean and within-group sums of squares from their first two moments.

**Given:** The hypotheses in the Statement.

1.1 Put $\bar\epsilon_i=r^{-1}\sum_j\epsilon_{ij}$. By [F1], every error has mean zero and variance $\sigma^2$; [F6] gives $\mathbb E[\bar\epsilon_i]=0$. By [F2], the variance of $\sum_j\epsilon_{ij}$ is $r\sigma^2$, and the variance definition [F4] gives $\operatorname{Var}(\bar\epsilon_i)=r^{-2}r\sigma^2=\sigma^2/r$. Since $a_i$ is independent of the error vector, [F3] makes $a_i$ independent of $\bar\epsilon_i$. Thus [F2] gives $\operatorname{Var}(\bar Y_{i\cdot})=\tau^2+\sigma^2/r$, and [F6] gives $\mathbb E[\bar Y_{i\cdot}]=\mu$. Applying [F3] to the independent group blocks shows that the group means are independent by [F7]. [A1, F1, F2, F3, F4, F5, F6, F7, given]

2.1 For any numbers $x_1,\ldots,x_k$ with mean $\bar x$, expansion gives $\sum_i(x_i-\bar x)^2=\sum_i(x_i-\mu)^2-k(\bar x-\mu)^2$. Apply this with $x_i=\bar Y_{i\cdot}$. By [F2], $\operatorname{Var}(\bar Y_{\cdot\cdot})=(\tau^2+\sigma^2/r)/k$; [F4], [F5], and [F6] therefore give $\mathbb E\sum_i(\bar Y_{i\cdot}-\bar Y_{\cdot\cdot})^2=(k-1)(\tau^2+\sigma^2/r)$. Multiplying by $r/(k-1)$ yields $\mathbb E[MSB]=r\tau^2+\sigma^2$. [F2, F4, F5, F6, step 1.1, algebra]

2.2 Since $Y_{ij}-\bar Y_{i\cdot}=\epsilon_{ij}-\bar\epsilon_i$, expansion gives $\sum_j(\epsilon_{ij}-\bar\epsilon_i)^2=\sum_j\epsilon_{ij}^2-r\bar\epsilon_i^2$. By [F1], [F4], and [F5], $\mathbb E[\sum_j\epsilon_{ij}^2]=r\sigma^2$ and $\mathbb E[\bar\epsilon_i^2]=\operatorname{Var}(\bar\epsilon_i)=\sigma^2/r$; hence each group contributes expected within sum of squares $(r-1)\sigma^2$. Summing over $k$ groups and dividing by $k(r-1)$ proves $\mathbb E[MSW]=\sigma^2$. [F1, F4, F5, step 1.1, algebra]

3.1 Solving $\mathbb E[MSW]=\sigma^2$ and $\mathbb E[MSB]=\sigma^2+r\tau^2$ for the two variance components gives $\widehat{\sigma^2}_{\rm MOM}=MSW$ and $\widehat{\tau^2}_{\rm MOM}=(MSB-MSW)/r$. The algebra imposes no nonnegativity constraint on the second expression. [step 2.1, step 2.2, algebra] ∎
