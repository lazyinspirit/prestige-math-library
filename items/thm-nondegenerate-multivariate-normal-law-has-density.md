---
id: thm-nondegenerate-multivariate-normal-law-has-density
kind: theorem
title: "A positive-definite multivariate normal law has its Gaussian density"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-multivariate-normal-law
  - def-standard-normal-and-normal-laws
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - cor-countable-independent-copies-exist
  - thm-independent-random-elements-have-product-joint-law
  - thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - lem-characteristic-functions-under-affine-maps-and-independent-sums
  - lem-characteristic-function-of-a-normal-law
  - thm-uniqueness-of-a-law-from-its-characteristic-function
  - lem-characteristic-function-of-a-multivariate-normal-law
  - thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-continuous-preimages-of-borel-sets-are-borel
  - thm-determinant-of-transpose
  - thm-determinant-multiplicative
  - thm-determinant-of-a-triangular-matrix
  - lem-ac-supplies-sequential-choices-for-probability-constructions
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Fan Li, STA610 Lecture 4: Maximum Likelihood Estimation and Inference for the Hierarchical Normal Model, PDF p. 2"
      url: "https://stat.duke.edu/~fl35/teaching/610-26F/Lec4-MLE-HNM.pdf"
    - title: "Duchateau, Janssen, and Rowlands, Linear Mixed Models, Chapter 2 §2.4.2"
      url: "https://biometrics.ilri.org/Publication/Full%20Text/Linear_Mixed_Models/Chapter2_2_1to2_2.htm"
proof_strategy: direct
---

## Statement

Assume AC. Let $d\ge1$, $m\in\mathbb R^d$, and let $\Sigma$ be a real symmetric positive-definite $d\times d$ matrix. If $X\sim N_d(m,\Sigma)$, then its law has Lebesgue density
$$f_{m,\Sigma}(x)=(2\pi)^{-d/2}\det(\Sigma)^{-1/2} \exp\!\left(-\tfrac12(x-m)^T\Sigma^{-1}(x-m)\right), \qquad x\in\mathbb R^d.$$

## Facts & Assumptions

**Given:** AC, a finite dimension $d\ge1$, a mean vector $m$, and a positive-definite covariance matrix $\Sigma$.

[F1] The standard normal law has density $(2\pi)^{-1/2}e^{-z^2/2}$, and the multivariate-normal construction permits singular covariance. [[def-standard-normal-and-normal-laws]], [[def-multivariate-normal-law]].

[F2] Finite independent random elements have product joint law. [[thm-independent-random-elements-have-product-joint-law]].

[F3] In finite Euclidean dimension, product Lebesgue measure agrees with Euclidean Lebesgue measure on Borel sets; nonnegative product integrals obey Tonelli. [[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]].

[F4] Under countable choice, a $C^1$ diffeomorphism satisfies the change-of-variables formula for every nonnegative Lebesgue-measurable integrand; continuous maps have Borel preimages of Borel sets. [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]], [[thm-continuous-preimages-of-borel-sets-are-borel]].

[F5] Positive-definite $\Sigma$ has a Cholesky factorization $\Sigma=LL^T$ with $L$ lower triangular and positive diagonal. [[thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]].

[F6] Characteristic functions of finite independent sums and affine images follow the stated product and affine rules. [[lem-characteristic-functions-under-affine-maps-and-independent-sums]].

[F7] Scalar normal characteristic functions determine their laws. [[lem-characteristic-function-of-a-normal-law]], [[thm-uniqueness-of-a-law-from-its-characteristic-function]].

[F8] A multivariate-normal law is specified by its scalar projection laws and is uniquely determined by its multivariate characteristic function. [[def-multivariate-normal-law]], [[lem-characteristic-function-of-a-multivariate-normal-law]].

[F9] The determinant is multiplicative, invariant under transpose, and equals the product of diagonal entries for triangular matrices. [[thm-determinant-multiplicative]], [[thm-determinant-of-transpose]], [[thm-determinant-of-a-triangular-matrix]].

[A1] AC holds; the cited bridge supplies countable and dependent choice (CC and DC), as defined by [[def-countable-choice]] and [[def-dependent-choice]], for the Gaussian construction and linear change-of-variables theorem. [[def-axiom-of-choice]], [[lem-ac-supplies-sequential-choices-for-probability-constructions]].

## Proof

**Given:** The hypotheses in the Statement.

1.1 By [A1], take $d$ independent standard-normal coordinates $Z_1,\ldots,Z_d$. Their joint law is the product of the coordinate laws by [F2]. Thus, using [F1] and [F3], the vector $Z=(Z_1,\ldots,Z_d)^T$ has Lebesgue density $f_Z(z)=(2\pi)^{-d/2}\exp(-z^Tz/2).$ [F1, F2, F3, A1]

2.1 Let $\Sigma=LL^T$ be the factorization from [F5]. For any $u\in\mathbb R^d$, the scalar $u^TLZ$ is a finite linear combination of the independent standard normals. By [F6] its characteristic function is $\prod_{k=1}^d \exp\!\left(-s^2(L^Tu)_k^2/2\right) =\exp\!\left(-s^2u^T\Sigma u/2\right),$ so [F7] gives $u^TLZ\sim N(0,u^T\Sigma u)$. Therefore $m+LZ$ has all the projection laws defining $N_d(m,\Sigma)$, and [F8] identifies its law with that of $X$. [F5, F6, F7, F8, step 1.1, algebra]

3.1 Let $T(z)=m+Lz$. It is a $C^1$ diffeomorphism with Jacobian determinant $\det L>0$. For any Borel set $E\subseteq\mathbb R^d$, define the nonnegative Borel function $g(x)=\mathbf1_E(x)f_Z(L^{-1}(x-m))/\det L$. By [F4] and the countable choice supplied by [A1], $\int_E f_Z(L^{-1}(x-m))(\det L)^{-1}\,dx =\int_{T^{-1}(E)} f_Z(z)\,dz =\mathbb P(TZ\in E).$ Thus the density in step 2.1 is $f_Z(L^{-1}(x-m))(\det L)^{-1}$. The determinant is positive because $L$ is triangular with positive diagonal. [A1, F4, F5, step 1.1, step 2.1]

4.1 Since $\det\Sigma=\det(LL^T)=(\det L)^2$ by [F9], and $(L^{-1})^TL^{-1}=\Sigma^{-1}$, substituting the expression for $f_Z$ from step 1.1 into step 3.1 gives exactly $f_{m,\Sigma}(x)$. [F9, step 1.1, step 3.1, algebra] ∎

## Remarks

Positive definiteness is essential for this Lebesgue-density formula. Singular Gaussian laws remain defined, but are supported on lower-dimensional affine subspaces and are not covered by this theorem.
