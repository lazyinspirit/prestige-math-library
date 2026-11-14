---
title: Quantitative preparation-tail and waiting-time condition
status: published
research_item: lem-qec-author-42f4c98e5e20-ule-preparation-tail
dependency_level: 3
---

## Prerequisites

- [lem-qec-author-42f4c98e5e20-ule-normalization](item-lem-qec-author-42f4c98e5e20-ule-normalization)
- [lem-qec-author-42f4c98e5e20-ule-correlation-moment](item-lem-qec-author-42f4c98e5e20-ule-correlation-moment)
- [math:cor-finite-dimensional-normed-spaces-are-banach](https://alphabetamath.cc/item/cor-finite-dimensional-normed-spaces-are-banach)
- [math:def-strongly-measurable-banach-valued-function](https://alphabetamath.cc/item/def-strongly-measurable-banach-valued-function)
- [math:def-bochner-integrable-function](https://alphabetamath.cc/item/def-bochner-integrable-function)
- [math:thm-bochner-integrability-criterion](https://alphabetamath.cc/item/thm-bochner-integrability-criterion)
- [math:lem-bochner-integral-norm-inequality](https://alphabetamath.cc/item/lem-bochner-integral-norm-inequality)
- [math:def-qc-density-operator](https://alphabetamath.cc/item/def-qc-density-operator)
- [math:thm-complex-spectral-theorem-for-normal-endomorphisms](https://alphabetamath.cc/item/thm-complex-spectral-theorem-for-normal-endomorphisms)
- [math:prop-order-and-scalar-rules-for-the-nonnegative-integral](https://alphabetamath.cc/item/prop-order-and-scalar-rules-for-the-nonnegative-integral)
- [math:thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions](https://alphabetamath.cc/item/thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)


## Statement

Use the normalized kernel and correlation-moment lemma under their hypotheses. Assume countable choice for the scalar change-of-variables theorem used below. Fix an integer $d\geq1$ and put $V=M_d(\mathbb C)$, with spectral operator norm $\|A\|=\sup_{\|x\|_2\leq1}\|Ax\|_2$. Let $E$ be the space of complex-linear maps $V\to V$, with induced norm $\|T\|=\sup_{\|A\|\leq1}\|T(A)\|$. Fix $t>t_0$. Assume that $s\mapsto\Delta(t,s)\in E$ is strongly measurable on $(-\infty,t_0]$ with respect to Lebesgue measure, and that $\|\Delta(t,s)\|\leq4\gamma\|C(t-s)\|_{\mathrm{ent}}$ almost everywhere there. Retain the convolution hypothesis of the moment lemma. Then the preparation-tail map $D_T(t)=-\int_{-\infty}^{t_0}\Delta(t,s)\,ds$ exists as a Bochner integral in $E$ and obeys $\|D_T(t)\|\leq\Gamma\tau/(t-t_0)$.

For any density operator $\rho$ on $\mathbb C^d$, identified with its matrix in the standard orthonormal basis, and any $\varepsilon>0$, the condition $t-t_0\geq1/(\varepsilon\Gamma)$ implies $\|D_T(t)(\rho)\|\leq\varepsilon\Gamma^2\tau$.

## Facts & Assumptions

[F1] The normalization lemma defines $\Gamma>0$ and $\tau\geq0$. [lem-qec-author-42f4c98e5e20-ule-normalization](item-lem-qec-author-42f4c98e5e20-ule-normalization)

[F2] Under the convolution premise, the nonnegative measurable function $u\mapsto\|C(u)\|_{\mathrm{ent}}$ satisfies $4\gamma\int_0^\infty u\|C(u)\|_{\mathrm{ent}}du\leq\Gamma\tau$. [lem-qec-author-42f4c98e5e20-ule-correlation-moment](item-lem-qec-author-42f4c98e5e20-ule-correlation-moment)

[F3] A real or complex normed space with an ordered finite basis is Banach. The space $E$ above has the $d^4$ coordinate maps that send one standard matrix unit to one standard matrix unit and all other matrix units to zero as an ordered basis. [math:cor-finite-dimensional-normed-spaces-are-banach](https://alphabetamath.cc/item/cor-finite-dimensional-normed-spaces-are-banach)

[F4] Strong measurability means almost-everywhere norm convergence of measurable simple functions. A Bochner integral is the norm limit of the integrals of integrable simple approximants converging in $L^1$. [math:def-strongly-measurable-banach-valued-function](https://alphabetamath.cc/item/def-strongly-measurable-banach-valued-function) [math:def-bochner-integrable-function](https://alphabetamath.cc/item/def-bochner-integrable-function)

[F5] For a strongly measurable Banach-valued function $f$, finiteness of $\int\|f\|$ is equivalent to Bochner integrability, and $\|\int f\|\leq\int\|f\|$. [math:thm-bochner-integrability-criterion](https://alphabetamath.cc/item/thm-bochner-integrability-criterion) [math:lem-bochner-integral-norm-inequality](https://alphabetamath.cc/item/lem-bochner-integral-norm-inequality)

[F6] A density operator on a nonzero finite-dimensional complex inner-product space is a non-negative endomorphism of trace one; in an orthonormal basis its matrix is Hermitian positive semidefinite. [math:def-qc-density-operator](https://alphabetamath.cc/item/def-qc-density-operator)

[F7] The nonnegative integral is monotone and positively homogeneous. Under countable choice, a $C^1$ diffeomorphism $T:U\to W$ between open subsets of Euclidean space satisfies $\int_W f(u)du=\int_U f(T(s))|\det DT(s)|ds$ for nonnegative Lebesgue measurable $f$. [math:prop-order-and-scalar-rules-for-the-nonnegative-integral](https://alphabetamath.cc/item/prop-order-and-scalar-rules-for-the-nonnegative-integral) [math:thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions](https://alphabetamath.cc/item/thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions)

[F8] A normal endomorphism of a finite-dimensional complex inner-product space admits an orthonormal eigenbasis. [math:thm-complex-spectral-theorem-for-normal-endomorphisms](https://alphabetamath.cc/item/thm-complex-spectral-theorem-for-normal-endomorphisms)

[A1] Assume countable choice: every sequence of nonempty sets has a choice function. It is used here in the scalar change-of-variables supplier in [F7]. [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

## Proof

**Given:** The stated kernel, correlation and strong-measurability hypotheses, countable choice, and $D=t-t_0>0$. **Goal:** Establish existence of the tail map and both quantitative bounds.

1.1 Apply [F7] to $T(s)=t-s$ from $(-\infty,t_0)$ to $(D,\infty)$; it is a $C^1$ diffeomorphism with $|\frac{dT}{ds}(s)|=1$. Endpoints have Lebesgue measure zero. Domination, substitution and monotonicity therefore give $\int_{-\infty}^{t_0}\|\Delta(t,s)\|ds\leq4\gamma\int_D^\infty\|C(u)\|_{\mathrm{ent}}du\leq(4\gamma/D)\int_0^\infty u\|C(u)\|_{\mathrm{ent}}du\leq\Gamma\tau/D<\infty$, using $1\leq u/D$ for $u\geq D$. The norm integrand is measurable up to a null set by strong measurability, as in [F5]. [given, F2, F7, A1, F5]

2.1 By [F3], $E$ is Banach. Strong measurability and the finite norm integral in step 1.1 allow [F5] to be applied in $E$, so the Bochner integral defining $D_T(t)$ exists in the sense of [F4]. Its norm is at most $\int_{-\infty}^{t_0}\|\Delta(t,s)\|ds\leq\Gamma\tau/D$. [given, F3, F4, F5, step 1.1]

3.1 By [F6], $\rho$ is Hermitian positive semidefinite with trace one. Apply [F8] to this normal matrix. Its eigenvalues $\lambda_j$ are nonnegative, since its quadratic form on a unit eigenvector is $\lambda_j$, and their sum is its trace, namely one. Thus $0\leq\lambda_j\leq1$. For a vector with coordinates $x_j$ in the orthonormal eigenbasis, $\|\rho x\|_2^2=\sum_j\lambda_j^2|x_j|^2\leq\sum_j|x_j|^2=\|x\|_2^2$, giving $\|\rho\|\leq1$. By the induced map norm, $\|D_T(t)(\rho)\|\leq\|D_T(t)\|\|\rho\|\leq\Gamma\tau/D$. If $D\geq1/(\varepsilon\Gamma)$, this is at most $\varepsilon\Gamma^2\tau$, also when $\tau=0$. This bounds the stated transient map and does not assert a uniform bound between evolved trajectories. [given, F1, F6, F8, step 2.1, algebra] ∎
