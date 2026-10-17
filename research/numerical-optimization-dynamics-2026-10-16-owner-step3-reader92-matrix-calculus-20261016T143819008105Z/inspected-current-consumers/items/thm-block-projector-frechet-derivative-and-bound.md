---
id: thm-block-projector-frechet-derivative-and-bound
kind: theorem
title: A separated block spectral projector is Frechet differentiable with a resolvent bound
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps: [def-rank-r-orthogonal-projector-domain, def-self-consistent-projector-response-map, lem-gapped-projector-map-well-defined, def-real-frechet-derivative-on-real-and-complex-matrix-spaces, def-c-one-map-and-local-inverse, lem-spectral-gap-persistence-and-uniform-resolvent-bound, thm-complex-spectral-theorem-for-normal-endomorphisms, def-matrix-product-and-identity-matrix, def-complex-line-integral-over-a-rectifiable-path, prop-linearity-of-complex-line-integrals, thm-existence-of-complex-line-integrals-on-rectifiable-paths, thm-cauchy-integral-formula-circle, thm-cauchy-theorem-one-exceptional-point-on-a-star-shaped-domain, def-operator-norm-on-a-finite-dimensional-inner-product-space, def-frobenius-matrix-norm, thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Tosio Kato, Perturbation Theory for Linear Operators, 2nd ed., Chapter II §§1.3–1.4
      url: https://www.maths.ed.ac.uk/~v1ranick/papers/kato1.pdf
    - title: Benjamin Texier, Basic matrix perturbation theory, §2
      url: https://ems.press/content/serial-article-files/44369?nt=1
    - title: Eric Cancès, Gaspard Kemlin, and Antoine Levitt, Convergence analysis of direct minimization and self-consistent iterations, §3.2
      url: https://arxiv.org/pdf/2004.09088
verification:
  precheck: pending
---

## Statement

Let $H_0\in\mathbb H_n$ have an occupied/unoccupied gap
$g=\lambda_{r+1}(H_0)-\lambda_r(H_0)>0$, and let $c,R,\Gamma$ be the circle
from [[lem-spectral-gap-persistence-and-uniform-resolvent-bound]]. For Hermitian
$H$ in the open operator-norm ball $\|H-H_0\|_{op}<g/4$, let $\Pi_r(H)$ be its
projector onto the $r$ lowest eigenvalues. Then $H\mapsto\Pi_r(H)$ is real
Frechet $C^1$ in the Frobenius norm and
$$D\Pi_r(H)[E]=\frac1{2\pi i}\int_\Gamma (zI-H)^{-1}E(zI-H)^{-1}\,dz$$
for each Hermitian direction $E$. With $\ell(\Gamma)=2\pi R$,
$$\|D\Pi_r(H)[E]\|_F\le\frac{16R}{g^2}\|E\|_F.$$
This is a block/cluster statement: no gap between eigenvalues inside either
cluster is required.

## Facts & Assumptions
**Given:** $H_0\in\mathbb H_n$, $1\le r<n$, a gap $g>0$, and a Hermitian $H$ in the stated ball; write $R_H(z)=(zI-H)^{-1}$.

[F1] The fixed circle $\Gamma$ separates the first $r$ eigenvalues from the rest by distance at least $g/4$, and $\|R_H(z)\|_{op}\le4/g$ on $\Gamma$ ([[lem-spectral-gap-persistence-and-uniform-resolvent-bound]]).

[F2] A Hermitian matrix is unitarily diagonalizable with real eigenvalues ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

[F3] On a positively oriented circle, Cauchy's formula gives $\frac1{2\pi i}\int_\Gamma(z-\lambda)^{-1}dz=1$ for an interior $\lambda$; if $\lambda$ is outside, the integrand is holomorphic on the disk and its integral is zero ([[thm-cauchy-integral-formula-circle]], [[thm-cauchy-theorem-one-exceptional-point-on-a-star-shaped-domain]]).

[F4] The complex line integral is linear, exists for continuous functions on a rectifiable contour, and obeys the triangle inequality by its Riemann-sum definition ([[def-complex-line-integral-over-a-rectifiable-path]], [[prop-linearity-of-complex-line-integrals]], [[thm-existence-of-complex-line-integrals-on-rectifiable-paths]]).

[F5] The real Frechet derivative is the linear first-order approximation on real matrix spaces ([[def-real-frechet-derivative-on-real-and-complex-matrix-spaces]]).

[F6] The operator norm is bounded by the Frobenius norm, and the Frobenius norm is the Euclidean norm of the matrix entries ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]], [[def-frobenius-matrix-norm]], [[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]]).

