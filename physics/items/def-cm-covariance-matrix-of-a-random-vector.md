---
id: def-cm-covariance-matrix-of-a-random-vector
kind: definition
title: "Mean vector and covariance matrix of a square-integrable random vector"
status: draft
origin: pipeline
domain: mathematics
deps: [cor-additivity-of-the-nonnegative-lebesgue-integral, cor-chebyshev-inequality-for-random-variables, cor-expectation-linearity-monotonicity-and-modulus-bound, def-euclidean-inner-product, def-jacobian-matrix-and-gradient, def-matrix-space, def-measure-null-set-and-almost-everywhere, def-moments-variance-and-covariance, def-probability-measure, def-random-element-and-real-random-variable, lem-variance-and-covariance-identities-for-random-variables, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-continuous-preimages-of-borel-sets-are-borel, thm-the-lebesgue-integral-respects-almost-everywhere-equality]
dependency_roles:
  cor-additivity-of-the-nonnegative-lebesgue-integral: mathematical-premise
  cor-chebyshev-inequality-for-random-variables: mathematical-premise
  cor-expectation-linearity-monotonicity-and-modulus-bound: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-matrix-space: mathematical-premise
  def-measure-null-set-and-almost-everywhere: mathematical-premise
  def-moments-variance-and-covariance: mathematical-premise
  def-probability-measure: mathematical-premise
  def-random-element-and-real-random-variable: mathematical-premise
  lem-variance-and-covariance-identities-for-random-variables: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  thm-continuous-preimages-of-borel-sets-are-borel: mathematical-premise
  thm-the-lebesgue-integral-respects-almost-everywhere-equality: mathematical-premise
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
$X:\Omega\to\mathbb R^m$ be a random element with target
$(\mathbb R^m,\mathcal B(\mathbb R^m))$ ([[def-random-element-and-real-random-variable]]).
Use the statistical one-based coordinate labels: for every $v\in\mathbb R^m$
write $v_i:=v(i-1)$ for $1\le i\le m$, so
$X_i(\omega)=X(\omega)(i-1)$. Each $X_i$ is a real random variable because
the coordinate projection $x\mapsto x(i-1)$ is continuous and therefore has
Borel preimages of Borel sets
([[thm-continuous-preimages-of-borel-sets-are-borel]]).
For every integer $r\ge1$ and matrix
$A\in M_{r\times m}(\mathbb R)$, the notation $A_{ij}$ below means its
zero-based matrix entry
$A(i-1,j-1)$ for $1\le i\le r$ and
$1\le j\le m$; likewise $\Sigma_{ij}$ means the entry at $(i-1,j-1)$ in
the covariance matrix below in the matrix space of [[def-matrix-space]]. These
are labels for the root library's zero-based function entries, not a different
matrix convention. If $U\subseteq\mathbb R^m$ is open, $h:U\to\mathbb R^r$
has all first partials at $a\in U$, and $A=Jh(a)$, then $A_{ij}$ in this
notation is $\partial_{j-1}h_{i-1}(a)$, with the zero-based Jacobian
convention of [[def-jacobian-matrix-and-gradient]].
Assume $X$ is **square-integrable**:
$$E\bigl[|X|^2\bigr]=\sum_{i=1}^{m}E\bigl[X_i^2\bigr]<+\infty ,$$
where $|\cdot|$ is the Euclidean norm of [[def-euclidean-inner-product]].
Its **mean vector** is
$$\mu=E[X]:=\bigl(E[X_1],\dots,E[X_m]\bigr)\in\mathbb R^m ,$$
the coordinates being the expectations of
[[def-moments-variance-and-covariance]]. Its **covariance matrix** is the
$m\times m$ real matrix of [[def-matrix-space]]
$$\Sigma=\operatorname{Cov}(X):=\bigl(\Sigma_{ij}\bigr)_{i,j=1}^{m},\qquad \Sigma_{ij}:=E\bigl[(X_i-\mu_i)(X_j-\mu_j)\bigr]\in\mathbb R .$$
For the random vector $X$ the entries $\Sigma_{ij}$ are also written
$\operatorname{Cov}(X_i,X_j)$, and $\Sigma_{ii}=\operatorname{Var}(X_i)$.

### Well-definedness and elementary properties

