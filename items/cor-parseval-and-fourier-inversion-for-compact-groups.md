---
id: cor-parseval-and-fourier-inversion-for-compact-groups
kind: corollary
title: Parseval and Fourier inversion for compact groups
deps:
- thm-l2-peter-weyl-orthonormal-basis
- lem-l1-action-of-a-unitary-representation
- def-normalized-irreducible-matrix-coefficient-basis
- def-hilbert-schmidt-operator
- thm-schur-orthogonality-for-compact-groups
- thm-hilbert-space-fourier-expansion
- thm-parseval-equivalences-for-a-complete-orthonormal-family
- def-complex-haar-lp-spaces-and-compactly-supported-functions
- def-bochner-integrable-function
- thm-bochner-integrability-criterion
- lem-bochner-integral-norm-inequality
- def-axiom-of-choice
- thm-bounded-linear-maps-commute-with-bochner-integration
- def-representative-function-on-a-compact-group
- def-matrix-coefficient-of-a-unitary-representation
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (author-hosted draft, 338 pp.)
    url: https://people.math.ethz.ch/~kowalski/representation-theory.pdf
    locator: Corollary 5.4.8(3) and Theorem 5.5.1(2)-(3), printed pp. 235–242
  - title: David A. Vogan, Review of Harmonic Analysis on Compact Groups (MIT lecture notes, 12 pp.)
    url: https://math.mit.edu/~dav/compactrev.pdf
    locator: Theorem 2.13(4) and Corollary 2.16, printed pp. 9–11
  - title: Constantin Teleman, Representation Theory (Berkeley lecture notes, 60 pp.)
    url: https://math.berkeley.edu/~teleman/math/RepThry.pdf
    locator: §§19.6–19.7, printed p. 43
status: published
origin: pipeline
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $K$ be a compact Hausdorff group with normalized Haar probability $\mu$, with normalized matrix coefficient family $\mathcal B=(u^\pi_{ij})$ ([[def-normalized-irreducible-matrix-coefficient-basis]]). For $f\in L^2(K)$ and each $\pi\in\widehat K$ put $\pi(f):=\int_Kf(k)\pi(k)^{-1}\,d\mu(k)\in\operatorname{End}(H_\pi)$ (the $L^1$ action of [[lem-l1-action-of-a-unitary-representation]] applied to the reflected representative).

1. **Parseval/Plancherel.** For every $f\in L^2(K)$, $\sum_{\pi\in\widehat K}\sum_{i,j=1}^{d_\pi}|\langle f,u^\pi_{ij}\rangle|^2=\|f\|_2^2$, equivalently $\sum_{\pi\in\widehat K}d_\pi\,\|\pi(f)\|_{HS}^2=\|f\|_2^2$, where $\|\cdot\|_{HS}$ is the Hilbert–Schmidt norm ([[def-hilbert-schmidt-operator]]).
2. **Fourier inversion in $L^2$.** The finite-subset net of spectral partial sums $\sum_{\pi,i,j}\langle f,u^\pi_{ij}\rangle\,u^\pi_{ij}$ converges to $f$ in $L^2(K)$.
3. **Exactness on the coefficient algebra.** If $f\in R(K)$ is a finite linear combination of the $u^\pi_{ij}$, its expansion is that finite sum and equals $f$ pointwise; in particular no uniform convergence of partial sums is asserted for arbitrary continuous $f$.

## Facts & Assumptions

[F1] $L^2(K,\mu;\mathbb C)\subseteq L^1(K,\mu;\mathbb C)$ because $2|f|\le|f|^2+1$ and $\mu(K)=1$, and the coefficients are $\langle f,u^\pi_{ij}\rangle=\int_Kf(k)\overline{u^\pi_{ij}(k)}\,d\mu(k)$ with $u^\pi_{ij}(k)=\sqrt{d_\pi}\langle\pi(k)e^\pi_i,e^\pi_j\rangle$ and $c^{\pi}_{v,w}(k)=\langle\pi(k)v,w\rangle$ linear in the first argument. ([[def-complex-haar-lp-spaces-and-compactly-supported-functions]], [[def-normalized-irreducible-matrix-coefficient-basis]], [[def-matrix-coefficient-of-a-unitary-representation]])

[F2] A strongly measurable Banach-valued function with finite norm integral is Bochner integrable, the norm of the integral is at most the integral of the norm, and every bounded linear operator commutes with the Bochner integral. ([[thm-bochner-integrability-criterion]], [[lem-bochner-integral-norm-inequality]], [[thm-bounded-linear-maps-commute-with-bochner-integration]])

