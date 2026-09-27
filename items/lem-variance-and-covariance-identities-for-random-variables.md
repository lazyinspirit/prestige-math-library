---
id: lem-variance-and-covariance-identities-for-random-variables
kind: lemma
title: "Variance and covariance identities for random variables"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-moments-variance-and-covariance, cor-expectation-linearity-monotonicity-and-modulus-bound, thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces, def-expectation-on-a-finite-probability-space, def-variance-and-covariance]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
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

[L1] Variance and covariance are the expectations of the centered square and centered product ([[def-moments-variance-and-covariance]]).

[L2] Expectation is linear on integrable random variables ([[cor-expectation-linearity-monotonicity-and-modulus-bound]]).

[L3] Finite probability spaces agree with the full-power-set probability-space formalism ([[thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces]]).

[L4] In the finite model expectation is the weighted sum, and variance and covariance use the same centered-square and centered-product definitions ([[def-expectation-on-a-finite-probability-space]], [[def-variance-and-covariance]]).

## Proof

**Proof technique:** direct.

1.1 Since the probability measure has total mass one, $2|X|\le1+X^2$ makes $X$ integrable. Likewise $2|XY|\le X^2+Y^2$ makes $XY$ integrable. Finite linear combinations of square-integrable variables remain square-integrable by $(a+b)^2\le2a^2+2b^2$, applied repeatedly. All expectations below are therefore finite. [given, algebra]

2.1 Expanding $(X-\mathbb E[X])^2$ and applying [L2] gives $$\operatorname{Var}(X)=\mathbb E[X^2]-2\mathbb E[X]\mathbb E[X]+\mathbb E[X]^2=\mathbb E[X^2]-\mathbb E[X]^2.$$ Likewise, $$\operatorname{Cov}(X,Y)=\mathbb E[XY]-\mathbb E[X]\mathbb E[Y].$$ [L1, L2, step 1.1, algebra]

3.1 The covariance formula in step 2.1 is symmetric in $X$ and $Y$, so $\operatorname{Cov}(X,Y)=\operatorname{Cov}(Y,X)$. If $U=\sum_{i<m}a_iX_i$ and $V=\sum_{j<n}b_jY_j$ are finite linear combinations of square-integrable real random variables, step 1.1 makes them square-integrable. Expanding $\mathbb E[UV]-\mathbb E[U]\mathbb E[V]$ and using [L2] gives $$\operatorname{Cov}(U,V)=\sum_{i<m}\sum_{j<n}a_ib_j\operatorname{Cov}(X_i,Y_j).$$ [step 1.1, step 2.1, L2, algebra]

4.1 On a finite full-power-set probability space, [L3] identifies the measure with its singleton weights. The integral of a finite-valued random variable is the sum of its values times those weights, so [L4] identifies the two expectations and the centered definitions. Thus the formulas in step 2.1 and step 3.1 agree with the finite identities. [step 2.1, step 3.1, L3, L4] ∎
