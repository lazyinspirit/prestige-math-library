---
id: lem-variance-and-covariance-identities-for-random-variables
kind: lemma
title: "Variance and covariance identities for random variables"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-moments-variance-and-covariance, cor-expectation-linearity-monotonicity-and-modulus-bound, thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Jean-Francois Le Gall, Integration, Probabilities and Stochastic Processes, Section 8.2.1"
      url: "https://www.imo.universite-paris-saclay.fr/~jean-francois.le-gall/IPPA2.pdf"
---

## Statement

Let $X,Y$ be square-integrable real random variables on one probability space.
Then
$$\operatorname{Var}(X)=\mathbb E[X^2]-\mathbb E[X]^2,$$
$$\operatorname{Cov}(X,Y)=\mathbb E[XY]-\mathbb E[X]\mathbb E[Y].$$
Moreover, covariance is symmetric and bilinear on finite linear combinations.
On finite full-power-set probability spaces these formulas reduce to the
published finite identities.

## Facts & Assumptions

**Given:** Square-integrable real random variables $X,Y$.

[L1] Variance and covariance are the expectations of the centered square and
centered product ([[def-moments-variance-and-covariance]]).

[L2] Expectation is linear on integrable random variables
([[cor-expectation-linearity-monotonicity-and-modulus-bound]]).

[L3] Finite probability spaces agree with the full-power-set probability-space
formalism ([[thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces]]).

## Proof

**Proof technique:** direct.

1.1 Expanding $(X-\mathbb E[X])^2$ and applying [L2] gives $$\operatorname{Var}(X)=\mathbb E[X^2]-2\mathbb E[X]\mathbb E[X]+\mathbb E[X]^2=\mathbb E[X^2]-\mathbb E[X]^2.$$ Likewise, $$\operatorname{Cov}(X,Y)=\mathbb E[XY]-\mathbb E[X]\mathbb E[Y].$$ [L1, L2, algebra]

2.1 The covariance formula in step 1.1 is symmetric in $X$ and $Y$, so $\operatorname{Cov}(X,Y)=\operatorname{Cov}(Y,X)$. If $U=\sum_{i<m}a_iX_i$ and $V=\sum_{j<n}b_jY_j$ are finite linear combinations of square-integrable real random variables, expanding $\mathbb E[UV]-\mathbb E[U]\mathbb E[V]$ and using [L2] gives $$\operatorname{Cov}(U,V)=\sum_{i<m}\sum_{j<n}a_ib_j\operatorname{Cov}(X_i,Y_j).$$ [step 1.1, L2, algebra]

3.1 On a finite probability space, [L3] identifies the general formulas above with the already-published finite ones, so the finite and general identities agree exactly. [step 1.1, step 2.1, L3] ∎