[F3] The normalized family $\mathcal B=(u^\pi_{ij})$ is an orthonormal basis of $L^2(K)$: it is orthonormal, its closed linear span is $L^2(K)$, and consequently the Parseval identity $\sum_{\pi,i,j}|\langle f,u^\pi_{ij}\rangle|^2=\|f\|_2^2$ holds and the finite-subset net of partial sums $\sum_{\pi,i,j}\langle f,u^\pi_{ij}\rangle u^\pi_{ij}$ converges to $f$ in $L^2(K)$ for every $f$. ([[thm-l2-peter-weyl-orthonormal-basis]], [[thm-parseval-equivalences-for-a-complete-orthonormal-family]], [[thm-hilbert-space-fourier-expansion]])

[F4] For an operator on a finite-dimensional Hilbert space with orthonormal basis $e_1,\dots,e_d$, expansion in that basis gives the Hilbert–Schmidt square-sum $\|T\|_{HS}^2=\sum_{i=1}^d\|Te_i\|^2=\sum_{i,j=1}^d|\langle Te_i,e_j\rangle|^2$. ([[def-hilbert-schmidt-operator]])

[F5] $R(K)$ is the linear span of the matrix coefficients of finite-dimensional continuous unitary representations of $K$, hence consists of continuous functions. ([[def-representative-function-on-a-compact-group]])

## Proof

**Given:** AC, a compact Hausdorff group $K$ with normalized Haar probability $\mu$, the normalized family $\mathcal B$, and a class $f\in L^2(K,\mu;\mathbb C)$.

1.1 The map $k\mapsto f(k)\pi(k)^{-1}$ into the finite-dimensional Banach space $\operatorname{End}(H_\pi)$ is strongly measurable: its finitely many matrix entries are products of a measurable scalar function with continuous scalar functions, and finite-valued measurable approximations to those entries give simple approximations to the operator-valued map. Its operator norm is $|f(k)|$, so [F1] gives $\int_K\|f(k)\pi(k)^{-1}\|\,d\mu(k)=\|f\|_1<\infty$. The criterion and norm inequality [F2] therefore define $\pi(f)=\int_Kf(k)\pi(k)^{-1}\,d\mu(k)$ with $\|\pi(f)\|\le\|f\|_1$. Applying the bounded linear functional $T\mapsto\langle Te^\pi_j,e^\pi_i\rangle$ and [F2] gives $\langle\pi(f)e^\pi_j,e^\pi_i\rangle=\int_Kf(k)\langle\pi(k)^{-1}e^\pi_j,e^\pi_i\rangle\,d\mu(k)=\int_Kf(k)\overline{\langle\pi(k)e^\pi_i,e^\pi_j\rangle}\,d\mu(k)=\frac{1}{\sqrt{d_\pi}}\langle f,u^\pi_{ij}\rangle$, where unitarity gives the second equality. [F1, F2]

2.1 By step 1.1 and [F4], $\sum_{i,j}|\langle f,u^\pi_{ij}\rangle|^2=d_\pi\sum_{i,j}|\langle\pi(f)e^\pi_j,e^\pi_i\rangle|^2=d_\pi\|\pi(f)\|_{HS}^2$ for every class $\pi$, and the Parseval identity of the orthonormal basis [F3] gives $\sum_{\pi,i,j}|\langle f,u^\pi_{ij}\rangle|^2=\|f\|_2^2$; substituting the first identity into the second yields $\sum_{\pi}d_\pi\|\pi(f)\|_{HS}^2=\|f\|_2^2$, so the two forms of (1) are equivalent and both hold. [F3, F4, step 1.1]

3.1 The Parseval identity of step 2.1 is, by the equivalences for a complete orthonormal family [F3], equivalent to the convergence of the finite-subset net of partial sums $\sum_{\pi,i,j}\langle f,u^\pi_{ij}\rangle u^\pi_{ij}$ to $f$ in $L^2(K)$, which is (2); and if $f=\sum_{a\in F}c_au_a$ is a finite linear combination of basis elements $u_a\in\mathcal B$, then orthonormality of $\mathcal B$ gives $\langle f,u_a\rangle=c_a$ for $a\in F$ and $\langle f,u_b\rangle=0$ for $b\notin F$, so the expansion is the same finite sum and equals $f$ as a function at every point, which is (3); no uniform convergence is claimed for arbitrary continuous $f$, since the argument uses only the $L^2$ basis property. The Axiom of Choice is inherited through the fixed representatives and bases and the cited suppliers. [F3, F5, step 2.1] ∎
