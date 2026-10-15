---
id: thm-multivariate-normal-conditional-law
kind: theorem
title: "Conditional law of a jointly Gaussian block with positive-definite observed covariance"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-multivariate-normal-law
  - lem-joint-gaussian-blocks-with-zero-cross-covariance-are-independent
  - def-measure-kernel-and-probability-kernel
  - def-law-or-distribution-of-a-random-element
  - thm-measurability-of-integration-against-a-kernel
  - thm-independent-random-elements-have-product-joint-law
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
justified_by: []
proof_strategy: direct
axiom_use: "The Axiom of Choice is inherited from the multivariate-normal and zero-cross-covariance independence suppliers. No stronger choice principle is used."
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
    - title: "Gelman et al., Bayesian Data Analysis, 3rd ed., §3.5"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
    - title: "Simo Särkkä, Bayesian Filtering and Smoothing, Appendix A.1"
      url: "https://users.aalto.fi/~ssarkka/pub/cup_book_online_20131111.pdf"
---

## Statement

Assume AC. Let $X\in\mathbb R^d$ and $Y\in\mathbb R^m$, with $d,m\ge1$, be
jointly multivariate normal with mean $(a,b)$ and positive-semidefinite block
covariance
$$\Sigma=\begin{pmatrix}A&C\\C^T&B\end{pmatrix},$$
where $B$ is positive definite. Then
$$S=A-CB^{-1}C^T$$
is positive semidefinite, and for every $y\in\mathbb R^m$ the probability law
$$K(y,\cdot)=N_d\!\left(a+CB^{-1}(y-b),S\right)$$
is defined. The map $K$ is a probability kernel and is a conditional law of
$X$ given $Y$: for all Borel $E\subseteq\mathbb R^d$ and
$F\subseteq\mathbb R^m$,
$$\mathbb P(X\in E,Y\in F)=\int_F K(y,E)\,\mathbb P_Y(dy).$$
The covariance $A$ and the conditional covariance $S$ may be singular.
Positive definiteness of $B$ is required; no pseudoinverse formula for
singular $B$ is asserted.

## Facts & Assumptions

**Given:** AC and a jointly Gaussian pair with the mean and block covariance
in the Statement.

[A1] AC is assumed by the multivariate-normal realization and zero-cross-covariance independence suppliers. [[def-axiom-of-choice]].

[F1] A multivariate-normal law may have positive-semidefinite covariance and is characterized by having the stated scalar-normal linear projections; its mean and covariance are the stated $m$ and $\Sigma$. [[def-multivariate-normal-law]].

[F2] Jointly Gaussian blocks with zero cross-covariance are independent, including when either covariance block is singular. [[lem-joint-gaussian-blocks-with-zero-cross-covariance-are-independent]].

[F3] A law is the pushforward probability measure of its random element. [[def-law-or-distribution-of-a-random-element]].

[F4] Integrating a nonnegative product-measurable function against a finite kernel gives a measurable function of the kernel parameter. [[thm-measurability-of-integration-against-a-kernel]].

[F5] Independent random elements have their product joint law. [[thm-independent-random-elements-have-product-joint-law]].

[F6] Tonelli evaluates nonnegative integrals on sigma-finite product spaces. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]].

[F7] Kernel evaluations are measurable and each probability-kernel section is a probability measure. [[def-measure-kernel-and-probability-kernel]].

## Proof

**Given:** AC and the jointly Gaussian pair $(X,Y)$.

1.1 Since $B$ is positive definite, it is invertible and symmetric. For any $u\in\mathbb R^d$, put $v=-B^{-1}C^Tu$. Positive semidefiniteness of $\Sigma$ gives $0\le \begin{pmatrix}u\\v\end{pmatrix}^T \Sigma\begin{pmatrix}u\\v\end{pmatrix} =u^T(A-CB^{-1}C^T)u=u^TSu.$ Thus $S$ is positive semidefinite. This calculation uses no inverse of $A$. [given, algebra]

2.1 Put $D=CB^{-1}$ and $R=X-a-D(Y-b)$. Every linear projection of $(R,Y)$ is an affine scalar projection of the jointly Gaussian pair $(X,Y)$, hence is normal by the projection characterization in [F1]; therefore $(R,Y)$ is jointly Gaussian. Its mean is $(0,b)$, and block covariance calculation gives $\operatorname{Cov}(R,Y)=C-DB=0,\qquad \operatorname{Cov}(R)=A-DC^T-CD^T+DBD^T=S.$ The block-independence result [F2] therefore makes $R$ independent of $Y$, even if $S$ is singular. [A1, F1, F2, given, step 1.1, algebra]

3.1 Let $\rho$ be the law of $R$, and define $K(y,E)=\int_{\mathbb R^d} \mathbf1_E\!\left(a+D(y-b)+r\right)\rho(dr).$ For each fixed $y$, this is the pushforward of the probability $\rho$ under the continuous affine map $r\mapsto a+D(y-b)+r$, so it is a probability measure by [F3]. The map $(y,r)\mapsto a+D(y-b)+r$ is continuous, hence the integrand is product-measurable for Borel $E$. The finite-kernel measurability theorem [F4] makes $y\mapsto K(y,E)$ Borel; therefore $K$ is a probability kernel by [F7]. Since $R\sim N_d(0,S)$ by [F1], its pushforward is $N_d(a+D(y-b),S)$ for every $y$. [A1, F1, F3, F4, F7, step 2.1]

4.1 By [F2] and [F5], the joint law of $(R,Y)$ is $\rho\otimes\mathbb P_Y$. The identity $X=a+D(Y-b)+R$ and Tonelli [F6] then give, for Borel $E,F$, $\mathbb P(X\in E,Y\in F) =\int_F\int_{\mathbb R^d}\mathbf1_E(a+D(y-b)+r)\rho(dr)\,\mathbb P_Y(dy) =\int_F K(y,E)\,\mathbb P_Y(dy).$ This is the defining conditional-law identity. It holds for every Borel observation set $F$, so the same kernel is a conditional law of $X$ given $Y$. The proof requires $B^{-1}$ only; singularity of $A$ or $S$ causes no change. [A1, F2, F5, F6, step 3.1, algebra] ∎