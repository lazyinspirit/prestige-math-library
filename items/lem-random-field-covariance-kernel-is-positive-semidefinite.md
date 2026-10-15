---
id: lem-random-field-covariance-kernel-is-positive-semidefinite
kind: lemma
title: "Covariance kernels of square-integrable fields are positive semidefinite"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-random-field-stationarity-covariance-and-variogram
  - def-moments-variance-and-covariance
  - lem-variance-and-covariance-identities-for-random-variables
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Evgeny Spodarev, Spatial Statistics: Lecture Notes (2024)"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.110/lehre/ss24/SpatialStatistics_2024.pdf"
    - title: "Hermine Biermé, Introduction to random fields and scale invariance: Lecture I (2016)"
      url: "https://www.lebesgue.fr/sites/default/files/attach/Bierme_Lecture1.pdf"
---

## Statement

Let $X=(X(s))_{s\in T}$ be a real random field on one probability space, with
$X(s)\in L^2$ for every $s\in T$, and put
$K(s,t):=\operatorname{Cov}(X(s),X(t))$. Then $K$ is symmetric and positive
semidefinite: for every $n\ge1$, sites $s_1,\ldots,s_n\in T$, and real
$a_1,\ldots,a_n$,
$$\sum_{i=1}^n\sum_{j=1}^n a_i a_j K(s_i,s_j)\ge0.$$

## Facts & Assumptions

**Given:** A real random field on one probability space whose coordinate
variables are all square-integrable, a finite list of sites, and real
coefficients.

[F1] [[def-random-field-stationarity-covariance-and-variogram]]: each field
coordinate is a real random variable on the common probability space.

[F2] [[def-moments-variance-and-covariance]]: for square-integrable real
variables, variance is the expectation of the centered square and covariance
is the expectation of the centered product.

[F3] [[lem-variance-and-covariance-identities-for-random-variables]]:
finite linear combinations of square-integrable real variables remain
square-integrable, and covariance is symmetric and bilinear on such finite
linear combinations.

## Proof

**Given:** The field and finite data in the statement.

1.1 Put $W:=\sum_{i=1}^n a_iX(s_i)$. The pointwise inequality $$W^2\le n\sum_{i=1}^n a_i^2X(s_i)^2$$ shows that $W\in L^2$, since each of the finitely many terms on the right is integrable by the given square-integrability. Thus $\operatorname{Var}(W)$ is defined by [F2]. [given, F1, F2, algebra]

2.1 Covariance bilinearity in [F3] gives $$\operatorname{Var}(W)=\operatorname{Cov}(W,W)=\sum_{i=1}^n\sum_{j=1}^n a_i a_j\operatorname{Cov}(X(s_i),X(s_j))=\sum_{i=1}^n\sum_{j=1}^n a_i a_jK(s_i,s_j).$$ The variance is nonnegative because its defining integrand is a square. The same covariance symmetry in [F3] gives $K(s,t)=K(t,s)$. [F2, F3, step 1.1] ∎