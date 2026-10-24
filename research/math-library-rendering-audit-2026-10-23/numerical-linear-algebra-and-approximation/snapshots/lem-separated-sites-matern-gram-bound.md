---
id: lem-separated-sites-matern-gram-bound
kind: lemma
title: "Separated Matérn sites have a positive Gram lower bound"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-rbf-kernels-sites-and-augmented-interpolation
  - def-normalized-matern-spectral-kernel
  - lem-matern-spectral-integral-and-normalization
  - thm-linear-change-of-variables-for-lebesgue-measure
  - lem-euclidean-balls-have-positive-finite-lebesgue-measure
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - thm-lebesgue-measure-is-a-complete-measure
  - lem-smooth-bump-between-concentric-euclidean-balls
  - cor-rayleigh-quotient-extreme-eigenvalue-characterisation
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - lem-symmetric-matrix-operator-norm-rayleigh
  - def-induced-matrix-p-norm
  - def-condition-number-of-a-nonsingular-linear-system
  - def-countable-choice
  - thm-integral-triangle-inequality
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - def-schwartz-space-and-its-seminorms
  - thm-fourier-transform-maps-schwartz-space-continuously-to-itself
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-real-power-continuity-and-derivatives
  - cor-mean-value-theorem
  - thm-real-power-laws
  - thm-p-series-real-exponents
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Narcowich, Ward, and Wendland, Sobolev bounds on functions with
        scattered zeros, Math. Comp. 74 (2005), §3.1"
      url: "https://www.researchgate.net/publication/220577178_Sobolev_bounds_on_func\
        tions_with_scattered_zeros_with_applications_to_radial_basis_function_s\
        urface_fitting"
    - title: "Gregory E. Fasshauer, MATH 590: Meshfree Methods, Chapter 13, pp. 34–36"
      url: "https://math.iit.edu/~fass/Notes590_Ch13Print.pdf"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. Fix $d\ge1$, $\nu>0$, $a>0$, $s=\nu+d/2$, and the normalized Matérn kernel with spectral density $w(\xi)=A(a^2+4\pi^2|\xi|^2)^{-s}$ from [[def-normalized-matern-spectral-kernel]]. For a list of $N\ge2$ distinct sites $X=(x_1,\ldots,x_N)\subset\mathbb R^d$, put $q=\tfrac12\min_{i\ne j}|x_i-x_j|$. There is $c=c(d,\nu,a)>0$ such that if $0<q\le1$, then
$$\lambda_{\min}(K_X)\ge c q^{2\nu},\qquad \lambda_{\max}(K_X)\le N,\qquad \kappa_2(K_X)\le c^{-1}Nq^{-2\nu}.$$
The eigenvalues and condition number are those of the exact real symmetric positive-definite matrix. For $N=1$, $K_X=[1]$ and $\kappa_2(K_X)=1$.

## Facts & Assumptions

**Given:** Countable Choice, fixed Matérn parameters, $N\ge2$ distinct sites, and $0<q\le1$.

[F1] The spectral density is positive, $w(\xi)=A(a^2+4\pi^2|\xi|^2)^{-s}$, and $k(z)=\int w(\xi)e^{2\pi iz\cdot\xi}d\xi$. ([[def-normalized-matern-spectral-kernel]], [[lem-matern-spectral-integral-and-normalization]])

[F2] The Matérn kernel is real and even, with $k(0)=1$, so its Gram matrix is real symmetric and every diagonal entry is one. ([[lem-matern-spectral-integral-and-normalization]])

[F3] Linear changes of variables scale Lebesgue measure by the absolute determinant; balls are measurable with positive finite measure, translations preserve measure, and Lebesgue measure is finitely additive on disjoint measurable sets. ([[thm-linear-change-of-variables-for-lebesgue-measure]], [[lem-euclidean-balls-have-positive-finite-lebesgue-measure]], [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]], [[thm-lebesgue-measure-is-a-complete-measure]])

