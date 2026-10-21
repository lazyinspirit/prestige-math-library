---
id: prop-ntk-positive-definite-on-the-sphere
kind: proposition
title: The limiting neural tangent kernel is strictly positive definite on every unit sphere
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-multivariate-normal-law
  - def-neural-tangent-kernel
  - def-width-normalized-fully-connected-network
  - lem-ac-supplies-sequential-choices-for-probability-constructions
  - lem-biased-hermite-kernel-is-strictly-positive-definite
  - lem-gaussian-activation-covariance-strictness-and-ntk-recursion
  - lem-gaussian-hermite-covariance-expansion
  - lem-gaussian-ltwo-hermite-completeness
  - lem-characteristic-function-of-a-multivariate-normal-law
  - thm-absolutely-continuous-functions-have-integrable-derivatives
  - thm-c1-lipschitz-ac-bv-hierarchy
  - thm-sequential-infinite-width-ntk-limit
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Arthur Jacot, Franck Gabriel, and Clément Hongler, Neural Tangent Kernel: Convergence and Generalization in Neural Networks"
      url: "https://arxiv.org/pdf/1806.07572"
      locator: "Proposition 2 and Appendix A.4, printed pp. 7 and 16–18; local proof supplies every-dimensional strictness without the imported sphere criterion"
    - title: "Tilmann Gneiting, Strictly and non-strictly positive definite functions on spheres"
      url: "https://arxiv.org/pdf/1111.7077"
      locator: "Theorem 1 and sphere conventions, printed pp. 6–8; circle and higher-dimensional criteria compared, not imported"
---

## Statement

Assume AC. Fix $n_0\ge1$, $L\ge2$, $\beta>0$, and a globally Lipschitz activation $\sigma:\mathbb R\to\mathbb R$ that is not a polynomial. For $x,y$ on the unit sphere $S^{n_0-1}=\{x\in\mathbb R^{n_0}:\|x\|_2=1\}$, define $\Sigma^1(x,y)=x\cdot y/n_0+\beta^2$. Recursively, for $r=2,\ldots,L$, let $(U,V)$ be a centered Gaussian pair whose covariance entries are $\Sigma^{r-1}(x,x),\Sigma^{r-1}(y,y),\Sigma^{r-1}(x,y)$, and set

$$\Sigma^r(x,y)=\mathbb E[\sigma(U)\sigma(V)]+\beta^2,\qquad D^r(x,y)=\mathbb E[s(U)s(V)],$$

where $s$ is any bounded Borel representative of the almost-everywhere derivative of $\sigma$. Set $\Theta^1=\Sigma^1$ and $\Theta^r(x,y)=\Theta^{r-1}(x,y)D^r(x,y)+\Sigma^r(x,y)$. Then for every finite list of pairwise distinct points $x_1,\ldots,x_N\in S^{n_0-1}$ and every nonzero $c\in\mathbb R^N$,

$$\sum_{i,j=1}^N c_ic_j\Theta^L(x_i,x_j)>0.$$

Thus the scalar limiting neural tangent kernel is strictly positive definite on every finite set of distinct sphere points, for every $n_0\ge1$ and $L\ge2$. In dimension $n_0=1$ this includes both antipodal points of $S^0=\{-1,1\}$.

## Statement references

