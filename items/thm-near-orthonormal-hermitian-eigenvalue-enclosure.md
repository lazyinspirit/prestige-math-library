---
id: thm-near-orthonormal-hermitian-eigenvalue-enclosure
kind: theorem
title: Near-orthonormal residual data enclose all ordered Hermitian eigenvalues
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [def-hermitian-residual-orthogonality-certificate, lem-complex-hermitian-eigenvalue-perturbation, thm-non-negative-square-root-exists-and-is-unique, thm-rank-nullity, thm-complex-spectral-theorem-for-normal-endomorphisms, def-operator-norm-on-a-finite-dimensional-inner-product-space, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, cor-operator-norm-submultiplicative-and-t-star-t-identity]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Nicholas J. Higham, Numerical Linear Algebra and Matrix Analysis, MIMS EPrint 2015.103, §§5.2 and 5.4"
      url: "https://eprints.maths.manchester.ac.uk/2411/01/covered/MIMS_ep2015_103.pdf"
---

## Statement

Let $n\ge1$ and let $(V,\Theta,\delta,\rho,M_A,M_\Theta,\tau)$ be a residual and orthogonality certificate for a nonempty family $\mathcal A$ of Hermitian matrices in $\mathbb C^{n\times n}$. Sort the diagonal entries of $\Theta$ increasingly as $\theta_{(1)}\le\cdots\le\theta_{(n)}$. Then every $A\in\mathcal A$ has ordered eigenvalues $\lambda_1(A)\le\cdots\le\lambda_n(A)$ satisfying
$$
|\lambda_k(A)-\theta_{(k)}|\le \rho+(M_A+M_\Theta)\tau,\qquad 1\le k\le n.
$$

## Facts & Assumptions

**Given:** The certificate and all bounds in [[def-hermitian-residual-orthogonality-certificate]].

[F1] Hermitian matrices are unitarily diagonalizable with real eigenvalues ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

[F2] A non-negative operator has a unique non-negative square root ([[thm-non-negative-square-root-exists-and-is-unique]]).

[F3] Complex Hermitian eigenvalues change by at most the spectral norm of a Hermitian perturbation ([[lem-complex-hermitian-eigenvalue-perturbation]]).

[F4] Rank-nullity converts injectivity of a square endomorphism into invertibility ([[thm-rank-nullity]]).

[F5] The operator norm is induced by the Euclidean norm and is unchanged by unitary factors ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

[F6] Cauchy–Schwarz gives $|x^*y|\le\|x\|_2\|y\|_2$ in a complex inner-product space ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

[F7] The induced operator norm is submultiplicative ([[cor-operator-norm-submultiplicative-and-t-star-t-identity]]).

## Proof

1.1 Put $G=V^*V$. For every unit vector $x$, [F6] gives $|x^*(G-I)x|\le\|x\|_2\|(G-I)x\|_2\le\|G-I\|_2\le\delta$ by [F5], so all eigenvalues $\mu$ of the Hermitian $G$ lie in $[1-\delta,1+\delta]$. Since $\delta<1$, $G$ is positive definite. By [F1] and [F2] it has a positive square root $H$; its eigenvalues are $\sqrt\mu>0$, so $H$ is invertible. [given, F1, F2, F5, F6, algebra]

2.1 Set $Q=VH^{-1}$. Then $Q^*Q=H^{-1}V^*VH^{-1}=I$. Thus $Q$ is injective and [F4] makes the square matrix $Q$ invertible, so $Q$ is unitary. The eigenvalues of $H$ lie between $\sqrt{1-\delta}$ and $\sqrt{1+\delta}$, hence $\|V-Q\|_2=\|Q(H-I)\|_2=\|H-I\|_2\le1-\sqrt{1-\delta}\le\tau$. For the upper deviation, $\sqrt{1+\delta}-1\le1-\sqrt{1-\delta}$ because $\sqrt{1+\delta}+\sqrt{1-\delta}\le2$. Unitary invariance in [F5] justifies the norm equality. [given, F1, F2, F4, F5, step 1.1, algebra]

3.1 For each $A\in\mathcal A$, the residual identity $AQ-Q\Theta=A(Q-V)+(AV-V\Theta)+(V-Q)\Theta$ and certificate bounds give $\|AQ-Q\Theta\|_2\le M_A\tau+\rho+\tau M_\Theta=\eta$. By the triangle inequality and submultiplicativity [F7], each product term in the identity is bounded by its factor norms, giving the displayed estimate. Since $Q$ is unitary, [F5] gives that $Q^*AQ$ has the same ordered eigenvalues as $A$ and, using [F7], $\|Q^*AQ-\Theta\|_2=\|Q^*(AQ-Q\Theta)\|_2\le\eta$. [given, F5, F7, step 2.1, algebra]

4.1 Both $Q^*AQ$ and $\Theta$ are Hermitian. Their eigenvalues are ordered increasingly in the statement of the enclosure, whereas [F3] uses decreasing order; reversing both lists sends index $k$ to $n+1-k$, so the same absolute-difference bound holds at each increasing index. Applying [F3] to their difference gives $|\lambda_k(A)-\theta_{(k)}|\le\eta$ for every $k$. The family bounds are uniform, so the same intervals hold for every $A\in\mathcal A$. [given, F3, step 3.1, algebra] ∎

