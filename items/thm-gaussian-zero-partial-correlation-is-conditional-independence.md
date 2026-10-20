---
id: thm-gaussian-zero-partial-correlation-is-conditional-independence
kind: theorem
title: "Zero Gaussian partial correlation is conditional independence"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-gaussian-partial-correlation
  - def-multivariate-normal-law
  - thm-nondegenerate-multivariate-normal-law-has-density
  - def-conditional-independence-given-a-sigma-algebra
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-independent-random-elements
  - def-axiom-of-choice
proof_strategy: direct
axiom_use: "Assume AC, as required by the supplied multivariate-normal and conditional-independence interfaces. The finite-dimensional calculations use no additional choice."
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
    - title: "Kalisch and Bühlmann, Estimating High-Dimensional Directed Acyclic Graphs with the PC-Algorithm, Proposition 2"
      url: "https://www.jmlr.org/papers/volume8/kalisch07a/kalisch07a.pdf"
    - title: "Lauritzen, Graphical Models lecture notes, §4.1.3, Proposition 4.2, pp. 97–98"
      url: "https://web.math.ku.dk/~lauritzen/papers/gmnotes.pdf"
---

## Statement

Assume AC. Let $X\sim N_p(\mu,\Sigma)$ be a nondegenerate multivariate-normal
vector, so $\Sigma$ is positive definite. For distinct $i,j$ and
$S\subseteq\{1,\ldots,p\}\setminus\{i,j\}$, the block
$K_{ij\mid S}$ in the definition of Gaussian partial correlation is positive
definite, and
$$ \rho_{ij\mid S}=0\quad\Longleftrightarrow\quad \sigma(X_i)\perp\!\!\!\perp\sigma(X_j)\mid\sigma(X_S). $$

## Statement references

[Kalisch and Bühlmann, Proposition 2](https://www.jmlr.org/papers/volume8/kalisch07a/kalisch07a.pdf)

[Lauritzen, §4.1.3, Proposition 4.2](https://web.math.ku.dk/~lauritzen/papers/gmnotes.pdf)

## Facts & Assumptions

**Given:** AC, a positive-definite Gaussian covariance matrix, and the indices $i,j,S$ in the Statement.

[F1] A finite vector is multivariate normal when every linear projection is a univariate normal with the corresponding projected mean and variance; its covariance is the stated matrix. [[def-multivariate-normal-law]]

[F2] A positive-definite multivariate-normal law has density proportional to $\exp(-\frac12(x-\mu)^T\Sigma^{-1}(x-\mu))$. [[thm-nondegenerate-multivariate-normal-law-has-density]]

[F3] Conditional independence is the conditional-product identity for every pair of bounded measurable real functions. [[def-conditional-independence-given-a-sigma-algebra]]

[F4] Finite random vectors use the finite product sigma-algebra. [[def-product-sigma-algebra-and-finite-product-sigma-algebras]]

[F5] Independence of random elements means independence of their generated sigma-algebras. [[def-independent-random-elements]]

[A1] AC is assumed, as required by [F1]–[F3]. [[def-axiom-of-choice]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 Partition $X=(Y,Z)$ with $Y=(X_i,X_j)$ and $Z=X_S$; if $S=\varnothing$, omit the $Z$ block. For nonempty $S$, $\Sigma_{S,S}$ is positive definite because every nonzero vector supported on $S$ has positive $\Sigma$-quadratic form, so it is invertible. Put $A=\Sigma_{Y,S}\Sigma_{S,S}^{-1}$ and $U=Y-\mu_Y-A(Z-\mu_Z)$. Then $\operatorname{Cov}(U,Z)=0$ and $\operatorname{Cov}(U)=K_{ij\mid S}$. For every nonzero $u\in\mathbb R^2$, the quadratic form of $\Sigma$ at $(u,-\Sigma_{S,S}^{-1}\Sigma_{S,Y}u)$ equals $u^TK_{ij\mid S}u>0$. Thus $K_{ij\mid S}$ is positive definite; for empty $S$ this follows directly from the principal $2\times2$ covariance block. [given, F1, A1, construct]

2.1 The vector $(U,Z)$ is a linear image of $X$, hence is jointly Gaussian by [F1]. Its covariance is block diagonal with blocks $K_{ij\mid S}$ and $\Sigma_{S,S}$. By [F2], the joint density factors as the product of the two Gaussian densities, since the inverse and determinant of a block-diagonal covariance split by blocks. Integrating over measurable rectangles shows $U$ and $Z$ are independent by [F5]. It follows that, conditionally on $Z$, $Y$ is the translate $\mu_Y+A(Z-\mu_Z)+U$ and has conditional covariance $K_{ij\mid S}$. [F1, F2, F4, F5, step 1.1, algebra]

3.1 If $(K_{ij\mid S})_{12}=0$, the positive-definite bivariate Gaussian density of $U$ factors into its one-coordinate densities. Thus the coordinates of $U$ are independent. Since $U$ is independent of $Z$, the conditional law of $X_i,X_j$ given $Z$ is the product of its conditional marginals. Integrating bounded measurable functions against this product conditional law gives the identity in [F3], hence conditional independence. [F2, F3, F5, step 2.1]

3.2 Conversely assume the conditional independence in the Statement. Apply [F3] to the sine and cosine functions of each coordinate and combine the four real identities to obtain factorization of the conditional characteristic function at $(1,1)$. By step 2.1, the joint conditional characteristic function is the product of the marginal factors times $\exp(-(K_{ij\mid S})_{12})$. All other factors are nonzero; therefore $\exp(-(K_{ij\mid S})_{12})=1$. The covariance entry is real, so $(K_{ij\mid S})_{12}=0$. [F3, step 2.1, algebra]

4.1 The diagonal entries of $K_{ij\mid S}$ are positive by step 1.1. Its off-diagonal entry is zero exactly when the normalized entry $\rho_{ij\mid S}$ is zero, proving both implications. [step 1.1, step 3.1, step 3.2, algebra] ∎