[F4] For a real symmetric matrix, its smallest and largest eigenvalues are the minimum and maximum Rayleigh quotients. ([[cor-rayleigh-quotient-extreme-eigenvalue-characterisation]], [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]])

[F5] A smooth bump can be chosen equal to one on the half-radius ball and supported in the unit ball. ([[lem-smooth-bump-between-concentric-euclidean-balls]], [[lem-euclidean-balls-have-positive-finite-lebesgue-measure]])

[F6] The induced matrix 2-norm of a symmetric matrix is its largest absolute eigenvalue. ([[lem-symmetric-matrix-operator-norm-rayleigh]], [[def-induced-matrix-p-norm]])

[F7] The nonnegative integral is monotone and the modulus of an integral is bounded by the integral of the modulus. ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[thm-integral-triangle-inequality]])

[F8] Smooth compactly supported functions are Schwartz, and the negative-sign, $2\pi$-normalized Fourier transform maps Schwartz functions to Schwartz functions. ([[def-schwartz-space-and-its-seminorms]], [[thm-fourier-transform-maps-schwartz-space-continuously-to-itself]])

[F9] Euler's formula gives $|e^{it}|=1$ for real $t$ and $\overline{e^{it}}=e^{-it}$. ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]])

[F10] For $s>0$, $r\mapsto r^s$ is increasing on $(0,\infty)$ by its positive derivative and the mean value theorem, so $0<x\le y$ implies $x^{-s}\ge y^{-s}$; positive-base power laws also give $(r^{-2})^{-s}=r^{2s}$. ([[thm-real-power-continuity-and-derivatives]], [[cor-mean-value-theorem]], [[thm-real-power-laws]])

[F11] The positive p-series $\sum_{n\ge1}n^{-p}$ converges for $p>1$. ([[thm-p-series-real-exponents]])

[A1] Countable Choice is inherited from the spectral normalization, ball and Lebesgue measure, and Schwartz Fourier-transform suppliers; no choice of sites or window functions is made from an arbitrary family. ([[def-countable-choice]])



**Proof technique:** localized spectral window, packing, and Rayleigh quotients.

## Proof

**Proof technique:** localized spectral window, packing, and Rayleigh quotients.

**Given:** The hypotheses above.

1.1 By [F5] choose a smooth function $\rho:\mathbb R^d\to[0,1]$ equal to one on $\overline B(0,1/2)$ and supported in $B(0,1)$. Set $\eta(\xi)=(\rho(\xi)+\rho(-\xi))/2$. Then $\eta$ is smooth, even, nonnegative, at most one, still equals one on the half-radius ball, and is supported in the unit ball. Define $\psi(z)=\int\eta(\xi)e^{2\pi iz\cdot\xi}d\xi$. Reflection invariance of Lebesgue measure [F3] and Euler's formula [F9] make $\psi$ real and even, and monotonicity [F7] gives $\psi(0)=\int\eta\ge\lambda(B(0,1/2))>0$. [F3, F5, F7, F9, A1, algebra, choose]

2.1 Since $\eta$ is smooth and compactly supported, it is Schwartz by [F8], so $\widehat\eta$ is Schwartz and $\psi(z)=\widehat\eta(-z)$ is Schwartz as well. For $|z|\ge1$, choose a coordinate $j$ with $|z_j|\ge|z|/\sqrt d$; the Schwartz seminorm $\sup_\xi|\xi_j^M\widehat\eta(\xi)|<\infty$ gives $|\psi(z)|\le C_M|z|^{-M}$. For $|z|\le1$, [F7] and $|e^{2\pi iz\cdot\xi}|=1$ from [F9] give $|\psi(z)|\le\int\eta$. Combining the two bounds yields $|\psi(z)|\le C'_M(1+|z|)^{-M}$. [F7, F8, F9, step 1.1, algebra]

