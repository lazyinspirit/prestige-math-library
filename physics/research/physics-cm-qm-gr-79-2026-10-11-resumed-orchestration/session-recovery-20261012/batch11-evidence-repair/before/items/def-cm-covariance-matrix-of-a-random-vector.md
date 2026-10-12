---
id: def-cm-covariance-matrix-of-a-random-vector
kind: definition
title: "Mean vector and covariance matrix of a square-integrable random vector"
status: draft
origin: pipeline
domain: mathematics
deps: [cor-additivity-of-the-nonnegative-lebesgue-integral, cor-expectation-linearity-monotonicity-and-modulus-bound, def-euclidean-inner-product, def-matrix-space, def-moments-variance-and-covariance, def-probability-measure, def-random-element-and-real-random-variable, lem-variance-and-covariance-identities-for-random-variables, prop-order-and-scalar-rules-for-the-nonnegative-integral]
dependency_roles:
  cor-additivity-of-the-nonnegative-lebesgue-integral: mathematical-premise
  cor-expectation-linearity-monotonicity-and-modulus-bound: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-matrix-space: mathematical-premise
  def-moments-variance-and-covariance: mathematical-premise
  def-probability-measure: mathematical-premise
  def-random-element-and-real-random-variable: mathematical-premise
  lem-variance-and-covariance-identities-for-random-variables: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
dependency_level: 0
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "JCGM 100:2008, Evaluation of measurement data — Guide to the expression of uncertainty in measurement (BIPM), clauses C.2.9, C.2.11, C.3.4 and C.3.5"
      url: "https://www.bipm.org/documents/20126/2071204/JCGM_100_2008_E.pdf"
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Section 3.10 (Limit Theorems in R^d; Theorem 3.10.7: the covariance matrix Gamma_ij = E((X_{n,i} - mu_i)(X_{n,j} - mu_j)) of a random vector)"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
verification:
  precheck: n/a
---

## Definition

Let $(\Omega,\mathfrak F,\mathbb P)$ be a probability space
([[def-probability-measure]]), let $m\ge1$, and let
$X=(X_1,\dots,X_m):\Omega\to\mathbb R^m$ be a random element with target
$(\mathbb R^m,\mathcal B(\mathbb R^m))$ that is **square-integrable**:
$$E\bigl[|X|^2\bigr]=\sum_{i=1}^{m}E\bigl[X_i^2\bigr]<+\infty ,$$
where $|\cdot|$ is the Euclidean norm of [[def-euclidean-inner-product]].
Its **mean vector** is
$$\mu=E[X]:=\bigl(E[X_1],\dots,E[X_m]\bigr)\in\mathbb R^m ,$$
the coordinates being the expectations of
[[def-moments-variance-and-covariance]]. Its **covariance matrix** is the
$m\times m$ real matrix of [[def-matrix-space]]
$$\Sigma=\operatorname{Cov}(X):=\bigl(\Sigma_{ij}\bigr)_{i,j=1}^{m},\qquad \Sigma_{ij}:=E\bigl[(X_i-\mu_i)(X_j-\mu_j)\bigr]\in\mathbb R .$$
For a random vector $Y$ the entries $\Sigma_{ij}$ are also written
$\operatorname{Cov}(X_i,X_j)$, and $\Sigma_{ii}=\operatorname{Var}(X_i)$.

### Well-definedness and elementary properties

**Integrability of the entries.** Square-integrability gives
$E[X_i^2]<+\infty$ for each $i$. Since $X$ takes values in a probability
space, the elementary inequality
$$|X_i|\le \tfrac12\bigl(1+X_i^2\bigr)$$
and monotonicity and homogeneity of the nonnegative integral
([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]) show that each
$X_i$ is integrable, so $\mu_i=E[X_i]$ is a finite real number
([[def-moments-variance-and-covariance]]). Likewise
$$|X_i-\mu_i|\le |X_i|+|\mu_i|\le \tfrac12\bigl(1+X_i^2\bigr)+|\mu_i|,$$
so $X_i-\mu_i$ is square-integrable and integrable. Finally
$$|(X_i-\mu_i)(X_j-\mu_j)|\le \tfrac12\bigl((X_i-\mu_i)^2+(X_j-\mu_j)^2\bigr),$$
and the right-hand side is integrable by additivity, monotonicity and
homogeneity of the nonnegative integral
([[cor-additivity-of-the-nonnegative-lebesgue-integral]],
[[prop-order-and-scalar-rules-for-the-nonnegative-integral]]); hence every
$\Sigma_{ij}$ is a finite real number.

**Symmetry.** For all $i,j$ the real numbers $(X_i-\mu_i)(X_j-\mu_j)$ and
$(X_j-\mu_j)(X_i-\mu_i)$ are equal pointwise, so $\Sigma_{ij}=\Sigma_{ji}$;
thus $\Sigma^{\mathsf T}=\Sigma$.

**Positive semidefiniteness.** Let $z=(z_1,\dots,z_m)\in\mathbb R^m$. The
random variable $W:=\sum_{i=1}^{m}z_iX_i$ is a finite linear combination of
square-integrable random variables, hence square-integrable, and bilinearity
of covariance ([[lem-variance-and-covariance-identities-for-random-variables]])
gives
$$z^{\mathsf T}\Sigma z=\sum_{i,j=1}^{m}z_iz_j\operatorname{Cov}(X_i,X_j) =\operatorname{Cov}(W,W)=\operatorname{Var}(W) =E\bigl[(W-E[W])^2\bigr]\ge0 ,$$
the inequality holding because $(W-E[W])^2\ge0$ pointwise and expectation is
monotone ([[cor-expectation-linearity-monotonicity-and-modulus-bound]]). In
particular $z^{\mathsf T}\Sigma z=0$ exactly when $W$ is almost surely
constant, so $\Sigma$ is positive definite exactly when for every $z\neq0$
the random variable $\sum_{i=1}^{m}z_iX_i$ fails to be almost surely
constant.

No independence hypothesis is used anywhere in this definition; $\Sigma$
records the pairwise covariances of the coordinates.