[Jacot, Gabriel, and Hongler, Proposition 2 and Appendix A.4, limiting NTK positivity](https://arxiv.org/pdf/1806.07572)

[Gneiting, Theorem 1 and sphere conventions; this proof handles $S^0$ and every dimension directly](https://arxiv.org/pdf/1111.7077)

[[lem-biased-hermite-kernel-is-strictly-positive-definite|Positive bias gives an all-positive power series that separates every finite sphere subset]]

[[lem-gaussian-activation-covariance-strictness-and-ntk-recursion|A nonconstant Lipschitz activation preserves strict covariance positivity at nondegenerate Gaussian inputs]]

[[thm-sequential-infinite-width-ntk-limit|The limiting scalar NTK is given by the stated covariance and tangent recursions]]

## Facts & Assumptions

**Given:** AC; $n_0\ge1$; $L\ge2$; $\beta>0$; a globally Lipschitz nonpolynomial activation; and finitely many pairwise distinct unit vectors.

[A1] AC supplies the Gaussian and Hermite probability constructions ([[def-axiom-of-choice]], [[lem-ac-supplies-sequential-choices-for-probability-constructions]]).

[F1] Every finite positive-semidefinite covariance matrix defines a centered Gaussian vector, singular cases included, and its covariance uniquely determines its law ([[def-multivariate-normal-law]], [[lem-characteristic-function-of-a-multivariate-normal-law]]).

[F2] A Lipschitz real function is absolutely continuous on compact intervals ([[thm-c1-lipschitz-ac-bv-hierarchy]]).

[F3] The Gaussian-L² Hermite basis is complete, and its covariance expansion plus the positive-bias coefficient argument give strict activation covariance on the sphere, including $n_0=1$ ([[lem-gaussian-ltwo-hermite-completeness]], [[lem-gaussian-hermite-covariance-expansion]], [[lem-biased-hermite-kernel-is-strictly-positive-definite]]).

[F4] For a finite nondegenerate Gaussian covariance matrix, a globally Lipschitz nonconstant activation has strictly positive activation covariance; its bounded Borel derivative representative yields a positive-semidefinite derivative Gram, and the Schur product of two positive-semidefinite matrices is positive semidefinite ([[lem-gaussian-activation-covariance-strictness-and-ntk-recursion]]).

[F5] The source-normalized infinite-width theorem gives $\Theta^1_{ij}=\Sigma^1_{ij}$ and $\Theta^r_{ij}=\Theta^{r-1}_{ij}\dot\Sigma^r_{ij}+\Sigma^r_{ij}$ entrywise, where $\dot\Sigma^r_{ij}$ is the Gaussian expectation of the two hidden-layer derivatives ([[def-neural-tangent-kernel]], [[def-width-normalized-fully-connected-network]], [[thm-sequential-infinite-width-ntk-limit]]).

[F6] Under countable choice, an absolutely continuous real function on a compact interval is differentiable almost everywhere ([[thm-absolutely-continuous-functions-have-integrable-derivatives]]).

## Proof
**Proof technique:** use the biased Hermite supplier for the potentially singular first covariance, then propagate strictness through positive-definite Gaussian covariances and the tangent recursion.

1.1 Fix pairwise distinct $x_1,\ldots,x_N$ on the sphere. The matrix $\Sigma^1$ is a Gram matrix because $\Sigma^1_{ij}=\langle(x_i/\sqrt{n_0},\beta),(x_j/\sqrt{n_0},\beta)\rangle$; it may be singular. Its diagonal is $q=n_0^{-1}+\beta^2>0$. By [F2] and [F6], on each compact interval $\sigma$ is absolutely continuous and differentiable almost everywhere; a countable union gives a null exceptional set, and the pointwise upper limit of bounded continuous difference quotients defines a bounded Borel representative $s_0$ equal to $\sigma\prime$ wherever it exists. The given representative $s$ agrees with $s_0$ outside a null set; include this set and the nondifferentiability set in one null set $E$. The multivariate Gaussian with covariance $\Sigma^1$ exists by [F1], and every coordinate has a positive-variance normal density and hence avoids $E$ almost surely, so the choice of representative does not change any expectation. [A1, F1, F2, F6, given, construct]

2.1 The covariance $\Sigma^2$ is strictly positive definite by [F3], applied to this finite set, with the same $n_0,\beta,\sigma$. The derivative matrix $D^2$ is positive semidefinite directly: for every $c\in\mathbb R^N$, $c^TD^2c=\mathbb E[(\sum_i c_i s(U_i))^2]\ge0$ for a common Gaussian vector $U$ of covariance $\Sigma^1$. Also, writing $u_i=(x_i/\sqrt{n_0},\beta)$, finite expansion gives $c^T(\Sigma^1\circ D^2)c=\mathbb E\left\|\sum_i c_i s(U_i)u_i\right\|_2^2\ge0,$ so $\Sigma^1\circ D^2$ is positive semidefinite. Hence $\Theta^2=\Sigma^2+\Sigma^1\circ D^2$ is strictly positive definite. [F1, F3, step 1.1, algebra]

3.1 Let $r\ge3$ and suppose $\Sigma^{r-1}$ is strictly positive definite. Its Gaussian vector therefore satisfies the nondegenerate-covariance hypothesis of [F4]; the activation is nonconstant because a nonpolynomial function cannot be constant. Thus $\Sigma^r$ is strictly positive definite and $D^r$ is positive semidefinite. If $\Theta^{r-1}$ is positive semidefinite, [F4] makes $\Theta^{r-1}\circ D^r$ positive semidefinite; adding $\Sigma^r$ makes $\Theta^r$ strictly positive definite. [F4, step 2.1, given, algebra]

4.1 Step 2.1 initializes the induction with both $\Sigma^2$ and $\Theta^2$ strictly positive definite. Repeated step 3.1 proves $\Theta^L$ strictly positive definite for each $L\ge2$. By [F5], this recursively defined kernel is the limiting NTK of the stated network on the chosen finite data set. Since the list was arbitrary, the claimed strict positive definiteness holds for every finite set of distinct sphere points, including the two points of $S^0$. [F5, step 2.1, step 3.1] ∎