**Integrability of the entries.** Square-integrability gives
$E[X_i^2]<+\infty$ for each $i$. Since the underlying measure is a
probability measure, the elementary inequality
$$|X_i|\le \tfrac12\bigl(1+X_i^2\bigr)$$
gives $E|X_i|\le\tfrac12(1+E[X_i^2])<+\infty$ by monotonicity and
homogeneity of the nonnegative integral
([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]); hence $X_i$
is integrable and $\mu_i=E[X_i]$ is finite
([[def-moments-variance-and-covariance]]). Also
$$(X_i-\mu_i)^2\le2X_i^2+2\mu_i^2,$$
so $X_i-\mu_i$ is square-integrable; the probability-space inequality
$$|X_i-\mu_i|\le\tfrac12\bigl(1+(X_i-\mu_i)^2\bigr)$$
then makes it integrable as well. Finally
$$|(X_i-\mu_i)(X_j-\mu_j)|\le \tfrac12\bigl((X_i-\mu_i)^2+(X_j-\mu_j)^2\bigr),$$
and the right-hand side is integrable by additivity, monotonicity and
homogeneity of the nonnegative integral
([[cor-additivity-of-the-nonnegative-lebesgue-integral]],
[[prop-order-and-scalar-rules-for-the-nonnegative-integral]]); hence every
$\Sigma_{ij}$ is a finite real number.

**Symmetry.** For all $i,j$ the real numbers $(X_i-\mu_i)(X_j-\mu_j)$ and
$(X_j-\mu_j)(X_i-\mu_i)$ are equal pointwise, so $\Sigma_{ij}=\Sigma_{ji}$;
thus $\Sigma^{\mathsf T}=\Sigma$.

For $M\in M_{m\times m}(\mathbb R)$ and $z\in\mathbb R^m$, write
$$z^{\mathsf T}Mz:=\sum_{i=1}^{m}\sum_{j=1}^{m}z_iM_{ij}z_j.$$
For a real symmetric $m\times m$ matrix $M$, **positive semidefinite** means
$z^{\mathsf T}Mz\ge0$ for every $z\in\mathbb R^m$, and **positive definite**
means $z^{\mathsf T}Mz>0$ for every nonzero $z\in\mathbb R^m$. For a real
random variable $Z$, **almost surely constant** means that $Z=c$ outside a
measurable $\mathbb P$-null set for some $c\in\mathbb R$
([[def-measure-null-set-and-almost-everywhere]]).

**Positive semidefiniteness.** Let $z=(z_1,\dots,z_m)\in\mathbb R^m$. The
random variable $W:=\sum_{i=1}^{m}z_iX_i$ is a finite linear combination of
square-integrable random variables, hence square-integrable, and bilinearity
of covariance ([[lem-variance-and-covariance-identities-for-random-variables]])
gives
$$z^{\mathsf T}\Sigma z=\sum_{i,j=1}^{m}z_iz_j\operatorname{Cov}(X_i,X_j) =\operatorname{Cov}(W,W)=\operatorname{Var}(W) =E\bigl[(W-E[W])^2\bigr]\ge0 ,$$
the inequality holding because $(W-E[W])^2\ge0$ pointwise and expectation is
monotone ([[cor-expectation-linearity-monotonicity-and-modulus-bound]]). If
$z^{\mathsf T}\Sigma z=\operatorname{Var}(W)=0$, Chebyshev's inequality gives
$\mathbb P(|W-E[W]|\ge1/r)=0$ for every integer $r\ge1$; the union of these
events is $\{W\ne E[W]\}$, so $W=E[W]$ almost surely
([[cor-chebyshev-inequality-for-random-variables]]). Conversely, if $W=c$
almost surely, invariance of the integral under almost-everywhere equality
gives $E[W]=c$ and $E[(W-E[W])^2]=0$
([[thm-the-lebesgue-integral-respects-almost-everywhere-equality]]). Hence
$z^{\mathsf T}\Sigma z=0$ exactly when $W$ is almost surely constant, and
$\Sigma$ is positive definite exactly when for every $z\ne0$ the random
variable $\sum_{i=1}^{m}z_iX_i$ fails to be almost surely constant.

No independence hypothesis is used anywhere in this definition; $\Sigma$
records the pairwise covariances of the coordinates.