3.1 Fix $i$. The open balls $B(x_j,q)$ are pairwise disjoint because center distances are at least $2q$. If $n\le|x_i-x_j|/q<n+1$, then $B(x_j,q)\subset B(x_i,(n+2)q)$. Translation invariance and dilation change of variables in [F3] give $\lambda(B(x,r))=r^d\lambda(B(0,1))$; this unit-ball measure is finite and positive. Finite additivity on the disjoint balls therefore bounds the number of such $j$ by $(n+2)^d$. Hence, for any integer $M>d+1$ and $T\ge1$, [step 2.1] yields the uniform row-sum estimate $$\sum_{j\ne i}\left|\psi\!\left(T(x_i-x_j)/q\right)\right|\le C_MT^{-M}\sum_{n\ge1}(n+2)^dn^{-M}.$$ For $n\ge1$, $(n+2)^d\le3^dn^d$, so this series is bounded by $3^d\sum_{n\ge1}n^{-(M-d)}$, which converges by [F11] because $M-d>1$. Choose one fixed $T$ large enough that this upper bound is at most $\psi(0)/2$. [F3, F11, A1, step 2.1, given, choose]

4.1 For any $c\in\mathbb C^N$, the quadratic form of $H_{ij}=\psi(T(x_i-x_j)/q)$ satisfies $$c^*Hc\ge\left(\psi(0)-\max_i\sum_{j\ne i}|H_{ij}|\right)\|c\|_2^2\ge\frac{\psi(0)}2\|c\|_2^2,$$ because each off-diagonal pair is bounded using $2|c_i||c_j|\le|c_i|^2+|c_j|^2$. By the change of variables $\zeta=(q/T)\xi$, $$\int_{|\xi|\le T/q}\left|\sum_jc_je^{-2\pi ix_j\cdot\xi}\right|^2d\xi\ge\int\eta(q\xi/T)\left|\sum_jc_je^{-2\pi ix_j\cdot\xi}\right|^2d\xi=(T/q)^d c^*Hc.$$ The first inequality uses $0\le\eta\le1$ and support in the unit ball. [F3, step 3.1, algebra]

5.1 On $|\xi|\le T/q$ and $q\le1$, set $B=(a^2+4\pi^2T^2)q^{-2}$. Then $a^2+4\pi^2|\xi|^2\le a^2+4\pi^2T^2/q^2\le B$. Monotonicity and the power laws [F10] give $$w(\xi)\ge A B^{-s}=A\left(a^2+4\pi^2T^2\right)^{-s}q^{2s}.$$ Using the Fourier quadratic-form identity from [F1] and step 4.1 gives $c^*K_Xc\ge c_0q^{2s-d}\|c\|_2^2=c_0q^{2\nu}\|c\|_2^2$ for a constant $c_0>0$ independent of $X,q,N$. Thus [F4] yields $\lambda_{\min}(K_X)\ge c_0q^{2\nu}$. [F1, F4, F10, step 4.1, algebra]

6.1 By [F4], choose an orthonormal eigenbasis and write $K_X=Q\Lambda Q^{\mathsf T}$. If $Q=(q_{ij})$, then $$\operatorname{tr}(K_X)=\sum_i(K_X)_{ii}=\sum_{i,j}q_{ij}^2\lambda_j=\sum_j\lambda_j=N,$$ since each column of $Q$ has unit norm and [F2] gives diagonal entries $k(0)=1$. By step 5.1 all eigenvalues are positive, so $\lambda_{\max}(K_X)\le N$. In this eigenbasis the induced 2-norms of $K_X$ and $K_X^{-1}$ are $\lambda_{\max}$ and $1/\lambda_{\min}$, respectively, by [F6]. The definition $\kappa_2(K_X)=\|K_X\|_2\|K_X^{-1}\|_2$ therefore gives $\kappa_2(K_X)\le c^{-1}Nq^{-2\nu}$. The $N=1$ case follows directly from $k(0)=1$ and the same definition. [F2, F4, F6, step 5.1, algebra] ∎
