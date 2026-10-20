---
id: thm-finite-gaussian-component-density-normalized
kind: theorem
title: "Positive-definite multivariate Gaussian density is normalized"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - def-axiom-of-choice
  - def-countable-choice
  - def-determinant-of-a-square-matrix
  - def-finite-gaussian-mixture
  - def-multivariate-normal-law
  - def-standard-normal-and-normal-laws
  - lem-ac-supplies-sequential-choices-for-probability-constructions
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-determinant-of-a-triangular-matrix
  - thm-determinant-multiplicative
  - thm-determinant-of-transpose
  - thm-independent-random-elements-have-product-joint-law
  - thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets
  - thm-linear-change-of-variables-for-lebesgue-measure
  - thm-measure-uniqueness-on-a-sigma-finite-pi-system
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Christopher M. Bishop, Pattern Recognition and Machine Learning, §2.3, Equation (2.43)"
      url: "https://www.microsoft.com/en-us/research/wp-content/uploads/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf"
---

## Statement

Assume AC. Let $p\ge1$, let $\mu\in\mathbb R^p$, and let $\Sigma\in\mathbb R^{p\times p}$ be symmetric positive definite. Let $Z_1,\ldots,Z_p$ be independent standard normal random variables, let $Z=(Z_1,\ldots,Z_p)^{\mathsf T}$, and set $X=\mu+\Sigma^{1/2}Z$, where $\Sigma^{1/2}$ is the symmetric positive-definite square root. Then the law of $X$ has Lebesgue density

$$\phi_p(x;\mu,\Sigma)=(2\pi)^{-p/2}(\det\Sigma)^{-1/2}\exp\!\left(-\tfrac12(x-\mu)^{\mathsf T}\Sigma^{-1}(x-\mu)\right),\qquad x\in\mathbb R^p.$$

In particular, $\phi_p$ is nonnegative and $\int_{\mathbb R^p}\phi_p(x;\mu,\Sigma)\,dx=1$.

## Facts & Assumptions

**Given:** Assume AC, $p\ge1$, a mean $\mu\in\mathbb R^p$, and a real symmetric positive-definite covariance matrix $\Sigma\in\mathbb R^{p\times p}$.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function. Here AC supplies the independent normal coordinates in the multivariate-normal construction and countable choice for the two cited Lebesgue change-of-variables results.

[F1] [[def-finite-gaussian-mixture]]: for SPD $\Sigma$, $\phi_p(x;\mu,\Sigma)$ is the displayed nonnegative formula using $\det\Sigma$ and $\Sigma^{-1}$.

[F2] [[def-standard-normal-and-normal-laws]]: $N(0,1)$ has Lebesgue density $\phi_1(t)=(2\pi)^{-1/2}e^{-t^2/2}$ with total mass one.

[F3] [[def-multivariate-normal-law]]: under AC, $N_p(\mu,\Sigma)$ can be realized as $\mu+\Sigma^{1/2}Z$ with independent standard-normal coordinates.

[F4] [[thm-independent-random-elements-have-product-joint-law]]: a finite family of independent random elements has joint law equal to the product of its marginal laws.

[F5] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: nonnegative measurable functions on sigma-finite product spaces have measurable sections and equal iterated and product integrals.

[F6] [[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]]: under countable choice, product Lebesgue measure on finite-dimensional Euclidean factors agrees with Euclidean Lebesgue measure on Borel sets.

[F7] [[thm-measure-uniqueness-on-a-sigma-finite-pi-system]]: two measures agreeing on a generating pi-system and on an increasing finite-measure exhaustion from that system agree on the generated sigma-algebra.

[F8] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: a real symmetric endomorphism of a finite-dimensional real inner-product space has an orthonormal eigenbasis.

[F9] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]: assuming countable choice, a $C^1$ diffeomorphism $T:U\to V$ between open subsets of $\mathbb R^p$ satisfies $\int_V f(y)\,dy=\int_U f(T(x))|\det DT(x)|\,dx$ for every nonnegative Lebesgue-measurable $f$.

[F10] [[thm-linear-change-of-variables-for-lebesgue-measure]]: assuming countable choice, an invertible linear map with matrix $A$ scales Lebesgue measure by $|\det A|$.

[F11] [[def-determinant-of-a-square-matrix]], [[thm-determinant-multiplicative]], [[thm-determinant-of-transpose]], and [[thm-determinant-of-a-triangular-matrix]]: determinant is the Leibniz sum, is multiplicative and transpose-invariant, and equals the product of diagonal entries for triangular matrices; $\det I=1$.

