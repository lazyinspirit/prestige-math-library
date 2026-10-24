---
id: lem-sigma-series-cauchy-adjoint-and-reproducing-kernel-identities
kind: lemma
title: "The series $\\sigma$: product formula, Cauchy identity, adjunction and reproducing kernel"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 4
deps: [def-lambda-ring-specializations-and-the-sigma-series,
       lem-schur-specialization-coproduct-and-plethysm-identities,
       def-hall-inner-product-on-symmetric-functions,
       def-stable-schur-function-by-bialternants,
       thm-schur-functions-form-an-orthonormal-integral-basis,
       thm-cauchy-kernel-has-power-complete-and-schur-expansions,
       lem-complete-homogeneous-expansion-in-power-sums,
       def-power-sum-and-complete-homogeneous-symmetric-polynomials,
       thm-newtons-identities,
       thm-fundamental-theorem-of-symmetric-polynomials,
       prop-power-sums-form-a-rational-not-integral-stable-basis,
       cor-power-sums-are-orthogonal-for-the-hall-inner-product,
       def-bidegree-completed-symmetric-function-tensor-product,
       def-stable-graded-ring-of-symmetric-functions,
       thm-monomial-symmetric-functions-form-the-integral-stable-basis,
       thm-monomial-symmetric-polynomials-form-a-basis,
       thm-littlewood-richardson-schur-product-expansion,
       def-littlewood-richardson-tableau-and-coefficient]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emmanuel Briand, Amarpreeet Rattan and Mercedes Rosas, On the growth of the Kronecker coefficients, arXiv:1607.02887v1 (2016); Lemma 2.1 and section 2.4, pp. 5-7 (the series sigma, Cauchy-type identities and the adjoint operator)"
      url: "https://arxiv.org/pdf/1607.02887"
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Oxford University Press 1995; Chapter I sections 2, 4 and 5 (complete functions, Hall inner product, adjoint operators)"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
---

## Statement

Let $\sigma[X]=\sum_{n\ge0}h_n[X]$ be the series of
[[def-lambda-ring-specializations-and-the-sigma-series]], and let
$\langle\ ,\ \rangle_H$ be the Hall form
([[def-hall-inner-product-on-symmetric-functions]]).

1. $\sigma[X]=\prod_{x\in X}(1-x)^{-1}$ and
   $\sigma[-X]=\prod_{x\in X}(1-x)$ for honest alphabets $X$; in particular
   $\sigma[t]=(1-t)^{-1}$ and $\sigma[-t]=1-t$ for the one-letter alphabet
   $t$, as formal series in $t$.
2. $\sigma[A+B]=\sigma[A]\,\sigma[B]$ for all specializations $A,B$, and for
   the one-letter alphabet $t$ one has $\sigma[tA]=\sum_{n\ge0}t^nh_n[A]$.
3. Cauchy identity: $\sigma[XY]=\sum_\lambda s_\lambda[X]s_\lambda[Y]
   =\sum_\lambda z_\lambda^{-1}p_\lambda[X]p_\lambda[Y]$ for all
   specializations $X,Y$, summed by degree.
4. For every specialization $A$, the operator $\sigma[AX^{\perp}]$ is the
   adjoint of multiplication by $\sigma[AX]$:
   $\sigma[AX^{\perp}]f[X]=f[X+A]$ for all $f\in\Lambda$.
5. Reproducing kernel:
   $\langle\sigma[AX]\,|\,f[X]\rangle_X=f[A]$ for all $f\in\Lambda$ and all
   specializations $A$.

## Facts & Assumptions

**Given:** Specializations $A,B,U,X,Y$ into commutative $\mathbb Q$-algebras, a partition $\lambda$, and integers $d,n\ge0$.

[F1] Specializations are the algebra homomorphisms determined by arbitrary power-sum values, with $p_k[A+B]=p_k[A]+p_k[B]$, $p_k[AB]=p_k[A]p_k[B]$, $p_k[tA]=t^kp_k[A]$, and $X^{\perp}$ the specialization $f[X^{\perp}]=f^{\perp}$, where $f^{\perp}$ is the adjoint of multiplication by $f$; $\sigma[X]=\sum_nh_n[X]$ ([[def-lambda-ring-specializations-and-the-sigma-series]]).

[F2] $h_n=\sum_{\lambda\vdash n}p_\lambda/z_\lambda$, and at every honest alphabet $\sum_n\bigl(\sum_{\lambda\vdash n}(-1)^{\ell(\lambda)}p_\lambda/z_\lambda\bigr)t^n=\prod_x(1-xt)$; also $h_k[t]=t^k$ and $e_n[t]=0$ for $n\ge2$ on the one-letter alphabet $t$ ([[lem-complete-homogeneous-expansion-in-power-sums]], [[def-power-sum-and-complete-homogeneous-symmetric-polynomials]]).

