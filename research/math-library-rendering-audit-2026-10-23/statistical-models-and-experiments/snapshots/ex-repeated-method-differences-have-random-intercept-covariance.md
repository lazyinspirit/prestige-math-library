---
id: ex-repeated-method-differences-have-random-intercept-covariance
kind: example
title: "Repeated method differences can share a random intercept"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-method-agreement-and-limits
  - def-moments-variance-and-covariance
  - thm-covariance-bilinearity-and-symmetry
  - cor-expectation-agrees-with-the-finite-weighted-sum
  - cor-covariance-vanishes-under-independence
  - def-independent-random-elements
  - def-identically-distributed-and-iid-random-variables
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
proof_strategy: direct
---

## Example

Let $\Omega=\{-1,1\}^3$ have uniform probability, and let $U,\epsilon_1,
\epsilon_2$ be its coordinate variables. For two repeated paired measurements
on one target, suppose the differences follow the random-intercept model
$D_j=U+\epsilon_j$, $j=1,2$. Then each difference has mean $0$ and variance
$2$, but $\operatorname{Cov}(D_1,D_2)=1$. In fact,
$$\mathbb P(D_1=2,D_2=2)=\frac18\ne\frac1{16}=\mathbb P(D_1=2)\mathbb P(D_2=2).$$
The repeated differences are dependent and hence are not an iid sample.

## Facts & Assumptions

**Given:** The eight equally likely triples in $\Omega$, coordinate functions
$U,\epsilon_1,\epsilon_2$, and differences $D_j=U+\epsilon_j$.

[F1] Independent random elements are those whose generated sigma-algebras
are independent. [[def-independent-random-elements]]

[F2] An iid family is independent and has a common law.
[[def-identically-distributed-and-iid-random-variables]]

[F3] Finite-space expectations are weighted sums over atoms.
[[cor-expectation-agrees-with-the-finite-weighted-sum]]

[F4] Variance and covariance are the expectations of centered squares and
centered products. [[def-moments-variance-and-covariance]]

[F5] Covariance is bilinear on finite linear combinations.
[[thm-covariance-bilinearity-and-symmetry]]

[F6] Independent square-integrable real random variables have zero
covariance. [[cor-covariance-vanishes-under-independence]]

## Verification

**Given:** $\Omega=\{-1,1\}^3$ with uniform weights and
$D_j=U+\epsilon_j$. Verify the marginal moments and the within-target
dependence.

1.1 Each triple has mass $1/8=(1/2)^3$, so for arbitrary subsets $S_1,S_2,S_3\subseteq\{-1,1\}$, $\mathbb P(U\in S_1,\epsilon_1\in S_2,\epsilon_2\in S_3)=\prod_{j=1}^3 |S_j|/2$. Thus [F1] makes the coordinates independent. Each coordinate has mean $0$ and variance $1$ by the finite weighted sum [F3] and centered-square definition [F4]. [F1, F3, F4, given, algebra]

2.1 By [F5] and [F6], $\mathbb E[D_j]=0$, $\operatorname{Var}(D_j)=\operatorname{Var}(U)+\operatorname{Var}(\epsilon_j)+2\operatorname{Cov}(U,\epsilon_j)=2$, and $\operatorname{Cov}(D_1,D_2)=\operatorname{Var}(U)=1$; all cross terms vanish because they are covariances of distinct independent coordinates. [F3, F4, F5, F6, step 1.1, algebra]

3.1 The event $D_1=D_2=2$ requires the single triple $(1,1,1)$, so its probability is $1/8$. Each event $D_j=2$ requires $U=1$ and $\epsilon_j=1$ and has probability $1/4$, making the product of marginal probabilities $1/16$. The factorization required for independence therefore fails; by [F2] the two differences are not iid. [F1, F2, F3, given, algebra] ∎