[F12] [[lem-ac-supplies-sequential-choices-for-probability-constructions]]: AC implies countable choice, so the countable-choice hypotheses of [F6], [F9], and [F10] hold.

## Proof
1.1 By [F8], write $\Sigma=U\operatorname{diag}(\lambda_1,\ldots,\lambda_p)U^{\mathsf T}$ with $U^{\mathsf T}U=I$. For a unit eigenvector $u_j$, $\lambda_j=u_j^{\mathsf T}\Sigma u_j>0$. Define $A:=U\operatorname{diag}(\sqrt{\lambda_1},\ldots,\sqrt{\lambda_p})U^{\mathsf T}$. Its eigenvalues are the positive numbers $\sqrt{\lambda_j}$, so it is symmetric positive definite and invertible; in this basis, both $A^2$ and $\Sigma$ have diagonal entries $\lambda_j$, and both $A^{-2}$ and $\Sigma^{-1}$ have diagonal entries $1/\lambda_j$. By determinant multiplicativity and transpose invariance, $(\det U)^2=\det(U^{\mathsf T}U)=\det I=1$. Applying multiplicativity to the displayed diagonalizations and the triangular determinant formula to the diagonal matrices gives $\det\Sigma=(\det U)^2\prod_j\lambda_j=\prod_j\lambda_j$ and $\det A=(\det U)^2\prod_j\sqrt{\lambda_j}=\prod_j\sqrt{\lambda_j}=\sqrt{\det\Sigma}>0$. [given, F8, F11, construct, algebra]

1.2 By [F2] and [F4], the joint law of $Z$ is the product of its standard-normal marginals. Define $g(y):=\prod_{j=1}^p\phi_1(y_j)=(2\pi)^{-p/2}e^{-\|y\|_2^2/2}$. Tonelli [F5] and the product-measure identity [F6] give $\int_{\mathbb R^p}g\,d\lambda_p=\prod_{j=1}^p\int_{\mathbb R}\phi_1\,d\lambda_1=1$ and, for every Borel rectangle $R=\prod_{j=1}^p B_j$, $\int_R g\,d\lambda_p=\prod_{j=1}^p\int_{B_j}\phi_1\,d\lambda_1$. Thus $g\,d\lambda_p$ and the product law of $Z$ are probability measures agreeing on rectangles. The rational half-open rectangles form a generating pi-system; $(-N,N]^p$ is an increasing exhaustion from it, and the common rectangle values make their measures equal and finite on every such box. Hence [F7] identifies the measures. AC supplies countable choice for the product-Lebesgue identity [F6]. [A1, F2, F4, F5, F6, F7, F12, algebra]

2.1 Let $T(y)=\mu+Ay$. By step 1.1, $A$ is invertible, so $T$ is a $C^1$ diffeomorphism of $\mathbb R^p$ with $|\det DT|=\det A$. The linear measure-scaling result [F10] confirms this is the Lebesgue volume factor. The displayed function $\phi_p$ is continuous and positive, so $f(x)=\mathbf1_E(x)\phi_p(x;\mu,\Sigma)$ is nonnegative Borel for every Borel $E\subseteq\mathbb R^p$. AC supplies the countable-choice assumption of [F9] by [F12]. Apply [F9] to $f$ and the change of variables by $T$ to obtain $\int_E\phi_p(x;\mu,\Sigma)\,dx=\int_{T^{-1}(E)}\phi_p(T(y);\mu,\Sigma)\det A\,dy.$ For $x=T(y)$, $x-\mu=Ay$ and $A^{\mathsf T}\Sigma^{-1}A=A A^{-2}A=I$. Thus the exponent in [F1] becomes $-\|y\|_2^2/2$, while $(\det\Sigma)^{-1/2}\det A=1$ by step 1.1. Hence $\phi_p(T(y);\mu,\Sigma)\det A=g(y)$. The last integral equals $\int_{T^{-1}(E)}g(y)\,dy=\mathbb P(X\in E)$ by step 1.2 and the definition of $X$. Thus $\phi_p$ is the Lebesgue density of $X$. [A1, F1, F9, F10, F12, step 1.1, step 1.2, algebra]

3.1 By [F3], $X$ has law $N_p(\mu,\Sigma)$. Step 2.1 identifies that law on every Borel set with integration against $\phi_p$; taking $E=\mathbb R^p$ gives $\int_{\mathbb R^p}\phi_p(x;\mu,\Sigma)\,dx=\mathbb P(X\in\mathbb R^p)=1$. Nonnegativity follows directly from [F1] and $\det\Sigma>0$ in step 1.1. [F1, F3, step 1.1, step 2.1, algebra] ∎