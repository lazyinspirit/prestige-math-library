---
id: lem-cm-finite-iid-sample-mean-bound
kind: lemma
title: Finite IID sample-mean variance and Chebyshev bound
status: published
origin: pipeline
domain: mathematics
deps:
- cor-chebyshev-inequality-for-random-variables
- cor-expectation-linearity-monotonicity-and-modulus-bound
- def-cm-iid-sampling-model
- lem-variance-and-covariance-identities-for-random-variables
- thm-factorization-of-expectations-for-independent-variables
dependency_roles:
  cor-chebyshev-inequality-for-random-variables: mathematical-premise
  cor-expectation-linearity-monotonicity-and-modulus-bound: mathematical-premise
  def-cm-iid-sampling-model: mathematical-premise
  lem-variance-and-covariance-identities-for-random-variables: mathematical-premise
  thm-factorization-of-expectations-for-independent-variables: mathematical-premise
dependency_level: 1
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: 'Rick Durrett, Probability: Theory and Examples, 5th ed., Section 2.2.1:
      finite variance sum and Chebyshev argument'
    url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
verification:
  precheck: pass
---

## Statement

For a finite repeated-observation model of [[def-cm-iid-sampling-model]] with $n\ge1$, write its variables as $Y_1,\ldots,Y_n$, where $Y_i$ here denotes the supplier's $Y_{i-1}$ for $1\le i\le n$. They are IID square-integrable real random variables on one probability space, with common mean $\mu$ and variance $\sigma^2$. Put $\overline Y=n^{-1}\sum_{k=1}^nY_k$. Then
$$E[\overline Y]=\mu,\qquad E|\overline Y-\mu|^2=\frac{\sigma^2}{n},\qquad \mathbb P(|\overline Y-\mu|\ge a)\le\frac{\sigma^2}{na^2}\quad(a>0).$$
No extension to an infinite IID sequence is required; no convergence assertion is made for a single finite family.

## Facts & Assumptions

**Given:** The finite IID family and hypotheses in the Statement.

[L1] The finite sampling model adopts IID and finite second moment, and its variables have common mean and variance. ([[def-cm-iid-sampling-model]])

[L2] For independent integrable variables, expectations of products factor; for the identity functions, $E[Y_iY_j]=E[Y_i]E[Y_j]$ at distinct indices. ([[thm-factorization-of-expectations-for-independent-variables]])

[L3] Covariance is bilinear on finite square-integrable combinations and $\operatorname{Cov}(V,W)=E[VW]-E[V]E[W]$. ([[lem-variance-and-covariance-identities-for-random-variables]])

[L4] Expectations of finite integrable linear combinations are linear. ([[cor-expectation-linearity-monotonicity-and-modulus-bound]])

[L5] If $Z$ is square-integrable and $a>0$, then $\mathbb P(|Z-E[Z]|\ge a)\le\operatorname{Var}(Z)/a^2$. ([[cor-chebyshev-inequality-for-random-variables]])

## Proof

1.1 Square-integrability makes each $Y_k$ integrable by $2|Y_k|\le1+Y_k^2$, and the finite mean is square-integrable by $(\sum_k y_k)^2\le n\sum_k y_k^2$. Therefore [L4] gives $E[\overline Y]=n^{-1}\sum_k\mu=\mu$. [given, L1, L4, algebra]

2.1 For $i\ne j$, mutual independence and [L2] give $E[Y_iY_j]=\mu^2$, hence $\operatorname{Cov}(Y_i,Y_j)=0$ by [L3]. Bilinearity gives $\operatorname{Var}(\overline Y)=n^{-2}\sum_{i,j}\operatorname{Cov}(Y_i,Y_j)=n^{-2}\sum_{i=1}^n\sigma^2=\sigma^2/n$. Together with step 1.1 this is $E|\overline Y-\mu|^2=\sigma^2/n$. [given, step 1.1, L2, L3, algebra]

3.1 Apply [L5] to $\overline Y$ using steps 1.1 and 2.1 to obtain the stated probability bound for every $a>0$. The finite calculation includes $n=1$ and $\sigma^2=0$ without dividing by a variance. [step 1.1, step 2.1, L5, algebra] ∎