[F7] A real-coordinate map is $C^1$ when it is Frechet differentiable everywhere on its open domain and its derivative is continuous ([[def-c-one-map-and-local-inverse]], [[def-real-frechet-derivative-on-real-and-complex-matrix-spaces]]).

## Proof


1.1 Since $\|A\|_{op}\le\|A\|_F$ by [F6], every point of the operator-norm ball has a Frobenius neighborhood contained in it; hence the stated domain is open for the real Frechet definition. Diagonalize $H=U\operatorname{diag}(\mu_1,\ldots,\mu_n)U^*$ with $\mu_1\le\cdots\le\mu_n$ by [F2]. Since [F1] places exactly $\mu_1,\ldots,\mu_r$ inside $\Gamma$, the resolvent is $U\operatorname{diag}((z-\mu_j)^{-1})U^*$ on the contour. [F1, F2, F6]

1.2 For a sufficiently small Hermitian perturbation $E$ with $H+E$ still in the ball, the inverse identity gives $R_{H+E}=R_H+R_HE R_{H+E}$. Subtracting $R_H+R_HE R_H$ yields $R_{H+E}-R_H-R_HE R_H=R_HE R_HE R_{H+E}.$ The identity follows by multiplying the two inverse equations for $zI-H$ and $zI-H-E$; all inverses exist by [F1]. [F1, algebra]

2.1 Interpret a matrix-valued contour integral entrywise; each entry of the resolvent and derivative integrands is continuous on $\Gamma$, so its scalar integral exists by [F4]. Finite matrix sums and constant left and right factors commute with this integral, and the Frobenius norm of an integral is at most the contour length times the supremum Frobenius norm of its integrand, by the triangle inequality for finite-dimensional Riemann sums. Integrating each diagonal entry and using [F3], linearity in [F4], and the finite spectral expansion gives $\frac1{2\pi i}\int_\Gamma R_H(z)\,dz=U\operatorname{diag}(1,\ldots,1,0,\ldots,0)U^*=\Pi_r(H).$ Thus the contour expression represents the full occupied cluster projector, including repeated eigenvalues within that cluster. [step 1.1, F3, F4, algebra]

3.1 For any matrix $A$ and matrix $X$ with columns $x_j$, the operator-norm definition gives $\|AX\|_F^2=\sum_j\|Ax_j\|_2^2\le\|A\|_{op}^2\|X\|_F^2$. Applying this also to adjoints gives the right-multiplication bound $\|XB\|_F\le\|X\|_F\|B\|_{op}$. Iterating these inequalities, then using [F1] and [F6], bounds the Frobenius norm of the right side by $(4/g)^3\|E\|_F^2$, uniformly for $z\in\Gamma$. The matrix-valued integral estimate in step 2.1 bounds the integrated remainder by $\ell(\Gamma)(4/g)^3\|E\|_F^2/(2\pi)$. Dividing by $\|E\|_F$ makes this tend to zero, so the contour formula in step 2.1 is Frechet differentiable in the sense of [F5], with the stated derivative; the integral is real-linear in $E$ by entrywise linearity. Each directional derivative is a limit of Hermitian difference quotients, so it is Hermitian-valued because $\mathbb H_n$ is closed. [step 2.1, F1, F4, F5, F6, algebra]

4.1 The same left/right multiplication inequalities give $\|R_H(z)ER_H(z)\|_F\le(4/g)^2\|E\|_F$ by [F1] and [F6]. Integrating over length $2\pi R$ yields $\|D\Pi_r(H)[E]\|_F\le R(4/g)^2\|E\|_F=16R\|E\|_F/g^2$. For nearby $H'$ in the ball, the resolvent identity and [F1] give uniformly on $\Gamma$ $\|R_{H'}-R_H\|_{op}\le(4/g)^2\|H'-H\|_{op}$. Subtracting the two derivative integrands gives $R_{H'}E(R_{H'}-R_H)+(R_{H'}-R_H)ER_H$. Each summand has Frobenius norm at most $(4/g)^3\|H'-H\|_F\|E\|_F$ by the left/right multiplication bounds and [F6], so their sum is at most twice this quantity. The matrix-valued integral estimate from step 2.1 then bounds the difference of derivative values by $2R(4/g)^3\|H'-H\|_F\|E\|_F$. Taking the supremum over $\|E\|_F=1$ shows that the derivative varies continuously in operator norm, which by [F7] proves the claimed $C^1$ regularity; the bound was proved above. [F1, F4, F5, F6, F7, algebra] ∎