[F3] Newton's identities and the fundamental theorem of symmetric polynomials: $ke_k=\sum_{i=1}^k(-1)^{i-1}e_{k-i}p_i$ over $\mathbb Q$, and substitution $T_k\mapsto e_k$ is an isomorphism from a polynomial ring onto the symmetric polynomials in $n$ variables ([[thm-newtons-identities]], [[thm-fundamental-theorem-of-symmetric-polynomials]]).

[F4] $\Lambda_{\mathbb Q}=\mathbb Q[p_1,p_2,\dots]$ with $\{p_\lambda:\lambda\vdash d\}$ a basis of $\Lambda_{\mathbb Q}^d$; the power sums are orthogonal, $\langle p_\rho,p_\sigma\rangle_H=\delta_{\rho\sigma}z_\rho$, and the Schur functions are orthonormal, $\langle s_\lambda,s_\mu\rangle_H=\delta_{\lambda\mu}$ ([[prop-power-sums-form-a-rational-not-integral-stable-basis]], [[cor-power-sums-are-orthogonal-for-the-hall-inner-product]], [[thm-schur-functions-form-an-orthonormal-integral-basis]], [[def-stable-schur-function-by-bialternants]]).

[F5] In the bidegree completion the Cauchy kernel satisfies $\Omega(X,Y)=\sum_\lambda s_\lambda(X)s_\lambda(Y)$ and $\Omega(X,Y)=\sum_\lambda z_\lambda^{-1}p_\lambda(X)p_\lambda(Y)$, by diagonal bidegree; for $N\ge d$ the rank-$N$ projection sends the basis $m_\lambda$ of $\Lambda^d$ to the finite orbit sums, an isomorphism onto the degree-$d$ symmetric polynomials ([[def-bidegree-completed-symmetric-function-tensor-product]], [[thm-cauchy-kernel-has-power-complete-and-schur-expansions]], [[thm-monomial-symmetric-functions-form-the-integral-stable-basis]], [[thm-monomial-symmetric-polynomials-form-a-basis]], [[def-stable-graded-ring-of-symmetric-functions]]).

[F6] $s_\lambda[U+V]=\sum_{\mu,\nu}c^\lambda_{\mu\nu}s_\mu[U]s_\nu[V]$ and $s_\lambda[UV]=\sum_{\mu,\nu}g^\lambda_{\mu\nu}s_\mu[U]s_\nu[V]$ for all specializations, and $\langle s_\lambda,s_\rho s_\mu\rangle_H=c^\lambda_{\rho\mu}$ ([[lem-schur-specialization-coproduct-and-plethysm-identities]], [[thm-littlewood-richardson-schur-product-expansion]], [[def-littlewood-richardson-tableau-and-coefficient]]).

[F7] The adjoints of multiplication operators and of their degreewise sums satisfy $(fg)^{\perp}=f^{\perp}g^{\perp}=g^{\perp}f^{\perp}$ ([[def-lambda-ring-specializations-and-the-sigma-series]]).

## Proof

**Proof technique:** direct.

1.1 *Transfer principle.* Let $d\ge0$. If an identity between polynomials in the values $p_k[X_1],\dots,p_k[X_r]$, $k\le d$, holds for all honest alphabets $X_1,\dots,X_r$ of at least $d$ letters, then it holds for all specializations. Indeed, the substitution $A_k^{(i)}\mapsto p_k(x^{(i)}_1,\dots,x^{(i)}_d)$ from $\mathbb Q[A^{(i)}_k]$ to $\mathbb Q[x^{(1)},\dots,x^{(r)}]$ is injective: by [F3] over $\mathbb Q$ one has $\mathbb Q[e_1,\dots,e_d]=\mathbb Q[p_1,\dots,p_d]$ inside the symmetric polynomials in $d$ variables, and the elementary symmetric polynomials are algebraically independent by the fundamental theorem; tensor products of injective substitutions over the field $\mathbb Q$ are injective. [F3]

2.1 *Product formula and negation (1).* For an honest alphabet $X$, $\sum_nh_n[X]t^n=\prod_{x\in X}(1-xt)^{-1}$ by [F2], so the series $\sigma[X]$ equals $\prod_{x\in X}(1-x)^{-1}$ coefficientwise at $t=1$. Next, $h_n[-U]=(-1)^ne_n[U]$ for every specialization $U$: both sides are polynomials in the values $p_k[U]$, $k\le n$, by [F4], and at honest alphabets the generating function of [F2] gives $\sum_nh_n[-x]t^n=\exp\bigl(-\sum_kp_k(x)t^k/k\bigr)=\prod_x(1-xt)=\sum_n(-1)^ne_n(x)t^n$, so the identity follows from step 1.1 with $d=n$. Hence $\sigma[-U]=\sum_n(-1)^ne_n[U]$, which at an honest alphabet is $\prod_{x\in X}(1-x)$; at the one-letter alphabet $t$, $h_n[-t]=0$ for $n\ge2$ and $h_1[-t]=-t$, so $\sigma[-t]=1-t$, while $h_n[t]=t^n$ gives $\sigma[t]=\sum_nt^n=(1-t)^{-1}$ as a formal series. [F1, F2, F4, step 1.1]

2.2 *Reduction to honest alphabets.* Every value $f[U]$ of $f\in\Lambda_{\mathbb Q}^n$ is the value at $(p_1[U],\dots,p_n[U])$ of a universal polynomial with rational coefficients, by the power-sum basis [F4]; the same holds for $h_n[U+V]$, $h_n[UV]$ and $s_\lambda[U+V]$. Hence by step 1.1 such identities may be verified on honest alphabets with at least $n$ letters, and that is how the remaining steps proceed. [F1, F4, step 1.1]

3.1 *(2) Multiplicativity and the one-letter scaling.* For honest alphabets $X,Y$, $\sum_nh_n[X\sqcup Y]t^n=\prod_{\ell\in X\sqcup Y}(1-\ell t)^{-1}=\bigl(\sum_ih_i[X]t^i\bigr)\bigl(\sum_jh_j[Y]t^j\bigr)$ by [F2], so $h_n[A+B]=\sum_{i+j=n}h_i[A]h_j[B]$ holds on honest alphabets and hence, by step 2.2 with $d=n$, for all specializations; summing over $n$ gives $\sigma[A+B]=\sigma[A]\sigma[B]$. Since $p_k[tA]=t^kp_k[A]$ and $h_n$ is homogeneous of weight $n$ in the power sums, $h_n[tA]=t^nh_n[A]$, so $\sigma[tA]=\sum_nt^nh_n[A]$. [F1, F2, step 2.2]

3.2 *(3) Cauchy identity.* For honest alphabets $X,Y$ and $d\ge0$, apply the degree-$d$ rank-$N$ projection of [F5] (with $N\ge d$) to the two Cauchy expansions of $\Omega$: it produces $h_d[XY]=\sum_{\lambda\vdash d}s_\lambda[X]s_\lambda[Y]=\sum_{\rho\vdash d}z_\rho^{-1}p_\rho[X]p_\rho[Y]$, the outer equality by [F2]. By step 2.2 with $d$, the identity $h_d[XY]=\sum_{\lambda\vdash d}s_\lambda[X]s_\lambda[Y]$ holds for all specializations, and summing over $d$ gives $\sigma[XY]=\sum_\lambda s_\lambda[X]s_\lambda[Y]$ by degree. [F2, F5, step 2.2]

4.1 *(4) Adjointness.* By step 3.2, $\sigma[AX]=\sum_\lambda s_\lambda[A]s_\lambda[X]$, so the adjoint of multiplication by $\sigma[AX]$ is $\sum_\lambda s_\lambda[A]s_\lambda^{\perp}$ degree by degree. On the other hand $p_\rho[X^{\perp}]=p_\rho^{\perp}=\prod_i(p_{\rho_i})^{\perp}=(p_\rho)^{\perp}$ by [F1] and [F7], so $h_n[AX^{\perp}]=\sum_{\rho\vdash n}z_\rho^{-1}p_\rho[A]p_\rho^{\perp}=h_n[AX]^{\perp}$ and $\sigma[AX^{\perp}]=\sigma[AX]^{\perp}$. To evaluate this adjoint, compute on the Schur basis: by [F6], $s_\lambda[X+A]=\sum_{\rho,\nu}c^\lambda_{\rho\nu}s_\rho[X]s_\nu[A]$, so $\langle s_\lambda[X+A],s_\mu[X]\rangle_X=\sum_\nu c^\lambda_{\mu\nu}s_\nu[A]$; and $\langle\sigma[AX]^{\perp}s_\lambda,s_\mu\rangle_X=\langle s_\lambda,\sigma[AX]s_\mu\rangle_X=\sum_\rho s_\rho[A]\langle s_\lambda,s_\rho s_\mu\rangle_X=\sum_\rho c^\lambda_{\rho\mu}s_\rho[A]$ by [F6] and [F4]. The two results agree for every $\mu$, so by nondegeneracy of the Hall form $\sigma[AX^{\perp}]s_\lambda=s_\lambda[X+A]$ for every $\lambda$, and by linearity for all $f$. [F1, F4, F6, F7, step 3.2]

5.1 *(5) Reproducing kernel.* For every partition $\lambda$, $\langle\sigma[AX],s_\lambda[X]\rangle_X=\sum_\mu s_\mu[A]\langle s_\mu[X],s_\lambda[X]\rangle_X=s_\lambda[A]$ by step 3.2 and orthonormality [F4]; by linearity in $f$ this gives $\langle\sigma[AX]\,|\,f[X]\rangle_X=f[A]$ for all $f\in\Lambda$. [F4, step 3.2] ∎
